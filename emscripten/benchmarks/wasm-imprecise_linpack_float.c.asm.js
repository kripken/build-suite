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
 var ea = env.invoke_ii;
 var fa = env.invoke_iiii;
 var ga = env.invoke_vi;
 var ha = env._pthread_cleanup_pop;
 var ia = env.___syscall6;
 var ja = env._pthread_cleanup_push;
 var ka = env._abort;
 var la = env._sbrk;
 var ma = env._gettimeofday;
 var na = env._emscripten_memcpy_big;
 var oa = env.___syscall54;
 var pa = env.___syscall140;
 var qa = env.___syscall146;
 var ra = ba(0);
 const sa = ba(0);
 
// EMSCRIPTEN_START_FUNCS

function yb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[82050] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   f = (b & 1 ^ 1) + a | 0;
   g = 328240 + (f << 1 << 2) | 0;
   b = g + 8 | 0;
   d = c[b >> 2] | 0;
   h = d + 8 | 0;
   e = c[h >> 2] | 0;
   do if ((g | 0) == (e | 0)) c[82050] = k & ~(1 << f); else {
    if (e >>> 0 < (c[82054] | 0) >>> 0) ka();
    a = e + 12 | 0;
    if ((c[a >> 2] | 0) == (d | 0)) {
     c[a >> 2] = g;
     c[b >> 2] = e;
     break;
    } else ka();
   } while (0);
   C = f << 3;
   c[d + 4 >> 2] = C | 3;
   C = d + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = h;
   i = D;
   return C | 0;
  }
  h = c[82052] | 0;
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
    f = 328240 + (e << 1 << 2) | 0;
    d = f + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    b = c[j >> 2] | 0;
    do if ((f | 0) == (b | 0)) {
     c[82050] = k & ~(1 << e);
     l = h;
    } else {
     if (b >>> 0 < (c[82054] | 0) >>> 0) ka();
     a = b + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = f;
      c[d >> 2] = b;
      l = c[82052] | 0;
      break;
     } else ka();
    } while (0);
    h = (e << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    f = g + q | 0;
    c[f + 4 >> 2] = h | 1;
    c[f + h >> 2] = h;
    if (l | 0) {
     e = c[82055] | 0;
     b = l >>> 3;
     d = 328240 + (b << 1 << 2) | 0;
     a = c[82050] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[82050] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = e;
     c[n + 12 >> 2] = e;
     c[e + 8 >> 2] = n;
     c[e + 12 >> 2] = d;
    }
    c[82052] = h;
    c[82055] = f;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[82051] | 0;
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
    e = c[328504 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[82054] | 0;
    if (k >>> 0 < g >>> 0) ka();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) ka();
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
     if (b >>> 0 < g >>> 0) ka(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) ka();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ka();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else ka();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 328504 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[82051] = c[82051] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[82054] | 0) >>> 0) ka();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[82054] | 0;
     if (o >>> 0 < b >>> 0) ka();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
     a = c[82052] | 0;
     if (a | 0) {
      f = c[82055] | 0;
      b = a >>> 3;
      e = 328240 + (b << 1 << 2) | 0;
      a = c[82050] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[82050] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[82052] = d;
     c[82055] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[82051] | 0;
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
   d = c[328504 + (j << 2) >> 2] | 0;
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
     a = c[328504 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (h >>> 0 < ((c[82052] | 0) - q | 0) >>> 0) {
    f = c[82054] | 0;
    if (k >>> 0 < f >>> 0) ka();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) ka();
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
     if (b >>> 0 < f >>> 0) ka(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ka();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ka();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else ka();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 328504 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[82051] = c[82051] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[82054] | 0) >>> 0) ka();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[82054] | 0;
     if (t >>> 0 < b >>> 0) ka();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
      d = 328240 + (a << 1 << 2) | 0;
      b = c[82050] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[82050] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
     f = 328504 + (b << 2) | 0;
     c[j + 28 >> 2] = b;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[82051] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[82051] = a | d;
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
     if ((w | 0) == 145) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
      c[a >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[82054] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = j;
       c[b >> 2] = j;
       c[j + 8 >> 2] = a;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else ka();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[82052] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[82055] | 0;
  if (b >>> 0 > 15) {
   C = a + q | 0;
   c[82055] = C;
   c[82052] = b;
   c[C + 4 >> 2] = b | 1;
   c[C + b >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[82052] = 0;
   c[82055] = 0;
   c[a + 4 >> 2] = d | 3;
   C = a + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = a + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[82053] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[82053] = A;
  C = c[82056] | 0;
  B = C + q | 0;
  c[82056] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[82168] | 0)) {
  c[82170] = 4096;
  c[82169] = 4096;
  c[82171] = -1;
  c[82172] = -1;
  c[82173] = 0;
  c[82161] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[82168] = v;
 }
 h = q + 48 | 0;
 g = c[82170] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[82160] | 0;
 if (a | 0) {
  u = c[82158] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[82161] & 4)) {
  a = c[82056] | 0;
  c : do if (!a) w = 171; else {
   e = 328648;
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
   a = f - (c[82053] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = la(a | 0) | 0;
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
   f = la(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[82169] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[82158] | 0;
    e = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     d = c[82160] | 0;
     if (d | 0) if (e >>> 0 <= b >>> 0 | e >>> 0 > d >>> 0) break;
     b = la(a | 0) | 0;
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
    b = c[82170] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((la(b | 0) | 0) == (-1 | 0)) {
     la(d | 0) | 0;
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
  c[82161] = c[82161] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = la(k | 0) | 0;
  a = la(0) | 0;
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
  a = (c[82158] | 0) + h | 0;
  c[82158] = a;
  if (a >>> 0 > (c[82159] | 0) >>> 0) c[82159] = a;
  k = c[82056] | 0;
  do if (!k) {
   C = c[82054] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[82054] = f;
   c[82162] = f;
   c[82163] = h;
   c[82165] = 0;
   c[82059] = c[82168];
   c[82058] = -1;
   a = 0;
   do {
    C = 328240 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[82056] = B;
   c[82053] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[82057] = c[82172];
  } else {
   b = 328648;
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
    C = h - C + (c[82053] | 0) | 0;
    c[82056] = B;
    c[82053] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[82057] = c[82172];
    break;
   }
   a = c[82054] | 0;
   if (f >>> 0 < a >>> 0) {
    c[82054] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 328648;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 328648;
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
     C = (c[82053] | 0) + g | 0;
     c[82053] = C;
     c[82056] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[82055] | 0)) {
      C = (c[82052] | 0) + g | 0;
      c[82052] = C;
      c[82055] = l;
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
       b = 328240 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) ka();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ka();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[82050] = c[82050] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) ka();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        ka();
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
        if (d >>> 0 < j >>> 0) ka(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) ka();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) ka();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else ka();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 328504 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[82051] = c[82051] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[82054] | 0) >>> 0) ka();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[82054] | 0;
       if (A >>> 0 < e >>> 0) ka();
       c[A + 24 >> 2] = h;
       d = a + 16 | 0;
       b = c[d >> 2] | 0;
       do if (b | 0) if (b >>> 0 < e >>> 0) ka(); else {
        c[A + 16 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       } while (0);
       b = c[d + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
      d = 328240 + (a << 1 << 2) | 0;
      b = c[82050] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[82050] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[82054] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       ka();
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
     f = 328504 + (b << 2) | 0;
     c[l + 28 >> 2] = b;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[82051] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[82051] = a | d;
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
     if ((w | 0) == 276) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
      c[a >> 2] = l;
      c[l + 24 >> 2] = d;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[82054] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = l;
       c[b >> 2] = l;
       c[l + 8 >> 2] = a;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else ka();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 328648;
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
   c[82056] = C;
   c[82053] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[82057] = c[82172];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[82162];
   c[b + 4 >> 2] = c[82163];
   c[b + 8 >> 2] = c[82164];
   c[b + 12 >> 2] = c[82165];
   c[82162] = f;
   c[82163] = h;
   c[82165] = 0;
   c[82164] = b;
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
     d = 328240 + (a << 1 << 2) | 0;
     b = c[82050] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[82050] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
    f = 328504 + (d << 2) | 0;
    c[k + 28 >> 2] = d;
    c[k + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[82051] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[82051] = a | b;
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
    if ((w | 0) == 302) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
     c[a >> 2] = k;
     c[k + 24 >> 2] = d;
     c[k + 12 >> 2] = k;
     c[k + 8 >> 2] = k;
     break;
    } else if ((w | 0) == 305) {
     b = d + 8 | 0;
     a = c[b >> 2] | 0;
     C = c[82054] | 0;
     if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[a + 12 >> 2] = k;
      c[b >> 2] = k;
      c[k + 8 >> 2] = a;
      c[k + 12 >> 2] = d;
      c[k + 24 >> 2] = 0;
      break;
     } else ka();
    }
   }
  } while (0);
  a = c[82053] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[82053] = A;
   C = c[82056] | 0;
   B = C + q | 0;
   c[82056] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(La() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Wa(e, f, g, j, l) {
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
   c[(La() | 0) >> 2] = 75;
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
  if (ga) if (!(c[e >> 2] & 32)) Xa(z, y, e) | 0;
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
   o = a[2043 + (u * 58 | 0) + o >> 0] | 0;
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
   Za(R, t, g);
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
      p = Eb(p | 0, o | 0, 3) | 0;
      o = C;
     } while (!((p | 0) == 0 & (o | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     q = 2523;
     L = 77;
    } else {
     t = aa - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     q = 2523;
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
     f = Bb(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = R;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     q = 2523;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     q = I & 1;
     p = q;
     q = (q | 0) == 0 ? 2523 : 2525;
     L = 76;
    } else {
     p = 1;
     q = 2524;
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
    q = 2523;
    L = 76;
    break;
   }
  case 99:
   {
    a[P >> 0] = c[R >> 2];
    f = P;
    u = 1;
    w = 0;
    v = 2523;
    o = N;
    break;
   }
  case 109:
   {
    o = $a(c[(La() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[R >> 2] | 0;
    o = o | 0 ? o : 4425;
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
     bb(e, 32, K, 0, I);
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
     H = 4432;
     r = -r;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 4433 : 4438;
    } else {
     G = 1;
     H = 4435;
    }
    h[k >> 3] = r;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +Sa(r, W) * 2.0;
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
      f = _a(f, ((f | 0) < 0) << 31 >> 31, S) | 0;
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
       a[o >> 0] = d[2507 + H >> 0] | t;
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
      bb(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) Xa(y, w, e) | 0;
      bb(e, 48, K, p, I ^ 65536);
      o = f - ca | 0;
      if (!(c[e >> 2] & 32)) Xa(V, o, e) | 0;
      f = $ - t | 0;
      bb(e, 48, q - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Xa(v, f, e) | 0;
      bb(e, 32, K, p, I ^ 8192);
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
         B = Fb(c[q >> 2] | 0, 0, t | 0) | 0;
         B = Cb(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = Pb(B | 0, o | 0, 1e9, 0) | 0;
         c[q >> 2] = A;
         o = Ob(B | 0, o | 0, 1e9, 0) | 0;
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
      q = _a(q, ((q | 0) < 0) << 31 >> 31, S) | 0;
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
     bb(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) Xa(H, G, e) | 0;
     bb(e, 48, K, w, I ^ 65536);
     do if (t) {
      q = D >>> 0 > F >>> 0 ? F : D;
      o = q;
      do {
       p = _a(c[o >> 2] | 0, 0, Q) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((p | 0) != (Q | 0)) break;
        a[Y >> 0] = 48;
        p = Y;
       } else {
        if (p >>> 0 <= V >>> 0) break;
        Db(V | 0, 48, p - ca | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > V >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Xa(p, ba - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Xa(4467, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < z >>> 0) {
       p = o;
       while (1) {
        o = _a(c[p >> 2] | 0, 0, Q) | 0;
        if (o >>> 0 > V >>> 0) {
         Db(V | 0, 48, o - ca | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        }
        if (!(c[e >> 2] & 32)) Xa(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < z >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      bb(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? z : D + 4 | 0;
      if ((f | 0) > -1) {
       s = (o | 0) == 0;
       q = D;
       do {
        o = _a(c[q >> 2] | 0, 0, Q) | 0;
        if ((o | 0) == (Q | 0)) {
         a[Y >> 0] = 48;
         o = Y;
        }
        do if ((q | 0) == (D | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Xa(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         Xa(4467, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= V >>> 0) break;
         Db(V | 0, 48, o + M | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        } while (0);
        p = ba - o | 0;
        if (!(c[e >> 2] & 32)) Xa(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      bb(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Xa(u, $ - u | 0, e) | 0;
     } while (0);
     bb(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = r != r | 0.0 != 0.0;
     o = s ? 0 : G;
     q = o + 3 | 0;
     bb(e, 32, K, q, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Xa(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Xa(s ? (t ? 4459 : 4463) : t ? 4451 : 4455, 3, e) | 0;
     bb(e, 32, K, q, I ^ 8192);
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
    v = 2523;
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
    q = 2523;
    L = 77;
   } else {
    p = f;
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[2507 + (p & 15) >> 0] | q;
     p = Eb(p | 0, o | 0, 4) | 0;
     o = C;
    } while (!((p | 0) == 0 & (o | 0) == 0));
    L = R;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     q = 2523;
     L = 77;
    } else {
     o = t;
     t = 2;
     q = 2523 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = _a(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = ab(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 2523;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    q = c[t >> 2] | 0;
    if (!q) break;
    o = cb(Z, q) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   bb(e, 32, K, p, I);
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
     o = cb(Z, o) | 0;
     q = o + q | 0;
     if ((q | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) Xa(Z, o, e) | 0;
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
   bb(e, 32, K, f, I ^ 8192);
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
  bb(e, 32, o, q, p);
  if (!(c[e >> 2] & 32)) Xa(v, w, e) | 0;
  bb(e, 48, o, q, p ^ 65536);
  bb(e, 48, s, t, 0);
  if (!(c[e >> 2] & 32)) Xa(f, t, e) | 0;
  bb(e, 32, o, q, p ^ 8192);
  z = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   Za(j + (m << 3) | 0, n, g);
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

function Fa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0.0, f = 0, j = 0.0, k = 0, l = sa, m = 0, n = sa, o = 0, p = 0, q = 0, r = 0, s = sa, t = 0, u = 0, v = 0, w = sa, x = 0.0, y = 0, z = 0, A = 0, B = 0.0, C = 0.0, D = 0.0, E = 0.0, F = 0, G = 0, H = 0, I = 0, J = sa, K = 0, L = 0, M = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ca = 0, da = 0, ea = sa, fa = 0.0, ga = 0.0;
 da = i;
 i = i + 528 | 0;
 R = da + 408 | 0;
 Q = da + 400 | 0;
 aa = da + 392 | 0;
 $ = da + 384 | 0;
 Z = da + 376 | 0;
 Y = da + 368 | 0;
 X = da + 360 | 0;
 W = da + 352 | 0;
 V = da + 344 | 0;
 U = da + 296 | 0;
 T = da + 288 | 0;
 S = da + 280 | 0;
 P = da + 272 | 0;
 O = da + 264 | 0;
 M = da + 216 | 0;
 L = da + 208 | 0;
 K = da + 200 | 0;
 I = da + 192 | 0;
 H = da + 176 | 0;
 G = da + 168 | 0;
 F = da + 160 | 0;
 A = da + 144 | 0;
 z = da + 96 | 0;
 y = da + 88 | 0;
 t = da + 80 | 0;
 r = da + 72 | 0;
 u = da + 32 | 0;
 q = da + 24 | 0;
 p = da + 16 | 0;
 o = da + 8 | 0;
 m = da;
 ca = da + 416 | 0;
 ub(10) | 0;
 vb(1895) | 0;
 c[81991] = 201;
 c[81992] = 200;
 c[81986] = 100;
 k = c[256] | 0;
 c[m >> 2] = 1256;
 pb(k, 1252, m) | 0;
 c[o >> 2] = 1265;
 pb(k, 1252, o) | 0;
 rb(1272, 53, 1, k) | 0;
 c[p >> 2] = 1344;
 pb(k, 1326, p) | 0;
 k = c[81986] | 0;
 m = _(k, k) | 0;
 J = ba(+(m | 0) * 2.0 + +(_(m, k) | 0) * 2.0 / 3.0);
 m = c[81991] | 0;
 if (k | 0) {
  b = 1325;
  a = 0;
  do {
   f = _(a, m) | 0;
   d = 0;
   do {
    b = (b * 3125 | 0) % 65536 | 0;
    g[164744 + (d + f << 2) >> 2] = ba(+(b + -32768 | 0) * .00006103515625);
    d = d + 1 | 0;
   } while ((d | 0) != (k | 0));
   a = a + 1 | 0;
  } while ((a | 0) != (k | 0));
  Db(325544, 0, k << 2 | 0) | 0;
  b = 0;
  do {
   d = _(b, m) | 0;
   a = 0;
   do {
    v = 325544 + (a << 2) | 0;
    w = ba(g[v >> 2]);
    g[v >> 2] = ba(w + ba(g[164744 + (a + d << 2) >> 2]));
    a = a + 1 | 0;
   } while ((a | 0) != (k | 0));
   b = b + 1 | 0;
  } while ((b | 0) != (k | 0));
 }
 ma(p | 0, o | 0) | 0;
 h[592] = +(c[p >> 2] | 0) + +(c[p + 4 >> 2] | 0) * 1.0e-06;
 Ga(164744, c[81991] | 0, c[81986] | 0, 327144, 327960);
 ma(p | 0, o | 0) | 0;
 E = +(c[p >> 2] | 0) + +(c[p + 4 >> 2] | 0) * 1.0e-06 - +h[592];
 h[592] = E;
 g[81993] = ba(E);
 ma(p | 0, o | 0) | 0;
 h[592] = +(c[p >> 2] | 0) + +(c[p + 4 >> 2] | 0) * 1.0e-06;
 Ha(164744, c[81991] | 0, c[81986] | 0, 327144, 325544, 0);
 ma(p | 0, o | 0) | 0;
 E = +(c[p >> 2] | 0) + +(c[p + 4 >> 2] | 0) * 1.0e-06 - +h[592];
 h[592] = E;
 w = ba(E);
 g[82008] = w;
 w = ba(w + ba(g[81993]));
 c[81987] = 0;
 o = c[81986] | 0;
 m = (o | 0) == 0;
 if (m) {
  a = c[81991] | 0;
  c[81987] = 0;
  b = 0;
  s = ba(0.0);
 } else {
  a = 0;
  do {
   c[326344 + (a << 2) >> 2] = c[325544 + (a << 2) >> 2];
   a = a + 1 | 0;
  } while ((a | 0) < (o | 0));
  c[81987] = a;
  a = c[81991] | 0;
  if (!o) l = ba(0.0); else {
   d = 1325;
   b = 0;
   l = ba(0.0);
   do {
    k = _(b, a) | 0;
    f = 0;
    do {
     d = (d * 3125 | 0) % 65536 | 0;
     s = ba(+(d + -32768 | 0) * .00006103515625);
     g[164744 + (f + k << 2) >> 2] = s;
     l = s > l ? s : l;
     f = f + 1 | 0;
    } while ((f | 0) != (o | 0));
    b = b + 1 | 0;
   } while ((b | 0) != (o | 0));
   Db(325544, 0, o << 2 | 0) | 0;
   d = 0;
   do {
    f = _(d, a) | 0;
    b = 0;
    do {
     v = 325544 + (b << 2) | 0;
     s = ba(g[v >> 2]);
     g[v >> 2] = ba(s + ba(g[164744 + (b + f << 2) >> 2]));
     b = b + 1 | 0;
    } while ((b | 0) != (o | 0));
    d = d + 1 | 0;
   } while ((d | 0) != (o | 0));
  }
  c[81987] = 0;
  if (m) {
   b = 0;
   s = l;
  } else {
   b = 0;
   do {
    v = 325544 + (b << 2) | 0;
    g[v >> 2] = ba(-ba(g[v >> 2]));
    b = b + 1 | 0;
   } while ((b | 0) < (o | 0));
   c[81987] = b;
   b = o;
   s = l;
  }
 }
 Ia(b, 325544, b, a, 326344, 164744);
 c[81987] = 0;
 a = c[81986] | 0;
 if (!a) {
  a = 0;
  l = ba(0.0);
  n = ba(0.0);
 } else {
  l = ba(0.0);
  n = ba(0.0);
  b = 0;
  do {
   ea = ba(N(ba(g[325544 + (b << 2) >> 2])));
   n = n > ea ? n : ea;
   ea = ba(N(ba(g[326344 + (b << 2) >> 2])));
   l = l > ea ? l : ea;
   b = b + 1 | 0;
  } while ((b | 0) < (a | 0));
  c[81987] = b;
 }
 l = ba(n / ba(ba(l * ba(s * ba(a | 0))) * ba(1.1920929e-07)));
 s = ba(ba(g[81586]) + ba(-1.0));
 ea = ba(ba(g[326344 + (a + -1 << 2) >> 2]) + ba(-1.0));
 tb(1357, q) | 0;
 vb(1938) | 0;
 E = +l;
 B = +n;
 C = +s;
 D = +ea;
 h[u >> 3] = E;
 h[u + 8 >> 3] = B;
 h[u + 16 >> 3] = 1.1920928955078125e-07;
 h[u + 24 >> 3] = C;
 h[u + 32 >> 3] = D;
 tb(1396, u) | 0;
 c[r >> 2] = c[81986];
 tb(1429, r) | 0;
 c[t >> 2] = c[81991];
 tb(1482, t) | 0;
 tb(1536, y) | 0;
 vb(2031) | 0;
 if (w > ba(0.0)) {
  j = +w;
  l = ba(+J / (j * 1.0e6));
  g[82023] = l;
  e = +l;
  l = ba(ba(2.0) / l);
 } else {
  g[82023] = ba(0.0);
  e = 0.0;
  j = +w;
  l = ba(0.0);
 }
 ea = ba(w / ba(.0560000017));
 fa = +ba(g[81993]);
 x = +ba(g[82008]);
 h[z >> 3] = fa;
 h[z + 8 >> 3] = x;
 h[z + 16 >> 3] = j;
 h[z + 24 >> 3] = e;
 h[z + 32 >> 3] = +l;
 h[z + 40 >> 3] = +ea;
 tb(1857, z) | 0;
 vb(1972) | 0;
 t = z + 4 | 0;
 u = z + 4 | 0;
 v = 10;
 a = -20;
 while (1) {
  ma(z | 0, y | 0) | 0;
  h[592] = +(c[z >> 2] | 0) + +(c[t >> 2] | 0) * 1.0e-06;
  q = a + 1 | 0;
  c[81987] = 0;
  r = (v | 0) > 0;
  if (r) {
   m = c[81991] | 0;
   o = c[81986] | 0;
   p = o << 2;
   if (!o) a = (v | 0) > 1 ? v : 1; else {
    a = 0;
    do {
     d = 1325;
     b = 0;
     do {
      k = _(b, m) | 0;
      f = 0;
      do {
       d = (d * 3125 | 0) % 65536 | 0;
       g[164744 + (f + k << 2) >> 2] = ba(+(d + -32768 | 0) * .00006103515625);
       f = f + 1 | 0;
      } while ((f | 0) != (o | 0));
      b = b + 1 | 0;
     } while ((b | 0) != (o | 0));
     Db(325544, 0, p | 0) | 0;
     d = 0;
     do {
      f = _(d, m) | 0;
      b = 0;
      do {
       k = 325544 + (b << 2) | 0;
       ea = ba(g[k >> 2]);
       g[k >> 2] = ba(ea + ba(g[164744 + (b + f << 2) >> 2]));
       b = b + 1 | 0;
      } while ((b | 0) != (o | 0));
      d = d + 1 | 0;
     } while ((d | 0) != (o | 0));
     a = a + 1 | 0;
    } while ((a | 0) < (v | 0));
   }
   c[81987] = a;
  }
  ma(z | 0, y | 0) | 0;
  e = +(c[z >> 2] | 0) + +(c[u >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = e;
  e = +ba(e);
  c[A >> 2] = v;
  h[A + 8 >> 3] = e;
  tb(1592, A) | 0;
  a = e > 1.0 ? 0 : q;
  if ((a | 0) >= 0) {
   t = r;
   break;
  }
  v = e < .1 ? v * 10 | 0 : v << 1;
 }
 x = +(v | 0);
 l = ba(e / x);
 h[F >> 3] = +l;
 tb(1618, F) | 0;
 c[G >> 2] = ~~1.0;
 tb(1657, G) | 0;
 c[81989] = 10;
 p = G + 4 | 0;
 q = G + 4 | 0;
 a = -20;
 while (1) {
  ma(G | 0, F | 0) | 0;
  h[592] = +(c[G >> 2] | 0) + +(c[p >> 2] | 0) * 1.0e-06;
  o = a + 1 | 0;
  c[81987] = 0;
  if ((c[81989] | 0) > 0) do {
   k = c[81991] | 0;
   m = c[81986] | 0;
   if (m | 0) {
    b = 1325;
    a = 0;
    do {
     f = _(a, k) | 0;
     d = 0;
     do {
      b = (b * 3125 | 0) % 65536 | 0;
      g[164744 + (d + f << 2) >> 2] = ba(+(b + -32768 | 0) * .00006103515625);
      d = d + 1 | 0;
     } while ((d | 0) != (m | 0));
     a = a + 1 | 0;
    } while ((a | 0) != (m | 0));
    Db(325544, 0, m << 2 | 0) | 0;
    b = 0;
    do {
     d = _(b, k) | 0;
     a = 0;
     do {
      A = 325544 + (a << 2) | 0;
      ea = ba(g[A >> 2]);
      g[A >> 2] = ba(ea + ba(g[164744 + (a + d << 2) >> 2]));
      a = a + 1 | 0;
     } while ((a | 0) != (m | 0));
     b = b + 1 | 0;
    } while ((b | 0) != (m | 0));
   }
   Ga(164744, k, m, 327144, 327960);
   A = (c[81987] | 0) + 1 | 0;
   c[81987] = A;
  } while ((A | 0) < (c[81989] | 0));
  ma(G | 0, F | 0) | 0;
  e = +(c[G >> 2] | 0) + +(c[q >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = e;
  ea = ba(e);
  e = +ea;
  c[H >> 2] = c[81989];
  h[H + 8 >> 3] = e;
  tb(1592, H) | 0;
  a = e > 1.0 ? 0 : o;
  if ((a | 0) >= 0) {
   j = 1.0;
   break;
  }
  A = c[81989] | 0;
  c[81989] = e < .1 ? A * 10 | 0 : A << 1;
 }
 o = ~~(j * +(c[81989] | 0) / e);
 o = (o | 0) == 0 ? 1 : o;
 c[81989] = o;
 c[I >> 2] = o;
 tb(1705, I) | 0;
 c[K >> 2] = c[81991];
 tb(1725, K) | 0;
 tb(1536, L) | 0;
 vb(2031) | 0;
 ea = ba(l * ba(c[81989] | 0));
 g[82029] = ba(0.0);
 c[81988] = 1;
 o = L + 4 | 0;
 p = L + 4 | 0;
 e = +ea;
 q = L + 4 | 0;
 r = L + 4 | 0;
 j = +J;
 do {
  ma(L | 0, K | 0) | 0;
  h[592] = +(c[L >> 2] | 0) + +(c[o >> 2] | 0) * 1.0e-06;
  c[81987] = 0;
  if ((c[81989] | 0) > 0) do {
   k = c[81991] | 0;
   m = c[81986] | 0;
   if (m | 0) {
    b = 1325;
    a = 0;
    do {
     f = _(a, k) | 0;
     d = 0;
     do {
      b = (b * 3125 | 0) % 65536 | 0;
      g[164744 + (d + f << 2) >> 2] = ba(+(b + -32768 | 0) * .00006103515625);
      d = d + 1 | 0;
     } while ((d | 0) != (m | 0));
     a = a + 1 | 0;
    } while ((a | 0) != (m | 0));
    Db(325544, 0, m << 2 | 0) | 0;
    b = 0;
    do {
     d = _(b, k) | 0;
     a = 0;
     do {
      I = 325544 + (a << 2) | 0;
      ea = ba(g[I >> 2]);
      g[I >> 2] = ba(ea + ba(g[164744 + (a + d << 2) >> 2]));
      a = a + 1 | 0;
     } while ((a | 0) != (m | 0));
     b = b + 1 | 0;
    } while ((b | 0) != (m | 0));
   }
   Ga(164744, k, m, 327144, 327960);
   I = (c[81987] | 0) + 1 | 0;
   c[81987] = I;
  } while ((I | 0) < (c[81989] | 0));
  ma(L | 0, K | 0) | 0;
  fa = +(c[L >> 2] | 0) + +(c[p >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = fa;
  ea = ba((fa - e) / +(c[81989] | 0));
  g[327972 + (c[81988] << 2) >> 2] = ea;
  ma(L | 0, K | 0) | 0;
  h[592] = +(c[L >> 2] | 0) + +(c[q >> 2] | 0) * 1.0e-06;
  c[81987] = 0;
  if ((c[81989] | 0) > 0) do {
   Ha(164744, c[81991] | 0, c[81986] | 0, 327144, 325544, 0);
   I = (c[81987] | 0) + 1 | 0;
   c[81987] = I;
  } while ((I | 0) < (c[81989] | 0));
  ma(L | 0, K | 0) | 0;
  ga = +(c[L >> 2] | 0) + +(c[r >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = ga;
  w = ba(ga / +(c[81989] | 0));
  I = c[81988] | 0;
  g[328032 + (I << 2) >> 2] = w;
  s = ba(g[327972 + (I << 2) >> 2]);
  ea = ba(s + w);
  ga = +ea;
  n = ba(j / (ga * 1.0e6));
  I = 328092 + (I << 2) | 0;
  g[I >> 2] = n;
  J = ba(ba(2.0) / n);
  ea = ba(ea / ba(.0560000017));
  g[82029] = ba(ba(g[82029]) + n);
  fa = +ba(g[I >> 2]);
  h[M >> 3] = +s;
  h[M + 8 >> 3] = +w;
  h[M + 16 >> 3] = ga;
  h[M + 24 >> 3] = fa;
  h[M + 32 >> 3] = +J;
  h[M + 40 >> 3] = +ea;
  tb(1857, M) | 0;
  I = (c[81988] | 0) + 1 | 0;
  c[81988] = I;
 } while ((I | 0) < 6);
 ea = ba(ba(g[82029]) / ba(5.0));
 g[82029] = ea;
 h[O >> 3] = +ea;
 tb(1772, O) | 0;
 vb(2001) | 0;
 ma(O | 0, M | 0) | 0;
 h[592] = +(c[O >> 2] | 0) + +(c[O + 4 >> 2] | 0) * 1.0e-06;
 c[81987] = 0;
 if (t) {
  m = c[81992] | 0;
  o = c[81986] | 0;
  p = o << 2;
  if (!o) a = (v | 0) > 1 ? v : 1; else {
   a = 0;
   do {
    d = 1325;
    b = 0;
    do {
     k = _(b, m) | 0;
     f = 0;
     do {
      d = (d * 3125 | 0) % 65536 | 0;
      g[4744 + (f + k << 2) >> 2] = ba(+(d + -32768 | 0) * .00006103515625);
      f = f + 1 | 0;
     } while ((f | 0) != (o | 0));
     b = b + 1 | 0;
    } while ((b | 0) != (o | 0));
    Db(325544, 0, p | 0) | 0;
    d = 0;
    do {
     f = _(d, m) | 0;
     b = 0;
     do {
      L = 325544 + (b << 2) | 0;
      ea = ba(g[L >> 2]);
      g[L >> 2] = ba(ea + ba(g[4744 + (b + f << 2) >> 2]));
      b = b + 1 | 0;
     } while ((b | 0) != (o | 0));
     d = d + 1 | 0;
    } while ((d | 0) != (o | 0));
    a = a + 1 | 0;
   } while ((a | 0) < (v | 0));
  }
  c[81987] = a;
 }
 ma(O | 0, M | 0) | 0;
 e = +(c[O >> 2] | 0) + +(c[O + 4 >> 2] | 0) * 1.0e-06 - +h[592];
 h[592] = e;
 ea = ba(+ba(e) / x);
 h[P >> 3] = +ea;
 tb(1618, P) | 0;
 c[S >> 2] = c[81992];
 tb(1725, S) | 0;
 tb(1536, T) | 0;
 vb(2031) | 0;
 ea = ba(ea * ba(c[81989] | 0));
 g[82035] = ba(0.0);
 c[81988] = 7;
 r = T + 4 | 0;
 q = T + 4 | 0;
 e = +ea;
 p = T + 4 | 0;
 o = T + 4 | 0;
 do {
  ma(T | 0, S | 0) | 0;
  h[592] = +(c[T >> 2] | 0) + +(c[r >> 2] | 0) * 1.0e-06;
  c[81987] = 0;
  if ((c[81989] | 0) > 0) do {
   k = c[81992] | 0;
   m = c[81986] | 0;
   if (m | 0) {
    b = 1325;
    a = 0;
    do {
     f = _(a, k) | 0;
     d = 0;
     do {
      b = (b * 3125 | 0) % 65536 | 0;
      g[4744 + (d + f << 2) >> 2] = ba(+(b + -32768 | 0) * .00006103515625);
      d = d + 1 | 0;
     } while ((d | 0) != (m | 0));
     a = a + 1 | 0;
    } while ((a | 0) != (m | 0));
    Db(325544, 0, m << 2 | 0) | 0;
    b = 0;
    do {
     d = _(b, k) | 0;
     a = 0;
     do {
      P = 325544 + (a << 2) | 0;
      ea = ba(g[P >> 2]);
      g[P >> 2] = ba(ea + ba(g[4744 + (a + d << 2) >> 2]));
      a = a + 1 | 0;
     } while ((a | 0) != (m | 0));
     b = b + 1 | 0;
    } while ((b | 0) != (m | 0));
   }
   Ga(4744, k, m, 327144, 327960);
   P = (c[81987] | 0) + 1 | 0;
   c[81987] = P;
  } while ((P | 0) < (c[81989] | 0));
  ma(T | 0, S | 0) | 0;
  ga = +(c[T >> 2] | 0) + +(c[q >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = ga;
  ea = ba((ga - e) / +(c[81989] | 0));
  g[327972 + (c[81988] << 2) >> 2] = ea;
  ma(T | 0, S | 0) | 0;
  h[592] = +(c[T >> 2] | 0) + +(c[p >> 2] | 0) * 1.0e-06;
  c[81987] = 0;
  if ((c[81989] | 0) > 0) do {
   Ha(4744, c[81992] | 0, c[81986] | 0, 327144, 325544, 0);
   P = (c[81987] | 0) + 1 | 0;
   c[81987] = P;
  } while ((P | 0) < (c[81989] | 0));
  ma(T | 0, S | 0) | 0;
  fa = +(c[T >> 2] | 0) + +(c[o >> 2] | 0) * 1.0e-06 - +h[592];
  h[592] = fa;
  w = ba(fa / +(c[81989] | 0));
  P = c[81988] | 0;
  g[328032 + (P << 2) >> 2] = w;
  s = ba(g[327972 + (P << 2) >> 2]);
  ea = ba(s + w);
  fa = +ea;
  n = ba(j / (fa * 1.0e6));
  P = 328092 + (P << 2) | 0;
  g[P >> 2] = n;
  J = ba(ba(2.0) / n);
  ea = ba(ea / ba(.0560000017));
  g[82035] = ba(ba(g[82035]) + n);
  ga = +ba(g[P >> 2]);
  h[U >> 3] = +s;
  h[U + 8 >> 3] = +w;
  h[U + 16 >> 3] = fa;
  h[U + 24 >> 3] = ga;
  h[U + 32 >> 3] = +J;
  h[U + 40 >> 3] = +ea;
  tb(1857, U) | 0;
  P = (c[81988] | 0) + 1 | 0;
  c[81988] = P;
 } while ((P | 0) < 12);
 ea = ba(ba(g[82035]) / ba(5.0));
 g[82035] = ea;
 h[V >> 3] = +ea;
 tb(1772, V) | 0;
 ea = ba(g[82029]);
 J = ba(g[82035]);
 ub(10) | 0;
 c[W >> 2] = 1256;
 tb(1252, W) | 0;
 c[X >> 2] = 1265;
 tb(1252, X) | 0;
 h[Y >> 3] = +(J < ea ? J : ea);
 tb(1813, Y) | 0;
 c[81987] = 12;
 h[Z >> 3] = E;
 nb(ca, 1841, Z) | 0;
 h[$ >> 3] = B;
 nb(ca + 20 | 0, 1848, $) | 0;
 h[aa >> 3] = 1.1920928955078125e-07;
 nb(ca + 40 | 0, 1848, aa) | 0;
 h[Q >> 3] = C;
 nb(ca + 60 | 0, 1848, Q) | 0;
 h[R >> 3] = D;
 nb(ca + 80 | 0, 1848, R) | 0;
 xb(1855, 0, 10) | 0;
 ub(10) | 0;
 i = da;
 return 0;
}

function zb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[82054] | 0;
 if (d >>> 0 < h >>> 0) ka();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) ka();
 e = a & -8;
 n = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) ka();
  if ((k | 0) == (c[82055] | 0)) {
   b = n + 4 | 0;
   a = c[b >> 2] | 0;
   if ((a & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[82052] = j;
   c[b >> 2] = a & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 328240 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[82050] = c[82050] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) ka();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else ka();
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
   if (b >>> 0 < h >>> 0) ka(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) ka();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) ka();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else ka();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 328504 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[82051] = c[82051] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[82054] | 0) >>> 0) ka();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[82054] | 0;
   if (i >>> 0 < d >>> 0) ka();
   c[i + 24 >> 2] = f;
   b = k + 16 | 0;
   a = c[b >> 2] | 0;
   do if (a | 0) if (a >>> 0 < d >>> 0) ka(); else {
    c[i + 16 >> 2] = a;
    c[a + 24 >> 2] = i;
    break;
   } while (0);
   a = c[b + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
 if (q >>> 0 >= n >>> 0) ka();
 a = n + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) ka();
 if (!(b & 2)) {
  if ((n | 0) == (c[82056] | 0)) {
   p = (c[82053] | 0) + g | 0;
   c[82053] = p;
   c[82056] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[82055] | 0)) return;
   c[82055] = 0;
   c[82052] = 0;
   return;
  }
  if ((n | 0) == (c[82055] | 0)) {
   p = (c[82052] | 0) + g | 0;
   c[82052] = p;
   c[82055] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 328240 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[82054] | 0) >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[82050] = c[82050] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[82054] | 0) >>> 0) ka();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (n | 0)) l = a; else ka();
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
    if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[82054] | 0) >>> 0) ka();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (n | 0)) ka();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (n | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     m = a;
     break;
    } else ka();
   } while (0);
   if (f | 0) {
    a = c[n + 28 >> 2] | 0;
    b = 328504 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[82051] = c[82051] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[82054] | 0) >>> 0) ka();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[f + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[82054] | 0;
    if (m >>> 0 < d >>> 0) ka();
    c[m + 24 >> 2] = f;
    b = n + 16 | 0;
    a = c[b >> 2] | 0;
    do if (a | 0) if (a >>> 0 < d >>> 0) ka(); else {
     c[m + 16 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    } while (0);
    a = c[b + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[82055] | 0)) {
   c[82052] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 328240 + (a << 1 << 2) | 0;
  b = c[82050] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[82050] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
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
 f = 328504 + (b << 2) | 0;
 c[q + 28 >> 2] = b;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[82051] | 0;
 d = 1 << b;
 do if (!(a & d)) {
  c[82051] = a | d;
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
  if ((b | 0) == 127) if (a >>> 0 < (c[82054] | 0) >>> 0) ka(); else {
   c[a >> 2] = q;
   c[q + 24 >> 2] = d;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((b | 0) == 130) {
   b = d + 8 | 0;
   a = c[b >> 2] | 0;
   p = c[82054] | 0;
   if (a >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[a + 12 >> 2] = q;
    c[b >> 2] = q;
    c[q + 8 >> 2] = a;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else ka();
  }
 } while (0);
 q = (c[82058] | 0) + -1 | 0;
 c[82058] = q;
 if (!q) a = 328656; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[82058] = -1;
 return;
}

function jb(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(La() | 0) >> 2] = 22;
  h = 0;
  g = 0;
 } else {
  r = b + 4 | 0;
  q = b + 100 | 0;
  do {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = kb(b) | 0;
  } while ((gb(i) | 0) != 0);
  b : do switch (i | 0) {
  case 43:
  case 45:
   {
    j = ((i | 0) == 45) << 31 >> 31;
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
     p = j;
     break b;
    } else {
     i = kb(b) | 0;
     p = j;
     break b;
    }
   }
  default:
   p = 0;
  } while (0);
  j = (e | 0) == 0;
  do if ((e | 16 | 0) == 16 & (i | 0) == 48) {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = kb(b) | 0;
   if ((i | 32 | 0) != 120) if (j) {
    e = 8;
    n = 46;
    break;
   } else {
    n = 32;
    break;
   }
   e = c[r >> 2] | 0;
   if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = e + 1;
    i = d[e >> 0] | 0;
   } else i = kb(b) | 0;
   if ((d[4470 + i >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     ib(b, 0);
     h = 0;
     g = 0;
     break a;
    }
    if (g) {
     h = 0;
     g = 0;
     break a;
    }
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    h = 0;
    g = 0;
    break a;
   } else {
    e = 16;
    n = 46;
   }
  } else {
   e = j ? 10 : e;
   if ((d[4470 + i >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    ib(b, 0);
    c[(La() | 0) >> 2] = 22;
    h = 0;
    g = 0;
    break a;
   }
  } while (0);
  if ((n | 0) == 32) if ((e | 0) == 10) {
   e = i + -48 | 0;
   if (e >>> 0 < 10) {
    i = 0;
    while (1) {
     j = (i * 10 | 0) + e | 0;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = kb(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    f = 0;
   } else {
    e = 0;
    f = 0;
   }
   j = i + -48 | 0;
   if (j >>> 0 < 10) {
    while (1) {
     k = Nb(e | 0, f | 0, 10, 0) | 0;
     l = C;
     m = ((j | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~j >>> 0) break;
     k = Cb(k | 0, l | 0, j | 0, m | 0) | 0;
     f = C;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = kb(b) | 0;
     j = i + -48 | 0;
     if (j >>> 0 < 10 & (f >>> 0 < 429496729 | (f | 0) == 429496729 & k >>> 0 < 2576980378)) e = k; else {
      e = k;
      break;
     }
    }
    if (j >>> 0 > 9) {
     i = e;
     e = p;
    } else {
     j = e;
     e = 10;
     n = 72;
    }
   } else {
    i = e;
    e = p;
   }
  } else n = 46;
  c : do if ((n | 0) == 46) {
   if (!(e + -1 & e)) {
    n = a[4726 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[4470 + i >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = kb(b) | 0;
      j = a[4470 + i >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = Eb(-1, -1, n | 0) | 0;
    m = C;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = k;
     n = 72;
     break;
    }
    while (1) {
     k = Fb(k | 0, f | 0, n | 0) | 0;
     f = C;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = kb(b) | 0;
     j = a[4470 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = k;
      n = 72;
      break c;
     }
    }
   }
   f = a[4470 + i >> 0] | 0;
   j = f & 255;
   if (j >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = j + (_(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = kb(b) | 0;
     f = a[4470 + i >> 0] | 0;
     j = f & 255;
     if (!(k >>> 0 < 119304647 & j >>> 0 < e >>> 0)) {
      j = k;
      break;
     } else i = k;
    }
    k = 0;
   } else {
    j = 0;
    k = 0;
   }
   if ((f & 255) >>> 0 < e >>> 0) {
    n = Ob(-1, -1, e | 0, 0) | 0;
    o = C;
    while (1) {
     if (k >>> 0 > o >>> 0 | (k | 0) == (o | 0) & j >>> 0 > n >>> 0) {
      f = k;
      n = 72;
      break c;
     }
     m = Nb(j | 0, k | 0, e | 0, 0) | 0;
     l = C;
     f = f & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & m >>> 0 > ~f >>> 0) {
      f = k;
      n = 72;
      break c;
     }
     j = Cb(f | 0, 0, m | 0, l | 0) | 0;
     k = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = kb(b) | 0;
     f = a[4470 + i >> 0] | 0;
     if ((f & 255) >>> 0 >= e >>> 0) {
      f = k;
      n = 72;
      break;
     }
    }
   } else {
    f = k;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[4470 + i >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = kb(b) | 0;
   } while ((d[4470 + i >> 0] | 0) >>> 0 < e >>> 0);
   c[(La() | 0) >> 2] = 34;
   f = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = j;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(f >>> 0 < h >>> 0 | (f | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(La() | 0) >> 2] = 34;
    g = Cb(g | 0, h | 0, -1, -1) | 0;
    h = C;
    break;
   }
   if (f >>> 0 > h >>> 0 | (f | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(La() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = Bb(i ^ e | 0, f ^ g | 0, e | 0, g | 0) | 0;
  h = C;
 } while (0);
 C = h;
 return g | 0;
}

function Ia(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = sa, R = sa, S = 0;
 h = (c | 0) % 2 | 0;
 if ((h | 0) > 0) {
  h = h + -1 | 0;
  if ((a | 0) > 0) {
   j = e + (h << 2) | 0;
   i = _(h, d) | 0;
   h = 0;
   do {
    P = b + (h << 2) | 0;
    R = ba(g[P >> 2]);
    Q = ba(g[j >> 2]);
    g[P >> 2] = ba(R + ba(Q * ba(g[f + (h + i << 2) >> 2])));
    h = h + 1 | 0;
   } while ((h | 0) != (a | 0));
  }
 }
 h = (c | 0) % 4 | 0;
 if ((h | 0) > 1) {
  i = h + -1 | 0;
  if ((a | 0) > 0) {
   l = h + -2 | 0;
   j = e + (l << 2) | 0;
   l = _(l, d) | 0;
   k = e + (i << 2) | 0;
   i = _(i, d) | 0;
   h = 0;
   do {
    P = b + (h << 2) | 0;
    R = ba(g[P >> 2]);
    Q = ba(g[j >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + l << 2) >> 2])));
    R = ba(g[k >> 2]);
    g[P >> 2] = ba(Q + ba(R * ba(g[f + (h + i << 2) >> 2])));
    h = h + 1 | 0;
   } while ((h | 0) != (a | 0));
  }
 }
 h = (c | 0) % 8 | 0;
 if ((h | 0) > 3) {
  i = h + -1 | 0;
  if ((a | 0) > 0) {
   o = h + -4 | 0;
   m = e + (o << 2) | 0;
   o = _(o, d) | 0;
   p = h + -3 | 0;
   n = e + (p << 2) | 0;
   p = _(p, d) | 0;
   l = h + -2 | 0;
   j = e + (l << 2) | 0;
   l = _(l, d) | 0;
   k = e + (i << 2) | 0;
   i = _(i, d) | 0;
   h = 0;
   do {
    P = b + (h << 2) | 0;
    R = ba(g[P >> 2]);
    Q = ba(g[m >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + o << 2) >> 2])));
    R = ba(g[n >> 2]);
    R = ba(Q + ba(R * ba(g[f + (h + p << 2) >> 2])));
    Q = ba(g[j >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + l << 2) >> 2])));
    R = ba(g[k >> 2]);
    g[P >> 2] = ba(Q + ba(R * ba(g[f + (h + i << 2) >> 2])));
    h = h + 1 | 0;
   } while ((h | 0) != (a | 0));
  }
 }
 y = (c | 0) % 16 | 0;
 if ((y | 0) > 7) {
  h = y + -1 | 0;
  if ((a | 0) > 0) {
   w = y + -8 | 0;
   p = e + (w << 2) | 0;
   w = _(w, d) | 0;
   x = y + -7 | 0;
   q = e + (x << 2) | 0;
   x = _(x, d) | 0;
   r = y + -6 | 0;
   j = e + (r << 2) | 0;
   r = _(r, d) | 0;
   s = y + -5 | 0;
   k = e + (s << 2) | 0;
   s = _(s, d) | 0;
   t = y + -4 | 0;
   l = e + (t << 2) | 0;
   t = _(t, d) | 0;
   u = y + -3 | 0;
   m = e + (u << 2) | 0;
   u = _(u, d) | 0;
   v = y + -2 | 0;
   n = e + (v << 2) | 0;
   v = _(v, d) | 0;
   o = e + (h << 2) | 0;
   i = _(h, d) | 0;
   h = 0;
   do {
    P = b + (h << 2) | 0;
    R = ba(g[P >> 2]);
    Q = ba(g[p >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + w << 2) >> 2])));
    R = ba(g[q >> 2]);
    R = ba(Q + ba(R * ba(g[f + (h + x << 2) >> 2])));
    Q = ba(g[j >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + r << 2) >> 2])));
    R = ba(g[k >> 2]);
    R = ba(Q + ba(R * ba(g[f + (h + s << 2) >> 2])));
    Q = ba(g[l >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + t << 2) >> 2])));
    R = ba(g[m >> 2]);
    R = ba(Q + ba(R * ba(g[f + (h + u << 2) >> 2])));
    Q = ba(g[n >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (h + v << 2) >> 2])));
    R = ba(g[o >> 2]);
    g[P >> 2] = ba(Q + ba(R * ba(g[f + (h + i << 2) >> 2])));
    h = h + 1 | 0;
   } while ((h | 0) != (a | 0));
  }
 }
 h = y + 15 | 0;
 if ((h | 0) >= (c | 0)) return;
 P = (a | 0) > 0;
 do {
  if (P) {
   z = h + -15 | 0;
   i = e + (z << 2) | 0;
   z = _(z, d) | 0;
   A = h + -14 | 0;
   j = e + (A << 2) | 0;
   A = _(A, d) | 0;
   B = h + -13 | 0;
   k = e + (B << 2) | 0;
   B = _(B, d) | 0;
   C = h + -12 | 0;
   l = e + (C << 2) | 0;
   C = _(C, d) | 0;
   D = h + -11 | 0;
   m = e + (D << 2) | 0;
   D = _(D, d) | 0;
   E = h + -10 | 0;
   n = e + (E << 2) | 0;
   E = _(E, d) | 0;
   F = h + -9 | 0;
   o = e + (F << 2) | 0;
   F = _(F, d) | 0;
   G = h + -8 | 0;
   p = e + (G << 2) | 0;
   G = _(G, d) | 0;
   H = h + -7 | 0;
   q = e + (H << 2) | 0;
   H = _(H, d) | 0;
   I = h + -6 | 0;
   r = e + (I << 2) | 0;
   I = _(I, d) | 0;
   J = h + -5 | 0;
   s = e + (J << 2) | 0;
   J = _(J, d) | 0;
   K = h + -4 | 0;
   t = e + (K << 2) | 0;
   K = _(K, d) | 0;
   L = h + -3 | 0;
   u = e + (L << 2) | 0;
   L = _(L, d) | 0;
   M = h + -2 | 0;
   v = e + (M << 2) | 0;
   M = _(M, d) | 0;
   N = h + -1 | 0;
   w = e + (N << 2) | 0;
   N = _(N, d) | 0;
   x = e + (h << 2) | 0;
   O = _(h, d) | 0;
   y = 0;
   do {
    S = b + (y << 2) | 0;
    R = ba(g[S >> 2]);
    Q = ba(g[i >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + z << 2) >> 2])));
    R = ba(g[j >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + A << 2) >> 2])));
    Q = ba(g[k >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + B << 2) >> 2])));
    R = ba(g[l >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + C << 2) >> 2])));
    Q = ba(g[m >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + D << 2) >> 2])));
    R = ba(g[n >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + E << 2) >> 2])));
    Q = ba(g[o >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + F << 2) >> 2])));
    R = ba(g[p >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + G << 2) >> 2])));
    Q = ba(g[q >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + H << 2) >> 2])));
    R = ba(g[r >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + I << 2) >> 2])));
    Q = ba(g[s >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + J << 2) >> 2])));
    R = ba(g[t >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + K << 2) >> 2])));
    Q = ba(g[u >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + L << 2) >> 2])));
    R = ba(g[v >> 2]);
    R = ba(Q + ba(R * ba(g[f + (y + M << 2) >> 2])));
    Q = ba(g[w >> 2]);
    Q = ba(R + ba(Q * ba(g[f + (y + N << 2) >> 2])));
    R = ba(g[x >> 2]);
    g[S >> 2] = ba(Q + ba(R * ba(g[f + (y + O << 2) >> 2])));
    y = y + 1 | 0;
   } while ((y | 0) != (a | 0));
  }
  h = h + 16 | 0;
 } while ((h | 0) < (c | 0));
 return;
}

