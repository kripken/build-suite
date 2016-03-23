Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
 var C = 0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = global.Math.floor;
 var N = global.Math.abs;
 var O = global.Math.sqrt;
 var P = global.Math.pow;
 var Q = global.Math.cos;
 var R = global.Math.sin;
 var S = global.Math.tan;
 var T = global.Math.acos;
 var U = global.Math.asin;
 var V = global.Math.atan;
 var W = global.Math.atan2;
 var X = global.Math.exp;
 var Y = global.Math.log;
 var Z = global.Math.ceil;
 var _ = global.Math.imul;
 var $ = global.Math.min;
 var aa = global.Math.clz32;
 var ba = global.Math.fround;
 var ca = env.abort;
 var da = env.assert;
 var ea = env.invoke_iiii;
 var fa = env.invoke_viiiii;
 var ga = env.invoke_vi;
 var ha = env.invoke_ii;
 var ia = env.invoke_v;
 var ja = env.invoke_viiiiii;
 var ka = env.invoke_viiii;
 var la = env._pthread_cleanup_pop;
 var ma = env.___cxa_throw;
 var na = env.___syscall54;
 var oa = env._abort;
 var pa = env._pthread_cleanup_push;
 var qa = env.___syscall6;
 var ra = env._sbrk;
 var sa = env.___syscall146;
 var ta = env._emscripten_memcpy_big;
 var ua = env.___gxx_personality_v0;
 var va = env.___syscall140;
 var wa = env.___resumeException;
 var xa = env.___cxa_find_matching_catch;
 var ya = env.___cxa_allocate_exception;
 var za = env.__ZSt18uncaught_exceptionv;
 var Aa = ba(0);
 const Ba = ba(0);
 
// EMSCRIPTEN_START_FUNCS

