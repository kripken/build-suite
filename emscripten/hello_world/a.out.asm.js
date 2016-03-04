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
 var m = 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = global.NaN, r = global.Infinity;
 var s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0.0;
 var B = 0;
 var C = 0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = global.Math.floor;
 var M = global.Math.abs;
 var N = global.Math.sqrt;
 var O = global.Math.pow;
 var P = global.Math.cos;
 var Q = global.Math.sin;
 var R = global.Math.tan;
 var S = global.Math.acos;
 var T = global.Math.asin;
 var U = global.Math.atan;
 var V = global.Math.atan2;
 var W = global.Math.exp;
 var X = global.Math.log;
 var Y = global.Math.ceil;
 var Z = global.Math.imul;
 var _ = global.Math.min;
 var $ = global.Math.clz32;
 var aa = env.abort;
 var ba = env.assert;
 var ca = env.invoke_ii;
 var da = env.invoke_iiii;
 var ea = env.invoke_vi;
 var fa = env._pthread_cleanup_pop;
 var ga = env._pthread_self;
 var ha = env.___lock;
 var ia = env.___syscall6;
 var ja = env.___setErrNo;
 var ka = env._abort;
 var la = env._sbrk;
 var ma = env._time;
 var na = env._pthread_cleanup_push;
 var oa = env._emscripten_memcpy_big;
 var pa = env.___syscall54;
 var qa = env.___unlock;
 var ra = env.___syscall140;
 var sa = env._sysconf;
 var ta = env.___syscall146;
 var ua = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function _a(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  j = c[302] | 0;
  b = j >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 1248 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[302] = j & ~(1 << b); else {
    if (h >>> 0 < (c[306] | 0) >>> 0) ka();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else ka();
   } while (0);
   A = b << 3;
   c[f + 4 >> 2] = A | 3;
   A = f + A + 4 | 0;
   c[A >> 2] = c[A >> 2] | 1;
   A = g;
   return A | 0;
  }
  h = c[304] | 0;
  if (o >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    i = d >>> 12 & 16;
    d = d >>> i;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | i | g | e | b) + (d >>> b) | 0;
    d = 1248 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    i = g + 8 | 0;
    f = c[i >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[302] = j & ~(1 << b);
     k = h;
    } else {
     if (f >>> 0 < (c[306] | 0) >>> 0) ka();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      k = c[304] | 0;
      break;
     } else ka();
    } while (0);
    h = (b << 3) - o | 0;
    c[g + 4 >> 2] = o | 3;
    e = g + o | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (k | 0) {
     f = c[307] | 0;
     b = k >>> 3;
     d = 1248 + (b << 1 << 2) | 0;
     a = c[302] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[302] = a | b;
      l = d + 8 | 0;
      m = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
       l = a;
       m = b;
      }
     }
     c[l >> 2] = f;
     c[m + 12 >> 2] = f;
     c[f + 8 >> 2] = m;
     c[f + 12 >> 2] = d;
    }
    c[304] = h;
    c[307] = e;
    A = i;
    return A | 0;
   }
   a = c[303] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    z = d >>> 12 & 16;
    d = d >>> z;
    y = d >>> 5 & 8;
    d = d >>> y;
    A = d >>> 2 & 4;
    d = d >>> A;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[1512 + ((y | z | A | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - o | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       j = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - o | 0;
     A = b >>> 0 < d >>> 0;
     d = A ? b : d;
     b = a;
     e = A ? a : e;
    }
    g = c[306] | 0;
    if (j >>> 0 < g >>> 0) ka();
    i = j + o | 0;
    if (j >>> 0 >= i >>> 0) ka();
    h = c[j + 24 >> 2] | 0;
    e = c[j + 12 >> 2] | 0;
    do if ((e | 0) == (j | 0)) {
     b = j + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = j + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       n = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      f = c[e >> 2] | 0;
      if (f | 0) {
       a = f;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      f = c[e >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = e;
      }
     }
     if (b >>> 0 < g >>> 0) ka(); else {
      c[b >> 2] = 0;
      n = a;
      break;
     }
    } else {
     f = c[j + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) ka();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (j | 0)) ka();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (j | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      n = e;
      break;
     } else ka();
    } while (0);
    do if (h | 0) {
     a = c[j + 28 >> 2] | 0;
     b = 1512 + (a << 2) | 0;
     if ((j | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = n;
      if (!n) {
       c[303] = c[303] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[306] | 0) >>> 0) ka();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = n; else c[h + 20 >> 2] = n;
      if (!n) break;
     }
     b = c[306] | 0;
     if (n >>> 0 < b >>> 0) ka();
     c[n + 24 >> 2] = h;
     a = c[j + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[n + 16 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     } while (0);
     a = c[j + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) ka(); else {
      c[n + 20 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     A = d + o | 0;
     c[j + 4 >> 2] = A | 3;
     A = j + A + 4 | 0;
     c[A >> 2] = c[A >> 2] | 1;
    } else {
     c[j + 4 >> 2] = o | 3;
     c[i + 4 >> 2] = d | 1;
     c[i + d >> 2] = d;
     a = c[304] | 0;
     if (a | 0) {
      f = c[307] | 0;
      b = a >>> 3;
      e = 1248 + (b << 1 << 2) | 0;
      a = c[302] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[302] = a | b;
       p = e + 8 | 0;
       q = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
        p = a;
        q = b;
       }
      }
      c[p >> 2] = f;
      c[q + 12 >> 2] = f;
      c[f + 8 >> 2] = q;
      c[f + 12 >> 2] = e;
     }
     c[304] = d;
     c[307] = i;
    }
    A = j + 8 | 0;
    return A | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) o = -1; else {
  a = a + 11 | 0;
  o = a & -8;
  j = c[303] | 0;
  if (j) {
   d = 0 - o | 0;
   a = a >>> 8;
   if (!a) i = 0; else if (o >>> 0 > 16777215) i = 31; else {
    q = (a + 1048320 | 0) >>> 16 & 8;
    u = a << q;
    p = (u + 520192 | 0) >>> 16 & 4;
    u = u << p;
    i = (u + 245760 | 0) >>> 16 & 2;
    i = 14 - (p | q | i) + (u << i >>> 15) | 0;
    i = o >>> (i + 7 | 0) & 1 | i << 1;
   }
   b = c[1512 + (i << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    u = 86;
   } else {
    f = d;
    a = 0;
    g = o << ((i | 0) == 31 ? 0 : 25 - (i >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - o | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (o | 0)) {
      a = h;
      b = h;
      u = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      u = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((u | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << i;
     a = j & (a | 0 - a);
     if (!a) break;
     q = (a & 0 - a) + -1 | 0;
     m = q >>> 12 & 16;
     q = q >>> m;
     l = q >>> 5 & 8;
     q = q >>> l;
     n = q >>> 2 & 4;
     q = q >>> n;
     p = q >>> 1 & 2;
     q = q >>> p;
     a = q >>> 1 & 1;
     a = c[1512 + ((l | m | n | p | a) + (q >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = d;
     j = b;
    } else u = 90;
   }
   if ((u | 0) == 90) while (1) {
    u = 0;
    q = (c[a + 4 >> 2] & -8) - o | 0;
    e = q >>> 0 < d >>> 0;
    d = e ? q : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     u = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = d;
     j = b;
     break;
    } else u = 90;
   }
   if (j) if (h >>> 0 < ((c[304] | 0) - o | 0) >>> 0) {
    f = c[306] | 0;
    if (j >>> 0 < f >>> 0) ka();
    i = j + o | 0;
    if (j >>> 0 >= i >>> 0) ka();
    g = c[j + 24 >> 2] | 0;
    d = c[j + 12 >> 2] | 0;
    do if ((d | 0) == (j | 0)) {
     b = j + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = j + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       r = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) ka(); else {
      c[b >> 2] = 0;
      r = a;
      break;
     }
    } else {
     e = c[j + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ka();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (j | 0)) ka();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (j | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      r = d;
      break;
     } else ka();
    } while (0);
    do if (g | 0) {
     a = c[j + 28 >> 2] | 0;
     b = 1512 + (a << 2) | 0;
     if ((j | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = r;
      if (!r) {
       c[303] = c[303] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[306] | 0) >>> 0) ka();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = r; else c[g + 20 >> 2] = r;
      if (!r) break;
     }
     b = c[306] | 0;
     if (r >>> 0 < b >>> 0) ka();
     c[r + 24 >> 2] = g;
     a = c[j + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ka(); else {
      c[r + 16 >> 2] = a;
      c[a + 24 >> 2] = r;
      break;
     } while (0);
     a = c[j + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) ka(); else {
      c[r + 20 >> 2] = a;
      c[a + 24 >> 2] = r;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     A = h + o | 0;
     c[j + 4 >> 2] = A | 3;
     A = j + A + 4 | 0;
     c[A >> 2] = c[A >> 2] | 1;
    } else {
     c[j + 4 >> 2] = o | 3;
     c[i + 4 >> 2] = h | 1;
     c[i + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 1248 + (a << 1 << 2) | 0;
      b = c[302] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[302] = b | a;
       s = d + 8 | 0;
       t = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
        s = a;
        t = b;
       }
      }
      c[s >> 2] = i;
      c[t + 12 >> 2] = i;
      c[i + 8 >> 2] = t;
      c[i + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
      z = (a + 1048320 | 0) >>> 16 & 8;
      A = a << z;
      y = (A + 520192 | 0) >>> 16 & 4;
      A = A << y;
      d = (A + 245760 | 0) >>> 16 & 2;
      d = 14 - (y | z | d) + (A << d >>> 15) | 0;
      d = h >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 1512 + (d << 2) | 0;
     c[i + 28 >> 2] = d;
     a = i + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[303] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[303] = a | b;
      c[e >> 2] = i;
      c[i + 24 >> 2] = e;
      c[i + 12 >> 2] = i;
      c[i + 8 >> 2] = i;
      break;
     }
     f = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
       d = a;
       u = 148;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       u = 145;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((u | 0) == 145) if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
      c[b >> 2] = i;
      c[i + 24 >> 2] = a;
      c[i + 12 >> 2] = i;
      c[i + 8 >> 2] = i;
      break;
     } else if ((u | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      A = c[306] | 0;
      if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
       c[b + 12 >> 2] = i;
       c[a >> 2] = i;
       c[i + 8 >> 2] = b;
       c[i + 12 >> 2] = d;
       c[i + 24 >> 2] = 0;
       break;
      } else ka();
     }
    } while (0);
    A = j + 8 | 0;
    return A | 0;
   }
  }
 } while (0);
 d = c[304] | 0;
 if (d >>> 0 >= o >>> 0) {
  a = d - o | 0;
  b = c[307] | 0;
  if (a >>> 0 > 15) {
   A = b + o | 0;
   c[307] = A;
   c[304] = a;
   c[A + 4 >> 2] = a | 1;
   c[A + a >> 2] = a;
   c[b + 4 >> 2] = o | 3;
  } else {
   c[304] = 0;
   c[307] = 0;
   c[b + 4 >> 2] = d | 3;
   A = b + d + 4 | 0;
   c[A >> 2] = c[A >> 2] | 1;
  }
  A = b + 8 | 0;
  return A | 0;
 }
 a = c[305] | 0;
 if (a >>> 0 > o >>> 0) {
  y = a - o | 0;
  c[305] = y;
  A = c[308] | 0;
  z = A + o | 0;
  c[308] = z;
  c[z + 4 >> 2] = y | 1;
  c[A + 4 >> 2] = o | 3;
  A = A + 8 | 0;
  return A | 0;
 }
 do if (!(c[420] | 0)) {
  a = sa(30) | 0;
  if (!(a + -1 & a)) {
   c[422] = a;
   c[421] = a;
   c[423] = -1;
   c[424] = -1;
   c[425] = 0;
   c[413] = 0;
   c[420] = (ma(0) | 0) & -16 ^ 1431655768;
   break;
  } else ka();
 } while (0);
 h = o + 48 | 0;
 g = c[422] | 0;
 i = o + 47 | 0;
 f = g + i | 0;
 g = 0 - g | 0;
 j = f & g;
 if (j >>> 0 <= o >>> 0) {
  A = 0;
  return A | 0;
 }
 a = c[412] | 0;
 if (a | 0) {
  s = c[410] | 0;
  t = s + j | 0;
  if (t >>> 0 <= s >>> 0 | t >>> 0 > a >>> 0) {
   A = 0;
   return A | 0;
  }
 }
 b : do if (!(c[413] & 4)) {
  a = c[308] | 0;
  c : do if (!a) u = 173; else {
   e = 1656;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     u = 173;
     break c;
    }
   }
   a = f - (c[305] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = la(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      u = 193;
      break b;
     }
    } else {
     e = b;
     u = 183;
    }
   }
  } while (0);
  do if ((u | 0) == 173) {
   f = la(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[421] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = j; else a = j - a + (d + a & 0 - b) | 0;
    b = c[410] | 0;
    d = b + a | 0;
    if (a >>> 0 > o >>> 0 & a >>> 0 < 2147483647) {
     e = c[412] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = la(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      u = 193;
      break b;
     } else {
      e = b;
      u = 183;
     }
    }
   }
  } while (0);
  d : do if ((u | 0) == 183) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[422] | 0;
    b = i - a + b & 0 - b;
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
    u = 193;
    break b;
   }
  } while (0);
  c[413] = c[413] | 4;
  u = 190;
 } else u = 190; while (0);
 if ((u | 0) == 190) if (j >>> 0 < 2147483647) {
  b = la(j | 0) | 0;
  a = la(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (o + 40 | 0) >>> 0) {
    f = b;
    h = a;
    u = 193;
   }
  }
 }
 if ((u | 0) == 193) {
  a = (c[410] | 0) + h | 0;
  c[410] = a;
  if (a >>> 0 > (c[411] | 0) >>> 0) c[411] = a;
  i = c[308] | 0;
  do if (!i) {
   A = c[306] | 0;
   if ((A | 0) == 0 | f >>> 0 < A >>> 0) c[306] = f;
   c[414] = f;
   c[415] = h;
   c[417] = 0;
   c[311] = c[420];
   c[310] = -1;
   a = 0;
   do {
    A = 1248 + (a << 1 << 2) | 0;
    c[A + 12 >> 2] = A;
    c[A + 8 >> 2] = A;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   A = f + 8 | 0;
   A = (A & 7 | 0) == 0 ? 0 : 0 - A & 7;
   z = f + A | 0;
   A = h + -40 - A | 0;
   c[308] = z;
   c[305] = A;
   c[z + 4 >> 2] = A | 1;
   c[z + A + 4 >> 2] = 40;
   c[309] = c[424];
  } else {
   b = 1656;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     u = 203;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((u | 0) == 203) if (!(c[b + 12 >> 2] & 8)) if (i >>> 0 < f >>> 0 & i >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    A = i + 8 | 0;
    A = (A & 7 | 0) == 0 ? 0 : 0 - A & 7;
    z = i + A | 0;
    A = h - A + (c[305] | 0) | 0;
    c[308] = z;
    c[305] = A;
    c[z + 4 >> 2] = A | 1;
    c[z + A + 4 >> 2] = 40;
    c[309] = c[424];
    break;
   }
   a = c[306] | 0;
   if (f >>> 0 < a >>> 0) {
    c[306] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 1656;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     u = 211;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 1656;
     break;
    }
   }
   if ((u | 0) == 211) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    l = a + 4 | 0;
    c[l >> 2] = (c[l >> 2] | 0) + h;
    l = f + 8 | 0;
    l = f + ((l & 7 | 0) == 0 ? 0 : 0 - l & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    k = l + o | 0;
    g = a - l - o | 0;
    c[l + 4 >> 2] = o | 3;
    do if ((a | 0) == (i | 0)) {
     A = (c[305] | 0) + g | 0;
     c[305] = A;
     c[308] = k;
     c[k + 4 >> 2] = A | 1;
    } else {
     if ((a | 0) == (c[307] | 0)) {
      A = (c[304] | 0) + g | 0;
      c[304] = A;
      c[307] = k;
      c[k + 4 >> 2] = A | 1;
      c[k + A >> 2] = A;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      i = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 1248 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) ka();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ka();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[302] = c[302] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) v = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) ka();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         v = b;
         break;
        }
        ka();
       } while (0);
       c[d + 12 >> 2] = e;
       c[v >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        d = a + 16 | 0;
        e = d + 4 | 0;
        b = c[e >> 2] | 0;
        if (!b) {
         b = c[d >> 2] | 0;
         if (!b) {
          y = 0;
          break;
         }
        } else d = e;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < j >>> 0) ka(); else {
         c[d >> 2] = 0;
         y = b;
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
         y = e;
         break;
        } else ka();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 1512 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = y;
        if (y | 0) break;
        c[303] = c[303] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[306] | 0) >>> 0) ka();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = y; else c[h + 20 >> 2] = y;
        if (!y) break e;
       } while (0);
       e = c[306] | 0;
       if (y >>> 0 < e >>> 0) ka();
       c[y + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) ka(); else {
        c[y + 16 >> 2] = d;
        c[d + 24 >> 2] = y;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
        c[y + 20 >> 2] = b;
        c[b + 24 >> 2] = y;
        break;
       }
      } while (0);
      a = a + i | 0;
      g = i + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[k + 4 >> 2] = g | 1;
     c[k + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 1248 + (a << 1 << 2) | 0;
      b = c[302] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[302] = b | a;
       z = d + 8 | 0;
       A = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[306] | 0) >>> 0) {
        z = a;
        A = b;
        break;
       }
       ka();
      } while (0);
      c[z >> 2] = k;
      c[A + 12 >> 2] = k;
      c[k + 8 >> 2] = A;
      c[k + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) d = 0; else {
      if (g >>> 0 > 16777215) {
       d = 31;
       break;
      }
      z = (a + 1048320 | 0) >>> 16 & 8;
      A = a << z;
      y = (A + 520192 | 0) >>> 16 & 4;
      A = A << y;
      d = (A + 245760 | 0) >>> 16 & 2;
      d = 14 - (y | z | d) + (A << d >>> 15) | 0;
      d = g >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 1512 + (d << 2) | 0;
     c[k + 28 >> 2] = d;
     a = k + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[303] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[303] = a | b;
      c[e >> 2] = k;
      c[k + 24 >> 2] = e;
      c[k + 12 >> 2] = k;
      c[k + 8 >> 2] = k;
      break;
     }
     f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
       d = a;
       u = 281;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       u = 278;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((u | 0) == 278) if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
      c[b >> 2] = k;
      c[k + 24 >> 2] = a;
      c[k + 12 >> 2] = k;
      c[k + 8 >> 2] = k;
      break;
     } else if ((u | 0) == 281) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      A = c[306] | 0;
      if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
       c[b + 12 >> 2] = k;
       c[a >> 2] = k;
       c[k + 8 >> 2] = b;
       c[k + 12 >> 2] = d;
       c[k + 24 >> 2] = 0;
       break;
      } else ka();
     }
    } while (0);
    A = l + 8 | 0;
    return A | 0;
   } else b = 1656;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= i >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > i >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = i + 16 | 0;
   d = d >>> 0 < g >>> 0 ? i : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   A = f + e | 0;
   e = h + -40 - e | 0;
   c[308] = A;
   c[305] = e;
   c[A + 4 >> 2] = e | 1;
   c[A + e + 4 >> 2] = 40;
   c[309] = c[424];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[414];
   c[b + 4 >> 2] = c[415];
   c[b + 8 >> 2] = c[416];
   c[b + 12 >> 2] = c[417];
   c[414] = f;
   c[415] = h;
   c[417] = 0;
   c[416] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (i | 0)) {
    h = d - i | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[i + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 1248 + (a << 1 << 2) | 0;
     b = c[302] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[302] = b | a;
      w = d + 8 | 0;
      x = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
       w = a;
       x = b;
      }
     }
     c[w >> 2] = i;
     c[x + 12 >> 2] = i;
     c[i + 8 >> 2] = x;
     c[i + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     z = (a + 1048320 | 0) >>> 16 & 8;
     A = a << z;
     y = (A + 520192 | 0) >>> 16 & 4;
     A = A << y;
     d = (A + 245760 | 0) >>> 16 & 2;
     d = 14 - (y | z | d) + (A << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 1512 + (d << 2) | 0;
    c[i + 28 >> 2] = d;
    c[i + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[303] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[303] = a | b;
     c[f >> 2] = i;
     c[i + 24 >> 2] = f;
     c[i + 12 >> 2] = i;
     c[i + 8 >> 2] = i;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    a = c[f >> 2] | 0;
    while (1) {
     if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
      d = a;
      u = 307;
      break;
     }
     b = a + 16 + (e >>> 31 << 2) | 0;
     d = c[b >> 2] | 0;
     if (!d) {
      u = 304;
      break;
     } else {
      e = e << 1;
      a = d;
     }
    }
    if ((u | 0) == 304) if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
     c[b >> 2] = i;
     c[i + 24 >> 2] = a;
     c[i + 12 >> 2] = i;
     c[i + 8 >> 2] = i;
     break;
    } else if ((u | 0) == 307) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     A = c[306] | 0;
     if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
      c[b + 12 >> 2] = i;
      c[a >> 2] = i;
      c[i + 8 >> 2] = b;
      c[i + 12 >> 2] = d;
      c[i + 24 >> 2] = 0;
      break;
     } else ka();
    }
   }
  } while (0);
  a = c[305] | 0;
  if (a >>> 0 > o >>> 0) {
   y = a - o | 0;
   c[305] = y;
   A = c[308] | 0;
   z = A + o | 0;
   c[308] = z;
   c[z + 4 >> 2] = y | 1;
   c[A + 4 >> 2] = o | 3;
   A = A + 8 | 0;
   return A | 0;
  }
 }
 c[(Ka() | 0) >> 2] = 12;
 A = 0;
 return A | 0;
}