function Ha(a, b, d, e, f, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0, j = sa, k = 0, l = 0, m = 0, n = 0, o = sa, p = 0, q = 0, r = 0, s = 0, t = sa;
 s = d + -1 | 0;
 if (!h) {
  if ((d | 0) > 1) {
   n = 0;
   do {
    r = c[e + (n << 2) >> 2] | 0;
    h = f + (r << 2) | 0;
    j = ba(g[h >> 2]);
    if ((r | 0) != (n | 0)) {
     r = f + (n << 2) | 0;
     c[h >> 2] = c[r >> 2];
     g[r >> 2] = j;
    }
    k = n;
    n = n + 1 | 0;
    m = d - n | 0;
    k = a + (n + (_(k, b) | 0) << 2) | 0;
    l = f + (n << 2) | 0;
    do if (!((m | 0) < 1 | j == ba(0.0))) {
     h = (m | 0) % 4 | 0;
     if (!h) h = 0; else {
      if ((h | 0) > 0) {
       i = 0;
       do {
        r = l + (i << 2) | 0;
        o = ba(g[r >> 2]);
        g[r >> 2] = ba(o + ba(j * ba(g[k + (i << 2) >> 2])));
        i = i + 1 | 0;
       } while ((i | 0) != (h | 0));
      }
      if ((m | 0) < 4) break;
     }
     if ((h | 0) < (m | 0)) do {
      q = l + (h << 2) | 0;
      o = ba(g[q >> 2]);
      g[q >> 2] = ba(o + ba(j * ba(g[k + (h << 2) >> 2])));
      q = h + 1 | 0;
      r = l + (q << 2) | 0;
      o = ba(g[r >> 2]);
      g[r >> 2] = ba(o + ba(j * ba(g[k + (q << 2) >> 2])));
      r = h + 2 | 0;
      q = l + (r << 2) | 0;
      o = ba(g[q >> 2]);
      g[q >> 2] = ba(o + ba(j * ba(g[k + (r << 2) >> 2])));
      q = h + 3 | 0;
      r = l + (q << 2) | 0;
      o = ba(g[r >> 2]);
      g[r >> 2] = ba(o + ba(j * ba(g[k + (q << 2) >> 2])));
      h = h + 4 | 0;
     } while ((h | 0) < (m | 0));
    } while (0);
   } while ((n | 0) != (s | 0));
  }
  if ((d | 0) > 0) l = 0; else return;
  do {
   l = l + 1 | 0;
   m = d - l | 0;
   s = f + (m << 2) | 0;
   o = ba(g[s >> 2]);
   k = _(m, b) | 0;
   o = ba(o / ba(g[a + (k + m << 2) >> 2]));
   g[s >> 2] = o;
   j = ba(-o);
   k = a + (k << 2) | 0;
   do if (!((m | 0) < 1 | o == ba(-0.0))) {
    h = (m | 0) % 4 | 0;
    if (!h) h = 0; else {
     if ((h | 0) > 0) {
      i = 0;
      do {
       s = f + (i << 2) | 0;
       o = ba(g[s >> 2]);
       g[s >> 2] = ba(o + ba(ba(g[k + (i << 2) >> 2]) * j));
       i = i + 1 | 0;
      } while ((i | 0) != (h | 0));
     }
     if ((m | 0) < 4) break;
    }
    if ((h | 0) < (m | 0)) do {
     e = f + (h << 2) | 0;
     o = ba(g[e >> 2]);
     g[e >> 2] = ba(o + ba(ba(g[k + (h << 2) >> 2]) * j));
     e = h + 1 | 0;
     s = f + (e << 2) | 0;
     o = ba(g[s >> 2]);
     g[s >> 2] = ba(o + ba(ba(g[k + (e << 2) >> 2]) * j));
     s = h + 2 | 0;
     e = f + (s << 2) | 0;
     o = ba(g[e >> 2]);
     g[e >> 2] = ba(o + ba(ba(g[k + (s << 2) >> 2]) * j));
     e = h + 3 | 0;
     s = f + (e << 2) | 0;
     o = ba(g[s >> 2]);
     g[s >> 2] = ba(o + ba(ba(g[k + (e << 2) >> 2]) * j));
     h = h + 4 | 0;
    } while ((h | 0) < (m | 0));
   } while (0);
  } while ((l | 0) != (d | 0));
  return;
 } else {
  if ((d | 0) > 0) l = 0; else return;
  do {
   m = _(l, b) | 0;
   k = a + (m << 2) | 0;
   do if ((l | 0) < 1) j = ba(0.0); else {
    h = (l | 0) % 5 | 0;
    if (!h) {
     j = ba(0.0);
     h = 0;
    } else {
     if ((h | 0) > 0) {
      j = ba(0.0);
      i = 0;
      do {
       o = ba(g[k + (i << 2) >> 2]);
       j = ba(j + ba(o * ba(g[f + (i << 2) >> 2])));
       i = i + 1 | 0;
      } while ((i | 0) != (h | 0));
     } else j = ba(0.0);
     if ((l | 0) < 5) break;
    }
    if ((h | 0) < (l | 0)) do {
     o = ba(g[k + (h << 2) >> 2]);
     j = ba(j + ba(o * ba(g[f + (h << 2) >> 2])));
     q = h + 1 | 0;
     o = ba(g[k + (q << 2) >> 2]);
     o = ba(j + ba(o * ba(g[f + (q << 2) >> 2])));
     q = h + 2 | 0;
     j = ba(g[k + (q << 2) >> 2]);
     j = ba(o + ba(j * ba(g[f + (q << 2) >> 2])));
     q = h + 3 | 0;
     o = ba(g[k + (q << 2) >> 2]);
     o = ba(j + ba(o * ba(g[f + (q << 2) >> 2])));
     q = h + 4 | 0;
     j = ba(g[k + (q << 2) >> 2]);
     j = ba(o + ba(j * ba(g[f + (q << 2) >> 2])));
     h = h + 5 | 0;
    } while ((h | 0) < (l | 0));
   } while (0);
   q = f + (l << 2) | 0;
   o = ba(ba(g[q >> 2]) - j);
   g[q >> 2] = ba(o / ba(g[a + (m + l << 2) >> 2]));
   l = l + 1 | 0;
  } while ((l | 0) != (d | 0));
  if ((d | 0) > 1 & (s | 0) > 1) p = 1; else return;
  do {
   m = p;
   p = p + 1 | 0;
   q = d - p | 0;
   n = f + (q << 2) | 0;
   o = ba(g[n >> 2]);
   l = q + 1 | 0;
   k = a + (l + (_(q, b) | 0) << 2) | 0;
   l = f + (l << 2) | 0;
   h = (m | 0) % 5 | 0;
   if (!h) {
    j = ba(0.0);
    h = 0;
    r = 36;
   } else {
    if ((h | 0) > 0) {
     j = ba(0.0);
     i = 0;
     do {
      t = ba(g[k + (i << 2) >> 2]);
      j = ba(j + ba(t * ba(g[l + (i << 2) >> 2])));
      i = i + 1 | 0;
     } while ((i | 0) != (h | 0));
    } else j = ba(0.0);
    if ((m | 0) >= 5) r = 36;
   }
   if ((r | 0) == 36) {
    r = 0;
    if ((h | 0) < (m | 0)) do {
     t = ba(g[k + (h << 2) >> 2]);
     j = ba(j + ba(t * ba(g[l + (h << 2) >> 2])));
     i = h + 1 | 0;
     t = ba(g[k + (i << 2) >> 2]);
     t = ba(j + ba(t * ba(g[l + (i << 2) >> 2])));
     i = h + 2 | 0;
     j = ba(g[k + (i << 2) >> 2]);
     j = ba(t + ba(j * ba(g[l + (i << 2) >> 2])));
     i = h + 3 | 0;
     t = ba(g[k + (i << 2) >> 2]);
     t = ba(j + ba(t * ba(g[l + (i << 2) >> 2])));
     i = h + 4 | 0;
     j = ba(g[k + (i << 2) >> 2]);
     j = ba(t + ba(j * ba(g[l + (i << 2) >> 2])));
     h = h + 5 | 0;
    } while ((h | 0) < (m | 0));
   }
   j = ba(o + j);
   g[n >> 2] = j;
   h = c[e + (q << 2) >> 2] | 0;
   if ((h | 0) != (q | 0)) {
    m = f + (h << 2) | 0;
    q = c[m >> 2] | 0;
    g[m >> 2] = j;
    c[n >> 2] = q;
   }
  } while ((p | 0) != (s | 0));
  return;
 }
}

