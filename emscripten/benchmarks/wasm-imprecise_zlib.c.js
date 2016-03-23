function integrateWasmJS(Module) {
 var method = Module["wasmJSMethod"] || Module["wasmJSMethod"] || "native-wasm" || "native-wasm,interpret-s-expr";
 var wasmTextFile = Module["wasmTextFile"] || "wasm-imprecise_zlib.c.wasm";
 var wasmBinaryFile = Module["wasmBinaryFile"] || "wasm-imprecise_zlib.c.wasm";
 var asmjsCodeFile = Module["asmjsCodeFile"] || "wasm-imprecise_zlib.c.asm.js";
 var asm2wasmImports = {
  "f64-rem": (function(x, y) {
   return x % y;
  }),
  "f64-to-int": (function(x) {
   return x | 0;
  }),
  "debugger": (function() {
   debugger;
  })
 };
 var info = {
  global: null,
  env: null,
  asm2wasm: asm2wasmImports,
  parent: Module
 };
 var exports = null;
 function lookupImport(mod, base) {
  var lookup = info;
  if (mod.indexOf(".") < 0) {
   lookup = (lookup || {})[mod];
  } else {
   var parts = mod.split(".");
   lookup = (lookup || {})[parts[0]];
   lookup = (lookup || {})[parts[1]];
  }
  if (base) {
   lookup = (lookup || {})[base];
  }
  if (lookup === undefined) {
   abort("bad lookupImport to (" + mod + ")." + base);
  }
  return lookup;
 }
 function mergeMemory(newBuffer) {
  var oldBuffer = Module["buffer"];
  if (newBuffer.byteLength < oldBuffer.byteLength) {
   Module["printErr"]("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
  }
  var oldView = new Int8Array(oldBuffer);
  var newView = new Int8Array(newBuffer);
  if (0) {
   oldView.set(newView.subarray(STATIC_BASE, STATIC_BASE + STATIC_BUMP), STATIC_BASE);
  }
  newView.set(oldView);
  updateGlobalBuffer(newBuffer);
  updateGlobalBufferViews();
  Module["reallocBuffer"] = (function(size) {
   var old = Module["buffer"];
   exports["__growWasmMemory"](size);
   return Module["buffer"] !== old ? Module["buffer"] : null;
  });
 }
 var WasmTypes = {
  none: 0,
  i32: 1,
  i64: 2,
  f32: 3,
  f64: 4
 };
 function applyMappedGlobals(globalsFileBase) {
  var mappedGlobals = JSON.parse(Module["read"](globalsFileBase + ".mappedGlobals"));
  for (var name in mappedGlobals) {
   var global = mappedGlobals[name];
   if (!global.import) continue;
   var value = lookupImport(global.module, global.base);
   var address = global.address;
   switch (global.type) {
   case WasmTypes.i32:
    Module["HEAP32"][address >> 2] = value;
    break;
   case WasmTypes.f32:
    Module["HEAPF32"][address >> 2] = value;
    break;
   case WasmTypes.f64:
    Module["HEAPF64"][address >> 3] = value;
    break;
   default:
    abort();
   }
  }
 }
 function fixImports(imports) {
  if (!0) return imports;
  var ret = {};
  for (var i in imports) {
   var fixed = i;
   if (fixed[0] == "_") fixed = fixed.substr(1);
   ret[fixed] = imports[i];
  }
  return ret;
 }
 function getBinary() {
  var binary;
  if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
   binary = Module["wasmBinary"];
   assert(binary, "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)");
   binary = new Uint8Array(binary);
  } else {
   binary = Module["readBinary"](wasmBinaryFile);
  }
  return binary;
 }
 function doJustAsm() {
  eval(Module["read"](asmjsCodeFile));
  if (typeof Module["asm"] !== "function") {
   Module["printErr"]("asm evalling did not set the module properly");
   return false;
  }
  return true;
 }
 function doNativeWasm() {
  if (typeof Wasm !== "object") {
   Module["printErr"]("no native wasm support detected");
   return false;
  }
  Module["asm"] = (function(global, env, providedBuffer) {
   global = fixImports(global);
   env = fixImports(env);
   info["global"] = {
    "NaN": NaN,
    "Infinity": Infinity
   };
   info["global.Math"] = global.Math;
   info["env"] = env;
   var instance;
   instance = Wasm.instantiateModule(getBinary(), info);
   exports = instance.exports;
   mergeMemory(exports.memory);
   applyMappedGlobals(wasmBinaryFile);
   return exports;
  });
  return true;
 }
 function doWasmPolyfill(method) {
  if (typeof WasmJS !== "function") {
   Module["printErr"]("WasmJS not detected - polyfill not bundled?");
   return false;
  }
  var wasmJS = WasmJS({});
  wasmJS["outside"] = Module;
  wasmJS["info"] = info;
  wasmJS["lookupImport"] = lookupImport;
  Module["asm"] = (function(global, env, providedBuffer) {
   global = fixImports(global);
   env = fixImports(env);
   assert(providedBuffer === Module["buffer"]);
   info.global = global;
   info.env = env;
   wasmJS["providedTotalMemory"] = Module["buffer"].byteLength;
   var code;
   if (method === "interpret-binary") {
    code = getBinary();
   } else {
    code = Module["read"](method == "interpret-asm2wasm" ? asmjsCodeFile : wasmTextFile);
   }
   var temp;
   if (method == "interpret-asm2wasm") {
    temp = wasmJS["_malloc"](code.length + 1);
    wasmJS["writeAsciiToMemory"](code, temp);
    wasmJS["_load_asm2wasm"](temp);
   } else if (method === "interpret-s-expr") {
    temp = wasmJS["_malloc"](code.length + 1);
    wasmJS["writeAsciiToMemory"](code, temp);
    wasmJS["_load_s_expr2wasm"](temp);
   } else if (method === "interpret-binary") {
    temp = wasmJS["_malloc"](code.length);
    wasmJS["HEAPU8"].set(code, temp);
    wasmJS["_load_binary2wasm"](temp, code.length);
   } else {
    throw "what? " + method;
   }
   wasmJS["_free"](temp);
   wasmJS["_instantiate"](temp);
   if (Module["newBuffer"]) {
    mergeMemory(Module["newBuffer"]);
    Module["newBuffer"] = null;
   }
   if (method == "interpret-s-expr") {
    applyMappedGlobals(wasmTextFile);
   } else if (method == "interpret-binary") {
    applyMappedGlobals(wasmBinaryFile);
   }
   exports = wasmJS["asmExports"];
   return exports;
  });
  return true;
 }
 var methods = method.split(",");
 for (var i = 0; i < methods.length; i++) {
  var curr = methods[i];
  if (curr === "native-wasm") {
   if (doNativeWasm()) return;
  } else if (curr === "asmjs") {
   if (doJustAsm()) return;
  } else if (curr === "interpret-asm2wasm" || curr === "interpret-s-expr" || curr === "interpret-binary") {
   if (doWasmPolyfill(curr)) return;
  } else {
   throw "bad method: " + curr;
  }
 }
 throw "no wasm method succeeded";
}
var Module;
if (!Module) Module = (typeof Module !== "undefined" ? Module : null) || {};
var moduleOverrides = {};
for (var key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
if (Module["ENVIRONMENT"]) {
 if (Module["ENVIRONMENT"] === "WEB") {
  ENVIRONMENT_IS_WEB = true;
 } else if (Module["ENVIRONMENT"] === "WORKER") {
  ENVIRONMENT_IS_WORKER = true;
 } else if (Module["ENVIRONMENT"] === "NODE") {
  ENVIRONMENT_IS_NODE = true;
 } else if (Module["ENVIRONMENT"] === "SHELL") {
  ENVIRONMENT_IS_SHELL = true;
 } else {
  throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
 }
} else {
 ENVIRONMENT_IS_WEB = typeof window === "object";
 ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
 ENVIRONMENT_IS_NODE = typeof process === "object" && typeof require === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
 ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}
if (ENVIRONMENT_IS_NODE) {
 if (!Module["print"]) Module["print"] = console.log;
 if (!Module["printErr"]) Module["printErr"] = console.warn;
 var nodeFS;
 var nodePath;
 Module["read"] = function read(filename, binary) {
  if (!nodeFS) nodeFS = require("fs");
  if (!nodePath) nodePath = require("path");
  filename = nodePath["normalize"](filename);
  var ret = nodeFS["readFileSync"](filename);
  return binary ? ret : ret.toString();
 };
 Module["readBinary"] = function readBinary(filename) {
  var ret = Module["read"](filename, true);
  if (!ret.buffer) {
   ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
 };
 Module["load"] = function load(f) {
  globalEval(read(f));
 };
 if (!Module["thisProgram"]) {
  if (process["argv"].length > 1) {
   Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
  } else {
   Module["thisProgram"] = "unknown-program";
  }
 }
 Module["arguments"] = process["argv"].slice(2);
 if (typeof module !== "undefined") {
  module["exports"] = Module;
 }
 process["on"]("uncaughtException", (function(ex) {
  if (!(ex instanceof ExitStatus)) {
   throw ex;
  }
 }));
 Module["inspect"] = (function() {
  return "[Emscripten Module object]";
 });
} else if (ENVIRONMENT_IS_SHELL) {
 if (!Module["print"]) Module["print"] = print;
 if (typeof printErr != "undefined") Module["printErr"] = printErr;
 if (typeof read != "undefined") {
  Module["read"] = read;
 } else {
  Module["read"] = function read() {
   throw "no read() available (jsc?)";
  };
 }
 Module["readBinary"] = function readBinary(f) {
  if (typeof readbuffer === "function") {
   return new Uint8Array(readbuffer(f));
  }
  var data = read(f, "binary");
  assert(typeof data === "object");
  return data;
 };
 if (typeof scriptArgs != "undefined") {
  Module["arguments"] = scriptArgs;
 } else if (typeof arguments != "undefined") {
  Module["arguments"] = arguments;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 Module["read"] = function read(url) {
  var xhr = new XMLHttpRequest;
  xhr.open("GET", url, false);
  xhr.send(null);
  return xhr.responseText;
 };
 Module["readAsync"] = function readAsync(url, onload, onerror) {
  var xhr = new XMLHttpRequest;
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onload = function xhr_onload() {
   if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
    onload(xhr.response);
   } else {
    onerror();
   }
  };
  xhr.onerror = onerror;
  xhr.send(null);
 };
 if (typeof arguments != "undefined") {
  Module["arguments"] = arguments;
 }
 if (typeof console !== "undefined") {
  if (!Module["print"]) Module["print"] = function print(x) {
   console.log(x);
  };
  if (!Module["printErr"]) Module["printErr"] = function printErr(x) {
   console.warn(x);
  };
 } else {
  var TRY_USE_DUMP = false;
  if (!Module["print"]) Module["print"] = TRY_USE_DUMP && typeof dump !== "undefined" ? (function(x) {
   dump(x);
  }) : (function(x) {});
 }
 if (ENVIRONMENT_IS_WORKER) {
  Module["load"] = importScripts;
 }
 if (typeof Module["setWindowTitle"] === "undefined") {
  Module["setWindowTitle"] = (function(title) {
   document.title = title;
  });
 }
} else {
 throw "Unknown runtime environment. Where are we?";
}
function globalEval(x) {
 eval.call(null, x);
}
if (!Module["load"] && Module["read"]) {
 Module["load"] = function load(f) {
  globalEval(Module["read"](f));
 };
}
if (!Module["print"]) {
 Module["print"] = (function() {});
}
if (!Module["printErr"]) {
 Module["printErr"] = Module["print"];
}
if (!Module["arguments"]) {
 Module["arguments"] = [];
}
if (!Module["thisProgram"]) {
 Module["thisProgram"] = "./this.program";
}
Module.print = Module["print"];
Module.printErr = Module["printErr"];
Module["preRun"] = [];
Module["postRun"] = [];
for (var key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}
moduleOverrides = undefined;
integrateWasmJS(Module);
var Runtime = {
 setTempRet0: (function(value) {
  tempRet0 = value;
 }),
 getTempRet0: (function() {
  return tempRet0;
 }),
 stackSave: (function() {
  return STACKTOP;
 }),
 stackRestore: (function(stackTop) {
  STACKTOP = stackTop;
 }),
 getNativeTypeSize: (function(type) {
  switch (type) {
  case "i1":
  case "i8":
   return 1;
  case "i16":
   return 2;
  case "i32":
   return 4;
  case "i64":
   return 8;
  case "float":
   return 4;
  case "double":
   return 8;
  default:
   {
    if (type[type.length - 1] === "*") {
     return Runtime.QUANTUM_SIZE;
    } else if (type[0] === "i") {
     var bits = parseInt(type.substr(1));
     assert(bits % 8 === 0);
     return bits / 8;
    } else {
     return 0;
    }
   }
  }
 }),
 getNativeFieldSize: (function(type) {
  return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
 }),
 STACK_ALIGN: 16,
 prepVararg: (function(ptr, type) {
  if (type === "double" || type === "i64") {
   if (ptr & 7) {
    assert((ptr & 7) === 4);
    ptr += 4;
   }
  } else {
   assert((ptr & 3) === 0);
  }
  return ptr;
 }),
 getAlignSize: (function(type, size, vararg) {
  if (!vararg && (type == "i64" || type == "double")) return 8;
  if (!type) return Math.min(size, 8);
  return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
 }),
 dynCall: (function(sig, ptr, args) {
  if (args && args.length) {
   if (!args.splice) args = Array.prototype.slice.call(args);
   args.splice(0, 0, ptr);
   return Module["dynCall_" + sig].apply(null, args);
  } else {
   return Module["dynCall_" + sig].call(null, ptr);
  }
 }),
 functionPointers: [],
 addFunction: (function(func) {
  for (var i = 0; i < Runtime.functionPointers.length; i++) {
   if (!Runtime.functionPointers[i]) {
    Runtime.functionPointers[i] = func;
    return 2 * (1 + i);
   }
  }
  throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
 }),
 removeFunction: (function(index) {
  Runtime.functionPointers[(index - 2) / 2] = null;
 }),
 warnOnce: (function(text) {
  if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
  if (!Runtime.warnOnce.shown[text]) {
   Runtime.warnOnce.shown[text] = 1;
   Module.printErr(text);
  }
 }),
 funcWrappers: {},
 getFuncWrapper: (function(func, sig) {
  assert(sig);
  if (!Runtime.funcWrappers[sig]) {
   Runtime.funcWrappers[sig] = {};
  }
  var sigCache = Runtime.funcWrappers[sig];
  if (!sigCache[func]) {
   sigCache[func] = function dynCall_wrapper() {
    return Runtime.dynCall(sig, func, arguments);
   };
  }
  return sigCache[func];
 }),
 getCompilerSetting: (function(name) {
  throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
 }),
 stackAlloc: (function(size) {
  var ret = STACKTOP;
  STACKTOP = STACKTOP + size | 0;
  STACKTOP = STACKTOP + 15 & -16;
  return ret;
 }),
 staticAlloc: (function(size) {
  var ret = STATICTOP;
  STATICTOP = STATICTOP + size | 0;
  STATICTOP = STATICTOP + 15 & -16;
  return ret;
 }),
 dynamicAlloc: (function(size) {
  var ret = DYNAMICTOP;
  DYNAMICTOP = DYNAMICTOP + size | 0;
  DYNAMICTOP = DYNAMICTOP + 15 & -16;
  if (DYNAMICTOP >= TOTAL_MEMORY) {
   var success = enlargeMemory();
   if (!success) {
    DYNAMICTOP = ret;
    return 0;
   }
  }
  return ret;
 }),
 alignMemory: (function(size, quantum) {
  var ret = size = Math.ceil(size / (quantum ? quantum : 16)) * (quantum ? quantum : 16);
  return ret;
 }),
 makeBigInt: (function(low, high, unsigned) {
  var ret = unsigned ? +(low >>> 0) + +(high >>> 0) * +4294967296 : +(low >>> 0) + +(high | 0) * +4294967296;
  return ret;
 }),
 GLOBAL_BASE: 1024,
 QUANTUM_SIZE: 4,
 __dummy__: 0
};
Module["Runtime"] = Runtime;
var ABORT = false;
var EXITSTATUS = 0;
function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}
function getCFunc(ident) {
 var func = Module["_" + ident];
 if (!func) {
  try {
   func = eval("_" + ident);
  } catch (e) {}
 }
 assert(func, "Cannot call unknown function " + ident + " (perhaps LLVM optimizations or closure removed it?)");
 return func;
}
var cwrap, ccall;
((function() {
 var JSfuncs = {
  "stackSave": (function() {
   Runtime.stackSave();
  }),
  "stackRestore": (function() {
   Runtime.stackRestore();
  }),
  "arrayToC": (function(arr) {
   var ret = Runtime.stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }),
  "stringToC": (function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    ret = Runtime.stackAlloc((str.length << 2) + 1);
    writeStringToMemory(str, ret);
   }
   return ret;
  })
 };
 var toC = {
  "string": JSfuncs["stringToC"],
  "array": JSfuncs["arrayToC"]
 };
 ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
   for (var i = 0; i < args.length; i++) {
    var converter = toC[argTypes[i]];
    if (converter) {
     if (stack === 0) stack = Runtime.stackSave();
     cArgs[i] = converter(args[i]);
    } else {
     cArgs[i] = args[i];
    }
   }
  }
  var ret = func.apply(null, cArgs);
  if (returnType === "string") ret = Pointer_stringify(ret);
  if (stack !== 0) {
   if (opts && opts.async) {
    EmterpreterAsync.asyncFinalizers.push((function() {
     Runtime.stackRestore(stack);
    }));
    return;
   }
   Runtime.stackRestore(stack);
  }
  return ret;
 };
 var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
 function parseJSFunc(jsfunc) {
  var parsed = jsfunc.toString().match(sourceRegex).slice(1);
  return {
   arguments: parsed[0],
   body: parsed[1],
   returnValue: parsed[2]
  };
 }
 var JSsource = null;
 function ensureJSsource() {
  if (!JSsource) {
   JSsource = {};
   for (var fun in JSfuncs) {
    if (JSfuncs.hasOwnProperty(fun)) {
     JSsource[fun] = parseJSFunc(JSfuncs[fun]);
    }
   }
  }
 }
 cwrap = function cwrap(ident, returnType, argTypes) {
  argTypes = argTypes || [];
  var cfunc = getCFunc(ident);
  var numericArgs = argTypes.every((function(type) {
   return type === "number";
  }));
  var numericRet = returnType !== "string";
  if (numericRet && numericArgs) {
   return cfunc;
  }
  var argNames = argTypes.map((function(x, i) {
   return "$" + i;
  }));
  var funcstr = "(function(" + argNames.join(",") + ") {";
  var nargs = argTypes.length;
  if (!numericArgs) {
   ensureJSsource();
   funcstr += "var stack = " + JSsource["stackSave"].body + ";";
   for (var i = 0; i < nargs; i++) {
    var arg = argNames[i], type = argTypes[i];
    if (type === "number") continue;
    var convertCode = JSsource[type + "ToC"];
    funcstr += "var " + convertCode.arguments + " = " + arg + ";";
    funcstr += convertCode.body + ";";
    funcstr += arg + "=(" + convertCode.returnValue + ");";
   }
  }
  var cfuncname = parseJSFunc((function() {
   return cfunc;
  })).returnValue;
  funcstr += "var ret = " + cfuncname + "(" + argNames.join(",") + ");";
  if (!numericRet) {
   var strgfy = parseJSFunc((function() {
    return Pointer_stringify;
   })).returnValue;
   funcstr += "ret = " + strgfy + "(ret);";
  }
  if (!numericArgs) {
   ensureJSsource();
   funcstr += JSsource["stackRestore"].body.replace("()", "(stack)") + ";";
  }
  funcstr += "return ret})";
  return eval(funcstr);
 };
}))();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
function setValue(ptr, value, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  HEAP8[ptr >> 0] = value;
  break;
 case "i8":
  HEAP8[ptr >> 0] = value;
  break;
 case "i16":
  HEAP16[ptr >> 1] = value;
  break;
 case "i32":
  HEAP32[ptr >> 2] = value;
  break;
 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0) ], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
  break;
 case "float":
  HEAPF32[ptr >> 2] = value;
  break;
 case "double":
  HEAPF64[ptr >> 3] = value;
  break;
 default:
  abort("invalid type for setValue: " + type);
 }
}
Module["setValue"] = setValue;
function getValue(ptr, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  return HEAP8[ptr >> 0];
 case "i8":
  return HEAP8[ptr >> 0];
 case "i16":
  return HEAP16[ptr >> 1];
 case "i32":
  return HEAP32[ptr >> 2];
 case "i64":
  return HEAP32[ptr >> 2];
 case "float":
  return HEAPF32[ptr >> 2];
 case "double":
  return HEAPF64[ptr >> 3];
 default:
  abort("invalid type for setValue: " + type);
 }
 return null;
}
Module["getValue"] = getValue;
var ALLOC_NORMAL = 0;
var ALLOC_STACK = 1;
var ALLOC_STATIC = 2;
var ALLOC_DYNAMIC = 3;
var ALLOC_NONE = 4;
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;
function allocate(slab, types, allocator, ptr) {
 var zeroinit, size;
 if (typeof slab === "number") {
  zeroinit = true;
  size = slab;
 } else {
  zeroinit = false;
  size = slab.length;
 }
 var singleType = typeof types === "string" ? types : null;
 var ret;
 if (allocator == ALLOC_NONE) {
  ret = ptr;
 } else {
  ret = [ typeof _malloc === "function" ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc ][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
 }
 if (zeroinit) {
  var ptr = ret, stop;
  assert((ret & 3) == 0);
  stop = ret + (size & ~3);
  for (; ptr < stop; ptr += 4) {
   HEAP32[ptr >> 2] = 0;
  }
  stop = ret + size;
  while (ptr < stop) {
   HEAP8[ptr++ >> 0] = 0;
  }
  return ret;
 }
 if (singleType === "i8") {
  if (slab.subarray || slab.slice) {
   HEAPU8.set(slab, ret);
  } else {
   HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
 }
 var i = 0, type, typeSize, previousType;
 while (i < size) {
  var curr = slab[i];
  if (typeof curr === "function") {
   curr = Runtime.getFunctionIndex(curr);
  }
  type = singleType || types[i];
  if (type === 0) {
   i++;
   continue;
  }
  if (type == "i64") type = "i32";
  setValue(ret + i, curr, type);
  if (previousType !== type) {
   typeSize = Runtime.getNativeTypeSize(type);
   previousType = type;
  }
  i += typeSize;
 }
 return ret;
}
Module["allocate"] = allocate;
function getMemory(size) {
 if (!staticSealed) return Runtime.staticAlloc(size);
 if (typeof _sbrk !== "undefined" && !_sbrk.called || !runtimeInitialized) return Runtime.dynamicAlloc(size);
 return _malloc(size);
}
Module["getMemory"] = getMemory;
function Pointer_stringify(ptr, length) {
 if (length === 0 || !ptr) return "";
 var hasUtf = 0;
 var t;
 var i = 0;
 while (1) {
  t = HEAPU8[ptr + i >> 0];
  hasUtf |= t;
  if (t == 0 && !length) break;
  i++;
  if (length && i == length) break;
 }
 if (!length) length = i;
 var ret = "";
 if (hasUtf < 128) {
  var MAX_CHUNK = 1024;
  var curr;
  while (length > 0) {
   curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
   ret = ret ? ret + curr : curr;
   ptr += MAX_CHUNK;
   length -= MAX_CHUNK;
  }
  return ret;
 }
 return Module["UTF8ToString"](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;
function AsciiToString(ptr) {
 var str = "";
 while (1) {
  var ch = HEAP8[ptr++ >> 0];
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}
Module["AsciiToString"] = AsciiToString;
function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;
function UTF8ArrayToString(u8Array, idx) {
 var u0, u1, u2, u3, u4, u5;
 var str = "";
 while (1) {
  u0 = u8Array[idx++];
  if (!u0) return str;
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  u1 = u8Array[idx++] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode((u0 & 31) << 6 | u1);
   continue;
  }
  u2 = u8Array[idx++] & 63;
  if ((u0 & 240) == 224) {
   u0 = (u0 & 15) << 12 | u1 << 6 | u2;
  } else {
   u3 = u8Array[idx++] & 63;
   if ((u0 & 248) == 240) {
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3;
   } else {
    u4 = u8Array[idx++] & 63;
    if ((u0 & 252) == 248) {
     u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4;
    } else {
     u5 = u8Array[idx++] & 63;
     u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5;
    }
   }
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  }
 }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;
function UTF8ToString(ptr) {
 return UTF8ArrayToString(HEAPU8, ptr);
}
Module["UTF8ToString"] = UTF8ToString;
function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   outU8Array[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   outU8Array[outIdx++] = 192 | u >> 6;
   outU8Array[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   outU8Array[outIdx++] = 224 | u >> 12;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  } else if (u <= 2097151) {
   if (outIdx + 3 >= endIdx) break;
   outU8Array[outIdx++] = 240 | u >> 18;
   outU8Array[outIdx++] = 128 | u >> 12 & 63;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  } else if (u <= 67108863) {
   if (outIdx + 4 >= endIdx) break;
   outU8Array[outIdx++] = 248 | u >> 24;
   outU8Array[outIdx++] = 128 | u >> 18 & 63;
   outU8Array[outIdx++] = 128 | u >> 12 & 63;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 5 >= endIdx) break;
   outU8Array[outIdx++] = 252 | u >> 30;
   outU8Array[outIdx++] = 128 | u >> 24 & 63;
   outU8Array[outIdx++] = 128 | u >> 18 & 63;
   outU8Array[outIdx++] = 128 | u >> 12 & 63;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  }
 }
 outU8Array[outIdx] = 0;
 return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;
function stringToUTF8(str, outPtr, maxBytesToWrite) {
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;
function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) {
   ++len;
  } else if (u <= 2047) {
   len += 2;
  } else if (u <= 65535) {
   len += 3;
  } else if (u <= 2097151) {
   len += 4;
  } else if (u <= 67108863) {
   len += 5;
  } else {
   len += 6;
  }
 }
 return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;
function demangle(func) {
 var hasLibcxxabi = !!Module["___cxa_demangle"];
 if (hasLibcxxabi) {
  try {
   var buf = _malloc(func.length);
   writeStringToMemory(func.substr(1), buf);
   var status = _malloc(4);
   var ret = Module["___cxa_demangle"](buf, 0, 0, status);
   if (getValue(status, "i32") === 0 && ret) {
    return Pointer_stringify(ret);
   }
  } catch (e) {} finally {
   if (buf) _free(buf);
   if (status) _free(status);
   if (ret) _free(ret);
  }
  return func;
 }
 Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
 return func;
}
function demangleAll(text) {
 return text.replace(/__Z[\w\d_]+/g, (function(x) {
  var y = demangle(x);
  return x === y ? x : x + " [" + y + "]";
 }));
}
function jsStackTrace() {
 var err = new Error;
 if (!err.stack) {
  try {
   throw new Error(0);
  } catch (e) {
   err = e;
  }
  if (!err.stack) {
   return "(no stack trace available)";
  }
 }
 return err.stack.toString();
}
function stackTrace() {
 return demangleAll(jsStackTrace());
}
Module["stackTrace"] = stackTrace;
function alignMemoryPage(x) {
 if (x % 4096 > 0) {
  x += 4096 - x % 4096;
 }
 return x;
}
var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateGlobalBuffer(buf) {
 Module["buffer"] = buffer = buf;
}
function updateGlobalBufferViews() {
 Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
 Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
 Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
}
var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false;
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0;
var DYNAMIC_BASE = 0, DYNAMICTOP = 0;
function abortOnCannotGrowMemory() {
 abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}
function enlargeMemory() {
 abortOnCannotGrowMemory();
}
var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;
var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 134217728;
var totalMemory = 64 * 1024;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2 * TOTAL_STACK) {
 if (totalMemory < 16 * 1024 * 1024) {
  totalMemory *= 2;
 } else {
  totalMemory += 16 * 1024 * 1024;
 }
}
if (totalMemory !== TOTAL_MEMORY) {
 TOTAL_MEMORY = totalMemory;
}
if (Module["buffer"]) {
 buffer = Module["buffer"];
} else {
 buffer = new ArrayBuffer(TOTAL_MEMORY);
}
updateGlobalBufferViews();
HEAP32[0] = 255;
if (HEAPU8[0] !== 255 || HEAPU8[3] !== 0) throw "Typed arrays 2 must be run on a little-endian system";
Module["HEAP"] = HEAP;
Module["buffer"] = buffer;
Module["HEAP8"] = HEAP8;
Module["HEAP16"] = HEAP16;
Module["HEAP32"] = HEAP32;
Module["HEAPU8"] = HEAPU8;
Module["HEAPU16"] = HEAPU16;
Module["HEAPU32"] = HEAPU32;
Module["HEAPF32"] = HEAPF32;
Module["HEAPF64"] = HEAPF64;
function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback();
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    Runtime.dynCall("v", func);
   } else {
    Runtime.dynCall("vi", func, [ callback.arg ]);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
var runtimeExited = false;
function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
 if (runtimeInitialized) return;
 runtimeInitialized = true;
 callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
 callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
 callRuntimeCallbacks(__ATEXIT__);
 runtimeExited = true;
}
function postRun() {
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;
function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;
function addOnPreMain(cb) {
 __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;
function addOnExit(cb) {
 __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;
function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;
function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}
Module["intArrayFromString"] = intArrayFromString;
function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}
Module["intArrayToString"] = intArrayToString;
function writeStringToMemory(string, buffer, dontAddNull) {
 var array = intArrayFromString(string, dontAddNull);
 var i = 0;
 while (i < array.length) {
  var chr = array[i];
  HEAP8[buffer + i >> 0] = chr;
  i = i + 1;
 }
}
Module["writeStringToMemory"] = writeStringToMemory;
function writeArrayToMemory(array, buffer) {
 for (var i = 0; i < array.length; i++) {
  HEAP8[buffer++ >> 0] = array[i];
 }
}
Module["writeArrayToMemory"] = writeArrayToMemory;
function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  HEAP8[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;
if (!Math["imul"] || Math["imul"](4294967295, 5) !== -5) Math["imul"] = function imul(a, b) {
 var ah = a >>> 16;
 var al = a & 65535;
 var bh = b >>> 16;
 var bl = b & 65535;
 return al * bl + (ah * bl + al * bh << 16) | 0;
};
Math.imul = Math["imul"];
if (!Math["fround"]) {
 var froundBuffer = new Float32Array(1);
 Math["fround"] = (function(x) {
  froundBuffer[0] = x;
  return froundBuffer[0];
 });
}
Math.fround = Math["fround"];
if (!Math["clz32"]) Math["clz32"] = (function(x) {
 x = x >>> 0;
 for (var i = 0; i < 32; i++) {
  if (x & 1 << 31 - i) return i;
 }
 return 32;
});
Math.clz32 = Math["clz32"];
if (!Math["trunc"]) Math["trunc"] = (function(x) {
 return x < 0 ? Math.ceil(x) : Math.floor(x);
});
Math.trunc = Math["trunc"];
var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
}
Module["addRunDependency"] = addRunDependency;
function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}
Module["removeRunDependency"] = removeRunDependency;
Module["preloadedImages"] = {};
Module["preloadedAudios"] = {};
var ASM_CONSTS = [];
STATIC_BASE = 1024;
STATICTOP = STATIC_BASE + 19344;
__ATINIT__.push();
allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 4, 0, 8, 0, 4, 0, 2, 0, 0, 0, 4, 0, 5, 0, 16, 0, 8, 0, 2, 0, 0, 0, 4, 0, 6, 0, 32, 0, 32, 0, 2, 0, 0, 0, 4, 0, 4, 0, 16, 0, 16, 0, 3, 0, 0, 0, 8, 0, 16, 0, 32, 0, 32, 0, 3, 0, 0, 0, 8, 0, 16, 0, 128, 0, 128, 0, 3, 0, 0, 0, 8, 0, 32, 0, 128, 0, 0, 1, 3, 0, 0, 0, 32, 0, 128, 0, 2, 1, 0, 4, 3, 0, 0, 0, 32, 0, 2, 1, 2, 1, 0, 16, 3, 0, 0, 0, 116, 39, 0, 0, 140, 4, 0, 0, 1, 1, 0, 0, 30, 1, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 244, 43, 0, 0, 20, 5, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 160, 5, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 10, 0, 0, 0, 12, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 28, 0, 0, 0, 32, 0, 0, 0, 40, 0, 0, 0, 48, 0, 0, 0, 56, 0, 0, 0, 64, 0, 0, 0, 80, 0, 0, 0, 96, 0, 0, 0, 112, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 16, 0, 0, 0, 24, 0, 0, 0, 32, 0, 0, 0, 48, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 192, 0, 0, 0, 0, 1, 0, 0, 128, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 16, 0, 0, 0, 24, 0, 0, 0, 32, 0, 0, 0, 48, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 156, 57, 0, 0, 172, 57, 0, 0, 128, 71, 0, 0, 183, 57, 0, 0, 194, 57, 0, 0, 207, 57, 0, 0, 218, 57, 0, 0, 238, 57, 0, 0, 251, 57, 0, 0, 128, 71, 0, 0, 0, 0, 0, 0, 150, 48, 7, 119, 44, 97, 14, 238, 186, 81, 9, 153, 25, 196, 109, 7, 143, 244, 106, 112, 53, 165, 99, 233, 163, 149, 100, 158, 50, 136, 219, 14, 164, 184, 220, 121, 30, 233, 213, 224, 136, 217, 210, 151, 43, 76, 182, 9, 189, 124, 177, 126, 7, 45, 184, 231, 145, 29, 191, 144, 100, 16, 183, 29, 242, 32, 176, 106, 72, 113, 185, 243, 222, 65, 190, 132, 125, 212, 218, 26, 235, 228, 221, 109, 81, 181, 212, 244, 199, 133, 211, 131, 86, 152, 108, 19, 192, 168, 107, 100, 122, 249, 98, 253, 236, 201, 101, 138, 79, 92, 1, 20, 217, 108, 6, 99, 99, 61, 15, 250, 245, 13, 8, 141, 200, 32, 110, 59, 94, 16, 105, 76, 228, 65, 96, 213, 114, 113, 103, 162, 209, 228, 3, 60, 71, 212, 4, 75, 253, 133, 13, 210, 107, 181, 10, 165, 250, 168, 181, 53, 108, 152, 178, 66, 214, 201, 187, 219, 64, 249, 188, 172, 227, 108, 216, 50, 117, 92, 223, 69, 207, 13, 214, 220, 89, 61, 209, 171, 172, 48, 217, 38, 58, 0, 222, 81, 128, 81, 215, 200, 22, 97, 208, 191, 181, 244, 180, 33, 35, 196, 179, 86, 153, 149, 186, 207, 15, 165, 189, 184, 158, 184, 2, 40, 8, 136, 5, 95, 178, 217, 12, 198, 36, 233, 11, 177, 135, 124, 111, 47, 17, 76, 104, 88, 171, 29, 97, 193, 61, 45, 102, 182, 144, 65, 220, 118, 6, 113, 219, 1, 188, 32, 210, 152, 42, 16, 213, 239, 137, 133, 177, 113, 31, 181, 182, 6, 165, 228, 191, 159, 51, 212, 184, 232, 162, 201, 7, 120, 52, 249, 0, 15, 142, 168, 9, 150, 24, 152, 14, 225, 187, 13, 106, 127, 45, 61, 109, 8, 151, 108, 100, 145, 1, 92, 99, 230, 244, 81, 107, 107, 98, 97, 108, 28, 216, 48, 101, 133, 78, 0, 98, 242, 237, 149, 6, 108, 123, 165, 1, 27, 193, 244, 8, 130, 87, 196, 15, 245, 198, 217, 176, 101, 80, 233, 183, 18, 234, 184, 190, 139, 124, 136, 185, 252, 223, 29, 221, 98, 73, 45, 218, 21, 243, 124, 211, 140, 101, 76, 212, 251, 88, 97, 178, 77, 206, 81, 181, 58, 116, 0, 188, 163, 226, 48, 187, 212, 65, 165, 223, 74, 215, 149, 216, 61, 109, 196, 209, 164, 251, 244, 214, 211, 106, 233, 105, 67, 252, 217, 110, 52, 70, 136, 103, 173, 208, 184, 96, 218, 115, 45, 4, 68, 229, 29, 3, 51, 95, 76, 10, 170, 201, 124, 13, 221, 60, 113, 5, 80, 170, 65, 2, 39, 16, 16, 11, 190, 134, 32, 12, 201, 37, 181, 104, 87, 179, 133, 111, 32, 9, 212, 102, 185, 159, 228, 97, 206, 14, 249, 222, 94, 152, 201, 217, 41, 34, 152, 208, 176, 180, 168, 215, 199, 23, 61, 179, 89, 129, 13, 180, 46, 59, 92, 189, 183, 173, 108, 186, 192, 32, 131, 184, 237, 182, 179, 191, 154, 12, 226, 182, 3, 154, 210, 177, 116, 57, 71, 213, 234, 175, 119, 210, 157, 21, 38, 219, 4, 131, 22, 220, 115, 18, 11, 99, 227, 132, 59, 100, 148, 62, 106, 109, 13, 168, 90, 106, 122, 11, 207, 14, 228, 157, 255, 9, 147, 39, 174, 0, 10, 177, 158, 7, 125, 68, 147, 15, 240, 210, 163, 8, 135, 104, 242, 1, 30, 254, 194, 6, 105, 93, 87, 98, 247, 203, 103, 101, 128, 113, 54, 108, 25, 231, 6, 107, 110, 118, 27, 212, 254, 224, 43, 211, 137, 90, 122, 218, 16, 204, 74, 221, 103, 111, 223, 185, 249, 249, 239, 190, 142, 67, 190, 183, 23, 213, 142, 176, 96, 232, 163, 214, 214, 126, 147, 209, 161, 196, 194, 216, 56, 82, 242, 223, 79, 241, 103, 187, 209, 103, 87, 188, 166, 221, 6, 181, 63, 75, 54, 178, 72, 218, 43, 13, 216, 76, 27, 10, 175, 246, 74, 3, 54, 96, 122, 4, 65, 195, 239, 96, 223, 85, 223, 103, 168, 239, 142, 110, 49, 121, 190, 105, 70, 140, 179, 97, 203, 26, 131, 102, 188, 160, 210, 111, 37, 54, 226, 104, 82, 149, 119, 12, 204, 3, 71, 11, 187, 185, 22, 2, 34, 47, 38, 5, 85, 190, 59, 186, 197, 40, 11, 189, 178, 146, 90, 180, 43, 4, 106, 179, 92, 167, 255, 215, 194, 49, 207, 208, 181, 139, 158, 217, 44, 29, 174, 222, 91, 176, 194, 100, 155, 38, 242, 99, 236, 156, 163, 106, 117, 10, 147, 109, 2, 169, 6, 9, 156, 63, 54, 14, 235, 133, 103, 7, 114, 19, 87, 0, 5, 130, 74, 191, 149, 20, 122, 184, 226, 174, 43, 177, 123, 56, 27, 182, 12, 155, 142, 210, 146, 13, 190, 213, 229, 183, 239, 220, 124, 33, 223, 219, 11, 212, 210, 211, 134, 66, 226, 212, 241, 248, 179, 221, 104, 110, 131, 218, 31, 205, 22, 190, 129, 91, 38, 185, 246, 225, 119, 176, 111, 119, 71, 183, 24, 230, 90, 8, 136, 112, 106, 15, 255, 202, 59, 6, 102, 92, 11, 1, 17, 255, 158, 101, 143, 105, 174, 98, 248, 211, 255, 107, 97, 69, 207, 108, 22, 120, 226, 10, 160, 238, 210, 13, 215, 84, 131, 4, 78, 194, 179, 3, 57, 97, 38, 103, 167, 247, 22, 96, 208, 77, 71, 105, 73, 219, 119, 110, 62, 74, 106, 209, 174, 220, 90, 214, 217, 102, 11, 223, 64, 240, 59, 216, 55, 83, 174, 188, 169, 197, 158, 187, 222, 127, 207, 178, 71, 233, 255, 181, 48, 28, 242, 189, 189, 138, 194, 186, 202, 48, 147, 179, 83, 166, 163, 180, 36, 5, 54, 208, 186, 147, 6, 215, 205, 41, 87, 222, 84, 191, 103, 217, 35, 46, 122, 102, 179, 184, 74, 97, 196, 2, 27, 104, 93, 148, 43, 111, 42, 55, 190, 11, 180, 161, 142, 12, 195, 27, 223, 5, 90, 141, 239, 2, 45, 0, 0, 0, 0, 65, 49, 27, 25, 130, 98, 54, 50, 195, 83, 45, 43, 4, 197, 108, 100, 69, 244, 119, 125, 134, 167, 90, 86, 199, 150, 65, 79, 8, 138, 217, 200, 73, 187, 194, 209, 138, 232, 239, 250, 203, 217, 244, 227, 12, 79, 181, 172, 77, 126, 174, 181, 142, 45, 131, 158, 207, 28, 152, 135, 81, 18, 194, 74, 16, 35, 217, 83, 211, 112, 244, 120, 146, 65, 239, 97, 85, 215, 174, 46, 20, 230, 181, 55, 215, 181, 152, 28, 150, 132, 131, 5, 89, 152, 27, 130, 24, 169, 0, 155, 219, 250, 45, 176, 154, 203, 54, 169, 93, 93, 119, 230, 28, 108, 108, 255, 223, 63, 65, 212, 158, 14, 90, 205, 162, 36, 132, 149, 227, 21, 159, 140, 32, 70, 178, 167, 97, 119, 169, 190, 166, 225, 232, 241, 231, 208, 243, 232, 36, 131, 222, 195, 101, 178, 197, 218, 170, 174, 93, 93, 235, 159, 70, 68, 40, 204, 107, 111, 105, 253, 112, 118, 174, 107, 49, 57, 239, 90, 42, 32, 44, 9, 7, 11, 109, 56, 28, 18, 243, 54, 70, 223, 178, 7, 93, 198, 113, 84, 112, 237, 48, 101, 107, 244, 247, 243, 42, 187, 182, 194, 49, 162, 117, 145, 28, 137, 52, 160, 7, 144, 251, 188, 159, 23, 186, 141, 132, 14, 121, 222, 169, 37, 56, 239, 178, 60, 255, 121, 243, 115, 190, 72, 232, 106, 125, 27, 197, 65, 60, 42, 222, 88, 5, 79, 121, 240, 68, 126, 98, 233, 135, 45, 79, 194, 198, 28, 84, 219, 1, 138, 21, 148, 64, 187, 14, 141, 131, 232, 35, 166, 194, 217, 56, 191, 13, 197, 160, 56, 76, 244, 187, 33, 143, 167, 150, 10, 206, 150, 141, 19, 9, 0, 204, 92, 72, 49, 215, 69, 139, 98, 250, 110, 202, 83, 225, 119, 84, 93, 187, 186, 21, 108, 160, 163, 214, 63, 141, 136, 151, 14, 150, 145, 80, 152, 215, 222, 17, 169, 204, 199, 210, 250, 225, 236, 147, 203, 250, 245, 92, 215, 98, 114, 29, 230, 121, 107, 222, 181, 84, 64, 159, 132, 79, 89, 88, 18, 14, 22, 25, 35, 21, 15, 218, 112, 56, 36, 155, 65, 35, 61, 167, 107, 253, 101, 230, 90, 230, 124, 37, 9, 203, 87, 100, 56, 208, 78, 163, 174, 145, 1, 226, 159, 138, 24, 33, 204, 167, 51, 96, 253, 188, 42, 175, 225, 36, 173, 238, 208, 63, 180, 45, 131, 18, 159, 108, 178, 9, 134, 171, 36, 72, 201, 234, 21, 83, 208, 41, 70, 126, 251, 104, 119, 101, 226, 246, 121, 63, 47, 183, 72, 36, 54, 116, 27, 9, 29, 53, 42, 18, 4, 242, 188, 83, 75, 179, 141, 72, 82, 112, 222, 101, 121, 49, 239, 126, 96, 254, 243, 230, 231, 191, 194, 253, 254, 124, 145, 208, 213, 61, 160, 203, 204, 250, 54, 138, 131, 187, 7, 145, 154, 120, 84, 188, 177, 57, 101, 167, 168, 75, 152, 131, 59, 10, 169, 152, 34, 201, 250, 181, 9, 136, 203, 174, 16, 79, 93, 239, 95, 14, 108, 244, 70, 205, 63, 217, 109, 140, 14, 194, 116, 67, 18, 90, 243, 2, 35, 65, 234, 193, 112, 108, 193, 128, 65, 119, 216, 71, 215, 54, 151, 6, 230, 45, 142, 197, 181, 0, 165, 132, 132, 27, 188, 26, 138, 65, 113, 91, 187, 90, 104, 152, 232, 119, 67, 217, 217, 108, 90, 30, 79, 45, 21, 95, 126, 54, 12, 156, 45, 27, 39, 221, 28, 0, 62, 18, 0, 152, 185, 83, 49, 131, 160, 144, 98, 174, 139, 209, 83, 181, 146, 22, 197, 244, 221, 87, 244, 239, 196, 148, 167, 194, 239, 213, 150, 217, 246, 233, 188, 7, 174, 168, 141, 28, 183, 107, 222, 49, 156, 42, 239, 42, 133, 237, 121, 107, 202, 172, 72, 112, 211, 111, 27, 93, 248, 46, 42, 70, 225, 225, 54, 222, 102, 160, 7, 197, 127, 99, 84, 232, 84, 34, 101, 243, 77, 229, 243, 178, 2, 164, 194, 169, 27, 103, 145, 132, 48, 38, 160, 159, 41, 184, 174, 197, 228, 249, 159, 222, 253, 58, 204, 243, 214, 123, 253, 232, 207, 188, 107, 169, 128, 253, 90, 178, 153, 62, 9, 159, 178, 127, 56, 132, 171, 176, 36, 28, 44, 241, 21, 7, 53, 50, 70, 42, 30, 115, 119, 49, 7, 180, 225, 112, 72, 245, 208, 107, 81, 54, 131, 70, 122, 119, 178, 93, 99, 78, 215, 250, 203, 15, 230, 225, 210, 204, 181, 204, 249, 141, 132, 215, 224, 74, 18, 150, 175, 11, 35, 141, 182, 200, 112, 160, 157, 137, 65, 187, 132, 70, 93, 35, 3, 7, 108, 56, 26, 196, 63, 21, 49, 133, 14, 14, 40, 66, 152, 79, 103, 3, 169, 84, 126, 192, 250, 121, 85, 129, 203, 98, 76, 31, 197, 56, 129, 94, 244, 35, 152, 157, 167, 14, 179, 220, 150, 21, 170, 27, 0, 84, 229, 90, 49, 79, 252, 153, 98, 98, 215, 216, 83, 121, 206, 23, 79, 225, 73, 86, 126, 250, 80, 149, 45, 215, 123, 212, 28, 204, 98, 19, 138, 141, 45, 82, 187, 150, 52, 145, 232, 187, 31, 208, 217, 160, 6, 236, 243, 126, 94, 173, 194, 101, 71, 110, 145, 72, 108, 47, 160, 83, 117, 232, 54, 18, 58, 169, 7, 9, 35, 106, 84, 36, 8, 43, 101, 63, 17, 228, 121, 167, 150, 165, 72, 188, 143, 102, 27, 145, 164, 39, 42, 138, 189, 224, 188, 203, 242, 161, 141, 208, 235, 98, 222, 253, 192, 35, 239, 230, 217, 189, 225, 188, 20, 252, 208, 167, 13, 63, 131, 138, 38, 126, 178, 145, 63, 185, 36, 208, 112, 248, 21, 203, 105, 59, 70, 230, 66, 122, 119, 253, 91, 181, 107, 101, 220, 244, 90, 126, 197, 55, 9, 83, 238, 118, 56, 72, 247, 177, 174, 9, 184, 240, 159, 18, 161, 51, 204, 63, 138, 114, 253, 36, 147, 0, 0, 0, 0, 55, 106, 194, 1, 110, 212, 132, 3, 89, 190, 70, 2, 220, 168, 9, 7, 235, 194, 203, 6, 178, 124, 141, 4, 133, 22, 79, 5, 184, 81, 19, 14, 143, 59, 209, 15, 214, 133, 151, 13, 225, 239, 85, 12, 100, 249, 26, 9, 83, 147, 216, 8, 10, 45, 158, 10, 61, 71, 92, 11, 112, 163, 38, 28, 71, 201, 228, 29, 30, 119, 162, 31, 41, 29, 96, 30, 172, 11, 47, 27, 155, 97, 237, 26, 194, 223, 171, 24, 245, 181, 105, 25, 200, 242, 53, 18, 255, 152, 247, 19, 166, 38, 177, 17, 145, 76, 115, 16, 20, 90, 60, 21, 35, 48, 254, 20, 122, 142, 184, 22, 77, 228, 122, 23, 224, 70, 77, 56, 215, 44, 143, 57, 142, 146, 201, 59, 185, 248, 11, 58, 60, 238, 68, 63, 11, 132, 134, 62, 82, 58, 192, 60, 101, 80, 2, 61, 88, 23, 94, 54, 111, 125, 156, 55, 54, 195, 218, 53, 1, 169, 24, 52, 132, 191, 87, 49, 179, 213, 149, 48, 234, 107, 211, 50, 221, 1, 17, 51, 144, 229, 107, 36, 167, 143, 169, 37, 254, 49, 239, 39, 201, 91, 45, 38, 76, 77, 98, 35, 123, 39, 160, 34, 34, 153, 230, 32, 21, 243, 36, 33, 40, 180, 120, 42, 31, 222, 186, 43, 70, 96, 252, 41, 113, 10, 62, 40, 244, 28, 113, 45, 195, 118, 179, 44, 154, 200, 245, 46, 173, 162, 55, 47, 192, 141, 154, 112, 247, 231, 88, 113, 174, 89, 30, 115, 153, 51, 220, 114, 28, 37, 147, 119, 43, 79, 81, 118, 114, 241, 23, 116, 69, 155, 213, 117, 120, 220, 137, 126, 79, 182, 75, 127, 22, 8, 13, 125, 33, 98, 207, 124, 164, 116, 128, 121, 147, 30, 66, 120, 202, 160, 4, 122, 253, 202, 198, 123, 176, 46, 188, 108, 135, 68, 126, 109, 222, 250, 56, 111, 233, 144, 250, 110, 108, 134, 181, 107, 91, 236, 119, 106, 2, 82, 49, 104, 53, 56, 243, 105, 8, 127, 175, 98, 63, 21, 109, 99, 102, 171, 43, 97, 81, 193, 233, 96, 212, 215, 166, 101, 227, 189, 100, 100, 186, 3, 34, 102, 141, 105, 224, 103, 32, 203, 215, 72, 23, 161, 21, 73, 78, 31, 83, 75, 121, 117, 145, 74, 252, 99, 222, 79, 203, 9, 28, 78, 146, 183, 90, 76, 165, 221, 152, 77, 152, 154, 196, 70, 175, 240, 6, 71, 246, 78, 64, 69, 193, 36, 130, 68, 68, 50, 205, 65, 115, 88, 15, 64, 42, 230, 73, 66, 29, 140, 139, 67, 80, 104, 241, 84, 103, 2, 51, 85, 62, 188, 117, 87, 9, 214, 183, 86, 140, 192, 248, 83, 187, 170, 58, 82, 226, 20, 124, 80, 213, 126, 190, 81, 232, 57, 226, 90, 223, 83, 32, 91, 134, 237, 102, 89, 177, 135, 164, 88, 52, 145, 235, 93, 3, 251, 41, 92, 90, 69, 111, 94, 109, 47, 173, 95, 128, 27, 53, 225, 183, 113, 247, 224, 238, 207, 177, 226, 217, 165, 115, 227, 92, 179, 60, 230, 107, 217, 254, 231, 50, 103, 184, 229, 5, 13, 122, 228, 56, 74, 38, 239, 15, 32, 228, 238, 86, 158, 162, 236, 97, 244, 96, 237, 228, 226, 47, 232, 211, 136, 237, 233, 138, 54, 171, 235, 189, 92, 105, 234, 240, 184, 19, 253, 199, 210, 209, 252, 158, 108, 151, 254, 169, 6, 85, 255, 44, 16, 26, 250, 27, 122, 216, 251, 66, 196, 158, 249, 117, 174, 92, 248, 72, 233, 0, 243, 127, 131, 194, 242, 38, 61, 132, 240, 17, 87, 70, 241, 148, 65, 9, 244, 163, 43, 203, 245, 250, 149, 141, 247, 205, 255, 79, 246, 96, 93, 120, 217, 87, 55, 186, 216, 14, 137, 252, 218, 57, 227, 62, 219, 188, 245, 113, 222, 139, 159, 179, 223, 210, 33, 245, 221, 229, 75, 55, 220, 216, 12, 107, 215, 239, 102, 169, 214, 182, 216, 239, 212, 129, 178, 45, 213, 4, 164, 98, 208, 51, 206, 160, 209, 106, 112, 230, 211, 93, 26, 36, 210, 16, 254, 94, 197, 39, 148, 156, 196, 126, 42, 218, 198, 73, 64, 24, 199, 204, 86, 87, 194, 251, 60, 149, 195, 162, 130, 211, 193, 149, 232, 17, 192, 168, 175, 77, 203, 159, 197, 143, 202, 198, 123, 201, 200, 241, 17, 11, 201, 116, 7, 68, 204, 67, 109, 134, 205, 26, 211, 192, 207, 45, 185, 2, 206, 64, 150, 175, 145, 119, 252, 109, 144, 46, 66, 43, 146, 25, 40, 233, 147, 156, 62, 166, 150, 171, 84, 100, 151, 242, 234, 34, 149, 197, 128, 224, 148, 248, 199, 188, 159, 207, 173, 126, 158, 150, 19, 56, 156, 161, 121, 250, 157, 36, 111, 181, 152, 19, 5, 119, 153, 74, 187, 49, 155, 125, 209, 243, 154, 48, 53, 137, 141, 7, 95, 75, 140, 94, 225, 13, 142, 105, 139, 207, 143, 236, 157, 128, 138, 219, 247, 66, 139, 130, 73, 4, 137, 181, 35, 198, 136, 136, 100, 154, 131, 191, 14, 88, 130, 230, 176, 30, 128, 209, 218, 220, 129, 84, 204, 147, 132, 99, 166, 81, 133, 58, 24, 23, 135, 13, 114, 213, 134, 160, 208, 226, 169, 151, 186, 32, 168, 206, 4, 102, 170, 249, 110, 164, 171, 124, 120, 235, 174, 75, 18, 41, 175, 18, 172, 111, 173, 37, 198, 173, 172, 24, 129, 241, 167, 47, 235, 51, 166, 118, 85, 117, 164, 65, 63, 183, 165, 196, 41, 248, 160, 243, 67, 58, 161, 170, 253, 124, 163, 157, 151, 190, 162, 208, 115, 196, 181, 231, 25, 6, 180, 190, 167, 64, 182, 137, 205, 130, 183, 12, 219, 205, 178, 59, 177, 15, 179, 98, 15, 73, 177, 85, 101, 139, 176, 104, 34, 215, 187, 95, 72, 21, 186, 6, 246, 83, 184, 49, 156, 145, 185, 180, 138, 222, 188, 131, 224, 28, 189, 218, 94, 90, 191, 237, 52, 152, 190, 0, 0, 0, 0, 101, 103, 188, 184, 139, 200, 9, 170, 238, 175, 181, 18, 87, 151, 98, 143, 50, 240, 222, 55, 220, 95, 107, 37, 185, 56, 215, 157, 239, 40, 180, 197, 138, 79, 8, 125, 100, 224, 189, 111, 1, 135, 1, 215, 184, 191, 214, 74, 221, 216, 106, 242, 51, 119, 223, 224, 86, 16, 99, 88, 159, 87, 25, 80, 250, 48, 165, 232, 20, 159, 16, 250, 113, 248, 172, 66, 200, 192, 123, 223, 173, 167, 199, 103, 67, 8, 114, 117, 38, 111, 206, 205, 112, 127, 173, 149, 21, 24, 17, 45, 251, 183, 164, 63, 158, 208, 24, 135, 39, 232, 207, 26, 66, 143, 115, 162, 172, 32, 198, 176, 201, 71, 122, 8, 62, 175, 50, 160, 91, 200, 142, 24, 181, 103, 59, 10, 208, 0, 135, 178, 105, 56, 80, 47, 12, 95, 236, 151, 226, 240, 89, 133, 135, 151, 229, 61, 209, 135, 134, 101, 180, 224, 58, 221, 90, 79, 143, 207, 63, 40, 51, 119, 134, 16, 228, 234, 227, 119, 88, 82, 13, 216, 237, 64, 104, 191, 81, 248, 161, 248, 43, 240, 196, 159, 151, 72, 42, 48, 34, 90, 79, 87, 158, 226, 246, 111, 73, 127, 147, 8, 245, 199, 125, 167, 64, 213, 24, 192, 252, 109, 78, 208, 159, 53, 43, 183, 35, 141, 197, 24, 150, 159, 160, 127, 42, 39, 25, 71, 253, 186, 124, 32, 65, 2, 146, 143, 244, 16, 247, 232, 72, 168, 61, 88, 20, 155, 88, 63, 168, 35, 182, 144, 29, 49, 211, 247, 161, 137, 106, 207, 118, 20, 15, 168, 202, 172, 225, 7, 127, 190, 132, 96, 195, 6, 210, 112, 160, 94, 183, 23, 28, 230, 89, 184, 169, 244, 60, 223, 21, 76, 133, 231, 194, 209, 224, 128, 126, 105, 14, 47, 203, 123, 107, 72, 119, 195, 162, 15, 13, 203, 199, 104, 177, 115, 41, 199, 4, 97, 76, 160, 184, 217, 245, 152, 111, 68, 144, 255, 211, 252, 126, 80, 102, 238, 27, 55, 218, 86, 77, 39, 185, 14, 40, 64, 5, 182, 198, 239, 176, 164, 163, 136, 12, 28, 26, 176, 219, 129, 127, 215, 103, 57, 145, 120, 210, 43, 244, 31, 110, 147, 3, 247, 38, 59, 102, 144, 154, 131, 136, 63, 47, 145, 237, 88, 147, 41, 84, 96, 68, 180, 49, 7, 248, 12, 223, 168, 77, 30, 186, 207, 241, 166, 236, 223, 146, 254, 137, 184, 46, 70, 103, 23, 155, 84, 2, 112, 39, 236, 187, 72, 240, 113, 222, 47, 76, 201, 48, 128, 249, 219, 85, 231, 69, 99, 156, 160, 63, 107, 249, 199, 131, 211, 23, 104, 54, 193, 114, 15, 138, 121, 203, 55, 93, 228, 174, 80, 225, 92, 64, 255, 84, 78, 37, 152, 232, 246, 115, 136, 139, 174, 22, 239, 55, 22, 248, 64, 130, 4, 157, 39, 62, 188, 36, 31, 233, 33, 65, 120, 85, 153, 175, 215, 224, 139, 202, 176, 92, 51, 59, 182, 89, 237, 94, 209, 229, 85, 176, 126, 80, 71, 213, 25, 236, 255, 108, 33, 59, 98, 9, 70, 135, 218, 231, 233, 50, 200, 130, 142, 142, 112, 212, 158, 237, 40, 177, 249, 81, 144, 95, 86, 228, 130, 58, 49, 88, 58, 131, 9, 143, 167, 230, 110, 51, 31, 8, 193, 134, 13, 109, 166, 58, 181, 164, 225, 64, 189, 193, 134, 252, 5, 47, 41, 73, 23, 74, 78, 245, 175, 243, 118, 34, 50, 150, 17, 158, 138, 120, 190, 43, 152, 29, 217, 151, 32, 75, 201, 244, 120, 46, 174, 72, 192, 192, 1, 253, 210, 165, 102, 65, 106, 28, 94, 150, 247, 121, 57, 42, 79, 151, 150, 159, 93, 242, 241, 35, 229, 5, 25, 107, 77, 96, 126, 215, 245, 142, 209, 98, 231, 235, 182, 222, 95, 82, 142, 9, 194, 55, 233, 181, 122, 217, 70, 0, 104, 188, 33, 188, 208, 234, 49, 223, 136, 143, 86, 99, 48, 97, 249, 214, 34, 4, 158, 106, 154, 189, 166, 189, 7, 216, 193, 1, 191, 54, 110, 180, 173, 83, 9, 8, 21, 154, 78, 114, 29, 255, 41, 206, 165, 17, 134, 123, 183, 116, 225, 199, 15, 205, 217, 16, 146, 168, 190, 172, 42, 70, 17, 25, 56, 35, 118, 165, 128, 117, 102, 198, 216, 16, 1, 122, 96, 254, 174, 207, 114, 155, 201, 115, 202, 34, 241, 164, 87, 71, 150, 24, 239, 169, 57, 173, 253, 204, 94, 17, 69, 6, 238, 77, 118, 99, 137, 241, 206, 141, 38, 68, 220, 232, 65, 248, 100, 81, 121, 47, 249, 52, 30, 147, 65, 218, 177, 38, 83, 191, 214, 154, 235, 233, 198, 249, 179, 140, 161, 69, 11, 98, 14, 240, 25, 7, 105, 76, 161, 190, 81, 155, 60, 219, 54, 39, 132, 53, 153, 146, 150, 80, 254, 46, 46, 153, 185, 84, 38, 252, 222, 232, 158, 18, 113, 93, 140, 119, 22, 225, 52, 206, 46, 54, 169, 171, 73, 138, 17, 69, 230, 63, 3, 32, 129, 131, 187, 118, 145, 224, 227, 19, 246, 92, 91, 253, 89, 233, 73, 152, 62, 85, 241, 33, 6, 130, 108, 68, 97, 62, 212, 170, 206, 139, 198, 207, 169, 55, 126, 56, 65, 127, 214, 93, 38, 195, 110, 179, 137, 118, 124, 214, 238, 202, 196, 111, 214, 29, 89, 10, 177, 161, 225, 228, 30, 20, 243, 129, 121, 168, 75, 215, 105, 203, 19, 178, 14, 119, 171, 92, 161, 194, 185, 57, 198, 126, 1, 128, 254, 169, 156, 229, 153, 21, 36, 11, 54, 160, 54, 110, 81, 28, 142, 167, 22, 102, 134, 194, 113, 218, 62, 44, 222, 111, 44, 73, 185, 211, 148, 240, 129, 4, 9, 149, 230, 184, 177, 123, 73, 13, 163, 30, 46, 177, 27, 72, 62, 210, 67, 45, 89, 110, 251, 195, 246, 219, 233, 166, 145, 103, 81, 31, 169, 176, 204, 122, 206, 12, 116, 148, 97, 185, 102, 241, 6, 5, 222, 0, 0, 0, 0, 119, 7, 48, 150, 238, 14, 97, 44, 153, 9, 81, 186, 7, 109, 196, 25, 112, 106, 244, 143, 233, 99, 165, 53, 158, 100, 149, 163, 14, 219, 136, 50, 121, 220, 184, 164, 224, 213, 233, 30, 151, 210, 217, 136, 9, 182, 76, 43, 126, 177, 124, 189, 231, 184, 45, 7, 144, 191, 29, 145, 29, 183, 16, 100, 106, 176, 32, 242, 243, 185, 113, 72, 132, 190, 65, 222, 26, 218, 212, 125, 109, 221, 228, 235, 244, 212, 181, 81, 131, 211, 133, 199, 19, 108, 152, 86, 100, 107, 168, 192, 253, 98, 249, 122, 138, 101, 201, 236, 20, 1, 92, 79, 99, 6, 108, 217, 250, 15, 61, 99, 141, 8, 13, 245, 59, 110, 32, 200, 76, 105, 16, 94, 213, 96, 65, 228, 162, 103, 113, 114, 60, 3, 228, 209, 75, 4, 212, 71, 210, 13, 133, 253, 165, 10, 181, 107, 53, 181, 168, 250, 66, 178, 152, 108, 219, 187, 201, 214, 172, 188, 249, 64, 50, 216, 108, 227, 69, 223, 92, 117, 220, 214, 13, 207, 171, 209, 61, 89, 38, 217, 48, 172, 81, 222, 0, 58, 200, 215, 81, 128, 191, 208, 97, 22, 33, 180, 244, 181, 86, 179, 196, 35, 207, 186, 149, 153, 184, 189, 165, 15, 40, 2, 184, 158, 95, 5, 136, 8, 198, 12, 217, 178, 177, 11, 233, 36, 47, 111, 124, 135, 88, 104, 76, 17, 193, 97, 29, 171, 182, 102, 45, 61, 118, 220, 65, 144, 1, 219, 113, 6, 152, 210, 32, 188, 239, 213, 16, 42, 113, 177, 133, 137, 6, 182, 181, 31, 159, 191, 228, 165, 232, 184, 212, 51, 120, 7, 201, 162, 15, 0, 249, 52, 150, 9, 168, 142, 225, 14, 152, 24, 127, 106, 13, 187, 8, 109, 61, 45, 145, 100, 108, 151, 230, 99, 92, 1, 107, 107, 81, 244, 28, 108, 97, 98, 133, 101, 48, 216, 242, 98, 0, 78, 108, 6, 149, 237, 27, 1, 165, 123, 130, 8, 244, 193, 245, 15, 196, 87, 101, 176, 217, 198, 18, 183, 233, 80, 139, 190, 184, 234, 252, 185, 136, 124, 98, 221, 29, 223, 21, 218, 45, 73, 140, 211, 124, 243, 251, 212, 76, 101, 77, 178, 97, 88, 58, 181, 81, 206, 163, 188, 0, 116, 212, 187, 48, 226, 74, 223, 165, 65, 61, 216, 149, 215, 164, 209, 196, 109, 211, 214, 244, 251, 67, 105, 233, 106, 52, 110, 217, 252, 173, 103, 136, 70, 218, 96, 184, 208, 68, 4, 45, 115, 51, 3, 29, 229, 170, 10, 76, 95, 221, 13, 124, 201, 80, 5, 113, 60, 39, 2, 65, 170, 190, 11, 16, 16, 201, 12, 32, 134, 87, 104, 181, 37, 32, 111, 133, 179, 185, 102, 212, 9, 206, 97, 228, 159, 94, 222, 249, 14, 41, 217, 201, 152, 176, 208, 152, 34, 199, 215, 168, 180, 89, 179, 61, 23, 46, 180, 13, 129, 183, 189, 92, 59, 192, 186, 108, 173, 237, 184, 131, 32, 154, 191, 179, 182, 3, 182, 226, 12, 116, 177, 210, 154, 234, 213, 71, 57, 157, 210, 119, 175, 4, 219, 38, 21, 115, 220, 22, 131, 227, 99, 11, 18, 148, 100, 59, 132, 13, 109, 106, 62, 122, 106, 90, 168, 228, 14, 207, 11, 147, 9, 255, 157, 10, 0, 174, 39, 125, 7, 158, 177, 240, 15, 147, 68, 135, 8, 163, 210, 30, 1, 242, 104, 105, 6, 194, 254, 247, 98, 87, 93, 128, 101, 103, 203, 25, 108, 54, 113, 110, 107, 6, 231, 254, 212, 27, 118, 137, 211, 43, 224, 16, 218, 122, 90, 103, 221, 74, 204, 249, 185, 223, 111, 142, 190, 239, 249, 23, 183, 190, 67, 96, 176, 142, 213, 214, 214, 163, 232, 161, 209, 147, 126, 56, 216, 194, 196, 79, 223, 242, 82, 209, 187, 103, 241, 166, 188, 87, 103, 63, 181, 6, 221, 72, 178, 54, 75, 216, 13, 43, 218, 175, 10, 27, 76, 54, 3, 74, 246, 65, 4, 122, 96, 223, 96, 239, 195, 168, 103, 223, 85, 49, 110, 142, 239, 70, 105, 190, 121, 203, 97, 179, 140, 188, 102, 131, 26, 37, 111, 210, 160, 82, 104, 226, 54, 204, 12, 119, 149, 187, 11, 71, 3, 34, 2, 22, 185, 85, 5, 38, 47, 197, 186, 59, 190, 178, 189, 11, 40, 43, 180, 90, 146, 92, 179, 106, 4, 194, 215, 255, 167, 181, 208, 207, 49, 44, 217, 158, 139, 91, 222, 174, 29, 155, 100, 194, 176, 236, 99, 242, 38, 117, 106, 163, 156, 2, 109, 147, 10, 156, 9, 6, 169, 235, 14, 54, 63, 114, 7, 103, 133, 5, 0, 87, 19, 149, 191, 74, 130, 226, 184, 122, 20, 123, 177, 43, 174, 12, 182, 27, 56, 146, 210, 142, 155, 229, 213, 190, 13, 124, 220, 239, 183, 11, 219, 223, 33, 134, 211, 210, 212, 241, 212, 226, 66, 104, 221, 179, 248, 31, 218, 131, 110, 129, 190, 22, 205, 246, 185, 38, 91, 111, 176, 119, 225, 24, 183, 71, 119, 136, 8, 90, 230, 255, 15, 106, 112, 102, 6, 59, 202, 17, 1, 11, 92, 143, 101, 158, 255, 248, 98, 174, 105, 97, 107, 255, 211, 22, 108, 207, 69, 160, 10, 226, 120, 215, 13, 210, 238, 78, 4, 131, 84, 57, 3, 179, 194, 167, 103, 38, 97, 208, 96, 22, 247, 73, 105, 71, 77, 62, 110, 119, 219, 174, 209, 106, 74, 217, 214, 90, 220, 64, 223, 11, 102, 55, 216, 59, 240, 169, 188, 174, 83, 222, 187, 158, 197, 71, 178, 207, 127, 48, 181, 255, 233, 189, 189, 242, 28, 202, 186, 194, 138, 83, 179, 147, 48, 36, 180, 163, 166, 186, 208, 54, 5, 205, 215, 6, 147, 84, 222, 87, 41, 35, 217, 103, 191, 179, 102, 122, 46, 196, 97, 74, 184, 93, 104, 27, 2, 42, 111, 43, 148, 180, 11, 190, 55, 195, 12, 142, 161, 90, 5, 223, 27, 45, 2, 239, 141, 0, 0, 0, 0, 25, 27, 49, 65, 50, 54, 98, 130, 43, 45, 83, 195, 100, 108, 197, 4, 125, 119, 244, 69, 86, 90, 167, 134, 79, 65, 150, 199, 200, 217, 138, 8, 209, 194, 187, 73, 250, 239, 232, 138, 227, 244, 217, 203, 172, 181, 79, 12, 181, 174, 126, 77, 158, 131, 45, 142, 135, 152, 28, 207, 74, 194, 18, 81, 83, 217, 35, 16, 120, 244, 112, 211, 97, 239, 65, 146, 46, 174, 215, 85, 55, 181, 230, 20, 28, 152, 181, 215, 5, 131, 132, 150, 130, 27, 152, 89, 155, 0, 169, 24, 176, 45, 250, 219, 169, 54, 203, 154, 230, 119, 93, 93, 255, 108, 108, 28, 212, 65, 63, 223, 205, 90, 14, 158, 149, 132, 36, 162, 140, 159, 21, 227, 167, 178, 70, 32, 190, 169, 119, 97, 241, 232, 225, 166, 232, 243, 208, 231, 195, 222, 131, 36, 218, 197, 178, 101, 93, 93, 174, 170, 68, 70, 159, 235, 111, 107, 204, 40, 118, 112, 253, 105, 57, 49, 107, 174, 32, 42, 90, 239, 11, 7, 9, 44, 18, 28, 56, 109, 223, 70, 54, 243, 198, 93, 7, 178, 237, 112, 84, 113, 244, 107, 101, 48, 187, 42, 243, 247, 162, 49, 194, 182, 137, 28, 145, 117, 144, 7, 160, 52, 23, 159, 188, 251, 14, 132, 141, 186, 37, 169, 222, 121, 60, 178, 239, 56, 115, 243, 121, 255, 106, 232, 72, 190, 65, 197, 27, 125, 88, 222, 42, 60, 240, 121, 79, 5, 233, 98, 126, 68, 194, 79, 45, 135, 219, 84, 28, 198, 148, 21, 138, 1, 141, 14, 187, 64, 166, 35, 232, 131, 191, 56, 217, 194, 56, 160, 197, 13, 33, 187, 244, 76, 10, 150, 167, 143, 19, 141, 150, 206, 92, 204, 0, 9, 69, 215, 49, 72, 110, 250, 98, 139, 119, 225, 83, 202, 186, 187, 93, 84, 163, 160, 108, 21, 136, 141, 63, 214, 145, 150, 14, 151, 222, 215, 152, 80, 199, 204, 169, 17, 236, 225, 250, 210, 245, 250, 203, 147, 114, 98, 215, 92, 107, 121, 230, 29, 64, 84, 181, 222, 89, 79, 132, 159, 22, 14, 18, 88, 15, 21, 35, 25, 36, 56, 112, 218, 61, 35, 65, 155, 101, 253, 107, 167, 124, 230, 90, 230, 87, 203, 9, 37, 78, 208, 56, 100, 1, 145, 174, 163, 24, 138, 159, 226, 51, 167, 204, 33, 42, 188, 253, 96, 173, 36, 225, 175, 180, 63, 208, 238, 159, 18, 131, 45, 134, 9, 178, 108, 201, 72, 36, 171, 208, 83, 21, 234, 251, 126, 70, 41, 226, 101, 119, 104, 47, 63, 121, 246, 54, 36, 72, 183, 29, 9, 27, 116, 4, 18, 42, 53, 75, 83, 188, 242, 82, 72, 141, 179, 121, 101, 222, 112, 96, 126, 239, 49, 231, 230, 243, 254, 254, 253, 194, 191, 213, 208, 145, 124, 204, 203, 160, 61, 131, 138, 54, 250, 154, 145, 7, 187, 177, 188, 84, 120, 168, 167, 101, 57, 59, 131, 152, 75, 34, 152, 169, 10, 9, 181, 250, 201, 16, 174, 203, 136, 95, 239, 93, 79, 70, 244, 108, 14, 109, 217, 63, 205, 116, 194, 14, 140, 243, 90, 18, 67, 234, 65, 35, 2, 193, 108, 112, 193, 216, 119, 65, 128, 151, 54, 215, 71, 142, 45, 230, 6, 165, 0, 181, 197, 188, 27, 132, 132, 113, 65, 138, 26, 104, 90, 187, 91, 67, 119, 232, 152, 90, 108, 217, 217, 21, 45, 79, 30, 12, 54, 126, 95, 39, 27, 45, 156, 62, 0, 28, 221, 185, 152, 0, 18, 160, 131, 49, 83, 139, 174, 98, 144, 146, 181, 83, 209, 221, 244, 197, 22, 196, 239, 244, 87, 239, 194, 167, 148, 246, 217, 150, 213, 174, 7, 188, 233, 183, 28, 141, 168, 156, 49, 222, 107, 133, 42, 239, 42, 202, 107, 121, 237, 211, 112, 72, 172, 248, 93, 27, 111, 225, 70, 42, 46, 102, 222, 54, 225, 127, 197, 7, 160, 84, 232, 84, 99, 77, 243, 101, 34, 2, 178, 243, 229, 27, 169, 194, 164, 48, 132, 145, 103, 41, 159, 160, 38, 228, 197, 174, 184, 253, 222, 159, 249, 214, 243, 204, 58, 207, 232, 253, 123, 128, 169, 107, 188, 153, 178, 90, 253, 178, 159, 9, 62, 171, 132, 56, 127, 44, 28, 36, 176, 53, 7, 21, 241, 30, 42, 70, 50, 7, 49, 119, 115, 72, 112, 225, 180, 81, 107, 208, 245, 122, 70, 131, 54, 99, 93, 178, 119, 203, 250, 215, 78, 210, 225, 230, 15, 249, 204, 181, 204, 224, 215, 132, 141, 175, 150, 18, 74, 182, 141, 35, 11, 157, 160, 112, 200, 132, 187, 65, 137, 3, 35, 93, 70, 26, 56, 108, 7, 49, 21, 63, 196, 40, 14, 14, 133, 103, 79, 152, 66, 126, 84, 169, 3, 85, 121, 250, 192, 76, 98, 203, 129, 129, 56, 197, 31, 152, 35, 244, 94, 179, 14, 167, 157, 170, 21, 150, 220, 229, 84, 0, 27, 252, 79, 49, 90, 215, 98, 98, 153, 206, 121, 83, 216, 73, 225, 79, 23, 80, 250, 126, 86, 123, 215, 45, 149, 98, 204, 28, 212, 45, 141, 138, 19, 52, 150, 187, 82, 31, 187, 232, 145, 6, 160, 217, 208, 94, 126, 243, 236, 71, 101, 194, 173, 108, 72, 145, 110, 117, 83, 160, 47, 58, 18, 54, 232, 35, 9, 7, 169, 8, 36, 84, 106, 17, 63, 101, 43, 150, 167, 121, 228, 143, 188, 72, 165, 164, 145, 27, 102, 189, 138, 42, 39, 242, 203, 188, 224, 235, 208, 141, 161, 192, 253, 222, 98, 217, 230, 239, 35, 20, 188, 225, 189, 13, 167, 208, 252, 38, 138, 131, 63, 63, 145, 178, 126, 112, 208, 36, 185, 105, 203, 21, 248, 66, 230, 70, 59, 91, 253, 119, 122, 220, 101, 107, 181, 197, 126, 90, 244, 238, 83, 9, 55, 247, 72, 56, 118, 184, 9, 174, 177, 161, 18, 159, 240, 138, 63, 204, 51, 147, 36, 253, 114, 0, 0, 0, 0, 1, 194, 106, 55, 3, 132, 212, 110, 2, 70, 190, 89, 7, 9, 168, 220, 6, 203, 194, 235, 4, 141, 124, 178, 5, 79, 22, 133, 14, 19, 81, 184, 15, 209, 59, 143, 13, 151, 133, 214, 12, 85, 239, 225, 9, 26, 249, 100, 8, 216, 147, 83, 10, 158, 45, 10, 11, 92, 71, 61, 28, 38, 163, 112, 29, 228, 201, 71, 31, 162, 119, 30, 30, 96, 29, 41, 27, 47, 11, 172, 26, 237, 97, 155, 24, 171, 223, 194, 25, 105, 181, 245, 18, 53, 242, 200, 19, 247, 152, 255, 17, 177, 38, 166, 16, 115, 76, 145, 21, 60, 90, 20, 20, 254, 48, 35, 22, 184, 142, 122, 23, 122, 228, 77, 56, 77, 70, 224, 57, 143, 44, 215, 59, 201, 146, 142, 58, 11, 248, 185, 63, 68, 238, 60, 62, 134, 132, 11, 60, 192, 58, 82, 61, 2, 80, 101, 54, 94, 23, 88, 55, 156, 125, 111, 53, 218, 195, 54, 52, 24, 169, 1, 49, 87, 191, 132, 48, 149, 213, 179, 50, 211, 107, 234, 51, 17, 1, 221, 36, 107, 229, 144, 37, 169, 143, 167, 39, 239, 49, 254, 38, 45, 91, 201, 35, 98, 77, 76, 34, 160, 39, 123, 32, 230, 153, 34, 33, 36, 243, 21, 42, 120, 180, 40, 43, 186, 222, 31, 41, 252, 96, 70, 40, 62, 10, 113, 45, 113, 28, 244, 44, 179, 118, 195, 46, 245, 200, 154, 47, 55, 162, 173, 112, 154, 141, 192, 113, 88, 231, 247, 115, 30, 89, 174, 114, 220, 51, 153, 119, 147, 37, 28, 118, 81, 79, 43, 116, 23, 241, 114, 117, 213, 155, 69, 126, 137, 220, 120, 127, 75, 182, 79, 125, 13, 8, 22, 124, 207, 98, 33, 121, 128, 116, 164, 120, 66, 30, 147, 122, 4, 160, 202, 123, 198, 202, 253, 108, 188, 46, 176, 109, 126, 68, 135, 111, 56, 250, 222, 110, 250, 144, 233, 107, 181, 134, 108, 106, 119, 236, 91, 104, 49, 82, 2, 105, 243, 56, 53, 98, 175, 127, 8, 99, 109, 21, 63, 97, 43, 171, 102, 96, 233, 193, 81, 101, 166, 215, 212, 100, 100, 189, 227, 102, 34, 3, 186, 103, 224, 105, 141, 72, 215, 203, 32, 73, 21, 161, 23, 75, 83, 31, 78, 74, 145, 117, 121, 79, 222, 99, 252, 78, 28, 9, 203, 76, 90, 183, 146, 77, 152, 221, 165, 70, 196, 154, 152, 71, 6, 240, 175, 69, 64, 78, 246, 68, 130, 36, 193, 65, 205, 50, 68, 64, 15, 88, 115, 66, 73, 230, 42, 67, 139, 140, 29, 84, 241, 104, 80, 85, 51, 2, 103, 87, 117, 188, 62, 86, 183, 214, 9, 83, 248, 192, 140, 82, 58, 170, 187, 80, 124, 20, 226, 81, 190, 126, 213, 90, 226, 57, 232, 91, 32, 83, 223, 89, 102, 237, 134, 88, 164, 135, 177, 93, 235, 145, 52, 92, 41, 251, 3, 94, 111, 69, 90, 95, 173, 47, 109, 225, 53, 27, 128, 224, 247, 113, 183, 226, 177, 207, 238, 227, 115, 165, 217, 230, 60, 179, 92, 231, 254, 217, 107, 229, 184, 103, 50, 228, 122, 13, 5, 239, 38, 74, 56, 238, 228, 32, 15, 236, 162, 158, 86, 237, 96, 244, 97, 232, 47, 226, 228, 233, 237, 136, 211, 235, 171, 54, 138, 234, 105, 92, 189, 253, 19, 184, 240, 252, 209, 210, 199, 254, 151, 108, 158, 255, 85, 6, 169, 250, 26, 16, 44, 251, 216, 122, 27, 249, 158, 196, 66, 248, 92, 174, 117, 243, 0, 233, 72, 242, 194, 131, 127, 240, 132, 61, 38, 241, 70, 87, 17, 244, 9, 65, 148, 245, 203, 43, 163, 247, 141, 149, 250, 246, 79, 255, 205, 217, 120, 93, 96, 216, 186, 55, 87, 218, 252, 137, 14, 219, 62, 227, 57, 222, 113, 245, 188, 223, 179, 159, 139, 221, 245, 33, 210, 220, 55, 75, 229, 215, 107, 12, 216, 214, 169, 102, 239, 212, 239, 216, 182, 213, 45, 178, 129, 208, 98, 164, 4, 209, 160, 206, 51, 211, 230, 112, 106, 210, 36, 26, 93, 197, 94, 254, 16, 196, 156, 148, 39, 198, 218, 42, 126, 199, 24, 64, 73, 194, 87, 86, 204, 195, 149, 60, 251, 193, 211, 130, 162, 192, 17, 232, 149, 203, 77, 175, 168, 202, 143, 197, 159, 200, 201, 123, 198, 201, 11, 17, 241, 204, 68, 7, 116, 205, 134, 109, 67, 207, 192, 211, 26, 206, 2, 185, 45, 145, 175, 150, 64, 144, 109, 252, 119, 146, 43, 66, 46, 147, 233, 40, 25, 150, 166, 62, 156, 151, 100, 84, 171, 149, 34, 234, 242, 148, 224, 128, 197, 159, 188, 199, 248, 158, 126, 173, 207, 156, 56, 19, 150, 157, 250, 121, 161, 152, 181, 111, 36, 153, 119, 5, 19, 155, 49, 187, 74, 154, 243, 209, 125, 141, 137, 53, 48, 140, 75, 95, 7, 142, 13, 225, 94, 143, 207, 139, 105, 138, 128, 157, 236, 139, 66, 247, 219, 137, 4, 73, 130, 136, 198, 35, 181, 131, 154, 100, 136, 130, 88, 14, 191, 128, 30, 176, 230, 129, 220, 218, 209, 132, 147, 204, 84, 133, 81, 166, 99, 135, 23, 24, 58, 134, 213, 114, 13, 169, 226, 208, 160, 168, 32, 186, 151, 170, 102, 4, 206, 171, 164, 110, 249, 174, 235, 120, 124, 175, 41, 18, 75, 173, 111, 172, 18, 172, 173, 198, 37, 167, 241, 129, 24, 166, 51, 235, 47, 164, 117, 85, 118, 165, 183, 63, 65, 160, 248, 41, 196, 161, 58, 67, 243, 163, 124, 253, 170, 162, 190, 151, 157, 181, 196, 115, 208, 180, 6, 25, 231, 182, 64, 167, 190, 183, 130, 205, 137, 178, 205, 219, 12, 179, 15, 177, 59, 177, 73, 15, 98, 176, 139, 101, 85, 187, 215, 34, 104, 186, 21, 72, 95, 184, 83, 246, 6, 185, 145, 156, 49, 188, 222, 138, 180, 189, 28, 224, 131, 191, 90, 94, 218, 190, 152, 52, 237, 0, 0, 0, 0, 184, 188, 103, 101, 170, 9, 200, 139, 18, 181, 175, 238, 143, 98, 151, 87, 55, 222, 240, 50, 37, 107, 95, 220, 157, 215, 56, 185, 197, 180, 40, 239, 125, 8, 79, 138, 111, 189, 224, 100, 215, 1, 135, 1, 74, 214, 191, 184, 242, 106, 216, 221, 224, 223, 119, 51, 88, 99, 16, 86, 80, 25, 87, 159, 232, 165, 48, 250, 250, 16, 159, 20, 66, 172, 248, 113, 223, 123, 192, 200, 103, 199, 167, 173, 117, 114, 8, 67, 205, 206, 111, 38, 149, 173, 127, 112, 45, 17, 24, 21, 63, 164, 183, 251, 135, 24, 208, 158, 26, 207, 232, 39, 162, 115, 143, 66, 176, 198, 32, 172, 8, 122, 71, 201, 160, 50, 175, 62, 24, 142, 200, 91, 10, 59, 103, 181, 178, 135, 0, 208, 47, 80, 56, 105, 151, 236, 95, 12, 133, 89, 240, 226, 61, 229, 151, 135, 101, 134, 135, 209, 221, 58, 224, 180, 207, 143, 79, 90, 119, 51, 40, 63, 234, 228, 16, 134, 82, 88, 119, 227, 64, 237, 216, 13, 248, 81, 191, 104, 240, 43, 248, 161, 72, 151, 159, 196, 90, 34, 48, 42, 226, 158, 87, 79, 127, 73, 111, 246, 199, 245, 8, 147, 213, 64, 167, 125, 109, 252, 192, 24, 53, 159, 208, 78, 141, 35, 183, 43, 159, 150, 24, 197, 39, 42, 127, 160, 186, 253, 71, 25, 2, 65, 32, 124, 16, 244, 143, 146, 168, 72, 232, 247, 155, 20, 88, 61, 35, 168, 63, 88, 49, 29, 144, 182, 137, 161, 247, 211, 20, 118, 207, 106, 172, 202, 168, 15, 190, 127, 7, 225, 6, 195, 96, 132, 94, 160, 112, 210, 230, 28, 23, 183, 244, 169, 184, 89, 76, 21, 223, 60, 209, 194, 231, 133, 105, 126, 128, 224, 123, 203, 47, 14, 195, 119, 72, 107, 203, 13, 15, 162, 115, 177, 104, 199, 97, 4, 199, 41, 217, 184, 160, 76, 68, 111, 152, 245, 252, 211, 255, 144, 238, 102, 80, 126, 86, 218, 55, 27, 14, 185, 39, 77, 182, 5, 64, 40, 164, 176, 239, 198, 28, 12, 136, 163, 129, 219, 176, 26, 57, 103, 215, 127, 43, 210, 120, 145, 147, 110, 31, 244, 59, 38, 247, 3, 131, 154, 144, 102, 145, 47, 63, 136, 41, 147, 88, 237, 180, 68, 96, 84, 12, 248, 7, 49, 30, 77, 168, 223, 166, 241, 207, 186, 254, 146, 223, 236, 70, 46, 184, 137, 84, 155, 23, 103, 236, 39, 112, 2, 113, 240, 72, 187, 201, 76, 47, 222, 219, 249, 128, 48, 99, 69, 231, 85, 107, 63, 160, 156, 211, 131, 199, 249, 193, 54, 104, 23, 121, 138, 15, 114, 228, 93, 55, 203, 92, 225, 80, 174, 78, 84, 255, 64, 246, 232, 152, 37, 174, 139, 136, 115, 22, 55, 239, 22, 4, 130, 64, 248, 188, 62, 39, 157, 33, 233, 31, 36, 153, 85, 120, 65, 139, 224, 215, 175, 51, 92, 176, 202, 237, 89, 182, 59, 85, 229, 209, 94, 71, 80, 126, 176, 255, 236, 25, 213, 98, 59, 33, 108, 218, 135, 70, 9, 200, 50, 233, 231, 112, 142, 142, 130, 40, 237, 158, 212, 144, 81, 249, 177, 130, 228, 86, 95, 58, 88, 49, 58, 167, 143, 9, 131, 31, 51, 110, 230, 13, 134, 193, 8, 181, 58, 166, 109, 189, 64, 225, 164, 5, 252, 134, 193, 23, 73, 41, 47, 175, 245, 78, 74, 50, 34, 118, 243, 138, 158, 17, 150, 152, 43, 190, 120, 32, 151, 217, 29, 120, 244, 201, 75, 192, 72, 174, 46, 210, 253, 1, 192, 106, 65, 102, 165, 247, 150, 94, 28, 79, 42, 57, 121, 93, 159, 150, 151, 229, 35, 241, 242, 77, 107, 25, 5, 245, 215, 126, 96, 231, 98, 209, 142, 95, 222, 182, 235, 194, 9, 142, 82, 122, 181, 233, 55, 104, 0, 70, 217, 208, 188, 33, 188, 136, 223, 49, 234, 48, 99, 86, 143, 34, 214, 249, 97, 154, 106, 158, 4, 7, 189, 166, 189, 191, 1, 193, 216, 173, 180, 110, 54, 21, 8, 9, 83, 29, 114, 78, 154, 165, 206, 41, 255, 183, 123, 134, 17, 15, 199, 225, 116, 146, 16, 217, 205, 42, 172, 190, 168, 56, 25, 17, 70, 128, 165, 118, 35, 216, 198, 102, 117, 96, 122, 1, 16, 114, 207, 174, 254, 202, 115, 201, 155, 87, 164, 241, 34, 239, 24, 150, 71, 253, 173, 57, 169, 69, 17, 94, 204, 118, 77, 238, 6, 206, 241, 137, 99, 220, 68, 38, 141, 100, 248, 65, 232, 249, 47, 121, 81, 65, 147, 30, 52, 83, 38, 177, 218, 235, 154, 214, 191, 179, 249, 198, 233, 11, 69, 161, 140, 25, 240, 14, 98, 161, 76, 105, 7, 60, 155, 81, 190, 132, 39, 54, 219, 150, 146, 153, 53, 46, 46, 254, 80, 38, 84, 185, 153, 158, 232, 222, 252, 140, 93, 113, 18, 52, 225, 22, 119, 169, 54, 46, 206, 17, 138, 73, 171, 3, 63, 230, 69, 187, 131, 129, 32, 227, 224, 145, 118, 91, 92, 246, 19, 73, 233, 89, 253, 241, 85, 62, 152, 108, 130, 6, 33, 212, 62, 97, 68, 198, 139, 206, 170, 126, 55, 169, 207, 214, 127, 65, 56, 110, 195, 38, 93, 124, 118, 137, 179, 196, 202, 238, 214, 89, 29, 214, 111, 225, 161, 177, 10, 243, 20, 30, 228, 75, 168, 121, 129, 19, 203, 105, 215, 171, 119, 14, 178, 185, 194, 161, 92, 1, 126, 198, 57, 156, 169, 254, 128, 36, 21, 153, 229, 54, 160, 54, 11, 142, 28, 81, 110, 134, 102, 22, 167, 62, 218, 113, 194, 44, 111, 222, 44, 148, 211, 185, 73, 9, 4, 129, 240, 177, 184, 230, 149, 163, 13, 73, 123, 27, 177, 46, 30, 67, 210, 62, 72, 251, 110, 89, 45, 233, 219, 246, 195, 81, 103, 145, 166, 204, 176, 169, 31, 116, 12, 206, 122, 102, 185, 97, 148, 222, 5, 6, 241, 4, 39, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 137, 71, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 8, 0, 140, 0, 8, 0, 76, 0, 8, 0, 204, 0, 8, 0, 44, 0, 8, 0, 172, 0, 8, 0, 108, 0, 8, 0, 236, 0, 8, 0, 28, 0, 8, 0, 156, 0, 8, 0, 92, 0, 8, 0, 220, 0, 8, 0, 60, 0, 8, 0, 188, 0, 8, 0, 124, 0, 8, 0, 252, 0, 8, 0, 2, 0, 8, 0, 130, 0, 8, 0, 66, 0, 8, 0, 194, 0, 8, 0, 34, 0, 8, 0, 162, 0, 8, 0, 98, 0, 8, 0, 226, 0, 8, 0, 18, 0, 8, 0, 146, 0, 8, 0, 82, 0, 8, 0, 210, 0, 8, 0, 50, 0, 8, 0, 178, 0, 8, 0, 114, 0, 8, 0, 242, 0, 8, 0, 10, 0, 8, 0, 138, 0, 8, 0, 74, 0, 8, 0, 202, 0, 8, 0, 42, 0, 8, 0, 170, 0, 8, 0, 106, 0, 8, 0, 234, 0, 8, 0, 26, 0, 8, 0, 154, 0, 8, 0, 90, 0, 8, 0, 218, 0, 8, 0, 58, 0, 8, 0, 186, 0, 8, 0, 122, 0, 8, 0, 250, 0, 8, 0, 6, 0, 8, 0, 134, 0, 8, 0, 70, 0, 8, 0, 198, 0, 8, 0, 38, 0, 8, 0, 166, 0, 8, 0, 102, 0, 8, 0, 230, 0, 8, 0, 22, 0, 8, 0, 150, 0, 8, 0, 86, 0, 8, 0, 214, 0, 8, 0, 54, 0, 8, 0, 182, 0, 8, 0, 118, 0, 8, 0, 246, 0, 8, 0, 14, 0, 8, 0, 142, 0, 8, 0, 78, 0, 8, 0, 206, 0, 8, 0, 46, 0, 8, 0, 174, 0, 8, 0, 110, 0, 8, 0, 238, 0, 8, 0, 30, 0, 8, 0, 158, 0, 8, 0, 94, 0, 8, 0, 222, 0, 8, 0, 62, 0, 8, 0, 190, 0, 8, 0, 126, 0, 8, 0, 254, 0, 8, 0, 1, 0, 8, 0, 129, 0, 8, 0, 65, 0, 8, 0, 193, 0, 8, 0, 33, 0, 8, 0, 161, 0, 8, 0, 97, 0, 8, 0, 225, 0, 8, 0, 17, 0, 8, 0, 145, 0, 8, 0, 81, 0, 8, 0, 209, 0, 8, 0, 49, 0, 8, 0, 177, 0, 8, 0, 113, 0, 8, 0, 241, 0, 8, 0, 9, 0, 8, 0, 137, 0, 8, 0, 73, 0, 8, 0, 201, 0, 8, 0, 41, 0, 8, 0, 169, 0, 8, 0, 105, 0, 8, 0, 233, 0, 8, 0, 25, 0, 8, 0, 153, 0, 8, 0, 89, 0, 8, 0, 217, 0, 8, 0, 57, 0, 8, 0, 185, 0, 8, 0, 121, 0, 8, 0, 249, 0, 8, 0, 5, 0, 8, 0, 133, 0, 8, 0, 69, 0, 8, 0, 197, 0, 8, 0, 37, 0, 8, 0, 165, 0, 8, 0, 101, 0, 8, 0, 229, 0, 8, 0, 21, 0, 8, 0, 149, 0, 8, 0, 85, 0, 8, 0, 213, 0, 8, 0, 53, 0, 8, 0, 181, 0, 8, 0, 117, 0, 8, 0, 245, 0, 8, 0, 13, 0, 8, 0, 141, 0, 8, 0, 77, 0, 8, 0, 205, 0, 8, 0, 45, 0, 8, 0, 173, 0, 8, 0, 109, 0, 8, 0, 237, 0, 8, 0, 29, 0, 8, 0, 157, 0, 8, 0, 93, 0, 8, 0, 221, 0, 8, 0, 61, 0, 8, 0, 189, 0, 8, 0, 125, 0, 8, 0, 253, 0, 8, 0, 19, 0, 9, 0, 19, 1, 9, 0, 147, 0, 9, 0, 147, 1, 9, 0, 83, 0, 9, 0, 83, 1, 9, 0, 211, 0, 9, 0, 211, 1, 9, 0, 51, 0, 9, 0, 51, 1, 9, 0, 179, 0, 9, 0, 179, 1, 9, 0, 115, 0, 9, 0, 115, 1, 9, 0, 243, 0, 9, 0, 243, 1, 9, 0, 11, 0, 9, 0, 11, 1, 9, 0, 139, 0, 9, 0, 139, 1, 9, 0, 75, 0, 9, 0, 75, 1, 9, 0, 203, 0, 9, 0, 203, 1, 9, 0, 43, 0, 9, 0, 43, 1, 9, 0, 171, 0, 9, 0, 171, 1, 9, 0, 107, 0, 9, 0, 107, 1, 9, 0, 235, 0, 9, 0, 235, 1, 9, 0, 27, 0, 9, 0, 27, 1, 9, 0, 155, 0, 9, 0, 155, 1, 9, 0, 91, 0, 9, 0, 91, 1, 9, 0, 219, 0, 9, 0, 219, 1, 9, 0, 59, 0, 9, 0, 59, 1, 9, 0, 187, 0, 9, 0, 187, 1, 9, 0, 123, 0, 9, 0, 123, 1, 9, 0, 251, 0, 9, 0, 251, 1, 9, 0, 7, 0, 9, 0, 7, 1, 9, 0, 135, 0, 9, 0, 135, 1, 9, 0, 71, 0, 9, 0, 71, 1, 9, 0, 199, 0, 9, 0, 199, 1, 9, 0, 39, 0, 9, 0, 39, 1, 9, 0, 167, 0, 9, 0, 167, 1, 9, 0, 103, 0, 9, 0, 103, 1, 9, 0, 231, 0, 9, 0, 231, 1, 9, 0, 23, 0, 9, 0, 23, 1, 9, 0, 151, 0, 9, 0, 151, 1, 9, 0, 87, 0, 9, 0, 87, 1, 9, 0, 215, 0, 9, 0, 215, 1, 9, 0, 55, 0, 9, 0, 55, 1, 9, 0, 183, 0, 9, 0, 183, 1, 9, 0, 119, 0, 9, 0, 119, 1, 9, 0, 247, 0, 9, 0, 247, 1, 9, 0, 15, 0, 9, 0, 15, 1, 9, 0, 143, 0, 9, 0, 143, 1, 9, 0, 79, 0, 9, 0, 79, 1, 9, 0, 207, 0, 9, 0, 207, 1, 9, 0, 47, 0, 9, 0, 47, 1, 9, 0, 175, 0, 9, 0, 175, 1, 9, 0, 111, 0, 9, 0, 111, 1, 9, 0, 239, 0, 9, 0, 239, 1, 9, 0, 31, 0, 9, 0, 31, 1, 9, 0, 159, 0, 9, 0, 159, 1, 9, 0, 95, 0, 9, 0, 95, 1, 9, 0, 223, 0, 9, 0, 223, 1, 9, 0, 63, 0, 9, 0, 63, 1, 9, 0, 191, 0, 9, 0, 191, 1, 9, 0, 127, 0, 9, 0, 127, 1, 9, 0, 255, 0, 9, 0, 255, 1, 9, 0, 0, 0, 7, 0, 64, 0, 7, 0, 32, 0, 7, 0, 96, 0, 7, 0, 16, 0, 7, 0, 80, 0, 7, 0, 48, 0, 7, 0, 112, 0, 7, 0, 8, 0, 7, 0, 72, 0, 7, 0, 40, 0, 7, 0, 104, 0, 7, 0, 24, 0, 7, 0, 88, 0, 7, 0, 56, 0, 7, 0, 120, 0, 7, 0, 4, 0, 7, 0, 68, 0, 7, 0, 36, 0, 7, 0, 100, 0, 7, 0, 20, 0, 7, 0, 84, 0, 7, 0, 52, 0, 7, 0, 116, 0, 7, 0, 3, 0, 8, 0, 131, 0, 8, 0, 67, 0, 8, 0, 195, 0, 8, 0, 35, 0, 8, 0, 163, 0, 8, 0, 99, 0, 8, 0, 227, 0, 8, 0, 0, 0, 5, 0, 16, 0, 5, 0, 8, 0, 5 ], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);
allocate([ 24, 0, 5, 0, 4, 0, 5, 0, 20, 0, 5, 0, 12, 0, 5, 0, 28, 0, 5, 0, 2, 0, 5, 0, 18, 0, 5, 0, 10, 0, 5, 0, 26, 0, 5, 0, 6, 0, 5, 0, 22, 0, 5, 0, 14, 0, 5, 0, 30, 0, 5, 0, 1, 0, 5, 0, 17, 0, 5, 0, 9, 0, 5, 0, 25, 0, 5, 0, 5, 0, 5, 0, 21, 0, 5, 0, 13, 0, 5, 0, 29, 0, 5, 0, 3, 0, 5, 0, 19, 0, 5, 0, 11, 0, 5, 0, 27, 0, 5, 0, 7, 0, 5, 0, 23, 0, 5, 0, 96, 7, 0, 0, 0, 8, 80, 0, 0, 8, 16, 0, 20, 8, 115, 0, 18, 7, 31, 0, 0, 8, 112, 0, 0, 8, 48, 0, 0, 9, 192, 0, 16, 7, 10, 0, 0, 8, 96, 0, 0, 8, 32, 0, 0, 9, 160, 0, 0, 8, 0, 0, 0, 8, 128, 0, 0, 8, 64, 0, 0, 9, 224, 0, 16, 7, 6, 0, 0, 8, 88, 0, 0, 8, 24, 0, 0, 9, 144, 0, 19, 7, 59, 0, 0, 8, 120, 0, 0, 8, 56, 0, 0, 9, 208, 0, 17, 7, 17, 0, 0, 8, 104, 0, 0, 8, 40, 0, 0, 9, 176, 0, 0, 8, 8, 0, 0, 8, 136, 0, 0, 8, 72, 0, 0, 9, 240, 0, 16, 7, 4, 0, 0, 8, 84, 0, 0, 8, 20, 0, 21, 8, 227, 0, 19, 7, 43, 0, 0, 8, 116, 0, 0, 8, 52, 0, 0, 9, 200, 0, 17, 7, 13, 0, 0, 8, 100, 0, 0, 8, 36, 0, 0, 9, 168, 0, 0, 8, 4, 0, 0, 8, 132, 0, 0, 8, 68, 0, 0, 9, 232, 0, 16, 7, 8, 0, 0, 8, 92, 0, 0, 8, 28, 0, 0, 9, 152, 0, 20, 7, 83, 0, 0, 8, 124, 0, 0, 8, 60, 0, 0, 9, 216, 0, 18, 7, 23, 0, 0, 8, 108, 0, 0, 8, 44, 0, 0, 9, 184, 0, 0, 8, 12, 0, 0, 8, 140, 0, 0, 8, 76, 0, 0, 9, 248, 0, 16, 7, 3, 0, 0, 8, 82, 0, 0, 8, 18, 0, 21, 8, 163, 0, 19, 7, 35, 0, 0, 8, 114, 0, 0, 8, 50, 0, 0, 9, 196, 0, 17, 7, 11, 0, 0, 8, 98, 0, 0, 8, 34, 0, 0, 9, 164, 0, 0, 8, 2, 0, 0, 8, 130, 0, 0, 8, 66, 0, 0, 9, 228, 0, 16, 7, 7, 0, 0, 8, 90, 0, 0, 8, 26, 0, 0, 9, 148, 0, 20, 7, 67, 0, 0, 8, 122, 0, 0, 8, 58, 0, 0, 9, 212, 0, 18, 7, 19, 0, 0, 8, 106, 0, 0, 8, 42, 0, 0, 9, 180, 0, 0, 8, 10, 0, 0, 8, 138, 0, 0, 8, 74, 0, 0, 9, 244, 0, 16, 7, 5, 0, 0, 8, 86, 0, 0, 8, 22, 0, 64, 8, 0, 0, 19, 7, 51, 0, 0, 8, 118, 0, 0, 8, 54, 0, 0, 9, 204, 0, 17, 7, 15, 0, 0, 8, 102, 0, 0, 8, 38, 0, 0, 9, 172, 0, 0, 8, 6, 0, 0, 8, 134, 0, 0, 8, 70, 0, 0, 9, 236, 0, 16, 7, 9, 0, 0, 8, 94, 0, 0, 8, 30, 0, 0, 9, 156, 0, 20, 7, 99, 0, 0, 8, 126, 0, 0, 8, 62, 0, 0, 9, 220, 0, 18, 7, 27, 0, 0, 8, 110, 0, 0, 8, 46, 0, 0, 9, 188, 0, 0, 8, 14, 0, 0, 8, 142, 0, 0, 8, 78, 0, 0, 9, 252, 0, 96, 7, 0, 0, 0, 8, 81, 0, 0, 8, 17, 0, 21, 8, 131, 0, 18, 7, 31, 0, 0, 8, 113, 0, 0, 8, 49, 0, 0, 9, 194, 0, 16, 7, 10, 0, 0, 8, 97, 0, 0, 8, 33, 0, 0, 9, 162, 0, 0, 8, 1, 0, 0, 8, 129, 0, 0, 8, 65, 0, 0, 9, 226, 0, 16, 7, 6, 0, 0, 8, 89, 0, 0, 8, 25, 0, 0, 9, 146, 0, 19, 7, 59, 0, 0, 8, 121, 0, 0, 8, 57, 0, 0, 9, 210, 0, 17, 7, 17, 0, 0, 8, 105, 0, 0, 8, 41, 0, 0, 9, 178, 0, 0, 8, 9, 0, 0, 8, 137, 0, 0, 8, 73, 0, 0, 9, 242, 0, 16, 7, 4, 0, 0, 8, 85, 0, 0, 8, 21, 0, 16, 8, 2, 1, 19, 7, 43, 0, 0, 8, 117, 0, 0, 8, 53, 0, 0, 9, 202, 0, 17, 7, 13, 0, 0, 8, 101, 0, 0, 8, 37, 0, 0, 9, 170, 0, 0, 8, 5, 0, 0, 8, 133, 0, 0, 8, 69, 0, 0, 9, 234, 0, 16, 7, 8, 0, 0, 8, 93, 0, 0, 8, 29, 0, 0, 9, 154, 0, 20, 7, 83, 0, 0, 8, 125, 0, 0, 8, 61, 0, 0, 9, 218, 0, 18, 7, 23, 0, 0, 8, 109, 0, 0, 8, 45, 0, 0, 9, 186, 0, 0, 8, 13, 0, 0, 8, 141, 0, 0, 8, 77, 0, 0, 9, 250, 0, 16, 7, 3, 0, 0, 8, 83, 0, 0, 8, 19, 0, 21, 8, 195, 0, 19, 7, 35, 0, 0, 8, 115, 0, 0, 8, 51, 0, 0, 9, 198, 0, 17, 7, 11, 0, 0, 8, 99, 0, 0, 8, 35, 0, 0, 9, 166, 0, 0, 8, 3, 0, 0, 8, 131, 0, 0, 8, 67, 0, 0, 9, 230, 0, 16, 7, 7, 0, 0, 8, 91, 0, 0, 8, 27, 0, 0, 9, 150, 0, 20, 7, 67, 0, 0, 8, 123, 0, 0, 8, 59, 0, 0, 9, 214, 0, 18, 7, 19, 0, 0, 8, 107, 0, 0, 8, 43, 0, 0, 9, 182, 0, 0, 8, 11, 0, 0, 8, 139, 0, 0, 8, 75, 0, 0, 9, 246, 0, 16, 7, 5, 0, 0, 8, 87, 0, 0, 8, 23, 0, 64, 8, 0, 0, 19, 7, 51, 0, 0, 8, 119, 0, 0, 8, 55, 0, 0, 9, 206, 0, 17, 7, 15, 0, 0, 8, 103, 0, 0, 8, 39, 0, 0, 9, 174, 0, 0, 8, 7, 0, 0, 8, 135, 0, 0, 8, 71, 0, 0, 9, 238, 0, 16, 7, 9, 0, 0, 8, 95, 0, 0, 8, 31, 0, 0, 9, 158, 0, 20, 7, 99, 0, 0, 8, 127, 0, 0, 8, 63, 0, 0, 9, 222, 0, 18, 7, 27, 0, 0, 8, 111, 0, 0, 8, 47, 0, 0, 9, 190, 0, 0, 8, 15, 0, 0, 8, 143, 0, 0, 8, 79, 0, 0, 9, 254, 0, 96, 7, 0, 0, 0, 8, 80, 0, 0, 8, 16, 0, 20, 8, 115, 0, 18, 7, 31, 0, 0, 8, 112, 0, 0, 8, 48, 0, 0, 9, 193, 0, 16, 7, 10, 0, 0, 8, 96, 0, 0, 8, 32, 0, 0, 9, 161, 0, 0, 8, 0, 0, 0, 8, 128, 0, 0, 8, 64, 0, 0, 9, 225, 0, 16, 7, 6, 0, 0, 8, 88, 0, 0, 8, 24, 0, 0, 9, 145, 0, 19, 7, 59, 0, 0, 8, 120, 0, 0, 8, 56, 0, 0, 9, 209, 0, 17, 7, 17, 0, 0, 8, 104, 0, 0, 8, 40, 0, 0, 9, 177, 0, 0, 8, 8, 0, 0, 8, 136, 0, 0, 8, 72, 0, 0, 9, 241, 0, 16, 7, 4, 0, 0, 8, 84, 0, 0, 8, 20, 0, 21, 8, 227, 0, 19, 7, 43, 0, 0, 8, 116, 0, 0, 8, 52, 0, 0, 9, 201, 0, 17, 7, 13, 0, 0, 8, 100, 0, 0, 8, 36, 0, 0, 9, 169, 0, 0, 8, 4, 0, 0, 8, 132, 0, 0, 8, 68, 0, 0, 9, 233, 0, 16, 7, 8, 0, 0, 8, 92, 0, 0, 8, 28, 0, 0, 9, 153, 0, 20, 7, 83, 0, 0, 8, 124, 0, 0, 8, 60, 0, 0, 9, 217, 0, 18, 7, 23, 0, 0, 8, 108, 0, 0, 8, 44, 0, 0, 9, 185, 0, 0, 8, 12, 0, 0, 8, 140, 0, 0, 8, 76, 0, 0, 9, 249, 0, 16, 7, 3, 0, 0, 8, 82, 0, 0, 8, 18, 0, 21, 8, 163, 0, 19, 7, 35, 0, 0, 8, 114, 0, 0, 8, 50, 0, 0, 9, 197, 0, 17, 7, 11, 0, 0, 8, 98, 0, 0, 8, 34, 0, 0, 9, 165, 0, 0, 8, 2, 0, 0, 8, 130, 0, 0, 8, 66, 0, 0, 9, 229, 0, 16, 7, 7, 0, 0, 8, 90, 0, 0, 8, 26, 0, 0, 9, 149, 0, 20, 7, 67, 0, 0, 8, 122, 0, 0, 8, 58, 0, 0, 9, 213, 0, 18, 7, 19, 0, 0, 8, 106, 0, 0, 8, 42, 0, 0, 9, 181, 0, 0, 8, 10, 0, 0, 8, 138, 0, 0, 8, 74, 0, 0, 9, 245, 0, 16, 7, 5, 0, 0, 8, 86, 0, 0, 8, 22, 0, 64, 8, 0, 0, 19, 7, 51, 0, 0, 8, 118, 0, 0, 8, 54, 0, 0, 9, 205, 0, 17, 7, 15, 0, 0, 8, 102, 0, 0, 8, 38, 0, 0, 9, 173, 0, 0, 8, 6, 0, 0, 8, 134, 0, 0, 8, 70, 0, 0, 9, 237, 0, 16, 7, 9, 0, 0, 8, 94, 0, 0, 8, 30, 0, 0, 9, 157, 0, 20, 7, 99, 0, 0, 8, 126, 0, 0, 8, 62, 0, 0, 9, 221, 0, 18, 7, 27, 0, 0, 8, 110, 0, 0, 8, 46, 0, 0, 9, 189, 0, 0, 8, 14, 0, 0, 8, 142, 0, 0, 8, 78, 0, 0, 9, 253, 0, 96, 7, 0, 0, 0, 8, 81, 0, 0, 8, 17, 0, 21, 8, 131, 0, 18, 7, 31, 0, 0, 8, 113, 0, 0, 8, 49, 0, 0, 9, 195, 0, 16, 7, 10, 0, 0, 8, 97, 0, 0, 8, 33, 0, 0, 9, 163, 0, 0, 8, 1, 0, 0, 8, 129, 0, 0, 8, 65, 0, 0, 9, 227, 0, 16, 7, 6, 0, 0, 8, 89, 0, 0, 8, 25, 0, 0, 9, 147, 0, 19, 7, 59, 0, 0, 8, 121, 0, 0, 8, 57, 0, 0, 9, 211, 0, 17, 7, 17, 0, 0, 8, 105, 0, 0, 8, 41, 0, 0, 9, 179, 0, 0, 8, 9, 0, 0, 8, 137, 0, 0, 8, 73, 0, 0, 9, 243, 0, 16, 7, 4, 0, 0, 8, 85, 0, 0, 8, 21, 0, 16, 8, 2, 1, 19, 7, 43, 0, 0, 8, 117, 0, 0, 8, 53, 0, 0, 9, 203, 0, 17, 7, 13, 0, 0, 8, 101, 0, 0, 8, 37, 0, 0, 9, 171, 0, 0, 8, 5, 0, 0, 8, 133, 0, 0, 8, 69, 0, 0, 9, 235, 0, 16, 7, 8, 0, 0, 8, 93, 0, 0, 8, 29, 0, 0, 9, 155, 0, 20, 7, 83, 0, 0, 8, 125, 0, 0, 8, 61, 0, 0, 9, 219, 0, 18, 7, 23, 0, 0, 8, 109, 0, 0, 8, 45, 0, 0, 9, 187, 0, 0, 8, 13, 0, 0, 8, 141, 0, 0, 8, 77, 0, 0, 9, 251, 0, 16, 7, 3, 0, 0, 8, 83, 0, 0, 8, 19, 0, 21, 8, 195, 0, 19, 7, 35, 0, 0, 8, 115, 0, 0, 8, 51, 0, 0, 9, 199, 0, 17, 7, 11, 0, 0, 8, 99, 0, 0, 8, 35, 0, 0, 9, 167, 0, 0, 8, 3, 0, 0, 8, 131, 0, 0, 8, 67, 0, 0, 9, 231, 0, 16, 7, 7, 0, 0, 8, 91, 0, 0, 8, 27, 0, 0, 9, 151, 0, 20, 7, 67, 0, 0, 8, 123, 0, 0, 8, 59, 0, 0, 9, 215, 0, 18, 7, 19, 0, 0, 8, 107, 0, 0, 8, 43, 0, 0, 9, 183, 0, 0, 8, 11, 0, 0, 8, 139, 0, 0, 8, 75, 0, 0, 9, 247, 0, 16, 7, 5, 0, 0, 8, 87, 0, 0, 8, 23, 0, 64, 8, 0, 0, 19, 7, 51, 0, 0, 8, 119, 0, 0, 8, 55, 0, 0, 9, 207, 0, 17, 7, 15, 0, 0, 8, 103, 0, 0, 8, 39, 0, 0, 9, 175, 0, 0, 8, 7, 0, 0, 8, 135, 0, 0, 8, 71, 0, 0, 9, 239, 0, 16, 7, 9, 0, 0, 8, 95, 0, 0, 8, 31, 0, 0, 9, 159, 0, 20, 7, 99, 0, 0, 8, 127, 0, 0, 8, 63, 0, 0, 9, 223, 0, 18, 7, 27, 0, 0, 8, 111, 0, 0, 8, 47, 0, 0, 9, 191, 0, 0, 8, 15, 0, 0, 8, 143, 0, 0, 8, 79, 0, 0, 9, 255, 0, 16, 5, 1, 0, 23, 5, 1, 1, 19, 5, 17, 0, 27, 5, 1, 16, 17, 5, 5, 0, 25, 5, 1, 4, 21, 5, 65, 0, 29, 5, 1, 64, 16, 5, 3, 0, 24, 5, 1, 2, 20, 5, 33, 0, 28, 5, 1, 32, 18, 5, 9, 0, 26, 5, 1, 8, 22, 5, 129, 0, 64, 5, 0, 0, 16, 5, 2, 0, 23, 5, 129, 1, 19, 5, 25, 0, 27, 5, 1, 24, 17, 5, 7, 0, 25, 5, 1, 6, 21, 5, 97, 0, 29, 5, 1, 96, 16, 5, 4, 0, 24, 5, 1, 3, 20, 5, 49, 0, 28, 5, 1, 48, 18, 5, 13, 0, 26, 5, 1, 12, 22, 5, 193, 0, 64, 5, 0, 0, 16, 0, 17, 0, 18, 0, 0, 0, 8, 0, 7, 0, 9, 0, 6, 0, 10, 0, 5, 0, 11, 0, 4, 0, 12, 0, 3, 0, 13, 0, 2, 0, 14, 0, 1, 0, 15, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 7, 0, 9, 0, 13, 0, 17, 0, 25, 0, 33, 0, 49, 0, 65, 0, 97, 0, 129, 0, 193, 0, 1, 1, 129, 1, 1, 2, 1, 3, 1, 4, 1, 6, 1, 8, 1, 12, 1, 16, 1, 24, 1, 32, 1, 48, 1, 64, 1, 96, 0, 0, 0, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 13, 0, 15, 0, 17, 0, 19, 0, 23, 0, 27, 0, 31, 0, 35, 0, 43, 0, 51, 0, 59, 0, 67, 0, 83, 0, 99, 0, 115, 0, 131, 0, 163, 0, 195, 0, 227, 0, 2, 1, 0, 0, 0, 0, 16, 0, 16, 0, 16, 0, 16, 0, 17, 0, 17, 0, 18, 0, 18, 0, 19, 0, 19, 0, 20, 0, 20, 0, 21, 0, 21, 0, 22, 0, 22, 0, 23, 0, 23, 0, 24, 0, 24, 0, 25, 0, 25, 0, 26, 0, 26, 0, 27, 0, 27, 0, 28, 0, 28, 0, 29, 0, 29, 0, 64, 0, 64, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 17, 0, 17, 0, 17, 0, 17, 0, 18, 0, 18, 0, 18, 0, 18, 0, 19, 0, 19, 0, 19, 0, 19, 0, 20, 0, 20, 0, 20, 0, 20, 0, 21, 0, 21, 0, 21, 0, 21, 0, 16, 0, 73, 0, 195, 0, 115, 105, 122, 101, 115, 58, 32, 37, 100, 44, 37, 100, 10, 0, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 83, 105, 122, 101, 32, 61, 61, 32, 115, 105, 122, 101, 0, 47, 116, 109, 112, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 95, 116, 101, 109, 112, 47, 122, 108, 105, 98, 46, 99, 0, 100, 111, 105, 116, 0, 115, 116, 114, 99, 109, 112, 40, 98, 117, 102, 102, 101, 114, 44, 32, 98, 117, 102, 102, 101, 114, 51, 41, 32, 61, 61, 32, 48, 0, 101, 114, 114, 111, 114, 58, 32, 37, 100, 92, 110, 0, 111, 107, 46, 0, 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15, 49, 46, 50, 46, 53, 0, 110, 101, 101, 100, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0, 115, 116, 114, 101, 97, 109, 32, 101, 110, 100, 0, 102, 105, 108, 101, 32, 101, 114, 114, 111, 114, 0, 115, 116, 114, 101, 97, 109, 32, 101, 114, 114, 111, 114, 0, 100, 97, 116, 97, 32, 101, 114, 114, 111, 114, 0, 105, 110, 115, 117, 102, 102, 105, 99, 105, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 0, 98, 117, 102, 102, 101, 114, 32, 101, 114, 114, 111, 114, 0, 105, 110, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 118, 101, 114, 115, 105, 111, 110, 0, 105, 110, 99, 111, 114, 114, 101, 99, 116, 32, 104, 101, 97, 100, 101, 114, 32, 99, 104, 101, 99, 107, 0, 117, 110, 107, 110, 111, 119, 110, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 109, 101, 116, 104, 111, 100, 0, 105, 110, 118, 97, 108, 105, 100, 32, 119, 105, 110, 100, 111, 119, 32, 115, 105, 122, 101, 0, 117, 110, 107, 110, 111, 119, 110, 32, 104, 101, 97, 100, 101, 114, 32, 102, 108, 97, 103, 115, 32, 115, 101, 116, 0, 104, 101, 97, 100, 101, 114, 32, 99, 114, 99, 32, 109, 105, 115, 109, 97, 116, 99, 104, 0, 105, 110, 118, 97, 108, 105, 100, 32, 98, 108, 111, 99, 107, 32, 116, 121, 112, 101, 0, 105, 110, 118, 97, 108, 105, 100, 32, 115, 116, 111, 114, 101, 100, 32, 98, 108, 111, 99, 107, 32, 108, 101, 110, 103, 116, 104, 115, 0, 116, 111, 111, 32, 109, 97, 110, 121, 32, 108, 101, 110, 103, 116, 104, 32, 111, 114, 32, 100, 105, 115, 116, 97, 110, 99, 101, 32, 115, 121, 109, 98, 111, 108, 115, 0, 105, 110, 118, 97, 108, 105, 100, 32, 99, 111, 100, 101, 32, 108, 101, 110, 103, 116, 104, 115, 32, 115, 101, 116, 0, 105, 110, 118, 97, 108, 105, 100, 32, 98, 105, 116, 32, 108, 101, 110, 103, 116, 104, 32, 114, 101, 112, 101, 97, 116, 0, 105, 110, 118, 97, 108, 105, 100, 32, 99, 111, 100, 101, 32, 45, 45, 32, 109, 105, 115, 115, 105, 110, 103, 32, 101, 110, 100, 45, 111, 102, 45, 98, 108, 111, 99, 107, 0, 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 47, 108, 101, 110, 103, 116, 104, 115, 32, 115, 101, 116, 0, 105, 110, 118, 97, 108, 105, 100, 32, 100, 105, 115, 116, 97, 110, 99, 101, 115, 32, 115, 101, 116, 0, 105, 110, 99, 111, 114, 114, 101, 99, 116, 32, 100, 97, 116, 97, 32, 99, 104, 101, 99, 107, 0, 105, 110, 99, 111, 114, 114, 101, 99, 116, 32, 108, 101, 110, 103, 116, 104, 32, 99, 104, 101, 99, 107, 0, 105, 110, 118, 97, 108, 105, 100, 32, 100, 105, 115, 116, 97, 110, 99, 101, 32, 116, 111, 111, 32, 102, 97, 114, 32, 98, 97, 99, 107, 0, 105, 110, 118, 97, 108, 105, 100, 32, 100, 105, 115, 116, 97, 110, 99, 101, 32, 99, 111, 100, 101, 0, 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 47, 108, 101, 110, 103, 116, 104, 32, 99, 111, 100, 101, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114, 111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110, 116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0, 40, 110, 117, 108, 108, 41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 110, 97, 110, 0, 78, 65, 78, 0, 46, 0 ], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE + 10240);
var STATIC_BUMP = 19344;
var tempDoublePtr = STATICTOP;
STATICTOP += 16;
Module["_i64Subtract"] = _i64Subtract;
Module["_i64Add"] = _i64Add;
Module["_memset"] = _memset;
function _pthread_cleanup_push(routine, arg) {
 __ATEXIT__.push((function() {
  Runtime.dynCall("vi", routine, [ arg ]);
 }));
 _pthread_cleanup_push.level = __ATEXIT__.length;
}
Module["_bitshift64Lshr"] = _bitshift64Lshr;
Module["_bitshift64Shl"] = _bitshift64Shl;
function _pthread_cleanup_pop() {
 assert(_pthread_cleanup_push.level == __ATEXIT__.length, "cannot pop if something else added meanwhile!");
 __ATEXIT__.pop();
 _pthread_cleanup_push.level = __ATEXIT__.length;
}
function _abort() {
 Module["abort"]();
}
function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
 return dest;
}
Module["_memcpy"] = _memcpy;
var SYSCALLS = {
 varargs: 0,
 get: (function(varargs) {
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
  return ret;
 }),
 getStr: (function() {
  var ret = Pointer_stringify(SYSCALLS.get());
  return ret;
 }),
 get64: (function() {
  var low = SYSCALLS.get(), high = SYSCALLS.get();
  if (low >= 0) assert(high === 0); else assert(high === -1);
  return low;
 }),
 getZero: (function() {
  assert(SYSCALLS.get() === 0);
 })
};
function ___syscall6(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD();
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}
function ___assert_fail(condition, filename, line, func) {
 ABORT = true;
 throw "Assertion failed: " + Pointer_stringify(condition) + ", at: " + [ filename ? Pointer_stringify(filename) : "unknown filename", line, func ? Pointer_stringify(func) : "unknown function" ] + " at " + stackTrace();
}
function _sbrk(bytes) {
 var self = _sbrk;
 if (!self.called) {
  DYNAMICTOP = alignMemoryPage(DYNAMICTOP);
  self.called = true;
  assert(Runtime.dynamicAlloc);
  self.alloc = Runtime.dynamicAlloc;
  Runtime.dynamicAlloc = (function() {
   abort("cannot dynamically allocate, sbrk now has control");
  });
 }
 var ret = DYNAMICTOP;
 if (bytes != 0) {
  var success = self.alloc(bytes);
  if (!success) return -1 >>> 0;
 }
 return ret;
}
Module["_llvm_bswap_i32"] = _llvm_bswap_i32;
Module["_pthread_self"] = _pthread_self;
function ___syscall140(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
  var offset = offset_low;
  assert(offset_high === 0);
  FS.llseek(stream, offset, whence);
  HEAP32[result >> 2] = stream.position;
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}
function ___syscall146(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
  var ret = 0;
  if (!___syscall146.buffer) {
   ___syscall146.buffers = [ null, [], [] ];
   ___syscall146.printChar = (function(stream, curr) {
    var buffer = ___syscall146.buffers[stream];
    assert(buffer);
    if (curr === 0 || curr === 10) {
     (stream === 1 ? Module["print"] : Module["printErr"])(UTF8ArrayToString(buffer, 0));
     buffer.length = 0;
    } else {
     buffer.push(curr);
    }
   });
  }
  for (var i = 0; i < iovcnt; i++) {
   var ptr = HEAP32[iov + i * 8 >> 2];
   var len = HEAP32[iov + (i * 8 + 4) >> 2];
   for (var j = 0; j < len; j++) {
    ___syscall146.printChar(stream, HEAPU8[ptr + j]);
   }
   ret += len;
  }
  return ret;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}
