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
 var n = env.___dso_handle | 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = 0;
 var s = global.NaN, t = global.Infinity;
 var u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0, A = 0, B = 0, C = 0.0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = 0;
 var N = global.Math.floor;
 var O = global.Math.abs;
 var P = global.Math.sqrt;
 var Q = global.Math.pow;
 var R = global.Math.cos;
 var S = global.Math.sin;
 var T = global.Math.tan;
 var U = global.Math.acos;
 var V = global.Math.asin;
 var W = global.Math.atan;
 var X = global.Math.atan2;
 var Y = global.Math.exp;
 var Z = global.Math.log;
 var _ = global.Math.ceil;
 var $ = global.Math.imul;
 var aa = global.Math.min;
 var ba = global.Math.clz32;
 var ca = env.abort;
 var da = env.assert;
 var ea = env.invoke_iiiiiiii;
 var fa = env.invoke_iiii;
 var ga = env.invoke_viiiii;
 var ha = env.invoke_iiiiiid;
 var ia = env.invoke_vi;
 var ja = env.invoke_vii;
 var ka = env.invoke_iiiiiii;
 var la = env.invoke_iiiiid;
 var ma = env.invoke_ii;
 var na = env.invoke_viii;
 var oa = env.invoke_v;
 var pa = env.invoke_iiiiiiiii;
 var qa = env.invoke_iiiii;
 var ra = env.invoke_viiiiii;
 var sa = env.invoke_iii;
 var ta = env.invoke_iiiiii;
 var ua = env.invoke_viiii;
 var va = env._pthread_cleanup_pop;
 var wa = env._strftime;
 var xa = env._pthread_cond_wait;
 var ya = env._pthread_key_create;
 var za = env._abort;
 var Aa = env._llvm_fabs_f64;
 var Ba = env.___gxx_personality_v0;
 var Ca = env.___assert_fail;
 var Da = env.___cxa_allocate_exception;
 var Ea = env.__ZSt18uncaught_exceptionv;
 var Fa = env.__isLeapYear;
 var Ga = env.___cxa_guard_release;
 var Ha = env.__addDays;
 var Ia = env.___cxa_guard_acquire;
 var Ja = env._strftime_l;
 var Ka = env.___setErrNo;
 var La = env._sbrk;
 var Ma = env.___cxa_begin_catch;
 var Na = env._emscripten_memcpy_big;
 var Oa = env.___resumeException;
 var Pa = env.___cxa_find_matching_catch;
 var Qa = env._sysconf;
 var Ra = env._pthread_getspecific;
 var Sa = env.__arraySum;
 var Ta = env._pthread_self;
 var Ua = env._pthread_mutex_unlock;
 var Va = env._pthread_once;
 var Wa = env.___syscall54;
 var Xa = env.___unlock;
 var Ya = env._pthread_cond_broadcast;
 var Za = env._pthread_setspecific;
 var _a = env.___cxa_atexit;
 var $a = env.___cxa_throw;
 var ab = env.___lock;
 var bb = env.___syscall6;
 var cb = env._pthread_cleanup_push;
 var db = env._time;
 var eb = env._pthread_mutex_lock;
 var fb = env._atexit;
 var gb = env.___syscall140;
 var hb = env.___syscall145;
 var ib = env.___syscall146;
 var jb = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function td(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  j = c[4398] | 0;
  b = j >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 17632 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[4398] = j & ~(1 << b); else {
    if (h >>> 0 < (c[4402] | 0) >>> 0) za();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else za();
   } while (0);
   A = b << 3;
   c[f + 4 >> 2] = A | 3;
   A = f + A + 4 | 0;
   c[A >> 2] = c[A >> 2] | 1;
   A = g;
   return A | 0;
  }
  h = c[4400] | 0;
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
    d = 17632 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    i = g + 8 | 0;
    f = c[i >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[4398] = j & ~(1 << b);
     k = h;
    } else {
     if (f >>> 0 < (c[4402] | 0) >>> 0) za();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      k = c[4400] | 0;
      break;
     } else za();
    } while (0);
    h = (b << 3) - o | 0;
    c[g + 4 >> 2] = o | 3;
    e = g + o | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (k | 0) {
     f = c[4403] | 0;
     b = k >>> 3;
     d = 17632 + (b << 1 << 2) | 0;
     a = c[4398] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[4398] = a | b;
      l = d + 8 | 0;
      m = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
       l = a;
       m = b;
      }
     }
     c[l >> 2] = f;
     c[m + 12 >> 2] = f;
     c[f + 8 >> 2] = m;
     c[f + 12 >> 2] = d;
    }
    c[4400] = h;
    c[4403] = e;
    A = i;
    return A | 0;
   }
   a = c[4399] | 0;
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
    e = c[17896 + ((y | z | A | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[4402] | 0;
    if (j >>> 0 < g >>> 0) za();
    i = j + o | 0;
    if (j >>> 0 >= i >>> 0) za();
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
     if (b >>> 0 < g >>> 0) za(); else {
      c[b >> 2] = 0;
      n = a;
      break;
     }
    } else {
     f = c[j + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) za();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (j | 0)) za();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (j | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      n = e;
      break;
     } else za();
    } while (0);
    do if (h | 0) {
     a = c[j + 28 >> 2] | 0;
     b = 17896 + (a << 2) | 0;
     if ((j | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = n;
      if (!n) {
       c[4399] = c[4399] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[4402] | 0) >>> 0) za();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = n; else c[h + 20 >> 2] = n;
      if (!n) break;
     }
     b = c[4402] | 0;
     if (n >>> 0 < b >>> 0) za();
     c[n + 24 >> 2] = h;
     a = c[j + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) za(); else {
      c[n + 16 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     } while (0);
     a = c[j + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
     a = c[4400] | 0;
     if (a | 0) {
      f = c[4403] | 0;
      b = a >>> 3;
      e = 17632 + (b << 1 << 2) | 0;
      a = c[4398] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[4398] = a | b;
       p = e + 8 | 0;
       q = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
        p = a;
        q = b;
       }
      }
      c[p >> 2] = f;
      c[q + 12 >> 2] = f;
      c[f + 8 >> 2] = q;
      c[f + 12 >> 2] = e;
     }
     c[4400] = d;
     c[4403] = i;
    }
    A = j + 8 | 0;
    return A | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) o = -1; else {
  a = a + 11 | 0;
  o = a & -8;
  j = c[4399] | 0;
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
   b = c[17896 + (i << 2) >> 2] | 0;
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
     a = c[17896 + ((l | m | n | p | a) + (q >>> a) << 2) >> 2] | 0;
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
   if (j) if (h >>> 0 < ((c[4400] | 0) - o | 0) >>> 0) {
    f = c[4402] | 0;
    if (j >>> 0 < f >>> 0) za();
    i = j + o | 0;
    if (j >>> 0 >= i >>> 0) za();
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
     if (b >>> 0 < f >>> 0) za(); else {
      c[b >> 2] = 0;
      r = a;
      break;
     }
    } else {
     e = c[j + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) za();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (j | 0)) za();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (j | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      r = d;
      break;
     } else za();
    } while (0);
    do if (g | 0) {
     a = c[j + 28 >> 2] | 0;
     b = 17896 + (a << 2) | 0;
     if ((j | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = r;
      if (!r) {
       c[4399] = c[4399] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[4402] | 0) >>> 0) za();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (j | 0)) c[a >> 2] = r; else c[g + 20 >> 2] = r;
      if (!r) break;
     }
     b = c[4402] | 0;
     if (r >>> 0 < b >>> 0) za();
     c[r + 24 >> 2] = g;
     a = c[j + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) za(); else {
      c[r + 16 >> 2] = a;
      c[a + 24 >> 2] = r;
      break;
     } while (0);
     a = c[j + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
      d = 17632 + (a << 1 << 2) | 0;
      b = c[4398] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[4398] = b | a;
       s = d + 8 | 0;
       t = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
     e = 17896 + (d << 2) | 0;
     c[i + 28 >> 2] = d;
     a = i + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[4399] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[4399] = a | b;
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
     if ((u | 0) == 145) if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
      c[b >> 2] = i;
      c[i + 24 >> 2] = a;
      c[i + 12 >> 2] = i;
      c[i + 8 >> 2] = i;
      break;
     } else if ((u | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      A = c[4402] | 0;
      if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
       c[b + 12 >> 2] = i;
       c[a >> 2] = i;
       c[i + 8 >> 2] = b;
       c[i + 12 >> 2] = d;
       c[i + 24 >> 2] = 0;
       break;
      } else za();
     }
    } while (0);
    A = j + 8 | 0;
    return A | 0;
   }
  }
 } while (0);
 d = c[4400] | 0;
 if (d >>> 0 >= o >>> 0) {
  a = d - o | 0;
  b = c[4403] | 0;
  if (a >>> 0 > 15) {
   A = b + o | 0;
   c[4403] = A;
   c[4400] = a;
   c[A + 4 >> 2] = a | 1;
   c[A + a >> 2] = a;
   c[b + 4 >> 2] = o | 3;
  } else {
   c[4400] = 0;
   c[4403] = 0;
   c[b + 4 >> 2] = d | 3;
   A = b + d + 4 | 0;
   c[A >> 2] = c[A >> 2] | 1;
  }
  A = b + 8 | 0;
  return A | 0;
 }
 a = c[4401] | 0;
 if (a >>> 0 > o >>> 0) {
  y = a - o | 0;
  c[4401] = y;
  A = c[4404] | 0;
  z = A + o | 0;
  c[4404] = z;
  c[z + 4 >> 2] = y | 1;
  c[A + 4 >> 2] = o | 3;
  A = A + 8 | 0;
  return A | 0;
 }
 do if (!(c[4516] | 0)) {
  a = Qa(30) | 0;
  if (!(a + -1 & a)) {
   c[4518] = a;
   c[4517] = a;
   c[4519] = -1;
   c[4520] = -1;
   c[4521] = 0;
   c[4509] = 0;
   c[4516] = (db(0) | 0) & -16 ^ 1431655768;
   break;
  } else za();
 } while (0);
 h = o + 48 | 0;
 g = c[4518] | 0;
 i = o + 47 | 0;
 f = g + i | 0;
 g = 0 - g | 0;
 j = f & g;
 if (j >>> 0 <= o >>> 0) {
  A = 0;
  return A | 0;
 }
 a = c[4508] | 0;
 if (a | 0) {
  s = c[4506] | 0;
  t = s + j | 0;
  if (t >>> 0 <= s >>> 0 | t >>> 0 > a >>> 0) {
   A = 0;
   return A | 0;
  }
 }
 b : do if (!(c[4509] & 4)) {
  a = c[4404] | 0;
  c : do if (!a) u = 173; else {
   e = 18040;
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
   a = f - (c[4401] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = La(a | 0) | 0;
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
   f = La(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[4517] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = j; else a = j - a + (d + a & 0 - b) | 0;
    b = c[4506] | 0;
    d = b + a | 0;
    if (a >>> 0 > o >>> 0 & a >>> 0 < 2147483647) {
     e = c[4508] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = La(a | 0) | 0;
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
    b = c[4518] | 0;
    b = i - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((La(b | 0) | 0) == (-1 | 0)) {
     La(d | 0) | 0;
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
  c[4509] = c[4509] | 4;
  u = 190;
 } else u = 190; while (0);
 if ((u | 0) == 190) if (j >>> 0 < 2147483647) {
  b = La(j | 0) | 0;
  a = La(0) | 0;
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
  a = (c[4506] | 0) + h | 0;
  c[4506] = a;
  if (a >>> 0 > (c[4507] | 0) >>> 0) c[4507] = a;
  i = c[4404] | 0;
  do if (!i) {
   A = c[4402] | 0;
   if ((A | 0) == 0 | f >>> 0 < A >>> 0) c[4402] = f;
   c[4510] = f;
   c[4511] = h;
   c[4513] = 0;
   c[4407] = c[4516];
   c[4406] = -1;
   a = 0;
   do {
    A = 17632 + (a << 1 << 2) | 0;
    c[A + 12 >> 2] = A;
    c[A + 8 >> 2] = A;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   A = f + 8 | 0;
   A = (A & 7 | 0) == 0 ? 0 : 0 - A & 7;
   z = f + A | 0;
   A = h + -40 - A | 0;
   c[4404] = z;
   c[4401] = A;
   c[z + 4 >> 2] = A | 1;
   c[z + A + 4 >> 2] = 40;
   c[4405] = c[4520];
  } else {
   b = 18040;
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
    A = h - A + (c[4401] | 0) | 0;
    c[4404] = z;
    c[4401] = A;
    c[z + 4 >> 2] = A | 1;
    c[z + A + 4 >> 2] = 40;
    c[4405] = c[4520];
    break;
   }
   a = c[4402] | 0;
   if (f >>> 0 < a >>> 0) {
    c[4402] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 18040;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     u = 211;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 18040;
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
     A = (c[4401] | 0) + g | 0;
     c[4401] = A;
     c[4404] = k;
     c[k + 4 >> 2] = A | 1;
    } else {
     if ((a | 0) == (c[4403] | 0)) {
      A = (c[4400] | 0) + g | 0;
      c[4400] = A;
      c[4403] = k;
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
       b = 17632 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) za();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        za();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[4398] = c[4398] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) v = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) za();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         v = b;
         break;
        }
        za();
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
        if (d >>> 0 < j >>> 0) za(); else {
         c[d >> 2] = 0;
         y = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) za();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) za();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         y = e;
         break;
        } else za();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 17896 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = y;
        if (y | 0) break;
        c[4399] = c[4399] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[4402] | 0) >>> 0) za();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = y; else c[h + 20 >> 2] = y;
        if (!y) break e;
       } while (0);
       e = c[4402] | 0;
       if (y >>> 0 < e >>> 0) za();
       c[y + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) za(); else {
        c[y + 16 >> 2] = d;
        c[d + 24 >> 2] = y;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
      d = 17632 + (a << 1 << 2) | 0;
      b = c[4398] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[4398] = b | a;
       z = d + 8 | 0;
       A = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[4402] | 0) >>> 0) {
        z = a;
        A = b;
        break;
       }
       za();
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
     e = 17896 + (d << 2) | 0;
     c[k + 28 >> 2] = d;
     a = k + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[4399] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[4399] = a | b;
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
     if ((u | 0) == 278) if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
      c[b >> 2] = k;
      c[k + 24 >> 2] = a;
      c[k + 12 >> 2] = k;
      c[k + 8 >> 2] = k;
      break;
     } else if ((u | 0) == 281) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      A = c[4402] | 0;
      if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
       c[b + 12 >> 2] = k;
       c[a >> 2] = k;
       c[k + 8 >> 2] = b;
       c[k + 12 >> 2] = d;
       c[k + 24 >> 2] = 0;
       break;
      } else za();
     }
    } while (0);
    A = l + 8 | 0;
    return A | 0;
   } else b = 18040;
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
   c[4404] = A;
   c[4401] = e;
   c[A + 4 >> 2] = e | 1;
   c[A + e + 4 >> 2] = 40;
   c[4405] = c[4520];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[4510];
   c[b + 4 >> 2] = c[4511];
   c[b + 8 >> 2] = c[4512];
   c[b + 12 >> 2] = c[4513];
   c[4510] = f;
   c[4511] = h;
   c[4513] = 0;
   c[4512] = b;
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
     d = 17632 + (a << 1 << 2) | 0;
     b = c[4398] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[4398] = b | a;
      w = d + 8 | 0;
      x = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
    f = 17896 + (d << 2) | 0;
    c[i + 28 >> 2] = d;
    c[i + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[4399] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[4399] = a | b;
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
    if ((u | 0) == 304) if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
     c[b >> 2] = i;
     c[i + 24 >> 2] = a;
     c[i + 12 >> 2] = i;
     c[i + 8 >> 2] = i;
     break;
    } else if ((u | 0) == 307) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     A = c[4402] | 0;
     if (b >>> 0 >= A >>> 0 & d >>> 0 >= A >>> 0) {
      c[b + 12 >> 2] = i;
      c[a >> 2] = i;
      c[i + 8 >> 2] = b;
      c[i + 12 >> 2] = d;
      c[i + 24 >> 2] = 0;
      break;
     } else za();
    }
   }
  } while (0);
  a = c[4401] | 0;
  if (a >>> 0 > o >>> 0) {
   y = a - o | 0;
   c[4401] = y;
   A = c[4404] | 0;
   z = A + o | 0;
   c[4404] = z;
   c[z + 4 >> 2] = y | 1;
   c[A + 4 >> 2] = o | 3;
   A = A + 8 | 0;
   return A | 0;
  }
 }
 c[(Qb() | 0) >> 2] = 12;
 A = 0;
 return A | 0;
}

function uc(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 da = ia + 24 | 0;
 fa = ia + 16 | 0;
 ea = ia + 588 | 0;
 aa = ia + 576 | 0;
 ca = ia;
 W = ia + 536 | 0;
 ha = ia + 8 | 0;
 ga = ia + 528 | 0;
 M = (e | 0) != 0;
 N = W + 40 | 0;
 V = N;
 W = W + 39 | 0;
 X = ha + 4 | 0;
 Y = ea;
 Z = 0 - Y | 0;
 _ = aa + 12 | 0;
 aa = aa + 11 | 0;
 ba = _;
 O = ba - Y | 0;
 P = -2 - Y | 0;
 Q = ba + 2 | 0;
 R = da + 288 | 0;
 S = ea + 9 | 0;
 T = S;
 U = ea + 8 | 0;
 m = 0;
 o = 0;
 n = 0;
 y = f;
 a : while (1) {
  do if ((m | 0) > -1) if ((o | 0) > (2147483647 - m | 0)) {
   c[(Qb() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = o + m | 0;
   break;
  } while (0);
  f = a[y >> 0] | 0;
  if (!(f << 24 >> 24)) {
   L = 244;
   break;
  } else o = y;
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
  w = o - y | 0;
  if (M) if (!(c[e >> 2] & 32)) vc(y, w, e) | 0;
  if ((o | 0) != (y | 0)) {
   o = w;
   y = f;
   continue;
  }
  r = f + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[f + 2 >> 0] | 0) == 36;
   r = K ? f + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   n = K ? 1 : n;
  } else u = -1;
  f = o << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << f + -32 & 75913)) {
     s = p;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    f = o << 24 >> 24;
    if ((f & -32 | 0) != 32) {
     s = p;
     break;
    }
   }
  } else s = 0; while (0);
  do if (o << 24 >> 24 == 42) {
   o = r + 1 | 0;
   f = (a[o >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[r + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    n = 1;
    r = r + 3 | 0;
    f = c[j + ((a[o >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else L = 24; else L = 24;
   if ((L | 0) == 24) {
    L = 0;
    if (n | 0) {
     m = -1;
     break a;
    }
    if (!M) {
     v = s;
     n = 0;
     r = o;
     K = 0;
     break;
    }
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    f = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = 0;
    r = o;
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
    f = r;
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     v = s;
     r = f;
     K = o;
    }
   } else {
    v = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[r >> 0] | 0) == 46) {
   f = r + 1 | 0;
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
   f = r + 2 | 0;
   o = (a[f >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10) if ((a[r + 3 >> 0] | 0) == 36) {
    c[l + (o << 2) >> 2] = 10;
    s = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = r + 4 | 0;
    break;
   }
   if (n | 0) {
    m = -1;
    break a;
   }
   if (M) {
    J = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    s = c[J >> 2] | 0;
    c[g >> 2] = J + 4;
   } else s = 0;
  } else {
   s = -1;
   f = r;
  } while (0);
  t = 0;
  while (1) {
   o = (a[f >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = f + 1 | 0;
   o = a[10809 + (t * 58 | 0) + o >> 0] | 0;
   r = o & 255;
   if ((r + -1 | 0) >>> 0 < 8) {
    f = p;
    t = r;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = r;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ca;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   xc(ca, r, g);
  } while (0);
  if ((L | 0) == 52) {
   L = 0;
   if (!M) {
    o = w;
    y = J;
    continue;
   }
  }
  u = a[f >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = v & -65537;
  I = (v & 8192 | 0) == 0 ? v : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 1:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 2:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   case 3:
    {
     b[c[ca >> 2] >> 1] = m;
     o = w;
     y = J;
     continue a;
    }
   case 4:
    {
     a[c[ca >> 2] >> 0] = m;
     o = w;
     y = J;
     continue a;
    }
   case 6:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 7:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   default:
    {
     o = w;
     y = J;
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
    p = ca;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) f = N; else {
     f = N;
     do {
      f = f + -1 | 0;
      a[f >> 0] = o & 7 | 48;
      o = fo(o | 0, p | 0, 3) | 0;
      p = D;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     r = 11289;
     L = 77;
    } else {
     t = V - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     r = 11289;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     f = bo(0, 0, f | 0, o | 0) | 0;
     o = D;
     p = ca;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     r = 11289;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     r = I & 1;
     p = r;
     r = (r | 0) == 0 ? 11289 : 11291;
     L = 76;
    } else {
     p = 1;
     r = 11290;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    r = 11289;
    L = 76;
    break;
   }
  case 99:
   {
    a[W >> 0] = c[ca >> 2];
    f = W;
    u = 1;
    w = 0;
    v = 11289;
    o = N;
    break;
   }
  case 109:
   {
    o = zc(c[(Qb() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[ca >> 2] | 0;
    o = o | 0 ? o : 13191;
    L = 82;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[ca >> 2];
    c[X >> 2] = 0;
    c[ca >> 2] = ha;
    f = ha;
    s = -1;
    L = 86;
    break;
   }
  case 83:
   {
    f = c[ca >> 2] | 0;
    if (!s) {
     Bc(e, 32, K, 0, I);
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
    q = +h[ca >> 3];
    c[fa >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) < 0) {
     q = -q;
     G = 1;
     H = 13198;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 13199 : 13204;
    } else {
     G = 1;
     H = 13201;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +Ec(q, fa) * 2.0;
     o = x != 0.0;
     if (o) c[fa >> 2] = (c[fa >> 2] | 0) + -1;
     C = u | 32;
     if ((C | 0) == 97) {
      v = u & 32;
      y = (v | 0) == 0 ? H : H + 9 | 0;
      w = G | 2;
      f = 12 - s | 0;
      do if (s >>> 0 > 11 | (f | 0) == 0) q = x; else {
       q = 8.0;
       do {
        f = f + -1 | 0;
        q = q * 16.0;
       } while ((f | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-x - q));
        break;
       } else {
        q = x + q - q;
        break;
       }
      } while (0);
      o = c[fa >> 2] | 0;
      f = (o | 0) < 0 ? 0 - o | 0 : o;
      f = yc(f, ((f | 0) < 0) << 31 >> 31, _) | 0;
      if ((f | 0) == (_ | 0)) {
       a[aa >> 0] = 48;
       f = aa;
      }
      a[f + -1 >> 0] = (o >> 31 & 2) + 43;
      t = f + -2 | 0;
      a[t >> 0] = u + 15;
      r = (s | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = ea;
      while (1) {
       H = ~~q;
       f = o + 1 | 0;
       a[o >> 0] = d[11273 + H >> 0] | v;
       q = (q - +(H | 0)) * 16.0;
       do if ((f - Y | 0) == 1) {
        if (p & (r & q == 0.0)) break;
        a[f >> 0] = 46;
        f = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = f;
      }
      p = t;
      s = (s | 0) != 0 & (P + f | 0) < (s | 0) ? Q + s - p | 0 : O - p + f | 0;
      r = s + w | 0;
      Bc(e, 32, K, r, I);
      if (!(c[e >> 2] & 32)) vc(y, w, e) | 0;
      Bc(e, 48, K, r, I ^ 65536);
      o = f - Y | 0;
      if (!(c[e >> 2] & 32)) vc(ea, o, e) | 0;
      f = ba - p | 0;
      Bc(e, 48, s - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) vc(t, f, e) | 0;
      Bc(e, 32, K, r, I ^ 8192);
      f = (r | 0) < (K | 0) ? K : r;
      break;
     }
     f = (s | 0) < 0 ? 6 : s;
     if (o) {
      o = (c[fa >> 2] | 0) + -28 | 0;
      c[fa >> 2] = o;
      q = x * 268435456.0;
     } else {
      q = x;
      o = c[fa >> 2] | 0;
     }
     F = (o | 0) < 0 ? da : R;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[fa >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = ho(c[r >> 2] | 0, 0, t | 0) | 0;
         B = eo(B | 0, D | 0, o | 0, 0) | 0;
         o = D;
         A = qo(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = po(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[fa >> 2] | 0) - t | 0;
       c[fa >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((f + 25 | 0) / 9 | 0) + 1 | 0;
      z = (C | 0) == 102;
      v = r;
      while (1) {
       w = 0 - o | 0;
       w = (w | 0) > 9 ? 9 : w;
       do if (v >>> 0 < p >>> 0) {
        o = (1 << w) + -1 | 0;
        s = 1e9 >>> w;
        r = 0;
        t = v;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> w) + r;
         r = $(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[fa >> 2] | 0) + w | 0;
       c[fa >> 2] = o;
       if ((o | 0) >= 0) {
        z = r;
        break;
       } else v = r;
      }
     } else z = r;
     do if (z >>> 0 < p >>> 0) {
      o = (E - z >> 2) * 9 | 0;
      s = c[z >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (C | 0) == 103;
     B = (f | 0) != 0;
     r = f - ((C | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      r = F + 4 + (((t | 0) / 9 | 0) + -1024 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      w = c[r >> 2] | 0;
      y = (w >>> 0) % (s >>> 0) | 0;
      t = (r + 4 | 0) == (p | 0);
      do if (t & (y | 0) == 0) s = z; else {
       x = (((w >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       v = (s | 0) / 2 | 0;
       if (y >>> 0 < v >>> 0) q = .5; else q = t & (y | 0) == (v | 0) ? 1.0 : 1.5;
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        x = -x;
        q = -q;
       } while (0);
       t = w - y | 0;
       c[r >> 2] = t;
       if (!(x + q != x)) {
        s = z;
        break;
       }
       C = t + s | 0;
       c[r >> 2] = C;
       if (C >>> 0 > 999999999) {
        o = z;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         C = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = C;
         if (C >>> 0 > 999999999) r = s; else {
          v = o;
          r = s;
          break;
         }
        }
       } else v = z;
       o = (E - v >> 2) * 9 | 0;
       t = c[v >> 2] | 0;
       if (t >>> 0 < 10) {
        s = v;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = v;
      } while (0);
      C = r + 4 | 0;
      z = s;
      p = p >>> 0 > C >>> 0 ? C : p;
     }
     w = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= z >>> 0) {
       y = 0;
       C = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       y = 1;
       C = p;
       break;
      }
     }
     do if (A) {
      f = (B & 1 ^ 1) + f | 0;
      if ((f | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       f = f + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       f = f + -1 | 0;
      }
      p = I & 8;
      if (p | 0) break;
      do if (y) {
       p = c[C + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (!((p >>> 0) % (s >>> 0) | 0 | 0));
      } else r = 9; while (0);
      p = ((C - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     v = f | p;
     s = (v | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? w : o;
      r = yc(r, ((r | 0) < 0) << 31 >> 31, _) | 0;
      if ((ba - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while ((ba - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = ba - E | 0;
      u = E;
     }
     w = G + 1 + f + s + o | 0;
     Bc(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) vc(H, G, e) | 0;
     Bc(e, 48, K, w, I ^ 65536);
     do if (t) {
      r = z >>> 0 > F >>> 0 ? F : z;
      o = r;
      do {
       p = yc(c[o >> 2] | 0, 0, S) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (S | 0)) break;
        a[U >> 0] = 48;
        p = U;
       } else {
        if (p >>> 0 <= ea >>> 0) break;
        co(ea | 0, 48, p - Y | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) vc(p, T - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       vc(13233, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < C >>> 0) {
       p = o;
       while (1) {
        o = yc(c[p >> 2] | 0, 0, S) | 0;
        if (o >>> 0 > ea >>> 0) {
         co(ea | 0, 48, o - Y | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        }
        if (!(c[e >> 2] & 32)) vc(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < C >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      Bc(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? C : z + 4 | 0;
      if ((f | 0) > -1) {
       s = (p | 0) == 0;
       r = z;
       do {
        o = yc(c[r >> 2] | 0, 0, S) | 0;
        if ((o | 0) == (S | 0)) {
         a[U >> 0] = 48;
         o = U;
        }
        do if ((r | 0) == (z | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) vc(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         vc(13233, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= ea >>> 0) break;
         co(ea | 0, 48, o + Z | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        } while (0);
        p = T - o | 0;
        if (!(c[e >> 2] & 32)) vc(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      Bc(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      vc(u, ba - u | 0, e) | 0;
     } while (0);
     Bc(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     Bc(e, 32, K, r, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      vc(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) vc(s ? (t ? 13225 : 13229) : t ? 13217 : 13221, 3, e) | 0;
     Bc(e, 32, K, r, I ^ 8192);
     f = (r | 0) < (K | 0) ? K : r;
    } while (0);
    o = f;
    y = J;
    continue a;
   }
  default:
   {
    f = y;
    p = I;
    u = s;
    w = 0;
    v = 11289;
    o = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ca;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   r = u & 32;
   if ((o | 0) == 0 & (p | 0) == 0) {
    f = N;
    o = t;
    t = 0;
    r = 11289;
    L = 77;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[11273 + (o & 15) >> 0] | r;
     o = fo(o | 0, p | 0, 4) | 0;
     p = D;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ca;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     r = 11289;
     L = 77;
    } else {
     o = t;
     t = 2;
     r = 11289 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = yc(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Ac(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 11289;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    r = c[t >> 2] | 0;
    if (!r) break;
    o = Cc(ga, r) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   Bc(e, 32, K, p, I);
   if (!p) {
    f = 0;
    L = 97;
   } else {
    r = 0;
    while (1) {
     o = c[f >> 2] | 0;
     if (!o) {
      f = p;
      L = 97;
      break g;
     }
     o = Cc(ga, o) | 0;
     r = o + r | 0;
     if ((r | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) vc(ga, o, e) | 0;
     if (r >>> 0 >= p >>> 0) {
      f = p;
      L = 97;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 97) {
   L = 0;
   Bc(e, 32, K, f, I ^ 8192);
   o = (K | 0) > (f | 0) ? K : f;
   y = J;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (s | 0) > -1 ? o & -65537 : o;
   o = ca;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((s | 0) != 0 | o) {
    u = (o & 1 ^ 1) + (V - f) | 0;
    u = (s | 0) > (u | 0) ? s : u;
    w = t;
    v = r;
    o = N;
   } else {
    f = N;
    u = 0;
    w = t;
    v = r;
    o = N;
   }
  }
  t = o - f | 0;
  r = (u | 0) < (t | 0) ? t : u;
  s = w + r | 0;
  o = (K | 0) < (s | 0) ? s : K;
  Bc(e, 32, o, s, p);
  if (!(c[e >> 2] & 32)) vc(v, w, e) | 0;
  Bc(e, 48, o, s, p ^ 65536);
  Bc(e, 48, r, t, 0);
  if (!(c[e >> 2] & 32)) vc(f, t, e) | 0;
  Bc(e, 32, o, s, p ^ 8192);
  y = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   xc(j + (m << 3) | 0, n, g);
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

function ic(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0.0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0.0, r = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0.0;
 L = i;
 i = i + 512 | 0;
 H = L;
 switch (e | 0) {
 case 0:
  {
   K = 24;
   I = -149;
   z = 4;
   break;
  }
 case 1:
  {
   K = 53;
   I = -1074;
   z = 4;
   break;
  }
 case 2:
  {
   K = 53;
   I = -1074;
   z = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((z | 0) == 4) {
  E = b + 4 | 0;
  C = b + 100 | 0;
  do {
   e = c[E >> 2] | 0;
   if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
    c[E >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = bc(b) | 0;
  } while ((ec(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[E >> 2] | 0;
    if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = e + 1;
     e = d[e >> 0] | 0;
     J = h;
     break b;
    } else {
     e = bc(b) | 0;
     J = h;
     break b;
    }
   }
  default:
   J = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[10800 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[E >> 2] | 0;
    if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = bc(b) | 0;
     break;
    }
   } while (0);
   e = e + 1 | 0;
  } while (e >>> 0 < 8);
  c : do switch (e | 0) {
  case 8:
   break;
  case 3:
   {
    z = 23;
    break;
   }
  default:
   {
    k = (f | 0) != 0;
    if (k & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     z = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[13225 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = bc(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[E >> 2] | 0;
      if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
       c[E >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = bc(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[C >> 2] | 0)) {
        g = s;
        break a;
       }
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       g = s;
       break a;
      }
      while (1) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = bc(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26)) if (!((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26)) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = s;
       break a;
      }
      h = (c[C >> 2] | 0) == 0;
      if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
      if (!k) {
       c[(Qb() | 0) >> 2] = 22;
       $b(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = s;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (!e) {
        g = s;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = bc(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[C >> 2] | 0)) {
         e = 48;
         break;
        }
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        e = 48;
        break;
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 0;
       } else {
        e = bc(b) | 0;
        k = 0;
       }
       e : while (1) {
        switch (e | 0) {
        case 46:
         {
          z = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          y = 0;
          l = 0;
          x = 0;
          h = 0;
          n = k;
          o = 0;
          w = 0;
          m = 1.0;
          k = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
         k = 1;
         continue;
        } else {
         e = bc(b) | 0;
         k = 1;
         continue;
        }
       }
       if ((z | 0) == 74) {
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = bc(b) | 0;
        if ((e | 0) == 48) {
         k = 0;
         h = 0;
         do {
          e = c[E >> 2] | 0;
          if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
           c[E >> 2] = e + 1;
           e = d[e >> 0] | 0;
          } else e = bc(b) | 0;
          k = eo(k | 0, h | 0, -1, -1) | 0;
          h = D;
         } while ((e | 0) == 48);
         y = 0;
         l = 0;
         x = k;
         n = 1;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        } else {
         y = 0;
         l = 0;
         x = 0;
         h = 0;
         n = k;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        }
       }
       while (1) {
        r = e + -48 | 0;
        p = e | 32;
        if (r >>> 0 < 10) z = 86; else {
         u = (e | 0) == 46;
         if (!(u | (p + -97 | 0) >>> 0 < 6)) {
          p = x;
          r = y;
          break;
         }
         if (u) if (!o) {
          u = l;
          h = y;
          r = y;
          o = 1;
          p = w;
          j = m;
         } else {
          p = x;
          r = y;
          e = 46;
          break;
         } else z = 86;
        }
        if ((z | 0) == 86) {
         z = 0;
         e = (e | 0) > 57 ? p + -87 | 0 : r;
         do if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 8) {
          p = w;
          j = m;
          k = e + (k << 4) | 0;
         } else {
          if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 14) {
           v = m * .0625;
           p = w;
           j = v;
           g = g + v * +(e | 0);
           break;
          }
          if ((w | 0) != 0 | (e | 0) == 0) {
           p = w;
           j = m;
          } else {
           p = 1;
           j = m;
           g = g + m * .5;
          }
         } while (0);
         l = eo(l | 0, y | 0, 1, 0) | 0;
         u = x;
         r = D;
         n = 1;
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         y = r;
         x = u;
         e = d[e >> 0] | 0;
         w = p;
         m = j;
         continue;
        } else {
         y = r;
         x = u;
         e = bc(b) | 0;
         w = p;
         m = j;
         continue;
        }
       }
       if (!n) {
        e = (c[C >> 2] | 0) == 0;
        if (!e) c[E >> 2] = (c[E >> 2] | 0) + -1;
        if (!f) $b(b, 0); else if (!e) {
         e = c[E >> 2] | 0;
         c[E >> 2] = e + -1;
         if (o | 0) c[E >> 2] = e + -2;
        }
        g = +(J | 0) * 0.0;
        break a;
       }
       n = (o | 0) == 0;
       o = n ? l : p;
       n = n ? r : h;
       if ((r | 0) < 0 | (r | 0) == 0 & l >>> 0 < 8) {
        h = r;
        do {
         k = k << 4;
         l = eo(l | 0, h | 0, 1, 0) | 0;
         h = D;
        } while ((h | 0) < 0 | (h | 0) == 0 & l >>> 0 < 8);
       }
       if ((e | 32 | 0) == 112) {
        h = jc(b, f) | 0;
        e = D;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          $b(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[C >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[E >> 2] = (c[E >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[C >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       H = ho(o | 0, n | 0, 2) | 0;
       H = eo(H | 0, D | 0, -32, -1) | 0;
       e = eo(H | 0, D | 0, h | 0, e | 0) | 0;
       h = D;
       if (!k) {
        g = +(J | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - I | 0) >>> 0) {
        c[(Qb() | 0) >> 2] = 34;
        g = +(J | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break a;
       }
       H = I + -106 | 0;
       G = ((H | 0) < 0) << 31 >> 31;
       if ((h | 0) < (G | 0) | (h | 0) == (G | 0) & e >>> 0 < H >>> 0) {
        c[(Qb() | 0) >> 2] = 34;
        g = +(J | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((k | 0) > -1) {
        do {
         G = !(g >= .5);
         H = G & 1 | k << 1;
         k = H ^ 1;
         g = g + (G ? g : g + -1.0);
         e = eo(e | 0, h | 0, -1, -1) | 0;
         h = D;
        } while ((H | 0) > -1);
        l = e;
        m = g;
       } else {
        l = e;
        m = g;
       }
       e = bo(32, 0, I | 0, ((I | 0) < 0) << 31 >> 31 | 0) | 0;
       e = eo(l | 0, h | 0, e | 0, D | 0) | 0;
       I = D;
       if (0 > (I | 0) | 0 == (I | 0) & K >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        z = 127;
       } else z = 125; else {
        e = K;
        z = 125;
       }
       if ((z | 0) == 125) if ((e | 0) < 53) z = 127; else {
        h = e;
        j = +(J | 0);
        g = 0.0;
       }
       if ((z | 0) == 127) {
        g = +(J | 0);
        h = e;
        j = g;
        g = +lc(+kc(1.0, 84 - e | 0), g);
       }
       K = (k & 1 | 0) == 0 & (m != 0.0 & (h | 0) < 32);
       g = j * (K ? 0.0 : m) + (g + j * +(((K & 1) + k | 0) >>> 0)) - g;
       if (!(g != 0.0)) c[(Qb() | 0) >> 2] = 34;
       g = +nc(g, l);
       break a;
      } else e = h; while (0);
      F = I + K | 0;
      G = 0 - F | 0;
      k = 0;
      f : while (1) {
       switch (e | 0) {
       case 46:
        {
         z = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         h = 0;
         p = 0;
         o = 0;
         break f;
        }
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 1;
        continue;
       } else {
        e = bc(b) | 0;
        k = 1;
        continue;
       }
      }
      if ((z | 0) == 138) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = bc(b) | 0;
       if ((e | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         h = eo(h | 0, e | 0, -1, -1) | 0;
         k = D;
         e = c[E >> 2] | 0;
         if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
          c[E >> 2] = e + 1;
          e = d[e >> 0] | 0;
         } else e = bc(b) | 0;
         if ((e | 0) == 48) e = k; else {
          p = k;
          k = 1;
          o = 1;
          break;
         }
        }
       } else {
        h = 0;
        p = 0;
        o = 1;
       }
      }
      c[H >> 2] = 0;
      n = e + -48 | 0;
      l = (e | 0) == 46;
      g : do if (l | n >>> 0 < 10) {
       B = H + 496 | 0;
       y = 0;
       u = 0;
       w = l;
       A = p;
       r = k;
       z = o;
       k = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (w) if (!z) {
         h = y;
         p = u;
         z = 1;
        } else {
         p = A;
         e = y;
         n = u;
         break h;
        } else {
         w = eo(y | 0, u | 0, 1, 0) | 0;
         u = D;
         x = (e | 0) != 48;
         if ((l | 0) >= 125) {
          if (!x) {
           p = A;
           y = w;
           break;
          }
          c[B >> 2] = c[B >> 2] | 1;
          p = A;
          y = w;
          break;
         }
         p = H + (l << 2) | 0;
         if (k) n = e + -48 + ((c[p >> 2] | 0) * 10 | 0) | 0;
         c[p >> 2] = n;
         k = k + 1 | 0;
         n = (k | 0) == 9;
         p = A;
         y = w;
         r = 1;
         k = n ? 0 : k;
         l = (n & 1) + l | 0;
         o = x ? w : o;
        } while (0);
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = bc(b) | 0;
        n = e + -48 | 0;
        w = (e | 0) == 46;
        if (!(w | n >>> 0 < 10)) {
         n = z;
         z = 161;
         break g;
        } else A = p;
       }
       r = (r | 0) != 0;
       z = 169;
      } else {
       y = 0;
       u = 0;
       r = k;
       n = o;
       k = 0;
       l = 0;
       o = 0;
       z = 161;
      } while (0);
      do if ((z | 0) == 161) {
       B = (n | 0) == 0;
       h = B ? y : h;
       p = B ? u : p;
       r = (r | 0) != 0;
       if (!((e | 32 | 0) == 101 & r)) if ((e | 0) > -1) {
        e = y;
        n = u;
        z = 169;
        break;
       } else {
        e = y;
        n = u;
        z = 171;
        break;
       }
       n = jc(b, f) | 0;
       e = D;
       if ((n | 0) == 0 & (e | 0) == -2147483648) {
        if (!f) {
         $b(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[C >> 2] | 0)) {
         n = 0;
         e = 0;
        } else {
         c[E >> 2] = (c[E >> 2] | 0) + -1;
         n = 0;
         e = 0;
        }
       }
       h = eo(n | 0, e | 0, h | 0, p | 0) | 0;
       r = y;
       p = D;
       n = u;
       z = 173;
      } while (0);
      if ((z | 0) == 169) if (!(c[C >> 2] | 0)) z = 171; else {
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (r) {
        r = e;
        z = 173;
       } else z = 172;
      }
      if ((z | 0) == 171) if (r) {
       r = e;
       z = 173;
      } else z = 172;
      do if ((z | 0) == 172) {
       c[(Qb() | 0) >> 2] = 22;
       $b(b, 0);
       g = 0.0;
      } else if ((z | 0) == 173) {
       e = c[H >> 2] | 0;
       if (!e) {
        g = +(J | 0) * 0.0;
        break;
       }
       if (((n | 0) < 0 | (n | 0) == 0 & r >>> 0 < 10) & ((h | 0) == (r | 0) & (p | 0) == (n | 0))) if (K >>> 0 > 30 | (e >>> K | 0) == 0) {
        g = +(J | 0) * +(e >>> 0);
        break;
       }
       b = (I | 0) / -2 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) > (E | 0) | (p | 0) == (E | 0) & h >>> 0 > b >>> 0) {
        c[(Qb() | 0) >> 2] = 34;
        g = +(J | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break;
       }
       b = I + -106 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) < (E | 0) | (p | 0) == (E | 0) & h >>> 0 < b >>> 0) {
        c[(Qb() | 0) >> 2] = 34;
        g = +(J | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (k) {
        if ((k | 0) < 9) {
         n = H + (l << 2) | 0;
         e = c[n >> 2] | 0;
         do {
          e = e * 10 | 0;
          k = k + 1 | 0;
         } while ((k | 0) != 9);
         c[n >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9) if ((o | 0) <= (h | 0) & (h | 0) < 18) {
        if ((h | 0) == 9) {
         g = +(J | 0) * +((c[H >> 2] | 0) >>> 0);
         break;
        }
        if ((h | 0) < 9) {
         g = +(J | 0) * +((c[H >> 2] | 0) >>> 0) / +(c[3052 + (8 - h << 2) >> 2] | 0);
         break;
        }
        b = K + 27 + ($(h, -3) | 0) | 0;
        e = c[H >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(J | 0) * +(e >>> 0) * +(c[3052 + (h + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (h | 0) % 9 | 0;
       if (!e) {
        k = 0;
        e = 0;
       } else {
        r = (h | 0) > -1 ? e : e + 9 | 0;
        n = c[3052 + (8 - r << 2) >> 2] | 0;
        if (!l) {
         k = 0;
         l = 0;
        } else {
         o = 1e9 / (n | 0) | 0;
         k = 0;
         e = 0;
         p = 0;
         do {
          C = H + (p << 2) | 0;
          E = c[C >> 2] | 0;
          b = ((E >>> 0) / (n >>> 0) | 0) + e | 0;
          c[C >> 2] = b;
          e = $((E >>> 0) % (n >>> 0) | 0, o) | 0;
          b = (p | 0) == (k | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          h = b ? h + -9 | 0 : h;
          k = b ? p & 127 : k;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[H + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        }
        e = 0;
        h = 9 - r + h | 0;
       }
       i : while (1) {
        u = (h | 0) < 18;
        w = (h | 0) == 18;
        x = H + (k << 2) | 0;
        do {
         if (!u) {
          if (!w) {
           y = l;
           break i;
          }
          if ((c[x >> 2] | 0) >>> 0 >= 9007199) {
           h = 18;
           y = l;
           break i;
          }
         }
         n = 0;
         o = l + 127 | 0;
         while (1) {
          r = o & 127;
          p = H + (r << 2) | 0;
          o = ho(c[p >> 2] | 0, 0, 29) | 0;
          o = eo(o | 0, D | 0, n | 0, 0) | 0;
          n = D;
          if (n >>> 0 > 0 | (n | 0) == 0 & o >>> 0 > 1e9) {
           b = po(o | 0, n | 0, 1e9, 0) | 0;
           o = qo(o | 0, n | 0, 1e9, 0) | 0;
           n = b;
          } else n = 0;
          c[p >> 2] = o;
          b = (r | 0) == (k | 0);
          l = (r | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? r : l;
          if (b) break; else o = r + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((n | 0) == 0);
        k = k + 127 & 127;
        if ((k | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = H + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[H + (b << 2) >> 2];
         l = b;
        }
        c[H + (k << 2) >> 2] = n;
        h = h + 9 | 0;
       }
       j : while (1) {
        l = y + 1 & 127;
        x = H + ((y + 127 & 127) << 2) | 0;
        while (1) {
         u = (h | 0) == 18;
         w = (h | 0) > 27 ? 9 : 1;
         r = u ^ 1;
         while (1) {
          o = k & 127;
          p = (o | 0) == (y | 0);
          do if (p) z = 219; else {
           n = c[H + (o << 2) >> 2] | 0;
           if (n >>> 0 < 9007199) {
            z = 219;
            break;
           }
           if (n >>> 0 > 9007199) break;
           n = k + 1 & 127;
           if ((n | 0) == (y | 0)) {
            z = 219;
            break;
           }
           n = c[H + (n << 2) >> 2] | 0;
           if (n >>> 0 < 254740991) {
            z = 219;
            break;
           }
           if (!(n >>> 0 > 254740991 | r)) {
            h = o;
            l = y;
            break j;
           }
          } while (0);
          if ((z | 0) == 219) {
           z = 0;
           if (u) {
            z = 220;
            break j;
           }
          }
          e = e + w | 0;
          if ((k | 0) == (y | 0)) k = y; else break;
         }
         r = (1 << w) + -1 | 0;
         u = 1e9 >>> w;
         o = k;
         n = 0;
         p = k;
         while (1) {
          E = H + (p << 2) | 0;
          b = c[E >> 2] | 0;
          k = (b >>> w) + n | 0;
          c[E >> 2] = k;
          n = $(b & r, u) | 0;
          k = (p | 0) == (o | 0) & (k | 0) == 0;
          p = p + 1 & 127;
          h = k ? h + -9 | 0 : h;
          k = k ? p : o;
          if ((p | 0) == (y | 0)) break; else o = k;
         }
         if (!n) continue;
         if ((l | 0) != (k | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[H + (y << 2) >> 2] = n;
        y = l;
       }
       if ((z | 0) == 220) if (p) {
        c[H + (l + -1 << 2) >> 2] = 0;
        h = y;
       } else {
        h = o;
        l = y;
       }
       g = +((c[H + (h << 2) >> 2] | 0) >>> 0);
       h = k + 1 & 127;
       if ((h | 0) == (l | 0)) {
        l = k + 2 & 127;
        c[H + (l + -1 << 2) >> 2] = 0;
       }
       v = +(J | 0);
       j = v * (g * 1.0e9 + +((c[H + (h << 2) >> 2] | 0) >>> 0));
       u = e + 53 | 0;
       p = u - I | 0;
       r = (p | 0) < (K | 0);
       h = r & 1;
       o = r ? ((p | 0) < 0 ? 0 : p) : K;
       if ((o | 0) < 53) {
        M = +lc(+kc(1.0, 105 - o | 0), j);
        m = +oc(j, +kc(1.0, 53 - o | 0));
        q = M;
        g = m;
        m = M + (j - m);
       } else {
        q = 0.0;
        g = 0.0;
        m = j;
       }
       n = k + 2 & 127;
       do if ((n | 0) == (l | 0)) j = g; else {
        n = c[H + (n << 2) >> 2] | 0;
        do if (n >>> 0 < 5e8) {
         if (!n) if ((k + 3 & 127 | 0) == (l | 0)) break;
         g = v * .25 + g;
        } else {
         if (n >>> 0 > 5e8) {
          g = v * .75 + g;
          break;
         }
         if ((k + 3 & 127 | 0) == (l | 0)) {
          g = v * .5 + g;
          break;
         } else {
          g = v * .75 + g;
          break;
         }
        } while (0);
        if ((53 - o | 0) <= 1) {
         j = g;
         break;
        }
        if (+oc(g, 1.0) != 0.0) {
         j = g;
         break;
        }
        j = g + 1.0;
       } while (0);
       g = m + j - q;
       do if ((u & 2147483647 | 0) > (-2 - F | 0)) {
        if (+O(+g) >= 9007199254740992.0) {
         h = r & (o | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (G | 0)) if (!(j != 0.0 & (h | 0) != 0)) break;
        c[(Qb() | 0) >> 2] = 34;
       } while (0);
       g = +nc(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[C >> 2] | 0) c[E >> 2] = (c[E >> 2] | 0) + -1;
      c[(Qb() | 0) >> 2] = 22;
      $b(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((z | 0) == 23) {
   h = (c[C >> 2] | 0) == 0;
   if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +(J | 0) * t;
 } while (0);
 i = L;
 return +g;
}

function ck(e, f, g, h, j, k, l, m, n, o, p) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 var q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0;
 ba = i;
 i = i + 512 | 0;
 N = ba + 88 | 0;
 t = ba + 96 | 0;
 aa = ba + 80 | 0;
 R = ba + 72 | 0;
 Q = ba + 68 | 0;
 S = ba + 500 | 0;
 O = ba + 497 | 0;
 T = ba + 496 | 0;
 X = ba + 56 | 0;
 $ = ba + 44 | 0;
 Z = ba + 32 | 0;
 Y = ba + 20 | 0;
 _ = ba + 8 | 0;
 P = ba + 4 | 0;
 V = ba;
 c[N >> 2] = p;
 c[aa >> 2] = t;
 W = aa + 4 | 0;
 c[W >> 2] = 107;
 c[R >> 2] = t;
 c[Q >> 2] = t + 400;
 p = 0;
 while (1) {
  if ((p | 0) == 3) break;
  c[X + (p << 2) >> 2] = 0;
  p = p + 1 | 0;
 }
 p = 0;
 while (1) {
  if ((p | 0) == 3) break;
  c[$ + (p << 2) >> 2] = 0;
  p = p + 1 | 0;
 }
 p = 0;
 while (1) {
  if ((p | 0) == 3) break;
  c[Z + (p << 2) >> 2] = 0;
  p = p + 1 | 0;
 }
 p = 0;
 while (1) {
  if ((p | 0) == 3) break;
  c[Y + (p << 2) >> 2] = 0;
  p = p + 1 | 0;
 }
 p = 0;
 while (1) {
  if ((p | 0) == 3) break;
  c[_ + (p << 2) >> 2] = 0;
  p = p + 1 | 0;
 }
 dk(g, h, S, O, T, X, $, Z, Y, P);
 c[o >> 2] = c[n >> 2];
 G = m + 8 | 0;
 H = Z + 4 | 0;
 I = Y + 4 | 0;
 J = Y + 8 | 0;
 K = Y + 1 | 0;
 L = Z + 8 | 0;
 M = Z + 1 | 0;
 x = (j & 512 | 0) != 0;
 y = $ + 8 | 0;
 z = $ + 1 | 0;
 A = $ + 4 | 0;
 B = _ + 4 | 0;
 C = _ + 8 | 0;
 D = _ + 1 | 0;
 E = S + 3 | 0;
 F = X + 4 | 0;
 w = 0;
 s = 0;
 a : while (1) {
  if (w >>> 0 >= 4) {
   U = 218;
   break;
  }
  p = c[e >> 2] | 0;
  do if (!p) p = 0; else if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
   c[e >> 2] = 0;
   p = 0;
   break;
  } else {
   p = c[e >> 2] | 0;
   break;
  } while (0);
  p = (p | 0) == 0;
  m = c[f >> 2] | 0;
  do if (!m) U = 28; else {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (p) break; else {
    U = 218;
    break a;
   }
   if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[f >> 2] = 0;
    U = 28;
    break;
   } else if (p) break; else {
    U = 218;
    break a;
   }
  } while (0);
  if ((U | 0) == 28) {
   U = 0;
   if (p) {
    U = 218;
    break;
   } else m = 0;
  }
  b : do switch (a[S + w >> 0] | 0) {
  case 1:
   {
    if ((w | 0) != 3) {
     p = c[e >> 2] | 0;
     g = c[p + 12 >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 <= -1) {
      U = 42;
      break a;
     }
     if (!(b[(c[G >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) {
      U = 42;
      break a;
     }
     p = c[e >> 2] | 0;
     g = p + 12 | 0;
     h = c[g >> 2] | 0;
     if ((h | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
      c[g >> 2] = h + 1;
      p = d[h >> 0] | 0;
     }
     oe(_, p & 255);
     p = m;
     g = m;
     U = 44;
    }
    break;
   }
  case 0:
   {
    if ((w | 0) != 3) {
     p = m;
     g = m;
     U = 44;
    }
    break;
   }
  case 3:
   {
    h = a[Z >> 0] | 0;
    p = (h & 1) == 0 ? (h & 255) >>> 1 : c[H >> 2] | 0;
    g = a[Y >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[I >> 2] | 0;
    if ((p | 0) != (0 - g | 0)) {
     j = (p | 0) == 0;
     q = c[e >> 2] | 0;
     r = c[q + 12 >> 2] | 0;
     p = c[q + 16 >> 2] | 0;
     m = (r | 0) == (p | 0);
     if (j | (g | 0) == 0) {
      if (m) p = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[r >> 0] | 0;
      p = p & 255;
      if (j) {
       if (p << 24 >> 24 != (a[((a[Y >> 0] & 1) == 0 ? K : c[J >> 2] | 0) >> 0] | 0)) break b;
       p = c[e >> 2] | 0;
       m = p + 12 | 0;
       g = c[m >> 2] | 0;
       if ((g | 0) == (c[p + 16 >> 2] | 0)) sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
       a[l >> 0] = 1;
       v = a[Y >> 0] | 0;
       s = ((v & 1) == 0 ? (v & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? Y : s;
       break b;
      }
      if (p << 24 >> 24 != (a[((a[Z >> 0] & 1) == 0 ? M : c[L >> 2] | 0) >> 0] | 0)) {
       a[l >> 0] = 1;
       break b;
      }
      p = c[e >> 2] | 0;
      m = p + 12 | 0;
      g = c[m >> 2] | 0;
      if ((g | 0) == (c[p + 16 >> 2] | 0)) sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
      v = a[Z >> 0] | 0;
      s = ((v & 1) == 0 ? (v & 255) >>> 1 : c[H >> 2] | 0) >>> 0 > 1 ? Z : s;
      break b;
     }
     if (m) {
      j = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      p = c[e >> 2] | 0;
      h = a[Z >> 0] | 0;
      q = p;
      g = c[p + 12 >> 2] | 0;
      p = c[p + 16 >> 2] | 0;
     } else {
      j = d[r >> 0] | 0;
      g = r;
     }
     m = q + 12 | 0;
     p = (g | 0) == (p | 0);
     if ((j & 255) << 24 >> 24 == (a[((h & 1) == 0 ? M : c[L >> 2] | 0) >> 0] | 0)) {
      if (p) sb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[m >> 2] = g + 1;
      v = a[Z >> 0] | 0;
      s = ((v & 1) == 0 ? (v & 255) >>> 1 : c[H >> 2] | 0) >>> 0 > 1 ? Z : s;
      break b;
     }
     if (p) p = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[((a[Y >> 0] & 1) == 0 ? K : c[J >> 2] | 0) >> 0] | 0)) {
      U = 98;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
     a[l >> 0] = 1;
     v = a[Y >> 0] | 0;
     s = ((v & 1) == 0 ? (v & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? Y : s;
    }
    break;
   }
  case 2:
   {
    if (!(w >>> 0 < 2 | (s | 0) != 0)) if (!(x | (w | 0) == 2 & (a[E >> 0] | 0) != 0)) {
     s = 0;
     break b;
    }
    r = a[$ >> 0] | 0;
    p = (r & 1) == 0;
    u = c[y >> 2] | 0;
    g = p ? z : u;
    v = g;
    c : do if (!w) {
     h = m;
     g = r;
     p = u;
     j = m;
     m = v;
    } else if ((d[S + (w + -1) >> 0] | 0) < 2) {
     p = g + (p ? (r & 255) >>> 1 : c[A >> 2] | 0) | 0;
     q = v;
     while (1) {
      h = q;
      if ((h | 0) == (p | 0)) break;
      j = a[h >> 0] | 0;
      if (j << 24 >> 24 <= -1) break;
      if (!(b[(c[G >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 8192)) break;
      q = h + 1 | 0;
     }
     j = q - v | 0;
     h = a[_ >> 0] | 0;
     p = (h & 1) == 0;
     h = p ? (h & 255) >>> 1 : c[B >> 2] | 0;
     if (j >>> 0 > h >>> 0) {
      h = m;
      g = r;
      p = u;
      j = m;
      m = v;
     } else {
      h = (p ? D : c[C >> 2] | 0) + h | 0;
      p = h + (0 - j) | 0;
      while (1) {
       if ((p | 0) == (h | 0)) {
        h = m;
        g = r;
        p = u;
        j = m;
        m = q;
        break c;
       }
       if ((a[p >> 0] | 0) != (a[g >> 0] | 0)) {
        h = m;
        g = r;
        p = u;
        j = m;
        m = v;
        break c;
       }
       g = g + 1 | 0;
       p = p + 1 | 0;
      }
     }
    } else {
     h = m;
     g = r;
     p = u;
     j = m;
     m = v;
    } while (0);
    d : while (1) {
     q = (g & 1) == 0;
     p = (q ? z : p) + (q ? (g & 255) >>> 1 : c[A >> 2] | 0) | 0;
     q = m;
     if ((q | 0) == (p | 0)) break;
     p = c[e >> 2] | 0;
     do if (!p) p = 0; else if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
      c[e >> 2] = 0;
      p = 0;
      break;
     } else {
      p = c[e >> 2] | 0;
      break;
     } while (0);
     m = (p | 0) == 0;
     do if (!j) {
      p = h;
      U = 124;
     } else {
      if ((c[j + 12 >> 2] | 0) != (c[j + 16 >> 2] | 0)) if (m) {
       p = h;
       break;
      } else {
       p = q;
       break d;
      }
      if ((sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
       c[f >> 2] = 0;
       p = 0;
       U = 124;
       break;
      } else if (m ^ (h | 0) == 0) {
       p = h;
       j = h;
       break;
      } else {
       p = q;
       break d;
      }
     } while (0);
     if ((U | 0) == 124) {
      U = 0;
      if (m) {
       p = q;
       break;
      } else j = 0;
     }
     m = c[e >> 2] | 0;
     g = c[m + 12 >> 2] | 0;
     if ((g | 0) == (c[m + 16 >> 2] | 0)) m = sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[g >> 0] | 0;
     if ((m & 255) << 24 >> 24 != (a[q >> 0] | 0)) {
      p = q;
      break;
     }
     m = c[e >> 2] | 0;
     g = m + 12 | 0;
     h = c[g >> 2] | 0;
     if ((h | 0) == (c[m + 16 >> 2] | 0)) sb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[g >> 2] = h + 1;
     h = p;
     g = a[$ >> 0] | 0;
     p = c[y >> 2] | 0;
     m = q + 1 | 0;
    }
    if (x) {
     v = a[$ >> 0] | 0;
     u = (v & 1) == 0;
     if ((p | 0) != ((u ? z : c[y >> 2] | 0) + (u ? (v & 255) >>> 1 : c[A >> 2] | 0) | 0)) {
      U = 136;
      break a;
     }
    }
    break;
   }
  case 4:
   {
    r = a[T >> 0] | 0;
    j = m;
    h = m;
    p = 0;
    e : while (1) {
     m = c[e >> 2] | 0;
     do if (!m) m = 0; else if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
      c[e >> 2] = 0;
      m = 0;
      break;
     } else {
      m = c[e >> 2] | 0;
      break;
     } while (0);
     g = (m | 0) == 0;
     do if (!h) {
      m = j;
      U = 147;
     } else {
      if ((c[h + 12 >> 2] | 0) != (c[h + 16 >> 2] | 0)) if (g) {
       m = j;
       q = h;
       break;
      } else {
       m = j;
       break e;
      }
      if ((sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
       c[f >> 2] = 0;
       m = 0;
       U = 147;
       break;
      } else if (g ^ (j | 0) == 0) {
       m = j;
       q = j;
       break;
      } else {
       m = j;
       break e;
      }
     } while (0);
     if ((U | 0) == 147) {
      U = 0;
      if (g) break; else q = 0;
     }
     g = c[e >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) g = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = d[h >> 0] | 0;
     h = g & 255;
     if (h << 24 >> 24 > -1) if (!(b[(c[G >> 2] | 0) + (g << 24 >> 24 << 1) >> 1] & 2048)) U = 157; else {
      g = c[o >> 2] | 0;
      if ((g | 0) == (c[N >> 2] | 0)) {
       ek(n, o, N);
       g = c[o >> 2] | 0;
      }
      c[o >> 2] = g + 1;
      a[g >> 0] = h;
      p = p + 1 | 0;
     } else U = 157;
     if ((U | 0) == 157) {
      U = 0;
      v = a[X >> 0] | 0;
      if (!(h << 24 >> 24 == r << 24 >> 24 & (p | 0 ? (((v & 1) == 0 ? (v & 255) >>> 1 : c[F >> 2] | 0) | 0) != 0 : 0))) break;
      if ((t | 0) == (c[Q >> 2] | 0)) {
       fk(aa, R, Q);
       t = c[R >> 2] | 0;
      }
      v = t + 4 | 0;
      c[R >> 2] = v;
      c[t >> 2] = p;
      t = v;
      p = 0;
     }
     g = c[e >> 2] | 0;
     h = g + 12 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) == (c[g + 16 >> 2] | 0)) {
      sb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      j = m;
      h = q;
      continue;
     } else {
      c[h >> 2] = j + 1;
      j = m;
      h = q;
      continue;
     }
    }
    if (p | 0 ? (c[aa >> 2] | 0) != (t | 0) : 0) {
     if ((t | 0) == (c[Q >> 2] | 0)) {
      fk(aa, R, Q);
      t = c[R >> 2] | 0;
     }
     v = t + 4 | 0;
     c[R >> 2] = v;
     c[t >> 2] = p;
     t = v;
    }
    h = c[P >> 2] | 0;
    f : do if ((h | 0) > 0) {
     p = c[e >> 2] | 0;
     do if (!p) p = 0; else if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
      c[e >> 2] = 0;
      p = 0;
      break;
     } else {
      p = c[e >> 2] | 0;
      break;
     } while (0);
     p = (p | 0) == 0;
     do if (!m) U = 179; else {
      if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
       c[f >> 2] = 0;
       U = 179;
       break;
      }
      if (p) j = m; else {
       U = 184;
       break a;
      }
     } while (0);
     if ((U | 0) == 179) {
      U = 0;
      if (p) {
       U = 184;
       break a;
      } else j = 0;
     }
     p = c[e >> 2] | 0;
     m = c[p + 12 >> 2] | 0;
     if ((m | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[O >> 0] | 0)) {
      U = 184;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) {
      sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0;
      p = j;
      g = j;
     } else {
      c[m >> 2] = g + 1;
      p = j;
      g = j;
     }
     while (1) {
      if ((h | 0) <= 0) break f;
      m = c[e >> 2] | 0;
      do if (!m) m = 0; else if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
       c[e >> 2] = 0;
       m = 0;
       break;
      } else {
       m = c[e >> 2] | 0;
       break;
      } while (0);
      m = (m | 0) == 0;
      do if (!g) U = 199; else {
       if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
        q = p;
        j = g;
        break;
       } else {
        U = 206;
        break a;
       }
       if ((sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) == -1) {
        c[f >> 2] = 0;
        p = 0;
        U = 199;
        break;
       } else if (m ^ (p | 0) == 0) {
        q = p;
        j = p;
        break;
       } else {
        U = 206;
        break a;
       }
      } while (0);
      if ((U | 0) == 199) {
       U = 0;
       if (m) {
        U = 206;
        break a;
       } else {
        q = p;
        j = 0;
       }
      }
      p = c[e >> 2] | 0;
      m = c[p + 12 >> 2] | 0;
      if ((m | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
      if ((p & 255) << 24 >> 24 <= -1) {
       U = 206;
       break a;
      }
      if (!(b[(c[G >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 2048)) {
       U = 206;
       break a;
      }
      if ((c[o >> 2] | 0) == (c[N >> 2] | 0)) ek(n, o, N);
      p = c[e >> 2] | 0;
      m = c[p + 12 >> 2] | 0;
      if ((m | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
      m = c[o >> 2] | 0;
      c[o >> 2] = m + 1;
      a[m >> 0] = p;
      h = h + -1 | 0;
      c[P >> 2] = h;
      p = c[e >> 2] | 0;
      m = p + 12 | 0;
      g = c[m >> 2] | 0;
      if ((g | 0) == (c[p + 16 >> 2] | 0)) {
       sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0;
       p = q;
       g = j;
       continue;
      } else {
       c[m >> 2] = g + 1;
       p = q;
       g = j;
       continue;
      }
     }
    } while (0);
    if ((c[o >> 2] | 0) == (c[n >> 2] | 0)) {
     U = 216;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((U | 0) == 44) while (1) {
   U = 0;
   m = c[e >> 2] | 0;
   do if (!m) m = 0; else if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[e >> 2] = 0;
    m = 0;
    break;
   } else {
    m = c[e >> 2] | 0;
    break;
   } while (0);
   m = (m | 0) == 0;
   do if (!g) U = 54; else {
    if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
     j = p;
     h = g;
     break;
    } else break g;
    if ((sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) == -1) {
     c[f >> 2] = 0;
     p = 0;
     U = 54;
     break;
    } else if (m ^ (p | 0) == 0) {
     j = p;
     h = p;
     break;
    } else break g;
   } while (0);
   if ((U | 0) == 54) {
    U = 0;
    if (m) break g; else {
     j = p;
     h = 0;
    }
   }
   p = c[e >> 2] | 0;
   m = c[p + 12 >> 2] | 0;
   if ((m | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
   if ((p & 255) << 24 >> 24 <= -1) break g;
   if (!(b[(c[G >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) break g;
   p = c[e >> 2] | 0;
   m = p + 12 | 0;
   g = c[m >> 2] | 0;
   if ((g | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
    c[m >> 2] = g + 1;
    p = d[g >> 0] | 0;
   }
   oe(_, p & 255);
   p = j;
   g = h;
   U = 44;
  } while (0);
  w = w + 1 | 0;
 }
 h : do if ((U | 0) == 42) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 98) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 136) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 184) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 206) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 216) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((U | 0) == 218) {
  i : do if (s | 0) {
   j = s + 1 | 0;
   q = s + 8 | 0;
   r = s + 4 | 0;
   g = 1;
   j : while (1) {
    p = a[s >> 0] | 0;
    if (!(p & 1)) p = (p & 255) >>> 1; else p = c[r >> 2] | 0;
    if (g >>> 0 >= p >>> 0) break i;
    p = c[e >> 2] | 0;
    do if (!p) p = 0; else if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
     c[e >> 2] = 0;
     p = 0;
     break;
    } else {
     p = c[e >> 2] | 0;
     break;
    } while (0);
    p = (p | 0) == 0;
    m = c[f >> 2] | 0;
    do if (!m) U = 234; else {
     if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
      c[f >> 2] = 0;
      U = 234;
      break;
     }
     if (!p) break j;
    } while (0);
    if ((U | 0) == 234) {
     U = 0;
     if (p) break;
    }
    p = c[e >> 2] | 0;
    m = c[p + 12 >> 2] | 0;
    if ((m | 0) == (c[p + 16 >> 2] | 0)) p = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
    if (!(a[s >> 0] & 1)) m = j; else m = c[q >> 2] | 0;
    if ((p & 255) << 24 >> 24 != (a[m + g >> 0] | 0)) break;
    p = g + 1 | 0;
    m = c[e >> 2] | 0;
    g = m + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[m + 16 >> 2] | 0)) {
     sb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0;
     g = p;
     continue;
    } else {
     c[g >> 2] = h + 1;
     g = p;
     continue;
    }
   }
   c[k >> 2] = c[k >> 2] | 4;
   m = 0;
   break h;
  } while (0);
  p = c[aa >> 2] | 0;
  if ((p | 0) == (t | 0)) m = 1; else {
   c[V >> 2] = 0;
   dg(X, p, t, V);
   if (!(c[V >> 2] | 0)) {
    m = 1;
    break;
   } else {
    c[k >> 2] = c[k >> 2] | 4;
    m = 0;
    break;
   }
  }
 } while (0);
 ge(_);
 ge(Y);
 ge(Z);
 ge($);
 ge(X);
 p = c[aa >> 2] | 0;
 c[aa >> 2] = 0;
 if (p | 0) ob[c[W >> 2] & 127](p);
 i = ba;
 return m | 0;
}

function lk(b, e, f, g, h, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0;
 Y = i;
 i = i + 512 | 0;
 I = Y + 96 | 0;
 s = Y + 104 | 0;
 X = Y + 88 | 0;
 M = Y + 80 | 0;
 L = Y + 76 | 0;
 N = Y + 504 | 0;
 J = Y + 72 | 0;
 O = Y + 68 | 0;
 S = Y + 56 | 0;
 W = Y + 44 | 0;
 U = Y + 32 | 0;
 T = Y + 20 | 0;
 V = Y + 8 | 0;
 K = Y + 4 | 0;
 Q = Y;
 c[I >> 2] = o;
 c[X >> 2] = s;
 R = X + 4 | 0;
 c[R >> 2] = 107;
 c[M >> 2] = s;
 c[L >> 2] = s + 400;
 o = 0;
 while (1) {
  if ((o | 0) == 3) break;
  c[S + (o << 2) >> 2] = 0;
  o = o + 1 | 0;
 }
 o = 0;
 while (1) {
  if ((o | 0) == 3) break;
  c[W + (o << 2) >> 2] = 0;
  o = o + 1 | 0;
 }
 o = 0;
 while (1) {
  if ((o | 0) == 3) break;
  c[U + (o << 2) >> 2] = 0;
  o = o + 1 | 0;
 }
 o = 0;
 while (1) {
  if ((o | 0) == 3) break;
  c[T + (o << 2) >> 2] = 0;
  o = o + 1 | 0;
 }
 o = 0;
 while (1) {
  if ((o | 0) == 3) break;
  c[V + (o << 2) >> 2] = 0;
  o = o + 1 | 0;
 }
 mk(f, g, N, J, O, S, W, U, T, K);
 c[n >> 2] = c[m >> 2];
 E = U + 4 | 0;
 F = T + 4 | 0;
 G = T + 8 | 0;
 H = U + 8 | 0;
 x = (h & 512 | 0) != 0;
 y = W + 8 | 0;
 z = W + 4 | 0;
 A = V + 4 | 0;
 B = V + 8 | 0;
 C = N + 3 | 0;
 D = S + 4 | 0;
 w = 0;
 r = 0;
 a : while (1) {
  if (w >>> 0 >= 4) {
   P = 232;
   break;
  }
  o = c[b >> 2] | 0;
  do if (!o) g = 1; else {
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if ((o | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  f = c[e >> 2] | 0;
  do if (!f) P = 31; else {
   o = c[f + 12 >> 2] | 0;
   if ((o | 0) == (c[f + 16 >> 2] | 0)) o = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else o = c[o >> 2] | 0;
   if ((o | 0) == -1) {
    c[e >> 2] = 0;
    P = 31;
    break;
   } else if (g) {
    v = f;
    break;
   } else {
    P = 232;
    break a;
   }
  } while (0);
  if ((P | 0) == 31) {
   P = 0;
   if (g) {
    P = 232;
    break;
   } else v = 0;
  }
  b : do switch (a[N + w >> 0] | 0) {
  case 1:
   {
    if ((w | 0) != 3) {
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if (!(lb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) {
      P = 44;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
      c[f >> 2] = g + 4;
      o = c[g >> 2] | 0;
     }
     ye(V, o);
     o = v;
     h = v;
     P = 46;
    }
    break;
   }
  case 0:
   {
    if ((w | 0) != 3) {
     o = v;
     h = v;
     P = 46;
    }
    break;
   }
  case 3:
   {
    p = a[U >> 0] | 0;
    o = (p & 1) == 0 ? (p & 255) >>> 1 : c[E >> 2] | 0;
    g = a[T >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[F >> 2] | 0;
    if ((o | 0) != (0 - g | 0)) {
     h = (o | 0) == 0;
     q = c[b >> 2] | 0;
     t = c[q + 12 >> 2] | 0;
     o = c[q + 16 >> 2] | 0;
     f = (t | 0) == (o | 0);
     if (h | (g | 0) == 0) {
      if (f) o = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[t >> 2] | 0;
      if (h) {
       if ((o | 0) != (c[((a[T >> 0] & 1) == 0 ? F : c[G >> 2] | 0) >> 2] | 0)) break b;
       o = c[b >> 2] | 0;
       f = o + 12 | 0;
       g = c[f >> 2] | 0;
       if ((g | 0) == (c[o + 16 >> 2] | 0)) sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
       a[k >> 0] = 1;
       v = a[T >> 0] | 0;
       r = ((v & 1) == 0 ? (v & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? T : r;
       break b;
      }
      if ((o | 0) != (c[((a[U >> 0] & 1) == 0 ? E : c[H >> 2] | 0) >> 2] | 0)) {
       a[k >> 0] = 1;
       break b;
      }
      o = c[b >> 2] | 0;
      f = o + 12 | 0;
      g = c[f >> 2] | 0;
      if ((g | 0) == (c[o + 16 >> 2] | 0)) sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
      v = a[U >> 0] | 0;
      r = ((v & 1) == 0 ? (v & 255) >>> 1 : c[E >> 2] | 0) >>> 0 > 1 ? U : r;
      break b;
     }
     if (f) {
      h = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      o = c[b >> 2] | 0;
      p = a[U >> 0] | 0;
      q = o;
      g = c[o + 12 >> 2] | 0;
      o = c[o + 16 >> 2] | 0;
     } else {
      h = c[t >> 2] | 0;
      g = t;
     }
     f = q + 12 | 0;
     o = (g | 0) == (o | 0);
     if ((h | 0) == (c[((p & 1) == 0 ? E : c[H >> 2] | 0) >> 2] | 0)) {
      if (o) sb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[f >> 2] = g + 4;
      v = a[U >> 0] | 0;
      r = ((v & 1) == 0 ? (v & 255) >>> 1 : c[E >> 2] | 0) >>> 0 > 1 ? U : r;
      break b;
     }
     if (o) o = sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[g >> 2] | 0;
     if ((o | 0) != (c[((a[T >> 0] & 1) == 0 ? F : c[G >> 2] | 0) >> 2] | 0)) {
      P = 102;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
     a[k >> 0] = 1;
     v = a[T >> 0] | 0;
     r = ((v & 1) == 0 ? (v & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? T : r;
    }
    break;
   }
  case 2:
   {
    if (!(w >>> 0 < 2 | (r | 0) != 0)) if (!(x | (w | 0) == 2 & (a[C >> 0] | 0) != 0)) {
     r = 0;
     break b;
    }
    f = a[W >> 0] | 0;
    g = c[y >> 2] | 0;
    o = (f & 1) == 0 ? z : g;
    c : do if (!w) {
     t = v;
     h = g;
     p = v;
     g = o;
    } else if ((d[N + (w + -1) >> 0] | 0) < 2) {
     h = g;
     while (1) {
      u = (f & 1) == 0;
      g = o;
      if ((g | 0) == ((u ? z : h) + ((u ? (f & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) break;
      if (!(lb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, c[g >> 2] | 0) | 0)) {
       P = 109;
       break;
      }
      f = a[W >> 0] | 0;
      h = c[y >> 2] | 0;
      o = g + 4 | 0;
     }
     if ((P | 0) == 109) {
      P = 0;
      f = a[W >> 0] | 0;
      h = c[y >> 2] | 0;
     }
     q = (f & 1) == 0 ? z : h;
     g = q;
     u = o - g >> 2;
     t = a[V >> 0] | 0;
     p = (t & 1) == 0;
     t = p ? (t & 255) >>> 1 : c[A >> 2] | 0;
     if (u >>> 0 > t >>> 0) {
      t = v;
      p = v;
     } else {
      t = (p ? A : c[B >> 2] | 0) + (t << 2) | 0;
      p = t + (0 - u << 2) | 0;
      while (1) {
       if ((p | 0) == (t | 0)) {
        t = v;
        p = v;
        g = o;
        break c;
       }
       if ((c[p >> 2] | 0) != (c[q >> 2] | 0)) {
        t = v;
        p = v;
        break c;
       }
       q = q + 4 | 0;
       p = p + 4 | 0;
      }
     }
    } else {
     t = v;
     h = g;
     p = v;
     g = o;
    } while (0);
    d : while (1) {
     o = (f & 1) == 0;
     o = (o ? z : h) + ((o ? (f & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0;
     q = g;
     if ((q | 0) == (o | 0)) break;
     o = c[b >> 2] | 0;
     do if (!o) f = 1; else {
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      if ((o | 0) == -1) {
       c[b >> 2] = 0;
       f = 1;
       break;
      } else {
       f = (c[b >> 2] | 0) == 0;
       break;
      }
     } while (0);
     do if (!p) {
      o = t;
      P = 130;
     } else {
      o = c[p + 12 >> 2] | 0;
      if ((o | 0) == (c[p + 16 >> 2] | 0)) o = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else o = c[o >> 2] | 0;
      if ((o | 0) == -1) {
       c[e >> 2] = 0;
       o = 0;
       P = 130;
       break;
      } else if (f ^ (t | 0) == 0) {
       o = t;
       p = t;
       break;
      } else {
       o = q;
       break d;
      }
     } while (0);
     if ((P | 0) == 130) {
      P = 0;
      if (f) {
       o = q;
       break;
      } else p = 0;
     }
     f = c[b >> 2] | 0;
     g = c[f + 12 >> 2] | 0;
     if ((g | 0) == (c[f + 16 >> 2] | 0)) f = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
     if ((f | 0) != (c[q >> 2] | 0)) {
      o = q;
      break;
     }
     f = c[b >> 2] | 0;
     g = f + 12 | 0;
     h = c[g >> 2] | 0;
     if ((h | 0) == (c[f + 16 >> 2] | 0)) sb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0; else c[g >> 2] = h + 4;
     t = o;
     f = a[W >> 0] | 0;
     h = c[y >> 2] | 0;
     g = q + 4 | 0;
    }
    if (x) {
     v = a[W >> 0] | 0;
     u = (v & 1) == 0;
     if ((o | 0) != ((u ? z : c[y >> 2] | 0) + ((u ? (v & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) {
      P = 142;
      break a;
     }
    }
    break;
   }
  case 4:
   {
    t = c[O >> 2] | 0;
    p = v;
    h = v;
    o = 0;
    e : while (1) {
     f = c[b >> 2] | 0;
     do if (!f) g = 1; else {
      g = c[f + 12 >> 2] | 0;
      if ((g | 0) == (c[f + 16 >> 2] | 0)) f = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
      if ((f | 0) == -1) {
       c[b >> 2] = 0;
       g = 1;
       break;
      } else {
       g = (c[b >> 2] | 0) == 0;
       break;
      }
     } while (0);
     do if (!h) {
      f = p;
      P = 156;
     } else {
      f = c[h + 12 >> 2] | 0;
      if ((f | 0) == (c[h + 16 >> 2] | 0)) f = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
      if ((f | 0) == -1) {
       c[e >> 2] = 0;
       f = 0;
       P = 156;
       break;
      } else if (g ^ (p | 0) == 0) {
       f = p;
       q = p;
       break;
      } else break e;
     } while (0);
     if ((P | 0) == 156) {
      P = 0;
      if (g) {
       p = f;
       break;
      } else q = 0;
     }
     g = c[b >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) h = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else h = c[h >> 2] | 0;
     if (lb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, h) | 0) {
      g = c[n >> 2] | 0;
      if ((g | 0) == (c[I >> 2] | 0)) {
       nk(m, n, I);
       g = c[n >> 2] | 0;
      }
      c[n >> 2] = g + 4;
      c[g >> 2] = h;
      o = o + 1 | 0;
     } else {
      v = a[S >> 0] | 0;
      if (!((h | 0) == (t | 0) & (o | 0 ? (((v & 1) == 0 ? (v & 255) >>> 1 : c[D >> 2] | 0) | 0) != 0 : 0))) {
       p = f;
       break;
      }
      if ((s | 0) == (c[L >> 2] | 0)) {
       fk(X, M, L);
       s = c[M >> 2] | 0;
      }
      v = s + 4 | 0;
      c[M >> 2] = v;
      c[s >> 2] = o;
      s = v;
      o = 0;
     }
     g = c[b >> 2] | 0;
     h = g + 12 | 0;
     p = c[h >> 2] | 0;
     if ((p | 0) == (c[g + 16 >> 2] | 0)) {
      sb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      p = f;
      h = q;
      continue;
     } else {
      c[h >> 2] = p + 4;
      p = f;
      h = q;
      continue;
     }
    }
    if (o | 0 ? (c[X >> 2] | 0) != (s | 0) : 0) {
     if ((s | 0) == (c[L >> 2] | 0)) {
      fk(X, M, L);
      s = c[M >> 2] | 0;
     }
     v = s + 4 | 0;
     c[M >> 2] = v;
     c[s >> 2] = o;
     s = v;
    }
    h = c[K >> 2] | 0;
    f : do if ((h | 0) > 0) {
     o = c[b >> 2] | 0;
     do if (!o) f = 1; else {
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      if ((o | 0) == -1) {
       c[b >> 2] = 0;
       f = 1;
       break;
      } else {
       f = (c[b >> 2] | 0) == 0;
       break;
      }
     } while (0);
     do if (!p) P = 190; else {
      o = c[p + 12 >> 2] | 0;
      if ((o | 0) == (c[p + 16 >> 2] | 0)) o = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else o = c[o >> 2] | 0;
      if ((o | 0) == -1) {
       c[e >> 2] = 0;
       P = 190;
       break;
      } else if (f) break; else {
       P = 196;
       break a;
      }
     } while (0);
     if ((P | 0) == 190) {
      P = 0;
      if (f) {
       P = 196;
       break a;
      } else p = 0;
     }
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) != (c[J >> 2] | 0)) {
      P = 196;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) {
      sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0;
      o = p;
     } else {
      c[f >> 2] = g + 4;
      o = p;
     }
     while (1) {
      if ((h | 0) <= 0) break f;
      f = c[b >> 2] | 0;
      do if (!f) g = 1; else {
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       if ((f | 0) == -1) {
        c[b >> 2] = 0;
        g = 1;
        break;
       } else {
        g = (c[b >> 2] | 0) == 0;
        break;
       }
      } while (0);
      do if (!p) P = 214; else {
       f = c[p + 12 >> 2] | 0;
       if ((f | 0) == (c[p + 16 >> 2] | 0)) f = sb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else f = c[f >> 2] | 0;
       if ((f | 0) == -1) {
        c[e >> 2] = 0;
        o = 0;
        P = 214;
        break;
       } else if (g ^ (o | 0) == 0) {
        q = o;
        p = o;
        break;
       } else {
        P = 220;
        break a;
       }
      } while (0);
      if ((P | 0) == 214) {
       P = 0;
       if (g) {
        P = 220;
        break a;
       } else {
        q = o;
        p = 0;
       }
      }
      o = c[b >> 2] | 0;
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      if (!(lb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, o) | 0)) {
       P = 220;
       break a;
      }
      if ((c[n >> 2] | 0) == (c[I >> 2] | 0)) nk(m, n, I);
      o = c[b >> 2] | 0;
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      f = c[n >> 2] | 0;
      c[n >> 2] = f + 4;
      c[f >> 2] = o;
      h = h + -1 | 0;
      c[K >> 2] = h;
      o = c[b >> 2] | 0;
      f = o + 12 | 0;
      g = c[f >> 2] | 0;
      if ((g | 0) == (c[o + 16 >> 2] | 0)) {
       sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0;
       o = q;
       continue;
      } else {
       c[f >> 2] = g + 4;
       o = q;
       continue;
      }
     }
    } while (0);
    if ((c[n >> 2] | 0) == (c[m >> 2] | 0)) {
     P = 230;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((P | 0) == 46) while (1) {
   P = 0;
   f = c[b >> 2] | 0;
   do if (!f) g = 1; else {
    g = c[f + 12 >> 2] | 0;
    if ((g | 0) == (c[f + 16 >> 2] | 0)) f = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
    if ((f | 0) == -1) {
     c[b >> 2] = 0;
     g = 1;
     break;
    } else {
     g = (c[b >> 2] | 0) == 0;
     break;
    }
   } while (0);
   do if (!h) P = 59; else {
    f = c[h + 12 >> 2] | 0;
    if ((f | 0) == (c[h + 16 >> 2] | 0)) f = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
    if ((f | 0) == -1) {
     c[e >> 2] = 0;
     o = 0;
     P = 59;
     break;
    } else if (g ^ (o | 0) == 0) {
     p = o;
     h = o;
     break;
    } else break g;
   } while (0);
   if ((P | 0) == 59) {
    P = 0;
    if (g) break g; else {
     p = o;
     h = 0;
    }
   }
   o = c[b >> 2] | 0;
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if (!(lb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) break g;
   o = c[b >> 2] | 0;
   f = o + 12 | 0;
   g = c[f >> 2] | 0;
   if ((g | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
    c[f >> 2] = g + 4;
    o = c[g >> 2] | 0;
   }
   ye(V, o);
   o = p;
   P = 46;
  } while (0);
  w = w + 1 | 0;
 }
 h : do if ((P | 0) == 44) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 102) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 142) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 196) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 220) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 230) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((P | 0) == 232) {
  i : do if (r | 0) {
   p = r + 4 | 0;
   q = r + 8 | 0;
   h = 1;
   j : while (1) {
    o = a[r >> 0] | 0;
    if (!(o & 1)) o = (o & 255) >>> 1; else o = c[p >> 2] | 0;
    if (h >>> 0 >= o >>> 0) break i;
    o = c[b >> 2] | 0;
    do if (!o) g = 1; else {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) == -1) {
      c[b >> 2] = 0;
      g = 1;
      break;
     } else {
      g = (c[b >> 2] | 0) == 0;
      break;
     }
    } while (0);
    o = c[e >> 2] | 0;
    do if (!o) P = 251; else {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) == -1) {
      c[e >> 2] = 0;
      P = 251;
      break;
     } else if (g) break; else break j;
    } while (0);
    if ((P | 0) == 251) {
     P = 0;
     if (g) break;
    }
    o = c[b >> 2] | 0;
    f = c[o + 12 >> 2] | 0;
    if ((f | 0) == (c[o + 16 >> 2] | 0)) o = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
    if (!(a[r >> 0] & 1)) f = p; else f = c[q >> 2] | 0;
    if ((o | 0) != (c[f + (h << 2) >> 2] | 0)) break;
    o = h + 1 | 0;
    f = c[b >> 2] | 0;
    g = f + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[f + 16 >> 2] | 0)) {
     sb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0;
     h = o;
     continue;
    } else {
     c[g >> 2] = h + 4;
     h = o;
     continue;
    }
   }
   c[j >> 2] = c[j >> 2] | 4;
   f = 0;
   break h;
  } while (0);
  o = c[X >> 2] | 0;
  if ((o | 0) == (s | 0)) f = 1; else {
   c[Q >> 2] = 0;
   dg(S, o, s, Q);
   if (!(c[Q >> 2] | 0)) {
    f = 1;
    break;
   } else {
    c[j >> 2] = c[j >> 2] | 4;
    f = 0;
    break;
   }
  }
 } while (0);
 se(V);
 se(T);
 se(U);
 se(W);
 ge(S);
 o = c[X >> 2] | 0;
 c[X >> 2] = 0;
 if (o | 0) ob[c[R >> 2] & 127](o);
 i = Y;
 return f | 0;
}

function bd(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 P = i;
 i = i + 304 | 0;
 H = P + 16 | 0;
 J = P + 8 | 0;
 I = P + 33 | 0;
 K = P;
 y = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = Gc(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (!(k << 24 >> 24)) k = 0; else {
  L = e + 4 | 0;
  M = e + 100 | 0;
  G = e + 108 | 0;
  z = e + 8 | 0;
  A = I + 10 | 0;
  B = I + 33 | 0;
  C = J + 4 | 0;
  E = I + 46 | 0;
  F = I + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(ec(m & 255) | 0)) {
    m = (a[n >> 0] | 0) == 37;
    d : do if (m) {
     q = n + 1 | 0;
     o = a[q >> 0] | 0;
     e : do switch (o << 24 >> 24) {
     case 37:
      break d;
     case 42:
      {
       x = 0;
       o = n + 2 | 0;
       break;
      }
     default:
      {
       o = (o & 255) + -48 | 0;
       if (o >>> 0 < 10) if ((a[n + 2 >> 0] | 0) == 36) {
        c[H >> 2] = c[j >> 2];
        while (1) {
         x = (c[H >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[H >> 2] = x + 4;
         if (o >>> 0 > 1) o = o + -1 | 0; else break;
        }
        x = m;
        o = n + 3 | 0;
        break e;
       }
       o = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       x = c[o >> 2] | 0;
       c[j >> 2] = o + 4;
       o = q;
      }
     } while (0);
     m = a[o >> 0] | 0;
     n = m & 255;
     if ((n + -48 | 0) >>> 0 < 10) {
      m = 0;
      while (1) {
       q = (m * 10 | 0) + -48 + n | 0;
       o = o + 1 | 0;
       m = a[o >> 0] | 0;
       n = m & 255;
       if ((n + -48 | 0) >>> 0 >= 10) break; else m = q;
      }
     } else q = 0;
     if (m << 24 >> 24 == 109) {
      o = o + 1 | 0;
      r = a[o >> 0] | 0;
      m = (x | 0) != 0 & 1;
      l = 0;
      f = 0;
     } else {
      r = m;
      m = 0;
     }
     n = o + 1 | 0;
     switch (r & 255 | 0) {
     case 104:
      {
       w = (a[n >> 0] | 0) == 104;
       n = w ? o + 2 | 0 : n;
       o = w ? -2 : -1;
       break;
      }
     case 108:
      {
       w = (a[n >> 0] | 0) == 108;
       n = w ? o + 2 | 0 : n;
       o = w ? 3 : 1;
       break;
      }
     case 106:
      {
       o = 3;
       break;
      }
     case 116:
     case 122:
      {
       o = 1;
       break;
      }
     case 76:
      {
       o = 2;
       break;
      }
     case 110:
     case 112:
     case 67:
     case 83:
     case 91:
     case 99:
     case 115:
     case 88:
     case 71:
     case 70:
     case 69:
     case 65:
     case 103:
     case 102:
     case 101:
     case 97:
     case 120:
     case 117:
     case 111:
     case 105:
     case 100:
      {
       n = o;
       o = 0;
       break;
      }
     default:
      {
       N = 154;
       break b;
      }
     }
     r = d[n >> 0] | 0;
     t = (r & 47 | 0) == 3;
     r = t ? r | 32 : r;
     t = t ? 1 : o;
     switch (r | 0) {
     case 99:
      {
       w = s;
       v = (q | 0) < 1 ? 1 : q;
       break;
      }
     case 91:
      {
       w = s;
       v = q;
       break;
      }
     case 110:
      {
       if (!x) {
        o = s;
        break c;
       }
       switch (t | 0) {
       case -2:
        {
         a[x >> 0] = s;
         o = s;
         break c;
        }
       case -1:
        {
         b[x >> 1] = s;
         o = s;
         break c;
        }
       case 0:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 1:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 3:
        {
         o = x;
         c[o >> 2] = s;
         c[o + 4 >> 2] = ((s | 0) < 0) << 31 >> 31;
         o = s;
         break c;
        }
       default:
        {
         o = s;
         break c;
        }
       }
      }
     default:
      {
       $b(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = bc(e) | 0;
       } while ((ec(o) | 0) != 0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[G >> 2] | 0) + s + o - (c[z >> 2] | 0) | 0;
       v = q;
      }
     }
     $b(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((bc(e) | 0) < 0) {
       N = 154;
       break b;
      }
      q = c[M >> 2] | 0;
     }
     if (q | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
     f : do switch (r | 0) {
     case 91:
     case 99:
     case 115:
      {
       u = (r | 0) == 99;
       g : do if ((r | 16 | 0) == 115) {
        co(I | 0, -1, 257) | 0;
        a[I >> 0] = 0;
        if ((r | 0) == 115) {
         a[B >> 0] = 0;
         a[A >> 0] = 0;
         a[A + 1 >> 0] = 0;
         a[A + 2 >> 0] = 0;
         a[A + 3 >> 0] = 0;
         a[A + 4 >> 0] = 0;
        }
       } else {
        r = n + 1 | 0;
        s = (a[r >> 0] | 0) == 94;
        o = s & 1;
        n = s ? n + 2 | 0 : r;
        co(I | 0, s & 1 | 0, 257) | 0;
        a[I >> 0] = 0;
        switch (a[n >> 0] | 0) {
        case 45:
         {
          s = (o ^ 1) & 255;
          a[E >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        case 93:
         {
          s = (o ^ 1) & 255;
          a[F >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        default:
         s = (o ^ 1) & 255;
        }
        while (1) {
         o = a[n >> 0] | 0;
         h : do switch (o << 24 >> 24) {
         case 0:
          {
           N = 154;
           break b;
          }
         case 93:
          break g;
         case 45:
          {
           r = n + 1 | 0;
           o = a[r >> 0] | 0;
           switch (o << 24 >> 24) {
           case 93:
           case 0:
            {
             o = 45;
             break h;
            }
           default:
            {}
           }
           n = a[n + -1 >> 0] | 0;
           if ((n & 255) < (o & 255)) {
            n = n & 255;
            do {
             n = n + 1 | 0;
             a[I + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[I + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = td(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 154;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[C >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = bc(e) | 0;
           if (!(a[I + (o + 1) >> 0] | 0)) break j;
           a[y >> 0] = o;
           switch (Tc(K, y, 1, J) | 0) {
           case -1:
            {
             l = 0;
             N = 154;
             break b;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (!q) {
           c[f + (l << 2) >> 2] = c[K >> 2];
           l = l + 1 | 0;
          }
         } while (!(t & (l | 0) == (r | 0)));
         l = r << 1 | 1;
         o = wd(f, l << 2) | 0;
         if (!o) {
          l = 0;
          N = 154;
          break b;
         } else {
          q = r;
          r = l;
          f = o;
          l = q;
         }
        }
        if (!(cd(J) | 0)) {
         l = 0;
         N = 154;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = td(r) | 0;
         if (!l) {
          l = 0;
          f = 0;
          N = 154;
          break b;
         } else o = 0;
         while (1) {
          do {
           f = c[L >> 2] | 0;
           if (f >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = f + 1;
            f = d[f >> 0] | 0;
           } else f = bc(e) | 0;
           if (!(a[I + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = wd(l, f) | 0;
          if (!o) {
           f = 0;
           N = 154;
           break b;
          } else {
           q = r;
           r = f;
           l = o;
           o = q;
          }
         }
        }
        if (!x) {
         l = q;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < l >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = bc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = 0;
           l = 0;
           f = 0;
           break i;
          }
          l = c[M >> 2] | 0;
         }
        } else {
         l = 0;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < q >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = bc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = l;
           l = x;
           f = 0;
           break i;
          }
          a[x + l >> 0] = f;
          q = c[M >> 2] | 0;
          l = l + 1 | 0;
         }
        }
       } while (0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       o = o - (c[z >> 2] | 0) + (c[G >> 2] | 0) | 0;
       if (!o) break b;
       if (!((o | 0) == (v | 0) | u ^ 1)) break b;
       do if (t) if (s) {
        c[x >> 2] = f;
        break;
       } else {
        c[x >> 2] = l;
        break;
       } while (0);
       if (!u) {
        if (f | 0) c[f + (q << 2) >> 2] = 0;
        if (!l) {
         l = 0;
         break f;
        }
        a[l + q >> 0] = 0;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       o = 16;
       N = 136;
       break;
      }
     case 111:
      {
       o = 8;
       N = 136;
       break;
      }
     case 117:
     case 100:
      {
       o = 10;
       N = 136;
       break;
      }
     case 105:
      {
       o = 0;
       N = 136;
       break;
      }
     case 71:
     case 103:
     case 70:
     case 102:
     case 69:
     case 101:
     case 65:
     case 97:
      {
       p = +ic(e, t, 0);
       if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = p;
         break f;
        }
       case 1:
        {
         h[x >> 3] = p;
         break f;
        }
       case 2:
        {
         h[x >> 3] = p;
         break f;
        }
       default:
        break f;
       }
       break;
      }
     default:
      {}
     } while (0);
     l : do if ((N | 0) == 136) {
      N = 0;
      o = ac(e, o, 0, -1, -1) | 0;
      if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
      if ((x | 0) != 0 & (r | 0) == 112) {
       c[x >> 2] = o;
       break;
      }
      if (x) switch (t | 0) {
      case -2:
       {
        a[x >> 0] = o;
        break l;
       }
      case -1:
       {
        b[x >> 1] = o;
        break l;
       }
      case 0:
       {
        c[x >> 2] = o;
        break l;
       }
      case 1:
       {
        c[x >> 2] = o;
        break l;
       }
      case 3:
       {
        v = x;
        c[v >> 2] = o;
        c[v + 4 >> 2] = D;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[G >> 2] | 0) + w + (c[L >> 2] | 0) - (c[z >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (m & 1) | 0;
    $b(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = bc(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 22;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(ec(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    $b(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = bc(e) | 0;
    } while ((ec(m) | 0) != 0);
    if (!(c[M >> 2] | 0)) m = c[L >> 2] | 0; else {
     m = (c[L >> 2] | 0) + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[G >> 2] | 0) + s + m - (c[z >> 2] | 0) | 0;
   } while (0);
   n = n + 1 | 0;
   m = a[n >> 0] | 0;
   if (!(m << 24 >> 24)) break a; else s = o;
  }
  if ((N | 0) == 22) {
   if (c[M >> 2] | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
   if ((k | 0) != 0 | (m | 0) > -1) break; else {
    k = 0;
    N = 155;
   }
  } else if ((N | 0) == 154) if (!k) {
   k = m;
   N = 155;
  }
  if ((N | 0) == 155) {
   m = k;
   k = -1;
  }
  if (m) {
   ud(l);
   ud(f);
  }
 } while (0);
 if (O | 0) Tb(e);
 i = P;
 return k | 0;
}

function ud(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[4402] | 0;
 if (d >>> 0 < h >>> 0) za();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) za();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) za();
  if ((k | 0) == (c[4403] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[4400] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 17632 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) za();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) za();
   }
   if ((d | 0) == (b | 0)) {
    c[4398] = c[4398] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) za();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else za();
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
   if (b >>> 0 < h >>> 0) za(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) za();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) za();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else za();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 17896 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[4399] = c[4399] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[4402] | 0) >>> 0) za();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[4402] | 0;
   if (i >>> 0 < d >>> 0) za();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) za(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
 if (q >>> 0 >= m >>> 0) za();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) za();
 if (!(b & 2)) {
  if ((m | 0) == (c[4404] | 0)) {
   p = (c[4401] | 0) + g | 0;
   c[4401] = p;
   c[4404] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[4403] | 0)) return;
   c[4403] = 0;
   c[4400] = 0;
   return;
  }
  if ((m | 0) == (c[4403] | 0)) {
   p = (c[4400] | 0) + g | 0;
   c[4400] = p;
   c[4403] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 17632 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[4402] | 0) >>> 0) za();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) za();
   }
   if ((d | 0) == (b | 0)) {
    c[4398] = c[4398] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[4402] | 0) >>> 0) za();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else za();
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
    if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[4402] | 0) >>> 0) za();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) za();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else za();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 17896 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[4399] = c[4399] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[4402] | 0) >>> 0) za();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[4402] | 0;
    if (n >>> 0 < d >>> 0) za();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) za(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[4402] | 0) >>> 0) za(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[4403] | 0)) {
   c[4400] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 17632 + (a << 1 << 2) | 0;
  b = c[4398] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[4398] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
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
 e = 17896 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[4399] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[4399] = a | b;
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
  if ((e | 0) == 127) if (b >>> 0 < (c[4402] | 0) >>> 0) za(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[4402] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else za();
  }
 } while (0);
 q = (c[4406] | 0) + -1 | 0;
 c[4406] = q;
 if (!q) a = 18048; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[4406] = -1;
 return;
}

function yd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 o = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  f = c[a >> 2] | 0;
  if (!(d & 3)) return;
  l = a + (0 - f) | 0;
  k = f + b | 0;
  i = c[4402] | 0;
  if (l >>> 0 < i >>> 0) za();
  if ((l | 0) == (c[4403] | 0)) {
   a = o + 4 | 0;
   d = c[a >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    r = l;
    g = k;
    break;
   }
   c[4400] = k;
   c[a >> 2] = d & -2;
   c[l + 4 >> 2] = k | 1;
   c[l + k >> 2] = k;
   return;
  }
  e = f >>> 3;
  if (f >>> 0 < 256) {
   a = c[l + 8 >> 2] | 0;
   b = c[l + 12 >> 2] | 0;
   d = 17632 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < i >>> 0) za();
    if ((c[a + 12 >> 2] | 0) != (l | 0)) za();
   }
   if ((b | 0) == (a | 0)) {
    c[4398] = c[4398] & ~(1 << e);
    r = l;
    g = k;
    break;
   }
   if ((b | 0) == (d | 0)) h = b + 8 | 0; else {
    if (b >>> 0 < i >>> 0) za();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) h = d; else za();
   }
   c[a + 12 >> 2] = b;
   c[h >> 2] = a;
   r = l;
   g = k;
   break;
  }
  f = c[l + 24 >> 2] | 0;
  b = c[l + 12 >> 2] | 0;
  do if ((b | 0) == (l | 0)) {
   a = l + 16 | 0;
   b = a + 4 | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    d = c[a >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else a = b;
   while (1) {
    b = d + 20 | 0;
    e = c[b >> 2] | 0;
    if (e | 0) {
     d = e;
     a = b;
     continue;
    }
    b = d + 16 | 0;
    e = c[b >> 2] | 0;
    if (!e) break; else {
     d = e;
     a = b;
    }
   }
   if (a >>> 0 < i >>> 0) za(); else {
    c[a >> 2] = 0;
    j = d;
    break;
   }
  } else {
   e = c[l + 8 >> 2] | 0;
   if (e >>> 0 < i >>> 0) za();
   d = e + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) za();
   a = b + 8 | 0;
   if ((c[a >> 2] | 0) == (l | 0)) {
    c[d >> 2] = b;
    c[a >> 2] = e;
    j = b;
    break;
   } else za();
  } while (0);
  if (!f) {
   r = l;
   g = k;
  } else {
   d = c[l + 28 >> 2] | 0;
   a = 17896 + (d << 2) | 0;
   if ((l | 0) == (c[a >> 2] | 0)) {
    c[a >> 2] = j;
    if (!j) {
     c[4399] = c[4399] & ~(1 << d);
     r = l;
     g = k;
     break;
    }
   } else {
    if (f >>> 0 < (c[4402] | 0) >>> 0) za();
    d = f + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = j; else c[f + 20 >> 2] = j;
    if (!j) {
     r = l;
     g = k;
     break;
    }
   }
   b = c[4402] | 0;
   if (j >>> 0 < b >>> 0) za();
   c[j + 24 >> 2] = f;
   d = l + 16 | 0;
   a = c[d >> 2] | 0;
   do if (a | 0) if (a >>> 0 < b >>> 0) za(); else {
    c[j + 16 >> 2] = a;
    c[a + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (!d) {
    r = l;
    g = k;
   } else if (d >>> 0 < (c[4402] | 0) >>> 0) za(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    r = l;
    g = k;
    break;
   }
  }
 } else {
  r = a;
  g = b;
 } while (0);
 h = c[4402] | 0;
 if (o >>> 0 < h >>> 0) za();
 d = o + 4 | 0;
 a = c[d >> 2] | 0;
 if (!(a & 2)) {
  if ((o | 0) == (c[4404] | 0)) {
   q = (c[4401] | 0) + g | 0;
   c[4401] = q;
   c[4404] = r;
   c[r + 4 >> 2] = q | 1;
   if ((r | 0) != (c[4403] | 0)) return;
   c[4403] = 0;
   c[4400] = 0;
   return;
  }
  if ((o | 0) == (c[4403] | 0)) {
   q = (c[4400] | 0) + g | 0;
   c[4400] = q;
   c[4403] = r;
   c[r + 4 >> 2] = q | 1;
   c[r + q >> 2] = q;
   return;
  }
  g = (a & -8) + g | 0;
  e = a >>> 3;
  do if (a >>> 0 < 256) {
   a = c[o + 8 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   d = 17632 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < h >>> 0) za();
    if ((c[a + 12 >> 2] | 0) != (o | 0)) za();
   }
   if ((b | 0) == (a | 0)) {
    c[4398] = c[4398] & ~(1 << e);
    break;
   }
   if ((b | 0) == (d | 0)) m = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) za();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (o | 0)) m = d; else za();
   }
   c[a + 12 >> 2] = b;
   c[m >> 2] = a;
  } else {
   f = c[o + 24 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   do if ((b | 0) == (o | 0)) {
    a = o + 16 | 0;
    b = a + 4 | 0;
    d = c[b >> 2] | 0;
    if (!d) {
     d = c[a >> 2] | 0;
     if (!d) {
      n = 0;
      break;
     }
    } else a = b;
    while (1) {
     b = d + 20 | 0;
     e = c[b >> 2] | 0;
     if (e | 0) {
      d = e;
      a = b;
      continue;
     }
     b = d + 16 | 0;
     e = c[b >> 2] | 0;
     if (!e) break; else {
      d = e;
      a = b;
     }
    }
    if (a >>> 0 < h >>> 0) za(); else {
     c[a >> 2] = 0;
     n = d;
     break;
    }
   } else {
    e = c[o + 8 >> 2] | 0;
    if (e >>> 0 < h >>> 0) za();
    d = e + 12 | 0;
    if ((c[d >> 2] | 0) != (o | 0)) za();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (o | 0)) {
     c[d >> 2] = b;
     c[a >> 2] = e;
     n = b;
     break;
    } else za();
   } while (0);
   if (f | 0) {
    d = c[o + 28 >> 2] | 0;
    a = 17896 + (d << 2) | 0;
    if ((o | 0) == (c[a >> 2] | 0)) {
     c[a >> 2] = n;
     if (!n) {
      c[4399] = c[4399] & ~(1 << d);
      break;
     }
    } else {
     if (f >>> 0 < (c[4402] | 0) >>> 0) za();
     d = f + 16 | 0;
     if ((c[d >> 2] | 0) == (o | 0)) c[d >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    b = c[4402] | 0;
    if (n >>> 0 < b >>> 0) za();
    c[n + 24 >> 2] = f;
    d = o + 16 | 0;
    a = c[d >> 2] | 0;
    do if (a | 0) if (a >>> 0 < b >>> 0) za(); else {
     c[n + 16 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    } while (0);
    d = c[d + 4 >> 2] | 0;
    if (d | 0) if (d >>> 0 < (c[4402] | 0) >>> 0) za(); else {
     c[n + 20 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
  if ((r | 0) == (c[4403] | 0)) {
   c[4400] = g;
   return;
  }
 } else {
  c[d >> 2] = a & -2;
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
 }
 d = g >>> 3;
 if (g >>> 0 < 256) {
  b = 17632 + (d << 1 << 2) | 0;
  a = c[4398] | 0;
  d = 1 << d;
  if (!(a & d)) {
   c[4398] = a | d;
   p = b + 8 | 0;
   q = b;
  } else {
   d = b + 8 | 0;
   a = c[d >> 2] | 0;
   if (a >>> 0 < (c[4402] | 0) >>> 0) za(); else {
    p = d;
    q = a;
   }
  }
  c[p >> 2] = r;
  c[q + 12 >> 2] = r;
  c[r + 8 >> 2] = q;
  c[r + 12 >> 2] = b;
  return;
 }
 d = g >>> 8;
 if (!d) b = 0; else if (g >>> 0 > 16777215) b = 31; else {
  p = (d + 1048320 | 0) >>> 16 & 8;
  q = d << p;
  o = (q + 520192 | 0) >>> 16 & 4;
  q = q << o;
  b = (q + 245760 | 0) >>> 16 & 2;
  b = 14 - (o | p | b) + (q << b >>> 15) | 0;
  b = g >>> (b + 7 | 0) & 1 | b << 1;
 }
 e = 17896 + (b << 2) | 0;
 c[r + 28 >> 2] = b;
 c[r + 20 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 d = c[4399] | 0;
 a = 1 << b;
 if (!(d & a)) {
  c[4399] = d | a;
  c[e >> 2] = r;
  c[r + 24 >> 2] = e;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 }
 f = g << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
 d = c[e >> 2] | 0;
 while (1) {
  if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
   b = d;
   e = 127;
   break;
  }
  a = d + 16 + (f >>> 31 << 2) | 0;
  b = c[a >> 2] | 0;
  if (!b) {
   e = 124;
   break;
  } else {
   f = f << 1;
   d = b;
  }
 }
 if ((e | 0) == 124) {
  if (a >>> 0 < (c[4402] | 0) >>> 0) za();
  c[a >> 2] = r;
  c[r + 24 >> 2] = d;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 } else if ((e | 0) == 127) {
  d = b + 8 | 0;
  a = c[d >> 2] | 0;
  q = c[4402] | 0;
  if (!(a >>> 0 >= q >>> 0 & b >>> 0 >= q >>> 0)) za();
  c[a + 12 >> 2] = r;
  c[d >> 2] = r;
  c[r + 8 >> 2] = a;
  c[r + 12 >> 2] = b;
  c[r + 24 >> 2] = 0;
  return;
 }
}

function ac(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(Qb() | 0) >> 2] = 22;
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
   } else i = bc(b) | 0;
  } while ((ec(i) | 0) != 0);
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
     i = bc(b) | 0;
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
   } else i = bc(b) | 0;
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
   } else i = bc(b) | 0;
   if ((d[10535 + i >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     $b(b, 0);
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
   if ((d[10535 + i >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    $b(b, 0);
    c[(Qb() | 0) >> 2] = 22;
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
     } else i = bc(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    j = 0;
   } else {
    e = 0;
    j = 0;
   }
   f = i + -48 | 0;
   if (f >>> 0 < 10) {
    while (1) {
     k = oo(e | 0, j | 0, 10, 0) | 0;
     l = D;
     m = ((f | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~f >>> 0) {
      k = e;
      break;
     }
     e = eo(k | 0, l | 0, f | 0, m | 0) | 0;
     j = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = bc(b) | 0;
     f = i + -48 | 0;
     if (!(f >>> 0 < 10 & (j >>> 0 < 429496729 | (j | 0) == 429496729 & e >>> 0 < 2576980378))) {
      k = e;
      break;
     }
    }
    if (f >>> 0 > 9) {
     i = k;
     e = p;
    } else {
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
    n = a[10791 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[10535 + i >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = bc(b) | 0;
      j = a[10535 + i >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = fo(-1, -1, n | 0) | 0;
    m = D;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = f;
     n = 72;
     break;
    } else i = f;
    while (1) {
     k = ho(k | 0, i | 0, n | 0) | 0;
     f = D;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = bc(b) | 0;
     j = a[10535 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = f;
      n = 72;
      break c;
     } else i = f;
    }
   }
   j = a[10535 + i >> 0] | 0;
   f = j & 255;
   if (f >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = f + ($(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = bc(b) | 0;
     j = a[10535 + i >> 0] | 0;
     f = j & 255;
     if (!(k >>> 0 < 119304647 & f >>> 0 < e >>> 0)) break; else i = k;
    }
    f = 0;
   } else {
    k = 0;
    f = 0;
   }
   if ((j & 255) >>> 0 < e >>> 0) {
    n = po(-1, -1, e | 0, 0) | 0;
    o = D;
    m = f;
    while (1) {
     if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & k >>> 0 > n >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     f = oo(k | 0, m | 0, e | 0, 0) | 0;
     l = D;
     j = j & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & f >>> 0 > ~j >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     k = eo(j | 0, 0, f | 0, l | 0) | 0;
     f = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = bc(b) | 0;
     j = a[10535 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0) {
      j = f;
      n = 72;
      break;
     } else m = f;
    }
   } else {
    j = f;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[10535 + i >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = bc(b) | 0;
   } while ((d[10535 + i >> 0] | 0) >>> 0 < e >>> 0);
   c[(Qb() | 0) >> 2] = 34;
   j = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = k;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(j >>> 0 < h >>> 0 | (j | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(Qb() | 0) >> 2] = 34;
    g = eo(g | 0, h | 0, -1, -1) | 0;
    h = D;
    break;
   }
   if (j >>> 0 > h >>> 0 | (j | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(Qb() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = bo(i ^ e | 0, j ^ g | 0, e | 0, g | 0) | 0;
  h = D;
 } while (0);
 D = h;
 return g | 0;
}

function vi(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 32 | 0;
 s = x + 16 | 0;
 r = x + 12 | 0;
 v = x + 8 | 0;
 t = x + 4 | 0;
 u = x;
 k = vf(e) | 0;
 c[v >> 2] = k;
 v = Uf(v, 19168) | 0;
 ln(k) | 0;
 c[f >> 2] = 0;
 k = h;
 h = 0;
 a : while (1) {
  q = (k | 0) != (j | 0);
  l = h;
  while (1) {
   h = c[b >> 2] | 0;
   if (!(q & (l | 0) == 0)) break a;
   m = h;
   if (!h) {
    h = 0;
    p = 1;
   } else {
    l = c[h + 12 >> 2] | 0;
    if ((l | 0) == (c[h + 16 >> 2] | 0)) l = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else l = c[l >> 2] | 0;
    if ((l | 0) == -1) {
     c[b >> 2] = 0;
     h = 0;
     m = 0;
     p = 1;
    } else p = 0;
   }
   o = c[d >> 2] | 0;
   l = o;
   do if (!o) w = 16; else {
    n = c[o + 12 >> 2] | 0;
    if ((n | 0) == (c[o + 16 >> 2] | 0)) n = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else n = c[n >> 2] | 0;
    if ((n | 0) == -1) {
     c[d >> 2] = 0;
     l = 0;
     w = 16;
     break;
    } else if (p) {
     n = o;
     break;
    } else {
     w = 18;
     break a;
    }
   } while (0);
   if ((w | 0) == 16) {
    w = 0;
    if (p) {
     w = 18;
     break a;
    } else n = 0;
   }
   if ((lb[c[(c[v >> 2] | 0) + 52 >> 2] & 31](v, c[k >> 2] | 0, 0) | 0) << 24 >> 24 == 37) {
    p = l;
    w = 20;
    break;
   }
   if (lb[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, 8192, c[k >> 2] | 0) | 0) {
    m = n;
    w = 28;
    break;
   }
   n = h + 12 | 0;
   m = c[n >> 2] | 0;
   l = h + 16 | 0;
   if ((m | 0) == (c[l >> 2] | 0)) m = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else m = c[m >> 2] | 0;
   p = yb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, m) | 0;
   if ((p | 0) == (yb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, c[k >> 2] | 0) | 0)) {
    w = 57;
    break;
   }
   c[f >> 2] = 4;
   l = 4;
  }
  b : do if ((w | 0) == 20) {
   w = 0;
   l = k + 4 | 0;
   if ((l | 0) == (j | 0)) {
    w = 21;
    break a;
   }
   o = lb[c[(c[v >> 2] | 0) + 52 >> 2] & 31](v, c[l >> 2] | 0, 0) | 0;
   switch (o << 24 >> 24) {
   case 48:
   case 69:
    {
     n = k + 8 | 0;
     if ((n | 0) == (j | 0)) {
      w = 26;
      break a;
     }
     k = l;
     l = lb[c[(c[v >> 2] | 0) + 52 >> 2] & 31](v, c[n >> 2] | 0, 0) | 0;
     h = o;
     break;
    }
   default:
    {
     l = o;
     h = 0;
    }
   }
   q = c[(c[a >> 2] | 0) + 36 >> 2] | 0;
   c[t >> 2] = m;
   c[u >> 2] = p;
   c[r >> 2] = c[t >> 2];
   c[s >> 2] = c[u >> 2];
   c[b >> 2] = vb[q & 15](a, r, s, e, f, g, l, h) | 0;
   h = k + 8 | 0;
  } else if ((w | 0) == 28) {
   w = 0;
   do {
    k = k + 4 | 0;
    if ((k | 0) == (j | 0)) {
     k = j;
     break;
    }
   } while (lb[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, 8192, c[k >> 2] | 0) | 0);
   l = m;
   o = m;
   while (1) {
    if (!h) {
     h = 0;
     n = 1;
    } else {
     m = c[h + 12 >> 2] | 0;
     if ((m | 0) == (c[h + 16 >> 2] | 0)) m = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else m = c[m >> 2] | 0;
     if ((m | 0) == -1) {
      c[b >> 2] = 0;
      h = 0;
      n = 1;
     } else n = 0;
    }
    do if (!o) w = 44; else {
     m = c[o + 12 >> 2] | 0;
     if ((m | 0) == (c[o + 16 >> 2] | 0)) m = sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else m = c[m >> 2] | 0;
     if ((m | 0) == -1) {
      c[d >> 2] = 0;
      l = 0;
      w = 44;
      break;
     } else if (n ^ (l | 0) == 0) {
      p = l;
      o = l;
      break;
     } else {
      h = k;
      break b;
     }
    } while (0);
    if ((w | 0) == 44) {
     w = 0;
     if (n) {
      h = k;
      break b;
     } else {
      p = l;
      o = 0;
     }
    }
    n = h + 12 | 0;
    l = c[n >> 2] | 0;
    m = h + 16 | 0;
    if ((l | 0) == (c[m >> 2] | 0)) l = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else l = c[l >> 2] | 0;
    if (!(lb[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, 8192, l) | 0)) {
     h = k;
     break b;
    }
    l = c[n >> 2] | 0;
    if ((l | 0) == (c[m >> 2] | 0)) {
     sb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
     l = p;
     continue;
    } else {
     c[n >> 2] = l + 4;
     l = p;
     continue;
    }
   }
  } else if ((w | 0) == 57) {
   w = 0;
   m = c[n >> 2] | 0;
   if ((m | 0) == (c[l >> 2] | 0)) sb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0; else c[n >> 2] = m + 4;
   h = k + 4 | 0;
  } while (0);
  k = h;
  h = c[f >> 2] | 0;
 }
 if ((w | 0) == 18) c[f >> 2] = 4; else if ((w | 0) == 21) c[f >> 2] = 4; else if ((w | 0) == 26) c[f >> 2] = 4;
 if (!h) {
  h = 0;
  m = 1;
 } else {
  k = c[h + 12 >> 2] | 0;
  if ((k | 0) == (c[h + 16 >> 2] | 0)) k = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else k = c[k >> 2] | 0;
  if ((k | 0) == -1) {
   c[b >> 2] = 0;
   h = 0;
   m = 1;
  } else m = 0;
 }
 k = c[d >> 2] | 0;
 do if (!k) w = 75; else {
  l = c[k + 12 >> 2] | 0;
  if ((l | 0) == (c[k + 16 >> 2] | 0)) k = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else k = c[l >> 2] | 0;
  if ((k | 0) == -1) {
   c[d >> 2] = 0;
   w = 75;
   break;
  } else if (m) break; else {
   w = 77;
   break;
  }
 } while (0);
 if ((w | 0) == 75) if (m) w = 77;
 if ((w | 0) == 77) c[f >> 2] = c[f >> 2] | 2;
 i = x;
 return h | 0;
}

function Ei(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = vf(f) | 0;
 c[L >> 2] = U;
 L = Uf(L, 19168) | 0;
 ln(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   yi(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   Ai(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   U = b + 8 | 0;
   U = sb[c[(c[U >> 2] | 0) + 12 >> 2] & 63](U) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   Fi(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 7336, 7368) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 7368, 7400) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   Gi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   Hi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   Ii(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   Ji(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   Ki(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   Li(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   Mi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 7400, 7444) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 7444, 7464) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   Ni(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 7464, 7496) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   Oi(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = qb[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   U = b + 8 | 0;
   U = sb[c[(c[U >> 2] | 0) + 24 >> 2] & 63](U) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   Ci(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   Pi(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   Qi(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function Wh(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = vf(f) | 0;
 c[L >> 2] = U;
 L = Uf(L, 19136) | 0;
 ln(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   Qh(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   Sh(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   T = b + 8 | 0;
   T = sb[c[(c[T >> 2] | 0) + 12 >> 2] & 63](T) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   Xh(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, 14556, 14564) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, 14564, 14572) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   Yh(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   Zh(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   _h(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   $h(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   ai(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   bi(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   ci(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, 14572, 14583) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, 14583, 14588) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   di(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, 14588, 14596) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   ei(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = qb[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   T = b + 8 | 0;
   T = sb[c[(c[T >> 2] | 0) + 24 >> 2] & 63](T) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = Nh(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   Uh(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   fi(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   gi(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function Nh(e, f, g, h, j, k, l, m) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 32 | 0;
 u = A + 16 | 0;
 t = A + 12 | 0;
 x = A + 8 | 0;
 v = A + 4 | 0;
 w = A;
 y = vf(h) | 0;
 c[x >> 2] = y;
 x = Uf(x, 19136) | 0;
 ln(y) | 0;
 c[j >> 2] = 0;
 y = x + 8 | 0;
 n = l;
 l = 0;
 a : while (1) {
  s = (n | 0) != (m | 0);
  o = l;
  while (1) {
   l = c[f >> 2] | 0;
   if (!(s & (o | 0) == 0)) break a;
   o = l;
   if (!l) l = 0; else if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    o = 0;
    l = 0;
   }
   r = (l | 0) == 0;
   q = c[g >> 2] | 0;
   p = q;
   do if (!q) z = 13; else {
    if ((c[q + 12 >> 2] | 0) == (c[q + 16 >> 2] | 0)) if ((sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) == -1) {
     c[g >> 2] = 0;
     p = 0;
     z = 13;
     break;
    }
    if (!r) {
     z = 14;
     break a;
    }
   } while (0);
   if ((z | 0) == 13) {
    z = 0;
    if (r) {
     z = 14;
     break a;
    } else q = 0;
   }
   if ((lb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[n >> 0] | 0, 0) | 0) << 24 >> 24 == 37) {
    s = p;
    z = 16;
    break;
   }
   o = a[n >> 0] | 0;
   if (o << 24 >> 24 > -1) {
    p = c[y >> 2] | 0;
    if (b[p + (o << 24 >> 24 << 1) >> 1] & 8192) {
     z = 25;
     break;
    }
   }
   q = l + 12 | 0;
   p = c[q >> 2] | 0;
   o = l + 16 | 0;
   if ((p | 0) == (c[o >> 2] | 0)) p = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else p = d[p >> 0] | 0;
   r = yb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, p & 255) | 0;
   if (r << 24 >> 24 == (yb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, a[n >> 0] | 0) | 0) << 24 >> 24) {
    z = 53;
    break;
   }
   c[j >> 2] = 4;
   o = 4;
  }
  b : do if ((z | 0) == 16) {
   z = 0;
   p = n + 1 | 0;
   if ((p | 0) == (m | 0)) {
    z = 17;
    break a;
   }
   r = lb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[p >> 0] | 0, 0) | 0;
   switch (r << 24 >> 24) {
   case 48:
   case 69:
    {
     q = n + 2 | 0;
     if ((q | 0) == (m | 0)) {
      z = 22;
      break a;
     }
     n = p;
     p = lb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[q >> 0] | 0, 0) | 0;
     l = r;
     break;
    }
   default:
    {
     p = r;
     l = 0;
    }
   }
   r = c[(c[e >> 2] | 0) + 36 >> 2] | 0;
   c[v >> 2] = o;
   c[w >> 2] = s;
   c[t >> 2] = c[v >> 2];
   c[u >> 2] = c[w >> 2];
   c[f >> 2] = vb[r & 15](e, t, u, h, j, k, p, l) | 0;
   l = n + 2 | 0;
  } else if ((z | 0) == 25) {
   z = 0;
   do {
    n = n + 1 | 0;
    if ((n | 0) == (m | 0)) {
     n = m;
     break;
    }
    o = a[n >> 0] | 0;
    if (o << 24 >> 24 <= -1) break;
   } while ((b[p + (o << 24 >> 24 << 1) >> 1] & 8192) != 0);
   o = q;
   while (1) {
    if (!l) l = 0; else if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
     c[f >> 2] = 0;
     l = 0;
    }
    p = (l | 0) == 0;
    do if (!q) z = 39; else {
     if ((c[q + 12 >> 2] | 0) != (c[q + 16 >> 2] | 0)) if (p) {
      s = o;
      break;
     } else {
      l = n;
      break b;
     }
     if ((sb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) == -1) {
      c[g >> 2] = 0;
      o = 0;
      z = 39;
      break;
     } else if (p ^ (o | 0) == 0) {
      s = o;
      q = o;
      break;
     } else {
      l = n;
      break b;
     }
    } while (0);
    if ((z | 0) == 39) {
     z = 0;
     if (p) {
      l = n;
      break b;
     } else {
      s = o;
      q = 0;
     }
    }
    p = l + 12 | 0;
    o = c[p >> 2] | 0;
    r = l + 16 | 0;
    if ((o | 0) == (c[r >> 2] | 0)) o = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else o = d[o >> 0] | 0;
    if ((o & 255) << 24 >> 24 <= -1) {
     l = n;
     break b;
    }
    if (!(b[(c[y >> 2] | 0) + (o << 24 >> 24 << 1) >> 1] & 8192)) {
     l = n;
     break b;
    }
    o = c[p >> 2] | 0;
    if ((o | 0) == (c[r >> 2] | 0)) {
     sb[c[(c[l >> 2] | 0) + 40 >> 2] & 63](l) | 0;
     o = s;
     continue;
    } else {
     c[p >> 2] = o + 1;
     o = s;
     continue;
    }
   }
  } else if ((z | 0) == 53) {
   z = 0;
   p = c[q >> 2] | 0;
   if ((p | 0) == (c[o >> 2] | 0)) sb[c[(c[l >> 2] | 0) + 40 >> 2] & 63](l) | 0; else c[q >> 2] = p + 1;
   l = n + 1 | 0;
  } while (0);
  n = l;
  l = c[j >> 2] | 0;
 }
 if ((z | 0) == 14) c[j >> 2] = 4; else if ((z | 0) == 17) c[j >> 2] = 4; else if ((z | 0) == 22) c[j >> 2] = 4;
 if (!l) l = 0; else if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
  c[f >> 2] = 0;
  l = 0;
 }
 n = (l | 0) == 0;
 o = c[g >> 2] | 0;
 do if (!o) z = 68; else {
  if ((c[o + 12 >> 2] | 0) == (c[o + 16 >> 2] | 0)) if ((sb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0) == -1) {
   c[g >> 2] = 0;
   z = 68;
   break;
  }
  if (!n) z = 69;
 } while (0);
 if ((z | 0) == 68) if (n) z = 69;
 if ((z | 0) == 69) c[j >> 2] = c[j >> 2] | 2;
 i = A;
 return l | 0;
}

function tk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 112 | 0;
 o = A + 108 | 0;
 s = A + 96 | 0;
 p = A + 92 | 0;
 t = A + 80 | 0;
 x = A + 68 | 0;
 z = A + 56 | 0;
 q = A + 52 | 0;
 u = A + 40 | 0;
 r = A + 36 | 0;
 v = A + 24 | 0;
 w = A + 12 | 0;
 y = A;
 if (b) {
  n = Uf(e, 20856) | 0;
  b = c[n >> 2] | 0;
  if (d) {
   pb[c[b + 44 >> 2] & 63](o, n);
   y = c[o >> 2] | 0;
   a[f >> 0] = y;
   a[f + 1 >> 0] = y >> 8;
   a[f + 2 >> 0] = y >> 16;
   a[f + 3 >> 0] = y >> 24;
   pb[c[(c[n >> 2] | 0) + 32 >> 2] & 63](s, n);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   je(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[s + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   ge(s);
   e = n;
  } else {
   pb[c[b + 40 >> 2] & 63](p, n);
   y = c[p >> 2] | 0;
   a[f >> 0] = y;
   a[f + 1 >> 0] = y >> 8;
   a[f + 2 >> 0] = y >> 16;
   a[f + 3 >> 0] = y >> 24;
   pb[c[(c[n >> 2] | 0) + 28 >> 2] & 63](t, n);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   je(l, 0);
   c[l >> 2] = c[t >> 2];
   c[l + 4 >> 2] = c[t + 4 >> 2];
   c[l + 8 >> 2] = c[t + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[t + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   ge(t);
   e = n;
  }
  a[g >> 0] = sb[c[(c[n >> 2] | 0) + 12 >> 2] & 63](n) | 0;
  a[h >> 0] = sb[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](x, n);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[x >> 2];
  c[j + 4 >> 2] = c[x + 4 >> 2];
  c[j + 8 >> 2] = c[x + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[x + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(x);
  pb[c[(c[e >> 2] | 0) + 24 >> 2] & 63](z, n);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  je(k, 0);
  c[k >> 2] = c[z >> 2];
  c[k + 4 >> 2] = c[z + 4 >> 2];
  c[k + 8 >> 2] = c[z + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[z + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(z);
  b = sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0;
 } else {
  n = Uf(e, 20848) | 0;
  b = c[n >> 2] | 0;
  if (d) {
   pb[c[b + 44 >> 2] & 63](q, n);
   z = c[q >> 2] | 0;
   a[f >> 0] = z;
   a[f + 1 >> 0] = z >> 8;
   a[f + 2 >> 0] = z >> 16;
   a[f + 3 >> 0] = z >> 24;
   pb[c[(c[n >> 2] | 0) + 32 >> 2] & 63](u, n);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   je(l, 0);
   c[l >> 2] = c[u >> 2];
   c[l + 4 >> 2] = c[u + 4 >> 2];
   c[l + 8 >> 2] = c[u + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[u + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   ge(u);
   e = n;
  } else {
   pb[c[b + 40 >> 2] & 63](r, n);
   z = c[r >> 2] | 0;
   a[f >> 0] = z;
   a[f + 1 >> 0] = z >> 8;
   a[f + 2 >> 0] = z >> 16;
   a[f + 3 >> 0] = z >> 24;
   pb[c[(c[n >> 2] | 0) + 28 >> 2] & 63](v, n);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   je(l, 0);
   c[l >> 2] = c[v >> 2];
   c[l + 4 >> 2] = c[v + 4 >> 2];
   c[l + 8 >> 2] = c[v + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[v + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   ge(v);
   e = n;
  }
  a[g >> 0] = sb[c[(c[n >> 2] | 0) + 12 >> 2] & 63](n) | 0;
  a[h >> 0] = sb[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](w, n);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[w + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(w);
  pb[c[(c[e >> 2] | 0) + 24 >> 2] & 63](y, n);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  je(k, 0);
  c[k >> 2] = c[y >> 2];
  c[k + 4 >> 2] = c[y + 4 >> 2];
  c[k + 8 >> 2] = c[y + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[y + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(y);
  b = sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0;
 }
 c[m >> 2] = b;
 i = A;
 return;
}

function zk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 n = z + 108 | 0;
 r = z + 96 | 0;
 o = z + 92 | 0;
 s = z + 80 | 0;
 w = z + 68 | 0;
 y = z + 56 | 0;
 p = z + 52 | 0;
 t = z + 40 | 0;
 q = z + 36 | 0;
 u = z + 24 | 0;
 v = z + 12 | 0;
 x = z;
 if (b) {
  e = Uf(e, 20872) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   pb[c[b + 44 >> 2] & 63](n, e);
   x = c[n >> 2] | 0;
   a[f >> 0] = x;
   a[f + 1 >> 0] = x >> 8;
   a[f + 2 >> 0] = x >> 16;
   a[f + 3 >> 0] = x >> 24;
   pb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](r, e);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   ve(l, 0);
   c[l >> 2] = c[r >> 2];
   c[l + 4 >> 2] = c[r + 4 >> 2];
   c[l + 8 >> 2] = c[r + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[r + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   se(r);
  } else {
   pb[c[b + 40 >> 2] & 63](o, e);
   x = c[o >> 2] | 0;
   a[f >> 0] = x;
   a[f + 1 >> 0] = x >> 8;
   a[f + 2 >> 0] = x >> 16;
   a[f + 3 >> 0] = x >> 24;
   pb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](s, e);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   ve(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[s + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   se(s);
  }
  c[g >> 2] = sb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  c[h >> 2] = sb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](w, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[w + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(w);
  pb[c[(c[e >> 2] | 0) + 24 >> 2] & 63](y, e);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  ve(k, 0);
  c[k >> 2] = c[y >> 2];
  c[k + 4 >> 2] = c[y + 4 >> 2];
  c[k + 8 >> 2] = c[y + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[y + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(y);
  b = sb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 } else {
  e = Uf(e, 20864) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   pb[c[b + 44 >> 2] & 63](p, e);
   y = c[p >> 2] | 0;
   a[f >> 0] = y;
   a[f + 1 >> 0] = y >> 8;
   a[f + 2 >> 0] = y >> 16;
   a[f + 3 >> 0] = y >> 24;
   pb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](t, e);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   ve(l, 0);
   c[l >> 2] = c[t >> 2];
   c[l + 4 >> 2] = c[t + 4 >> 2];
   c[l + 8 >> 2] = c[t + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[t + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   se(t);
  } else {
   pb[c[b + 40 >> 2] & 63](q, e);
   y = c[q >> 2] | 0;
   a[f >> 0] = y;
   a[f + 1 >> 0] = y >> 8;
   a[f + 2 >> 0] = y >> 16;
   a[f + 3 >> 0] = y >> 24;
   pb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](u, e);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   ve(l, 0);
   c[l >> 2] = c[u >> 2];
   c[l + 4 >> 2] = c[u + 4 >> 2];
   c[l + 8 >> 2] = c[u + 8 >> 2];
   b = 0;
   while (1) {
    if ((b | 0) == 3) break;
    c[u + (b << 2) >> 2] = 0;
    b = b + 1 | 0;
   }
   se(u);
  }
  c[g >> 2] = sb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  c[h >> 2] = sb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](v, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[v >> 2];
  c[j + 4 >> 2] = c[v + 4 >> 2];
  c[j + 8 >> 2] = c[v + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[v + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(v);
  pb[c[(c[e >> 2] | 0) + 24 >> 2] & 63](x, e);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  ve(k, 0);
  c[k >> 2] = c[x >> 2];
  c[k + 4 >> 2] = c[x + 4 >> 2];
  c[k + 8 >> 2] = c[x + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[x + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(x);
  b = sb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 }
 c[m >> 2] = b;
 i = z;
 return;
}

function dk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 p = x + 88 | 0;
 r = x + 76 | 0;
 t = x + 64 | 0;
 v = x + 52 | 0;
 o = x + 48 | 0;
 q = x + 36 | 0;
 s = x + 24 | 0;
 u = x + 12 | 0;
 w = x;
 if (b) {
  d = Uf(d, 20856) | 0;
  pb[c[(c[d >> 2] | 0) + 44 >> 2] & 63](n, d);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  pb[c[(c[d >> 2] | 0) + 32 >> 2] & 63](p, d);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  je(l, 0);
  c[l >> 2] = c[p >> 2];
  c[l + 4 >> 2] = c[p + 4 >> 2];
  c[l + 8 >> 2] = c[p + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[p + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(p);
  pb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](r, d);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  je(k, 0);
  c[k >> 2] = c[r >> 2];
  c[k + 4 >> 2] = c[r + 4 >> 2];
  c[k + 8 >> 2] = c[r + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[r + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(r);
  a[f >> 0] = sb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
  a[g >> 0] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
  pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](t, d);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  je(h, 0);
  c[h >> 2] = c[t >> 2];
  c[h + 4 >> 2] = c[t + 4 >> 2];
  c[h + 8 >> 2] = c[t + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[t + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(t);
  pb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](v, d);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[v >> 2];
  c[j + 4 >> 2] = c[v + 4 >> 2];
  c[j + 8 >> 2] = c[v + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[v + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(v);
  b = sb[c[(c[d >> 2] | 0) + 36 >> 2] & 63](d) | 0;
 } else {
  d = Uf(d, 20848) | 0;
  pb[c[(c[d >> 2] | 0) + 44 >> 2] & 63](o, d);
  v = c[o >> 2] | 0;
  a[e >> 0] = v;
  a[e + 1 >> 0] = v >> 8;
  a[e + 2 >> 0] = v >> 16;
  a[e + 3 >> 0] = v >> 24;
  pb[c[(c[d >> 2] | 0) + 32 >> 2] & 63](q, d);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  je(l, 0);
  c[l >> 2] = c[q >> 2];
  c[l + 4 >> 2] = c[q + 4 >> 2];
  c[l + 8 >> 2] = c[q + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[q + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(q);
  pb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](s, d);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  je(k, 0);
  c[k >> 2] = c[s >> 2];
  c[k + 4 >> 2] = c[s + 4 >> 2];
  c[k + 8 >> 2] = c[s + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[s + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(s);
  a[f >> 0] = sb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
  a[g >> 0] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
  pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](u, d);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  je(h, 0);
  c[h >> 2] = c[u >> 2];
  c[h + 4 >> 2] = c[u + 4 >> 2];
  c[h + 8 >> 2] = c[u + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[u + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(u);
  pb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](w, d);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  je(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[w + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(w);
  b = sb[c[(c[d >> 2] | 0) + 36 >> 2] & 63](d) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function Ak(b, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 var r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 c[e >> 2] = b;
 H = p + 4 | 0;
 I = p + 8 | 0;
 A = o + 4 | 0;
 B = (f & 512 | 0) == 0;
 C = o + 8 | 0;
 D = (q | 0) > 0;
 E = n + 4 | 0;
 F = n + 8 | 0;
 G = n + 1 | 0;
 z = 0;
 while (1) {
  if ((z | 0) == 4) break;
  a : do switch (a[k + z >> 0] | 0) {
  case 0:
   {
    c[d >> 2] = c[e >> 2];
    break;
   }
  case 1:
   {
    c[d >> 2] = c[e >> 2];
    x = yb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 32) | 0;
    y = c[e >> 2] | 0;
    c[e >> 2] = y + 4;
    c[y >> 2] = x;
    break;
   }
  case 3:
   {
    y = a[p >> 0] | 0;
    r = (y & 1) == 0;
    if ((r ? (y & 255) >>> 1 : c[H >> 2] | 0) | 0) {
     x = c[(r ? H : c[I >> 2] | 0) >> 2] | 0;
     y = c[e >> 2] | 0;
     c[e >> 2] = y + 4;
     c[y >> 2] = x;
    }
    break;
   }
  case 2:
   {
    v = a[o >> 0] | 0;
    r = (v & 1) == 0;
    v = r ? (v & 255) >>> 1 : c[A >> 2] | 0;
    if (!(B | (v | 0) == 0)) {
     u = r ? A : c[C >> 2] | 0;
     s = u + (v << 2) | 0;
     t = c[e >> 2] | 0;
     r = t;
     while (1) {
      if ((u | 0) == (s | 0)) break;
      c[r >> 2] = c[u >> 2];
      r = r + 4 | 0;
      u = u + 4 | 0;
     }
     c[e >> 2] = t + (v << 2);
    }
    break;
   }
  case 4:
   {
    s = c[e >> 2] | 0;
    g = j ? g + 4 | 0 : g;
    r = g;
    while (1) {
     if (r >>> 0 >= h >>> 0) break;
     if (!(lb[c[(c[i >> 2] | 0) + 12 >> 2] & 31](i, 2048, c[r >> 2] | 0) | 0)) break;
     r = r + 4 | 0;
    }
    if (D) {
     v = q;
     while (1) {
      t = (v | 0) > 0;
      if (!(r >>> 0 > g >>> 0 & t)) break;
      y = r + -4 | 0;
      w = c[y >> 2] | 0;
      x = c[e >> 2] | 0;
      c[e >> 2] = x + 4;
      c[x >> 2] = w;
      r = y;
      v = v + -1 | 0;
     }
     if (t) w = yb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0; else w = 0;
     u = c[e >> 2] | 0;
     while (1) {
      t = u + 4 | 0;
      if ((v | 0) <= 0) break;
      c[u >> 2] = w;
      u = t;
      v = v + -1 | 0;
     }
     c[e >> 2] = t;
     c[u >> 2] = l;
    }
    if ((r | 0) == (g | 0)) {
     x = yb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0;
     y = c[e >> 2] | 0;
     r = y + 4 | 0;
     c[e >> 2] = r;
     c[y >> 2] = x;
    } else {
     x = a[n >> 0] | 0;
     t = (x & 1) == 0;
     y = c[E >> 2] | 0;
     if (!((t ? (x & 255) >>> 1 : y) | 0)) {
      w = -1;
      v = 0;
      x = 0;
     } else {
      w = a[(t ? G : c[F >> 2] | 0) >> 0] | 0;
      v = 0;
      x = 0;
     }
     while (1) {
      if ((r | 0) == (g | 0)) break;
      t = c[e >> 2] | 0;
      if ((x | 0) == (w | 0)) {
       u = t + 4 | 0;
       c[e >> 2] = u;
       c[t >> 2] = m;
       v = v + 1 | 0;
       w = a[n >> 0] | 0;
       t = (w & 1) == 0;
       if (v >>> 0 < (t ? (w & 255) >>> 1 : y) >>> 0) {
        w = a[(t ? G : c[F >> 2] | 0) + v >> 0] | 0;
        t = u;
        w = w << 24 >> 24 == 127 ? -1 : w << 24 >> 24;
        u = 0;
       } else {
        t = u;
        w = x;
        u = 0;
       }
      } else u = x;
      x = r + -4 | 0;
      J = c[x >> 2] | 0;
      c[e >> 2] = t + 4;
      c[t >> 2] = J;
      r = x;
      x = u + 1 | 0;
     }
     r = c[e >> 2] | 0;
    }
    if ((s | 0) != (r | 0)) while (1) {
     r = r + -4 | 0;
     if (s >>> 0 >= r >>> 0) break a;
     J = c[s >> 2] | 0;
     c[s >> 2] = c[r >> 2];
     c[r >> 2] = J;
     s = s + 4 | 0;
    }
    break;
   }
  default:
   {}
  } while (0);
  z = z + 1 | 0;
 }
 r = a[p >> 0] | 0;
 g = (r & 1) == 0;
 r = g ? (r & 255) >>> 1 : c[H >> 2] | 0;
 if (r >>> 0 > 1) {
  s = g ? H : c[I >> 2] | 0;
  u = s + 4 | 0;
  r = s + (r << 2) | 0;
  s = c[e >> 2] | 0;
  t = r - u | 0;
  g = s;
  while (1) {
   if ((u | 0) == (r | 0)) break;
   c[g >> 2] = c[u >> 2];
   g = g + 4 | 0;
   u = u + 4 | 0;
  }
  c[e >> 2] = s + (t >>> 2 << 2);
 }
 switch (f & 176 | 0) {
 case 32:
  {
   c[d >> 2] = c[e >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[d >> 2] = b;
 }
 return;
}

function uk(d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 r = r | 0;
 var s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 c[f >> 2] = d;
 H = q + 4 | 0;
 I = q + 8 | 0;
 J = q + 1 | 0;
 B = p + 4 | 0;
 C = (g & 512 | 0) == 0;
 D = p + 8 | 0;
 E = p + 1 | 0;
 F = j + 8 | 0;
 G = (r | 0) > 0;
 y = o + 4 | 0;
 z = o + 8 | 0;
 A = o + 1 | 0;
 x = 0;
 while (1) {
  if ((x | 0) == 4) break;
  a : do switch (a[l + x >> 0] | 0) {
  case 0:
   {
    c[e >> 2] = c[f >> 2];
    break;
   }
  case 1:
   {
    c[e >> 2] = c[f >> 2];
    v = yb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 32) | 0;
    w = c[f >> 2] | 0;
    c[f >> 2] = w + 1;
    a[w >> 0] = v;
    break;
   }
  case 3:
   {
    w = a[q >> 0] | 0;
    s = (w & 1) == 0;
    if ((s ? (w & 255) >>> 1 : c[H >> 2] | 0) | 0) {
     v = a[(s ? J : c[I >> 2] | 0) >> 0] | 0;
     w = c[f >> 2] | 0;
     c[f >> 2] = w + 1;
     a[w >> 0] = v;
    }
    break;
   }
  case 2:
   {
    t = a[p >> 0] | 0;
    s = (t & 1) == 0;
    t = s ? (t & 255) >>> 1 : c[B >> 2] | 0;
    if (!(C | (t | 0) == 0)) {
     w = s ? E : c[D >> 2] | 0;
     u = w + t | 0;
     s = c[f >> 2] | 0;
     t = w;
     while (1) {
      if ((t | 0) == (u | 0)) break;
      a[s >> 0] = a[t >> 0] | 0;
      s = s + 1 | 0;
      t = t + 1 | 0;
     }
     c[f >> 2] = s;
    }
    break;
   }
  case 4:
   {
    t = c[f >> 2] | 0;
    h = k ? h + 1 | 0 : h;
    s = h;
    while (1) {
     if (s >>> 0 >= i >>> 0) break;
     u = a[s >> 0] | 0;
     if (u << 24 >> 24 <= -1) break;
     if (!(b[(c[F >> 2] | 0) + (u << 24 >> 24 << 1) >> 1] & 2048)) break;
     s = s + 1 | 0;
    }
    if (G) {
     v = r;
     while (1) {
      u = (v | 0) > 0;
      if (!(s >>> 0 > h >>> 0 & u)) break;
      w = s + -1 | 0;
      K = a[w >> 0] | 0;
      u = c[f >> 2] | 0;
      c[f >> 2] = u + 1;
      a[u >> 0] = K;
      s = w;
      v = v + -1 | 0;
     }
     if (u) w = yb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0; else w = 0;
     while (1) {
      u = c[f >> 2] | 0;
      c[f >> 2] = u + 1;
      if ((v | 0) <= 0) break;
      a[u >> 0] = w;
      v = v + -1 | 0;
     }
     a[u >> 0] = m;
    }
    b : do if ((s | 0) == (h | 0)) {
     w = yb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0;
     K = c[f >> 2] | 0;
     c[f >> 2] = K + 1;
     a[K >> 0] = w;
    } else {
     K = a[o >> 0] | 0;
     u = (K & 1) == 0;
     if (!((u ? (K & 255) >>> 1 : c[y >> 2] | 0) | 0)) {
      u = -1;
      v = 0;
      w = 0;
     } else {
      u = a[(u ? A : c[z >> 2] | 0) >> 0] | 0;
      v = 0;
      w = 0;
     }
     while (1) {
      if ((s | 0) == (h | 0)) break b;
      if ((w | 0) == (u | 0)) {
       K = c[f >> 2] | 0;
       c[f >> 2] = K + 1;
       a[K >> 0] = n;
       v = v + 1 | 0;
       K = a[o >> 0] | 0;
       u = (K & 1) == 0;
       if (v >>> 0 < (u ? (K & 255) >>> 1 : c[y >> 2] | 0) >>> 0) {
        u = a[(u ? A : c[z >> 2] | 0) + v >> 0] | 0;
        u = u << 24 >> 24 == 127 ? -1 : u << 24 >> 24;
        w = 0;
       } else {
        u = w;
        w = 0;
       }
      }
      K = s + -1 | 0;
      M = a[K >> 0] | 0;
      L = c[f >> 2] | 0;
      c[f >> 2] = L + 1;
      a[L >> 0] = M;
      s = K;
      w = w + 1 | 0;
     }
    } while (0);
    s = c[f >> 2] | 0;
    if ((t | 0) != (s | 0)) while (1) {
     s = s + -1 | 0;
     if (t >>> 0 >= s >>> 0) break a;
     M = a[t >> 0] | 0;
     a[t >> 0] = a[s >> 0] | 0;
     a[s >> 0] = M;
     t = t + 1 | 0;
    }
    break;
   }
  default:
   {}
  } while (0);
  x = x + 1 | 0;
 }
 h = a[q >> 0] | 0;
 s = (h & 1) == 0;
 h = s ? (h & 255) >>> 1 : c[H >> 2] | 0;
 if (h >>> 0 > 1) {
  s = s ? J : c[I >> 2] | 0;
  t = s + h | 0;
  h = c[f >> 2] | 0;
  while (1) {
   s = s + 1 | 0;
   if ((s | 0) == (t | 0)) break;
   a[h >> 0] = a[s >> 0] | 0;
   h = h + 1 | 0;
  }
  c[f >> 2] = h;
 }
 switch (g & 176 | 0) {
 case 32:
  {
   c[e >> 2] = c[f >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[e >> 2] = d;
 }
 return;
}

function mk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 p = x + 88 | 0;
 r = x + 76 | 0;
 t = x + 64 | 0;
 v = x + 52 | 0;
 o = x + 48 | 0;
 q = x + 36 | 0;
 s = x + 24 | 0;
 u = x + 12 | 0;
 w = x;
 if (b) {
  d = Uf(d, 20872) | 0;
  pb[c[(c[d >> 2] | 0) + 44 >> 2] & 63](n, d);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  pb[c[(c[d >> 2] | 0) + 32 >> 2] & 63](p, d);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  ve(l, 0);
  c[l >> 2] = c[p >> 2];
  c[l + 4 >> 2] = c[p + 4 >> 2];
  c[l + 8 >> 2] = c[p + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[p + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(p);
  pb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](r, d);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  ve(k, 0);
  c[k >> 2] = c[r >> 2];
  c[k + 4 >> 2] = c[r + 4 >> 2];
  c[k + 8 >> 2] = c[r + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[r + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(r);
  c[f >> 2] = sb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
  c[g >> 2] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
  pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](t, d);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  je(h, 0);
  c[h >> 2] = c[t >> 2];
  c[h + 4 >> 2] = c[t + 4 >> 2];
  c[h + 8 >> 2] = c[t + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[t + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(t);
  pb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](v, d);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  ve(j, 0);
  c[j >> 2] = c[v >> 2];
  c[j + 4 >> 2] = c[v + 4 >> 2];
  c[j + 8 >> 2] = c[v + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[v + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(v);
  b = sb[c[(c[d >> 2] | 0) + 36 >> 2] & 63](d) | 0;
 } else {
  d = Uf(d, 20864) | 0;
  pb[c[(c[d >> 2] | 0) + 44 >> 2] & 63](o, d);
  v = c[o >> 2] | 0;
  a[e >> 0] = v;
  a[e + 1 >> 0] = v >> 8;
  a[e + 2 >> 0] = v >> 16;
  a[e + 3 >> 0] = v >> 24;
  pb[c[(c[d >> 2] | 0) + 32 >> 2] & 63](q, d);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  ve(l, 0);
  c[l >> 2] = c[q >> 2];
  c[l + 4 >> 2] = c[q + 4 >> 2];
  c[l + 8 >> 2] = c[q + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[q + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(q);
  pb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](s, d);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  ve(k, 0);
  c[k >> 2] = c[s >> 2];
  c[k + 4 >> 2] = c[s + 4 >> 2];
  c[k + 8 >> 2] = c[s + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[s + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(s);
  c[f >> 2] = sb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
  c[g >> 2] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
  pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](u, d);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  je(h, 0);
  c[h >> 2] = c[u >> 2];
  c[h + 4 >> 2] = c[u + 4 >> 2];
  c[h + 8 >> 2] = c[u + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[u + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  ge(u);
  pb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](w, d);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  ve(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  b = 0;
  while (1) {
   if ((b | 0) == 3) break;
   c[w + (b << 2) >> 2] = 0;
   b = b + 1 | 0;
  }
  se(w);
  b = sb[c[(c[d >> 2] | 0) + 36 >> 2] & 63](d) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function xd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = a + 4 | 0;
 o = c[n >> 2] | 0;
 d = o & -8;
 k = a + d | 0;
 i = c[4402] | 0;
 e = o & 3;
 if (!((e | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < k >>> 0)) za();
 f = c[k + 4 >> 2] | 0;
 if (!(f & 1)) za();
 if (!e) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (d >>> 0 >= (b + 4 | 0) >>> 0) if ((d - b | 0) >>> 0 <= c[4518] << 1 >>> 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (d >>> 0 >= b >>> 0) {
  d = d - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  m = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[m + 4 >> 2] = d | 3;
  b = m + d + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  yd(m, d);
  return a | 0;
 }
 if ((k | 0) == (c[4404] | 0)) {
  d = (c[4401] | 0) + d | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  m = d - b | 0;
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 1;
  c[4404] = l;
  c[4401] = m;
  return a | 0;
 }
 if ((k | 0) == (c[4403] | 0)) {
  e = (c[4400] | 0) + d | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   e = a + b | 0;
   m = e + d | 0;
   c[n >> 2] = o & 1 | b | 2;
   c[e + 4 >> 2] = d | 1;
   c[m >> 2] = d;
   b = m + 4 | 0;
   c[b >> 2] = c[b >> 2] & -2;
  } else {
   c[n >> 2] = o & 1 | e | 2;
   e = a + e + 4 | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[4400] = d;
  c[4403] = e;
  return a | 0;
 }
 if (f & 2 | 0) {
  a = 0;
  return a | 0;
 }
 l = (f & -8) + d | 0;
 if (l >>> 0 < b >>> 0) {
  a = 0;
  return a | 0;
 }
 m = l - b | 0;
 g = f >>> 3;
 do if (f >>> 0 < 256) {
  e = c[k + 8 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  d = 17632 + (g << 1 << 2) | 0;
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) za();
   if ((c[e + 12 >> 2] | 0) != (k | 0)) za();
  }
  if ((f | 0) == (e | 0)) {
   c[4398] = c[4398] & ~(1 << g);
   break;
  }
  if ((f | 0) == (d | 0)) h = f + 8 | 0; else {
   if (f >>> 0 < i >>> 0) za();
   d = f + 8 | 0;
   if ((c[d >> 2] | 0) == (k | 0)) h = d; else za();
  }
  c[e + 12 >> 2] = f;
  c[h >> 2] = e;
 } else {
  h = c[k + 24 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  do if ((f | 0) == (k | 0)) {
   e = k + 16 | 0;
   f = e + 4 | 0;
   d = c[f >> 2] | 0;
   if (!d) {
    d = c[e >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else e = f;
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g | 0) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < i >>> 0) za(); else {
    c[e >> 2] = 0;
    j = d;
    break;
   }
  } else {
   g = c[k + 8 >> 2] | 0;
   if (g >>> 0 < i >>> 0) za();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (k | 0)) za();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (k | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    j = f;
    break;
   } else za();
  } while (0);
  if (h | 0) {
   d = c[k + 28 >> 2] | 0;
   e = 17896 + (d << 2) | 0;
   if ((k | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = j;
    if (!j) {
     c[4399] = c[4399] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[4402] | 0) >>> 0) za();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (k | 0)) c[d >> 2] = j; else c[h + 20 >> 2] = j;
    if (!j) break;
   }
   f = c[4402] | 0;
   if (j >>> 0 < f >>> 0) za();
   c[j + 24 >> 2] = h;
   d = k + 16 | 0;
   e = c[d >> 2] | 0;
   do if (e | 0) if (e >>> 0 < f >>> 0) za(); else {
    c[j + 16 >> 2] = e;
    c[e + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (d | 0) if (d >>> 0 < (c[4402] | 0) >>> 0) za(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   }
  }
 } while (0);
 if (m >>> 0 < 16) {
  c[n >> 2] = l | o & 1 | 2;
  b = a + l + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 3;
  b = l + m + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  yd(l, m);
  return a | 0;
 }
 return 0;
}

function Jg(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 112 | 0;
 l = y;
 m = (f - e | 0) / 12 | 0;
 if (m >>> 0 > 100) {
  l = td(m) | 0;
  if (!l) $n(); else {
   w = l;
   k = l;
  }
 } else {
  w = 0;
  k = l;
 }
 p = e;
 l = 0;
 o = k;
 while (1) {
  if ((p | 0) == (f | 0)) break;
  n = a[p >> 0] | 0;
  if (!(n & 1)) n = (n & 255) >>> 1; else n = c[p + 4 >> 2] | 0;
  if (!n) {
   a[o >> 0] = 2;
   l = l + 1 | 0;
   m = m + -1 | 0;
  } else a[o >> 0] = 1;
  p = p + 12 | 0;
  o = o + 1 | 0;
 }
 v = 0;
 s = l;
 q = m;
 a : while (1) {
  l = c[b >> 2] | 0;
  do if (!l) o = 1; else {
   m = c[l + 12 >> 2] | 0;
   if ((m | 0) == (c[l + 16 >> 2] | 0)) l = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else l = c[m >> 2] | 0;
   if ((l | 0) == -1) {
    c[b >> 2] = 0;
    o = 1;
    break;
   } else {
    o = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  n = c[d >> 2] | 0;
  if (!n) {
   n = 0;
   l = 1;
  } else {
   l = c[n + 12 >> 2] | 0;
   if ((l | 0) == (c[n + 16 >> 2] | 0)) l = sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else l = c[l >> 2] | 0;
   if ((l | 0) == -1) {
    c[d >> 2] = 0;
    n = 0;
    l = 1;
   } else l = 0;
  }
  m = c[b >> 2] | 0;
  if (!((q | 0) != 0 & (o ^ l))) break;
  l = c[m + 12 >> 2] | 0;
  if ((l | 0) == (c[m + 16 >> 2] | 0)) l = sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else l = c[l >> 2] | 0;
  if (!j) l = yb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, l) | 0;
  u = v + 1 | 0;
  p = 0;
  r = e;
  t = q;
  q = k;
  while (1) {
   if ((r | 0) == (f | 0)) break;
   do if ((a[q >> 0] | 0) == 1) {
    if (!(a[r >> 0] & 1)) m = r + 4 | 0; else m = c[r + 8 >> 2] | 0;
    m = c[m + (v << 2) >> 2] | 0;
    if (!j) m = yb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, m) | 0;
    if ((l | 0) != (m | 0)) {
     a[q >> 0] = 0;
     m = p;
     n = s;
     o = t + -1 | 0;
     break;
    }
    m = a[r >> 0] | 0;
    if (!(m & 1)) m = (m & 255) >>> 1; else m = c[r + 4 >> 2] | 0;
    if ((m | 0) == (u | 0)) {
     a[q >> 0] = 2;
     m = 1;
     n = s + 1 | 0;
     o = t + -1 | 0;
    } else {
     m = 1;
     n = s;
     o = t;
    }
   } else {
    m = p;
    n = s;
    o = t;
   } while (0);
   p = m;
   r = r + 12 | 0;
   s = n;
   t = o;
   q = q + 1 | 0;
  }
  if (!p) {
   v = u;
   q = t;
   continue;
  }
  l = c[b >> 2] | 0;
  m = l + 12 | 0;
  n = c[m >> 2] | 0;
  if ((n | 0) == (c[l + 16 >> 2] | 0)) sb[c[(c[l >> 2] | 0) + 40 >> 2] & 63](l) | 0; else c[m >> 2] = n + 4;
  if ((s + t | 0) >>> 0 > 1) {
   o = e;
   l = s;
   n = k;
  } else {
   v = u;
   q = t;
   continue;
  }
  while (1) {
   if ((o | 0) == (f | 0)) {
    v = u;
    s = l;
    q = t;
    continue a;
   }
   if ((a[n >> 0] | 0) == 2) {
    m = a[o >> 0] | 0;
    if (!(m & 1)) m = (m & 255) >>> 1; else m = c[o + 4 >> 2] | 0;
    if ((m | 0) != (u | 0)) {
     a[n >> 0] = 0;
     l = l + -1 | 0;
    }
   }
   o = o + 12 | 0;
   n = n + 1 | 0;
  }
 }
 do if (!m) m = 1; else {
  l = c[m + 12 >> 2] | 0;
  if ((l | 0) == (c[m + 16 >> 2] | 0)) l = sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) == -1) {
   c[b >> 2] = 0;
   m = 1;
   break;
  } else {
   m = (c[b >> 2] | 0) == 0;
   break;
  }
 } while (0);
 do if (!n) x = 41; else {
  l = c[n + 12 >> 2] | 0;
  if ((l | 0) == (c[n + 16 >> 2] | 0)) l = sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) == -1) {
   c[d >> 2] = 0;
   x = 41;
   break;
  } else if (m) break; else {
   x = 77;
   break;
  }
 } while (0);
 if ((x | 0) == 41) if (m) x = 77;
 if ((x | 0) == 77) c[h >> 2] = c[h >> 2] | 2;
 while (1) {
  if ((e | 0) == (f | 0)) {
   x = 81;
   break;
  }
  if ((a[k >> 0] | 0) == 2) break;
  e = e + 12 | 0;
  k = k + 1 | 0;
 }
 if ((x | 0) == 81) {
  c[h >> 2] = c[h >> 2] | 4;
  e = f;
 }
 ud(w);
 i = y;
 return e | 0;
}

function nd(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 h = c[e >> 2] | 0;
 if (!g) m = 5; else {
  i = c[g >> 2] | 0;
  if (!i) m = 5; else if (!b) {
   g = f;
   j = h;
   m = 16;
  } else {
   c[g >> 2] = 0;
   l = b;
   g = f;
   k = i;
   m = 37;
  }
 }
 if ((m | 0) == 5) if (!b) {
  g = f;
  m = 7;
 } else {
  i = b;
  g = f;
  m = 6;
 }
 a : while (1) if ((m | 0) == 6) {
  if (!g) {
   m = 26;
   break;
  } else b = i;
  while (1) {
   i = a[h >> 0] | 0;
   do if (((i & 255) + -1 | 0) >>> 0 < 127) if (g >>> 0 > 4 & (h & 3 | 0) == 0) {
    j = h;
    while (1) {
     h = c[j >> 2] | 0;
     if ((h + -16843009 | h) & -2139062144 | 0) {
      i = h;
      h = j;
      m = 32;
      break;
     }
     c[b >> 2] = h & 255;
     c[b + 4 >> 2] = d[j + 1 >> 0];
     c[b + 8 >> 2] = d[j + 2 >> 0];
     h = j + 4 | 0;
     i = b + 16 | 0;
     c[b + 12 >> 2] = d[j + 3 >> 0];
     g = g + -4 | 0;
     if (g >>> 0 > 4) {
      b = i;
      j = h;
     } else {
      m = 31;
      break;
     }
    }
    if ((m | 0) == 31) {
     b = i;
     i = a[h >> 0] | 0;
     break;
    } else if ((m | 0) == 32) {
     i = i & 255;
     break;
    }
   } while (0);
   i = i & 255;
   if ((i + -1 | 0) >>> 0 >= 127) break;
   h = h + 1 | 0;
   c[b >> 2] = i;
   g = g + -1 | 0;
   if (!g) {
    m = 26;
    break a;
   } else b = b + 4 | 0;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  l = b;
  k = c[2848 + (i << 2) >> 2] | 0;
  h = h + 1 | 0;
  m = 37;
  continue;
 } else if ((m | 0) == 7) {
  i = a[h >> 0] | 0;
  if (((i & 255) + -1 | 0) >>> 0 < 127) if (!(h & 3)) {
   m = c[h >> 2] | 0;
   i = m & 255;
   if (!((m + -16843009 | m) & -2139062144)) {
    do {
     h = h + 4 | 0;
     g = g + -4 | 0;
     i = c[h >> 2] | 0;
    } while (((i + -16843009 | i) & -2139062144 | 0) == 0);
    i = i & 255;
   }
  }
  i = i & 255;
  if ((i + -1 | 0) >>> 0 < 127) {
   g = g + -1 | 0;
   h = h + 1 | 0;
   m = 7;
   continue;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  i = c[2848 + (i << 2) >> 2] | 0;
  j = h + 1 | 0;
  m = 16;
  continue;
 } else if ((m | 0) == 16) {
  m = (d[j >> 0] | 0) >>> 3;
  if ((m + -16 | m + (i >> 26)) >>> 0 > 7) {
   m = 17;
   break;
  }
  h = j + 1 | 0;
  if (i & 33554432) {
   if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
    m = 20;
    break;
   }
   h = j + 2 | 0;
   if (i & 524288) {
    if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
     m = 23;
     break;
    }
    h = j + 3 | 0;
   }
  }
  g = g + -1 | 0;
  m = 7;
  continue;
 } else if ((m | 0) == 37) {
  i = d[h >> 0] | 0;
  m = i >>> 3;
  if ((m + -16 | m + (k >> 26)) >>> 0 > 7) {
   m = 38;
   break;
  }
  j = h + 1 | 0;
  b = i + -128 | k << 6;
  if ((b | 0) < 0) {
   i = d[j >> 0] | 0;
   if ((i & 192 | 0) != 128) {
    m = 41;
    break;
   }
   j = h + 2 | 0;
   b = i + -128 | b << 6;
   if ((b | 0) < 0) {
    i = d[j >> 0] | 0;
    if ((i & 192 | 0) != 128) {
     m = 44;
     break;
    }
    b = i + -128 | b << 6;
    h = h + 3 | 0;
   } else h = j;
  } else h = j;
  c[l >> 2] = b;
  i = l + 4 | 0;
  g = g + -1 | 0;
  m = 6;
  continue;
 }
 if ((m | 0) == 17) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 20) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 23) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 26) c[e >> 2] = h; else if ((m | 0) == 38) {
  b = l;
  i = k;
  h = h + -1 | 0;
  m = 47;
 } else if ((m | 0) == 41) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 } else if ((m | 0) == 44) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 }
 if ((m | 0) == 47) if (!i) m = 48; else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 48) if (!(a[h >> 0] | 0)) {
  if (b | 0) {
   c[b >> 2] = 0;
   c[e >> 2] = 0;
  }
  f = f - g | 0;
 } else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 52) {
  c[(Qb() | 0) >> 2] = 84;
  if (!g) f = -1; else {
   c[e >> 2] = f;
   f = -1;
  }
 }
 return f | 0;
}

function Yf(b, e, f, g, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 m = z;
 n = (g - f | 0) / 12 | 0;
 if (n >>> 0 > 100) {
  m = td(n) | 0;
  if (!m) $n(); else {
   x = m;
   l = m;
  }
 } else {
  x = 0;
  l = m;
 }
 q = f;
 m = 0;
 p = l;
 while (1) {
  if ((q | 0) == (g | 0)) break;
  o = a[q >> 0] | 0;
  if (!(o & 1)) o = (o & 255) >>> 1; else o = c[q + 4 >> 2] | 0;
  if (!o) {
   a[p >> 0] = 2;
   m = m + 1 | 0;
   n = n + -1 | 0;
  } else a[p >> 0] = 1;
  q = q + 12 | 0;
  p = p + 1 | 0;
 }
 w = 0;
 t = m;
 r = n;
 a : while (1) {
  m = c[b >> 2] | 0;
  do if (!m) m = 0; else if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[b >> 2] = 0;
   m = 0;
   break;
  } else {
   m = c[b >> 2] | 0;
   break;
  } while (0);
  p = (m | 0) == 0;
  n = c[e >> 2] | 0;
  if (!n) n = 0; else if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0)) if ((sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1) {
   c[e >> 2] = 0;
   n = 0;
  }
  o = (n | 0) == 0;
  m = c[b >> 2] | 0;
  if (!((r | 0) != 0 & (p ^ o))) break;
  n = c[m + 12 >> 2] | 0;
  if ((n | 0) == (c[m + 16 >> 2] | 0)) m = sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[n >> 0] | 0;
  m = m & 255;
  if (!k) m = yb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, m) | 0;
  v = w + 1 | 0;
  q = 0;
  s = f;
  u = r;
  r = l;
  while (1) {
   if ((s | 0) == (g | 0)) break;
   do if ((a[r >> 0] | 0) == 1) {
    if (!(a[s >> 0] & 1)) n = s + 1 | 0; else n = c[s + 8 >> 2] | 0;
    n = a[n + w >> 0] | 0;
    if (!k) n = yb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, n) | 0;
    if (m << 24 >> 24 != n << 24 >> 24) {
     a[r >> 0] = 0;
     n = q;
     o = t;
     p = u + -1 | 0;
     break;
    }
    n = a[s >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[s + 4 >> 2] | 0;
    if ((n | 0) == (v | 0)) {
     a[r >> 0] = 2;
     n = 1;
     o = t + 1 | 0;
     p = u + -1 | 0;
    } else {
     n = 1;
     o = t;
     p = u;
    }
   } else {
    n = q;
    o = t;
    p = u;
   } while (0);
   q = n;
   s = s + 12 | 0;
   t = o;
   u = p;
   r = r + 1 | 0;
  }
  if (!q) {
   w = v;
   r = u;
   continue;
  }
  m = c[b >> 2] | 0;
  n = m + 12 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) sb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[n >> 2] = o + 1;
  if ((t + u | 0) >>> 0 > 1) {
   p = f;
   m = t;
   o = l;
  } else {
   w = v;
   r = u;
   continue;
  }
  while (1) {
   if ((p | 0) == (g | 0)) {
    w = v;
    t = m;
    r = u;
    continue a;
   }
   if ((a[o >> 0] | 0) == 2) {
    n = a[p >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[p + 4 >> 2] | 0;
    if ((n | 0) != (v | 0)) {
     a[o >> 0] = 0;
     m = m + -1 | 0;
    }
   }
   p = p + 12 | 0;
   o = o + 1 | 0;
  }
 }
 do if (!m) m = 0; else if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
  c[b >> 2] = 0;
  m = 0;
  break;
 } else {
  m = c[b >> 2] | 0;
  break;
 } while (0);
 m = (m | 0) == 0;
 do if (o) y = 34; else {
  if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0)) if ((sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1) {
   c[e >> 2] = 0;
   y = 34;
   break;
  }
  if (!m) y = 69;
 } while (0);
 if ((y | 0) == 34) if (m) y = 69;
 if ((y | 0) == 69) c[j >> 2] = c[j >> 2] | 2;
 while (1) {
  if ((f | 0) == (g | 0)) {
   y = 73;
   break;
  }
  if ((a[l >> 0] | 0) == 2) break;
  f = f + 12 | 0;
  l = l + 1 | 0;
 }
 if ((y | 0) == 73) {
  c[j >> 2] = c[j >> 2] | 4;
  f = g;
 }
 ud(x);
 i = z;
 return f | 0;
}

function Di(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = c[a >> 2] | 0;
 do if (!g) i = 1; else {
  h = c[g + 12 >> 2] | 0;
  if ((h | 0) == (c[g + 16 >> 2] | 0)) g = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[h >> 2] | 0;
  if ((g | 0) == -1) {
   c[a >> 2] = 0;
   i = 1;
   break;
  } else {
   i = (c[a >> 2] | 0) == 0;
   break;
  }
 } while (0);
 h = c[b >> 2] | 0;
 do if (!h) o = 14; else {
  g = c[h + 12 >> 2] | 0;
  if ((g | 0) == (c[h + 16 >> 2] | 0)) g = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else g = c[g >> 2] | 0;
  if ((g | 0) == -1) {
   c[b >> 2] = 0;
   o = 14;
   break;
  } else if (i) {
   o = 17;
   break;
  } else {
   o = 16;
   break;
  }
 } while (0);
 if ((o | 0) == 14) if (i) o = 16; else {
  h = 0;
  o = 17;
 }
 a : do if ((o | 0) == 16) {
  c[d >> 2] = c[d >> 2] | 6;
  g = 0;
 } else if ((o | 0) == 17) {
  g = c[a >> 2] | 0;
  i = c[g + 12 >> 2] | 0;
  if ((i | 0) == (c[g + 16 >> 2] | 0)) g = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[i >> 2] | 0;
  if (!(lb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, g) | 0)) {
   c[d >> 2] = c[d >> 2] | 4;
   g = 0;
   break;
  }
  g = (lb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, g, 0) | 0) << 24 >> 24;
  i = c[a >> 2] | 0;
  j = i + 12 | 0;
  k = c[j >> 2] | 0;
  if ((k | 0) == (c[i + 16 >> 2] | 0)) {
   sb[c[(c[i >> 2] | 0) + 40 >> 2] & 63](i) | 0;
   m = f;
   l = h;
   j = h;
  } else {
   c[j >> 2] = k + 4;
   m = f;
   l = h;
   j = h;
  }
  while (1) {
   g = g + -48 | 0;
   n = m + -1 | 0;
   h = c[a >> 2] | 0;
   do if (!h) k = 1; else {
    i = c[h + 12 >> 2] | 0;
    if ((i | 0) == (c[h + 16 >> 2] | 0)) h = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = c[i >> 2] | 0;
    if ((h | 0) == -1) {
     c[a >> 2] = 0;
     k = 1;
     break;
    } else {
     k = (c[a >> 2] | 0) == 0;
     break;
    }
   } while (0);
   do if (!j) {
    j = l;
    f = 0;
    h = 1;
   } else {
    h = c[j + 12 >> 2] | 0;
    if ((h | 0) == (c[j + 16 >> 2] | 0)) h = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
    if ((h | 0) == -1) {
     c[b >> 2] = 0;
     j = 0;
     f = 0;
     h = 1;
     break;
    } else {
     j = l;
     f = l;
     h = (l | 0) == 0;
     break;
    }
   } while (0);
   i = c[a >> 2] | 0;
   if (!((m | 0) > 1 & (k ^ h))) break;
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if (!(lb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, h) | 0)) break a;
   g = ((lb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, h, 0) | 0) << 24 >> 24) + (g * 10 | 0) | 0;
   h = c[a >> 2] | 0;
   i = h + 12 | 0;
   k = c[i >> 2] | 0;
   if ((k | 0) == (c[h + 16 >> 2] | 0)) {
    sb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
    m = n;
    l = j;
    j = f;
    continue;
   } else {
    c[i >> 2] = k + 4;
    m = n;
    l = j;
    j = f;
    continue;
   }
  }
  do if (!i) i = 1; else {
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) == -1) {
    c[a >> 2] = 0;
    i = 1;
    break;
   } else {
    i = (c[a >> 2] | 0) == 0;
    break;
   }
  } while (0);
  do if (!j) o = 60; else {
   h = c[j + 12 >> 2] | 0;
   if ((h | 0) == (c[j + 16 >> 2] | 0)) h = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) == -1) {
    c[b >> 2] = 0;
    o = 60;
    break;
   } else if (i) break a; else break;
  } while (0);
  if ((o | 0) == 60) if (!i) break;
  c[d >> 2] = c[d >> 2] | 2;
 } while (0);
 return g | 0;
}

function Gh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 x = i;
 i = i + 16 | 0;
 v = x;
 u = Uf(j, 19168) | 0;
 s = Uf(j, 19176) | 0;
 pb[c[(c[s >> 2] | 0) + 20 >> 2] & 63](v, s);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   t = yb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, j) | 0;
   k = c[h >> 2] | 0;
   c[h >> 2] = k + 4;
   c[k >> 2] = t;
   k = b + 1 | 0;
   break;
  }
 default:
  k = b;
 }
 t = e;
 a : do if ((t - k | 0) > 1) if ((a[k >> 0] | 0) == 48) {
  j = k + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    j = k;
    w = 10;
    break a;
   }
  }
  q = yb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, 48) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 4;
  c[r >> 2] = q;
  k = k + 2 | 0;
  r = yb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[j >> 0] | 0) | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 4;
  c[j >> 2] = r;
  j = k;
  while (1) {
   if (j >>> 0 >= e >>> 0) break a;
   r = a[j >> 0] | 0;
   if (!(Rc(r, cg() | 0) | 0)) break a;
   j = j + 1 | 0;
  }
 } else {
  j = k;
  w = 10;
 } else {
  j = k;
  w = 10;
 } while (0);
 b : do if ((w | 0) == 10) while (1) {
  w = 0;
  if (j >>> 0 >= e >>> 0) break b;
  r = a[j >> 0] | 0;
  if (!(Wc(r, cg() | 0) | 0)) break b;
  j = j + 1 | 0;
  w = 10;
 } while (0);
 q = a[v >> 0] | 0;
 r = v + 4 | 0;
 c : do if (!(((q & 1) == 0 ? (q & 255) >>> 1 : c[r >> 2] | 0) | 0)) {
  wb[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, k, j, c[h >> 2] | 0) | 0;
  k = (c[h >> 2] | 0) + (j - k << 2) | 0;
  c[h >> 2] = k;
  l = u;
 } else {
  d : do if ((k | 0) != (j | 0)) {
   l = j;
   m = k;
   while (1) {
    l = l + -1 | 0;
    if (m >>> 0 >= l >>> 0) break d;
    q = a[m >> 0] | 0;
    a[m >> 0] = a[l >> 0] | 0;
    a[l >> 0] = q;
    m = m + 1 | 0;
   }
  } while (0);
  n = sb[c[(c[s >> 2] | 0) + 16 >> 2] & 63](s) | 0;
  o = v + 8 | 0;
  p = v + 1 | 0;
  l = 0;
  m = 0;
  q = k;
  while (1) {
   if (q >>> 0 >= j >>> 0) break;
   y = a[((a[v >> 0] & 1) == 0 ? p : c[o >> 2] | 0) + m >> 0] | 0;
   if (y << 24 >> 24 > 0 & (l | 0) == (y << 24 >> 24 | 0)) {
    y = c[h >> 2] | 0;
    c[h >> 2] = y + 4;
    c[y >> 2] = n;
    y = a[v >> 0] | 0;
    l = 0;
    m = (m >>> 0 < (((y & 1) == 0 ? (y & 255) >>> 1 : c[r >> 2] | 0) + -1 | 0) >>> 0 & 1) + m | 0;
   }
   z = yb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[q >> 0] | 0) | 0;
   y = c[h >> 2] | 0;
   c[h >> 2] = y + 4;
   c[y >> 2] = z;
   l = l + 1 | 0;
   q = q + 1 | 0;
  }
  k = f + (k - b << 2) | 0;
  m = c[h >> 2] | 0;
  if ((k | 0) == (m | 0)) l = u; else {
   l = m;
   while (1) {
    l = l + -4 | 0;
    if (k >>> 0 >= l >>> 0) {
     l = u;
     k = m;
     break c;
    }
    z = c[k >> 2] | 0;
    c[k >> 2] = c[l >> 2];
    c[l >> 2] = z;
    k = k + 4 | 0;
   }
  }
 } while (0);
 while (1) {
  if (j >>> 0 >= e >>> 0) break;
  k = a[j >> 0] | 0;
  if (k << 24 >> 24 == 46) {
   w = 29;
   break;
  }
  y = yb[c[(c[l >> 2] | 0) + 44 >> 2] & 15](u, k) | 0;
  z = c[h >> 2] | 0;
  k = z + 4 | 0;
  c[h >> 2] = k;
  c[z >> 2] = y;
  j = j + 1 | 0;
 }
 if ((w | 0) == 29) {
  y = sb[c[(c[s >> 2] | 0) + 12 >> 2] & 63](s) | 0;
  z = c[h >> 2] | 0;
  k = z + 4 | 0;
  c[h >> 2] = k;
  c[z >> 2] = y;
  j = j + 1 | 0;
 }
 wb[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, j, e, k) | 0;
 z = (c[h >> 2] | 0) + (t - j << 2) | 0;
 c[h >> 2] = z;
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - b << 2) | 0;
 ge(v);
 i = x;
 return;
}

function Vh(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 i = c[a >> 2] | 0;
 do if (!i) i = 0; else if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
  c[a >> 2] = 0;
  i = 0;
  break;
 } else {
  i = c[a >> 2] | 0;
  break;
 } while (0);
 j = (i | 0) == 0;
 i = c[e >> 2] | 0;
 do if (!i) r = 11; else {
  if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
   c[e >> 2] = 0;
   r = 11;
   break;
  }
  if (j) r = 13; else r = 12;
 } while (0);
 if ((r | 0) == 11) if (j) r = 12; else {
  i = 0;
  r = 13;
 }
 a : do if ((r | 0) == 12) {
  c[f >> 2] = c[f >> 2] | 6;
  i = 0;
 } else if ((r | 0) == 13) {
  j = c[a >> 2] | 0;
  k = c[j + 12 >> 2] | 0;
  if ((k | 0) == (c[j + 16 >> 2] | 0)) j = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[k >> 0] | 0;
  k = j & 255;
  if (k << 24 >> 24 > -1) {
   q = g + 8 | 0;
   if (b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048) {
    m = (lb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, k, 0) | 0) << 24 >> 24;
    j = c[a >> 2] | 0;
    k = j + 12 | 0;
    l = c[k >> 2] | 0;
    if ((l | 0) == (c[j + 16 >> 2] | 0)) {
     sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
     o = h;
     n = i;
     h = i;
     i = m;
    } else {
     c[k >> 2] = l + 1;
     o = h;
     n = i;
     h = i;
     i = m;
    }
    while (1) {
     i = i + -48 | 0;
     p = o + -1 | 0;
     j = c[a >> 2] | 0;
     do if (!j) j = 0; else if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
      c[a >> 2] = 0;
      j = 0;
      break;
     } else {
      j = c[a >> 2] | 0;
      break;
     } while (0);
     l = (j | 0) == 0;
     if (!h) {
      k = n;
      h = 0;
     } else if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
      c[e >> 2] = 0;
      k = 0;
      h = 0;
     } else {
      k = n;
      h = n;
     } else k = n;
     j = c[a >> 2] | 0;
     if (!((o | 0) > 1 & (l ^ (h | 0) == 0))) break;
     l = c[j + 12 >> 2] | 0;
     if ((l | 0) == (c[j + 16 >> 2] | 0)) j = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[l >> 0] | 0;
     l = j & 255;
     if (l << 24 >> 24 <= -1) break a;
     if (!(b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048)) break a;
     i = ((lb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, l, 0) | 0) << 24 >> 24) + (i * 10 | 0) | 0;
     j = c[a >> 2] | 0;
     l = j + 12 | 0;
     m = c[l >> 2] | 0;
     if ((m | 0) == (c[j + 16 >> 2] | 0)) {
      sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
      o = p;
      n = k;
      continue;
     } else {
      c[l >> 2] = m + 1;
      o = p;
      n = k;
      continue;
     }
    }
    do if (!j) j = 0; else if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
     c[a >> 2] = 0;
     j = 0;
     break;
    } else {
     j = c[a >> 2] | 0;
     break;
    } while (0);
    j = (j | 0) == 0;
    do if (!k) r = 50; else {
     if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0)) if ((sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1) {
      c[e >> 2] = 0;
      r = 50;
      break;
     }
     if (j) break a;
    } while (0);
    if ((r | 0) == 50) if (!j) break;
    c[f >> 2] = c[f >> 2] | 2;
    break;
   }
  }
  c[f >> 2] = c[f >> 2] | 4;
  i = 0;
 } while (0);
 return i | 0;
}

function th(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 x = i;
 i = i + 16 | 0;
 v = x;
 u = Uf(j, 19136) | 0;
 s = Uf(j, 19148) | 0;
 pb[c[(c[s >> 2] | 0) + 20 >> 2] & 63](v, s);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   t = yb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, j) | 0;
   k = c[h >> 2] | 0;
   c[h >> 2] = k + 1;
   a[k >> 0] = t;
   k = b + 1 | 0;
   break;
  }
 default:
  k = b;
 }
 t = e;
 a : do if ((t - k | 0) > 1) if ((a[k >> 0] | 0) == 48) {
  j = k + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    j = k;
    w = 10;
    break a;
   }
  }
  q = yb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, 48) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 1;
  a[r >> 0] = q;
  k = k + 2 | 0;
  r = yb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, a[j >> 0] | 0) | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 1;
  a[j >> 0] = r;
  j = k;
  while (1) {
   if (j >>> 0 >= e >>> 0) break a;
   r = a[j >> 0] | 0;
   if (!(Rc(r, cg() | 0) | 0)) break a;
   j = j + 1 | 0;
  }
 } else {
  j = k;
  w = 10;
 } else {
  j = k;
  w = 10;
 } while (0);
 b : do if ((w | 0) == 10) while (1) {
  w = 0;
  if (j >>> 0 >= e >>> 0) break b;
  r = a[j >> 0] | 0;
  if (!(Wc(r, cg() | 0) | 0)) break b;
  j = j + 1 | 0;
  w = 10;
 } while (0);
 q = a[v >> 0] | 0;
 r = v + 4 | 0;
 c : do if (!(((q & 1) == 0 ? (q & 255) >>> 1 : c[r >> 2] | 0) | 0)) {
  wb[c[(c[u >> 2] | 0) + 32 >> 2] & 7](u, k, j, c[h >> 2] | 0) | 0;
  c[h >> 2] = (c[h >> 2] | 0) + (j - k);
  l = u;
 } else {
  d : do if ((k | 0) != (j | 0)) {
   l = j;
   m = k;
   while (1) {
    l = l + -1 | 0;
    if (m >>> 0 >= l >>> 0) break d;
    q = a[m >> 0] | 0;
    a[m >> 0] = a[l >> 0] | 0;
    a[l >> 0] = q;
    m = m + 1 | 0;
   }
  } while (0);
  n = sb[c[(c[s >> 2] | 0) + 16 >> 2] & 63](s) | 0;
  o = v + 8 | 0;
  p = v + 1 | 0;
  l = 0;
  m = 0;
  q = k;
  while (1) {
   if (q >>> 0 >= j >>> 0) break;
   y = a[((a[v >> 0] & 1) == 0 ? p : c[o >> 2] | 0) + m >> 0] | 0;
   if (y << 24 >> 24 > 0 & (l | 0) == (y << 24 >> 24 | 0)) {
    y = c[h >> 2] | 0;
    c[h >> 2] = y + 1;
    a[y >> 0] = n;
    y = a[v >> 0] | 0;
    l = 0;
    m = (m >>> 0 < (((y & 1) == 0 ? (y & 255) >>> 1 : c[r >> 2] | 0) + -1 | 0) >>> 0 & 1) + m | 0;
   }
   z = yb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, a[q >> 0] | 0) | 0;
   y = c[h >> 2] | 0;
   c[h >> 2] = y + 1;
   a[y >> 0] = z;
   l = l + 1 | 0;
   q = q + 1 | 0;
  }
  l = f + (k - b) | 0;
  k = c[h >> 2] | 0;
  if ((l | 0) == (k | 0)) l = u; else while (1) {
   k = k + -1 | 0;
   if (l >>> 0 >= k >>> 0) {
    l = u;
    break c;
   }
   z = a[l >> 0] | 0;
   a[l >> 0] = a[k >> 0] | 0;
   a[k >> 0] = z;
   l = l + 1 | 0;
  }
 } while (0);
 while (1) {
  if (j >>> 0 >= e >>> 0) break;
  k = a[j >> 0] | 0;
  if (k << 24 >> 24 == 46) {
   w = 29;
   break;
  }
  y = yb[c[(c[l >> 2] | 0) + 28 >> 2] & 15](u, k) | 0;
  z = c[h >> 2] | 0;
  c[h >> 2] = z + 1;
  a[z >> 0] = y;
  j = j + 1 | 0;
 }
 if ((w | 0) == 29) {
  y = sb[c[(c[s >> 2] | 0) + 12 >> 2] & 63](s) | 0;
  z = c[h >> 2] | 0;
  c[h >> 2] = z + 1;
  a[z >> 0] = y;
  j = j + 1 | 0;
 }
 wb[c[(c[u >> 2] | 0) + 32 >> 2] & 7](u, j, e, c[h >> 2] | 0) | 0;
 z = (c[h >> 2] | 0) + (t - j) | 0;
 c[h >> 2] = z;
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - b) | 0;
 ge(v);
 i = x;
 return;
}

function ro(a, b, d, e, f) {
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
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
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
   return (D = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((ko(i | 0) | 0) >>> 0);
   return (D = n, f) | 0;
  }
  g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
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
   return (D = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (D = n, f) | 0;
 } else {
  if (!g) {
   g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
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
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (ba(h | 0) | 0) + 33 - (ba(k | 0) | 0) | 0;
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
   return (D = o, p) | 0;
  } else {
   p = ko(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = eo(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   bo(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = bo(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = D;
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
 return (D = o, p) | 0;
}

function Xg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 304 | 0;
 r = z + 200 | 0;
 j = z + 196 | 0;
 y = z + 184 | 0;
 x = z + 172 | 0;
 v = z + 168 | 0;
 w = z + 8 | 0;
 t = z + 4 | 0;
 s = z;
 switch (c[f + 4 >> 2] & 74 | 0) {
 case 64:
  {
   u = 8;
   break;
  }
 case 8:
  {
   u = 16;
   break;
  }
 case 0:
  {
   u = 0;
   break;
  }
 default:
  u = 10;
 }
 Mg(y, f, r, j);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (!j) {
   j = 0;
   l = 1;
  } else {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  }
  k = c[e >> 2] | 0;
  do if (!k) A = 23; else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    A = 23;
    break;
   } else if (l) {
    m = k;
    break;
   } else break a;
  } while (0);
  if ((A | 0) == 23) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   le(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   le(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (Ng(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if (((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) if ((b - w | 0) < 160) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = sg(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 dg(y, w, b, g);
 if (!j) f = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!k) A = 51; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   A = 51;
   break;
  } else if (f) break; else {
   A = 53;
   break;
  }
 } while (0);
 if ((A | 0) == 51) if (f) A = 53;
 if ((A | 0) == 53) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function Pg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 304 | 0;
 r = z + 200 | 0;
 j = z + 196 | 0;
 y = z + 184 | 0;
 x = z + 172 | 0;
 v = z + 168 | 0;
 w = z + 8 | 0;
 t = z + 4 | 0;
 s = z;
 switch (c[f + 4 >> 2] & 74 | 0) {
 case 64:
  {
   u = 8;
   break;
  }
 case 8:
  {
   u = 16;
   break;
  }
 case 0:
  {
   u = 0;
   break;
  }
 default:
  u = 10;
 }
 Mg(y, f, r, j);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (!j) {
   j = 0;
   l = 1;
  } else {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  }
  k = c[e >> 2] | 0;
  do if (!k) A = 23; else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    A = 23;
    break;
   } else if (l) {
    m = k;
    break;
   } else break a;
  } while (0);
  if ((A | 0) == 23) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   le(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   le(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (Ng(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if (((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) if ((b - w | 0) < 160) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = gg(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 dg(y, w, b, g);
 if (!j) f = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!k) A = 51; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   A = 51;
   break;
  } else if (f) break; else {
   A = 53;
   break;
  }
 } while (0);
 if ((A | 0) == 51) if (f) A = 53;
 if ((A | 0) == 53) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function Vg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 304 | 0;
 r = z + 200 | 0;
 j = z + 196 | 0;
 y = z + 184 | 0;
 x = z + 172 | 0;
 v = z + 168 | 0;
 w = z + 8 | 0;
 t = z + 4 | 0;
 s = z;
 switch (c[f + 4 >> 2] & 74 | 0) {
 case 64:
  {
   u = 8;
   break;
  }
 case 8:
  {
   u = 16;
   break;
  }
 case 0:
  {
   u = 0;
   break;
  }
 default:
  u = 10;
 }
 Mg(y, f, r, j);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (!j) {
   j = 0;
   l = 1;
  } else {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  }
  k = c[e >> 2] | 0;
  do if (!k) A = 23; else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    A = 23;
    break;
   } else if (l) {
    m = k;
    break;
   } else break a;
  } while (0);
  if ((A | 0) == 23) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   le(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   le(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (Ng(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if (((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) if ((b - w | 0) < 160) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = pg(f, c[v >> 2] | 0, g, u) | 0;
 dg(y, w, b, g);
 if (!j) f = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!k) A = 51; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   A = 51;
   break;
  } else if (f) break; else {
   A = 53;
   break;
  }
 } while (0);
 if ((A | 0) == 51) if (f) A = 53;
 if ((A | 0) == 53) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function Tg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 304 | 0;
 r = z + 200 | 0;
 j = z + 196 | 0;
 y = z + 184 | 0;
 x = z + 172 | 0;
 v = z + 168 | 0;
 w = z + 8 | 0;
 t = z + 4 | 0;
 s = z;
 switch (c[f + 4 >> 2] & 74 | 0) {
 case 64:
  {
   u = 8;
   break;
  }
 case 8:
  {
   u = 16;
   break;
  }
 case 0:
  {
   u = 0;
   break;
  }
 default:
  u = 10;
 }
 Mg(y, f, r, j);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (!j) {
   j = 0;
   l = 1;
  } else {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  }
  k = c[e >> 2] | 0;
  do if (!k) A = 23; else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    A = 23;
    break;
   } else if (l) {
    m = k;
    break;
   } else break a;
  } while (0);
  if ((A | 0) == 23) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   le(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   le(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (Ng(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if (((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) if ((b - w | 0) < 160) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = mg(f, c[v >> 2] | 0, g, u) | 0;
 dg(y, w, b, g);
 if (!j) f = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!k) A = 51; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   A = 51;
   break;
  } else if (f) break; else {
   A = 53;
   break;
  }
 } while (0);
 if ((A | 0) == 51) if (f) A = 53;
 if ((A | 0) == 53) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function Rg(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 304 | 0;
 s = A + 200 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 Mg(z, g, s, k);
 d = 0;
 while (1) {
  if ((d | 0) == 3) break;
  c[y + (d << 2) >> 2] = 0;
  d = d + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
 le(y, d, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = g;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = c[k >> 2] | 0;
 k = c[e >> 2] | 0;
 a : while (1) {
  if (!k) {
   k = 0;
   m = 1;
  } else {
   d = c[k + 12 >> 2] | 0;
   if ((d | 0) == (c[k + 16 >> 2] | 0)) d = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) == -1) {
    c[e >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  }
  l = c[f >> 2] | 0;
  do if (!l) B = 23; else {
   d = c[l + 12 >> 2] | 0;
   if ((d | 0) == (c[l + 16 >> 2] | 0)) d = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) == -1) {
    c[f >> 2] = 0;
    B = 23;
    break;
   } else if (m) {
    n = l;
    break;
   } else break a;
  } while (0);
  if ((B | 0) == 23) {
   B = 0;
   if (m) {
    l = 0;
    break;
   } else n = 0;
  }
  l = a[y >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (g + l | 0)) {
   le(y, l << 1, 0);
   if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
   le(y, d, 0);
   g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = g + l;
  }
  l = k + 12 | 0;
  d = c[l >> 2] | 0;
  m = k + 16 | 0;
  if ((d | 0) == (c[m >> 2] | 0)) d = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if (Ng(d, v, g, w, t, o, z, x, u, s) | 0) {
   l = n;
   break;
  }
  d = c[l >> 2] | 0;
  if ((d | 0) == (c[m >> 2] | 0)) {
   sb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[l >> 2] = d + 4;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 d = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((d - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = d + 4 | 0;
  c[u >> 2] = t;
  c[d >> 2] = s;
  d = t;
 }
 b[j >> 1] = jg(g, c[w >> 2] | 0, h, v) | 0;
 dg(z, x, d, h);
 if (!k) g = 1; else {
  d = c[k + 12 >> 2] | 0;
  if ((d | 0) == (c[k + 16 >> 2] | 0)) d = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) == -1) {
   c[e >> 2] = 0;
   g = 1;
  } else g = 0;
 }
 do if (!l) B = 51; else {
  d = c[l + 12 >> 2] | 0;
  if ((d | 0) == (c[l + 16 >> 2] | 0)) d = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) == -1) {
   c[f >> 2] = 0;
   B = 51;
   break;
  } else if (g) break; else {
   B = 53;
   break;
  }
 } while (0);
 if ((B | 0) == 51) if (g) B = 53;
 if ((B | 0) == 53) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function Lg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 304 | 0;
 r = z + 200 | 0;
 j = z + 196 | 0;
 y = z + 184 | 0;
 x = z + 172 | 0;
 v = z + 168 | 0;
 w = z + 8 | 0;
 t = z + 4 | 0;
 s = z;
 switch (c[f + 4 >> 2] & 74 | 0) {
 case 64:
  {
   u = 8;
   break;
  }
 case 8:
  {
   u = 16;
   break;
  }
 case 0:
  {
   u = 0;
   break;
  }
 default:
  u = 10;
 }
 Mg(y, f, r, j);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (!j) {
   j = 0;
   l = 1;
  } else {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  }
  k = c[e >> 2] | 0;
  do if (!k) A = 23; else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    A = 23;
    break;
   } else if (l) {
    m = k;
    break;
   } else break a;
  } while (0);
  if ((A | 0) == 23) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   le(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   le(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (Ng(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if (((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) if ((b - w | 0) < 160) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = bg(f, c[v >> 2] | 0, g, u) | 0;
 dg(y, w, b, g);
 if (!j) f = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!k) A = 51; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   A = 51;
   break;
  } else if (f) break; else {
   A = 53;
   break;
  }
 } while (0);
 if ((A | 0) == 51) if (f) A = 53;
 if ((A | 0) == 53) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function dh(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 200 | 0;
 l = C + 196 | 0;
 B = C + 184 | 0;
 A = C + 172 | 0;
 y = C + 168 | 0;
 z = C + 8 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 _g(B, f, t, k, l);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[A + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 le(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (!k) {
   k = 0;
   m = 1;
  } else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  }
  l = c[e >> 2] | 0;
  do if (!l) D = 19; else {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    D = 19;
    break;
   } else if (m) break; else break a;
  } while (0);
  if ((D | 0) == 19) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   le(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   le(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ($g(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0)) if ((b - z | 0) < 160) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +Dg(f, c[y >> 2] | 0, g);
 dg(B, z, b, g);
 if (!k) f = 1; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!l) D = 47; else {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   D = 47;
   break;
  } else if (f) break; else {
   D = 49;
   break;
  }
 } while (0);
 if ((D | 0) == 47) if (f) D = 49;
 if ((D | 0) == 49) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 ge(A);
 ge(B);
 i = C;
 return D | 0;
}

function bh(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 200 | 0;
 l = C + 196 | 0;
 B = C + 184 | 0;
 A = C + 172 | 0;
 y = C + 168 | 0;
 z = C + 8 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 _g(B, f, t, k, l);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[A + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 le(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (!k) {
   k = 0;
   m = 1;
  } else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  }
  l = c[e >> 2] | 0;
  do if (!l) D = 19; else {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    D = 19;
    break;
   } else if (m) break; else break a;
  } while (0);
  if ((D | 0) == 19) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   le(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   le(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ($g(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0)) if ((b - z | 0) < 160) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +Ag(f, c[y >> 2] | 0, g);
 dg(B, z, b, g);
 if (!k) f = 1; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!l) D = 47; else {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   D = 47;
   break;
  } else if (f) break; else {
   D = 49;
   break;
  }
 } while (0);
 if ((D | 0) == 47) if (f) D = 49;
 if ((D | 0) == 49) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 ge(A);
 ge(B);
 i = C;
 return D | 0;
}

function Zg(b, d, e, f, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 200 | 0;
 l = C + 196 | 0;
 B = C + 184 | 0;
 A = C + 172 | 0;
 y = C + 168 | 0;
 z = C + 8 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 _g(B, f, t, k, l);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[A + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 le(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (!k) {
   k = 0;
   m = 1;
  } else {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  }
  l = c[e >> 2] | 0;
  do if (!l) D = 19; else {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[e >> 2] = 0;
    D = 19;
    break;
   } else if (m) break; else break a;
  } while (0);
  if ((D | 0) == 19) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   le(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   le(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ($g(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0)) if ((b - z | 0) < 160) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 g[j >> 2] = +xg(f, c[y >> 2] | 0, h);
 dg(B, z, b, h);
 if (!k) f = 1; else {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = sb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 }
 do if (!l) D = 47; else {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   D = 47;
   break;
  } else if (f) break; else {
   D = 49;
   break;
  }
 } while (0);
 if ((D | 0) == 47) if (f) D = 49;
 if ((D | 0) == 49) c[h >> 2] = c[h >> 2] | 2;
 D = c[d >> 2] | 0;
 ge(A);
 ge(B);
 i = C;
 return D | 0;
}

function eh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 y = i;
 i = i + 320 | 0;
 v = y;
 q = y + 208 | 0;
 x = y + 196 | 0;
 b = y + 180 | 0;
 w = y + 184 | 0;
 u = y + 176 | 0;
 s = y + 16 | 0;
 t = y + 8 | 0;
 r = y + 4 | 0;
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[x + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 p = vf(f) | 0;
 c[b >> 2] = p;
 b = Uf(b, 19168) | 0;
 wb[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 14074, 14100, q) | 0;
 ln(p) | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[w + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
 le(w, b, 0);
 o = w + 8 | 0;
 p = w + 1 | 0;
 b = (a[w >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[u >> 2] = b;
 c[t >> 2] = s;
 c[r >> 2] = 0;
 n = w + 4 | 0;
 f = c[d >> 2] | 0;
 a : while (1) {
  if (!f) {
   j = 0;
   l = 1;
  } else {
   j = c[f + 12 >> 2] | 0;
   if ((j | 0) == (c[f + 16 >> 2] | 0)) j = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else j = c[j >> 2] | 0;
   if ((j | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else {
    j = f;
    l = 0;
   }
  }
  f = c[e >> 2] | 0;
  do if (!f) z = 22; else {
   k = c[f + 12 >> 2] | 0;
   if ((k | 0) == (c[f + 16 >> 2] | 0)) k = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else k = c[k >> 2] | 0;
   if ((k | 0) == -1) {
    c[e >> 2] = 0;
    z = 22;
    break;
   } else if (l) break; else break a;
  } while (0);
  if ((z | 0) == 22) {
   z = 0;
   if (l) {
    f = 0;
    break;
   } else f = 0;
  }
  k = a[w >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[n >> 2] | 0;
  if ((c[u >> 2] | 0) == (b + k | 0)) {
   le(w, k << 1, 0);
   if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
   le(w, b, 0);
   b = (a[w >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[u >> 2] = b + k;
  }
  l = j + 12 | 0;
  k = c[l >> 2] | 0;
  m = j + 16 | 0;
  if ((k | 0) == (c[m >> 2] | 0)) k = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else k = c[k >> 2] | 0;
  if (Ng(k, 16, b, u, r, 0, x, s, t, q) | 0) break;
  f = c[l >> 2] | 0;
  if ((f | 0) == (c[m >> 2] | 0)) {
   sb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   f = j;
   continue;
  } else {
   c[l >> 2] = f + 4;
   f = j;
   continue;
  }
 }
 le(w, (c[u >> 2] | 0) - b | 0, 0);
 t = (a[w >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 u = cg() | 0;
 c[v >> 2] = h;
 if ((Fg(t, u, 14109, v) | 0) != 1) c[g >> 2] = 4;
 if (!j) j = 1; else {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = sb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   j = 1;
  } else j = 0;
 }
 do if (!f) z = 49; else {
  b = c[f + 12 >> 2] | 0;
  if ((b | 0) == (c[f + 16 >> 2] | 0)) b = sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   z = 49;
   break;
  } else if (j) break; else {
   z = 51;
   break;
  }
 } while (0);
 if ((z | 0) == 49) if (j) z = 51;
 if ((z | 0) == 51) c[g >> 2] = c[g >> 2] | 2;
 z = c[d >> 2] | 0;
 ge(w);
 ge(x);
 i = y;
 return z | 0;
}

function vl(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if (!(g & 4)) {
  m = b;
  h = 0;
 } else if ((n - b | 0) > 2) if ((a[b >> 0] | 0) == -17) if ((a[b + 1 >> 0] | 0) == -69) {
  m = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b;
  h = 0;
 } else {
  m = b;
  h = 0;
 } else {
  m = b;
  h = 0;
 } else {
  m = b;
  h = 0;
 }
 a : while (1) {
  if (!(h >>> 0 < e >>> 0 & m >>> 0 < c >>> 0)) {
   g = m;
   h = 40;
   break;
  }
  g = a[m >> 0] | 0;
  l = g & 255;
  if (l >>> 0 > f >>> 0) {
   g = m;
   h = 40;
   break;
  }
  do if (g << 24 >> 24 > -1) g = m + 1 | 0; else {
   if ((g & 255) < 194) {
    g = m;
    h = 40;
    break a;
   }
   if ((g & 255) < 224) {
    if ((n - m | 0) < 2) {
     g = m;
     h = 40;
     break a;
    }
    g = d[m + 1 >> 0] | 0;
    if ((g & 192 | 0) != 128) {
     g = m;
     h = 40;
     break a;
    }
    if ((g & 63 | l << 6 & 1984) >>> 0 > f >>> 0) {
     g = m;
     h = 40;
     break a;
    } else {
     g = m + 2 | 0;
     break;
    }
   }
   if ((g & 255) < 240) {
    g = m;
    if ((n - g | 0) < 3) {
     g = m;
     h = 40;
     break a;
    }
    j = a[m + 1 >> 0] | 0;
    i = a[m + 2 >> 0] | 0;
    switch (l | 0) {
    case 224:
     {
      if ((j & -32) << 24 >> 24 != -96) {
       h = 19;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((j & -32) << 24 >> 24 != -128) {
       h = 21;
       break a;
      }
      break;
     }
    default:
     if ((j & -64) << 24 >> 24 != -128) {
      h = 23;
      break a;
     }
    }
    g = i & 255;
    if ((g & 192 | 0) != 128) {
     g = m;
     h = 40;
     break a;
    }
    if (((j & 255) << 6 & 4032 | l << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
     g = m;
     h = 40;
     break a;
    } else {
     g = m + 3 | 0;
     break;
    }
   }
   if ((g & 255) >= 245) {
    g = m;
    h = 40;
    break a;
   }
   g = m;
   if ((e - h | 0) >>> 0 < 2 | (n - g | 0) < 4) {
    g = m;
    h = 40;
    break a;
   }
   k = a[m + 1 >> 0] | 0;
   i = a[m + 2 >> 0] | 0;
   j = a[m + 3 >> 0] | 0;
   switch (l | 0) {
   case 240:
    {
     if ((k + 112 & 255) >= 48) {
      h = 30;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((k & -16) << 24 >> 24 != -128) {
      h = 32;
      break a;
     }
     break;
    }
   default:
    if ((k & -64) << 24 >> 24 != -128) {
     h = 34;
     break a;
    }
   }
   i = i & 255;
   if ((i & 192 | 0) != 128) {
    g = m;
    h = 40;
    break a;
   }
   g = j & 255;
   if ((g & 192 | 0) != 128) {
    g = m;
    h = 40;
    break a;
   }
   if (((k & 255) << 12 & 258048 | l << 18 & 1835008 | i << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
    g = m;
    h = 40;
    break a;
   }
   g = m + 4 | 0;
   h = h + 1 | 0;
  } while (0);
  m = g;
  h = h + 1 | 0;
 }
 if ((h | 0) == 19) g = g - b | 0; else if ((h | 0) == 21) g = g - b | 0; else if ((h | 0) == 23) g = g - b | 0; else if ((h | 0) == 30) g = g - b | 0; else if ((h | 0) == 32) g = g - b | 0; else if ((h | 0) == 34) g = g - b | 0; else if ((h | 0) == 40) g = g - b | 0;
 return g | 0;
}

function Vk(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if (!(g & 4)) {
  l = b;
  m = 0;
 } else if ((n - b | 0) > 2) if ((a[b >> 0] | 0) == -17) if ((a[b + 1 >> 0] | 0) == -69) {
  l = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b;
  m = 0;
 } else {
  l = b;
  m = 0;
 } else {
  l = b;
  m = 0;
 } else {
  l = b;
  m = 0;
 }
 a : while (1) {
  if (!(m >>> 0 < e >>> 0 & l >>> 0 < c >>> 0)) {
   g = l;
   h = 40;
   break;
  }
  g = a[l >> 0] | 0;
  k = g & 255;
  do if (g << 24 >> 24 > -1) {
   if (k >>> 0 > f >>> 0) {
    g = l;
    h = 40;
    break a;
   }
   g = l + 1 | 0;
  } else {
   if ((g & 255) < 194) {
    g = l;
    h = 40;
    break a;
   }
   if ((g & 255) < 224) {
    if ((n - l | 0) < 2) {
     g = l;
     h = 40;
     break a;
    }
    g = d[l + 1 >> 0] | 0;
    if ((g & 192 | 0) != 128) {
     g = l;
     h = 40;
     break a;
    }
    if ((g & 63 | k << 6 & 1984) >>> 0 > f >>> 0) {
     g = l;
     h = 40;
     break a;
    }
    g = l + 2 | 0;
    break;
   }
   if ((g & 255) < 240) {
    g = l;
    if ((n - g | 0) < 3) {
     g = l;
     h = 40;
     break a;
    }
    i = a[l + 1 >> 0] | 0;
    h = a[l + 2 >> 0] | 0;
    switch (k | 0) {
    case 224:
     {
      if ((i & -32) << 24 >> 24 != -96) {
       h = 20;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((i & -32) << 24 >> 24 != -128) {
       h = 22;
       break a;
      }
      break;
     }
    default:
     if ((i & -64) << 24 >> 24 != -128) {
      h = 24;
      break a;
     }
    }
    g = h & 255;
    if ((g & 192 | 0) != 128) {
     g = l;
     h = 40;
     break a;
    }
    if (((i & 255) << 6 & 4032 | k << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
     g = l;
     h = 40;
     break a;
    } else {
     g = l + 3 | 0;
     break;
    }
   }
   if ((g & 255) >= 245) {
    g = l;
    h = 40;
    break a;
   }
   g = l;
   if ((n - g | 0) < 4) {
    g = l;
    h = 40;
    break a;
   }
   j = a[l + 1 >> 0] | 0;
   h = a[l + 2 >> 0] | 0;
   i = a[l + 3 >> 0] | 0;
   switch (k | 0) {
   case 240:
    {
     if ((j + 112 & 255) >= 48) {
      h = 31;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((j & -16) << 24 >> 24 != -128) {
      h = 33;
      break a;
     }
     break;
    }
   default:
    if ((j & -64) << 24 >> 24 != -128) {
     h = 35;
     break a;
    }
   }
   h = h & 255;
   if ((h & 192 | 0) != 128) {
    g = l;
    h = 40;
    break a;
   }
   g = i & 255;
   if ((g & 192 | 0) != 128) {
    g = l;
    h = 40;
    break a;
   }
   if (((j & 255) << 12 & 258048 | k << 18 & 1835008 | h << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
    g = l;
    h = 40;
    break a;
   } else g = l + 4 | 0;
  } while (0);
  l = g;
  m = m + 1 | 0;
 }
 if ((h | 0) == 20) g = g - b | 0; else if ((h | 0) == 22) g = g - b | 0; else if ((h | 0) == 24) g = g - b | 0; else if ((h | 0) == 31) g = g - b | 0; else if ((h | 0) == 33) g = g - b | 0; else if ((h | 0) == 35) g = g - b | 0; else if ((h | 0) == 40) g = g - b | 0;
 return g | 0;
}

function ql(e, f, g, h, i, j, k, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 c[g >> 2] = e;
 c[j >> 2] = h;
 if (!(l & 4)) l = f; else {
  e = c[g >> 2] | 0;
  l = f;
  if ((l - e | 0) > 2) if ((a[e >> 0] | 0) == -17) if ((a[e + 1 >> 0] | 0) == -69) if ((a[e + 2 >> 0] | 0) == -65) c[g >> 2] = e + 3;
 }
 q = i;
 a : while (1) {
  n = c[g >> 2] | 0;
  e = n >>> 0 < f >>> 0;
  if (!e) {
   s = 41;
   break;
  }
  r = c[j >> 2] | 0;
  if (r >>> 0 >= i >>> 0) {
   s = 41;
   break;
  }
  e = a[n >> 0] | 0;
  p = e & 255;
  if (p >>> 0 > k >>> 0) {
   e = 2;
   break;
  }
  do if (e << 24 >> 24 > -1) {
   b[r >> 1] = e & 255;
   c[g >> 2] = n + 1;
  } else {
   if ((e & 255) < 194) {
    e = 2;
    break a;
   }
   if ((e & 255) < 224) {
    if ((l - n | 0) < 2) {
     e = 1;
     break a;
    }
    e = d[n + 1 >> 0] | 0;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = e & 63 | p << 6 & 1984;
    if (e >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[r >> 1] = e;
    c[g >> 2] = n + 2;
    break;
   }
   if ((e & 255) < 240) {
    if ((l - n | 0) < 3) {
     e = 1;
     break a;
    }
    h = a[n + 1 >> 0] | 0;
    e = a[n + 2 >> 0] | 0;
    switch (p | 0) {
    case 224:
     {
      if ((h & -32) << 24 >> 24 != -96) {
       e = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((h & -32) << 24 >> 24 != -128) {
       e = 2;
       break a;
      }
      break;
     }
    default:
     if ((h & -64) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
    }
    e = e & 255;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = (h & 255) << 6 & 4032 | p << 12 | e & 63;
    if ((e & 65535) >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[r >> 1] = e;
    c[g >> 2] = n + 3;
    break;
   }
   if ((e & 255) >= 245) {
    e = 2;
    break a;
   }
   if ((l - n | 0) < 4) {
    e = 1;
    break a;
   }
   m = a[n + 1 >> 0] | 0;
   e = a[n + 2 >> 0] | 0;
   h = a[n + 3 >> 0] | 0;
   switch (p | 0) {
   case 240:
    {
     if ((m + 112 & 255) >= 48) {
      e = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((m & -16) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
     break;
    }
   default:
    if ((m & -64) << 24 >> 24 != -128) {
     e = 2;
     break a;
    }
   }
   o = e & 255;
   if ((o & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   e = h & 255;
   if ((e & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   if ((q - r | 0) < 4) {
    e = 1;
    break a;
   }
   n = p & 7;
   m = m & 255;
   h = o << 6;
   e = e & 63;
   if ((m << 12 & 258048 | n << 18 | h & 4032 | e) >>> 0 > k >>> 0) {
    e = 2;
    break a;
   }
   b[r >> 1] = m << 2 & 60 | o >>> 4 & 3 | ((m >>> 4 & 3 | n << 2) << 6) + 16320 | 55296;
   r = r + 2 | 0;
   c[j >> 2] = r;
   b[r >> 1] = e | h & 960 | 56320;
   c[g >> 2] = (c[g >> 2] | 0) + 4;
  } while (0);
  c[j >> 2] = (c[j >> 2] | 0) + 2;
 }
 if ((s | 0) == 41) e = e & 1;
 return e | 0;
}

function rg(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 224 | 0;
 s = A + 198 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 $f(z, g, s, k);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[y + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 le(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (!l) B = 20; else {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    B = 20;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((B | 0) == 20) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   le(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   le(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (ag(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((g - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = sg(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 dg(z, x, g, h);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!l) B = 45; else {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
   c[f >> 2] = 0;
   B = 45;
   break;
  }
  if (!b) B = 46;
 } while (0);
 if ((B | 0) == 45) if (b) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function fg(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 224 | 0;
 s = A + 198 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 $f(z, g, s, k);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[y + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 le(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (!l) B = 20; else {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    B = 20;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((B | 0) == 20) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   le(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   le(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (ag(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((g - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = gg(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 dg(z, x, g, h);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!l) B = 45; else {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
   c[f >> 2] = 0;
   B = 45;
   break;
  }
  if (!b) B = 46;
 } while (0);
 if ((B | 0) == 45) if (b) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function og(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 224 | 0;
 s = A + 198 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 $f(z, g, s, k);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[y + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 le(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (!l) B = 20; else {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    B = 20;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((B | 0) == 20) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   le(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   le(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (ag(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((g - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = pg(k, c[w >> 2] | 0, h, v) | 0;
 dg(z, x, g, h);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!l) B = 45; else {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
   c[f >> 2] = 0;
   B = 45;
   break;
  }
  if (!b) B = 46;
 } while (0);
 if ((B | 0) == 45) if (b) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function lg(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 224 | 0;
 s = A + 198 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 $f(z, g, s, k);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[y + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 le(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (!l) B = 20; else {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    B = 20;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((B | 0) == 20) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   le(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   le(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (ag(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((g - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = mg(k, c[w >> 2] | 0, h, v) | 0;
 dg(z, x, g, h);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!l) B = 45; else {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
   c[f >> 2] = 0;
   B = 45;
   break;
  }
  if (!b) B = 46;
 } while (0);
 if ((B | 0) == 45) if (b) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function ig(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 B = i;
 i = i + 224 | 0;
 t = B + 198 | 0;
 l = B + 196 | 0;
 A = B + 184 | 0;
 z = B + 172 | 0;
 x = B + 168 | 0;
 y = B + 8 | 0;
 v = B + 4 | 0;
 u = B;
 switch (c[h + 4 >> 2] & 74 | 0) {
 case 64:
  {
   w = 8;
   break;
  }
 case 8:
  {
   w = 16;
   break;
  }
 case 0:
  {
   w = 0;
   break;
  }
 default:
  w = 10;
 }
 $f(A, h, t, l);
 e = 0;
 while (1) {
  if ((e | 0) == 3) break;
  c[z + (e << 2) >> 2] = 0;
  e = e + 1 | 0;
 }
 if (!(a[z >> 0] & 1)) e = 10; else e = (c[z >> 2] & -2) + -1 | 0;
 le(z, e, 0);
 q = z + 8 | 0;
 r = z + 1 | 0;
 o = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[x >> 2] = o;
 c[v >> 2] = y;
 c[u >> 2] = 0;
 s = z + 4 | 0;
 p = a[l >> 0] | 0;
 e = c[f >> 2] | 0;
 l = o;
 a : while (1) {
  if (!e) e = 0; else if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0)) if ((sb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1) {
   c[f >> 2] = 0;
   e = 0;
  }
  h = (e | 0) == 0;
  m = c[g >> 2] | 0;
  do if (!m) C = 20; else {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[g >> 2] = 0;
    C = 20;
    break;
   } else if (h) break; else break a;
  } while (0);
  if ((C | 0) == 20) {
   C = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[z >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[x >> 2] | 0) == (l + n | 0)) {
   le(z, n << 1, 0);
   if (!(a[z >> 0] & 1)) h = 10; else h = (c[z >> 2] & -2) + -1 | 0;
   le(z, h, 0);
   l = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[x >> 2] = l + n;
  }
  n = e + 12 | 0;
  h = c[n >> 2] | 0;
  o = e + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = sb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0; else h = d[h >> 0] | 0;
  if (ag(h & 255, w, l, x, u, p, A, y, v, t) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   sb[c[(c[e >> 2] | 0) + 40 >> 2] & 63](e) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 t = a[A >> 0] | 0;
 h = c[v >> 2] | 0;
 if (((t & 1) == 0 ? (t & 255) >>> 1 : c[A + 4 >> 2] | 0) | 0) if ((h - y | 0) < 160) {
  t = c[u >> 2] | 0;
  u = h + 4 | 0;
  c[v >> 2] = u;
  c[h >> 2] = t;
  h = u;
 }
 b[k >> 1] = jg(l, c[x >> 2] | 0, j, w) | 0;
 dg(A, y, h, j);
 if (!e) e = 0; else if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0)) if ((sb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1) {
  c[f >> 2] = 0;
  e = 0;
 }
 e = (e | 0) == 0;
 do if (!m) C = 45; else {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[g >> 2] = 0;
   C = 45;
   break;
  }
  if (!e) C = 46;
 } while (0);
 if ((C | 0) == 45) if (e) C = 46;
 if ((C | 0) == 46) c[j >> 2] = c[j >> 2] | 2;
 C = c[f >> 2] | 0;
 ge(z);
 ge(A);
 i = B;
 return C | 0;
}

function _f(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 224 | 0;
 s = A + 198 | 0;
 k = A + 196 | 0;
 z = A + 184 | 0;
 y = A + 172 | 0;
 w = A + 168 | 0;
 x = A + 8 | 0;
 u = A + 4 | 0;
 t = A;
 switch (c[g + 4 >> 2] & 74 | 0) {
 case 64:
  {
   v = 8;
   break;
  }
 case 8:
  {
   v = 16;
   break;
  }
 case 0:
  {
   v = 0;
   break;
  }
 default:
  v = 10;
 }
 $f(z, g, s, k);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[y + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 le(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (!l) B = 20; else {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
    c[f >> 2] = 0;
    B = 20;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((B | 0) == 20) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   le(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   le(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (ag(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if (((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) if ((g - x | 0) < 160) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = bg(k, c[w >> 2] | 0, h, v) | 0;
 dg(z, x, g, h);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!l) B = 45; else {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((sb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
   c[f >> 2] = 0;
   B = 45;
   break;
  }
  if (!b) B = 46;
 } while (0);
 if ((B | 0) == 45) if (b) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 ge(y);
 ge(z);
 i = A;
 return B | 0;
}

function zg(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 200 | 0;
 l = D + 199 | 0;
 m = D + 198 | 0;
 C = D + 184 | 0;
 B = D + 172 | 0;
 z = D + 168 | 0;
 A = D + 8 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 197 | 0;
 v = D + 196 | 0;
 vg(C, g, u, l, m);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[B + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 le(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (!m) E = 16; else {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[f >> 2] = 0;
    E = 16;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((E | 0) == 16) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   le(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   le(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (wg(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0)) if ((g - A | 0) < 160) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +Ag(l, c[z >> 2] | 0, j);
 dg(C, A, g, j);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!m) E = 41; else {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[f >> 2] = 0;
   E = 41;
   break;
  }
  if (!b) E = 42;
 } while (0);
 if ((E | 0) == 41) if (b) E = 42;
 if ((E | 0) == 42) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 ge(B);
 ge(C);
 i = D;
 return E | 0;
}

function ug(b, e, f, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 200 | 0;
 l = D + 199 | 0;
 m = D + 198 | 0;
 C = D + 184 | 0;
 B = D + 172 | 0;
 z = D + 168 | 0;
 A = D + 8 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 197 | 0;
 v = D + 196 | 0;
 vg(C, h, u, l, m);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[B + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 le(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  h = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (!m) E = 16; else {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[f >> 2] = 0;
    E = 16;
    break;
   } else if (h) break; else break a;
  } while (0);
  if ((E | 0) == 16) {
   E = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   le(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) h = 10; else h = (c[B >> 2] & -2) + -1 | 0;
   le(B, h, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  h = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else h = d[h >> 0] | 0;
  if (wg(h & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 h = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0)) if ((h - A | 0) < 160) {
  w = c[w >> 2] | 0;
  y = h + 4 | 0;
  c[x >> 2] = y;
  c[h >> 2] = w;
  h = y;
 }
 g[k >> 2] = +xg(l, c[z >> 2] | 0, j);
 dg(C, A, h, j);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!m) E = 41; else {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[f >> 2] = 0;
   E = 41;
   break;
  }
  if (!b) E = 42;
 } while (0);
 if ((E | 0) == 41) if (b) E = 42;
 if ((E | 0) == 42) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 ge(B);
 ge(C);
 i = D;
 return E | 0;
}

function Cg(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 200 | 0;
 l = D + 199 | 0;
 m = D + 198 | 0;
 C = D + 184 | 0;
 B = D + 172 | 0;
 z = D + 168 | 0;
 A = D + 8 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 197 | 0;
 v = D + 196 | 0;
 vg(C, g, u, l, m);
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[B + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 le(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (!m) E = 16; else {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[f >> 2] = 0;
    E = 16;
    break;
   } else if (g) break; else break a;
  } while (0);
  if ((E | 0) == 16) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   le(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   le(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (wg(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0)) if ((g - A | 0) < 160) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +Dg(l, c[z >> 2] | 0, j);
 dg(C, A, g, j);
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!m) E = 41; else {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[f >> 2] = 0;
   E = 41;
   break;
  }
  if (!b) E = 42;
 } while (0);
 if ((E | 0) == 41) if (b) E = 42;
 if ((E | 0) == 42) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 ge(B);
 ge(C);
 i = D;
 return E | 0;
}

function Eg(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 240 | 0;
 w = z;
 r = z + 208 | 0;
 y = z + 196 | 0;
 b = z + 180 | 0;
 x = z + 184 | 0;
 v = z + 176 | 0;
 t = z + 16 | 0;
 u = z + 8 | 0;
 s = z + 4 | 0;
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[y + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 q = vf(g) | 0;
 c[b >> 2] = q;
 b = Uf(b, 19136) | 0;
 wb[c[(c[b >> 2] | 0) + 32 >> 2] & 7](b, 14074, 14100, r) | 0;
 ln(q) | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[x + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 le(x, b, 0);
 p = x + 8 | 0;
 q = x + 1 | 0;
 k = (a[x >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[v >> 2] = k;
 c[u >> 2] = t;
 c[s >> 2] = 0;
 o = x + 4 | 0;
 b = c[e >> 2] | 0;
 a : while (1) {
  if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[e >> 2] = 0;
   b = 0;
  }
  l = (b | 0) == 0;
  g = c[f >> 2] | 0;
  do if (!g) A = 19; else {
   if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (l) break; else break a;
   if ((sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) == -1) {
    c[f >> 2] = 0;
    A = 19;
    break;
   } else if (l) break; else break a;
  } while (0);
  if ((A | 0) == 19) {
   A = 0;
   if (l) {
    g = 0;
    break;
   } else g = 0;
  }
  l = a[x >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[o >> 2] | 0;
  if ((c[v >> 2] | 0) == (k + l | 0)) {
   le(x, l << 1, 0);
   if (!(a[x >> 0] & 1)) k = 10; else k = (c[x >> 2] & -2) + -1 | 0;
   le(x, k, 0);
   k = (a[x >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[v >> 2] = k + l;
  }
  m = b + 12 | 0;
  l = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((l | 0) == (c[n >> 2] | 0)) l = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else l = d[l >> 0] | 0;
  if (ag(l & 255, 16, k, v, s, 0, y, t, u, r) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 le(x, (c[v >> 2] | 0) - k | 0, 0);
 u = (a[x >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 v = cg() | 0;
 c[w >> 2] = j;
 if ((Fg(u, v, 14109, w) | 0) != 1) c[h >> 2] = 4;
 if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[e >> 2] = 0;
  b = 0;
 }
 b = (b | 0) == 0;
 do if (!g) A = 43; else {
  if ((c[g + 12 >> 2] | 0) == (c[g + 16 >> 2] | 0)) if ((sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) == -1) {
   c[f >> 2] = 0;
   A = 43;
   break;
  }
  if (!b) A = 44;
 } while (0);
 if ((A | 0) == 43) if (b) A = 44;
 if ((A | 0) == 44) c[h >> 2] = c[h >> 2] | 2;
 A = c[e >> 2] | 0;
 ge(x);
 ge(y);
 i = z;
 return A | 0;
}

function Qk(b, e, f, g, h, i, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 c[f >> 2] = b;
 c[i >> 2] = g;
 if (!(k & 4)) k = e; else {
  b = c[f >> 2] | 0;
  k = e;
  if ((k - b | 0) > 2) if ((a[b >> 0] | 0) == -17) if ((a[b + 1 >> 0] | 0) == -69) if ((a[b + 2 >> 0] | 0) == -65) c[f >> 2] = b + 3;
 }
 a : while (1) {
  o = c[f >> 2] | 0;
  b = o >>> 0 < e >>> 0;
  if (!b) {
   q = 40;
   break;
  }
  p = c[i >> 2] | 0;
  if (p >>> 0 >= h >>> 0) {
   q = 40;
   break;
  }
  b = a[o >> 0] | 0;
  n = b & 255;
  do if (b << 24 >> 24 > -1) {
   if (n >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[p >> 2] = n;
   c[f >> 2] = o + 1;
  } else {
   if ((b & 255) < 194) {
    b = 2;
    break a;
   }
   if ((b & 255) < 224) {
    if ((k - o | 0) < 2) {
     b = 1;
     break a;
    }
    b = d[o + 1 >> 0] | 0;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = b & 63 | n << 6 & 1984;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[p >> 2] = b;
    c[f >> 2] = o + 2;
    break;
   }
   if ((b & 255) < 240) {
    if ((k - o | 0) < 3) {
     b = 1;
     break a;
    }
    g = a[o + 1 >> 0] | 0;
    b = a[o + 2 >> 0] | 0;
    switch (n | 0) {
    case 224:
     {
      if ((g & -32) << 24 >> 24 != -96) {
       b = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((g & -32) << 24 >> 24 != -128) {
       b = 2;
       break a;
      }
      break;
     }
    default:
     if ((g & -64) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
    }
    b = b & 255;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = (g & 255) << 6 & 4032 | n << 12 & 61440 | b & 63;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[p >> 2] = b;
    c[f >> 2] = o + 3;
    break;
   }
   if ((b & 255) >= 245) {
    b = 2;
    break a;
   }
   if ((k - o | 0) < 4) {
    b = 1;
    break a;
   }
   m = a[o + 1 >> 0] | 0;
   b = a[o + 2 >> 0] | 0;
   g = a[o + 3 >> 0] | 0;
   switch (n | 0) {
   case 240:
    {
     if ((m + 112 & 255) >= 48) {
      b = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((m & -16) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
     break;
    }
   default:
    if ((m & -64) << 24 >> 24 != -128) {
     b = 2;
     break a;
    }
   }
   l = b & 255;
   if ((l & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = g & 255;
   if ((b & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = (m & 255) << 12 & 258048 | n << 18 & 1835008 | l << 6 & 4032 | b & 63;
   if (b >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[p >> 2] = b;
   c[f >> 2] = o + 4;
  } while (0);
  c[i >> 2] = (c[i >> 2] | 0) + 4;
 }
 if ((q | 0) == 40) b = b & 1;
 return b | 0;
}

function pc(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = fo(d | 0, m | 0, 52) | 0;
 e = e & 2047;
 j = fo(n | 0, o | 0, 52) | 0;
 j = j & 2047;
 p = m & -2147483648;
 i = ho(n | 0, o | 0, 1) | 0;
 l = D;
 a : do if ((i | 0) == 0 & (l | 0) == 0) q = 3; else {
  r = +O(+b);
  h[k >> 3] = r;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0 | (e | 0) == 2047) q = 3; else {
   f = ho(d | 0, m | 0, 1) | 0;
   g = D;
   if (!(g >>> 0 > l >>> 0 | (g | 0) == (l | 0) & f >>> 0 > i >>> 0)) return +((f | 0) == (i | 0) & (g | 0) == (l | 0) ? a * 0.0 : a);
   if (!e) {
    e = ho(d | 0, m | 0, 12) | 0;
    f = D;
    if ((f | 0) > -1 | (f | 0) == -1 & e >>> 0 > 4294967295) {
     g = e;
     e = 0;
     do {
      e = e + -1 | 0;
      g = ho(g | 0, f | 0, 1) | 0;
      f = D;
     } while ((f | 0) > -1 | (f | 0) == -1 & g >>> 0 > 4294967295);
    } else e = 0;
    d = ho(d | 0, m | 0, 1 - e | 0) | 0;
    f = D;
   } else f = m & 1048575 | 1048576;
   if (!j) {
    g = ho(n | 0, o | 0, 12) | 0;
    i = D;
    if ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295) {
     j = 0;
     do {
      j = j + -1 | 0;
      g = ho(g | 0, i | 0, 1) | 0;
      i = D;
     } while ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295);
    } else j = 0;
    n = ho(n | 0, o | 0, 1 - j | 0) | 0;
    m = D;
   } else m = o & 1048575 | 1048576;
   l = bo(d | 0, f | 0, n | 0, m | 0) | 0;
   i = D;
   g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
   b : do if ((e | 0) > (j | 0)) {
    while (1) {
     if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) break; else {
      d = l;
      f = i;
     }
     d = ho(d | 0, f | 0, 1) | 0;
     f = D;
     e = e + -1 | 0;
     l = bo(d | 0, f | 0, n | 0, m | 0) | 0;
     i = D;
     g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
     if ((e | 0) <= (j | 0)) break b;
    }
    b = a * 0.0;
    break a;
   } while (0);
   if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) {
    b = a * 0.0;
    break;
   } else {
    f = i;
    d = l;
   }
   if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
    d = ho(d | 0, f | 0, 1) | 0;
    f = D;
    e = e + -1 | 0;
   } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
   if ((e | 0) > 0) {
    o = eo(d | 0, f | 0, 0, -1048576) | 0;
    d = D;
    e = ho(e | 0, 0, 52) | 0;
    d = d | D;
    e = o | e;
   } else {
    e = fo(d | 0, f | 0, 1 - e | 0) | 0;
    d = D;
   }
   c[k >> 2] = e;
   c[k + 4 >> 2] = d | p;
   b = +h[k >> 3];
  }
 } while (0);
 if ((q | 0) == 3) {
  b = a * b;
  b = b / b;
 }
 return +b;
}

function Rn(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) {
   h = d + 28 | 0;
   if ((c[h >> 2] | 0) != 1) c[h >> 2] = f;
  }
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   p = c[b + 12 >> 2] | 0;
   k = b + 16 + (p << 3) | 0;
   Sn(b + 16 | 0, d, e, f, g);
   h = b + 24 | 0;
   if ((p | 0) <= 1) break;
   i = c[b + 8 >> 2] | 0;
   if (!(i & 2)) {
    j = d + 36 | 0;
    if ((c[j >> 2] | 0) != 1) {
     if (!(i & 1)) {
      i = d + 54 | 0;
      while (1) {
       if (a[i >> 0] | 0) break a;
       if ((c[j >> 2] | 0) == 1) break a;
       Sn(h, d, e, f, g);
       h = h + 8 | 0;
       if (h >>> 0 >= k >>> 0) break a;
      }
     }
     i = d + 24 | 0;
     b = d + 54 | 0;
     while (1) {
      if (a[b >> 0] | 0) break a;
      if ((c[j >> 2] | 0) == 1) if ((c[i >> 2] | 0) == 1) break a;
      Sn(h, d, e, f, g);
      h = h + 8 | 0;
      if (h >>> 0 >= k >>> 0) break a;
     }
    }
   }
   i = d + 54 | 0;
   while (1) {
    if (a[i >> 0] | 0) break a;
    Sn(h, d, e, f, g);
    h = h + 8 | 0;
    if (h >>> 0 >= k >>> 0) break a;
   }
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0)) {
   o = d + 20 | 0;
   if ((c[o >> 2] | 0) != (e | 0)) {
    c[d + 32 >> 2] = f;
    p = d + 44 | 0;
    if ((c[p >> 2] | 0) == 4) break;
    j = b + 16 + (c[b + 12 >> 2] << 3) | 0;
    k = d + 52 | 0;
    f = d + 53 | 0;
    m = d + 54 | 0;
    l = b + 8 | 0;
    n = d + 24 | 0;
    i = 0;
    h = 0;
    b = b + 16 | 0;
    b : while (1) {
     if (b >>> 0 >= j >>> 0) {
      b = 20;
      break;
     }
     a[k >> 0] = 0;
     a[f >> 0] = 0;
     Qn(b, d, e, e, 1, g);
     if (a[m >> 0] | 0) {
      b = 20;
      break;
     }
     do if (a[f >> 0] | 0) {
      if (!(a[k >> 0] | 0)) if (!(c[l >> 2] & 1)) {
       h = 1;
       b = 20;
       break b;
      } else {
       h = 1;
       break;
      }
      if ((c[n >> 2] | 0) == 1) {
       b = 25;
       break b;
      }
      if (!(c[l >> 2] & 2)) {
       b = 25;
       break b;
      } else {
       i = 1;
       h = 1;
      }
     } while (0);
     b = b + 8 | 0;
    }
    do if ((b | 0) == 20) {
     if (!i) {
      c[o >> 2] = e;
      e = d + 40 | 0;
      c[e >> 2] = (c[e >> 2] | 0) + 1;
      if ((c[d + 36 >> 2] | 0) == 1) if ((c[n >> 2] | 0) == 2) {
       a[m >> 0] = 1;
       if (h) {
        b = 25;
        break;
       } else {
        h = 4;
        break;
       }
      }
     }
     if (h) b = 25; else h = 4;
    } while (0);
    if ((b | 0) == 25) h = 3;
    c[p >> 2] = h;
    break;
   }
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function ol(d, f, g, h, i, j, k, l) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0;
 c[g >> 2] = d;
 c[j >> 2] = h;
 if (!(l & 2)) m = 4; else if ((i - h | 0) < 3) d = 1; else {
  c[j >> 2] = h + 1;
  a[h >> 0] = -17;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -69;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -65;
  m = 4;
 }
 a : do if ((m | 0) == 4) {
  n = f;
  d = c[g >> 2] | 0;
  while (1) {
   if (d >>> 0 >= f >>> 0) {
    d = 0;
    break a;
   }
   l = b[d >> 1] | 0;
   m = l & 65535;
   if (m >>> 0 > k >>> 0) {
    d = 2;
    break a;
   }
   do if ((l & 65535) < 128) {
    d = c[j >> 2] | 0;
    if ((i - d | 0) < 1) {
     d = 1;
     break a;
    }
    c[j >> 2] = d + 1;
    a[d >> 0] = l;
   } else {
    if ((l & 65535) < 2048) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 2) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 6 | 192;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) < 55296) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) >= 56320) {
     if ((l & 65535) < 57344) {
      d = 2;
      break a;
     }
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((n - d | 0) < 4) {
     d = 1;
     break a;
    }
    d = d + 2 | 0;
    l = e[d >> 1] | 0;
    if ((l & 64512 | 0) != 56320) {
     d = 2;
     break a;
    }
    if ((i - (c[j >> 2] | 0) | 0) < 4) {
     d = 1;
     break a;
    }
    h = m & 960;
    if (((h << 10) + 65536 | m << 10 & 64512 | l & 1023) >>> 0 > k >>> 0) {
     d = 2;
     break a;
    }
    c[g >> 2] = d;
    d = (h >>> 6) + 1 | 0;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = d >>> 2 | 240;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m >>> 2 & 15 | d << 4 & 48 | 128;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m << 4 & 48 | l >>> 6 & 15 | 128;
    m = c[j >> 2] | 0;
    c[j >> 2] = m + 1;
    a[m >> 0] = l & 63 | 128;
   } while (0);
   d = (c[g >> 2] | 0) + 2 | 0;
   c[g >> 2] = d;
  }
 } while (0);
 return d | 0;
}

function Ah(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Uf(j, 19168) | 0;
 m = Uf(j, 19176) | 0;
 pb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 a : do if (!(((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0)) {
  wb[c[(c[r >> 2] | 0) + 48 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b << 2) | 0;
  c[h >> 2] = j;
 } else {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = yb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 4;
    c[k >> 2] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  b : do if ((e - k | 0) > 1) if ((a[k >> 0] | 0) == 48) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break b;
   }
   p = yb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 4;
   c[o >> 2] = p;
   o = yb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 4;
   c[p >> 2] = o;
   k = k + 2 | 0;
  } while (0);
  c : do if ((k | 0) != (e | 0)) {
   j = e;
   l = k;
   while (1) {
    j = j + -1 | 0;
    if (l >>> 0 >= j >>> 0) break c;
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
   }
  } while (0);
  m = sb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  j = 0;
  l = 0;
  p = k;
  while (1) {
   if (p >>> 0 >= e >>> 0) break;
   u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
   if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 4;
    c[u >> 2] = m;
    u = a[s >> 0] | 0;
    j = 0;
    l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
   }
   v = yb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[p >> 0] | 0) | 0;
   u = c[h >> 2] | 0;
   c[h >> 2] = u + 4;
   c[u >> 2] = v;
   j = j + 1 | 0;
   p = p + 1 | 0;
  }
  j = f + (k - b << 2) | 0;
  l = c[h >> 2] | 0;
  if ((j | 0) != (l | 0)) {
   k = l;
   while (1) {
    k = k + -4 | 0;
    if (j >>> 0 >= k >>> 0) {
     j = l;
     break a;
    }
    v = c[j >> 2] | 0;
    c[j >> 2] = c[k >> 2];
    c[k >> 2] = v;
    j = j + 4 | 0;
   }
  }
 } while (0);
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b << 2) | 0;
 ge(s);
 i = t;
 return;
}

function mh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Uf(j, 19136) | 0;
 m = Uf(j, 19148) | 0;
 pb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 if (!(((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0)) {
  wb[c[(c[r >> 2] | 0) + 32 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b) | 0;
  c[h >> 2] = j;
 } else {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = yb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 1;
    a[k >> 0] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  a : do if ((e - k | 0) > 1) if ((a[k >> 0] | 0) == 48) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break a;
   }
   p = yb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 1;
   a[o >> 0] = p;
   o = yb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 1;
   a[p >> 0] = o;
   k = k + 2 | 0;
  } while (0);
  b : do if ((k | 0) != (e | 0)) {
   j = e;
   l = k;
   while (1) {
    j = j + -1 | 0;
    if (l >>> 0 >= j >>> 0) break b;
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
   }
  } while (0);
  m = sb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  j = 0;
  l = 0;
  p = k;
  while (1) {
   if (p >>> 0 >= e >>> 0) break;
   u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
   if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 1;
    a[u >> 0] = m;
    u = a[s >> 0] | 0;
    j = 0;
    l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
   }
   v = yb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[p >> 0] | 0) | 0;
   u = c[h >> 2] | 0;
   c[h >> 2] = u + 1;
   a[u >> 0] = v;
   j = j + 1 | 0;
   p = p + 1 | 0;
  }
  j = f + (k - b) | 0;
  k = c[h >> 2] | 0;
  if ((j | 0) != (k | 0)) {
   while (1) {
    k = k + -1 | 0;
    if (j >>> 0 >= k >>> 0) break;
    v = a[j >> 0] | 0;
    a[j >> 0] = a[k >> 0] | 0;
    a[k >> 0] = v;
    j = j + 1 | 0;
   }
   j = c[h >> 2] | 0;
  }
 }
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b) | 0;
 ge(s);
 i = t;
 return;
}

function yk(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 1008 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 896 | 0;
 m = F + 888 | 0;
 k = F + 488 | 0;
 y = F + 480 | 0;
 v = F + 892 | 0;
 s = F + 476 | 0;
 w = F + 472 | 0;
 B = F + 460 | 0;
 E = F + 448 | 0;
 D = F + 436 | 0;
 o = F + 432 | 0;
 p = F + 32 | 0;
 u = F + 24 | 0;
 t = F + 16 | 0;
 r = F + 20 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Oc(b, 100, 15574, q) | 0;
 if (b >>> 0 > 99) {
  b = cg() | 0;
  h[l >> 3] = j;
  b = sh(m, b, 15574, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) $n();
  l = td(b << 2) | 0;
  if (!l) $n(); else {
   x = l;
   G = l;
   H = k;
   A = b;
  }
 } else {
  x = k;
  G = 0;
  H = 0;
  A = b;
 }
 b = vf(f) | 0;
 c[y >> 2] = b;
 n = Uf(y, 19168) | 0;
 l = c[m >> 2] | 0;
 wb[c[(c[n >> 2] | 0) + 48 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[B + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[E + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[D + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 zk(e, m, y, v, s, w, B, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = td(k << 2) | 0;
  if (!k) $n(); else {
   C = k;
   z = k;
  }
 } else {
  C = 0;
  z = p;
 }
 Ak(z, u, t, c[f + 4 >> 2] | 0, x, x + (A << 2) | 0, n, m, v, c[s >> 2] | 0, c[w >> 2] | 0, B, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Bh(q, z, d, k, f, g) | 0;
 if (C) {
  ud(C);
  b = c[y >> 2] | 0;
 }
 se(D);
 se(E);
 ge(B);
 ln(b) | 0;
 if (G | 0) ud(G);
 if (H | 0) ud(H);
 i = F;
 return k | 0;
}

function wg(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 a : do if (b << 24 >> 24 == i << 24 >> 24) if (!(a[e >> 0] | 0)) i = -1; else {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  h = a[k >> 0] | 0;
  if (!(((h & 1) == 0 ? (h & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0)) i = 0; else {
   i = c[m >> 2] | 0;
   if ((i - l | 0) < 160) {
    l = c[n >> 2] | 0;
    c[m >> 2] = i + 4;
    c[i >> 2] = l;
    i = 0;
   } else i = 0;
  }
 } else {
  if (b << 24 >> 24 == j << 24 >> 24) {
   j = a[k >> 0] | 0;
   if (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) {
    if (!(a[e >> 0] | 0)) {
     i = -1;
     break;
    }
    i = c[m >> 2] | 0;
    if ((i - l | 0) >= 160) {
     i = 0;
     break;
    }
    l = c[n >> 2] | 0;
    c[m >> 2] = i + 4;
    c[i >> 2] = l;
    c[n >> 2] = 0;
    i = 0;
    break;
   }
  }
  j = o + 32 | 0;
  i = o;
  while (1) {
   if ((i | 0) == (j | 0)) {
    i = j;
    break;
   }
   if ((a[i >> 0] | 0) == b << 24 >> 24) break;
   i = i + 1 | 0;
  }
  j = i - o | 0;
  if ((j | 0) > 31) i = -1; else {
   b = a[14074 + j >> 0] | 0;
   switch (j | 0) {
   case 24:
   case 25:
    {
     i = c[h >> 2] | 0;
     if ((i | 0) != (g | 0)) if ((d[i + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0)) {
      i = -1;
      break a;
     }
     c[h >> 2] = i + 1;
     a[i >> 0] = b;
     i = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     i = c[h >> 2] | 0;
     c[h >> 2] = i + 1;
     a[i >> 0] = b;
     i = 0;
     break a;
    }
   default:
    {
     i = b & 95;
     if ((i | 0) == (a[f >> 0] | 0)) {
      a[f >> 0] = i | 128;
      if (a[e >> 0] | 0) {
       a[e >> 0] = 0;
       f = a[k >> 0] | 0;
       if (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) {
        i = c[m >> 2] | 0;
        if ((i - l | 0) < 160) {
         l = c[n >> 2] | 0;
         c[m >> 2] = i + 4;
         c[i >> 2] = l;
        }
       }
      }
     }
     m = c[h >> 2] | 0;
     c[h >> 2] = m + 1;
     a[m >> 0] = b;
     if ((j | 0) > 21) {
      i = 0;
      break a;
     }
     c[n >> 2] = (c[n >> 2] | 0) + 1;
     i = 0;
     break a;
    }
   }
  }
 } while (0);
 return i | 0;
}

function sk(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 384 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 284 | 0;
 m = F + 72 | 0;
 k = F + 184 | 0;
 y = F + 68 | 0;
 v = F + 180 | 0;
 s = F + 177 | 0;
 w = F + 176 | 0;
 B = F + 56 | 0;
 E = F + 44 | 0;
 D = F + 32 | 0;
 o = F + 28 | 0;
 p = F + 76 | 0;
 u = F + 24 | 0;
 t = F + 16 | 0;
 r = F + 20 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Oc(b, 100, 15574, q) | 0;
 if (b >>> 0 > 99) {
  b = cg() | 0;
  h[l >> 3] = j;
  b = sh(m, b, 15574, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) $n();
  l = td(b) | 0;
  if (!l) $n(); else {
   x = l;
   G = l;
   H = k;
   A = b;
  }
 } else {
  x = k;
  G = 0;
  H = 0;
  A = b;
 }
 b = vf(f) | 0;
 c[y >> 2] = b;
 n = Uf(y, 19136) | 0;
 l = c[m >> 2] | 0;
 wb[c[(c[n >> 2] | 0) + 32 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[B + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[E + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 k = 0;
 while (1) {
  if ((k | 0) == 3) break;
  c[D + (k << 2) >> 2] = 0;
  k = k + 1 | 0;
 }
 tk(e, m, y, v, s, w, B, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = td(k) | 0;
  if (!k) $n(); else {
   C = k;
   z = k;
  }
 } else {
  C = 0;
  z = p;
 }
 uk(z, u, t, c[f + 4 >> 2] | 0, x, x + A | 0, n, m, v, a[s >> 0] | 0, a[w >> 0] | 0, B, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Mb(q, z, d, k, f, g) | 0;
 if (C) {
  ud(C);
  b = c[y >> 2] | 0;
 }
 ge(D);
 ge(E);
 ge(B);
 ln(b) | 0;
 if (G | 0) ud(G);
 if (H | 0) ud(H);
 i = F;
 return k | 0;
}

function hl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 q = r;
 l = e;
 while (1) {
  if ((l | 0) == (f | 0)) {
   l = f;
   break;
  }
  if (!(a[l >> 0] | 0)) break;
  l = l + 1 | 0;
 }
 c[k >> 2] = h;
 c[g >> 2] = e;
 o = j;
 p = b + 8 | 0;
 a : while (1) {
  if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
   l = 34;
   break;
  }
  n = d;
  m = c[n + 4 >> 2] | 0;
  b = q;
  c[b >> 2] = c[n >> 2];
  c[b + 4 >> 2] = m;
  b = l;
  m = Qc(c[p >> 2] | 0) | 0;
  n = md(h, g, b - e | 0, o - h >> 2, d) | 0;
  if (m | 0) Qc(m) | 0;
  switch (n | 0) {
  case -1:
   {
    l = 10;
    break a;
   }
  case 0:
   {
    e = 2;
    l = 30;
    break a;
   }
  default:
   {}
  }
  h = (c[k >> 2] | 0) + (n << 2) | 0;
  c[k >> 2] = h;
  if ((h | 0) == (j | 0)) {
   l = 31;
   break;
  }
  e = c[g >> 2] | 0;
  if ((l | 0) == (f | 0)) l = f; else {
   l = Qc(c[p >> 2] | 0) | 0;
   e = Tc(h, e, 1, d) | 0;
   if (l | 0) Qc(l) | 0;
   if (e | 0) {
    e = 2;
    l = 30;
    break;
   }
   c[k >> 2] = (c[k >> 2] | 0) + 4;
   e = (c[g >> 2] | 0) + 1 | 0;
   c[g >> 2] = e;
   l = e;
   while (1) {
    if ((l | 0) == (f | 0)) {
     l = f;
     break;
    }
    if (!(a[l >> 0] | 0)) break;
    l = l + 1 | 0;
   }
   h = c[k >> 2] | 0;
  }
 }
 do if ((l | 0) == 10) {
  b : while (1) {
   c[k >> 2] = h;
   if ((e | 0) == (c[g >> 2] | 0)) {
    l = 20;
    break;
   }
   l = Qc(c[p >> 2] | 0) | 0;
   h = Tc(h, e, b - e | 0, q) | 0;
   if (l | 0) Qc(l) | 0;
   switch (h | 0) {
   case -1:
    {
     l = 16;
     break b;
    }
   case -2:
    {
     l = 17;
     break b;
    }
   case 0:
    {
     e = e + 1 | 0;
     break;
    }
   default:
    e = e + h | 0;
   }
   h = (c[k >> 2] | 0) + 4 | 0;
  }
  if ((l | 0) == 16) {
   c[g >> 2] = e;
   e = 2;
   l = 30;
   break;
  } else if ((l | 0) == 17) {
   c[g >> 2] = e;
   e = 1;
   l = 30;
   break;
  } else if ((l | 0) == 20) {
   c[g >> 2] = e;
   e = (e | 0) != (f | 0) & 1;
   l = 30;
   break;
  }
 } else if ((l | 0) == 31) {
  e = c[g >> 2] | 0;
  l = 34;
 } while (0);
 if ((l | 0) != 30) if ((l | 0) == 34) e = (e | 0) != (f | 0) & 1;
 i = r;
 return e | 0;
}

function kk(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 w = i;
 i = i + 576 | 0;
 n = w + 424 | 0;
 q = w;
 k = w + 24 | 0;
 v = w + 16 | 0;
 o = w + 12 | 0;
 s = w + 8 | 0;
 l = w + 564 | 0;
 x = w + 4 | 0;
 p = w + 464 | 0;
 c[v >> 2] = k;
 u = v + 4 | 0;
 c[u >> 2] = 107;
 c[s >> 2] = vf(g) | 0;
 b = Uf(s, 19168) | 0;
 a[l >> 0] = 0;
 c[x >> 2] = c[e >> 2];
 g = c[g + 4 >> 2] | 0;
 c[n >> 2] = c[x >> 2];
 if (lk(d, n, f, s, g, h, l, b, v, o, k + 400 | 0) | 0) {
  wb[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 15468, 15478, n) | 0;
  f = c[o >> 2] | 0;
  k = c[v >> 2] | 0;
  b = f - k | 0;
  if ((b | 0) > 392) {
   b = td((b >> 2) + 2 | 0) | 0;
   if (!b) $n(); else {
    r = b;
    m = b;
   }
  } else {
   r = 0;
   m = p;
  }
  if (!(a[l >> 0] | 0)) b = m; else {
   a[m >> 0] = 45;
   b = m + 1 | 0;
  }
  l = n + 40 | 0;
  m = n;
  while (1) {
   if (k >>> 0 >= f >>> 0) break;
   g = c[k >> 2] | 0;
   f = n;
   while (1) {
    if ((f | 0) == (l | 0)) {
     f = l;
     break;
    }
    if ((c[f >> 2] | 0) == (g | 0)) break;
    f = f + 4 | 0;
   }
   a[b >> 0] = a[15468 + (f - m >> 2) >> 0] | 0;
   f = c[o >> 2] | 0;
   b = b + 1 | 0;
   k = k + 4 | 0;
  }
  a[b >> 0] = 0;
  c[q >> 2] = j;
  Zc(p, 15369, q) | 0;
  if (r | 0) ud(r);
 }
 b = c[d >> 2] | 0;
 do if (!b) g = 1; else {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } while (0);
 b = c[e >> 2] | 0;
 do if (!b) t = 30; else {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   t = 30;
   break;
  } else if (g) break; else {
   t = 32;
   break;
  }
 } while (0);
 if ((t | 0) == 30) if (g) t = 32;
 if ((t | 0) == 32) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 ln(c[s >> 2] | 0) | 0;
 b = c[v >> 2] | 0;
 c[v >> 2] = 0;
 if (b | 0) ob[c[u >> 2] & 127](b);
 i = w;
 return f | 0;
}

function $g(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 a : do if ((b | 0) == (i | 0)) if (!(a[e >> 0] | 0)) i = -1; else {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  h = a[k >> 0] | 0;
  if (!(((h & 1) == 0 ? (h & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0)) i = 0; else {
   i = c[m >> 2] | 0;
   if ((i - l | 0) < 160) {
    l = c[n >> 2] | 0;
    c[m >> 2] = i + 4;
    c[i >> 2] = l;
    i = 0;
   } else i = 0;
  }
 } else {
  if ((b | 0) == (j | 0)) {
   j = a[k >> 0] | 0;
   if (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) {
    if (!(a[e >> 0] | 0)) {
     i = -1;
     break;
    }
    i = c[m >> 2] | 0;
    if ((i - l | 0) >= 160) {
     i = 0;
     break;
    }
    l = c[n >> 2] | 0;
    c[m >> 2] = i + 4;
    c[i >> 2] = l;
    c[n >> 2] = 0;
    i = 0;
    break;
   }
  }
  j = o + 128 | 0;
  i = o;
  while (1) {
   if ((i | 0) == (j | 0)) {
    i = j;
    break;
   }
   if ((c[i >> 2] | 0) == (b | 0)) break;
   i = i + 4 | 0;
  }
  j = i - o | 0;
  i = j >> 2;
  if ((j | 0) > 124) i = -1; else {
   b = a[14074 + i >> 0] | 0;
   switch (i | 0) {
   case 24:
   case 25:
    {
     i = c[h >> 2] | 0;
     if ((i | 0) != (g | 0)) if ((d[i + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0)) {
      i = -1;
      break a;
     }
     c[h >> 2] = i + 1;
     a[i >> 0] = b;
     i = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     break;
    }
   default:
    {
     i = b & 95;
     if ((i | 0) == (a[f >> 0] | 0)) {
      a[f >> 0] = i | 128;
      if (a[e >> 0] | 0) {
       a[e >> 0] = 0;
       f = a[k >> 0] | 0;
       if (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) {
        i = c[m >> 2] | 0;
        if ((i - l | 0) < 160) {
         l = c[n >> 2] | 0;
         c[m >> 2] = i + 4;
         c[i >> 2] = l;
        }
       }
      }
     }
    }
   }
   m = c[h >> 2] | 0;
   c[h >> 2] = m + 1;
   a[m >> 0] = b;
   if ((j | 0) > 84) i = 0; else {
    c[n >> 2] = (c[n >> 2] | 0) + 1;
    i = 0;
   }
  }
 } while (0);
 return i | 0;
}

function gl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 r = i;
 i = i + 16 | 0;
 q = r;
 o = r + 8 | 0;
 l = e;
 while (1) {
  if ((l | 0) == (f | 0)) {
   l = f;
   break;
  }
  if (!(c[l >> 2] | 0)) break;
  l = l + 4 | 0;
 }
 c[k >> 2] = h;
 c[g >> 2] = e;
 n = j;
 p = b + 8 | 0;
 a : while (1) {
  if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
   l = 35;
   break;
  }
  s = d;
  m = c[s + 4 >> 2] | 0;
  b = q;
  c[b >> 2] = c[s >> 2];
  c[b + 4 >> 2] = m;
  b = Qc(c[p >> 2] | 0) | 0;
  m = sd(h, g, l - e >> 2, n - h | 0, d) | 0;
  if (b | 0) Qc(b) | 0;
  switch (m | 0) {
  case -1:
   {
    l = 10;
    break a;
   }
  case 0:
   {
    e = 1;
    l = 32;
    break a;
   }
  default:
   {}
  }
  h = (c[k >> 2] | 0) + m | 0;
  c[k >> 2] = h;
  if ((h | 0) == (j | 0)) {
   l = 33;
   break;
  }
  if ((l | 0) == (f | 0)) {
   e = c[g >> 2] | 0;
   l = f;
  } else {
   e = Qc(c[p >> 2] | 0) | 0;
   h = Dc(o, 0, d) | 0;
   if (e | 0) Qc(e) | 0;
   if ((h | 0) == -1) {
    e = 2;
    l = 31;
    break;
   }
   if (h >>> 0 > (n - (c[k >> 2] | 0) | 0) >>> 0) {
    e = 1;
    l = 31;
    break;
   } else e = o;
   while (1) {
    if (!h) break;
    m = a[e >> 0] | 0;
    s = c[k >> 2] | 0;
    c[k >> 2] = s + 1;
    a[s >> 0] = m;
    h = h + -1 | 0;
    e = e + 1 | 0;
   }
   e = (c[g >> 2] | 0) + 4 | 0;
   c[g >> 2] = e;
   l = e;
   while (1) {
    if ((l | 0) == (f | 0)) {
     l = f;
     break;
    }
    if (!(c[l >> 2] | 0)) break;
    l = l + 4 | 0;
   }
   h = c[k >> 2] | 0;
  }
 }
 if ((l | 0) == 10) {
  c[k >> 2] = h;
  while (1) {
   if ((e | 0) == (c[g >> 2] | 0)) break;
   s = c[e >> 2] | 0;
   l = Qc(c[p >> 2] | 0) | 0;
   h = Dc(h, s, q) | 0;
   if (l | 0) Qc(l) | 0;
   if ((h | 0) == -1) break;
   h = (c[k >> 2] | 0) + h | 0;
   c[k >> 2] = h;
   e = e + 4 | 0;
  }
  c[g >> 2] = e;
  e = 2;
  l = 32;
 } else if ((l | 0) == 31) l = 32; else if ((l | 0) == 33) {
  e = c[g >> 2] | 0;
  l = 35;
 }
 if ((l | 0) != 32) if ((l | 0) == 35) e = (e | 0) != (f | 0) & 1;
 i = r;
 return e | 0;
}

function vk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 176 | 0;
 p = D + 56 | 0;
 x = D + 52 | 0;
 v = D + 164 | 0;
 s = D + 161 | 0;
 w = D + 160 | 0;
 z = D + 40 | 0;
 C = D + 28 | 0;
 B = D + 16 | 0;
 m = D + 12 | 0;
 o = D + 60 | 0;
 u = D + 8 | 0;
 t = D + 4 | 0;
 q = D;
 b = vf(f) | 0;
 c[x >> 2] = b;
 r = Uf(x, 19136) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 k = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[k >> 2] | 0) | 0)) n = 0; else {
  n = a[(j ? h + 1 | 0 : c[h + 8 >> 2] | 0) >> 0] | 0;
  n = n << 24 >> 24 == (yb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 45) | 0) << 24 >> 24;
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[z + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[C + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[B + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 tk(e, n, x, v, s, w, z, C, B, m);
 l = a[h >> 0] | 0;
 e = c[k >> 2] | 0;
 j = (l & 1) == 0 ? (l & 255) >>> 1 : e;
 k = c[m >> 2] | 0;
 if ((j | 0) > (k | 0)) {
  E = a[B >> 0] | 0;
  m = a[C >> 0] | 0;
  j = (j - k << 1 | 1) + k + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((m & 1) == 0 ? (m & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 } else {
  E = a[B >> 0] | 0;
  j = a[C >> 0] | 0;
  j = k + 2 + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = td(j) | 0;
  if (!j) $n(); else {
   A = j;
   y = j;
  }
 } else {
  A = 0;
  y = o;
 }
 E = (l & 1) == 0;
 j = E ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 uk(y, u, t, c[f + 4 >> 2] | 0, j, j + (E ? (l & 255) >>> 1 : e) | 0, r, n, v, a[s >> 0] | 0, a[w >> 0] | 0, z, C, B, k);
 c[q >> 2] = c[d >> 2];
 E = c[u >> 2] | 0;
 j = c[t >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Mb(p, y, E, j, f, g) | 0;
 if (A) {
  ud(A);
  b = c[x >> 2] | 0;
 }
 ge(B);
 ge(C);
 ge(z);
 ln(b) | 0;
 i = D;
 return j | 0;
}

function Bk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 E = i;
 i = i + 480 | 0;
 p = E + 468 | 0;
 y = E + 464 | 0;
 w = E + 472 | 0;
 t = E + 460 | 0;
 x = E + 456 | 0;
 A = E + 444 | 0;
 D = E + 432 | 0;
 C = E + 420 | 0;
 m = E + 416 | 0;
 o = E + 16 | 0;
 v = E + 8 | 0;
 u = E + 4 | 0;
 q = E;
 b = vf(f) | 0;
 c[y >> 2] = b;
 r = Uf(y, 19168) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 s = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[s >> 2] | 0) | 0)) n = 0; else {
  n = c[(j ? s : c[h + 8 >> 2] | 0) >> 2] | 0;
  n = (n | 0) == (yb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 45) | 0);
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[A + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[D + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 j = 0;
 while (1) {
  if ((j | 0) == 3) break;
  c[C + (j << 2) >> 2] = 0;
  j = j + 1 | 0;
 }
 zk(e, n, y, w, t, x, A, D, C, m);
 k = a[h >> 0] | 0;
 l = c[s >> 2] | 0;
 j = (k & 1) == 0 ? (k & 255) >>> 1 : l;
 e = c[m >> 2] | 0;
 if ((j | 0) > (e | 0)) {
  F = a[C >> 0] | 0;
  m = a[D >> 0] | 0;
  j = (j - e << 1 | 1) + e + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((m & 1) == 0 ? (m & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 } else {
  F = a[C >> 0] | 0;
  j = a[D >> 0] | 0;
  j = e + 2 + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = td(j << 2) | 0;
  if (!j) $n(); else {
   B = j;
   z = j;
  }
 } else {
  B = 0;
  z = o;
 }
 F = (k & 1) == 0;
 j = F ? s : c[h + 8 >> 2] | 0;
 Ak(z, v, u, c[f + 4 >> 2] | 0, j, j + ((F ? (k & 255) >>> 1 : l) << 2) | 0, r, n, w, c[t >> 2] | 0, c[x >> 2] | 0, A, D, C, e);
 c[q >> 2] = c[d >> 2];
 F = c[v >> 2] | 0;
 j = c[u >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Bh(p, z, F, j, f, g) | 0;
 if (B) {
  ud(B);
  b = c[y >> 2] | 0;
 }
 se(C);
 se(D);
 ge(A);
 ln(b) | 0;
 i = E;
 return j | 0;
}

function Qi(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (!a) h = 1; else {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   h = 1;
   break;
  } else {
   h = (c[b >> 2] | 0) == 0;
   break;
  }
 } while (0);
 g = c[d >> 2] | 0;
 do if (!g) j = 14; else {
  a = c[g + 12 >> 2] | 0;
  if ((a | 0) == (c[g + 16 >> 2] | 0)) a = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) == -1) {
   c[d >> 2] = 0;
   j = 14;
   break;
  } else if (h) {
   i = g;
   j = 17;
   break;
  } else {
   j = 16;
   break;
  }
 } while (0);
 if ((j | 0) == 14) if (h) j = 16; else {
  i = 0;
  j = 17;
 }
 a : do if ((j | 0) == 16) c[e >> 2] = c[e >> 2] | 6; else if ((j | 0) == 17) {
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((lb[c[(c[f >> 2] | 0) + 52 >> 2] & 31](f, a, 0) | 0) << 24 >> 24 != 37) {
   c[e >> 2] = c[e >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   sb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) g = 1; else j = 25;
  } else {
   c[g >> 2] = h + 4;
   j = 25;
  }
  do if ((j | 0) == 25) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  do if (!i) j = 37; else {
   a = c[i + 12 >> 2] | 0;
   if ((a | 0) == (c[i + 16 >> 2] | 0)) a = sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) == -1) {
    c[d >> 2] = 0;
    j = 37;
    break;
   } else if (g) break a; else break;
  } while (0);
  if ((j | 0) == 37) if (!g) break;
  c[e >> 2] = c[e >> 2] | 2;
 } while (0);
 return;
}

function ak(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 w = i;
 i = i + 240 | 0;
 n = w + 24 | 0;
 q = w;
 k = w + 140 | 0;
 v = w + 16 | 0;
 o = w + 12 | 0;
 s = w + 8 | 0;
 l = w + 136 | 0;
 x = w + 4 | 0;
 p = w + 36 | 0;
 c[v >> 2] = k;
 u = v + 4 | 0;
 c[u >> 2] = 107;
 c[s >> 2] = vf(g) | 0;
 b = Uf(s, 19136) | 0;
 a[l >> 0] = 0;
 c[x >> 2] = c[e >> 2];
 g = c[g + 4 >> 2] | 0;
 c[n >> 2] = c[x >> 2];
 if (ck(d, n, f, s, g, h, l, b, v, o, k + 100 | 0) | 0) {
  wb[c[(c[b >> 2] | 0) + 32 >> 2] & 7](b, 15358, 15368, n) | 0;
  f = c[o >> 2] | 0;
  k = c[v >> 2] | 0;
  b = f - k | 0;
  if ((b | 0) > 98) {
   b = td(b + 2 | 0) | 0;
   if (!b) $n(); else {
    r = b;
    m = b;
   }
  } else {
   r = 0;
   m = p;
  }
  if (!(a[l >> 0] | 0)) b = m; else {
   a[m >> 0] = 45;
   b = m + 1 | 0;
  }
  l = n + 10 | 0;
  m = n;
  while (1) {
   if (k >>> 0 >= f >>> 0) break;
   g = a[k >> 0] | 0;
   f = n;
   while (1) {
    if ((f | 0) == (l | 0)) {
     f = l;
     break;
    }
    if ((a[f >> 0] | 0) == g << 24 >> 24) break;
    f = f + 1 | 0;
   }
   a[b >> 0] = a[15358 + (f - m) >> 0] | 0;
   f = c[o >> 2] | 0;
   b = b + 1 | 0;
   k = k + 1 | 0;
  }
  a[b >> 0] = 0;
  c[q >> 2] = j;
  Zc(p, 15369, q) | 0;
  if (r | 0) ud(r);
 }
 b = c[d >> 2] | 0;
 do if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[d >> 2] = 0;
  b = 0;
  break;
 } else {
  b = c[d >> 2] | 0;
  break;
 } while (0);
 b = (b | 0) == 0;
 f = c[e >> 2] | 0;
 do if (!f) t = 27; else {
  if ((c[f + 12 >> 2] | 0) == (c[f + 16 >> 2] | 0)) if ((sb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0) == -1) {
   c[e >> 2] = 0;
   t = 27;
   break;
  }
  if (!b) t = 28;
 } while (0);
 if ((t | 0) == 27) if (b) t = 28;
 if ((t | 0) == 28) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 ln(c[s >> 2] | 0) | 0;
 b = c[v >> 2] | 0;
 c[v >> 2] = 0;
 if (b | 0) ob[c[u >> 2] & 127](b);
 i = w;
 return f | 0;
}

function Li(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 a : while (1) {
  a = c[b >> 2] | 0;
  do if (!a) h = 1; else {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    h = 1;
    break;
   } else {
    h = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  g = c[d >> 2] | 0;
  do if (!g) i = 15; else {
   a = c[g + 12 >> 2] | 0;
   if ((a | 0) == (c[g + 16 >> 2] | 0)) a = sb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) == -1) {
    c[d >> 2] = 0;
    i = 15;
    break;
   } else if (h) {
    h = g;
    break;
   } else {
    h = g;
    break a;
   }
  } while (0);
  if ((i | 0) == 15) {
   i = 0;
   if (h) {
    h = 0;
    break;
   } else h = 0;
  }
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if (!(lb[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, 8192, a) | 0)) break;
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   sb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   continue;
  } else {
   c[g >> 2] = h + 4;
   continue;
  }
 }
 a = c[b >> 2] | 0;
 do if (!a) g = 1; else {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[b >> 2] | 0) == 0;
   break;
  }
 } while (0);
 do if (!h) i = 37; else {
  a = c[h + 12 >> 2] | 0;
  if ((a | 0) == (c[h + 16 >> 2] | 0)) a = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) == -1) {
   c[d >> 2] = 0;
   i = 37;
   break;
  } else if (g) break; else {
   i = 39;
   break;
  }
 } while (0);
 if ((i | 0) == 37) if (g) i = 39;
 if ((i | 0) == 39) c[e >> 2] = c[e >> 2] | 2;
 return;
}

function Fd(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 32 | 0;
 r = t + 16 | 0;
 q = t + 8 | 0;
 n = t + 4 | 0;
 o = t;
 h = b + 52 | 0;
 if (!(a[h >> 0] | 0)) {
  f = c[b + 44 >> 2] | 0;
  f = (f | 0) > 1 ? f : 1;
  p = b + 32 | 0;
  h = 0;
  while (1) {
   if ((h | 0) >= (f | 0)) {
    s = 8;
    break;
   }
   g = pd(c[p >> 2] | 0) | 0;
   if ((g | 0) == -1) {
    f = -1;
    break;
   }
   a[r + h >> 0] = g;
   h = h + 1 | 0;
  }
  if ((s | 0) == 8) {
   do if (!(a[b + 53 >> 0] | 0)) {
    k = b + 40 | 0;
    l = b + 36 | 0;
    m = q + 1 | 0;
    a : while (1) {
     u = c[k >> 2] | 0;
     h = u;
     g = c[h >> 2] | 0;
     h = c[h + 4 >> 2] | 0;
     v = c[l >> 2] | 0;
     j = r + f | 0;
     switch (vb[c[(c[v >> 2] | 0) + 16 >> 2] & 15](v, u, r, j, n, q, m, o) | 0) {
     case 3:
      {
       s = 15;
       break a;
      }
     case 2:
      {
       s = 17;
       break a;
      }
     case 1:
      break;
     default:
      break a;
     }
     v = c[k >> 2] | 0;
     c[v >> 2] = g;
     c[v + 4 >> 2] = h;
     if ((f | 0) == 8) {
      s = 17;
      break;
     }
     g = pd(c[p >> 2] | 0) | 0;
     if ((g | 0) == -1) {
      s = 17;
      break;
     }
     a[j >> 0] = g;
     f = f + 1 | 0;
    }
    if ((s | 0) == 15) a[q >> 0] = a[r >> 0] | 0; else if ((s | 0) == 17) {
     f = -1;
     break;
    }
    s = 18;
   } else {
    a[q >> 0] = a[r >> 0] | 0;
    s = 18;
   } while (0);
   b : do if ((s | 0) == 18) {
    if (e) {
     f = a[q >> 0] | 0;
     c[b + 48 >> 2] = f & 255;
    } else {
     while (1) {
      if ((f | 0) <= 0) break;
      f = f + -1 | 0;
      if ((qd(d[r + f >> 0] | 0, c[p >> 2] | 0) | 0) == -1) {
       f = -1;
       break b;
      }
     }
     f = a[q >> 0] | 0;
    }
    f = f & 255;
   } while (0);
  }
 } else {
  g = b + 48 | 0;
  f = c[g >> 2] | 0;
  if (e) {
   c[g >> 2] = -1;
   a[h >> 0] = 0;
  }
 }
 i = t;
 return f | 0;
}

function Sd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 s = i;
 i = i + 32 | 0;
 q = s + 16 | 0;
 p = s + 8 | 0;
 m = s + 4 | 0;
 n = s;
 g = b + 52 | 0;
 if (!(a[g >> 0] | 0)) {
  e = c[b + 44 >> 2] | 0;
  e = (e | 0) > 1 ? e : 1;
  o = b + 32 | 0;
  g = 0;
  while (1) {
   if ((g | 0) >= (e | 0)) {
    r = 8;
    break;
   }
   f = pd(c[o >> 2] | 0) | 0;
   if ((f | 0) == -1) {
    e = -1;
    break;
   }
   a[q + g >> 0] = f;
   g = g + 1 | 0;
  }
  if ((r | 0) == 8) {
   do if (!(a[b + 53 >> 0] | 0)) {
    j = b + 40 | 0;
    k = b + 36 | 0;
    l = p + 4 | 0;
    a : while (1) {
     t = c[j >> 2] | 0;
     g = t;
     f = c[g >> 2] | 0;
     g = c[g + 4 >> 2] | 0;
     u = c[k >> 2] | 0;
     h = q + e | 0;
     switch (vb[c[(c[u >> 2] | 0) + 16 >> 2] & 15](u, t, q, h, m, p, l, n) | 0) {
     case 3:
      {
       r = 15;
       break a;
      }
     case 2:
      {
       r = 17;
       break a;
      }
     case 1:
      break;
     default:
      break a;
     }
     u = c[j >> 2] | 0;
     c[u >> 2] = f;
     c[u + 4 >> 2] = g;
     if ((e | 0) == 8) {
      r = 17;
      break;
     }
     f = pd(c[o >> 2] | 0) | 0;
     if ((f | 0) == -1) {
      r = 17;
      break;
     }
     a[h >> 0] = f;
     e = e + 1 | 0;
    }
    if ((r | 0) == 15) c[p >> 2] = a[q >> 0]; else if ((r | 0) == 17) {
     e = -1;
     break;
    }
    r = 18;
   } else {
    c[p >> 2] = a[q >> 0];
    r = 18;
   } while (0);
   b : do if ((r | 0) == 18) {
    if (d) {
     e = c[p >> 2] | 0;
     c[b + 48 >> 2] = e;
     break;
    }
    while (1) {
     if ((e | 0) <= 0) break;
     e = e + -1 | 0;
     if ((qd(a[q + e >> 0] | 0, c[o >> 2] | 0) | 0) == -1) {
      e = -1;
      break b;
     }
    }
    e = c[p >> 2] | 0;
   } while (0);
  }
 } else {
  f = b + 48 | 0;
  e = c[f >> 2] | 0;
  if (d) {
   c[f >> 2] = -1;
   a[g >> 0] = 0;
  }
 }
 i = s;
 return e | 0;
}

function xc(a, b, d) {
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

function jc(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = bc(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = bc(a) | 0;
   if ((b | 0) != 0 & (e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) h = f; else {
    c[i >> 2] = (c[i >> 2] | 0) + -1;
    h = f;
   } else h = f;
   break;
  }
 default:
  h = 0;
 }
 if ((e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) {
  f = -2147483648;
  e = 0;
 } else {
  c[i >> 2] = (c[i >> 2] | 0) + -1;
  f = -2147483648;
  e = 0;
 } else {
  f = 0;
  do {
   f = e + -48 + (f * 10 | 0) | 0;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = bc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = oo(f | 0, b | 0, 10, 0) | 0;
    f = D;
    e = eo(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = eo(e | 0, D | 0, b | 0, f | 0) | 0;
    b = D;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = bc(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = bc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  a = (h | 0) != 0;
  e = bo(0, 0, g | 0, b | 0) | 0;
  f = a ? D : b;
  e = a ? e : g;
 }
 D = f;
 return e | 0;
}

function Ok(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0;
 c[e >> 2] = b;
 c[h >> 2] = f;
 l = g;
 if (!(j & 2)) k = 4; else if ((l - f | 0) < 3) b = 1; else {
  c[h >> 2] = f + 1;
  a[f >> 0] = -17;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -69;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -65;
  k = 4;
 }
 a : do if ((k | 0) == 4) {
  b = c[e >> 2] | 0;
  while (1) {
   if (b >>> 0 >= d >>> 0) {
    b = 0;
    break a;
   }
   j = c[b >> 2] | 0;
   if (j >>> 0 > i >>> 0 | (j & -2048 | 0) == 55296) {
    b = 2;
    break a;
   }
   do if (j >>> 0 < 128) {
    b = c[h >> 2] | 0;
    if ((l - b | 0) < 1) {
     b = 1;
     break a;
    }
    c[h >> 2] = b + 1;
    a[b >> 0] = j;
   } else {
    if (j >>> 0 < 2048) {
     b = c[h >> 2] | 0;
     if ((l - b | 0) < 2) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 6 | 192;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
    b = c[h >> 2] | 0;
    g = l - b | 0;
    if (j >>> 0 < 65536) {
     if ((g | 0) < 3) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 12 | 224;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    } else {
     if ((g | 0) < 4) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 18 | 240;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 12 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
   } while (0);
   b = (c[e >> 2] | 0) + 4 | 0;
   c[e >> 2] = b;
  }
 } while (0);
 return b | 0;
}

function gi(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (!a) a = 0; else if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
  c[b >> 2] = 0;
  a = 0;
  break;
 } else {
  a = c[b >> 2] | 0;
  break;
 } while (0);
 h = (a | 0) == 0;
 a = c[e >> 2] | 0;
 do if (!a) j = 11; else {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[e >> 2] = 0;
   j = 11;
   break;
  }
  if (h) {
   i = a;
   j = 13;
  } else j = 12;
 } while (0);
 if ((j | 0) == 11) if (h) j = 12; else {
  i = 0;
  j = 13;
 }
 a : do if ((j | 0) == 12) c[f >> 2] = c[f >> 2] | 6; else if ((j | 0) == 13) {
  a = c[b >> 2] | 0;
  h = c[a + 12 >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) a = sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = d[h >> 0] | 0;
  if ((lb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, a & 255, 0) | 0) << 24 >> 24 != 37) {
   c[f >> 2] = c[f >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  h = a + 12 | 0;
  g = c[h >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) {
   sb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) a = 0; else j = 21;
  } else {
   c[h >> 2] = g + 1;
   j = 21;
  }
  do if ((j | 0) == 21) if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[b >> 2] = 0;
   a = 0;
   break;
  } else {
   a = c[b >> 2] | 0;
   break;
  } while (0);
  a = (a | 0) == 0;
  do if (!i) j = 30; else {
   if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((sb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
    c[e >> 2] = 0;
    j = 30;
    break;
   }
   if (a) break a;
  } while (0);
  if ((j | 0) == 30) if (!a) break;
  c[f >> 2] = c[f >> 2] | 2;
 } while (0);
 return;
}

function ok(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 432 | 0;
 v = s + 424 | 0;
 t = s + 24 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 428 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 107;
 o = vf(g) | 0;
 c[u >> 2] = o;
 b = Uf(u, 19168) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (lk(d, v, f, u, g, h, k, b, r, l, t + 400 | 0) | 0) {
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  if (a[k >> 0] | 0) ye(j, yb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 45) | 0);
  k = yb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 48) | 0;
  f = c[l >> 2] | 0;
  g = f + -4 | 0;
  b = c[r >> 2] | 0;
  while (1) {
   if (b >>> 0 >= g >>> 0) break;
   if ((c[b >> 2] | 0) != (k | 0)) break;
   b = b + 4 | 0;
  }
  pk(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (!b) g = 1; else {
  g = c[b + 12 >> 2] | 0;
  if ((g | 0) == (c[b + 16 >> 2] | 0)) b = sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[g >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } while (0);
 do if (!n) p = 25; else {
  b = c[m + 12 >> 2] | 0;
  if ((b | 0) == (c[m + 16 >> 2] | 0)) b = sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[e >> 2] = 0;
   p = 25;
   break;
  } else if (g) break; else {
   p = 27;
   break;
  }
 } while (0);
 if ((p | 0) == 25) if (g) p = 27;
 if ((p | 0) == 27) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 ln(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b | 0) ob[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function bi(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0;
 j = h + 8 | 0;
 a : while (1) {
  h = c[e >> 2] | 0;
  do if (!h) h = 0; else if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
   c[e >> 2] = 0;
   h = 0;
   break;
  } else {
   h = c[e >> 2] | 0;
   break;
  } while (0);
  h = (h | 0) == 0;
  a = c[f >> 2] | 0;
  do if (!a) k = 12; else {
   if ((c[a + 12 >> 2] | 0) != (c[a + 16 >> 2] | 0)) if (h) break; else break a;
   if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
    c[f >> 2] = 0;
    k = 12;
    break;
   } else if (h) break; else break a;
  } while (0);
  if ((k | 0) == 12) {
   k = 0;
   if (h) {
    a = 0;
    break;
   } else a = 0;
  }
  h = c[e >> 2] | 0;
  i = c[h + 12 >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) h = sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = d[i >> 0] | 0;
  if ((h & 255) << 24 >> 24 <= -1) break;
  if (!(b[(c[j >> 2] | 0) + (h << 24 >> 24 << 1) >> 1] & 8192)) break;
  h = c[e >> 2] | 0;
  a = h + 12 | 0;
  i = c[a >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) {
   sb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
   continue;
  } else {
   c[a >> 2] = i + 1;
   continue;
  }
 }
 h = c[e >> 2] | 0;
 do if (!h) h = 0; else if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((sb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
  c[e >> 2] = 0;
  h = 0;
  break;
 } else {
  h = c[e >> 2] | 0;
  break;
 } while (0);
 h = (h | 0) == 0;
 do if (!a) k = 32; else {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[f >> 2] = 0;
   k = 32;
   break;
  }
  if (!h) k = 33;
 } while (0);
 if ((k | 0) == 32) if (h) k = 33;
 if ((k | 0) == 33) c[g >> 2] = c[g >> 2] | 2;
 return;
}

function kd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 a : do if (!b) {
  b = c[d >> 2] | 0;
  f = c[b >> 2] | 0;
  if (!f) e = 0; else {
   e = 0;
   do {
    if (f >>> 0 > 127) {
     f = Dc(j, f, 0) | 0;
     if ((f | 0) == -1) {
      e = -1;
      break a;
     }
    } else f = 1;
    e = f + e | 0;
    b = b + 4 | 0;
    f = c[b >> 2] | 0;
   } while ((f | 0) != 0);
  }
 } else {
  b : do if (e >>> 0 > 3) {
   f = e;
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) break;
     h = Dc(b, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (f >>> 0 <= 3) break b;
   }
   a[b >> 0] = 0;
   c[d >> 2] = 0;
   e = e - f | 0;
   break a;
  } else f = e; while (0);
  if (f) {
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) {
      g = 19;
      break;
     }
     h = Dc(j, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     if (f >>> 0 < h >>> 0) {
      g = 22;
      break;
     }
     Dc(b, c[g >> 2] | 0, 0) | 0;
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (!f) break a;
   }
   if ((g | 0) == 19) {
    a[b >> 0] = 0;
    c[d >> 2] = 0;
    e = e - f | 0;
    break;
   } else if ((g | 0) == 22) {
    e = e - f | 0;
    break;
   }
  }
 } while (0);
 i = k;
 return e | 0;
}

function gk(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 144 | 0;
 v = s + 24 | 0;
 t = s + 32 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 28 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 107;
 o = vf(g) | 0;
 c[u >> 2] = o;
 b = Uf(u, 19136) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (ck(d, v, f, u, g, h, k, b, r, l, t + 100 | 0) | 0) {
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  if (a[k >> 0] | 0) oe(j, yb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 45) | 0);
  k = yb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 48) | 0;
  f = c[l >> 2] | 0;
  g = f + -1 | 0;
  b = c[r >> 2] | 0;
  while (1) {
   if (b >>> 0 >= g >>> 0) break;
   if ((a[b >> 0] | 0) != k << 24 >> 24) break;
   b = b + 1 | 0;
  }
  hk(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (!b) b = 0; else if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((sb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
  c[d >> 2] = 0;
  b = 0;
  break;
 } else {
  b = c[d >> 2] | 0;
  break;
 } while (0);
 b = (b | 0) == 0;
 do if (!n) p = 22; else {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((sb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[e >> 2] = 0;
   p = 22;
   break;
  }
  if (!b) p = 23;
 } while (0);
 if ((p | 0) == 22) if (b) p = 23;
 if ((p | 0) == 23) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 ln(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b | 0) ob[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function ag(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (a[l + 24 >> 0] | 0) == b << 24 >> 24;
  if (!m) if ((a[l + 25 >> 0] | 0) != b << 24 >> 24) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if (b << 24 >> 24 == h << 24 >> 24 ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 26 | 0;
  m = l;
  while (1) {
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
   if ((a[m >> 0] | 0) == b << 24 >> 24) break;
   m = m + 1 | 0;
  }
  m = m - l | 0;
  if ((m | 0) > 23) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((m | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 22) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[14074 + m >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[14074 + m >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function Ng(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (c[l + 96 >> 2] | 0) == (b | 0);
  if (!m) if ((c[l + 100 >> 2] | 0) != (b | 0)) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if ((b | 0) == (h | 0) ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 104 | 0;
  m = l;
  while (1) {
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
   if ((c[m >> 2] | 0) == (b | 0)) break;
   m = m + 4 | 0;
  }
  m = m - l | 0;
  i = m >> 2;
  if ((m | 0) > 92) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((i | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 88) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[14074 + i >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[14074 + i >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function qm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9184;
 b = a + 8 | 0;
 rm(b, 28);
 de(a + 144 | 0, 14107, 1);
 b = c[b >> 2] | 0;
 d = a + 12 | 0;
 e = c[d >> 2] | 0;
 while (1) {
  if ((e | 0) == (b | 0)) break;
  f = e + -4 | 0;
  c[d >> 2] = f;
  e = f;
 }
 c[4263] = 0;
 c[4262] = 6848;
 tm(a, 17048);
 c[4265] = 0;
 c[4264] = 6880;
 Am(a, 17056);
 nm(17064, 0, 0, 1);
 Bm(a, 17064);
 c[4271] = 0;
 c[4270] = 9400;
 Cm(a, 17080);
 c[4273] = 0;
 c[4272] = 9468;
 Dm(a, 17088);
 c[4275] = 0;
 c[4274] = 9136;
 c[4276] = cg() | 0;
 Em(a, 17096);
 c[4279] = 0;
 c[4278] = 9516;
 Fm(a, 17112);
 c[4281] = 0;
 c[4280] = 9564;
 Gm(a, 17120);
 Hm(17128, 1);
 Im(a, 17128);
 Jm(17152, 1);
 Km(a, 17152);
 c[4297] = 0;
 c[4296] = 6912;
 Lm(a, 17184);
 c[4299] = 0;
 c[4298] = 6976;
 Mm(a, 17192);
 c[4301] = 0;
 c[4300] = 7040;
 Nm(a, 17200);
 c[4303] = 0;
 c[4302] = 7092;
 Om(a, 17208);
 c[4305] = 0;
 c[4304] = 8640;
 Pm(a, 17216);
 c[4307] = 0;
 c[4306] = 8696;
 Qm(a, 17224);
 c[4309] = 0;
 c[4308] = 8752;
 Rm(a, 17232);
 c[4311] = 0;
 c[4310] = 8808;
 Sm(a, 17240);
 c[4313] = 0;
 c[4312] = 8864;
 Tm(a, 17248);
 c[4315] = 0;
 c[4314] = 8892;
 Um(a, 17256);
 c[4317] = 0;
 c[4316] = 8920;
 Vm(a, 17264);
 c[4319] = 0;
 c[4318] = 8948;
 Wm(a, 17272);
 c[4321] = 0;
 c[4320] = 7144;
 c[4322] = 7192;
 Xm(a, 17280);
 c[4325] = 0;
 c[4324] = 7228;
 c[4326] = 7276;
 Ym(a, 17296);
 c[4329] = 0;
 c[4328] = 9380;
 c[4330] = cg() | 0;
 c[4328] = 8592;
 Zm(a, 17312);
 c[4333] = 0;
 c[4332] = 9380;
 c[4334] = cg() | 0;
 c[4332] = 8616;
 _m(a, 17328);
 c[4337] = 0;
 c[4336] = 8976;
 $m(a, 17344);
 c[4339] = 0;
 c[4338] = 9008;
 an(a, 17352);
 return;
}

function Kk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 t = i;
 i = i + 176 | 0;
 q = t + 168 | 0;
 p = t + 40 | 0;
 o = t + 36 | 0;
 s = t + 32 | 0;
 r = t;
 m = t + 24 | 0;
 n = t + 16 | 0;
 d = 0;
 while (1) {
  if ((d | 0) == 3) break;
  c[r + (d << 2) >> 2] = 0;
  d = d + 1 | 0;
 }
 c[m + 4 >> 2] = 0;
 c[m >> 2] = 9040;
 l = a[h >> 0] | 0;
 d = (l & 1) == 0;
 k = h + 4 | 0;
 h = d ? k : c[h + 8 >> 2] | 0;
 k = h + ((d ? (l & 255) >>> 1 : c[k >> 2] | 0) << 2) | 0;
 l = p + 32 | 0;
 d = 0;
 while (1) {
  if (!((d | 0) != 2 & h >>> 0 < k >>> 0)) break;
  c[s >> 2] = h;
  j = vb[c[(c[m >> 2] | 0) + 12 >> 2] & 15](m, q, h, k, s, p, l, o) | 0;
  d = p;
  while (1) {
   if (d >>> 0 >= (c[o >> 2] | 0) >>> 0) break;
   oe(r, a[d >> 0] | 0);
   d = d + 1 | 0;
  }
  h = c[s >> 2] | 0;
  d = j;
 }
 h = Yc((e | 0) == -1 ? -1 : e << 1, f, g, (a[r >> 0] & 1) == 0 ? r + 1 | 0 : c[r + 8 >> 2] | 0) | 0;
 d = 0;
 while (1) {
  if ((d | 0) == 3) break;
  c[b + (d << 2) >> 2] = 0;
  d = d + 1 | 0;
 }
 c[n + 4 >> 2] = 0;
 c[n >> 2] = 9088;
 k = h + (Hc(h) | 0) | 0;
 l = k;
 m = p + 128 | 0;
 d = 0;
 while (1) {
  if (!((d | 0) != 2 & h >>> 0 < k >>> 0)) break;
  c[s >> 2] = h;
  j = vb[c[(c[n >> 2] | 0) + 16 >> 2] & 15](n, q, h, (l - h | 0) > 32 ? h + 32 | 0 : k, s, p, m, o) | 0;
  d = p;
  while (1) {
   if (d >>> 0 >= (c[o >> 2] | 0) >>> 0) break;
   ye(b, c[d >> 2] | 0);
   d = d + 4 | 0;
  }
  h = c[s >> 2] | 0;
  d = j;
 }
 ge(r);
 i = t;
 return;
}

function Rb(a, b, d) {
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
  if (!(c[4384] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Pb(ib(146, n | 0) | 0) | 0;
  } else {
   cb(94, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Pb(ib(146, m | 0) | 0) | 0;
   va(0);
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

function md(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 1040 | 0;
 l = o + 8 | 0;
 n = o;
 k = c[b >> 2] | 0;
 c[n >> 2] = k;
 m = (a | 0) != 0;
 e = m ? e : 256;
 a = m ? a : l;
 g = k;
 a : do if ((e | 0) != 0 & (k | 0) != 0) {
  j = e;
  k = g;
  e = 0;
  while (1) {
   g = d >>> 2;
   h = g >>> 0 >= j >>> 0;
   if (!(d >>> 0 > 131 | h)) {
    g = k;
    break a;
   }
   g = h ? j : g;
   d = d - g | 0;
   g = nd(a, n, g, f) | 0;
   if ((g | 0) == -1) {
    e = d;
    break;
   }
   p = (a | 0) == (l | 0);
   k = p ? 0 : g;
   h = j - k | 0;
   a = p ? a : a + (g << 2) | 0;
   e = g + e | 0;
   g = c[n >> 2] | 0;
   if ((j | 0) != (k | 0) & (g | 0) != 0) {
    j = h;
    k = g;
   } else {
    j = h;
    break a;
   }
  }
  d = e;
  j = 0;
  g = c[n >> 2] | 0;
  e = -1;
 } else {
  j = e;
  e = 0;
 } while (0);
 b : do if (g) if ((j | 0) != 0 & (d | 0) != 0) {
  h = g;
  g = a;
  while (1) {
   a = Tc(g, h, d, f) | 0;
   if ((a + 2 | 0) >>> 0 < 3) break;
   h = (c[n >> 2] | 0) + a | 0;
   c[n >> 2] = h;
   j = j + -1 | 0;
   e = e + 1 | 0;
   if (!((j | 0) != 0 & (d | 0) != (a | 0))) break b; else {
    d = d - a | 0;
    g = g + 4 | 0;
   }
  }
  switch (a | 0) {
  case -1:
   {
    e = -1;
    break b;
   }
  case 0:
   {
    c[n >> 2] = 0;
    break b;
   }
  default:
   {
    c[f >> 2] = 0;
    break b;
   }
  }
 } while (0);
 if (m) c[b >> 2] = c[n >> 2];
 i = o;
 return e | 0;
}

function Hh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 A = i;
 i = i + 352 | 0;
 r = A + 304 | 0;
 n = A + 48 | 0;
 m = A + 32 | 0;
 j = A + 24 | 0;
 g = A + 8 | 0;
 l = A;
 p = A + 308 | 0;
 o = A + 300 | 0;
 q = A + 72 | 0;
 w = A + 68 | 0;
 v = A + 64 | 0;
 s = A + 60 | 0;
 t = A + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = rh(l + 1 | 0, 14328, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = cg() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = kh(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = kh(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = cg() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = sh(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = sh(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) $n(); else {
   x = a;
   B = a;
   u = g;
  }
 } else {
  x = c[o >> 2] | 0;
  B = 0;
  u = a;
 }
 g = x + u | 0;
 j = lh(x, g, d) | 0;
 if ((x | 0) == (p | 0)) {
  y = p;
  z = q;
  C = 0;
 } else {
  a = td(u << 3) | 0;
  if (!a) $n(); else {
   y = x;
   z = a;
   C = a;
  }
 }
 a = vf(d) | 0;
 c[s >> 2] = a;
 Gh(y, j, g, z, w, v, s);
 ln(a) | 0;
 c[t >> 2] = c[b >> 2];
 y = c[w >> 2] | 0;
 a = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 a = Bh(r, z, y, a, d, e) | 0;
 c[b >> 2] = a;
 if (C | 0) ud(C);
 ud(B);
 i = A;
 return a | 0;
}

function Ad(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 d = c[683] | 0;
 Bd(18768, d, 18824);
 c[4522] = 6692;
 c[4524] = 6712;
 c[4523] = 0;
 uf(18096, 18768);
 c[4542] = 0;
 c[4543] = -1;
 b = c[653] | 0;
 Id(18872, b, 18832);
 c[4544] = 6772;
 c[4545] = 6792;
 uf(18180, 18872);
 c[4563] = 0;
 c[4564] = -1;
 a = c[624] | 0;
 Id(18920, a, 18840);
 c[4565] = 6772;
 c[4566] = 6792;
 uf(18264, 18920);
 c[4584] = 0;
 c[4585] = -1;
 e = c[18260 + (c[(c[4565] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
 c[4586] = 6772;
 c[4587] = 6792;
 uf(18348, e);
 c[4605] = 0;
 c[4606] = -1;
 c[18088 + (c[(c[4522] | 0) + -12 >> 2] | 0) + 72 >> 2] = 18176;
 e = 18260 + (c[(c[4565] | 0) + -12 >> 2] | 0) + 4 | 0;
 c[e >> 2] = c[e >> 2] | 8192;
 c[18260 + (c[(c[4565] | 0) + -12 >> 2] | 0) + 72 >> 2] = 18176;
 Od(18968, d, 18848);
 c[4607] = 6732;
 c[4609] = 6752;
 c[4608] = 0;
 uf(18436, 18968);
 c[4627] = 0;
 c[4628] = -1;
 Vd(19024, b, 18856);
 c[4629] = 6812;
 c[4630] = 6832;
 uf(18520, 19024);
 c[4648] = 0;
 c[4649] = -1;
 Vd(19072, a, 18864);
 c[4650] = 6812;
 c[4651] = 6832;
 uf(18604, 19072);
 c[4669] = 0;
 c[4670] = -1;
 a = c[18600 + (c[(c[4650] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
 c[4671] = 6812;
 c[4672] = 6832;
 uf(18688, a);
 c[4690] = 0;
 c[4691] = -1;
 c[18428 + (c[(c[4607] | 0) + -12 >> 2] | 0) + 72 >> 2] = 18516;
 a = 18600 + (c[(c[4650] | 0) + -12 >> 2] | 0) + 4 | 0;
 c[a >> 2] = c[a >> 2] | 8192;
 c[18600 + (c[(c[4650] | 0) + -12 >> 2] | 0) + 72 >> 2] = 18516;
 return;
}

function uh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 x = i;
 i = i + 176 | 0;
 r = x + 76 | 0;
 n = x + 48 | 0;
 m = x + 32 | 0;
 j = x + 24 | 0;
 g = x + 8 | 0;
 l = x;
 p = x + 138 | 0;
 o = x + 72 | 0;
 q = x + 80 | 0;
 w = x + 68 | 0;
 v = x + 64 | 0;
 s = x + 60 | 0;
 t = x + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = rh(l + 1 | 0, 14328, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = cg() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = kh(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = kh(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = cg() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = sh(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = sh(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) $n(); else {
   y = a;
   A = a;
   u = g;
  }
 } else {
  y = c[o >> 2] | 0;
  A = 0;
  u = a;
 }
 g = y + u | 0;
 j = lh(y, g, d) | 0;
 if ((y | 0) == (p | 0)) {
  z = p;
  B = q;
  C = 0;
 } else {
  a = td(u << 1) | 0;
  if (!a) $n(); else {
   z = y;
   B = a;
   C = a;
  }
 }
 y = vf(d) | 0;
 c[s >> 2] = y;
 th(z, j, g, B, w, v, s);
 ln(y) | 0;
 c[t >> 2] = c[b >> 2];
 z = c[w >> 2] | 0;
 b = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 b = Mb(r, B, z, b, d, e) | 0;
 ud(C);
 ud(A);
 i = x;
 return b | 0;
}

function Fh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 y = i;
 i = i + 336 | 0;
 p = y + 296 | 0;
 l = y + 32 | 0;
 j = y + 24 | 0;
 g = y + 8 | 0;
 k = y;
 n = y + 300 | 0;
 m = y + 292 | 0;
 o = y + 64 | 0;
 u = y + 60 | 0;
 t = y + 56 | 0;
 q = y + 52 | 0;
 r = y + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = rh(k + 1 | 0, 23137, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = cg() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = kh(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = kh(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = cg() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = sh(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) $n(); else {
   v = a;
   z = a;
   s = g;
  }
 } else {
  v = c[m >> 2] | 0;
  z = 0;
  s = a;
 }
 g = v + s | 0;
 j = lh(v, g, d) | 0;
 if ((v | 0) == (n | 0)) {
  w = n;
  x = o;
  A = 0;
 } else {
  a = td(s << 3) | 0;
  if (!a) $n(); else {
   w = v;
   x = a;
   A = a;
  }
 }
 B = vf(d) | 0;
 c[q >> 2] = B;
 Gh(w, j, g, x, u, t, q);
 ln(B) | 0;
 c[r >> 2] = c[b >> 2];
 B = c[u >> 2] | 0;
 a = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 a = Bh(p, x, B, a, d, e) | 0;
 c[b >> 2] = a;
 if (A | 0) ud(A);
 ud(z);
 i = y;
 return a | 0;
}

function qh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 v = i;
 i = i + 160 | 0;
 p = v + 68 | 0;
 l = v + 32 | 0;
 j = v + 24 | 0;
 g = v + 8 | 0;
 k = v;
 n = v + 130 | 0;
 m = v + 64 | 0;
 o = v + 72 | 0;
 u = v + 60 | 0;
 t = v + 56 | 0;
 q = v + 52 | 0;
 r = v + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = rh(k + 1 | 0, 23137, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = cg() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = kh(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = kh(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = cg() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = sh(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) $n(); else {
   w = a;
   y = a;
   s = g;
  }
 } else {
  w = c[m >> 2] | 0;
  y = 0;
  s = a;
 }
 g = w + s | 0;
 j = lh(w, g, d) | 0;
 if ((w | 0) == (n | 0)) {
  x = n;
  z = o;
  A = 0;
 } else {
  a = td(s << 1) | 0;
  if (!a) $n(); else {
   x = w;
   z = a;
   A = a;
  }
 }
 B = vf(d) | 0;
 c[q >> 2] = B;
 th(x, j, g, z, u, t, q);
 ln(B) | 0;
 c[r >> 2] = c[b >> 2];
 b = c[u >> 2] | 0;
 B = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 B = Mb(p, z, b, B, d, e) | 0;
 ud(A);
 ud(y);
 i = v;
 return B | 0;
}

function sd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 272 | 0;
 j = m + 8 | 0;
 l = m;
 h = c[b >> 2] | 0;
 c[l >> 2] = h;
 k = (a | 0) != 0;
 f = k ? e : 256;
 e = k ? a : j;
 a = h;
 a : do if ((f | 0) != 0 & (h | 0) != 0) {
  h = f;
  g = a;
  f = 0;
  while (1) {
   a = d >>> 0 >= h >>> 0;
   if (!(a | d >>> 0 > 32)) {
    a = g;
    break a;
   }
   a = a ? h : d;
   d = d - a | 0;
   a = kd(e, l, a, 0) | 0;
   if ((a | 0) == -1) {
    f = d;
    break;
   }
   o = (e | 0) == (j | 0);
   n = o ? 0 : a;
   g = h - n | 0;
   e = o ? e : e + a | 0;
   f = a + f | 0;
   a = c[l >> 2] | 0;
   if ((h | 0) != (n | 0) & (a | 0) != 0) {
    h = g;
    g = a;
   } else {
    h = g;
    break a;
   }
  }
  d = f;
  h = 0;
  a = c[l >> 2] | 0;
  f = -1;
 } else {
  h = f;
  f = 0;
 } while (0);
 b : do if (a) if ((h | 0) != 0 & (d | 0) != 0) {
  g = a;
  a = e;
  while (1) {
   e = Dc(a, c[g >> 2] | 0, 0) | 0;
   if ((e + 1 | 0) >>> 0 < 2) break;
   g = (c[l >> 2] | 0) + 4 | 0;
   c[l >> 2] = g;
   d = d + -1 | 0;
   f = f + 1 | 0;
   if (!((h | 0) != (e | 0) & (d | 0) != 0)) break b; else {
    h = h - e | 0;
    a = a + e | 0;
   }
  }
  if (!e) c[l >> 2] = 0; else f = -1;
 } while (0);
 if (k) c[b >> 2] = c[l >> 2];
 i = m;
 return f | 0;
}

function Cn(b, d, e, f, g) {
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
   mb[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, d, e, f, g);
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
    xb[c[(c[b >> 2] | 0) + 20 >> 2] & 7](b, d, e, e, 1, g);
    if (!(a[f >> 0] | 0)) {
     h = 0;
     f = 13;
    } else if (!(a[h >> 0] | 0)) {
     h = 1;
     f = 13;
    } else f = 17;
    do if ((f | 0) == 13) {
     c[i >> 2] = e;
     e = d + 40 | 0;
     c[e >> 2] = (c[e >> 2] | 0) + 1;
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

function Tc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 17584 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) f = 0; else k = 15; else {
  h = (b | 0) == 0 ? g : b;
  if (!e) f = -2; else {
   if (!f) {
    f = a[d >> 0] | 0;
    g = f & 255;
    if (f << 24 >> 24 > -1) {
     c[h >> 2] = g;
     f = f << 24 >> 24 != 0 & 1;
     break;
    }
    f = g + -194 | 0;
    if (f >>> 0 > 50) {
     k = 15;
     break;
    }
    f = c[2848 + (f << 2) >> 2] | 0;
    g = e + -1 | 0;
    if (g) {
     d = d + 1 | 0;
     k = 9;
    }
   } else {
    g = e;
    k = 9;
   }
   b : do if ((k | 0) == 9) {
    b = a[d >> 0] | 0;
    m = (b & 255) >>> 3;
    if ((m + -16 | m + (f >> 26)) >>> 0 > 7) {
     k = 15;
     break a;
    }
    while (1) {
     d = d + 1 | 0;
     f = (b & 255) + -128 | f << 6;
     g = g + -1 | 0;
     if ((f | 0) >= 0) break;
     if (!g) break b;
     b = a[d >> 0] | 0;
     if ((b & -64) << 24 >> 24 != -128) {
      k = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[h >> 2] = f;
    f = e - g | 0;
    break a;
   } while (0);
   c[j >> 2] = f;
   f = -2;
  }
 } while (0);
 if ((k | 0) == 15) {
  c[j >> 2] = 0;
  c[(Qb() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function _d(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 32 | 0;
 o = q + 16 | 0;
 e = q + 8 | 0;
 n = q + 4 | 0;
 m = q;
 p = (d | 0) == -1;
 do if (p) f = 14; else {
  c[e >> 2] = d;
  if (a[b + 44 >> 0] | 0) if ((ld(e, 4, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   f = 14;
   break;
  } else {
   e = -1;
   break;
  }
  c[n >> 2] = o;
  k = e + 4 | 0;
  l = b + 36 | 0;
  g = b + 40 | 0;
  h = o + 8 | 0;
  j = o;
  b = b + 32 | 0;
  while (1) {
   f = c[l >> 2] | 0;
   f = vb[c[(c[f >> 2] | 0) + 12 >> 2] & 15](f, c[g >> 2] | 0, e, k, m, o, h, n) | 0;
   if ((c[m >> 2] | 0) == (e | 0)) {
    f = 13;
    break;
   }
   if ((f | 0) == 3) {
    f = 7;
    break;
   }
   if ((f | 1 | 0) != 1) {
    f = 13;
    break;
   }
   e = (c[n >> 2] | 0) - j | 0;
   if ((ld(o, 1, e, c[b >> 2] | 0) | 0) != (e | 0)) {
    f = 13;
    break;
   }
   if ((f | 0) == 1) e = c[m >> 2] | 0; else {
    f = 12;
    break;
   }
  }
  if ((f | 0) == 7) if ((ld(e, 1, 1, c[b >> 2] | 0) | 0) == 1) f = 12; else f = 13;
  if ((f | 0) == 12) {
   f = 14;
   break;
  } else if ((f | 0) == 13) {
   e = -1;
   break;
  }
 } while (0);
 if ((f | 0) == 14) e = p ? 0 : d;
 i = q;
 return e | 0;
}

function Nd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 32 | 0;
 o = q + 16 | 0;
 e = q + 8 | 0;
 n = q + 4 | 0;
 m = q;
 p = (d | 0) == -1;
 do if (p) f = 14; else {
  a[e >> 0] = d;
  if (a[b + 44 >> 0] | 0) if ((ld(e, 1, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   f = 14;
   break;
  } else {
   e = -1;
   break;
  }
  c[n >> 2] = o;
  l = e + 1 | 0;
  g = b + 36 | 0;
  h = b + 40 | 0;
  j = o + 8 | 0;
  k = o;
  b = b + 32 | 0;
  while (1) {
   f = c[g >> 2] | 0;
   f = vb[c[(c[f >> 2] | 0) + 12 >> 2] & 15](f, c[h >> 2] | 0, e, l, m, o, j, n) | 0;
   if ((c[m >> 2] | 0) == (e | 0)) {
    f = 13;
    break;
   }
   if ((f | 0) == 3) {
    f = 7;
    break;
   }
   if ((f | 1 | 0) != 1) {
    f = 13;
    break;
   }
   e = (c[n >> 2] | 0) - k | 0;
   if ((ld(o, 1, e, c[b >> 2] | 0) | 0) != (e | 0)) {
    f = 13;
    break;
   }
   if ((f | 0) == 1) e = c[m >> 2] | 0; else {
    f = 12;
    break;
   }
  }
  if ((f | 0) == 7) if ((ld(e, 1, 1, c[b >> 2] | 0) | 0) == 1) f = 12; else f = 13;
  if ((f | 0) == 12) {
   f = 14;
   break;
  } else if ((f | 0) == 13) {
   e = -1;
   break;
  }
 } while (0);
 if ((f | 0) == 14) e = p ? 0 : d;
 i = q;
 return e | 0;
}

function hh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 m = n + 8 | 0;
 h = n + 4 | 0;
 j = n;
 if (!(c[e + 4 >> 2] & 1)) {
  l = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[h >> 2] = c[d >> 2];
  c[m >> 2] = c[h >> 2];
  h = zb[l & 31](b, m, e, f, g & 1) | 0;
 } else {
  l = vf(e) | 0;
  c[j >> 2] = l;
  h = Uf(j, 19148) | 0;
  ln(l) | 0;
  j = c[h >> 2] | 0;
  if (g) pb[c[j + 24 >> 2] & 63](m, h); else pb[c[j + 28 >> 2] & 63](m, h);
  e = a[m >> 0] | 0;
  b = m + 1 | 0;
  g = m + 8 | 0;
  l = c[g >> 2] | 0;
  k = m + 4 | 0;
  h = e;
  j = l;
  l = (e & 1) == 0 ? b : l;
  while (1) {
   e = (h & 1) == 0;
   if ((l | 0) == ((e ? b : j) + (e ? (h & 255) >>> 1 : c[k >> 2] | 0) | 0)) break;
   h = a[l >> 0] | 0;
   j = c[d >> 2] | 0;
   do if (j | 0) {
    f = j + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) != (c[j + 28 >> 2] | 0)) {
     c[f >> 2] = e + 1;
     a[e >> 0] = h;
     break;
    }
    if ((yb[c[(c[j >> 2] | 0) + 52 >> 2] & 15](j, h & 255) | 0) == -1) c[d >> 2] = 0;
   } while (0);
   h = a[m >> 0] | 0;
   j = c[g >> 2] | 0;
   l = l + 1 | 0;
  }
  h = c[d >> 2] | 0;
  ge(m);
 }
 i = n;
 return h | 0;
}

function zn(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 q = r;
 p = c[d >> 2] | 0;
 o = d + (c[p + -8 >> 2] | 0) | 0;
 p = c[p + -4 >> 2] | 0;
 c[q >> 2] = f;
 c[q + 4 >> 2] = d;
 c[q + 8 >> 2] = e;
 c[q + 12 >> 2] = g;
 l = q + 16 | 0;
 g = q + 20 | 0;
 d = q + 24 | 0;
 e = q + 28 | 0;
 h = q + 32 | 0;
 j = q + 40 | 0;
 k = (p | 0) == (f | 0);
 m = l;
 n = m + 36 | 0;
 do {
  c[m >> 2] = 0;
  m = m + 4 | 0;
 } while ((m | 0) < (n | 0));
 b[l + 36 >> 1] = 0;
 a[l + 38 >> 0] = 0;
 a : do if (k) {
  c[q + 48 >> 2] = 1;
  xb[c[(c[f >> 2] | 0) + 20 >> 2] & 7](f, q, o, o, 1, 0);
  g = (c[d >> 2] | 0) == 1 ? o : 0;
 } else {
  mb[c[(c[p >> 2] | 0) + 24 >> 2] & 3](p, q, o, 1, 0);
  switch (c[q + 36 >> 2] | 0) {
  case 0:
   {
    g = (c[j >> 2] | 0) == 1 & (c[e >> 2] | 0) == 1 & (c[h >> 2] | 0) == 1 ? c[g >> 2] | 0 : 0;
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
  if ((c[d >> 2] | 0) != 1) if (!((c[j >> 2] | 0) == 0 & (c[e >> 2] | 0) == 1 & (c[h >> 2] | 0) == 1)) {
   g = 0;
   break;
  }
  g = c[l >> 2] | 0;
 } while (0);
 i = r;
 return g | 0;
}

function Tf(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 k = r + 48 | 0;
 j = r + 24 | 0;
 q = r + 16 | 0;
 l = r + 20 | 0;
 m = r + 12 | 0;
 n = r + 8 | 0;
 o = r + 4 | 0;
 p = r;
 if (!(c[f + 4 >> 2] & 1)) {
  c[q >> 2] = -1;
  p = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = qb[p & 63](b, j, k, f, g, q) | 0;
  c[d >> 2] = j;
  switch (c[q >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
   }
  }
 } else {
  b = vf(f) | 0;
  c[n >> 2] = b;
  q = Uf(n, 19136) | 0;
  ln(b) | 0;
  f = vf(f) | 0;
  c[o >> 2] = f;
  b = Uf(o, 19148) | 0;
  ln(f) | 0;
  pb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](j, b);
  pb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](j + 12 | 0, b);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (Yf(d, k, j, j + 24 | 0, q, g, 1) | 0) == (j | 0) & 1;
  h = c[d >> 2] | 0;
  ge(j + 12 | 0);
  ge(j);
  j = h;
 }
 i = r;
 return j | 0;
}

function Ig(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 k = r + 48 | 0;
 j = r + 24 | 0;
 q = r + 16 | 0;
 l = r + 20 | 0;
 m = r + 12 | 0;
 n = r + 8 | 0;
 o = r + 4 | 0;
 p = r;
 if (!(c[f + 4 >> 2] & 1)) {
  c[q >> 2] = -1;
  p = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = qb[p & 63](b, j, k, f, g, q) | 0;
  c[d >> 2] = j;
  switch (c[q >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
   }
  }
 } else {
  b = vf(f) | 0;
  c[n >> 2] = b;
  q = Uf(n, 19168) | 0;
  ln(b) | 0;
  f = vf(f) | 0;
  c[o >> 2] = f;
  b = Uf(o, 19176) | 0;
  ln(f) | 0;
  pb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](j, b);
  pb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](j + 12 | 0, b);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (Jg(d, k, j, j + 24 | 0, q, g, 1) | 0) == (j | 0) & 1;
  h = c[d >> 2] | 0;
  se(j + 12 | 0);
  se(j);
  j = h;
 }
 i = r;
 return j | 0;
}

function yh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 l = m + 8 | 0;
 h = m + 4 | 0;
 j = m;
 if (!(c[e + 4 >> 2] & 1)) {
  k = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[h >> 2] = c[d >> 2];
  c[l >> 2] = c[h >> 2];
  h = zb[k & 31](b, l, e, f, g & 1) | 0;
 } else {
  k = vf(e) | 0;
  c[j >> 2] = k;
  h = Uf(j, 19176) | 0;
  ln(k) | 0;
  j = c[h >> 2] | 0;
  if (g) pb[c[j + 24 >> 2] & 63](l, h); else pb[c[j + 28 >> 2] & 63](l, h);
  e = a[l >> 0] | 0;
  b = l + 4 | 0;
  g = l + 8 | 0;
  k = c[g >> 2] | 0;
  h = e;
  j = k;
  k = (e & 1) == 0 ? b : k;
  while (1) {
   e = (h & 1) == 0;
   if ((k | 0) == ((e ? b : j) + ((e ? (h & 255) >>> 1 : c[b >> 2] | 0) << 2) | 0)) break;
   h = c[k >> 2] | 0;
   j = c[d >> 2] | 0;
   if (j | 0) {
    f = j + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) == (c[j + 28 >> 2] | 0)) h = yb[c[(c[j >> 2] | 0) + 52 >> 2] & 15](j, h) | 0; else {
     c[f >> 2] = e + 4;
     c[e >> 2] = h;
    }
    if ((h | 0) == -1) c[d >> 2] = 0;
   }
   h = a[l >> 0] | 0;
   j = c[g >> 2] | 0;
   k = k + 4 | 0;
  }
  h = c[d >> 2] | 0;
  se(l);
 }
 i = m;
 return h | 0;
}

function tc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((uc(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = Gc(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = uc(b, d, o, q, r) | 0;
   if (h) {
    lb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = uc(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m | 0) Tb(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Ud(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 32 | 0;
 j = l + 16 | 0;
 h = l + 8 | 0;
 f = l + 4 | 0;
 g = l;
 k = b + 52 | 0;
 e = (a[k >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[k >> 0] = (d | 0) != -1 & 1;
 } else {
  do if (e) {
   e = b + 48 | 0;
   c[f >> 2] = c[e >> 2];
   m = c[b + 36 >> 2] | 0;
   switch (vb[c[(c[m >> 2] | 0) + 12 >> 2] & 15](m, c[b + 40 >> 2] | 0, f, f + 4 | 0, g, j, j + 8 | 0, h) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[j >> 0] = c[e >> 2];
     c[h >> 2] = j + 1;
     break;
    }
   default:
    {}
   }
   f = b + 32 | 0;
   while (1) {
    g = c[h >> 2] | 0;
    if (g >>> 0 <= j >>> 0) {
     f = 13;
     break;
    }
    m = g + -1 | 0;
    c[h >> 2] = m;
    if ((qd(a[m >> 0] | 0, c[f >> 2] | 0) | 0) == -1) {
     f = 12;
     break;
    }
   }
   if ((f | 0) == 12) {
    d = -1;
    break a;
   } else if ((f | 0) == 13) break;
  } else e = b + 48 | 0; while (0);
  c[e >> 2] = d;
  a[k >> 0] = 1;
 } while (0);
 i = l;
 return d | 0;
}

function Hd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 32 | 0;
 j = l + 16 | 0;
 h = l + 4 | 0;
 f = l + 8 | 0;
 g = l;
 k = b + 52 | 0;
 e = (a[k >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[k >> 0] = (d | 0) != -1 & 1;
 } else {
  do if (e) {
   e = b + 48 | 0;
   a[f >> 0] = c[e >> 2];
   m = c[b + 36 >> 2] | 0;
   switch (vb[c[(c[m >> 2] | 0) + 12 >> 2] & 15](m, c[b + 40 >> 2] | 0, f, f + 1 | 0, g, j, j + 8 | 0, h) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[j >> 0] = c[e >> 2];
     c[h >> 2] = j + 1;
     break;
    }
   default:
    {}
   }
   f = b + 32 | 0;
   while (1) {
    g = c[h >> 2] | 0;
    if (g >>> 0 <= j >>> 0) {
     f = 13;
     break;
    }
    m = g + -1 | 0;
    c[h >> 2] = m;
    if ((qd(a[m >> 0] | 0, c[f >> 2] | 0) | 0) == -1) {
     f = 12;
     break;
    }
   }
   if ((f | 0) == 12) {
    d = -1;
    break a;
   } else if ((f | 0) == 13) break;
  } else e = b + 48 | 0; while (0);
  c[e >> 2] = d;
  a[k >> 0] = 1;
 } while (0);
 i = l;
 return d | 0;
}

function Nc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 g = k;
 a : do if (!e) g = 0; else {
  do if (f | 0) {
   j = (b | 0) == 0 ? g : b;
   g = a[e >> 0] | 0;
   b = g & 255;
   if (g << 24 >> 24 > -1) {
    c[j >> 2] = b;
    g = g << 24 >> 24 != 0 & 1;
    break a;
   }
   g = b + -194 | 0;
   if (g >>> 0 <= 50) {
    b = e + 1 | 0;
    h = c[2848 + (g << 2) >> 2] | 0;
    if (f >>> 0 < 4) if (h & -2147483648 >>> ((f * 6 | 0) + -6 | 0) | 0) break;
    g = d[b >> 0] | 0;
    f = g >>> 3;
    if ((f + -16 | f + (h >> 26)) >>> 0 <= 7) {
     g = g + -128 | h << 6;
     if ((g | 0) >= 0) {
      c[j >> 2] = g;
      g = 2;
      break a;
     }
     b = d[e + 2 >> 0] | 0;
     if ((b & 192 | 0) == 128) {
      b = b + -128 | g << 6;
      if ((b | 0) >= 0) {
       c[j >> 2] = b;
       g = 3;
       break a;
      }
      g = d[e + 3 >> 0] | 0;
      if ((g & 192 | 0) == 128) {
       c[j >> 2] = g + -128 | b << 6;
       g = 4;
       break a;
      }
     }
    }
   }
  } while (0);
  c[(Qb() | 0) >> 2] = 84;
  g = -1;
 } while (0);
 i = k;
 return g | 0;
}

function Ac(b, d, e) {
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
   f = $(h, 16843009) | 0;
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

function dg(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 g = a[b >> 0] | 0;
 i = b + 4 | 0;
 h = c[i >> 2] | 0;
 do if (((g & 1) == 0 ? (g & 255) >>> 1 : h) | 0) {
  if ((d | 0) != (e | 0)) {
   g = e;
   h = d;
   while (1) {
    g = g + -4 | 0;
    if (h >>> 0 >= g >>> 0) break;
    j = c[h >> 2] | 0;
    c[h >> 2] = c[g >> 2];
    c[g >> 2] = j;
    h = h + 4 | 0;
   }
   g = a[b >> 0] | 0;
   h = c[i >> 2] | 0;
  }
  i = (g & 1) == 0;
  b = i ? b + 1 | 0 : c[b + 8 >> 2] | 0;
  j = e + -4 | 0;
  e = b + (i ? (g & 255) >>> 1 : h) | 0;
  h = d;
  while (1) {
   g = a[b >> 0] | 0;
   i = g << 24 >> 24 < 1 | g << 24 >> 24 == 127;
   if (h >>> 0 >= j >>> 0) break;
   if (!i) if ((g << 24 >> 24 | 0) != (c[h >> 2] | 0)) {
    k = 10;
    break;
   }
   b = (e - b | 0) > 1 ? b + 1 | 0 : b;
   h = h + 4 | 0;
  }
  if ((k | 0) == 10) {
   c[f >> 2] = 4;
   break;
  }
  if (!i) if (((c[j >> 2] | 0) + -1 | 0) >>> 0 >= g << 24 >> 24 >>> 0) c[f >> 2] = 4;
 } while (0);
 return;
}

function Wb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[4384] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = Pb(hb(145, h | 0) | 0) | 0;
 } else {
  cb(95, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = Pb(hb(145, g | 0) | 0) | 0;
  va(0);
 }
 if ((f | 0) < 1) {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 } else {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   g = c[k >> 2] | 0;
   h = b + 4 | 0;
   c[h >> 2] = g;
   c[b + 8 >> 2] = g + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[h >> 2] = g + 1;
    a[d + (e + -1) >> 0] = a[g >> 0] | 0;
    f = e;
   }
  }
 }
 i = m;
 return f | 0;
}

function Bh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 j = c[b >> 2] | 0;
 a : do if (!j) j = 0; else {
  p = d;
  l = f - p >> 2;
  m = g + 12 | 0;
  g = c[m >> 2] | 0;
  l = (g | 0) > (l | 0) ? g - l | 0 : 0;
  g = e;
  p = g - p | 0;
  k = p >> 2;
  if ((p | 0) > 0) if ((lb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, d, k) | 0) != (k | 0)) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  do if ((l | 0) > 0) {
   qe(n, l, h);
   if ((lb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, (a[n >> 0] & 1) == 0 ? n + 4 | 0 : c[n + 8 >> 2] | 0, l) | 0) == (l | 0)) {
    se(n);
    break;
   } else {
    c[b >> 2] = 0;
    se(n);
    j = 0;
    break a;
   }
  } while (0);
  p = f - g | 0;
  f = p >> 2;
  if ((p | 0) > 0) if ((lb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, e, f) | 0) != (f | 0)) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  c[m >> 2] = 0;
 } while (0);
 i = o;
 return j | 0;
}

function je(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 4294967279) be(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 10; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 11) i = 10; else i = (d + 16 & -16) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) == 10) {
   d = b + 1 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } else {
   d = Vn(i + 1 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 1 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  go(d | 0, g | 0, e + 1 | 0) | 0;
  if (h) vn(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function Pn(d, e, f, g, h, i) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 if ((d | 0) == (c[e + 8 >> 2] | 0)) Bn(0, e, f, g, h); else {
  o = e + 52 | 0;
  r = b[o >> 1] | 0;
  p = r & 255;
  q = e + 53 | 0;
  r = (r & 65535) >>> 8 & 255;
  n = c[d + 12 >> 2] | 0;
  k = d + 16 + (n << 3) | 0;
  a[o >> 0] = 0;
  a[q >> 0] = 0;
  Qn(d + 16 | 0, e, f, g, h, i);
  a : do if ((n | 0) > 1) {
   l = e + 24 | 0;
   m = d + 8 | 0;
   n = e + 54 | 0;
   j = d + 24 | 0;
   do {
    if (a[n >> 0] | 0) break a;
    d = b[o >> 1] | 0;
    if (!((d & 255) << 24 >> 24)) {
     if ((d & 65535) >= 256) if (!(c[m >> 2] & 1)) break a;
    } else {
     if ((c[l >> 2] | 0) == 1) break a;
     if (!(c[m >> 2] & 2)) break a;
    }
    a[o >> 0] = 0;
    a[q >> 0] = 0;
    Qn(j, e, f, g, h, i);
    j = j + 8 | 0;
   } while (j >>> 0 < k >>> 0);
  } while (0);
  a[o >> 0] = p;
  a[q >> 0] = r;
 }
 return;
}

function Mb(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 m = o;
 n = c[b >> 2] | 0;
 if (!n) {
  b = 0;
  i = o;
  return b | 0;
 }
 p = d;
 k = f - p | 0;
 l = g + 12 | 0;
 j = c[l >> 2] | 0;
 k = (j | 0) > (k | 0) ? j - k | 0 : 0;
 j = e;
 g = j - p | 0;
 if ((g | 0) > 0) if ((lb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, d, g) | 0) != (g | 0)) {
  c[b >> 2] = 0;
  p = 0;
  i = o;
  return p | 0;
 }
 do if ((k | 0) > 0) {
  ee(m, k, h);
  if ((lb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, (a[m >> 0] & 1) == 0 ? m + 1 | 0 : c[m + 8 >> 2] | 0, k) | 0) == (k | 0)) {
   ge(m);
   break;
  }
  c[b >> 2] = 0;
  ge(m);
  p = 0;
  i = o;
  return p | 0;
 } while (0);
 f = f - j | 0;
 if ((f | 0) > 0) if ((lb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, e, f) | 0) != (f | 0)) {
  c[b >> 2] = 0;
  p = 0;
  i = o;
  return p | 0;
 }
 c[l >> 2] = 0;
 p = n;
 i = o;
 return p | 0;
}

function ji(b) {
 b = b | 0;
 var d = 0;
 if (!(a[16904] | 0)) if (Ia(16904) | 0) {
  if (!(a[16912] | 0)) if (Ia(16912) | 0) {
   b = 19380;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 19668);
   _a(100, 0, n | 0) | 0;
   Ga(16912);
  }
  ke(19380, 14681) | 0;
  ke(19392, 14689) | 0;
  ke(19404, 14698) | 0;
  ke(19416, 14704) | 0;
  ke(19428, 14710) | 0;
  ke(19440, 14714) | 0;
  ke(19452, 14719) | 0;
  ke(19464, 14724) | 0;
  ke(19476, 14731) | 0;
  ke(19488, 14741) | 0;
  ke(19500, 14749) | 0;
  ke(19512, 14758) | 0;
  ke(19524, 14767) | 0;
  ke(19536, 14771) | 0;
  ke(19548, 14775) | 0;
  ke(19560, 14779) | 0;
  ke(19572, 14710) | 0;
  ke(19584, 14783) | 0;
  ke(19596, 14787) | 0;
  ke(19608, 14791) | 0;
  ke(19620, 14795) | 0;
  ke(19632, 14799) | 0;
  ke(19644, 14803) | 0;
  ke(19656, 14807) | 0;
  c[4917] = 19380;
  Ga(16904);
 }
 return c[4917] | 0;
}

function ve(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 1073741807) be(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 1; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 2) i = 1; else i = (d + 4 & -4) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) == 1) {
   d = b + 4 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } else {
   d = Vn((i << 2) + 4 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 4 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  Jc(d, g, e + 1 | 0) | 0;
  if (h) vn(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function rh(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if (d & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (d & 1024) {
  a[b >> 0] = 35;
  b = b + 1 | 0;
 }
 g = d & 260;
 e = d >>> 14;
 h = (g | 0) == 260;
 if (h) f = 0; else {
  a[b >> 0] = 46;
  a[b + 1 >> 0] = 42;
  b = b + 2 | 0;
  f = 1;
 }
 while (1) {
  d = a[c >> 0] | 0;
  if (!(d << 24 >> 24)) break;
  a[b >> 0] = d;
  c = c + 1 | 0;
  b = b + 1 | 0;
 }
 a : do switch (g | 0) {
 case 4:
  if (!(e & 1)) {
   a[b >> 0] = 102;
   break a;
  } else {
   a[b >> 0] = 70;
   break a;
  }
 case 256:
  if (!(e & 1)) {
   a[b >> 0] = 101;
   break a;
  } else {
   a[b >> 0] = 69;
   break a;
  }
 default:
  {
   d = (e & 1 | 0) != 0;
   if (h) if (d) {
    a[b >> 0] = 65;
    break a;
   } else {
    a[b >> 0] = 97;
    break a;
   } else if (d) {
    a[b >> 0] = 71;
    break a;
   } else {
    a[b >> 0] = 103;
    break a;
   }
  }
 } while (0);
 return f | 0;
}

function Ti(b) {
 b = b | 0;
 var d = 0;
 if (!(a[16984] | 0)) if (Ia(16984) | 0) {
  if (!(a[16992] | 0)) if (Ia(16992) | 0) {
   b = 20192;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 20480);
   _a(104, 0, n | 0) | 0;
   Ga(16992);
  }
  we(20192, 7836) | 0;
  we(20204, 7868) | 0;
  we(20216, 7904) | 0;
  we(20228, 7928) | 0;
  we(20240, 7952) | 0;
  we(20252, 7968) | 0;
  we(20264, 7988) | 0;
  we(20276, 8008) | 0;
  we(20288, 8036) | 0;
  we(20300, 8076) | 0;
  we(20312, 8108) | 0;
  we(20324, 8144) | 0;
  we(20336, 8180) | 0;
  we(20348, 8196) | 0;
  we(20360, 8212) | 0;
  we(20372, 8228) | 0;
  we(20384, 7952) | 0;
  we(20396, 8244) | 0;
  we(20408, 8260) | 0;
  we(20420, 8276) | 0;
  we(20432, 8292) | 0;
  we(20444, 8308) | 0;
  we(20456, 8324) | 0;
  we(20468, 8340) | 0;
  c[5120] = 20192;
  Ga(16984);
 }
 return c[5120] | 0;
}

function nn() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 h = f + 32 | 0;
 e = f + 24 | 0;
 j = f + 16 | 0;
 g = f;
 f = f + 36 | 0;
 a = on() | 0;
 if (a | 0) {
  d = c[a >> 2] | 0;
  if (d | 0) {
   a = d + 48 | 0;
   b = c[a >> 2] | 0;
   a = c[a + 4 >> 2] | 0;
   if (!((b & -256 | 0) == 1126902528 & (a | 0) == 1129074247)) {
    c[e >> 2] = c[2422];
    rn(16652, e);
   }
   if ((b | 0) == 1126902529 & (a | 0) == 1129074247) a = c[d + 44 >> 2] | 0; else a = d + 80 | 0;
   c[f >> 2] = a;
   e = c[d >> 2] | 0;
   a = c[e + 4 >> 2] | 0;
   if (lb[c[(c[592] | 0) + 16 >> 2] & 31](2368, e, f) | 0) {
    j = c[f >> 2] | 0;
    f = c[2422] | 0;
    j = sb[c[(c[j >> 2] | 0) + 8 >> 2] & 63](j) | 0;
    c[g >> 2] = f;
    c[g + 4 >> 2] = a;
    c[g + 8 >> 2] = j;
    rn(16566, g);
   } else {
    c[j >> 2] = c[2422];
    c[j + 4 >> 2] = a;
    rn(16611, j);
   }
  }
 }
 rn(16690, h);
}

function bg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  a = 0;
 } else {
  g = Qb() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = fc(a, j, e, cg() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  a : do if ((c[j >> 2] | 0) == (b | 0)) {
   do if ((f | 0) == 34) {
    c[d >> 2] = 4;
    if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0) {
     a = 2147483647;
     break a;
    }
   } else {
    if ((e | 0) < -1 | (e | 0) == -1 & a >>> 0 < 2147483648) {
     c[d >> 2] = 4;
     break;
    }
    if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 2147483647) {
     c[d >> 2] = 4;
     a = 2147483647;
     break a;
    } else break a;
   } while (0);
   a = -2147483648;
  } else {
   c[d >> 2] = 4;
   a = 0;
  } while (0);
 }
 i = k;
 return a | 0;
}

function vc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(wc(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  f = c[i >> 2] | 0;
  h = f;
  if ((g - f | 0) >>> 0 < d >>> 0) {
   f = lb[c[e + 36 >> 2] & 31](e, b, d) | 0;
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
   if ((lb[c[e + 36 >> 2] & 31](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  go(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function bc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) j = 3; else if ((c[b + 108 >> 2] | 0) < (e | 0)) j = 3; else j = 4;
 if ((j | 0) == 3) {
  e = cc(b) | 0;
  if ((e | 0) < 0) j = 4; else {
   f = c[f >> 2] | 0;
   i = c[b + 8 >> 2] | 0;
   if (!f) {
    g = i;
    j = 9;
   } else {
    h = c[b + 4 >> 2] | 0;
    f = f - (c[b + 108 >> 2] | 0) | 0;
    g = i;
    if ((i - h | 0) < (f | 0)) j = 9; else c[b + 100 >> 2] = h + (f + -1);
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = i;
   f = b + 4 | 0;
   if (!g) f = c[f >> 2] | 0; else {
    f = c[f >> 2] | 0;
    b = b + 108 | 0;
    c[b >> 2] = g + 1 - f + (c[b >> 2] | 0);
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

function zh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 8 | 0;
 n = h + 12 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[14317] | 0;
 a[o + 1 >> 0] = a[14318] | 0;
 a[o + 2 >> 0] = a[14319] | 0;
 a[o + 3 >> 0] = a[14320] | 0;
 a[o + 4 >> 0] = a[14321] | 0;
 a[o + 5 >> 0] = a[14322] | 0;
 jh(o + 1 | 0, 14323, 1, c[e + 4 >> 2] | 0);
 p = cg() | 0;
 c[k >> 2] = g;
 o = q + (kh(q, 12, p, o, k) | 0) | 0;
 p = lh(q, o, e) | 0;
 g = vf(e) | 0;
 c[n >> 2] = g;
 Ah(q, p, o, j, m, b, n);
 ln(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Bh(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Ih(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 192 | 0;
 m = h;
 b = h + 180 | 0;
 j = h + 160 | 0;
 k = h + 8 | 0;
 o = h + 156 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[14330] | 0;
 a[b + 1 >> 0] = a[14331] | 0;
 a[b + 2 >> 0] = a[14332] | 0;
 a[b + 3 >> 0] = a[14333] | 0;
 a[b + 4 >> 0] = a[14334] | 0;
 a[b + 5 >> 0] = a[14335] | 0;
 l = cg() | 0;
 c[m >> 2] = g;
 b = kh(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = lh(j, l, e) | 0;
 p = vf(e) | 0;
 c[o >> 2] = p;
 o = Uf(o, 19168) | 0;
 ln(p) | 0;
 wb[c[(c[o >> 2] | 0) + 48 >> 2] & 7](o, j, l, k) | 0;
 b = k + (b << 2) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Bh(m, k, (g | 0) == (l | 0) ? b : k + (g - j << 2) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Dh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 8 | 0;
 n = h + 12 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[14317] | 0;
 a[o + 1 >> 0] = a[14318] | 0;
 a[o + 2 >> 0] = a[14319] | 0;
 a[o + 3 >> 0] = a[14320] | 0;
 a[o + 4 >> 0] = a[14321] | 0;
 a[o + 5 >> 0] = a[14322] | 0;
 jh(o + 1 | 0, 14323, 0, c[e + 4 >> 2] | 0);
 p = cg() | 0;
 c[k >> 2] = g;
 o = q + (kh(q, 12, p, o, k) | 0) | 0;
 p = lh(q, o, e) | 0;
 g = vf(e) | 0;
 c[n >> 2] = g;
 Ah(q, p, o, j, m, b, n);
 ln(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Bh(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function pk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  k = (f & 255) >>> 1;
  g = 1;
 } else {
  f = c[b >> 2] | 0;
  k = c[b + 4 >> 2] | 0;
  g = (f & -2) + -1 | 0;
  f = f & 255;
 }
 j = e - h >> 2;
 do if (j | 0) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   xe(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 4 | 0; else i = c[b + 8 >> 2] | 0;
  h = k + ((e - h | 0) >>> 2) | 0;
  f = d;
  g = i + (k << 2) | 0;
  while (1) {
   if ((f | 0) == (e | 0)) break;
   c[g >> 2] = c[f >> 2];
   f = f + 4 | 0;
   g = g + 4 | 0;
  }
  c[i + (h << 2) >> 2] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function oh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 8 | 0;
 n = h + 12 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[14317] | 0;
 a[o + 1 >> 0] = a[14318] | 0;
 a[o + 2 >> 0] = a[14319] | 0;
 a[o + 3 >> 0] = a[14320] | 0;
 a[o + 4 >> 0] = a[14321] | 0;
 a[o + 5 >> 0] = a[14322] | 0;
 jh(o + 1 | 0, 14323, 0, c[e + 4 >> 2] | 0);
 p = cg() | 0;
 c[k >> 2] = g;
 o = q + (kh(q, 12, p, o, k) | 0) | 0;
 p = lh(q, o, e) | 0;
 g = vf(e) | 0;
 c[n >> 2] = g;
 mh(q, p, o, j, m, b, n);
 ln(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Mb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function ih(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 8 | 0;
 n = h + 12 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[14317] | 0;
 a[o + 1 >> 0] = a[14318] | 0;
 a[o + 2 >> 0] = a[14319] | 0;
 a[o + 3 >> 0] = a[14320] | 0;
 a[o + 4 >> 0] = a[14321] | 0;
 a[o + 5 >> 0] = a[14322] | 0;
 jh(o + 1 | 0, 14323, 1, c[e + 4 >> 2] | 0);
 p = cg() | 0;
 c[k >> 2] = g;
 o = q + (kh(q, 12, p, o, k) | 0) | 0;
 p = lh(q, o, e) | 0;
 g = vf(e) | 0;
 c[n >> 2] = g;
 mh(q, p, o, j, m, b, n);
 ln(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Mb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function hk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  k = (f & 255) >>> 1;
  g = 10;
 } else {
  f = c[b >> 2] | 0;
  k = c[b + 4 >> 2] | 0;
  g = (f & -2) + -1 | 0;
  f = f & 255;
 }
 j = e - h | 0;
 do if ((e | 0) != (d | 0)) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   ne(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 1 | 0; else i = c[b + 8 >> 2] | 0;
  h = e + (k - h) | 0;
  f = d;
  g = i + k | 0;
  while (1) {
   if ((f | 0) == (e | 0)) break;
   a[g >> 0] = a[f >> 0] | 0;
   f = f + 1 | 0;
   g = g + 1 | 0;
  }
  a[i + h >> 0] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function rc(b, d, e, f) {
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
 j = 3084;
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
  c[(Qb() | 0) >> 2] = 75;
  d = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  b = m + 20 | 0;
  c[b >> 2] = g;
  c[m + 44 >> 2] = g;
  d = g + l | 0;
  g = m + 16 | 0;
  c[g >> 2] = d;
  c[m + 28 >> 2] = d;
  d = tc(m, e, f) | 0;
  if (l) {
   e = c[b >> 2] | 0;
   a[e + (((e | 0) == (c[g >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return d | 0;
}

function Fk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 d = 0;
 while (1) {
  if ((d | 0) == 3) break;
  c[j + (d << 2) >> 2] = 0;
  d = d + 1 | 0;
 }
 l = a[h >> 0] | 0;
 m = (l & 1) == 0;
 d = m ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 h = d + (m ? (l & 255) >>> 1 : c[h + 4 >> 2] | 0) | 0;
 while (1) {
  if (d >>> 0 >= h >>> 0) break;
  oe(j, a[d >> 0] | 0);
  d = d + 1 | 0;
 }
 d = Yc((e | 0) == -1 ? -1 : e << 1, f, g, (a[j >> 0] & 1) == 0 ? j + 1 | 0 : c[j + 8 >> 2] | 0) | 0;
 h = 0;
 while (1) {
  if ((h | 0) == 3) break;
  c[b + (h << 2) >> 2] = 0;
  h = h + 1 | 0;
 }
 h = d + (Hc(d) | 0) | 0;
 while (1) {
  if (d >>> 0 >= h >>> 0) break;
  oe(b, a[d >> 0] | 0);
  d = d + 1 | 0;
 }
 ge(j);
 i = k;
 return;
}

function Lb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 h = n + 12 | 0;
 m = n;
 j = n + 8 | 0;
 zf(m, b);
 if (!(a[m >> 0] | 0)) {
  Af(m);
  i = n;
  return b | 0;
 }
 l = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0;
 c[j >> 2] = c[l + 24 >> 2];
 k = c[l + 4 >> 2] | 0;
 g = d + e | 0;
 f = l + 76 | 0;
 e = c[f >> 2] | 0;
 if ((e | 0) == -1) {
  c[h >> 2] = vf(l) | 0;
  e = Uf(h, 19136) | 0;
  e = yb[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 32) | 0;
  hn(h);
  e = e << 24 >> 24;
  c[f >> 2] = e;
 }
 c[h >> 2] = c[j >> 2];
 if (Mb(h, d, (k & 176 | 0) == 32 ? g : d, g, l, e & 255) | 0) {
  Af(m);
  i = n;
  return b | 0;
 }
 d = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0;
 tf(d, c[d + 16 >> 2] | 5);
 Af(m);
 i = n;
 return b | 0;
}

function vh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 80 | 0;
 m = h;
 b = h + 72 | 0;
 j = h + 52 | 0;
 k = h + 12 | 0;
 o = h + 8 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[14330] | 0;
 a[b + 1 >> 0] = a[14331] | 0;
 a[b + 2 >> 0] = a[14332] | 0;
 a[b + 3 >> 0] = a[14333] | 0;
 a[b + 4 >> 0] = a[14334] | 0;
 a[b + 5 >> 0] = a[14335] | 0;
 l = cg() | 0;
 c[m >> 2] = g;
 b = kh(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = lh(j, l, e) | 0;
 p = vf(e) | 0;
 c[o >> 2] = p;
 o = Uf(o, 19136) | 0;
 ln(p) | 0;
 wb[c[(c[o >> 2] | 0) + 32 >> 2] & 7](o, j, l, k) | 0;
 b = k + b | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Mb(m, k, (g | 0) == (l | 0) ? b : k + (g - j) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function ci(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = sb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) == (0 - b | 0)) c[g >> 2] = c[g >> 2] | 4; else {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = Yf(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } while (0);
 i = n;
 return;
}

function Mi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = sb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) == (0 - b | 0)) c[g >> 2] = c[g >> 2] | 4; else {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = Jg(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } while (0);
 i = n;
 return;
}

function ue(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((1073741806 - d | 0) >>> 0 < e >>> 0) be(b);
 if (!(a[b >> 0] & 1)) m = b + 4 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 2 ? 2 : k + 4 & -4;
 } else k = 1073741807;
 l = Vn(k << 2) | 0;
 if (g | 0) Jc(l, m, g) | 0;
 if (i | 0) Jc(l + (g << 2) | 0, j, i) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) Jc(l + (g << 2) + (i << 2) | 0, m + (g << 2) + (h << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) vn(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 c[l + (d << 2) >> 2] = 0;
 return;
}

function Eh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 240 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 204 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 20 | 0;
 n = h + 24 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 jh(o + 1 | 0, 14325, 0, c[d + 4 >> 2] | 0);
 q = cg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (kh(p, 23, q, o, k) | 0) | 0;
 o = lh(p, f, d) | 0;
 g = vf(d) | 0;
 c[n >> 2] = g;
 Ah(p, o, f, j, m, a, n);
 ln(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Bh(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function Ch(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 224 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 196 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 20 | 0;
 n = h + 24 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 jh(o + 1 | 0, 14325, 1, c[d + 4 >> 2] | 0);
 q = cg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (kh(p, 22, q, o, k) | 0) | 0;
 o = lh(p, f, d) | 0;
 g = vf(d) | 0;
 c[n >> 2] = g;
 Ah(p, o, f, j, m, a, n);
 ln(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Bh(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function ph(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 112 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 75 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 20 | 0;
 n = h + 24 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 jh(o + 1 | 0, 14325, 0, c[d + 4 >> 2] | 0);
 q = cg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (kh(p, 23, q, o, k) | 0) | 0;
 o = lh(p, f, d) | 0;
 g = vf(d) | 0;
 c[n >> 2] = g;
 mh(p, o, f, j, m, a, n);
 ln(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Mb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function nh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 96 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 74 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 20 | 0;
 n = h + 24 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 jh(o + 1 | 0, 14325, 1, c[d + 4 >> 2] | 0);
 q = cg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (kh(p, 22, q, o, k) | 0) | 0;
 o = lh(p, f, d) | 0;
 g = vf(d) | 0;
 c[n >> 2] = g;
 mh(p, o, f, j, m, a, n);
 ln(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Mb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function hi(b) {
 b = b | 0;
 var d = 0;
 if (!(a[16888] | 0)) if (Ia(16888) | 0) {
  if (!(a[16896] | 0)) if (Ia(16896) | 0) {
   b = 19208;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 19376);
   _a(99, 0, n | 0) | 0;
   Ga(16896);
  }
  ke(19208, 14596) | 0;
  ke(19220, 14603) | 0;
  ke(19232, 14610) | 0;
  ke(19244, 14618) | 0;
  ke(19256, 14628) | 0;
  ke(19268, 14637) | 0;
  ke(19280, 14644) | 0;
  ke(19292, 14653) | 0;
  ke(19304, 14657) | 0;
  ke(19316, 14661) | 0;
  ke(19328, 14665) | 0;
  ke(19340, 14669) | 0;
  ke(19352, 14673) | 0;
  ke(19364, 14677) | 0;
  c[4844] = 19208;
  Ga(16888);
 }
 return c[4844] | 0;
}

function ie(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) be(b);
 if (!(a[b >> 0] & 1)) m = b + 1 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 11 ? 11 : k + 16 & -16;
 } else k = -17;
 l = Vn(k) | 0;
 if (g | 0) go(l | 0, m | 0, g | 0) | 0;
 if (i | 0) go(l + g | 0, j | 0, i | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) go(l + g + i | 0, m + g + h | 0, e - g | 0) | 0;
 if ((d | 0) != 10) vn(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 a[l + d >> 0] = 0;
 return;
}

function Dc(b, d, e) {
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
   c[(Qb() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function Ri(b) {
 b = b | 0;
 var d = 0;
 if (!(a[16968] | 0)) if (Ia(16968) | 0) {
  if (!(a[16976] | 0)) if (Ia(16976) | 0) {
   b = 20020;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 20188);
   _a(103, 0, n | 0) | 0;
   Ga(16976);
  }
  we(20020, 7496) | 0;
  we(20032, 7524) | 0;
  we(20044, 7552) | 0;
  we(20056, 7584) | 0;
  we(20068, 7624) | 0;
  we(20080, 7660) | 0;
  we(20092, 7688) | 0;
  we(20104, 7724) | 0;
  we(20116, 7740) | 0;
  we(20128, 7756) | 0;
  we(20140, 7772) | 0;
  we(20152, 7788) | 0;
  we(20164, 7804) | 0;
  we(20176, 7820) | 0;
  c[5047] = 20020;
  Ga(16968);
 }
 return c[5047] | 0;
}

function wm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k;
 g = c[a + 8 >> 2] | 0;
 e = a + 4 | 0;
 d = c[e >> 2] | 0;
 if (g - d >> 2 >>> 0 < b >>> 0) {
  e = c[a >> 2] | 0;
  h = d - e >> 2;
  f = h + b | 0;
  if (f >>> 0 > 1073741823) pm(a);
  d = g - e | 0;
  if (d >> 2 >>> 0 < 536870911) {
   d = d >> 1;
   d = d >>> 0 < f >>> 0 ? f : d;
  } else d = 1073741823;
  xm(j, d, h, a + 16 | 0);
  h = j + 8 | 0;
  g = c[h >> 2] | 0;
  co(g | 0, 0, b << 2 | 0) | 0;
  c[h >> 2] = g + (b << 2);
  ym(a, j);
  zm(j);
 } else do {
  c[d >> 2] = 0;
  d = (c[e >> 2] | 0) + 4 | 0;
  c[e >> 2] = d;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 i = k;
 return;
}

function jg(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) == (d | 0)) {
  c[e >> 2] = 4;
  b = 0;
 } else {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Qb() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Yb(b, k, f, cg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  do if ((c[k >> 2] | 0) == (d | 0)) if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 65535 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else {
   b = b & 65535;
   break;
  } else {
   c[e >> 2] = 4;
   b = 0;
  } while (0);
 } while (0);
 i = l;
 return b | 0;
}

function id(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!(Gc(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   e = d + 20 | 0;
   f = c[e >> 2] | 0;
   if (f >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[e >> 2] = f + 1;
    a[f >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = jd(d, b) | 0;
  Tb(d);
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
  e = jd(d, b) | 0;
 } while (0);
 return e | 0;
}

function Bn(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  f = d + 16 | 0;
  b = c[f >> 2] | 0;
  if (!b) {
   c[f >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((b | 0) != (e | 0)) {
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

function cj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 k = i;
 i = i + 112 | 0;
 e = k + 4 | 0;
 f = k;
 c[f >> 2] = e + 100;
 dj(b + 8 | 0, e, f, g, h, j);
 b = c[f >> 2] | 0;
 g = e;
 e = c[d >> 2] | 0;
 while (1) {
  if ((g | 0) == (b | 0)) break;
  h = a[g >> 0] | 0;
  do if (!e) e = 0; else {
   j = e + 24 | 0;
   f = c[j >> 2] | 0;
   if ((f | 0) == (c[e + 28 >> 2] | 0)) {
    d = (yb[c[(c[e >> 2] | 0) + 52 >> 2] & 15](e, h & 255) | 0) == -1;
    e = d ? 0 : e;
    break;
   } else {
    c[j >> 2] = f + 1;
    a[f >> 0] = h;
    break;
   }
  } while (0);
  g = g + 1 | 0;
 }
 i = k;
 return e | 0;
}

function pg(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) == (d | 0)) {
  c[e >> 2] = 4;
  b = 0;
 } else {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Qb() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Yb(b, k, f, cg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  do if ((c[k >> 2] | 0) == (d | 0)) if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break; else {
   c[e >> 2] = 4;
   b = 0;
  } while (0);
 } while (0);
 i = l;
 return b | 0;
}

function mg(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) == (d | 0)) {
  c[e >> 2] = 4;
  b = 0;
 } else {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Qb() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Yb(b, k, f, cg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  do if ((c[k >> 2] | 0) == (d | 0)) if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break; else {
   c[e >> 2] = 4;
   b = 0;
  } while (0);
 } while (0);
 i = l;
 return b | 0;
}

function Yd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = zb[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((ld(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((dd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function Ld(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = zb[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((ld(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((dd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function Hn(b, d, e, f, g) {
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

function xe(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((1073741807 - d | 0) >>> 0 < e >>> 0) be(b);
 if (!(a[b >> 0] & 1)) l = b + 4 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 2 ? 2 : j + 4 & -4;
 } else j = 1073741807;
 k = Vn(j << 2) | 0;
 if (g | 0) Jc(k, l, g) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) Jc(k + (g << 2) + (i << 2) | 0, l + (g << 2) + (h << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) vn(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function sg(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) == (d | 0)) {
  c[e >> 2] = 4;
  f = 0;
  b = 0;
 } else {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   f = 0;
   b = 0;
   break;
  }
  h = Qb() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Yb(b, k, f, cg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) == (d | 0)) {
   if ((g | 0) == 34) {
    c[e >> 2] = 4;
    b = -1;
    f = -1;
   }
  } else {
   c[e >> 2] = 4;
   b = 0;
   f = 0;
  }
 } while (0);
 D = f;
 i = l;
 return b | 0;
}

function jh(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if (e & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (!(e & 512)) f = c; else {
  a[b >> 0] = 35;
  f = c;
  b = b + 1 | 0;
 }
 while (1) {
  c = a[f >> 0] | 0;
  if (!(c << 24 >> 24)) break;
  a[b >> 0] = c;
  f = f + 1 | 0;
  b = b + 1 | 0;
 }
 a : do switch (e & 74 | 0) {
 case 64:
  {
   a[b >> 0] = 111;
   break;
  }
 case 8:
  if (!(e & 16384)) {
   a[b >> 0] = 120;
   break a;
  } else {
   a[b >> 0] = 88;
   break a;
  }
 default:
  if (d) {
   a[b >> 0] = 100;
   break a;
  } else {
   a[b >> 0] = 117;
   break a;
  }
 } while (0);
 return;
}

function gg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0;
  a = 0;
 } else {
  g = Qb() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = fc(a, j, e, cg() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) == (b | 0)) {
   if ((f | 0) == 34) {
    c[d >> 2] = 4;
    e = (e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0;
    a = e ? -1 : 0;
    e = e ? 2147483647 : -2147483648;
   }
  } else {
   c[d >> 2] = 4;
   a = 0;
   e = 0;
  }
 }
 D = e;
 i = k;
 return a | 0;
}

function gj(a, b, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0;
 j = i;
 i = i + 416 | 0;
 d = j + 8 | 0;
 e = j;
 c[e >> 2] = d + 400;
 hj(a + 8 | 0, d, e, f, g, h);
 a = c[e >> 2] | 0;
 f = d;
 d = c[b >> 2] | 0;
 while (1) {
  if ((f | 0) == (a | 0)) break;
  e = c[f >> 2] | 0;
  if (!d) d = 0; else {
   h = d + 24 | 0;
   g = c[h >> 2] | 0;
   if ((g | 0) == (c[d + 28 >> 2] | 0)) e = yb[c[(c[d >> 2] | 0) + 52 >> 2] & 15](d, e) | 0; else {
    c[h >> 2] = g + 4;
    c[g >> 2] = e;
   }
   d = (e | 0) == -1 ? 0 : d;
  }
  f = f + 4 | 0;
 }
 i = j;
 return d | 0;
}

function Ef(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 zf(j, b);
 a : do if (a[j >> 0] | 0) {
  g = c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
  h = g;
  do if (g | 0) {
   e = h + 24 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) == (c[h + 28 >> 2] | 0)) if ((yb[c[(c[g >> 2] | 0) + 52 >> 2] & 15](h, d & 255) | 0) == -1) break; else break a; else {
    c[e >> 2] = f + 1;
    a[f >> 0] = d;
    break a;
   }
  } while (0);
  d = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16 | 0;
  c[d >> 2] = c[d >> 2] | 1;
 } while (0);
 Af(j);
 i = k;
 return b | 0;
}

function il(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[g >> 2] = e;
 e = Qc(c[b + 8 >> 2] | 0) | 0;
 b = Dc(h, 0, d) | 0;
 if (e | 0) Qc(e) | 0;
 a : do switch (b | 0) {
 case 0:
 case -1:
  {
   h = 2;
   break;
  }
 default:
  {
   b = b + -1 | 0;
   if (b >>> 0 > (f - (c[g >> 2] | 0) | 0) >>> 0) h = 1; else while (1) {
    if (!b) {
     h = 0;
     break a;
    }
    d = a[h >> 0] | 0;
    f = c[g >> 2] | 0;
    c[g >> 2] = f + 1;
    a[f >> 0] = d;
    b = b + -1 | 0;
    h = h + 1 | 0;
   }
  }
 } while (0);
 i = j;
 return h | 0;
}

function ne(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((-17 - d | 0) >>> 0 < e >>> 0) be(b);
 if (!(a[b >> 0] & 1)) l = b + 1 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 11 ? 11 : j + 16 & -16;
 } else j = -17;
 k = Vn(j) | 0;
 if (g | 0) go(k | 0, l | 0, g | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) go(k + g + i | 0, l + g + h | 0, e - g | 0) | 0;
 if ((d | 0) != 10) vn(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function yn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 64 | 0;
 g = h;
 if ((a | 0) == (b | 0)) b = 1; else if (!b) b = 0; else {
  b = zn(b, 2408, 2376, 0) | 0;
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
   Ab[c[(c[b >> 2] | 0) + 28 >> 2] & 7](b, g, c[d >> 2] | 0, 1);
   if ((c[g + 24 >> 2] | 0) == 1) {
    c[d >> 2] = c[g + 16 >> 2];
    b = 1;
   } else b = 0;
  }
 }
 i = h;
 return b | 0;
}

function Bc(a, b, d, e, f) {
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
  co(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     vc(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  vc(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function wi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 q = b + 8 | 0;
 q = sb[c[(c[q >> 2] | 0) + 20 >> 2] & 63](q) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 o = a[q >> 0] | 0;
 p = (o & 1) == 0;
 e = q + 4 | 0;
 d = p ? e : c[q + 8 >> 2] | 0;
 e = d + ((p ? (o & 255) >>> 1 : c[e >> 2] | 0) << 2) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = vi(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}

function jd(b, e) {
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
 if (!g) if (!(wc(b) | 0)) {
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
  if ((lb[c[b + 36 >> 2] & 31](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function no(a, b, d, e) {
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
 a = bo(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = D;
 ro(a, b, bo(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, D, j) | 0;
 e = bo(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function me(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (d | 0) {
  f = a[b >> 0] | 0;
  if (!(f & 1)) g = 10; else {
   f = c[b >> 2] | 0;
   g = (f & -2) + -1 | 0;
   f = f & 255;
  }
  if (!(f & 1)) h = (f & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   ne(b, g, d - g + h | 0, h, h, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) g = b + 1 | 0; else g = c[b + 8 >> 2] | 0;
  co(g + h | 0, e | 0, d | 0) | 0;
  f = h + d | 0;
  if (!(a[b >> 0] & 1)) a[b >> 0] = f << 1; else c[b + 4 >> 2] = f;
  a[g + f >> 0] = 0;
 }
 return b | 0;
}

function Oh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 o = b + 8 | 0;
 o = sb[c[(c[o >> 2] | 0) + 20 >> 2] & 63](o) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 e = a[o >> 0] | 0;
 p = (e & 1) == 0;
 d = p ? o + 1 | 0 : c[o + 8 >> 2] | 0;
 e = d + (p ? (e & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = Nh(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}

function kc(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = ho(d + 1023 | 0, 0, 52) | 0;
 b = D;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function he(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 10; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 < e >>> 0) {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  ie(b, h, e - h | 0, f, 0, f, e, d);
 } else {
  if (g) f = b + 1 | 0; else f = c[b + 8 >> 2] | 0;
  io(f | 0, d | 0, e | 0) | 0;
  a[f + e >> 0] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } while (0);
 return b | 0;
}

function lh(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do switch (c[e + 4 >> 2] & 176 | 0) {
 case 16:
  {
   e = a[b >> 0] | 0;
   switch (e << 24 >> 24) {
   case 43:
   case 45:
    {
     b = b + 1 | 0;
     break a;
    }
   default:
    {}
   }
   if ((d - b | 0) > 1 & e << 24 >> 24 == 48) {
    switch (a[b + 1 >> 0] | 0) {
    case 88:
    case 120:
     break;
    default:
     {
      f = 7;
      break a;
     }
    }
    b = b + 2 | 0;
   } else f = 7;
   break;
  }
 case 32:
  {
   b = d;
   break;
  }
 default:
  f = 7;
 } while (0);
 return b | 0;
}

function te(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 1; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 < e >>> 0) {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  ue(b, h, e - h | 0, f, 0, f, e, d);
 } else {
  if (g) f = b + 4 | 0; else f = c[b + 8 >> 2] | 0;
  Lc(f, d, e) | 0;
  c[f + (e << 2) >> 2] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } while (0);
 return b | 0;
}

function qd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do if ((b | 0) == -1) b = -1; else {
  if ((c[d + 76 >> 2] | 0) > -1) g = Gc(d) | 0; else g = 0;
  if (!(c[d + 8 >> 2] | 0)) {
   if (!(dc(d) | 0)) e = 6;
  } else e = 6;
  if ((e | 0) == 6) {
   e = d + 4 | 0;
   f = c[e >> 2] | 0;
   if (f >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) {
    f = f + -1 | 0;
    c[e >> 2] = f;
    a[f >> 0] = b;
    c[d >> 2] = c[d >> 2] & -17;
    if (!g) break;
    Tb(d);
    break;
   }
  }
  if (!g) b = -1; else {
   Tb(d);
   b = -1;
  }
 } while (0);
 return b | 0;
}

function ye(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 1;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  xe(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) f = 7; else f = 8;
 } else if (f) f = 8; else f = 7;
 if ((f | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 4 | 0;
 } else if ((f | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  c[b + 4 >> 2] = h + 1;
 }
 b = e + (h << 2) | 0;
 c[b >> 2] = d;
 c[b + 4 >> 2] = 0;
 return;
}

function oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 10;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  ne(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) f = 7; else f = 8;
 } else if (f) f = 8; else f = 7;
 if ((f | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 1 | 0;
 } else if ((f | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  c[b + 4 >> 2] = h + 1;
 }
 b = e + h | 0;
 a[b >> 0] = d;
 a[b + 1 >> 0] = 0;
 return;
}

function dd(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[682] | 0)) b = 0; else b = dd(c[682] | 0) | 0;
  ab(17564);
  a = c[4390] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Gc(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = ed(a) | 0 | b;
   if (d | 0) Tb(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Xa(17564);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = ed(a) | 0;
   break;
  }
  d = (Gc(a) | 0) == 0;
  b = ed(a) | 0;
  if (!d) Tb(a);
 } while (0);
 return b | 0;
}

function ed(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  lb[c[a + 36 >> 2] & 31](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  d = a + 8 | 0;
  e = c[d >> 2] | 0;
  if (b >>> 0 < e >>> 0) lb[c[a + 40 >> 2] & 31](a, b - e | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function nk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 107;
 e = c[a >> 2] | 0;
 g = (c[d >> 2] | 0) - e | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - e >> 2;
 e = wd(f ? e : 0, g) | 0;
 if (!e) $n();
 if (f) c[a >> 2] = e; else {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   ob[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 }
 c[h >> 2] = 108;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function fk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 107;
 e = c[a >> 2] | 0;
 g = (c[d >> 2] | 0) - e | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - e >> 2;
 e = wd(f ? e : 0, g) | 0;
 if (!e) $n();
 if (f) c[a >> 2] = e; else {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   ob[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 }
 c[h >> 2] = 108;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function mo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = bo(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return bo((ro(h, g, bo(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, D, 0) | 0) ^ a | 0, D ^ b | 0, a | 0, b | 0) | 0;
}

function go(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Na(b | 0, d | 0, e | 0) | 0;
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

function pd(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) < 0) f = 3; else if (!(Gc(a) | 0)) f = 3; else {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
  } else b = cc(a) | 0;
  Tb(a);
 }
 do if ((f | 0) == 3) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
   break;
  } else {
   b = cc(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function re(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d;
 f = e - h | 0;
 g = f >> 2;
 if (g >>> 0 > 1073741807) be(b);
 if (g >>> 0 < 2) {
  a[b >> 0] = f >>> 1;
  b = b + 4 | 0;
 } else {
  i = g + 4 & -4;
  f = Vn(i << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = g;
  b = f;
 }
 g = (e - h | 0) >>> 2;
 f = b;
 while (1) {
  if ((d | 0) == (e | 0)) break;
  c[f >> 2] = c[d >> 2];
  d = d + 4 | 0;
  f = f + 4 | 0;
 }
 c[b + (g << 2) >> 2] = 0;
 return;
}

function ll(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 k = e;
 j = a + 8 | 0;
 a = 0;
 i = 0;
 a : while (1) {
  if ((d | 0) == (e | 0) | i >>> 0 >= f >>> 0) break;
  h = Qc(c[j >> 2] | 0) | 0;
  g = rd(d, k - d | 0, b) | 0;
  if (h | 0) Qc(h) | 0;
  switch (g | 0) {
  case -2:
  case -1:
   break a;
  case 0:
   {
    d = d + 1 | 0;
    g = 1;
    break;
   }
  default:
   d = d + g | 0;
  }
  a = g + a | 0;
  i = i + 1 | 0;
 }
 return a | 0;
}

function ek(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 107;
 e = c[a >> 2] | 0;
 g = (c[d >> 2] | 0) - e | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - e | 0;
 e = wd(f ? e : 0, g) | 0;
 if (!e) $n();
 if (f) c[a >> 2] = e; else {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   ob[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 }
 c[h >> 2] = 108;
 c[b >> 2] = e + i;
 c[d >> 2] = (c[a >> 2] | 0) + g;
 return;
}

function ym(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 e = c[a >> 2] | 0;
 g = a + 4 | 0;
 d = b + 4 | 0;
 f = (c[g >> 2] | 0) - e | 0;
 h = (c[d >> 2] | 0) + (0 - (f >> 2) << 2) | 0;
 c[d >> 2] = h;
 go(h | 0, e | 0, f | 0) | 0;
 f = c[a >> 2] | 0;
 c[a >> 2] = c[d >> 2];
 c[d >> 2] = f;
 f = b + 8 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = c[f >> 2];
 c[f >> 2] = e;
 f = a + 8 | 0;
 a = b + 12 | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = c[a >> 2];
 c[a >> 2] = e;
 c[b >> 2] = c[d >> 2];
 return;
}

function yc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = qo(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = po(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = D;
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

function wd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = td(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(Qb() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = xd(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d | 0) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = td(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 go(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 ud(a);
 a = d;
 return a | 0;
}

function Fc(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = fo(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Fc(a * 18446744073709551616.0, b);
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

function Hc(b) {
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

function qc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 112 | 0;
 h = j;
 f = h;
 g = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 f = h + 4 | 0;
 c[f >> 2] = a;
 g = h + 8 | 0;
 c[g >> 2] = -1;
 c[h + 44 >> 2] = a;
 c[h + 76 >> 2] = -1;
 $b(h, 0);
 e = +ic(h, d, 1);
 d = (c[f >> 2] | 0) - (c[g >> 2] | 0) + (c[h + 108 >> 2] | 0) | 0;
 if (b | 0) c[b >> 2] = d | 0 ? a + d | 0 : a;
 i = j;
 return +e;
}

function Df(a) {
 a = a | 0;
 var b = 0;
 a = a + 4 | 0;
 b = c[a >> 2] | 0;
 b = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0;
 if (c[b + 24 >> 2] | 0) if (!(c[b + 16 >> 2] | 0)) if (c[b + 4 >> 2] & 8192 | 0) if (!(Ea() | 0)) {
  b = c[a >> 2] | 0;
  b = c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
  if ((sb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0) == -1) {
   b = c[a >> 2] | 0;
   b = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16 | 0;
   c[b >> 2] = c[b >> 2] | 1;
  }
 }
 return;
}

function Af(a) {
 a = a | 0;
 var b = 0;
 a = a + 4 | 0;
 b = c[a >> 2] | 0;
 b = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0;
 if (c[b + 24 >> 2] | 0) if (!(c[b + 16 >> 2] | 0)) if (c[b + 4 >> 2] & 8192 | 0) if (!(Ea() | 0)) {
  b = c[a >> 2] | 0;
  b = c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
  if ((sb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0) == -1) {
   b = c[a >> 2] | 0;
   b = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16 | 0;
   c[b >> 2] = c[b >> 2] | 1;
  }
 }
 return;
}

function od(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 e = g;
 f = td(240) | 0;
 do if (!f) e = -1; else {
  c[e >> 2] = c[d >> 2];
  e = rc(f, 240, b, e) | 0;
  if (e >>> 0 < 240) {
   b = wd(f, e + 1 | 0) | 0;
   c[a >> 2] = b | 0 ? b : f;
   break;
  }
  ud(f);
  if ((e | 0) < 0) e = -1; else {
   f = e + 1 | 0;
   e = td(f) | 0;
   c[a >> 2] = e;
   if (!e) e = -1; else e = rc(e, f, b, d) | 0;
  }
 } while (0);
 i = g;
 return e | 0;
}

function Jf(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 while (1) {
  if ((e | 0) == (f | 0)) {
   h = 7;
   break;
  }
  if ((c | 0) == (d | 0)) {
   c = -1;
   break;
  }
  b = a[c >> 0] | 0;
  g = a[e >> 0] | 0;
  if (b << 24 >> 24 < g << 24 >> 24) {
   c = -1;
   break;
  }
  if (g << 24 >> 24 < b << 24 >> 24) {
   c = 1;
   break;
  }
  e = e + 1 | 0;
  c = c + 1 | 0;
 }
 if ((h | 0) == 7) c = (c | 0) != (d | 0) & 1;
 return c | 0;
}

function dc(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) lb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
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

function fe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = d;
 f = e - g | 0;
 if (f >>> 0 > 4294967279) be(b);
 if (f >>> 0 < 11) {
  a[b >> 0] = f << 1;
  h = b + 1 | 0;
 } else {
  i = f + 16 & -16;
  h = Vn(i) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = f;
 }
 b = e - g | 0;
 f = h;
 while (1) {
  if ((d | 0) == (e | 0)) break;
  a[f >> 0] = a[d >> 0] | 0;
  d = d + 1 | 0;
  f = f + 1 | 0;
 }
 a[h + b >> 0] = 0;
 return;
}

function zc(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[11299 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 11387;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 11387; else {
  b = 11387;
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

function hj(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 128 | 0;
 l = h + 16 | 0;
 m = h + 12 | 0;
 j = h;
 k = h + 8 | 0;
 c[m >> 2] = l + 100;
 dj(a, l, m, e, f, g);
 g = j;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[k >> 2] = l;
 g = (c[d >> 2] | 0) - b >> 2;
 f = Qc(c[a >> 2] | 0) | 0;
 g = nd(b, k, g, j) | 0;
 if (f | 0) Qc(f) | 0;
 c[d >> 2] = b + (g << 2);
 i = h;
 return;
}

function vg(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h;
 d = vf(d) | 0;
 c[j >> 2] = d;
 k = Uf(j, 19136) | 0;
 wb[c[(c[k >> 2] | 0) + 32 >> 2] & 7](k, 14074, 14106, e) | 0;
 e = Uf(j, 19148) | 0;
 a[f >> 0] = sb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
 a[g >> 0] = sb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 ln(d) | 0;
 i = h;
 return;
}

function _g(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 b = vf(b) | 0;
 c[h >> 2] = b;
 j = Uf(h, 19168) | 0;
 wb[c[(c[j >> 2] | 0) + 48 >> 2] & 7](j, 14074, 14106, d) | 0;
 d = Uf(h, 19176) | 0;
 c[e >> 2] = sb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
 c[f >> 2] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 ln(b) | 0;
 i = g;
 return;
}

function co(b, d, e) {
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

function Ke(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = b + 12 | 0;
 i = b + 16 | 0;
 g = d;
 d = 0;
 while (1) {
  if ((d | 0) >= (e | 0)) break;
  f = c[h >> 2] | 0;
  if (f >>> 0 < (c[i >> 2] | 0) >>> 0) {
   c[h >> 2] = f + 1;
   f = a[f >> 0] | 0;
  } else {
   f = sb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   if ((f | 0) == -1) break;
   f = f & 255;
  }
  a[g >> 0] = f;
  g = g + 1 | 0;
  d = d + 1 | 0;
 }
 return d | 0;
}

function Of(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 while (1) {
  if ((e | 0) == (f | 0)) {
   h = 7;
   break;
  }
  if ((b | 0) == (d | 0)) {
   b = -1;
   break;
  }
  a = c[b >> 2] | 0;
  g = c[e >> 2] | 0;
  if ((a | 0) < (g | 0)) {
   b = -1;
   break;
  }
  if ((g | 0) < (a | 0)) {
   b = 1;
   break;
  }
  e = e + 4 | 0;
  b = b + 4 | 0;
 }
 if ((h | 0) == 7) b = (b | 0) != (d | 0) & 1;
 return b | 0;
}

function xg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0.0;
 } else {
  f = Qb() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Ic(a, h, cg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) == (b | 0)) {
   if ((a | 0) == 34) c[d >> 2] = 4;
  } else {
   c[d >> 2] = 4;
   e = 0.0;
  }
 }
 i = j;
 return +e;
}

function Dg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0.0;
 } else {
  f = Qb() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Ic(a, h, cg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) == (b | 0)) {
   if ((a | 0) == 34) c[d >> 2] = 4;
  } else {
   c[d >> 2] = 4;
   e = 0.0;
  }
 }
 i = j;
 return +e;
}

function Ag(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0.0;
 } else {
  f = Qb() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Ic(a, h, cg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) == (b | 0)) {
   if ((a | 0) == 34) c[d >> 2] = 4;
  } else {
   c[d >> 2] = 4;
   e = 0.0;
  }
 }
 i = j;
 return +e;
}

function _b(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 112 | 0;
 j = k;
 c[j >> 2] = 0;
 g = j + 4 | 0;
 c[g >> 2] = a;
 c[j + 44 >> 2] = a;
 h = j + 8 | 0;
 c[h >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;
 c[j + 76 >> 2] = -1;
 $b(j, 0);
 e = ac(j, d, 1, e, f) | 0;
 if (b | 0) c[b >> 2] = a + ((c[g >> 2] | 0) + (c[j + 108 >> 2] | 0) - (c[h >> 2] | 0));
 i = k;
 return e | 0;
}

function li(b) {
 b = b | 0;
 var d = 0;
 if (!(a[16920] | 0)) if (Ia(16920) | 0) {
  if (!(a[16928] | 0)) if (Ia(16928) | 0) {
   b = 19672;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 19960);
   _a(101, 0, n | 0) | 0;
   Ga(16928);
  }
  ke(19672, 14811) | 0;
  ke(19684, 14814) | 0;
  c[4990] = 19672;
  Ga(16920);
 }
 return c[4990] | 0;
}

function af(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 g = a + 24 | 0;
 h = a + 28 | 0;
 e = b;
 b = 0;
 while (1) {
  if ((b | 0) >= (d | 0)) break;
  f = c[g >> 2] | 0;
  if (f >>> 0 < (c[h >> 2] | 0) >>> 0) {
   i = c[e >> 2] | 0;
   c[g >> 2] = f + 4;
   c[f >> 2] = i;
  } else if ((yb[c[(c[a >> 2] | 0) + 52 >> 2] & 15](a, c[e >> 2] | 0) | 0) == -1) break;
  e = e + 4 | 0;
  b = b + 1 | 0;
 }
 return b | 0;
}

function Ye(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = a + 12 | 0;
 h = a + 16 | 0;
 f = b;
 b = 0;
 while (1) {
  if ((b | 0) >= (d | 0)) break;
  e = c[g >> 2] | 0;
  if (e >>> 0 < (c[h >> 2] | 0) >>> 0) {
   c[g >> 2] = e + 4;
   e = c[e >> 2] | 0;
  } else {
   e = sb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   if ((e | 0) == -1) break;
  }
  c[f >> 2] = e;
  f = f + 4 | 0;
  b = b + 1 | 0;
 }
 return b | 0;
}

function Oe(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 i = b + 24 | 0;
 j = b + 28 | 0;
 g = e;
 e = 0;
 while (1) {
  if ((e | 0) >= (f | 0)) break;
  h = c[i >> 2] | 0;
  if (h >>> 0 < (c[j >> 2] | 0) >>> 0) {
   k = a[g >> 0] | 0;
   c[i >> 2] = h + 1;
   a[h >> 0] = k;
  } else if ((yb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[g >> 0] | 0) | 0) == -1) break;
  g = g + 1 | 0;
  e = e + 1 | 0;
 }
 return e | 0;
}

function Vi(b) {
 b = b | 0;
 var d = 0;
 if (!(a[17e3] | 0)) if (Ia(17e3) | 0) {
  if (!(a[17008] | 0)) if (Ia(17008) | 0) {
   b = 20484;
   do {
    d = 0;
    while (1) {
     if ((d | 0) == 3) break;
     c[b + (d << 2) >> 2] = 0;
     d = d + 1 | 0;
    }
    b = b + 12 | 0;
   } while ((b | 0) != 20772);
   _a(105, 0, n | 0) | 0;
   Ga(17008);
  }
  we(20484, 8356) | 0;
  we(20496, 8368) | 0;
  c[5193] = 20484;
  Ga(17e3);
 }
 return c[5193] | 0;
}

function yf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0) {
  zf(d, b);
  if (a[d >> 0] | 0) {
   f = c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
   if ((sb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) {
    f = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16 | 0;
    c[f >> 2] = c[f >> 2] | 1;
   }
  }
  Af(d);
 }
 i = e;
 return b | 0;
}

function Bf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0) {
  Cf(d, b);
  if (a[d >> 0] | 0) {
   f = c[b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24 >> 2] | 0;
   if ((sb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) {
    f = b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16 | 0;
    c[f >> 2] = c[f >> 2] | 1;
   }
  }
  Df(d);
 }
 i = e;
 return b | 0;
}

function Tn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) En(0, d, e, f); else {
  h = c[b + 12 >> 2] | 0;
  g = b + 16 + (h << 3) | 0;
  Un(b + 16 | 0, d, e, f);
  if ((h | 0) > 1) {
   h = d + 54 | 0;
   b = b + 24 | 0;
   do {
    Un(b, d, e, f);
    if (a[h >> 0] | 0) break a;
    b = b + 8 | 0;
   } while (b >>> 0 < g >>> 0);
  }
 } while (0);
 return;
}

function dj(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 a[l >> 0] = 37;
 j = l + 1 | 0;
 a[j >> 0] = g;
 k = l + 2 | 0;
 a[k >> 0] = h;
 a[l + 3 >> 0] = 0;
 if (h << 24 >> 24) {
  a[j >> 0] = h;
  a[k >> 0] = g;
 }
 c[e >> 2] = d + (Ja(d | 0, (c[e >> 2] | 0) - d | 0, l | 0, f | 0, c[b >> 2] | 0) | 0);
 i = m;
 return;
}

function En(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 b = d + 16 | 0;
 g = c[b >> 2] | 0;
 do if (!g) {
  c[b >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } else {
  if ((g | 0) != (e | 0)) {
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

function Sh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = sb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Yf(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = sb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Jg(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function xm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = f;
 do if (!d) f = 0; else {
  g = f + 112 | 0;
  if (d >>> 0 < 29 & (a[g >> 0] | 0) == 0) {
   a[g >> 0] = 1;
   break;
  } else {
   f = Vn(d << 2) | 0;
   break;
  }
 } while (0);
 c[b >> 2] = f;
 e = f + (e << 2) | 0;
 c[b + 8 >> 2] = e;
 c[b + 4 >> 2] = e;
 c[b + 12 >> 2] = f + (d << 2);
 return;
}

function yi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = sb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Jg(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function Qh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = sb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Yf(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function Lc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = (d | 0) == 0;
 if (a - b >> 2 >>> 0 < d >>> 0) {
  if (!e) do {
   d = d + -1 | 0;
   c[a + (d << 2) >> 2] = c[b + (d << 2) >> 2];
  } while ((d | 0) != 0);
 } else if (!e) {
  e = b;
  b = a;
  while (1) {
   d = d + -1 | 0;
   c[b >> 2] = c[e >> 2];
   if (!d) break; else {
    e = e + 4 | 0;
    b = b + 4 | 0;
   }
  }
 }
 return a | 0;
}

function Uh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function Ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function Mg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 b = vf(b) | 0;
 c[g >> 2] = b;
 h = Uf(g, 19168) | 0;
 wb[c[(c[h >> 2] | 0) + 48 >> 2] & 7](h, 14074, 14100, d) | 0;
 d = Uf(g, 19176) | 0;
 c[e >> 2] = sb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 pb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 ln(b) | 0;
 i = f;
 return;
}

function $f(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 d = vf(d) | 0;
 c[h >> 2] = d;
 j = Uf(h, 19136) | 0;
 wb[c[(c[j >> 2] | 0) + 32 >> 2] & 7](j, 14074, 14100, e) | 0;
 e = Uf(h, 19148) | 0;
 a[f >> 0] = sb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 pb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 ln(d) | 0;
 i = g;
 return;
}

function zm(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 d = c[b + 4 >> 2] | 0;
 e = b + 8 | 0;
 f = c[e >> 2] | 0;
 while (1) {
  if ((f | 0) == (d | 0)) break;
  g = f + -4 | 0;
  c[e >> 2] = g;
  f = g;
 }
 e = c[b >> 2] | 0;
 do if (e | 0) {
  d = c[b + 16 >> 2] | 0;
  if ((d | 0) == (e | 0)) {
   a[d + 112 >> 0] = 0;
   break;
  } else {
   vn(e);
   break;
  }
 } while (0);
 return;
}

function le(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = a[b >> 0] | 0;
 g = (f & 1) == 0;
 if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
 do if (f >>> 0 < d >>> 0) me(b, d - f | 0, e) | 0; else if (g) {
  a[b + 1 + d >> 0] = 0;
  a[b >> 0] = d << 1;
  break;
 } else {
  a[(c[b + 8 >> 2] | 0) + d >> 0] = 0;
  c[b + 4 >> 2] = d;
  break;
 } while (0);
 return;
}

function Mh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Nh(a, k, j, e, f, g, 14548, 14556) | 0;
 i = h;
 return a | 0;
}

function ui(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = vi(a, k, j, e, f, g, 7304, 7336) | 0;
 i = h;
 return a | 0;
}

function zi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19168) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Ai(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function xi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19168) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 yi(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Th(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19136) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Uh(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Rh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19136) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Sh(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Ph(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19136) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Qh(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Bi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = vf(e) | 0;
 c[m >> 2] = l;
 e = Uf(m, 19168) | 0;
 ln(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Ci(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Jn() {
 var a = 0, b = 0, d = 0, e = 0;
 b = i;
 i = i + 16 | 0;
 d = b + 8 | 0;
 a = on() | 0;
 if (a | 0) {
  a = c[a >> 2] | 0;
  if (a | 0) {
   e = a + 48 | 0;
   if ((c[e >> 2] & -256 | 0) == 1126902528 ? (c[e + 4 >> 2] | 0) == 1129074247 : 0) {
    ub[c[a + 12 >> 2] & 3]();
    rn(16702, b);
   }
  }
 }
 e = c[2401] | 0;
 c[2401] = e + 0;
 ub[e & 3]();
 rn(16702, d);
}

function Vd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 xf(b);
 c[b >> 2] = 6480;
 c[b + 32 >> 2] = d;
 gn(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Uf(g, 20936) | 0;
 hn(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (sb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function Mc(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24) c = e; else {
  do {
   b = b + 1 | 0;
   c = c + 1 | 0;
   e = a[b >> 0] | 0;
   d = a[c >> 0] | 0;
  } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
  c = e;
 }
 return (c & 255) - (d & 255) | 0;
}

function Id(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 wf(b);
 c[b >> 2] = 6352;
 c[b + 32 >> 2] = d;
 gn(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Uf(g, 20928) | 0;
 hn(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (sb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function vm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 g = a + 4 | 0;
 d = c[g >> 2] | 0;
 f = c[a >> 2] | 0;
 e = d - f >> 2;
 a : do if (e >>> 0 < b >>> 0) wm(a, b - e | 0); else if (e >>> 0 > b >>> 0) {
  e = f + (b << 2) | 0;
  while (1) {
   if ((d | 0) == (e | 0)) break a;
   a = d + -4 | 0;
   c[g >> 2] = a;
   d = a;
  }
 } while (0);
 return;
}

function yg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = zg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function tg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = ug(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function qg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = rg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ng(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = og(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function kg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = lg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function hg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = ig(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function eg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = fg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ch(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = dh(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ah(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = bh(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Zf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = _f(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Zd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) {
  f = d;
  d = 0;
  while (1) {
   if ((d | 0) >= (e | 0)) break a;
   if ((yb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, c[f >> 2] | 0) | 0) == -1) break a;
   f = f + 4 | 0;
   d = d + 1 | 0;
  }
 } else d = ld(d, 4, e, c[b + 32 >> 2] | 0) | 0; while (0);
 return d | 0;
}

function Yg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Zg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Wg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Xg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Ug(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Vg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Sg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Tg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Qg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Rg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Og(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Pg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Md(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) {
  g = e;
  e = 0;
  while (1) {
   if ((e | 0) >= (f | 0)) break a;
   if ((yb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[g >> 0] | 0) | 0) == -1) break a;
   g = g + 1 | 0;
   e = e + 1 | 0;
  }
 } else e = ld(e, 1, f, c[b + 32 >> 2] | 0) | 0; while (0);
 return e | 0;
}

function Kg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Lg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Bg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Cg(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function wc(b) {
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

function Zh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Xh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Hi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function $h(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ub(a, b, d) {
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
 if ((Pb(gb(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function _h(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ii(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Yh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ni(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ki(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Gi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function yl(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 d = c[b >> 2] | 0;
 do if (d | 0) {
  e = b + 4 | 0;
  f = c[e >> 2] | 0;
  while (1) {
   if ((f | 0) == (d | 0)) break;
   g = f + -4 | 0;
   c[e >> 2] = g;
   f = g;
  }
  if ((b + 16 | 0) == (d | 0)) {
   a[b + 128 >> 0] = 0;
   break;
  } else {
   vn(d);
   break;
  }
 } while (0);
 return;
}

function ei(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Oi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function $l(a, d, f, g) {
 a = a | 0;
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = (f - d | 0) >>> 2;
 h = d;
 while (1) {
  if ((h | 0) == (f | 0)) break;
  a = c[h >> 2] | 0;
  if (a >>> 0 < 128) a = e[(c[(fd() | 0) >> 2] | 0) + (a << 1) >> 1] | 0; else a = 0;
  b[g >> 1] = a;
  g = g + 2 | 0;
  h = h + 4 | 0;
 }
 return d + (i << 2) | 0;
}

function ad(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a + 84 | 0;
 g = c[e >> 2] | 0;
 h = d + 256 | 0;
 f = Ac(g, 0, h) | 0;
 f = (f | 0) == 0 ? h : f - g | 0;
 d = f >>> 0 < d >>> 0 ? f : d;
 go(b | 0, g | 0, d | 0) | 0;
 c[a + 4 >> 2] = g + d;
 b = g + f | 0;
 c[a + 8 >> 2] = b;
 c[e >> 2] = b;
 return d | 0;
}

function ee(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 4294967279) be(b);
 if (d >>> 0 < 11) {
  a[b >> 0] = d << 1;
  b = b + 1 | 0;
 } else {
  g = d + 16 & -16;
  f = Vn(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 co(b | 0, e | 0, d | 0) | 0;
 a[b + d >> 0] = 0;
 return;
}

function de(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 4294967279) be(b);
 if (e >>> 0 < 11) {
  a[b >> 0] = e << 1;
  b = b + 1 | 0;
 } else {
  g = e + 16 & -16;
  f = Vn(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 go(b | 0, d | 0, e | 0) | 0;
 a[b + e >> 0] = 0;
 return;
}

function _c(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 112 | 0;
 e = g;
 f = e;
 h = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (h | 0));
 c[e + 32 >> 2] = 26;
 c[e + 44 >> 2] = a;
 c[e + 76 >> 2] = -1;
 c[e + 84 >> 2] = a;
 h = bd(e, b, d) | 0;
 i = g;
 return h | 0;
}

function qe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 1073741807) be(b);
 if (d >>> 0 < 2) {
  a[b >> 0] = d << 1;
  b = b + 4 | 0;
 } else {
  g = d + 4 & -4;
  f = Vn(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 Kc(b, e, d) | 0;
 c[b + (d << 2) >> 2] = 0;
 return;
}

function pe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 1073741807) be(b);
 if (e >>> 0 < 2) {
  a[b >> 0] = e << 1;
  b = b + 4 | 0;
 } else {
  g = e + 4 & -4;
  f = Vn(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 Jc(b, d, e) | 0;
 c[b + (e << 2) >> 2] = 0;
 return;
}

function um(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 kn(b);
 f = a + 8 | 0;
 e = c[f >> 2] | 0;
 if ((c[a + 12 >> 2] | 0) - e >> 2 >>> 0 > d >>> 0) a = f; else {
  vm(f, d + 1 | 0);
  a = f;
  e = c[f >> 2] | 0;
 }
 e = c[e + (d << 2) >> 2] | 0;
 if (e | 0) ln(e) | 0;
 c[(c[a >> 2] | 0) + (d << 2) >> 2] = b;
 return;
}

function pl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = ql(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function nl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = ol(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Pk(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Qk(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Nk(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Ok(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Vn(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  a = td(b) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = Wn() | 0;
  if (!a) {
   b = 5;
   break;
  }
  ub[a & 3]();
 }
 if ((b | 0) == 5) {
  b = Da(4) | 0;
  c[b >> 2] = 9700;
  $a(b | 0, 2432, 91);
 } else if ((b | 0) == 6) return a | 0;
 return 0;
}

function uf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 c[a + 24 >> 2] = b;
 c[a + 16 >> 2] = (b | 0) == 0 & 1;
 c[a + 20 >> 2] = 0;
 c[a + 4 >> 2] = 4098;
 c[a + 12 >> 2] = 0;
 c[a + 8 >> 2] = 6;
 d = a + 28 | 0;
 b = a + 32 | 0;
 a = b + 40 | 0;
 do {
  c[b >> 2] = 0;
  b = b + 4 | 0;
 } while ((b | 0) < (a | 0));
 fn(d);
 return;
}

function Vb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 1;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (Wa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Rb(b, d, e) | 0;
 i = g;
 return f | 0;
}

function mn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 eb(20976) | 0;
 while (1) {
  if ((c[a >> 2] | 0) != 1) break;
  xa(21004, 20976) | 0;
 }
 if (!(c[a >> 2] | 0)) {
  c[a >> 2] = 1;
  Ua(20976) | 0;
  ob[d & 127](b);
  eb(20976) | 0;
  c[a >> 2] = -1;
  Ua(20976) | 0;
  Ya(21004) | 0;
 } else Ua(20976) | 0;
 return;
}

function mi(a) {
 a = a | 0;
 ge(19948);
 ge(19936);
 ge(19924);
 ge(19912);
 ge(19900);
 ge(19888);
 ge(19876);
 ge(19864);
 ge(19852);
 ge(19840);
 ge(19828);
 ge(19816);
 ge(19804);
 ge(19792);
 ge(19780);
 ge(19768);
 ge(19756);
 ge(19744);
 ge(19732);
 ge(19720);
 ge(19708);
 ge(19696);
 ge(19684);
 ge(19672);
 return;
}

function ki(a) {
 a = a | 0;
 ge(19656);
 ge(19644);
 ge(19632);
 ge(19620);
 ge(19608);
 ge(19596);
 ge(19584);
 ge(19572);
 ge(19560);
 ge(19548);
 ge(19536);
 ge(19524);
 ge(19512);
 ge(19500);
 ge(19488);
 ge(19476);
 ge(19464);
 ge(19452);
 ge(19440);
 ge(19428);
 ge(19416);
 ge(19404);
 ge(19392);
 ge(19380);
 return;
}

function Wi(a) {
 a = a | 0;
 se(20760);
 se(20748);
 se(20736);
 se(20724);
 se(20712);
 se(20700);
 se(20688);
 se(20676);
 se(20664);
 se(20652);
 se(20640);
 se(20628);
 se(20616);
 se(20604);
 se(20592);
 se(20580);
 se(20568);
 se(20556);
 se(20544);
 se(20532);
 se(20520);
 se(20508);
 se(20496);
 se(20484);
 return;
}

function rm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 c[b >> 2] = 0;
 e = b + 4 | 0;
 c[e >> 2] = 0;
 c[b + 8 >> 2] = 0;
 a[b + 128 >> 0] = 0;
 if (d | 0) {
  sm(b, d);
  b = c[e >> 2] | 0;
  do {
   c[b >> 2] = 0;
   b = (c[e >> 2] | 0) + 4 | 0;
   c[e >> 2] = b;
   d = d + -1 | 0;
  } while ((d | 0) != 0);
 }
 return;
}

function io(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else go(b, c, d) | 0;
 return b | 0;
}
function Ui(a) {
 a = a | 0;
 se(20468);
 se(20456);
 se(20444);
 se(20432);
 se(20420);
 se(20408);
 se(20396);
 se(20384);
 se(20372);
 se(20360);
 se(20348);
 se(20336);
 se(20324);
 se(20312);
 se(20300);
 se(20288);
 se(20276);
 se(20264);
 se(20252);
 se(20240);
 se(20228);
 se(20216);
 se(20204);
 se(20192);
 return;
}

function Od(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 xf(b);
 c[b >> 2] = 6416;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 gn(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 Qd(b, g);
 hn(g);
 i = f;
 return;
}

function Bd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 wf(b);
 c[b >> 2] = 6288;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 gn(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 Dd(b, g);
 hn(g);
 i = f;
 return;
}

function lo(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = $(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + ($(e, d) | 0) | 0;
 e = b >>> 16;
 b = $(e, f) | 0;
 return (D = (a >>> 16) + ($(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function xl(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 9184;
 d = a + 8 | 0;
 e = a + 12 | 0;
 f = 0;
 while (1) {
  b = c[d >> 2] | 0;
  if (f >>> 0 >= (c[e >> 2] | 0) - b >> 2 >>> 0) break;
  b = c[b + (f << 2) >> 2] | 0;
  if (b | 0) ln(b) | 0;
  f = f + 1 | 0;
 }
 ge(a + 144 | 0);
 yl(d);
 return;
}

function jm(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 h = (e - d | 0) >>> 2;
 b = g;
 g = d;
 while (1) {
  if ((g | 0) == (e | 0)) break;
  i = c[g >> 2] | 0;
  a[b >> 0] = i >>> 0 < 128 ? i & 255 : f;
  b = b + 1 | 0;
  g = g + 4 | 0;
 }
 return d + (h << 2) | 0;
}

function Qn(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = c[a + 4 >> 2] | 0;
 h = i >> 8;
 if (i & 1) h = c[(c[e >> 2] | 0) + h >> 2] | 0;
 a = c[a >> 2] | 0;
 xb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e + h | 0, i & 2 | 0 ? f : 2, g);
 return;
}

function fm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 e = b;
 while (1) {
  if ((e | 0) == (d | 0)) break;
  a = c[e >> 2] | 0;
  if (a >>> 0 < 128) a = c[(c[(hd() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
  c[e >> 2] = a;
  e = e + 4 | 0;
 }
 return b + (f << 2) | 0;
}

function dm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 e = b;
 while (1) {
  if ((e | 0) == (d | 0)) break;
  a = c[e >> 2] | 0;
  if (a >>> 0 < 128) a = c[(c[(gd() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
  c[e >> 2] = a;
  e = e + 4 | 0;
 }
 return b + (f << 2) | 0;
}

function fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Vh(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Pi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Di(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Kb() {
 var a = 0, b = 0, d = 0, e = 0;
 a = i;
 i = i + 16 | 0;
 e = a;
 b = Lb(18176, 10520, 13) | 0;
 c[e >> 2] = vf(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 d = Uf(e, 19136) | 0;
 d = yb[c[(c[d >> 2] | 0) + 28 >> 2] & 15](d, 10) | 0;
 hn(e);
 Ef(b, d) | 0;
 yf(b) | 0;
 i = a;
 return 0;
}

function vd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (!a) d = 0; else {
  d = $(b, a) | 0;
  if ((b | a) >>> 0 > 65535) d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1;
 }
 b = td(d) | 0;
 if (!b) return b | 0;
 if (!(c[b + -4 >> 2] & 3)) return b | 0;
 co(b | 0, 0, d | 0) | 0;
 return b | 0;
}

function ld(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = $(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Gc(e) | 0) == 0;
  a = vc(a, f, e) | 0;
  if (!g) Tb(e);
 } else a = vc(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function bm(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 while (1) {
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
  a = c[e >> 2] | 0;
  if (a >>> 0 >= 128) break;
  if (!((b[(c[(fd() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16)) break;
  e = e + 4 | 0;
 }
 return e | 0;
}

function jl(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 8 | 0;
 b = Qc(c[a >> 2] | 0) | 0;
 d = Nc(0, 0, 4) | 0;
 if (b | 0) Qc(b) | 0;
 if (!d) {
  a = c[a >> 2] | 0;
  if (!a) a = 1; else {
   a = Qc(a) | 0;
   if (!a) a = 0; else {
    Qc(a) | 0;
    a = 0;
   }
  }
 } else a = -1;
 return a | 0;
}

function Sn(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = c[a + 4 >> 2] | 0;
 g = h >> 8;
 if (h & 1) g = c[(c[d >> 2] | 0) + g >> 2] | 0;
 a = c[a >> 2] | 0;
 mb[c[(c[a >> 2] | 0) + 24 >> 2] & 3](a, b, d + g | 0, h & 2 | 0 ? e : 2, f);
 return;
}

function ko(b) {
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

function Be(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 d = a + 32 | 0;
 e = a + 36 | 0;
 f = c[a + 40 >> 2] | 0;
 while (1) {
  if (!f) break;
  g = f + -1 | 0;
  tb[c[(c[d >> 2] | 0) + (g << 2) >> 2] & 0](b, a, c[(c[e >> 2] | 0) + (g << 2) >> 2] | 0);
  f = g;
 }
 return;
}

function Qd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Uf(d, 20936) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = sb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (sb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function Dd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Uf(d, 20928) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = sb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (sb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function sm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d >>> 0 > 1073741823) pm(b);
 e = b + 128 | 0;
 if (d >>> 0 < 29 & (a[e >> 0] | 0) == 0) {
  a[e >> 0] = 1;
  e = b + 16 | 0;
 } else e = Vn(d << 2) | 0;
 c[b + 4 >> 2] = e;
 c[b >> 2] = e;
 c[b + 8 >> 2] = e + (d << 2);
 return;
}

function am(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 while (1) {
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
  a = c[e >> 2] | 0;
  if (a >>> 0 < 128) if ((b[(c[(fd() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16) break;
  e = e + 4 | 0;
 }
 return e | 0;
}

function cc(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 if (!(c[a + 8 >> 2] | 0)) if (!(dc(a) | 0)) e = 3; else b = -1; else e = 3;
 if ((e | 0) == 3) if ((lb[c[a + 32 >> 2] & 31](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = f;
 return b | 0;
}

function Un(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = c[a + 4 >> 2] | 0;
 f = g >> 8;
 if (g & 1) f = c[(c[d >> 2] | 0) + f >> 2] | 0;
 a = c[a >> 2] | 0;
 Ab[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d + f | 0, g & 2 | 0 ? e : 2);
 return;
}

function Fl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = d;
 while (1) {
  if ((b | 0) == (e | 0)) break;
  d = a[b >> 0] | 0;
  if (d << 24 >> 24 > -1) d = c[(c[(hd() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return e | 0;
}

function Dl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = d;
 while (1) {
  if ((b | 0) == (e | 0)) break;
  d = a[b >> 0] | 0;
  if (d << 24 >> 24 > -1) d = c[(c[(gd() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return e | 0;
}

function Hb(b) {
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

function $b(a, b) {
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

function An(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Bn(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  xb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e, f, g);
 }
 return;
}

function sc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 go(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function Qf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 a = 0;
 while (1) {
  if ((b | 0) == (d | 0)) break;
  e = (c[b >> 2] | 0) + (a << 4) | 0;
  f = e & -268435456;
  a = (f >>> 24 | f) ^ e;
  b = b + 4 | 0;
 }
 return a | 0;
}

function Lf(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 b = 0;
 while (1) {
  if ((c | 0) == (d | 0)) break;
  e = (a[c >> 0] | 0) + (b << 4) | 0;
  f = e & -268435456;
  b = (f >>> 24 | f) ^ e;
  c = c + 1 | 0;
 }
 return b | 0;
}

function Jm(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9296;
 c[a + 8 >> 2] = 46;
 c[a + 12 >> 2] = 44;
 b = a + 16 | 0;
 a = 0;
 while (1) {
  if ((a | 0) == 3) break;
  c[b + (a << 2) >> 2] = 0;
  a = a + 1 | 0;
 }
 return;
}

function Hm(b, d) {
 b = b | 0;
 d = d | 0;
 c[b + 4 >> 2] = d + -1;
 c[b >> 2] = 9256;
 a[b + 8 >> 0] = 46;
 a[b + 9 >> 0] = 44;
 d = b + 12 | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[d + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Zn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 c[e >> 2] = c[d >> 2];
 a = lb[c[(c[a >> 2] | 0) + 16 >> 2] & 31](a, b, e) | 0;
 if (a) c[d >> 2] = c[e >> 2];
 i = f;
 return a & 1 | 0;
}

function Jl(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 while (1) {
  if ((c | 0) == (d | 0)) break;
  b = a[c >> 0] | 0;
  a[f >> 0] = b << 24 >> 24 > -1 ? b : e;
  f = f + 1 | 0;
  c = c + 1 | 0;
 }
 return d | 0;
}

function Pc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (!(a[c >> 0] | 0)) e = 4; else if (!(Mc(c, 14107) | 0)) e = 4; else if (!(Mc(c, 13235) | 0)) e = 4; else d = 0;
 if ((e | 0) == 4) if (!d) d = vd(1, 4) | 0;
 return d | 0;
}

function kh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 c[h >> 2] = f;
 f = Qc(d) | 0;
 d = rc(a, b, e, h) | 0;
 if (f | 0) Qc(f) | 0;
 i = g;
 return d | 0;
}

function Jc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d | 0) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = c[b >> 2];
   if (!d) break; else {
    b = b + 4 | 0;
    e = e + 4 | 0;
   }
  }
 }
 return a | 0;
}

function zf(b, d) {
 b = b | 0;
 d = d | 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 d = d + (c[(c[d >> 2] | 0) + -12 >> 2] | 0) | 0;
 if (!(c[d + 16 >> 2] | 0)) {
  d = c[d + 72 >> 2] | 0;
  if (d | 0) yf(d) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function Cf(b, d) {
 b = b | 0;
 d = d | 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 d = d + (c[(c[d >> 2] | 0) + -12 >> 2] | 0) | 0;
 if (!(c[d + 16 >> 2] | 0)) {
  d = c[d + 72 >> 2] | 0;
  if (d | 0) Bf(d) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function Vf(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 if ((c[a >> 2] | 0) != -1) {
  c[b >> 2] = a;
  c[b + 4 >> 2] = 97;
  c[b + 8 >> 2] = 0;
  mn(a, b, 98);
 }
 i = d;
 return (c[a + 4 >> 2] | 0) + -1 | 0;
}

function Do(a, b, c, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 return vb[a & 15](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0, i | 0) | 0;
}

function sh(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Qc(b) | 0;
 b = od(a, d, g) | 0;
 if (e | 0) Qc(e) | 0;
 i = f;
 return b | 0;
}

function Fg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Qc(b) | 0;
 b = _c(a, d, g) | 0;
 if (e | 0) Qc(e) | 0;
 i = f;
 return b | 0;
}

function nm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[b + 4 >> 2] = f + -1;
 c[b >> 2] = 9204;
 f = b + 8 | 0;
 c[f >> 2] = d;
 a[b + 12 >> 0] = e & 1;
 if (!d) c[f >> 2] = c[(fd() | 0) >> 2];
 return;
}

function mc(a, b) {
 a = +a;
 b = +b;
 var d = 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] | 0;
 b = +O(+a);
 h[k >> 3] = b;
 d = d & -2147483648 | c[k + 4 >> 2];
 c[k >> 2] = c[k >> 2];
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Dn(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) En(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  Ab[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d, e);
 }
 return;
}

function ce(b, d) {
 b = b | 0;
 d = d | 0;
 if (!(a[d >> 0] & 1)) {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 } else de(b, c[d + 8 >> 2] | 0, c[d + 4 >> 2] | 0);
 return;
}

function qo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 ro(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function _e(a) {
 a = a | 0;
 var b = 0;
 if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 4;
  a = c[a >> 2] | 0;
 }
 return a | 0;
}

function Xd(b, d) {
 b = b | 0;
 d = d | 0;
 sb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Uf(d, 20936) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (sb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Me(a) {
 a = a | 0;
 var b = 0;
 if ((sb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 1;
  a = d[a >> 0] | 0;
 }
 return a | 0;
}

function Kd(b, d) {
 b = b | 0;
 d = d | 0;
 sb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Uf(d, 20928) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (sb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Ue(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Ge(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function xf(a) {
 a = a | 0;
 c[a >> 2] = 6624;
 fn(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function wf(a) {
 a = a | 0;
 c[a >> 2] = 6560;
 fn(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function oo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = lo(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Xf(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = c[a + 4 >> 2] | 0;
 d = c[a + 8 >> 2] | 0;
 a = (c[a >> 2] | 0) + (d >> 1) | 0;
 if (d & 1) b = c[(c[a >> 2] | 0) + b >> 2] | 0;
 ob[b & 127](a);
 return;
}

function so(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 return kb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0) | 0;
}

function ii(a) {
 a = a | 0;
 ge(19364);
 ge(19352);
 ge(19340);
 ge(19328);
 ge(19316);
 ge(19304);
 ge(19292);
 ge(19280);
 ge(19268);
 ge(19256);
 ge(19244);
 ge(19232);
 ge(19220);
 ge(19208);
 return;
}

function Si(a) {
 a = a | 0;
 se(20176);
 se(20164);
 se(20152);
 se(20140);
 se(20128);
 se(20116);
 se(20104);
 se(20092);
 se(20080);
 se(20068);
 se(20056);
 se(20044);
 se(20032);
 se(20020);
 return;
}

function Kc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d | 0) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = b;
   if (!d) break; else e = e + 4 | 0;
  }
 }
 return a | 0;
}

function Hl(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 while (1) {
  if ((c | 0) == (d | 0)) break;
  a[e >> 0] = a[c >> 0] | 0;
  e = e + 1 | 0;
  c = c + 1 | 0;
 }
 return d | 0;
}

function ln(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 4 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = b + -1;
 if (!b) {
  ob[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);
  a = 1;
 } else a = 0;
 return a | 0;
}

function jo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function hm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 while (1) {
  if ((d | 0) == (e | 0)) break;
  c[f >> 2] = a[d >> 0];
  f = f + 4 | 0;
  d = d + 1 | 0;
 }
 return e | 0;
}

function Oc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = rc(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function ze(a) {
 a = a | 0;
 c[a >> 2] = 6544;
 Be(a, 0);
 hn(a + 28 | 0);
 ud(c[a + 32 >> 2] | 0);
 ud(c[a + 36 >> 2] | 0);
 ud(c[a + 48 >> 2] | 0);
 ud(c[a + 60 >> 2] | 0);
 return;
}

function yo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 return qb[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0;
}

function ho(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function fo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Ve(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function He(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function vo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = +g;
 return nb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, +g) | 0;
}

function _l(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 if (e >>> 0 < 128) e = (b[(c[(fd() | 0) >> 2] | 0) + (e << 1) >> 1] & d) << 16 >> 16 != 0; else e = 0;
 return e | 0;
}

function _k(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function Zk(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function Jk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Xc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function Ek(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Xc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function on() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(Va(21052, 2) | 0)) {
  b = Ra(c[5264] | 0) | 0;
  i = a;
  return b | 0;
 } else rn(16378, a);
 return 0;
}

function ao() {}
function bo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function Fo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 xb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Zc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = _c(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Gn(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Bn(0, b, d, e, f);
 return;
}

function _i(b) {
 b = b | 0;
 if (!(a[17040] | 0)) if (Ia(17040) | 0) {
  pe(20812, 8548, hc(8548) | 0);
  _a(106, 20812, n | 0) | 0;
  Ga(17040);
 }
 return 20812;
}

function Zi(b) {
 b = b | 0;
 if (!(a[17032] | 0)) if (Ia(17032) | 0) {
  pe(20800, 8512, hc(8512) | 0);
  _a(106, 20800, n | 0) | 0;
  Ga(17032);
 }
 return 20800;
}

function Yi(b) {
 b = b | 0;
 if (!(a[17024] | 0)) if (Ia(17024) | 0) {
  pe(20788, 8464, hc(8464) | 0);
  _a(106, 20788, n | 0) | 0;
  Ga(17024);
 }
 return 20788;
}

function Xi(b) {
 b = b | 0;
 if (!(a[17016] | 0)) if (Ia(17016) | 0) {
  pe(20776, 8380, hc(8380) | 0);
  _a(106, 20776, n | 0) | 0;
  Ga(17016);
 }
 return 20776;
}

function Ob(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Pb(bb(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function ml(a) {
 a = a | 0;
 a = c[a + 8 >> 2] | 0;
 if (!a) a = 1; else {
  a = Qc(a) | 0;
  if (!a) a = 4; else {
   Qc(a) | 0;
   a = 4;
  }
 }
 return a | 0;
}

function Ho(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 return zb[a & 31](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
}

function zo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 return rb[a & 7](b | 0, c | 0, d | 0, e | 0, +f) | 0;
}

function oi(b) {
 b = b | 0;
 if (!(a[16944] | 0)) if (Ia(16944) | 0) {
  de(19976, 14838, 11);
  _a(102, 19976, n | 0) | 0;
  Ga(16944);
 }
 return 19976;
}

function ni(b) {
 b = b | 0;
 if (!(a[16936] | 0)) if (Ia(16936) | 0) {
  de(19964, 14817, 20);
  _a(102, 19964, n | 0) | 0;
  Ga(16936);
 }
 return 19964;
}

function eo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function rn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 c[d >> 2] = b;
 b = c[624] | 0;
 tc(b, a, d) | 0;
 id(10, b) | 0;
 za();
}

function pi(b) {
 b = b | 0;
 if (!(a[16952] | 0)) if (Ia(16952) | 0) {
  de(19988, 14850, 8);
  _a(102, 19988, n | 0) | 0;
  Ga(16952);
 }
 return 19988;
}

function Uo(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 ca(11);
 return 0;
}

function el(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 9136;
 a = a + 8 | 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (cg() | 0)) Vc(c[a >> 2] | 0);
 return;
}

function uo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 mb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function El(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(hd() | 0) >> 2] | 0) + (b << 24 >> 24 << 2) >> 2] & 255;
 return b | 0;
}

function zj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function yj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function xj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function qn(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 ud(a);
 if (!(Za(c[5264] | 0, 0) | 0)) {
  i = b;
  return;
 } else rn(16275, b);
}

function qi(b) {
 b = b | 0;
 if (!(a[16960] | 0)) if (Ia(16960) | 0) {
  de(2e4, 14859, 8);
  _a(102, 2e4, n | 0) | 0;
  Ga(16960);
 }
 return 2e4;
}

function oj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function nj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function mj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Vj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Uj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Tj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Kj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Jj(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Ij(a, b) {
 a = a | 0;
 b = b | 0;
 b = 0;
 while (1) {
  if ((b | 0) == 3) break;
  c[a + (b << 2) >> 2] = 0;
  b = b + 1 | 0;
 }
 return;
}

function Gb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Cl(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(gd() | 0) >> 2] | 0) + ((b & 255) << 2) >> 2] & 255;
 return b | 0;
}

function cl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 a = d - c | 0;
 return (a >>> 0 < e >>> 0 ? a : e) | 0;
}

function Eo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return wb[a & 7](b | 0, c | 0, d | 0, e | 0) | 0;
}

function cg() {
 if (!(a[16880] | 0)) if (Ia(16880) | 0) {
  c[4789] = Pc(2147483647, 14107, 0) | 0;
  Ga(16880);
 }
 return c[4789] | 0;
}

function Jo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 ca(0);
 return 0;
}

function Qc(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = (Ta() | 0) + 180 | 0;
 d = c[b >> 2] | 0;
 if (a | 0) c[b >> 2] = a;
 return d | 0;
}

function In(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) En(0, b, d, e);
 return;
}

function Al(b) {
 b = b | 0;
 var d = 0;
 c[b >> 2] = 9204;
 d = c[b + 8 >> 2] | 0;
 if (d | 0) if (a[b + 12 >> 0] | 0) Xn(d);
 return;
}

function hc(a) {
 a = a | 0;
 var b = 0;
 b = a;
 while (1) if (!(c[b >> 2] | 0)) break; else b = b + 4 | 0;
 return b - a >> 2 | 0;
}

function vf(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 gn(b, a + 28 | 0);
 i = d;
 return c[b >> 2] | 0;
}

function em(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(hd() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function cm(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(gd() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function Uf(a, b) {
 a = a | 0;
 b = b | 0;
 a = c[a >> 2] | 0;
 b = Vf(b) | 0;
 return c[(c[a + 8 >> 2] | 0) + (b << 2) >> 2] | 0;
}

function sj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function rj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Zj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Yj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Oj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Nj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Io(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Ab[a & 7](b | 0, c | 0, d | 0, e | 0);
}

function Dj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Cj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function en() {
 if (!(a[17528] | 0)) if (Ia(17528) | 0) {
  dn() | 0;
  c[5243] = 20968;
  Ga(17528);
 }
 return c[5243] | 0;
}

function bn() {
 if (!(a[17360] | 0)) if (Ia(17360) | 0) {
  cn() | 0;
  c[5241] = 20960;
  Ga(17360);
 }
 return c[5241] | 0;
}

function Sc(a) {
 a = a | 0;
 if ((a + -48 | 0) >>> 0 < 10) a = 1; else a = ((a | 32) + -97 | 0) >>> 0 < 6;
 return a & 1 | 0;
}

function ul(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return vl(c, d, e, 1114111, 0) | 0;
}

function Uk(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Vk(c, d, e, 1114111, 0) | 0;
}

function pn() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!(ya(21056, 109) | 0)) {
  i = a;
  return;
 } else rn(16328, a);
}

function Po(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(6);
 return 0;
}

function Mo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 ca(3);
 return 0;
}

function to(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return lb[a & 31](b | 0, c | 0, d | 0) | 0;
}

function aj(a) {
 a = a | 0;
 var b = 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (cg() | 0)) Vc(c[a >> 2] | 0);
 return;
}

function rl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Rk(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Pb(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Qb() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function $k(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Wo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(13);
}

function Qb() {
 var a = 0;
 if (!(c[4384] | 0)) a = 17580; else a = c[(Ta() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function gc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = _b(a, b, c, 0, -2147483648) | 0;
 return a | 0;
}

function fc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = gc(a, b, c) | 0;
 return a | 0;
}

function Yb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = Zb(a, b, c) | 0;
 return a | 0;
}

function Wf(a) {
 a = a | 0;
 var b = 0;
 b = c[4786] | 0;
 c[4786] = b + 1;
 c[a + 4 >> 2] = b + 1;
 return;
}

function Yo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(15);
 return 0;
}

function Bo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 tb[a & 0](b | 0, c | 0, d | 0);
}

function _n(a) {
 a = a | 0;
 if (!a) a = 0; else a = (zn(a, 2408, 2464, 0) | 0) != 0;
 return a & 1 | 0;
}

function po(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ro(a, b, c, d, 0) | 0;
}

function Qo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = +e;
 ca(7);
 return 0;
}

function Zb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = _b(a, b, c, -1, -1) | 0;
 return a | 0;
}

function rd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Tc(0, a, b, c | 0 ? c : 17588) | 0;
}

function fn(a) {
 a = a | 0;
 var b = 0;
 b = c[(en() | 0) >> 2] | 0;
 c[a >> 2] = b;
 kn(b);
 return;
}

function tf(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = (c[a + 24 >> 2] | 0) == 0 | b;
 return;
}

function im(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b >>> 0 < 128 ? b & 255 : c) | 0;
}

function $d(a) {
 a = a | 0;
 yf(18176) | 0;
 yf(18344) | 0;
 Bf(18516) | 0;
 Bf(18684) | 0;
 return;
}

function Il(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b << 24 >> 24 > -1 ? b : c) | 0;
}

function Cc(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = Dc(a, b, 0) | 0;
 return a | 0;
}
function Bb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function gn(a, b) {
 a = a | 0;
 b = b | 0;
 b = c[b >> 2] | 0;
 c[a >> 2] = b;
 kn(b);
 return;
}

function Pf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 re(a, c, d);
 return;
}

function Lo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(2);
}

function Kf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 fe(a, c, d);
 return;
}

function Go(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return yb[a & 15](b | 0, c | 0) | 0;
}

function cd(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function dn() {
 var a = 0;
 a = c[(bn() | 0) >> 2] | 0;
 c[5242] = a;
 kn(a);
 return 20968;
}

function Vo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(12);
 return 0;
}

function rf(a) {
 a = a | 0;
 ze(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4 | 0);
 return;
}

function nf(a) {
 a = a | 0;
 ze(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4 | 0);
 return;
}

function jf(a) {
 a = a | 0;
 ze(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8 | 0);
 return;
}

function ef(a) {
 a = a | 0;
 ze(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8 | 0);
 return;
}

function If(a) {
 a = a | 0;
 if (a | 0) ob[c[(c[a >> 2] | 0) + 4 >> 2] & 127](a);
 return;
}

function Yc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return d | 0;
}

function sf(a) {
 a = a | 0;
 qf(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function of(a) {
 a = a | 0;
 mf(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function kn(a) {
 a = a | 0;
 a = a + 4 | 0;
 c[a >> 2] = (c[a >> 2] | 0) + 1;
 return;
}

function kf(a) {
 a = a | 0;
 hf(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function ff(a) {
 a = a | 0;
 df(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function ec(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function xo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 pb[a & 63](b | 0, c | 0);
}

function Ic(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+qc(a, b, 2));
}

function $c(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return ad(a, b, c) | 0;
}

function Zo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(16);
}

function Ff(a) {
 a = a | 0;
 a = a + 16 | 0;
 c[a >> 2] = c[a >> 2] | 1;
 return;
}

function Wc(a, b) {
 a = a | 0;
 b = b | 0;
 return (a + -48 | 0) >>> 0 < 10 | 0;
}

function se(b) {
 b = b | 0;
 if (a[b >> 0] & 1) vn(c[b + 8 >> 2] | 0);
 return;
}

function ge(b) {
 b = b | 0;
 if (a[b >> 0] & 1) vn(c[b + 8 >> 2] | 0);
 return;
}

function Xl(a, b) {
 a = a | 0;
 b = b | 0;
 pe(a, 9348, hc(9348) | 0);
 return;
}

function Wl(a, b) {
 a = a | 0;
 b = b | 0;
 pe(a, 9328, hc(9328) | 0);
 return;
}

function Re(a) {
 a = a | 0;
 c[a >> 2] = 6624;
 hn(a + 4 | 0);
 vn(a);
 return;
}

function De(a) {
 a = a | 0;
 c[a >> 2] = 6560;
 hn(a + 4 | 0);
 vn(a);
 return;
}

function tm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19120) | 0);
 return;
}

function an(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20920) | 0);
 return;
}

function _m(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20840) | 0);
 return;
}

function Zm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20832) | 0);
 return;
}

function Ym(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20824) | 0);
 return;
}

function Xm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20012) | 0);
 return;
}

function Wn() {
 var a = 0;
 a = c[5265] | 0;
 c[5265] = a + 0;
 return a | 0;
}

function Wm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20904) | 0);
 return;
}

function Vm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20896) | 0);
 return;
}

function Um(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20888) | 0);
 return;
}

function Tm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20880) | 0);
 return;
}

function Sm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20872) | 0);
 return;
}

function Rm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20864) | 0);
 return;
}

function Qm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20856) | 0);
 return;
}

function Pm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20848) | 0);
 return;
}

function Om(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19200) | 0);
 return;
}

function Nm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19192) | 0);
 return;
}

function Mm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19184) | 0);
 return;
}

function Lm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19160) | 0);
 return;
}

function Km(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19176) | 0);
 return;
}

function Im(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19148) | 0);
 return;
}

function Gm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20952) | 0);
 return;
}

function Fm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20944) | 0);
 return;
}

function Em(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20936) | 0);
 return;
}

function Dm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20928) | 0);
 return;
}

function Cm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19168) | 0);
 return;
}

function Bm(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19136) | 0);
 return;
}

function Am(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(19128) | 0);
 return;
}

function $m(a, b) {
 a = a | 0;
 b = b | 0;
 um(a, b, Vf(20912) | 0);
 return;
}

function Ko(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function we(a, b) {
 a = a | 0;
 b = b | 0;
 return te(a, b, hc(b) | 0) | 0;
}

function ke(a, b) {
 a = a | 0;
 b = b | 0;
 return he(a, b, Hc(b) | 0) | 0;
}

function Fb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Ao(a, b) {
 a = a | 0;
 b = b | 0;
 return sb[a & 63](b | 0) | 0;
}

function Te(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function Rl(a) {
 a = a | 0;
 c[a >> 2] = 9296;
 ge(a + 16 | 0);
 return;
}

function Kl(a) {
 a = a | 0;
 c[a >> 2] = 9256;
 ge(a + 12 | 0);
 return;
}

function Fe(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function $n() {
 var a = 0;
 a = Da(4) | 0;
 Yn(a);
 $a(a | 0, 2432, 91);
}

function Xb(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Tb(a);
 return;
}

function Vl(a, b) {
 a = a | 0;
 b = b | 0;
 ce(a, b + 16 | 0);
 return;
}

function Sb(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Tb(a);
 return;
}

function Qe(a) {
 a = a | 0;
 c[a >> 2] = 6624;
 hn(a + 4 | 0);
 return;
}

function Ol(a, b) {
 a = a | 0;
 b = b | 0;
 ce(a, b + 12 | 0);
 return;
}

function Ce(a) {
 a = a | 0;
 c[a >> 2] = 6560;
 hn(a + 4 | 0);
 return;
}

function gm(a, b) {
 a = a | 0;
 b = b | 0;
 return b << 24 >> 24 | 0;
}

function Ql(a, b) {
 a = a | 0;
 b = b | 0;
 de(a, 16076, 5);
 return;
}

function Pl(a, b) {
 a = a | 0;
 b = b | 0;
 de(a, 16071, 4);
 return;
}

function pj(a, b) {
 a = a | 0;
 b = b | 0;
 ee(a, 1, 45);
 return;
}

function Wj(a, b) {
 a = a | 0;
 b = b | 0;
 qe(a, 1, 45);
 return;
}

function Lj(a, b) {
 a = a | 0;
 b = b | 0;
 qe(a, 1, 45);
 return;
}

function Aj(a, b) {
 a = a | 0;
 b = b | 0;
 ee(a, 1, 45);
 return;
}

function So(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(9);
}

function wo(a, b) {
 a = a | 0;
 b = b | 0;
 ob[a & 127](b | 0);
}

function cn() {
 qm(17368, 1);
 c[5240] = 17368;
 return 20960;
}

function Xo(a, b) {
 a = a | 0;
 b = b | 0;
 ca(14);
 return 0;
}

function nc(a, b) {
 a = +a;
 b = b | 0;
 return +(+kc(a, b));
}

function Rc(a, b) {
 a = a | 0;
 b = b | 0;
 return Sc(a) | 0;
}

function Ec(a, b) {
 a = +a;
 b = b | 0;
 return +(+Fc(a, b));
}

function qf(a) {
 a = a | 0;
 ze(a + 4 | 0);
 vn(a);
 return;
}

function mf(a) {
 a = a | 0;
 ze(a + 4 | 0);
 vn(a);
 return;
}

function hn(a) {
 a = a | 0;
 ln(c[a >> 2] | 0) | 0;
 return;
}

function hf(a) {
 a = a | 0;
 ze(a + 8 | 0);
 vn(a);
 return;
}

function fj(a) {
 a = a | 0;
 aj(a + 8 | 0);
 vn(a);
 return;
}

function df(a) {
 a = a | 0;
 ze(a + 8 | 0);
 vn(a);
 return;
}

function bj(a) {
 a = a | 0;
 aj(a + 8 | 0);
 vn(a);
 return;
}

function be(a) {
 a = a | 0;
 Ca(13377, 13406, 1164, 16229);
}

function zd() {
 Ad(0);
 _a(96, 23136, n | 0) | 0;
 return;
}

function pm(a) {
 a = a | 0;
 Ca(16103, 16126, 303, 16229);
}

function oc(a, b) {
 a = +a;
 b = +b;
 return +(+pc(a, b));
}

function lc(a, b) {
 a = +a;
 b = +b;
 return +(+mc(a, b));
}

function Xc(a, b) {
 a = a | 0;
 b = b | 0;
 return -1 | 0;
}

function Eb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Gl(a, b) {
 a = a | 0;
 b = b | 0;
 return b | 0;
}

function Yn(a) {
 a = a | 0;
 c[a >> 2] = 9700;
 return;
}

function Ul(a) {
 a = a | 0;
 return c[a + 12 >> 2] | 0;
}

function bf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Tl(a) {
 a = a | 0;
 return c[a + 8 >> 2] | 0;
}

function Pe(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Nl(b) {
 b = b | 0;
 return a[b + 9 >> 0] | 0;
}

function Ne(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Ml(b) {
 b = b | 0;
 return a[b + 8 >> 0] | 0;
}

function $e(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function zl(a) {
 a = a | 0;
 xl(a);
 vn(a);
 return;
}

function pf(a) {
 a = a | 0;
 ze(a + 4 | 0);
 return;
}

function lf(a) {
 a = a | 0;
 ze(a + 4 | 0);
 return;
}

function gf(a) {
 a = a | 0;
 ze(a + 8 | 0);
 return;
}

function fl(a) {
 a = a | 0;
 el(a);
 vn(a);
 return;
}

function ej(a) {
 a = a | 0;
 aj(a + 8 | 0);
 return;
}

function cf(a) {
 a = a | 0;
 ze(a + 8 | 0);
 return;
}

function Wd(a) {
 a = a | 0;
 Qe(a);
 vn(a);
 return;
}

function Sl(a) {
 a = a | 0;
 Rl(a);
 vn(a);
 return;
}

function Pd(a) {
 a = a | 0;
 Qe(a);
 vn(a);
 return;
}

function Ll(a) {
 a = a | 0;
 Kl(a);
 vn(a);
 return;
}

function Jd(a) {
 a = a | 0;
 Ce(a);
 vn(a);
 return;
}

function Cd(a) {
 a = a | 0;
 Ce(a);
 vn(a);
 return;
}

function Bl(a) {
 a = a | 0;
 Al(a);
 vn(a);
 return;
}

function Ae(a) {
 a = a | 0;
 ze(a);
 vn(a);
 return;
}

function $i(a) {
 a = a | 0;
 aj(a + 8 | 0);
 return;
}

function Yk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Se(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Gk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Ee(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Oo(a, b) {
 a = a | 0;
 b = b | 0;
 ca(5);
}

function Nb(a) {
 a = a | 0;
 Ma(a | 0) | 0;
 Jn();
}

function Td(a) {
 a = a | 0;
 return Sd(a, 1) | 0;
}

function Rd(a) {
 a = a | 0;
 return Sd(a, 0) | 0;
}

function Gd(a) {
 a = a | 0;
 return Fd(a, 1) | 0;
}

function Ed(a) {
 a = a | 0;
 return Fd(a, 0) | 0;
}

function Sj(a) {
 a = a | 0;
 return 2147483647;
}

function Rj(a) {
 a = a | 0;
 return 2147483647;
}

function Hj(a) {
 a = a | 0;
 return 2147483647;
}

function Gj(a) {
 a = a | 0;
 return 2147483647;
}

function Ro(a) {
 a = a | 0;
 ca(8);
 return 0;
}

function xk(a) {
 a = a | 0;
 vn(a);
 return;
}

function xh(a) {
 a = a | 0;
 vn(a);
 return;
}

function vn(a) {
 a = a | 0;
 ud(a);
 return;
}

function un(a) {
 a = a | 0;
 vn(a);
 return;
}

function uj(a) {
 a = a | 0;
 vn(a);
 return;
}

function si(a) {
 a = a | 0;
 vn(a);
 return;
}

function rk(a) {
 a = a | 0;
 vn(a);
 return;
}

function mm(a) {
 a = a | 0;
 vn(a);
 return;
}

function lm(a) {
 a = a | 0;
 vn(a);
 return;
}

function km(a) {
 a = a | 0;
 vn(a);
 return;
}

function jk(a) {
 a = a | 0;
 vn(a);
 return;
}

function jj(a) {
 a = a | 0;
 vn(a);
 return;
}

function gh(a) {
 a = a | 0;
 vn(a);
 return;
}

function Zl(a) {
 a = a | 0;
 vn(a);
 return;
}

function Yl(a) {
 a = a | 0;
 vn(a);
 return;
}

function Xn(a) {
 a = a | 0;
 vn(a);
 return;
}

function Xk(a) {
 a = a | 0;
 vn(a);
 return;
}

function Vc(a) {
 a = a | 0;
 ud(a);
 return;
}

function Sf(a) {
 a = a | 0;
 vn(a);
 return;
}

function Qj(a) {
 a = a | 0;
 vn(a);
 return;
}

function On(a) {
 a = a | 0;
 vn(a);
 return;
}

function Nf(a) {
 a = a | 0;
 vn(a);
 return;
}

function Mn(a) {
 a = a | 0;
 vn(a);
 return;
}

function Mk(a) {
 a = a | 0;
 vn(a);
 return;
}

function Kh(a) {
 a = a | 0;
 vn(a);
 return;
}

function Ik(a) {
 a = a | 0;
 vn(a);
 return;
}

function Hg(a) {
 a = a | 0;
 vn(a);
 return;
}

function Hf(a) {
 a = a | 0;
 vn(a);
 return;
}

function Fn(a) {
 a = a | 0;
 vn(a);
 return;
}

function Fj(a) {
 a = a | 0;
 vn(a);
 return;
}

function Dk(a) {
 a = a | 0;
 vn(a);
 return;
}

function $j(a) {
 a = a | 0;
 vn(a);
 return;
}

function Nn(a) {
 a = a | 0;
 return 16755;
}

function Co(a) {
 a = a | 0;
 ub[a & 3]();
}

function wj(a) {
 a = a | 0;
 return 127;
}

function vj(a) {
 a = a | 0;
 return 127;
}

function lj(a) {
 a = a | 0;
 return 127;
}

function kj(a) {
 a = a | 0;
 return 127;
}

function Ze(a) {
 a = a | 0;
 return -1;
}

function Le(a) {
 a = a | 0;
 return -1;
}

function wl(a) {
 a = a | 0;
 return 4;
}

function tl(a) {
 a = a | 0;
 return 0;
}

function ti(a) {
 a = a | 0;
 return 2;
}

function sl(a) {
 a = a | 0;
 return 0;
}

function qj(a) {
 a = a | 0;
 return 0;
}

function kl(a) {
 a = a | 0;
 return 0;
}

function dl(a) {
 a = a | 0;
 return 1;
}

function bl(a) {
 a = a | 0;
 return 1;
}

function al(a) {
 a = a | 0;
 return 1;
}

function Xj(a) {
 a = a | 0;
 return 0;
}

function Xe(a) {
 a = a | 0;
 return 0;
}

function Wk(a) {
 a = a | 0;
 return 4;
}

function We(a) {
 a = a | 0;
 return 0;
}

function Uc(a) {
 a = a | 0;
 return 0;
}

function Tk(a) {
 a = a | 0;
 return 0;
}

function Sk(a) {
 a = a | 0;
 return 0;
}

function Mj(a) {
 a = a | 0;
 return 0;
}

function Lh(a) {
 a = a | 0;
 return 2;
}

function Je(a) {
 a = a | 0;
 return 0;
}

function Ie(a) {
 a = a | 0;
 return 0;
}

function Gc(a) {
 a = a | 0;
 return 0;
}

function Bj(a) {
 a = a | 0;
 return 0;
}

function xn(a) {
 a = a | 0;
 return;
}

function wn(a) {
 a = a | 0;
 return;
}

function wk(a) {
 a = a | 0;
 return;
}

function wh(a) {
 a = a | 0;
 return;
}

function tn(a) {
 a = a | 0;
 return;
}

function tj(a) {
 a = a | 0;
 return;
}

function sn(a) {
 a = a | 0;
 return;
}

function ri(a) {
 a = a | 0;
 return;
}

function qk(a) {
 a = a | 0;
 return;
}

function om(a) {
 a = a | 0;
 return;
}

function jn(a) {
 a = a | 0;
 return;
}

function ik(a) {
 a = a | 0;
 return;
}

function ij(a) {
 a = a | 0;
 return;
}

function fh(a) {
 a = a | 0;
 return;
}

function bk(a) {
 a = a | 0;
 return;
}

function _j(a) {
 a = a | 0;
 return;
}

function Tb(a) {
 a = a | 0;
 return;
}

function Rf(a) {
 a = a | 0;
 return;
}

function Pj(a) {
 a = a | 0;
 return;
}

function Ln(a) {
 a = a | 0;
 return;
}

function Lk(a) {
 a = a | 0;
 return;
}

function Kn(a) {
 a = a | 0;
 return;
}

function Jh(a) {
 a = a | 0;
 return;
}

function Hk(a) {
 a = a | 0;
 return;
}

function Gg(a) {
 a = a | 0;
 return;
}

function Gf(a) {
 a = a | 0;
 return;
}

function Ej(a) {
 a = a | 0;
 return;
}

function Ck(a) {
 a = a | 0;
 return;
}

function No(a) {
 a = a | 0;
 ca(4);
}
function Mf(a) {
 a = a | 0;
 return;
}

function Ib(a) {
 a = a | 0;
 D = a;
}

function Db(a) {
 a = a | 0;
 i = a;
}

function Jb() {
 return D | 0;
}

function Cb() {
 return i | 0;
}

function hd() {
 return 4740;
}

function gd() {
 return 3200;
}

function fd() {
 return 3196;
}

function ae() {
 return;
}

function To() {
 ca(10);
}

// EMSCRIPTEN_END_FUNCS

 var kb = [ Jo, cj, gj, ak, gk, kk, ok, Jo ];
 var lb = [ Ko, Rb, Ub, Vb, Wb, sc, Fe, Ke, Oe, Md, Te, Ye, af, Zd, Lf, Qf, Ek, Jk, Dl, Fl, Il, _l, dm, fm, im, yn, $c, Ko, Ko, Ko, Ko, Ko ];
 var mb = [ Lo, Hn, Cn, Rn ];
 var nb = [ Mo, sk, yk, Mo ];
 var ob = [ No, Ce, Cd, Jd, Qe, Pd, Wd, ze, Ae, De, Re, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, Gf, Hf, If, Mf, Nf, Rf, Sf, Gg, Hg, fh, gh, wh, xh, Jh, Kh, ri, si, $i, bj, ej, fj, ij, jj, tj, uj, Ej, Fj, Pj, Qj, _j, $j, ik, jk, qk, rk, wk, xk, Ck, Dk, Hk, Ik, Lk, Mk, Xk, el, fl, xl, zl, Al, Bl, Kl, Ll, Rl, Sl, Yl, Zl, km, lm, mm, sn, Fn, wn, xn, un, Kn, Mn, On, Sb, Xb, $d, Wf, Xf, ii, ki, mi, ge, Si, Ui, Wi, se, bk, ud, qn, No, No, No, No, No, No, No, No, No, No, No, No, No, No, No, No, No, No ];
 var pb = [ Oo, Dd, Kd, Qd, Xd, Ee, Se, mj, nj, oj, pj, rj, sj, xj, yj, zj, Aj, Cj, Dj, Ij, Jj, Kj, Lj, Nj, Oj, Tj, Uj, Vj, Wj, Yj, Zj, Gk, Yk, Ol, Pl, Ql, Vl, Wl, Xl, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo ];
 var qb = [ Po, Tf, Zf, eg, hg, kg, ng, qg, tg, yg, Bg, Eg, Ig, Kg, Og, Qg, Sg, Ug, Wg, Yg, ah, ch, eh, nh, ph, Ch, Eh, Mh, Oh, Ph, Rh, Th, ui, wi, xi, zi, Bi, vk, Bk, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po, Po ];
 var rb = [ Qo, qh, uh, Fh, Hh, Qo, Qo, Qo ];
 var sb = [ Ro, Ob, Ie, Je, Ed, Gd, Ld, Le, Me, We, Xe, Rd, Td, Yd, Ze, _e, Lh, hi, ji, li, ni, oi, pi, qi, ti, Ri, Ti, Vi, Xi, Yi, Zi, _i, kj, lj, qj, vj, wj, Bj, Gj, Hj, Mj, Rj, Sj, Xj, Sk, Tk, Wk, jl, kl, ml, Ml, Nl, Tl, Ul, al, bl, dl, sl, tl, wl, Nn, Ro, Ro, Ro ];
 var tb = [ So ];
 var ub = [ To, nn, pn, To ];
 var vb = [ Uo, Wh, Ei, Nk, Pk, gl, hl, Zk, _k, nl, pl, Uo, Uo, Uo, Uo, Uo ];
 var wb = [ Vo, Hl, $l, am, bm, hm, Vo, Vo ];
 var xb = [ Wo, Ge, Ue, Fk, Kk, Gn, An, Pn ];
 var yb = [ Xo, Hd, Pe, Ne, Nd, Ud, bf, $e, _d, Cl, El, Gl, cm, em, gm, Xo ];
 var zb = [ Yo, Jf, Of, hh, ih, oh, vh, yh, zh, Dh, Ih, Rk, Uk, il, ll, Jl, jm, $k, cl, rl, ul, Yo, Yo, Yo, Yo, Yo, Yo, Yo, Yo, Yo, Yo, Yo ];
 var Ab = [ Zo, He, Ve, Kf, Pf, In, Dn, Tn ];
 return {
  ___cxa_can_catch: Zn,
  _free: ud,
  _main: Kb,
  ___cxa_is_pointer_type: _n,
  _i64Add: eo,
  _memmove: io,
  _i64Subtract: bo,
  _memset: co,
  _malloc: td,
  _memcpy: go,
  _bitshift64Lshr: fo,
  _fflush: dd,
  ___errno_location: Qb,
  _bitshift64Shl: ho,
  __GLOBAL__I_000101: zd,
  __GLOBAL__sub_I_iostream_cpp: ae,
  runPostSets: ao,
  stackAlloc: Bb,
  stackSave: Cb,
  stackRestore: Db,
  establishStackSpace: Eb,
  setThrew: Fb,
  setTempRet0: Ib,
  getTempRet0: Jb,
  dynCall_iiiiiiii: so,
  dynCall_iiii: to,
  dynCall_viiiii: uo,
  dynCall_iiiiiid: vo,
  dynCall_vi: wo,
  dynCall_vii: xo,
  dynCall_iiiiiii: yo,
  dynCall_iiiiid: zo,
  dynCall_ii: Ao,
  dynCall_viii: Bo,
  dynCall_v: Co,
  dynCall_iiiiiiiii: Do,
  dynCall_iiiii: Eo,
  dynCall_viiiiii: Fo,
  dynCall_iii: Go,
  dynCall_iiiiii: Ho,
  dynCall_viiii: Io
 };
})


;