function Ga(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = sa, i = 0, j = 0, k = sa, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 c[f >> 2] = 0;
 w = d + -1 | 0;
 if ((d | 0) > 1) {
  v = 0;
  do {
   u = v;
   v = v + 1 | 0;
   m = d - u | 0;
   n = _(u, b) | 0;
   p = n + u | 0;
   o = a + (p << 2) | 0;
   if ((m | 0) < 1) j = -1; else if ((m | 0) == 1) j = 0; else {
    h = ba(N(ba(g[o >> 2])));
    l = 1;
    j = 0;
    while (1) {
     k = ba(N(ba(g[o + (l << 2) >> 2])));
     i = k > h;
     j = i ? l : j;
     l = l + 1 | 0;
     if ((l | 0) == (m | 0)) break; else h = i ? k : h;
    }
   }
   t = j + u | 0;
   c[e + (u << 2) >> 2] = t;
   i = a + (t + n << 2) | 0;
   h = ba(g[i >> 2]);
   if (h != ba(0.0)) {
    l = (j | 0) != 0;
    if (l) {
     c[i >> 2] = c[o >> 2];
     g[o >> 2] = h;
    } else h = ba(g[o >> 2]);
    h = ba(ba(-1.0) / h);
    s = d - v | 0;
    q = a + (p + 1 << 2) | 0;
    r = (s | 0) < 1;
    do if (!r) {
     i = (s | 0) % 5 | 0;
     if (!i) i = 0; else {
      if ((i | 0) > 0) {
       j = 0;
       do {
        p = q + (j << 2) | 0;
        g[p >> 2] = ba(h * ba(g[p >> 2]));
        j = j + 1 | 0;
       } while ((j | 0) != (i | 0));
      }
      if ((s | 0) < 5) break;
     }
     if ((i | 0) < (s | 0)) do {
      p = q + (i << 2) | 0;
      g[p >> 2] = ba(h * ba(g[p >> 2]));
      p = q + (i + 1 << 2) | 0;
      g[p >> 2] = ba(h * ba(g[p >> 2]));
      p = q + (i + 2 << 2) | 0;
      g[p >> 2] = ba(h * ba(g[p >> 2]));
      p = q + (i + 3 << 2) | 0;
      g[p >> 2] = ba(h * ba(g[p >> 2]));
      p = q + (i + 4 << 2) | 0;
      g[p >> 2] = ba(h * ba(g[p >> 2]));
      i = i + 5 | 0;
     } while ((i | 0) < (s | 0));
    } while (0);
    if ((v | 0) < (d | 0)) {
     p = (s | 0) % 4 | 0;
     m = (p | 0) == 0;
     n = (p | 0) > 0;
     o = (s | 0) < 4;
     if (l) {
      l = v;
      do {
       j = _(l, b) | 0;
       x = a + (j + t << 2) | 0;
       h = ba(g[x >> 2]);
       i = a + (j + u << 2) | 0;
       c[x >> 2] = c[i >> 2];
       g[i >> 2] = h;
       j = a + (v + j << 2) | 0;
       do if (!(r | h == ba(0.0))) {
        if (m) i = 0; else {
         if (n) {
          i = 0;
          do {
           x = j + (i << 2) | 0;
           k = ba(g[x >> 2]);
           g[x >> 2] = ba(k + ba(h * ba(g[q + (i << 2) >> 2])));
           i = i + 1 | 0;
          } while ((i | 0) != (p | 0));
         }
         if (o) break; else i = p;
        }
        if ((i | 0) < (s | 0)) do {
         y = j + (i << 2) | 0;
         k = ba(g[y >> 2]);
         g[y >> 2] = ba(k + ba(h * ba(g[q + (i << 2) >> 2])));
         y = i + 1 | 0;
         x = j + (y << 2) | 0;
         k = ba(g[x >> 2]);
         g[x >> 2] = ba(k + ba(h * ba(g[q + (y << 2) >> 2])));
         x = i + 2 | 0;
         y = j + (x << 2) | 0;
         k = ba(g[y >> 2]);
         g[y >> 2] = ba(k + ba(h * ba(g[q + (x << 2) >> 2])));
         y = i + 3 | 0;
         x = j + (y << 2) | 0;
         k = ba(g[x >> 2]);
         g[x >> 2] = ba(k + ba(h * ba(g[q + (y << 2) >> 2])));
         i = i + 4 | 0;
        } while ((i | 0) < (s | 0));
       } while (0);
       l = l + 1 | 0;
      } while ((l | 0) != (d | 0));
     } else {
      l = v;
      do {
       j = _(l, b) | 0;
       h = ba(g[a + (j + t << 2) >> 2]);
       j = a + (v + j << 2) | 0;
       do if (!(r | h == ba(0.0))) {
        if (m) i = 0; else {
         if (n) {
          i = 0;
          do {
           y = j + (i << 2) | 0;
           k = ba(g[y >> 2]);
           g[y >> 2] = ba(k + ba(h * ba(g[q + (i << 2) >> 2])));
           i = i + 1 | 0;
          } while ((i | 0) != (p | 0));
         }
         if (o) break; else i = p;
        }
        if ((i | 0) < (s | 0)) do {
         x = j + (i << 2) | 0;
         k = ba(g[x >> 2]);
         g[x >> 2] = ba(k + ba(h * ba(g[q + (i << 2) >> 2])));
         x = i + 1 | 0;
         y = j + (x << 2) | 0;
         k = ba(g[y >> 2]);
         g[y >> 2] = ba(k + ba(h * ba(g[q + (x << 2) >> 2])));
         y = i + 2 | 0;
         x = j + (y << 2) | 0;
         k = ba(g[x >> 2]);
         g[x >> 2] = ba(k + ba(h * ba(g[q + (y << 2) >> 2])));
         x = i + 3 | 0;
         y = j + (x << 2) | 0;
         k = ba(g[y >> 2]);
         g[y >> 2] = ba(k + ba(h * ba(g[q + (x << 2) >> 2])));
         i = i + 4 | 0;
        } while ((i | 0) < (s | 0));
       } while (0);
       l = l + 1 | 0;
      } while ((l | 0) != (d | 0));
     }
    }
   } else c[f >> 2] = u;
  } while ((v | 0) != (w | 0));
 }
 c[e + (w << 2) >> 2] = w;
 if (!(ba(g[a + ((_(w, b) | 0) + w << 2) >> 2]) == ba(0.0))) return;
 c[f >> 2] = w;
 return;
}