function ___syscall54(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}
__ATEXIT__.push((function() {
 var fflush = Module["_fflush"];
 if (fflush) fflush(0);
 var printChar = ___syscall146.printChar;
 if (!printChar) return;
 var buffers = ___syscall146.buffers;
 if (buffers[1].length) printChar(1, 10);
 if (buffers[2].length) printChar(2, 10);
}));
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
staticSealed = true;
STACK_MAX = STACK_BASE + TOTAL_STACK;
DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);
var cttz_i8 = allocate([ 8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0 ], "i8", ALLOC_DYNAMIC);
function invoke_ii(index, a1) {
 try {
  return Module["dynCall_ii"](index, a1);
 } catch (e) {
  if (typeof e !== "number" && e !== "longjmp") throw e;
  asm["setThrew"](1, 0);
 }
}
function invoke_iiii(index, a1, a2, a3) {
 try {
  return Module["dynCall_iiii"](index, a1, a2, a3);
 } catch (e) {
  if (typeof e !== "number" && e !== "longjmp") throw e;
  asm["setThrew"](1, 0);
 }
}
function invoke_vii(index, a1, a2) {
 try {
  Module["dynCall_vii"](index, a1, a2);
 } catch (e) {
  if (typeof e !== "number" && e !== "longjmp") throw e;
  asm["setThrew"](1, 0);
 }
}
function invoke_iii(index, a1, a2) {
 try {
  return Module["dynCall_iii"](index, a1, a2);
 } catch (e) {
  if (typeof e !== "number" && e !== "longjmp") throw e;
  asm["setThrew"](1, 0);
 }
}
function invoke_vi(index, a1) {
 try {
  Module["dynCall_vi"](index, a1);
 } catch (e) {
  if (typeof e !== "number" && e !== "longjmp") throw e;
  asm["setThrew"](1, 0);
 }
}
Module.asmGlobalArg = {
 "Math": Math,
 "Int8Array": Int8Array,
 "Int16Array": Int16Array,
 "Int32Array": Int32Array,
 "Uint8Array": Uint8Array,
 "Uint16Array": Uint16Array,
 "Uint32Array": Uint32Array,
 "Float32Array": Float32Array,
 "Float64Array": Float64Array,
 "NaN": NaN,
 "Infinity": Infinity
};
Module.asmLibraryArg = {
 "abort": abort,
 "assert": assert,
 "invoke_ii": invoke_ii,
 "invoke_iiii": invoke_iiii,
 "invoke_vii": invoke_vii,
 "invoke_iii": invoke_iii,
 "invoke_vi": invoke_vi,
 "_pthread_cleanup_pop": _pthread_cleanup_pop,
 "___syscall6": ___syscall6,
 "_pthread_cleanup_push": _pthread_cleanup_push,
 "_abort": _abort,
 "_sbrk": _sbrk,
 "_emscripten_memcpy_big": _emscripten_memcpy_big,
 "___syscall54": ___syscall54,
 "___syscall140": ___syscall140,
 "___assert_fail": ___assert_fail,
 "___syscall146": ___syscall146,
 "STACKTOP": STACKTOP,
 "STACK_MAX": STACK_MAX,
 "tempDoublePtr": tempDoublePtr,
 "ABORT": ABORT,
 "cttz_i8": cttz_i8
};
// EMSCRIPTEN_START_ASM