function ub(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[1128] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   f = (b & 1 ^ 1) + a | 0;
   g = 4552 + (f << 1 << 2) | 0;
   b = g + 8 | 0;
   d = c[b >> 2] | 0;
   h = d + 8 | 0;
   e = c[h >> 2] | 0;
   do if ((g | 0) == (e | 0)) c[1128] = k & ~(1 << f); else {
    if (e >>> 0 < (c[1132] | 0) >>> 0) oa();
    a = e + 12 | 0;
    if ((c[a >> 2] | 0) == (d | 0)) {
     c[a >> 2] = g;
     c[b >> 2] = e;
     break;
    } else oa();
   } while (0);
   C = f << 3;
   c[d + 4 >> 2] = C | 3;
   C = d + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = h;
   i = D;
   return C | 0;
  }
  h = c[1130] | 0;
  if (q >>> 0 > h >>> 0) {
   if (b | 0) {
    f = 2 << a;
    f = b << a & (f | 0 - f);
    f = (f & 0 - f) + -1 | 0;
    j = f >>> 12 & 16;
    f = f >>> j;
    b = f >>> 5 & 8;
    f = f >>> b;
    g = f >>> 2 & 4;
    f = f >>> g;
    d = f >>> 1 & 2;
    f = f >>> d;
    e = f >>> 1 & 1;
    e = (b | j | g | d | e) + (f >>> e) | 0;
    f = 4552 + (e << 1 << 2) | 0;
    d = f + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    b = c[j >> 2] | 0;
    do if ((f | 0) == (b | 0)) {
     c[1128] = k & ~(1 << e);
     l = h;
    } else {
     if (b >>> 0 < (c[1132] | 0) >>> 0) oa();
     a = b + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = f;
      c[d >> 2] = b;
      l = c[1130] | 0;
      break;
     } else oa();
    } while (0);
    h = (e << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    f = g + q | 0;
    c[f + 4 >> 2] = h | 1;
    c[f + h >> 2] = h;
    if (l | 0) {
     e = c[1133] | 0;
     b = l >>> 3;
     d = 4552 + (b << 1 << 2) | 0;
     a = c[1128] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[1128] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = e;
     c[n + 12 >> 2] = e;
     c[e + 8 >> 2] = n;
     c[e + 12 >> 2] = d;
    }
    c[1130] = h;
    c[1133] = f;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[1129] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    B = d >>> 12 & 16;
    d = d >>> B;
    A = d >>> 5 & 8;
    d = d >>> A;
    C = d >>> 2 & 4;
    d = d >>> C;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[4816 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - q | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       k = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - q | 0;
     C = b >>> 0 < d >>> 0;
     d = C ? b : d;
     b = a;
     e = C ? a : e;
    }
    g = c[1132] | 0;
    if (k >>> 0 < g >>> 0) oa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) oa();
    h = c[k + 24 >> 2] | 0;
    e = c[k + 12 >> 2] | 0;
    do if ((e | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      f = a + 20 | 0;
      e = c[f >> 2] | 0;
      if (e | 0) {
       a = e;
       b = f;
       continue;
      }
      f = a + 16 | 0;
      e = c[f >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = f;
      }
     }
     if (b >>> 0 < g >>> 0) oa(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) oa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) oa();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else oa();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 4816 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[1129] = c[1129] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[1132] | 0) >>> 0) oa();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[1132] | 0;
     if (o >>> 0 < b >>> 0) oa();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) oa(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     C = d + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = d | 1;
     c[j + d >> 2] = d;
     a = c[1130] | 0;
     if (a | 0) {
      f = c[1133] | 0;
      b = a >>> 3;
      e = 4552 + (b << 1 << 2) | 0;
      a = c[1128] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[1128] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[1130] = d;
     c[1133] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[1129] | 0;
  if (k) {
   b = 0 - q | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (q >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = q >>> (j + 7 | 0) & 1 | j << 1;
   }
   d = c[4816 + (j << 2) >> 2] | 0;
   a : do if (!d) {
    e = b;
    a = 0;
    b = 0;
    w = 86;
   } else {
    e = b;
    a = 0;
    h = q << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    b = 0;
    while (1) {
     f = c[d + 4 >> 2] & -8;
     g = f - q | 0;
     if (g >>> 0 < e >>> 0) if ((f | 0) == (q | 0)) {
      e = g;
      a = d;
      b = d;
      w = 90;
      break a;
     } else {
      e = g;
      b = d;
     }
     f = c[d + 20 >> 2] | 0;
     d = c[d + 16 + (h >>> 31 << 2) >> 2] | 0;
     a = (f | 0) == 0 | (f | 0) == (d | 0) ? a : f;
     f = (d | 0) == 0;
     if (f) {
      w = 86;
      break;
     } else h = h << (f & 1 ^ 1);
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[4816 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = e;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - q | 0;
    d = s >>> 0 < e >>> 0;
    e = d ? s : e;
    b = d ? a : b;
    d = c[a + 16 >> 2] | 0;
    if (d | 0) {
     a = d;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = e;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[1130] | 0) - q | 0) >>> 0) {
    f = c[1132] | 0;
    if (k >>> 0 < f >>> 0) oa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) oa();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      d = c[e >> 2] | 0;
      if (d | 0) {
       a = d;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      d = c[e >> 2] | 0;
      if (!d) break; else {
       a = d;
       b = e;
      }
     }
     if (b >>> 0 < f >>> 0) oa(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) oa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) oa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else oa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 4816 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[1129] = c[1129] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1132] | 0) >>> 0) oa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[1132] | 0;
     if (t >>> 0 < b >>> 0) oa();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) oa(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 4552 + (a << 1 << 2) | 0;
      b = c[1128] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[1128] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = j;
      c[v + 12 >> 2] = j;
      c[j + 8 >> 2] = v;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) b = 0; else if (h >>> 0 > 16777215) b = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      b = (C + 245760 | 0) >>> 16 & 2;
      b = 14 - (A | B | b) + (C << b >>> 15) | 0;
      b = h >>> (b + 7 | 0) & 1 | b << 1;
     }
     f = 4816 + (b << 2) | 0;
     c[j + 28 >> 2] = b;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1129] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[1129] = a | d;
      c[f >> 2] = j;
      c[j + 24 >> 2] = f;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     e = h << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
     d = c[f >> 2] | 0;
     while (1) {
      if ((c[d + 4 >> 2] & -8 | 0) == (h | 0)) {
       w = 148;
       break;
      }
      a = d + 16 + (e >>> 31 << 2) | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       w = 145;
       break;
      } else {
       e = e << 1;
       d = b;
      }
     }
     if ((w | 0) == 145) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
      c[a >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[1132] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = j;
       c[b >> 2] = j;
       c[j + 8 >> 2] = a;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else oa();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[1130] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[1133] | 0;
  if (b >>> 0 > 15) {
   C = a + q | 0;
   c[1133] = C;
   c[1130] = b;
   c[C + 4 >> 2] = b | 1;
   c[C + b >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[1130] = 0;
   c[1133] = 0;
   c[a + 4 >> 2] = d | 3;
   C = a + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = a + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[1131] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[1131] = A;
  C = c[1134] | 0;
  B = C + q | 0;
  c[1134] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[1246] | 0)) {
  c[1248] = 4096;
  c[1247] = 4096;
  c[1249] = -1;
  c[1250] = -1;
  c[1251] = 0;
  c[1239] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[1246] = v;
 }
 h = q + 48 | 0;
 g = c[1248] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[1238] | 0;
 if (a | 0) {
  u = c[1236] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[1239] & 4)) {
  a = c[1134] | 0;
  c : do if (!a) w = 171; else {
   e = 4960;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     w = 171;
     break c;
    }
   }
   a = f - (c[1131] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = ra(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = ra(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[1247] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[1236] | 0;
    e = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     d = c[1238] | 0;
     if (d | 0) if (e >>> 0 <= b >>> 0 | e >>> 0 > d >>> 0) break;
     b = ra(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[1248] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ra(b | 0) | 0) == (-1 | 0)) {
     ra(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    f = e;
    h = a;
    w = 191;
    break b;
   }
  } while (0);
  c[1239] = c[1239] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ra(k | 0) | 0;
  a = ra(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (q + 40 | 0) >>> 0) {
    f = b;
    h = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[1236] | 0) + h | 0;
  c[1236] = a;
  if (a >>> 0 > (c[1237] | 0) >>> 0) c[1237] = a;
  k = c[1134] | 0;
  do if (!k) {
   C = c[1132] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[1132] = f;
   c[1240] = f;
   c[1241] = h;
   c[1243] = 0;
   c[1137] = c[1246];
   c[1136] = -1;
   a = 0;
   do {
    C = 4552 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[1134] = B;
   c[1131] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[1135] = c[1250];
  } else {
   b = 4960;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     w = 201;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((w | 0) == 201) if (!(c[b + 12 >> 2] & 8)) if (k >>> 0 < f >>> 0 & k >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    C = k + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = k + C | 0;
    C = h - C + (c[1131] | 0) | 0;
    c[1134] = B;
    c[1131] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[1135] = c[1250];
    break;
   }
   a = c[1132] | 0;
   if (f >>> 0 < a >>> 0) {
    c[1132] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 4960;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 4960;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    m = a + 4 | 0;
    c[m >> 2] = (c[m >> 2] | 0) + h;
    m = f + 8 | 0;
    m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    l = m + q | 0;
    g = a - m - q | 0;
    c[m + 4 >> 2] = q | 3;
    do if ((a | 0) == (k | 0)) {
     C = (c[1131] | 0) + g | 0;
     c[1131] = C;
     c[1134] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[1133] | 0)) {
      C = (c[1130] | 0) + g | 0;
      c[1130] = C;
      c[1133] = l;
      c[l + 4 >> 2] = C | 1;
      c[l + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      k = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 4552 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) oa();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        oa();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[1128] = c[1128] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) oa();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        oa();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        e = a + 16 | 0;
        d = e + 4 | 0;
        b = c[d >> 2] | 0;
        if (!b) {
         b = c[e >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         } else d = e;
        }
        while (1) {
         f = b + 20 | 0;
         e = c[f >> 2] | 0;
         if (e | 0) {
          b = e;
          d = f;
          continue;
         }
         f = b + 16 | 0;
         e = c[f >> 2] | 0;
         if (!e) break; else {
          b = e;
          d = f;
         }
        }
        if (d >>> 0 < j >>> 0) oa(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) oa();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) oa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else oa();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 4816 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[1129] = c[1129] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[1132] | 0) >>> 0) oa();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[1132] | 0;
       if (A >>> 0 < e >>> 0) oa();
       c[A + 24 >> 2] = h;
       d = a + 16 | 0;
       b = c[d >> 2] | 0;
       do if (b | 0) if (b >>> 0 < e >>> 0) oa(); else {
        c[A + 16 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       } while (0);
       b = c[d + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + k | 0;
      g = k + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[l + 4 >> 2] = g | 1;
     c[l + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 4552 + (a << 1 << 2) | 0;
      b = c[1128] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[1128] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[1132] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       oa();
      } while (0);
      c[B >> 2] = l;
      c[C + 12 >> 2] = l;
      c[l + 8 >> 2] = C;
      c[l + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) b = 0; else {
      if (g >>> 0 > 16777215) {
       b = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      b = (C + 245760 | 0) >>> 16 & 2;
      b = 14 - (A | B | b) + (C << b >>> 15) | 0;
      b = g >>> (b + 7 | 0) & 1 | b << 1;
     } while (0);
     f = 4816 + (b << 2) | 0;
     c[l + 28 >> 2] = b;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1129] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[1129] = a | d;
      c[f >> 2] = l;
      c[l + 24 >> 2] = f;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     }
     e = g << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
     d = c[f >> 2] | 0;
     while (1) {
      if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
       w = 279;
       break;
      }
      a = d + 16 + (e >>> 31 << 2) | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       w = 276;
       break;
      } else {
       e = e << 1;
       d = b;
      }
     }
     if ((w | 0) == 276) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
      c[a >> 2] = l;
      c[l + 24 >> 2] = d;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[1132] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = l;
       c[b >> 2] = l;
       c[l + 8 >> 2] = a;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else oa();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 4960;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= k >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > k >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = k + 16 | 0;
   d = d >>> 0 < g >>> 0 ? k : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = f + e | 0;
   e = h + -40 - e | 0;
   c[1134] = C;
   c[1131] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[1135] = c[1250];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[1240];
   c[b + 4 >> 2] = c[1241];
   c[b + 8 >> 2] = c[1242];
   c[b + 12 >> 2] = c[1243];
   c[1240] = f;
   c[1241] = h;
   c[1243] = 0;
   c[1242] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (k | 0)) {
    h = d - k | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[k + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 4552 + (a << 1 << 2) | 0;
     b = c[1128] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[1128] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = k;
     c[z + 12 >> 2] = k;
     c[k + 8 >> 2] = z;
     c[k + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 4816 + (d << 2) | 0;
    c[k + 28 >> 2] = d;
    c[k + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[1129] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[1129] = a | b;
     c[f >> 2] = k;
     c[k + 24 >> 2] = f;
     c[k + 12 >> 2] = k;
     c[k + 8 >> 2] = k;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    d = c[f >> 2] | 0;
    while (1) {
     if ((c[d + 4 >> 2] & -8 | 0) == (h | 0)) {
      w = 305;
      break;
     }
     a = d + 16 + (e >>> 31 << 2) | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      w = 302;
      break;
     } else {
      e = e << 1;
      d = b;
     }
    }
    if ((w | 0) == 302) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
     c[a >> 2] = k;
     c[k + 24 >> 2] = d;
     c[k + 12 >> 2] = k;
     c[k + 8 >> 2] = k;
     break;
    } else if ((w | 0) == 305) {
     b = d + 8 | 0;
     a = c[b >> 2] | 0;
     C = c[1132] | 0;
     if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[a + 12 >> 2] = k;
      c[b >> 2] = k;
      c[k + 8 >> 2] = a;
      c[k + 12 >> 2] = d;
      c[k + 24 >> 2] = 0;
      break;
     } else oa();
    }
   }
  } while (0);
  a = c[1131] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[1131] = A;
   C = c[1134] | 0;
   B = C + q | 0;
   c[1134] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(Wa() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function db(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 U = ia + 24 | 0;
 W = ia + 16 | 0;
 V = ia + 588 | 0;
 X = ia + 576 | 0;
 R = ia;
 P = ia + 536 | 0;
 ha = ia + 8 | 0;
 Z = ia + 528 | 0;
 ga = (e | 0) != 0;
 N = P + 40 | 0;
 aa = N;
 P = P + 39 | 0;
 T = ha + 4 | 0;
 ca = V;
 M = 0 - ca | 0;
 S = X + 12 | 0;
 X = X + 11 | 0;
 $ = S;
 fa = $ - ca | 0;
 da = -2 - ca | 0;
 ea = $ + 2 | 0;
 O = U + 288 | 0;
 Q = V + 9 | 0;
 ba = Q;
 Y = V + 8 | 0;
 m = 0;
 o = 0;
 n = 0;
 z = f;
 a : while (1) {
  do if ((m | 0) > -1) if ((o | 0) > (2147483647 - m | 0)) {
   c[(Wa() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = o + m | 0;
   break;
  } while (0);
  f = a[z >> 0] | 0;
  if (!(f << 24 >> 24)) {
   L = 244;
   break;
  } else o = z;
  b : while (1) {
   switch (f << 24 >> 24) {
   case 37:
    {
     f = o;
     L = 9;
     break b;
    }
   case 0:
    {
     f = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   f = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[f + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   f = f + 2 | 0;
   if ((a[f >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  y = o - z | 0;
  if (ga) if (!(c[e >> 2] & 32)) eb(z, y, e) | 0;
  if ((o | 0) != (z | 0)) {
   o = y;
   z = f;
   continue;
  }
  q = f + 1 | 0;
  o = a[q >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[f + 2 >> 0] | 0) == 36;
   q = K ? f + 3 | 0 : q;
   o = a[q >> 0] | 0;
   w = K ? p : -1;
   n = K ? 1 : n;
  } else w = -1;
  f = o << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << f + -32 & 75913)) {
     s = p;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    q = q + 1 | 0;
    o = a[q >> 0] | 0;
    f = o << 24 >> 24;
    if ((f & -32 | 0) != 32) {
     s = p;
     break;
    }
   }
  } else s = 0; while (0);
  do if (o << 24 >> 24 == 42) {
   o = q + 1 | 0;
   f = (a[o >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[q + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    n = 1;
    q = q + 3 | 0;
    f = c[j + ((a[o >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else L = 24; else L = 24;
   if ((L | 0) == 24) {
    L = 0;
    if (n | 0) {
     m = -1;
     break a;
    }
    if (!ga) {
     v = s;
     n = 0;
     q = o;
     K = 0;
     break;
    }
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    f = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = 0;
    q = o;
   }
   if ((f | 0) < 0) {
    v = s | 8192;
    K = 0 - f | 0;
   } else {
    v = s;
    K = f;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    o = q;
    f = 0;
    do {
     f = (f * 10 | 0) + p | 0;
     o = o + 1 | 0;
     p = (a[o >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((f | 0) < 0) {
     m = -1;
     break a;
    } else {
     v = s;
     q = o;
     K = f;
    }
   } else {
    v = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[q >> 0] | 0) == 46) {
   f = q + 1 | 0;
   o = a[f >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    p = (o << 24 >> 24) + -48 | 0;
    if (p >>> 0 < 10) o = 0; else {
     s = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
     if (p >>> 0 >= 10) {
      s = o;
      break e;
     }
    }
   }
   f = q + 2 | 0;
   o = (a[f >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10) if ((a[q + 3 >> 0] | 0) == 36) {
    c[l + (o << 2) >> 2] = 10;
    s = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = q + 4 | 0;
    break;
   }
   if (n | 0) {
    m = -1;
    break a;
   }
   if (ga) {
    J = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    s = c[J >> 2] | 0;
    c[g >> 2] = J + 4;
   } else s = 0;
  } else {
   s = -1;
   f = q;
  } while (0);
  u = 0;
  while (1) {
   o = (a[f >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   q = f + 1 | 0;
   o = a[1879 + (u * 58 | 0) + o >> 0] | 0;
   p = o & 255;
   if ((p + -1 | 0) >>> 0 < 8) {
    f = q;
    u = p;
   } else {
    t = p;
    J = q;
    q = u;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (w | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (w << 2) >> 2] = t;
    H = j + (w << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = R;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!ga) {
    m = 0;
    break a;
   }
   gb(R, t, g);
  } while (0);
  if ((L | 0) == 52) {
   L = 0;
   if (!ga) {
    o = y;
    z = J;
    continue;
   }
  }
  u = a[f >> 0] | 0;
  u = (q | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = v & -65537;
  I = (v & 8192 | 0) == 0 ? v : p;
  f : do switch (u | 0) {
  case 110:
   switch (q | 0) {
   case 0:
    {
     c[c[R >> 2] >> 2] = m;
     o = y;
     z = J;
     continue a;
    }
   case 1:
    {
     c[c[R >> 2] >> 2] = m;
     o = y;
     z = J;
     continue a;
    }
   case 2:
    {
     o = c[R >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = y;
     z = J;
     continue a;
    }
   case 3:
    {
     b[c[R >> 2] >> 1] = m;
     o = y;
     z = J;
     continue a;
    }
   case 4:
    {
     a[c[R >> 2] >> 0] = m;
     o = y;
     z = J;
     continue a;
    }
   case 6:
    {
     c[c[R >> 2] >> 2] = m;
     o = y;
     z = J;
     continue a;
    }
   case 7:
    {
     o = c[R >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = y;
     z = J;
     continue a;
    }
   default:
    {
     o = y;
     z = J;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    s = s >>> 0 > 8 ? s : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    o = R;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((f | 0) == 0 & (o | 0) == 0) f = N; else {
     p = f;
     f = N;
     do {
      f = f + -1 | 0;
      a[f >> 0] = p & 7 | 48;
      p = Zb(p | 0, o | 0, 3) | 0;
      o = C;
     } while (!((p | 0) == 0 & (o | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     q = 2359;
     L = 77;
    } else {
     t = aa - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     q = 2359;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = R;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     f = Wb(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = R;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     q = 2359;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     q = I & 1;
     p = q;
     q = (q | 0) == 0 ? 2359 : 2361;
     L = 76;
    } else {
     p = 1;
     q = 2360;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = R;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    q = 2359;
    L = 76;
    break;
   }
  case 99:
   {
    a[P >> 0] = c[R >> 2];
    f = P;
    u = 1;
    w = 0;
    v = 2359;
    o = N;
    break;
   }
  case 109:
   {
    o = ib(c[(Wa() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[R >> 2] | 0;
    o = o | 0 ? o : 4261;
    L = 82;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[R >> 2];
    c[T >> 2] = 0;
    c[R >> 2] = ha;
    f = ha;
    s = -1;
    L = 86;
    break;
   }
  case 83:
   {
    f = c[R >> 2] | 0;
    if (!s) {
     kb(e, 32, K, 0, I);
     f = 0;
     L = 97;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    r = +h[R >> 3];
    c[W >> 2] = 0;
    h[k >> 3] = r;
    if ((c[k + 4 >> 2] | 0) < 0) {
     G = 1;
     H = 4268;
     r = -r;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 4269 : 4274;
    } else {
     G = 1;
     H = 4271;
    }
    h[k >> 3] = r;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +bb(r, W) * 2.0;
     o = x != 0.0;
     if (o) c[W >> 2] = (c[W >> 2] | 0) + -1;
     D = u | 32;
     if ((D | 0) == 97) {
      t = u & 32;
      y = (t | 0) == 0 ? H : H + 9 | 0;
      w = G | 2;
      f = 12 - s | 0;
      do if (s >>> 0 > 11 | (f | 0) == 0) r = x; else {
       r = 8.0;
       do {
        f = f + -1 | 0;
        r = r * 16.0;
       } while ((f | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        r = -(r + (-x - r));
        break;
       } else {
        r = x + r - r;
        break;
       }
      } while (0);
      o = c[W >> 2] | 0;
      f = (o | 0) < 0 ? 0 - o | 0 : o;
      f = hb(f, ((f | 0) < 0) << 31 >> 31, S) | 0;
      if ((f | 0) == (S | 0)) {
       a[X >> 0] = 48;
       f = X;
      }
      a[f + -1 >> 0] = (o >> 31 & 2) + 43;
      v = f + -2 | 0;
      a[v >> 0] = u + 15;
      p = (s | 0) < 1;
      q = (I & 8 | 0) == 0;
      o = V;
      while (1) {
       H = ~~r;
       f = o + 1 | 0;
       a[o >> 0] = d[2343 + H >> 0] | t;
       r = (r - +(H | 0)) * 16.0;
       do if ((f - ca | 0) == 1) {
        if (q & (p & r == 0.0)) break;
        a[f >> 0] = 46;
        f = o + 2 | 0;
       } while (0);
       if (!(r != 0.0)) break; else o = f;
      }
      t = v;
      q = (s | 0) != 0 & (da + f | 0) < (s | 0) ? ea + s - t | 0 : fa - t + f | 0;
      p = q + w | 0;
      kb(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) eb(y, w, e) | 0;
      kb(e, 48, K, p, I ^ 65536);
      o = f - ca | 0;
      if (!(c[e >> 2] & 32)) eb(V, o, e) | 0;
      f = $ - t | 0;
      kb(e, 48, q - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) eb(v, f, e) | 0;
      kb(e, 32, K, p, I ^ 8192);
      f = (p | 0) < (K | 0) ? K : p;
      break;
     }
     f = (s | 0) < 0 ? 6 : s;
     if (o) {
      o = (c[W >> 2] | 0) + -28 | 0;
      c[W >> 2] = o;
      r = x * 268435456.0;
     } else {
      o = c[W >> 2] | 0;
      r = x;
     }
     F = (o | 0) < 0 ? U : O;
     E = F;
     o = F;
     do {
      B = ~~r >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      r = (r - +(B >>> 0)) * 1.0e9;
     } while (r != 0.0);
     p = o;
     o = c[W >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       q = p + -4 | 0;
       do if (q >>> 0 < s >>> 0) q = s; else {
        o = 0;
        do {
         B = _b(c[q >> 2] | 0, 0, t | 0) | 0;
         B = Xb(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = ic(B | 0, o | 0, 1e9, 0) | 0;
         c[q >> 2] = A;
         o = hc(B | 0, o | 0, 1e9, 0) | 0;
         q = q + -4 | 0;
        } while (q >>> 0 >= s >>> 0);
        if (!o) {
         q = s;
         break;
        }
        q = s + -4 | 0;
        c[q >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= q >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[W >> 2] | 0) - t | 0;
       c[W >> 2] = o;
       if ((o | 0) > 0) s = q; else break;
      }
     } else q = F;
     if ((o | 0) < 0) {
      y = ((f + 25 | 0) / 9 | 0) + 1 | 0;
      z = (D | 0) == 102;
      v = q;
      while (1) {
       w = 0 - o | 0;
       w = (w | 0) > 9 ? 9 : w;
       do if (v >>> 0 < p >>> 0) {
        t = (1 << w) + -1 | 0;
        s = 1e9 >>> w;
        q = 0;
        o = v;
        do {
         B = c[o >> 2] | 0;
         c[o >> 2] = (B >>> w) + q;
         q = _(B & t, s) | 0;
         o = o + 4 | 0;
        } while (o >>> 0 < p >>> 0);
        o = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v;
        if (!q) {
         q = o;
         break;
        }
        c[p >> 2] = q;
        q = o;
        p = p + 4 | 0;
       } else q = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v; while (0);
       o = z ? F : q;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[W >> 2] | 0) + w | 0;
       c[W >> 2] = o;
       if ((o | 0) >= 0) {
        o = q;
        z = p;
        break;
       } else v = q;
      }
     } else {
      o = q;
      z = p;
     }
     do if (o >>> 0 < z >>> 0) {
      p = (E - o >> 2) * 9 | 0;
      s = c[o >> 2] | 0;
      if (s >>> 0 < 10) break; else q = 10;
      do {
       q = q * 10 | 0;
       p = p + 1 | 0;
      } while (s >>> 0 >= q >>> 0);
     } else p = 0; while (0);
     A = (D | 0) == 103;
     B = (f | 0) != 0;
     q = f - ((D | 0) != 102 ? p : 0) + ((B & A) << 31 >> 31) | 0;
     if ((q | 0) < (((z - E >> 2) * 9 | 0) + -9 | 0)) {
      s = q + 9216 | 0;
      q = F + 4 + (((s | 0) / 9 | 0) + -1024 << 2) | 0;
      s = ((s | 0) % 9 | 0) + 1 | 0;
      if ((s | 0) < 9) {
       t = 10;
       do {
        t = t * 10 | 0;
        s = s + 1 | 0;
       } while ((s | 0) != 9);
      } else t = 10;
      w = c[q >> 2] | 0;
      y = (w >>> 0) % (t >>> 0) | 0;
      s = (q + 4 | 0) == (z | 0);
      do if (!(s & (y | 0) == 0)) {
       x = (((w >>> 0) / (t >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       v = (t | 0) / 2 | 0;
       if (y >>> 0 < v >>> 0) r = .5; else r = s & (y | 0) == (v | 0) ? 1.0 : 1.5;
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        x = -x;
        r = -r;
       } while (0);
       s = w - y | 0;
       c[q >> 2] = s;
       if (!(x + r != x)) break;
       D = s + t | 0;
       c[q >> 2] = D;
       if (D >>> 0 > 999999999) {
        p = q;
        while (1) {
         q = p + -4 | 0;
         c[p >> 2] = 0;
         if (q >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         D = (c[q >> 2] | 0) + 1 | 0;
         c[q >> 2] = D;
         if (D >>> 0 > 999999999) p = q; else break;
        }
       }
       p = (E - o >> 2) * 9 | 0;
       t = c[o >> 2] | 0;
       if (t >>> 0 < 10) break; else s = 10;
       do {
        s = s * 10 | 0;
        p = p + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
      } while (0);
      y = q + 4 | 0;
      D = o;
      o = z >>> 0 > y >>> 0 ? y : z;
     } else {
      D = o;
      o = z;
     }
     w = 0 - p | 0;
     while (1) {
      if (o >>> 0 <= D >>> 0) {
       y = 0;
       z = o;
       break;
      }
      q = o + -4 | 0;
      if (!(c[q >> 2] | 0)) o = q; else {
       y = 1;
       z = o;
       break;
      }
     }
     do if (A) {
      f = (B & 1 ^ 1) + f | 0;
      if ((f | 0) > (p | 0) & (p | 0) > -5) {
       f = f + -1 - p | 0;
       u = u + -1 | 0;
      } else {
       f = f + -1 | 0;
       u = u + -2 | 0;
      }
      o = I & 8;
      if (o | 0) break;
      do if (y) {
       o = c[z + -4 >> 2] | 0;
       if (!o) {
        q = 9;
        break;
       }
       if (!((o >>> 0) % 10 | 0)) {
        s = 10;
        q = 0;
       } else {
        q = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        q = q + 1 | 0;
       } while (!((o >>> 0) % (s >>> 0) | 0 | 0));
      } else q = 9; while (0);
      o = ((z - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       E = o - q | 0;
       E = (E | 0) < 0 ? 0 : E;
       o = 0;
       f = (f | 0) < (E | 0) ? f : E;
       break;
      } else {
       E = o + p - q | 0;
       E = (E | 0) < 0 ? 0 : E;
       o = 0;
       f = (f | 0) < (E | 0) ? f : E;
       break;
      }
     } else o = I & 8; while (0);
     v = f | o;
     s = (v | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      u = 0;
      p = (p | 0) > 0 ? p : 0;
     } else {
      q = (p | 0) < 0 ? w : p;
      q = hb(q, ((q | 0) < 0) << 31 >> 31, S) | 0;
      if (($ - q | 0) < 2) do {
       q = q + -1 | 0;
       a[q >> 0] = 48;
      } while (($ - q | 0) < 2);
      a[q + -1 >> 0] = (p >> 31 & 2) + 43;
      p = q + -2 | 0;
      a[p >> 0] = u;
      u = p;
      p = $ - p | 0;
     }
     w = G + 1 + f + s + p | 0;
     kb(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) eb(H, G, e) | 0;
     kb(e, 48, K, w, I ^ 65536);
     do if (t) {
      q = D >>> 0 > F >>> 0 ? F : D;
      o = q;
      do {
       p = hb(c[o >> 2] | 0, 0, Q) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((p | 0) != (Q | 0)) break;
        a[Y >> 0] = 48;
        p = Y;
       } else {
        if (p >>> 0 <= V >>> 0) break;
        Yb(V | 0, 48, p - ca | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > V >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) eb(p, ba - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       eb(4303, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < z >>> 0) {
       p = o;
       while (1) {
        o = hb(c[p >> 2] | 0, 0, Q) | 0;
        if (o >>> 0 > V >>> 0) {
         Yb(V | 0, 48, o - ca | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        }
        if (!(c[e >> 2] & 32)) eb(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < z >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      kb(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? z : D + 4 | 0;
      if ((f | 0) > -1) {
       s = (o | 0) == 0;
       q = D;
       do {
        o = hb(c[q >> 2] | 0, 0, Q) | 0;
        if ((o | 0) == (Q | 0)) {
         a[Y >> 0] = 48;
         o = Y;
        }
        do if ((q | 0) == (D | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) eb(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         eb(4303, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= V >>> 0) break;
         Yb(V | 0, 48, o + M | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        } while (0);
        p = ba - o | 0;
        if (!(c[e >> 2] & 32)) eb(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      kb(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      eb(u, $ - u | 0, e) | 0;
     } while (0);
     kb(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = r != r | 0.0 != 0.0;
     o = s ? 0 : G;
     q = o + 3 | 0;
     kb(e, 32, K, q, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      eb(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) eb(s ? (t ? 4295 : 4299) : t ? 4287 : 4291, 3, e) | 0;
     kb(e, 32, K, q, I ^ 8192);
     f = (q | 0) < (K | 0) ? K : q;
    } while (0);
    o = f;
    z = J;
    continue a;
   }
  default:
   {
    f = z;
    p = I;
    u = s;
    w = 0;
    v = 2359;
    o = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   o = R;
   f = c[o >> 2] | 0;
   o = c[o + 4 >> 2] | 0;
   q = u & 32;
   if ((f | 0) == 0 & (o | 0) == 0) {
    f = N;
    o = t;
    t = 0;
    q = 2359;
    L = 77;
   } else {
    p = f;
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[2343 + (p & 15) >> 0] | q;
     p = Zb(p | 0, o | 0, 4) | 0;
     o = C;
    } while (!((p | 0) == 0 & (o | 0) == 0));
    L = R;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     q = 2359;
     L = 77;
    } else {
     o = t;
     t = 2;
     q = 2359 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = hb(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = jb(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 2359;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    q = c[t >> 2] | 0;
    if (!q) break;
    o = lb(Z, q) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   kb(e, 32, K, p, I);
   if (!p) {
    f = 0;
    L = 97;
   } else {
    q = 0;
    while (1) {
     o = c[f >> 2] | 0;
     if (!o) {
      f = p;
      L = 97;
      break g;
     }
     o = lb(Z, o) | 0;
     q = o + q | 0;
     if ((q | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) eb(Z, o, e) | 0;
     if (q >>> 0 >= p >>> 0) {
      f = p;
      L = 97;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 97) {
   L = 0;
   kb(e, 32, K, f, I ^ 8192);
   o = (K | 0) > (f | 0) ? K : f;
   z = J;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (s | 0) > -1 ? o & -65537 : o;
   o = R;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((s | 0) != 0 | o) {
    u = (o & 1 ^ 1) + (aa - f) | 0;
    u = (s | 0) > (u | 0) ? s : u;
    w = t;
    v = q;
    o = N;
   } else {
    f = N;
    u = 0;
    w = t;
    v = q;
    o = N;
   }
  }
  t = o - f | 0;
  s = (u | 0) < (t | 0) ? t : u;
  q = w + s | 0;
  o = (K | 0) < (q | 0) ? q : K;
  kb(e, 32, o, q, p);
  if (!(c[e >> 2] & 32)) eb(v, w, e) | 0;
  kb(e, 48, o, q, p ^ 65536);
  kb(e, 48, s, t, 0);
  if (!(c[e >> 2] & 32)) eb(f, t, e) | 0;
  kb(e, 32, o, q, p ^ 8192);
  z = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   gb(j + (m << 3) | 0, n, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } while (0);
 i = ia;
 return m | 0;
}

function vb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[1132] | 0;
 if (d >>> 0 < h >>> 0) oa();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) oa();
 e = a & -8;
 n = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) oa();
  if ((k | 0) == (c[1133] | 0)) {
   b = n + 4 | 0;
   a = c[b >> 2] | 0;
   if ((a & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[1130] = j;
   c[b >> 2] = a & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 4552 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) oa();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) oa();
   }
   if ((d | 0) == (b | 0)) {
    c[1128] = c[1128] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) oa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else oa();
   }
   c[b + 12 >> 2] = d;
   c[f >> 2] = b;
   q = k;
   g = j;
   break;
  }
  f = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   d = k + 16 | 0;
   b = d + 4 | 0;
   a = c[b >> 2] | 0;
   if (!a) {
    a = c[d >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    } else b = d;
   }
   while (1) {
    e = a + 20 | 0;
    d = c[e >> 2] | 0;
    if (d | 0) {
     a = d;
     b = e;
     continue;
    }
    e = a + 16 | 0;
    d = c[e >> 2] | 0;
    if (!d) break; else {
     a = d;
     b = e;
    }
   }
   if (b >>> 0 < h >>> 0) oa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) oa();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) oa();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else oa();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 4816 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[1129] = c[1129] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[1132] | 0) >>> 0) oa();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[1132] | 0;
   if (i >>> 0 < d >>> 0) oa();
   c[i + 24 >> 2] = f;
   b = k + 16 | 0;
   a = c[b >> 2] | 0;
   do if (a | 0) if (a >>> 0 < d >>> 0) oa(); else {
    c[i + 16 >> 2] = a;
    c[a + 24 >> 2] = i;
    break;
   } while (0);
   a = c[b + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    g = j;
    break;
   }
  }
 } else {
  q = d;
  g = e;
 } while (0);
 if (q >>> 0 >= n >>> 0) oa();
 a = n + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) oa();
 if (!(b & 2)) {
  if ((n | 0) == (c[1134] | 0)) {
   p = (c[1131] | 0) + g | 0;
   c[1131] = p;
   c[1134] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[1133] | 0)) return;
   c[1133] = 0;
   c[1130] = 0;
   return;
  }
  if ((n | 0) == (c[1133] | 0)) {
   p = (c[1130] | 0) + g | 0;
   c[1130] = p;
   c[1133] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 4552 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[1132] | 0) >>> 0) oa();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) oa();
   }
   if ((d | 0) == (b | 0)) {
    c[1128] = c[1128] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[1132] | 0) >>> 0) oa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (n | 0)) l = a; else oa();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[n + 24 >> 2] | 0;
   a = c[n + 12 >> 2] | 0;
   do if ((a | 0) == (n | 0)) {
    d = n + 16 | 0;
    b = d + 4 | 0;
    a = c[b >> 2] | 0;
    if (!a) {
     a = c[d >> 2] | 0;
     if (!a) {
      m = 0;
      break;
     } else b = d;
    }
    while (1) {
     e = a + 20 | 0;
     d = c[e >> 2] | 0;
     if (d | 0) {
      a = d;
      b = e;
      continue;
     }
     e = a + 16 | 0;
     d = c[e >> 2] | 0;
     if (!d) break; else {
      a = d;
      b = e;
     }
    }
    if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[1132] | 0) >>> 0) oa();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (n | 0)) oa();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (n | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     m = a;
     break;
    } else oa();
   } while (0);
   if (f | 0) {
    a = c[n + 28 >> 2] | 0;
    b = 4816 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[1129] = c[1129] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[1132] | 0) >>> 0) oa();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[f + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[1132] | 0;
    if (m >>> 0 < d >>> 0) oa();
    c[m + 24 >> 2] = f;
    b = n + 16 | 0;
    a = c[b >> 2] | 0;
    do if (a | 0) if (a >>> 0 < d >>> 0) oa(); else {
     c[m + 16 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    } while (0);
    a = c[b + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[1133] | 0)) {
   c[1130] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 4552 + (a << 1 << 2) | 0;
  b = c[1128] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[1128] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = g >>> 8;
 if (!a) b = 0; else if (g >>> 0 > 16777215) b = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  b = (p + 245760 | 0) >>> 16 & 2;
  b = 14 - (n | o | b) + (p << b >>> 15) | 0;
  b = g >>> (b + 7 | 0) & 1 | b << 1;
 }
 f = 4816 + (b << 2) | 0;
 c[q + 28 >> 2] = b;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[1129] | 0;
 d = 1 << b;
 do if (!(a & d)) {
  c[1129] = a | d;
  c[f >> 2] = q;
  c[q + 24 >> 2] = f;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  e = g << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
  d = c[f >> 2] | 0;
  while (1) {
   if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
    b = 130;
    break;
   }
   a = d + 16 + (e >>> 31 << 2) | 0;
   b = c[a >> 2] | 0;
   if (!b) {
    b = 127;
    break;
   } else {
    e = e << 1;
    d = b;
   }
  }
  if ((b | 0) == 127) if (a >>> 0 < (c[1132] | 0) >>> 0) oa(); else {
   c[a >> 2] = q;
   c[q + 24 >> 2] = d;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((b | 0) == 130) {
   b = d + 8 | 0;
   a = c[b >> 2] | 0;
   p = c[1132] | 0;
   if (a >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[a + 12 >> 2] = q;
    c[b >> 2] = q;
    c[q + 8 >> 2] = a;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else oa();
  }
 } while (0);
 q = (c[1136] | 0) + -1 | 0;
 c[1136] = q;
 if (!q) a = 4968; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[1136] = -1;
 return;
}

function jc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((cc(i | 0) | 0) >>> 0);
   return (C = n, f) | 0;
  }
  g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (C = n, f) | 0;
 } else {
  if (!g) {
   g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (aa(h | 0) | 0) + 33 - (aa(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (C = o, p) | 0;
  } else {
   p = cc(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Xb(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Wb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Wb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = C;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (C = o, p) | 0;
}

function Sa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = Ba, f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = Ba, r = 0.0;
 p = i;
 i = i + 4256 | 0;
 f = p;
 m = p + 2128 | 0;
 o = p + 8 | 0;
 a : do if ((b | 0) > 1) {
  b = a[c[d + 4 >> 2] >> 0] | 0;
  switch (b | 0) {
  case 49:
   {
    n = 95e4;
    break a;
   }
  case 51:
   {
    h = 4;
    break a;
   }
  case 50:
   {
    n = 95e5;
    break a;
   }
  case 52:
   {
    n = 95e6;
    break a;
   }
  case 53:
   {
    n = 19e7;
    break a;
   }
  case 48:
   {
    o = 0;
    i = p;
    return o | 0;
   }
  default:
   {
    c[f >> 2] = b + -48;
    rb(1580, f) | 0;
    o = -1;
    i = p;
    return o | 0;
   }
  }
 } else h = 4; while (0);
 if ((h | 0) == 4) n = 19e6;
 l = Tb(347) | 0;
 $b(l | 0, 1591, 287) | 0;
 b = l + 287 | 0;
 d = 1591;
 f = b + 60 | 0;
 do {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
 } while ((b | 0) < (f | 0));
 j = n << 1;
 h = 0;
 while (1) {
  k = j >>> 0 < 60 ? j : 60;
  f = Tb(k + 2 | 0) | 0;
  $b(f | 0, l + h | 0, k | 0) | 0;
  a[f + k >> 0] = 0;
  d = ob(f) | 0;
  b = c[276] | 0;
  if ((d | 0) > (b | 0)) {
   if ((b | 0) > 0) {
    a[f + b >> 0] = 0;
    sb(f) | 0;
    c[276] = 0;
   }
  } else {
   sb(f) | 0;
   c[276] = (c[276] | 0) - d;
  }
  zb(f);
  b = k + h | 0;
  if ((j | 0) == (k | 0)) break; else {
   j = j - k | 0;
   h = b >>> 0 > 287 ? b + -287 | 0 : b;
  }
 }
 Ub(l);
 if (!(c[277] | 0)) {
  b = 0;
  d = 1108;
 } else {
  b = 1108;
  e = ba(0.0);
  do {
   l = b + 4 | 0;
   e = ba(e + ba(g[l >> 2]));
   r = +e;
   q = ba(r < 1.0 ? r : 1.0);
   g[l >> 2] = q;
   c[b + 8 >> 2] = ~~ba(q * ba(512.0)) >>> 0;
   b = b + 12 | 0;
  } while ((c[b >> 2] | 0) != 0);
  b = 0;
  d = 1108;
 }
 do {
  while (1) {
   l = c[d + 8 >> 2] | 0;
   if (b >>> 0 > l >>> 0 & (l | 0) != 0) d = d + 12 | 0; else break;
  }
  c[m + (b << 2) >> 2] = d;
  b = b + 1 | 0;
 } while ((b | 0) != 513);
 c[m + 2116 >> 2] = 0;
 b = n * 3 | 0;
 while (1) {
  d = b >>> 0 < 60 ? b : 60;
  Ta(m, d);
  if ((b | 0) == (d | 0)) break; else b = b - d | 0;
 }
 if (!(c[325] | 0)) {
  b = 0;
  d = 1300;
 } else {
  b = 1300;
  e = ba(0.0);
  do {
   m = b + 4 | 0;
   e = ba(e + ba(g[m >> 2]));
   r = +e;
   q = ba(r < 1.0 ? r : 1.0);
   g[m >> 2] = q;
   c[b + 8 >> 2] = ~~ba(q * ba(512.0)) >>> 0;
   b = b + 12 | 0;
  } while ((c[b >> 2] | 0) != 0);
  b = 0;
  d = 1300;
 }
 do {
  while (1) {
   m = c[d + 8 >> 2] | 0;
   if (b >>> 0 > m >>> 0 & (m | 0) != 0) d = d + 12 | 0; else break;
  }
  c[o + (b << 2) >> 2] = d;
  b = b + 1 | 0;
 } while ((b | 0) != 513);
 c[o + 2116 >> 2] = 0;
 b = n * 5 | 0;
 while (1) {
  d = b >>> 0 < 60 ? b : 60;
  Ta(o, d);
  if ((b | 0) == (d | 0)) {
   b = 0;
   break;
  } else b = b - d | 0;
 }
 i = p;
 return b | 0;
}

function gb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function Za(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[1116] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Va(sa(146, n | 0) | 0) | 0;
  } else {
   pa(8, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Va(sa(146, m | 0) | 0) | 0;
   la(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 > g >>> 0) {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  } else if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g;
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Gb(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) {
   h = d + 28 | 0;
   if ((c[h >> 2] | 0) != 1) c[h >> 2] = f;
  }
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   j = c[b + 8 >> 2] | 0;
   Da[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0)) {
   i = d + 20 | 0;
   if ((c[i >> 2] | 0) != (e | 0)) {
    c[d + 32 >> 2] = f;
    j = d + 44 | 0;
    if ((c[j >> 2] | 0) == 4) break;
    h = d + 52 | 0;
    a[h >> 0] = 0;
    f = d + 53 | 0;
    a[f >> 0] = 0;
    b = c[b + 8 >> 2] | 0;
    Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 3](b, d, e, e, 1, g);
    if (!(a[f >> 0] | 0)) {
     h = 0;
     f = 13;
    } else if (!(a[h >> 0] | 0)) {
     h = 1;
     f = 13;
    } else f = 17;
    do if ((f | 0) == 13) {
     c[i >> 2] = e;
     i = d + 40 | 0;
     c[i >> 2] = (c[i >> 2] | 0) + 1;
     if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) {
      a[d + 54 >> 0] = 1;
      if (h) {
       f = 17;
       break;
      } else {
       h = 4;
       break;
      }
     }
     if (h) f = 17; else h = 4;
    } while (0);
    if ((f | 0) == 17) h = 3;
    c[j >> 2] = h;
    break;
   }
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Db(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 q = r;
 o = c[d >> 2] | 0;
 p = d + (c[o + -8 >> 2] | 0) | 0;
 o = c[o + -4 >> 2] | 0;
 c[q >> 2] = f;
 c[q + 4 >> 2] = d;
 c[q + 8 >> 2] = e;
 c[q + 12 >> 2] = g;
 d = q + 16 | 0;
 e = q + 20 | 0;
 j = q + 24 | 0;
 l = q + 28 | 0;
 k = q + 32 | 0;
 h = q + 40 | 0;
 g = (o | 0) == (f | 0);
 m = d;
 n = m + 36 | 0;
 do {
  c[m >> 2] = 0;
  m = m + 4 | 0;
 } while ((m | 0) < (n | 0));
 b[d + 36 >> 1] = 0;
 a[d + 38 >> 0] = 0;
 a : do if (g) {
  c[q + 48 >> 2] = 1;
  Ha[c[(c[f >> 2] | 0) + 20 >> 2] & 3](f, q, p, p, 1, 0);
  g = (c[j >> 2] | 0) == 1 ? p : 0;
 } else {
  Da[c[(c[o >> 2] | 0) + 24 >> 2] & 3](o, q, p, 1, 0);
  switch (c[q + 36 >> 2] | 0) {
  case 0:
   {
    g = (c[h >> 2] | 0) == 1 & (c[l >> 2] | 0) == 1 & (c[k >> 2] | 0) == 1 ? c[e >> 2] | 0 : 0;
    break a;
   }
  case 1:
   break;
  default:
   {
    g = 0;
    break a;
   }
  }
  if ((c[j >> 2] | 0) != 1) if (!((c[h >> 2] | 0) == 0 & (c[l >> 2] | 0) == 1 & (c[k >> 2] | 0) == 1)) {
   g = 0;
   break;
  }
  g = c[d >> 2] | 0;
 } while (0);
 i = r;
 return g | 0;
}

function cb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 n = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[n >> 2] = c[e >> 2];
 if ((db(0, d, n, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) o = nb(b) | 0; else o = 0;
  e = c[b >> 2] | 0;
  m = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  h = b + 48 | 0;
  if (!(c[h >> 2] | 0)) {
   g = b + 44 | 0;
   e = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   l = b + 20 | 0;
   c[l >> 2] = p;
   c[h >> 2] = 80;
   k = b + 16 | 0;
   c[k >> 2] = p + 80;
   f = db(b, d, n, q, r) | 0;
   if (e) {
    Ca[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
    f = (c[l >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = e;
    c[h >> 2] = 0;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[l >> 2] = 0;
   }
  } else f = db(b, d, n, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | m;
  if (o | 0) Xa(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function jb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = _(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return (e | 0 ? b : 0) | 0;
}

function eb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = e + 16 | 0;
 f = c[g >> 2] | 0;
 if (!f) if (!(fb(e) | 0)) {
  f = c[g >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  g = c[i >> 2] | 0;
  h = g;
  if ((f - g | 0) >>> 0 < d >>> 0) {
   f = Ca[c[e + 36 >> 2] & 7](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     e = 0;
     g = d;
     f = b;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((Ca[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   h = c[i >> 2] | 0;
   e = f;
   g = d - f | 0;
   f = b + f | 0;
  } else {
   e = 0;
   g = d;
   f = b;
  } while (0);
  $b(h | 0, f | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
  f = e + g | 0;
 } while (0);
 return f | 0;
}

function Ta(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = Ba;
 if (d | 0) {
  f = 0;
  do {
   e = ((((c[394] | 0) * 3877 | 0) + 29573 | 0) >>> 0) % 139968 | 0;
   c[394] = e;
   h = ba(ba(e >>> 0) / ba(139968.0));
   e = c[b + (~~ba(h * ba(512.0)) >>> 0 << 2) >> 2] | 0;
   while (1) if (ba(g[e + 4 >> 2]) < h) e = e + 12 | 0; else break;
   a[b + 2052 + f >> 0] = c[e >> 2];
   f = f + 1 | 0;
  } while ((f | 0) != (d | 0));
 }
 a[b + 2052 + d >> 0] = 10;
 d = d + 1 | 0;
 a[b + 2052 + d >> 0] = 0;
 c[b + 2116 >> 2] = d;
 d = b + 2052 | 0;
 f = ob(d) | 0;
 e = c[276] | 0;
 if ((f | 0) <= (e | 0)) {
  sb(d) | 0;
  c[276] = (c[276] | 0) - f;
  return;
 }
 if ((e | 0) <= 0) return;
 a[b + 2052 + e >> 0] = 0;
 sb(d) | 0;
 a[(c[276] | 0) + (b + 2052) >> 0] = 122;
 c[276] = 0;
 return;
}

function mb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(Wa() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function Fb(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  b = d + 16 | 0;
  f = c[b >> 2] | 0;
  if (!f) {
   c[b >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((f | 0) != (e | 0)) {
   g = d + 36 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  f = c[b >> 2] | 0;
  if ((f | 0) == 2) {
   c[b >> 2] = g;
   f = g;
  }
  if ((f | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function Lb(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) {
   b = d + 28 | 0;
   if ((c[b >> 2] | 0) != 1) c[b >> 2] = f;
  }
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0)) {
   b = d + 20 | 0;
   if ((c[b >> 2] | 0) != (e | 0)) {
    c[d + 32 >> 2] = f;
    c[b >> 2] = e;
    f = d + 40 | 0;
    c[f >> 2] = (c[f >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) a[d + 54 >> 0] = 1;
    c[d + 44 >> 2] = 4;
    break;
   }
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Cb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 64 | 0;
 g = h;
 if ((a | 0) == (b | 0)) b = 1; else if (!b) b = 0; else {
  b = Db(b, 1064, 1032, 0) | 0;
  if (!b) b = 0; else {
   e = g;
   f = e + 56 | 0;
   do {
    c[e >> 2] = 0;
    e = e + 4 | 0;
   } while ((e | 0) < (f | 0));
   c[g >> 2] = b;
   c[g + 8 >> 2] = a;
   c[g + 12 >> 2] = -1;
   c[g + 48 >> 2] = 1;
   Ia[c[(c[b >> 2] | 0) + 28 >> 2] & 3](b, g, c[d >> 2] | 0, 1);
   if ((c[g + 24 >> 2] | 0) == 1) {
    c[d >> 2] = c[g + 16 >> 2];
    b = 1;
   } else b = 0;
  }
 }
 i = h;
 return b | 0;
}

function kb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  Yb(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     eb(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  eb(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function pb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 j = l;
 k = e & 255;
 a[j >> 0] = k;
 g = b + 16 | 0;
 f = c[g >> 2] | 0;
 if (!f) if (!(fb(b) | 0)) {
  f = c[g >> 2] | 0;
  h = 4;
 } else f = -1; else h = 4;
 do if ((h | 0) == 4) {
  h = b + 20 | 0;
  g = c[h >> 2] | 0;
  if (g >>> 0 < f >>> 0) {
   f = e & 255;
   if ((f | 0) != (a[b + 75 >> 0] | 0)) {
    c[h >> 2] = g + 1;
    a[g >> 0] = k;
    break;
   }
  }
  if ((Ca[c[b + 36 >> 2] & 7](b, j, 1) | 0) == 1) f = d[j >> 0] | 0; else f = -1;
 } while (0);
 i = l;
 return f | 0;
}

function fc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = Wb(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = C;
 jc(a, b, Wb(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, C, j) | 0;
 e = Wb(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function ec(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = Wb(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return Wb((jc(h, g, Wb(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, C, 0) | 0) ^ a | 0, C ^ b | 0, a | 0, b | 0) | 0;
}

function $b(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ta(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function ob(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) {
  d = b;
  e = 4;
 } else {
  d = f;
  while (1) {
   if (!(a[b >> 0] | 0)) break a;
   b = b + 1 | 0;
   d = b;
   if (!(d & 3)) {
    d = b;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   b = c[d >> 2] | 0;
   if (!((b & -2139062144 ^ -2139062144) & b + -16843009)) d = d + 4 | 0; else break;
  }
  if ((b & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 return d - f | 0;
}

function hb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = ic(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = hc(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = C;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function ab(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Zb(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +ab(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function ib(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[2369 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 2457;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 2457; else {
  b = 2457;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function Yb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function sb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[340] | 0;
 if ((c[e + 76 >> 2] | 0) > -1) f = nb(e) | 0; else f = 0;
 do if ((tb(b, e) | 0) < 0) b = 1; else {
  if ((a[e + 75 >> 0] | 0) != 10) {
   d = e + 20 | 0;
   b = c[d >> 2] | 0;
   if (b >>> 0 < (c[e + 16 >> 2] | 0) >>> 0) {
    c[d >> 2] = b + 1;
    a[b >> 0] = 10;
    b = 0;
    break;
   }
  }
  b = (pb(e, 10) | 0) < 0;
 } while (0);
 if (f | 0) Xa(e);
 return b << 31 >> 31 | 0;
}

function Ib(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 g = d + 16 | 0;
 b = c[g >> 2] | 0;
 do if (!b) {
  c[g >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } else {
  if ((b | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } while (0);
 return;
}

function fb(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Ya(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((Va(va(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Rb(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  a = ub(b) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = Sb() | 0;
  if (!a) {
   b = 5;
   break;
  }
  Ga[a & 0]();
 }
 if ((b | 0) == 5) {
  b = ya(4) | 0;
  c[b >> 2] = 1564;
  ma(b | 0, 1088, 6);
 } else if ((b | 0) == 6) return a | 0;
 return 0;
}

function $a(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 4;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (na(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Za(b, d, e) | 0;
 i = g;
 return f | 0;
}

function dc(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = _(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (_(e, d) | 0) | 0;
 e = b >>> 16;
 b = _(e, f) | 0;
 return (C = (a >>> 16) + (_(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function qb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = _(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (nb(e) | 0) == 0;
  a = eb(a, f, e) | 0;
  if (!g) Xa(e);
 } else a = eb(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function cc(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function Pa(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
 a[k + 4 >> 0] = a[b + 4 >> 0];
 a[k + 5 >> 0] = a[b + 5 >> 0];
 a[k + 6 >> 0] = a[b + 6 >> 0];
 a[k + 7 >> 0] = a[b + 7 >> 0];
}

function Eb(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Fb(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Ha[c[(c[a >> 2] | 0) + 20 >> 2] & 3](a, b, d, e, f, g);
 }
 return;
}

function Hb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ib(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  Ia[c[(c[a >> 2] | 0) + 28 >> 2] & 3](a, b, d, e);
 }
 return;
}

function ic(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 jc(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function gc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = dc(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function bc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function _b(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function Zb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function pc(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Ha[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Vb() {}
function Wb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Kb(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Fb(0, b, d, e, f);
 return;
}

function rb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = cb(c[340] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function Ua(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Va(qa(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Xb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function lc(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 Da[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Oa(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Mb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ib(0, b, d, e);
 return;
}

function qc(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Ia[a & 3](b | 0, c | 0, d | 0, e | 0);
}

function kc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ca[a & 7](b | 0, c | 0, d | 0) | 0;
}

function Va(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Wa() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function wc(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(5);
}

function hc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return jc(a, b, c, d, 0) | 0;
}

function lb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = mb(a, b, 0) | 0;
 return a | 0;
}

function Wa() {
 var a = 0;
 if (!0) a = 4508; else a = c[(ac() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function Ja(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function sc(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(1);
}

function tb(a, b) {
 a = a | 0;
 b = b | 0;
 return (qb(a, ob(a) | 0, 1, b) | 0) + -1 | 0;
}

function xc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(6);
}

function Sb() {
 var a = 0;
 a = c[1252] | 0;
 c[1252] = a + 0;
 return a | 0;
}

function rc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Na(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function nc(a, b) {
 a = a | 0;
 b = b | 0;
 return Fa[a & 3](b | 0) | 0;
}

function _a(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Xa(a);
 return;
}

function mc(a, b) {
 a = a | 0;
 b = b | 0;
 Ea[a & 15](b | 0);
}

function bb(a, b) {
 a = +a;
 b = b | 0;
 return +(+ab(a, b));
}

function Ma(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function uc(a) {
 a = a | 0;
 ca(3);
 return 0;
}

function Tb(a) {
 a = a | 0;
 return Rb(a) | 0;
}

function zb(a) {
 a = a | 0;
 vb(a);
 return;
}

function yb(a) {
 a = a | 0;
 zb(a);
 return;
}

function Ub(a) {
 a = a | 0;
 zb(a);
 return;
}

function Pb(a) {
 a = a | 0;
 zb(a);
 return;
}

function Jb(a) {
 a = a | 0;
 zb(a);
 return;
}

function oc(a) {
 a = a | 0;
 Ga[a & 0]();
}

function Qb(a) {
 a = a | 0;
 return 4448;
}

function nb(a) {
 a = a | 0;
 return 0;
}

function xb(a) {
 a = a | 0;
 return;
}

function wb(a) {
 a = a | 0;
 return;
}

function Xa(a) {
 a = a | 0;
 return;
}

function Ob(a) {
 a = a | 0;
 return;
}

function Nb(a) {
 a = a | 0;
 return;
}

function Bb(a) {
 a = a | 0;
 return;
}

function Ab(a) {
 a = a | 0;
 return;
}

function tc(a) {
 a = a | 0;
 ca(2);
}

function Qa(a) {
 a = a | 0;
 C = a;
}

function La(a) {
 a = a | 0;
 i = a;
}

function Ra() {
 return C | 0;
}

function Ka() {
 return i | 0;
}

function ac() {
 return 0;
}

function vc() {
 ca(4);
}

// EMSCRIPTEN_END_FUNCS

 var Ca = [ rc, $a, Ya, Cb, Za, rc, rc, rc ];
 var Da = [ sc, Lb, Gb, sc ];
 var Ea = [ tc, wb, Jb, Ab, Bb, yb, Nb, Pb, _a, tc, tc, tc, tc, tc, tc, tc ];
 var Fa = [ uc, Ua, Qb, uc ];
 var Ga = [ vc ];
 var Ha = [ wc, Kb, Eb, wc ];
 var Ia = [ xc, Mb, Hb, xc ];
 return {
  _i64Subtract: Wb,
  _free: vb,
  _main: Sa,
  _i64Add: Xb,
  _pthread_self: ac,
  _memset: Yb,
  _malloc: ub,
  _memcpy: $b,
  _bitshift64Lshr: Zb,
  ___errno_location: Wa,
  _bitshift64Shl: _b,
  runPostSets: Vb,
  stackAlloc: Ja,
  stackSave: Ka,
  stackRestore: La,
  establishStackSpace: Ma,
  setThrew: Na,
  setTempRet0: Qa,
  getTempRet0: Ra,
  dynCall_iiii: kc,
  dynCall_viiiii: lc,
  dynCall_vi: mc,
  dynCall_ii: nc,
  dynCall_v: oc,
  dynCall_viiiiii: pc,
  dynCall_viiii: qc
 };
})


;