function $a(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[306] | 0;
 if (d >>> 0 < h >>> 0) ka();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) ka();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) ka();
  if ((k | 0) == (c[307] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[304] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 1248 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[302] = c[302] & ~(1 << e);
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
   b = k + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    }
   } else b = d;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
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
   b = 1512 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[303] = c[303] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[306] | 0) >>> 0) ka();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[306] | 0;
   if (i >>> 0 < d >>> 0) ka();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) ka(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[306] | 0) >>> 0) ka(); else {
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
 if (q >>> 0 >= m >>> 0) ka();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) ka();
 if (!(b & 2)) {
  if ((m | 0) == (c[308] | 0)) {
   p = (c[305] | 0) + g | 0;
   c[305] = p;
   c[308] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[307] | 0)) return;
   c[307] = 0;
   c[304] = 0;
   return;
  }
  if ((m | 0) == (c[307] | 0)) {
   p = (c[304] | 0) + g | 0;
   c[304] = p;
   c[307] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 1248 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[306] | 0) >>> 0) ka();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) ka();
   }
   if ((d | 0) == (b | 0)) {
    c[302] = c[302] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[306] | 0) >>> 0) ka();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else ka();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    b = m + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     }
    } else b = d;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[306] | 0) >>> 0) ka();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) ka();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else ka();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 1512 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[303] = c[303] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[306] | 0) >>> 0) ka();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[306] | 0;
    if (n >>> 0 < d >>> 0) ka();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) ka(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) ka(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[307] | 0)) {
   c[304] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 1248 + (a << 1 << 2) | 0;
  b = c[302] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[302] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
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
 if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = g >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 1512 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[303] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[303] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  a = c[e >> 2] | 0;
  while (1) {
   if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
    d = a;
    e = 130;
    break;
   }
   b = a + 16 + (f >>> 31 << 2) | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    e = 127;
    break;
   } else {
    f = f << 1;
    a = d;
   }
  }
  if ((e | 0) == 127) if (b >>> 0 < (c[306] | 0) >>> 0) ka(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[306] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else ka();
  }
 } while (0);
 q = (c[310] | 0) + -1 | 0;
 c[310] = q;
 if (!q) a = 1664; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[310] = -1;
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
  if (!(c[290] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Ja(ta(146, n | 0) | 0) | 0;
  } else {
   na(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Ja(ta(146, m | 0) | 0) | 0;
   fa(0);
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
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Ra(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  f = c[i >> 2] | 0;
  h = f;
  if ((g - f | 0) >>> 0 < d >>> 0) {
   f = wa[c[e + 36 >> 2] & 3](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((wa[c[e + 36 >> 2] & 3](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  cb(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Wa(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 f = b + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Ra(b) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = -1; else h = 4;
 do if ((h | 0) == 4) {
  h = b + 20 | 0;
  j = c[h >> 2] | 0;
  if (j >>> 0 < g >>> 0) {
   f = e & 255;
   if ((f | 0) != (a[b + 75 >> 0] | 0)) {
    c[h >> 2] = j + 1;
    a[j >> 0] = k;
    break;
   }
  }
  if ((wa[c[b + 36 >> 2] & 3](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function Ua(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[285] | 0)) b = 0; else b = Ua(c[285] | 0) | 0;
  ha(1188);
  a = c[296] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Sa(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = Va(a) | 0 | b;
   if (d | 0) Na(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  qa(1188);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = Va(a) | 0;
   break;
  }
  d = (Sa(a) | 0) == 0;
  b = Va(a) | 0;
  if (!d) Na(a);
 } while (0);
 return b | 0;
}

function Va(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  wa[c[a + 36 >> 2] & 3](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  d = a + 8 | 0;
  e = c[d >> 2] | 0;
  if (b >>> 0 < e >>> 0) wa[c[a + 40 >> 2] & 3](a, b - e | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function cb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return oa(b | 0, d | 0, e | 0) | 0;
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

function Ta(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function ab() {}
function bb(b, d, e) {
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

function Za(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[256] | 0;
 if ((c[e + 76 >> 2] | 0) > -1) f = Sa(e) | 0; else f = 0;
 do if ((Ya(b, e) | 0) < 0) b = 1; else {
  if ((a[e + 75 >> 0] | 0) != 10) {
   b = e + 20 | 0;
   d = c[b >> 2] | 0;
   if (d >>> 0 < (c[e + 16 >> 2] | 0) >>> 0) {
    c[b >> 2] = d + 1;
    a[d >> 0] = 10;
    b = 0;
    break;
   }
  }
  b = (Wa(e, 10) | 0) < 0;
 } while (0);
 if (f | 0) Na(e);
 return b << 31 >> 31 | 0;
}

function Ra(b) {
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

function Oa(a, b, d) {
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
 if ((Ja(ra(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Pa(b, d, e) {
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
  if (pa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = La(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Xa(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = Z(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Sa(e) | 0) == 0;
  a = Qa(a, f, e) | 0;
  if (!g) Na(e);
 } else a = Qa(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function Ea(b) {
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

function Ia(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Ja(ia(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Da(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function eb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return wa[a & 3](b | 0, c | 0, d | 0) | 0;
}

function Ja(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Ka() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Ka() {
 var a = 0;
 if (!(c[290] | 0)) a = 1204; else a = c[(ga() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function ya(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Ya(a, b) {
 a = a | 0;
 b = b | 0;
 return (Xa(a, Ta(a) | 0, 1, b) | 0) + -1 | 0;
}

function hb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 aa(1);
 return 0;
}

function Ca(a, b) {
 a = a | 0;
 b = b | 0;
 if (!m) {
  m = a;
  n = b;
 }
}

function db(a, b) {
 a = a | 0;
 b = b | 0;
 return va[a & 1](b | 0) | 0;
}

function Ma(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Na(a);
 return;
}

function fb(a, b) {
 a = a | 0;
 b = b | 0;
 xa[a & 1](b | 0);
}

function Ba(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function gb(a) {
 a = a | 0;
 aa(0);
 return 0;
}

function Ha() {
 Za(1144) | 0;
 return 0;
}

function Sa(a) {
 a = a | 0;
 return 0;
}

function Na(a) {
 a = a | 0;
 return;
}

function ib(a) {
 a = a | 0;
 aa(2);
}

function Fa(a) {
 a = a | 0;
 B = a;
}

function Aa(a) {
 a = a | 0;
 i = a;
}

function za() {
 return i | 0;
}

function Ga() {
 return B | 0;
}

// EMSCRIPTEN_END_FUNCS

 var va = [ gb, Ia ];
 var wa = [ hb, Pa, Oa, La ];
 var xa = [ ib, Ma ];
 return {
  _free: $a,
  _main: Ha,
  _memset: bb,
  _malloc: _a,
  _memcpy: cb,
  _fflush: Ua,
  ___errno_location: Ka,
  runPostSets: ab,
  stackAlloc: ya,
  stackSave: za,
  stackRestore: Aa,
  establishStackSpace: Ba,
  setThrew: Ca,
  setTempRet0: Fa,
  getTempRet0: Ga,
  dynCall_ii: db,
  dynCall_iiii: eb,
  dynCall_vi: fb
 };
})


;