function Qb(a, b, d, e, f) {
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
   f = k >>> ((Jb(i | 0) | 0) >>> 0);
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
   p = Jb(h | 0) | 0;
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
  k = Cb(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Bb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Bb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function Za(a, b, d) {
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

function Oa(a, b, d) {
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
  if (!(c[82038] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Ka(qa(146, n | 0) | 0) | 0;
  } else {
   ja(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Ka(qa(146, m | 0) | 0) | 0;
   ha(0);
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

function Va(b, d, e) {
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
 if ((Wa(0, d, n, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) o = eb(b) | 0; else o = 0;
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
   f = Wa(b, d, n, q, r) | 0;
   if (e) {
    ua[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
    f = (c[l >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = e;
    c[h >> 2] = 0;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[l >> 2] = 0;
   }
  } else f = Wa(b, d, n, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | m;
  if (o | 0) Ma(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function ab(b, d, e) {
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

function Xa(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = e + 16 | 0;
 f = c[g >> 2] | 0;
 if (!f) if (!(Ya(e) | 0)) {
  f = c[g >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  g = c[i >> 2] | 0;
  h = g;
  if ((f - g | 0) >>> 0 < d >>> 0) {
   f = ua[c[e + 36 >> 2] & 7](e, b, d) | 0;
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
   if ((ua[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   h = c[i >> 2] | 0;
   e = f;
   g = d - f | 0;
   f = b + f | 0;
  } else {
   e = 0;
   g = d;
   f = b;
  } while (0);
  Gb(h | 0, f | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
  f = e + g | 0;
 } while (0);
 return f | 0;
}

function kb(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) j = 3; else if ((c[b + 108 >> 2] | 0) < (e | 0)) j = 3; else j = 4;
 if ((j | 0) == 3) {
  e = lb(b) | 0;
  if ((e | 0) < 0) j = 4; else {
   f = c[f >> 2] | 0;
   i = c[b + 8 >> 2] | 0;
   if (!f) {
    f = i;
    j = 9;
   } else {
    h = c[b + 4 >> 2] | 0;
    g = f - (c[b + 108 >> 2] | 0) | 0;
    f = i;
    if ((i - h | 0) < (g | 0)) j = 9; else c[b + 100 >> 2] = h + (g + -1);
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = i;
   g = b + 4 | 0;
   if (!f) f = c[g >> 2] | 0; else {
    i = c[g >> 2] | 0;
    b = b + 108 | 0;
    c[b >> 2] = f + 1 - i + (c[b >> 2] | 0);
    f = i;
   }
   f = f + -1 | 0;
   if ((d[f >> 0] | 0 | 0) != (e | 0)) a[f >> 0] = e;
  }
 }
 if ((j | 0) == 4) {
  c[b + 100 >> 2] = 0;
  e = -1;
 }
 return e | 0;
}

function Ta(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 128 | 0;
 g = n + 112 | 0;
 m = n;
 h = m;
 j = 1140;
 k = h + 112 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  d = 1;
  l = 4;
 } else {
  c[(La() | 0) >> 2] = 75;
  g = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  h = m + 20 | 0;
  c[h >> 2] = g;
  c[m + 44 >> 2] = g;
  g = g + l | 0;
  d = m + 16 | 0;
  c[d >> 2] = g;
  c[m + 28 >> 2] = g;
  g = Va(m, e, f) | 0;
  if (l) {
   e = c[h >> 2] | 0;
   a[e + (((e | 0) == (c[d >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return g | 0;
}

function db(b, d, e) {
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
   c[(La() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function sb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!(eb(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = qb(d, b) | 0;
  Ma(d);
 }
 do if ((g | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0)) {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
    break;
   }
  }
  e = qb(d, b) | 0;
 } while (0);
 return e | 0;
}

function bb(a, b, d, e, f) {
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
  Db(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Xa(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Xa(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function qb(b, e) {
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
 if (!f) if (!(Ya(b) | 0)) {
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
  if ((ua[c[b + 36 >> 2] & 7](b, j, 1) | 0) == 1) f = d[j >> 0] | 0; else f = -1;
 } while (0);
 i = l;
 return f | 0;
}

function Mb(a, b, d, e) {
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
 a = Bb(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = C;
 Qb(a, b, Bb(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, C, j) | 0;
 e = Bb(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function Lb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = Bb(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return Bb((Qb(h, g, Bb(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, C, 0) | 0) ^ a | 0, C ^ b | 0, a | 0, b | 0) | 0;
}

function Gb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return na(b | 0, d | 0, e | 0) | 0;
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

function fb(b) {
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

function _a(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Pb(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = Ob(b | 0, c | 0, 10, 0) | 0;
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

function Ra(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Eb(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Ra(a * 18446744073709551616.0, b);
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

function mb(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) ua[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (!(d & 20)) {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 } else if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function $a(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[2533 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 2621;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 2621; else {
  b = 2621;
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

function Db(b, d, e) {
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

function hb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 112 | 0;
 h = k;
 c[h >> 2] = 0;
 j = h + 4 | 0;
 c[j >> 2] = a;
 c[h + 44 >> 2] = a;
 g = h + 8 | 0;
 c[g >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;
 c[h + 76 >> 2] = -1;
 ib(h, 0);
 e = jb(h, d, 1, e, f) | 0;
 if (b | 0) c[b >> 2] = a + ((c[j >> 2] | 0) + (c[h + 108 >> 2] | 0) - (c[g >> 2] | 0));
 i = k;
 return e | 0;
}

function vb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[256] | 0;
 if ((c[e + 76 >> 2] | 0) > -1) f = eb(e) | 0; else f = 0;
 do if ((wb(b, e) | 0) < 0) b = 1; else {
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
  b = (qb(e, 10) | 0) < 0;
 } while (0);
 if (f | 0) Ma(e);
 return b << 31 >> 31 | 0;
}

function Ya(b) {
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

function Na(a, b, d) {
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
 if ((Ka(pa(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Qa(b, d, e) {
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
  if (oa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Oa(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Kb(a, b) {
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

function rb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = _(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (eb(e) | 0) == 0;
  a = Xa(a, f, e) | 0;
  if (!g) Ma(e);
 } else a = Xa(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function Jb(b) {
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

function lb(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 if (!(c[a + 8 >> 2] | 0)) if (!(mb(a) | 0)) e = 3; else b = -1; else e = 3;
 if ((e | 0) == 3) if ((ua[c[a + 32 >> 2] & 7](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = f;
 return b | 0;
}

function ib(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 104 >> 2] = b;
 d = c[a + 8 >> 2] | 0;
 e = c[a + 4 >> 2] | 0;
 f = d - e | 0;
 c[a + 108 >> 2] = f;
 if ((b | 0) != 0 & (f | 0) > (b | 0)) c[a + 100 >> 2] = e + b; else c[a + 100 >> 2] = d;
 return;
}

function Ca(b) {
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

function Ua(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 Gb(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function Pb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Qb(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Nb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = Kb(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Ib(a, b, c) {
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

function Fb(a, b, c) {
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

function Eb(a, b, c) {
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

function Ab() {}
function Bb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function pb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Va(a, b, f) | 0;
 i = e;
 return d | 0;
}

function nb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = ob(a, b, f) | 0;
 i = e;
 return d | 0;
}

function tb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = Va(c[256] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function Ja(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Ka(ia(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Cb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Ba(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Sb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ua[a & 7](b | 0, c | 0, d | 0) | 0;
}

function Ka(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(La() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function xb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = hb(a, b, c, -2147483648, 0) | 0;
 return a | 0;
}

function Ob(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Qb(a, b, c, d, 0) | 0;
}

function La() {
 var a = 0;
 if (!0) a = 328196; else a = c[(Hb() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function cb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = db(a, b, 0) | 0;
 return a | 0;
}
function wa(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function ob(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Ta(a, 2147483647, b, c) | 0;
}

function wb(a, b) {
 a = a | 0;
 b = b | 0;
 return (rb(a, fb(a) | 0, 1, b) | 0) + -1 | 0;
}

function gb(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Vb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function Aa(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Rb(a, b) {
 a = a | 0;
 b = b | 0;
 return ta[a & 1](b | 0) | 0;
}

function Pa(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Ma(a);
 return;
}

function Tb(a, b) {
 a = a | 0;
 b = b | 0;
 va[a & 1](b | 0);
}

function Sa(a, b) {
 a = +a;
 b = b | 0;
 return +(+Ra(a, b));
}

function za(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function ub(a) {
 a = a | 0;
 return sb(a, c[256] | 0) | 0;
}

function Ub(a) {
 a = a | 0;
 ca(0);
 return 0;
}

function eb(a) {
 a = a | 0;
 return 0;
}

function Ma(a) {
 a = a | 0;
 return;
}

function ya(a) {
 a = a | 0;
 i = a;
}

function Wb(a) {
 a = a | 0;
 ca(2);
}

function Da(a) {
 a = a | 0;
 C = a;
}

function xa() {
 return i | 0;
}

function Ea() {
 return C | 0;
}

function Hb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var ta = [ Ub, Ja ];
 var ua = [ Vb, Qa, Na, Ua, Oa, Vb, Vb, Vb ];
 var va = [ Wb, Pa ];
 return {
  _i64Subtract: Bb,
  _free: zb,
  _main: Fa,
  _i64Add: Cb,
  _pthread_self: Hb,
  _memset: Db,
  _malloc: yb,
  _memcpy: Gb,
  _bitshift64Lshr: Eb,
  ___errno_location: La,
  _bitshift64Shl: Fb,
  runPostSets: Ab,
  stackAlloc: wa,
  stackSave: xa,
  stackRestore: ya,
  establishStackSpace: za,
  setThrew: Aa,
  setTempRet0: Da,
  getTempRet0: Ea,
  dynCall_ii: Rb,
  dynCall_iiii: Sb,
  dynCall_vi: Tb
 };
})


;