var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var _free = Module["_free"] = asm["_free"];
var _main = Module["_main"] = asm["_main"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _pthread_self = Module["_pthread_self"] = asm["_pthread_self"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
Runtime.stackAlloc = asm["stackAlloc"];
Runtime.stackSave = asm["stackSave"];
Runtime.stackRestore = asm["stackRestore"];
Runtime.establishStackSpace = asm["establishStackSpace"];
Runtime.setTempRet0 = asm["setTempRet0"];
Runtime.getTempRet0 = asm["getTempRet0"];
function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}
ExitStatus.prototype = new Error;
ExitStatus.prototype.constructor = ExitStatus;
var initialStackTop;
var preloadStartTime = null;
var calledMain = false;
dependenciesFulfilled = function runCaller() {
 if (!Module["calledRun"]) run([].concat(Module["arguments"]));
 if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
};
Module["callMain"] = Module.callMain = function callMain(args) {
 args = args || [];
 ensureInitRuntime();
 var argc = args.length + 1;
 function pad() {
  for (var i = 0; i < 4 - 1; i++) {
   argv.push(0);
  }
 }
 var argv = [ allocate(intArrayFromString(Module["thisProgram"]), "i8", ALLOC_NORMAL) ];
 pad();
 for (var i = 0; i < argc - 1; i = i + 1) {
  argv.push(allocate(intArrayFromString(args[i]), "i8", ALLOC_NORMAL));
  pad();
 }
 argv.push(0);
 argv = allocate(argv, "i32", ALLOC_NORMAL);
 try {
  var ret = Module["_main"](argc, argv, 0);
  exit(ret, true);
 } catch (e) {
  if (e instanceof ExitStatus) {
   return;
  } else if (e == "SimulateInfiniteLoop") {
   Module["noExitRuntime"] = true;
   return;
  } else {
   if (e && typeof e === "object" && e.stack) Module.printErr("exception thrown: " + [ e, e.stack ]);
   throw e;
  }
 } finally {
  calledMain = true;
 }
};
function run(args) {
 args = args || Module["arguments"];
 if (preloadStartTime === null) preloadStartTime = Date.now();
 if (runDependencies > 0) {
  return;
 }
 preRun();
 if (runDependencies > 0) return;
 if (Module["calledRun"]) return;
 function doRun() {
  if (Module["calledRun"]) return;
  Module["calledRun"] = true;
  if (ABORT) return;
  ensureInitRuntime();
  preMain();
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (Module["_main"] && shouldRunNow) Module["callMain"](args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout((function() {
   setTimeout((function() {
    Module["setStatus"]("");
   }), 1);
   doRun();
  }), 1);
 } else {
  doRun();
 }
}
Module["run"] = Module.run = run;
function exit(status, implicit) {
 if (implicit && Module["noExitRuntime"]) {
  return;
 }
 if (Module["noExitRuntime"]) {} else {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;
  exitRuntime();
  if (Module["onExit"]) Module["onExit"](status);
 }
 if (ENVIRONMENT_IS_NODE) {
  process["exit"](status);
 } else if (ENVIRONMENT_IS_SHELL && typeof quit === "function") {
  quit(status);
 }
 throw new ExitStatus(status);
}
Module["exit"] = Module.exit = exit;
var abortDecorators = [];
function abort(what) {
 if (what !== undefined) {
  Module.print(what);
  Module.printErr(what);
  what = JSON.stringify(what);
 } else {
  what = "";
 }
 ABORT = true;
 EXITSTATUS = 1;
 var extra = "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
 var output = "abort(" + what + ") at " + stackTrace() + extra;
 if (abortDecorators) {
  abortDecorators.forEach((function(decorator) {
   output = decorator(output, what);
  }));
 }
 throw output;
}
Module["abort"] = Module.abort = abort;
if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) {
 shouldRunNow = false;
}
Module["noExitRuntime"] = true;
run([].concat(Module["arguments"]));




