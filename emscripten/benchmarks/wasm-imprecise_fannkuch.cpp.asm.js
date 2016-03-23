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
 var ma = env._emscripten_memcpy_big;
 var na = env.___syscall54;
 var oa = env.___syscall140;
 var pa = env.___syscall146;
 var qa = ba(0);
 const ra = ba(0);
 
// EMSCRIPTEN_START_FUNCS

function eb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[913] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   f = (b & 1 ^ 1) + a | 0;
   g = 3692 + (f << 1 << 2) | 0;
   b = g + 8 | 0;
   d = c[b >> 2] | 0;
   h = d + 8 | 0;
   e = c[h >> 2] | 0;
   do if ((g | 0) == (e | 0)) c[913] = k & ~(1 << f); else {
    if (e >>> 0 < (c[917] | 0) >>> 0) ka();
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
  h = c[915] | 0;
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
    f = 3692 + (e << 1 << 2) | 0;
    d = f + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    b = c[j >> 2] | 0;
    do if ((f | 0) == (b | 0)) {
     c[913] = k & ~(1 << e);
     l = h;
    } else {
     if (b >>> 0 < (c[917] | 0) >>> 0) ka();
     a = b + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = f;
      c[d >> 2] = b;
      l = c[915] | 0;
      break;
     } else ka();
    } while (0);
    h = (e << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    f = g + q | 0;
    c[f + 4 >> 2] = h | 1;
    c[f + h >> 2] = h;
    if (l | 0) {
     e = c[918] | 0;
     b = l >>> 3;
     d = 3692 + (b << 1 << 2) | 0;
     a = c[913] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[913] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = e;
     c[n + 12 >> 2] = e;
     c[e + 8 >> 2] = n;
     c[e + 12 >> 2] = d;
    }
    c[915] = h;
    c[918] = f;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[914] | 0;
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
    e = c[3956 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[917] | 0;
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
     b = 3956 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[914] = c[914] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[917] | 0) >>> 0) ka();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[917] | 0;
     if (o >>> 0 < b >>> 0) ka();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
     a = c[915] | 0;
     if (a | 0) {
      f = c[918] | 0;
      b = a >>> 3;
      e = 3692 + (b << 1 << 2) | 0;
      a = c[913] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[913] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[915] = d;
     c[918] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[914] | 0;
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
   d = c[3956 + (j << 2) >> 2] | 0;
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
     a = c[3956 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (h >>> 0 < ((c[915] | 0) - q | 0) >>> 0) {
    f = c[917] | 0;
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
     b = 3956 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[914] = c[914] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[917] | 0) >>> 0) ka();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[917] | 0;
     if (t >>> 0 < b >>> 0) ka();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
      d = 3692 + (a << 1 << 2) | 0;
      b = c[913] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[913] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
     f = 3956 + (b << 2) | 0;
     c[j + 28 >> 2] = b;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[914] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[914] = a | d;
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
     if ((w | 0) == 145) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
      c[a >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[917] | 0;
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
 d = c[915] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[918] | 0;
  if (b >>> 0 > 15) {
   C = a + q | 0;
   c[918] = C;
   c[915] = b;
   c[C + 4 >> 2] = b | 1;
   c[C + b >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[915] = 0;
   c[918] = 0;
   c[a + 4 >> 2] = d | 3;
   C = a + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = a + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[916] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[916] = A;
  C = c[919] | 0;
  B = C + q | 0;
  c[919] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[1031] | 0)) {
  c[1033] = 4096;
  c[1032] = 4096;
  c[1034] = -1;
  c[1035] = -1;
  c[1036] = 0;
  c[1024] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[1031] = v;
 }
 h = q + 48 | 0;
 g = c[1033] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[1023] | 0;
 if (a | 0) {
  u = c[1021] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[1024] & 4)) {
  a = c[919] | 0;
  c : do if (!a) w = 171; else {
   e = 4100;
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
   a = f - (c[916] | 0) & g;
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
    b = c[1032] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[1021] | 0;
    e = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     d = c[1023] | 0;
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
    b = c[1033] | 0;
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
  c[1024] = c[1024] | 4;
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
  a = (c[1021] | 0) + h | 0;
  c[1021] = a;
  if (a >>> 0 > (c[1022] | 0) >>> 0) c[1022] = a;
  k = c[919] | 0;
  do if (!k) {
   C = c[917] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[917] = f;
   c[1025] = f;
   c[1026] = h;
   c[1028] = 0;
   c[922] = c[1031];
   c[921] = -1;
   a = 0;
   do {
    C = 3692 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[919] = B;
   c[916] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[920] = c[1035];
  } else {
   b = 4100;
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
    C = h - C + (c[916] | 0) | 0;
    c[919] = B;
    c[916] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[920] = c[1035];
    break;
   }
   a = c[917] | 0;
   if (f >>> 0 < a >>> 0) {
    c[917] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 4100;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 4100;
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
     C = (c[916] | 0) + g | 0;
     c[916] = C;
     c[919] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[918] | 0)) {
      C = (c[915] | 0) + g | 0;
      c[915] = C;
      c[918] = l;
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
       b = 3692 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) ka();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ka();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[913] = c[913] & ~(1 << f);
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
       d = 3956 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[914] = c[914] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[917] | 0) >>> 0) ka();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[917] | 0;
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
       if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
      d = 3692 + (a << 1 << 2) | 0;
      b = c[913] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[913] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[917] | 0) >>> 0) {
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
     f = 3956 + (b << 2) | 0;
     c[l + 28 >> 2] = b;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[914] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[914] = a | d;
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
     if ((w | 0) == 276) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
      c[a >> 2] = l;
      c[l + 24 >> 2] = d;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[917] | 0;
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
   } else b = 4100;
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
   c[919] = C;
   c[916] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[920] = c[1035];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[1025];
   c[b + 4 >> 2] = c[1026];
   c[b + 8 >> 2] = c[1027];
   c[b + 12 >> 2] = c[1028];
   c[1025] = f;
   c[1026] = h;
   c[1028] = 0;
   c[1027] = b;
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
     d = 3692 + (a << 1 << 2) | 0;
     b = c[913] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[913] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
    f = 3956 + (d << 2) | 0;
    c[k + 28 >> 2] = d;
    c[k + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[914] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[914] = a | b;
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
    if ((w | 0) == 302) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
     c[a >> 2] = k;
     c[k + 24 >> 2] = d;
     c[k + 12 >> 2] = k;
     c[k + 8 >> 2] = k;
     break;
    } else if ((w | 0) == 305) {
     b = d + 8 | 0;
     a = c[b >> 2] | 0;
     C = c[917] | 0;
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
  a = c[916] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[916] = A;
   C = c[919] | 0;
   B = C + q | 0;
   c[919] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(Ia() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Ra(e, f, g, j, l) {
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
   c[(Ia() | 0) >> 2] = 75;
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
  if (ga) if (!(c[e >> 2] & 32)) Sa(z, y, e) | 0;
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
   o = a[1177 + (u * 58 | 0) + o >> 0] | 0;
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
   Ua(R, t, g);
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
      p = kb(p | 0, o | 0, 3) | 0;
      o = C;
     } while (!((p | 0) == 0 & (o | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     q = 1657;
     L = 77;
    } else {
     t = aa - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     q = 1657;
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
     f = hb(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = R;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     q = 1657;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     q = I & 1;
     p = q;
     q = (q | 0) == 0 ? 1657 : 1659;
     L = 76;
    } else {
     p = 1;
     q = 1658;
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
    q = 1657;
    L = 76;
    break;
   }
  case 99:
   {
    a[P >> 0] = c[R >> 2];
    f = P;
    u = 1;
    w = 0;
    v = 1657;
    o = N;
    break;
   }
  case 109:
   {
    o = Wa(c[(Ia() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[R >> 2] | 0;
    o = o | 0 ? o : 3559;
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
     Ya(e, 32, K, 0, I);
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
     H = 3566;
     r = -r;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 3567 : 3572;
    } else {
     G = 1;
     H = 3569;
    }
    h[k >> 3] = r;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +Pa(r, W) * 2.0;
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
      f = Va(f, ((f | 0) < 0) << 31 >> 31, S) | 0;
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
       a[o >> 0] = d[1641 + H >> 0] | t;
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
      Ya(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) Sa(y, w, e) | 0;
      Ya(e, 48, K, p, I ^ 65536);
      o = f - ca | 0;
      if (!(c[e >> 2] & 32)) Sa(V, o, e) | 0;
      f = $ - t | 0;
      Ya(e, 48, q - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Sa(v, f, e) | 0;
      Ya(e, 32, K, p, I ^ 8192);
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
         B = lb(c[q >> 2] | 0, 0, t | 0) | 0;
         B = ib(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = vb(B | 0, o | 0, 1e9, 0) | 0;
         c[q >> 2] = A;
         o = ub(B | 0, o | 0, 1e9, 0) | 0;
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
      q = Va(q, ((q | 0) < 0) << 31 >> 31, S) | 0;
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
     Ya(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) Sa(H, G, e) | 0;
     Ya(e, 48, K, w, I ^ 65536);
     do if (t) {
      q = D >>> 0 > F >>> 0 ? F : D;
      o = q;
      do {
       p = Va(c[o >> 2] | 0, 0, Q) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((p | 0) != (Q | 0)) break;
        a[Y >> 0] = 48;
        p = Y;
       } else {
        if (p >>> 0 <= V >>> 0) break;
        jb(V | 0, 48, p - ca | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > V >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Sa(p, ba - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Sa(3601, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < z >>> 0) {
       p = o;
       while (1) {
        o = Va(c[p >> 2] | 0, 0, Q) | 0;
        if (o >>> 0 > V >>> 0) {
         jb(V | 0, 48, o - ca | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        }
        if (!(c[e >> 2] & 32)) Sa(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < z >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      Ya(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? z : D + 4 | 0;
      if ((f | 0) > -1) {
       s = (o | 0) == 0;
       q = D;
       do {
        o = Va(c[q >> 2] | 0, 0, Q) | 0;
        if ((o | 0) == (Q | 0)) {
         a[Y >> 0] = 48;
         o = Y;
        }
        do if ((q | 0) == (D | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Sa(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         Sa(3601, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= V >>> 0) break;
         jb(V | 0, 48, o + M | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        } while (0);
        p = ba - o | 0;
        if (!(c[e >> 2] & 32)) Sa(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      Ya(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Sa(u, $ - u | 0, e) | 0;
     } while (0);
     Ya(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = r != r | 0.0 != 0.0;
     o = s ? 0 : G;
     q = o + 3 | 0;
     Ya(e, 32, K, q, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Sa(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Sa(s ? (t ? 3593 : 3597) : t ? 3585 : 3589, 3, e) | 0;
     Ya(e, 32, K, q, I ^ 8192);
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
    v = 1657;
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
    q = 1657;
    L = 77;
   } else {
    p = f;
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[1641 + (p & 15) >> 0] | q;
     p = kb(p | 0, o | 0, 4) | 0;
     o = C;
    } while (!((p | 0) == 0 & (o | 0) == 0));
    L = R;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     q = 1657;
     L = 77;
    } else {
     o = t;
     t = 2;
     q = 1657 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = Va(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Xa(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 1657;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    q = c[t >> 2] | 0;
    if (!q) break;
    o = Za(Z, q) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   Ya(e, 32, K, p, I);
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
     o = Za(Z, o) | 0;
     q = o + q | 0;
     if ((q | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) Sa(Z, o, e) | 0;
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
   Ya(e, 32, K, f, I ^ 8192);
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
  Ya(e, 32, o, q, p);
  if (!(c[e >> 2] & 32)) Sa(v, w, e) | 0;
  Ya(e, 48, o, q, p ^ 65536);
  Ya(e, 48, s, t, 0);
  if (!(c[e >> 2] & 32)) Sa(f, t, e) | 0;
  Ya(e, 32, o, q, p ^ 8192);
  z = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   Ua(j + (m << 3) | 0, n, g);
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

function fb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[917] | 0;
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
  if ((k | 0) == (c[918] | 0)) {
   b = n + 4 | 0;
   a = c[b >> 2] | 0;
   if ((a & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[915] = j;
   c[b >> 2] = a & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 3692 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[913] = c[913] & ~(1 << e);
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
   b = 3956 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[914] = c[914] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[917] | 0) >>> 0) ka();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[917] | 0;
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
   } else if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
  if ((n | 0) == (c[919] | 0)) {
   p = (c[916] | 0) + g | 0;
   c[916] = p;
   c[919] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[918] | 0)) return;
   c[918] = 0;
   c[915] = 0;
   return;
  }
  if ((n | 0) == (c[918] | 0)) {
   p = (c[915] | 0) + g | 0;
   c[915] = p;
   c[918] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 3692 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[917] | 0) >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[913] = c[913] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[917] | 0) >>> 0) ka();
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
    if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[917] | 0) >>> 0) ka();
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
    b = 3956 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[914] = c[914] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[917] | 0) >>> 0) ka();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[f + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[917] | 0;
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
    if (a | 0) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[918] | 0)) {
   c[915] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 3692 + (a << 1 << 2) | 0;
  b = c[913] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[913] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[917] | 0) >>> 0) ka(); else {
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
 f = 3956 + (b << 2) | 0;
 c[q + 28 >> 2] = b;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[914] | 0;
 d = 1 << b;
 do if (!(a & d)) {
  c[914] = a | d;
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
  if ((b | 0) == 127) if (a >>> 0 < (c[917] | 0) >>> 0) ka(); else {
   c[a >> 2] = q;
   c[q + 24 >> 2] = d;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((b | 0) == 130) {
   b = d + 8 | 0;
   a = c[b >> 2] | 0;
   p = c[917] | 0;
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
 q = (c[921] | 0) + -1 | 0;
 c[921] = q;
 if (!q) a = 4108; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[921] = -1;
 return;
}

function Ea(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 b = c[a + 4 >> 2] | 0;
 l = b << 2;
 n = eb(l) | 0;
 o = eb(l) | 0;
 p = eb(l) | 0;
 e = (b | 0) > 0;
 if (e) {
  d = 0;
  do {
   c[n + (d << 2) >> 2] = d;
   d = d + 1 | 0;
  } while ((d | 0) != (b | 0));
  k = b + -1 | 0;
  i = c[a >> 2] | 0;
  c[n + (i << 2) >> 2] = k;
  j = n + (k << 2) | 0;
  c[j >> 2] = i;
  if (e) {
   d = 0;
   a = b;
   a : while (1) {
    if ((a | 0) > 1) {
     do {
      i = a;
      a = a + -1 | 0;
      c[p + (a << 2) >> 2] = i;
     } while ((a | 0) > 1);
     a = 1;
    }
    i = c[n >> 2] | 0;
    if (i) if ((c[j >> 2] | 0) != (k | 0)) {
     mb(o | 0, n | 0, l | 0) | 0;
     f = 0;
     h = c[o >> 2] | 0;
     while (1) {
      e = h + -1 | 0;
      if ((e | 0) > 1) {
       g = 1;
       do {
        t = o + (g << 2) | 0;
        s = c[t >> 2] | 0;
        r = o + (e << 2) | 0;
        c[t >> 2] = c[r >> 2];
        c[r >> 2] = s;
        g = g + 1 | 0;
        e = e + -1 | 0;
       } while ((g | 0) < (e | 0));
      }
      e = f + 1 | 0;
      t = o + (h << 2) | 0;
      s = h;
      h = c[t >> 2] | 0;
      c[t >> 2] = s;
      if (!h) break; else f = e;
     }
     d = (d | 0) > (f | 0) ? d : e;
    }
    if ((a | 0) < (k | 0)) f = i; else {
     a = 31;
     break;
    }
    while (1) {
     if ((a | 0) > 0) {
      e = 0;
      do {
       t = e;
       e = e + 1 | 0;
       c[n + (t << 2) >> 2] = c[n + (e << 2) >> 2];
      } while ((e | 0) < (a | 0));
      e = a;
     } else e = 0;
     c[n + (e << 2) >> 2] = f;
     s = p + (a << 2) | 0;
     t = c[s >> 2] | 0;
     c[s >> 2] = t + -1;
     if ((t | 0) > 1) continue a;
     a = a + 1 | 0;
     if ((a | 0) >= (k | 0)) {
      a = 31;
      break a;
     }
     f = c[n >> 2] | 0;
    }
   }
   if ((a | 0) == 31) {
    fb(n);
    fb(o);
    fb(p);
    return d | 0;
   }
  } else {
   m = j;
   q = k;
  }
 } else {
  q = b + -1 | 0;
  t = c[a >> 2] | 0;
  c[n + (t << 2) >> 2] = q;
  m = n + (q << 2) | 0;
  c[m >> 2] = t;
 }
 d = 0;
 b : while (1) {
  if ((b | 0) > 1) {
   do {
    t = b;
    b = b + -1 | 0;
    c[p + (b << 2) >> 2] = t;
   } while ((b | 0) > 1);
   b = 1;
  }
  h = c[n >> 2] | 0;
  if (h) if ((c[m >> 2] | 0) != (q | 0)) {
   e = 0;
   g = c[o >> 2] | 0;
   while (1) {
    a = g + -1 | 0;
    if ((a | 0) > 1) {
     f = 1;
     do {
      r = o + (f << 2) | 0;
      s = c[r >> 2] | 0;
      t = o + (a << 2) | 0;
      c[r >> 2] = c[t >> 2];
      c[t >> 2] = s;
      f = f + 1 | 0;
      a = a + -1 | 0;
     } while ((f | 0) < (a | 0));
    }
    a = e + 1 | 0;
    t = o + (g << 2) | 0;
    s = g;
    g = c[t >> 2] | 0;
    c[t >> 2] = s;
    if (!g) break; else e = a;
   }
   d = (d | 0) > (e | 0) ? d : a;
  }
  if ((b | 0) < (q | 0)) e = h; else {
   a = 31;
   break;
  }
  while (1) {
   if ((b | 0) > 0) {
    a = 0;
    do {
     t = a;
     a = a + 1 | 0;
     c[n + (t << 2) >> 2] = c[n + (a << 2) >> 2];
    } while ((a | 0) < (b | 0));
    a = b;
   } else a = 0;
   c[n + (a << 2) >> 2] = e;
   s = p + (b << 2) | 0;
   t = c[s >> 2] | 0;
   c[s >> 2] = t + -1;
   if ((t | 0) > 1) continue b;
   b = b + 1 | 0;
   if ((b | 0) >= (q | 0)) {
    a = 31;
    break b;
   }
   e = c[n >> 2] | 0;
  }
 }
 if ((a | 0) == 31) {
  fb(n);
  fb(o);
  fb(p);
  return d | 0;
 }
 return 0;
}

function wb(a, b, d, e, f) {
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
   f = k >>> ((pb(i | 0) | 0) >>> 0);
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
   p = pb(h | 0) | 0;
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
  k = ib(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   hb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = hb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function Fa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 32 | 0;
 n = o + 16 | 0;
 m = o + 8 | 0;
 e = o;
 a : do if ((b | 0) > 1) {
  b = a[c[d + 4 >> 2] >> 0] | 0;
  switch (b | 0) {
  case 49:
   {
    l = 9;
    break a;
   }
  case 51:
   {
    f = 4;
    break a;
   }
  case 50:
   {
    l = 10;
    break a;
   }
  case 52:
   {
    l = 11;
    break a;
   }
  case 53:
   {
    l = 12;
    break a;
   }
  case 48:
   {
    n = 0;
    i = o;
    return n | 0;
   }
  default:
   {
    c[e >> 2] = b + -48;
    cb(1140, e) | 0;
    n = -1;
    i = o;
    return n | 0;
   }
  }
 } else f = 4; while (0);
 if ((f | 0) == 4) l = 11;
 b = l + -1 | 0;
 d = 0;
 e = 0;
 while (1) {
  f = eb(12) | 0;
  c[f >> 2] = e;
  c[f + 4 >> 2] = l;
  c[f + 8 >> 2] = d;
  e = e + 1 | 0;
  if ((e | 0) == (b | 0)) {
   d = f;
   h = f;
   break;
  } else d = f;
 }
 k = l << 2;
 j = eb(k) | 0;
 k = eb(k) | 0;
 b = 0;
 do {
  c[j + (b << 2) >> 2] = b;
  b = b + 1 | 0;
 } while ((b | 0) != (l | 0));
 b = l;
 f = 30;
 b : do {
  e = 0;
  do {
   c[m >> 2] = (c[j + (e << 2) >> 2] | 0) + 1;
   cb(1174, m) | 0;
   e = e + 1 | 0;
  } while ((e | 0) != (l | 0));
  db(10) | 0;
  f = f + -1 | 0;
  if ((b | 0) > 1) {
   do {
    g = b;
    b = b + -1 | 0;
    c[k + (b << 2) >> 2] = g;
   } while ((b | 0) > 1);
   b = 1;
  } else if ((b | 0) == (l | 0)) break;
  while (1) {
   g = c[j >> 2] | 0;
   if ((b | 0) > 0) {
    e = 0;
    do {
     p = e;
     e = e + 1 | 0;
     c[j + (p << 2) >> 2] = c[j + (e << 2) >> 2];
    } while ((e | 0) < (b | 0));
    e = b;
   } else e = 0;
   c[j + (e << 2) >> 2] = g;
   g = k + (b << 2) | 0;
   p = c[g >> 2] | 0;
   c[g >> 2] = p + -1;
   if ((p | 0) > 1) break;
   b = b + 1 | 0;
   if ((b | 0) == (l | 0)) break b;
  }
 } while ((f | 0) != 0);
 fb(j);
 fb(k);
 if (!h) b = 0; else {
  b = 0;
  do {
   p = Ea(d) | 0;
   b = (b | 0) < (p | 0) ? p : b;
   p = d;
   d = c[d + 8 >> 2] | 0;
   fb(p);
  } while ((d | 0) != 0);
 }
 c[n >> 2] = l;
 c[n + 4 >> 2] = b;
 cb(1151, n) | 0;
 p = 0;
 i = o;
 return p | 0;
}

function Ua(a, b, d) {
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

function La(a, b, d) {
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
  if (!(c[901] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Ha(pa(146, n | 0) | 0) | 0;
  } else {
   ja(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Ha(pa(146, m | 0) | 0) | 0;
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

function Qa(b, d, e) {
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
 if ((Ra(0, d, n, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) o = $a(b) | 0; else o = 0;
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
   f = Ra(b, d, n, q, r) | 0;
   if (e) {
    ta[c[b + 36 >> 2] & 3](b, 0, 0) | 0;
    f = (c[l >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = e;
    c[h >> 2] = 0;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[l >> 2] = 0;
   }
  } else f = Ra(b, d, n, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | m;
  if (o | 0) Ja(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Xa(b, d, e) {
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

function Sa(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = e + 16 | 0;
 f = c[g >> 2] | 0;
 if (!f) if (!(Ta(e) | 0)) {
  f = c[g >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  g = c[i >> 2] | 0;
  h = g;
  if ((f - g | 0) >>> 0 < d >>> 0) {
   f = ta[c[e + 36 >> 2] & 3](e, b, d) | 0;
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
   if ((ta[c[e + 36 >> 2] & 3](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   h = c[i >> 2] | 0;
   e = f;
   g = d - f | 0;
   f = b + f | 0;
  } else {
   e = 0;
   g = d;
   f = b;
  } while (0);
  mb(h | 0, f | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
  f = e + g | 0;
 } while (0);
 return f | 0;
}

function _a(b, d, e) {
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
   c[(Ia() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function bb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!($a(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = ab(d, b) | 0;
  Ja(d);
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
  e = ab(d, b) | 0;
 } while (0);
 return e | 0;
}

function Ya(a, b, d, e, f) {
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
  jb(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Sa(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Sa(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function sb(a, b, d, e) {
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
 a = hb(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = C;
 wb(a, b, hb(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, C, j) | 0;
 e = hb(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function ab(b, e) {
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
 if (!f) if (!(Ta(b) | 0)) {
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
  if ((ta[c[b + 36 >> 2] & 3](b, j, 1) | 0) == 1) f = d[j >> 0] | 0; else f = -1;
 } while (0);
 i = l;
 return f | 0;
}

function rb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = hb(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return hb((wb(h, g, hb(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, C, 0) | 0) ^ a | 0, C ^ b | 0, a | 0, b | 0) | 0;
}

function mb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ma(b | 0, d | 0, e | 0) | 0;
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

function Va(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = vb(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = ub(b | 0, c | 0, 10, 0) | 0;
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

function Oa(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = kb(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Oa(a * 18446744073709551616.0, b);
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

function Wa(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[1667 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 1755;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 1755; else {
  b = 1755;
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

function jb(b, d, e) {
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

function Ta(b) {
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

function Ka(a, b, d) {
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
 if ((Ha(oa(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Na(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (na(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = La(b, d, e) | 0;
 i = g;
 return f | 0;
}

function qb(a, b) {
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

function pb(b) {
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

function Ba(b) {
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

function vb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 wb(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function tb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = qb(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function ob(a, b, c) {
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

function lb(a, b, c) {
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

function kb(a, b, c) {
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

function gb() {}
function hb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function cb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = Qa(c[256] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function Ga(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Ha(ia(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function ib(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Aa(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function yb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ta[a & 3](b | 0, c | 0, d | 0) | 0;
}

function Ha(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Ia() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function ub(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return wb(a, b, c, d, 0) | 0;
}

function Za(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = _a(a, b, 0) | 0;
 return a | 0;
}

function Ia() {
 var a = 0;
 if (!0) a = 3648; else a = c[(nb() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function va(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Bb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function za(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function xb(a, b) {
 a = a | 0;
 b = b | 0;
 return sa[a & 1](b | 0) | 0;
}

function Ma(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Ja(a);
 return;
}

function zb(a, b) {
 a = a | 0;
 b = b | 0;
 ua[a & 1](b | 0);
}

function Pa(a, b) {
 a = +a;
 b = b | 0;
 return +(+Oa(a, b));
}

function ya(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function db(a) {
 a = a | 0;
 return bb(a, c[256] | 0) | 0;
}

function Ab(a) {
 a = a | 0;
 ca(0);
 return 0;
}

function $a(a) {
 a = a | 0;
 return 0;
}

function Ja(a) {
 a = a | 0;
 return;
}

function xa(a) {
 a = a | 0;
 i = a;
}

function Cb(a) {
 a = a | 0;
 ca(2);
}

function Ca(a) {
 a = a | 0;
 C = a;
}

function wa() {
 return i | 0;
}

function Da() {
 return C | 0;
}

function nb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var sa = [ Ab, Ga ];
 var ta = [ Bb, Na, Ka, La ];
 var ua = [ Cb, Ma ];
 return {
  _i64Subtract: hb,
  _free: fb,
  _main: Fa,
  _i64Add: ib,
  _pthread_self: nb,
  _memset: jb,
  _malloc: eb,
  _memcpy: mb,
  _bitshift64Lshr: kb,
  ___errno_location: Ia,
  _bitshift64Shl: lb,
  runPostSets: gb,
  stackAlloc: va,
  stackSave: wa,
  stackRestore: xa,
  establishStackSpace: ya,
  setThrew: za,
  setTempRet0: Ca,
  getTempRet0: Da,
  dynCall_ii: xb,
  dynCall_iiii: yb,
  dynCall_vi: zb
 };
})


;