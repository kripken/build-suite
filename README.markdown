
# WebAssembly Build Suite

This repo contains complete builds of codebases compiled to WebAssembly. As
opposed to the spec test suite, which focuses on unit tests for specific
features, the builds here are of entire codebases, and are fully functional,
testing not just WebAssembly execution itself but also its integration to
the embedding web environment.

## Emscripten

The `emscripten/` directory contains builds from Emscripten, one per subdir.
The builds are generated using Emscripten's Binaryen integration, which
includes `wasm.js` in the `.js` files, which can load and execute WebAssembly
in an interpreter, or, if native WebAssembly support is present, it will
use that.

Each build contains several files (note: the prefix may be `src.cpp` for C++,
or `src.c` for C):

 * `src.cpp.o.js`: the main JavaScript file, containing code to load everything, syscall access to the JavaScript embedding environment, etc.
 * `src.cpp.o.wast`: the compiled C/C++ code in WebAssembly S-Expression format
 * `src.cpp.o.wast.mappedGlobals`: a small metadata file containing global information, needed as asm.js has globals but WebAssembly does not
 * `src.cpp.o.js.mem`: the memory initialization file. (this could be moved into the `.wast` file's memory section, however, keeping it separate allows the same build to optionally run as asm.js)
 * `src.cpp`: the source C/C++ (not needed when running)
 * `src.cpp.o.asm.js`: the compiled C/C++ code in asm.js format (only needed if you modify the build to run in asm.js mode)
 * There may also be a `readme.txt` file, which explains commandline parameters that the program receives.

To run a build, simply enter that directory, and run `src.cpp.o.js` in a JavaScript shell, like Node.js or the SpiderMonkey or V8 shells. You can also run these builds in a browser, just create an HTML file with `<script src="src.cpp.o.js"></script>` in it.

Notes:

 * Look for `integrateWasmJS` in the `.js` file, to see how the WebAssembly and JavaScript environments are connected.
 * The `.wast` files contain imports, which the spec interpreter (which does not have JavaScript embedding support) will raise an error on. If you want to use the spec interpreter to verify that the rest of the `.wast` is valid (which they all should), you can use Binaryen to remove the imports, using `binaryen-shell src.cpp.o.wast -remove-imports -print-after > ok.wast`.

