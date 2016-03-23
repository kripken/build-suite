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
 var fa = env.invoke_vi;
 var ga = env.invoke_vii;
 var ha = env.invoke_ii;
 var ia = env.invoke_iiiii;
 var ja = env.invoke_iii;
 var ka = env._pthread_cleanup_pop;
 var la = env.___syscall221;
 var ma = env._llvm_pow_f64;
 var na = env.___syscall265;
 var oa = env._signal;
 var pa = env.___syscall63;
 var qa = env._abort;
 var ra = env.___syscall40;
 var sa = env._llvm_fabs_f64;
 var ta = env._pthread_cleanup_push;
 var ua = env._difftime;
 var va = env._system;
 var wa = env.___buildEnvironment;
 var xa = env._longjmp;
 var ya = env.__addDays;
 var za = env._localtime_r;
 var Aa = env._tzset;
 var Ba = env.___setErrNo;
 var Ca = env._sbrk;
 var Da = env.___syscall330;
 var Ea = env._emscripten_memcpy_big;
 var Fa = env.__exit;
 var Ga = env._mktime;
 var Ha = env._strftime;
 var Ia = env._clock;
 var Ja = env.__arraySum;
 var Ka = env._gmtime;
 var La = env._getenv;
 var Ma = env.___syscall33;
 var Na = env.___syscall54;
 var Oa = env.___unlock;
 var Pa = env.__isLeapYear;
 var Qa = env.___syscall38;
 var Ra = env.___syscall10;
 var Sa = env._gmtime_r;
 var Ta = env.___lock;
 var Ua = env.___syscall6;
 var Va = env.___syscall5;
 var Wa = env._time;
 var Xa = env.___syscall140;
 var Ya = env._localtime;
 var Za = env._exit;
 var _a = env.___syscall145;
 var $a = env.___syscall146;
 var ab = ba(0);
 const bb = ba(0);
 
// EMSCRIPTEN_START_FUNCS

function qe(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 J = i;
 i = i + 16 | 0;
 A = J;
 I = b + 60 | 0;
 c[(c[I >> 2] | 0) + 4 >> 2] = 0;
 H = b + 56 | 0;
 z = b + 4 | 0;
 a : while (1) {
  g = c[b >> 2] | 0;
  b : while (1) {
   switch (g | 0) {
   case 91:
    {
     F = 35;
     break a;
    }
   case 61:
    {
     F = 39;
     break a;
    }
   case 60:
    {
     F = 47;
     break a;
    }
   case 62:
    {
     F = 55;
     break a;
    }
   case 126:
    {
     F = 63;
     break a;
    }
   case 58:
    {
     F = 71;
     break a;
    }
   case 39:
   case 34:
    {
     r = g;
     F = 79;
     break a;
    }
   case 46:
    {
     F = 202;
     break a;
    }
   case 57:
   case 56:
   case 55:
   case 54:
   case 53:
   case 52:
   case 51:
   case 50:
   case 49:
   case 48:
    {
     m = g;
     break a;
    }
   case -1:
    {
     f = 286;
     F = 346;
     break a;
    }
   case 13:
   case 10:
    {
     F = 4;
     break b;
    }
   case 45:
    break b;
   case 11:
   case 9:
   case 12:
   case 32:
    break;
   default:
    {
     F = 324;
     break a;
    }
   }
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) g = de(f) | 0; else {
    l = f + 4 | 0;
    g = c[l >> 2] | 0;
    c[l >> 2] = g + 1;
    g = d[g >> 0] | 0;
   }
   c[b >> 2] = g;
  }
  if ((F | 0) == 4) {
   F = 0;
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) f = de(f) | 0; else {
    l = f + 4 | 0;
    f = c[l >> 2] | 0;
    c[l >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   switch (f | 0) {
   case 13:
   case 10:
    {
     if ((f | 0) != (g | 0)) {
      f = c[H >> 2] | 0;
      l = c[f >> 2] | 0;
      c[f >> 2] = l + -1;
      if (!l) f = de(f) | 0; else {
       l = f + 4 | 0;
       f = c[l >> 2] | 0;
       c[l >> 2] = f + 1;
       f = d[f >> 0] | 0;
      }
      c[b >> 2] = f;
     }
     break;
    }
   default:
    {}
   }
   l = c[z >> 2] | 0;
   c[z >> 2] = l + 1;
   if ((l | 0) > 2147483643) {
    F = 14;
    break;
   } else continue;
  }
  f = c[H >> 2] | 0;
  l = c[f >> 2] | 0;
  c[f >> 2] = l + -1;
  if (!l) f = de(f) | 0; else {
   l = f + 4 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  if ((f | 0) != 45) {
   f = 45;
   F = 346;
   break;
  }
  f = c[H >> 2] | 0;
  l = c[f >> 2] | 0;
  c[f >> 2] = l + -1;
  if (!l) f = de(f) | 0; else {
   l = f + 4 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  do if ((f | 0) == 91) {
   f = re(b) | 0;
   c[(c[I >> 2] | 0) + 4 >> 2] = 0;
   if ((f | 0) > -1) {
    se(b, 0, f);
    c[(c[I >> 2] | 0) + 4 >> 2] = 0;
    continue a;
   } else {
    f = c[b >> 2] | 0;
    break;
   }
  } while (0);
  while (1) {
   switch (f | 0) {
   case -1:
   case 13:
   case 10:
    continue a;
   default:
    {}
   }
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) f = de(f) | 0; else {
    l = f + 4 | 0;
    f = c[l >> 2] | 0;
    c[l >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
  }
 }
 switch (F | 0) {
 case 14:
  {
   me(b, 6746);
   break;
  }
 case 35:
  {
   f = re(b) | 0;
   if ((f | 0) > -1) {
    se(b, e, f);
    b = 289;
    i = J;
    return b | 0;
   }
   if ((f | 0) == -1) {
    b = 91;
    i = J;
    return b | 0;
   } else ne(b, 6818, 289);
   break;
  }
 case 39:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 61;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 281;
   i = J;
   return b | 0;
  }
 case 47:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 60;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 283;
   i = J;
   return b | 0;
  }
 case 55:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 62;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 282;
   i = J;
   return b | 0;
  }
 case 63:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 126;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 284;
   i = J;
   return b | 0;
  }
 case 71:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 58) {
    b = 58;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = de(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 285;
   i = J;
   return b | 0;
  }
 case 79:
  {
   h = c[I >> 2] | 0;
   l = h + 4 | 0;
   f = c[l >> 2] | 0;
   k = h + 8 | 0;
   j = c[k >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > j >>> 0) {
    if (j >>> 0 > 2147483645) ne(b, 6665, 0);
    g = j << 1;
    f = c[b + 52 >> 2] | 0;
    if ((g | 0) == -2) Kb(f); else {
     q = yb(f, c[h >> 2] | 0, j, g) | 0;
     c[h >> 2] = q;
     c[k >> 2] = g;
     p = c[l >> 2] | 0;
     break;
    }
   } else {
    p = f;
    q = c[h >> 2] | 0;
   } while (0);
   s = r & 255;
   c[l >> 2] = p + 1;
   a[q + p >> 0] = s;
   f = c[H >> 2] | 0;
   G = c[f >> 2] | 0;
   c[f >> 2] = G + -1;
   if (!G) f = de(f) | 0; else {
    G = f + 4 | 0;
    f = c[G >> 2] | 0;
    c[G >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   c : do if ((f | 0) != (r | 0)) {
    n = b + 52 | 0;
    o = A + 4 | 0;
    p = A + 8 | 0;
    l = f;
    d : while (1) {
     e : do switch (l | 0) {
     case -1:
      {
       F = 92;
       break d;
      }
     case 13:
     case 10:
      {
       F = 93;
       break d;
      }
     case 92:
      {
       f = c[H >> 2] | 0;
       G = c[f >> 2] | 0;
       c[f >> 2] = G + -1;
       if (!G) g = de(f) | 0; else {
        G = f + 4 | 0;
        g = c[G >> 2] | 0;
        c[G >> 2] = g + 1;
        g = d[g >> 0] | 0;
       }
       c[b >> 2] = g;
       do switch (g | 0) {
       case -1:
        {
         f = -1;
         break e;
        }
       case 97:
        {
         g = 7;
         F = 164;
         break;
        }
       case 98:
        {
         g = 8;
         F = 164;
         break;
        }
       case 102:
        {
         g = 12;
         F = 164;
         break;
        }
       case 110:
        {
         g = 10;
         F = 164;
         break;
        }
       case 114:
        {
         g = 13;
         F = 164;
         break;
        }
       case 116:
        {
         g = 9;
         F = 164;
         break;
        }
       case 118:
        {
         g = 11;
         F = 164;
         break;
        }
       case 120:
        {
         c[A >> 2] = 120;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = de(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         c[o >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 16)) {
          f = 2;
          F = 108;
          break d;
         }
         g = we(f) | 0;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = de(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         c[p >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 16)) {
          f = 3;
          F = 108;
          break d;
         }
         g = (we(f) | 0) + (g << 4) | 0;
         F = 164;
         break;
        }
       case 13:
       case 10:
        {
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = de(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         switch (f | 0) {
         case 13:
         case 10:
          {
           if ((f | 0) != (g | 0)) {
            f = c[H >> 2] | 0;
            G = c[f >> 2] | 0;
            c[f >> 2] = G + -1;
            if (!G) f = de(f) | 0; else {
             G = f + 4 | 0;
             f = c[G >> 2] | 0;
             c[G >> 2] = f + 1;
             f = d[f >> 0] | 0;
            }
            c[b >> 2] = f;
           }
           break;
          }
         default:
          {}
         }
         G = c[z >> 2] | 0;
         c[z >> 2] = G + 1;
         if ((G | 0) > 2147483643) {
          F = 124;
          break d;
         } else g = 10;
         break;
        }
       case 39:
       case 34:
       case 92:
        {
         F = 164;
         break;
        }
       case 122:
        {
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = de(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 8)) break e;
         while (1) {
          switch (f | 0) {
          case 13:
          case 10:
           {
            g = c[H >> 2] | 0;
            G = c[g >> 2] | 0;
            c[g >> 2] = G + -1;
            if (!G) g = de(g) | 0; else {
             G = g + 4 | 0;
             g = c[G >> 2] | 0;
             c[G >> 2] = g + 1;
             g = d[g >> 0] | 0;
            }
            c[b >> 2] = g;
            switch (g | 0) {
            case 13:
            case 10:
             {
              if ((g | 0) != (f | 0)) {
               f = c[H >> 2] | 0;
               G = c[f >> 2] | 0;
               c[f >> 2] = G + -1;
               if (!G) f = de(f) | 0; else {
                G = f + 4 | 0;
                f = c[G >> 2] | 0;
                c[G >> 2] = f + 1;
                f = d[f >> 0] | 0;
               }
               c[b >> 2] = f;
              }
              break;
             }
            default:
             f = g;
            }
            G = c[z >> 2] | 0;
            c[z >> 2] = G + 1;
            if ((G | 0) > 2147483643) {
             F = 141;
             break d;
            }
            break;
           }
          default:
           {
            f = c[H >> 2] | 0;
            G = c[f >> 2] | 0;
            c[f >> 2] = G + -1;
            if (!G) f = de(f) | 0; else {
             G = f + 4 | 0;
             f = c[G >> 2] | 0;
             c[G >> 2] = f + 1;
             f = d[f >> 0] | 0;
            }
            c[b >> 2] = f;
           }
          }
          if (!(a[3999 + (f + 1) >> 0] & 8)) break e;
         }
        }
       default:
        {
         if (!(a[3999 + (g + 1) >> 0] & 2)) {
          F = 148;
          break d;
         }
         c[A >> 2] = g;
         g = g + -48 | 0;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = de(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 2)) f = 1; else {
          c[o >> 2] = f;
          g = (g * 10 | 0) + -48 + f | 0;
          f = c[H >> 2] | 0;
          G = c[f >> 2] | 0;
          c[f >> 2] = G + -1;
          if (!G) h = de(f) | 0; else {
           G = f + 4 | 0;
           h = c[G >> 2] | 0;
           c[G >> 2] = h + 1;
           h = d[h >> 0] | 0;
          }
          c[b >> 2] = h;
          if (!(a[3999 + (h + 1) >> 0] & 2)) f = 2; else {
           c[p >> 2] = h;
           f = c[H >> 2] | 0;
           G = c[f >> 2] | 0;
           c[f >> 2] = G + -1;
           if (!G) f = de(f) | 0; else {
            G = f + 4 | 0;
            f = c[G >> 2] | 0;
            c[G >> 2] = f + 1;
            f = d[f >> 0] | 0;
           }
           c[b >> 2] = f;
           f = 3;
           g = (g * 10 | 0) + -48 + h | 0;
          }
         }
         if ((g | 0) > 255) {
          F = 154;
          break d;
         }
        }
       } while (0);
       if ((F | 0) == 164) {
        F = 0;
        f = c[H >> 2] | 0;
        G = c[f >> 2] | 0;
        c[f >> 2] = G + -1;
        if (!G) f = de(f) | 0; else {
         G = f + 4 | 0;
         f = c[G >> 2] | 0;
         c[G >> 2] = f + 1;
         f = d[f >> 0] | 0;
        }
        c[b >> 2] = f;
       }
       l = c[I >> 2] | 0;
       m = l + 4 | 0;
       h = c[m >> 2] | 0;
       k = l + 8 | 0;
       j = c[k >> 2] | 0;
       if ((h + 1 | 0) >>> 0 > j >>> 0) {
        if (j >>> 0 > 2147483645) {
         F = 171;
         break d;
        }
        h = j << 1;
        f = c[n >> 2] | 0;
        if ((h | 0) == -2) {
         F = 173;
         break d;
        }
        f = yb(f, c[l >> 2] | 0, j, h) | 0;
        c[l >> 2] = f;
        c[k >> 2] = h;
        h = c[m >> 2] | 0;
       } else f = c[l >> 2] | 0;
       c[m >> 2] = h + 1;
       a[f + h >> 0] = g;
       f = c[b >> 2] | 0;
       break;
      }
     default:
      {
       k = c[I >> 2] | 0;
       m = k + 4 | 0;
       g = c[m >> 2] | 0;
       j = k + 8 | 0;
       h = c[j >> 2] | 0;
       if ((g + 1 | 0) >>> 0 > h >>> 0) {
        if (h >>> 0 > 2147483645) {
         F = 179;
         break d;
        }
        g = h << 1;
        f = c[n >> 2] | 0;
        if ((g | 0) == -2) {
         F = 181;
         break d;
        }
        f = yb(f, c[k >> 2] | 0, h, g) | 0;
        c[k >> 2] = f;
        c[j >> 2] = g;
        g = c[m >> 2] | 0;
       } else f = c[k >> 2] | 0;
       c[m >> 2] = g + 1;
       a[f + g >> 0] = l;
       f = c[H >> 2] | 0;
       G = c[f >> 2] | 0;
       c[f >> 2] = G + -1;
       if (!G) f = de(f) | 0; else {
        G = f + 4 | 0;
        f = c[G >> 2] | 0;
        c[G >> 2] = f + 1;
        f = d[f >> 0] | 0;
       }
       c[b >> 2] = f;
      }
     } while (0);
     if ((f | 0) == (r | 0)) break c; else l = f;
    }
    switch (F | 0) {
    case 92:
     {
      ne(b, 6848, 286);
      break;
     }
    case 93:
     {
      ne(b, 6848, 289);
      break;
     }
    case 108:
     {
      ue(b, A, f, 6866);
      break;
     }
    case 124:
     {
      me(b, 6746);
      break;
     }
    case 141:
     {
      me(b, 6746);
      break;
     }
    case 148:
     {
      ue(b, b, 1, 6893);
      break;
     }
    case 154:
     {
      ue(b, A, f, 6917);
      break;
     }
    case 171:
     {
      ne(b, 6665, 0);
      break;
     }
    case 173:
     {
      Kb(f);
      break;
     }
    case 179:
     {
      ne(b, 6665, 0);
      break;
     }
    case 181:
     {
      Kb(f);
      break;
     }
    }
   } while (0);
   h = c[I >> 2] | 0;
   l = h + 4 | 0;
   f = c[l >> 2] | 0;
   k = h + 8 | 0;
   j = c[k >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > j >>> 0) {
    if (j >>> 0 > 2147483645) ne(b, 6665, 0);
    g = j << 1;
    f = c[b + 52 >> 2] | 0;
    if ((g | 0) == -2) Kb(f); else {
     C = yb(f, c[h >> 2] | 0, j, g) | 0;
     c[h >> 2] = C;
     c[k >> 2] = g;
     B = c[l >> 2] | 0;
     break;
    }
   } else {
    B = f;
    C = c[h >> 2] | 0;
   } while (0);
   c[l >> 2] = B + 1;
   a[C + B >> 0] = s;
   f = c[H >> 2] | 0;
   H = c[f >> 2] | 0;
   c[f >> 2] = H + -1;
   if (!H) f = de(f) | 0; else {
    H = f + 4 | 0;
    f = c[H >> 2] | 0;
    c[H >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   j = c[I >> 2] | 0;
   h = c[b + 52 >> 2] | 0;
   j = Lb(h, (c[j >> 2] | 0) + 1 | 0, (c[j + 4 >> 2] | 0) + -2 | 0) | 0;
   k = h + 8 | 0;
   f = c[k >> 2] | 0;
   c[k >> 2] = f + 16;
   c[f >> 2] = j;
   c[f + 8 >> 2] = d[j + 4 >> 0] | 64;
   f = te(h, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
   g = f + 8 | 0;
   if (!(c[g >> 2] | 0)) {
    c[f >> 2] = 1;
    c[g >> 2] = 1;
    if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(h);
   }
   c[k >> 2] = (c[k >> 2] | 0) + -16;
   c[e >> 2] = j;
   b = 289;
   i = J;
   return b | 0;
  }
 case 202:
  {
   h = c[I >> 2] | 0;
   l = h + 4 | 0;
   f = c[l >> 2] | 0;
   k = h + 8 | 0;
   j = c[k >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > j >>> 0) {
    if (j >>> 0 > 2147483645) ne(b, 6665, 0);
    g = j << 1;
    f = c[b + 52 >> 2] | 0;
    if ((g | 0) == -2) Kb(f); else {
     o = yb(f, c[h >> 2] | 0, j, g) | 0;
     c[h >> 2] = o;
     c[k >> 2] = g;
     n = c[l >> 2] | 0;
     break;
    }
   } else {
    n = f;
    o = c[h >> 2] | 0;
   } while (0);
   c[l >> 2] = n + 1;
   a[o + n >> 0] = 46;
   f = c[H >> 2] | 0;
   F = c[f >> 2] | 0;
   c[f >> 2] = F + -1;
   if (!F) m = de(f) | 0; else {
    F = f + 4 | 0;
    m = c[F >> 2] | 0;
    c[F >> 2] = m + 1;
    m = d[m >> 0] | 0;
   }
   c[b >> 2] = m;
   if (m | 0) if (Pl(14775, m, 2) | 0) {
    h = c[I >> 2] | 0;
    l = h + 4 | 0;
    f = c[l >> 2] | 0;
    k = h + 8 | 0;
    j = c[k >> 2] | 0;
    do if ((f + 1 | 0) >>> 0 > j >>> 0) {
     if (j >>> 0 > 2147483645) ne(b, 6665, 0);
     g = j << 1;
     f = c[b + 52 >> 2] | 0;
     if ((g | 0) == -2) Kb(f); else {
      s = yb(f, c[h >> 2] | 0, j, g) | 0;
      c[h >> 2] = s;
      c[k >> 2] = g;
      r = c[l >> 2] | 0;
      break;
     }
    } else {
     r = f;
     s = c[h >> 2] | 0;
    } while (0);
    c[l >> 2] = r + 1;
    a[s + r >> 0] = m;
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) m = de(f) | 0; else {
     e = f + 4 | 0;
     m = c[e >> 2] | 0;
     c[e >> 2] = m + 1;
     m = d[m >> 0] | 0;
    }
    c[b >> 2] = m;
    if (!m) {
     b = 279;
     i = J;
     return b | 0;
    }
    if (!(Pl(14775, m, 2) | 0)) {
     b = 279;
     i = J;
     return b | 0;
    }
    h = c[I >> 2] | 0;
    l = h + 4 | 0;
    f = c[l >> 2] | 0;
    k = h + 8 | 0;
    j = c[k >> 2] | 0;
    do if ((f + 1 | 0) >>> 0 > j >>> 0) {
     if (j >>> 0 > 2147483645) ne(b, 6665, 0);
     g = j << 1;
     f = c[b + 52 >> 2] | 0;
     if ((g | 0) == -2) Kb(f); else {
      u = yb(f, c[h >> 2] | 0, j, g) | 0;
      c[h >> 2] = u;
      c[k >> 2] = g;
      t = c[l >> 2] | 0;
      break;
     }
    } else {
     t = f;
     u = c[h >> 2] | 0;
    } while (0);
    c[l >> 2] = t + 1;
    a[u + t >> 0] = m;
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) f = de(f) | 0; else {
     e = f + 4 | 0;
     f = c[e >> 2] | 0;
     c[e >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    b = 280;
    i = J;
    return b | 0;
   }
   if (!(a[3999 + (m + 1) >> 0] & 2)) {
    b = 46;
    i = J;
    return b | 0;
   }
   break;
  }
 case 324:
  {
   if (!(a[3999 + (g + 1) >> 0] & 1)) {
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) f = de(f) | 0; else {
     e = f + 4 | 0;
     f = c[e >> 2] | 0;
     c[e >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    b = g;
    i = J;
    return b | 0;
   }
   o = b + 52 | 0;
   while (1) {
    l = c[I >> 2] | 0;
    n = l + 4 | 0;
    h = c[n >> 2] | 0;
    k = l + 8 | 0;
    j = c[k >> 2] | 0;
    if ((h + 1 | 0) >>> 0 > j >>> 0) {
     if (j >>> 0 > 2147483645) {
      F = 329;
      break;
     }
     h = j << 1;
     f = c[o >> 2] | 0;
     if ((h | 0) == -2) {
      F = 331;
      break;
     }
     f = yb(f, c[l >> 2] | 0, j, h) | 0;
     c[l >> 2] = f;
     c[k >> 2] = h;
     h = c[n >> 2] | 0;
    } else f = c[l >> 2] | 0;
    c[n >> 2] = h + 1;
    a[f + h >> 0] = g;
    f = c[H >> 2] | 0;
    F = c[f >> 2] | 0;
    c[f >> 2] = F + -1;
    if (!F) f = de(f) | 0; else {
     F = f + 4 | 0;
     f = c[F >> 2] | 0;
     c[F >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    if (!(a[3999 + (f + 1) >> 0] & 3)) {
     F = 337;
     break;
    } else g = f;
   }
   if ((F | 0) == 329) ne(b, 6665, 0); else if ((F | 0) == 331) Kb(f); else if ((F | 0) == 337) {
    j = c[I >> 2] | 0;
    h = c[o >> 2] | 0;
    j = Lb(h, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
    k = h + 8 | 0;
    f = c[k >> 2] | 0;
    c[k >> 2] = f + 16;
    c[f >> 2] = j;
    l = j + 4 | 0;
    c[f + 8 >> 2] = d[l >> 0] | 64;
    f = te(h, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
    g = f + 8 | 0;
    if (!(c[g >> 2] | 0)) {
     c[f >> 2] = 1;
     c[g >> 2] = 1;
     if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(h);
    }
    c[k >> 2] = (c[k >> 2] | 0) + -16;
    c[e >> 2] = j;
    b = c[l >> 2] | 0;
    f = b >>> 16;
    if ((b & 255) << 24 >> 24 != 4 | (f & 255) << 24 >> 24 == 0) {
     b = 288;
     i = J;
     return b | 0;
    }
    b = f & 255 | 256;
    i = J;
    return b | 0;
   }
   break;
  }
 case 346:
  {
   i = J;
   return f | 0;
  }
 }
 h = c[I >> 2] | 0;
 l = h + 4 | 0;
 f = c[l >> 2] | 0;
 k = h + 8 | 0;
 j = c[k >> 2] | 0;
 do if ((f + 1 | 0) >>> 0 > j >>> 0) {
  if (j >>> 0 > 2147483645) ne(b, 6665, 0);
  g = j << 1;
  f = c[b + 52 >> 2] | 0;
  if ((g | 0) == -2) Kb(f); else {
   w = yb(f, c[h >> 2] | 0, j, g) | 0;
   c[h >> 2] = w;
   c[k >> 2] = g;
   v = c[l >> 2] | 0;
   break;
  }
 } else {
  v = f;
  w = c[h >> 2] | 0;
 } while (0);
 c[l >> 2] = v + 1;
 a[w + v >> 0] = m;
 f = c[H >> 2] | 0;
 F = c[f >> 2] | 0;
 c[f >> 2] = F + -1;
 if (!F) f = de(f) | 0; else {
  F = f + 4 | 0;
  f = c[F >> 2] | 0;
  c[F >> 2] = f + 1;
  f = d[f >> 0] | 0;
 }
 c[b >> 2] = f;
 if ((m | 0) == 48) if (!f) {
  f = 0;
  n = 6945;
 } else if (!(Pl(6942, f, 3) | 0)) n = 6945; else {
  j = c[I >> 2] | 0;
  m = j + 4 | 0;
  g = c[m >> 2] | 0;
  l = j + 8 | 0;
  k = c[l >> 2] | 0;
  do if ((g + 1 | 0) >>> 0 > k >>> 0) {
   if (k >>> 0 > 2147483645) ne(b, 6665, 0);
   h = k << 1;
   g = c[b + 52 >> 2] | 0;
   if ((h | 0) == -2) Kb(g); else {
    y = yb(g, c[j >> 2] | 0, k, h) | 0;
    c[j >> 2] = y;
    c[l >> 2] = h;
    x = c[m >> 2] | 0;
    break;
   }
  } else {
   x = g;
   y = c[j >> 2] | 0;
  } while (0);
  c[m >> 2] = x + 1;
  a[y + x >> 0] = f;
  f = c[H >> 2] | 0;
  F = c[f >> 2] | 0;
  c[f >> 2] = F + -1;
  if (!F) f = de(f) | 0; else {
   F = f + 4 | 0;
   f = c[F >> 2] | 0;
   c[F >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  n = 6948;
 } else n = 6945;
 o = b + 52 | 0;
 l = f;
 while (1) {
  if (!l) l = 0; else if (Pl(n, l, 3) | 0) {
   k = c[I >> 2] | 0;
   m = k + 4 | 0;
   g = c[m >> 2] | 0;
   j = k + 8 | 0;
   h = c[j >> 2] | 0;
   if ((g + 1 | 0) >>> 0 > h >>> 0) {
    if (h >>> 0 > 2147483645) {
     F = 268;
     break;
    }
    g = h << 1;
    f = c[o >> 2] | 0;
    if ((g | 0) == -2) {
     F = 270;
     break;
    }
    f = yb(f, c[k >> 2] | 0, h, g) | 0;
    c[k >> 2] = f;
    c[j >> 2] = g;
    g = c[m >> 2] | 0;
   } else f = c[k >> 2] | 0;
   c[m >> 2] = g + 1;
   a[f + g >> 0] = l;
   f = c[H >> 2] | 0;
   F = c[f >> 2] | 0;
   c[f >> 2] = F + -1;
   if (!F) l = de(f) | 0; else {
    F = f + 4 | 0;
    l = c[F >> 2] | 0;
    c[F >> 2] = l + 1;
    l = d[l >> 0] | 0;
   }
   c[b >> 2] = l;
   if (!l) l = 0; else if (Pl(6951, l, 3) | 0) {
    k = c[I >> 2] | 0;
    m = k + 4 | 0;
    g = c[m >> 2] | 0;
    j = k + 8 | 0;
    h = c[j >> 2] | 0;
    if ((g + 1 | 0) >>> 0 > h >>> 0) {
     if (h >>> 0 > 2147483645) {
      F = 280;
      break;
     }
     g = h << 1;
     f = c[o >> 2] | 0;
     if ((g | 0) == -2) {
      F = 282;
      break;
     }
     f = yb(f, c[k >> 2] | 0, h, g) | 0;
     c[k >> 2] = f;
     c[j >> 2] = g;
     g = c[m >> 2] | 0;
    } else f = c[k >> 2] | 0;
    c[m >> 2] = g + 1;
    a[f + g >> 0] = l;
    f = c[H >> 2] | 0;
    F = c[f >> 2] | 0;
    c[f >> 2] = F + -1;
    if (!F) f = de(f) | 0; else {
     F = f + 4 | 0;
     f = c[F >> 2] | 0;
     c[F >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    l = f;
   }
  }
  k = c[I >> 2] | 0;
  m = k + 4 | 0;
  g = c[m >> 2] | 0;
  j = k + 8 | 0;
  h = c[j >> 2] | 0;
  f = (g + 1 | 0) >>> 0 > h >>> 0;
  if (!((l | 0) == 46 ? 1 : (a[3999 + (l + 1) >> 0] & 16) != 0)) {
   F = 300;
   break;
  }
  if (f) {
   if (h >>> 0 > 2147483645) {
    F = 292;
    break;
   }
   g = h << 1;
   f = c[o >> 2] | 0;
   if ((g | 0) == -2) {
    F = 294;
    break;
   }
   f = yb(f, c[k >> 2] | 0, h, g) | 0;
   c[k >> 2] = f;
   c[j >> 2] = g;
   g = c[m >> 2] | 0;
  } else f = c[k >> 2] | 0;
  c[m >> 2] = g + 1;
  a[f + g >> 0] = l;
  f = c[H >> 2] | 0;
  F = c[f >> 2] | 0;
  c[f >> 2] = F + -1;
  if (!F) f = de(f) | 0; else {
   F = f + 4 | 0;
   f = c[F >> 2] | 0;
   c[F >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  l = f;
 }
 if ((F | 0) == 268) ne(b, 6665, 0); else if ((F | 0) == 270) Kb(f); else if ((F | 0) == 280) ne(b, 6665, 0); else if ((F | 0) == 282) Kb(f); else if ((F | 0) == 292) ne(b, 6665, 0); else if ((F | 0) == 294) Kb(f); else if ((F | 0) == 300) {
  do if (f) {
   if (h >>> 0 > 2147483645) ne(b, 6665, 0);
   g = h << 1;
   f = c[o >> 2] | 0;
   if ((g | 0) == -2) Kb(f); else {
    E = yb(f, c[k >> 2] | 0, h, g) | 0;
    c[k >> 2] = E;
    c[j >> 2] = g;
    D = c[m >> 2] | 0;
    break;
   }
  } else {
   D = g;
   E = c[k >> 2] | 0;
  } while (0);
  c[m >> 2] = D + 1;
  a[E + D >> 0] = 0;
  l = b + 76 | 0;
  j = a[l >> 0] | 0;
  g = c[I >> 2] | 0;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (!g) g = -1; else {
   do {
    g = g + -1 | 0;
    h = f + g | 0;
    if ((a[h >> 0] | 0) == 46) a[h >> 0] = j;
   } while ((g | 0) != 0);
   g = c[I >> 2] | 0;
   f = c[g >> 2] | 0;
   g = (c[g + 4 >> 2] | 0) + -1 | 0;
  }
  if (Ic(f, g, e) | 0) {
   b = 287;
   i = J;
   return b | 0;
  }
  j = a[l >> 0] | 0;
  k = a[c[(Xl() | 0) >> 2] >> 0] | 0;
  a[l >> 0] = k;
  g = c[I >> 2] | 0;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (!g) g = -1; else {
   do {
    g = g + -1 | 0;
    h = f + g | 0;
    if ((a[h >> 0] | 0) == j << 24 >> 24) a[h >> 0] = k;
   } while ((g | 0) != 0);
   g = c[I >> 2] | 0;
   f = c[g >> 2] | 0;
   g = (c[g + 4 >> 2] | 0) + -1 | 0;
  }
  if (Ic(f, g, e) | 0) {
   b = 287;
   i = J;
   return b | 0;
  }
  h = a[l >> 0] | 0;
  f = c[I >> 2] | 0;
  g = c[f >> 2] | 0;
  f = c[f + 4 >> 2] | 0;
  if (!f) ne(b, 6954, 287); else G = f;
  do {
   G = G + -1 | 0;
   f = g + G | 0;
   if ((a[f >> 0] | 0) == h << 24 >> 24) a[f >> 0] = 46;
  } while ((G | 0) != 0);
  ne(b, 6954, 287);
 }
 return 0;
}

function hn(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[3801] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   f = (b & 1 ^ 1) + a | 0;
   g = 15244 + (f << 1 << 2) | 0;
   b = g + 8 | 0;
   d = c[b >> 2] | 0;
   h = d + 8 | 0;
   e = c[h >> 2] | 0;
   do if ((g | 0) == (e | 0)) c[3801] = k & ~(1 << f); else {
    if (e >>> 0 < (c[3805] | 0) >>> 0) qa();
    a = e + 12 | 0;
    if ((c[a >> 2] | 0) == (d | 0)) {
     c[a >> 2] = g;
     c[b >> 2] = e;
     break;
    } else qa();
   } while (0);
   C = f << 3;
   c[d + 4 >> 2] = C | 3;
   C = d + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = h;
   i = D;
   return C | 0;
  }
  h = c[3803] | 0;
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
    f = 15244 + (e << 1 << 2) | 0;
    d = f + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    b = c[j >> 2] | 0;
    do if ((f | 0) == (b | 0)) {
     c[3801] = k & ~(1 << e);
     l = h;
    } else {
     if (b >>> 0 < (c[3805] | 0) >>> 0) qa();
     a = b + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = f;
      c[d >> 2] = b;
      l = c[3803] | 0;
      break;
     } else qa();
    } while (0);
    h = (e << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    f = g + q | 0;
    c[f + 4 >> 2] = h | 1;
    c[f + h >> 2] = h;
    if (l | 0) {
     e = c[3806] | 0;
     b = l >>> 3;
     d = 15244 + (b << 1 << 2) | 0;
     a = c[3801] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[3801] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = e;
     c[n + 12 >> 2] = e;
     c[e + 8 >> 2] = n;
     c[e + 12 >> 2] = d;
    }
    c[3803] = h;
    c[3806] = f;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[3802] | 0;
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
    e = c[15508 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[3805] | 0;
    if (k >>> 0 < g >>> 0) qa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) qa();
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
     if (b >>> 0 < g >>> 0) qa(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) qa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) qa();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else qa();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 15508 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[3802] = c[3802] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[3805] | 0) >>> 0) qa();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[3805] | 0;
     if (o >>> 0 < b >>> 0) qa();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) qa(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
     a = c[3803] | 0;
     if (a | 0) {
      f = c[3806] | 0;
      b = a >>> 3;
      e = 15244 + (b << 1 << 2) | 0;
      a = c[3801] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[3801] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[3803] = d;
     c[3806] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[3802] | 0;
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
   d = c[15508 + (j << 2) >> 2] | 0;
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
     a = c[15508 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (h >>> 0 < ((c[3803] | 0) - q | 0) >>> 0) {
    f = c[3805] | 0;
    if (k >>> 0 < f >>> 0) qa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) qa();
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
     if (b >>> 0 < f >>> 0) qa(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) qa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) qa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else qa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 15508 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[3802] = c[3802] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[3805] | 0) >>> 0) qa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[3805] | 0;
     if (t >>> 0 < b >>> 0) qa();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) qa(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
      d = 15244 + (a << 1 << 2) | 0;
      b = c[3801] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[3801] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
     f = 15508 + (b << 2) | 0;
     c[j + 28 >> 2] = b;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[3802] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[3802] = a | d;
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
     if ((w | 0) == 145) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
      c[a >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[3805] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = j;
       c[b >> 2] = j;
       c[j + 8 >> 2] = a;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else qa();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[3803] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[3806] | 0;
  if (b >>> 0 > 15) {
   C = a + q | 0;
   c[3806] = C;
   c[3803] = b;
   c[C + 4 >> 2] = b | 1;
   c[C + b >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[3803] = 0;
   c[3806] = 0;
   c[a + 4 >> 2] = d | 3;
   C = a + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = a + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[3804] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[3804] = A;
  C = c[3807] | 0;
  B = C + q | 0;
  c[3807] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[3919] | 0)) {
  c[3921] = 4096;
  c[3920] = 4096;
  c[3922] = -1;
  c[3923] = -1;
  c[3924] = 0;
  c[3912] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[3919] = v;
 }
 h = q + 48 | 0;
 g = c[3921] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[3911] | 0;
 if (a | 0) {
  u = c[3909] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[3912] & 4)) {
  a = c[3807] | 0;
  c : do if (!a) w = 171; else {
   e = 15652;
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
   a = f - (c[3804] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = Ca(a | 0) | 0;
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
   f = Ca(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[3920] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[3909] | 0;
    e = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     d = c[3911] | 0;
     if (d | 0) if (e >>> 0 <= b >>> 0 | e >>> 0 > d >>> 0) break;
     b = Ca(a | 0) | 0;
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
    b = c[3921] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((Ca(b | 0) | 0) == (-1 | 0)) {
     Ca(d | 0) | 0;
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
  c[3912] = c[3912] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = Ca(k | 0) | 0;
  a = Ca(0) | 0;
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
  a = (c[3909] | 0) + h | 0;
  c[3909] = a;
  if (a >>> 0 > (c[3910] | 0) >>> 0) c[3910] = a;
  k = c[3807] | 0;
  do if (!k) {
   C = c[3805] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[3805] = f;
   c[3913] = f;
   c[3914] = h;
   c[3916] = 0;
   c[3810] = c[3919];
   c[3809] = -1;
   a = 0;
   do {
    C = 15244 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[3807] = B;
   c[3804] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[3808] = c[3923];
  } else {
   b = 15652;
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
    C = h - C + (c[3804] | 0) | 0;
    c[3807] = B;
    c[3804] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[3808] = c[3923];
    break;
   }
   a = c[3805] | 0;
   if (f >>> 0 < a >>> 0) {
    c[3805] = f;
    j = f;
   } else j = a;
   d = f + h | 0;
   a = 15652;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 15652;
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
     C = (c[3804] | 0) + g | 0;
     c[3804] = C;
     c[3807] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[3806] | 0)) {
      C = (c[3803] | 0) + g | 0;
      c[3803] = C;
      c[3806] = l;
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
       b = 15244 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) qa();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        qa();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[3801] = c[3801] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) qa();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        qa();
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
        if (d >>> 0 < j >>> 0) qa(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) qa();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) qa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else qa();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 15508 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[3802] = c[3802] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[3805] | 0) >>> 0) qa();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[3805] | 0;
       if (A >>> 0 < e >>> 0) qa();
       c[A + 24 >> 2] = h;
       d = a + 16 | 0;
       b = c[d >> 2] | 0;
       do if (b | 0) if (b >>> 0 < e >>> 0) qa(); else {
        c[A + 16 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       } while (0);
       b = c[d + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
      d = 15244 + (a << 1 << 2) | 0;
      b = c[3801] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[3801] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[3805] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       qa();
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
     f = 15508 + (b << 2) | 0;
     c[l + 28 >> 2] = b;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[3802] | 0;
     d = 1 << b;
     if (!(a & d)) {
      c[3802] = a | d;
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
     if ((w | 0) == 276) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
      c[a >> 2] = l;
      c[l + 24 >> 2] = d;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      b = d + 8 | 0;
      a = c[b >> 2] | 0;
      C = c[3805] | 0;
      if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[a + 12 >> 2] = l;
       c[b >> 2] = l;
       c[l + 8 >> 2] = a;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else qa();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 15652;
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
   c[3807] = C;
   c[3804] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[3808] = c[3923];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[3913];
   c[b + 4 >> 2] = c[3914];
   c[b + 8 >> 2] = c[3915];
   c[b + 12 >> 2] = c[3916];
   c[3913] = f;
   c[3914] = h;
   c[3916] = 0;
   c[3915] = b;
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
     d = 15244 + (a << 1 << 2) | 0;
     b = c[3801] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[3801] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
    f = 15508 + (d << 2) | 0;
    c[k + 28 >> 2] = d;
    c[k + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[3802] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[3802] = a | b;
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
    if ((w | 0) == 302) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
     c[a >> 2] = k;
     c[k + 24 >> 2] = d;
     c[k + 12 >> 2] = k;
     c[k + 8 >> 2] = k;
     break;
    } else if ((w | 0) == 305) {
     b = d + 8 | 0;
     a = c[b >> 2] | 0;
     C = c[3805] | 0;
     if (a >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[a + 12 >> 2] = k;
      c[b >> 2] = k;
      c[k + 8 >> 2] = a;
      c[k + 12 >> 2] = d;
      c[k + 24 >> 2] = 0;
      break;
     } else qa();
    }
   }
  } while (0);
  a = c[3804] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[3804] = A;
   C = c[3807] | 0;
   B = C + q | 0;
   c[3807] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(_k() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}
function Jl(e, f, g, j, l) {
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
   c[(_k() | 0) >> 2] = 75;
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
  if (ga) if (!(c[e >> 2] & 32)) Kl(z, y, e) | 0;
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
   o = a[12355 + (u * 58 | 0) + o >> 0] | 0;
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
   Ml(R, t, g);
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
      p = Cn(p | 0, o | 0, 3) | 0;
      o = C;
     } while (!((p | 0) == 0 & (o | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     q = 12835;
     L = 77;
    } else {
     t = aa - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     q = 12835;
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
     f = xn(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = R;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     q = 12835;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     q = I & 1;
     p = q;
     q = (q | 0) == 0 ? 12835 : 12837;
     L = 76;
    } else {
     p = 1;
     q = 12836;
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
    q = 12835;
    L = 76;
    break;
   }
  case 99:
   {
    a[P >> 0] = c[R >> 2];
    f = P;
    u = 1;
    w = 0;
    v = 12835;
    o = N;
    break;
   }
  case 109:
   {
    o = Ol(c[(_k() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[R >> 2] | 0;
    o = o | 0 ? o : 14737;
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
     Ql(e, 32, K, 0, I);
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
     H = 14744;
     r = -r;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 14745 : 14750;
    } else {
     G = 1;
     H = 14747;
    }
    h[k >> 3] = r;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +wl(r, W) * 2.0;
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
      f = Nl(f, ((f | 0) < 0) << 31 >> 31, S) | 0;
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
       a[o >> 0] = d[12819 + H >> 0] | t;
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
      Ql(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) Kl(y, w, e) | 0;
      Ql(e, 48, K, p, I ^ 65536);
      o = f - ca | 0;
      if (!(c[e >> 2] & 32)) Kl(V, o, e) | 0;
      f = $ - t | 0;
      Ql(e, 48, q - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Kl(v, f, e) | 0;
      Ql(e, 32, K, p, I ^ 8192);
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
         B = An(c[q >> 2] | 0, 0, t | 0) | 0;
         B = yn(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = Nn(B | 0, o | 0, 1e9, 0) | 0;
         c[q >> 2] = A;
         o = Mn(B | 0, o | 0, 1e9, 0) | 0;
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
      q = Nl(q, ((q | 0) < 0) << 31 >> 31, S) | 0;
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
     Ql(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) Kl(H, G, e) | 0;
     Ql(e, 48, K, w, I ^ 65536);
     do if (t) {
      q = D >>> 0 > F >>> 0 ? F : D;
      o = q;
      do {
       p = Nl(c[o >> 2] | 0, 0, Q) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((p | 0) != (Q | 0)) break;
        a[Y >> 0] = 48;
        p = Y;
       } else {
        if (p >>> 0 <= V >>> 0) break;
        zn(V | 0, 48, p - ca | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > V >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Kl(p, ba - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Kl(14775, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < z >>> 0) {
       p = o;
       while (1) {
        o = Nl(c[p >> 2] | 0, 0, Q) | 0;
        if (o >>> 0 > V >>> 0) {
         zn(V | 0, 48, o - ca | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        }
        if (!(c[e >> 2] & 32)) Kl(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < z >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      Ql(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? z : D + 4 | 0;
      if ((f | 0) > -1) {
       s = (o | 0) == 0;
       q = D;
       do {
        o = Nl(c[q >> 2] | 0, 0, Q) | 0;
        if ((o | 0) == (Q | 0)) {
         a[Y >> 0] = 48;
         o = Y;
        }
        do if ((q | 0) == (D | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Kl(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         Kl(14775, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= V >>> 0) break;
         zn(V | 0, 48, o + M | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > V >>> 0);
        } while (0);
        p = ba - o | 0;
        if (!(c[e >> 2] & 32)) Kl(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      Ql(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Kl(u, $ - u | 0, e) | 0;
     } while (0);
     Ql(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = r != r | 0.0 != 0.0;
     o = s ? 0 : G;
     q = o + 3 | 0;
     Ql(e, 32, K, q, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Kl(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Kl(s ? (t ? 15064 : 14771) : t ? 14763 : 14767, 3, e) | 0;
     Ql(e, 32, K, q, I ^ 8192);
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
    v = 12835;
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
    q = 12835;
    L = 77;
   } else {
    p = f;
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[12819 + (p & 15) >> 0] | q;
     p = Cn(p | 0, o | 0, 4) | 0;
     o = C;
    } while (!((p | 0) == 0 & (o | 0) == 0));
    L = R;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     q = 12835;
     L = 77;
    } else {
     o = t;
     t = 2;
     q = 12835 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = Nl(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Pl(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 12835;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    q = c[t >> 2] | 0;
    if (!q) break;
    o = Rl(Z, q) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   Ql(e, 32, K, p, I);
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
     o = Rl(Z, o) | 0;
     q = o + q | 0;
     if ((q | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) Kl(Z, o, e) | 0;
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
   Ql(e, 32, K, f, I ^ 8192);
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
  Ql(e, 32, o, q, p);
  if (!(c[e >> 2] & 32)) Kl(v, w, e) | 0;
  Ql(e, 48, o, q, p ^ 65536);
  Ql(e, 48, s, t, 0);
  if (!(c[e >> 2] & 32)) Kl(f, t, e) | 0;
  Ql(e, 32, o, q, p ^ 8192);
  z = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   Ml(j + (m << 3) | 0, n, g);
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

function Dm(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0, k = 0.0, l = 0, m = 0, n = 0.0, o = 0, p = 0, q = 0.0, t = 0.0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0.0;
 K = i;
 i = i + 512 | 0;
 G = K;
 switch (e | 0) {
 case 0:
  {
   J = 24;
   H = -149;
   z = 4;
   break;
  }
 case 1:
  {
   J = 53;
   H = -1074;
   z = 4;
   break;
  }
 case 2:
  {
   J = 53;
   H = -1074;
   z = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((z | 0) == 4) {
  D = b + 4 | 0;
  B = b + 100 | 0;
  do {
   e = c[D >> 2] | 0;
   if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
    c[D >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = im(b) | 0;
  } while ((dm(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[D >> 2] | 0;
    if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
     c[D >> 2] = e + 1;
     e = d[e >> 0] | 0;
     I = h;
     break b;
    } else {
     e = im(b) | 0;
     I = h;
     break b;
    }
   }
  default:
   I = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[15055 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[D >> 2] | 0;
    if (h >>> 0 < (c[B >> 2] | 0) >>> 0) {
     c[D >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = im(b) | 0;
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
    j = (f | 0) != 0;
    if (j & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     z = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[15064 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[D >> 2] | 0;
       if (h >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = im(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[D >> 2] | 0;
      if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
       c[D >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = im(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[B >> 2] | 0)) {
        g = r;
        break a;
       }
       c[D >> 2] = (c[D >> 2] | 0) + -1;
       g = r;
       break a;
      }
      while (1) {
       h = c[D >> 2] | 0;
       if (h >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = im(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26)) if (!((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26)) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = r;
       break a;
      }
      h = (c[B >> 2] | 0) == 0;
      if (!h) c[D >> 2] = (c[D >> 2] | 0) + -1;
      if (!j) {
       c[(_k() | 0) >> 2] = 22;
       gm(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = r;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[D >> 2] = (c[D >> 2] | 0) + -1;
       if (!e) {
        g = r;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[D >> 2] | 0;
       if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = im(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[B >> 2] | 0)) {
         h = 48;
         break;
        }
        c[D >> 2] = (c[D >> 2] | 0) + -1;
        h = 48;
        break;
       }
       e = c[D >> 2] | 0;
       if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = e + 1;
        j = d[e >> 0] | 0;
        l = 0;
       } else {
        j = im(b) | 0;
        l = 0;
       }
       e : while (1) {
        switch (j | 0) {
        case 46:
         {
          z = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          e = 0;
          h = 0;
          y = 0;
          x = 0;
          w = j;
          m = 0;
          v = 0;
          n = 1.0;
          j = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[D >> 2] | 0;
        if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
         c[D >> 2] = e + 1;
         j = d[e >> 0] | 0;
         l = 1;
         continue;
        } else {
         j = im(b) | 0;
         l = 1;
         continue;
        }
       }
       if ((z | 0) == 74) {
        e = c[D >> 2] | 0;
        if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
         c[D >> 2] = e + 1;
         j = d[e >> 0] | 0;
        } else j = im(b) | 0;
        if ((j | 0) == 48) {
         j = 0;
         h = 0;
         while (1) {
          e = c[D >> 2] | 0;
          if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
           c[D >> 2] = e + 1;
           l = d[e >> 0] | 0;
          } else l = im(b) | 0;
          e = yn(j | 0, h | 0, -1, -1) | 0;
          h = C;
          if ((l | 0) == 48) j = e; else {
           y = 0;
           x = 0;
           w = l;
           l = 1;
           m = 1;
           v = 0;
           n = 1.0;
           j = 0;
           g = 0.0;
           break;
          }
         }
        } else {
         e = 0;
         h = 0;
         y = 0;
         x = 0;
         w = j;
         m = 1;
         v = 0;
         n = 1.0;
         j = 0;
         g = 0.0;
        }
       }
       while (1) {
        u = w + -48 | 0;
        o = w | 32;
        if (u >>> 0 < 10) z = 86; else {
         p = (w | 0) == 46;
         if (!(p | (o + -97 | 0) >>> 0 < 6)) {
          p = x;
          o = y;
          u = w;
          break;
         }
         if (p) if (!m) {
          e = x;
          h = y;
          u = x;
          p = y;
          m = 1;
          k = n;
         } else {
          p = x;
          o = y;
          u = 46;
          break;
         } else z = 86;
        }
        if ((z | 0) == 86) {
         z = 0;
         l = (w | 0) > 57 ? o + -87 | 0 : u;
         do if ((y | 0) < 0 | (y | 0) == 0 & x >>> 0 < 8) {
          o = v;
          k = n;
          j = l + (j << 4) | 0;
         } else {
          if ((y | 0) < 0 | (y | 0) == 0 & x >>> 0 < 14) {
           t = n * .0625;
           o = v;
           k = t;
           g = g + t * +(l | 0);
           break;
          }
          if ((v | 0) != 0 | (l | 0) == 0) {
           o = v;
           k = n;
          } else {
           o = 1;
           k = n;
           g = g + n * .5;
          }
         } while (0);
         u = yn(x | 0, y | 0, 1, 0) | 0;
         p = C;
         l = 1;
         v = o;
        }
        o = c[D >> 2] | 0;
        if (o >>> 0 < (c[B >> 2] | 0) >>> 0) {
         c[D >> 2] = o + 1;
         y = p;
         x = u;
         w = d[o >> 0] | 0;
         n = k;
         continue;
        } else {
         y = p;
         x = u;
         w = im(b) | 0;
         n = k;
         continue;
        }
       }
       if (!l) {
        e = (c[B >> 2] | 0) == 0;
        if (!e) c[D >> 2] = (c[D >> 2] | 0) + -1;
        if (!f) gm(b, 0); else if (!e) {
         e = c[D >> 2] | 0;
         c[D >> 2] = e + -1;
         if (m | 0) c[D >> 2] = e + -2;
        }
        g = +(I | 0) * 0.0;
        break a;
       }
       l = (m | 0) == 0;
       m = l ? p : e;
       l = l ? o : h;
       if ((o | 0) < 0 | (o | 0) == 0 & p >>> 0 < 8) {
        h = p;
        e = o;
        do {
         j = j << 4;
         h = yn(h | 0, e | 0, 1, 0) | 0;
         e = C;
        } while ((e | 0) < 0 | (e | 0) == 0 & h >>> 0 < 8);
       }
       if ((u | 32 | 0) == 112) {
        h = Em(b, f) | 0;
        e = C;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          gm(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[B >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[D >> 2] = (c[D >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[B >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[D >> 2] = (c[D >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       G = An(m | 0, l | 0, 2) | 0;
       G = yn(G | 0, C | 0, -32, -1) | 0;
       e = yn(G | 0, C | 0, h | 0, e | 0) | 0;
       h = C;
       if (!j) {
        g = +(I | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - H | 0) >>> 0) {
        c[(_k() | 0) >> 2] = 34;
        g = +(I | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break a;
       }
       G = H + -106 | 0;
       F = ((G | 0) < 0) << 31 >> 31;
       if ((h | 0) < (F | 0) | (h | 0) == (F | 0) & e >>> 0 < G >>> 0) {
        c[(_k() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((j | 0) > -1) {
        do {
         F = !(g >= .5);
         G = F & 1 | j << 1;
         j = G ^ 1;
         g = g + (F ? g : g + -1.0);
         e = yn(e | 0, h | 0, -1, -1) | 0;
         h = C;
        } while ((G | 0) > -1);
        l = e;
        n = g;
       } else {
        l = e;
        n = g;
       }
       e = xn(32, 0, H | 0, ((H | 0) < 0) << 31 >> 31 | 0) | 0;
       e = yn(l | 0, h | 0, e | 0, C | 0) | 0;
       H = C;
       if (0 > (H | 0) | 0 == (H | 0) & J >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        z = 127;
       } else z = 125; else {
        e = J;
        z = 125;
       }
       if ((z | 0) == 125) if ((e | 0) < 53) z = 127; else {
        k = 0.0;
        g = +(I | 0);
       }
       if ((z | 0) == 127) {
        g = +(I | 0);
        k = +jl(+gl(1.0, 84 - e | 0), g);
       }
       J = (j & 1 | 0) == 0 & (n != 0.0 & (e | 0) < 32);
       g = g * (J ? 0.0 : n) + (k + g * +(((J & 1) + j | 0) >>> 0)) - k;
       if (!(g != 0.0)) c[(_k() | 0) >> 2] = 34;
       g = +ul(g, l);
       break a;
      } while (0);
      E = H + J | 0;
      F = 0 - E | 0;
      l = 0;
      f : while (1) {
       switch (h | 0) {
       case 46:
        {
         z = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         j = 0;
         e = 0;
         w = 0;
         break f;
        }
       }
       e = c[D >> 2] | 0;
       if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = e + 1;
        h = d[e >> 0] | 0;
        l = 1;
        continue;
       } else {
        h = im(b) | 0;
        l = 1;
        continue;
       }
      }
      if ((z | 0) == 138) {
       e = c[D >> 2] | 0;
       if (e >>> 0 < (c[B >> 2] | 0) >>> 0) {
        c[D >> 2] = e + 1;
        h = d[e >> 0] | 0;
       } else h = im(b) | 0;
       if ((h | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         j = yn(h | 0, e | 0, -1, -1) | 0;
         e = C;
         h = c[D >> 2] | 0;
         if (h >>> 0 < (c[B >> 2] | 0) >>> 0) {
          c[D >> 2] = h + 1;
          h = d[h >> 0] | 0;
         } else h = im(b) | 0;
         if ((h | 0) == 48) h = j; else {
          l = 1;
          w = 1;
          break;
         }
        }
       } else {
        j = 0;
        e = 0;
        w = 1;
       }
      }
      c[G >> 2] = 0;
      v = h + -48 | 0;
      o = (h | 0) == 46;
      g : do if (o | v >>> 0 < 10) {
       A = G + 496 | 0;
       m = 0;
       p = 0;
       x = o;
       u = l;
       z = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (x) if (!w) {
         j = m;
         e = p;
         w = 1;
        } else {
         h = z;
         break h;
        } else {
         x = yn(m | 0, p | 0, 1, 0) | 0;
         p = C;
         y = (h | 0) != 48;
         if ((l | 0) >= 125) {
          if (!y) {
           m = x;
           break;
          }
          c[A >> 2] = c[A >> 2] | 1;
          m = x;
          break;
         }
         m = G + (l << 2) | 0;
         if (!z) h = v; else h = h + -48 + ((c[m >> 2] | 0) * 10 | 0) | 0;
         c[m >> 2] = h;
         z = z + 1 | 0;
         v = (z | 0) == 9;
         m = x;
         u = 1;
         z = v ? 0 : z;
         l = (v & 1) + l | 0;
         o = y ? x : o;
        } while (0);
        h = c[D >> 2] | 0;
        if (h >>> 0 < (c[B >> 2] | 0) >>> 0) {
         c[D >> 2] = h + 1;
         h = d[h >> 0] | 0;
        } else h = im(b) | 0;
        v = h + -48 | 0;
        x = (h | 0) == 46;
        if (!(x | v >>> 0 < 10)) {
         v = m;
         m = w;
         w = z;
         z = 161;
         break g;
        }
       }
       v = m;
       m = (u | 0) != 0;
       z = 169;
      } else {
       v = 0;
       p = 0;
       u = l;
       m = w;
       w = 0;
       l = 0;
       o = 0;
       z = 161;
      } while (0);
      do if ((z | 0) == 161) {
       m = (m | 0) == 0;
       j = m ? v : j;
       e = m ? p : e;
       m = (u | 0) != 0;
       if (!((h | 32 | 0) == 101 & m)) if ((h | 0) > -1) {
        h = w;
        z = 169;
        break;
       } else {
        u = v;
        h = w;
        z = 171;
        break;
       }
       m = Em(b, f) | 0;
       h = C;
       if ((m | 0) == 0 & (h | 0) == -2147483648) {
        if (!f) {
         gm(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[B >> 2] | 0)) {
         m = 0;
         h = 0;
        } else {
         c[D >> 2] = (c[D >> 2] | 0) + -1;
         m = 0;
         h = 0;
        }
       }
       j = yn(m | 0, h | 0, j | 0, e | 0) | 0;
       u = v;
       e = C;
       h = w;
       z = 173;
      } while (0);
      if ((z | 0) == 169) if (!(c[B >> 2] | 0)) {
       u = v;
       z = 171;
      } else {
       c[D >> 2] = (c[D >> 2] | 0) + -1;
       if (m) {
        u = v;
        z = 173;
       } else z = 172;
      }
      if ((z | 0) == 171) if (m) z = 173; else z = 172;
      do if ((z | 0) == 172) {
       c[(_k() | 0) >> 2] = 22;
       gm(b, 0);
       g = 0.0;
      } else if ((z | 0) == 173) {
       m = c[G >> 2] | 0;
       if (!m) {
        g = +(I | 0) * 0.0;
        break;
       }
       if (((p | 0) < 0 | (p | 0) == 0 & u >>> 0 < 10) & ((j | 0) == (u | 0) & (e | 0) == (p | 0))) if (J >>> 0 > 30 | (m >>> J | 0) == 0) {
        g = +(I | 0) * +(m >>> 0);
        break;
       }
       b = (H | 0) / -2 | 0;
       D = ((b | 0) < 0) << 31 >> 31;
       if ((e | 0) > (D | 0) | (e | 0) == (D | 0) & j >>> 0 > b >>> 0) {
        c[(_k() | 0) >> 2] = 34;
        g = +(I | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break;
       }
       b = H + -106 | 0;
       D = ((b | 0) < 0) << 31 >> 31;
       if ((e | 0) < (D | 0) | (e | 0) == (D | 0) & j >>> 0 < b >>> 0) {
        c[(_k() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (h) {
        if ((h | 0) < 9) {
         m = G + (l << 2) | 0;
         e = c[m >> 2] | 0;
         do {
          e = e * 10 | 0;
          h = h + 1 | 0;
         } while ((h | 0) != 9);
         c[m >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9) if ((o | 0) <= (j | 0) & (j | 0) < 18) {
        if ((j | 0) == 9) {
         g = +(I | 0) * +((c[G >> 2] | 0) >>> 0);
         break;
        }
        if ((j | 0) < 9) {
         g = +(I | 0) * +((c[G >> 2] | 0) >>> 0) / +(c[3884 + (8 - j << 2) >> 2] | 0);
         break;
        }
        b = J + 27 + (_(j, -3) | 0) | 0;
        e = c[G >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(I | 0) * +(e >>> 0) * +(c[3884 + (j + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (j | 0) % 9 | 0;
       if (!e) {
        h = 0;
        e = 0;
       } else {
        u = (j | 0) > -1 ? e : e + 9 | 0;
        m = c[3884 + (8 - u << 2) >> 2] | 0;
        if (!l) {
         h = 0;
         l = 0;
        } else {
         o = 1e9 / (m | 0) | 0;
         h = 0;
         e = 0;
         p = 0;
         do {
          B = G + (p << 2) | 0;
          D = c[B >> 2] | 0;
          b = ((D >>> 0) / (m >>> 0) | 0) + e | 0;
          c[B >> 2] = b;
          e = _((D >>> 0) % (m >>> 0) | 0, o) | 0;
          b = (p | 0) == (h | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          j = b ? j + -9 | 0 : j;
          h = b ? p & 127 : h;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[G + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        }
        e = 0;
        j = 9 - u + j | 0;
       }
       i : while (1) {
        w = (j | 0) < 18;
        x = (j | 0) == 18;
        v = G + (h << 2) | 0;
        do {
         if (!w) {
          if (!x) break i;
          if ((c[v >> 2] | 0) >>> 0 >= 9007199) {
           j = 18;
           break i;
          }
         }
         m = 0;
         o = l + 127 | 0;
         while (1) {
          u = o & 127;
          p = G + (u << 2) | 0;
          o = An(c[p >> 2] | 0, 0, 29) | 0;
          o = yn(o | 0, C | 0, m | 0, 0) | 0;
          m = C;
          if (m >>> 0 > 0 | (m | 0) == 0 & o >>> 0 > 1e9) {
           b = Mn(o | 0, m | 0, 1e9, 0) | 0;
           o = Nn(o | 0, m | 0, 1e9, 0) | 0;
           m = b;
          } else m = 0;
          c[p >> 2] = o;
          b = (u | 0) == (h | 0);
          l = (u | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? u : l;
          if (b) break; else o = u + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((m | 0) == 0);
        h = h + 127 & 127;
        if ((h | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = G + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[G + (b << 2) >> 2];
         l = b;
        }
        c[G + (h << 2) >> 2] = m;
        j = j + 9 | 0;
       }
       j : while (1) {
        y = l + 1 & 127;
        x = G + ((l + 127 & 127) << 2) | 0;
        while (1) {
         u = (j | 0) == 18;
         w = (j | 0) > 27 ? 9 : 1;
         v = u ^ 1;
         while (1) {
          p = h & 127;
          o = (p | 0) == (l | 0);
          do if (o) z = 219; else {
           m = c[G + (p << 2) >> 2] | 0;
           if (m >>> 0 < 9007199) {
            z = 219;
            break;
           }
           if (m >>> 0 > 9007199) break;
           m = h + 1 & 127;
           if ((m | 0) == (l | 0)) {
            z = 219;
            break;
           }
           m = c[G + (m << 2) >> 2] | 0;
           if (m >>> 0 < 254740991) {
            z = 219;
            break;
           }
           if (!(m >>> 0 > 254740991 | v)) {
            v = h;
            h = p;
            j = l;
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
          if ((h | 0) == (l | 0)) h = l; else break;
         }
         v = (1 << w) + -1 | 0;
         u = 1e9 >>> w;
         o = h;
         m = 0;
         p = h;
         while (1) {
          D = G + (p << 2) | 0;
          b = c[D >> 2] | 0;
          h = (b >>> w) + m | 0;
          c[D >> 2] = h;
          m = _(b & v, u) | 0;
          h = (p | 0) == (o | 0) & (h | 0) == 0;
          p = p + 1 & 127;
          j = h ? j + -9 | 0 : j;
          h = h ? p : o;
          if ((p | 0) == (l | 0)) break; else o = h;
         }
         if (!m) continue;
         if ((y | 0) != (h | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[G + (l << 2) >> 2] = m;
        l = y;
       }
       if ((z | 0) == 220) if (o) {
        c[G + (y + -1 << 2) >> 2] = 0;
        v = h;
        h = l;
        j = y;
       } else {
        v = h;
        h = p;
        j = l;
       }
       g = +((c[G + (h << 2) >> 2] | 0) >>> 0);
       h = v + 1 & 127;
       if ((h | 0) == (j | 0)) {
        j = v + 2 & 127;
        c[G + (j + -1 << 2) >> 2] = 0;
       }
       t = +(I | 0);
       k = t * (g * 1.0e9 + +((c[G + (h << 2) >> 2] | 0) >>> 0));
       u = e + 53 | 0;
       p = u - H | 0;
       o = (p | 0) < (J | 0);
       h = o & 1;
       m = o ? ((p | 0) < 0 ? 0 : p) : J;
       if ((m | 0) < 53) {
        L = +jl(+gl(1.0, 105 - m | 0), k);
        n = +zl(k, +gl(1.0, 53 - m | 0));
        q = L;
        g = n;
        n = L + (k - n);
       } else {
        q = 0.0;
        g = 0.0;
        n = k;
       }
       l = v + 2 & 127;
       do if ((l | 0) == (j | 0)) k = g; else {
        l = c[G + (l << 2) >> 2] | 0;
        do if (l >>> 0 < 5e8) {
         if (!l) if ((v + 3 & 127 | 0) == (j | 0)) break;
         g = t * .25 + g;
        } else {
         if (l >>> 0 > 5e8) {
          g = t * .75 + g;
          break;
         }
         if ((v + 3 & 127 | 0) == (j | 0)) {
          g = t * .5 + g;
          break;
         } else {
          g = t * .75 + g;
          break;
         }
        } while (0);
        if ((53 - m | 0) <= 1) {
         k = g;
         break;
        }
        if (+zl(g, 1.0) != 0.0) {
         k = g;
         break;
        }
        k = g + 1.0;
       } while (0);
       g = n + k - q;
       do if ((u & 2147483647 | 0) > (-2 - E | 0)) {
        if (+N(+g) >= 9007199254740992.0) {
         h = o & (m | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (F | 0)) if (!(k != 0.0 & (h | 0) != 0)) break;
        c[(_k() | 0) >> 2] = 34;
       } while (0);
       g = +ul(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[B >> 2] | 0) c[D >> 2] = (c[D >> 2] | 0) + -1;
      c[(_k() | 0) >> 2] = 22;
      gm(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((z | 0) == 23) {
   h = (c[B >> 2] | 0) == 0;
   if (!h) c[D >> 2] = (c[D >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[D >> 2] = (c[D >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +ba(ba(I | 0) * ba(s));
 } while (0);
 i = K;
 return +g;
}

function tc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, N = 0, O = 0, Q = 0, R = 0, S = 0.0;
 O = i;
 i = i + 32 | 0;
 N = O + 24 | 0;
 L = O + 16 | 0;
 K = O + 8 | 0;
 G = O;
 D = b + 16 | 0;
 E = b + 40 | 0;
 F = b + 12 | 0;
 R = b + 8 | 0;
 I = b + 24 | 0;
 Q = b + 48 | 0;
 H = b + 20 | 0;
 J = b + 6 | 0;
 C = b + 44 | 0;
 j = c[D >> 2] | 0;
 a : while (1) {
  v = c[c[j >> 2] >> 2] | 0;
  A = v + 12 | 0;
  w = c[(c[A >> 2] | 0) + 8 >> 2] | 0;
  z = j + 24 | 0;
  x = j + 28 | 0;
  y = j + 4 | 0;
  f = c[z >> 2] | 0;
  b : while (1) {
   t = c[x >> 2] | 0;
   c[x >> 2] = t + 4;
   t = c[t >> 2] | 0;
   e = a[E >> 0] | 0;
   if (e & 12) {
    g = (c[Q >> 2] | 0) + -1 | 0;
    c[Q >> 2] = g;
    g = (g | 0) == 0;
    if (!((e & 4) == 0 & (g ^ 1))) {
     s = c[D >> 2] | 0;
     f = e & 255;
     if ((f & 8 | 0) == 0 | g ^ 1) q = 0; else {
      c[Q >> 2] = c[C >> 2];
      q = 1;
     }
     r = s + 18 | 0;
     e = d[r >> 0] | 0;
     if (!(e & 128)) {
      if (q) sc(b, 3, -1);
      do if (!(f & 4)) {
       e = s + 28 | 0;
       f = e;
      } else {
       k = c[(c[c[s >> 2] >> 2] | 0) + 12 >> 2] | 0;
       n = s + 28 | 0;
       f = c[n >> 2] | 0;
       g = c[k + 12 >> 2] | 0;
       e = (f - g >> 2) + -1 | 0;
       k = c[k + 20 >> 2] | 0;
       l = (k | 0) == 0;
       if (l) m = 0; else m = c[k + (e << 2) >> 2] | 0;
       if (e | 0) {
        e = c[H >> 2] | 0;
        if (f >>> 0 > e >>> 0) {
         if (l) e = 0; else e = c[k + ((e - g >> 2) + -1 << 2) >> 2] | 0;
         if ((m | 0) == (e | 0)) {
          f = n;
          e = n;
          break;
         }
        }
       }
       sc(b, 2, m);
       f = n;
       e = n;
      } while (0);
      e = c[e >> 2] | 0;
      c[H >> 2] = e;
      if ((a[J >> 0] | 0) == 1) {
       B = 22;
       break a;
      }
     } else a[r >> 0] = e & 127;
     f = c[z >> 2] | 0;
    }
   }
   u = t >>> 6 & 255;
   g = f + (u << 4) | 0;
   do switch (t & 63 | 0) {
   case 31:
    {
     e = t;
     B = 147;
     break b;
    }
   case 0:
    {
     t = t >>> 23;
     q = f + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[f + (t << 4) + 8 >> 2];
     continue b;
    }
   case 1:
    {
     t = t >>> 14;
     q = w + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[w + (t << 4) + 8 >> 2];
     continue b;
    }
   case 2:
    {
     t = c[x >> 2] | 0;
     c[x >> 2] = t + 4;
     t = (c[t >> 2] | 0) >>> 6;
     q = w + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[w + (t << 4) + 8 >> 2];
     continue b;
    }
   case 3:
    {
     c[g >> 2] = t >>> 23;
     c[f + (u << 4) + 8 >> 2] = 1;
     if (!(t & 8372224)) continue b;
     c[x >> 2] = (c[x >> 2] | 0) + 4;
     continue b;
    }
   case 4:
    {
     e = t >>> 23;
     while (1) {
      c[g + 8 >> 2] = 0;
      if (!e) continue b; else {
       e = e + -1 | 0;
       g = g + 16 | 0;
      }
     }
    }
   case 5:
    {
     t = c[(c[v + 16 + (t >>> 23 << 2) >> 2] | 0) + 8 >> 2] | 0;
     q = t;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[t + 8 >> 2];
     continue b;
    }
   case 6:
    {
     u = t >>> 14;
     uc(b, c[(c[v + 16 + (t >>> 23 << 2) >> 2] | 0) + 8 >> 2] | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 7:
    {
     u = t >>> 14;
     uc(b, f + (t >>> 23 << 4) | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 8:
    {
     s = t >>> 23;
     t = t >>> 14;
     zc(b, c[(c[v + 16 + (u << 2) >> 2] | 0) + 8 >> 2] | 0, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (t & 256 | 0) == 0 ? f + ((t & 511) << 4) | 0 : w + ((t & 255) << 4) | 0);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 9:
    {
     k = c[v + 16 + (t >>> 23 << 2) >> 2] | 0;
     t = c[k + 8 >> 2] | 0;
     q = g;
     r = c[q + 4 >> 2] | 0;
     s = t;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     u = f + (u << 4) + 8 | 0;
     c[t + 8 >> 2] = c[u >> 2];
     if (!(c[u >> 2] & 64)) continue b;
     e = c[g >> 2] | 0;
     if (!(a[e + 5 >> 0] & 3)) continue b;
     if (!(a[k + 5 >> 0] & 4)) continue b;
     Ec(b, k, e);
     continue b;
    }
   case 10:
    {
     s = t >>> 23;
     u = t >>> 14;
     zc(b, g, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 11:
    {
     l = t >>> 23;
     e = t >>> 14 & 511;
     k = Fc(b) | 0;
     c[g >> 2] = k;
     c[f + (u << 4) + 8 >> 2] = 69;
     if (e | l | 0) {
      u = Gc(l) | 0;
      Cc(b, k, u, Gc(e) | 0);
     }
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[R >> 2] = g + 16;
      pc(b);
      c[R >> 2] = c[y >> 2];
     }
     f = c[z >> 2] | 0;
     continue b;
    }
   case 12:
    {
     r = t >>> 23;
     s = f + (r << 4) | 0;
     u = g + 16 | 0;
     m = s;
     n = c[m + 4 >> 2] | 0;
     q = u;
     c[q >> 2] = c[m >> 2];
     c[q + 4 >> 2] = n;
     c[u + 8 >> 2] = c[f + (r << 4) + 8 >> 2];
     u = t >>> 14;
     uc(b, s, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 13:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] + +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 6);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 14:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] - +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 7);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 15:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] * +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 8);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 16:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] / +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 9);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 17:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      o = +h[k >> 3];
      p = +h[e >> 3];
      h[g >> 3] = o - p * +M(+(o / p));
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 10);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 18:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +P(+(+h[k >> 3]), +(+h[e >> 3]));
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     Hc(b, g, k, e, 11);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 19:
    {
     t = t >>> 23;
     e = f + (t << 4) | 0;
     if ((c[f + (t << 4) + 8 >> 2] | 0) == 3) {
      h[g >> 3] = -+h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     } else {
      Hc(b, g, e, e, 12);
      f = c[z >> 2] | 0;
      continue b;
     }
    }
   case 20:
    {
     k = t >>> 23;
     e = c[f + (k << 4) + 8 >> 2] | 0;
     if (!e) e = 1; else if ((e | 0) == 1) e = (c[f + (k << 4) >> 2] | 0) == 0; else e = 0;
     c[g >> 2] = e & 1;
     c[f + (u << 4) + 8 >> 2] = 1;
     continue b;
    }
   case 21:
    {
     Mc(b, g, f + (t >>> 23 << 4) | 0);
     f = c[z >> 2] | 0;
     continue b;
    }
   case 22:
    {
     g = t >>> 23;
     t = t >>> 14 & 511;
     c[R >> 2] = f + (t << 4) + 16;
     ec(b, 1 - g + t | 0);
     t = c[z >> 2] | 0;
     e = t + (u << 4) | 0;
     f = t + (g << 4) | 0;
     q = f;
     r = c[q + 4 >> 2] | 0;
     s = e;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[t + (u << 4) + 8 >> 2] = c[t + (g << 4) + 8 >> 2];
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[R >> 2] = u >>> 0 >= g >>> 0 ? e + 16 | 0 : f;
      pc(b);
      e = c[y >> 2] | 0;
      c[R >> 2] = e;
     } else e = c[y >> 2] | 0;
     f = c[z >> 2] | 0;
     c[R >> 2] = e;
     continue b;
    }
   case 23:
    {
     if (u | 0) $b(b, (c[z >> 2] | 0) + (u << 4) + -16 | 0);
     c[x >> 2] = (c[x >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     continue b;
    }
   case 24:
    {
     g = t >>> 23;
     g = (g & 256 | 0) == 0 ? f + (g << 4) | 0 : w + ((g & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[g + 8 >> 2] | 0) == (c[e + 8 >> 2] | 0)) f = (xc(b, g, e) | 0) != 0; else f = 0;
     e = c[x >> 2] | 0;
     if ((f & 1 | 0) == (u | 0)) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       $b(b, (c[z >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[x >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[x >> 2] = e;
     f = c[z >> 2] | 0;
     continue b;
    }
   case 25:
    {
     s = t >>> 23;
     e = t >>> 14;
     u = (Oc(b, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0) | 0) == (u | 0);
     e = c[x >> 2] | 0;
     if (u) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       $b(b, (c[z >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[x >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[x >> 2] = e;
     f = c[z >> 2] | 0;
     continue b;
    }
   case 26:
    {
     s = t >>> 23;
     e = t >>> 14;
     u = (Qc(b, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0) | 0) == (u | 0);
     e = c[x >> 2] | 0;
     if (u) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       $b(b, (c[z >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[x >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[x >> 2] = e;
     f = c[z >> 2] | 0;
     continue b;
    }
   case 27:
    {
     e = c[f + (u << 4) + 8 >> 2] | 0;
     k = (e | 0) == 0;
     if (!(t & 8372224)) {
      if (!k) if ((e | 0) == 1) {
       if (c[g >> 2] | 0) B = 115;
      } else B = 115;
     } else if (k) B = 115; else if ((e | 0) == 1) if (!(c[g >> 2] | 0)) B = 115;
     if ((B | 0) == 115) {
      B = 0;
      c[x >> 2] = (c[x >> 2] | 0) + 4;
      continue b;
     }
     e = c[x >> 2] | 0;
     k = c[e >> 2] | 0;
     g = k >>> 6 & 255;
     if (g) {
      $b(b, (c[z >> 2] | 0) + (g << 4) + -16 | 0);
      e = c[x >> 2] | 0;
     }
     c[x >> 2] = e + ((k >>> 14) + -131070 << 2);
     continue b;
    }
   case 28:
    {
     k = t >>> 23;
     l = f + (k << 4) | 0;
     k = c[f + (k << 4) + 8 >> 2] | 0;
     e = (k | 0) == 0;
     if (!(t & 8372224)) if (e) B = 127; else if ((k | 0) == 1) if (!(c[l >> 2] | 0)) B = 127; else B = 126; else B = 126; else if (e) B = 126; else if ((k | 0) == 1) if (!(c[l >> 2] | 0)) B = 126; else B = 127; else B = 127;
     if ((B | 0) == 126) {
      B = 0;
      e = (c[x >> 2] | 0) + 4 | 0;
     } else if ((B | 0) == 127) {
      B = 0;
      s = l;
      t = c[s + 4 >> 2] | 0;
      e = g;
      c[e >> 2] = c[s >> 2];
      c[e + 4 >> 2] = t;
      c[f + (u << 4) + 8 >> 2] = k;
      e = c[x >> 2] | 0;
      k = c[e >> 2] | 0;
      g = k >>> 6 & 255;
      if (g) {
       $b(b, (c[z >> 2] | 0) + (g << 4) + -16 | 0);
       e = c[x >> 2] | 0;
      }
      e = e + ((k >>> 14) + -131070 << 2) | 0;
     }
     c[x >> 2] = e;
     continue b;
    }
   case 29:
    {
     f = t >>> 23;
     e = t >>> 14 & 511;
     if (f | 0) c[R >> 2] = g + (f << 4);
     if (!(nc(b, g, e + -1 | 0) | 0)) {
      B = 137;
      break b;
     }
     if (e | 0) c[R >> 2] = c[y >> 2];
     f = c[z >> 2] | 0;
     continue b;
    }
   case 30:
    {
     e = t >>> 23;
     if (e | 0) c[R >> 2] = g + (e << 4);
     if (!(nc(b, g, -1) | 0)) {
      B = 142;
      break b;
     }
     f = c[z >> 2] | 0;
     continue b;
    }
   case 32:
    {
     S = +h[g + 32 >> 3];
     p = S + +h[g >> 3];
     o = +h[g + 16 >> 3];
     if (S > 0.0) {
      if (!(p <= o)) continue b;
     } else if (!(o <= p)) continue b;
     c[x >> 2] = (c[x >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     h[g >> 3] = p;
     c[f + (u << 4) + 8 >> 2] = 3;
     u = g + 48 | 0;
     h[u >> 3] = p;
     c[u + 8 >> 2] = 3;
     continue b;
    }
   case 33:
    {
     l = g + 16 | 0;
     n = g + 32 | 0;
     m = f + (u << 4) + 8 | 0;
     e = c[m >> 2] | 0;
     if ((e | 0) != 3) {
      if ((e & 15 | 0) != 4) {
       B = 162;
       break a;
      }
      u = c[g >> 2] | 0;
      if (!(Ic(u + 16 | 0, c[u + 12 >> 2] | 0, G) | 0)) {
       B = 162;
       break a;
      }
      h[g >> 3] = +h[G >> 3];
      c[m >> 2] = 3;
     }
     k = l + 8 | 0;
     e = c[k >> 2] | 0;
     if ((e | 0) != 3) {
      if ((e & 15 | 0) != 4) {
       B = 167;
       break a;
      }
      u = c[l >> 2] | 0;
      if (!(Ic(u + 16 | 0, c[u + 12 >> 2] | 0, G) | 0)) {
       B = 167;
       break a;
      }
      h[l >> 3] = +h[G >> 3];
      c[k >> 2] = 3;
     }
     k = n + 8 | 0;
     e = c[k >> 2] | 0;
     if ((e | 0) != 3) {
      if ((e & 15 | 0) != 4) {
       B = 172;
       break a;
      }
      u = c[n >> 2] | 0;
      if (!(Ic(u + 16 | 0, c[u + 12 >> 2] | 0, G) | 0)) {
       B = 172;
       break a;
      }
      h[n >> 3] = +h[G >> 3];
      c[k >> 2] = 3;
     }
     h[g >> 3] = +h[g >> 3] - +h[n >> 3];
     c[m >> 2] = 3;
     c[x >> 2] = (c[x >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     continue b;
    }
   case 34:
    {
     k = g + 48 | 0;
     r = g + 32 | 0;
     s = k + 32 | 0;
     q = r;
     n = c[q + 4 >> 2] | 0;
     m = s;
     c[m >> 2] = c[q >> 2];
     c[m + 4 >> 2] = n;
     c[s + 8 >> 2] = c[r + 8 >> 2];
     s = g + 16 | 0;
     r = k + 16 | 0;
     m = s;
     n = c[m + 4 >> 2] | 0;
     q = r;
     c[q >> 2] = c[m >> 2];
     c[q + 4 >> 2] = n;
     c[r + 8 >> 2] = c[s + 8 >> 2];
     r = g;
     s = c[r + 4 >> 2] | 0;
     g = k;
     c[g >> 2] = c[r >> 2];
     c[g + 4 >> 2] = s;
     c[k + 8 >> 2] = c[f + (u << 4) + 8 >> 2];
     c[R >> 2] = k + 48;
     Eb(b, k, t >>> 14 & 511, 1);
     u = c[z >> 2] | 0;
     c[R >> 2] = c[y >> 2];
     g = c[x >> 2] | 0;
     c[x >> 2] = g + 4;
     g = c[g >> 2] | 0;
     f = u;
     k = g;
     g = u + ((g >>> 6 & 255) << 4) | 0;
     break;
    }
   case 35:
    {
     k = t;
     break;
    }
   case 36:
    {
     k = t >>> 23;
     e = t >>> 14 & 511;
     if (!k) k = ((c[R >> 2] | 0) - g >> 4) + -1 | 0;
     if (!e) {
      e = c[x >> 2] | 0;
      c[x >> 2] = e + 4;
      e = (c[e >> 2] | 0) >>> 6;
     }
     n = c[g >> 2] | 0;
     e = k + -50 + (e * 50 | 0) | 0;
     if ((e | 0) > (c[n + 28 >> 2] | 0)) Sc(b, n, e);
     if ((k | 0) > 0) {
      m = n + 5 | 0;
      while (1) {
       l = g + (k << 4) | 0;
       Tc(b, n, e, l);
       e = e + -1 | 0;
       if (c[l + 8 >> 2] & 64 | 0) if (a[(c[l >> 2] | 0) + 5 >> 0] & 3) if (a[m >> 0] & 4) Dc(b, n);
       if ((k | 0) <= 1) break; else k = k + -1 | 0;
      }
     }
     c[R >> 2] = c[y >> 2];
     continue b;
    }
   case 37:
    {
     r = c[(c[(c[A >> 2] | 0) + 16 >> 2] | 0) + (t >>> 14 << 2) >> 2] | 0;
     s = r + 32 | 0;
     k = c[s >> 2] | 0;
     n = c[r + 40 >> 2] | 0;
     q = c[r + 28 >> 2] | 0;
     c : do if (!k) B = 199; else {
      if ((n | 0) > 0) {
       m = k + 16 | 0;
       l = 0;
       do {
        e = d[q + (l << 3) + 5 >> 0] | 0;
        if (!(a[q + (l << 3) + 4 >> 0] | 0)) e = c[(c[v + 16 + (e << 2) >> 2] | 0) + 8 >> 2] | 0; else e = f + (e << 4) | 0;
        if ((c[(c[m + (l << 2) >> 2] | 0) + 8 >> 2] | 0) != (e | 0)) {
         B = 199;
         break c;
        }
        l = l + 1 | 0;
       } while ((l | 0) < (n | 0));
      }
      c[g >> 2] = k;
      c[f + (u << 4) + 8 >> 2] = 70;
     } while (0);
     if ((B | 0) == 199) {
      B = 0;
      m = Uc(b, n) | 0;
      c[m + 12 >> 2] = r;
      c[g >> 2] = m;
      c[f + (u << 4) + 8 >> 2] = 70;
      if ((n | 0) > 0) {
       l = m + 16 | 0;
       e = 0;
       do {
        k = d[q + (e << 3) + 5 >> 0] | 0;
        if (!(a[q + (e << 3) + 4 >> 0] | 0)) c[l + (e << 2) >> 2] = c[v + 16 + (k << 2) >> 2]; else c[l + (e << 2) >> 2] = Vc(b, f + (k << 4) | 0) | 0;
        e = e + 1 | 0;
       } while ((e | 0) != (n | 0));
      }
      if (a[r + 5 >> 0] & 4) Wc(b, r, m);
      c[s >> 2] = m;
     }
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[R >> 2] = g + 16;
      pc(b);
      c[R >> 2] = c[y >> 2];
     }
     f = c[z >> 2] | 0;
     continue b;
    }
   case 38:
    {
     t = t >>> 23;
     e = t + -1 | 0;
     k = (f - (c[j >> 2] | 0) >> 4) - (d[(c[A >> 2] | 0) + 76 >> 0] | 0) | 0;
     n = k + -1 | 0;
     if (!t) {
      if (((c[I >> 2] | 0) - (c[R >> 2] | 0) >> 4 | 0) < (k | 0)) Hb(b, n);
      f = c[z >> 2] | 0;
      g = f + (u << 4) | 0;
      c[R >> 2] = g + (n << 4);
      m = n;
     } else m = e;
     if ((m | 0) <= 0) continue b;
     l = f + (1 - k << 4) | 0;
     e = 0;
     while (1) {
      if ((e | 0) < (n | 0)) {
       k = l + (e << 4) | 0;
       s = k;
       t = c[s + 4 >> 2] | 0;
       u = g + (e << 4) | 0;
       c[u >> 2] = c[s >> 2];
       c[u + 4 >> 2] = t;
       k = c[k + 8 >> 2] | 0;
      } else k = 0;
      c[g + (e << 4) + 8 >> 2] = k;
      e = e + 1 | 0;
      if ((e | 0) == (m | 0)) continue b;
     }
    }
   default:
    continue b;
   } while (0);
   e = c[g + 24 >> 2] | 0;
   if (!e) continue;
   s = g + 16 | 0;
   t = c[s + 4 >> 2] | 0;
   u = g;
   c[u >> 2] = c[s >> 2];
   c[u + 4 >> 2] = t;
   c[g + 8 >> 2] = e;
   c[x >> 2] = (c[x >> 2] | 0) + ((k >>> 14) + -131071 << 2);
  }
  if ((B | 0) == 137) {
   B = 0;
   j = c[D >> 2] | 0;
   A = j + 18 | 0;
   a[A >> 0] = d[A >> 0] | 4;
   continue;
  } else if ((B | 0) == 142) {
   B = 0;
   g = c[D >> 2] | 0;
   j = c[g + 8 >> 2] | 0;
   k = c[g >> 2] | 0;
   l = c[j >> 2] | 0;
   n = g + 24 | 0;
   m = (c[n >> 2] | 0) + (d[(c[(c[k >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] << 4) | 0;
   if ((c[(c[A >> 2] | 0) + 56 >> 2] | 0) > 0) $b(b, c[j + 24 >> 2] | 0);
   if (k >>> 0 < m >>> 0) {
    e = k;
    f = 0;
    do {
     y = e;
     z = c[y + 4 >> 2] | 0;
     A = l + (f << 4) | 0;
     c[A >> 2] = c[y >> 2];
     c[A + 4 >> 2] = z;
     c[l + (f << 4) + 8 >> 2] = c[k + (f << 4) + 8 >> 2];
     f = f + 1 | 0;
     e = k + (f << 4) | 0;
    } while (e >>> 0 < m >>> 0);
   }
   A = k;
   c[j + 24 >> 2] = l + ((c[n >> 2] | 0) - A >> 4 << 4);
   A = l + ((c[R >> 2] | 0) - A >> 4 << 4) | 0;
   c[R >> 2] = A;
   c[j + 4 >> 2] = A;
   c[j + 28 >> 2] = c[g + 28 >> 2];
   A = j + 18 | 0;
   a[A >> 0] = d[A >> 0] | 64;
   c[D >> 2] = j;
   continue;
  } else if ((B | 0) == 147) {
   B = 0;
   e = e >>> 23;
   if (e | 0) c[R >> 2] = g + (e << 4) + -16;
   if ((c[(c[A >> 2] | 0) + 56 >> 2] | 0) > 0) $b(b, f);
   f = Rc(b, g) | 0;
   if (!(a[j + 18 >> 0] & 4)) {
    B = 221;
    break;
   }
   e = c[D >> 2] | 0;
   if (!f) {
    j = e;
    continue;
   }
   c[R >> 2] = c[e + 4 >> 2];
   j = e;
   continue;
  }
 }
 if ((B | 0) == 22) {
  if (!q) {
   O = e + -4 | 0;
   c[f >> 2] = O;
   O = a[r >> 0] | 0;
   O = O & 255;
   O = O | 128;
   O = O & 255;
   a[r >> 0] = O;
   O = c[R >> 2] | 0;
   O = O + -16 | 0;
   c[s >> 2] = O;
   Ib(b, 1);
  }
  c[Q >> 2] = 1;
  Q = e + -4 | 0;
  c[f >> 2] = Q;
  Q = a[r >> 0] | 0;
  Q = Q & 255;
  Q = Q | 128;
  Q = Q & 255;
  a[r >> 0] = Q;
  R = c[R >> 2] | 0;
  R = R + -16 | 0;
  c[s >> 2] = R;
  Ib(b, 1);
 } else if ((B | 0) == 162) Fb(b, 4952, K); else if ((B | 0) == 167) Fb(b, 4989, L); else if ((B | 0) == 172) Fb(b, 5018, N); else if ((B | 0) == 221) {
  i = O;
  return;
 }
}

function xe(e) {
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 G = i;
 i = i + 192 | 0;
 u = G + 184 | 0;
 q = G + 168 | 0;
 x = G + 152 | 0;
 n = G + 136 | 0;
 o = G + 120 | 0;
 p = G + 104 | 0;
 m = G + 88 | 0;
 l = G + 80 | 0;
 B = G + 48 | 0;
 v = G + 24 | 0;
 r = G;
 A = e + 4 | 0;
 C = c[A >> 2] | 0;
 E = e + 48 | 0;
 y = c[E >> 2] | 0;
 F = e + 52 | 0;
 k = (c[F >> 2] | 0) + 38 | 0;
 D = (b[k >> 1] | 0) + 1 << 16 >> 16;
 b[k >> 1] = D;
 if ((D & 65535) > 200) {
  k = y + 12 | 0;
  h = c[(c[k >> 2] | 0) + 52 >> 2] | 0;
  j = c[(c[y >> 2] | 0) + 64 >> 2] | 0;
  if (!j) {
   H = 6600;
   c[m >> 2] = 6971;
   D = m + 4 | 0;
   c[D >> 2] = 200;
   D = m + 8 | 0;
   c[D >> 2] = H;
   D = lc(h, 6614, m) | 0;
   H = c[k >> 2] | 0;
   me(H, D);
  }
  c[l >> 2] = j;
  D = lc(h, 6580, l) | 0;
  c[m >> 2] = 6971;
  H = m + 4 | 0;
  c[H >> 2] = 200;
  H = m + 8 | 0;
  c[H >> 2] = D;
  H = lc(h, 6614, m) | 0;
  D = c[k >> 2] | 0;
  me(D, H);
 }
 D = e + 16 | 0;
 do switch (c[D >> 2] | 0) {
 case 59:
  {
   pe(e);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 267:
  {
   c[v >> 2] = -1;
   ye(e, v);
   a : while (1) {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 260:
     {
      z = 10;
      break a;
     }
    case 261:
     break;
    default:
     break a;
    }
    ye(e, v);
   }
   if ((z | 0) == 10) {
    pe(e);
    g = c[E >> 2] | 0;
    a[B + 10 >> 0] = 0;
    a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
    H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
    b[B + 4 >> 1] = c[H + 28 >> 2];
    b[B + 6 >> 1] = c[H + 16 >> 2];
    a[B + 9 >> 0] = 0;
    H = g + 16 | 0;
    c[B >> 2] = c[H >> 2];
    c[H >> 2] = B;
    b : do {
     f = c[D >> 2] | 0;
     switch (f | 0) {
     case 277:
     case 286:
     case 262:
     case 261:
     case 260:
      break b;
     default:
      {}
     }
     xe(e);
    } while ((f | 0) != 274);
    af(g);
    f = c[D >> 2] | 0;
   }
   if ((f | 0) == 262) {
    pe(e);
    df(y, c[v >> 2] | 0);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Ne(e, 262); else {
    H = c[F >> 2] | 0;
    F = Oe(e, 262) | 0;
    G = Oe(e, 267) | 0;
    c[p >> 2] = F;
    c[p + 4 >> 2] = G;
    c[p + 8 >> 2] = C;
    me(e, lc(H, 7159, p) | 0);
   }
   break;
  }
 case 278:
  {
   pe(e);
   j = zf(y) | 0;
   ze(e, B, 0) | 0;
   if ((c[B >> 2] | 0) == 1) c[B >> 2] = 3;
   tf(c[E >> 2] | 0, B);
   h = c[B + 20 >> 2] | 0;
   a[v + 10 >> 0] = 1;
   a[v + 8 >> 0] = a[y + 46 >> 0] | 0;
   H = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[v + 4 >> 1] = c[H + 28 >> 2];
   b[v + 6 >> 1] = c[H + 16 >> 2];
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   c[H >> 2] = v;
   if ((c[D >> 2] | 0) != 259) Ne(e, 259);
   pe(e);
   g = c[E >> 2] | 0;
   a[B + 10 >> 0] = 0;
   a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
   H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[B + 4 >> 1] = c[H + 28 >> 2];
   b[B + 6 >> 1] = c[H + 16 >> 2];
   a[B + 9 >> 0] = 0;
   H = g + 16 | 0;
   c[B >> 2] = c[H >> 2];
   c[H >> 2] = B;
   c : do {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break c;
    default:
     {}
    }
    xe(e);
   } while ((f | 0) != 274);
   af(g);
   hf(y, bf(y) | 0, j);
   if ((c[D >> 2] | 0) == 262) {
    pe(e);
    af(y);
    df(y, h);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Ne(e, 262); else {
    H = c[F >> 2] | 0;
    F = Oe(e, 262) | 0;
    G = Oe(e, 278) | 0;
    c[o >> 2] = F;
    c[o + 4 >> 2] = G;
    c[o + 8 >> 2] = C;
    me(e, lc(H, 7159, o) | 0);
   }
   break;
  }
 case 259:
  {
   pe(e);
   g = c[E >> 2] | 0;
   a[B + 10 >> 0] = 0;
   a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
   H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[B + 4 >> 1] = c[H + 28 >> 2];
   b[B + 6 >> 1] = c[H + 16 >> 2];
   a[B + 9 >> 0] = 0;
   H = g + 16 | 0;
   c[B >> 2] = c[H >> 2];
   c[H >> 2] = B;
   d : do {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break d;
    default:
     {}
    }
    xe(e);
   } while ((f | 0) != 274);
   af(g);
   if ((c[D >> 2] | 0) == 262) {
    pe(e);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Ne(e, 262); else {
    H = c[F >> 2] | 0;
    F = Oe(e, 262) | 0;
    G = Oe(e, 259) | 0;
    c[n >> 2] = F;
    c[n + 4 >> 2] = G;
    c[n + 8 >> 2] = C;
    me(e, lc(H, 7159, n) | 0);
   }
   break;
  }
 case 264:
  {
   a[v + 10 >> 0] = 1;
   a[v + 8 >> 0] = a[y + 46 >> 0] | 0;
   H = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[v + 4 >> 1] = c[H + 28 >> 2];
   b[v + 6 >> 1] = c[H + 16 >> 2];
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   c[H >> 2] = v;
   pe(e);
   if ((c[D >> 2] | 0) != 288) Ne(e, 288);
   h = e + 24 | 0;
   j = c[h >> 2] | 0;
   pe(e);
   switch (c[D >> 2] | 0) {
   case 61:
    {
     f = c[E >> 2] | 0;
     h = f + 48 | 0;
     g = d[h >> 0] | 0;
     Xe(e, We(e, 7481, 11) | 0);
     Xe(e, We(e, 7493, 11) | 0);
     Xe(e, We(e, 7505, 10) | 0);
     Xe(e, j);
     if ((c[D >> 2] | 0) != 61) Ne(e, 61);
     pe(e);
     ze(e, B, 0) | 0;
     Me(c[E >> 2] | 0, B);
     if ((c[D >> 2] | 0) != 44) Ne(e, 44);
     pe(e);
     ze(e, B, 0) | 0;
     Me(c[E >> 2] | 0, B);
     if ((c[D >> 2] | 0) == 44) {
      pe(e);
      ze(e, B, 0) | 0;
      Me(c[E >> 2] | 0, B);
     } else {
      H = d[h >> 0] | 0;
      Bf(f, H, Af(f, 1.0) | 0) | 0;
      Ye(f, 1);
     }
     Cf(e, g, C, 1, 1);
     break;
    }
   case 268:
   case 44:
    {
     k = c[E >> 2] | 0;
     l = d[k + 48 >> 0] | 0;
     Xe(e, We(e, 7516, 15) | 0);
     Xe(e, We(e, 7532, 11) | 0);
     Xe(e, We(e, 7544, 13) | 0);
     Xe(e, j);
     f = c[D >> 2] | 0;
     do if ((f | 0) == 44) {
      g = 4;
      while (1) {
       pe(e);
       if ((c[D >> 2] | 0) != 288) {
        z = 52;
        break;
       }
       f = c[h >> 2] | 0;
       pe(e);
       Xe(e, f);
       f = c[D >> 2] | 0;
       if ((f | 0) == 44) g = g + 1 | 0; else {
        z = 54;
        break;
       }
      }
      if ((z | 0) == 52) Ne(e, 288); else if ((z | 0) == 54) {
       s = f;
       w = g + -2 | 0;
       break;
      }
     } else {
      s = f;
      w = 1;
     } while (0);
     if ((s | 0) != 268) Ne(e, 268);
     pe(e);
     h = c[A >> 2] | 0;
     ze(e, B, 0) | 0;
     if ((c[D >> 2] | 0) == 44) {
      f = 1;
      do {
       pe(e);
       Me(c[E >> 2] | 0, B);
       ze(e, B, 0) | 0;
       f = f + 1 | 0;
      } while ((c[D >> 2] | 0) == 44);
     } else f = 1;
     g = c[E >> 2] | 0;
     f = 3 - f | 0;
     switch (c[B >> 2] | 0) {
     case 13:
     case 12:
      {
       f = f + 1 | 0;
       f = (f | 0) < 0 ? 0 : f;
       Te(g, B, f);
       if ((f | 0) > 1) Ye(g, f + -1 | 0);
       break;
      }
     case 0:
      {
       z = 63;
       break;
      }
     default:
      {
       Me(g, B);
       z = 63;
      }
     }
     if ((z | 0) == 63) if ((f | 0) > 0) {
      H = d[g + 48 >> 0] | 0;
      Ye(g, f);
      Df(g, H, f);
     }
     Ef(k, 3);
     Cf(e, l, h, w, 0);
     break;
    }
   default:
    me(e, 7558);
   }
   if ((c[D >> 2] | 0) == 262) {
    pe(e);
    af(y);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Ne(e, 262); else {
    H = c[F >> 2] | 0;
    F = Oe(e, 262) | 0;
    G = Oe(e, 264) | 0;
    c[x >> 2] = F;
    c[x + 4 >> 2] = G;
    c[x + 8 >> 2] = C;
    me(e, lc(H, 7159, x) | 0);
   }
   break;
  }
 case 273:
  {
   g = zf(y) | 0;
   a[v + 10 >> 0] = 1;
   w = a[y + 46 >> 0] | 0;
   a[v + 8 >> 0] = w;
   j = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   x = c[j + 28 >> 2] & 65535;
   b[v + 4 >> 1] = x;
   j = c[j + 16 >> 2] & 65535;
   b[v + 6 >> 1] = j;
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   a[r + 10 >> 0] = 0;
   h = r + 8 | 0;
   a[h >> 0] = w;
   b[r + 4 >> 1] = x;
   b[r + 6 >> 1] = j;
   j = r + 9 | 0;
   a[j >> 0] = 0;
   c[r >> 2] = v;
   c[H >> 2] = r;
   pe(e);
   e : while (1) {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break e;
    default:
     {}
    }
    xe(e);
    if ((f | 0) == 274) {
     z = 75;
     break;
    }
   }
   if ((z | 0) == 75) f = c[D >> 2] | 0;
   if ((f | 0) != 277) if ((c[A >> 2] | 0) == (C | 0)) Ne(e, 277); else {
    H = c[F >> 2] | 0;
    A = Oe(e, 277) | 0;
    D = Oe(e, 273) | 0;
    c[q >> 2] = A;
    c[q + 4 >> 2] = D;
    c[q + 8 >> 2] = C;
    me(e, lc(H, 7159, q) | 0);
   }
   pe(e);
   ze(e, B, 0) | 0;
   if ((c[B >> 2] | 0) == 1) c[B >> 2] = 3;
   tf(c[E >> 2] | 0, B);
   f = c[B + 20 >> 2] | 0;
   if (a[j >> 0] | 0) cf(y, f, d[h >> 0] | 0);
   af(y);
   hf(y, f, g);
   af(y);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 265:
  {
   pe(e);
   if ((c[D >> 2] | 0) != 288) Ne(e, 288);
   f = c[e + 24 >> 2] | 0;
   pe(e);
   g = c[E >> 2] | 0;
   if (!(lf(g, f, v, 1) | 0)) {
    lf(g, c[e + 72 >> 2] | 0, v, 1) | 0;
    H = Je(c[E >> 2] | 0, f) | 0;
    c[B + 16 >> 2] = -1;
    c[B + 20 >> 2] = -1;
    c[B >> 2] = 4;
    c[B + 8 >> 2] = H;
    mf(g, v, B);
   }
   f : while (1) {
    switch (c[D >> 2] | 0) {
    case 58:
     {
      z = 91;
      break f;
     }
    case 46:
     break;
    default:
     {
      f = 0;
      break f;
     }
    }
    nf(e, v);
   }
   if ((z | 0) == 91) {
    nf(e, v);
    f = 1;
   }
   Ve(e, r, f, C);
   Ff(c[E >> 2] | 0, v, r);
   rf(c[E >> 2] | 0, C);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 269:
  {
   pe(e);
   h = c[D >> 2] | 0;
   if ((h | 0) == 265) {
    pe(e);
    f = c[E >> 2] | 0;
    if ((c[D >> 2] | 0) != 288) Ne(e, 288);
    D = c[e + 24 >> 2] | 0;
    pe(e);
    Xe(e, D);
    D = c[E >> 2] | 0;
    C = D + 46 | 0;
    H = (d[C >> 0] | 0) + 1 | 0;
    a[C >> 0] = H;
    c[(c[(c[D >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[D + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[D + 40 >> 2] | 0) + (H & 255) + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[D + 20 >> 2];
    Ve(e, B, 0, c[A >> 2] | 0);
    c[(c[(c[f >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[f + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[f + 40 >> 2] | 0) + (c[B + 8 >> 2] | 0) << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[f + 20 >> 2];
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((h | 0) != 288) Ne(e, 288);
   j = e + 24 | 0;
   h = 0;
   g : while (1) {
    H = c[j >> 2] | 0;
    pe(e);
    Xe(e, H);
    h = h + 1 | 0;
    switch (c[D >> 2] | 0) {
    case 61:
     {
      f = h;
      z = 102;
      break g;
     }
    case 44:
     break;
    default:
     {
      f = h;
      z = 104;
      break g;
     }
    }
    pe(e);
    if ((c[D >> 2] | 0) != 288) {
     z = 99;
     break;
    }
   }
   if ((z | 0) == 99) Ne(e, 288); else if ((z | 0) == 102) {
    pe(e);
    ze(e, B, 0) | 0;
    if ((c[D >> 2] | 0) == 44) {
     g = 1;
     do {
      pe(e);
      Me(c[E >> 2] | 0, B);
      ze(e, B, 0) | 0;
      g = g + 1 | 0;
     } while ((c[D >> 2] | 0) == 44);
    } else g = 1;
   } else if ((z | 0) == 104) {
    c[B >> 2] = 0;
    g = 0;
   }
   h = c[E >> 2] | 0;
   g = f - g | 0;
   switch (c[B >> 2] | 0) {
   case 13:
   case 12:
    {
     g = g + 1 | 0;
     g = (g | 0) < 0 ? 0 : g;
     Te(h, B, g);
     if ((g | 0) > 1) Ye(h, g + -1 | 0);
     break;
    }
   case 0:
    {
     z = 109;
     break;
    }
   default:
    {
     Me(h, B);
     z = 109;
    }
   }
   if ((z | 0) == 109) if ((g | 0) > 0) {
    H = d[h + 48 >> 0] | 0;
    Ye(h, g);
    Df(h, H, g);
   }
   H = c[E >> 2] | 0;
   j = H + 46 | 0;
   k = (d[j >> 0] | 0) + f | 0;
   a[j >> 0] = k;
   j = c[H + 20 >> 2] | 0;
   g = c[(c[H >> 2] | 0) + 24 >> 2] | 0;
   h = c[c[(c[H + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
   k = (c[H + 40 >> 2] | 0) + (k & 255) | 0;
   do {
    c[g + ((b[h + (k - f << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = j;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 285:
  {
   pe(e);
   if ((c[D >> 2] | 0) != 288) Ne(e, 288);
   l = c[e + 24 >> 2] | 0;
   pe(e);
   g = c[E >> 2] | 0;
   p = e + 64 | 0;
   j = c[p >> 2] | 0;
   o = j + 24 | 0;
   n = g + 16 | 0;
   f = b[(c[n >> 2] | 0) + 4 >> 1] | 0;
   m = j + 28 | 0;
   h : do if ((f | 0) < (c[m >> 2] | 0)) {
    while (1) {
     if (ef(l, c[(c[o >> 2] | 0) + (f << 4) >> 2] | 0) | 0) break;
     f = f + 1 | 0;
     if ((f | 0) >= (c[m >> 2] | 0)) break h;
    }
    B = g + 12 | 0;
    H = c[(c[B >> 2] | 0) + 52 >> 2] | 0;
    A = c[(c[o >> 2] | 0) + (f << 4) + 8 >> 2] | 0;
    c[u >> 2] = l + 16;
    c[u + 4 >> 2] = A;
    H = lc(H, 7579, u) | 0;
    gf(c[B >> 2] | 0, H);
   } while (0);
   if ((c[D >> 2] | 0) != 285) Ne(e, 285);
   pe(e);
   h = c[g + 20 >> 2] | 0;
   k = c[m >> 2] | 0;
   f = j + 32 | 0;
   if ((k | 0) < (c[f >> 2] | 0)) {
    f = c[o >> 2] | 0;
    g = k;
   } else {
    f = oe(c[F >> 2] | 0, c[o >> 2] | 0, f, 16, 32767, 7258) | 0;
    c[o >> 2] = f;
    g = c[m >> 2] | 0;
   }
   c[f + (k << 4) >> 2] = l;
   c[f + (k << 4) + 8 >> 2] = C;
   a[f + (k << 4) + 12 >> 0] = a[(c[E >> 2] | 0) + 46 >> 0] | 0;
   c[f + (k << 4) + 4 >> 2] = h;
   c[m >> 2] = g + 1;
   i : while (1) {
    switch (c[D >> 2] | 0) {
    case 286:
    case 262:
    case 261:
    case 260:
     {
      z = 130;
      break i;
     }
    case 285:
    case 59:
     break;
    default:
     {
      z = 129;
      break i;
     }
    }
    xe(e);
   }
   if ((z | 0) == 129) f = c[o >> 2] | 0; else if ((z | 0) == 130) {
    f = c[o >> 2] | 0;
    a[f + (k << 4) + 12 >> 0] = a[(c[n >> 2] | 0) + 8 >> 0] | 0;
   }
   k = f + (k << 4) | 0;
   f = c[p >> 2] | 0;
   h = b[(c[(c[E >> 2] | 0) + 16 >> 2] | 0) + 6 >> 1] | 0;
   j = f + 16 | 0;
   if ((h | 0) >= (c[j >> 2] | 0)) {
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   g = f + 12 | 0;
   f = h;
   j : while (1) {
    while (1) {
     if (!(ef(c[(c[g >> 2] | 0) + (f << 4) >> 2] | 0, c[k >> 2] | 0) | 0)) break;
     ff(e, f, k);
     if ((f | 0) >= (c[j >> 2] | 0)) {
      z = 165;
      break j;
     }
    }
    f = f + 1 | 0;
    if ((f | 0) >= (c[j >> 2] | 0)) {
     z = 165;
     break;
    }
   }
   if ((z | 0) == 165) {
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   break;
  }
 case 274:
  {
   pe(e);
   h = c[E >> 2] | 0;
   k : do switch (c[D >> 2] | 0) {
   case 59:
   case 277:
   case 286:
   case 262:
   case 261:
   case 260:
    {
     g = 0;
     f = 0;
     break;
    }
   default:
    {
     ze(e, B, 0) | 0;
     if ((c[D >> 2] | 0) == 44) {
      f = 1;
      do {
       pe(e);
       Me(c[E >> 2] | 0, B);
       ze(e, B, 0) | 0;
       f = f + 1 | 0;
      } while ((c[D >> 2] | 0) == 44);
     } else f = 1;
     if ((c[B >> 2] & -2 | 0) == 12) {
      Te(h, B, -1);
      if ((f | 0) == 1 & (c[B >> 2] | 0) == 12) {
       H = (c[(c[h >> 2] | 0) + 12 >> 2] | 0) + (c[B + 8 >> 2] << 2) | 0;
       c[H >> 2] = c[H >> 2] & -64 | 30;
      }
      g = d[h + 46 >> 0] | 0;
      f = -1;
      break k;
     } else if ((f | 0) == 1) {
      g = Be(h, B) | 0;
      f = 1;
      break k;
     } else {
      Me(h, B);
      g = d[h + 46 >> 0] | 0;
      break k;
     }
    }
   } while (0);
   $e(h, g, f);
   if ((c[D >> 2] | 0) == 59) pe(e);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 266:
 case 258:
  {
   l = bf(y) | 0;
   k = c[A >> 2] | 0;
   H = (c[D >> 2] | 0) == 266;
   pe(e);
   do if (H) if ((c[D >> 2] | 0) == 288) {
    t = c[e + 24 >> 2] | 0;
    pe(e);
    break;
   } else Ne(e, 288); else t = _c(c[F >> 2] | 0, 7252) | 0; while (0);
   g = c[e + 64 >> 2] | 0;
   f = g + 12 | 0;
   j = g + 16 | 0;
   h = c[j >> 2] | 0;
   g = g + 20 | 0;
   if ((h | 0) < (c[g >> 2] | 0)) {
    f = c[f >> 2] | 0;
    g = h;
   } else {
    g = oe(c[F >> 2] | 0, c[f >> 2] | 0, g, 16, 32767, 7258) | 0;
    c[f >> 2] = g;
    f = g;
    g = c[j >> 2] | 0;
   }
   c[f + (h << 4) >> 2] = t;
   c[f + (h << 4) + 8 >> 2] = k;
   a[f + (h << 4) + 12 >> 0] = a[(c[E >> 2] | 0) + 46 >> 0] | 0;
   c[f + (h << 4) + 4 >> 2] = l;
   c[j >> 2] = g + 1;
   jf(e, h) | 0;
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 default:
  {
   f = B + 8 | 0;
   kf(e, f);
   l : do switch (c[D >> 2] | 0) {
   case 44:
   case 61:
    {
     c[B >> 2] = 0;
     Gf(e, B, 1);
     break;
    }
   default:
    if ((c[f >> 2] | 0) == 12) {
     H = (c[(c[y >> 2] | 0) + 12 >> 2] | 0) + (c[B + 16 >> 2] << 2) | 0;
     c[H >> 2] = c[H >> 2] & -8372225 | 16384;
     break l;
    } else me(e, 7617);
   } while (0);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 } while (0);
}

function hj(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0;
 Ea = i;
 i = i + 96 | 0;
 aa = Ea + 80 | 0;
 $ = Ea + 72 | 0;
 _ = Ea + 64 | 0;
 Z = Ea + 56 | 0;
 Y = Ea + 48 | 0;
 ca = Ea + 40 | 0;
 ba = Ea + 32 | 0;
 ia = Ea + 24 | 0;
 ga = Ea + 16 | 0;
 fa = Ea + 8 | 0;
 za = c[b >> 2] | 0;
 c[b >> 2] = za + -1;
 if (!za) md(c[b + 16 >> 2] | 0, 10321, Ea) | 0;
 Q = b + 12 | 0;
 k = c[Q >> 2] | 0;
 if ((k | 0) == (f | 0)) {
  Da = e;
  Ca = c[b >> 2] | 0;
  Ca = Ca + 1 | 0;
  c[b >> 2] = Ca;
  i = Ea;
  return Da | 0;
 }
 za = b + 8 | 0;
 la = b + 16 | 0;
 X = b + 4 | 0;
 ma = b + 20 | 0;
 a : while (1) {
  z = e + -1 | 0;
  y = f;
  b : while (1) {
   f = a[y >> 0] | 0;
   c : do switch (f << 24 >> 24 | 0) {
   case 40:
    {
     ea = y;
     ha = e;
     na = 7;
     break a;
    }
   case 41:
    {
     K = y;
     ka = e;
     na = 16;
     break a;
    }
   case 36:
    {
     f = y + 1 | 0;
     if ((f | 0) == (k | 0)) {
      V = e;
      na = 23;
      break a;
     } else {
      C = f;
      B = f;
      na = 91;
     }
     break;
    }
   case 37:
    {
     n = y + 1 | 0;
     f = a[n >> 0] | 0;
     switch (f << 24 >> 24 | 0) {
     case 98:
      {
       D = k;
       L = y;
       na = 25;
       break b;
      }
     case 57:
     case 56:
     case 55:
     case 54:
     case 53:
     case 52:
     case 51:
     case 50:
     case 49:
     case 48:
      {
       E = f;
       M = y;
       na = 71;
       break b;
      }
     case 102:
      break;
     default:
      {
       if ((n | 0) == (k | 0)) md(c[la >> 2] | 0, 10465, $) | 0;
       C = n;
       B = y + 2 | 0;
       na = 91;
       break c;
      }
     }
     u = y + 2 | 0;
     if ((a[u >> 0] | 0) == 91) k = 91; else {
      md(c[la >> 2] | 0, 10430, ca) | 0;
      k = a[u >> 0] | 0;
     }
     v = y + 3 | 0;
     switch (k << 24 >> 24 | 0) {
     case 37:
      {
       if ((v | 0) == (c[Q >> 2] | 0)) md(c[la >> 2] | 0, 10465, Y) | 0;
       x = y + 4 | 0;
       break;
      }
     case 91:
      {
       f = (a[v >> 0] | 0) == 94 ? y + 4 | 0 : v;
       while (1) {
        if ((f | 0) == (c[Q >> 2] | 0)) md(c[la >> 2] | 0, 10500, Z) | 0;
        k = f + 1 | 0;
        if ((a[f >> 0] | 0) == 37) k = k >>> 0 < (c[Q >> 2] | 0) >>> 0 ? f + 2 | 0 : k;
        if ((a[k >> 0] | 0) == 93) break; else f = k;
       }
       x = k + 1 | 0;
       break;
      }
     default:
      x = v;
     }
     if ((e | 0) == (c[X >> 2] | 0)) f = 0; else f = a[z >> 0] | 0;
     t = f & 255;
     w = x + -1 | 0;
     s = (a[v >> 0] | 0) == 94;
     o = s ? v : u;
     s = s & 1;
     k = s ^ 1;
     n = o + 1 | 0;
     d : do if (n >>> 0 < w >>> 0) {
      r = f & 255;
      while (1) {
       q = a[n >> 0] | 0;
       f = o + 2 | 0;
       p = a[f >> 0] | 0;
       do if (q << 24 >> 24 == 37) {
        if (ij(t, p & 255) | 0) break d;
       } else {
        if (p << 24 >> 24 == 45) {
         f = o + 3 | 0;
         if (f >>> 0 < w >>> 0) {
          if ((q & 255) >>> 0 > t >>> 0) break;
          if ((d[f >> 0] | 0) >>> 0 < t >>> 0) break; else break d;
         }
        }
        if (q << 24 >> 24 == r << 24 >> 24) break d; else f = n;
       } while (0);
       n = f + 1 | 0;
       if (n >>> 0 >= w >>> 0) {
        k = s;
        break;
       } else o = f;
      }
     } else k = s; while (0);
     if (k | 0) {
      h = 0;
      na = 150;
      break a;
     }
     s = a[e >> 0] | 0;
     t = s & 255;
     r = (a[v >> 0] | 0) == 94;
     n = r ? v : u;
     r = r & 1;
     k = r ^ 1;
     f = n + 1 | 0;
     e : do if (f >>> 0 < w >>> 0) {
      p = n;
      while (1) {
       q = a[f >> 0] | 0;
       n = p + 2 | 0;
       o = a[n >> 0] | 0;
       do if (q << 24 >> 24 == 37) {
        if (ij(t, o & 255) | 0) break e;
       } else {
        if (o << 24 >> 24 == 45) {
         n = p + 3 | 0;
         if (n >>> 0 < w >>> 0) {
          if ((q & 255) > (s & 255)) break;
          if ((d[n >> 0] | 0) < (s & 255)) break; else break e;
         }
        }
        if (q << 24 >> 24 == s << 24 >> 24) break e; else n = f;
       } while (0);
       f = n + 1 | 0;
       if (f >>> 0 >= w >>> 0) {
        k = r;
        break;
       } else p = n;
      }
     } else k = r; while (0);
     if (!k) {
      h = 0;
      na = 150;
      break a;
     }
     break;
    }
   default:
    {
     n = y + 1 | 0;
     if (f << 24 >> 24 == 91) {
      f = (a[n >> 0] | 0) == 94 ? y + 2 | 0 : n;
      while (1) {
       if ((f | 0) == (k | 0)) md(c[la >> 2] | 0, 10500, aa) | 0;
       k = f + 1 | 0;
       if ((a[f >> 0] | 0) == 37) f = k >>> 0 < (c[Q >> 2] | 0) >>> 0 ? f + 2 | 0 : k; else f = k;
       if ((a[f >> 0] | 0) == 93) break;
       k = c[Q >> 2] | 0;
      }
      C = n;
      B = f + 1 | 0;
      na = 91;
     } else {
      C = n;
      B = n;
      na = 91;
     }
    }
   } while (0);
   if ((na | 0) == 91) {
    na = 0;
    if ((c[za >> 2] | 0) >>> 0 > e >>> 0) {
     t = a[e >> 0] | 0;
     u = t & 255;
     k = a[y >> 0] | 0;
     f : do switch (k << 24 >> 24 | 0) {
     case 46:
      {
       H = C;
       N = y;
       S = B;
       na = 94;
       break b;
      }
     case 37:
      {
       f = ij(u, d[C >> 0] | 0) | 0;
       break;
      }
     case 91:
      {
       s = B + -1 | 0;
       r = (a[C >> 0] | 0) == 94;
       n = r ? C : y;
       r = r & 1;
       f = r ^ 1;
       k = n + 1 | 0;
       if (k >>> 0 < s >>> 0) {
        p = n;
        while (1) {
         q = a[k >> 0] | 0;
         n = p + 2 | 0;
         o = a[n >> 0] | 0;
         do if (q << 24 >> 24 == 37) {
          if (ij(u, o & 255) | 0) break f;
         } else {
          if (o << 24 >> 24 == 45) {
           n = p + 3 | 0;
           if (n >>> 0 < s >>> 0) {
            if ((q & 255) > (t & 255)) break;
            if ((d[n >> 0] | 0) < (t & 255)) break; else break f;
           }
          }
          if (q << 24 >> 24 == t << 24 >> 24) break f; else n = k;
         } while (0);
         k = n + 1 | 0;
         if (k >>> 0 >= s >>> 0) {
          f = r;
          break;
         } else p = n;
        }
       } else f = r;
       break;
      }
     default:
      f = k << 24 >> 24 == t << 24 >> 24 & 1;
     } while (0);
     k = a[B >> 0] | 0;
     if (f) {
      G = k;
      J = C;
      O = y;
      T = B;
      na = 109;
      break;
     }
    } else k = a[B >> 0] | 0;
    switch (k << 24 >> 24) {
    case 45:
    case 63:
    case 42:
     break;
    default:
     {
      h = 0;
      na = 150;
      break a;
     }
    }
    x = B + 1 | 0;
   }
   k = c[Q >> 2] | 0;
   if ((x | 0) == (k | 0)) {
    h = e;
    na = 150;
    break a;
   } else y = x;
  }
  if ((na | 0) == 25) {
   na = 0;
   j = L + 2 | 0;
   if ((D + -1 | 0) >>> 0 <= j >>> 0) md(c[la >> 2] | 0, 10383, ba) | 0;
   q = a[e >> 0] | 0;
   if (q << 24 >> 24 != (a[j >> 0] | 0)) {
    h = 0;
    na = 150;
    break;
   }
   o = a[L + 3 >> 0] | 0;
   j = e + 1 | 0;
   p = c[za >> 2] | 0;
   if (j >>> 0 < p >>> 0) {
    f = 1;
    n = j;
    j = e;
   } else {
    h = 0;
    na = 150;
    break;
   }
   while (1) {
    k = a[n >> 0] | 0;
    if (k << 24 >> 24 == o << 24 >> 24) {
     k = f + -1 | 0;
     if (!k) break; else j = k;
    } else j = (k << 24 >> 24 == q << 24 >> 24 & 1) + f | 0;
    k = n + 1 | 0;
    if (k >>> 0 < p >>> 0) {
     A = n;
     f = j;
     n = k;
     j = A;
    } else {
     h = 0;
     na = 150;
     break a;
    }
   }
   A = L + 4 | 0;
   j = j + 2 | 0;
  } else if ((na | 0) == 71) {
   na = 0;
   k = E & 255;
   f = k + -49 | 0;
   if ((E & 255) < 49) na = 74; else if ((f | 0) < (c[ma >> 2] | 0)) {
    j = c[b + 24 + (f << 3) + 4 >> 2] | 0;
    if ((j | 0) == -1) na = 74; else {
     F = j;
     R = f;
    }
   } else na = 74;
   if ((na | 0) == 74) {
    na = 0;
    R = c[la >> 2] | 0;
    c[_ >> 2] = k + -48;
    R = md(R, 10532, _) | 0;
    F = c[b + 24 + (R << 3) + 4 >> 2] | 0;
   }
   if (((c[za >> 2] | 0) - e | 0) >>> 0 < F >>> 0) {
    h = 0;
    na = 150;
    break;
   }
   j = e + F | 0;
   if ((j | 0) == 0 | (fm(c[b + 24 + (R << 3) >> 2] | 0, e, F) | 0) != 0) {
    h = 0;
    na = 150;
    break;
   }
   A = M + 2 | 0;
  } else if ((na | 0) == 94) {
   G = a[S >> 0] | 0;
   J = H;
   O = N;
   T = S;
   na = 109;
  }
  g : do if ((na | 0) == 109) {
   na = 0;
   switch (G << 24 >> 24 | 0) {
   case 43:
    {
     I = J;
     P = O;
     U = T;
     W = e;
     na = 112;
     break a;
    }
   case 42:
    {
     ya = J;
     Ba = O;
     Ca = T;
     Da = e;
     break a;
    }
   case 45:
    {
     ta = J;
     ua = O;
     da = T;
     g = e;
     na = 110;
     break a;
    }
   case 63:
    {
     j = T + 1 | 0;
     k = hj(b, e + 1 | 0, j) | 0;
     if (!k) {
      A = j;
      j = e;
      break g;
     } else {
      h = k;
      na = 150;
      break a;
     }
    }
   default:
    {
     A = T;
     j = e + 1 | 0;
     break g;
    }
   }
  } while (0);
  k = c[Q >> 2] | 0;
  if ((A | 0) == (k | 0)) {
   h = j;
   na = 150;
   break;
  } else {
   f = A;
   e = j;
  }
 }
 if ((na | 0) == 7) {
  h = ea + 1 | 0;
  if ((a[h >> 0] | 0) == 41) {
   g = c[ma >> 2] | 0;
   if ((g | 0) > 31) md(c[la >> 2] | 0, 10341, fa) | 0;
   c[b + 24 + (g << 3) >> 2] = ha;
   c[b + 24 + (g << 3) + 4 >> 2] = -2;
   c[ma >> 2] = g + 1;
   g = hj(b, ha, ea + 2 | 0) | 0;
   if (g | 0) {
    Da = g;
    Ca = c[b >> 2] | 0;
    Ca = Ca + 1 | 0;
    c[b >> 2] = Ca;
    i = Ea;
    return Da | 0;
   }
   c[ma >> 2] = (c[ma >> 2] | 0) + -1;
   Da = 0;
   Ca = c[b >> 2] | 0;
   Ca = Ca + 1 | 0;
   c[b >> 2] = Ca;
   i = Ea;
   return Da | 0;
  } else {
   g = c[ma >> 2] | 0;
   if ((g | 0) > 31) md(c[la >> 2] | 0, 10341, ga) | 0;
   c[b + 24 + (g << 3) >> 2] = ha;
   c[b + 24 + (g << 3) + 4 >> 2] = -1;
   c[ma >> 2] = g + 1;
   g = hj(b, ha, h) | 0;
   if (g | 0) {
    Da = g;
    Ca = c[b >> 2] | 0;
    Ca = Ca + 1 | 0;
    c[b >> 2] = Ca;
    i = Ea;
    return Da | 0;
   }
   c[ma >> 2] = (c[ma >> 2] | 0) + -1;
   Da = 0;
   Ca = c[b >> 2] | 0;
   Ca = Ca + 1 | 0;
   c[b >> 2] = Ca;
   i = Ea;
   return Da | 0;
  }
 } else if ((na | 0) == 16) {
  j = K + 1 | 0;
  h = c[ma >> 2] | 0;
  while (1) {
   g = h + -1 | 0;
   if ((h | 0) <= 0) {
    na = 19;
    break;
   }
   if ((c[b + 24 + (g << 3) + 4 >> 2] | 0) == -1) {
    ja = g;
    break;
   } else h = g;
  }
  if ((na | 0) == 19) ja = md(c[la >> 2] | 0, 10359, ia) | 0;
  h = b + 24 + (ja << 3) + 4 | 0;
  c[h >> 2] = ka - (c[b + 24 + (ja << 3) >> 2] | 0);
  g = hj(b, ka, j) | 0;
  if (g | 0) {
   Da = g;
   Ca = c[b >> 2] | 0;
   Ca = Ca + 1 | 0;
   c[b >> 2] = Ca;
   i = Ea;
   return Da | 0;
  }
  c[h >> 2] = -1;
  Da = 0;
  Ca = c[b >> 2] | 0;
  Ca = Ca + 1 | 0;
  c[b >> 2] = Ca;
  i = Ea;
  return Da | 0;
 } else if ((na | 0) == 23) {
  Da = (V | 0) == (c[za >> 2] | 0) ? V : 0;
  Ca = c[b >> 2] | 0;
  Ca = Ca + 1 | 0;
  c[b >> 2] = Ca;
  i = Ea;
  return Da | 0;
 } else if ((na | 0) == 110) {
  p = da + 1 | 0;
  o = da + -1 | 0;
  h : while (1) {
   h = hj(b, g, p) | 0;
   if (h) {
    na = 150;
    break;
   }
   i : while (1) {
    if ((c[za >> 2] | 0) >>> 0 <= g >>> 0) {
     h = 0;
     na = 150;
     break h;
    }
    h = a[g >> 0] | 0;
    j = a[ua >> 0] | 0;
    switch (j << 24 >> 24 | 0) {
    case 37:
     {
      qa = h;
      wa = g;
      na = 136;
      break i;
     }
    case 91:
     {
      ra = h;
      xa = g;
      na = 137;
      break i;
     }
    case 46:
     break;
    default:
     {
      pa = h;
      sa = j;
      va = g;
      na = 146;
      break i;
     }
    }
    g = g + 1 | 0;
    h = hj(b, g, p) | 0;
    if (h | 0) {
     na = 150;
     break h;
    }
   }
   j : do if ((na | 0) == 136) {
    l = ij(qa & 255, d[ta >> 0] | 0) | 0;
    oa = wa;
   } else if ((na | 0) == 137) {
    n = ra & 255;
    e = (a[ta >> 0] | 0) == 94;
    h = e ? ta : ua;
    e = e & 1;
    l = e ^ 1;
    g = h + 1 | 0;
    if (g >>> 0 < o >>> 0) {
     k = h;
     while (1) {
      f = a[g >> 0] | 0;
      h = k + 2 | 0;
      j = a[h >> 0] | 0;
      do if (f << 24 >> 24 == 37) {
       if (ij(n, j & 255) | 0) {
        oa = xa;
        break j;
       }
      } else {
       if (j << 24 >> 24 == 45) {
        h = k + 3 | 0;
        if (h >>> 0 < o >>> 0) {
         if ((f & 255) > (ra & 255)) break;
         if ((d[h >> 0] | 0) < (ra & 255)) break; else {
          oa = xa;
          break j;
         }
        }
       }
       if (f << 24 >> 24 == ra << 24 >> 24) {
        oa = xa;
        break j;
       } else h = g;
      } while (0);
      g = h + 1 | 0;
      if (g >>> 0 >= o >>> 0) {
       l = e;
       oa = xa;
       break;
      } else k = h;
     }
    } else {
     l = e;
     oa = xa;
    }
   } else if ((na | 0) == 146) {
    l = sa << 24 >> 24 == pa << 24 >> 24 & 1;
    oa = va;
   } while (0);
   if (!l) {
    h = 0;
    na = 150;
    break;
   } else g = oa + 1 | 0;
  }
  if ((na | 0) == 150) {
   Da = c[b >> 2] | 0;
   Da = Da + 1 | 0;
   c[b >> 2] = Da;
   i = Ea;
   return h | 0;
  }
 } else if ((na | 0) == 112) {
  ya = I;
  Ba = P;
  Ca = U;
  Da = W + 1 | 0;
 } else if ((na | 0) == 150) {
  Da = c[b >> 2] | 0;
  Da = Da + 1 | 0;
  c[b >> 2] = Da;
  i = Ea;
  return h | 0;
 }
 h = c[za >> 2] | 0;
 k : do if (h >>> 0 > Da >>> 0) {
  p = Ca + -1 | 0;
  j = Da;
  g = 0;
  while (1) {
   n = a[j >> 0] | 0;
   o = n & 255;
   j = a[Ba >> 0] | 0;
   l : do switch (j << 24 >> 24 | 0) {
   case 46:
    {
     Aa = h;
     break;
    }
   case 37:
    {
     m = ij(o, d[ya >> 0] | 0) | 0;
     na = 128;
     break;
    }
   case 91:
    {
     e = (a[ya >> 0] | 0) == 94;
     j = e ? ya : Ba;
     e = e & 1;
     m = e ^ 1;
     h = j + 1 | 0;
     if (h >>> 0 < p >>> 0) {
      f = j;
      while (1) {
       l = a[h >> 0] | 0;
       j = f + 2 | 0;
       k = a[j >> 0] | 0;
       do if (l << 24 >> 24 == 37) {
        if (ij(o, k & 255) | 0) {
         na = 128;
         break l;
        }
       } else {
        if (k << 24 >> 24 == 45) {
         j = f + 3 | 0;
         if (j >>> 0 < p >>> 0) {
          if ((l & 255) > (n & 255)) break;
          if ((d[j >> 0] | 0) < (n & 255)) break; else {
           na = 128;
           break l;
          }
         }
        }
        if (l << 24 >> 24 == n << 24 >> 24) {
         na = 128;
         break l;
        } else j = h;
       } while (0);
       h = j + 1 | 0;
       if (h >>> 0 >= p >>> 0) {
        m = e;
        na = 128;
        break;
       } else f = j;
      }
     } else {
      m = e;
      na = 128;
     }
     break;
    }
   default:
    {
     m = j << 24 >> 24 == n << 24 >> 24 & 1;
     na = 128;
    }
   } while (0);
   if ((na | 0) == 128) {
    na = 0;
    if (!m) break k;
    Aa = c[za >> 2] | 0;
   }
   g = g + 1 | 0;
   j = Da + g | 0;
   if (Aa >>> 0 <= j >>> 0) break k; else h = Aa;
  }
 } else g = 0; while (0);
 k = Ca + 1 | 0;
 while (1) {
  if ((g | 0) <= -1) {
   h = 0;
   na = 150;
   break;
  }
  h = hj(b, Da + g | 0, k) | 0;
  j = (h | 0) == 0;
  if (j) g = (j << 31 >> 31) + g | 0; else {
   na = 150;
   break;
  }
 }
 if ((na | 0) == 150) {
  Da = c[b >> 2] | 0;
  Da = Da + 1 | 0;
  c[b >> 2] = Da;
  i = Ea;
  return h | 0;
 }
 return 0;
}

function Bm(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 P = i;
 i = i + 304 | 0;
 A = P + 16 | 0;
 J = P + 8 | 0;
 H = P + 33 | 0;
 K = P;
 z = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = Tl(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (!(k << 24 >> 24)) k = 0; else {
  L = e + 4 | 0;
  M = e + 100 | 0;
  I = e + 108 | 0;
  G = e + 8 | 0;
  B = H + 10 | 0;
  D = H + 33 | 0;
  y = J + 4 | 0;
  E = H + 46 | 0;
  F = H + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(dm(m & 255) | 0)) {
    o = (a[n >> 0] | 0) == 37;
    d : do if (o) {
     q = n + 1 | 0;
     m = a[q >> 0] | 0;
     e : do switch (m << 24 >> 24) {
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
       o = (m & 255) + -48 | 0;
       if (o >>> 0 < 10) if ((a[n + 2 >> 0] | 0) == 36) {
        c[A >> 2] = c[j >> 2];
        while (1) {
         x = (c[A >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[A >> 2] = x + 4;
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
       gm(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = im(e) | 0;
       } while ((dm(o) | 0) != 0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[I >> 2] | 0) + s + o - (c[G >> 2] | 0) | 0;
       v = q;
      }
     }
     gm(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((im(e) | 0) < 0) {
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
        zn(H | 0, -1, 257) | 0;
        a[H >> 0] = 0;
        if ((r | 0) == 115) {
         a[D >> 0] = 0;
         a[B >> 0] = 0;
         a[B + 1 >> 0] = 0;
         a[B + 2 >> 0] = 0;
         a[B + 3 >> 0] = 0;
         a[B + 4 >> 0] = 0;
        }
       } else {
        r = n + 1 | 0;
        s = (a[r >> 0] | 0) == 94;
        o = s & 1;
        n = s ? n + 2 | 0 : r;
        zn(H | 0, s & 1 | 0, 257) | 0;
        a[H >> 0] = 0;
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
             a[H + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[H + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = hn(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 154;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[y >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = im(e) | 0;
           if (!(a[H + (o + 1) >> 0] | 0)) break j;
           a[z >> 0] = o;
           switch (Yl(K, z, 1, J) | 0) {
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
         o = kn(f, l << 2) | 0;
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
        if (!(Cm(J) | 0)) {
         l = 0;
         N = 154;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = hn(r) | 0;
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
           } else f = im(e) | 0;
           if (!(a[H + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = kn(l, f) | 0;
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
          } else f = im(e) | 0;
          if (!(a[H + (f + 1) >> 0] | 0)) {
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
          } else f = im(e) | 0;
          if (!(a[H + (f + 1) >> 0] | 0)) {
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
       o = o - (c[G >> 2] | 0) + (c[I >> 2] | 0) | 0;
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
       p = +Dm(e, t, 0);
       if ((c[I >> 2] | 0) == ((c[G >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = ba(p);
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
      o = hm(e, o, 0, -1, -1) | 0;
      if ((c[I >> 2] | 0) == ((c[G >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
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
        c[v + 4 >> 2] = C;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[I >> 2] | 0) + w + (c[L >> 2] | 0) - (c[G >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (o & 1) | 0;
    gm(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = im(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 22;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(dm(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    gm(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = im(e) | 0;
    } while ((dm(m) | 0) != 0);
    if (!(c[M >> 2] | 0)) m = c[L >> 2] | 0; else {
     m = (c[L >> 2] | 0) + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[I >> 2] | 0) + s + m - (c[G >> 2] | 0) | 0;
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
   jn(l);
   jn(f);
  }
 } while (0);
 if (O | 0) bl(e);
 i = P;
 return k | 0;
}

function Ee(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 Fe(b, d, e);
 n = (c[d >> 2] | 0) == 10;
 C = d + 16 | 0;
 do if (n) {
  k = c[d + 8 >> 2] | 0;
  if ((k | 0) != -1) {
   f = c[C >> 2] | 0;
   if ((f | 0) == -1) {
    c[C >> 2] = k;
    break;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    h = j + (f << 2) | 0;
    g = c[h >> 2] | 0;
    i = (g >>> 14) + -131071 | 0;
    i = (i | 0) == -1 ? -1 : f + 1 + i | 0;
    if ((i | 0) == -1) break; else f = i;
   }
   f = k + ~f | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
    c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
    break;
   }
  }
 } while (0);
 f = c[C >> 2] | 0;
 v = d + 20 | 0;
 h = c[v >> 2] | 0;
 if ((f | 0) == (h | 0)) {
  c[C >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
 a : do if ((f | 0) == -1) D = 18; else {
  j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   i = j + (f << 2) | 0;
   if ((f | 0) > 0) {
    g = c[i + -4 >> 2] | 0;
    if ((a[3916 + (g & 63) >> 0] | 0) < 0) l = g; else D = 15;
   } else D = 15;
   if ((D | 0) == 15) {
    D = 0;
    l = c[i >> 2] | 0;
   }
   if ((l & 63 | 0) != 28) {
    D = 25;
    break a;
   }
   k = ((c[i >> 2] | 0) >>> 14) + -131071 | 0;
   f = (k | 0) == -1 ? -1 : f + 1 + k | 0;
   if ((f | 0) == -1) {
    D = 18;
    break;
   }
  }
 } while (0);
 b : do if ((D | 0) == 18) if ((h | 0) == -1) {
  t = -1;
  A = -1;
 } else {
  i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   g = i + (h << 2) | 0;
   if ((h | 0) > 0) {
    f = c[g + -4 >> 2] | 0;
    if ((a[3916 + (f & 63) >> 0] | 0) < 0) m = f; else D = 22;
   } else D = 22;
   if ((D | 0) == 22) {
    D = 0;
    m = c[g >> 2] | 0;
   }
   if ((m & 63 | 0) != 28) {
    D = 25;
    break b;
   }
   l = ((c[g >> 2] | 0) >>> 14) + -131071 | 0;
   h = (l | 0) == -1 ? -1 : h + 1 + l | 0;
   if ((h | 0) == -1) {
    t = -1;
    A = -1;
    break;
   }
  }
 } while (0);
 do if ((D | 0) == 25) {
  m = b + 28 | 0;
  do if (n) o = -1; else {
   k = c[m >> 2] | 0;
   c[m >> 2] = -1;
   l = De(b, 2147450903) | 0;
   if ((k | 0) == -1) o = l; else if ((l | 0) == -1) o = k; else {
    i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    f = l;
    while (1) {
     h = i + (f << 2) | 0;
     g = c[h >> 2] | 0;
     j = (g >>> 14) + -131071 | 0;
     j = (j | 0) == -1 ? -1 : f + 1 + j | 0;
     if ((j | 0) == -1) break; else f = j;
    }
    f = k + ~f | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
     c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
     o = l;
     break;
    }
   }
  } while (0);
  j = b + 20 | 0;
  n = b + 24 | 0;
  c[n >> 2] = c[j >> 2];
  l = e << 6;
  k = De(b, l | 16387) | 0;
  c[n >> 2] = c[j >> 2];
  l = De(b, l | 8388611) | 0;
  c[n >> 2] = c[j >> 2];
  if ((o | 0) == -1) {
   t = k;
   A = l;
  } else {
   f = c[m >> 2] | 0;
   if ((f | 0) == -1) {
    c[m >> 2] = o;
    t = k;
    A = l;
    break;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    h = j + (f << 2) | 0;
    g = c[h >> 2] | 0;
    i = (g >>> 14) + -131071 | 0;
    i = (i | 0) == -1 ? -1 : f + 1 + i | 0;
    if ((i | 0) == -1) break; else f = i;
   }
   f = o + ~f | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
    c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
    t = k;
    A = l;
    break;
   }
  }
 } while (0);
 o = c[b + 20 >> 2] | 0;
 c[b + 24 >> 2] = o;
 f = c[v >> 2] | 0;
 c : do if ((f | 0) != -1) {
  n = e << 6;
  l = n & 16320;
  m = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  if ((e | 0) == 255) {
   while (1) {
    k = m + (f << 2) | 0;
    j = c[k >> 2] | 0;
    h = (j >>> 14) + -131071 | 0;
    i = f;
    f = (h | 0) == -1 ? -1 : f + 1 + h | 0;
    if ((i | 0) > 0) {
     h = k + -4 | 0;
     g = c[h >> 2] | 0;
     if ((a[3916 + (g & 63) >> 0] | 0) < 0) {
      p = g;
      q = h;
     } else D = 45;
    } else D = 45;
    if ((D | 0) == 45) {
     D = 0;
     p = j;
     q = k;
    }
    if ((p & 63 | 0) == 28) {
     c[q >> 2] = p & 8372224 | p >>> 23 << 6 | 27;
     g = o + ~i | 0;
     if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
      D = 60;
      break;
     }
     g = c[k >> 2] & 16383 | (g << 14) + 2147467264;
    } else {
     g = t + ~i | 0;
     if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
      D = 63;
      break;
     }
     g = j & 16383 | (g << 14) + 2147467264;
    }
    c[k >> 2] = g;
    if ((f | 0) == -1) break c;
   }
   if ((D | 0) == 60) {
    q = b + 12 | 0;
    q = c[q >> 2] | 0;
    me(q, 6980);
   } else if ((D | 0) == 63) {
    q = b + 12 | 0;
    q = c[q >> 2] | 0;
    me(q, 6980);
   }
  } else s = f;
  while (1) {
   j = m + (s << 2) | 0;
   h = c[j >> 2] | 0;
   q = (h >>> 14) + -131071 | 0;
   i = s;
   s = (q | 0) == -1 ? -1 : s + 1 + q | 0;
   if ((i | 0) > 0) {
    g = j + -4 | 0;
    f = c[g >> 2] | 0;
    if ((a[3916 + (f & 63) >> 0] | 0) < 0) {
     r = f;
     u = g;
    } else D = 54;
   } else D = 54;
   if ((D | 0) == 54) {
    D = 0;
    r = h;
    u = j;
   }
   if ((r & 63 | 0) == 28) {
    if ((r >>> 23 | 0) == (e | 0)) f = r & 8372224 | n | 27; else f = r & -16321 | l;
    c[u >> 2] = f;
    f = o + ~i | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     D = 60;
     break;
    }
    f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
   } else {
    f = t + ~i | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     D = 63;
     break;
    }
    f = h & 16383 | (f << 14) + 2147467264;
   }
   c[j >> 2] = f;
   if ((s | 0) == -1) break c;
  }
  if ((D | 0) == 60) {
   u = b + 12 | 0;
   u = c[u >> 2] | 0;
   me(u, 6980);
  } else if ((D | 0) == 63) {
   u = b + 12 | 0;
   u = c[u >> 2] | 0;
   me(u, 6980);
  }
 } while (0);
 f = c[C >> 2] | 0;
 if ((f | 0) == -1) {
  c[C >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
 n = e << 6;
 l = n & 16320;
 m = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 if ((e | 0) == 255) {
  while (1) {
   k = m + (f << 2) | 0;
   j = c[k >> 2] | 0;
   u = (j >>> 14) + -131071 | 0;
   i = f;
   f = (u | 0) == -1 ? -1 : f + 1 + u | 0;
   if ((i | 0) > 0) {
    h = k + -4 | 0;
    g = c[h >> 2] | 0;
    if ((a[3916 + (g & 63) >> 0] | 0) < 0) {
     w = g;
     x = h;
    } else D = 70;
   } else D = 70;
   if ((D | 0) == 70) {
    D = 0;
    w = j;
    x = k;
   }
   if ((w & 63 | 0) == 28) {
    c[x >> 2] = w & 8372224 | w >>> 23 << 6 | 27;
    g = o + ~i | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     D = 85;
     break;
    }
    g = c[k >> 2] & 16383 | (g << 14) + 2147467264;
   } else {
    g = A + ~i | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     D = 88;
     break;
    }
    g = j & 16383 | (g << 14) + 2147467264;
   }
   c[k >> 2] = g;
   if ((f | 0) == -1) {
    D = 91;
    break;
   }
  }
  if ((D | 0) == 85) {
   x = b + 12 | 0;
   x = c[x >> 2] | 0;
   me(x, 6980);
  } else if ((D | 0) == 88) {
   x = b + 12 | 0;
   x = c[x >> 2] | 0;
   me(x, 6980);
  } else if ((D | 0) == 91) {
   c[C >> 2] = -1;
   c[v >> 2] = -1;
   D = d + 8 | 0;
   c[D >> 2] = e;
   c[d >> 2] = 6;
   return;
  }
 } else z = f;
 while (1) {
  j = m + (z << 2) | 0;
  h = c[j >> 2] | 0;
  x = (h >>> 14) + -131071 | 0;
  i = z;
  z = (x | 0) == -1 ? -1 : z + 1 + x | 0;
  if ((i | 0) > 0) {
   g = j + -4 | 0;
   f = c[g >> 2] | 0;
   if ((a[3916 + (f & 63) >> 0] | 0) < 0) {
    y = f;
    B = g;
   } else D = 79;
  } else D = 79;
  if ((D | 0) == 79) {
   D = 0;
   y = h;
   B = j;
  }
  if ((y & 63 | 0) == 28) {
   if ((y >>> 23 | 0) == (e | 0)) f = y & 8372224 | n | 27; else f = y & -16321 | l;
   c[B >> 2] = f;
   f = o + ~i | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    D = 85;
    break;
   }
   f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
  } else {
   f = A + ~i | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    D = 88;
    break;
   }
   f = h & 16383 | (f << 14) + 2147467264;
  }
  c[j >> 2] = f;
  if ((z | 0) == -1) {
   D = 91;
   break;
  }
 }
 if ((D | 0) == 85) {
  D = b + 12 | 0;
  D = c[D >> 2] | 0;
  me(D, 6980);
 } else if ((D | 0) == 88) {
  D = b + 12 | 0;
  D = c[D >> 2] | 0;
  me(D, 6980);
 } else if ((D | 0) == 91) {
  c[C >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
}

function jn(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[3805] | 0;
 if (d >>> 0 < h >>> 0) qa();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) qa();
 e = a & -8;
 n = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) qa();
  if ((k | 0) == (c[3806] | 0)) {
   b = n + 4 | 0;
   a = c[b >> 2] | 0;
   if ((a & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[3803] = j;
   c[b >> 2] = a & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 15244 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) qa();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) qa();
   }
   if ((d | 0) == (b | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) qa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else qa();
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
   if (b >>> 0 < h >>> 0) qa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) qa();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) qa();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else qa();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 15508 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[3802] = c[3802] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[3805] | 0) >>> 0) qa();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[3805] | 0;
   if (i >>> 0 < d >>> 0) qa();
   c[i + 24 >> 2] = f;
   b = k + 16 | 0;
   a = c[b >> 2] | 0;
   do if (a | 0) if (a >>> 0 < d >>> 0) qa(); else {
    c[i + 16 >> 2] = a;
    c[a + 24 >> 2] = i;
    break;
   } while (0);
   a = c[b + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
 if (q >>> 0 >= n >>> 0) qa();
 a = n + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) qa();
 if (!(b & 2)) {
  if ((n | 0) == (c[3807] | 0)) {
   p = (c[3804] | 0) + g | 0;
   c[3804] = p;
   c[3807] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[3806] | 0)) return;
   c[3806] = 0;
   c[3803] = 0;
   return;
  }
  if ((n | 0) == (c[3806] | 0)) {
   p = (c[3803] | 0) + g | 0;
   c[3803] = p;
   c[3806] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 15244 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[3805] | 0) >>> 0) qa();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) qa();
   }
   if ((d | 0) == (b | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[3805] | 0) >>> 0) qa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (n | 0)) l = a; else qa();
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
    if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[3805] | 0) >>> 0) qa();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (n | 0)) qa();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (n | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     m = a;
     break;
    } else qa();
   } while (0);
   if (f | 0) {
    a = c[n + 28 >> 2] | 0;
    b = 15508 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[3802] = c[3802] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[3805] | 0) >>> 0) qa();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[f + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[3805] | 0;
    if (m >>> 0 < d >>> 0) qa();
    c[m + 24 >> 2] = f;
    b = n + 16 | 0;
    a = c[b >> 2] | 0;
    do if (a | 0) if (a >>> 0 < d >>> 0) qa(); else {
     c[m + 16 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    } while (0);
    a = c[b + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[3806] | 0)) {
   c[3803] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 15244 + (a << 1 << 2) | 0;
  b = c[3801] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[3801] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
 f = 15508 + (b << 2) | 0;
 c[q + 28 >> 2] = b;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[3802] | 0;
 d = 1 << b;
 do if (!(a & d)) {
  c[3802] = a | d;
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
  if ((b | 0) == 127) if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
   c[a >> 2] = q;
   c[q + 24 >> 2] = d;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((b | 0) == 130) {
   b = d + 8 | 0;
   a = c[b >> 2] | 0;
   p = c[3805] | 0;
   if (a >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[a + 12 >> 2] = q;
    c[b >> 2] = q;
    c[q + 8 >> 2] = a;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else qa();
  }
 } while (0);
 q = (c[3809] | 0) + -1 | 0;
 c[3809] = q;
 if (!q) a = 15660; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[3809] = -1;
 return;
}

function gd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 112 | 0;
 B = C + 104 | 0;
 A = C + 96 | 0;
 y = C + 88 | 0;
 x = C + 80 | 0;
 w = C + 72 | 0;
 v = C + 64 | 0;
 u = C + 56 | 0;
 t = C + 48 | 0;
 s = C + 40 | 0;
 r = C + 32 | 0;
 o = C + 24 | 0;
 n = C + 16 | 0;
 m = C + 8 | 0;
 l = C;
 q = hd(b, 1, 0) | 0;
 z = id(b, 2) | 0;
 d = c[z >> 2] | 0;
 if (d | 0) if (a[d >> 0] | 0) c[356] = d;
 d = c[z + 4 >> 2] | 0;
 do if (!d) {
  l = 0;
  k = 0;
  d = 0;
  j = 1;
  e = 1;
 } else {
  j = d;
  k = 0;
  h = 0;
  e = 0;
  f = 0;
  d = 1;
  a : while (1) {
   if ((a[j >> 0] | 0) != 45) {
    g = k;
    p = 18;
    break;
   }
   switch (a[j + 1 >> 0] | 0) {
   case 0:
    {
     g = k;
     p = 18;
     break a;
    }
   case 45:
    {
     g = k;
     p = 7;
     break a;
    }
   case 69:
    {
     g = k;
     h = 1;
     break;
    }
   case 105:
    {
     if (!(a[j + 2 >> 0] | 0)) {
      g = 1;
      e = 1;
     } else {
      d = -1;
      break a;
     }
     break;
    }
   case 118:
    {
     if (!(a[j + 2 >> 0] | 0)) {
      g = k;
      e = 1;
     } else {
      d = -1;
      break a;
     }
     break;
    }
   case 101:
    {
     f = 1;
     p = 12;
     break;
    }
   case 108:
    {
     p = 12;
     break;
    }
   default:
    {
     g = k;
     p = 16;
     break a;
    }
   }
   if ((p | 0) == 12) {
    p = 0;
    if (!(a[j + 2 >> 0] | 0)) {
     j = d + 1 | 0;
     g = c[z + (j << 2) >> 2] | 0;
     if (!g) {
      g = k;
      p = 15;
      break;
     }
     if ((a[g >> 0] | 0) == 45) {
      g = k;
      p = 15;
      break;
     } else {
      g = k;
      d = j;
     }
    } else g = k;
   }
   d = d + 1 | 0;
   j = c[z + (d << 2) >> 2] | 0;
   if (!j) {
    d = 0;
    p = 23;
    break;
   } else k = g;
  }
  if ((p | 0) == 7) if (!(a[j + 2 >> 0] | 0)) {
   d = d + 1 | 0;
   if (!(c[z + (d << 2) >> 2] | 0)) {
    d = 0;
    p = 23;
   } else p = 18;
  } else d = -1; else if ((p | 0) == 15) {
   d = 0 - d | 0;
   p = 18;
  } else if ((p | 0) == 16) {
   d = 0 - d | 0;
   p = 18;
  }
  if ((p | 0) == 18) if ((d | 0) >= 0) p = 23;
  if ((p | 0) == 23) {
   if (!e) e = 1; else {
    e = c[778] | 0;
    Rm(5837, 1, 51, e) | 0;
    Sm(10, e) | 0;
    um(e) | 0;
    e = 0;
   }
   if (!h) {
    l = g;
    k = f;
    j = e;
    e = 1;
    break;
   }
   jd(b, 1);
   kd(b, -1001e3, 8624);
   l = g;
   k = f;
   j = e;
   e = 0;
   break;
  }
  d = c[z + (0 - d << 2) >> 2] | 0;
  e = c[749] | 0;
  c[l >> 2] = c[356];
  Im(e, 5396, l) | 0;
  um(e) | 0;
  switch (a[d + 1 >> 0] | 0) {
  case 108:
  case 101:
   {
    c[m >> 2] = d;
    Im(e, 5444, m) | 0;
    um(e) | 0;
    break;
   }
  default:
   {
    c[n >> 2] = d;
    Im(e, 5465, n) | 0;
    um(e) | 0;
   }
  }
  c[o >> 2] = c[356];
  Im(e, 5491, o) | 0;
  um(e) | 0;
  b = 0;
  i = C;
  return b | 0;
 } while (0);
 ld(b, 502.0);
 xd(b, 0, 0) | 0;
 zd(b);
 xd(b, 1, 0) | 0;
 do if (e) {
  e = La(12088) | 0;
  if (!e) {
   e = La(12102) | 0;
   if (!e) break; else f = 12101;
  } else f = 12087;
  if ((a[e >> 0] | 0) == 64) {
   if (!(Yd(b, e + 1 | 0, 0) | 0)) {
    t = Kd(b) | 0;
    _f(b, 144, 0);
    Rd(b, t);
    c[3786] = b;
    oa(2, 1) | 0;
    u = pg(b, 0, 0, t, 0, 0) | 0;
    oa(2, 0) | 0;
    Qd(b, t);
    if (!u) break;
   }
   if (!(Gd(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   f = dd(b, -1, 0) | 0;
   e = c[356] | 0;
   d = c[749] | 0;
   if (e | 0) {
    c[r >> 2] = e;
    Im(d, 5396, r) | 0;
    um(d) | 0;
   }
   c[s >> 2] = (f | 0) == 0 ? 12154 : f;
   Im(d, 11968, s) | 0;
   um(d) | 0;
   wd(b, -2);
   xd(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  } else {
   if (!(dg(b, e, Vl(e) | 0, f, 0) | 0)) {
    r = Kd(b) | 0;
    _f(b, 144, 0);
    Rd(b, r);
    c[3786] = b;
    oa(2, 1) | 0;
    s = pg(b, 0, 0, r, 0, 0) | 0;
    oa(2, 0) | 0;
    Qd(b, r);
    if (!s) break;
   }
   if (!(Gd(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   f = dd(b, -1, 0) | 0;
   e = c[356] | 0;
   d = c[749] | 0;
   if (e | 0) {
    c[t >> 2] = e;
    Im(d, 5396, t) | 0;
    um(d) | 0;
   }
   c[u >> 2] = (f | 0) == 0 ? 12154 : f;
   Im(d, 11968, u) | 0;
   um(d) | 0;
   wd(b, -2);
   xd(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  }
 } while (0);
 g = (d | 0) > 0 ? d : q;
 b : do if ((g | 0) > 1) {
  e = 1;
  c : while (1) {
   f = c[z + (e << 2) >> 2] | 0;
   switch (a[f + 1 >> 0] | 0) {
   case 101:
    {
     f = f + 2 | 0;
     if (!(a[f >> 0] | 0)) {
      e = e + 1 | 0;
      f = c[z + (e << 2) >> 2] | 0;
     }
     if (dg(b, f, Vl(f) | 0, 12185, 0) | 0) {
      p = 49;
      break c;
     }
     t = Kd(b) | 0;
     _f(b, 144, 0);
     Rd(b, t);
     c[3786] = b;
     oa(2, 1) | 0;
     u = pg(b, 0, 0, t, 0, 0) | 0;
     oa(2, 0) | 0;
     Qd(b, t);
     if (u) {
      p = 49;
      break c;
     }
     break;
    }
   case 108:
    {
     f = f + 2 | 0;
     if (!(a[f >> 0] | 0)) {
      e = e + 1 | 0;
      f = c[z + (e << 2) >> 2] | 0;
     }
     sg(b, 12201);
     Tf(b, f) | 0;
     t = (Kd(b) | 0) + -1 | 0;
     _f(b, 144, 0);
     Rd(b, t);
     c[3786] = b;
     oa(2, 1) | 0;
     u = pg(b, 1, 1, t, 0, 0) | 0;
     oa(2, 0) | 0;
     Qd(b, t);
     if (u | 0) {
      p = 57;
      break c;
     }
     Sg(b, f);
     break;
    }
   default:
    {}
   }
   e = e + 1 | 0;
   if ((e | 0) >= (g | 0)) break b;
  }
  if ((p | 0) == 49) {
   if (!(Gd(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   f = dd(b, -1, 0) | 0;
   e = c[356] | 0;
   d = c[749] | 0;
   if (e | 0) {
    c[v >> 2] = e;
    Im(d, 5396, v) | 0;
    um(d) | 0;
   }
   c[w >> 2] = (f | 0) == 0 ? 12154 : f;
   Im(d, 11968, w) | 0;
   um(d) | 0;
   wd(b, -2);
   xd(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  } else if ((p | 0) == 57) {
   if (!(Gd(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   f = dd(b, -1, 0) | 0;
   e = c[356] | 0;
   d = c[749] | 0;
   if (e | 0) {
    c[x >> 2] = e;
    Im(d, 5396, x) | 0;
    um(d) | 0;
   }
   c[y >> 2] = (f | 0) == 0 ? 12154 : f;
   Im(d, 11968, y) | 0;
   um(d) | 0;
   wd(b, -2);
   xd(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  }
 } while (0);
 do if (d | 0) {
  e = 0;
  while (1) if (!(c[z + (e << 2) >> 2] | 0)) break; else e = e + 1 | 0;
  f = d + 1 | 0;
  h = e - f | 0;
  gg(b, h + 3 | 0, 12209);
  if ((e | 0) > (f | 0)) {
   g = f;
   do {
    Tf(b, c[z + (g << 2) >> 2] | 0) | 0;
    g = g + 1 | 0;
   } while ((g | 0) != (e | 0));
  }
  Rg(b, h, f);
  if ((e | 0) > 0) {
   f = 0;
   do {
    Tf(b, c[z + (f << 2) >> 2] | 0) | 0;
    hh(b, -2, f - d | 0);
    f = f + 1 | 0;
   } while ((f | 0) != (e | 0));
  }
  Sg(b, 12238);
  e = c[z + (d << 2) >> 2] | 0;
  if (!(Wl(e, 12242) | 0)) {
   z = (Wl(c[z + (d + -1 << 2) >> 2] | 0, 12244) | 0) == 0;
   e = z ? e : 0;
  }
  z = Yd(b, e, 0) | 0;
  e = ~h;
  Rd(b, e);
  if (!z) {
   y = (Kd(b) | 0) - h | 0;
   _f(b, 144, 0);
   Rd(b, y);
   c[3786] = b;
   oa(2, 1) | 0;
   z = pg(b, h, -1, y, 0, 0) | 0;
   oa(2, 0) | 0;
   Qd(b, y);
   if (!z) break;
  } else wd(b, e);
  if (!(Gd(b, -1) | 0)) {
   b = 0;
   i = C;
   return b | 0;
  }
  f = dd(b, -1, 0) | 0;
  e = c[356] | 0;
  d = c[749] | 0;
  if (e | 0) {
   c[A >> 2] = e;
   Im(d, 5396, A) | 0;
   um(d) | 0;
  }
  c[B >> 2] = (f | 0) == 0 ? 12154 : f;
  Im(d, 11968, B) | 0;
  um(d) | 0;
  wd(b, -2);
  xd(b, 2, 0) | 0;
  b = 0;
  i = C;
  return b | 0;
 } while (0);
 if (!l) {
  if (j & (k | d | 0) == 0) {
   B = c[778] | 0;
   Rm(5837, 1, 51, B) | 0;
   Sm(10, B) | 0;
   um(B) | 0;
   Wk(b);
  }
 } else Wk(b);
 jd(b, 1);
 b = 1;
 i = C;
 return b | 0;
}

function mn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 o = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  e = c[a >> 2] | 0;
  if (!(d & 3)) return;
  l = a + (0 - e) | 0;
  k = e + b | 0;
  i = c[3805] | 0;
  if (l >>> 0 < i >>> 0) qa();
  if ((l | 0) == (c[3806] | 0)) {
   a = o + 4 | 0;
   d = c[a >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    r = l;
    g = k;
    break;
   }
   c[3803] = k;
   c[a >> 2] = d & -2;
   c[l + 4 >> 2] = k | 1;
   c[l + k >> 2] = k;
   return;
  }
  f = e >>> 3;
  if (e >>> 0 < 256) {
   a = c[l + 8 >> 2] | 0;
   b = c[l + 12 >> 2] | 0;
   d = 15244 + (f << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < i >>> 0) qa();
    if ((c[a + 12 >> 2] | 0) != (l | 0)) qa();
   }
   if ((b | 0) == (a | 0)) {
    c[3801] = c[3801] & ~(1 << f);
    r = l;
    g = k;
    break;
   }
   if ((b | 0) == (d | 0)) h = b + 8 | 0; else {
    if (b >>> 0 < i >>> 0) qa();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) h = d; else qa();
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
   b = l + 16 | 0;
   a = b + 4 | 0;
   d = c[a >> 2] | 0;
   if (!d) {
    d = c[b >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    } else a = b;
   }
   while (1) {
    e = d + 20 | 0;
    b = c[e >> 2] | 0;
    if (b | 0) {
     d = b;
     a = e;
     continue;
    }
    e = d + 16 | 0;
    b = c[e >> 2] | 0;
    if (!b) break; else {
     d = b;
     a = e;
    }
   }
   if (a >>> 0 < i >>> 0) qa(); else {
    c[a >> 2] = 0;
    j = d;
    break;
   }
  } else {
   e = c[l + 8 >> 2] | 0;
   if (e >>> 0 < i >>> 0) qa();
   d = e + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) qa();
   a = b + 8 | 0;
   if ((c[a >> 2] | 0) == (l | 0)) {
    c[d >> 2] = b;
    c[a >> 2] = e;
    j = b;
    break;
   } else qa();
  } while (0);
  if (!f) {
   r = l;
   g = k;
  } else {
   d = c[l + 28 >> 2] | 0;
   a = 15508 + (d << 2) | 0;
   if ((l | 0) == (c[a >> 2] | 0)) {
    c[a >> 2] = j;
    if (!j) {
     c[3802] = c[3802] & ~(1 << d);
     r = l;
     g = k;
     break;
    }
   } else {
    if (f >>> 0 < (c[3805] | 0) >>> 0) qa();
    d = f + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = j; else c[f + 20 >> 2] = j;
    if (!j) {
     r = l;
     g = k;
     break;
    }
   }
   b = c[3805] | 0;
   if (j >>> 0 < b >>> 0) qa();
   c[j + 24 >> 2] = f;
   a = l + 16 | 0;
   d = c[a >> 2] | 0;
   do if (d | 0) if (d >>> 0 < b >>> 0) qa(); else {
    c[j + 16 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   } while (0);
   d = c[a + 4 >> 2] | 0;
   if (!d) {
    r = l;
    g = k;
   } else if (d >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
 h = c[3805] | 0;
 if (o >>> 0 < h >>> 0) qa();
 d = o + 4 | 0;
 a = c[d >> 2] | 0;
 if (!(a & 2)) {
  if ((o | 0) == (c[3807] | 0)) {
   q = (c[3804] | 0) + g | 0;
   c[3804] = q;
   c[3807] = r;
   c[r + 4 >> 2] = q | 1;
   if ((r | 0) != (c[3806] | 0)) return;
   c[3806] = 0;
   c[3803] = 0;
   return;
  }
  if ((o | 0) == (c[3806] | 0)) {
   q = (c[3803] | 0) + g | 0;
   c[3803] = q;
   c[3806] = r;
   c[r + 4 >> 2] = q | 1;
   c[r + q >> 2] = q;
   return;
  }
  g = (a & -8) + g | 0;
  e = a >>> 3;
  do if (a >>> 0 < 256) {
   a = c[o + 8 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   d = 15244 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < h >>> 0) qa();
    if ((c[a + 12 >> 2] | 0) != (o | 0)) qa();
   }
   if ((b | 0) == (a | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    break;
   }
   if ((b | 0) == (d | 0)) m = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) qa();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (o | 0)) m = d; else qa();
   }
   c[a + 12 >> 2] = b;
   c[m >> 2] = a;
  } else {
   f = c[o + 24 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   do if ((b | 0) == (o | 0)) {
    b = o + 16 | 0;
    a = b + 4 | 0;
    d = c[a >> 2] | 0;
    if (!d) {
     d = c[b >> 2] | 0;
     if (!d) {
      n = 0;
      break;
     } else a = b;
    }
    while (1) {
     e = d + 20 | 0;
     b = c[e >> 2] | 0;
     if (b | 0) {
      d = b;
      a = e;
      continue;
     }
     e = d + 16 | 0;
     b = c[e >> 2] | 0;
     if (!b) break; else {
      d = b;
      a = e;
     }
    }
    if (a >>> 0 < h >>> 0) qa(); else {
     c[a >> 2] = 0;
     n = d;
     break;
    }
   } else {
    e = c[o + 8 >> 2] | 0;
    if (e >>> 0 < h >>> 0) qa();
    d = e + 12 | 0;
    if ((c[d >> 2] | 0) != (o | 0)) qa();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (o | 0)) {
     c[d >> 2] = b;
     c[a >> 2] = e;
     n = b;
     break;
    } else qa();
   } while (0);
   if (f | 0) {
    d = c[o + 28 >> 2] | 0;
    a = 15508 + (d << 2) | 0;
    if ((o | 0) == (c[a >> 2] | 0)) {
     c[a >> 2] = n;
     if (!n) {
      c[3802] = c[3802] & ~(1 << d);
      break;
     }
    } else {
     if (f >>> 0 < (c[3805] | 0) >>> 0) qa();
     d = f + 16 | 0;
     if ((c[d >> 2] | 0) == (o | 0)) c[d >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    b = c[3805] | 0;
    if (n >>> 0 < b >>> 0) qa();
    c[n + 24 >> 2] = f;
    a = o + 16 | 0;
    d = c[a >> 2] | 0;
    do if (d | 0) if (d >>> 0 < b >>> 0) qa(); else {
     c[n + 16 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    } while (0);
    d = c[a + 4 >> 2] | 0;
    if (d | 0) if (d >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
     c[n + 20 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
  if ((r | 0) == (c[3806] | 0)) {
   c[3803] = g;
   return;
  }
 } else {
  c[d >> 2] = a & -2;
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
 }
 d = g >>> 3;
 if (g >>> 0 < 256) {
  b = 15244 + (d << 1 << 2) | 0;
  a = c[3801] | 0;
  d = 1 << d;
  if (!(a & d)) {
   c[3801] = a | d;
   p = b + 8 | 0;
   q = b;
  } else {
   d = b + 8 | 0;
   a = c[d >> 2] | 0;
   if (a >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
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
 if (!d) a = 0; else if (g >>> 0 > 16777215) a = 31; else {
  p = (d + 1048320 | 0) >>> 16 & 8;
  q = d << p;
  o = (q + 520192 | 0) >>> 16 & 4;
  q = q << o;
  a = (q + 245760 | 0) >>> 16 & 2;
  a = 14 - (o | p | a) + (q << a >>> 15) | 0;
  a = g >>> (a + 7 | 0) & 1 | a << 1;
 }
 f = 15508 + (a << 2) | 0;
 c[r + 28 >> 2] = a;
 c[r + 20 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 d = c[3802] | 0;
 b = 1 << a;
 if (!(d & b)) {
  c[3802] = d | b;
  c[f >> 2] = r;
  c[r + 24 >> 2] = f;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 }
 e = g << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
 b = c[f >> 2] | 0;
 while (1) {
  if ((c[b + 4 >> 2] & -8 | 0) == (g | 0)) {
   a = 127;
   break;
  }
  d = b + 16 + (e >>> 31 << 2) | 0;
  a = c[d >> 2] | 0;
  if (!a) {
   a = 124;
   break;
  } else {
   e = e << 1;
   b = a;
  }
 }
 if ((a | 0) == 124) {
  if (d >>> 0 < (c[3805] | 0) >>> 0) qa();
  c[d >> 2] = r;
  c[r + 24 >> 2] = b;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 } else if ((a | 0) == 127) {
  a = b + 8 | 0;
  d = c[a >> 2] | 0;
  q = c[3805] | 0;
  if (!(d >>> 0 >= q >>> 0 & b >>> 0 >= q >>> 0)) qa();
  c[d + 12 >> 2] = r;
  c[a >> 2] = r;
  c[r + 8 >> 2] = d;
  c[r + 12 >> 2] = b;
  c[r + 24 >> 2] = 0;
  return;
 }
}

function Jm(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 1056 | 0;
 t = v + 1024 | 0;
 u = v;
 l = a[e >> 0] | 0;
 do if (l << 24 >> 24) {
  b = qm(b, l << 24 >> 24) | 0;
  if (!b) b = 0; else {
   h = a[e + 1 >> 0] | 0;
   if (h << 24 >> 24) {
    j = b + 1 | 0;
    n = a[j >> 0] | 0;
    if (!(n << 24 >> 24)) b = 0; else {
     k = a[e + 2 >> 0] | 0;
     if (!(k << 24 >> 24)) {
      k = h & 255 | (l & 255) << 8;
      f = n;
      b = d[b >> 0] << 8 | n & 255;
      while (1) {
       h = b & 65535;
       if ((h | 0) == (k | 0)) {
        b = j;
        break;
       }
       b = j + 1 | 0;
       g = a[b >> 0] | 0;
       if (!(g << 24 >> 24)) {
        f = 0;
        break;
       } else {
        f = g;
        j = b;
        b = g & 255 | h << 8;
       }
      }
      b = f << 24 >> 24 ? b + -1 | 0 : 0;
      break;
     }
     j = b + 2 | 0;
     f = a[j >> 0] | 0;
     if (!(f << 24 >> 24)) b = 0; else {
      g = a[e + 3 >> 0] | 0;
      if (!(g << 24 >> 24)) {
       h = (h & 255) << 16 | (l & 255) << 24 | (k & 255) << 8;
       g = (f & 255) << 8 | (n & 255) << 16 | d[b >> 0] << 24;
       if ((g | 0) == (h | 0)) b = j; else {
        b = j;
        do {
         b = b + 1 | 0;
         f = a[b >> 0] | 0;
         g = (f & 255 | g) << 8;
        } while (!(f << 24 >> 24 == 0 | (g | 0) == (h | 0)));
       }
       b = f << 24 >> 24 ? b + -2 | 0 : 0;
       break;
      }
      m = b + 3 | 0;
      j = a[m >> 0] | 0;
      if (!(j << 24 >> 24)) b = 0; else {
       if (!(a[e + 4 >> 0] | 0)) {
        h = (h & 255) << 16 | (l & 255) << 24 | (k & 255) << 8 | g & 255;
        g = (f & 255) << 8 | (n & 255) << 16 | j & 255 | d[b >> 0] << 24;
        if ((g | 0) == (h | 0)) {
         f = j;
         b = m;
        } else {
         b = m;
         do {
          b = b + 1 | 0;
          f = a[b >> 0] | 0;
          g = f & 255 | g << 8;
         } while (!(f << 24 >> 24 == 0 | (g | 0) == (h | 0)));
        }
        b = f << 24 >> 24 ? b + -3 | 0 : 0;
        break;
       };
       c[t >> 2] = 0;
       c[t + 4 >> 2] = 0;
       c[t + 8 >> 2] = 0;
       c[t + 12 >> 2] = 0;
       c[t + 16 >> 2] = 0;
       c[t + 20 >> 2] = 0;
       c[t + 24 >> 2] = 0;
       c[t + 28 >> 2] = 0;
       f = l;
       h = 0;
       while (1) {
        if (!(a[b + h >> 0] | 0)) {
         b = 0;
         break;
        }
        g = t + (((f & 255) >>> 5 & 255) << 2) | 0;
        c[g >> 2] = c[g >> 2] | 1 << (f & 31);
        g = h + 1 | 0;
        c[u + ((f & 255) << 2) >> 2] = g;
        f = a[e + g >> 0] | 0;
        if (!(f << 24 >> 24)) {
         o = 23;
         break;
        } else h = g;
       }
       a : do if ((o | 0) == 23) {
        b : do if (g >>> 0 > 1) {
         j = 1;
         o = -1;
         f = 0;
         c : while (1) {
          n = 1;
          while (1) {
           d : while (1) {
            l = 1;
            while (1) {
             k = a[e + (l + o) >> 0] | 0;
             m = a[e + j >> 0] | 0;
             if (k << 24 >> 24 != m << 24 >> 24) {
              l = m;
              m = j;
              break d;
             }
             if ((l | 0) == (n | 0)) break;
             l = l + 1 | 0;
             j = l + f | 0;
             if (j >>> 0 >= g >>> 0) {
              f = o;
              r = n;
              break c;
             }
            }
            f = f + n | 0;
            j = f + 1 | 0;
            if (j >>> 0 >= g >>> 0) {
             f = o;
             r = n;
             break c;
            }
           }
           n = m - o | 0;
           if ((k & 255) <= (l & 255)) break;
           f = m + 1 | 0;
           if (f >>> 0 < g >>> 0) {
            j = f;
            f = m;
           } else {
            f = o;
            r = n;
            break c;
           }
          }
          j = f + 2 | 0;
          if (j >>> 0 >= g >>> 0) {
           r = 1;
           break;
          } else {
           o = f;
           f = f + 1 | 0;
          }
         }
         k = 1;
         l = -1;
         j = 0;
         while (1) {
          m = j;
          j = 1;
          while (1) {
           q = m;
           e : while (1) {
            n = 1;
            while (1) {
             m = a[e + (n + l) >> 0] | 0;
             o = a[e + k >> 0] | 0;
             if (m << 24 >> 24 != o << 24 >> 24) {
              p = m;
              n = o;
              m = k;
              k = q;
              break e;
             }
             if ((n | 0) == (j | 0)) break;
             n = n + 1 | 0;
             k = n + q | 0;
             if (k >>> 0 >= g >>> 0) {
              k = r;
              break b;
             }
            }
            q = q + j | 0;
            k = q + 1 | 0;
            if (k >>> 0 >= g >>> 0) {
             k = r;
             break b;
            }
           }
           j = m - l | 0;
           if ((p & 255) >= (n & 255)) {
            j = k;
            break;
           }
           k = m + 1 | 0;
           if (k >>> 0 >= g >>> 0) {
            k = r;
            break b;
           }
          }
          k = j + 2 | 0;
          if (k >>> 0 >= g >>> 0) {
           l = j;
           k = r;
           j = 1;
           break;
          } else {
           l = j;
           j = j + 1 | 0;
          }
         }
        } else {
         f = -1;
         l = -1;
         k = 1;
         j = 1;
        } while (0);
        r = (l + 1 | 0) >>> 0 > (f + 1 | 0) >>> 0;
        j = r ? j : k;
        r = r ? l : f;
        q = r + 1 | 0;
        if (!(fm(e, e + j | 0, q) | 0)) s = g - j | 0; else {
         j = g - r + -1 | 0;
         s = 0;
         j = (r >>> 0 > j >>> 0 ? r : j) + 1 | 0;
        }
        n = g | 63;
        p = (s | 0) != 0;
        o = g - j | 0;
        m = b;
        l = 0;
        k = b;
        f : while (1) {
         f = m;
         do if ((k - f | 0) >>> 0 < g >>> 0) {
          b = Pl(k, 0, n) | 0;
          if (!b) {
           k = k + n | 0;
           break;
          } else if ((b - f | 0) >>> 0 < g >>> 0) {
           b = 0;
           break a;
          } else {
           k = b;
           break;
          }
         } while (0);
         b = a[m + h >> 0] | 0;
         if (!(1 << (b & 31) & c[t + (((b & 255) >>> 5 & 255) << 2) >> 2])) {
          m = m + g | 0;
          l = 0;
          continue;
         }
         f = c[u + ((b & 255) << 2) >> 2] | 0;
         b = g - f | 0;
         if ((g | 0) != (f | 0)) {
          m = m + (p & (l | 0) != 0 & b >>> 0 < j >>> 0 ? o : b) | 0;
          l = 0;
          continue;
         }
         b = q >>> 0 > l >>> 0 ? q : l;
         f = a[e + b >> 0] | 0;
         g : do if (!(f << 24 >> 24)) b = q; else {
          while (1) {
           if (f << 24 >> 24 != (a[m + b >> 0] | 0)) break;
           b = b + 1 | 0;
           f = a[e + b >> 0] | 0;
           if (!(f << 24 >> 24)) {
            b = q;
            break g;
           }
          }
          m = m + (b - r) | 0;
          l = 0;
          continue f;
         } while (0);
         do {
          if (b >>> 0 <= l >>> 0) {
           b = m;
           break a;
          }
          b = b + -1 | 0;
         } while ((a[e + b >> 0] | 0) == (a[m + b >> 0] | 0));
         m = m + j | 0;
         l = s;
        }
       } while (0);
      }
     }
    }
   }
  }
 } while (0);
 i = v;
 return b | 0;
}

function Ob(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 16 | 0;
 g = v;
 t = b + 12 | 0;
 u = c[t >> 2] | 0;
 n = u + 61 | 0;
 switch (d[n >> 0] | 0) {
 case 5:
  {
   g = u + 16 | 0;
   c[g >> 2] = c[u + 32 >> 2] << 2;
   e = u + 84 | 0;
   c[e >> 2] = 0;
   c[e + 4 >> 2] = 0;
   c[e + 8 >> 2] = 0;
   c[e + 12 >> 2] = 0;
   c[e + 16 >> 2] = 0;
   e = c[u + 172 >> 2] | 0;
   if (e | 0) if (a[e + 5 >> 0] & 3) Pb(u, e);
   if (c[u + 48 >> 2] & 64 | 0) {
    e = c[u + 40 >> 2] | 0;
    if (a[e + 5 >> 0] & 3) Pb(u, e);
   }
   Qb(u);
   e = c[u + 104 >> 2] | 0;
   if (e | 0) {
    f = u + 60 | 0;
    do {
     b = e + 5 | 0;
     a[b >> 0] = d[f >> 0] & 3 | d[b >> 0] & 184;
     Pb(u, e);
     e = c[e >> 2] | 0;
    } while ((e | 0) != 0);
   }
   a[n >> 0] = 0;
   b = c[g >> 2] | 0;
   i = v;
   return b | 0;
  }
 case 0:
  {
   m = u + 84 | 0;
   if (c[m >> 2] | 0) {
    t = u + 16 | 0;
    b = c[t >> 2] | 0;
    Rb(u);
    b = (c[t >> 2] | 0) - b | 0;
    i = v;
    return b | 0;
   }
   a[n >> 0] = 1;
   r = u + 16 | 0;
   h = c[r >> 2] | 0;
   s = u + 20 | 0;
   c[s >> 2] = h;
   if (a[b + 5 >> 0] & 3) Pb(u, b);
   if (c[u + 48 >> 2] & 64 | 0) {
    e = c[u + 40 >> 2] | 0;
    if (a[e + 5 >> 0] & 3) Pb(u, e);
   }
   Qb(u);
   g = u + 112 | 0;
   e = c[u + 128 + 4 >> 2] | 0;
   if ((e | 0) != (g | 0)) do {
    if (!(a[e + 5 >> 0] & 7)) {
     f = c[e + 8 >> 2] | 0;
     if (c[f + 8 >> 2] & 64 | 0) {
      f = c[f >> 2] | 0;
      if (a[f + 5 >> 0] & 3) Pb(u, f);
     }
    }
    e = c[e + 16 + 4 >> 2] | 0;
   } while ((e | 0) != (g | 0));
   if (c[m >> 2] | 0) do Rb(u); while ((c[m >> 2] | 0) != 0);
   k = (c[r >> 2] | 0) - h | 0;
   q = u + 92 | 0;
   e = c[q >> 2] | 0;
   o = u + 88 | 0;
   p = c[o >> 2] | 0;
   l = u + 96 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = 0;
   c[o >> 2] = 0;
   c[q >> 2] = 0;
   c[m >> 2] = p;
   if (p | 0) do Rb(u); while ((c[m >> 2] | 0) != 0);
   c[m >> 2] = e;
   if (e | 0) do Rb(u); while ((c[m >> 2] | 0) != 0);
   c[m >> 2] = f;
   if (f | 0) do Rb(u); while ((c[m >> 2] | 0) != 0);
   j = c[r >> 2] | 0;
   while (1) {
    f = c[l >> 2] | 0;
    c[l >> 2] = 0;
    e = 0;
    a : while (1) {
     g = f;
     while (1) {
      if (!g) break a;
      f = c[g + 24 >> 2] | 0;
      if (!(Tb(u, g) | 0)) g = f; else break;
     }
     if (!(c[m >> 2] | 0)) {
      e = 1;
      continue;
     }
     while (1) {
      Rb(u);
      if (!(c[m >> 2] | 0)) {
       e = 1;
       continue a;
      }
     }
    }
    if (!e) break;
   }
   Ub(u, c[q >> 2] | 0, 0);
   p = u + 100 | 0;
   Ub(u, c[p >> 2] | 0, 0);
   n = c[q >> 2] | 0;
   o = c[p >> 2] | 0;
   g = c[r >> 2] | 0;
   h = c[t >> 2] | 0;
   f = h + 104 | 0;
   while (1) {
    e = c[f >> 2] | 0;
    if (!e) break; else f = e;
   }
   k = k - j + g | 0;
   g = h + 72 | 0;
   e = c[g >> 2] | 0;
   b : do if (e | 0) {
    j = g;
    while (1) {
     while (1) {
      g = e + 5 | 0;
      h = d[g >> 0] | 0;
      if (!(h & 3)) {
       g = e;
       break;
      }
      a[g >> 0] = h | 8;
      c[j >> 2] = c[e >> 2];
      c[e >> 2] = c[f >> 2];
      c[f >> 2] = e;
      f = c[j >> 2] | 0;
      if (!f) break b; else {
       h = e;
       e = f;
       f = h;
      }
     }
     e = c[g >> 2] | 0;
     if (!e) break; else j = g;
    }
   } while (0);
   e = c[u + 104 >> 2] | 0;
   if (e | 0) {
    f = u + 60 | 0;
    do {
     j = e + 5 | 0;
     a[j >> 0] = d[f >> 0] & 3 | d[j >> 0] & 184;
     Pb(u, e);
     e = c[e >> 2] | 0;
    } while ((e | 0) != 0);
   }
   if (c[m >> 2] | 0) do Rb(u); while ((c[m >> 2] | 0) != 0);
   h = c[r >> 2] | 0;
   while (1) {
    f = c[l >> 2] | 0;
    c[l >> 2] = 0;
    e = 0;
    c : while (1) {
     g = f;
     while (1) {
      if (!g) break c;
      f = c[g + 24 >> 2] | 0;
      if (!(Tb(u, g) | 0)) g = f; else break;
     }
     if (!(c[m >> 2] | 0)) {
      e = 1;
      continue;
     }
     while (1) {
      Rb(u);
      if (!(c[m >> 2] | 0)) {
       e = 1;
       continue c;
      }
     }
    }
    if (!e) break;
   }
   m = k - h | 0;
   e = c[l >> 2] | 0;
   if (e | 0) do {
    k = a[e + 7 >> 0] | 0;
    f = c[e + 16 >> 2] | 0;
    l = f + (1 << (k & 255) << 5) | 0;
    if (k << 24 >> 24 != 31) do {
     k = f + 8 | 0;
     do if (c[k >> 2] | 0) {
      g = f + 24 | 0;
      h = c[g >> 2] | 0;
      if (!(h & 64)) break;
      j = c[f + 16 >> 2] | 0;
      if ((h & 15 | 0) != 4) {
       if (!(a[j + 5 >> 0] & 3)) break;
       c[k >> 2] = 0;
       c[g >> 2] = 11;
       break;
      }
      if (!j) break;
      if (!(a[j + 5 >> 0] & 3)) break;
      Pb(u, j);
     } while (0);
     f = f + 32 | 0;
    } while (f >>> 0 < l >>> 0);
    e = c[e + 24 >> 2] | 0;
   } while ((e | 0) != 0);
   e = c[p >> 2] | 0;
   if (e | 0) do {
    k = a[e + 7 >> 0] | 0;
    f = c[e + 16 >> 2] | 0;
    l = f + (1 << (k & 255) << 5) | 0;
    if (k << 24 >> 24 != 31) do {
     k = f + 8 | 0;
     do if (c[k >> 2] | 0) {
      g = f + 24 | 0;
      h = c[g >> 2] | 0;
      if (!(h & 64)) break;
      j = c[f + 16 >> 2] | 0;
      if ((h & 15 | 0) != 4) {
       if (!(a[j + 5 >> 0] & 3)) break;
       c[k >> 2] = 0;
       c[g >> 2] = 11;
       break;
      }
      if (!j) break;
      if (!(a[j + 5 >> 0] & 3)) break;
      Pb(u, j);
     } while (0);
     f = f + 32 | 0;
    } while (f >>> 0 < l >>> 0);
    e = c[e + 24 >> 2] | 0;
   } while ((e | 0) != 0);
   Ub(u, c[q >> 2] | 0, n);
   Ub(u, c[p >> 2] | 0, o);
   k = u + 60 | 0;
   a[k >> 0] = d[k >> 0] ^ 3;
   k = m + (c[r >> 2] | 0) | 0;
   c[s >> 2] = (c[s >> 2] | 0) + k;
   j = c[t >> 2] | 0;
   a[j + 61 >> 0] = 2;
   c[j + 64 >> 2] = 0;
   g = j + 72 | 0;
   e = 0;
   do {
    e = e + 1 | 0;
    f = Wb(b, g, 1) | 0;
   } while ((f | 0) == (g | 0));
   c[j + 80 >> 2] = f;
   h = j + 68 | 0;
   f = 0;
   do {
    f = f + 1 | 0;
    g = Wb(b, h, 1) | 0;
   } while ((g | 0) == (h | 0));
   c[j + 76 >> 2] = g;
   b = ((f + e | 0) * 5 | 0) + k | 0;
   i = v;
   return b | 0;
  }
 case 2:
  {
   l = u + 64 | 0;
   k = u + 32 | 0;
   j = u + 24 | 0;
   e = 0;
   while (1) {
    g = c[l >> 2] | 0;
    h = g + e | 0;
    f = c[k >> 2] | 0;
    if ((h | 0) >= (f | 0)) break;
    Wb(b, (c[j >> 2] | 0) + (h << 2) | 0, -3) | 0;
    e = e + 1 | 0;
    if ((e | 0) >= 80) {
     m = 93;
     break;
    }
   }
   if ((m | 0) == 93) {
    g = c[l >> 2] | 0;
    f = c[k >> 2] | 0;
   }
   b = g + e | 0;
   c[l >> 2] = b;
   if ((b | 0) >= (f | 0)) a[n >> 0] = 3;
   b = e * 5 | 0;
   i = v;
   return b | 0;
  }
 case 3:
  {
   f = u + 80 | 0;
   e = c[f >> 2] | 0;
   if (!e) {
    a[n >> 0] = 4;
    b = 0;
    i = v;
    return b | 0;
   } else {
    c[f >> 2] = Wb(b, e, 80) | 0;
    b = 400;
    i = v;
    return b | 0;
   }
  }
 case 4:
  {
   f = u + 76 | 0;
   e = c[f >> 2] | 0;
   if (e | 0) {
    c[f >> 2] = Wb(b, e, 80) | 0;
    b = 400;
    i = v;
    return b | 0;
   }
   c[g >> 2] = c[u + 172 >> 2];
   Wb(b, g, 1) | 0;
   e = c[t >> 2] | 0;
   if ((a[e + 62 >> 0] | 0) != 1) {
    f = (c[e + 32 >> 2] | 0) / 2 | 0;
    if ((c[e + 28 >> 2] | 0) >>> 0 < f >>> 0) Mb(b, f);
    t = e + 144 | 0;
    u = e + 152 | 0;
    c[t >> 2] = yb(b, c[t >> 2] | 0, c[u >> 2] | 0, 0) | 0;
    c[u >> 2] = 0;
   }
   a[n >> 0] = 5;
   b = 5;
   i = v;
   return b | 0;
  }
 default:
  {
   b = 0;
   i = v;
   return b | 0;
  }
 }
 return 0;
}

function ie(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 q = r;
 p = b + 4 | 0;
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) ge(b, 6560);
 c[e + 64 >> 2] = f;
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) ge(b, 6560);
 c[e + 68 >> 2] = f;
 if (fe(c[p >> 2] | 0, q, 1) | 0) ge(b, 6486);
 a[e + 76 >> 0] = a[q >> 0] | 0;
 if (fe(c[p >> 2] | 0, q, 1) | 0) ge(b, 6486);
 a[e + 77 >> 0] = a[q >> 0] | 0;
 if (fe(c[p >> 2] | 0, q, 1) | 0) ge(b, 6486);
 a[e + 78 >> 0] = a[q >> 0] | 0;
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) ge(b, 6560);
 g = c[b >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 1073741823) Kb(g);
 n = f << 2;
 m = yb(g, 0, 0, n) | 0;
 c[e + 12 >> 2] = m;
 c[e + 48 >> 2] = f;
 if (fe(c[p >> 2] | 0, m, n) | 0) ge(b, 6486);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 n = c[q >> 2] | 0;
 if ((n | 0) < 0) ge(b, 6560);
 f = c[b >> 2] | 0;
 if ((n + 1 | 0) >>> 0 > 268435455) Kb(f);
 f = yb(f, 0, 0, n << 4) | 0;
 m = e + 8 | 0;
 c[m >> 2] = f;
 c[e + 44 >> 2] = n;
 g = (n | 0) > 0;
 a : do if (g) {
  j = 0;
  do {
   c[f + (j << 4) + 8 >> 2] = 0;
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
  if (g) {
   k = b + 8 | 0;
   l = 0;
   b : while (1) {
    g = c[m >> 2] | 0;
    j = g + (l << 4) | 0;
    if (fe(c[p >> 2] | 0, q, 1) | 0) {
     f = 34;
     break;
    }
    switch (a[q >> 0] | 0) {
    case 0:
     {
      c[g + (l << 4) + 8 >> 2] = 0;
      break;
     }
    case 1:
     {
      if (fe(c[p >> 2] | 0, q, 1) | 0) {
       f = 38;
       break b;
      }
      c[j >> 2] = a[q >> 0];
      c[g + (l << 4) + 8 >> 2] = 1;
      break;
     }
    case 3:
     {
      if (fe(c[p >> 2] | 0, q, 8) | 0) {
       f = 41;
       break b;
      }
      h[j >> 3] = +h[q >> 3];
      c[g + (l << 4) + 8 >> 2] = 3;
      break;
     }
    case 4:
     {
      if (fe(c[p >> 2] | 0, q, 4) | 0) {
       f = 44;
       break b;
      }
      f = c[q >> 2] | 0;
      if (!f) f = 0; else {
       f = jc(c[b >> 2] | 0, c[k >> 2] | 0, f) | 0;
       if (fe(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
        f = 47;
        break b;
       }
       f = Lb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
      }
      c[j >> 2] = f;
      c[g + (l << 4) + 8 >> 2] = d[f + 4 >> 0] | 64;
      break;
     }
    default:
     {}
    }
    l = l + 1 | 0;
    if ((l | 0) >= (n | 0)) break a;
   }
   if ((f | 0) == 34) ge(b, 6486); else if ((f | 0) == 38) ge(b, 6486); else if ((f | 0) == 41) ge(b, 6486); else if ((f | 0) == 44) ge(b, 6486); else if ((f | 0) == 47) ge(b, 6486);
  }
 } while (0);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 k = c[q >> 2] | 0;
 if ((k | 0) < 0) ge(b, 6560);
 f = c[b >> 2] | 0;
 if ((k + 1 | 0) >>> 0 > 1073741823) Kb(f);
 f = yb(f, 0, 0, k << 2) | 0;
 j = e + 16 | 0;
 c[j >> 2] = f;
 c[e + 56 >> 2] = k;
 g = (k | 0) > 0;
 do if (g) {
  c[f >> 2] = 0;
  if ((k | 0) != 1) {
   f = 1;
   do {
    c[(c[j >> 2] | 0) + (f << 2) >> 2] = 0;
    f = f + 1 | 0;
   } while ((f | 0) != (k | 0));
  }
  if (g) f = 0; else break;
  do {
   n = he(c[b >> 2] | 0) | 0;
   c[(c[j >> 2] | 0) + (f << 2) >> 2] = n;
   ie(b, c[(c[j >> 2] | 0) + (f << 2) >> 2] | 0);
   f = f + 1 | 0;
  } while ((f | 0) != (k | 0));
 } while (0);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 j = c[q >> 2] | 0;
 if ((j | 0) < 0) ge(b, 6560);
 f = c[b >> 2] | 0;
 if ((j + 1 | 0) >>> 0 > 536870911) Kb(f);
 f = yb(f, 0, 0, j << 3) | 0;
 m = e + 28 | 0;
 c[m >> 2] = f;
 c[e + 40 >> 2] = j;
 c : do if ((j | 0) > 0) {
  g = 0;
  do {
   c[f + (g << 3) >> 2] = 0;
   g = g + 1 | 0;
  } while ((g | 0) != (j | 0));
  f = 0;
  while (1) {
   if (fe(c[p >> 2] | 0, q, 1) | 0) {
    f = 71;
    break;
   }
   a[(c[m >> 2] | 0) + (f << 3) + 4 >> 0] = a[q >> 0] | 0;
   if (fe(c[p >> 2] | 0, q, 1) | 0) {
    f = 73;
    break;
   }
   a[(c[m >> 2] | 0) + (f << 3) + 5 >> 0] = a[q >> 0] | 0;
   f = f + 1 | 0;
   if ((f | 0) >= (j | 0)) break c;
  }
  if ((f | 0) == 71) ge(b, 6486); else if ((f | 0) == 73) ge(b, 6486);
 } while (0);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 f = c[q >> 2] | 0;
 do if (!f) o = 0; else {
  f = jc(c[b >> 2] | 0, c[b + 8 >> 2] | 0, f) | 0;
  if (!(fe(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0)) {
   o = Lb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
   break;
  } else ge(b, 6486);
 } while (0);
 c[e + 36 >> 2] = o;
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) ge(b, 6560);
 g = c[b >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 1073741823) Kb(g);
 o = f << 2;
 n = yb(g, 0, 0, o) | 0;
 c[e + 20 >> 2] = n;
 c[e + 52 >> 2] = f;
 if (fe(c[p >> 2] | 0, n, o) | 0) ge(b, 6486);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 l = c[q >> 2] | 0;
 if ((l | 0) < 0) ge(b, 6560);
 f = c[b >> 2] | 0;
 if ((l + 1 | 0) >>> 0 > 357913941) Kb(f);
 g = yb(f, 0, 0, l * 12 | 0) | 0;
 k = e + 24 | 0;
 c[k >> 2] = g;
 c[e + 60 >> 2] = l;
 d : do if ((l | 0) > 0) {
  f = 0;
  do {
   c[g + (f * 12 | 0) >> 2] = 0;
   f = f + 1 | 0;
  } while ((f | 0) != (l | 0));
  g = b + 8 | 0;
  j = 0;
  while (1) {
   if (fe(c[p >> 2] | 0, q, 4) | 0) {
    f = 99;
    break;
   }
   f = c[q >> 2] | 0;
   if (!f) f = 0; else {
    f = jc(c[b >> 2] | 0, c[g >> 2] | 0, f) | 0;
    if (fe(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
     f = 102;
     break;
    }
    f = Lb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) >> 2] = f;
   if (fe(c[p >> 2] | 0, q, 4) | 0) {
    f = 105;
    break;
   }
   f = c[q >> 2] | 0;
   if ((f | 0) < 0) {
    f = 107;
    break;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) + 4 >> 2] = f;
   if (fe(c[p >> 2] | 0, q, 4) | 0) {
    f = 109;
    break;
   }
   f = c[q >> 2] | 0;
   if ((f | 0) < 0) {
    f = 111;
    break;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) + 8 >> 2] = f;
   j = j + 1 | 0;
   if ((j | 0) >= (l | 0)) break d;
  }
  if ((f | 0) == 99) ge(b, 6486); else if ((f | 0) == 102) ge(b, 6486); else if ((f | 0) == 105) ge(b, 6486); else if ((f | 0) == 107) ge(b, 6560); else if ((f | 0) == 109) ge(b, 6486); else if ((f | 0) == 111) ge(b, 6560);
 } while (0);
 if (fe(c[p >> 2] | 0, q, 4) | 0) ge(b, 6486);
 g = c[q >> 2] | 0;
 if ((g | 0) < 0) ge(b, 6560);
 if ((g | 0) <= 0) {
  i = r;
  return;
 }
 j = b + 8 | 0;
 k = 0;
 while (1) {
  if (fe(c[p >> 2] | 0, q, 4) | 0) {
   f = 120;
   break;
  }
  f = c[q >> 2] | 0;
  if (!f) f = 0; else {
   f = jc(c[b >> 2] | 0, c[j >> 2] | 0, f) | 0;
   if (fe(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
    f = 123;
    break;
   }
   f = Lb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
  }
  c[(c[m >> 2] | 0) + (k << 3) >> 2] = f;
  k = k + 1 | 0;
  if ((k | 0) >= (g | 0)) {
   f = 126;
   break;
  }
 }
 if ((f | 0) == 120) ge(b, 6486); else if ((f | 0) == 123) ge(b, 6486); else if ((f | 0) == 126) {
  i = r;
  return;
 }
}

function Rb(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 g = b + 84 | 0;
 m = c[g >> 2] | 0;
 i = m + 5 | 0;
 a[i >> 0] = d[i >> 0] | 4;
 e = c[m + 4 >> 2] | 0;
 f = e >>> 16;
 h = f & 255;
 switch (e & 255 | 0) {
 case 5:
  {
   k = m + 24 | 0;
   c[g >> 2] = c[k >> 2];
   g = m + 8 | 0;
   f = c[g >> 2] | 0;
   do if (!f) l = 34; else {
    if (!(a[f + 6 >> 0] & 8)) {
     e = Sb(f, 3, c[b + 196 >> 2] | 0) | 0;
     f = c[g >> 2] | 0;
     if (f) l = 5;
    } else {
     e = 0;
     l = 5;
    }
    if ((l | 0) == 5) if (a[f + 5 >> 0] & 3) Pb(b, f);
    if (!e) l = 34; else if ((c[e + 8 >> 2] & 15 | 0) == 4) {
     f = (c[e >> 2] | 0) + 16 | 0;
     e = qm(f, 107) | 0;
     e = (e | 0) != 0;
     f = (qm(f, 118) | 0) != 0;
     if (e | f) {
      a[i >> 0] = d[i >> 0] & 251;
      if (e) if (f) {
       j = b + 100 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      } else {
       Tb(b, m) | 0;
       break;
      }
      i = a[m + 7 >> 0] | 0;
      f = c[m + 16 >> 2] | 0;
      j = f + (1 << (i & 255) << 5) | 0;
      e = (c[m + 28 >> 2] | 0) > 0 & 1;
      if (i << 24 >> 24 != 31) do {
       i = f + 8 | 0;
       g = f + 24 | 0;
       h = (c[g >> 2] & 64 | 0) == 0;
       if (!(c[i >> 2] | 0)) {
        if (!h) if (a[(c[f + 16 >> 2] | 0) + 5 >> 0] & 3) c[g >> 2] = 11;
       } else {
        if (!h) {
         g = c[f + 16 >> 2] | 0;
         if (a[g + 5 >> 0] & 3) Pb(b, g);
        }
        if (!e) {
         e = c[i >> 2] | 0;
         do if (!(e & 64)) e = 0; else {
          g = c[f >> 2] | 0;
          if ((e & 15 | 0) != 4) {
           e = d[g + 5 >> 0] & 3;
           break;
          }
          if (!g) e = 0; else if (!(a[g + 5 >> 0] & 3)) e = 0; else {
           Pb(b, g);
           e = 0;
          }
         } while (0);
         e = (e | 0) != 0 & 1;
        }
       }
       f = f + 32 | 0;
      } while (f >>> 0 < j >>> 0);
      if (!e) {
       j = b + 88 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      } else {
       j = b + 92 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      }
     } else l = 34;
    } else l = 34;
   } while (0);
   if ((l | 0) == 34) {
    i = m + 16 | 0;
    e = c[i >> 2] | 0;
    k = e + (1 << d[m + 7 >> 0] << 5) | 0;
    j = m + 28 | 0;
    f = c[j >> 2] | 0;
    if ((f | 0) > 0) {
     h = m + 12 | 0;
     g = 0;
     do {
      e = c[h >> 2] | 0;
      if (c[e + (g << 4) + 8 >> 2] & 64) {
       e = c[e + (g << 4) >> 2] | 0;
       if (a[e + 5 >> 0] & 3) {
        Pb(b, e);
        f = c[j >> 2] | 0;
       }
      }
      g = g + 1 | 0;
     } while ((g | 0) < (f | 0));
     e = c[i >> 2] | 0;
    }
    if (e >>> 0 < k >>> 0) do {
     i = e + 8 | 0;
     f = c[i >> 2] | 0;
     g = e + 24 | 0;
     h = (c[g >> 2] & 64 | 0) == 0;
     if (!f) {
      if (!h) if (a[(c[e + 16 >> 2] | 0) + 5 >> 0] & 3) c[g >> 2] = 11;
     } else {
      if (!h) {
       g = c[e + 16 >> 2] | 0;
       if (a[g + 5 >> 0] & 3) {
        Pb(b, g);
        f = c[i >> 2] | 0;
       }
      }
      if (f & 64 | 0) {
       f = c[e >> 2] | 0;
       if (a[f + 5 >> 0] & 3) Pb(b, f);
      }
     }
     e = e + 32 | 0;
    } while (e >>> 0 < k >>> 0);
   }
   e = (c[m + 28 >> 2] << 4) + 32 + (32 << d[m + 7 >> 0]) | 0;
   break;
  }
 case 6:
  {
   c[g >> 2] = c[m + 8 >> 2];
   e = c[m + 12 >> 2] | 0;
   if (!e) e = h; else if (!(a[e + 5 >> 0] & 3)) e = h; else {
    Pb(b, e);
    e = a[m + 6 >> 0] | 0;
   }
   h = m + 6 | 0;
   if (!(e << 24 >> 24)) e = e & 255; else {
    g = 0;
    while (1) {
     f = c[m + 16 + (g << 2) >> 2] | 0;
     if (!f) f = e; else if (!(a[f + 5 >> 0] & 3)) f = e; else {
      Pb(b, f);
      f = a[h >> 0] | 0;
     }
     g = g + 1 | 0;
     e = f & 255;
     if ((g | 0) >= (e | 0)) break; else e = f;
    }
   }
   e = (e << 2) + 16 | 0;
   break;
  }
 case 38:
  {
   c[g >> 2] = c[m + 8 >> 2];
   i = m + 6 | 0;
   if (!(h << 24 >> 24)) e = f & 255; else {
    e = h;
    g = 0;
    while (1) {
     if (!(c[m + 16 + (g << 4) + 8 >> 2] & 64)) f = e; else {
      f = c[m + 16 + (g << 4) >> 2] | 0;
      if (!(a[f + 5 >> 0] & 3)) f = e; else {
       Pb(b, f);
       f = a[i >> 0] | 0;
      }
     }
     g = g + 1 | 0;
     e = f & 255;
     if ((g | 0) >= (e | 0)) break; else e = f;
    }
   }
   e = (e << 4) + 16 | 0;
   break;
  }
 case 8:
  {
   l = m + 60 | 0;
   c[g >> 2] = c[l >> 2];
   f = b + 88 | 0;
   c[l >> 2] = c[f >> 2];
   c[f >> 2] = m;
   a[i >> 0] = e >>> 8 & 251;
   i = m + 28 | 0;
   f = c[i >> 2] | 0;
   if (!f) e = 1; else {
    h = m + 8 | 0;
    e = c[h >> 2] | 0;
    if (f >>> 0 < e >>> 0) do {
     if (c[f + 8 >> 2] & 64) {
      g = c[f >> 2] | 0;
      if (a[g + 5 >> 0] & 3) {
       Pb(b, g);
       e = c[h >> 2] | 0;
      }
     }
     f = f + 16 | 0;
    } while (f >>> 0 < e >>> 0);
    if ((a[b + 61 >> 0] | 0) == 1) {
     e = c[m + 32 >> 2] | 0;
     g = (c[i >> 2] | 0) + (e << 4) | 0;
     if (f >>> 0 < g >>> 0) do {
      c[f + 8 >> 2] = 0;
      f = f + 16 | 0;
     } while (f >>> 0 < g >>> 0);
    } else e = c[m + 32 >> 2] | 0;
    e = (e << 4) + 112 | 0;
   }
   break;
  }
 case 9:
  {
   c[g >> 2] = c[m + 72 >> 2];
   f = m + 32 | 0;
   e = c[f >> 2] | 0;
   if (e | 0) if (a[e + 5 >> 0] & 3) c[f >> 2] = 0;
   e = c[m + 36 >> 2] | 0;
   if (e | 0) if (a[e + 5 >> 0] & 3) Pb(b, e);
   l = m + 44 | 0;
   e = c[l >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 8 | 0;
    g = 0;
    do {
     f = c[h >> 2] | 0;
     if (c[f + (g << 4) + 8 >> 2] & 64) {
      f = c[f + (g << 4) >> 2] | 0;
      if (a[f + 5 >> 0] & 3) {
       Pb(b, f);
       e = c[l >> 2] | 0;
      }
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
   }
   k = m + 40 | 0;
   e = c[k >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 28 | 0;
    g = 0;
    do {
     f = c[(c[h >> 2] | 0) + (g << 3) >> 2] | 0;
     if (f) if (a[f + 5 >> 0] & 3) {
      Pb(b, f);
      e = c[k >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
   }
   j = m + 56 | 0;
   f = c[j >> 2] | 0;
   if ((f | 0) > 0) {
    h = m + 16 | 0;
    g = 0;
    do {
     e = c[(c[h >> 2] | 0) + (g << 2) >> 2] | 0;
     if (e) if (a[e + 5 >> 0] & 3) {
      Pb(b, e);
      f = c[j >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (f | 0));
   }
   i = m + 60 | 0;
   e = c[i >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 24 | 0;
    g = 0;
    do {
     f = c[(c[h >> 2] | 0) + (g * 12 | 0) >> 2] | 0;
     if (f) if (a[f + 5 >> 0] & 3) {
      Pb(b, f);
      e = c[i >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
    f = c[j >> 2] | 0;
   }
   e = (e * 12 | 0) + 80 + (c[l >> 2] << 4) + (c[k >> 2] << 3) + ((c[m + 48 >> 2] | 0) + f + (c[m + 52 >> 2] | 0) << 2) | 0;
   break;
  }
 default:
  return;
 }
 b = b + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + e;
 return;
}

function ej(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 c[s >> 2] = c[d + 64 >> 2];
 r = e + 16 | 0;
 f = c[r >> 2] | 0;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 c[s >> 2] = c[d + 68 >> 2];
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 g = b[d + 76 >> 1] | 0;
 a[s >> 0] = g;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 1, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
  a[s >> 0] = a[d + 77 >> 0] | 0;
  if (!f) {
   f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 1, c[e + 8 >> 2] | 0) | 0;
   c[r >> 2] = f;
  }
 } else a[s >> 0] = (g & 65535) >>> 8;
 a[s >> 0] = a[d + 78 >> 0] | 0;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 1, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 k = c[d + 12 >> 2] | 0;
 l = c[d + 48 >> 2] | 0;
 c[s >> 2] = l;
 if (!f) {
  j = e + 4 | 0;
  g = e + 8 | 0;
  f = gb[c[j >> 2] & 3](c[e >> 2] | 0, s, 4, c[g >> 2] | 0) | 0;
  c[r >> 2] = f;
  if (!f) {
   f = gb[c[j >> 2] & 3](c[e >> 2] | 0, k, l << 2, c[g >> 2] | 0) | 0;
   c[r >> 2] = f;
   g = c[d + 44 >> 2] | 0;
   c[s >> 2] = g;
   if (!f) {
    f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
    c[r >> 2] = f;
   }
  } else q = 14;
 } else q = 14;
 if ((q | 0) == 14) {
  g = c[d + 44 >> 2] | 0;
  c[s >> 2] = g;
 }
 a : do if ((g | 0) > 0) {
  o = d + 8 | 0;
  p = e + 4 | 0;
  n = e + 8 | 0;
  m = 0;
  while (1) {
   k = c[o >> 2] | 0;
   l = k + (m << 4) | 0;
   k = k + (m << 4) + 8 | 0;
   j = c[k >> 2] | 0;
   a[s >> 0] = j & 15;
   if (!f) {
    f = gb[c[p >> 2] & 3](c[e >> 2] | 0, s, 1, c[n >> 2] | 0) | 0;
    c[r >> 2] = f;
    j = c[k >> 2] | 0;
   }
   b : do switch (j & 15 | 0) {
   case 4:
    {
     j = c[l >> 2] | 0;
     if (!j) {
      c[s >> 2] = 0;
      if (!f) {
       f = gb[c[p >> 2] & 3](c[e >> 2] | 0, s, 4, c[n >> 2] | 0) | 0;
       c[r >> 2] = f;
      }
      break b;
     }
     c[s >> 2] = (c[j + 12 >> 2] | 0) + 1;
     if (!f) {
      f = gb[c[p >> 2] & 3](c[e >> 2] | 0, s, 4, c[n >> 2] | 0) | 0;
      c[r >> 2] = f;
      if (!f) {
       f = gb[c[p >> 2] & 3](c[e >> 2] | 0, j + 16 | 0, c[s >> 2] | 0, c[n >> 2] | 0) | 0;
       c[r >> 2] = f;
      }
     }
     break;
    }
   case 1:
    {
     a[s >> 0] = c[l >> 2];
     if (!f) {
      f = gb[c[p >> 2] & 3](c[e >> 2] | 0, s, 1, c[n >> 2] | 0) | 0;
      c[r >> 2] = f;
     }
     break;
    }
   case 3:
    {
     h[s >> 3] = +h[l >> 3];
     if (!f) {
      f = gb[c[p >> 2] & 3](c[e >> 2] | 0, s, 8, c[n >> 2] | 0) | 0;
      c[r >> 2] = f;
     }
     break;
    }
   default:
    {}
   } while (0);
   m = m + 1 | 0;
   if ((m | 0) == (g | 0)) break a;
  }
 } while (0);
 j = c[d + 56 >> 2] | 0;
 c[s >> 2] = j;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 if ((j | 0) > 0) {
  g = d + 16 | 0;
  f = 0;
  do {
   ej(c[(c[g >> 2] | 0) + (f << 2) >> 2] | 0, e);
   f = f + 1 | 0;
  } while ((f | 0) != (j | 0));
  f = c[r >> 2] | 0;
 }
 p = d + 40 | 0;
 n = c[p >> 2] | 0;
 c[s >> 2] = n;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 if ((n | 0) > 0) {
  l = d + 28 | 0;
  m = e + 4 | 0;
  k = e + 8 | 0;
  j = 0;
  do {
   g = c[l >> 2] | 0;
   a[s >> 0] = a[g + (j << 3) + 4 >> 0] | 0;
   if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 1, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
    g = c[l >> 2] | 0;
   }
   a[s >> 0] = a[g + (j << 3) + 5 >> 0] | 0;
   if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 1, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
   }
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
 }
 o = e + 12 | 0;
 if (!(c[o >> 2] | 0)) {
  k = c[d + 36 >> 2] | 0;
  if (!k) q = 54; else {
   c[s >> 2] = (c[k + 12 >> 2] | 0) + 1;
   if (!f) {
    j = e + 4 | 0;
    g = e + 8 | 0;
    f = gb[c[j >> 2] & 3](c[e >> 2] | 0, s, 4, c[g >> 2] | 0) | 0;
    c[r >> 2] = f;
    if (!f) {
     f = gb[c[j >> 2] & 3](c[e >> 2] | 0, k + 16 | 0, c[s >> 2] | 0, c[g >> 2] | 0) | 0;
     c[r >> 2] = f;
    }
   }
  }
 } else q = 54;
 if ((q | 0) == 54) {
  c[s >> 2] = 0;
  if (!f) {
   f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
   c[r >> 2] = f;
  }
 }
 if (!(c[o >> 2] | 0)) l = c[d + 52 >> 2] | 0; else l = 0;
 k = c[d + 20 >> 2] | 0;
 c[s >> 2] = l;
 if (!f) {
  j = e + 4 | 0;
  g = e + 8 | 0;
  f = gb[c[j >> 2] & 3](c[e >> 2] | 0, s, 4, c[g >> 2] | 0) | 0;
  c[r >> 2] = f;
  if (!f) {
   f = gb[c[j >> 2] & 3](c[e >> 2] | 0, k, l << 2, c[g >> 2] | 0) | 0;
   c[r >> 2] = f;
  }
 }
 if (!(c[o >> 2] | 0)) n = c[d + 60 >> 2] | 0; else n = 0;
 c[s >> 2] = n;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 if ((n | 0) > 0) {
  l = d + 24 | 0;
  m = e + 4 | 0;
  k = e + 8 | 0;
  j = 0;
  do {
   g = c[(c[l >> 2] | 0) + (j * 12 | 0) >> 2] | 0;
   if (!g) {
    c[s >> 2] = 0;
    if (!f) {
     f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
     c[r >> 2] = f;
    }
   } else {
    c[s >> 2] = (c[g + 12 >> 2] | 0) + 1;
    do if (!f) {
     f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
     c[r >> 2] = f;
     if (f | 0) break;
     f = gb[c[m >> 2] & 3](c[e >> 2] | 0, g + 16 | 0, c[s >> 2] | 0, c[k >> 2] | 0) | 0;
     c[r >> 2] = f;
    } while (0);
   }
   g = c[l >> 2] | 0;
   c[s >> 2] = c[g + (j * 12 | 0) + 4 >> 2];
   if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
    g = c[l >> 2] | 0;
   }
   c[s >> 2] = c[g + (j * 12 | 0) + 8 >> 2];
   if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
   }
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
 }
 if (!(c[o >> 2] | 0)) n = c[p >> 2] | 0; else n = 0;
 c[s >> 2] = n;
 if (!f) {
  f = gb[c[e + 4 >> 2] & 3](c[e >> 2] | 0, s, 4, c[e + 8 >> 2] | 0) | 0;
  c[r >> 2] = f;
 }
 if ((n | 0) <= 0) {
  i = t;
  return;
 }
 l = d + 28 | 0;
 m = e + 4 | 0;
 k = e + 8 | 0;
 j = 0;
 do {
  g = c[(c[l >> 2] | 0) + (j << 3) >> 2] | 0;
  if (!g) {
   c[s >> 2] = 0;
   if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
   }
  } else {
   c[s >> 2] = (c[g + 12 >> 2] | 0) + 1;
   do if (!f) {
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, s, 4, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
    if (f | 0) break;
    f = gb[c[m >> 2] & 3](c[e >> 2] | 0, g + 16 | 0, c[s >> 2] | 0, c[k >> 2] | 0) | 0;
    c[r >> 2] = f;
   } while (0);
  }
  j = j + 1 | 0;
 } while ((j | 0) != (n | 0));
 i = t;
 return;
}

function hm(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(_k() | 0) >> 2] = 22;
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
   } else i = im(b) | 0;
  } while ((dm(i) | 0) != 0);
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
     i = im(b) | 0;
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
   } else i = im(b) | 0;
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
   } else i = im(b) | 0;
   if ((d[14786 + i >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     gm(b, 0);
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
   if ((d[14786 + i >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    gm(b, 0);
    c[(_k() | 0) >> 2] = 22;
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
     } else i = im(b) | 0;
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
     k = Ln(e | 0, f | 0, 10, 0) | 0;
     l = C;
     m = ((j | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~j >>> 0) break;
     k = yn(k | 0, l | 0, j | 0, m | 0) | 0;
     f = C;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = im(b) | 0;
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
    n = a[15042 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[14786 + i >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = im(b) | 0;
      j = a[14786 + i >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = Cn(-1, -1, n | 0) | 0;
    m = C;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = k;
     n = 72;
     break;
    }
    while (1) {
     k = An(k | 0, f | 0, n | 0) | 0;
     f = C;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = im(b) | 0;
     j = a[14786 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = k;
      n = 72;
      break c;
     }
    }
   }
   f = a[14786 + i >> 0] | 0;
   j = f & 255;
   if (j >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = j + (_(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = im(b) | 0;
     f = a[14786 + i >> 0] | 0;
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
    n = Mn(-1, -1, e | 0, 0) | 0;
    o = C;
    while (1) {
     if (k >>> 0 > o >>> 0 | (k | 0) == (o | 0) & j >>> 0 > n >>> 0) {
      f = k;
      n = 72;
      break c;
     }
     m = Ln(j | 0, k | 0, e | 0, 0) | 0;
     l = C;
     f = f & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & m >>> 0 > ~f >>> 0) {
      f = k;
      n = 72;
      break c;
     }
     j = yn(f | 0, 0, m | 0, l | 0) | 0;
     k = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = im(b) | 0;
     f = a[14786 + i >> 0] | 0;
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
  if ((n | 0) == 72) if ((d[14786 + i >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = im(b) | 0;
   } while ((d[14786 + i >> 0] | 0) >>> 0 < e >>> 0);
   c[(_k() | 0) >> 2] = 34;
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
    c[(_k() | 0) >> 2] = 34;
    g = yn(g | 0, h | 0, -1, -1) | 0;
    h = C;
    break;
   }
   if (f >>> 0 > h >>> 0 | (f | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(_k() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = xn(i ^ e | 0, f ^ g | 0, e | 0, g | 0) | 0;
  h = C;
 } while (0);
 C = h;
 return g | 0;
}

function pl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, j = 0.0, k = 0.0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 560 | 0;
 A = E + 480 | 0;
 y = E + 320 | 0;
 D = E + 160 | 0;
 C = E;
 B = c[3436 + (f << 2) >> 2] | 0;
 q = e + -1 | 0;
 x = (d + -3 | 0) / 24 | 0;
 x = (x | 0) < 0 ? 0 : x;
 r = (x * 24 | 0) + 24 | 0;
 l = d - r | 0;
 if ((B + q | 0) >= 0) {
  m = B + e | 0;
  n = 0;
  o = x - q | 0;
  while (1) {
   if ((o | 0) < 0) g = 0.0; else g = +(c[3452 + (o << 2) >> 2] | 0);
   h[y + (n << 3) >> 3] = g;
   n = n + 1 | 0;
   if ((n | 0) == (m | 0)) break; else o = o + 1 | 0;
  }
 }
 o = (e | 0) > 0;
 p = 0;
 while (1) {
  if (o) {
   m = p + q | 0;
   g = 0.0;
   n = 0;
   do {
    g = g + +h[a + (n << 3) >> 3] * +h[y + (m - n << 3) >> 3];
    n = n + 1 | 0;
   } while ((n | 0) != (e | 0));
  } else g = 0.0;
  h[C + (p << 3) >> 3] = g;
  if ((p | 0) < (B | 0)) p = p + 1 | 0; else break;
 }
 u = (l | 0) > 0;
 v = 24 - l | 0;
 w = 23 - l | 0;
 t = (e | 0) > 0;
 s = (r | 0) == (d | 0);
 m = B;
 a : while (1) {
  g = +h[C + (m << 3) >> 3];
  p = (m | 0) > 0;
  if (p) {
   n = 0;
   o = m;
   while (1) {
    k = +(~~(g * 5.9604644775390625e-08) | 0);
    c[A + (n << 2) >> 2] = ~~(g - k * 16777216.0);
    r = o;
    o = o + -1 | 0;
    g = k + +h[C + (o << 3) >> 3];
    if ((r | 0) <= 1) break; else n = n + 1 | 0;
   }
  }
  g = +gl(g, l);
  g = g - +M(+(g * .125)) * 8.0;
  o = ~~g;
  g = g - +(o | 0);
  do if (u) {
   r = A + (m + -1 << 2) | 0;
   n = c[r >> 2] | 0;
   z = n >> v;
   n = n - (z << v) | 0;
   c[r >> 2] = n;
   n = n >> w;
   o = z + o | 0;
   z = 19;
  } else if (s) {
   n = c[A + (m + -1 << 2) >> 2] >> 23;
   z = 19;
   break;
  } else if (!(g >= .5)) {
   n = 0;
   break;
  } else {
   n = 2;
   z = 20;
   break;
  } while (0);
  if ((z | 0) == 19) {
   z = 0;
   if ((n | 0) > 0) z = 20;
  }
  if ((z | 0) == 20) {
   z = 0;
   o = o + 1 | 0;
   if (p) {
    p = 0;
    r = 0;
    do {
     d = A + (r << 2) | 0;
     q = c[d >> 2] | 0;
     if (!p) if (!q) p = 0; else {
      c[d >> 2] = 16777216 - q;
      p = 1;
     } else c[d >> 2] = 16777215 - q;
     r = r + 1 | 0;
    } while ((r | 0) != (m | 0));
   } else p = 0;
   b : do if (u) switch (l | 0) {
   case 1:
    {
     r = A + (m + -1 << 2) | 0;
     c[r >> 2] = c[r >> 2] & 8388607;
     break b;
    }
   case 2:
    {
     r = A + (m + -1 << 2) | 0;
     c[r >> 2] = c[r >> 2] & 4194303;
     break b;
    }
   default:
    break b;
   } while (0);
   if ((n | 0) == 2) {
    g = 1.0 - g;
    if (!p) n = 2; else {
     n = 2;
     g = g - +gl(1.0, l);
    }
   }
  }
  if (!(g == 0.0)) {
   z = 44;
   break;
  }
  if ((m | 0) > (B | 0)) {
   q = m;
   p = 0;
   do {
    q = q + -1 | 0;
    p = c[A + (q << 2) >> 2] | p;
   } while ((q | 0) > (B | 0));
   if (!p) n = 1; else {
    z = 37;
    break;
   }
  } else n = 1;
  while (1) if (!(c[A + (B - n << 2) >> 2] | 0)) n = n + 1 | 0; else break;
  p = n + m | 0;
  if ((n | 0) <= 0) {
   m = p;
   continue;
  }
  while (1) {
   o = m + 1 | 0;
   m = m + e | 0;
   h[y + (m << 3) >> 3] = +(c[3452 + (o + x << 2) >> 2] | 0);
   if (t) {
    g = 0.0;
    n = 0;
    do {
     g = g + +h[a + (n << 3) >> 3] * +h[y + (m - n << 3) >> 3];
     n = n + 1 | 0;
    } while ((n | 0) != (e | 0));
   } else g = 0.0;
   h[C + (o << 3) >> 3] = g;
   if ((o | 0) < (p | 0)) m = o; else {
    m = p;
    continue a;
   }
  }
 }
 do if ((z | 0) == 37) {
  do {
   l = l + -24 | 0;
   m = m + -1 | 0;
  } while ((c[A + (m << 2) >> 2] | 0) == 0);
  d = n;
  q = m;
 } else if ((z | 0) == 44) {
  g = +gl(g, 0 - l | 0);
  if (!(g >= 16777216.0)) {
   c[A + (m << 2) >> 2] = ~~g;
   d = n;
   q = m;
   break;
  } else {
   d = ~~(g * 5.9604644775390625e-08);
   c[A + (m << 2) >> 2] = ~~(g - +(d | 0) * 16777216.0);
   q = m + 1 | 0;
   c[A + (q << 2) >> 2] = d;
   d = n;
   l = l + 24 | 0;
   break;
  }
 } while (0);
 p = (q | 0) > -1;
 if (p) {
  g = +gl(1.0, l);
  l = q;
  while (1) {
   h[C + (l << 3) >> 3] = g * +(c[A + (l << 2) >> 2] | 0);
   if ((l | 0) > 0) {
    g = g * 5.9604644775390625e-08;
    l = l + -1 | 0;
   } else break;
  }
  if (p) {
   m = q;
   while (1) {
    n = q - m | 0;
    g = 0.0;
    l = 0;
    while (1) {
     g = g + +h[1032 + (l << 3) >> 3] * +h[C + (l + m << 3) >> 3];
     if ((l | 0) >= (B | 0) | (l | 0) >= (n | 0)) break; else l = l + 1 | 0;
    }
    h[D + (n << 3) >> 3] = g;
    if ((m | 0) > 0) m = m + -1 | 0; else break;
   }
  }
 }
 c : do switch (f | 0) {
 case 0:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[D + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   h[b >> 3] = (d | 0) == 0 ? g : -g;
   break;
  }
 case 2:
 case 1:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[D + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   m = (d | 0) == 0;
   h[b >> 3] = m ? g : -g;
   g = +h[D >> 3] - g;
   if ((q | 0) >= 1) {
    l = 1;
    while (1) {
     g = g + +h[D + (l << 3) >> 3];
     if ((l | 0) == (q | 0)) break; else l = l + 1 | 0;
    }
   }
   h[b + 8 >> 3] = m ? g : -g;
   break;
  }
 case 3:
  {
   if ((q | 0) > 0) {
    g = +h[D + (q << 3) >> 3];
    l = q;
    do {
     C = l;
     l = l + -1 | 0;
     f = D + (l << 3) | 0;
     k = +h[f >> 3];
     j = g;
     g = k + g;
     h[D + (C << 3) >> 3] = j + (k - g);
     h[f >> 3] = g;
    } while ((C | 0) > 1);
    l = (q | 0) > 1;
    if (l) {
     g = +h[D + (q << 3) >> 3];
     m = q;
     do {
      f = m;
      m = m + -1 | 0;
      C = D + (m << 3) | 0;
      k = +h[C >> 3];
      j = g;
      g = k + g;
      h[D + (f << 3) >> 3] = j + (k - g);
      h[C >> 3] = g;
     } while ((m | 0) > 1);
     if (l) {
      g = 0.0;
      l = q;
      do {
       g = g + +h[D + (l << 3) >> 3];
       l = l + -1 | 0;
      } while ((l | 0) > 1);
      k = g;
     } else k = 0.0;
    } else k = 0.0;
   } else k = 0.0;
   j = +h[D >> 3];
   g = +h[D + 8 >> 3];
   if (!d) {
    h[b >> 3] = j;
    h[b + 8 >> 3] = g;
    h[b + 16 >> 3] = k;
    break c;
   } else {
    h[b >> 3] = -j;
    h[b + 8 >> 3] = -g;
    h[b + 16 >> 3] = -k;
    break c;
   }
  }
 default:
  {}
 } while (0);
 i = E;
 return o & 7 | 0;
}

function kj(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0.0, I = 0, J = 0;
 G = i;
 i = i + 1168 | 0;
 F = G + 72 | 0;
 A = G + 64 | 0;
 z = G + 56 | 0;
 y = G + 48 | 0;
 x = G + 40 | 0;
 D = G + 32 | 0;
 C = G + 24 | 0;
 B = G + 16 | 0;
 w = G + 8 | 0;
 v = G;
 s = G + 1124 | 0;
 o = G + 1146 | 0;
 u = G + 1120 | 0;
 n = G + 80 | 0;
 q = G + 1128 | 0;
 p = Kd(b) | 0;
 e = Fg(b, 1, u) | 0;
 u = c[u >> 2] | 0;
 l = e + u | 0;
 $g(b, n);
 a : do if ((u | 0) > 0) {
  t = n + 8 | 0;
  u = n + 4 | 0;
  r = q + 1 | 0;
  m = 1;
  g = e;
  b : while (1) {
   e = g;
   while (1) {
    g = a[e >> 0] | 0;
    if (g << 24 >> 24 == 37) {
     j = e + 1 | 0;
     if ((a[j >> 0] | 0) != 37) break;
     f = c[t >> 2] | 0;
     if (f >>> 0 < (c[u >> 2] | 0) >>> 0) {
      g = f;
      f = 37;
     } else {
      li(n, 1) | 0;
      g = c[t >> 2] | 0;
      f = a[j >> 0] | 0;
     }
     c[t >> 2] = g + 1;
     a[(c[n >> 2] | 0) + g >> 0] = f;
     e = e + 2 | 0;
    } else {
     f = c[t >> 2] | 0;
     if (f >>> 0 >= (c[u >> 2] | 0) >>> 0) {
      li(n, 1) | 0;
      f = c[t >> 2] | 0;
      g = a[e >> 0] | 0;
     }
     c[t >> 2] = f + 1;
     a[(c[n >> 2] | 0) + f >> 0] = g;
     e = e + 1 | 0;
    }
    if (e >>> 0 >= l >>> 0) break a;
   }
   k = li(n, 512) | 0;
   g = m;
   m = m + 1 | 0;
   if ((g | 0) >= (p | 0)) Id(b, m, 10607) | 0;
   e = a[j >> 0] | 0;
   c : do if (!(e << 24 >> 24)) {
    e = 0;
    f = j;
   } else {
    f = j;
    while (1) {
     if (!(Pl(10616, e << 24 >> 24, 6) | 0)) break c;
     f = f + 1 | 0;
     e = a[f >> 0] | 0;
     if (!(e << 24 >> 24)) {
      e = 0;
      break;
     }
    }
   } while (0);
   g = j;
   if ((f - g | 0) >>> 0 > 5) {
    md(b, 10622, v) | 0;
    e = a[f >> 0] | 0;
   }
   f = ((e & 255) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
   f = ((d[f >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
   e = a[f >> 0] | 0;
   if (e << 24 >> 24 == 46) {
    e = f + 1 | 0;
    f = ((d[e >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 2 | 0 : e;
    f = ((d[f >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
    e = a[f >> 0] | 0;
   }
   if (((e & 255) + -48 | 0) >>> 0 < 10) md(b, 10654, w) | 0;
   a[q >> 0] = 37;
   g = f - g + 1 | 0;
   En(r | 0, j | 0, g | 0) | 0;
   a[r + g >> 0] = 0;
   g = f + 1 | 0;
   e = a[f >> 0] | 0;
   switch (e | 0) {
   case 99:
    {
     c[B >> 2] = Xf(b, m) | 0;
     e = lm(k, q, B) | 0;
     break;
    }
   case 105:
   case 100:
    {
     H = +Li(b, m);
     e = ~~H;
     H = H - +(e | 0);
     if (!(H > -1.0 & H < 1.0)) Id(b, m, 10699) | 0;
     j = Vl(q) | 0;
     I = a[q + (j + -1) >> 0] | 0;
     f = q + j | 0;
     J = f + -1 | 0;
     a[J >> 0] = 108;
     a[J + 1 >> 0] = 0;
     a[f >> 0] = I;
     a[q + (j + 1) >> 0] = 0;
     c[C >> 2] = e;
     e = lm(k, q, C) | 0;
     break;
    }
   case 88:
   case 120:
   case 117:
   case 111:
    {
     H = +Li(b, m);
     e = ~~H >>> 0;
     H = H - +(e >>> 0);
     if (!(H > -1.0 & H < 1.0)) Id(b, m, 10728) | 0;
     J = Vl(q) | 0;
     j = a[q + (J + -1) >> 0] | 0;
     I = q + J | 0;
     f = I + -1 | 0;
     a[f >> 0] = 108;
     a[f + 1 >> 0] = 0;
     a[I >> 0] = j;
     a[q + (J + 1) >> 0] = 0;
     c[D >> 2] = e;
     e = lm(k, q, D) | 0;
     break;
    }
   case 71:
   case 103:
   case 102:
   case 69:
   case 101:
    {
     e = Vl(q) | 0;
     J = q + (e + -1) | 0;
     I = a[J >> 0] | 0;
     e = q + e | 0;
     a[e + -1 >> 0] = 0;
     a[J >> 0] = I;
     a[e >> 0] = 0;
     h[x >> 3] = +Li(b, m);
     e = lm(k, q, x) | 0;
     break;
    }
   case 113:
    {
     f = Fg(b, m, s) | 0;
     e = c[t >> 2] | 0;
     if (e >>> 0 >= (c[u >> 2] | 0) >>> 0) {
      li(n, 1) | 0;
      e = c[t >> 2] | 0;
     }
     c[t >> 2] = e + 1;
     a[(c[n >> 2] | 0) + e >> 0] = 34;
     J = c[s >> 2] | 0;
     c[s >> 2] = J + -1;
     d : do if (J | 0) while (1) {
      e = a[f >> 0] | 0;
      e : do switch (e << 24 >> 24) {
      case 10:
      case 92:
      case 34:
       {
        e = c[t >> 2] | 0;
        if (e >>> 0 >= (c[u >> 2] | 0) >>> 0) {
         li(n, 1) | 0;
         e = c[t >> 2] | 0;
        }
        c[t >> 2] = e + 1;
        a[(c[n >> 2] | 0) + e >> 0] = 92;
        e = c[t >> 2] | 0;
        if (e >>> 0 >= (c[u >> 2] | 0) >>> 0) {
         li(n, 1) | 0;
         e = c[t >> 2] | 0;
        }
        J = a[f >> 0] | 0;
        c[t >> 2] = e + 1;
        a[(c[n >> 2] | 0) + e >> 0] = J;
        break;
       }
      case 0:
       {
        e = 0;
        E = 44;
        break;
       }
      default:
       {
        if (Bl(e & 255) | 0) {
         e = a[f >> 0] | 0;
         E = 44;
         break e;
        }
        e = c[t >> 2] | 0;
        if (e >>> 0 >= (c[u >> 2] | 0) >>> 0) {
         li(n, 1) | 0;
         e = c[t >> 2] | 0;
        }
        J = a[f >> 0] | 0;
        c[t >> 2] = e + 1;
        a[(c[n >> 2] | 0) + e >> 0] = J;
       }
      } while (0);
      if ((E | 0) == 44) {
       E = 0;
       e = e & 255;
       if (((d[f + 1 >> 0] | 0) + -48 | 0) >>> 0 < 10) {
        c[z >> 2] = e;
        lm(o, 10774, z) | 0;
       } else {
        c[y >> 2] = e;
        lm(o, 10770, y) | 0;
       }
       lj(n, o);
      }
      J = c[s >> 2] | 0;
      c[s >> 2] = J + -1;
      if (!J) break d; else f = f + 1 | 0;
     } while (0);
     e = c[t >> 2] | 0;
     if (e >>> 0 >= (c[u >> 2] | 0) >>> 0) {
      li(n, 1) | 0;
      e = c[t >> 2] | 0;
     }
     c[t >> 2] = e + 1;
     a[(c[n >> 2] | 0) + e >> 0] = 34;
     e = 0;
     break;
    }
   case 115:
    {
     e = Hg(b, m, s) | 0;
     J = (qm(q, 46) | 0) == 0;
     if (J & (c[s >> 2] | 0) >>> 0 > 99) {
      dh(n);
      e = 0;
     } else {
      c[A >> 2] = e;
      e = lm(k, q, A) | 0;
      wd(b, -2);
     }
     break;
    }
   default:
    break b;
   }
   c[t >> 2] = (c[t >> 2] | 0) + e;
   if (g >>> 0 >= l >>> 0) break a;
  }
  c[F >> 2] = e;
  J = md(b, 10780, F) | 0;
  i = G;
  return J | 0;
 } while (0);
 eh(n);
 J = 1;
 i = G;
 return J | 0;
}

function se(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 i = c[b >> 2] | 0;
 v = b + 60 | 0;
 j = c[v >> 2] | 0;
 o = j + 4 | 0;
 g = c[o >> 2] | 0;
 n = j + 8 | 0;
 k = c[n >> 2] | 0;
 do if ((g + 1 | 0) >>> 0 > k >>> 0) {
  if (k >>> 0 > 2147483645) ne(b, 6665, 0);
  h = k << 1;
  g = c[b + 52 >> 2] | 0;
  if ((h | 0) == -2) Kb(g); else {
   m = yb(g, c[j >> 2] | 0, k, h) | 0;
   c[j >> 2] = m;
   c[n >> 2] = h;
   l = c[o >> 2] | 0;
   break;
  }
 } else {
  l = g;
  m = c[j >> 2] | 0;
 } while (0);
 c[o >> 2] = l + 1;
 a[m + l >> 0] = i;
 r = b + 56 | 0;
 g = c[r >> 2] | 0;
 q = c[g >> 2] | 0;
 c[g >> 2] = q + -1;
 if (!q) g = de(g) | 0; else {
  q = g + 4 | 0;
  g = c[q >> 2] | 0;
  c[q >> 2] = g + 1;
  g = d[g >> 0] | 0;
 }
 c[b >> 2] = g;
 switch (g | 0) {
 case 13:
 case 10:
  {
   h = c[r >> 2] | 0;
   q = c[h >> 2] | 0;
   c[h >> 2] = q + -1;
   if (!q) h = de(h) | 0; else {
    q = h + 4 | 0;
    h = c[q >> 2] | 0;
    c[q >> 2] = h + 1;
    h = d[h >> 0] | 0;
   }
   c[b >> 2] = h;
   switch (h | 0) {
   case 13:
   case 10:
    {
     if ((h | 0) != (g | 0)) {
      g = c[r >> 2] | 0;
      q = c[g >> 2] | 0;
      c[g >> 2] = q + -1;
      if (!q) g = de(g) | 0; else {
       q = g + 4 | 0;
       g = c[q >> 2] | 0;
       c[q >> 2] = g + 1;
       g = d[g >> 0] | 0;
      }
      c[b >> 2] = g;
     }
     break;
    }
   default:
    g = h;
   }
   o = b + 4 | 0;
   q = c[o >> 2] | 0;
   c[o >> 2] = q + 1;
   if ((q | 0) > 2147483643) me(b, 6746); else p = g;
   break;
  }
 default:
  p = g;
 }
 q = (e | 0) == 0;
 o = b + 52 | 0;
 n = b + 4 | 0;
 g = p;
 a : while (1) {
  b : do if (q) while (1) {
   switch (g | 0) {
   case -1:
    {
     s = 31;
     break a;
    }
   case 93:
    {
     s = 32;
     break b;
    }
   case 13:
   case 10:
    break b;
   default:
    {}
   }
   g = c[r >> 2] | 0;
   p = c[g >> 2] | 0;
   c[g >> 2] = p + -1;
   if (!p) g = de(g) | 0; else {
    p = g + 4 | 0;
    g = c[p >> 2] | 0;
    c[p >> 2] = g + 1;
    g = d[g >> 0] | 0;
   }
   c[b >> 2] = g;
  } else {
   l = g;
   while (1) {
    switch (l | 0) {
    case -1:
     {
      s = 31;
      break a;
     }
    case 93:
     {
      s = 32;
      break b;
     }
    case 13:
    case 10:
     break b;
    default:
     {}
    }
    k = c[v >> 2] | 0;
    m = k + 4 | 0;
    h = c[m >> 2] | 0;
    j = k + 8 | 0;
    i = c[j >> 2] | 0;
    if ((h + 1 | 0) >>> 0 > i >>> 0) {
     if (i >>> 0 > 2147483645) {
      s = 67;
      break a;
     }
     h = i << 1;
     g = c[o >> 2] | 0;
     if ((h | 0) == -2) {
      s = 69;
      break a;
     }
     g = yb(g, c[k >> 2] | 0, i, h) | 0;
     c[k >> 2] = g;
     c[j >> 2] = h;
     h = c[m >> 2] | 0;
    } else g = c[k >> 2] | 0;
    c[m >> 2] = h + 1;
    a[g + h >> 0] = l;
    g = c[r >> 2] | 0;
    p = c[g >> 2] | 0;
    c[g >> 2] = p + -1;
    if (!p) g = de(g) | 0; else {
     p = g + 4 | 0;
     g = c[p >> 2] | 0;
     c[p >> 2] = g + 1;
     g = d[g >> 0] | 0;
    }
    c[b >> 2] = g;
    l = g;
   }
  } while (0);
  if ((s | 0) == 32) {
   s = 0;
   p = (re(b) | 0) == (f | 0);
   g = c[b >> 2] | 0;
   if (p) {
    s = 33;
    break;
   } else continue;
  }
  k = c[v >> 2] | 0;
  l = k + 4 | 0;
  h = c[l >> 2] | 0;
  j = k + 8 | 0;
  i = c[j >> 2] | 0;
  if ((h + 1 | 0) >>> 0 > i >>> 0) {
   if (i >>> 0 > 2147483645) {
    s = 47;
    break;
   }
   h = i << 1;
   g = c[o >> 2] | 0;
   if ((h | 0) == -2) {
    s = 49;
    break;
   }
   g = yb(g, c[k >> 2] | 0, i, h) | 0;
   c[k >> 2] = g;
   c[j >> 2] = h;
   h = c[l >> 2] | 0;
  } else g = c[k >> 2] | 0;
  c[l >> 2] = h + 1;
  a[g + h >> 0] = 10;
  g = c[b >> 2] | 0;
  h = c[r >> 2] | 0;
  p = c[h >> 2] | 0;
  c[h >> 2] = p + -1;
  if (!p) h = de(h) | 0; else {
   p = h + 4 | 0;
   h = c[p >> 2] | 0;
   c[p >> 2] = h + 1;
   h = d[h >> 0] | 0;
  }
  c[b >> 2] = h;
  switch (h | 0) {
  case 13:
  case 10:
   {
    if ((h | 0) != (g | 0)) {
     g = c[r >> 2] | 0;
     p = c[g >> 2] | 0;
     c[g >> 2] = p + -1;
     if (!p) g = de(g) | 0; else {
      p = g + 4 | 0;
      g = c[p >> 2] | 0;
      c[p >> 2] = g + 1;
      g = d[g >> 0] | 0;
     }
     c[b >> 2] = g;
    }
    break;
   }
  default:
   g = h;
  }
  p = c[n >> 2] | 0;
  c[n >> 2] = p + 1;
  if ((p | 0) > 2147483643) {
   s = 61;
   break;
  }
  if (!q) continue;
  c[(c[v >> 2] | 0) + 4 >> 2] = 0;
 }
 if ((s | 0) == 31) ne(b, e | 0 ? 6771 : 6794, 286); else if ((s | 0) == 33) {
  j = c[v >> 2] | 0;
  m = j + 4 | 0;
  h = c[m >> 2] | 0;
  l = j + 8 | 0;
  k = c[l >> 2] | 0;
  do if ((h + 1 | 0) >>> 0 > k >>> 0) {
   if (k >>> 0 > 2147483645) ne(b, 6665, 0);
   i = k << 1;
   h = c[o >> 2] | 0;
   if ((i | 0) == -2) Kb(h); else {
    u = yb(h, c[j >> 2] | 0, k, i) | 0;
    c[j >> 2] = u;
    c[l >> 2] = i;
    t = c[m >> 2] | 0;
    break;
   }
  } else {
   t = h;
   u = c[j >> 2] | 0;
  } while (0);
  c[m >> 2] = t + 1;
  a[u + t >> 0] = g;
  g = c[r >> 2] | 0;
  u = c[g >> 2] | 0;
  c[g >> 2] = u + -1;
  if (!u) g = de(g) | 0; else {
   u = g + 4 | 0;
   g = c[u >> 2] | 0;
   c[u >> 2] = g + 1;
   g = d[g >> 0] | 0;
  }
  c[b >> 2] = g;
  if (q) return;
  k = c[v >> 2] | 0;
  j = f + 2 | 0;
  i = c[o >> 2] | 0;
  j = Lb(i, (c[k >> 2] | 0) + j | 0, (c[k + 4 >> 2] | 0) - (j << 1) | 0) | 0;
  k = i + 8 | 0;
  g = c[k >> 2] | 0;
  c[k >> 2] = g + 16;
  c[g >> 2] = j;
  c[g + 8 >> 2] = d[j + 4 >> 0] | 0 | 64;
  g = te(i, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
  h = g + 8 | 0;
  if (!(c[h >> 2] | 0)) {
   c[g >> 2] = 1;
   c[h >> 2] = 1;
   if ((c[(c[i + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(i);
  }
  c[k >> 2] = (c[k >> 2] | 0) + -16;
  c[e >> 2] = j;
  return;
 } else if ((s | 0) == 47) ne(b, 6665, 0); else if ((s | 0) == 49) Kb(g); else if ((s | 0) == 61) me(b, 6746); else if ((s | 0) == 67) ne(b, 6665, 0); else if ((s | 0) == 69) Kb(g);
}

function nc(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 y = i;
 i = i + 32 | 0;
 m = y + 16 | 0;
 q = y + 8 | 0;
 t = y;
 w = e + 28 | 0;
 x = e + 8 | 0;
 u = e + 24 | 0;
 v = e + 32 | 0;
 a : while (1) {
  h = c[w >> 2] | 0;
  j = f;
  switch (c[f + 8 >> 2] & 63 | 0) {
  case 22:
   {
    k = 3;
    break a;
   }
  case 38:
   {
    k = 4;
    break a;
   }
  case 6:
   {
    k = 29;
    break a;
   }
  default:
   {}
  }
  l = Bb(e, f, 16) | 0;
  j = j - (c[w >> 2] | 0) | 0;
  k = l + 8 | 0;
  if ((c[k >> 2] & 15 | 0) != 6) {
   k = 53;
   break;
  }
  h = c[x >> 2] | 0;
  if (h >>> 0 > f >>> 0) {
   do {
    z = h;
    h = h + -16 | 0;
    C = h;
    B = c[C + 4 >> 2] | 0;
    A = z;
    c[A >> 2] = c[C >> 2];
    c[A + 4 >> 2] = B;
    c[z + 8 >> 2] = c[z + -8 >> 2];
   } while (h >>> 0 > f >>> 0);
   f = c[x >> 2] | 0;
  } else f = h;
  h = f + 16 | 0;
  c[x >> 2] = h;
  if (((c[u >> 2] | 0) - h | 0) < 16) {
   f = c[v >> 2] | 0;
   if ((f | 0) > 1e6) {
    k = 59;
    break;
   }
   C = (h - (c[w >> 2] | 0) >> 4) + 5 | 0;
   f = f << 1;
   f = (f | 0) > 1e6 ? 1e6 : f;
   f = (f | 0) < (C | 0) ? C : f;
   if ((f | 0) > 1e6) {
    k = 61;
    break;
   }
   Jb(e, f);
  }
  f = (c[w >> 2] | 0) + j | 0;
  A = l;
  B = c[A + 4 >> 2] | 0;
  C = f;
  c[C >> 2] = c[A >> 2];
  c[C + 4 >> 2] = B;
  c[f + 8 >> 2] = c[k >> 2];
 }
 if ((k | 0) == 3) {
  p = h;
  o = f;
  n = j;
 } else if ((k | 0) == 4) {
  p = h;
  o = (c[f >> 2] | 0) + 12 | 0;
  n = j;
 } else if ((k | 0) == 29) {
  l = j - h | 0;
  p = c[(c[f >> 2] | 0) + 12 >> 2] | 0;
  j = c[x >> 2] | 0;
  o = p + 78 | 0;
  k = d[o >> 0] | 0;
  do if (((c[u >> 2] | 0) - j >> 4 | 0) > (k | 0)) {
   s = j;
   r = h;
  } else {
   f = c[v >> 2] | 0;
   if ((f | 0) > 1e6) Ib(e, 6);
   C = k + 5 + (j - h >> 4) | 0;
   f = f << 1;
   f = (f | 0) > 1e6 ? 1e6 : f;
   f = (f | 0) < (C | 0) ? C : f;
   if ((f | 0) > 1e6) {
    Jb(e, 1000200);
    Fb(e, 7808, q);
   } else {
    Jb(e, f);
    s = c[x >> 2] | 0;
    r = c[w >> 2] | 0;
    break;
   }
  } while (0);
  j = s;
  n = r + l | 0;
  C = s - n >> 4;
  f = C + -1 | 0;
  k = b[p + 76 >> 1] | 0;
  l = k & 255;
  m = k & 255;
  if ((C | 0) <= (m | 0)) {
   while (1) {
    h = j + 16 | 0;
    c[j + 8 >> 2] = 0;
    f = f + 1 | 0;
    if ((f | 0) < (m | 0)) j = h; else {
     j = h;
     break;
    }
   }
   c[x >> 2] = j;
  }
  if ((k & 65535) < 256) j = n + 16 | 0; else {
   f = 0 - f | 0;
   h = j + (f << 4) | 0;
   if (l << 24 >> 24) {
    c[x >> 2] = j + 16;
    A = h;
    B = c[A + 4 >> 2] | 0;
    C = j;
    c[C >> 2] = c[A >> 2];
    c[C + 4 >> 2] = B;
    C = j + (f << 4) + 8 | 0;
    c[j + 8 >> 2] = c[C >> 2];
    c[C >> 2] = 0;
    if (l << 24 >> 24 != 1) {
     f = 1;
     do {
      B = c[x >> 2] | 0;
      C = h + (f << 4) | 0;
      c[x >> 2] = B + 16;
      w = C;
      z = c[w + 4 >> 2] | 0;
      A = B;
      c[A >> 2] = c[w >> 2];
      c[A + 4 >> 2] = z;
      C = C + 8 | 0;
      c[B + 8 >> 2] = c[C >> 2];
      c[C >> 2] = 0;
      f = f + 1 | 0;
     } while ((f | 0) != (m | 0));
    }
   }
  }
  h = e + 16 | 0;
  f = c[(c[h >> 2] | 0) + 12 >> 2] | 0;
  if (!f) f = oc(e) | 0;
  c[h >> 2] = f;
  b[f + 16 >> 1] = g;
  c[f >> 2] = n;
  c[f + 24 >> 2] = j;
  C = j + ((d[o >> 0] | 0) << 4) | 0;
  c[f + 4 >> 2] = C;
  j = f + 28 | 0;
  c[j >> 2] = c[p + 12 >> 2];
  h = f + 18 | 0;
  a[h >> 0] = 1;
  c[x >> 2] = C;
  if ((c[(c[e + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(e);
  if (!(a[e + 40 >> 0] & 1)) {
   C = 0;
   i = y;
   return C | 0;
  }
  c[j >> 2] = (c[j >> 2] | 0) + 4;
  f = c[f + 8 >> 2] | 0;
  if (!(a[f + 18 >> 0] & 1)) f = 0; else if ((c[(c[f + 28 >> 2] | 0) + -4 >> 2] & 63 | 0) == 30) {
   a[h >> 0] = d[h >> 0] | 0 | 64;
   f = 4;
  } else f = 0;
  sc(e, f, -1);
  c[j >> 2] = (c[j >> 2] | 0) + -4;
  C = 0;
  i = y;
  return C | 0;
 } else if ((k | 0) == 53) gc(e, f, 11440); else if ((k | 0) == 59) Ib(e, 6); else if ((k | 0) == 61) {
  Jb(e, 1000200);
  Fb(e, 7808, m);
 }
 k = n - p | 0;
 j = c[o >> 2] | 0;
 h = c[x >> 2] | 0;
 do if (((c[u >> 2] | 0) - h | 0) < 336) {
  f = c[v >> 2] | 0;
  if ((f | 0) > 1e6) Ib(e, 6);
  C = (h - p >> 4) + 25 | 0;
  f = f << 1;
  f = (f | 0) > 1e6 ? 1e6 : f;
  f = (f | 0) < (C | 0) ? C : f;
  if ((f | 0) > 1e6) {
   Jb(e, 1000200);
   Fb(e, 7808, t);
  } else {
   Jb(e, f);
   break;
  }
 } while (0);
 m = e + 16 | 0;
 f = c[(c[m >> 2] | 0) + 12 >> 2] | 0;
 if (!f) f = oc(e) | 0;
 c[m >> 2] = f;
 b[f + 16 >> 1] = g;
 c[f >> 2] = (c[w >> 2] | 0) + k;
 c[f + 4 >> 2] = (c[x >> 2] | 0) + 320;
 a[f + 18 >> 0] = 0;
 if ((c[(c[e + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(e);
 h = e + 40 | 0;
 if (a[h >> 0] & 1) sc(e, 0, -1);
 f = fb[j & 255](e) | 0;
 f = (c[x >> 2] | 0) + (0 - f << 4) | 0;
 l = c[m >> 2] | 0;
 h = d[h >> 0] | 0;
 if (!(h & 6)) {
  k = c[l + 8 >> 2] | 0;
  j = f;
 } else {
  if (h & 2) {
   f = f - (c[w >> 2] | 0) | 0;
   sc(e, 1, -1);
   f = (c[w >> 2] | 0) + f | 0;
  }
  k = c[l + 8 >> 2] | 0;
  c[e + 20 >> 2] = c[k + 28 >> 2];
  j = f;
 }
 f = c[l >> 2] | 0;
 h = b[l + 16 >> 1] | 0;
 c[m >> 2] = k;
 b : do if (h << 16 >> 16) {
  k = j;
  h = h << 16 >> 16;
  while (1) {
   if (k >>> 0 >= (c[x >> 2] | 0) >>> 0) break;
   j = f + 16 | 0;
   A = k;
   B = c[A + 4 >> 2] | 0;
   C = f;
   c[C >> 2] = c[A >> 2];
   c[C + 4 >> 2] = B;
   c[f + 8 >> 2] = c[k + 8 >> 2];
   h = h + -1 | 0;
   if (!h) {
    f = j;
    break b;
   } else {
    k = k + 16 | 0;
    f = j;
   }
  }
  if ((h | 0) > 0) while (1) {
   j = f + 16 | 0;
   c[f + 8 >> 2] = 0;
   if ((h | 0) > 1) {
    h = h + -1 | 0;
    f = j;
   } else {
    f = j;
    break;
   }
  }
 } while (0);
 c[x >> 2] = f;
 C = 1;
 i = y;
 return C | 0;
}

function od(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0;
 M = i;
 i = i + 16 | 0;
 L = M;
 if ((a[e >> 0] | 0) == 62) {
  G = b + 8 | 0;
  K = (c[G >> 2] | 0) + -16 | 0;
  c[G >> 2] = K;
  G = 0;
  e = e + 1 | 0;
 } else {
  K = c[f + 96 >> 2] | 0;
  G = K;
  K = c[K >> 2] | 0;
 }
 I = K + 8 | 0;
 if ((c[I >> 2] & 31 | 0) == 6) H = c[K >> 2] | 0; else H = 0;
 g = a[e >> 0] | 0;
 a : do if (!(g << 24 >> 24)) j = 1; else {
  q = (H | 0) == 0;
  C = f + 16 | 0;
  v = f + 24 | 0;
  u = f + 28 | 0;
  F = f + 12 | 0;
  o = f + 36 | 0;
  E = H + 4 | 0;
  A = H + 12 | 0;
  D = (G | 0) == 0;
  r = f + 20 | 0;
  p = G + 18 | 0;
  B = G + 28 | 0;
  y = f + 32 | 0;
  t = f + 34 | 0;
  x = f + 33 | 0;
  z = H + 6 | 0;
  s = f + 35 | 0;
  w = f + 8 | 0;
  m = f + 4 | 0;
  n = G + 8 | 0;
  l = b + 12 | 0;
  j = 1;
  k = e;
  while (1) {
   b : do switch (g << 24 >> 24 | 0) {
   case 83:
    {
     if (q) J = 11; else if ((a[E >> 0] | 0) == 38) J = 11; else {
      h = c[A >> 2] | 0;
      f = c[h + 36 >> 2] | 0;
      f = (f | 0) == 0 ? 5923 : f + 16 | 0;
      c[C >> 2] = f;
      g = c[h + 64 >> 2] | 0;
      c[v >> 2] = g;
      c[u >> 2] = c[h + 68 >> 2];
      g = (g | 0) == 0 ? 5926 : 5931;
     }
     if ((J | 0) == 11) {
      J = 0;
      c[C >> 2] = 5918;
      c[v >> 2] = -1;
      c[u >> 2] = -1;
      f = 5918;
      g = 5935;
     }
     c[F >> 2] = g;
     kc(o, f, 60);
     break;
    }
   case 108:
    {
     if (D) f = -1; else if (!(a[p >> 0] & 1)) f = -1; else {
      f = c[(c[c[G >> 2] >> 2] | 0) + 12 >> 2] | 0;
      g = c[f + 20 >> 2] | 0;
      if (!g) f = 0; else f = c[g + (((c[B >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 << 2) >> 2] | 0;
     }
     c[r >> 2] = f;
     break;
    }
   case 117:
    {
     if (q) a[y >> 0] = 0; else {
      a[y >> 0] = a[z >> 0] | 0;
      if ((a[E >> 0] | 0) != 38) {
       h = c[A >> 2] | 0;
       a[t >> 0] = a[h + 77 >> 0] | 0;
       a[x >> 0] = a[h + 76 >> 0] | 0;
       break b;
      }
     }
     a[t >> 0] = 1;
     a[x >> 0] = 0;
     break;
    }
   case 116:
    {
     if (D) f = 0; else f = d[p >> 0] & 64;
     a[s >> 0] = f;
     break;
    }
   case 110:
    {
     c : do if (D) J = 46; else if (!(a[p >> 0] & 64)) {
      f = c[n >> 2] | 0;
      if (!(a[f + 18 >> 0] & 1)) J = 46; else {
       h = c[(c[c[f >> 2] >> 2] | 0) + 12 >> 2] | 0;
       N = c[h + 12 >> 2] | 0;
       g = ((c[f + 28 >> 2] | 0) - N >> 2) + -1 | 0;
       f = c[N + (g << 2) >> 2] | 0;
       do switch (f & 63 | 0) {
       case 30:
       case 29:
        {
         N = hc(h, g, f >>> 6 & 255, m) | 0;
         c[w >> 2] = N;
         if (!N) break c; else break b;
        }
       case 34:
        {
         c[m >> 2] = 5937;
         f = 5937;
         break;
        }
       case 7:
       case 6:
       case 12:
        {
         f = 0;
         J = 45;
         break;
        }
       case 10:
       case 8:
        {
         f = 1;
         J = 45;
         break;
        }
       case 24:
        {
         f = 5;
         J = 45;
         break;
        }
       case 13:
        {
         f = 6;
         J = 45;
         break;
        }
       case 14:
        {
         f = 7;
         J = 45;
         break;
        }
       case 15:
        {
         f = 8;
         J = 45;
         break;
        }
       case 16:
        {
         f = 9;
         J = 45;
         break;
        }
       case 17:
        {
         f = 10;
         J = 45;
         break;
        }
       case 18:
        {
         f = 11;
         J = 45;
         break;
        }
       case 19:
        {
         f = 12;
         J = 45;
         break;
        }
       case 21:
        {
         f = 4;
         J = 45;
         break;
        }
       case 25:
        {
         f = 13;
         J = 45;
         break;
        }
       case 26:
        {
         f = 14;
         J = 45;
         break;
        }
       case 22:
        {
         f = 15;
         J = 45;
         break;
        }
       default:
        {
         J = 46;
         break c;
        }
       } while (0);
       if ((J | 0) == 45) {
        J = 0;
        c[m >> 2] = (c[(c[l >> 2] | 0) + 184 + (f << 2) >> 2] | 0) + 16;
        f = 5950;
       }
       c[w >> 2] = f;
       break b;
      }
     } else J = 46; while (0);
     if ((J | 0) == 46) {
      J = 0;
      c[w >> 2] = 0;
     }
     c[w >> 2] = 17772;
     c[m >> 2] = 0;
     break;
    }
   case 102:
   case 76:
    break;
   default:
    j = 0;
   } while (0);
   k = k + 1 | 0;
   g = a[k >> 0] | 0;
   if (!(g << 24 >> 24)) break a;
  }
 } while (0);
 if (qm(e, 102) | 0) {
  N = b + 8 | 0;
  J = c[N >> 2] | 0;
  F = K;
  G = c[F + 4 >> 2] | 0;
  K = J;
  c[K >> 2] = c[F >> 2];
  c[K + 4 >> 2] = G;
  c[J + 8 >> 2] = c[I >> 2];
  c[N >> 2] = (c[N >> 2] | 0) + 16;
 }
 if (!(qm(e, 76) | 0)) {
  i = M;
  return j | 0;
 }
 if (H | 0) if ((a[H + 4 >> 0] | 0) != 38) {
  h = H + 12 | 0;
  e = c[(c[h >> 2] | 0) + 20 >> 2] | 0;
  f = Fc(b) | 0;
  N = b + 8 | 0;
  K = c[N >> 2] | 0;
  c[K >> 2] = f;
  c[K + 8 >> 2] = 69;
  c[N >> 2] = (c[N >> 2] | 0) + 16;
  c[L >> 2] = 1;
  c[L + 8 >> 2] = 1;
  if ((c[(c[h >> 2] | 0) + 52 >> 2] | 0) > 0) {
   g = 0;
   do {
    Tc(b, f, c[e + (g << 2) >> 2] | 0, L);
    g = g + 1 | 0;
   } while ((g | 0) < (c[(c[h >> 2] | 0) + 52 >> 2] | 0));
  }
  i = M;
  return j | 0;
 }
 N = b + 8 | 0;
 L = c[N >> 2] | 0;
 c[L + 8 >> 2] = 0;
 c[N >> 2] = L + 16;
 i = M;
 return j | 0;
}

function xc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = e + 8 | 0;
 a : do switch (c[l >> 2] & 63 | 0) {
 case 3:
  {
   l = +h[e >> 3] == +h[f >> 3] & 1;
   return l | 0;
  }
 case 1:
  {
   l = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return l | 0;
  }
 case 2:
  {
   l = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return l | 0;
  }
 case 22:
  {
   l = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return l | 0;
  }
 case 4:
  {
   l = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return l | 0;
  }
 case 20:
  {
   l = yc(c[e >> 2] | 0, c[f >> 2] | 0) | 0;
   return l | 0;
  }
 case 7:
  {
   g = c[e >> 2] | 0;
   i = c[f >> 2] | 0;
   if ((g | 0) == (i | 0)) {
    l = 1;
    return l | 0;
   }
   if (!b) {
    l = 0;
    return l | 0;
   }
   k = c[g + 8 >> 2] | 0;
   i = c[i + 8 >> 2] | 0;
   if (!k) {
    l = 0;
    return l | 0;
   }
   if (a[k + 6 >> 0] & 32) {
    l = 0;
    return l | 0;
   }
   j = b + 12 | 0;
   g = Sb(k, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
   if (!g) {
    l = 0;
    return l | 0;
   }
   if ((k | 0) != (i | 0)) {
    if (!i) {
     l = 0;
     return l | 0;
    }
    if (a[i + 6 >> 0] & 32) {
     l = 0;
     return l | 0;
    }
    j = Sb(i, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
    if (!j) {
     l = 0;
     return l | 0;
    }
    i = c[g + 8 >> 2] | 0;
    if ((i | 0) != (c[j + 8 >> 2] | 0)) {
     l = 0;
     return l | 0;
    }
    switch (i & 63 | 0) {
    case 0:
     break a;
    case 3:
     {
      i = +h[g >> 3] == +h[j >> 3] & 1;
      break;
     }
    case 1:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 2:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 22:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 4:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 20:
     {
      i = yc(c[g >> 2] | 0, c[j >> 2] | 0) | 0;
      break;
     }
    case 7:
     {
      if ((c[g >> 2] | 0) == (c[j >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    case 5:
     {
      if ((c[g >> 2] | 0) == (c[j >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    default:
     i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
    }
    if (!i) {
     l = 0;
     return l | 0;
    }
   }
   break;
  }
 case 5:
  {
   g = c[e >> 2] | 0;
   i = c[f >> 2] | 0;
   if ((g | 0) == (i | 0)) {
    l = 1;
    return l | 0;
   }
   if (!b) {
    l = 0;
    return l | 0;
   }
   k = c[g + 8 >> 2] | 0;
   i = c[i + 8 >> 2] | 0;
   if (!k) {
    l = 0;
    return l | 0;
   }
   if (a[k + 6 >> 0] & 32) {
    l = 0;
    return l | 0;
   }
   j = b + 12 | 0;
   g = Sb(k, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
   if (!g) {
    l = 0;
    return l | 0;
   }
   if ((k | 0) != (i | 0)) {
    if (!i) {
     l = 0;
     return l | 0;
    }
    if (a[i + 6 >> 0] & 32) {
     l = 0;
     return l | 0;
    }
    j = Sb(i, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
    if (!j) {
     l = 0;
     return l | 0;
    }
    i = c[g + 8 >> 2] | 0;
    if ((i | 0) != (c[j + 8 >> 2] | 0)) {
     l = 0;
     return l | 0;
    }
    switch (i & 63 | 0) {
    case 0:
     break a;
    case 3:
     {
      i = +h[g >> 3] == +h[j >> 3] & 1;
      break;
     }
    case 1:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 2:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 22:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 4:
     {
      i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
      break;
     }
    case 20:
     {
      i = yc(c[g >> 2] | 0, c[j >> 2] | 0) | 0;
      break;
     }
    case 7:
     {
      if ((c[g >> 2] | 0) == (c[j >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    case 5:
     {
      if ((c[g >> 2] | 0) == (c[j >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    default:
     i = (c[g >> 2] | 0) == (c[j >> 2] | 0) & 1;
    }
    if (!i) {
     l = 0;
     return l | 0;
    }
   }
   break;
  }
 case 0:
  {
   l = 1;
   return l | 0;
  }
 default:
  {
   l = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return l | 0;
  }
 } while (0);
 i = b + 8 | 0;
 j = c[i >> 2] | 0;
 m = b + 28 | 0;
 k = c[m >> 2] | 0;
 c[i >> 2] = j + 16;
 p = g;
 n = c[p + 4 >> 2] | 0;
 o = j;
 c[o >> 2] = c[p >> 2];
 c[o + 4 >> 2] = n;
 c[j + 8 >> 2] = c[g + 8 >> 2];
 g = c[i >> 2] | 0;
 c[i >> 2] = g + 16;
 o = e;
 e = c[o + 4 >> 2] | 0;
 n = g;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = e;
 c[g + 8 >> 2] = c[l >> 2];
 g = c[i >> 2] | 0;
 c[i >> 2] = g + 16;
 n = f;
 e = c[n + 4 >> 2] | 0;
 l = g;
 c[l >> 2] = c[n >> 2];
 c[l + 4 >> 2] = e;
 c[g + 8 >> 2] = c[f + 8 >> 2];
 Eb(b, (c[i >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 g = (c[m >> 2] | 0) + (j - k) | 0;
 l = c[i >> 2] | 0;
 b = l + -16 | 0;
 c[i >> 2] = b;
 e = c[b + 4 >> 2] | 0;
 f = g;
 c[f >> 2] = c[b >> 2];
 c[f + 4 >> 2] = e;
 c[g + 8 >> 2] = c[l + -8 >> 2];
 g = c[i >> 2] | 0;
 i = c[g + 8 >> 2] | 0;
 if (!i) g = 0; else if ((i | 0) == 1) g = (c[g >> 2] | 0) != 0; else g = 1;
 p = g & 1;
 return p | 0;
}

function Ve(e, f, g, h) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 80 | 0;
 x = y;
 w = y + 24 | 0;
 r = y + 12 | 0;
 u = e + 48 | 0;
 q = c[u >> 2] | 0;
 v = e + 52 | 0;
 p = c[v >> 2] | 0;
 o = c[q >> 2] | 0;
 q = q + 36 | 0;
 j = o + 56 | 0;
 k = c[j >> 2] | 0;
 n = o + 16 | 0;
 if ((c[q >> 2] | 0) >= (k | 0)) {
  m = oe(p, c[n >> 2] | 0, j, 4, 262143, 7196) | 0;
  c[n >> 2] = m;
  l = c[j >> 2] | 0;
  if ((k | 0) < (l | 0)) {
   j = k + 1 | 0;
   c[m + (k << 2) >> 2] = 0;
   if ((j | 0) < (l | 0)) do {
    c[(c[n >> 2] | 0) + (j << 2) >> 2] = 0;
    j = j + 1 | 0;
   } while ((j | 0) != (l | 0));
  }
 }
 m = he(p) | 0;
 l = c[q >> 2] | 0;
 c[q >> 2] = l + 1;
 c[(c[n >> 2] | 0) + (l << 2) >> 2] = m;
 if (a[m + 5 >> 0] & 3) if (a[o + 5 >> 0] & 4) Ec(p, o, m);
 c[w >> 2] = m;
 c[m + 64 >> 2] = h;
 j = c[v >> 2] | 0;
 c[w + 8 >> 2] = c[u >> 2];
 l = w + 12 | 0;
 c[l >> 2] = e;
 c[u >> 2] = w;
 c[w + 20 >> 2] = 0;
 c[w + 24 >> 2] = 0;
 c[w + 28 >> 2] = -1;
 c[w + 32 >> 2] = 0;
 c[w + 36 >> 2] = 0;
 k = w + 44 | 0;
 c[k >> 2] = 0;
 a[k + 4 >> 0] = 0;
 c[w + 40 >> 2] = c[(c[e + 64 >> 2] | 0) + 4 >> 2];
 k = w + 16 | 0;
 c[k >> 2] = 0;
 c[m + 36 >> 2] = c[e + 68 >> 2];
 a[m + 78 >> 0] = 2;
 o = Fc(j) | 0;
 c[w + 4 >> 2] = o;
 p = j + 8 | 0;
 q = c[p >> 2] | 0;
 c[q >> 2] = o;
 c[q + 8 >> 2] = 69;
 q = (c[p >> 2] | 0) + 16 | 0;
 c[p >> 2] = q;
 if (((c[j + 24 >> 2] | 0) - q | 0) < 16) Hb(j, 0);
 a[r + 10 >> 0] = 0;
 a[r + 8 >> 0] = a[w + 46 >> 0] | 0;
 q = c[(c[l >> 2] | 0) + 64 >> 2] | 0;
 b[r + 4 >> 1] = c[q + 28 >> 2];
 b[r + 6 >> 1] = c[q + 16 >> 2];
 a[r + 9 >> 0] = 0;
 c[r >> 2] = c[k >> 2];
 c[k >> 2] = r;
 q = e + 16 | 0;
 if ((c[q >> 2] | 0) != 40) Ne(e, 40);
 pe(e);
 if (!g) {
  p = c[u >> 2] | 0;
  o = c[p >> 2] | 0;
 } else {
  Xe(e, We(e, 7206, 4) | 0);
  p = c[u >> 2] | 0;
  o = p + 46 | 0;
  g = (d[o >> 0] | 0) + 1 | 0;
  a[o >> 0] = g;
  o = c[p >> 2] | 0;
  c[(c[o + 24 >> 2] | 0) + ((b[(c[c[(c[p + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[p + 40 >> 2] | 0) + (g & 255) + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[p + 20 >> 2];
 }
 m = o + 77 | 0;
 a[m >> 0] = 0;
 j = c[q >> 2] | 0;
 a : do if ((j | 0) == 41) s = 0; else {
  l = e + 24 | 0;
  k = j;
  j = 0;
  b : while (1) {
   switch (k | 0) {
   case 280:
    {
     t = 19;
     break b;
    }
   case 288:
    break;
   default:
    {
     t = 20;
     break b;
    }
   }
   g = c[l >> 2] | 0;
   pe(e);
   Xe(e, g);
   j = j + 1 | 0;
   if (a[m >> 0] | 0) {
    s = j;
    break a;
   }
   if ((c[q >> 2] | 0) != 44) {
    s = j;
    break a;
   }
   pe(e);
   k = c[q >> 2] | 0;
  }
  if ((t | 0) == 19) {
   pe(e);
   a[m >> 0] = 1;
   s = j;
   break;
  } else if ((t | 0) == 20) me(e, 7227);
 } while (0);
 k = c[u >> 2] | 0;
 g = k + 46 | 0;
 j = (d[g >> 0] | 0) + s | 0;
 a[g >> 0] = j;
 if (s | 0) {
  n = c[k + 20 >> 2] | 0;
  l = c[(c[k >> 2] | 0) + 24 >> 2] | 0;
  m = c[c[(c[k + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
  k = (c[k + 40 >> 2] | 0) + (j & 255) | 0;
  j = s;
  do {
   c[l + ((b[m + (k - j << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
   j = j + -1 | 0;
  } while ((j | 0) != 0);
 }
 s = a[p + 46 >> 0] | 0;
 a[o + 76 >> 0] = s;
 Ye(p, s & 255);
 if ((c[q >> 2] | 0) != 41) Ne(e, 41);
 pe(e);
 c : while (1) {
  k = c[q >> 2] | 0;
  switch (k | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break c;
  default:
   {}
  }
  xe(e);
  if ((k | 0) == 274) {
   t = 31;
   break;
  }
 }
 if ((t | 0) == 31) k = c[q >> 2] | 0;
 j = c[e + 4 >> 2] | 0;
 c[(c[w >> 2] | 0) + 68 >> 2] = j;
 if ((k | 0) == 262) {
  pe(e);
  x = c[(c[u >> 2] | 0) + 8 >> 2] | 0;
  w = Ze(x, 37, 0, (c[x + 36 >> 2] | 0) + -1 | 0) | 0;
  c[f + 16 >> 2] = -1;
  c[f + 20 >> 2] = -1;
  c[f >> 2] = 11;
  c[f + 8 >> 2] = w;
  Me(x, f);
  _e(e);
  i = y;
  return;
 }
 if ((j | 0) == (h | 0)) Ne(e, 262); else {
  y = c[v >> 2] | 0;
  v = Oe(e, 262) | 0;
  w = Oe(e, 265) | 0;
  c[x >> 2] = v;
  c[x + 4 >> 2] = w;
  c[x + 8 >> 2] = h;
  me(e, lc(y, 7159, x) | 0);
 }
}

function ln(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = a + 4 | 0;
 n = c[o >> 2] | 0;
 d = n & -8;
 k = a + d | 0;
 i = c[3805] | 0;
 e = n & 3;
 if (!((e | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < k >>> 0)) qa();
 f = c[k + 4 >> 2] | 0;
 if (!(f & 1)) qa();
 if (!e) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (d >>> 0 >= (b + 4 | 0) >>> 0) if ((d - b | 0) >>> 0 <= c[3921] << 1 >>> 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (d >>> 0 >= b >>> 0) {
  d = d - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  m = a + b | 0;
  c[o >> 2] = n & 1 | b | 2;
  c[m + 4 >> 2] = d | 3;
  b = m + d + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  mn(m, d);
  return a | 0;
 }
 if ((k | 0) == (c[3807] | 0)) {
  d = (c[3804] | 0) + d | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  m = d - b | 0;
  l = a + b | 0;
  c[o >> 2] = n & 1 | b | 2;
  c[l + 4 >> 2] = m | 1;
  c[3807] = l;
  c[3804] = m;
  return a | 0;
 }
 if ((k | 0) == (c[3806] | 0)) {
  e = (c[3803] | 0) + d | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   e = a + b | 0;
   m = e + d | 0;
   c[o >> 2] = n & 1 | b | 2;
   c[e + 4 >> 2] = d | 1;
   c[m >> 2] = d;
   b = m + 4 | 0;
   c[b >> 2] = c[b >> 2] & -2;
  } else {
   c[o >> 2] = n & 1 | e | 2;
   e = a + e + 4 | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[3803] = d;
  c[3806] = e;
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
  d = 15244 + (g << 1 << 2) | 0;
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) qa();
   if ((c[e + 12 >> 2] | 0) != (k | 0)) qa();
  }
  if ((f | 0) == (e | 0)) {
   c[3801] = c[3801] & ~(1 << g);
   break;
  }
  if ((f | 0) == (d | 0)) h = f + 8 | 0; else {
   if (f >>> 0 < i >>> 0) qa();
   d = f + 8 | 0;
   if ((c[d >> 2] | 0) == (k | 0)) h = d; else qa();
  }
  c[e + 12 >> 2] = f;
  c[h >> 2] = e;
 } else {
  h = c[k + 24 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  do if ((f | 0) == (k | 0)) {
   f = k + 16 | 0;
   e = f + 4 | 0;
   d = c[e >> 2] | 0;
   if (!d) {
    d = c[f >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    } else e = f;
   }
   while (1) {
    g = d + 20 | 0;
    f = c[g >> 2] | 0;
    if (f | 0) {
     d = f;
     e = g;
     continue;
    }
    g = d + 16 | 0;
    f = c[g >> 2] | 0;
    if (!f) break; else {
     d = f;
     e = g;
    }
   }
   if (e >>> 0 < i >>> 0) qa(); else {
    c[e >> 2] = 0;
    j = d;
    break;
   }
  } else {
   g = c[k + 8 >> 2] | 0;
   if (g >>> 0 < i >>> 0) qa();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (k | 0)) qa();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (k | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    j = f;
    break;
   } else qa();
  } while (0);
  if (h | 0) {
   d = c[k + 28 >> 2] | 0;
   e = 15508 + (d << 2) | 0;
   if ((k | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = j;
    if (!j) {
     c[3802] = c[3802] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[3805] | 0) >>> 0) qa();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (k | 0)) c[d >> 2] = j; else c[h + 20 >> 2] = j;
    if (!j) break;
   }
   f = c[3805] | 0;
   if (j >>> 0 < f >>> 0) qa();
   c[j + 24 >> 2] = h;
   e = k + 16 | 0;
   d = c[e >> 2] | 0;
   do if (d | 0) if (d >>> 0 < f >>> 0) qa(); else {
    c[j + 16 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   } while (0);
   d = c[e + 4 >> 2] | 0;
   if (d | 0) if (d >>> 0 < (c[3805] | 0) >>> 0) qa(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   }
  }
 } while (0);
 if (m >>> 0 < 16) {
  c[o >> 2] = l | n & 1 | 2;
  b = a + l + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  l = a + b | 0;
  c[o >> 2] = n & 1 | b | 2;
  c[l + 4 >> 2] = m | 3;
  b = l + m + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  mn(l, m);
  return a | 0;
 }
 return 0;
}

function Ac(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0;
 w = i;
 i = i + 144 | 0;
 g = w + 16 | 0;
 t = w;
 v = w + 20 | 0;
 u = f + 8 | 0;
 switch (c[u >> 2] | 0) {
 case 0:
  {
   Fb(b, 4521, w + 8 | 0);
   break;
  }
 case 3:
  {
   n = 3;
   break;
  }
 default:
  {}
 }
 if ((n | 0) == 3) {
  x = +h[f >> 3];
  if (!(x == x & 0.0 == 0.0)) Fb(b, 4540, g);
 }
 g = wc(e, f) | 0;
 o = g + 8 | 0;
 do if ((g | 0) == 15104 | (c[o >> 2] | 0) != 0) {
  m = e + 20 | 0;
  s = e + 16 | 0;
  j = c[s >> 2] | 0;
  k = c[m >> 2] | 0;
  while (1) {
   if (k >>> 0 <= j >>> 0) break;
   l = k + -32 | 0;
   c[m >> 2] = l;
   if (!(c[k + -8 >> 2] | 0)) {
    n = 34;
    break;
   } else k = l;
  }
  if ((n | 0) == 34) {
   j = wc(e, g + 16 | 0) | 0;
   if ((j | 0) == (g | 0)) {
    g = g + 28 | 0;
    c[k + -4 >> 2] = c[g >> 2];
    c[g >> 2] = l;
    g = l;
    break;
   } else k = j;
   do {
    j = k + 28 | 0;
    k = c[j >> 2] | 0;
   } while ((k | 0) != (g | 0));
   c[j >> 2] = l;
   c[l >> 2] = c[g >> 2];
   c[l + 4 >> 2] = c[g + 4 >> 2];
   c[l + 8 >> 2] = c[g + 8 >> 2];
   c[l + 12 >> 2] = c[g + 12 >> 2];
   c[l + 16 >> 2] = c[g + 16 >> 2];
   c[l + 20 >> 2] = c[g + 20 >> 2];
   c[l + 24 >> 2] = c[g + 24 >> 2];
   c[l + 28 >> 2] = c[g + 28 >> 2];
   c[g + 28 >> 2] = 0;
   c[o >> 2] = 0;
   break;
  }
  g = v;
  j = g + 124 | 0;
  do {
   c[g >> 2] = 0;
   g = g + 4 | 0;
  } while ((g | 0) < (j | 0));
  p = e + 12 | 0;
  o = c[e + 28 >> 2] | 0;
  g = 0;
  j = 1;
  q = 0;
  r = 1;
  while (1) {
   if ((r | 0) > (o | 0)) if ((j | 0) > (o | 0)) {
    r = g;
    break;
   } else n = o; else n = r;
   if ((j | 0) > (n | 0)) {
    k = j;
    j = 0;
   } else {
    m = c[p >> 2] | 0;
    l = j;
    j = 0;
    while (1) {
     j = ((c[m + (l + -1 << 4) + 8 >> 2] | 0) != 0 & 1) + j | 0;
     k = l + 1 | 0;
     if ((l | 0) < (n | 0)) l = k; else break;
    }
   }
   n = v + (q << 2) | 0;
   c[n >> 2] = (c[n >> 2] | 0) + j;
   g = j + g | 0;
   q = q + 1 | 0;
   if ((q | 0) >= 31) {
    r = g;
    break;
   } else {
    j = k;
    r = r << 1;
   }
  }
  g = 0;
  j = 1 << (d[e + 7 >> 0] | 0);
  l = 0;
  a : while (1) {
   k = j;
   while (1) {
    j = k + -1 | 0;
    if (!k) {
     q = l;
     break a;
    }
    k = c[s >> 2] | 0;
    if (!(c[k + (j << 5) + 8 >> 2] | 0)) k = j; else break;
   }
   if ((c[k + (j << 5) + 24 >> 2] | 0) == 3) {
    x = +h[k + (j << 5) + 16 >> 3];
    h[t >> 3] = x + 6755399441055744.0;
    k = c[t >> 2] | 0;
    if (+(k | 0) == x & (k + -1 | 0) >>> 0 < 1073741824) {
     k = v + ((Bc(k) | 0) << 2) | 0;
     c[k >> 2] = (c[k >> 2] | 0) + 1;
     k = 1;
    } else k = 0;
   } else k = 0;
   g = k + g | 0;
   l = l + 1 | 0;
  }
  j = g + r | 0;
  if ((c[u >> 2] | 0) == 3) {
   x = +h[f >> 3];
   h[t >> 3] = x + 6755399441055744.0;
   g = c[t >> 2] | 0;
   if (+(g | 0) == x & (g + -1 | 0) >>> 0 < 1073741824) {
    g = v + ((Bc(g) | 0) << 2) | 0;
    c[g >> 2] = (c[g >> 2] | 0) + 1;
    g = 1;
   } else g = 0;
  } else g = 0;
  n = j + g | 0;
  b : do if ((n | 0) > 0) {
   m = 0;
   l = 0;
   o = 0;
   j = 0;
   g = 0;
   p = 1;
   while (1) {
    k = c[v + (o << 2) >> 2] | 0;
    if ((k | 0) > 0) {
     u = k + m | 0;
     t = (u | 0) > (l | 0);
     k = u;
     j = t ? p : j;
     g = t ? u : g;
    } else k = m;
    if ((k | 0) == (n | 0)) break b;
    if ((p | 0) < (n | 0)) {
     l = p;
     m = k;
     o = o + 1 | 0;
     p = p << 1;
    } else break;
   }
  } else {
   j = 0;
   g = 0;
  } while (0);
  Cc(b, e, j, r + 1 + q - g | 0);
  g = vc(e, f) | 0;
  if ((g | 0) != 15088) {
   e = g;
   i = w;
   return e | 0;
  }
  e = Ac(b, e, f) | 0;
  i = w;
  return e | 0;
 } while (0);
 s = f;
 t = c[s + 4 >> 2] | 0;
 v = g + 16 | 0;
 c[v >> 2] = c[s >> 2];
 c[v + 4 >> 2] = t;
 c[g + 24 >> 2] = c[u >> 2];
 if (c[u >> 2] & 64 | 0) if (a[(c[f >> 2] | 0) + 5 >> 0] & 3) if (a[e + 5 >> 0] & 4) Dc(b, e);
 e = g;
 i = w;
 return e | 0;
}

function Le(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 112 | 0;
 h = u + 88 | 0;
 m = u + 72 | 0;
 l = u + 64 | 0;
 k = u + 48 | 0;
 j = u + 40 | 0;
 n = u;
 e = a + 48 | 0;
 p = c[e >> 2] | 0;
 g = a + 4 | 0;
 f = c[g >> 2] | 0;
 q = Ke(p, 11, 0, 0, 0) | 0;
 o = n + 36 | 0;
 c[o >> 2] = 0;
 s = n + 28 | 0;
 c[s >> 2] = 0;
 r = n + 32 | 0;
 c[r >> 2] = 0;
 t = n + 24 | 0;
 c[t >> 2] = b;
 c[b + 16 >> 2] = -1;
 c[b + 20 >> 2] = -1;
 c[b >> 2] = 11;
 c[b + 8 >> 2] = q;
 c[n + 16 >> 2] = -1;
 c[n + 20 >> 2] = -1;
 c[n >> 2] = 0;
 c[n + 8 >> 2] = 0;
 Me(c[e >> 2] | 0, b);
 d = a + 16 | 0;
 if ((c[d >> 2] | 0) != 123) Ne(a, 123);
 pe(a);
 a : do if ((c[d >> 2] | 0) != 125) {
  b = 0;
  b : while (1) {
   if (b | 0) {
    Me(p, n);
    c[n >> 2] = 0;
    if ((c[o >> 2] | 0) == 50) {
     Pe(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[r >> 2] | 0, 50);
     c[o >> 2] = 0;
    }
   }
   c : do switch (c[d >> 2] | 0) {
   case 288:
    {
     if ((Qe(a) | 0) == 61) {
      Re(a, n);
      break c;
     }
     ze(a, n, 0) | 0;
     b = c[r >> 2] | 0;
     if ((b | 0) > 2147483645) {
      b = c[e >> 2] | 0;
      d = 10;
      break b;
     }
     c[r >> 2] = b + 1;
     c[o >> 2] = (c[o >> 2] | 0) + 1;
     break;
    }
   case 91:
    {
     Re(a, n);
     break;
    }
   default:
    {
     ze(a, n, 0) | 0;
     b = c[r >> 2] | 0;
     if ((b | 0) > 2147483645) {
      b = c[e >> 2] | 0;
      d = 17;
      break b;
     }
     c[r >> 2] = b + 1;
     c[o >> 2] = (c[o >> 2] | 0) + 1;
    }
   } while (0);
   switch (c[d >> 2] | 0) {
   case 125:
    break a;
   case 44:
    {
     pe(a);
     break;
    }
   case 59:
    {
     pe(a);
     break;
    }
   default:
    {
     d = 26;
     break b;
    }
   }
   if ((c[d >> 2] | 0) == 125) break a;
   b = c[n >> 2] | 0;
  }
  if ((d | 0) == 10) {
   e = b + 12 | 0;
   d = c[(c[e >> 2] | 0) + 52 >> 2] | 0;
   b = c[(c[b >> 2] | 0) + 64 >> 2] | 0;
   if (!b) {
    l = 6600;
    c[k >> 2] = 7136;
    m = k + 4 | 0;
    c[m >> 2] = 2147483645;
    m = k + 8 | 0;
    c[m >> 2] = l;
    m = lc(d, 6614, k) | 0;
    l = c[e >> 2] | 0;
    me(l, m);
   }
   c[j >> 2] = b;
   l = lc(d, 6580, j) | 0;
   c[k >> 2] = 7136;
   m = k + 4 | 0;
   c[m >> 2] = 2147483645;
   m = k + 8 | 0;
   c[m >> 2] = l;
   m = lc(d, 6614, k) | 0;
   l = c[e >> 2] | 0;
   me(l, m);
  } else if ((d | 0) == 17) {
   e = b + 12 | 0;
   d = c[(c[e >> 2] | 0) + 52 >> 2] | 0;
   b = c[(c[b >> 2] | 0) + 64 >> 2] | 0;
   if (!b) {
    j = 6600;
    c[m >> 2] = 7136;
    k = m + 4 | 0;
    c[k >> 2] = 2147483645;
    k = m + 8 | 0;
    c[k >> 2] = j;
    k = lc(d, 6614, m) | 0;
    j = c[e >> 2] | 0;
    me(j, k);
   }
   c[l >> 2] = b;
   k = lc(d, 6580, l) | 0;
   c[m >> 2] = 7136;
   l = m + 4 | 0;
   c[l >> 2] = 2147483645;
   l = m + 8 | 0;
   c[l >> 2] = k;
   m = lc(d, 6614, m) | 0;
   l = c[e >> 2] | 0;
   me(l, m);
  } else if ((d | 0) == 26) if ((c[g >> 2] | 0) == (f | 0)) Ne(a, 125); else {
   m = c[a + 52 >> 2] | 0;
   k = Oe(a, 125) | 0;
   l = Oe(a, 123) | 0;
   c[h >> 2] = k;
   c[h + 4 >> 2] = l;
   c[h + 8 >> 2] = f;
   me(a, lc(m, 7159, h) | 0);
  }
 } while (0);
 pe(a);
 b = c[o >> 2] | 0;
 d : do if (b | 0) {
  switch (c[n >> 2] | 0) {
  case 13:
  case 12:
   {
    Te(p, n, -1);
    Pe(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[r >> 2] | 0, -1);
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    break d;
   }
  case 0:
   break;
  default:
   {
    Me(p, n);
    b = c[o >> 2] | 0;
   }
  }
  Pe(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[r >> 2] | 0, b);
 } while (0);
 t = c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] & 8388607;
 t = (Ue(c[r >> 2] | 0) | 0) << 23 | t;
 c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] = t;
 t = (Ue(c[s >> 2] | 0) | 0) << 14 & 8372224 | t & -8372225;
 c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] = t;
 i = u;
 return;
}

function oj(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 G = i;
 i = i + 1360 | 0;
 E = G + 16 | 0;
 D = G + 8 | 0;
 C = G;
 z = G + 1352 | 0;
 g = G + 1348 | 0;
 e = G + 1344 | 0;
 A = G + 1064 | 0;
 F = G + 24 | 0;
 d = Fg(b, 1, g) | 0;
 f = Fg(b, 2, e) | 0;
 w = Gd(b, 3) | 0;
 x = Vd(b, 4, (c[g >> 2] | 0) + 1 | 0) | 0;
 y = (a[f >> 0] | 0) == 94;
 if ((w + -3 | 0) >>> 0 >= 4) Id(b, 3, 10826) | 0;
 $g(b, F);
 if (y) {
  B = (c[e >> 2] | 0) + -1 | 0;
  c[e >> 2] = B;
  e = B;
  f = f + 1 | 0;
 } else e = c[e >> 2] | 0;
 u = A + 16 | 0;
 c[u >> 2] = b;
 c[A >> 2] = 200;
 v = A + 4 | 0;
 c[v >> 2] = d;
 B = A + 8 | 0;
 c[B >> 2] = d + (c[g >> 2] | 0);
 c[A + 12 >> 2] = f + e;
 q = A + 20 | 0;
 r = F + 8 | 0;
 s = F + 4 | 0;
 p = A + 28 | 0;
 o = A + 24 | 0;
 e = 0;
 while (1) {
  if (e >>> 0 >= x >>> 0) {
   t = 49;
   break;
  }
  c[q >> 2] = 0;
  n = hj(A, d, f) | 0;
  if (!n) t = 44; else {
   e = e + 1 | 0;
   k = c[u >> 2] | 0;
   switch (w | 0) {
   case 6:
    {
     Of(k, 3);
     g = c[q >> 2] | 0;
     g = (d | 0) != 0 & (g | 0) == 0 ? 1 : g;
     gg(c[u >> 2] | 0, g, 10341);
     if ((g | 0) > 0) {
      h = 0;
      do {
       jj(A, h, d, n);
       h = h + 1 | 0;
      } while ((h | 0) != (g | 0));
     }
     Kf(k, g, 1, 0, 0);
     t = 38;
     break;
    }
   case 5:
    {
     do if ((c[q >> 2] | 0) > 0) {
      h = c[p >> 2] | 0;
      if ((h | 0) == -1) {
       md(k, 10581, C) | 0;
       j = c[u >> 2] | 0;
       g = c[o >> 2] | 0;
      } else {
       g = c[o >> 2] | 0;
       if ((h | 0) == -2) {
        Wd(k, g + 1 - (c[v >> 2] | 0) | 0);
        break;
       } else j = k;
      }
      qd(j, g, h) | 0;
     } else qd(k, d, n - d | 0) | 0; while (0);
     pj(k, 3);
     t = 38;
     break;
    }
   default:
    {
     l = dd(k, 3, z) | 0;
     if (c[z >> 2] | 0) {
      m = n - d | 0;
      g = 0;
      do {
       k = l + g | 0;
       h = a[k >> 0] | 0;
       do if (h << 24 >> 24 == 37) {
        g = g + 1 | 0;
        k = l + g | 0;
        h = a[k >> 0] | 0;
        j = h << 24 >> 24;
        if (((h & 255) + -48 | 0) >>> 0 < 10) if (h << 24 >> 24 == 48) {
         Ph(F, d, m);
         break;
        } else {
         jj(A, j + -49 | 0, d, n);
         dh(F);
         break;
        }
        if (h << 24 >> 24 != 37) {
         j = c[u >> 2] | 0;
         c[D >> 2] = 37;
         md(j, 10857, D) | 0;
        }
        h = c[r >> 2] | 0;
        if (h >>> 0 >= (c[s >> 2] | 0) >>> 0) {
         li(F, 1) | 0;
         h = c[r >> 2] | 0;
        }
        k = a[k >> 0] | 0;
        c[r >> 2] = h + 1;
        a[(c[F >> 2] | 0) + h >> 0] = k;
       } else {
        j = c[r >> 2] | 0;
        if (j >>> 0 >= (c[s >> 2] | 0) >>> 0) {
         li(F, 1) | 0;
         j = c[r >> 2] | 0;
         h = a[k >> 0] | 0;
        }
        c[r >> 2] = j + 1;
        a[(c[F >> 2] | 0) + j >> 0] = h;
       } while (0);
       g = g + 1 | 0;
      } while (g >>> 0 < (c[z >> 2] | 0) >>> 0);
     }
    }
   }
   if ((t | 0) == 38) {
    t = 0;
    if (!(Ed(k, -1) | 0)) {
     wd(k, -2);
     qd(k, d, n - d | 0) | 0;
    } else if (!(Mf(k, -1) | 0)) {
     c[E >> 2] = Hd(k, Gd(k, -1) | 0) | 0;
     md(k, 10899, E) | 0;
    }
    dh(F);
   }
   if (n >>> 0 > d >>> 0) d = n; else t = 44;
  }
  if ((t | 0) == 44) {
   t = 0;
   if (d >>> 0 >= (c[B >> 2] | 0) >>> 0) {
    t = 49;
    break;
   }
   g = c[r >> 2] | 0;
   if (g >>> 0 >= (c[s >> 2] | 0) >>> 0) {
    li(F, 1) | 0;
    g = c[r >> 2] | 0;
   }
   n = a[d >> 0] | 0;
   c[r >> 2] = g + 1;
   a[(c[F >> 2] | 0) + g >> 0] = n;
   d = d + 1 | 0;
  }
  if (y) {
   t = 49;
   break;
  }
 }
 if ((t | 0) == 49) {
  Ph(F, d, (c[B >> 2] | 0) - d | 0);
  eh(F);
  Wd(b, e);
  i = G;
  return 2;
 }
 return 0;
}

function ol(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0.0, f = 0.0, g = 0, j = 0.0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 48 | 0;
 l = r + 16 | 0;
 n = r;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 g = c[k + 4 >> 2] | 0;
 o = Cn(d | 0, g | 0, 63) | 0;
 q = g & 2147483647;
 do if (q >>> 0 < 1074752123) if ((g & 1048575 | 0) == 598523) p = 21; else {
  d = (o | 0) != 0;
  if (q >>> 0 < 1073928573) if (d) {
   j = a + 1.5707963267341256;
   m = j + 6.077100506506192e-11;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + 6.077100506506192e-11;
   d = -1;
   break;
  } else {
   j = a + -1.5707963267341256;
   m = j + -6.077100506506192e-11;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + -6.077100506506192e-11;
   d = 1;
   break;
  } else if (d) {
   j = a + 3.1415926534682512;
   m = j + 1.2154201013012384e-10;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + 1.2154201013012384e-10;
   d = -2;
   break;
  } else {
   j = a + -3.1415926534682512;
   m = j + -1.2154201013012384e-10;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + -1.2154201013012384e-10;
   d = 2;
   break;
  }
 } else {
  if (q >>> 0 >= 1075594812) {
   if (q >>> 0 < 1094263291) {
    p = 21;
    break;
   }
   if (q >>> 0 > 2146435071) {
    m = a - a;
    h[b + 8 >> 3] = m;
    h[b >> 3] = m;
    d = 0;
    break;
   }
   c[k >> 2] = d;
   c[k + 4 >> 2] = g & 1048575 | 1096810496;
   m = +h[k >> 3];
   j = +(~~m | 0);
   h[l >> 3] = j;
   j = (m - j) * 16777216.0;
   m = +(~~j | 0);
   h[l + 8 >> 3] = m;
   m = (j - m) * 16777216.0;
   h[l + 16 >> 3] = m;
   if (m == 0.0) {
    d = 1;
    while (1) if (+h[l + (d << 3) >> 3] == 0.0) d = d + -1 | 0; else break;
   } else d = 2;
   d = pl(l, n, (q >>> 20) + -1046 | 0, d + 1 | 0, 1) | 0;
   e = +h[n >> 3];
   a = +h[n + 8 >> 3];
   if (!o) {
    h[b >> 3] = e;
    h[b + 8 >> 3] = a;
    break;
   } else {
    h[b >> 3] = -e;
    h[b + 8 >> 3] = -a;
    d = 0 - d | 0;
    break;
   }
  }
  if (q >>> 0 < 1075183037) {
   if ((q | 0) == 1074977148) {
    p = 21;
    break;
   }
   if (!o) {
    j = a + -4.712388980202377;
    m = j + -1.8231301519518578e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + -1.8231301519518578e-10;
    d = 3;
    break;
   } else {
    j = a + 4.712388980202377;
    m = j + 1.8231301519518578e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + 1.8231301519518578e-10;
    d = -3;
    break;
   }
  } else {
   if ((q | 0) == 1075388923) {
    p = 21;
    break;
   }
   if (!o) {
    j = a + -6.2831853069365025;
    m = j + -2.430840202602477e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + -2.430840202602477e-10;
    d = 4;
    break;
   } else {
    j = a + 6.2831853069365025;
    m = j + 2.430840202602477e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + 2.430840202602477e-10;
    d = -4;
    break;
   }
  }
 } while (0);
 if ((p | 0) == 21) {
  m = a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
  d = ~~m;
  e = a - m * 1.5707963267341256;
  a = m * 6.077100506506192e-11;
  f = e - a;
  h[b >> 3] = f;
  h[k >> 3] = f;
  p = Cn(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
  g = q >>> 20;
  if ((g - (p & 2047) | 0) > 16) {
   a = m * 6.077100506303966e-11;
   j = e - a;
   a = m * 2.0222662487959506e-21 - (e - j - a);
   e = j - a;
   h[b >> 3] = e;
   h[k >> 3] = e;
   q = Cn(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
   if ((g - (q & 2047) | 0) > 49) {
    a = m * 2.0222662487111665e-21;
    e = j - a;
    a = m * 8.4784276603689e-32 - (j - e - a);
    f = e - a;
    h[b >> 3] = f;
   } else {
    f = e;
    e = j;
   }
  }
  h[b + 8 >> 3] = e - f - a;
 }
 i = r;
 return d | 0;
}

function ec(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 x = i;
 i = i + 64 | 0;
 w = x + 24 | 0;
 v = x + 16 | 0;
 u = x + 8 | 0;
 t = x;
 q = x + 32 | 0;
 s = a + 8 | 0;
 p = a + 12 | 0;
 r = a + 28 | 0;
 o = a + 16 | 0;
 m = c[s >> 2] | 0;
 n = b;
 a : while (1) {
  e = m + -32 | 0;
  l = m + -24 | 0;
  f = c[l >> 2] | 0;
  b = m + -16 | 0;
  do if ((f | 0) == 3 | (f & 15 | 0) == 4) {
   k = m + -8 | 0;
   g = c[k >> 2] | 0;
   if ((g & 15 | 0) != 4) {
    if ((g | 0) != 3) {
     y = 6;
     break;
    }
    h[t >> 3] = +h[b >> 3];
    f = Lb(a, q, lm(q, 9776, t) | 0) | 0;
    c[b >> 2] = f;
    c[k >> 2] = d[f + 4 >> 0] | 0 | 64;
    f = c[l >> 2] | 0;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   g = (f & 15 | 0) == 4;
   if (!j) {
    if (!((f | 0) == 3 & (g ^ 1))) {
     b = 2;
     break;
    }
    h[u >> 3] = +h[e >> 3];
    b = Lb(a, q, lm(q, 9776, u) | 0) | 0;
    c[e >> 2] = b;
    c[l >> 2] = d[b + 4 >> 0] | 0 | 64;
    b = 2;
    break;
   }
   if (g) if (!(c[(c[e >> 2] | 0) + 12 >> 2] | 0)) {
    j = b;
    m = c[j + 4 >> 2] | 0;
    b = e;
    c[b >> 2] = c[j >> 2];
    c[b + 4 >> 2] = m;
    c[l >> 2] = c[k >> 2];
    b = 2;
    break;
   }
   b : do if ((n | 0) > 1) {
    b = 1;
    e = j;
    do {
     g = m + (0 - b << 4) + -16 | 0;
     j = g + 8 | 0;
     f = c[j >> 2] | 0;
     if ((f & 15 | 0) != 4) {
      if ((f | 0) != 3) break b;
      h[v >> 3] = +h[g >> 3];
      l = Lb(a, q, lm(q, 9776, v) | 0) | 0;
      c[g >> 2] = l;
      c[j >> 2] = d[l + 4 >> 0] | 0 | 64;
     }
     f = c[(c[g >> 2] | 0) + 12 >> 2] | 0;
     if (f >>> 0 >= (-3 - e | 0) >>> 0) {
      y = 21;
      break a;
     }
     e = f + e | 0;
     b = b + 1 | 0;
    } while ((b | 0) < (n | 0));
   } else {
    b = 1;
    e = j;
   } while (0);
   g = jc(a, (c[p >> 2] | 0) + 144 | 0, e) | 0;
   f = b;
   e = 0;
   while (1) {
    k = c[m + (0 - f << 4) >> 2] | 0;
    l = c[k + 12 >> 2] | 0;
    En(g + e | 0, k + 16 | 0, l | 0) | 0;
    e = l + e | 0;
    if ((f | 0) > 1) f = f + -1 | 0; else break;
   }
   l = 0 - b | 0;
   k = Lb(a, g, e) | 0;
   c[m + (l << 4) >> 2] = k;
   c[m + (l << 4) + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
  } else y = 6; while (0);
  if ((y | 0) == 6) {
   y = 0;
   f = Bb(a, e, 15) | 0;
   if (!(c[f + 8 >> 2] | 0)) {
    f = Bb(a, b, 15) | 0;
    if (!(c[f + 8 >> 2] | 0)) {
     y = 9;
     break;
    }
   }
   j = c[r >> 2] | 0;
   k = c[s >> 2] | 0;
   c[s >> 2] = k + 16;
   A = f;
   g = c[A + 4 >> 2] | 0;
   z = k;
   c[z >> 2] = c[A >> 2];
   c[z + 4 >> 2] = g;
   c[k + 8 >> 2] = c[f + 8 >> 2];
   k = c[s >> 2] | 0;
   c[s >> 2] = k + 16;
   z = e;
   f = c[z + 4 >> 2] | 0;
   g = k;
   c[g >> 2] = c[z >> 2];
   c[g + 4 >> 2] = f;
   c[k + 8 >> 2] = c[l >> 2];
   k = c[s >> 2] | 0;
   c[s >> 2] = k + 16;
   g = b;
   l = c[g + 4 >> 2] | 0;
   b = k;
   c[b >> 2] = c[g >> 2];
   c[b + 4 >> 2] = l;
   c[k + 8 >> 2] = c[m + -8 >> 2];
   Eb(a, (c[s >> 2] | 0) + -48 | 0, 1, (d[(c[o >> 2] | 0) + 18 >> 0] | 0) & 1);
   b = (c[r >> 2] | 0) + (e - j) | 0;
   m = c[s >> 2] | 0;
   j = m + -16 | 0;
   c[s >> 2] = j;
   k = c[j + 4 >> 2] | 0;
   l = b;
   c[l >> 2] = c[j >> 2];
   c[l + 4 >> 2] = k;
   c[b + 8 >> 2] = c[m + -8 >> 2];
   b = 2;
  }
  n = n + 1 - b | 0;
  m = (c[s >> 2] | 0) + (1 - b << 4) | 0;
  c[s >> 2] = m;
  if ((n | 0) <= 1) {
   y = 27;
   break;
  }
 }
 if ((y | 0) == 9) fc(a, e, b); else if ((y | 0) == 21) Fb(a, 4462, w); else if ((y | 0) == 27) {
  i = x;
  return;
 }
}

function ze(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 48 | 0;
 n = t + 32 | 0;
 m = t + 24 | 0;
 r = t;
 q = e + 48 | 0;
 o = c[q >> 2] | 0;
 s = e + 52 | 0;
 k = (c[s >> 2] | 0) + 38 | 0;
 l = (b[k >> 1] | 0) + 1 << 16 >> 16;
 b[k >> 1] = l;
 if ((l & 65535) > 200) {
  l = o + 12 | 0;
  j = c[(c[l >> 2] | 0) + 52 >> 2] | 0;
  k = c[(c[o >> 2] | 0) + 64 >> 2] | 0;
  if (!k) {
   v = 6600;
   c[n >> 2] = 6971;
   u = n + 4 | 0;
   c[u >> 2] = 200;
   u = n + 8 | 0;
   c[u >> 2] = v;
   u = lc(j, 6614, n) | 0;
   v = c[l >> 2] | 0;
   me(v, u);
  }
  c[m >> 2] = k;
  u = lc(j, 6580, m) | 0;
  c[n >> 2] = 6971;
  v = n + 4 | 0;
  c[v >> 2] = 200;
  v = n + 8 | 0;
  c[v >> 2] = u;
  v = lc(j, 6614, n) | 0;
  u = c[l >> 2] | 0;
  me(u, v);
 }
 k = e + 16 | 0;
 a : do switch (c[k >> 2] | 0) {
 case 271:
  {
   j = 1;
   p = 8;
   break;
  }
 case 45:
  {
   j = 0;
   p = 8;
   break;
  }
 case 35:
  {
   j = 2;
   p = 8;
   break;
  }
 case 287:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 5;
   c[f + 8 >> 2] = 0;
   h[f + 8 >> 3] = +h[e + 24 >> 3];
   p = 20;
   break;
  }
 case 289:
  {
   p = Je(o, c[e + 24 >> 2] | 0) | 0;
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 4;
   c[f + 8 >> 2] = p;
   p = 20;
   break;
  }
 case 270:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 1;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 276:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 2;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 263:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 3;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 280:
  {
   if (!(a[(c[o >> 2] | 0) + 77 >> 0] | 0)) me(e, 7060); else {
    p = Ke(o, 38, 0, 1, 0) | 0;
    c[f + 16 >> 2] = -1;
    c[f + 20 >> 2] = -1;
    c[f >> 2] = 13;
    c[f + 8 >> 2] = p;
    p = 20;
    break a;
   }
   break;
  }
 case 123:
  {
   Le(e, f);
   break;
  }
 case 265:
  {
   pe(e);
   Ve(e, f, 0, c[e + 4 >> 2] | 0);
   break;
  }
 default:
  kf(e, f);
 } while (0);
 if ((p | 0) == 8) {
  v = c[e + 4 >> 2] | 0;
  pe(e);
  ze(e, f, 8) | 0;
  Ae(c[q >> 2] | 0, j, f, v);
 } else if ((p | 0) == 20) pe(e);
 do switch (c[k >> 2] | 0) {
 case 43:
  {
   j = 0;
   break;
  }
 case 45:
  {
   j = 1;
   break;
  }
 case 42:
  {
   j = 2;
   break;
  }
 case 47:
  {
   j = 3;
   break;
  }
 case 37:
  {
   j = 4;
   break;
  }
 case 94:
  {
   j = 5;
   break;
  }
 case 279:
  {
   j = 6;
   break;
  }
 case 284:
  {
   j = 10;
   break;
  }
 case 281:
  {
   j = 7;
   break;
  }
 case 60:
  {
   j = 8;
   break;
  }
 case 283:
  {
   j = 9;
   break;
  }
 case 62:
  {
   j = 11;
   break;
  }
 case 282:
  {
   j = 12;
   break;
  }
 case 257:
  {
   j = 13;
   break;
  }
 case 272:
  {
   j = 14;
   break;
  }
 default:
  {
   v = 15;
   u = c[s >> 2] | 0;
   u = u + 38 | 0;
   s = b[u >> 1] | 0;
   s = s + -1 << 16 >> 16;
   b[u >> 1] = s;
   i = t;
   return v | 0;
  }
 } while (0);
 k = e + 4 | 0;
 while (1) {
  if ((d[7451 + (j << 1) >> 0] | 0) <= (g | 0)) {
   p = 39;
   break;
  }
  v = c[k >> 2] | 0;
  pe(e);
  sf(c[q >> 2] | 0, j, f);
  u = j;
  j = ze(e, r, d[7451 + (j << 1) + 1 >> 0] | 0) | 0;
  wf(c[q >> 2] | 0, u, f, r, v);
  if ((j | 0) == 15) {
   j = 15;
   p = 39;
   break;
  }
 }
 if ((p | 0) == 39) {
  v = c[s >> 2] | 0;
  v = v + 38 | 0;
  u = b[v >> 1] | 0;
  u = u + -1 << 16 >> 16;
  b[v >> 1] = u;
  i = t;
  return j | 0;
 }
 return 0;
}

function Gf(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 80 | 0;
 z = C + 64 | 0;
 y = C + 56 | 0;
 A = C + 32 | 0;
 w = C;
 B = g + 8 | 0;
 if (((c[B >> 2] | 0) + -7 | 0) >>> 0 >= 3) me(f, 7617);
 k = f + 16 | 0;
 a : do switch (c[k >> 2] | 0) {
 case 44:
  {
   pe(f);
   c[w >> 2] = g;
   u = w + 8 | 0;
   kf(f, u);
   n = c[u >> 2] | 0;
   v = f + 48 | 0;
   if ((n | 0) != 9) {
    s = c[v >> 2] | 0;
    p = a[s + 48 >> 0] | 0;
    r = p & 255;
    t = w + 16 | 0;
    o = p & 255;
    q = c[t >> 2] | 0;
    if ((n | 0) == 7) {
     j = 0;
     n = g;
     do {
      if ((c[n + 8 >> 2] | 0) == 9) {
       l = n + 16 | 0;
       g = l + 3 | 0;
       if ((a[g >> 0] | 0) == 7) {
        k = l + 2 | 0;
        if ((d[k >> 0] | 0) == (q | 0)) {
         a[g >> 0] = 7;
         a[k >> 0] = p;
         j = 1;
        }
       }
       if ((b[l >> 1] | 0) == (q | 0)) {
        b[l >> 1] = o;
        j = 1;
       }
      }
      n = c[n >> 2] | 0;
     } while ((n | 0) != 0);
    } else {
     j = 0;
     l = g;
     do {
      if ((c[l + 8 >> 2] | 0) == 9) {
       k = l + 16 | 0;
       g = k + 3 | 0;
       if ((d[g >> 0] | 0) == (n | 0)) {
        k = k + 2 | 0;
        if ((d[k >> 0] | 0) == (q | 0)) {
         a[g >> 0] = 7;
         a[k >> 0] = p;
         j = 1;
        }
       }
      }
      l = c[l >> 2] | 0;
     } while ((l | 0) != 0);
    }
    if (j | 0) {
     Ke(s, (c[u >> 2] | 0) == 7 ? 0 : 5, r, c[t >> 2] | 0, 0) | 0;
     Ye(s, 1);
    }
   }
   j = c[v >> 2] | 0;
   if (((e[(c[f + 52 >> 2] | 0) + 38 >> 1] | 0) + h | 0) <= 200) {
    Gf(f, w, h + 1 | 0);
    m = v;
    x = A;
    break a;
   }
   g = j + 12 | 0;
   k = c[(c[g >> 2] | 0) + 52 >> 2] | 0;
   j = c[(c[j >> 2] | 0) + 64 >> 2] | 0;
   if (!j) {
    f = 6600;
    c[z >> 2] = 6971;
    h = z + 4 | 0;
    c[h >> 2] = 200;
    h = z + 8 | 0;
    c[h >> 2] = f;
    h = lc(k, 6614, z) | 0;
    f = c[g >> 2] | 0;
    me(f, h);
   }
   c[y >> 2] = j;
   y = lc(k, 6580, y) | 0;
   c[z >> 2] = 6971;
   h = z + 4 | 0;
   c[h >> 2] = 200;
   h = z + 8 | 0;
   c[h >> 2] = y;
   h = lc(k, 6614, z) | 0;
   z = c[g >> 2] | 0;
   me(z, h);
   break;
  }
 case 61:
  {
   pe(f);
   ze(f, A, 0) | 0;
   m = f + 48 | 0;
   if ((c[k >> 2] | 0) == 44) {
    j = 1;
    do {
     pe(f);
     Me(c[m >> 2] | 0, A);
     ze(f, A, 0) | 0;
     j = j + 1 | 0;
    } while ((c[k >> 2] | 0) == 44);
   } else j = 1;
   g = c[m >> 2] | 0;
   if ((j | 0) == (h | 0)) {
    Hf(g, A);
    Ff(c[m >> 2] | 0, B, A);
    i = C;
    return;
   }
   l = h - j | 0;
   switch (c[A >> 2] | 0) {
   case 13:
   case 12:
    {
     k = l + 1 | 0;
     k = (k | 0) < 0 ? 0 : k;
     Te(g, A, k);
     if ((k | 0) > 1) Ye(g, k + -1 | 0);
     break;
    }
   case 0:
    {
     n = 33;
     break;
    }
   default:
    {
     Me(g, A);
     n = 33;
    }
   }
   if ((n | 0) == 33) if ((l | 0) > 0) {
    z = d[g + 48 >> 0] | 0;
    Ye(g, l);
    Df(g, z, l);
   }
   if ((j | 0) > (h | 0)) {
    x = (c[m >> 2] | 0) + 48 | 0;
    a[x >> 0] = l + (d[x >> 0] | 0);
    x = A;
   } else x = A;
   break;
  }
 default:
  Ne(f, 61);
 } while (0);
 h = c[m >> 2] | 0;
 z = (d[h + 48 >> 0] | 0) + -1 | 0;
 c[A + 16 >> 2] = -1;
 c[A + 20 >> 2] = -1;
 c[x >> 2] = 6;
 c[A + 8 >> 2] = z;
 Ff(h, B, A);
 i = C;
 return;
}

function On(a, b, d, e, f) {
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
   f = k >>> ((Hn(i | 0) | 0) >>> 0);
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
   p = Hn(h | 0) | 0;
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
  k = yn(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   xn(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = xn(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function hc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = b + 12 | 0;
 m = e;
 a : while (1) {
  l = ic(b, m + 1 | 0, d) | 0;
  c[f >> 2] = l;
  if (l | 0) {
   d = 5244;
   i = 39;
   break;
  }
  if ((d | 0) <= 0) {
   d = 0;
   i = 39;
   break;
  }
  e = c[n >> 2] | 0;
  k = 0;
  g = -1;
  while (1) {
   h = c[e + (k << 2) >> 2] | 0;
   i = h & 63;
   j = h >>> 6 & 255;
   switch (i | 0) {
   case 4:
    {
     if ((j | 0) > (m | 0)) l = k; else {
      l = k;
      g = (j + (h >>> 23) | 0) < (m | 0) ? g : k;
     }
     break;
    }
   case 34:
    {
     l = k;
     g = (j + 2 | 0) > (m | 0) ? g : k;
     break;
    }
   case 30:
   case 29:
    {
     l = k;
     g = (j | 0) > (m | 0) ? g : k;
     break;
    }
   case 23:
    {
     l = (h >>> 14) + -131071 | 0;
     j = k + 1 + l | 0;
     l = ((k | 0) >= (j | 0) | (j | 0) > (d | 0) ? 0 : l) + k | 0;
     break;
    }
   case 27:
    {
     l = k;
     g = (j | 0) == (m | 0) ? k : g;
     break;
    }
   default:
    {
     l = k;
     g = (j | 0) == (m | 0) & (a[3916 + i >> 0] & 64) != 0 ? k : g;
    }
   }
   k = l + 1 | 0;
   if ((k | 0) >= (d | 0)) {
    h = g;
    break;
   }
  }
  if ((h | 0) == -1) {
   d = 0;
   i = 39;
   break;
  }
  d = c[e + (h << 2) >> 2] | 0;
  g = d & 63;
  switch (g | 0) {
  case 7:
  case 6:
   {
    e = h;
    i = 17;
    break a;
   }
  case 5:
   {
    i = 28;
    break a;
   }
  case 12:
   {
    e = h;
    i = 33;
    break a;
   }
  case 1:
   {
    i = 29;
    break a;
   }
  case 2:
   {
    d = h;
    i = 30;
    break a;
   }
  case 0:
   break;
  default:
   {
    d = 0;
    i = 39;
    break a;
   }
  }
  e = d >>> 23;
  if (e >>> 0 < (d >>> 6 & 255) >>> 0) {
   d = h;
   m = e;
  } else {
   d = 0;
   i = 39;
   break;
  }
 }
 if ((i | 0) == 17) {
  h = d >>> 14;
  d = d >>> 23;
  if ((g | 0) == 7) g = ic(b, d + 1 | 0, e) | 0; else {
   g = c[(c[b + 28 >> 2] | 0) + (d << 3) >> 2] | 0;
   g = (g | 0) == 0 ? 8259 : g + 16 | 0;
  }
  if (!(h & 256)) {
   d = hc(b, e, h & 511, f) | 0;
   if (!d) i = 25; else if ((a[d >> 0] | 0) != 99) i = 25;
  } else {
   e = h & 255;
   d = c[b + 8 >> 2] | 0;
   if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) == 4) c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16; else i = 25;
  }
  if ((i | 0) == 25) c[f >> 2] = 8259;
  if (!g) {
   f = 4379;
   return f | 0;
  }
  f = (Wl(g, 6575) | 0) == 0;
  f = f ? 4372 : 4379;
  return f | 0;
 } else if ((i | 0) == 28) {
  b = c[(c[b + 28 >> 2] | 0) + (d >>> 23 << 3) >> 2] | 0;
  c[f >> 2] = (b | 0) == 0 ? 8259 : b + 16 | 0;
  f = 4385;
  return f | 0;
 } else if ((i | 0) == 29) e = d >>> 14; else if ((i | 0) == 30) e = (c[e + (d + 1 << 2) >> 2] | 0) >>> 6; else if ((i | 0) == 33) {
  d = d >>> 14;
  if (!(d & 256)) {
   d = hc(b, e, d & 511, f) | 0;
   if (d | 0) if ((a[d >> 0] | 0) == 99) {
    f = 6161;
    return f | 0;
   }
  } else {
   e = d & 255;
   d = c[b + 8 >> 2] | 0;
   if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) == 4) {
    c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16;
    f = 6161;
    return f | 0;
   }
  }
  c[f >> 2] = 8259;
  f = 6161;
  return f | 0;
 } else if ((i | 0) == 39) return d | 0;
 d = c[b + 8 >> 2] | 0;
 if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) != 4) {
  f = 0;
  return f | 0;
 }
 c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16;
 f = 4393;
 return f | 0;
}

function Ae(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 j = n;
 c[j + 20 >> 2] = -1;
 c[j + 16 >> 2] = -1;
 c[j >> 2] = 5;
 h[j + 8 >> 3] = 0.0;
 switch (e | 0) {
 case 0:
  {
   if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) {
    m = f + 8 | 0;
    h[m >> 3] = -+h[m >> 3];
    i = n;
    return;
   }
   Be(b, f) | 0;
   He(b, 19, f, j, g);
   i = n;
   return;
  }
 case 1:
  {
   Ce(b, f);
   switch (c[f >> 2] | 0) {
   case 3:
   case 1:
    {
     c[f >> 2] = 2;
     break;
    }
   case 2:
   case 5:
   case 4:
    {
     c[f >> 2] = 3;
     break;
    }
   case 10:
    {
     l = c[f + 8 >> 2] | 0;
     e = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (l << 2) | 0;
     if ((l | 0) > 0) {
      j = e + -4 | 0;
      g = c[j >> 2] | 0;
      if ((a[3916 + (g & 63) >> 0] | 0) >= 0) m = 12;
     } else m = 12;
     if ((m | 0) == 12) {
      g = c[e >> 2] | 0;
      j = e;
     }
     c[j >> 2] = ((g & 16320 | 0) == 0 & 1) << 6 | g & -16321;
     break;
    }
   case 6:
    {
     m = 21;
     break;
    }
   case 11:
    {
     g = b + 48 | 0;
     j = (d[g >> 0] | 0) + 1 | 0;
     e = (c[b >> 2] | 0) + 78 | 0;
     do if (j >>> 0 > (d[e >> 0] | 0) >>> 0) if (j >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
      k = j & 255;
      a[e >> 0] = k;
      break;
     } else k = j & 255; while (0);
     a[g >> 0] = k;
     Fe(b, f, (k & 255) + -1 | 0);
     if ((c[f >> 2] | 0) == 6) m = 21; else {
      g = f + 8 | 0;
      j = c[g >> 2] | 0;
      m = 24;
     }
     break;
    }
   default:
    {}
   }
   if ((m | 0) == 21) {
    g = f + 8 | 0;
    j = c[g >> 2] | 0;
    if (!(j & 256)) if ((d[b + 46 >> 0] | 0) > (j | 0)) m = 24; else {
     m = b + 48 | 0;
     a[m >> 0] = (a[m >> 0] | 0) + -1 << 24 >> 24;
     m = 24;
    } else m = 24;
   }
   if ((m | 0) == 24) {
    c[g >> 2] = De(b, j << 23 | 20) | 0;
    c[f >> 2] = 11;
   }
   k = f + 20 | 0;
   j = c[k >> 2] | 0;
   l = f + 16 | 0;
   g = c[l >> 2] | 0;
   c[k >> 2] = g;
   c[l >> 2] = j;
   if ((g | 0) != -1) {
    f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    do {
     k = f + (g << 2) | 0;
     if ((g | 0) > 0) {
      e = k + -4 | 0;
      j = c[e >> 2] | 0;
      if ((a[3916 + (j & 63) >> 0] | 0) >= 0) m = 29;
     } else m = 29;
     if ((m | 0) == 29) {
      m = 0;
      j = c[k >> 2] | 0;
      e = k;
     }
     if ((j & 63 | 0) == 28) c[e >> 2] = j & 8372224 | j >>> 23 << 6 | 27;
     k = ((c[k >> 2] | 0) >>> 14) + -131071 | 0;
     g = (k | 0) == -1 ? -1 : g + 1 + k | 0;
    } while ((g | 0) != -1);
    j = c[l >> 2] | 0;
   }
   if ((j | 0) == -1) {
    i = n;
    return;
   }
   f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   do {
    k = f + (j << 2) | 0;
    if ((j | 0) > 0) {
     e = k + -4 | 0;
     g = c[e >> 2] | 0;
     if ((a[3916 + (g & 63) >> 0] | 0) >= 0) m = 38;
    } else m = 38;
    if ((m | 0) == 38) {
     m = 0;
     g = c[k >> 2] | 0;
     e = k;
    }
    if ((g & 63 | 0) == 28) c[e >> 2] = g & 8372224 | g >>> 23 << 6 | 27;
    b = ((c[k >> 2] | 0) >>> 14) + -131071 | 0;
    j = (b | 0) == -1 ? -1 : j + 1 + b | 0;
   } while ((j | 0) != -1);
   i = n;
   return;
  }
 case 2:
  {
   Be(b, f) | 0;
   He(b, 21, f, j, g);
   i = n;
   return;
  }
 default:
  {
   i = n;
   return;
  }
 }
}

function wf(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0;
 switch (e | 0) {
 case 13:
  {
   Ce(b, g);
   e = g + 20 | 0;
   m = c[f + 20 >> 2] | 0;
   do if ((m | 0) != -1) {
    i = c[e >> 2] | 0;
    if ((i | 0) == -1) {
     c[e >> 2] = m;
     break;
    }
    l = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    while (1) {
     j = l + (i << 2) | 0;
     e = c[j >> 2] | 0;
     k = (e >>> 14) + -131071 | 0;
     k = (k | 0) == -1 ? -1 : i + 1 + k | 0;
     if ((k | 0) == -1) {
      k = e;
      break;
     } else i = k;
    }
    e = m + ~i | 0;
    if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
     c[j >> 2] = (e << 14) + 2147467264 | k & 16383;
     break;
    }
   } while (0);
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = c[g + 4 >> 2];
   c[f + 8 >> 2] = c[g + 8 >> 2];
   c[f + 12 >> 2] = c[g + 12 >> 2];
   c[f + 16 >> 2] = c[g + 16 >> 2];
   c[f + 20 >> 2] = c[g + 20 >> 2];
   return;
  }
 case 14:
  {
   Ce(b, g);
   e = g + 16 | 0;
   m = c[f + 16 >> 2] | 0;
   do if ((m | 0) != -1) {
    i = c[e >> 2] | 0;
    if ((i | 0) == -1) {
     c[e >> 2] = m;
     break;
    }
    l = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    while (1) {
     j = l + (i << 2) | 0;
     e = c[j >> 2] | 0;
     k = (e >>> 14) + -131071 | 0;
     k = (k | 0) == -1 ? -1 : i + 1 + k | 0;
     if ((k | 0) == -1) {
      k = e;
      break;
     } else i = k;
    }
    e = m + ~i | 0;
    if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
     c[j >> 2] = (e << 14) + 2147467264 | k & 16383;
     break;
    }
   } while (0);
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = c[g + 4 >> 2];
   c[f + 8 >> 2] = c[g + 8 >> 2];
   c[f + 12 >> 2] = c[g + 12 >> 2];
   c[f + 16 >> 2] = c[g + 16 >> 2];
   c[f + 20 >> 2] = c[g + 20 >> 2];
   return;
  }
 case 6:
  {
   if ((c[g + 16 >> 2] | 0) == (c[g + 20 >> 2] | 0)) Ce(b, g); else Be(b, g) | 0;
   if ((c[g >> 2] | 0) == 11) {
    l = g + 8 | 0;
    k = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[l >> 2] << 2) | 0;
    j = c[k >> 2] | 0;
    if ((j & 63 | 0) == 22) {
     i = f + 8 | 0;
     e = c[i >> 2] | 0;
     if ((c[f >> 2] | 0) == 6 & (e & 256 | 0) == 0) if ((d[b + 46 >> 0] | 0 | 0) <= (e | 0)) {
      b = b + 48 | 0;
      a[b >> 0] = (a[b >> 0] | 0) + -1 << 24 >> 24;
     }
     c[k >> 2] = e << 23 | j & 8388607;
     c[f >> 2] = 11;
     c[i >> 2] = c[l >> 2];
     return;
    }
   }
   Ce(b, g);
   if ((c[g >> 2] | 0) == 6) {
    e = c[g + 8 >> 2] | 0;
    if (!(e & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (e | 0)) {
     l = b + 48 | 0;
     a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   i = b + 48 | 0;
   e = (d[i >> 0] | 0) + 1 | 0;
   j = (c[b >> 2] | 0) + 78 | 0;
   do if (e >>> 0 > (d[j >> 0] | 0) >>> 0) if (e >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
    m = e & 255;
    a[j >> 0] = m;
    break;
   } else m = e & 255; while (0);
   a[i >> 0] = m;
   Ee(b, g, (m & 255) + -1 | 0);
   He(b, 22, f, g, h);
   return;
  }
 case 5:
 case 4:
 case 3:
 case 2:
 case 1:
 case 0:
  {
   He(b, e + 13 | 0, f, g, h);
   return;
  }
 case 9:
 case 8:
 case 7:
  {
   xf(b, e + 17 | 0, 1, f, g);
   return;
  }
 case 12:
 case 11:
 case 10:
  {
   xf(b, e + 14 | 0, 0, f, g);
   return;
  }
 default:
  return;
 }
}

function af(e) {
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 16 | 0;
 u = w;
 r = e + 16 | 0;
 s = c[r >> 2] | 0;
 v = e + 12 | 0;
 t = c[v >> 2] | 0;
 if (c[s >> 2] | 0) if (a[s + 9 >> 0] | 0) {
  q = bf(e) | 0;
  cf(e, q, d[s + 8 >> 0] | 0);
  df(e, q);
 }
 a : do if (a[s + 10 >> 0] | 0) {
  f = t + 52 | 0;
  p = _c(c[f >> 2] | 0, 7252) | 0;
  m = t + 64 | 0;
  k = c[m >> 2] | 0;
  h = k + 24 | 0;
  l = t + 48 | 0;
  g = c[l >> 2] | 0;
  o = c[g + 20 >> 2] | 0;
  q = k + 28 | 0;
  n = c[q >> 2] | 0;
  j = k + 32 | 0;
  if ((n | 0) < (c[j >> 2] | 0)) {
   h = c[h >> 2] | 0;
   f = n;
  } else {
   g = oe(c[f >> 2] | 0, c[h >> 2] | 0, j, 16, 32767, 7258) | 0;
   c[h >> 2] = g;
   h = g;
   g = c[l >> 2] | 0;
   f = c[q >> 2] | 0;
   k = c[m >> 2] | 0;
  }
  c[h + (n << 4) >> 2] = p;
  c[h + (n << 4) + 8 >> 2] = 0;
  a[h + (n << 4) + 12 >> 0] = a[g + 46 >> 0] | 0;
  c[h + (n << 4) + 4 >> 2] = o;
  c[q >> 2] = f + 1;
  j = (c[k + 24 >> 2] | 0) + (n << 4) | 0;
  f = b[(c[g + 16 >> 2] | 0) + 6 >> 1] | 0;
  h = k + 16 | 0;
  if ((f | 0) < (c[h >> 2] | 0)) {
   g = k + 12 | 0;
   do {
    while (1) {
     if (!(ef(c[(c[g >> 2] | 0) + (f << 4) >> 2] | 0, c[j >> 2] | 0) | 0)) break;
     ff(t, f, j);
     if ((f | 0) >= (c[h >> 2] | 0)) break a;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (c[h >> 2] | 0));
  }
 } while (0);
 o = c[s >> 2] | 0;
 c[r >> 2] = o;
 p = s + 8 | 0;
 f = a[p >> 0] | 0;
 n = e + 46 | 0;
 g = a[n >> 0] | 0;
 j = g & 255;
 r = (c[(c[v >> 2] | 0) + 64 >> 2] | 0) + 4 | 0;
 c[r >> 2] = (f & 255) - j + (c[r >> 2] | 0);
 if ((f & 255) < (g & 255)) {
  h = c[e + 20 >> 2] | 0;
  m = c[e + 40 >> 2] | 0;
  k = c[(c[e >> 2] | 0) + 24 >> 2] | 0;
  l = c[c[(c[v >> 2] | 0) + 64 >> 2] >> 2] | 0;
  g = j;
  while (1) {
   r = (g & 255) + -1 << 24 >> 24;
   c[k + ((b[l + ((r & 255) + m << 1) >> 1] | 0) * 12 | 0) + 8 >> 2] = h;
   if ((r & 255) > (f & 255)) g = g + -1 | 0; else break;
  }
  a[n >> 0] = f;
 } else f = g;
 a[e + 48 >> 0] = f;
 k = c[s + 4 >> 2] | 0;
 f = c[t + 64 >> 2] | 0;
 c[f + 28 >> 2] = k << 16 >> 16;
 k = k >> 16;
 if (!o) {
  if ((k | 0) >= (c[f + 16 >> 2] | 0)) {
   i = w;
   return;
  }
  f = c[f + 12 >> 2] | 0;
  g = c[f + (k << 4) >> 2] | 0;
  h = c[g + 4 >> 2] | 0;
  if ((h & 255) << 24 >> 24 != 4) {
   s = 7361;
   r = t + 52 | 0;
   r = c[r >> 2] | 0;
   q = g + 16 | 0;
   o = f + (k << 4) + 8 | 0;
   o = c[o >> 2] | 0;
   c[u >> 2] = q;
   q = u + 4 | 0;
   c[q >> 2] = o;
   s = lc(r, s, u) | 0;
   gf(t, s);
  }
  s = h & 16711680 | 0 ? 7327 : 7361;
  r = t + 52 | 0;
  r = c[r >> 2] | 0;
  q = g + 16 | 0;
  o = f + (k << 4) + 8 | 0;
  o = c[o >> 2] | 0;
  c[u >> 2] = q;
  q = u + 4 | 0;
  c[q >> 2] = o;
  u = lc(r, s, u) | 0;
  gf(t, u);
 }
 f = c[(c[v >> 2] | 0) + 64 >> 2] | 0;
 n = f + 16 | 0;
 if ((k | 0) >= (c[n >> 2] | 0)) {
  i = w;
  return;
 }
 m = f + 12 | 0;
 do {
  g = c[m >> 2] | 0;
  l = g + (k << 4) + 12 | 0;
  h = b[p >> 1] | 0;
  f = h & 255;
  j = h & 255;
  if ((d[l >> 0] | 0) > (f & 255)) {
   if ((h & 65535) >= 256) {
    cf(e, c[g + (k << 4) + 4 >> 2] | 0, j);
    f = a[p >> 0] | 0;
   }
   a[l >> 0] = f;
  }
  k = ((jf(c[v >> 2] | 0, k) | 0) == 0 & 1) + k | 0;
 } while ((k | 0) < (c[n >> 2] | 0));
 i = w;
 return;
}

function Qc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 k = b + 8 | 0;
 f = c[k >> 2] | 0;
 if ((f | 0) == 3) {
  if ((c[e + 8 >> 2] | 0) == 3) {
   e = +h[b >> 3] <= +h[e >> 3] & 1;
   return e | 0;
  }
 } else if ((f & 15 | 0) == 4) if ((c[e + 8 >> 2] & 15 | 0) == 4) {
  i = c[b >> 2] | 0;
  j = c[e >> 2] | 0;
  g = i + 16 | 0;
  a = j + 16 | 0;
  f = am(g, a) | 0;
  a : do if (!f) {
   b = c[i + 12 >> 2] | 0;
   j = c[j + 12 >> 2] | 0;
   while (1) {
    i = Vl(g) | 0;
    f = (i | 0) == (b | 0);
    if ((i | 0) == (j | 0)) break;
    if (f) {
     f = -1;
     break a;
    }
    i = i + 1 | 0;
    g = g + i | 0;
    a = a + i | 0;
    f = am(g, a) | 0;
    if (f | 0) break a; else {
     b = b - i | 0;
     j = j - i | 0;
    }
   }
   f = f & 1 ^ 1;
  } while (0);
  e = (f | 0) < 1 & 1;
  return e | 0;
 }
 j = a + 8 | 0;
 g = c[j >> 2] | 0;
 f = Bb(a, b, 14) | 0;
 if (!(c[f + 8 >> 2] | 0)) {
  f = Bb(a, e, 14) | 0;
  if (!(c[f + 8 >> 2] | 0)) {
   g = c[j >> 2] | 0;
   f = Bb(a, e, 13) | 0;
   if (!(c[f + 8 >> 2] | 0)) {
    f = Bb(a, b, 13) | 0;
    if (!(c[f + 8 >> 2] | 0)) Pc(a, b, e); else i = f;
   } else i = f;
   l = a + 28 | 0;
   f = c[l >> 2] | 0;
   m = c[j >> 2] | 0;
   c[j >> 2] = m + 16;
   p = i;
   n = c[p + 4 >> 2] | 0;
   o = m;
   c[o >> 2] = c[p >> 2];
   c[o + 4 >> 2] = n;
   c[m + 8 >> 2] = c[i + 8 >> 2];
   m = c[j >> 2] | 0;
   c[j >> 2] = m + 16;
   o = e;
   n = c[o + 4 >> 2] | 0;
   i = m;
   c[i >> 2] = c[o >> 2];
   c[i + 4 >> 2] = n;
   c[m + 8 >> 2] = c[e + 8 >> 2];
   e = c[j >> 2] | 0;
   c[j >> 2] = e + 16;
   m = b;
   i = c[m + 4 >> 2] | 0;
   b = e;
   c[b >> 2] = c[m >> 2];
   c[b + 4 >> 2] = i;
   c[e + 8 >> 2] = c[k >> 2];
   Eb(a, (c[j >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
   f = (c[l >> 2] | 0) + (g - f) | 0;
   g = c[j >> 2] | 0;
   b = g + -16 | 0;
   c[j >> 2] = b;
   k = c[b + 4 >> 2] | 0;
   e = f;
   c[e >> 2] = c[b >> 2];
   c[e + 4 >> 2] = k;
   c[f + 8 >> 2] = c[g + -8 >> 2];
   f = c[j >> 2] | 0;
   g = c[f + 8 >> 2] | 0;
   if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
   p = f & 1 ^ 1;
   return p | 0;
  }
 }
 o = a + 28 | 0;
 n = c[o >> 2] | 0;
 p = c[j >> 2] | 0;
 c[j >> 2] = p + 16;
 i = f;
 l = c[i + 4 >> 2] | 0;
 m = p;
 c[m >> 2] = c[i >> 2];
 c[m + 4 >> 2] = l;
 c[p + 8 >> 2] = c[f + 8 >> 2];
 f = c[j >> 2] | 0;
 c[j >> 2] = f + 16;
 p = b;
 m = c[p + 4 >> 2] | 0;
 l = f;
 c[l >> 2] = c[p >> 2];
 c[l + 4 >> 2] = m;
 c[f + 8 >> 2] = c[k >> 2];
 f = c[j >> 2] | 0;
 c[j >> 2] = f + 16;
 l = e;
 m = c[l + 4 >> 2] | 0;
 p = f;
 c[p >> 2] = c[l >> 2];
 c[p + 4 >> 2] = m;
 c[f + 8 >> 2] = c[e + 8 >> 2];
 Eb(a, (c[j >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 f = (c[o >> 2] | 0) + (g - n) | 0;
 g = c[j >> 2] | 0;
 n = g + -16 | 0;
 c[j >> 2] = n;
 o = c[n + 4 >> 2] | 0;
 p = f;
 c[p >> 2] = c[n >> 2];
 c[p + 4 >> 2] = o;
 c[f + 8 >> 2] = c[g + -8 >> 2];
 f = c[j >> 2] | 0;
 g = c[f + 8 >> 2] | 0;
 if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
 p = f & 1;
 return p | 0;
}

function Cc(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 32 | 0;
 m = z + 16 | 0;
 w = z;
 v = e + 28 | 0;
 r = c[v >> 2] | 0;
 t = e + 7 | 0;
 x = a[t >> 0] | 0;
 s = x & 255;
 u = e + 16 | 0;
 y = c[u >> 2] | 0;
 if ((r | 0) < (f | 0)) {
  if ((f + 1 | 0) >>> 0 > 268435455) Kb(b);
  j = e + 12 | 0;
  k = yb(b, c[j >> 2] | 0, r << 4, f << 4) | 0;
  c[j >> 2] = k;
  j = c[v >> 2] | 0;
  if ((j | 0) < (f | 0)) do {
   c[k + (j << 4) + 8 >> 2] = 0;
   j = j + 1 | 0;
  } while ((j | 0) != (f | 0));
  c[v >> 2] = f;
 }
 if (!g) {
  c[u >> 2] = 15104;
  k = 15104;
  g = 0;
  j = 0;
 } else {
  l = Bc(g) | 0;
  if ((l | 0) > 30) Fb(b, 4815, m);
  j = 1 << l;
  if ((j + 1 | 0) >>> 0 > 134217727) Kb(b);
  k = yb(b, 0, 0, j << 5) | 0;
  c[u >> 2] = k;
  g = 0;
  do {
   c[k + (g << 5) + 28 >> 2] = 0;
   c[k + (g << 5) + 24 >> 2] = 0;
   c[k + (g << 5) + 8 >> 2] = 0;
   g = g + 1 | 0;
  } while ((g | 0) < (j | 0));
  g = l & 255;
 }
 a[t >> 0] = g;
 c[e + 20 >> 2] = k + (j << 5);
 do if ((r | 0) > (f | 0)) {
  c[v >> 2] = f;
  n = e + 12 | 0;
  p = w + 8 | 0;
  q = w + 4 | 0;
  k = f;
  while (1) {
   j = c[n >> 2] | 0;
   m = j + (k << 4) + 8 | 0;
   if (!(c[m >> 2] | 0)) j = k + 1 | 0; else {
    l = j + (k << 4) | 0;
    j = k + 1 | 0;
    a : do if (k >>> 0 < (c[v >> 2] | 0) >>> 0) {
     k = l;
     g = 28;
    } else {
     o = +(j | 0);
     h[w >> 3] = o + 1.0;
     k = (c[q >> 2] | 0) + (c[w >> 2] | 0) | 0;
     if ((k | 0) < 0) {
      g = 0 - k | 0;
      k = (k | 0) == (g | 0) ? 0 : g;
     }
     k = (c[u >> 2] | 0) + (((k | 0) % ((1 << (d[t >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
     while (1) {
      if ((c[k + 24 >> 2] | 0) == 3) if (+h[k + 16 >> 3] == o) break;
      k = c[k + 28 >> 2] | 0;
      if (!k) {
       g = 30;
       break a;
      }
     }
     g = 28;
    } while (0);
    if ((g | 0) == 28) {
     g = 0;
     if ((k | 0) == 15088) {
      o = +(j | 0);
      g = 30;
     }
    }
    if ((g | 0) == 30) {
     h[w >> 3] = o;
     c[p >> 2] = 3;
     k = Ac(b, e, w) | 0;
    }
    A = l;
    g = c[A + 4 >> 2] | 0;
    l = k;
    c[l >> 2] = c[A >> 2];
    c[l + 4 >> 2] = g;
    c[k + 8 >> 2] = c[m >> 2];
   }
   if ((j | 0) == (r | 0)) break; else k = j;
  }
  if ((f + 1 | 0) >>> 0 > 268435455) Kb(b); else {
   A = e + 12 | 0;
   c[A >> 2] = yb(b, c[A >> 2] | 0, r << 4, f << 4) | 0;
   break;
  }
 } while (0);
 n = 1 << s;
 if (x << 24 >> 24 != 31) {
  g = n;
  do {
   l = g;
   g = g + -1 | 0;
   m = y + (g << 5) + 8 | 0;
   if (c[m >> 2] | 0) {
    k = y + (g << 5) + 16 | 0;
    j = vc(e, k) | 0;
    if ((j | 0) == 15088) j = Ac(b, e, k) | 0;
    w = y + (g << 5) | 0;
    x = c[w + 4 >> 2] | 0;
    A = j;
    c[A >> 2] = c[w >> 2];
    c[A + 4 >> 2] = x;
    c[j + 8 >> 2] = c[m >> 2];
   }
  } while ((l | 0) > 1);
 }
 if ((y | 0) == 15104) {
  i = z;
  return;
 }
 yb(b, y, n << 5, 0) | 0;
 i = z;
 return;
}

function Ic(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 16 | 0;
 r = s;
 if (dn(b, 4847) | 0) {
  b = 0;
  i = s;
  return b | 0;
 }
 a : do if (!(dn(b, 4850) | 0)) {
  j = +fn(b, r);
  g = c[r >> 2] | 0;
 } else {
  g = b;
  c[r >> 2] = g;
  k = a[b >> 0] | 0;
  if (!(a[3999 + ((k & 255) + 1) >> 0] & 8)) l = b; else {
   g = b;
   do {
    g = g + 1 | 0;
    k = a[g >> 0] | 0;
   } while ((a[3999 + ((k & 255) + 1) >> 0] & 8) != 0);
   l = g;
  }
  switch (k << 24 >> 24) {
  case 45:
   {
    p = 1;
    g = l + 1 | 0;
    break;
   }
  case 43:
   {
    p = 0;
    g = l + 1 | 0;
    break;
   }
  default:
   p = 0;
  }
  b : do if ((a[g >> 0] | 0) == 48) {
   switch (a[g + 1 >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break b;
   }
   g = g + 2 | 0;
   k = a[g >> 0] | 0;
   m = k & 255;
   l = a[3999 + (m + 1) >> 0] | 0;
   if (!(l & 16)) {
    n = 0;
    j = 0.0;
   } else {
    n = 0;
    j = 0.0;
    do {
     j = j * 16.0 + +(((l & 2) == 0 ? (m | 32) + -87 | 0 : m + -48 | 0) | 0);
     n = n + 1 | 0;
     g = g + 1 | 0;
     k = a[g >> 0] | 0;
     m = k & 255;
     l = a[3999 + (m + 1) >> 0] | 0;
    } while ((l & 16) != 0);
   }
   if (k << 24 >> 24 == 46) {
    g = g + 1 | 0;
    m = d[g >> 0] | 0;
    k = a[3999 + (m + 1) >> 0] | 0;
    if (!(k & 16)) l = 0; else {
     l = 0;
     do {
      j = j * 16.0 + +(((k & 2) == 0 ? (m | 32) + -87 | 0 : m + -48 | 0) | 0);
      l = l + 1 | 0;
      g = g + 1 | 0;
      m = d[g >> 0] | 0;
      k = a[3999 + (m + 1) >> 0] | 0;
     } while ((k & 16) != 0);
    }
   } else l = 0;
   m = g;
   if (l | n | 0) {
    k = _(l, -4) | 0;
    c[r >> 2] = m;
    switch (a[g >> 0] | 0) {
    case 80:
    case 112:
     {
      l = g + 1 | 0;
      switch (a[l >> 0] | 0) {
      case 45:
       {
        o = 1;
        n = g + 2 | 0;
        break;
       }
      case 43:
       {
        o = 0;
        n = g + 2 | 0;
        break;
       }
      default:
       {
        o = 0;
        n = l;
       }
      }
      l = a[n >> 0] | 0;
      if (a[3999 + ((l & 255) + 1) >> 0] & 2) {
       m = l;
       l = 0;
       g = n;
       do {
        g = g + 1 | 0;
        l = (m << 24 >> 24) + -48 + (l * 10 | 0) | 0;
        m = a[g >> 0] | 0;
       } while ((a[3999 + ((m & 255) + 1) >> 0] & 2) != 0);
       k = ((o | 0) == 0 ? l : 0 - l | 0) + k | 0;
       q = 24;
      }
      break;
     }
    default:
     {
      g = m;
      q = 24;
     }
    }
    if ((q | 0) == 24) c[r >> 2] = g;
    j = +rl((p | 0) == 0 ? j : -j, k);
    break a;
   }
  } while (0);
  h[f >> 3] = 0.0;
  b = 0;
  i = s;
  return b | 0;
 } while (0);
 h[f >> 3] = j;
 if ((g | 0) == (b | 0)) {
  b = 0;
  i = s;
  return b | 0;
 }
 if (a[3999 + ((d[g >> 0] | 0) + 1) >> 0] & 8) {
  do g = g + 1 | 0; while ((a[3999 + ((d[g >> 0] | 0) + 1) >> 0] & 8) != 0);
  c[r >> 2] = g;
 }
 b = (g | 0) == (b + e | 0) & 1;
 i = s;
 return b | 0;
}

function Nc(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0.0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 q = i;
 i = i + 16 | 0;
 p = q;
 k = a + 28 | 0;
 b = c[k >> 2] | 0;
 if (b | 0) {
  e = c[a + 12 >> 2] | 0;
  if (!(c[e + (b + -1 << 4) + 8 >> 2] | 0)) {
   if (b >>> 0 > 1) a = 0; else {
    p = 0;
    i = q;
    return p | 0;
   }
   do {
    p = (a + b | 0) >>> 1;
    o = (c[e + (p + -1 << 4) + 8 >> 2] | 0) == 0;
    b = o ? p : b;
    a = o ? a : p;
   } while ((b - a | 0) >>> 0 > 1);
   i = q;
   return a | 0;
  }
 }
 o = a + 16 | 0;
 if ((c[o >> 2] | 0) == 15104) {
  p = b;
  i = q;
  return p | 0;
 }
 n = a + 12 | 0;
 m = a + 7 | 0;
 g = p + 4 | 0;
 a = b;
 j = b + 1 | 0;
 while (1) {
  e = j + -1 | 0;
  a : do if (e >>> 0 < b >>> 0) e = (c[n >> 2] | 0) + (e << 4) | 0; else {
   f = +(j | 0);
   h[p >> 3] = f + 1.0;
   e = (c[g >> 2] | 0) + (c[p >> 2] | 0) | 0;
   if ((e | 0) < 0) {
    r = 0 - e | 0;
    e = (e | 0) == (r | 0) ? 0 : r;
   }
   e = (c[o >> 2] | 0) + (((e | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
   while (1) {
    if ((c[e + 24 >> 2] | 0) == 3) if (+h[e + 16 >> 3] == f) break;
    e = c[e + 28 >> 2] | 0;
    if (!e) {
     e = 15088;
     break a;
    }
   }
  } while (0);
  if (!(c[e + 8 >> 2] | 0)) {
   b = j;
   break;
  }
  a = j << 1;
  if (a >>> 0 > 2147483645) {
   l = 20;
   break;
  } else {
   r = j;
   j = a;
   a = r;
  }
 }
 if ((l | 0) == 20) {
  e = c[k >> 2] | 0;
  j = p + 4 | 0;
  g = 1;
  while (1) {
   a = g + -1 | 0;
   b : do if (a >>> 0 < e >>> 0) b = (c[n >> 2] | 0) + (a << 4) | 0; else {
    f = +(g | 0);
    h[p >> 3] = f + 1.0;
    b = (c[j >> 2] | 0) + (c[p >> 2] | 0) | 0;
    if ((b | 0) < 0) {
     r = 0 - b | 0;
     b = (b | 0) == (r | 0) ? 0 : r;
    }
    b = (c[o >> 2] | 0) + (((b | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
    while (1) {
     if ((c[b + 24 >> 2] | 0) == 3) if (+h[b + 16 >> 3] == f) break;
     b = c[b + 28 >> 2] | 0;
     if (!b) {
      b = 15088;
      break b;
     }
    }
   } while (0);
   if (!(c[b + 8 >> 2] | 0)) break; else g = g + 1 | 0;
  }
  i = q;
  return a | 0;
 }
 if ((b - a | 0) >>> 0 <= 1) {
  r = a;
  i = q;
  return r | 0;
 }
 j = c[k >> 2] | 0;
 k = p + 4 | 0;
 g = b;
 do {
  e = (g + a | 0) >>> 1;
  b = e + -1 | 0;
  c : do if (b >>> 0 < j >>> 0) b = (c[n >> 2] | 0) + (b << 4) | 0; else {
   f = +(e | 0);
   h[p >> 3] = f + 1.0;
   b = (c[k >> 2] | 0) + (c[p >> 2] | 0) | 0;
   if ((b | 0) < 0) {
    r = 0 - b | 0;
    b = (b | 0) == (r | 0) ? 0 : r;
   }
   b = (c[o >> 2] | 0) + (((b | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
   while (1) {
    if ((c[b + 24 >> 2] | 0) == 3) if (+h[b + 16 >> 3] == f) break;
    b = c[b + 28 >> 2] | 0;
    if (!b) {
     b = 15088;
     break c;
    }
   }
  } while (0);
  r = (c[b + 8 >> 2] | 0) == 0;
  g = r ? e : g;
  a = r ? a : e;
 } while ((g - a | 0) >>> 0 > 1);
 i = q;
 return a | 0;
}

function Gb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0.0;
 v = i;
 i = i + 48 | 0;
 r = v + 8 | 0;
 p = v;
 n = v + 16 | 0;
 k = qm(e, 37) | 0;
 o = b + 24 | 0;
 u = b + 8 | 0;
 j = c[u >> 2] | 0;
 l = (c[o >> 2] | 0) - j | 0;
 a : do if (!k) {
  g = j;
  s = e;
  t = 0;
  q = l;
 } else {
  m = 0;
  b : while (1) {
   if ((l | 0) < 48) {
    Hb(b, 2);
    j = c[u >> 2] | 0;
   }
   c[u >> 2] = j + 16;
   e = Lb(b, e, k - e | 0) | 0;
   c[j >> 2] = e;
   c[j + 8 >> 2] = d[e + 4 >> 0] | 64;
   j = a[k + 1 >> 0] | 0;
   switch (j | 0) {
   case 115:
    {
     l = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     j = c[l >> 2] | 0;
     c[f >> 2] = l + 4;
     j = (j | 0) == 0 ? 14737 : j;
     l = Vl(j) | 0;
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     l = Lb(b, j, l) | 0;
     c[e >> 2] = l;
     c[e + 8 >> 2] = d[l + 4 >> 0] | 64;
     break;
    }
   case 99:
    {
     l = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     e = c[l >> 2] | 0;
     c[f >> 2] = l + 4;
     a[n >> 0] = e;
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     l = Lb(b, n, 1) | 0;
     c[e >> 2] = l;
     c[e + 8 >> 2] = d[l + 4 >> 0] | 64;
     break;
    }
   case 100:
    {
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     j = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     l = c[j >> 2] | 0;
     c[f >> 2] = j + 4;
     h[e >> 3] = +(l | 0);
     c[e + 8 >> 2] = 3;
     break;
    }
   case 102:
    {
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     l = (c[f >> 2] | 0) + (8 - 1) & ~(8 - 1);
     w = +h[l >> 3];
     c[f >> 2] = l + 8;
     h[e >> 3] = w;
     c[e + 8 >> 2] = 3;
     break;
    }
   case 112:
    {
     e = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     l = c[e >> 2] | 0;
     c[f >> 2] = e + 4;
     c[p >> 2] = l;
     l = lm(n, 4312, p) | 0;
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     l = Lb(b, n, l) | 0;
     c[e >> 2] = l;
     c[e + 8 >> 2] = d[l + 4 >> 0] | 64;
     break;
    }
   case 37:
    {
     e = c[u >> 2] | 0;
     c[u >> 2] = e + 16;
     l = Lb(b, 4315, 1) | 0;
     c[e >> 2] = l;
     c[e + 8 >> 2] = d[l + 4 >> 0] | 64;
     break;
    }
   default:
    break b;
   }
   m = m + 2 | 0;
   e = k + 2 | 0;
   k = qm(e, 37) | 0;
   j = c[u >> 2] | 0;
   l = (c[o >> 2] | 0) - j | 0;
   if (!k) {
    g = j;
    s = e;
    t = m;
    q = l;
    break a;
   }
  }
  c[r >> 2] = j;
  Fb(b, 4317, r);
 } while (0);
 if ((q | 0) < 32) {
  Hb(b, 1);
  g = c[u >> 2] | 0;
 }
 r = Vl(s) | 0;
 c[u >> 2] = g + 16;
 s = Lb(b, s, r) | 0;
 c[g >> 2] = s;
 c[g + 8 >> 2] = d[s + 4 >> 0] | 64;
 if ((t | 0) <= 0) {
  u = c[u >> 2] | 0;
  u = u + -16 | 0;
  u = c[u >> 2] | 0;
  u = u + 16 | 0;
  i = v;
  return u | 0;
 }
 ec(b, t | 1);
 u = c[u >> 2] | 0;
 u = u + -16 | 0;
 u = c[u >> 2] | 0;
 u = u + 16 | 0;
 i = v;
 return u | 0;
}

function Al(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 h[k >> 3] = a;
 l = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = Cn(l | 0, m | 0, 52) | 0;
 e = e & 2047;
 i = Cn(n | 0, o | 0, 52) | 0;
 i = i & 2047;
 p = m & -2147483648;
 j = An(n | 0, o | 0, 1) | 0;
 g = C;
 a : do if ((j | 0) == 0 & (g | 0) == 0) q = 3; else {
  r = +N(+b);
  h[k >> 3] = r;
  f = c[k + 4 >> 2] | 0;
  if (f >>> 0 > 2146435072 | (f | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0 | (e | 0) == 2047) q = 3; else {
   d = An(l | 0, m | 0, 1) | 0;
   f = C;
   if (!(f >>> 0 > g >>> 0 | (f | 0) == (g | 0) & d >>> 0 > j >>> 0)) return +((d | 0) == (j | 0) & (f | 0) == (g | 0) ? a * 0.0 : a);
   if (!e) {
    d = An(l | 0, m | 0, 12) | 0;
    e = C;
    if ((e | 0) > -1 | (e | 0) == -1 & d >>> 0 > 4294967295) {
     f = e;
     e = 0;
     do {
      e = e + -1 | 0;
      d = An(d | 0, f | 0, 1) | 0;
      f = C;
     } while ((f | 0) > -1 | (f | 0) == -1 & d >>> 0 > 4294967295);
    } else e = 0;
    l = An(l | 0, m | 0, 1 - e | 0) | 0;
    f = C;
   } else f = m & 1048575 | 1048576;
   if (!i) {
    d = An(n | 0, o | 0, 12) | 0;
    g = C;
    if ((g | 0) > -1 | (g | 0) == -1 & d >>> 0 > 4294967295) {
     i = 0;
     do {
      i = i + -1 | 0;
      d = An(d | 0, g | 0, 1) | 0;
      g = C;
     } while ((g | 0) > -1 | (g | 0) == -1 & d >>> 0 > 4294967295);
    } else i = 0;
    n = An(n | 0, o | 0, 1 - i | 0) | 0;
    m = C;
   } else m = o & 1048575 | 1048576;
   d = xn(l | 0, f | 0, n | 0, m | 0) | 0;
   j = C;
   g = (j | 0) > -1 | (j | 0) == -1 & d >>> 0 > 4294967295;
   b : do if ((e | 0) > (i | 0)) {
    while (1) {
     if (g) if ((l | 0) == (n | 0) & (f | 0) == (m | 0)) break; else f = j; else d = l;
     l = An(d | 0, f | 0, 1) | 0;
     f = C;
     e = e + -1 | 0;
     d = xn(l | 0, f | 0, n | 0, m | 0) | 0;
     j = C;
     g = (j | 0) > -1 | (j | 0) == -1 & d >>> 0 > 4294967295;
     if ((e | 0) <= (i | 0)) {
      i = l;
      break b;
     }
    }
    b = a * 0.0;
    break a;
   } else i = l; while (0);
   if (g) if ((i | 0) == (n | 0) & (f | 0) == (m | 0)) {
    b = a * 0.0;
    break;
   } else f = j; else d = i;
   if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
    d = An(d | 0, f | 0, 1) | 0;
    f = C;
    e = e + -1 | 0;
   } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
   if ((e | 0) > 0) {
    o = yn(d | 0, f | 0, 0, -1048576) | 0;
    d = C;
    e = An(e | 0, 0, 52) | 0;
    d = d | C;
    e = o | e;
   } else {
    e = Cn(d | 0, f | 0, 1 - e | 0) | 0;
    d = C;
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

function Bh(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 if (!g) g = 1; else g = (e[g + 38 >> 1] | 0) + 1 & 65535;
 t = f + 38 | 0;
 b[t >> 1] = g;
 s = f + 36 | 0;
 b[s >> 1] = 0;
 r = f + 8 | 0;
 g = Yc(f, 6, (c[r >> 2] | 0) + (0 - h << 4) | 0) | 0;
 if ((g | 0) == -1) {
  u = 2;
  b[s >> 1] = 1;
  f = b[t >> 1] | 0;
  f = f + -1 << 16 >> 16;
  b[t >> 1] = f;
  return u | 0;
 }
 if (g >>> 0 <= 1) {
  u = g;
  b[s >> 1] = 1;
  f = b[t >> 1] | 0;
  f = f + -1 << 16 >> 16;
  b[t >> 1] = f;
  return u | 0;
 }
 p = f + 16 | 0;
 n = f + 28 | 0;
 l = f + 41 | 0;
 m = f + 68 | 0;
 o = f + 32 | 0;
 q = f + 12 | 0;
 a : while (1) {
  h = c[p >> 2] | 0;
  if (!h) break;
  while (1) {
   i = h + 18 | 0;
   if (a[i >> 0] & 16) break;
   h = c[h + 8 >> 2] | 0;
   if (!h) break a;
  }
  j = (c[n >> 2] | 0) + (c[h + 20 >> 2] | 0) | 0;
  $b(f, j);
  switch (g | 0) {
  case 4:
   {
    k = c[(c[q >> 2] | 0) + 180 >> 2] | 0;
    c[j >> 2] = k;
    c[j + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
    break;
   }
  case 6:
   {
    k = Lb(f, 5046, 23) | 0;
    c[j >> 2] = k;
    c[j + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
    break;
   }
  default:
   {
    k = c[r >> 2] | 0;
    x = k + -16 | 0;
    w = c[x + 4 >> 2] | 0;
    v = j;
    c[v >> 2] = c[x >> 2];
    c[v + 4 >> 2] = w;
    c[j + 8 >> 2] = c[k + -8 >> 2];
   }
  }
  j = j + 16 | 0;
  c[r >> 2] = j;
  c[p >> 2] = h;
  a[l >> 0] = a[h + 36 >> 0] | 0;
  b[s >> 1] = 0;
  k = h;
  do {
   x = c[k + 4 >> 2] | 0;
   j = j >>> 0 < x >>> 0 ? x : j;
   k = c[k + 8 >> 2] | 0;
  } while ((k | 0) != 0);
  x = j - (c[n >> 2] | 0) | 0;
  j = x >> 4;
  j = j + 11 + ((j + 1 | 0) / 8 | 0) | 0;
  j = (j | 0) > 1e6 ? 1e6 : j;
  if ((x | 0) <= 15999984) if ((j | 0) < (c[o >> 2] | 0)) Jb(f, j);
  c[m >> 2] = c[h + 32 >> 2];
  a[i >> 0] = d[i >> 0] | 0 | 32;
  a[h + 37 >> 0] = g;
  g = Yc(f, 7, 0) | 0;
  if (g >>> 0 <= 1) {
   u = 24;
   break;
  }
 }
 if ((u | 0) == 24) {
  b[s >> 1] = 1;
  x = b[t >> 1] | 0;
  x = x + -1 << 16 >> 16;
  b[t >> 1] = x;
  return g | 0;
 }
 a[f + 6 >> 0] = g;
 h = c[r >> 2] | 0;
 switch (g | 0) {
 case 4:
  {
   x = c[(c[q >> 2] | 0) + 180 >> 2] | 0;
   c[h >> 2] = x;
   c[h + 8 >> 2] = d[x + 4 >> 0] | 0 | 64;
   break;
  }
 case 6:
  {
   x = Lb(f, 5046, 23) | 0;
   c[h >> 2] = x;
   c[h + 8 >> 2] = d[x + 4 >> 0] | 0 | 64;
   break;
  }
 default:
  {
   v = h + -16 | 0;
   w = c[v + 4 >> 2] | 0;
   x = h;
   c[x >> 2] = c[v >> 2];
   c[x + 4 >> 2] = w;
   c[h + 8 >> 2] = c[h + -8 >> 2];
  }
 }
 x = h + 16 | 0;
 c[r >> 2] = x;
 c[(c[p >> 2] | 0) + 4 >> 2] = x;
 x = g;
 b[s >> 1] = 1;
 w = b[t >> 1] | 0;
 w = w + -1 << 16 >> 16;
 b[t >> 1] = w;
 return x | 0;
}

function gj(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 288 | 0;
 h = r + 284 | 0;
 n = r + 280 | 0;
 o = r;
 q = Fg(b, 1, h) | 0;
 j = Fg(b, 2, n) | 0;
 e = Vd(b, 3, 1) | 0;
 f = c[h >> 2] | 0;
 if ((e | 0) > -1) p = 4; else if (f >>> 0 < (0 - e | 0) >>> 0) g = 1; else {
  e = e + 1 + f | 0;
  p = 4;
 }
 if ((p | 0) == 4) if (!e) g = 1; else if (e >>> 0 > (f + 1 | 0) >>> 0) {
  Md(b);
  q = 1;
  i = r;
  return q | 0;
 } else g = e;
 m = (d | 0) != 0;
 a : do if (m) {
  l = (Ed(b, 4) | 0) == 0;
  d = c[n >> 2] | 0;
  if (l) {
   f = 0;
   do {
    e = j + f | 0;
    if (dn(e, 10310) | 0) {
     p = 19;
     break a;
    }
    f = f + 1 + (Vl(e) | 0) | 0;
   } while (f >>> 0 <= d >>> 0);
  }
  e = q + g + -1 | 0;
  f = (c[h >> 2] | 0) - g + 1 | 0;
  b : do if (d) {
   if (d >>> 0 > f >>> 0) break a;
   l = d + -1 | 0;
   if ((f | 0) == (l | 0)) break a;
   k = a[j >> 0] | 0;
   j = j + 1 | 0;
   h = f - l | 0;
   while (1) {
    f = Pl(e, k, h) | 0;
    if (!f) break a;
    d = e;
    e = f + 1 | 0;
    if (!(fm(e, j, l) | 0)) {
     e = f;
     break b;
    }
    g = e;
    f = d + h | 0;
    if ((f | 0) == (g | 0)) break a; else h = f - g | 0;
   }
  } while (0);
  q = e - q | 0;
  Wd(b, q + 1 | 0);
  Wd(b, q + (c[n >> 2] | 0) | 0);
  q = 2;
  i = r;
  return q | 0;
 } else p = 19; while (0);
 do if ((p | 0) == 19) {
  e = q + g + -1 | 0;
  d = (a[j >> 0] | 0) == 94;
  if (d) {
   f = (c[n >> 2] | 0) + -1 | 0;
   c[n >> 2] = f;
   j = j + 1 | 0;
  } else f = c[n >> 2] | 0;
  l = o + 16 | 0;
  c[l >> 2] = b;
  c[o >> 2] = 200;
  c[o + 4 >> 2] = q;
  k = o + 8 | 0;
  c[k >> 2] = q + (c[h >> 2] | 0);
  c[o + 12 >> 2] = j + f;
  h = o + 20 | 0;
  c[h >> 2] = 0;
  g = hj(o, e, j) | 0;
  f = (g | 0) == 0;
  c : do if (d) if (f) p = 33; else d = e; else if (f) while (1) {
   if (e >>> 0 >= (c[k >> 2] | 0) >>> 0) {
    p = 33;
    break c;
   }
   e = e + 1 | 0;
   c[h >> 2] = 0;
   f = hj(o, e, j) | 0;
   if (f) {
    g = f;
    d = e;
    break;
   }
  } else d = e; while (0);
  if ((p | 0) == 33) break;
  if (m) {
   f = q;
   Wd(b, 1 - f + d | 0);
   Wd(b, g - f | 0);
   f = c[h >> 2] | 0;
   gg(c[l >> 2] | 0, f, 10341);
   if ((f | 0) > 0) {
    e = 0;
    do {
     jj(o, e, 0, 0);
     e = e + 1 | 0;
    } while ((e | 0) != (f | 0));
   }
   e = f + 2 | 0;
  } else {
   e = c[h >> 2] | 0;
   e = (e | 0) == 0 ? 1 : e;
   gg(c[l >> 2] | 0, e, 10341);
   if ((e | 0) > 0) {
    f = 0;
    do {
     jj(o, f, d, g);
     f = f + 1 | 0;
    } while ((f | 0) != (e | 0));
   }
  }
  q = e;
  i = r;
  return q | 0;
 } while (0);
 Md(b);
 q = 1;
 i = r;
 return q | 0;
}

function Wk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 32 | 0;
 p = q + 24 | 0;
 o = q + 16 | 0;
 m = q + 8 | 0;
 l = q;
 k = q + 40 | 0;
 j = q + 36 | 0;
 h = c[356] | 0;
 c[356] = 0;
 wd(a, 0);
 if (!(Xk(a, 1) | 0)) {
  wd(a, 0);
  p = c[778] | 0;
  Sm(10, p) | 0;
  um(p) | 0;
  c[356] = h;
  i = q;
  return;
 }
 g = c[749] | 0;
 a : while (1) {
  b = dd(a, 1, j) | 0;
  b = dg(a, b, c[j >> 2] | 0, 12281, 0) | 0;
  b : do if ((b | 0) == 3) {
   while (1) {
    d = dd(a, -1, k) | 0;
    b = c[k >> 2] | 0;
    if (b >>> 0 <= 4) break;
    if (Wl(d + b + -5 | 0, 12288) | 0) break;
    wd(a, -2);
    if (!(Xk(a, 0) | 0)) {
     f = 8;
     break a;
    }
    qd(a, 12294, 1) | 0;
    Rd(a, -2);
    sd(a, 3);
    b = dd(a, 1, j) | 0;
    b = dg(a, b, c[j >> 2] | 0, 12281, 0) | 0;
    if ((b | 0) != 3) {
     f = 10;
     break b;
    }
   }
   Qd(a, 1);
   b = 3;
   f = 11;
  } else f = 10; while (0);
  c : do if ((f | 0) == 10) {
   Qd(a, 1);
   switch (b | 0) {
   case -1:
    {
     f = 24;
     break a;
    }
   case 0:
    break;
   default:
    {
     f = 11;
     break c;
    }
   }
   e = Kd(a) | 0;
   _f(a, 144, 0);
   Rd(a, e);
   c[3786] = a;
   oa(2, 1) | 0;
   f = pg(a, 0, -1, e, 0, 0) | 0;
   oa(2, 0) | 0;
   Qd(a, e);
   if (!f) f = 18; else {
    e = 0;
    f = 13;
   }
  } while (0);
  if ((f | 0) == 11) {
   e = (b | 0) == 0;
   f = 13;
  }
  do if ((f | 0) == 13) {
   f = 0;
   if (!(Gd(a, -1) | 0)) if (e) {
    f = 18;
    break;
   } else break;
   d = dd(a, -1, 0) | 0;
   b = c[356] | 0;
   if (b | 0) {
    c[l >> 2] = b;
    Im(g, 5396, l) | 0;
    um(g) | 0;
   }
   c[m >> 2] = (d | 0) == 0 ? 12154 : d;
   Im(g, 11968, m) | 0;
   um(g) | 0;
   wd(a, -2);
   xd(a, 2, 0) | 0;
   if (e) f = 18;
  } while (0);
  if ((f | 0) == 18) if ((Kd(a) | 0) > 0) {
   gg(a, 20, 12296);
   sg(a, 12322);
   Rd(a, 1);
   if (pg(a, (Kd(a) | 0) + -1 | 0, 0, 0, 0, 0) | 0) {
    b = c[356] | 0;
    c[o >> 2] = dd(a, -1, 0) | 0;
    d = pd(a, 12328, o) | 0;
    if (b | 0) {
     c[p >> 2] = b;
     Im(g, 5396, p) | 0;
     um(g) | 0;
    }
    c[n >> 2] = d;
    Im(g, 11968, n) | 0;
    um(g) | 0;
   }
  }
  wd(a, 0);
  if (!(Xk(a, 1) | 0)) {
   f = 24;
   break;
  }
 }
 if ((f | 0) == 8) {
  wd(a, 0);
  p = c[778] | 0;
  Sm(10, p) | 0;
  um(p) | 0;
  c[356] = h;
  i = q;
  return;
 } else if ((f | 0) == 24) {
  wd(a, 0);
  p = c[778] | 0;
  Sm(10, p) | 0;
  um(p) | 0;
  c[356] = h;
  i = q;
  return;
 }
}

function ye(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 48 | 0;
 f = r + 24 | 0;
 g = r;
 m = d + 48 | 0;
 p = c[m >> 2] | 0;
 pe(d);
 ze(d, g, 0) | 0;
 q = d + 16 | 0;
 if ((c[q >> 2] | 0) != 275) Ne(d, 275);
 pe(d);
 a : do switch (c[q >> 2] | 0) {
 case 258:
 case 266:
  {
   vf(c[m >> 2] | 0, g);
   a[f + 10 >> 0] = 0;
   a[f + 8 >> 0] = a[p + 46 >> 0] | 0;
   h = c[(c[p + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[f + 4 >> 1] = c[h + 28 >> 2];
   b[f + 6 >> 1] = c[h + 16 >> 2];
   a[f + 9 >> 0] = 0;
   h = p + 16 | 0;
   c[f >> 2] = c[h >> 2];
   c[h >> 2] = f;
   h = c[g + 16 >> 2] | 0;
   j = c[d + 4 >> 2] | 0;
   l = (c[q >> 2] | 0) == 266;
   pe(d);
   do if (l) if ((c[q >> 2] | 0) == 288) {
    n = c[d + 24 >> 2] | 0;
    pe(d);
    break;
   } else Ne(d, 288); else n = _c(c[d + 52 >> 2] | 0, 7252) | 0; while (0);
   g = c[d + 64 >> 2] | 0;
   f = g + 12 | 0;
   l = g + 16 | 0;
   k = c[l >> 2] | 0;
   g = g + 20 | 0;
   if ((k | 0) < (c[g >> 2] | 0)) {
    f = c[f >> 2] | 0;
    g = k;
   } else {
    g = oe(c[d + 52 >> 2] | 0, c[f >> 2] | 0, g, 16, 32767, 7258) | 0;
    c[f >> 2] = g;
    f = g;
    g = c[l >> 2] | 0;
   }
   c[f + (k << 4) >> 2] = n;
   c[f + (k << 4) + 8 >> 2] = j;
   a[f + (k << 4) + 12 >> 0] = a[(c[m >> 2] | 0) + 46 >> 0] | 0;
   c[f + (k << 4) + 4 >> 2] = h;
   c[l >> 2] = g + 1;
   jf(d, k) | 0;
   b : while (1) {
    switch (c[q >> 2] | 0) {
    case 286:
    case 262:
    case 261:
    case 260:
     break b;
    case 285:
    case 59:
     break;
    default:
     {
      o = 16;
      break b;
     }
    }
    xe(d);
   }
   if ((o | 0) == 16) {
    f = bf(p) | 0;
    break a;
   }
   af(p);
   i = r;
   return;
  }
 default:
  {
   tf(c[m >> 2] | 0, g);
   a[f + 10 >> 0] = 0;
   a[f + 8 >> 0] = a[p + 46 >> 0] | 0;
   o = c[(c[p + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[f + 4 >> 1] = c[o + 28 >> 2];
   b[f + 6 >> 1] = c[o + 16 >> 2];
   a[f + 9 >> 0] = 0;
   o = p + 16 | 0;
   c[f >> 2] = c[o >> 2];
   c[o >> 2] = f;
   f = c[g + 20 >> 2] | 0;
  }
 } while (0);
 c : do {
  g = c[q >> 2] | 0;
  switch (g | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break c;
  default:
   {}
  }
  xe(d);
 } while ((g | 0) != 274);
 af(p);
 if ((c[q >> 2] & -2 | 0) == 260) yf(p, e, bf(p) | 0);
 df(p, f);
 i = r;
 return;
}

function tn(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0.0;
 h[k >> 3] = b;
 g = c[k >> 2] | 0;
 d = c[k + 4 >> 2] | 0;
 n = +N(+b);
 h[k >> 3] = n;
 m = c[k + 4 >> 2] | 0;
 if (!(m >>> 0 > 2146435072 | (m | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) {
  h[k >> 3] = a;
  j = c[k >> 2] | 0;
  e = c[k + 4 >> 2] | 0;
  n = +N(+a);
  h[k >> 3] = n;
  m = c[k + 4 >> 2] | 0;
  if (!(m >>> 0 > 2146435072 | (m | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) {
   if (!(d + -1072693248 | g)) {
    n = +sn(a);
    return +n;
   }
   i = Cn(j | 0, e | 0, 63) | 0;
   l = Cn(g | 0, d | 0, 62) | 0;
   l = l & 2;
   m = l | i;
   f = d & 2147483647;
   d = e & 2147483647;
   if (!(d | j)) switch (m | 0) {
   case 2:
    {
     n = 3.141592653589793;
     return +n;
    }
   case 3:
    {
     n = -3.141592653589793;
     return +n;
    }
   case 1:
   case 0:
    {
     n = a;
     return +n;
    }
   default:
    {}
   }
   if (!(f | g)) {
    n = i | 0 ? -1.5707963267948966 : 1.5707963267948966;
    return +n;
   }
   if ((f | 0) != 2146435072) {
    if ((d | 0) == 2146435072 | (f + 67108864 | 0) >>> 0 < d >>> 0) {
     n = i | 0 ? -1.5707963267948966 : 1.5707963267948966;
     return +n;
    }
    if ((l | 0) != 0 & (d + 67108864 | 0) >>> 0 < f >>> 0) b = 0.0; else b = +sn(+N(+(a / b)));
    switch (m | 0) {
    case 1:
     {
      n = -b;
      return +n;
     }
    case 2:
     {
      n = 3.141592653589793 - (b + -1.2246467991473532e-16);
      return +n;
     }
    case 0:
     {
      n = b;
      return +n;
     }
    default:
     {
      n = b + -1.2246467991473532e-16 + -3.141592653589793;
      return +n;
     }
    }
   }
   if ((d | 0) == 2146435072) switch (m | 0) {
   case 1:
    {
     n = -.7853981633974483;
     return +n;
    }
   case 2:
    {
     n = 2.356194490192345;
     return +n;
    }
   case 3:
    {
     n = -2.356194490192345;
     return +n;
    }
   case 0:
    {
     n = .7853981633974483;
     return +n;
    }
   default:
    {}
   } else switch (m | 0) {
   case 1:
    {
     n = -0.0;
     return +n;
    }
   case 2:
    {
     n = 3.141592653589793;
     return +n;
    }
   case 3:
    {
     n = -3.141592653589793;
     return +n;
    }
   case 0:
    {
     n = 0.0;
     return +n;
    }
   default:
    {}
   }
  }
 }
 n = a + b;
 return +n;
}

function ah(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 1072 | 0;
 p = v + 16 | 0;
 o = v + 8 | 0;
 n = v;
 u = v + 24 | 0;
 m = Vl(d) | 0;
 r = u + 12 | 0;
 c[r >> 2] = a;
 t = u + 16 | 0;
 c[u >> 2] = t;
 s = u + 8 | 0;
 c[s >> 2] = 0;
 q = u + 4 | 0;
 c[q >> 2] = 1024;
 h = Jm(b, d) | 0;
 if (!h) {
  f = 0;
  g = 1024;
  j = a;
 } else {
  f = 0;
  g = 1024;
  j = a;
  do {
   l = h - b | 0;
   if ((g - f | 0) >>> 0 < l >>> 0) {
    k = g << 1;
    k = (k - f | 0) >>> 0 < l >>> 0 ? f + l | 0 : k;
    if (k >>> 0 < f >>> 0 | (k - f | 0) >>> 0 < l >>> 0) md(j, 8242, n) | 0;
    g = bh(j, k) | 0;
    En(g | 0, c[u >> 2] | 0, c[s >> 2] | 0) | 0;
    if ((c[u >> 2] | 0) != (t | 0)) Qd(j, -2);
    c[u >> 2] = g;
    c[q >> 2] = k;
    f = c[s >> 2] | 0;
   } else g = c[u >> 2] | 0;
   En(g + f | 0, b | 0, l | 0) | 0;
   f = (c[s >> 2] | 0) + l | 0;
   c[s >> 2] = f;
   b = Vl(e) | 0;
   k = c[r >> 2] | 0;
   g = c[q >> 2] | 0;
   if ((g - f | 0) >>> 0 < b >>> 0) {
    j = g << 1;
    j = (j - f | 0) >>> 0 < b >>> 0 ? b + f | 0 : j;
    if (j >>> 0 < f >>> 0 | (j - f | 0) >>> 0 < b >>> 0) md(k, 8242, o) | 0;
    g = bh(k, j) | 0;
    En(g | 0, c[u >> 2] | 0, c[s >> 2] | 0) | 0;
    if ((c[u >> 2] | 0) != (t | 0)) Qd(k, -2);
    c[u >> 2] = g;
    c[q >> 2] = j;
    f = c[s >> 2] | 0;
   } else g = c[u >> 2] | 0;
   En(g + f | 0, e | 0, b | 0) | 0;
   f = (c[s >> 2] | 0) + b | 0;
   c[s >> 2] = f;
   b = h + m | 0;
   h = Jm(b, d) | 0;
   j = c[r >> 2] | 0;
   g = c[q >> 2] | 0;
  } while ((h | 0) != 0);
 }
 k = Vl(b) | 0;
 if ((g - f | 0) >>> 0 < k >>> 0) {
  h = g << 1;
  h = (h - f | 0) >>> 0 < k >>> 0 ? f + k | 0 : h;
  if (h >>> 0 < f >>> 0 | (h - f | 0) >>> 0 < k >>> 0) md(j, 8242, p) | 0;
  g = bh(j, h) | 0;
  En(g | 0, c[u >> 2] | 0, c[s >> 2] | 0) | 0;
  if ((c[u >> 2] | 0) != (t | 0)) Qd(j, -2);
  c[u >> 2] = g;
  c[q >> 2] = h;
  f = c[s >> 2] | 0;
 } else g = c[u >> 2] | 0;
 En(g + f | 0, b | 0, k | 0) | 0;
 q = (c[s >> 2] | 0) + k | 0;
 c[s >> 2] = q;
 f = c[r >> 2] | 0;
 qd(f, c[u >> 2] | 0, q) | 0;
 if ((c[u >> 2] | 0) == (t | 0)) {
  u = dd(a, -1, 0) | 0;
  i = v;
  return u | 0;
 }
 Qd(f, -2);
 u = dd(a, -1, 0) | 0;
 i = v;
 return u | 0;
}
function Od(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 q = i;
 i = i + 16 | 0;
 m = q + 8 | 0;
 f = q;
 p = e + 8 | 0;
 switch (c[p >> 2] | 0) {
 case 0:
  {
   n = c[b + 28 >> 2] | 0;
   j = -1;
   break;
  }
 case 3:
  {
   r = +h[e >> 3];
   h[f >> 3] = r + 6755399441055744.0;
   g = c[f >> 2] | 0;
   if ((g | 0) > 0 & +(g | 0) == r) {
    f = c[b + 28 >> 2] | 0;
    if ((g | 0) > (f | 0)) o = 6; else {
     n = f;
     j = g + -1 | 0;
    }
   } else o = 6;
   break;
  }
 default:
  o = 6;
 }
 do if ((o | 0) == 6) {
  f = wc(b, e) | 0;
  while (1) {
   l = f + 16 | 0;
   k = f + 24 | 0;
   g = c[k >> 2] | 0;
   if ((g | 0) == (c[p >> 2] | 0)) {
    if (xc(0, l, e) | 0) {
     o = 13;
     break;
    }
    g = c[k >> 2] | 0;
   }
   if ((g | 0) == 11) if (c[p >> 2] & 64 | 0) if ((c[l >> 2] | 0) == (c[e >> 2] | 0)) {
    o = 13;
    break;
   }
   f = c[f + 28 >> 2] | 0;
   if (!f) {
    o = 16;
    break;
   }
  }
  if ((o | 0) == 13) {
   j = c[b + 28 >> 2] | 0;
   n = j;
   j = (f - (c[b + 16 >> 2] | 0) >> 5) + j | 0;
   break;
  } else if ((o | 0) == 16) Fb(a, 6198, m);
 } while (0);
 l = b + 12 | 0;
 while (1) {
  f = j + 1 | 0;
  if ((f | 0) >= (n | 0)) break;
  k = c[l >> 2] | 0;
  g = k + (f << 4) + 8 | 0;
  if (!(c[g >> 2] | 0)) j = f; else {
   o = 19;
   break;
  }
 }
 if ((o | 0) == 19) {
  h[e >> 3] = +(j + 2 | 0);
  c[p >> 2] = 3;
  b = k + (f << 4) | 0;
  o = c[b + 4 >> 2] | 0;
  p = e + 16 | 0;
  c[p >> 2] = c[b >> 2];
  c[p + 4 >> 2] = o;
  c[e + 24 >> 2] = c[g >> 2];
  p = 1;
  i = q;
  return p | 0;
 }
 f = f - n | 0;
 k = 1 << (d[b + 7 >> 0] | 0);
 if ((f | 0) >= (k | 0)) {
  p = 0;
  i = q;
  return p | 0;
 }
 j = b + 16 | 0;
 g = c[j >> 2] | 0;
 while (1) {
  if (c[g + (f << 5) + 8 >> 2] | 0) break;
  f = f + 1 | 0;
  if ((f | 0) >= (k | 0)) {
   f = 0;
   o = 25;
   break;
  }
 }
 if ((o | 0) == 25) {
  i = q;
  return f | 0;
 }
 o = g + (f << 5) + 16 | 0;
 b = c[o + 4 >> 2] | 0;
 n = e;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = b;
 c[p >> 2] = c[g + (f << 5) + 24 >> 2];
 p = c[j >> 2] | 0;
 n = p + (f << 5) | 0;
 b = c[n + 4 >> 2] | 0;
 o = e + 16 | 0;
 c[o >> 2] = c[n >> 2];
 c[o + 4 >> 2] = b;
 c[e + 24 >> 2] = c[p + (f << 5) + 8 >> 2];
 p = 1;
 i = q;
 return p | 0;
}

function uf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 switch (c[e >> 2] | 0) {
 case 11:
  {
   g = c[(c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) >> 2] | 0;
   if ((g & 63 | 0) == 20) {
    k = b + 20 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + -1;
    De(b, ((f | 0) == 0 & 1) << 14 | g >>> 23 << 6 | 27) | 0;
    f = b + 28 | 0;
    k = c[f >> 2] | 0;
    c[f >> 2] = -1;
    f = De(b, 2147450903) | 0;
    if ((k | 0) == -1) {
     b = f;
     return b | 0;
    }
    if ((f | 0) == -1) {
     b = k;
     return b | 0;
    }
    j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    g = f;
    while (1) {
     i = j + (g << 2) | 0;
     h = c[i >> 2] | 0;
     e = (h >>> 14) + -131071 | 0;
     e = (e | 0) == -1 ? -1 : g + 1 + e | 0;
     if ((e | 0) == -1) break; else g = e;
    }
    g = k + ~g | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980);
    c[i >> 2] = (g << 14) + 2147467264 | h & 16383;
    b = f;
    return b | 0;
   } else k = 10;
   break;
  }
 case 6:
  {
   k = 17;
   break;
  }
 default:
  k = 10;
 }
 if ((k | 0) == 10) {
  h = b + 48 | 0;
  g = (d[h >> 0] | 0) + 1 | 0;
  i = (c[b >> 2] | 0) + 78 | 0;
  do if (g >>> 0 > (d[i >> 0] | 0) >>> 0) if (g >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
   j = g & 255;
   a[i >> 0] = j;
   break;
  } else j = g & 255; while (0);
  a[h >> 0] = j;
  Fe(b, e, (j & 255) + -1 | 0);
  if ((c[e >> 2] | 0) == 6) k = 17; else g = c[e + 8 >> 2] | 0;
 }
 if ((k | 0) == 17) {
  g = c[e + 8 >> 2] | 0;
  if (!(g & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (g | 0)) {
   k = b + 48 | 0;
   a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 De(b, f << 14 | g << 23 | 16348) | 0;
 f = b + 28 | 0;
 k = c[f >> 2] | 0;
 c[f >> 2] = -1;
 f = De(b, 2147450903) | 0;
 if ((k | 0) == -1) {
  b = f;
  return b | 0;
 }
 if ((f | 0) == -1) {
  b = k;
  return b | 0;
 }
 j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 g = f;
 while (1) {
  i = j + (g << 2) | 0;
  h = c[i >> 2] | 0;
  e = (h >>> 14) + -131071 | 0;
  e = (e | 0) == -1 ? -1 : g + 1 + e | 0;
  if ((e | 0) == -1) break; else g = e;
 }
 g = k + ~g | 0;
 if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980);
 c[i >> 2] = (g << 14) + 2147467264 | h & 16383;
 b = f;
 return b | 0;
}

function zc(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 n = r;
 l = b + 12 | 0;
 j = c[e + 8 >> 2] | 0;
 m = 0;
 while (1) {
  if ((j | 0) == 69) {
   j = c[e >> 2] | 0;
   k = vc(j, f) | 0;
   if (c[k + 8 >> 2] | 0) {
    p = j;
    o = k;
    break;
   }
   h = c[j + 8 >> 2] | 0;
   if (!h) {
    h = j;
    e = k;
    q = 9;
    break;
   }
   if (a[h + 6 >> 0] & 2) {
    h = j;
    e = k;
    q = 9;
    break;
   }
   h = Sb(h, 1, c[(c[l >> 2] | 0) + 188 >> 2] | 0) | 0;
   if (!h) {
    h = j;
    e = k;
    q = 9;
    break;
   }
   j = c[h + 8 >> 2] | 0;
  } else {
   h = Bb(b, e, 1) | 0;
   j = c[h + 8 >> 2] | 0;
   if (!j) {
    q = 16;
    break;
   }
  }
  m = m + 1 | 0;
  if ((j & 15 | 0) == 6) {
   q = 18;
   break;
  }
  if ((m | 0) >= 100) {
   q = 19;
   break;
  } else e = h;
 }
 if ((q | 0) == 9) if ((e | 0) == 15088) {
  p = h;
  o = Ac(b, h, f) | 0;
 } else {
  p = h;
  o = e;
 } else if ((q | 0) == 16) gc(b, e, 4498); else if ((q | 0) == 18) {
  q = b + 8 | 0;
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  m = h;
  p = c[m + 4 >> 2] | 0;
  o = n;
  c[o >> 2] = c[m >> 2];
  c[o + 4 >> 2] = p;
  c[n + 8 >> 2] = c[h + 8 >> 2];
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  o = e;
  p = c[o + 4 >> 2] | 0;
  m = n;
  c[m >> 2] = c[o >> 2];
  c[m + 4 >> 2] = p;
  c[n + 8 >> 2] = c[e + 8 >> 2];
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  m = f;
  p = c[m + 4 >> 2] | 0;
  o = n;
  c[o >> 2] = c[m >> 2];
  c[o + 4 >> 2] = p;
  c[n + 8 >> 2] = c[f + 8 >> 2];
  f = c[q >> 2] | 0;
  c[q >> 2] = f + 16;
  n = g;
  o = c[n + 4 >> 2] | 0;
  p = f;
  c[p >> 2] = c[n >> 2];
  c[p + 4 >> 2] = o;
  c[f + 8 >> 2] = c[g + 8 >> 2];
  Eb(b, (c[q >> 2] | 0) + -64 | 0, 0, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
  i = r;
  return;
 } else if ((q | 0) == 19) Fb(b, 4830, n);
 n = g;
 f = c[n + 4 >> 2] | 0;
 q = o;
 c[q >> 2] = c[n >> 2];
 c[q + 4 >> 2] = f;
 q = g + 8 | 0;
 c[o + 8 >> 2] = c[q >> 2];
 a[p + 6 >> 0] = 0;
 if (!(c[q >> 2] & 64)) {
  i = r;
  return;
 }
 if (!(a[(c[g >> 2] | 0) + 5 >> 0] & 3)) {
  i = r;
  return;
 }
 if (!(a[p + 5 >> 0] & 4)) {
  i = r;
  return;
 }
 Dc(b, p);
 i = r;
 return;
}

function tl(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0, g = 0, i = 0.0, j = 0.0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 d = b & 2147483647;
 b = Cn(c[k >> 2] | 0, b | 0, 63) | 0;
 do if (d >>> 0 > 1078159481) {
  i = +N(+a);
  h[k >> 3] = i;
  d = c[k + 4 >> 2] | 0;
  if (!(d >>> 0 > 2146435072 | (d | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) if (!b) if (a > 709.782712893384) a = a * 8988465674311579538646525.0e283; else g = 11; else a = -1.0;
 } else {
  if (d >>> 0 <= 1071001154) if (d >>> 0 < 1016070144) break; else {
   i = 0.0;
   b = 0;
   g = 14;
   break;
  }
  if (d >>> 0 < 1072734898) if (!b) {
   a = a + -.6931471803691238;
   b = 1;
   e = 1.9082149292705877e-10;
   g = 12;
   break;
  } else {
   a = a + .6931471803691238;
   b = -1;
   e = -1.9082149292705877e-10;
   g = 12;
   break;
  } else g = 11;
 } while (0);
 if ((g | 0) == 11) {
  b = ~~(a * 1.4426950408889634 + (b | 0 ? -.5 : .5));
  e = +(b | 0);
  a = a - e * .6931471803691238;
  e = e * 1.9082149292705877e-10;
  g = 12;
 }
 if ((g | 0) == 12) {
  f = a - e;
  i = a - f - e;
  a = f;
  g = 14;
 }
 a : do if ((g | 0) == 14) {
  f = a * .5;
  e = a * f;
  j = e * (e * (e * (e * (4.008217827329362e-06 - e * 2.0109921818362437e-07) + -7.93650757867488e-05) + 1.5873015872548146e-03) + -.03333333333333313) + 1.0;
  f = 3.0 - f * j;
  f = e * ((j - f) / (6.0 - a * f));
  if (!b) {
   a = a - (a * f - e);
   break;
  }
  e = a * (f - i) - i - e;
  switch (b | 0) {
  case -1:
   {
    a = (a - e) * .5 + -.5;
    break a;
   }
  case 1:
   if (a < -.25) {
    a = (e - (a + .5)) * -2.0;
    break a;
   } else {
    a = (a - e) * 2.0 + 1.0;
    break a;
   }
  default:
   {
    d = An(b + 1023 | 0, 0, 52) | 0;
    g = C;
    c[k >> 2] = d;
    c[k + 4 >> 2] = g;
    f = +h[k >> 3];
    if (b >>> 0 > 56) {
     a = a - e + 1.0;
     a = ((b | 0) == 1024 ? a * 2.0 * 8988465674311579538646525.0e283 : f * a) + -1.0;
     break a;
    }
    d = An(1023 - b | 0, 0, 52) | 0;
    g = C;
    if ((b | 0) < 20) {
     c[k >> 2] = d;
     c[k + 4 >> 2] = g;
     a = 1.0 - +h[k >> 3] + (a - e);
    } else {
     c[k >> 2] = d;
     c[k + 4 >> 2] = g;
     a = a - (+h[k >> 3] + e) + 1.0;
    }
    a = f * a;
    break a;
   }
  }
 } while (0);
 return +a;
}

function De(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = c[b >> 2] | 0;
 n = b + 28 | 0;
 f = c[n >> 2] | 0;
 q = b + 20 | 0;
 l = c[q >> 2] | 0;
 do if ((f | 0) == -1) e = l; else {
  m = c[p + 12 >> 2] | 0;
  while (1) {
   k = m + (f << 2) | 0;
   j = c[k >> 2] | 0;
   h = (j >>> 14) + -131071 | 0;
   i = f;
   f = (h | 0) == -1 ? -1 : f + 1 + h | 0;
   if ((i | 0) > 0) {
    h = k + -4 | 0;
    g = c[h >> 2] | 0;
    if ((a[3916 + (g & 63) >> 0] | 0) >= 0) o = 5;
   } else o = 5;
   if ((o | 0) == 5) {
    o = 0;
    g = j;
    h = k;
   }
   if ((g & 63 | 0) == 28) {
    c[h >> 2] = g & 8372224 | g >>> 23 << 6 | 27;
    g = l + ~i | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     o = 8;
     break;
    }
    g = c[k >> 2] & 16383 | (g << 14) + 2147467264;
   } else {
    g = l + ~i | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     o = 11;
     break;
    }
    g = (g << 14) + 2147467264 | j & 16383;
   }
   c[k >> 2] = g;
   if ((f | 0) == -1) {
    o = 14;
    break;
   }
  }
  if ((o | 0) == 8) me(c[b + 12 >> 2] | 0, 6980); else if ((o | 0) == 11) me(c[b + 12 >> 2] | 0, 6980); else if ((o | 0) == 14) {
   e = c[q >> 2] | 0;
   break;
  }
 } while (0);
 c[n >> 2] = -1;
 f = p + 48 | 0;
 if ((e | 0) < (c[f >> 2] | 0)) f = c[p + 12 >> 2] | 0; else {
  e = p + 12 | 0;
  f = oe(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, c[e >> 2] | 0, f, 4, 2147483645, 7007) | 0;
  c[e >> 2] = f;
  e = c[q >> 2] | 0;
 }
 c[f + (e << 2) >> 2] = d;
 f = c[q >> 2] | 0;
 g = p + 52 | 0;
 e = b + 12 | 0;
 if ((f | 0) < (c[g >> 2] | 0)) {
  d = f;
  p = p + 20 | 0;
  b = c[e >> 2] | 0;
  b = b + 8 | 0;
  b = c[b >> 2] | 0;
  p = c[p >> 2] | 0;
  p = p + (d << 2) | 0;
  c[p >> 2] = b;
  p = c[q >> 2] | 0;
  b = p + 1 | 0;
  c[q >> 2] = b;
  return p | 0;
 } else {
  d = p + 20 | 0;
  c[d >> 2] = oe(c[(c[e >> 2] | 0) + 52 >> 2] | 0, c[d >> 2] | 0, g, 4, 2147483645, 7007) | 0;
  p = c[q >> 2] | 0;
  b = c[e >> 2] | 0;
  b = b + 8 | 0;
  b = c[b >> 2] | 0;
  d = c[d >> 2] | 0;
  p = d + (p << 2) | 0;
  c[p >> 2] = b;
  p = c[q >> 2] | 0;
  b = p + 1 | 0;
  c[q >> 2] = b;
  return p | 0;
 }
 return 0;
}

function Cf(e, f, g, h, j) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 32 | 0;
 p = u + 12 | 0;
 l = u;
 o = e + 48 | 0;
 s = c[o >> 2] | 0;
 m = s + 46 | 0;
 t = (d[m >> 0] | 0) + 3 | 0;
 a[m >> 0] = t;
 n = c[s + 20 >> 2] | 0;
 k = s + 12 | 0;
 q = c[(c[s >> 2] | 0) + 24 >> 2] | 0;
 r = c[c[(c[k >> 2] | 0) + 64 >> 2] >> 2] | 0;
 t = (c[s + 40 >> 2] | 0) + (t & 255) | 0;
 c[q + ((b[r + (t + -3 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 c[q + ((b[r + (t + -2 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 c[q + ((b[r + (t + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 t = e + 16 | 0;
 if ((c[t >> 2] | 0) != 259) Ne(e, 259);
 pe(e);
 r = (j | 0) != 0;
 if (r) q = Ze(s, 33, f, 131070) | 0; else q = bf(s) | 0;
 a[l + 10 >> 0] = 0;
 a[l + 8 >> 0] = a[m >> 0] | 0;
 k = c[(c[k >> 2] | 0) + 64 >> 2] | 0;
 b[l + 4 >> 1] = c[k + 28 >> 2];
 b[l + 6 >> 1] = c[k + 16 >> 2];
 a[l + 9 >> 0] = 0;
 k = s + 16 | 0;
 c[l >> 2] = c[k >> 2];
 c[k >> 2] = l;
 k = c[o >> 2] | 0;
 n = k + 46 | 0;
 j = (d[n >> 0] | 0) + h | 0;
 a[n >> 0] = j;
 if (h | 0) {
  n = c[k + 20 >> 2] | 0;
  l = c[(c[k >> 2] | 0) + 24 >> 2] | 0;
  m = c[c[(c[k + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
  k = (c[k + 40 >> 2] | 0) + (j & 255) | 0;
  j = h;
  do {
   c[l + ((b[m + (k - j << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
   j = j + -1 | 0;
  } while ((j | 0) != 0);
 }
 Ye(s, h);
 k = c[o >> 2] | 0;
 a[p + 10 >> 0] = 0;
 a[p + 8 >> 0] = a[k + 46 >> 0] | 0;
 o = c[(c[k + 12 >> 2] | 0) + 64 >> 2] | 0;
 b[p + 4 >> 1] = c[o + 28 >> 2];
 b[p + 6 >> 1] = c[o + 16 >> 2];
 a[p + 9 >> 0] = 0;
 o = k + 16 | 0;
 c[p >> 2] = c[o >> 2];
 c[o >> 2] = p;
 a : do {
  j = c[t >> 2] | 0;
  switch (j | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break a;
  default:
   {}
  }
  xe(e);
 } while ((j | 0) != 274);
 af(k);
 af(s);
 df(s, q);
 if (r) {
  h = Ze(s, 32, f, 131070) | 0;
  t = q + 1 | 0;
  hf(s, h, t);
  rf(s, g);
  i = u;
  return;
 } else {
  Ke(s, 34, f, 0, h) | 0;
  rf(s, g);
  h = Ze(s, 35, f + 2 | 0, 131070) | 0;
  t = q + 1 | 0;
  hf(s, h, t);
  rf(s, g);
  i = u;
  return;
 }
}

function Fe(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0.0;
 m = i;
 i = i + 32 | 0;
 j = m + 16 | 0;
 g = m;
 Ce(a, b);
 f = c[b >> 2] | 0;
 a : do switch (f | 0) {
 case 1:
  {
   l = e + 1 | 0;
   f = c[a + 20 >> 2] | 0;
   do if ((f | 0) > (c[a + 24 >> 2] | 0)) {
    k = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (f + -1 << 2) | 0;
    f = c[k >> 2] | 0;
    if ((f & 63 | 0) == 4) {
     j = f >>> 6 & 255;
     g = j + (f >>> 23) | 0;
     if ((j | 0) > (e | 0) | (g + 1 | 0) < (e | 0)) if ((j | 0) < (e | 0) | (j | 0) > (l | 0)) break;
     a = (j | 0) < (e | 0) ? j : e;
     c[k >> 2] = a << 6 & 16320 | f & 8372287 | ((g | 0) <= (e | 0) ? e : g) - a << 23;
     break a;
    }
   } while (0);
   De(a, e << 6 | 4) | 0;
   break;
  }
 case 2:
 case 3:
  {
   De(a, e << 6 | ((f | 0) == 2 & 1) << 23 | 3) | 0;
   break;
  }
 case 4:
  {
   f = c[b + 8 >> 2] | 0;
   g = e << 6;
   if ((f | 0) < 262144) {
    De(a, g | f << 14 | 1) | 0;
    break a;
   } else {
    De(a, g | 2) | 0;
    De(a, f << 6 | 39) | 0;
    break a;
   }
  }
 case 5:
  {
   n = +h[b + 8 >> 3];
   h[j >> 3] = n;
   f = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
   h[g >> 3] = n;
   c[g + 8 >> 2] = 3;
   if (n != n | 0.0 != 0.0 | n == 0.0) {
    l = f + 8 | 0;
    k = c[l >> 2] | 0;
    c[l >> 2] = k + 16;
    f = Lb(f, j, 8) | 0;
    c[k >> 2] = f;
    c[k + 8 >> 2] = d[f + 4 >> 0] | 0 | 64;
    f = Ge(a, (c[l >> 2] | 0) + -16 | 0, g) | 0;
    c[l >> 2] = (c[l >> 2] | 0) + -16;
   } else f = Ge(a, g, g) | 0;
   g = e << 6;
   if ((f | 0) < 262144) {
    De(a, g | f << 14 | 1) | 0;
    break a;
   } else {
    De(a, g | 2) | 0;
    De(a, f << 6 | 39) | 0;
    break a;
   }
  }
 case 11:
  {
   a = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b + 8 >> 2] << 2) | 0;
   c[a >> 2] = c[a >> 2] & -16321 | e << 6 & 16320;
   break;
  }
 case 6:
  {
   f = c[b + 8 >> 2] | 0;
   if ((f | 0) != (e | 0)) De(a, f << 23 | e << 6) | 0;
   break;
  }
 default:
  {
   i = m;
   return;
  }
 } while (0);
 c[b + 8 >> 2] = e;
 c[b >> 2] = 6;
 i = m;
 return;
}

function je(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 q = i;
 i = i + 176 | 0;
 k = q + 156 | 0;
 m = q + 80 | 0;
 o = q;
 l = q + 104 | 0;
 n = Uc(d, 1) | 0;
 s = d + 8 | 0;
 r = c[s >> 2] | 0;
 c[r >> 2] = n;
 c[r + 8 >> 2] = 70;
 r = (c[s >> 2] | 0) + 16 | 0;
 c[s >> 2] = r;
 if (((c[d + 24 >> 2] | 0) - r | 0) < 16) Hb(d, 0);
 r = he(d) | 0;
 c[n + 12 >> 2] = r;
 c[l >> 2] = r;
 h = _c(d, h) | 0;
 s = r + 36 | 0;
 c[s >> 2] = h;
 c[o + 60 >> 2] = f;
 f = o + 64 | 0;
 c[f >> 2] = g;
 c[g + 28 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 4 >> 2] = 0;
 ke(d, o, e, h, j);
 d = c[o + 52 >> 2] | 0;
 e = o + 48 | 0;
 c[l + 8 >> 2] = c[e >> 2];
 g = l + 12 | 0;
 c[g >> 2] = o;
 c[e >> 2] = l;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 c[l + 28 >> 2] = -1;
 c[l + 32 >> 2] = 0;
 c[l + 36 >> 2] = 0;
 e = l + 44 | 0;
 c[e >> 2] = 0;
 a[e + 4 >> 0] = 0;
 c[l + 40 >> 2] = c[(c[f >> 2] | 0) + 4 >> 2];
 f = l + 16 | 0;
 c[f >> 2] = 0;
 c[s >> 2] = c[o + 68 >> 2];
 a[r + 78 >> 0] = 2;
 e = Fc(d) | 0;
 c[l + 4 >> 2] = e;
 r = d + 8 | 0;
 s = c[r >> 2] | 0;
 c[s >> 2] = e;
 c[s + 8 >> 2] = 69;
 s = (c[r >> 2] | 0) + 16 | 0;
 c[r >> 2] = s;
 if (((c[d + 24 >> 2] | 0) - s | 0) < 16) Hb(d, 0);
 a[k + 10 >> 0] = 0;
 a[k + 8 >> 0] = a[l + 46 >> 0] | 0;
 s = c[(c[g >> 2] | 0) + 64 >> 2] | 0;
 b[k + 4 >> 1] = c[s + 28 >> 2];
 b[k + 6 >> 1] = c[s + 16 >> 2];
 a[k + 9 >> 0] = 0;
 c[k >> 2] = c[f >> 2];
 c[f >> 2] = k;
 a[(c[l >> 2] | 0) + 77 >> 0] = 1;
 c[m + 16 >> 2] = -1;
 c[m + 20 >> 2] = -1;
 c[m >> 2] = 7;
 c[m + 8 >> 2] = 0;
 le(l, c[o + 72 >> 2] | 0, m) | 0;
 pe(o);
 f = o + 16 | 0;
 a : while (1) {
  d = c[f >> 2] | 0;
  switch (d | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break a;
  default:
   {}
  }
  xe(o);
  if ((d | 0) == 274) {
   p = 8;
   break;
  }
 }
 if ((p | 0) == 8) d = c[f >> 2] | 0;
 if ((d | 0) == 286) {
  _e(o);
  i = q;
  return n | 0;
 } else Ne(o, 286);
 return 0;
}

function uc(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = i;
 i = i + 16 | 0;
 o = p;
 m = b + 12 | 0;
 j = c[e + 8 >> 2] | 0;
 n = 0;
 while (1) {
  if ((j | 0) == 69) {
   j = c[e >> 2] | 0;
   h = vc(j, f) | 0;
   l = h + 8 | 0;
   if (c[l >> 2] | 0) {
    e = l;
    j = 9;
    break;
   }
   j = c[j + 8 >> 2] | 0;
   if (!j) {
    e = l;
    j = 9;
    break;
   }
   if (a[j + 6 >> 0] & 1) {
    e = l;
    j = 9;
    break;
   }
   k = Sb(j, 0, c[(c[m >> 2] | 0) + 184 >> 2] | 0) | 0;
   if (!k) {
    e = l;
    j = 9;
    break;
   }
   j = c[k + 8 >> 2] | 0;
   h = k;
  } else {
   h = Bb(b, e, 0) | 0;
   j = c[h + 8 >> 2] | 0;
   if (!j) {
    j = 11;
    break;
   }
  }
  n = n + 1 | 0;
  if ((j & 15 | 0) == 6) {
   j = 13;
   break;
  }
  if ((n | 0) >= 100) {
   j = 14;
   break;
  } else e = h;
 }
 if ((j | 0) == 9) {
  o = h;
  f = c[o + 4 >> 2] | 0;
  b = g;
  c[b >> 2] = c[o >> 2];
  c[b + 4 >> 2] = f;
  c[g + 8 >> 2] = c[e >> 2];
  i = p;
  return;
 } else if ((j | 0) == 11) gc(b, e, 4498); else if ((j | 0) == 13) {
  m = b + 28 | 0;
  n = c[m >> 2] | 0;
  o = b + 8 | 0;
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  q = h;
  j = c[q + 4 >> 2] | 0;
  k = l;
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = j;
  c[l + 8 >> 2] = c[h + 8 >> 2];
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  k = e;
  j = c[k + 4 >> 2] | 0;
  h = l;
  c[h >> 2] = c[k >> 2];
  c[h + 4 >> 2] = j;
  c[l + 8 >> 2] = c[e + 8 >> 2];
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  h = f;
  j = c[h + 4 >> 2] | 0;
  k = l;
  c[k >> 2] = c[h >> 2];
  c[k + 4 >> 2] = j;
  c[l + 8 >> 2] = c[f + 8 >> 2];
  Eb(b, (c[o >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
  g = (c[m >> 2] | 0) + (g - n) | 0;
  b = c[o >> 2] | 0;
  n = b + -16 | 0;
  c[o >> 2] = n;
  o = c[n + 4 >> 2] | 0;
  f = g;
  c[f >> 2] = c[n >> 2];
  c[f + 4 >> 2] = o;
  c[g + 8 >> 2] = c[b + -8 >> 2];
  i = p;
  return;
 } else if ((j | 0) == 14) Fb(b, 4504, o);
}

function ji(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = i;
 i = i + 1056 | 0;
 n = p + 1040 | 0;
 k = p;
 f = Kd(b) | 0;
 Tm(d);
 a : do if ((f | 0) == 1) {
  f = e + 1 | 0;
  g = ki(b, d, 1) | 0;
 } else {
  gg(b, f + 19 | 0, 9639);
  m = k + 8 | 0;
  l = k + 8 | 0;
  j = f + -2 | 0;
  f = e;
  b : while (1) {
   c : do if ((Gd(b, f) | 0) == 3) {
    g = hd(b, f, 0) | 0;
    if (!g) {
     g = Vm(d) | 0;
     Om(g, d) | 0;
     qd(b, 0, 0) | 0;
     g = (g | 0) != -1 & 1;
     break;
    } else {
     $g(b, k);
     g = Qm(li(k, g) | 0, 1, g, d) | 0;
     c[m >> 2] = (c[m >> 2] | 0) + g;
     eh(k);
     g = (g | 0) != 0 & 1;
     break;
    }
   } else {
    g = dd(b, f, 0) | 0;
    if (!g) o = 10; else if ((a[g >> 0] | 0) != 42) o = 10;
    if ((o | 0) == 10) {
     o = 0;
     Id(b, f, 11533) | 0;
    }
    switch (a[g + 1 >> 0] | 0) {
    case 110:
     {
      c[n >> 2] = k;
      if ((Am(d, 9658, n) | 0) == 1) {
       ud(b, +h[k >> 3]);
       g = 1;
      } else {
       Md(b);
       g = 0;
      }
      break c;
     }
    case 108:
     {
      g = ki(b, d, 1) | 0;
      break c;
     }
    case 76:
     {
      g = ki(b, d, 0) | 0;
      break c;
     }
    case 97:
     {
      $g(b, k);
      g = Qm(li(k, 1024) | 0, 1, 1024, d) | 0;
      c[l >> 2] = (c[l >> 2] | 0) + g;
      if (g >>> 0 >= 1024) {
       g = 1024;
       do {
        g = g << (g >>> 0 < 1073741824 & 1);
        q = Qm(li(k, g) | 0, 1, g, d) | 0;
        c[l >> 2] = (c[l >> 2] | 0) + q;
       } while (q >>> 0 >= g >>> 0);
      }
      eh(k);
      g = 1;
      break c;
     }
    default:
     break b;
    }
   } while (0);
   f = f + 1 | 0;
   if ((g | 0) != 0 & (j | 0) != 0) j = j + -1 | 0; else break a;
  }
  q = Id(b, f, 9662) | 0;
  i = p;
  return q | 0;
 } while (0);
 if (zm(d) | 0) {
  q = bi(b, 0, 0) | 0;
  i = p;
  return q | 0;
 }
 if (!g) {
  wd(b, -2);
  Md(b);
 }
 q = f - e | 0;
 i = p;
 return q | 0;
}

function Oc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 k = b + 8 | 0;
 f = c[k >> 2] | 0;
 if ((f | 0) == 3) {
  if ((c[e + 8 >> 2] | 0) == 3) {
   e = +h[b >> 3] < +h[e >> 3] & 1;
   return e | 0;
  }
 } else if ((f & 15 | 0) == 4) if ((c[e + 8 >> 2] & 15 | 0) == 4) {
  i = c[b >> 2] | 0;
  a = c[e >> 2] | 0;
  g = i + 16 | 0;
  b = a + 16 | 0;
  f = am(g, b) | 0;
  a : do if (!f) {
   j = c[i + 12 >> 2] | 0;
   a = c[a + 12 >> 2] | 0;
   while (1) {
    i = Vl(g) | 0;
    f = (i | 0) == (j | 0);
    if ((i | 0) == (a | 0)) break;
    if (f) {
     f = -1;
     break a;
    }
    i = i + 1 | 0;
    g = g + i | 0;
    b = b + i | 0;
    f = am(g, b) | 0;
    if (f | 0) break a; else {
     j = j - i | 0;
     a = a - i | 0;
    }
   }
   f = f & 1 ^ 1;
  } while (0);
  e = f >>> 31;
  return e | 0;
 }
 i = a + 8 | 0;
 g = c[i >> 2] | 0;
 f = Bb(a, b, 13) | 0;
 if (!(c[f + 8 >> 2] | 0)) {
  f = Bb(a, e, 13) | 0;
  if (!(c[f + 8 >> 2] | 0)) Pc(a, b, e); else j = f;
 } else j = f;
 l = a + 28 | 0;
 f = c[l >> 2] | 0;
 n = c[i >> 2] | 0;
 c[i >> 2] = n + 16;
 p = j;
 o = c[p + 4 >> 2] | 0;
 m = n;
 c[m >> 2] = c[p >> 2];
 c[m + 4 >> 2] = o;
 c[n + 8 >> 2] = c[j + 8 >> 2];
 j = c[i >> 2] | 0;
 c[i >> 2] = j + 16;
 n = b;
 b = c[n + 4 >> 2] | 0;
 m = j;
 c[m >> 2] = c[n >> 2];
 c[m + 4 >> 2] = b;
 c[j + 8 >> 2] = c[k >> 2];
 j = c[i >> 2] | 0;
 c[i >> 2] = j + 16;
 m = e;
 b = c[m + 4 >> 2] | 0;
 k = j;
 c[k >> 2] = c[m >> 2];
 c[k + 4 >> 2] = b;
 c[j + 8 >> 2] = c[e + 8 >> 2];
 Eb(a, (c[i >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 f = (c[l >> 2] | 0) + (g - f) | 0;
 g = c[i >> 2] | 0;
 j = g + -16 | 0;
 c[i >> 2] = j;
 k = c[j + 4 >> 2] | 0;
 e = f;
 c[e >> 2] = c[j >> 2];
 c[e + 4 >> 2] = k;
 c[f + 8 >> 2] = c[g + -8 >> 2];
 f = c[i >> 2] | 0;
 g = c[f + 8 >> 2] | 0;
 if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
 p = f & 1;
 return p | 0;
}

function Sk(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 256 | 0;
 v = y + 40 | 0;
 u = y + 32 | 0;
 x = y + 24 | 0;
 w = y + 16 | 0;
 t = y + 8 | 0;
 k = y;
 j = y + 148 | 0;
 r = y + 48 | 0;
 s = Kd(b) | 0;
 g = 1;
 h = 1;
 while (1) if (!(nd(d, g, j) | 0)) break; else {
  h = g;
  g = g << 1;
 }
 if ((h | 0) < (g | 0)) do {
  q = (g + h | 0) / 2 | 0;
  p = (nd(d, q, j) | 0) == 0;
  g = p ? q : g;
  h = p ? h : q + 1 | 0;
 } while ((h | 0) < (g | 0));
 q = (g + -1 | 0) > 22 ? 12 : 0;
 if (e | 0) {
  c[k >> 2] = e;
  pd(b, 11968, k) | 0;
 }
 qd(b, 11972, 16) | 0;
 if (!(nd(d, f, r) | 0)) {
  x = Kd(b) | 0;
  x = x - s | 0;
  sd(b, x);
  i = y;
  return;
 }
 o = g + -11 | 0;
 j = r + 36 | 0;
 e = r + 20 | 0;
 n = r + 8 | 0;
 p = r + 12 | 0;
 l = r + 24 | 0;
 k = r + 35 | 0;
 m = r + 4 | 0;
 g = f;
 do {
  g = g + 1 | 0;
  if ((g | 0) == (q | 0)) {
   qd(b, 11989, 5) | 0;
   g = o;
  } else {
   od(d, 11995, r) | 0;
   c[t >> 2] = j;
   pd(b, 12e3, t) | 0;
   h = c[e >> 2] | 0;
   if ((h | 0) > 0) {
    c[w >> 2] = h;
    pd(b, 12006, w) | 0;
   }
   qd(b, 12010, 4) | 0;
   a : do if (!(a[c[n >> 2] >> 0] | 0)) switch (a[c[p >> 2] >> 0] | 0) {
   case 109:
    {
     qd(b, 12029, 10) | 0;
     break a;
    }
   case 67:
    if (!(Jd(b, r) | 0)) {
     qd(b, 8259, 1) | 0;
     break a;
    } else {
     c[u >> 2] = dd(b, -1, 0) | 0;
     pd(b, 12015, u) | 0;
     Qd(b, -2);
     break a;
    }
   default:
    {
     f = c[l >> 2] | 0;
     c[v >> 2] = j;
     c[v + 4 >> 2] = f;
     pd(b, 12040, v) | 0;
     break a;
    }
   } else {
    c[x >> 2] = c[m >> 2];
    pd(b, 12015, x) | 0;
   } while (0);
   if (a[k >> 0] | 0) qd(b, 12057, 20) | 0;
   sd(b, (Kd(b) | 0) - s | 0);
  }
 } while ((nd(d, g, r) | 0) != 0);
 x = Kd(b) | 0;
 x = x - s | 0;
 sd(b, x);
 i = y;
 return;
}

function Ml(a, b, d) {
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

function vh(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = d + 12 | 0;
 if ((c[(c[e >> 2] | 0) + 12 >> 2] | 0) > 0) pc(d);
 f = dc(d, 8, 112, 0, 0) | 0;
 i = d + 8 | 0;
 h = c[i >> 2] | 0;
 c[h >> 2] = f;
 c[h + 8 >> 2] = 72;
 c[i >> 2] = (c[i >> 2] | 0) + 16;
 c[f + 12 >> 2] = c[e >> 2];
 i = f + 28 | 0;
 c[i >> 2] = 0;
 e = f + 16 | 0;
 c[e >> 2] = 0;
 h = f + 32 | 0;
 c[h >> 2] = 0;
 c[f + 64 >> 2] = 0;
 b[f + 38 >> 1] = 0;
 j = f + 52 | 0;
 c[j >> 2] = 0;
 g = f + 40 | 0;
 a[g >> 0] = 0;
 k = f + 44 | 0;
 c[k >> 2] = 0;
 a[f + 41 >> 0] = 1;
 c[f + 56 >> 2] = 0;
 b[f + 36 >> 1] = 1;
 a[f + 6 >> 0] = 0;
 c[f + 68 >> 2] = 0;
 a[g >> 0] = a[d + 40 >> 0] | 0;
 g = c[d + 44 >> 2] | 0;
 c[k >> 2] = g;
 c[j >> 2] = c[d + 52 >> 2];
 c[f + 48 >> 2] = g;
 g = yb(d, 0, 0, 640) | 0;
 c[i >> 2] = g;
 c[h >> 2] = 40;
 h = g + 8 | 0;
 c[h >> 2] = 0;
 c[g + 24 >> 2] = 0;
 c[g + 40 >> 2] = 0;
 c[g + 56 >> 2] = 0;
 c[g + 72 >> 2] = 0;
 c[g + 88 >> 2] = 0;
 c[g + 104 >> 2] = 0;
 c[g + 120 >> 2] = 0;
 c[g + 136 >> 2] = 0;
 c[g + 152 >> 2] = 0;
 c[g + 168 >> 2] = 0;
 c[g + 184 >> 2] = 0;
 c[g + 200 >> 2] = 0;
 c[g + 216 >> 2] = 0;
 c[g + 232 >> 2] = 0;
 c[g + 248 >> 2] = 0;
 c[g + 264 >> 2] = 0;
 c[g + 280 >> 2] = 0;
 c[g + 296 >> 2] = 0;
 c[g + 312 >> 2] = 0;
 c[g + 328 >> 2] = 0;
 c[g + 344 >> 2] = 0;
 c[g + 360 >> 2] = 0;
 c[g + 376 >> 2] = 0;
 c[g + 392 >> 2] = 0;
 c[g + 408 >> 2] = 0;
 c[g + 424 >> 2] = 0;
 c[g + 440 >> 2] = 0;
 c[g + 456 >> 2] = 0;
 c[g + 472 >> 2] = 0;
 c[g + 488 >> 2] = 0;
 c[g + 504 >> 2] = 0;
 c[g + 520 >> 2] = 0;
 c[g + 536 >> 2] = 0;
 c[g + 552 >> 2] = 0;
 c[g + 568 >> 2] = 0;
 c[g + 584 >> 2] = 0;
 c[g + 600 >> 2] = 0;
 c[g + 616 >> 2] = 0;
 c[g + 632 >> 2] = 0;
 c[f + 24 >> 2] = g + 560;
 d = f + 72 | 0;
 c[f + 80 >> 2] = 0;
 c[f + 84 >> 2] = 0;
 a[f + 90 >> 0] = 0;
 c[d >> 2] = g;
 c[f + 8 >> 2] = g + 16;
 c[h >> 2] = 0;
 c[f + 76 >> 2] = g + 336;
 c[e >> 2] = d;
 return f | 0;
}

function Em(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = im(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = im(a) | 0;
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
   } else e = im(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = Ln(f | 0, b | 0, 10, 0) | 0;
    f = C;
    e = yn(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = yn(e | 0, C | 0, b | 0, f | 0) | 0;
    b = C;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = im(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = im(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  j = (h | 0) != 0;
  e = xn(0, 0, g | 0, b | 0) | 0;
  f = j ? C : b;
  e = j ? e : g;
 }
 C = f;
 return e | 0;
}

function Tb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = e + 16 | 0;
 f = c[l >> 2] | 0;
 o = f + (1 << (d[e + 7 >> 0] | 0) << 5) | 0;
 k = e + 28 | 0;
 g = c[k >> 2] | 0;
 if ((g | 0) > 0) {
  j = e + 12 | 0;
  i = 0;
  f = 0;
  do {
   h = c[j >> 2] | 0;
   if (c[h + (i << 4) + 8 >> 2] & 64) {
    h = c[h + (i << 4) >> 2] | 0;
    if (a[h + 5 >> 0] & 3) {
     Pb(b, h);
     g = c[k >> 2] | 0;
     f = 1;
    }
   }
   i = i + 1 | 0;
  } while ((i | 0) < (g | 0));
  g = c[l >> 2] | 0;
 } else {
  g = f;
  f = 0;
 }
 if (g >>> 0 < o >>> 0) {
  h = 0;
  n = g;
  g = 0;
  do {
   m = n + 8 | 0;
   i = c[m >> 2] | 0;
   j = n + 24 | 0;
   l = c[j >> 2] | 0;
   k = (l & 64 | 0) == 0;
   a : do if (!i) {
    if (!k) if (a[(c[n + 16 >> 2] | 0) + 5 >> 0] & 3) c[j >> 2] = 11;
   } else {
    do if (k) p = 18; else {
     j = c[n + 16 >> 2] | 0;
     if ((l & 15 | 0) == 4) {
      if (!j) {
       p = 18;
       break;
      }
      if (!(a[j + 5 >> 0] & 3)) {
       p = 18;
       break;
      }
      Pb(b, j);
      i = c[m >> 2] | 0;
      p = 18;
      break;
     }
     i = (i & 64 | 0) == 0;
     if (!(a[j + 5 >> 0] & 3)) if (i) break a; else break;
     if (i) {
      h = 1;
      break a;
     }
     h = 1;
     g = (a[(c[n >> 2] | 0) + 5 >> 0] & 3) == 0 ? g : 1;
     break a;
    } while (0);
    if ((p | 0) == 18) {
     p = 0;
     if (!(i & 64)) break;
    }
    i = c[n >> 2] | 0;
    if (a[i + 5 >> 0] & 3) {
     Pb(b, i);
     f = 1;
    }
   } while (0);
   n = n + 32 | 0;
  } while (n >>> 0 < o >>> 0);
  if (g | 0) {
   b = b + 96 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   e = f;
   return e | 0;
  }
  if (h) {
   b = b + 100 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   e = f;
   return e | 0;
  }
 }
 b = b + 88 | 0;
 c[e + 24 >> 2] = c[b >> 2];
 c[b >> 2] = e;
 e = f;
 return e | 0;
}

function Eh(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 l = e + 16 | 0;
 f = c[l >> 2] | 0;
 k = e + 72 | 0;
 if ((f | 0) == (k | 0)) return;
 q = e + 8 | 0;
 n = e + 40 | 0;
 o = e + 20 | 0;
 p = e + 28 | 0;
 m = e + 68 | 0;
 do {
  j = f + 18 | 0;
  g = a[j >> 0] | 0;
  if (!(g & 1)) {
   g = g & 255;
   if (g & 16 | 0) {
    a[j >> 0] = g & 239;
    c[m >> 2] = c[f + 32 >> 2];
   }
   i = c[f + 16 >> 2] | 0;
   g = i >>> 16;
   if ((i & 65535) << 16 >> 16 == -1) {
    i = f + 4 | 0;
    h = c[q >> 2] | 0;
    if ((c[i >> 2] | 0) >>> 0 < h >>> 0) c[i >> 2] = h;
   }
   if (!(g & 32)) a[f + 37 >> 0] = 1;
   a[j >> 0] = g & 199 | 8;
   g = fb[c[f + 28 >> 2] & 255](e) | 0;
   g = (c[q >> 2] | 0) + (0 - g << 4) | 0;
   h = c[l >> 2] | 0;
   f = d[n >> 0] | 0;
   if (!(f & 6)) i = c[h + 8 >> 2] | 0; else {
    if (!(f & 2)) f = g; else {
     f = g - (c[p >> 2] | 0) | 0;
     sc(e, 1, -1);
     f = (c[p >> 2] | 0) + f | 0;
    }
    i = c[h + 8 >> 2] | 0;
    c[o >> 2] = c[i + 28 >> 2];
    g = f;
   }
   f = c[h >> 2] | 0;
   h = b[h + 16 >> 1] | 0;
   c[l >> 2] = i;
   a : do if (h << 16 >> 16) {
    i = g;
    g = h << 16 >> 16;
    while (1) {
     if (i >>> 0 >= (c[q >> 2] | 0) >>> 0) break;
     h = f + 16 | 0;
     s = i;
     r = c[s + 4 >> 2] | 0;
     j = f;
     c[j >> 2] = c[s >> 2];
     c[j + 4 >> 2] = r;
     c[f + 8 >> 2] = c[i + 8 >> 2];
     g = g + -1 | 0;
     if (!g) {
      f = h;
      break a;
     } else {
      i = i + 16 | 0;
      f = h;
     }
    }
    if ((g | 0) > 0) while (1) {
     h = f + 16 | 0;
     c[f + 8 >> 2] = 0;
     if ((g | 0) > 1) {
      g = g + -1 | 0;
      f = h;
     } else {
      f = h;
      break;
     }
    }
   } while (0);
   c[q >> 2] = f;
  } else {
   Fh(e);
   tc(e);
  }
  f = c[l >> 2] | 0;
 } while ((f | 0) != (k | 0));
 return;
}

function Ki(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 1264 | 0;
 p = r;
 f = r + 1048 | 0;
 o = r + 1256 | 0;
 m = r + 8 | 0;
 n = r + 1056 | 0;
 d = Fd(b, 1, 9936, 0) | 0;
 if ((Gd(b, 2) | 0) < 1) e = Wa(0) | 0; else e = ~~+Li(b, 2);
 c[f >> 2] = e;
 if ((a[d >> 0] | 0) == 33) {
  d = d + 1 | 0;
  l = Ka(f | 0) | 0;
 } else l = Ya(f | 0) | 0;
 if (!l) {
  Md(b);
  i = r;
  return 1;
 }
 if (!(Wl(d, 9939) | 0)) {
  Rg(b, 0, 9);
  Wd(b, c[l >> 2] | 0);
  kd(b, -2, 9942);
  Wd(b, c[l + 4 >> 2] | 0);
  kd(b, -2, 11262);
  Wd(b, c[l + 8 >> 2] | 0);
  kd(b, -2, 9946);
  Wd(b, c[l + 12 >> 2] | 0);
  kd(b, -2, 9951);
  Wd(b, (c[l + 16 >> 2] | 0) + 1 | 0);
  kd(b, -2, 9955);
  Wd(b, (c[l + 20 >> 2] | 0) + 1900 | 0);
  kd(b, -2, 9961);
  Wd(b, (c[l + 24 >> 2] | 0) + 1 | 0);
  kd(b, -2, 9966);
  Wd(b, (c[l + 28 >> 2] | 0) + 1 | 0);
  kd(b, -2, 9971);
  d = c[l + 32 >> 2] | 0;
  if ((d | 0) < 0) {
   i = r;
   return 1;
  }
  jd(b, d);
  kd(b, -2, 9976);
  i = r;
  return 1;
 }
 a[o >> 0] = 37;
 $g(b, m);
 j = m + 8 | 0;
 k = m + 4 | 0;
 h = o + 1 | 0;
 g = o + 2 | 0;
 a : while (1) {
  f = a[d >> 0] | 0;
  switch (f << 24 >> 24) {
  case 0:
   break a;
  case 37:
   break;
  default:
   {
    e = c[j >> 2] | 0;
    if (e >>> 0 >= (c[k >> 2] | 0) >>> 0) {
     li(m, 1) | 0;
     e = c[j >> 2] | 0;
     f = a[d >> 0] | 0;
    }
    c[j >> 2] = e + 1;
    a[(c[m >> 2] | 0) + e >> 0] = f;
    d = d + 1 | 0;
    continue a;
   }
  }
  f = d + 1 | 0;
  d = d + 2 | 0;
  e = a[f >> 0] | 0;
  if (!(e << 24 >> 24)) q = 20; else if (!(Pl(9982, e << 24 >> 24, 23) | 0)) q = 20; else {
   a[h >> 0] = e;
   a[g >> 0] = 0;
  }
  if ((q | 0) == 20) {
   q = 0;
   c[p >> 2] = f;
   Id(b, 1, pd(b, 10005, p) | 0) | 0;
   d = f;
  }
  Ph(m, n, Ha(n | 0, 200, o | 0, l | 0) | 0);
 }
 eh(m);
 i = r;
 return 1;
}

function kf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = i;
 i = i + 48 | 0;
 e = n + 24 | 0;
 l = n;
 k = a + 48 | 0;
 h = c[k >> 2] | 0;
 d = a + 4 | 0;
 j = c[d >> 2] | 0;
 m = a + 16 | 0;
 a : do switch (c[m >> 2] | 0) {
 case 40:
  {
   pe(a);
   ze(a, b, 0) | 0;
   if ((c[m >> 2] | 0) == 41) {
    pe(a);
    Ce(c[k >> 2] | 0, b);
    f = a + 24 | 0;
    break a;
   }
   if ((c[d >> 2] | 0) == (j | 0)) Ne(a, 41); else {
    g = c[a + 52 >> 2] | 0;
    o = Oe(a, 41) | 0;
    d = Oe(a, 40) | 0;
    c[e >> 2] = o;
    c[e + 4 >> 2] = d;
    c[e + 8 >> 2] = j;
    me(a, lc(g, 7159, e) | 0);
   }
   break;
  }
 case 288:
  {
   f = a + 24 | 0;
   d = c[f >> 2] | 0;
   pe(a);
   e = c[k >> 2] | 0;
   if (!(lf(e, d, b, 1) | 0)) {
    lf(e, c[a + 72 >> 2] | 0, b, 1) | 0;
    o = Je(c[k >> 2] | 0, d) | 0;
    c[l + 16 >> 2] = -1;
    c[l + 20 >> 2] = -1;
    c[l >> 2] = 4;
    c[l + 8 >> 2] = o;
    mf(e, b, l);
   }
   break;
  }
 default:
  me(a, 7405);
 } while (0);
 e = l + 16 | 0;
 d = l + 20 | 0;
 g = l + 8 | 0;
 b : while (1) switch (c[m >> 2] | 0) {
 case 46:
  {
   nf(a, b);
   continue b;
  }
 case 91:
  {
   of(h, b);
   pe(a);
   ze(a, l, 0) | 0;
   Se(c[k >> 2] | 0, l);
   if ((c[m >> 2] | 0) != 93) {
    d = 14;
    break b;
   }
   pe(a);
   mf(h, b, l);
   continue b;
  }
 case 58:
  {
   pe(a);
   if ((c[m >> 2] | 0) != 288) {
    d = 17;
    break b;
   }
   o = c[f >> 2] | 0;
   pe(a);
   o = Je(c[k >> 2] | 0, o) | 0;
   c[e >> 2] = -1;
   c[d >> 2] = -1;
   c[l >> 2] = 4;
   c[g >> 2] = o;
   pf(h, b, l);
   qf(a, b, j);
   continue b;
  }
 case 123:
 case 289:
 case 40:
  {
   Me(h, b);
   qf(a, b, j);
   continue b;
  }
 default:
  {
   d = 20;
   break b;
  }
 }
 if ((d | 0) == 14) Ne(a, 93); else if ((d | 0) == 17) Ne(a, 288); else if ((d | 0) == 20) {
  i = n;
  return;
 }
}

function vc(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0.0;
 p = i;
 i = i + 16 | 0;
 k = p;
 j = b + 8 | 0;
 switch (c[j >> 2] & 63 | 0) {
 case 4:
  {
   b = c[b >> 2] | 0;
   e = (c[a + 16 >> 2] | 0) + (((1 << (d[a + 7 >> 0] | 0)) + -1 & c[b + 8 >> 2]) << 5) | 0;
   while (1) {
    if ((c[e + 24 >> 2] | 0) == 68) if ((c[e + 16 >> 2] | 0) == (b | 0)) {
     f = e;
     break;
    }
    e = c[e + 28 >> 2] | 0;
    if (!e) {
     n = 15088;
     o = 22;
     break;
    }
   }
   if ((o | 0) == 22) {
    i = p;
    return n | 0;
   }
   o = f;
   i = p;
   return o | 0;
  }
 case 3:
  {
   q = +h[b >> 3];
   h[k >> 3] = q + 6755399441055744.0;
   e = c[k >> 2] | 0;
   l = +(e | 0);
   if (l == q) {
    e = e + -1 | 0;
    if (e >>> 0 < (c[a + 28 >> 2] | 0) >>> 0) {
     o = (c[a + 12 >> 2] | 0) + (e << 4) | 0;
     i = p;
     return o | 0;
    }
    h[k >> 3] = l + 1.0;
    e = (c[k + 4 >> 2] | 0) + (c[k >> 2] | 0) | 0;
    if ((e | 0) < 0) {
     k = 0 - e | 0;
     e = (e | 0) == (k | 0) ? 0 : k;
    }
    e = (c[a + 16 >> 2] | 0) + (((e | 0) % ((1 << (d[a + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
    while (1) {
     if ((c[e + 24 >> 2] | 0) == 3) if (+h[e + 16 >> 3] == l) {
      m = e;
      break;
     }
     e = c[e + 28 >> 2] | 0;
     if (!e) {
      n = 15088;
      o = 22;
      break;
     }
    }
    if ((o | 0) == 22) {
     i = p;
     return n | 0;
    }
    o = m;
    i = p;
    return o | 0;
   }
   break;
  }
 case 0:
  {
   o = 15088;
   i = p;
   return o | 0;
  }
 default:
  {}
 }
 e = wc(a, b) | 0;
 while (1) {
  if ((c[e + 24 >> 2] | 0) == (c[j >> 2] | 0)) if (xc(0, e + 16 | 0, b) | 0) {
   g = e;
   break;
  }
  e = c[e + 28 >> 2] | 0;
  if (!e) {
   n = 15088;
   o = 22;
   break;
  }
 }
 if ((o | 0) == 22) {
  i = p;
  return n | 0;
 }
 o = g;
 i = p;
 return o | 0;
}

function re(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = c[b >> 2] | 0;
 n = b + 60 | 0;
 g = c[n >> 2] | 0;
 l = g + 4 | 0;
 e = c[l >> 2] | 0;
 k = g + 8 | 0;
 h = c[k >> 2] | 0;
 do if ((e + 1 | 0) >>> 0 > h >>> 0) {
  if (h >>> 0 > 2147483645) ne(b, 6665, 0);
  f = h << 1;
  e = c[b + 52 >> 2] | 0;
  if ((f | 0) == -2) Kb(e); else {
   j = yb(e, c[g >> 2] | 0, h, f) | 0;
   c[g >> 2] = j;
   c[k >> 2] = f;
   i = c[l >> 2] | 0;
   break;
  }
 } else {
  i = e;
  j = c[g >> 2] | 0;
 } while (0);
 c[l >> 2] = i + 1;
 a[j + i >> 0] = o;
 m = b + 56 | 0;
 e = c[m >> 2] | 0;
 l = c[e >> 2] | 0;
 c[e >> 2] = l + -1;
 if (!l) e = de(e) | 0; else {
  l = e + 4 | 0;
  e = c[l >> 2] | 0;
  c[l >> 2] = e + 1;
  e = d[e >> 0] | 0;
 }
 c[b >> 2] = e;
 if ((e | 0) != 61) {
  n = e;
  b = 0;
  o = (n | 0) != (o | 0);
  o = o << 31 >> 31;
  o = o ^ b;
  return o | 0;
 }
 l = b + 52 | 0;
 k = 0;
 while (1) {
  i = c[n >> 2] | 0;
  j = i + 4 | 0;
  f = c[j >> 2] | 0;
  h = i + 8 | 0;
  g = c[h >> 2] | 0;
  if ((f + 1 | 0) >>> 0 > g >>> 0) {
   if (g >>> 0 > 2147483645) {
    g = 16;
    break;
   }
   f = g << 1;
   e = c[l >> 2] | 0;
   if ((f | 0) == -2) {
    g = 18;
    break;
   }
   e = yb(e, c[i >> 2] | 0, g, f) | 0;
   c[i >> 2] = e;
   c[h >> 2] = f;
   f = c[j >> 2] | 0;
  } else e = c[i >> 2] | 0;
  c[j >> 2] = f + 1;
  a[e + f >> 0] = 61;
  e = c[m >> 2] | 0;
  j = c[e >> 2] | 0;
  c[e >> 2] = j + -1;
  if (!j) f = de(e) | 0; else {
   j = e + 4 | 0;
   f = c[j >> 2] | 0;
   c[j >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  e = k + 1 | 0;
  if ((f | 0) == 61) k = e; else {
   g = 24;
   break;
  }
 }
 if ((g | 0) == 16) ne(b, 6665, 0); else if ((g | 0) == 18) Kb(e); else if ((g | 0) == 24) {
  o = (f | 0) != (o | 0);
  o = o << 31 >> 31;
  o = o ^ e;
  return o | 0;
 }
 return 0;
}

function tf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 Ce(b, d);
 switch (c[d >> 2] | 0) {
 case 10:
  {
   h = d + 8 | 0;
   j = c[h >> 2] | 0;
   g = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (j << 2) | 0;
   if ((j | 0) > 0) {
    e = g + -4 | 0;
    f = c[e >> 2] | 0;
    if ((a[3916 + (f & 63) >> 0] | 0) >= 0) i = 4;
   } else i = 4;
   if ((i | 0) == 4) {
    f = c[g >> 2] | 0;
    e = g;
   }
   c[e >> 2] = ((f & 16320 | 0) == 0 & 1) << 6 | f & -16321;
   j = c[h >> 2] | 0;
   i = 7;
   break;
  }
 case 2:
 case 5:
 case 4:
  break;
 default:
  {
   j = uf(b, d, 0) | 0;
   i = 7;
  }
 }
 do if ((i | 0) == 7) {
  e = d + 20 | 0;
  if ((j | 0) != -1) {
   f = c[e >> 2] | 0;
   if ((f | 0) == -1) {
    c[e >> 2] = j;
    break;
   }
   i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    g = i + (f << 2) | 0;
    e = c[g >> 2] | 0;
    h = (e >>> 14) + -131071 | 0;
    h = (h | 0) == -1 ? -1 : f + 1 + h | 0;
    if ((h | 0) == -1) {
     h = e;
     break;
    } else f = h;
   }
   e = j + ~f | 0;
   if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980); else {
    c[g >> 2] = (e << 14) + 2147467264 | h & 16383;
    break;
   }
  }
 } while (0);
 d = d + 16 | 0;
 j = c[d >> 2] | 0;
 c[b + 24 >> 2] = c[b + 20 >> 2];
 e = b + 28 | 0;
 if ((j | 0) == -1) {
  c[d >> 2] = -1;
  return;
 }
 f = c[e >> 2] | 0;
 if ((f | 0) == -1) {
  c[e >> 2] = j;
  c[d >> 2] = -1;
  return;
 }
 i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  g = i + (f << 2) | 0;
  e = c[g >> 2] | 0;
  h = (e >>> 14) + -131071 | 0;
  h = (h | 0) == -1 ? -1 : f + 1 + h | 0;
  if ((h | 0) == -1) {
   h = e;
   break;
  } else f = h;
 }
 e = j + ~f | 0;
 if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980);
 c[g >> 2] = (e << 14) + 2147467264 | h & 16383;
 c[d >> 2] = -1;
 return;
}

function Fh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 f = c[a + 16 >> 2] | 0;
 g = f + 24 | 0;
 j = c[g >> 2] | 0;
 i = f + 28 | 0;
 k = c[(c[i >> 2] | 0) + -4 >> 2] | 0;
 h = k & 63;
 switch (h | 0) {
 case 12:
 case 7:
 case 6:
 case 21:
 case 19:
 case 18:
 case 17:
 case 16:
 case 15:
 case 14:
 case 13:
  {
   h = a + 8 | 0;
   a = c[h >> 2] | 0;
   g = a + -16 | 0;
   c[h >> 2] = g;
   k = k >>> 6 & 255;
   h = c[g + 4 >> 2] | 0;
   i = j + (k << 4) | 0;
   c[i >> 2] = c[g >> 2];
   c[i + 4 >> 2] = h;
   c[j + (k << 4) + 8 >> 2] = c[a + -8 >> 2];
   return;
  }
 case 24:
 case 25:
 case 26:
  {
   f = a + 8 | 0;
   e = c[f >> 2] | 0;
   b = c[e + -8 >> 2] | 0;
   if (!b) b = 1; else if ((b | 0) == 1) b = (c[e + -16 >> 2] | 0) == 0; else b = 0;
   d = b & 1;
   b = d ^ 1;
   c[f >> 2] = e + -16;
   if ((h | 0) == 26) {
    a = (c[(Bb(a, j + (k >>> 23 << 4) | 0, 14) | 0) + 8 >> 2] | 0) == 0;
    b = a ? d : b;
   }
   if ((b | 0) == (k >>> 6 & 255 | 0)) return;
   c[i >> 2] = (c[i >> 2] | 0) + 4;
   return;
  }
 case 22:
  {
   e = a + 8 | 0;
   i = c[e >> 2] | 0;
   d = i + -32 | 0;
   b = d - (j + (k >>> 23 << 4)) | 0;
   l = i + -16 | 0;
   h = c[l + 4 >> 2] | 0;
   j = i + -48 | 0;
   c[j >> 2] = c[l >> 2];
   c[j + 4 >> 2] = h;
   c[i + -40 >> 2] = c[i + -8 >> 2];
   if ((b | 0) > 16) {
    c[e >> 2] = d;
    ec(a, b >> 4);
   }
   j = c[e >> 2] | 0;
   a = c[g >> 2] | 0;
   l = k >>> 6 & 255;
   h = j + -16 | 0;
   i = c[h + 4 >> 2] | 0;
   k = a + (l << 4) | 0;
   c[k >> 2] = c[h >> 2];
   c[k + 4 >> 2] = i;
   c[a + (l << 4) + 8 >> 2] = c[j + -8 >> 2];
   c[e >> 2] = c[f + 4 >> 2];
   return;
  }
 case 34:
  {
   c[a + 8 >> 2] = c[f + 4 >> 2];
   return;
  }
 case 29:
  {
   if (!(k & 8372224)) return;
   c[a + 8 >> 2] = c[f + 4 >> 2];
   return;
  }
 default:
  return;
 }
}

function Ch(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = f + 16 | 0;
 k = c[m >> 2] | 0;
 if ((e[f + 38 >> 1] | 0) > 199) Dh(f, 4256, g);
 h = f + 6 | 0;
 switch (a[h >> 0] | 0) {
 case 0:
  {
   if ((k | 0) != (f + 72 | 0)) Dh(f, 9007, g);
   if (nc(f, g + -16 | 0, -1) | 0) return;
   tc(f);
   return;
  }
 case 1:
  {
   a[h >> 0] = 0;
   l = f + 28 | 0;
   c[k >> 2] = (c[l >> 2] | 0) + (c[k + 20 >> 2] | 0);
   j = k + 18 | 0;
   h = a[j >> 0] | 0;
   if (!(h & 1)) {
    i = c[k + 28 >> 2] | 0;
    if (i) {
     a[k + 37 >> 0] = 1;
     a[j >> 0] = h & 255 | 8;
     g = fb[i & 255](f) | 0;
     k = c[m >> 2] | 0;
     g = (c[f + 8 >> 2] | 0) + (0 - g << 4) | 0;
    }
    h = d[f + 40 >> 0] | 0;
    if (!(h & 6)) {
     j = c[k + 8 >> 2] | 0;
     i = g;
    } else {
     if (h & 2) {
      g = g - (c[l >> 2] | 0) | 0;
      sc(f, 1, -1);
      g = (c[l >> 2] | 0) + g | 0;
     }
     j = c[k + 8 >> 2] | 0;
     c[f + 20 >> 2] = c[j + 28 >> 2];
     i = g;
    }
    g = c[k >> 2] | 0;
    h = b[k + 16 >> 1] | 0;
    c[m >> 2] = j;
    k = f + 8 | 0;
    a : do if (h << 16 >> 16) {
     j = i;
     h = h << 16 >> 16;
     while (1) {
      if (j >>> 0 >= (c[k >> 2] | 0) >>> 0) break;
      i = g + 16 | 0;
      n = j;
      l = c[n + 4 >> 2] | 0;
      m = g;
      c[m >> 2] = c[n >> 2];
      c[m + 4 >> 2] = l;
      c[g + 8 >> 2] = c[j + 8 >> 2];
      h = h + -1 | 0;
      if (!h) {
       g = i;
       break a;
      } else {
       j = j + 16 | 0;
       g = i;
      }
     }
     if ((h | 0) > 0) while (1) {
      i = g + 16 | 0;
      c[g + 8 >> 2] = 0;
      if ((h | 0) > 1) {
       h = h + -1 | 0;
       g = i;
      } else {
       g = i;
       break;
      }
     }
    } while (0);
    c[k >> 2] = g;
   } else tc(f);
   Eh(f, 0);
   return;
  }
 default:
  Dh(f, 9045, g);
 }
}

function Xe(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 32 | 0;
 o = q + 8 | 0;
 n = q;
 m = c[d + 48 >> 2] | 0;
 p = c[d + 64 >> 2] | 0;
 k = c[m >> 2] | 0;
 f = k + 60 | 0;
 g = c[f >> 2] | 0;
 l = m + 44 | 0;
 if ((b[l >> 1] | 0) < (g | 0)) {
  h = g;
  j = c[k + 24 >> 2] | 0;
 } else {
  h = k + 24 | 0;
  j = oe(c[d + 52 >> 2] | 0, c[h >> 2] | 0, f, 12, 32767, 7211) | 0;
  c[h >> 2] = j;
  h = c[f >> 2] | 0;
 }
 if ((g | 0) < (h | 0)) {
  f = g;
  do {
   c[j + (f * 12 | 0) >> 2] = 0;
   f = f + 1 | 0;
  } while ((f | 0) != (h | 0));
 }
 f = b[l >> 1] | 0;
 c[j + ((f << 16 >> 16) * 12 | 0) >> 2] = e;
 if (!(a[e + 5 >> 0] & 3)) e = f; else if (!(a[k + 5 >> 0] & 4)) e = f; else {
  Ec(c[d + 52 >> 2] | 0, k, e);
  e = b[l >> 1] | 0;
 }
 b[l >> 1] = e + 1 << 16 >> 16;
 k = p + 4 | 0;
 j = c[k >> 2] | 0;
 if ((j + 1 - (c[m + 40 >> 2] | 0) | 0) > 200) {
  h = m + 12 | 0;
  g = c[(c[h >> 2] | 0) + 52 >> 2] | 0;
  f = c[(c[m >> 2] | 0) + 64 >> 2] | 0;
  if (!f) {
   l = 6600;
   c[o >> 2] = 7211;
   m = o + 4 | 0;
   c[m >> 2] = 200;
   m = o + 8 | 0;
   c[m >> 2] = l;
   m = lc(g, 6614, o) | 0;
   l = c[h >> 2] | 0;
   me(l, m);
  }
  c[n >> 2] = f;
  m = lc(g, 6580, n) | 0;
  c[o >> 2] = 7211;
  n = o + 4 | 0;
  c[n >> 2] = 200;
  n = o + 8 | 0;
  c[n >> 2] = m;
  o = lc(g, 6614, o) | 0;
  n = c[h >> 2] | 0;
  me(n, o);
 }
 f = p + 8 | 0;
 if ((j + 2 | 0) > (c[f >> 2] | 0)) {
  o = oe(c[d + 52 >> 2] | 0, c[p >> 2] | 0, f, 2, 2147483645, 7211) | 0;
  c[p >> 2] = o;
  d = c[k >> 2] | 0;
  p = o;
  o = d + 1 | 0;
  c[k >> 2] = o;
  d = p + (d << 1) | 0;
  b[d >> 1] = e;
  i = q;
  return;
 } else {
  d = j;
  p = c[p >> 2] | 0;
  o = d + 1 | 0;
  c[k >> 2] = o;
  d = p + (d << 1) | 0;
  b[d >> 1] = e;
  i = q;
  return;
 }
}
function bg(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 g = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[g >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  h = -1001e3 - e | 0;
  e = c[g >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (h | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (h + -1 << 4) | 0;
  }
 } while (0);
 a : do switch (c[e + 8 >> 2] & 63 | 0) {
 case 38:
  {
   e = c[e >> 2] | 0;
   if ((f | 0) <= 0) {
    b = 0;
    return b | 0;
   }
   if ((d[e + 6 >> 0] | 0 | 0) < (f | 0)) {
    b = 0;
    return b | 0;
   } else {
    g = e;
    i = 17772;
    e = e + 16 + (f + -1 << 4) | 0;
    break a;
   }
  }
 case 6:
  {
   e = c[e >> 2] | 0;
   h = c[e + 12 >> 2] | 0;
   if ((f | 0) <= 0) {
    b = 0;
    return b | 0;
   }
   if ((c[h + 40 >> 2] | 0) < (f | 0)) {
    b = 0;
    return b | 0;
   }
   f = f + -1 | 0;
   g = c[e + 16 + (f << 2) >> 2] | 0;
   e = c[g + 8 >> 2] | 0;
   h = c[(c[h + 28 >> 2] | 0) + (f << 3) >> 2] | 0;
   if (!h) i = 17772; else i = h + 16 | 0;
   break;
  }
 default:
  {
   b = 0;
   return b | 0;
  }
 } while (0);
 f = b + 8 | 0;
 h = c[f >> 2] | 0;
 l = h + -16 | 0;
 c[f >> 2] = l;
 k = c[l + 4 >> 2] | 0;
 j = e;
 c[j >> 2] = c[l >> 2];
 c[j + 4 >> 2] = k;
 c[e + 8 >> 2] = c[h + -8 >> 2];
 e = c[f >> 2] | 0;
 if (!(c[e + 8 >> 2] & 64)) {
  l = i;
  return l | 0;
 }
 h = c[e >> 2] | 0;
 if (!(a[h + 5 >> 0] & 3)) {
  l = i;
  return l | 0;
 }
 e = g;
 if (!(a[e + 5 >> 0] & 4)) {
  l = i;
  return l | 0;
 }
 Ec(b, e, h);
 l = i;
 return l | 0;
}

function zb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 l = b + 12 | 0;
 i = c[l >> 2] | 0;
 k = i + 62 | 0;
 j = a[k >> 0] | 0;
 h = (e | 0) != 0;
 if (h) {
  a[k >> 0] = 1;
  e = 6;
 } else {
  a[k >> 0] = 0;
  f = i + 104 | 0;
  e = c[f >> 2] | 0;
  if (!e) e = 6; else {
   do {
    g = e + 5 | 0;
    a[g >> 0] = d[g >> 0] & 191;
    Ab(b, 1);
    e = c[f >> 2] | 0;
   } while ((e | 0) != 0);
   if ((a[k >> 0] | 0) == 2) e = 7; else e = 6;
  }
 }
 if ((e | 0) == 6) if ((d[i + 61 >> 0] | 0) < 2) e = 7;
 if ((e | 0) == 7) {
  g = c[l >> 2] | 0;
  a[g + 61 >> 0] = 2;
  c[g + 64 >> 2] = 0;
  f = g + 72 | 0;
  do e = Wb(b, f, 1) | 0; while ((e | 0) == (f | 0));
  c[g + 80 >> 2] = e;
  f = g + 68 | 0;
  do e = Wb(b, f, 1) | 0; while ((e | 0) == (f | 0));
  c[g + 76 >> 2] = e;
 }
 e = c[l >> 2] | 0;
 f = e + 61 | 0;
 if ((a[f >> 0] | 0) == 5) f = 5; else {
  do Ob(b) | 0; while ((a[f >> 0] | 0) != 5);
  f = c[l >> 2] | 0;
  e = f;
  f = a[f + 61 >> 0] | 0;
 }
 g = e + 61 | 0;
 if (!(1 << (f & 255) & -33)) {
  do Ob(b) | 0; while (!(1 << d[g >> 0] & -33 | 0));
  f = c[l >> 2] | 0;
  e = f;
  f = a[f + 61 >> 0] | 0;
 }
 e = e + 61 | 0;
 if (f << 24 >> 24 != 5) do Ob(b) | 0; while ((a[e >> 0] | 0) != 5);
 if (j << 24 >> 24 == 2) {
  e = (c[l >> 2] | 0) + 61 | 0;
  if (a[e >> 0] | 0) do Ob(b) | 0; while ((a[e >> 0] | 0) != 0);
 }
 a[k >> 0] = j;
 k = (c[i + 12 >> 2] | 0) + (c[i + 8 >> 2] | 0) | 0;
 g = (k | 0) / 100 | 0;
 f = c[i + 156 >> 2] | 0;
 j = _(g, 0 - f | 0) | 0;
 rc(i, ((f | 0) < (2147483644 / (g | 0) | 0 | 0) ? j : -2147483644) + k | 0);
 if (h) return;
 f = (c[l >> 2] | 0) + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) return;
 do {
  l = e + 5 | 0;
  a[l >> 0] = d[l >> 0] & 191;
  Ab(b, 1);
  e = c[f >> 2] | 0;
 } while ((e | 0) != 0);
 return;
}

function Wh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l + 8 | 0;
 j = l;
 if ((c | 0) <= (b | 0)) {
  i = l;
  return;
 }
 while (1) {
  Bd(a, 1, b);
  Bd(a, 1, c);
  if (!(Xh(a, -1, -2) | 0)) wd(a, -3); else {
   hh(a, 1, b);
   hh(a, 1, c);
  }
  d = c - b | 0;
  if ((d | 0) == 1) {
   b = 24;
   break;
  }
  e = (c + b | 0) / 2 | 0;
  Bd(a, 1, e);
  Bd(a, 1, b);
  do if (!(Xh(a, -2, -1) | 0)) {
   wd(a, -2);
   Bd(a, 1, c);
   if (!(Xh(a, -1, -2) | 0)) {
    wd(a, -3);
    break;
   } else {
    hh(a, 1, e);
    hh(a, 1, c);
    break;
   }
  } else {
   hh(a, 1, e);
   hh(a, 1, b);
  } while (0);
  if ((d | 0) == 2) {
   b = 24;
   break;
  }
  Bd(a, 1, e);
  Of(a, -1);
  h = c + -1 | 0;
  Bd(a, 1, h);
  hh(a, 1, e);
  hh(a, 1, h);
  d = b;
  g = h;
  while (1) {
   f = d + 1 | 0;
   Bd(a, 1, f);
   if (!(Xh(a, -1, -2) | 0)) {
    e = d;
    d = f;
   } else {
    e = f;
    while (1) {
     if ((c | 0) <= (e | 0)) md(a, 9418, j) | 0;
     wd(a, -2);
     d = e + 1 | 0;
     Bd(a, 1, d);
     if (!(Xh(a, -1, -2) | 0)) break; else e = d;
    }
   }
   f = g + -1 | 0;
   Bd(a, 1, f);
   if (Xh(a, -3, -1) | 0) {
    g = f;
    while (1) {
     if ((g | 0) <= (b | 0)) md(a, 9418, k) | 0;
     wd(a, -2);
     f = g + -1 | 0;
     Bd(a, 1, f);
     if (!(Xh(a, -3, -1) | 0)) break; else g = f;
    }
   }
   if ((g | 0) <= (d | 0)) break;
   hh(a, 1, d);
   hh(a, 1, f);
   g = f;
  }
  wd(a, -4);
  Bd(a, 1, h);
  Bd(a, 1, d);
  hh(a, 1, h);
  hh(a, 1, d);
  g = (d - b | 0) < (c - d | 0);
  f = e + 2 | 0;
  d = b;
  b = g ? f : b;
  h = c;
  c = g ? c : e;
  Wh(a, g ? d : f, g ? e : h);
  if ((c | 0) <= (b | 0)) {
   b = 24;
   break;
  }
 }
 if ((b | 0) == 24) {
  i = l;
  return;
 }
}

function Kg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = c[a + 16 >> 2] | 0;
 g = (b | 0) > 0;
 do if (g) {
  e = (c[h >> 2] | 0) + (b << 4) | 0;
  e = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   e = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   e = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  e = c[h >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 switch (c[e + 8 >> 2] & 63 | 0) {
 case 5:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 6:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 38:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 22:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 8:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 2:
 case 7:
  {
   do if (g) {
    e = (c[h >> 2] | 0) + (b << 4) | 0;
    e = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
   } else {
    if ((b | 0) >= -1000999) {
     e = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
     break;
    }
    if ((b | 0) == -1001e3) {
     e = (c[a + 12 >> 2] | 0) + 40 | 0;
     break;
    }
    f = -1001e3 - b | 0;
    e = c[h >> 2] | 0;
    if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
     e = c[e >> 2] | 0;
     e = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
    }
   } while (0);
   switch (c[e + 8 >> 2] & 15 | 0) {
   case 7:
    {
     h = (c[e >> 2] | 0) + 24 | 0;
     return h | 0;
    }
   case 2:
    {
     h = c[e >> 2] | 0;
     return h | 0;
    }
   default:
    {
     h = 0;
     return h | 0;
    }
   }
  }
 default:
  {
   h = 0;
   return h | 0;
  }
 }
 return 0;
}

function Hc(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 p = i;
 i = i + 32 | 0;
 j = p + 16 | 0;
 l = p;
 o = e + 8 | 0;
 k = c[o >> 2] | 0;
 do if ((k | 0) == 3) {
  l = e;
  m = 6;
 } else if ((k & 15 | 0) == 4) {
  k = c[e >> 2] | 0;
  if (Ic(k + 16 | 0, c[k + 12 >> 2] | 0, j) | 0) {
   h[l >> 3] = +h[j >> 3];
   c[l + 8 >> 2] = 3;
   m = 6;
   break;
  }
 } while (0);
 a : do if ((m | 0) == 6) {
  k = c[f + 8 >> 2] | 0;
  do if ((k | 0) == 3) j = f; else {
   if ((k & 15 | 0) == 4) {
    m = c[f >> 2] | 0;
    if (Ic(m + 16 | 0, c[m + 12 >> 2] | 0, j) | 0) break;
   }
   break a;
  } while (0);
  h[b >> 3] = +Jc(g + -6 | 0, +h[l >> 3], +h[j >> 3]);
  c[b + 8 >> 2] = 3;
  i = p;
  return;
 } while (0);
 j = Bb(a, e, g) | 0;
 if (!(c[j + 8 >> 2] | 0)) {
  j = Bb(a, f, g) | 0;
  if (!(c[j + 8 >> 2] | 0)) Kc(a, e, f); else n = j;
 } else n = j;
 l = a + 28 | 0;
 m = c[l >> 2] | 0;
 g = a + 8 | 0;
 k = c[g >> 2] | 0;
 c[g >> 2] = k + 16;
 r = n;
 q = c[r + 4 >> 2] | 0;
 j = k;
 c[j >> 2] = c[r >> 2];
 c[j + 4 >> 2] = q;
 c[k + 8 >> 2] = c[n + 8 >> 2];
 k = c[g >> 2] | 0;
 c[g >> 2] = k + 16;
 j = e;
 e = c[j + 4 >> 2] | 0;
 n = k;
 c[n >> 2] = c[j >> 2];
 c[n + 4 >> 2] = e;
 c[k + 8 >> 2] = c[o >> 2];
 o = c[g >> 2] | 0;
 c[g >> 2] = o + 16;
 k = f;
 n = c[k + 4 >> 2] | 0;
 e = o;
 c[e >> 2] = c[k >> 2];
 c[e + 4 >> 2] = n;
 c[o + 8 >> 2] = c[f + 8 >> 2];
 Eb(a, (c[g >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 b = (c[l >> 2] | 0) + (b - m) | 0;
 o = c[g >> 2] | 0;
 e = o + -16 | 0;
 c[g >> 2] = e;
 f = c[e + 4 >> 2] | 0;
 n = b;
 c[n >> 2] = c[e >> 2];
 c[n + 4 >> 2] = f;
 c[b + 8 >> 2] = c[o + -8 >> 2];
 i = p;
 return;
}

function qc(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = c[b + 12 >> 2] | 0;
 do if ((a[j + 62 >> 0] | 0) == 2) {
  h = j + 20 | 0;
  e = c[h >> 2] | 0;
  if (!e) {
   zb(b, 0);
   e = c[j + 8 >> 2] | 0;
   i = c[j + 12 >> 2] | 0;
   d = j + 61 | 0;
   f = i;
   g = e;
   e = i + e | 0;
  } else {
   d = j + 61 | 0;
   if ((a[d >> 0] | 0) != 5) do Ob(b) | 0; while ((a[d >> 0] | 0) != 5);
   a[d >> 0] = 0;
   g = c[j + 8 >> 2] | 0;
   f = c[j + 12 >> 2] | 0;
   i = (f + g | 0) >>> 0 > (_(c[j + 160 >> 2] | 0, (e >>> 0) / 100 | 0) | 0) >>> 0;
   e = i ? 0 : e;
  }
  c[h >> 2] = e;
  f = g + f | 0;
  h = (f | 0) / 100 | 0;
  g = c[j + 156 >> 2] | 0;
  i = _(g, 0 - h | 0) | 0;
  rc(j, ((g | 0) < (2147483644 / (h | 0) | 0 | 0) ? i : -2147483644) + f | 0);
  f = d;
 } else {
  e = j + 12 | 0;
  d = c[j + 164 >> 2] | 0;
  d = (d | 0) < 40 ? 40 : d;
  g = ((c[e >> 2] | 0) / 200 | 0) + 1 | 0;
  h = _(d, g) | 0;
  f = j + 61 | 0;
  h = (g | 0) < (2147483644 / (d | 0) | 0 | 0) ? h : 2147483644;
  do {
   h = h - (Ob(b) | 0) | 0;
   g = (a[f >> 0] | 0) == 5;
   if ((h | 0) <= -1600) {
    i = 11;
    break;
   }
  } while (!g);
  if ((i | 0) == 11) if (!g) {
   rc(j, ((h | 0) / (d | 0) | 0) * 200 | 0);
   break;
  }
  h = (c[j + 20 >> 2] | 0) / 100 | 0;
  g = c[j + 156 >> 2] | 0;
  i = _(g, 0 - h | 0) | 0;
  rc(j, (c[e >> 2] | 0) + (c[j + 8 >> 2] | 0) + ((g | 0) < (2147483644 / (h | 0) | 0 | 0) ? i : -2147483644) | 0);
 } while (0);
 e = j + 104 | 0;
 if (!(c[e >> 2] | 0)) return; else d = 0;
 while (1) {
  if ((d | 0) >= 4) if ((a[f >> 0] | 0) != 5) {
   i = 18;
   break;
  }
  Ab(b, 1);
  if (!(c[e >> 2] | 0)) {
   i = 18;
   break;
  } else d = d + 1 | 0;
 }
 if ((i | 0) == 18) return;
}

function wk(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 112 | 0;
 g = l;
 j = l + 4 | 0;
 if ((Gd(b, 1) | 0) == 8) {
  f = 1;
  k = yh(b, 1) | 0;
 } else {
  f = 0;
  k = b;
 }
 h = f | 2;
 e = Fd(b, h, 11495, 0) | 0;
 f = f + 1 | 0;
 do if (!(xk(b, f) | 0)) {
  if ((Gd(b, f) | 0) == 6) {
   c[g >> 2] = e;
   pd(b, 11502, g) | 0;
   e = dd(b, -1, 0) | 0;
   Of(b, f);
   wh(b, k, 1);
   break;
  }
  k = Id(b, f, 11506) | 0;
  i = l;
  return k | 0;
 } else if (!(nd(k, hd(b, f, 0) | 0, j) | 0)) {
  Md(b);
  k = 1;
  i = l;
  return k | 0;
 } while (0);
 if (!(od(k, e, j) | 0)) {
  k = Id(b, h, 11533) | 0;
  i = l;
  return k | 0;
 }
 Rg(b, 0, 2);
 if (qm(e, 83) | 0) {
  Tf(b, c[j + 16 >> 2] | 0) | 0;
  kd(b, -2, 11548);
  Tf(b, j + 36 | 0) | 0;
  kd(b, -2, 11555);
  Wd(b, c[j + 24 >> 2] | 0);
  kd(b, -2, 11565);
  Wd(b, c[j + 28 >> 2] | 0);
  kd(b, -2, 11577);
  Tf(b, c[j + 12 >> 2] | 0) | 0;
  kd(b, -2, 11593);
 }
 if (qm(e, 108) | 0) {
  Wd(b, c[j + 20 >> 2] | 0);
  kd(b, -2, 11598);
 }
 if (qm(e, 117) | 0) {
  Wd(b, d[j + 32 >> 0] | 0);
  kd(b, -2, 11610);
  Wd(b, d[j + 33 >> 0] | 0);
  kd(b, -2, 11615);
  jd(b, a[j + 34 >> 0] | 0);
  kd(b, -2, 11623);
 }
 if (qm(e, 110) | 0) {
  Tf(b, c[j + 4 >> 2] | 0) | 0;
  kd(b, -2, 11632);
  Tf(b, c[j + 8 >> 2] | 0) | 0;
  kd(b, -2, 11637);
 }
 if (qm(e, 116) | 0) {
  jd(b, a[j + 35 >> 0] | 0);
  kd(b, -2, 11646);
 }
 if (qm(e, 76) | 0) {
  if ((k | 0) == (b | 0)) {
   Of(b, -2);
   Qd(b, -3);
  } else wh(k, b, 1);
  kd(b, -2, 11657);
 }
 if (!(qm(e, 102) | 0)) {
  k = 1;
  i = l;
  return k | 0;
 }
 if ((k | 0) == (b | 0)) {
  Of(b, -2);
  Qd(b, -3);
 } else wh(k, b, 1);
 kd(b, -2, 11669);
 k = 1;
 i = l;
 return k | 0;
}

function Wb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = b + 12 | 0;
 l = c[(c[m >> 2] | 0) + 60 >> 2] | 0;
 n = l & 255 ^ 3;
 k = (l & 16711680 | 0) == 131072;
 j = k ? 255 : 184;
 l = k ? 64 : l & 3;
 k = k ? 64 : 0;
 g = c[e >> 2] | 0;
 a : do if (!g) g = 0; else {
  i = f;
  b : while (1) {
   if (!i) break a;
   i = i + -1 | 0;
   f = g + 5 | 0;
   h = d[f >> 0] | 0;
   c : do if (!((h ^ 3) & n)) {
    c[e >> 2] = c[g >> 2];
    h = c[g + 4 >> 2] | 0;
    f = h >>> 16;
    switch (h & 255 | 0) {
    case 9:
     {
      Xb(b, g);
      break c;
     }
    case 6:
     {
      yb(b, g, (f << 2 & 1020) + 16 | 0, 0) | 0;
      break c;
     }
    case 38:
     {
      yb(b, g, (f << 4 & 4080) + 16 | 0, 0) | 0;
      break c;
     }
    case 10:
     {
      Yb(b, g);
      break c;
     }
    case 5:
     {
      Zb(b, g);
      break c;
     }
    case 8:
     {
      _b(b, g);
      break c;
     }
    case 7:
     {
      yb(b, g, (c[g + 16 >> 2] | 0) + 24 | 0, 0) | 0;
      break c;
     }
    case 4:
     {
      h = (c[m >> 2] | 0) + 28 | 0;
      c[h >> 2] = (c[h >> 2] | 0) + -1;
      break;
     }
    case 20:
     break;
    default:
     break c;
    }
    yb(b, g, (c[g + 12 >> 2] | 0) + 17 | 0, 0) | 0;
   } else {
    if (h & k | 0) {
     e = 0;
     break b;
    }
    if ((a[g + 4 >> 0] | 0) == 8) if (c[g + 28 >> 2] | 0) {
     Wb(b, g + 56 | 0, -3) | 0;
     bc(g);
     if ((a[(c[m >> 2] | 0) + 62 >> 0] | 0) != 1) cc(g);
    }
    a[f >> 0] = h & j | l;
    e = g;
   } while (0);
   g = c[e >> 2] | 0;
   if (!g) {
    g = 0;
    break a;
   }
  }
  return e | 0;
 } while (0);
 n = (g | 0) == 0 ? 0 : e;
 return n | 0;
}

function hf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if ((c[b + 20 >> 2] | 0) == (e | 0)) {
  c[b + 24 >> 2] = e;
  f = b + 28 | 0;
  if ((d | 0) == -1) return;
  g = c[f >> 2] | 0;
  if ((g | 0) == -1) {
   c[f >> 2] = d;
   return;
  }
  j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   h = j + (g << 2) | 0;
   f = c[h >> 2] | 0;
   i = (f >>> 14) + -131071 | 0;
   i = (i | 0) == -1 ? -1 : g + 1 + i | 0;
   if ((i | 0) == -1) {
    i = f;
    break;
   } else g = i;
  }
  f = ~g + d | 0;
  if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980);
  c[h >> 2] = (f << 14) + 2147467264 | i & 16383;
  return;
 }
 if ((d | 0) == -1) return;
 k = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  j = k + (d << 2) | 0;
  i = c[j >> 2] | 0;
  g = (i >>> 14) + -131071 | 0;
  h = d;
  d = (g | 0) == -1 ? -1 : d + 1 + g | 0;
  if ((h | 0) > 0) {
   g = j + -4 | 0;
   f = c[g >> 2] | 0;
   if ((a[3916 + (f & 63) >> 0] | 0) >= 0) l = 14;
  } else l = 14;
  if ((l | 0) == 14) {
   l = 0;
   f = i;
   g = j;
  }
  if ((f & 63 | 0) == 28) {
   c[g >> 2] = f & 8372224 | f >>> 23 << 6 | 27;
   f = ~h + e | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    l = 17;
    break;
   }
   f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
  } else {
   f = ~h + e | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    l = 20;
    break;
   }
   f = i & 16383 | (f << 14) + 2147467264;
  }
  c[j >> 2] = f;
  if ((d | 0) == -1) {
   l = 23;
   break;
  }
 }
 if ((l | 0) == 17) me(c[b + 12 >> 2] | 0, 6980); else if ((l | 0) == 20) me(c[b + 12 >> 2] | 0, 6980); else if ((l | 0) == 23) return;
}

function qn(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 d = b & 2147483647;
 if (d >>> 0 > 1072693247) if (!(d + -1072693248 | c[k >> 2])) {
  a = (b | 0) < 0 ? 3.141592653589793 : 0.0;
  return +a;
 } else {
  a = 0.0 / (a - a);
  return +a;
 }
 if (d >>> 0 < 1071644672) {
  if (d >>> 0 < 1012924417) {
   a = 1.5707963267948966;
   return +a;
  }
  e = a * a;
  a = 1.5707963267948966 - (a - (6.123233995736766e-17 - e * (e * (e * (e * (e * (e * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (e * (e * (e * (e * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a));
  return +a;
 }
 if ((b | 0) < 0) {
  a = (a + 1.0) * .5;
  e = +O(+a);
  e = (1.5707963267948966 - (e + (a * (a * (a * (a * (a * (a * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (a * (a * (a * (a * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * e + -6.123233995736766e-17))) * 2.0;
  return +e;
 } else {
  f = (1.0 - a) * .5;
  a = +O(+f);
  h[k >> 3] = a;
  d = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = d;
  e = +h[k >> 3];
  e = (e + (f * (f * (f * (f * (f * (f * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (f * (f * (f * (f * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a + (f - e * e) / (a + e))) * 2.0;
  return +e;
 }
 return 0.0;
}

function xb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 e = i;
 i = i + 16 | 0;
 g = e;
 f = c[b + 12 >> 2] | 0;
 j = yb(b, 0, 0, 640) | 0;
 c[b + 28 >> 2] = j;
 c[b + 32 >> 2] = 40;
 k = j + 8 | 0;
 c[k >> 2] = 0;
 c[j + 24 >> 2] = 0;
 c[j + 40 >> 2] = 0;
 c[j + 56 >> 2] = 0;
 c[j + 72 >> 2] = 0;
 c[j + 88 >> 2] = 0;
 c[j + 104 >> 2] = 0;
 c[j + 120 >> 2] = 0;
 c[j + 136 >> 2] = 0;
 c[j + 152 >> 2] = 0;
 c[j + 168 >> 2] = 0;
 c[j + 184 >> 2] = 0;
 c[j + 200 >> 2] = 0;
 c[j + 216 >> 2] = 0;
 c[j + 232 >> 2] = 0;
 c[j + 248 >> 2] = 0;
 c[j + 264 >> 2] = 0;
 c[j + 280 >> 2] = 0;
 c[j + 296 >> 2] = 0;
 c[j + 312 >> 2] = 0;
 c[j + 328 >> 2] = 0;
 c[j + 344 >> 2] = 0;
 c[j + 360 >> 2] = 0;
 c[j + 376 >> 2] = 0;
 c[j + 392 >> 2] = 0;
 c[j + 408 >> 2] = 0;
 c[j + 424 >> 2] = 0;
 c[j + 440 >> 2] = 0;
 c[j + 456 >> 2] = 0;
 c[j + 472 >> 2] = 0;
 c[j + 488 >> 2] = 0;
 c[j + 504 >> 2] = 0;
 c[j + 520 >> 2] = 0;
 c[j + 536 >> 2] = 0;
 c[j + 552 >> 2] = 0;
 c[j + 568 >> 2] = 0;
 c[j + 584 >> 2] = 0;
 c[j + 600 >> 2] = 0;
 c[j + 616 >> 2] = 0;
 c[j + 632 >> 2] = 0;
 c[b + 24 >> 2] = j + 560;
 h = b + 72 | 0;
 c[b + 80 >> 2] = 0;
 c[b + 84 >> 2] = 0;
 a[b + 90 >> 0] = 0;
 c[h >> 2] = j;
 c[b + 8 >> 2] = j + 16;
 c[k >> 2] = 0;
 c[b + 76 >> 2] = j + 336;
 c[b + 16 >> 2] = h;
 h = Fc(b) | 0;
 c[f + 40 >> 2] = h;
 c[f + 48 >> 2] = 69;
 Cc(b, h, 2, 0);
 c[g >> 2] = b;
 j = g + 8 | 0;
 c[j >> 2] = 72;
 Tc(b, h, 1, g);
 c[g >> 2] = Fc(b) | 0;
 c[j >> 2] = 69;
 Tc(b, h, 2, g);
 Mb(b, 32);
 Zc(b);
 $c(b);
 b = Lb(b, 5328, 17) | 0;
 c[f + 180 >> 2] = b;
 b = b + 5 | 0;
 a[b >> 0] = d[b >> 0] | 0 | 32;
 a[f + 63 >> 0] = 1;
 i = e;
 return;
}

function qf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 j = m + 24 | 0;
 l = m;
 g = b + 48 | 0;
 k = c[g >> 2] | 0;
 h = b + 16 | 0;
 switch (c[h >> 2] | 0) {
 case 40:
  {
   pe(b);
   if ((c[h >> 2] | 0) == 41) c[l >> 2] = 0; else {
    ze(b, l, 0) | 0;
    if ((c[h >> 2] | 0) == 44) do {
     pe(b);
     Me(c[g >> 2] | 0, l);
     ze(b, l, 0) | 0;
    } while ((c[h >> 2] | 0) == 44);
    Te(k, l, -1);
    if ((c[h >> 2] | 0) != 41) if ((c[b + 4 >> 2] | 0) == (f | 0)) Ne(b, 41); else {
     h = c[b + 52 >> 2] | 0;
     n = Oe(b, 41) | 0;
     g = Oe(b, 40) | 0;
     c[j >> 2] = n;
     c[j + 4 >> 2] = g;
     c[j + 8 >> 2] = f;
     me(b, lc(h, 7159, j) | 0);
    }
   }
   pe(b);
   break;
  }
 case 123:
  {
   Le(b, l);
   break;
  }
 case 289:
  {
   n = Je(k, c[b + 24 >> 2] | 0) | 0;
   c[l + 16 >> 2] = -1;
   c[l + 20 >> 2] = -1;
   c[l >> 2] = 4;
   c[l + 8 >> 2] = n;
   pe(b);
   break;
  }
 default:
  me(b, 7423);
 }
 b = e + 8 | 0;
 g = c[b >> 2] | 0;
 switch (c[l >> 2] | 0) {
 case 0:
  break;
 case 13:
 case 12:
  {
   n = 0;
   n = Ke(k, 29, g, n, 2) | 0;
   l = e + 16 | 0;
   c[l >> 2] = -1;
   l = e + 20 | 0;
   c[l >> 2] = -1;
   c[e >> 2] = 12;
   c[b >> 2] = n;
   rf(k, f);
   f = g + 1 | 0;
   f = f & 255;
   n = k + 48 | 0;
   a[n >> 0] = f;
   i = m;
   return;
  }
 default:
  Me(k, l);
 }
 n = (d[k + 48 >> 0] | 0) - g | 0;
 n = Ke(k, 29, g, n, 2) | 0;
 l = e + 16 | 0;
 c[l >> 2] = -1;
 l = e + 20 | 0;
 c[l >> 2] = -1;
 c[e >> 2] = 12;
 c[b >> 2] = n;
 rf(k, f);
 f = g + 1 | 0;
 f = f & 255;
 n = k + 48 | 0;
 a[n >> 0] = f;
 i = m;
 return;
}

function Yd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 1088 | 0;
 n = o + 40 | 0;
 j = o + 24 | 0;
 g = o + 8 | 0;
 f = o;
 k = o + 56 | 0;
 h = o + 52 | 0;
 m = (Kd(b) | 0) + 1 | 0;
 if (!d) {
  qd(b, 12281, 6) | 0;
  c[k + 4 >> 2] = c[720];
 } else {
  c[f >> 2] = d;
  pd(b, 6385, f) | 0;
  l = wm(d, 9564) | 0;
  c[k + 4 >> 2] = l;
  if (!l) {
   n = Ol(c[(_k() | 0) >> 2] | 0) | 0;
   l = (dd(b, m, 0) | 0) + 1 | 0;
   c[g >> 2] = 9680;
   c[g + 4 >> 2] = l;
   c[g + 8 >> 2] = n;
   pd(b, 6389, g) | 0;
   Qd(b, m);
   n = 7;
   i = o;
   return n | 0;
  }
 }
 if (Zd(k, h) | 0) {
  l = c[k >> 2] | 0;
  c[k >> 2] = l + 1;
  a[k + 8 + l >> 0] = 10;
 }
 f = c[h >> 2] | 0;
 l = (d | 0) != 0;
 do if (l & (f | 0) == 27) {
  g = k + 4 | 0;
  d = _m(d, 6406, c[g >> 2] | 0) | 0;
  c[g >> 2] = d;
  if (d | 0) {
   Zd(k, h) | 0;
   f = c[h >> 2] | 0;
   break;
  }
  n = Ol(c[(_k() | 0) >> 2] | 0) | 0;
  l = (dd(b, m, 0) | 0) + 1 | 0;
  c[j >> 2] = 6409;
  c[j + 4 >> 2] = l;
  c[j + 8 >> 2] = n;
  pd(b, 6389, j) | 0;
  Qd(b, m);
  n = 7;
  i = o;
  return n | 0;
 } while (0);
 if ((f | 0) != -1) {
  j = c[k >> 2] | 0;
  c[k >> 2] = j + 1;
  a[k + 8 + j >> 0] = f;
 }
 h = $d(b, 6, k, dd(b, -1, 0) | 0, e) | 0;
 f = c[k + 4 >> 2] | 0;
 g = zm(f) | 0;
 if (l) tm(f) | 0;
 if (!g) {
  Qd(b, m);
  n = h;
  i = o;
  return n | 0;
 } else {
  wd(b, m);
  l = Ol(c[(_k() | 0) >> 2] | 0) | 0;
  k = (dd(b, m, 0) | 0) + 1 | 0;
  c[n >> 2] = 9735;
  c[n + 4 >> 2] = k;
  c[n + 8 >> 2] = l;
  pd(b, 6389, n) | 0;
  Qd(b, m);
  n = 7;
  i = o;
  return n | 0;
 }
 return 0;
}

function le(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 32 | 0;
 o = r + 8 | 0;
 n = r;
 p = c[b >> 2] | 0;
 m = p + 40 | 0;
 g = c[m >> 2] | 0;
 q = b + 47 | 0;
 k = d[q >> 0] | 0;
 if ((k + 1 | 0) >>> 0 > 255) {
  l = b + 12 | 0;
  h = c[(c[l >> 2] | 0) + 52 >> 2] | 0;
  j = c[p + 64 >> 2] | 0;
  if (!j) {
   t = 6600;
   c[o >> 2] = 6646;
   s = o + 4 | 0;
   c[s >> 2] = 255;
   s = o + 8 | 0;
   c[s >> 2] = t;
   s = lc(h, 6614, o) | 0;
   t = c[l >> 2] | 0;
   me(t, s);
  }
  c[n >> 2] = j;
  s = lc(h, 6580, n) | 0;
  c[o >> 2] = 6646;
  t = o + 4 | 0;
  c[t >> 2] = 255;
  t = o + 8 | 0;
  c[t >> 2] = s;
  t = lc(h, 6614, o) | 0;
  s = c[l >> 2] | 0;
  me(s, t);
 }
 if ((k | 0) < (g | 0)) h = g; else {
  h = p + 28 | 0;
  c[h >> 2] = oe(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, c[h >> 2] | 0, m, 8, 255, 6646) | 0;
  h = c[m >> 2] | 0;
 }
 j = c[p + 28 >> 2] | 0;
 if ((g | 0) < (h | 0)) do {
  c[j + (g << 3) >> 2] = 0;
  g = g + 1 | 0;
 } while ((g | 0) < (h | 0));
 g = a[q >> 0] | 0;
 t = g & 255;
 a[j + (t << 3) + 4 >> 0] = (c[f >> 2] | 0) == 7 & 1;
 a[j + (t << 3) + 5 >> 0] = c[f + 8 >> 2];
 c[j + (t << 3) >> 2] = e;
 if (!(a[e + 5 >> 0] & 3)) {
  t = g;
  s = t + 1 << 24 >> 24;
  a[q >> 0] = s;
  t = t & 255;
  i = r;
  return t | 0;
 }
 if (!(a[p + 5 >> 0] & 4)) {
  t = g;
  s = t + 1 << 24 >> 24;
  a[q >> 0] = s;
  t = t & 255;
  i = r;
  return t | 0;
 }
 Ec(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, p, e);
 t = a[q >> 0] | 0;
 s = t + 1 << 24 >> 24;
 a[q >> 0] = s;
 t = t & 255;
 i = r;
 return t | 0;
}

function ub(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 32 | 0;
 f = j + 8 | 0;
 g = j;
 h = gb[d & 3](e, 0, 8, 400) | 0;
 if (!h) {
  h = 0;
  i = j;
  return h | 0;
 }
 k = h + 112 | 0;
 c[h >> 2] = 0;
 a[h + 4 >> 0] = 8;
 a[h + 172 >> 0] = 33;
 a[h + 5 >> 0] = 1;
 a[h + 174 >> 0] = 0;
 c[h + 12 >> 2] = k;
 c[h + 28 >> 2] = 0;
 c[h + 16 >> 2] = 0;
 c[h + 32 >> 2] = 0;
 c[h + 64 >> 2] = 0;
 b[h + 38 >> 1] = 0;
 c[h + 52 >> 2] = 0;
 a[h + 40 >> 0] = 0;
 c[h + 44 >> 2] = 0;
 a[h + 41 >> 0] = 1;
 c[h + 48 >> 2] = 0;
 c[h + 56 >> 2] = 0;
 b[h + 36 >> 1] = 1;
 a[h + 6 >> 0] = 0;
 c[h + 68 >> 2] = 0;
 c[k >> 2] = d;
 c[h + 116 >> 2] = e;
 c[h + 284 >> 2] = h;
 d = Wa(0) | 0;
 c[g >> 2] = d;
 c[f >> 2] = h;
 c[f + 4 >> 2] = g;
 c[f + 8 >> 2] = 15088;
 c[f + 12 >> 2] = 1;
 c[h + 168 >> 2] = vb(f, 16, d) | 0;
 f = h + 224 | 0;
 c[h + 240 >> 2] = f;
 c[h + 244 >> 2] = f;
 a[h + 175 >> 0] = 0;
 f = h + 132 | 0;
 c[h + 160 >> 2] = 0;
 c[h + 256 >> 2] = 0;
 c[h + 264 >> 2] = 0;
 c[h + 280 >> 2] = 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[h + 288 >> 2] = wb(0) | 0;
 a[h + 173 >> 0] = 5;
 f = h + 120 | 0;
 d = h + 180 | 0;
 g = d + 40 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (g | 0));
 c[f >> 2] = 400;
 c[h + 124 >> 2] = 0;
 c[h + 268 >> 2] = 200;
 c[h + 272 >> 2] = 200;
 c[h + 276 >> 2] = 200;
 d = h + 364 | 0;
 g = d + 36 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (g | 0));
 if (!(Yc(h, 1, 0) | 0)) {
  k = h;
  i = j;
  return k | 0;
 }
 ad(h);
 k = 0;
 i = j;
 return k | 0;
}

function _e(a) {
 a = a | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 g = c[a + 52 >> 2] | 0;
 j = a + 48 | 0;
 h = c[j >> 2] | 0;
 i = c[h >> 2] | 0;
 $e(h, 0, 0);
 af(h);
 f = h + 20 | 0;
 e = c[f >> 2] | 0;
 if ((e + 1 | 0) >>> 0 > 1073741823) Kb(g);
 l = i + 12 | 0;
 k = i + 48 | 0;
 c[l >> 2] = yb(g, c[l >> 2] | 0, c[k >> 2] << 2, e << 2) | 0;
 e = c[f >> 2] | 0;
 c[k >> 2] = e;
 if ((e + 1 | 0) >>> 0 > 1073741823) Kb(g);
 k = i + 20 | 0;
 l = i + 52 | 0;
 c[k >> 2] = yb(g, c[k >> 2] | 0, c[l >> 2] << 2, e << 2) | 0;
 c[l >> 2] = c[f >> 2];
 f = h + 32 | 0;
 e = c[f >> 2] | 0;
 if ((e + 1 | 0) >>> 0 > 268435455) Kb(g);
 k = i + 8 | 0;
 l = i + 44 | 0;
 c[k >> 2] = yb(g, c[k >> 2] | 0, c[l >> 2] << 4, e << 4) | 0;
 c[l >> 2] = c[f >> 2];
 f = h + 36 | 0;
 e = c[f >> 2] | 0;
 if ((e + 1 | 0) >>> 0 > 1073741823) Kb(g);
 k = i + 16 | 0;
 l = i + 56 | 0;
 c[k >> 2] = yb(g, c[k >> 2] | 0, c[l >> 2] << 2, e << 2) | 0;
 c[l >> 2] = c[f >> 2];
 f = h + 44 | 0;
 e = b[f >> 1] | 0;
 if ((e + 1 | 0) >>> 0 > 357913941) Kb(g);
 l = i + 24 | 0;
 k = i + 60 | 0;
 c[l >> 2] = yb(g, c[l >> 2] | 0, (c[k >> 2] | 0) * 12 | 0, e * 12 | 0) | 0;
 f = c[f >> 2] | 0;
 c[k >> 2] = f << 16 >> 16;
 k = i + 28 | 0;
 l = i + 40 | 0;
 c[k >> 2] = yb(g, c[k >> 2] | 0, c[l >> 2] << 3, f >>> 24 << 3) | 0;
 c[l >> 2] = d[h + 47 >> 0];
 c[j >> 2] = c[h + 8 >> 2];
 if ((c[a + 16 >> 2] & -2 | 0) == 288) {
  l = c[a + 24 >> 2] | 0;
  We(a, l + 16 | 0, c[l + 12 >> 2] | 0) | 0;
 }
 l = g + 8 | 0;
 c[l >> 2] = (c[l >> 2] | 0) + -16;
 if ((c[(c[g + 12 >> 2] | 0) + 12 >> 2] | 0) <= 0) return;
 pc(g);
 return;
}

function pg(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 16 | 0;
 o = q;
 if (!h) m = 0; else {
  l = c[e + 16 >> 2] | 0;
  do if ((h | 0) > 0) {
   h = (c[l >> 2] | 0) + (h << 4) | 0;
   h = h >>> 0 < (c[e + 8 >> 2] | 0) >>> 0 ? h : 15088;
  } else {
   if ((h | 0) >= -1000999) {
    h = (c[e + 8 >> 2] | 0) + (h << 4) | 0;
    break;
   }
   if ((h | 0) == -1001e3) {
    h = (c[e + 12 >> 2] | 0) + 40 | 0;
    break;
   }
   m = -1001e3 - h | 0;
   h = c[l >> 2] | 0;
   if ((c[h + 8 >> 2] | 0) == 22) h = 15088; else {
    h = c[h >> 2] | 0;
    h = (m | 0) > (d[h + 6 >> 0] | 0) ? 15088 : h + 16 + (m + -1 << 4) | 0;
   }
  } while (0);
  m = h - (c[e + 28 >> 2] | 0) | 0;
 }
 n = e + 8 | 0;
 l = (c[n >> 2] | 0) + (~f << 4) | 0;
 c[o >> 2] = l;
 h = l;
 if (!k) p = 13; else if (!(b[e + 36 >> 1] | 0)) {
  o = c[e + 16 >> 2] | 0;
  c[o + 28 >> 2] = k;
  c[o + 24 >> 2] = j;
  c[o + 20 >> 2] = h - (c[e + 28 >> 2] | 0);
  a[o + 36 >> 0] = a[e + 41 >> 0] | 0;
  k = e + 68 | 0;
  j = o + 32 | 0;
  c[j >> 2] = c[k >> 2];
  c[k >> 2] = m;
  m = o + 18 | 0;
  a[m >> 0] = d[m >> 0] | 16;
  Eb(e, l, g, 1);
  a[m >> 0] = d[m >> 0] & 239;
  c[k >> 2] = c[j >> 2];
  m = 0;
 } else p = 13;
 if ((p | 0) == 13) {
  c[o + 4 >> 2] = g;
  m = Xc(e, 5, o, h - (c[e + 28 >> 2] | 0) | 0, m) | 0;
 }
 if ((g | 0) != -1) {
  i = q;
  return m | 0;
 }
 l = (c[e + 16 >> 2] | 0) + 4 | 0;
 h = c[n >> 2] | 0;
 if ((c[l >> 2] | 0) >>> 0 >= h >>> 0) {
  i = q;
  return m | 0;
 }
 c[l >> 2] = h;
 i = q;
 return m | 0;
}

function Dk(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 a : do switch (c[b + 8 >> 2] & 63 | 0) {
 case 38:
  {
   b = c[b >> 2] | 0;
   if ((e | 0) <= 0) {
    a = 0;
    return a | 0;
   }
   if ((d[b + 6 >> 0] | 0 | 0) < (e | 0)) {
    a = 0;
    return a | 0;
   } else {
    f = 17772;
    b = b + 16 + (e + -1 << 4) | 0;
    break a;
   }
  }
 case 6:
  {
   b = c[b >> 2] | 0;
   f = c[b + 12 >> 2] | 0;
   if ((e | 0) <= 0) {
    a = 0;
    return a | 0;
   }
   if ((c[f + 40 >> 2] | 0) < (e | 0)) {
    a = 0;
    return a | 0;
   }
   e = e + -1 | 0;
   g = c[(c[b + 16 + (e << 2) >> 2] | 0) + 8 >> 2] | 0;
   b = c[(c[f + 28 >> 2] | 0) + (e << 3) >> 2] | 0;
   if (!b) {
    f = 17772;
    b = g;
   } else {
    f = b + 16 | 0;
    b = g;
   }
   break;
  }
 default:
  {
   a = 0;
   return a | 0;
  }
 } while (0);
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 i = b;
 h = c[i + 4 >> 2] | 0;
 g = e;
 c[g >> 2] = c[i >> 2];
 c[g + 4 >> 2] = h;
 c[e + 8 >> 2] = c[b + 8 >> 2];
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 a = f;
 return a | 0;
}

function Bg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  g = (c[f >> 2] | 0) + (e << 4) | 0;
  g = g >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? g : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   g = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   g = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) g = 15088; else {
   h = c[e >> 2] | 0;
   g = (g | 0) > (d[h + 6 >> 0] | 0 | 0) ? 15088 : h + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 h = b + 8 | 0;
 e = c[h >> 2] | 0;
 if (!(c[e + -8 >> 2] | 0)) f = 0; else f = c[e + -16 >> 2] | 0;
 e = c[g + 8 >> 2] & 15;
 switch (e | 0) {
 case 5:
  {
   c[(c[g >> 2] | 0) + 8 >> 2] = f;
   if (!f) {
    b = c[h >> 2] | 0;
    b = b + -16 | 0;
    c[h >> 2] = b;
    return 1;
   }
   if (a[f + 5 >> 0] & 3) {
    e = c[g >> 2] | 0;
    if (a[e + 5 >> 0] & 4) Dc(b, e);
   }
   Cg(b, c[g >> 2] | 0, f);
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 case 7:
  {
   c[(c[g >> 2] | 0) + 8 >> 2] = f;
   if (!f) {
    b = c[h >> 2] | 0;
    b = b + -16 | 0;
    c[h >> 2] = b;
    return 1;
   }
   if (a[f + 5 >> 0] & 3) {
    e = c[g >> 2] | 0;
    if (a[e + 5 >> 0] & 4) Ec(b, e, f);
   }
   Cg(b, c[g >> 2] | 0, f);
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 default:
  {
   c[(c[b + 12 >> 2] | 0) + 252 + (e << 2) >> 2] = f;
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 }
 return 0;
}

function Yh(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 i = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  h = (c[i >> 2] | 0) + (b << 4) | 0;
  h = h >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? h : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   h = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   h = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[i >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) h = 15088; else {
   h = c[b >> 2] | 0;
   h = (g | 0) > (d[h + 6 >> 0] | 0 | 0) ? 15088 : h + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 do if ((e | 0) > 0) {
  b = (c[i >> 2] | 0) + (e << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  b = c[i >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   f = 0;
   return f | 0;
  } else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
   break;
  }
 } while (0);
 if (!((h | 0) != 15088 & (b | 0) != 15088)) {
  f = 0;
  return f | 0;
 }
 switch (f | 0) {
 case 0:
  {
   if ((c[h + 8 >> 2] | 0) == (c[b + 8 >> 2] | 0)) b = (xc(a, h, b) | 0) != 0; else b = 0;
   f = b & 1;
   return f | 0;
  }
 case 1:
  {
   f = Oc(a, h, b) | 0;
   return f | 0;
  }
 case 2:
  {
   f = Qc(a, h, b) | 0;
   return f | 0;
  }
 default:
  {
   f = 0;
   return f | 0;
  }
 }
 return 0;
}

function He(b, e, f, g, i) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 i = i | 0;
 var j = 0.0, k = 0, l = 0, m = 0;
 if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) if ((c[g >> 2] | 0) == 5) if ((c[g + 16 >> 2] | 0) == -1) if ((c[g + 20 >> 2] | 0) == -1) {
  j = +h[g + 8 >> 3];
  if (!((e | 1 | 0) == 17 & j == 0.0)) {
   i = f + 8 | 0;
   h[i >> 3] = +Jc(e + -13 | 0, +h[i >> 3], j);
   return;
  }
 }
 switch (e | 0) {
 case 19:
 case 21:
  {
   m = 0;
   break;
  }
 default:
  m = Ie(b, g) | 0;
 }
 l = Ie(b, f) | 0;
 if ((l | 0) > (m | 0)) {
  if ((c[f >> 2] | 0) == 6) {
   k = c[f + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    k = b + 48 | 0;
    a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
   }
  }
  if ((c[g >> 2] | 0) == 6) {
   k = c[g + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
 } else {
  if ((c[g >> 2] | 0) == 6) {
   k = c[g + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
  if ((c[f >> 2] | 0) == 6) {
   k = c[f + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
 }
 c[f + 8 >> 2] = De(b, m << 14 | e | l << 23) | 0;
 c[f >> 2] = 11;
 c[(c[(c[b >> 2] | 0) + 20 >> 2] | 0) + ((c[b + 20 >> 2] | 0) + -1 << 2) >> 2] = i;
 return;
}

function Lb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 if (f >>> 0 >= 41) {
  if ((f + 1 | 0) >>> 0 > 4294967277) Kb(b);
  m = c[(c[b + 12 >> 2] | 0) + 56 >> 2] | 0;
  b = dc(b, 20, f + 17 | 0, 0, 0) | 0;
  c[b + 12 >> 2] = f;
  c[b + 8 >> 2] = m;
  a[b + 6 >> 0] = 0;
  m = b + 16 | 0;
  En(m | 0, e | 0, f | 0) | 0;
  a[m + f >> 0] = 0;
  e = b;
  return e | 0;
 }
 j = c[b + 12 >> 2] | 0;
 g = c[j + 56 >> 2] ^ f;
 i = (f >>> 5) + 1 | 0;
 if (i >>> 0 <= f >>> 0) {
  h = f;
  do {
   g = (g << 5) + (g >>> 2) + (d[e + (h + -1) >> 0] | 0) ^ g;
   h = h - i | 0;
  } while (h >>> 0 >= i >>> 0);
 }
 k = j + 32 | 0;
 i = c[k >> 2] | 0;
 m = j + 24 | 0;
 l = c[m >> 2] | 0;
 h = c[l + ((i + -1 & g) << 2) >> 2] | 0;
 a : do if (h | 0) {
  while (1) {
   if ((g | 0) == (c[h + 8 >> 2] | 0)) if ((c[h + 12 >> 2] | 0) == (f | 0)) if (!(fm(e, h + 16 | 0, f) | 0)) break;
   h = c[h >> 2] | 0;
   if (!h) break a;
  }
  g = h + 5 | 0;
  i = (d[g >> 0] | 0) ^ 3;
  if (((d[j + 60 >> 0] | 0) ^ 3) & i | 0) {
   e = h;
   return e | 0;
  }
  a[g >> 0] = i;
  e = h;
  return e | 0;
 } while (0);
 j = j + 28 | 0;
 if ((i | 0) < 1073741823 ? (c[j >> 2] | 0) >>> 0 >= i >>> 0 : 0) {
  Mb(b, i << 1);
  i = c[k >> 2] | 0;
  h = c[m >> 2] | 0;
 } else h = l;
 b = dc(b, 4, f + 17 | 0, h + ((i + -1 & g) << 2) | 0, 0) | 0;
 c[b + 12 >> 2] = f;
 c[b + 8 >> 2] = g;
 a[b + 6 >> 0] = 0;
 m = b + 16 | 0;
 En(m | 0, e | 0, f | 0) | 0;
 a[m + f >> 0] = 0;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 e = b;
 return e | 0;
}

function ne(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 128 | 0;
 q = r + 48 | 0;
 h = r + 40 | 0;
 g = r + 32 | 0;
 f = r + 24 | 0;
 m = r + 16 | 0;
 o = r;
 r = r + 56 | 0;
 kc(r, (c[b + 68 >> 2] | 0) + 16 | 0, 60);
 p = b + 52 | 0;
 n = c[p >> 2] | 0;
 j = c[b + 4 >> 2] | 0;
 c[o >> 2] = r;
 c[o + 4 >> 2] = j;
 c[o + 8 >> 2] = d;
 o = lc(n, 6655, o) | 0;
 if (!e) {
  r = c[p >> 2] | 0;
  Ib(r, 3);
 }
 n = c[p >> 2] | 0;
 do if ((e + -287 | 0) >>> 0 < 3) {
  e = b + 60 | 0;
  f = c[e >> 2] | 0;
  j = f + 4 | 0;
  d = c[j >> 2] | 0;
  h = f + 8 | 0;
  g = c[h >> 2] | 0;
  do if ((d + 1 | 0) >>> 0 > g >>> 0) {
   if (g >>> 0 > 2147483645) ne(b, 6665, 0);
   d = g << 1;
   if ((d | 0) == -2) Kb(n); else {
    l = yb(n, c[f >> 2] | 0, g, d) | 0;
    c[f >> 2] = l;
    c[h >> 2] = d;
    k = c[j >> 2] | 0;
    break;
   }
  } else {
   k = d;
   l = c[f >> 2] | 0;
  } while (0);
  c[j >> 2] = k + 1;
  a[l + k >> 0] = 0;
  d = c[p >> 2] | 0;
  c[m >> 2] = c[c[e >> 2] >> 2];
  d = lc(d, 6690, m) | 0;
 } else {
  if ((e | 0) >= 257) {
   d = c[1292 + (e + -257 << 2) >> 2] | 0;
   if ((e | 0) >= 286) break;
   c[h >> 2] = d;
   d = lc(n, 6690, h) | 0;
   break;
  }
  if (!(a[3999 + (e + 1) >> 0] & 4)) {
   c[g >> 2] = e;
   d = lc(n, 6700, g) | 0;
   break;
  } else {
   c[f >> 2] = e;
   d = lc(n, 6695, f) | 0;
   break;
  }
 } while (0);
 c[q >> 2] = o;
 c[q + 4 >> 2] = d;
 lc(n, 6709, q) | 0;
 r = c[p >> 2] | 0;
 Ib(r, 3);
}

function wc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 f = j;
 switch (c[e + 8 >> 2] & 63 | 0) {
 case 3:
  {
   h[f >> 3] = +h[e >> 3] + 1.0;
   f = (c[f + 4 >> 2] | 0) + (c[f >> 2] | 0) | 0;
   if ((f | 0) < 0) {
    e = 0 - f | 0;
    f = (f | 0) == (e | 0) ? 0 : e;
   }
   b = (c[b + 16 >> 2] | 0) + (((f | 0) % ((1 << d[b + 7 >> 0]) + -1 | 1 | 0) | 0) << 5) | 0;
   i = j;
   return b | 0;
  }
 case 20:
  {
   f = c[e >> 2] | 0;
   g = f + 6 | 0;
   if (!(a[g >> 0] | 0)) {
    k = f + 8 | 0;
    c[k >> 2] = vb(f + 16 | 0, c[f + 12 >> 2] | 0, c[k >> 2] | 0) | 0;
    a[g >> 0] = 1;
    f = c[e >> 2] | 0;
   }
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[f + 8 >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 4:
  {
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[(c[e >> 2] | 0) + 8 >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 1:
  {
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[e >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 2:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 22:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 default:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 }
 return 0;
}

function pm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 112 | 0;
 n = o + 40 | 0;
 l = o + 24 | 0;
 k = o + 16 | 0;
 g = o;
 m = o + 52 | 0;
 f = a[d >> 0] | 0;
 if (!(Pl(15051, f << 24 >> 24, 4) | 0)) {
  c[(_k() | 0) >> 2] = 22;
  e = 0;
 } else {
  e = hn(1144) | 0;
  if (!e) e = 0; else {
   h = e;
   j = h + 112 | 0;
   do {
    c[h >> 2] = 0;
    h = h + 4 | 0;
   } while ((h | 0) < (j | 0));
   if (!(qm(d, 43) | 0)) c[e >> 2] = f << 24 >> 24 == 114 ? 8 : 4;
   if (qm(d, 101) | 0) {
    c[g >> 2] = b;
    c[g + 4 >> 2] = 2;
    c[g + 8 >> 2] = 1;
    la(221, g | 0) | 0;
    f = a[d >> 0] | 0;
   }
   if (f << 24 >> 24 == 97) {
    c[k >> 2] = b;
    c[k + 4 >> 2] = 3;
    f = la(221, k | 0) | 0;
    if (!(f & 1024)) {
     c[l >> 2] = b;
     c[l + 4 >> 2] = 4;
     c[l + 8 >> 2] = f | 1024;
     la(221, l | 0) | 0;
    }
    d = c[e >> 2] | 128;
    c[e >> 2] = d;
   } else d = c[e >> 2] | 0;
   c[e + 60 >> 2] = b;
   c[e + 44 >> 2] = e + 120;
   c[e + 48 >> 2] = 1024;
   f = e + 75 | 0;
   a[f >> 0] = -1;
   if (!(d & 8)) {
    c[n >> 2] = b;
    c[n + 4 >> 2] = 21505;
    c[n + 8 >> 2] = m;
    if (!(Na(54, n | 0) | 0)) a[f >> 0] = 10;
   }
   c[e + 32 >> 2] = 1;
   c[e + 36 >> 2] = 3;
   c[e + 40 >> 2] = 2;
   c[e + 12 >> 2] = 141;
   if (!(c[3788] | 0)) c[e + 76 >> 2] = -1;
   Ta(15176);
   f = c[3793] | 0;
   c[e + 56 >> 2] = f;
   if (f | 0) c[f + 52 >> 2] = e;
   c[3793] = e;
   Oa(15176);
  }
 }
 i = o;
 return e | 0;
}

function rn(a) {
 a = +a;
 var b = 0.0, d = 0.0, e = 0, f = 0, g = 0.0;
 h[k >> 3] = a;
 e = c[k + 4 >> 2] | 0;
 f = e & 2147483647;
 if (f >>> 0 > 1072693247) if (!(f + -1072693248 | c[k >> 2])) {
  d = a * 1.5707963267948966 + 7.52316384526264e-37;
  return +d;
 } else {
  d = 0.0 / (a - a);
  return +d;
 }
 if (f >>> 0 < 1071644672) {
  if ((f + -1048576 | 0) >>> 0 < 1044381696) {
   d = a;
   return +d;
  }
  d = a * a;
  d = d * (d * (d * (d * (d * (d * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (d * (d * (d * (d * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a + a;
  return +d;
 }
 d = (1.0 - +N(+a)) * .5;
 a = +O(+d);
 b = d * (d * (d * (d * (d * (d * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (d * (d * (d * (d * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0);
 if (f >>> 0 > 1072640818) {
  d = 1.5707963267948966 - ((a + a * b) * 2.0 + -6.123233995736766e-17);
  f = (e | 0) < 0;
  b = -d;
  d = f ? b : d;
  return +d;
 } else {
  h[k >> 3] = a;
  f = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = f;
  g = +h[k >> 3];
  d = .7853981633974483 - (a * 2.0 * b - (6.123233995736766e-17 - (d - g * g) / (a + g) * 2.0) - (.7853981633974483 - g * 2.0));
  f = (e | 0) < 0;
  b = -d;
  d = f ? b : d;
  return +d;
 }
 return 0.0;
}

function ee(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 64 | 0;
 g = k + 16 | 0;
 h = k + 34 | 0;
 j = k;
 switch (a[f >> 0] | 0) {
 case 61:
 case 64:
  {
   c[j + 12 >> 2] = f + 1;
   break;
  }
 case 27:
  {
   c[j + 12 >> 2] = 6465;
   break;
  }
 default:
  c[j + 12 >> 2] = f;
 }
 c[j >> 2] = b;
 c[j + 4 >> 2] = d;
 c[j + 8 >> 2] = e;
 c[g >> 2] = 1635077147;
 a[g + 4 >> 0] = 82;
 a[g + 5 >> 0] = 0;
 a[g + 6 >> 0] = 1;
 a[g + 7 >> 0] = 4;
 a[g + 8 >> 0] = 4;
 a[g + 9 >> 0] = 4;
 a[g + 10 >> 0] = 8;
 f = g + 12 | 0;
 a[g + 11 >> 0] = 0;
 a[f >> 0] = a[6479] | 0;
 a[f + 1 >> 0] = a[6480] | 0;
 a[f + 2 >> 0] = a[6481] | 0;
 a[f + 3 >> 0] = a[6482] | 0;
 a[f + 4 >> 0] = a[6483] | 0;
 a[f + 5 >> 0] = a[6484] | 0;
 a[h >> 0] = 27;
 if (fe(d, h + 1 | 0, 17) | 0) ge(j, 6486);
 if (!(fm(g, h, 18) | 0)) {
  g = Uc(b, 1) | 0;
  f = b + 8 | 0;
  h = c[f >> 2] | 0;
  c[h >> 2] = g;
  c[h + 8 >> 2] = 70;
  h = (c[f >> 2] | 0) + 16 | 0;
  c[f >> 2] = h;
  if (((c[b + 24 >> 2] | 0) - h | 0) < 16) Hb(b, 0);
  e = he(b) | 0;
  d = g + 12 | 0;
  c[d >> 2] = e;
  ie(j, e);
  d = c[d >> 2] | 0;
  e = c[d + 40 >> 2] | 0;
  if ((e | 0) == 1) {
   b = g;
   i = k;
   return b | 0;
  }
  b = Uc(b, e) | 0;
  c[b + 12 >> 2] = d;
  j = c[f >> 2] | 0;
  c[j + -16 >> 2] = b;
  c[j + -8 >> 2] = 70;
  i = k;
  return b | 0;
 }
 if (fm(g, h, 4) | 0) ge(j, 6521);
 if (fm(g, h, 6) | 0) ge(j, 6527);
 if (!(fm(g, h, 12) | 0)) ge(j, 6560); else ge(j, 6547);
 return 0;
}

function dl(a, b, d) {
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
  if (!(c[3787] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Zk($a(146, n | 0) | 0) | 0;
  } else {
   ta(3, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Zk($a(146, m | 0) | 0) | 0;
   ka(0);
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

function dd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = a + 16 | 0;
 f = c[h >> 2] | 0;
 i = (b | 0) > 0;
 do if (i) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  f = c[f >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
   f = c[f >> 2] | 0;
   f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 do if ((c[f + 8 >> 2] & 15 | 0) != 4) {
  if (!(ed(a, f) | 0)) {
   if (!e) {
    e = 0;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   return e | 0;
  }
  g = a + 12 | 0;
  if ((c[(c[g >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
  f = c[h >> 2] | 0;
  if (i) {
   f = (c[f >> 2] | 0) + (b << 4) | 0;
   f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
   break;
  }
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[g >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  f = c[f >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
   f = c[f >> 2] | 0;
   f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 if (!e) f = c[f >> 2] | 0; else {
  f = c[f >> 2] | 0;
  c[e >> 2] = c[f + 12 >> 2];
 }
 e = f + 16 | 0;
 return e | 0;
}

function vf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 Ce(a, b);
 switch (c[b >> 2] | 0) {
 case 10:
  {
   i = c[b + 8 >> 2] | 0;
   d = 4;
   break;
  }
 case 3:
 case 1:
  break;
 default:
  {
   i = uf(a, b, 1) | 0;
   d = 4;
  }
 }
 do if ((d | 0) == 4) {
  d = b + 16 | 0;
  if ((i | 0) != -1) {
   e = c[d >> 2] | 0;
   if ((e | 0) == -1) {
    c[d >> 2] = i;
    break;
   }
   h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    f = h + (e << 2) | 0;
    d = c[f >> 2] | 0;
    g = (d >>> 14) + -131071 | 0;
    g = (g | 0) == -1 ? -1 : e + 1 + g | 0;
    if ((g | 0) == -1) {
     g = d;
     break;
    } else e = g;
   }
   d = i + ~e | 0;
   if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) me(c[a + 12 >> 2] | 0, 6980); else {
    c[f >> 2] = (d << 14) + 2147467264 | g & 16383;
    break;
   }
  }
 } while (0);
 b = b + 20 | 0;
 i = c[b >> 2] | 0;
 c[a + 24 >> 2] = c[a + 20 >> 2];
 d = a + 28 | 0;
 if ((i | 0) == -1) {
  c[b >> 2] = -1;
  return;
 }
 e = c[d >> 2] | 0;
 if ((e | 0) == -1) {
  c[d >> 2] = i;
  c[b >> 2] = -1;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  f = h + (e << 2) | 0;
  d = c[f >> 2] | 0;
  g = (d >>> 14) + -131071 | 0;
  g = (g | 0) == -1 ? -1 : e + 1 + g | 0;
  if ((g | 0) == -1) {
   g = d;
   break;
  } else e = g;
 }
 d = i + ~e | 0;
 if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) me(c[a + 12 >> 2] | 0, 6980);
 c[f >> 2] = (d << 14) + 2147467264 | g & 16383;
 c[b >> 2] = -1;
 return;
}

function Re(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 80 | 0;
 q = r + 56 | 0;
 p = r + 48 | 0;
 l = r + 24 | 0;
 o = r;
 e = b + 48 | 0;
 h = c[e >> 2] | 0;
 k = h + 48 | 0;
 j = a[k >> 0] | 0;
 n = b + 16 | 0;
 do if ((c[n >> 2] | 0) == 288) {
  f = d + 28 | 0;
  if ((c[f >> 2] | 0) <= 2147483645) {
   m = c[b + 24 >> 2] | 0;
   pe(b);
   m = Je(c[e >> 2] | 0, m) | 0;
   c[l + 16 >> 2] = -1;
   c[l + 20 >> 2] = -1;
   c[l >> 2] = 4;
   c[l + 8 >> 2] = m;
   m = f;
   break;
  }
  g = h + 12 | 0;
  e = c[(c[g >> 2] | 0) + 52 >> 2] | 0;
  f = c[(c[h >> 2] | 0) + 64 >> 2] | 0;
  if (!f) {
   t = 6600;
   c[q >> 2] = 7136;
   s = q + 4 | 0;
   c[s >> 2] = 2147483645;
   s = q + 8 | 0;
   c[s >> 2] = t;
   s = lc(e, 6614, q) | 0;
   t = c[g >> 2] | 0;
   me(t, s);
  }
  c[p >> 2] = f;
  s = lc(e, 6580, p) | 0;
  c[q >> 2] = 7136;
  t = q + 4 | 0;
  c[t >> 2] = 2147483645;
  t = q + 8 | 0;
  c[t >> 2] = s;
  t = lc(e, 6614, q) | 0;
  s = c[g >> 2] | 0;
  me(s, t);
 } else {
  pe(b);
  ze(b, l, 0) | 0;
  Se(c[e >> 2] | 0, l);
  if ((c[n >> 2] | 0) == 93) {
   pe(b);
   m = d + 28 | 0;
   break;
  } else Ne(b, 93);
 } while (0);
 c[m >> 2] = (c[m >> 2] | 0) + 1;
 if ((c[n >> 2] | 0) == 61) {
  pe(b);
  t = Ie(h, l) | 0;
  ze(b, o, 0) | 0;
  s = c[(c[d + 24 >> 2] | 0) + 8 >> 2] | 0;
  Ke(h, 10, s, t, Ie(h, o) | 0) | 0;
  a[k >> 0] = j;
  i = r;
  return;
 } else Ne(b, 61);
}

function gc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 32 | 0;
 o = m + 16 | 0;
 n = m;
 m = m + 24 | 0;
 j = c[b + 16 >> 2] | 0;
 c[m >> 2] = 0;
 l = c[1176 + ((c[d + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 a : do if (a[j + 18 >> 0] & 1) {
  k = c[c[j >> 2] >> 2] | 0;
  f = a[k + 6 >> 0] | 0;
  b : do if (f << 24 >> 24) {
   g = f & 255;
   f = 0;
   while (1) {
    if ((c[(c[k + 16 + (f << 2) >> 2] | 0) + 8 >> 2] | 0) == (d | 0)) break;
    f = f + 1 | 0;
    if ((f | 0) >= (g | 0)) break b;
   }
   g = c[(c[(c[k + 12 >> 2] | 0) + 28 >> 2] | 0) + (f << 3) >> 2] | 0;
   g = (g | 0) == 0 ? 8259 : g + 16 | 0;
   c[m >> 2] = g;
   f = 4385;
   c[n >> 2] = e;
   h = n + 4 | 0;
   c[h >> 2] = f;
   h = n + 8 | 0;
   c[h >> 2] = g;
   h = n + 12 | 0;
   c[h >> 2] = l;
   Fb(b, 4402, n);
  } while (0);
  f = c[j + 24 >> 2] | 0;
  g = c[j + 4 >> 2] | 0;
  h = f;
  if (f >>> 0 < g >>> 0) {
   while (1) {
    if ((f | 0) == (d | 0)) break;
    f = f + 16 | 0;
    if (f >>> 0 >= g >>> 0) break a;
   }
   f = c[k + 12 >> 2] | 0;
   f = hc(f, ((c[j + 28 >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 | 0, d - h >> 4, m) | 0;
   if (f | 0) {
    d = c[m >> 2] | 0;
    k = f;
    c[n >> 2] = e;
    m = n + 4 | 0;
    c[m >> 2] = k;
    m = n + 8 | 0;
    c[m >> 2] = d;
    m = n + 12 | 0;
    c[m >> 2] = l;
    Fb(b, 4402, n);
   }
  }
 } while (0);
 c[o >> 2] = e;
 c[o + 4 >> 2] = l;
 Fb(b, 4437, o);
}

function Sd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 j = b + 16 | 0;
 h = c[j >> 2] | 0;
 do if ((e | 0) > 0) {
  i = (c[h >> 2] | 0) + (e << 4) | 0;
  i = i >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? i : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   i = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   i = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[h >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) i = 15088; else {
   i = c[e >> 2] | 0;
   i = (g | 0) > (d[i + 6 >> 0] | 0 | 0) ? 15088 : i + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 do if ((f | 0) > 0) {
  e = (c[h >> 2] | 0) + (f << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((f | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (f << 4) | 0;
   break;
  }
  if ((f | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - f | 0;
  e = c[h >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 k = i;
 h = c[k + 4 >> 2] | 0;
 g = e;
 c[g >> 2] = c[k >> 2];
 c[g + 4 >> 2] = h;
 g = i + 8 | 0;
 c[e + 8 >> 2] = c[g >> 2];
 if ((f | 0) >= -1001e3) return;
 if (!(c[g >> 2] & 64)) return;
 g = c[i >> 2] | 0;
 if (!(a[g + 5 >> 0] & 3)) return;
 e = c[c[c[j >> 2] >> 2] >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) return;
 Ec(b, e, g);
 return;
}

function Mc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = f + 8 | 0;
 a : do switch (c[j >> 2] & 15 | 0) {
 case 5:
  {
   i = c[f >> 2] | 0;
   g = c[i + 8 >> 2] | 0;
   if (g | 0) if (!(a[g + 6 >> 0] & 16)) {
    g = Sb(g, 4, c[(c[b + 12 >> 2] | 0) + 200 >> 2] | 0) | 0;
    if (g | 0) break a;
   }
   h[e >> 3] = +(Nc(i) | 0);
   c[e + 8 >> 2] = 3;
   return;
  }
 case 4:
  {
   h[e >> 3] = +((c[(c[f >> 2] | 0) + 12 >> 2] | 0) >>> 0);
   c[e + 8 >> 2] = 3;
   return;
  }
 default:
  {
   i = Bb(b, f, 4) | 0;
   if (!(c[i + 8 >> 2] | 0)) gc(b, f, 4875); else g = i;
  }
 } while (0);
 l = b + 28 | 0;
 i = c[l >> 2] | 0;
 k = b + 8 | 0;
 o = c[k >> 2] | 0;
 c[k >> 2] = o + 16;
 p = g;
 n = c[p + 4 >> 2] | 0;
 m = o;
 c[m >> 2] = c[p >> 2];
 c[m + 4 >> 2] = n;
 c[o + 8 >> 2] = c[g + 8 >> 2];
 g = c[k >> 2] | 0;
 c[k >> 2] = g + 16;
 o = f;
 m = c[o + 4 >> 2] | 0;
 n = g;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = m;
 c[g + 8 >> 2] = c[j >> 2];
 g = c[k >> 2] | 0;
 c[k >> 2] = g + 16;
 n = f;
 m = c[n + 4 >> 2] | 0;
 f = g;
 c[f >> 2] = c[n >> 2];
 c[f + 4 >> 2] = m;
 c[g + 8 >> 2] = c[j >> 2];
 Eb(b, (c[k >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 j = (c[l >> 2] | 0) + (e - i) | 0;
 f = c[k >> 2] | 0;
 i = f + -16 | 0;
 c[k >> 2] = i;
 b = c[i + 4 >> 2] | 0;
 e = j;
 c[e >> 2] = c[i >> 2];
 c[e + 4 >> 2] = b;
 c[j + 8 >> 2] = c[f + -8 >> 2];
 return;
}

function Ab(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 m = i;
 i = i + 32 | 0;
 n = m + 16 | 0;
 l = m;
 k = c[b + 12 >> 2] | 0;
 f = k + 104 | 0;
 h = c[f >> 2] | 0;
 c[f >> 2] = c[h >> 2];
 f = k + 68 | 0;
 c[h >> 2] = c[f >> 2];
 c[f >> 2] = h;
 f = h + 5 | 0;
 g = d[f >> 0] | 0;
 a[f >> 0] = g & 239;
 if ((d[k + 61 >> 0] | 0) >= 2) a[f >> 0] = (d[k + 60 >> 0] | 0) & 3 | g & 168;
 c[l >> 2] = h;
 j = l + 8 | 0;
 c[j >> 2] = d[h + 4 >> 0] | 0 | 64;
 f = Bb(b, l, 2) | 0;
 if (!f) {
  i = m;
  return;
 }
 h = f + 8 | 0;
 if ((c[h >> 2] & 15 | 0) != 6) {
  i = m;
  return;
 }
 p = b + 41 | 0;
 q = a[p >> 0] | 0;
 k = k + 63 | 0;
 o = a[k >> 0] | 0;
 a[p >> 0] = 0;
 a[k >> 0] = 0;
 g = b + 8 | 0;
 r = c[g >> 2] | 0;
 t = f;
 s = c[t + 4 >> 2] | 0;
 f = r;
 c[f >> 2] = c[t >> 2];
 c[f + 4 >> 2] = s;
 c[r + 8 >> 2] = c[h >> 2];
 f = c[g >> 2] | 0;
 r = l;
 h = c[r + 4 >> 2] | 0;
 l = f + 16 | 0;
 c[l >> 2] = c[r >> 2];
 c[l + 4 >> 2] = h;
 c[f + 24 >> 2] = c[j >> 2];
 f = c[g >> 2] | 0;
 c[g >> 2] = f + 32;
 f = Xc(b, 2, 0, f - (c[b + 28 >> 2] | 0) | 0, 0) | 0;
 a[p >> 0] = q;
 a[k >> 0] = o;
 if (!((e | 0) != 0 & (f | 0) != 0)) {
  i = m;
  return;
 }
 if ((f | 0) != 2) {
  t = f;
  Ib(b, t);
 }
 f = c[g >> 2] | 0;
 if ((c[f + -8 >> 2] & 15 | 0) == 4) f = (c[f + -16 >> 2] | 0) + 16 | 0; else f = 5070;
 c[n >> 2] = f;
 lc(b, 5081, n) | 0;
 t = 5;
 Ib(b, t);
}

function Hk(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = c[a + 16 >> 2] | 0;
 h = (b | 0) > 0;
 do if (h) {
  f = (c[i >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  f = c[i >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
   f = c[f >> 2] | 0;
   f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 switch (c[f + 8 >> 2] & 63 | 0) {
 case 6:
  {
   do if (h) {
    f = (c[i >> 2] | 0) + (b << 4) | 0;
    f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
   } else {
    if ((b | 0) >= -1000999) {
     f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
     break;
    }
    if ((b | 0) == -1001e3) {
     f = (c[a + 12 >> 2] | 0) + 40 | 0;
     break;
    }
    g = -1001e3 - b | 0;
    f = c[i >> 2] | 0;
    if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
     f = c[f >> 2] | 0;
     f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
    }
   } while (0);
   e = c[(c[f >> 2] | 0) + 16 + (e + -1 << 2) >> 2] | 0;
   return e | 0;
  }
 case 38:
  {
   e = (c[f >> 2] | 0) + 16 + (e + -1 << 4) | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function Ok(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 h = c[e + 96 >> 2] | 0;
 do if (!(a[h + 18 >> 0] & 1)) {
  g = (c[h >> 2] | 0) + 16 | 0;
  i = 7;
 } else {
  if ((f | 0) >= 0) {
   g = c[h + 24 >> 2] | 0;
   e = c[(c[c[h >> 2] >> 2] | 0) + 12 >> 2] | 0;
   e = ic(e, f, ((c[h + 28 >> 2] | 0) - (c[e + 12 >> 2] | 0) >> 2) + -1 | 0) | 0;
   if (!e) {
    i = 7;
    break;
   } else {
    i = 11;
    break;
   }
  }
  f = 0 - f | 0;
  e = c[h >> 2] | 0;
  g = d[(c[(c[e >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] | 0;
  if ((((c[h + 24 >> 2] | 0) - e >> 4) - g | 0) > (f | 0)) {
   g = e + (g << 4) + (f << 4) | 0;
   e = 11696;
   break;
  } else {
   i = 0;
   b = b + 8 | 0;
   h = c[b >> 2] | 0;
   h = h + -16 | 0;
   c[b >> 2] = h;
   return i | 0;
  }
 } while (0);
 if ((i | 0) == 7) {
  if ((c[b + 16 >> 2] | 0) == (h | 0)) e = b + 8 | 0; else e = c[h + 12 >> 2] | 0;
  if ((f | 0) > 0 ? ((c[e >> 2] | 0) - g >> 4 | 0) >= (f | 0) : 0) {
   e = 11683;
   i = 11;
  } else {
   i = 0;
   b = b + 8 | 0;
   h = c[b >> 2] | 0;
   h = h + -16 | 0;
   c[b >> 2] = h;
   return i | 0;
  }
 }
 if ((i | 0) == 11) g = g + (f + -1 << 4) | 0;
 i = c[b + 8 >> 2] | 0;
 j = i + -16 | 0;
 f = c[j + 4 >> 2] | 0;
 h = g;
 c[h >> 2] = c[j >> 2];
 c[h + 4 >> 2] = f;
 c[g + 8 >> 2] = c[i + -8 >> 2];
 i = e;
 b = b + 8 | 0;
 h = c[b >> 2] | 0;
 h = h + -16 | 0;
 c[b >> 2] = h;
 return i | 0;
}

function Ie(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0;
 k = i;
 i = i + 32 | 0;
 j = k + 16 | 0;
 g = k;
 if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) Ce(a, b); else Be(a, b) | 0;
 e = c[b >> 2] | 0;
 switch (e | 0) {
 case 1:
 case 3:
 case 2:
  {
   if ((c[a + 32 >> 2] | 0) < 256) {
    if ((e | 0) == 1) {
     c[g + 8 >> 2] = 0;
     c[j >> 2] = c[a + 4 >> 2];
     c[j + 8 >> 2] = 69;
     e = Ge(a, j, g) | 0;
    } else {
     c[j >> 2] = (e | 0) == 2 & 1;
     c[j + 8 >> 2] = 1;
     e = Ge(a, j, j) | 0;
    }
    c[b + 8 >> 2] = e;
    c[b >> 2] = 4;
    b = e | 256;
    i = k;
    return b | 0;
   }
   break;
  }
 case 5:
  {
   f = b + 8 | 0;
   l = +h[f >> 3];
   h[j >> 3] = l;
   e = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
   h[g >> 3] = l;
   c[g + 8 >> 2] = 3;
   if (l != l | 0.0 != 0.0 | l == 0.0) {
    m = e + 8 | 0;
    n = c[m >> 2] | 0;
    c[m >> 2] = n + 16;
    e = Lb(e, j, 8) | 0;
    c[n >> 2] = e;
    c[n + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
    e = Ge(a, (c[m >> 2] | 0) + -16 | 0, g) | 0;
    c[m >> 2] = (c[m >> 2] | 0) + -16;
   } else e = Ge(a, g, g) | 0;
   c[f >> 2] = e;
   c[b >> 2] = 4;
   f = 15;
   break;
  }
 case 4:
  {
   e = c[b + 8 >> 2] | 0;
   f = 15;
   break;
  }
 default:
  {}
 }
 if ((f | 0) == 15) if ((e | 0) < 256) {
  n = e | 256;
  i = k;
  return n | 0;
 }
 n = Be(a, b) | 0;
 i = k;
 return n | 0;
}

function zk(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 if (!e) {
  e = c[b + 8 >> 2] | 0;
  if ((c[e + -8 >> 2] | 0) != 70) {
   b = 0;
   return b | 0;
  }
  b = ic(c[(c[e + -16 >> 2] | 0) + 12 >> 2] | 0, f, 0) | 0;
  return b | 0;
 }
 h = c[e + 96 >> 2] | 0;
 do if (!(a[h + 18 >> 0] & 1)) {
  g = (c[h >> 2] | 0) + 16 | 0;
  i = 10;
 } else {
  if ((f | 0) >= 0) {
   g = c[h + 24 >> 2] | 0;
   e = c[(c[c[h >> 2] >> 2] | 0) + 12 >> 2] | 0;
   e = ic(e, f, ((c[h + 28 >> 2] | 0) - (c[e + 12 >> 2] | 0) >> 2) + -1 | 0) | 0;
   if (!e) {
    i = 10;
    break;
   } else {
    i = 14;
    break;
   }
  }
  f = 0 - f | 0;
  e = c[h >> 2] | 0;
  g = d[(c[(c[e >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] | 0;
  if ((((c[h + 24 >> 2] | 0) - e >> 4) - g | 0) > (f | 0)) {
   g = e + (g << 4) + (f << 4) | 0;
   e = 11696;
   break;
  } else {
   b = 0;
   return b | 0;
  }
 } while (0);
 if ((i | 0) == 10) {
  if ((c[b + 16 >> 2] | 0) == (h | 0)) e = b + 8 | 0; else e = c[h + 12 >> 2] | 0;
  if ((f | 0) > 0 ? ((c[e >> 2] | 0) - g >> 4 | 0) >= (f | 0) : 0) {
   e = 11683;
   i = 14;
  } else {
   b = 0;
   return b | 0;
  }
 }
 if ((i | 0) == 14) g = g + (f + -1 << 4) | 0;
 b = b + 8 | 0;
 i = c[b >> 2] | 0;
 j = g;
 f = c[j + 4 >> 2] | 0;
 h = i;
 c[h >> 2] = c[j >> 2];
 c[h + 4 >> 2] = f;
 c[i + 8 >> 2] = c[g + 8 >> 2];
 c[b >> 2] = (c[b >> 2] | 0) + 16;
 b = e;
 return b | 0;
}

function Xc(e, f, g, h, i) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 n = e + 16 | 0;
 j = c[n >> 2] | 0;
 m = e + 41 | 0;
 k = a[m >> 0] | 0;
 o = e + 36 | 0;
 l = b[o >> 1] | 0;
 q = e + 68 | 0;
 p = c[q >> 2] | 0;
 c[q >> 2] = i;
 g = Yc(e, f, g) | 0;
 if (!g) {
  c[q >> 2] = p;
  return g | 0;
 }
 f = e + 28 | 0;
 i = (c[f >> 2] | 0) + h | 0;
 $b(e, i);
 switch (g | 0) {
 case 4:
  {
   h = c[(c[e + 12 >> 2] | 0) + 180 >> 2] | 0;
   c[i >> 2] = h;
   c[i + 8 >> 2] = d[h + 4 >> 0] | 0 | 64;
   break;
  }
 case 6:
  {
   h = Lb(e, 5046, 23) | 0;
   c[i >> 2] = h;
   c[i + 8 >> 2] = d[h + 4 >> 0] | 0 | 64;
   break;
  }
 default:
  {
   h = c[e + 8 >> 2] | 0;
   t = h + -16 | 0;
   s = c[t + 4 >> 2] | 0;
   r = i;
   c[r >> 2] = c[t >> 2];
   c[r + 4 >> 2] = s;
   c[i + 8 >> 2] = c[h + -8 >> 2];
  }
 }
 i = i + 16 | 0;
 c[e + 8 >> 2] = i;
 c[n >> 2] = j;
 a[m >> 0] = k;
 b[o >> 1] = l;
 if (j) do {
  t = c[j + 4 >> 2] | 0;
  i = i >>> 0 < t >>> 0 ? t : i;
  j = c[j + 8 >> 2] | 0;
 } while ((j | 0) != 0);
 t = i - (c[f >> 2] | 0) | 0;
 i = t >> 4;
 i = i + 11 + ((i + 1 | 0) / 8 | 0) | 0;
 i = (i | 0) > 1e6 ? 1e6 : i;
 if ((t | 0) > 15999984) {
  c[q >> 2] = p;
  return g | 0;
 }
 if ((i | 0) >= (c[e + 32 >> 2] | 0)) {
  c[q >> 2] = p;
  return g | 0;
 }
 Jb(e, i);
 c[q >> 2] = p;
 return g | 0;
}

function sn(a) {
 a = +a;
 var b = 0, d = 0.0, e = 0.0, f = 0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 f = Cn(c[k >> 2] | 0, b | 0, 63) | 0;
 b = b & 2147483647;
 if (b >>> 0 > 1141899263) {
  e = +N(+a);
  h[k >> 3] = e;
  b = c[k + 4 >> 2] | 0;
  if (b >>> 0 > 2146435072 | (b | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0) {
   e = a;
   return +e;
  }
  e = f | 0 ? -1.5707963267948966 : 1.5707963267948966;
  return +e;
 }
 do if (b >>> 0 < 1071382528) if (b >>> 0 < 1044381696) {
  e = a;
  return +e;
 } else b = -1; else {
  a = +N(+a);
  if (b >>> 0 < 1072889856) if (b >>> 0 < 1072037888) {
   b = 0;
   a = (a * 2.0 + -1.0) / (a + 2.0);
   break;
  } else {
   b = 1;
   a = (a + -1.0) / (a + 1.0);
   break;
  } else if (b >>> 0 < 1073971200) {
   b = 2;
   a = (a + -1.5) / (a * 1.5 + 1.0);
   break;
  } else {
   b = 3;
   a = -1.0 / a;
   break;
  }
 } while (0);
 d = a * a;
 e = d * d;
 d = d * (e * (e * (e * (e * (e * .016285820115365782 + .049768779946159324) + .06661073137387531) + .09090887133436507) + .14285714272503466) + .3333333333333293);
 e = e * (e * (e * (e * (-.058335701337905735 - e * .036531572744216916) + -.0769187620504483) + -.11111110405462356) + -.19999999999876483);
 if ((b | 0) < 0) {
  e = a - a * (e + d);
  return +e;
 } else {
  e = +h[1096 + (b << 3) >> 3] - (a * (e + d) - +h[1128 + (b << 3) >> 3] - a);
  e = f | 0 ? -e : e;
  return +e;
 }
 return 0.0;
}

function ll(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0, g = 0.0, i = 0.0, j = 0.0, l = 0.0, m = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 b = c[k + 4 >> 2] | 0;
 e = (b | 0) < 0;
 do if (e | b >>> 0 < 1048576) {
  g = +N(+a);
  h[k >> 3] = g;
  if ((c[k >> 2] | 0) == 0 & (c[k + 4 >> 2] | 0) == 0) {
   a = -1.0 / (a * a);
   break;
  }
  if (e) {
   a = (a - a) / 0.0;
   break;
  } else {
   h[k >> 3] = a * 18014398509481984.0;
   b = c[k + 4 >> 2] | 0;
   e = c[k >> 2] | 0;
   d = -1077;
   f = 9;
   break;
  }
 } else if (b >>> 0 <= 2146435071) if ((d | 0) == 0 & 0 == 0 & (b | 0) == 1072693248) a = 0.0; else {
  e = d;
  d = -1023;
  f = 9;
 } while (0);
 if ((f | 0) == 9) {
  f = b + 614242 | 0;
  c[k >> 2] = e;
  c[k + 4 >> 2] = (f & 1048575) + 1072079006;
  j = +h[k >> 3] + -1.0;
  i = j * (j * .5);
  l = j / (j + 2.0);
  m = l * l;
  a = m * m;
  h[k >> 3] = j - i;
  e = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = e;
  g = +h[k >> 3];
  a = j - g - i + l * (i + (a * (a * (a * .15313837699209373 + .22222198432149784) + .3999999999940942) + m * (a * (a * (a * .14798198605116586 + .1818357216161805) + .2857142874366239) + .6666666666666735)));
  m = g * .4342944818781689;
  i = +(d + (f >>> 20) | 0);
  l = i * .30102999566361177;
  j = l + m;
  a = j + (m + (l - j) + (a * .4342944818781689 + (i * 3.694239077158931e-13 + (g + a) * 2.5082946711645275e-11)));
 }
 return +a;
}

function Ge(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = i;
 i = i + 16 | 0;
 f = p;
 o = c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0;
 j = te(o, c[b + 4 >> 2] | 0, d) | 0;
 n = c[b >> 2] | 0;
 l = j + 8 | 0;
 if ((c[l >> 2] | 0) == 3) {
  h[f >> 3] = +h[j >> 3] + 6755399441055744.0;
  f = c[f >> 2] | 0;
  d = c[n + 8 >> 2] | 0;
  if ((c[d + (f << 4) + 8 >> 2] | 0) == (c[e + 8 >> 2] | 0)) if (xc(0, d + (f << 4) | 0, e) | 0) {
   o = f;
   i = p;
   return o | 0;
  }
 }
 g = n + 44 | 0;
 d = c[g >> 2] | 0;
 k = b + 32 | 0;
 m = c[k >> 2] | 0;
 h[j >> 3] = +(m | 0);
 c[l >> 2] = 3;
 if ((m | 0) < (d | 0)) f = d; else {
  f = n + 8 | 0;
  c[f >> 2] = oe(o, c[f >> 2] | 0, g, 16, 67108863, 7015) | 0;
  f = c[g >> 2] | 0;
 }
 b = c[n + 8 >> 2] | 0;
 if ((d | 0) < (f | 0)) {
  f = c[g >> 2] | 0;
  do {
   c[b + (d << 4) + 8 >> 2] = 0;
   d = d + 1 | 0;
  } while ((d | 0) < (f | 0));
 }
 g = e;
 j = c[g + 4 >> 2] | 0;
 l = b + (m << 4) | 0;
 c[l >> 2] = c[g >> 2];
 c[l + 4 >> 2] = j;
 l = e + 8 | 0;
 c[b + (m << 4) + 8 >> 2] = c[l >> 2];
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 if (!(c[l >> 2] & 64)) {
  o = m;
  i = p;
  return o | 0;
 }
 d = c[e >> 2] | 0;
 if (!(a[d + 5 >> 0] & 3)) {
  o = m;
  i = p;
  return o | 0;
 }
 if (!(a[n + 5 >> 0] & 4)) {
  o = m;
  i = p;
  return o | 0;
 }
 Ec(o, n, d);
 o = m;
 i = p;
 return o | 0;
}

function Fk(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0;
 k = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[k >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  i = -1001e3 - e | 0;
  e = c[k >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (i | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (i + -1 << 4) | 0;
  }
 } while (0);
 j = c[e >> 2] | 0;
 f = j + 16 + (f + -1 << 2) | 0;
 do if ((g | 0) > 0) {
  e = (c[k >> 2] | 0) + (g << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((g | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (g << 4) | 0;
   break;
  }
  if ((g | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  i = -1001e3 - g | 0;
  e = c[k >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (i | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (i + -1 << 4) | 0;
  }
 } while (0);
 e = (c[e >> 2] | 0) + 16 + (h + -1 << 2) | 0;
 c[f >> 2] = c[e >> 2];
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 3)) return;
 if (!(a[j + 5 >> 0] & 4)) return;
 Ec(b, j, e);
 return;
}

function xd(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = c[e + 12 >> 2] | 0;
 do switch (f | 0) {
 case 0:
  {
   a[i + 63 >> 0] = 0;
   e = 0;
   return e | 0;
  }
 case 1:
  {
   rc(i, 0);
   a[i + 63 >> 0] = 1;
   e = 0;
   return e | 0;
  }
 case 2:
  {
   zb(e, 0);
   e = 0;
   return e | 0;
  }
 case 3:
  {
   e = ((c[i + 12 >> 2] | 0) + (c[i + 8 >> 2] | 0) | 0) >>> 10;
   return e | 0;
  }
 case 4:
  {
   e = (c[i + 12 >> 2] | 0) + (c[i + 8 >> 2] | 0) & 1023;
   return e | 0;
  }
 case 5:
  {
   h = b[i + 62 >> 1] | 0;
   if ((h & 255) << 24 >> 24 == 2) {
    i = (c[i + 20 >> 2] | 0) == 0 & 1;
    qc(e);
    e = i;
    return e | 0;
   }
   f = (g << 10) + -1600 | 0;
   if ((h & 65535) >= 256) f = (c[i + 12 >> 2] | 0) + f | 0;
   rc(i, f);
   qc(e);
   e = (a[i + 61 >> 0] | 0) == 5 & 1;
   return e | 0;
  }
 case 6:
  {
   i = i + 156 | 0;
   e = c[i >> 2] | 0;
   c[i >> 2] = g;
   return e | 0;
  }
 case 8:
  {
   i = i + 160 | 0;
   e = c[i >> 2] | 0;
   c[i >> 2] = g;
   return e | 0;
  }
 case 7:
  {
   i = i + 164 | 0;
   e = c[i >> 2] | 0;
   c[i >> 2] = g;
   return e | 0;
  }
 case 9:
  {
   e = d[i + 63 >> 0] | 0;
   return e | 0;
  }
 case 10:
  {
   yd(e, 2);
   e = 0;
   return e | 0;
  }
 case 11:
  {
   yd(e, 0);
   e = 0;
   return e | 0;
  }
 default:
  {
   e = -1;
   return e | 0;
  }
 } while (0);
 return 0;
}

function ym(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if ((c[f + 76 >> 2] | 0) > -1) m = Tl(f) | 0; else m = 0;
 g = e + -1 | 0;
 if ((e | 0) < 2) {
  n = f + 74 | 0;
  l = a[n >> 0] | 0;
  a[n >> 0] = l + 255 | l;
  if (m | 0) bl(f);
  if (!g) a[b >> 0] = 0; else b = 0;
 } else {
  a : do if (!g) {
   e = b;
   n = 17;
  } else {
   l = f + 4 | 0;
   k = f + 8 | 0;
   e = b;
   while (1) {
    h = c[l >> 2] | 0;
    i = h;
    p = (c[k >> 2] | 0) - i | 0;
    j = Pl(h, 10, p) | 0;
    o = (j | 0) == 0;
    j = o ? p : 1 - i + j | 0;
    i = j >>> 0 < g >>> 0;
    j = i ? j : g;
    En(e | 0, h | 0, j | 0) | 0;
    h = (c[l >> 2] | 0) + j | 0;
    c[l >> 2] = h;
    e = e + j | 0;
    j = g - j | 0;
    if (!(o & i)) {
     n = 17;
     break a;
    }
    if (h >>> 0 < (c[k >> 2] | 0) >>> 0) {
     c[l >> 2] = h + 1;
     i = d[h >> 0] | 0;
    } else {
     g = jm(f) | 0;
     if ((g | 0) < 0) break; else i = g;
    }
    g = j + -1 | 0;
    h = e + 1 | 0;
    a[e >> 0] = i;
    if (!((g | 0) != 0 & (i & 255 | 0) != 10)) {
     e = h;
     n = 17;
     break a;
    } else e = h;
   }
   if ((e | 0) == (b | 0)) b = 0; else if (!(c[f >> 2] & 16)) b = 0; else n = 17;
  } while (0);
  if ((n | 0) == 17) if (!b) b = 0; else a[e >> 0] = 0;
  if (m) bl(f);
 }
 return b | 0;
}

function un(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0, g = 0, i = 0.0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 b = Cn(c[k >> 2] | 0, d | 0, 63) | 0;
 d = d & 2147483647;
 do if (d >>> 0 > 1082532650) {
  f = +N(+a);
  h[k >> 3] = f;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0) {
   f = a;
   return +f;
  }
  if (a > 709.782712893384) {
   f = a * 8988465674311579538646525.0e283;
   return +f;
  } else {
   if (a < -708.3964185322641 & a < -745.1332191019411) a = 0.0; else {
    g = 8;
    break;
   }
   return +a;
  }
 } else {
  if (d >>> 0 > 1071001154) {
   if (d >>> 0 > 1072734897) {
    g = 8;
    break;
   }
   b = (b ^ 1) - b | 0;
   g = 10;
   break;
  }
  if (d >>> 0 > 1043333120) {
   f = a;
   b = 0;
   e = 0.0;
  } else {
   f = a + 1.0;
   return +f;
  }
 } while (0);
 if ((g | 0) == 8) {
  b = ~~(a * 1.4426950408889634 + +h[1160 + (b << 3) >> 3]);
  g = 10;
 }
 if ((g | 0) == 10) {
  f = +(b | 0);
  i = a - f * .6931471803691238;
  a = f * 1.9082149292705877e-10;
  f = i;
  e = a;
  a = i - a;
 }
 i = a * a;
 i = a - i * (i * (i * (i * (i * 4.1381367970572385e-08 + -1.6533902205465252e-06) + 6.613756321437934e-05) + -2.7777777777015593e-03) + .16666666666666602);
 a = f + (a * i / (2.0 - i) - e) + 1.0;
 if (!b) {
  i = a;
  return +i;
 }
 i = +gl(a, b);
 return +i;
}

function Pd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  g = (c[h >> 2] | 0) + (b << 4) | 0;
  g = g >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? g : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   g = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   g = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[h >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) g = 15088; else {
   g = c[b >> 2] | 0;
   g = (f | 0) > (d[g + 6 >> 0] | 0 | 0) ? 15088 : g + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 do if ((e | 0) > 0) {
  b = (c[h >> 2] | 0) + (e << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - e | 0;
  b = c[h >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   h = 0;
   return h | 0;
  } else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
   break;
  }
 } while (0);
 if (!((g | 0) != 15088 & (b | 0) != 15088)) {
  h = 0;
  return h | 0;
 }
 if ((c[g + 8 >> 2] | 0) == (c[b + 8 >> 2] | 0)) b = (xc(0, g, b) | 0) != 0; else b = 0;
 h = b & 1;
 return h | 0;
}

function xf(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0;
 i = Ie(b, g) | 0;
 j = Ie(b, h) | 0;
 if ((c[h >> 2] | 0) == 6) {
  h = c[h + 8 >> 2] | 0;
  if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
   l = b + 48 | 0;
   a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 if ((c[g >> 2] | 0) == 6) {
  h = c[g + 8 >> 2] | 0;
  if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
   l = b + 48 | 0;
   a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 l = (e | 0) != 24 & (f | 0) == 0;
 De(b, (l ? 64 : f << 6) | e | (l ? j : i) << 23 | (l ? i : j) << 14) | 0;
 l = b + 28 | 0;
 k = c[l >> 2] | 0;
 c[l >> 2] = -1;
 l = De(b, 2147450903) | 0;
 if ((k | 0) == -1) {
  b = g + 8 | 0;
  c[b >> 2] = l;
  c[g >> 2] = 10;
  return;
 }
 if ((l | 0) == -1) {
  l = k;
  b = g + 8 | 0;
  c[b >> 2] = l;
  c[g >> 2] = 10;
  return;
 }
 f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 h = l;
 while (1) {
  j = f + (h << 2) | 0;
  i = c[j >> 2] | 0;
  e = (i >>> 14) + -131071 | 0;
  e = (e | 0) == -1 ? -1 : h + 1 + e | 0;
  if ((e | 0) == -1) break; else h = e;
 }
 h = k + ~h | 0;
 if ((((h | 0) > -1 ? h : 0 - h | 0) | 0) > 131071) me(c[b + 12 >> 2] | 0, 6980);
 c[j >> 2] = (h << 14) + 2147467264 | i & 16383;
 b = g + 8 | 0;
 c[b >> 2] = l;
 c[g >> 2] = 10;
 return;
}

function Rd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[e >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) f = 15088; else {
   e = c[b >> 2] | 0;
   f = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 e = a + 8 | 0;
 b = c[e >> 2] | 0;
 if (b >>> 0 <= f >>> 0) {
  e = b;
  b = e;
  h = b;
  h = c[h >> 2] | 0;
  b = b + 4 | 0;
  b = c[b >> 2] | 0;
  a = f;
  g = a;
  c[g >> 2] = h;
  a = a + 4 | 0;
  c[a >> 2] = b;
  e = e + 8 | 0;
  e = c[e >> 2] | 0;
  a = f + 8 | 0;
  c[a >> 2] = e;
  return;
 }
 do {
  h = b;
  b = b + -16 | 0;
  i = b;
  a = c[i + 4 >> 2] | 0;
  g = h;
  c[g >> 2] = c[i >> 2];
  c[g + 4 >> 2] = a;
  c[h + 8 >> 2] = c[h + -8 >> 2];
 } while (b >>> 0 > f >>> 0);
 h = c[e >> 2] | 0;
 g = h;
 e = g;
 e = c[e >> 2] | 0;
 g = g + 4 | 0;
 g = c[g >> 2] | 0;
 i = f;
 a = i;
 c[a >> 2] = e;
 i = i + 4 | 0;
 c[i >> 2] = g;
 h = h + 8 | 0;
 h = c[h >> 2] | 0;
 i = f + 8 | 0;
 c[i >> 2] = h;
 return;
}

function Ui(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 80 | 0;
 g = j + 16 | 0;
 e = j + 8 | 0;
 d = j;
 f = j + 64 | 0;
 h = j + 20 | 0;
 if ((Gd(a, 1) | 0) < 1) b = Wa(0) | 0; else {
  Yf(a, 1, 5);
  wd(a, 1);
  Qg(a, -1, 9942);
  b = hd(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 0 : b;
  wd(a, -2);
  c[h >> 2] = b;
  Qg(a, -1, 11262);
  b = hd(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 0 : b;
  wd(a, -2);
  c[h + 4 >> 2] = b;
  Qg(a, -1, 9946);
  b = hd(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 12 : b;
  wd(a, -2);
  c[h + 8 >> 2] = b;
  Qg(a, -1, 9951);
  b = hd(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[d >> 2] = 9951;
   b = md(a, 10134, d) | 0;
  } else wd(a, -2);
  c[h + 12 >> 2] = b;
  Qg(a, -1, 9955);
  b = hd(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[e >> 2] = 9955;
   b = md(a, 10134, e) | 0;
  } else wd(a, -2);
  c[h + 16 >> 2] = b + -1;
  Qg(a, -1, 9961);
  b = hd(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[g >> 2] = 9961;
   b = md(a, 10134, g) | 0;
  } else wd(a, -2);
  c[h + 20 >> 2] = b + -1900;
  Qg(a, -1, 9976);
  if (!(Gd(a, -1) | 0)) b = -1; else b = Ed(a, -1) | 0;
  wd(a, -2);
  c[h + 32 >> 2] = b;
  b = Ga(h | 0) | 0;
 }
 if ((b | 0) == -1) {
  Md(a);
  i = j;
  return 1;
 } else {
  ud(a, +(b | 0));
  i = j;
  return 1;
 }
 return 0;
}

function Yl(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 15196 : f;
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
    f = c[3232 + (f << 2) >> 2] | 0;
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
  c[(_k() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function Tc(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 j = e + -1 | 0;
 a : do if (j >>> 0 < (c[b + 28 >> 2] | 0) >>> 0) {
  j = (c[b + 12 >> 2] | 0) + (j << 4) | 0;
  k = 10;
 } else {
  g = +(e | 0);
  h[l >> 3] = g + 1.0;
  j = (c[l + 4 >> 2] | 0) + (c[l >> 2] | 0) | 0;
  if ((j | 0) < 0) {
   n = 0 - j | 0;
   j = (j | 0) == (n | 0) ? 0 : n;
  }
  j = (c[b + 16 >> 2] | 0) + (((j | 0) % ((1 << (d[b + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
  while (1) {
   if ((c[j + 24 >> 2] | 0) == 3) if (+h[j + 16 >> 3] == g) break;
   j = c[j + 28 >> 2] | 0;
   if (!j) break a;
  }
  k = 10;
 } while (0);
 do if ((k | 0) == 10) if ((j | 0) == 15088) {
  g = +(e | 0);
  break;
 } else {
  n = j;
  b = f;
  k = b;
  k = c[k >> 2] | 0;
  b = b + 4 | 0;
  b = c[b >> 2] | 0;
  l = n;
  a = l;
  c[a >> 2] = k;
  l = l + 4 | 0;
  c[l >> 2] = b;
  f = f + 8 | 0;
  f = c[f >> 2] | 0;
  n = n + 8 | 0;
  c[n >> 2] = f;
  i = m;
  return;
 } while (0);
 h[l >> 3] = g;
 c[l + 8 >> 2] = 3;
 n = Ac(a, b, l) | 0;
 b = f;
 k = b;
 k = c[k >> 2] | 0;
 b = b + 4 | 0;
 b = c[b >> 2] | 0;
 l = n;
 a = l;
 c[a >> 2] = k;
 l = l + 4 | 0;
 c[l >> 2] = b;
 f = f + 8 | 0;
 f = c[f >> 2] | 0;
 n = n + 8 | 0;
 c[n >> 2] = f;
 i = m;
 return;
}

function lf(e, f, g, h) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 if (!e) {
  n = 0;
  return n | 0;
 }
 k = e + 12 | 0;
 l = e + 40 | 0;
 j = d[e + 46 >> 0] | 0;
 while (1) {
  m = j + -1 | 0;
  i = c[e >> 2] | 0;
  if ((j | 0) <= 0) break;
  if (!(ef(f, c[(c[i + 24 >> 2] | 0) + ((b[(c[c[(c[k >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[l >> 2] | 0) + m << 1) >> 1] | 0) * 12 | 0) >> 2] | 0) | 0)) j = m; else {
   i = m;
   n = 5;
   break;
  }
 }
 if ((n | 0) == 5) {
  c[g + 16 >> 2] = -1;
  c[g + 20 >> 2] = -1;
  c[g >> 2] = 7;
  c[g + 8 >> 2] = i;
  if (h | 0) {
   n = 7;
   return n | 0;
  }
  i = e + 16 | 0;
  do i = c[i >> 2] | 0; while ((d[i + 8 >> 0] | 0) >= (j | 0));
  a[i + 9 >> 0] = 1;
  n = 7;
  return n | 0;
 }
 j = c[i + 28 >> 2] | 0;
 k = e + 47 | 0;
 a : do if (!(a[k >> 0] | 0)) n = 13; else {
  i = 0;
  while (1) {
   if (ef(c[j + (i << 3) >> 2] | 0, f) | 0) break;
   i = i + 1 | 0;
   if ((i | 0) >= (d[k >> 0] | 0)) {
    n = 13;
    break a;
   }
  }
  if ((i | 0) < 0) n = 13;
 } while (0);
 do if ((n | 0) == 13) if (!(lf(c[e + 8 >> 2] | 0, f, g, 0) | 0)) {
  n = 0;
  return n | 0;
 } else {
  i = le(e, f, g) | 0;
  break;
 } while (0);
 c[g + 16 >> 2] = -1;
 c[g + 20 >> 2] = -1;
 c[g >> 2] = 8;
 c[g + 8 >> 2] = i;
 n = 8;
 return n | 0;
}

function kc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 i = Vl(c) | 0;
 switch (a[c >> 0] | 0) {
 case 61:
  {
   e = c + 1 | 0;
   if (i >>> 0 > d >>> 0) {
    i = d + -1 | 0;
    En(b | 0, e | 0, i | 0) | 0;
    a[b + i >> 0] = 0;
    return;
   } else {
    En(b | 0, e | 0, i | 0) | 0;
    return;
   }
  }
 case 64:
  if (i >>> 0 > d >>> 0) {
   a[b >> 0] = a[5284] | 0;
   a[b + 1 >> 0] = a[5285] | 0;
   a[b + 2 >> 0] = a[5286] | 0;
   En(b + 3 | 0, c + 1 + i + (3 - d) | 0, d + -3 | 0) | 0;
   return;
  } else {
   En(b | 0, c + 1 | 0, i | 0) | 0;
   return;
  }
 default:
  {
   h = qm(c, 10) | 0;
   e = b;
   f = 4485;
   g = e + 9 | 0;
   do {
    a[e >> 0] = a[f >> 0] | 0;
    e = e + 1 | 0;
    f = f + 1 | 0;
   } while ((e | 0) < (g | 0));
   g = b + 9 | 0;
   f = d + -15 | 0;
   e = (h | 0) == 0;
   if (i >>> 0 < f >>> 0 & e) {
    En(g | 0, c | 0, i | 0) | 0;
    e = g + i | 0;
   } else {
    e = e ? i : h - c | 0;
    e = e >>> 0 > f >>> 0 ? f : e;
    En(g | 0, c | 0, e | 0) | 0;
    e = g + e | 0;
    a[e >> 0] = a[5284] | 0;
    a[e + 1 >> 0] = a[5285] | 0;
    a[e + 2 >> 0] = a[5286] | 0;
    e = e + 3 | 0;
   };
   a[e >> 0] = a[4495] | 0;
   a[e + 1 >> 0] = a[4496] | 0;
   a[e + 2 >> 0] = a[4497] | 0;
   return;
  }
 }
}

function Pb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = e + 5 | 0;
 a[i >> 0] = (d[i >> 0] | 0) & 252;
 switch (d[e + 4 >> 0] | 0 | 0) {
 case 20:
 case 4:
  {
   f = (c[e + 12 >> 2] | 0) + 17 | 0;
   break;
  }
 case 7:
  {
   f = c[e + 8 >> 2] | 0;
   if (f | 0) if (a[f + 5 >> 0] & 3) Pb(b, f);
   f = c[e + 12 >> 2] | 0;
   if (f | 0) if (a[f + 5 >> 0] & 3) Pb(b, f);
   f = (c[e + 16 >> 2] | 0) + 24 | 0;
   break;
  }
 case 10:
  {
   h = e + 8 | 0;
   f = c[h >> 2] | 0;
   if (c[f + 8 >> 2] & 64) {
    g = c[f >> 2] | 0;
    if (a[g + 5 >> 0] & 3) {
     Pb(b, g);
     f = c[h >> 2] | 0;
    }
   }
   if ((f | 0) == (e + 16 | 0)) f = 32; else return;
   break;
  }
 case 6:
  {
   b = b + 84 | 0;
   c[e + 8 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 38:
  {
   b = b + 84 | 0;
   c[e + 8 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 5:
  {
   b = b + 84 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 8:
  {
   b = b + 84 | 0;
   c[e + 60 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 9:
  {
   b = b + 84 | 0;
   c[e + 72 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 default:
  return;
 }
 a[i >> 0] = d[i >> 0] | 0 | 4;
 b = b + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + f;
 return;
}

function Rc(a, e) {
 a = a | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 i = a + 16 | 0;
 g = c[i >> 2] | 0;
 f = d[a + 40 >> 0] | 0;
 if (!(f & 6)) {
  h = c[g + 8 >> 2] | 0;
  f = e;
 } else {
  if (!(f & 2)) f = e; else {
   j = a + 28 | 0;
   f = e - (c[j >> 2] | 0) | 0;
   sc(a, 1, -1);
   f = (c[j >> 2] | 0) + f | 0;
  }
  h = c[g + 8 >> 2] | 0;
  c[a + 20 >> 2] = c[h + 28 >> 2];
 }
 e = c[g >> 2] | 0;
 g = b[g + 16 >> 1] | 0;
 j = g << 16 >> 16;
 c[i >> 2] = h;
 a = a + 8 | 0;
 if (!(g << 16 >> 16)) {
  k = e;
  c[a >> 2] = k;
  k = j + 1 | 0;
  return k | 0;
 } else {
  g = f;
  h = j;
 }
 while (1) {
  if (g >>> 0 >= (c[a >> 2] | 0) >>> 0) {
   f = h;
   break;
  }
  f = e + 16 | 0;
  m = g;
  l = c[m + 4 >> 2] | 0;
  i = e;
  c[i >> 2] = c[m >> 2];
  c[i + 4 >> 2] = l;
  c[e + 8 >> 2] = c[g + 8 >> 2];
  h = h + -1 | 0;
  if (!h) {
   k = 11;
   break;
  } else {
   g = g + 16 | 0;
   e = f;
  }
 }
 if ((k | 0) == 11) {
  c[a >> 2] = f;
  m = j + 1 | 0;
  return m | 0;
 }
 if ((f | 0) > 0) g = f; else {
  m = e;
  c[a >> 2] = m;
  m = j + 1 | 0;
  return m | 0;
 }
 while (1) {
  f = e + 16 | 0;
  c[e + 8 >> 2] = 0;
  if ((g | 0) > 1) {
   g = g + -1 | 0;
   e = f;
  } else break;
 }
 c[a >> 2] = f;
 m = j + 1 | 0;
 return m | 0;
}

function yl(a, b, d) {
 a = +a;
 b = +b;
 d = d | 0;
 var e = 0, f = 0.0, g = 0, i = 0, j = 0.0, l = 0.0;
 h[k >> 3] = a;
 e = c[k + 4 >> 2] | 0;
 g = e & 2147483640;
 g = g >>> 0 > 1072010279 | (g | 0) == 1072010279 & 0 > 0;
 if (g) {
  e = Cn(c[k >> 2] | 0, e | 0, 63) | 0;
  i = (e | 0) == 0;
  f = .7853981633974483 - (i ? a : -a) + (3.061616997868383e-17 - (i ? b : -b));
  b = 0.0;
 } else {
  e = 0;
  f = a;
 }
 j = f * f;
 a = j * j;
 l = f * j;
 a = l * .3333333333333341 + (b + j * (b + l * (a * (a * (a * (a * (7.817944429395571e-05 - a * 1.8558637485527546e-05) + 5.880412408202641e-04) + 3.5920791075913124e-03) + .021869488294859542) + .13333333333320124 + j * (a * (a * (a * (a * (a * 2.590730518636337e-05 + 7.140724913826082e-05) + 2.464631348184699e-04) + 1.4562094543252903e-03) + .0088632398235993) + .05396825397622605))));
 b = f + a;
 if (g) {
  l = +(1 - (d << 1) | 0);
  b = l - (f + (a - b * b / (l + b))) * 2.0;
  b = e | 0 ? -b : b;
 } else if (d) {
  h[k >> 3] = b;
  i = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = i;
  l = +h[k >> 3];
  j = -1.0 / b;
  h[k >> 3] = j;
  i = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = i;
  b = +h[k >> 3];
  b = b + j * (l * b + 1.0 + b * (a - (l - f)));
 }
 return +b;
}

function yg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[f >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = b + 8 | 0;
 h = c[g >> 2] | 0;
 f = te(b, c[e >> 2] | 0, h + -32 | 0) | 0;
 k = h + -16 | 0;
 j = c[k + 4 >> 2] | 0;
 i = f;
 c[i >> 2] = c[k >> 2];
 c[i + 4 >> 2] = j;
 c[f + 8 >> 2] = c[h + -8 >> 2];
 e = c[e >> 2] | 0;
 a[e + 6 >> 0] = 0;
 f = c[g >> 2] | 0;
 if (!(c[f + -8 >> 2] & 64)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 if (!(a[(c[f + -16 >> 2] | 0) + 5 >> 0] & 3)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 if (!(a[e + 5 >> 0] & 4)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 Dc(b, e);
 k = c[g >> 2] | 0;
 k = k + -32 | 0;
 c[g >> 2] = k;
 return;
}

function Mb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 j = c[b + 12 >> 2] | 0;
 k = j + 24 | 0;
 Nb(b, -5);
 j = j + 32 | 0;
 f = c[j >> 2] | 0;
 if ((f | 0) < (e | 0)) {
  if ((e + 1 | 0) >>> 0 > 1073741823) Kb(b);
  g = yb(b, c[k >> 2] | 0, f << 2, e << 2) | 0;
  c[k >> 2] = g;
  f = c[j >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   c[g + (f << 2) >> 2] = 0;
   g = f + 1 | 0;
   if ((g | 0) != (e | 0)) do {
    c[(c[k >> 2] | 0) + (g << 2) >> 2] = 0;
    g = g + 1 | 0;
   } while ((g | 0) != (e | 0));
  }
 }
 if ((f | 0) > 0) {
  f = c[j >> 2] | 0;
  i = e + -1 | 0;
  h = 0;
  do {
   l = (c[k >> 2] | 0) + (h << 2) | 0;
   g = c[l >> 2] | 0;
   c[l >> 2] = 0;
   if (g | 0) do {
    l = g;
    g = c[g >> 2] | 0;
    m = (c[k >> 2] | 0) + ((c[l + 8 >> 2] & i) << 2) | 0;
    c[l >> 2] = c[m >> 2];
    c[m >> 2] = l;
    l = l + 5 | 0;
    a[l >> 0] = (d[l >> 0] | 0) & 191;
   } while ((g | 0) != 0);
   h = h + 1 | 0;
  } while ((h | 0) < (f | 0));
 }
 if ((f | 0) <= (e | 0)) {
  c[j >> 2] = e;
  return;
 }
 if ((e + 1 | 0) >>> 0 > 1073741823) Kb(b);
 c[k >> 2] = yb(b, c[k >> 2] | 0, f << 2, e << 2) | 0;
 c[j >> 2] = e;
 return;
}

function ff(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 o = i;
 i = i + 16 | 0;
 m = o;
 h = c[e + 48 >> 2] | 0;
 j = c[e + 64 >> 2] | 0;
 n = j + 12 | 0;
 k = c[n >> 2] | 0;
 l = a[k + (f << 4) + 12 >> 0] | 0;
 if ((l & 255) < (d[g + 12 >> 0] | 0)) {
  p = c[e + 52 >> 2] | 0;
  q = c[k + (f << 4) + 8 >> 2] | 0;
  l = (c[(c[(c[h >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[h + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[h + 40 >> 2] | 0) + (l & 255) << 1) >> 1] | 0) * 12 | 0) >> 2] | 0) + 16 | 0;
  c[m >> 2] = (c[k + (f << 4) >> 2] | 0) + 16;
  c[m + 4 >> 2] = q;
  c[m + 8 >> 2] = l;
  gf(e, lc(p, 7271, m) | 0);
 }
 hf(h, c[k + (f << 4) + 4 >> 2] | 0, c[g + 4 >> 2] | 0);
 j = j + 16 | 0;
 h = (c[j >> 2] | 0) + -1 | 0;
 if ((h | 0) <= (f | 0)) {
  q = h;
  c[j >> 2] = q;
  i = o;
  return;
 }
 do {
  q = c[n >> 2] | 0;
  h = q + (f << 4) | 0;
  f = f + 1 | 0;
  q = q + (f << 4) | 0;
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[h + 12 >> 2] = c[q + 12 >> 2];
  h = (c[j >> 2] | 0) + -1 | 0;
 } while ((f | 0) < (h | 0));
 c[j >> 2] = h;
 i = o;
 return;
}

function Il(b, d, e) {
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
 if ((Jl(0, d, n, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) o = Tl(b) | 0; else o = 0;
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
   f = Jl(b, d, n, q, r) | 0;
   if (e) {
    cb[c[b + 36 >> 2] & 15](b, 0, 0) | 0;
    f = (c[l >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = e;
    c[h >> 2] = 0;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[l >> 2] = 0;
   }
  } else f = Jl(b, d, n, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | m;
  if (o | 0) bl(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}
function vn(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0.0, g = 0.0, i = 0.0, j = 0.0, l = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 b = c[k + 4 >> 2] | 0;
 e = (b | 0) < 0;
 do if (e | b >>> 0 < 1048576) {
  f = +N(+a);
  h[k >> 3] = f;
  if ((c[k >> 2] | 0) == 0 & (c[k + 4 >> 2] | 0) == 0) {
   f = -1.0 / (a * a);
   return +f;
  }
  if (!e) {
   h[k >> 3] = a * 18014398509481984.0;
   b = c[k + 4 >> 2] | 0;
   e = c[k >> 2] | 0;
   d = -1077;
   break;
  }
  f = (a - a) / 0.0;
  return +f;
 } else {
  if (b >>> 0 > 2146435071) {
   f = a;
   return +f;
  }
  if ((d | 0) == 0 & 0 == 0 & (b | 0) == 1072693248) {
   f = 0.0;
   return +f;
  } else {
   e = d;
   d = -1023;
  }
 } while (0);
 b = b + 614242 | 0;
 c[k >> 2] = e;
 c[k + 4 >> 2] = (b & 1048575) + 1072079006;
 l = +h[k >> 3] + -1.0;
 f = l * (l * .5);
 i = l / (l + 2.0);
 g = i * i;
 a = g * g;
 j = +(d + (b >>> 20) | 0);
 f = j * .6931471803691238 + (l + (j * 1.9082149292705877e-10 + i * (f + (a * (a * (a * .15313837699209373 + .22222198432149784) + .3999999999940942) + g * (a * (a * (a * .14798198605116586 + .1818357216161805) + .2857142874366239) + .6666666666666735))) - f));
 return +f;
}

function Ce(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 switch (c[e >> 2] | 0) {
 case 7:
  {
   c[e >> 2] = 6;
   return;
  }
 case 8:
  {
   k = e + 8 | 0;
   c[k >> 2] = De(b, c[k >> 2] << 23 | 5) | 0;
   c[e >> 2] = 11;
   return;
  }
 case 9:
  {
   k = e + 8 | 0;
   f = c[k >> 2] | 0;
   j = f << 16;
   h = j >> 16;
   i = f >>> 16;
   g = i & 255;
   if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
    h = b + 48 | 0;
    a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
   }
   if ((f & -16777216 | 0) == 117440512) if ((d[b + 46 >> 0] | 0) > (g & 255)) f = 7; else {
    f = b + 48 | 0;
    a[f >> 0] = (a[f >> 0] | 0) + -1 << 24 >> 24;
    f = 7;
   } else f = 6;
   c[k >> 2] = De(b, i << 23 & 2139095040 | f | j >> 2) | 0;
   c[e >> 2] = 11;
   return;
  }
 case 12:
  {
   c[e >> 2] = 6;
   k = e + 8 | 0;
   c[k >> 2] = (c[(c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[k >> 2] << 2) >> 2] | 0) >>> 6 & 255;
   return;
  }
 case 13:
  {
   k = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) | 0;
   c[k >> 2] = c[k >> 2] & 8388607 | 16777216;
   c[e >> 2] = 11;
   return;
  }
 default:
  return;
 }
}

function dh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 b = n + 4 | 0;
 d = a + 12 | 0;
 k = c[d >> 2] | 0;
 m = dd(k, -1, b) | 0;
 l = a + 16 | 0;
 if ((c[a >> 2] | 0) != (l | 0)) Rd(k, -2);
 j = c[b >> 2] | 0;
 f = c[d >> 2] | 0;
 h = a + 4 | 0;
 b = c[h >> 2] | 0;
 g = a + 8 | 0;
 d = c[g >> 2] | 0;
 if ((b - d | 0) >>> 0 >= j >>> 0) {
  h = d;
  f = c[a >> 2] | 0;
  h = f + h | 0;
  En(h | 0, m | 0, j | 0) | 0;
  m = c[g >> 2] | 0;
  m = m + j | 0;
  c[g >> 2] = m;
  m = c[a >> 2] | 0;
  m = (m | 0) != (l | 0);
  m = m ? -2 : -1;
  Qd(k, m);
  i = n;
  return;
 }
 e = b << 1;
 e = (e - d | 0) >>> 0 < j >>> 0 ? d + j | 0 : e;
 if (e >>> 0 < d >>> 0 | (e - d | 0) >>> 0 < j >>> 0) md(f, 8242, n) | 0;
 b = bh(f, e) | 0;
 En(b | 0, c[a >> 2] | 0, c[g >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (l | 0)) Qd(f, -2);
 c[a >> 2] = b;
 c[h >> 2] = e;
 h = c[g >> 2] | 0;
 f = b;
 h = f + h | 0;
 En(h | 0, m | 0, j | 0) | 0;
 m = c[g >> 2] | 0;
 m = m + j | 0;
 c[g >> 2] = m;
 m = c[a >> 2] | 0;
 m = (m | 0) != (l | 0);
 m = m ? -2 : -1;
 Qd(k, m);
 i = n;
 return;
}

function sc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 112 | 0;
 r = s;
 l = s + 4 | 0;
 g = c[b + 52 >> 2] | 0;
 if (!g) {
  i = s;
  return;
 }
 k = b + 41 | 0;
 if (!(a[k >> 0] | 0)) {
  i = s;
  return;
 }
 h = c[b + 16 >> 2] | 0;
 p = b + 8 | 0;
 t = c[p >> 2] | 0;
 m = b + 28 | 0;
 o = c[m >> 2] | 0;
 n = t - o | 0;
 q = h + 4 | 0;
 o = (c[q >> 2] | 0) - o | 0;
 c[l >> 2] = e;
 c[l + 20 >> 2] = f;
 c[l + 96 >> 2] = h;
 e = t;
 do if (((c[b + 24 >> 2] | 0) - t | 0) < 336) {
  e = c[b + 32 >> 2] | 0;
  if ((e | 0) > 1e6) Ib(b, 6);
  t = (n >> 4) + 25 | 0;
  e = e << 1;
  e = (e | 0) > 1e6 ? 1e6 : e;
  e = (e | 0) < (t | 0) ? t : e;
  if ((e | 0) > 1e6) {
   Jb(b, 1000200);
   Fb(b, 7808, r);
  } else {
   Jb(b, e);
   j = c[p >> 2] | 0;
   break;
  }
 } else j = e; while (0);
 c[q >> 2] = j + 320;
 a[k >> 0] = 0;
 t = h + 18 | 0;
 a[t >> 0] = d[t >> 0] | 2;
 eb[g & 15](b, l);
 a[k >> 0] = 1;
 r = c[m >> 2] | 0;
 c[q >> 2] = r + o;
 c[p >> 2] = r + n;
 a[t >> 0] = d[t >> 0] & 253;
 i = s;
 return;
}

function _m(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 f = j + 16 | 0;
 e = j;
 g = xm(b) | 0;
 if ((c[d + 76 >> 2] | 0) > -1) h = Tl(d) | 0; else h = 0;
 um(d) | 0;
 do if (!a) {
  a = d + 60 | 0;
  if (g & 524288 | 0) {
   c[e >> 2] = c[a >> 2];
   c[e + 4 >> 2] = 2;
   c[e + 8 >> 2] = 1;
   la(221, e | 0) | 0;
  }
  c[f >> 2] = c[a >> 2];
  c[f + 4 >> 2] = 4;
  c[f + 8 >> 2] = g & -524481;
  if ((Zk(la(221, f | 0) | 0) | 0) < 0) a = 15; else a = 12;
 } else {
  e = wm(a, b) | 0;
  if (!e) a = 15; else {
   f = e + 60 | 0;
   a = c[f >> 2] | 0;
   b = c[d + 60 >> 2] | 0;
   if ((a | 0) == (b | 0)) c[f >> 2] = -1; else if (($m(a, b, g & 524288) | 0) < 0) {
    tm(e) | 0;
    a = 15;
    break;
   }
   c[d >> 2] = c[d >> 2] & 1 | c[e >> 2];
   c[d + 32 >> 2] = c[e + 32 >> 2];
   c[d + 36 >> 2] = c[e + 36 >> 2];
   c[d + 40 >> 2] = c[e + 40 >> 2];
   c[d + 12 >> 2] = c[e + 12 >> 2];
   tm(e) | 0;
   a = 12;
  }
 } while (0);
 if ((a | 0) == 12) {
  if (h) bl(d);
 } else if ((a | 0) == 15) {
  tm(d) | 0;
  d = 0;
 }
 i = j;
 return d | 0;
}

function Yc(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 176 | 0;
 p = 4;
 q = hn(40) | 0;
 c[q >> 2] = 0;
 k = s;
 l = a + 38 | 0;
 h = b[l >> 1] | 0;
 m = k + 160 | 0;
 c[m >> 2] = 0;
 j = a + 64 | 0;
 c[k >> 2] = c[j >> 2];
 c[j >> 2] = k;
 p = Bn(k + 4 | 0, 1, q | 0, p | 0) | 0;
 q = C;
 n = 0;
 f = n;
 n = 0;
 if ((f | 0) != 0 & (o | 0) != 0) {
  g = Dn(c[f >> 2] | 0, p | 0, q | 0) | 0;
  if (!g) xa(f | 0, o | 0);
  C = o;
 } else g = -1;
 if ((g | 0) == 1) f = C; else f = 0;
 while (1) {
  if (f | 0) {
   r = 6;
   break;
  }
  n = 0;
  ga(d | 0, a | 0, e | 0);
  f = n;
  n = 0;
  if ((f | 0) != 0 & (o | 0) != 0) {
   g = Dn(c[f >> 2] | 0, p | 0, q | 0) | 0;
   if (!g) xa(f | 0, o | 0);
   C = o;
  } else g = -1;
  if ((g | 0) == 1) f = C; else break;
 }
 if ((r | 0) == 6) {
  r = c[k >> 2] | 0;
  c[j >> 2] = r;
  b[l >> 1] = h;
  r = c[m >> 2] | 0;
  jn(p | 0);
  i = s;
  return r | 0;
 }
 r = c[k >> 2] | 0;
 c[j >> 2] = r;
 b[l >> 1] = h;
 r = c[m >> 2] | 0;
 jn(p | 0);
 i = s;
 return r | 0;
}

function Kk(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[f >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 h = b + 8 | 0;
 g = c[h >> 2] | 0;
 if (!(c[g + -8 >> 2] | 0)) {
  c[(c[e >> 2] | 0) + 12 >> 2] = 0;
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 f = g + -16 | 0;
 c[(c[e >> 2] | 0) + 12 >> 2] = c[f >> 2];
 f = c[f >> 2] | 0;
 if (!(a[f + 5 >> 0] & 3)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 Ec(b, e, f);
 b = c[h >> 2] | 0;
 b = b + -16 | 0;
 c[h >> 2] = b;
 return;
}

function Dg(b) {
 b = b | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 f = n;
 do if ((Gd(b, 2) | 0) < 1) {
  e = +Eg(b, 1, f);
  if (!(c[f >> 2] | 0)) {
   Qf(b, 1);
   break;
  }
  ud(b, e);
  i = n;
  return 1;
 } else {
  g = Fg(b, 1, f) | 0;
  m = g + (c[f >> 2] | 0) | 0;
  k = Xf(b, 2) | 0;
  if ((k + -2 | 0) >>> 0 >= 35) Id(b, 2, 8001) | 0;
  f = g + (cn(g, 8019) | 0) | 0;
  switch (a[f >> 0] | 0) {
  case 45:
   {
    l = 1;
    f = f + 1 | 0;
    break;
   }
  case 43:
   {
    l = 0;
    f = f + 1 | 0;
    break;
   }
  default:
   l = 0;
  }
  if (cm(d[f >> 0] | 0) | 0) {
   j = +(k | 0);
   e = 0.0;
   do {
    g = a[f >> 0] | 0;
    h = g & 255;
    if ((h + -48 | 0) >>> 0 < 10) g = (g << 24 >> 24) + -48 | 0; else g = (Zl(h) | 0) + -55 | 0;
    if ((g | 0) >= (k | 0)) break;
    e = j * e + +(g | 0);
    f = f + 1 | 0;
   } while ((cm(d[f >> 0] | 0) | 0) != 0);
   if ((f + (cn(f, 8019) | 0) | 0) == (m | 0)) {
    ud(b, l | 0 ? -e : e);
    i = n;
    return 1;
   }
  }
 } while (0);
 Md(b);
 i = n;
 return 1;
}

function Zd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 c[b >> 2] = 0;
 f = b + 4 | 0;
 e = Vm(c[f >> 2] | 0) | 0;
 a : do switch (e | 0) {
 case -1:
  {
   g = 5;
   break;
  }
 case 239:
  {
   e = c[b >> 2] | 0;
   c[b >> 2] = e + 1;
   a[b + 8 + e >> 0] = -17;
   e = Vm(c[f >> 2] | 0) | 0;
   switch (e | 0) {
   case -1:
    {
     g = 5;
     break a;
    }
   case 187:
    break;
   default:
    break a;
   }
   e = c[b >> 2] | 0;
   c[b >> 2] = e + 1;
   a[b + 8 + e >> 0] = -69;
   e = Vm(c[f >> 2] | 0) | 0;
   switch (e | 0) {
   case -1:
    {
     g = 5;
     break a;
    }
   case 191:
    break;
   default:
    break a;
   }
   a[(c[b >> 2] | 0) + (b + 8) >> 0] = -65;
   c[b >> 2] = 0;
   e = Vm(c[f >> 2] | 0) | 0;
   break;
  }
 default:
  {}
 } while (0);
 if ((g | 0) == 5) {
  c[d >> 2] = -1;
  g = 0;
  return g | 0;
 }
 c[d >> 2] = e;
 if ((e | 0) != 35) {
  g = 0;
  return g | 0;
 }
 b : while (1) switch (Vm(c[f >> 2] | 0) | 0) {
 case 10:
 case -1:
  break b;
 default:
  {}
 }
 c[d >> 2] = Vm(c[f >> 2] | 0) | 0;
 g = 1;
 return g | 0;
}

function Pl(b, d, e) {
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

function nj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 288 | 0;
 l = m + 8 | 0;
 h = m + 4 | 0;
 b = m;
 g = dd(a, -1001001, h) | 0;
 d = dd(a, -1001002, b) | 0;
 j = l + 16 | 0;
 c[j >> 2] = a;
 c[l >> 2] = 200;
 c[l + 4 >> 2] = g;
 h = c[h >> 2] | 0;
 f = l + 8 | 0;
 c[f >> 2] = g + h;
 c[l + 12 >> 2] = d + (c[b >> 2] | 0);
 b = hd(a, -1001003, 0) | 0;
 if ((b | 0) > (h | 0)) {
  l = 0;
  i = m;
  return l | 0;
 }
 h = l + 20 | 0;
 e = g + b | 0;
 while (1) {
  c[h >> 2] = 0;
  b = hj(l, e, d) | 0;
  if (b | 0) {
   f = b;
   break;
  }
  e = e + 1 | 0;
  if (e >>> 0 > (c[f >> 2] | 0) >>> 0) {
   b = 0;
   k = 7;
   break;
  }
 }
 if ((k | 0) == 7) {
  i = m;
  return b | 0;
 }
 Wd(a, f - g + ((f | 0) == (e | 0) & 1) | 0);
 jg(a, -1001003);
 b = c[h >> 2] | 0;
 b = (e | 0) != 0 & (b | 0) == 0 ? 1 : b;
 gg(c[j >> 2] | 0, b, 10341);
 if ((b | 0) > 0) d = 0; else {
  l = b;
  i = m;
  return l | 0;
 }
 do {
  jj(l, d, e, f);
  d = d + 1 | 0;
 } while ((d | 0) != (b | 0));
 i = m;
 return b | 0;
}

function hh(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[g >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  h = -1001e3 - e | 0;
  e = c[g >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (h | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (h + -1 << 4) | 0;
  }
 } while (0);
 h = b + 8 | 0;
 Tc(b, c[e >> 2] | 0, f, (c[h >> 2] | 0) + -16 | 0);
 g = c[h >> 2] | 0;
 if (!(c[g + -8 >> 2] & 64)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 if (!(a[(c[g + -16 >> 2] | 0) + 5 >> 0] & 3)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 Dc(b, e);
 b = c[h >> 2] | 0;
 b = b + -16 | 0;
 c[h >> 2] = b;
 return;
}

function $b(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 h = c[a + 12 >> 2] | 0;
 k = a + 56 | 0;
 e = c[k >> 2] | 0;
 if (!e) return;
 j = h + 60 | 0;
 i = h + 68 | 0;
 while (1) {
  g = e + 8 | 0;
  f = c[g >> 2] | 0;
  if (f >>> 0 < b >>> 0) {
   e = 10;
   break;
  }
  c[k >> 2] = c[e >> 2];
  if (!(((d[j >> 0] | 0) ^ 3) & ((d[e + 5 >> 0] | 0) ^ 3))) {
   if ((f | 0) != (e + 16 | 0)) {
    g = e + 16 | 0;
    f = c[g + 4 >> 2] | 0;
    c[f + 16 >> 2] = c[g >> 2];
    c[(c[g >> 2] | 0) + 16 + 4 >> 2] = f;
   }
   yb(a, e, 32, 0) | 0;
  } else {
   l = e + 16 | 0;
   o = c[l + 4 >> 2] | 0;
   c[o + 16 >> 2] = c[l >> 2];
   c[(c[l >> 2] | 0) + 16 + 4 >> 2] = o;
   l = e + 16 | 0;
   o = f;
   n = c[o + 4 >> 2] | 0;
   m = l;
   c[m >> 2] = c[o >> 2];
   c[m + 4 >> 2] = n;
   c[e + 24 >> 2] = c[f + 8 >> 2];
   c[g >> 2] = l;
   c[e >> 2] = c[i >> 2];
   c[i >> 2] = e;
   ac(h, e);
  }
  e = c[k >> 2] | 0;
  if (!e) {
   e = 10;
   break;
  }
 }
 if ((e | 0) == 10) return;
}

function ce(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l + 8 | 0;
 j = l;
 f = c[e >> 2] | 0;
 h = c[f >> 2] | 0;
 c[f >> 2] = h + -1;
 if (!h) g = de(f) | 0; else {
  h = f + 4 | 0;
  g = c[h >> 2] | 0;
  c[h >> 2] = g + 1;
  g = d[g >> 0] | 0;
 }
 f = c[e + 52 >> 2] | 0;
 h = (f | 0) == 0;
 if ((g | 0) == 27) {
  if (!h) if (!(qm(f, 98) | 0)) {
   c[j >> 2] = 6458;
   c[j + 4 >> 2] = f;
   lc(b, 6416, j) | 0;
   Ib(b, 3);
  }
  e = ee(b, c[e >> 2] | 0, e + 4 | 0, c[e + 56 >> 2] | 0) | 0;
 } else {
  if (!h) if (!(qm(f, 116) | 0)) {
   c[k >> 2] = 6570;
   c[k + 4 >> 2] = f;
   lc(b, 6416, k) | 0;
   Ib(b, 3);
  }
  e = je(b, c[e >> 2] | 0, e + 4 | 0, e + 16 | 0, c[e + 56 >> 2] | 0, g) | 0;
 }
 g = e + 6 | 0;
 if (!(a[g >> 0] | 0)) {
  i = l;
  return;
 }
 k = e + 16 | 0;
 f = e + 5 | 0;
 j = 0;
 do {
  h = If(b) | 0;
  c[k + (j << 2) >> 2] = h;
  if (a[h + 5 >> 0] & 3) if (a[f >> 0] & 4) Ec(b, e, h);
  j = j + 1 | 0;
 } while ((j | 0) < (d[g >> 0] | 0));
 i = l;
 return;
}

function Jb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 i = b + 28 | 0;
 g = c[i >> 2] | 0;
 h = b + 32 | 0;
 e = c[h >> 2] | 0;
 if ((d + 1 | 0) >>> 0 > 268435455) Kb(b);
 f = yb(b, g, e << 4, d << 4) | 0;
 c[i >> 2] = f;
 if ((e | 0) < (d | 0)) {
  do {
   c[f + (e << 4) + 8 >> 2] = 0;
   e = e + 1 | 0;
  } while ((e | 0) != (d | 0));
  f = c[i >> 2] | 0;
 }
 c[h >> 2] = d;
 c[b + 24 >> 2] = f + (d << 4) + -80;
 e = b + 8 | 0;
 c[e >> 2] = f + ((c[e >> 2] | 0) - g >> 4 << 4);
 e = c[b + 56 >> 2] | 0;
 if (e | 0) do {
  h = e + 8 | 0;
  c[h >> 2] = f + ((c[h >> 2] | 0) - g >> 4 << 4);
  e = c[e >> 2] | 0;
 } while ((e | 0) != 0);
 e = c[b + 16 >> 2] | 0;
 if (!e) return;
 f = c[i >> 2] | 0;
 do {
  b = e + 4 | 0;
  c[b >> 2] = f + ((c[b >> 2] | 0) - g >> 4 << 4);
  c[e >> 2] = f + ((c[e >> 2] | 0) - g >> 4 << 4);
  if (a[e + 18 >> 0] & 1) {
   b = e + 24 | 0;
   c[b >> 2] = (c[i >> 2] | 0) + ((c[b >> 2] | 0) - g >> 4 << 4);
  }
  e = c[e + 8 >> 2] | 0;
 } while ((e | 0) != 0);
 return;
}

function $k(b, d, e) {
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
 if (!(c[3787] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = Zk(_a(145, h | 0) | 0) | 0;
 } else {
  ta(2, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = Zk(_a(145, g | 0) | 0) | 0;
  ka(0);
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

function Qd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = b + 16 | 0;
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 if (f >>> 0 >= e >>> 0) {
  f = e;
  f = f + -16 | 0;
  c[a >> 2] = f;
  return;
 }
 while (1) {
  h = f;
  g = c[h + 4 >> 2] | 0;
  e = b;
  c[e >> 2] = c[h >> 2];
  c[e + 4 >> 2] = g;
  c[b + 8 >> 2] = c[b + 24 >> 2];
  e = f + 16 | 0;
  b = c[a >> 2] | 0;
  if (e >>> 0 < b >>> 0) {
   b = f;
   f = e;
  } else break;
 }
 h = b + -16 | 0;
 c[a >> 2] = h;
 return;
}

function jg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = b + 8 | 0;
 h = c[k >> 2] | 0;
 i = h + -16 | 0;
 j = b + 16 | 0;
 f = c[j >> 2] | 0;
 do if ((e | 0) > 0) {
  g = (c[f >> 2] | 0) + (e << 4) | 0;
  g = g >>> 0 < h >>> 0 ? g : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   g = h + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   g = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  f = c[f >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) g = 15088; else {
   f = c[f >> 2] | 0;
   g = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 m = i;
 l = c[m + 4 >> 2] | 0;
 f = g;
 c[f >> 2] = c[m >> 2];
 c[f + 4 >> 2] = l;
 f = h + -8 | 0;
 c[g + 8 >> 2] = c[f >> 2];
 if ((e | 0) < -1001e3) if (c[f >> 2] & 64 | 0) {
  g = c[i >> 2] | 0;
  if (a[g + 5 >> 0] & 3) {
   f = c[c[c[j >> 2] >> 2] >> 2] | 0;
   if (a[f + 5 >> 0] & 4) Ec(b, f, g);
  }
 }
 c[k >> 2] = (c[k >> 2] | 0) + -16;
 return;
}

function vd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 g = k + 8 | 0;
 j = k;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = Lc(a, g) | 0;
  if (!a) {
   if (!e) {
    e = 0;
    i = k;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   i = k;
   return e | 0;
  }
 }
 h[j >> 3] = +h[a >> 3] + 6755399441055744.0;
 a = c[j >> 2] | 0;
 if (!e) {
  e = a;
  i = k;
  return e | 0;
 }
 c[e >> 2] = 1;
 e = a;
 i = k;
 return e | 0;
}

function Rf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  e = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   e = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   e = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[b >> 2] | 0;
   e = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 b = c[e + 8 >> 2] & 15;
 switch (b | 0) {
 case 5:
  {
   b = (c[e >> 2] | 0) + 8 | 0;
   break;
  }
 case 7:
  {
   b = (c[e >> 2] | 0) + 8 | 0;
   break;
  }
 default:
  b = (c[a + 12 >> 2] | 0) + 252 + (b << 2) | 0;
 }
 b = c[b >> 2] | 0;
 if (!b) {
  a = 0;
  return a | 0;
 }
 a = a + 8 | 0;
 f = c[a >> 2] | 0;
 c[f >> 2] = b;
 c[f + 8 >> 2] = 69;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 a = 1;
 return a | 0;
}

function sf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 switch (e | 0) {
 case 13:
  {
   tf(b, f);
   return;
  }
 case 14:
  {
   vf(b, f);
   return;
  }
 case 6:
  {
   Ce(b, f);
   if ((c[f >> 2] | 0) == 6) {
    e = c[f + 8 >> 2] | 0;
    if (!(e & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (e | 0)) {
     h = b + 48 | 0;
     a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   g = b + 48 | 0;
   e = (d[g >> 0] | 0) + 1 | 0;
   h = (c[b >> 2] | 0) + 78 | 0;
   do if (e >>> 0 > (d[h >> 0] | 0) >>> 0) if (e >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
    i = e & 255;
    a[h >> 0] = i;
    break;
   } else i = e & 255; while (0);
   a[g >> 0] = i;
   Ee(b, f, (i & 255) + -1 | 0);
   return;
  }
 case 5:
 case 4:
 case 3:
 case 2:
 case 1:
 case 0:
  {
   if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) return;
   Ie(b, f) | 0;
   return;
  }
 default:
  {
   Ie(b, f) | 0;
   return;
  }
 }
}

function tj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 1056 | 0;
 f = n;
 l = n + 1052 | 0;
 m = n + 1048 | 0;
 h = n + 8 | 0;
 j = Fg(a, 1, l) | 0;
 g = Xf(a, 2) | 0;
 k = Fd(a, 3, 17772, m) | 0;
 if ((g | 0) < 1) {
  qd(a, 17772, 0) | 0;
  m = 1;
  i = n;
  return m | 0;
 }
 b = c[l >> 2] | 0;
 d = c[m >> 2] | 0;
 e = d + b | 0;
 if (e >>> 0 >= b >>> 0) if (e >>> 0 < (2147483647 / (g >>> 0) | 0) >>> 0) {
  f = (_(d, g + -1 | 0) | 0) + (_(b, g) | 0) | 0;
  b = Zi(a, h, f) | 0;
  En(b | 0, j | 0, c[l >> 2] | 0) | 0;
  if ((g | 0) > 1) do {
   g = g + -1 | 0;
   e = c[l >> 2] | 0;
   b = b + e | 0;
   d = c[m >> 2] | 0;
   if (!d) d = e; else {
    En(b | 0, k | 0, d | 0) | 0;
    d = c[l >> 2] | 0;
    b = b + (c[m >> 2] | 0) | 0;
   }
   En(b | 0, j | 0, d | 0) | 0;
  } while ((g | 0) > 1);
  _i(h, f);
  m = 1;
  i = n;
  return m | 0;
 }
 m = md(a, 10952, f) | 0;
 i = n;
 return m | 0;
}

function cn(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 c[f + 24 >> 2] = 0;
 c[f + 28 >> 2] = 0;
 e = a[d >> 0] | 0;
 do if (!(e << 24 >> 24)) d = 0; else {
  if (!(a[d + 1 >> 0] | 0)) {
   d = b;
   while (1) if ((a[d >> 0] | 0) == e << 24 >> 24) d = d + 1 | 0; else break;
   d = d - b | 0;
   break;
  }
  do {
   h = f + (((e & 255) >>> 5 & 255) << 2) | 0;
   c[h >> 2] = c[h >> 2] | 1 << (e & 31);
   d = d + 1 | 0;
   e = a[d >> 0] | 0;
  } while (e << 24 >> 24 != 0);
  d = a[b >> 0] | 0;
  a : do if (!(d << 24 >> 24)) d = b; else {
   e = d;
   d = b;
   do {
    if (!(c[f + (((e & 255) >>> 5 & 255) << 2) >> 2] & 1 << (e & 31))) break a;
    d = d + 1 | 0;
    e = a[d >> 0] | 0;
   } while (e << 24 >> 24 != 0);
  } while (0);
  d = d - b | 0;
 } while (0);
 i = g;
 return d | 0;
}

function bd(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 g = b + 12 | 0;
 i = c[g >> 2] | 0;
 f = i + 104 | 0;
 while (1) {
  e = c[f >> 2] | 0;
  if (!e) break; else f = e;
 }
 h = i + 72 | 0;
 e = c[h >> 2] | 0;
 if (!e) e = i; else {
  while (1) {
   j = e + 5 | 0;
   a[j >> 0] = d[j >> 0] | 0 | 8;
   c[h >> 2] = c[e >> 2];
   c[e >> 2] = c[f >> 2];
   c[f >> 2] = e;
   f = c[h >> 2] | 0;
   if (!f) break; else {
    j = e;
    e = f;
    f = j;
   }
  }
  e = c[g >> 2] | 0;
 }
 f = e + 104 | 0;
 e = c[f >> 2] | 0;
 if (e | 0) do {
  j = e + 5 | 0;
  a[j >> 0] = (d[j >> 0] | 0) & 191;
  Ab(b, 0);
  e = c[f >> 2] | 0;
 } while ((e | 0) != 0);
 a[i + 60 >> 0] = 3;
 a[i + 62 >> 0] = 0;
 Wb(b, h, -3) | 0;
 Wb(b, i + 68 | 0, -3) | 0;
 g = i + 32 | 0;
 if ((c[g >> 2] | 0) <= 0) return;
 e = i + 24 | 0;
 f = 0;
 do {
  Wb(b, (c[e >> 2] | 0) + (f << 2) | 0, -3) | 0;
  f = f + 1 | 0;
 } while ((f | 0) < (c[g >> 2] | 0));
 return;
}

function hd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 g = j;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = Lc(a, g) | 0;
  if (!a) {
   if (!e) {
    e = 0;
    i = j;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   i = j;
   return e | 0;
  }
 }
 a = ~~+h[a >> 3];
 if (!e) {
  e = a;
  i = j;
  return e | 0;
 }
 c[e >> 2] = 1;
 e = a;
 i = j;
 return e | 0;
}

function Qm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = _(e, d) | 0;
 if ((c[f + 76 >> 2] | 0) > -1) j = Tl(f) | 0; else j = 0;
 h = f + 74 | 0;
 g = a[h >> 0] | 0;
 a[h >> 0] = g + 255 | g;
 h = f + 4 | 0;
 g = c[h >> 2] | 0;
 i = (c[f + 8 >> 2] | 0) - g | 0;
 if ((i | 0) > 0) {
  i = i >>> 0 < k >>> 0 ? i : k;
  En(b | 0, g | 0, i | 0) | 0;
  c[h >> 2] = g + i;
  b = b + i | 0;
  g = k - i | 0;
 } else g = k;
 a : do if (!g) l = 13; else {
  i = f + 32 | 0;
  h = g;
  while (1) {
   if (km(f) | 0) {
    e = h;
    break;
   }
   g = cb[c[i >> 2] & 15](f, b, h) | 0;
   if ((g + 1 | 0) >>> 0 < 2) {
    e = h;
    break;
   }
   if ((h | 0) == (g | 0)) {
    l = 13;
    break a;
   } else {
    b = b + g | 0;
    h = h - g | 0;
   }
  }
  if (j | 0) bl(f);
  e = ((k - e | 0) >>> 0) / (d >>> 0) | 0;
 } while (0);
 if ((l | 0) == 13) if (j) bl(f);
 return e | 0;
}

function be(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 g = i;
 i = i + 64 | 0;
 p = g;
 h = a + 36 | 0;
 b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
 c[p >> 2] = d;
 c[p + 56 >> 2] = e;
 c[p + 52 >> 2] = f;
 m = p + 16 | 0;
 c[m >> 2] = 0;
 l = p + 24 | 0;
 c[l >> 2] = 0;
 k = p + 28 | 0;
 c[k >> 2] = 0;
 j = p + 36 | 0;
 c[j >> 2] = 0;
 f = p + 40 | 0;
 c[f >> 2] = 0;
 e = p + 48 | 0;
 c[e >> 2] = 0;
 o = p + 4 | 0;
 c[o >> 2] = 0;
 n = p + 12 | 0;
 c[n >> 2] = 0;
 d = Xc(a, 3, p, (c[a + 8 >> 2] | 0) - (c[a + 28 >> 2] | 0) | 0, c[a + 68 >> 2] | 0) | 0;
 c[o >> 2] = yb(a, c[o >> 2] | 0, c[n >> 2] | 0, 0) | 0;
 c[n >> 2] = 0;
 yb(a, c[m >> 2] | 0, c[l >> 2] << 1, 0) | 0;
 yb(a, c[k >> 2] | 0, c[j >> 2] << 4, 0) | 0;
 yb(a, c[f >> 2] | 0, c[e >> 2] << 4, 0) | 0;
 b[h >> 1] = (b[h >> 1] | 0) + -1 << 16 >> 16;
 i = g;
 return d | 0;
}

function en(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 32 | 0;
 f = h;
 e = a[d >> 0] | 0;
 if (!(e << 24 >> 24)) g = 3; else if (!(a[d + 1 >> 0] | 0)) g = 3; else {
  c[f >> 2] = 0;
  c[f + 4 >> 2] = 0;
  c[f + 8 >> 2] = 0;
  c[f + 12 >> 2] = 0;
  c[f + 16 >> 2] = 0;
  c[f + 20 >> 2] = 0;
  c[f + 24 >> 2] = 0;
  c[f + 28 >> 2] = 0;
  do {
   j = f + (((e & 255) >>> 5 & 255) << 2) | 0;
   c[j >> 2] = c[j >> 2] | 1 << (e & 31);
   d = d + 1 | 0;
   e = a[d >> 0] | 0;
  } while (e << 24 >> 24 != 0);
  e = a[b >> 0] | 0;
  a : do if (!(e << 24 >> 24)) e = b; else {
   d = e;
   e = b;
   do {
    if (c[f + (((d & 255) >>> 5 & 255) << 2) >> 2] & 1 << (d & 31) | 0) break a;
    e = e + 1 | 0;
    d = a[e >> 0] | 0;
   } while (d << 24 >> 24 != 0);
  } while (0);
  e = e - b | 0;
 }
 if ((g | 0) == 3) e = (rm(b, e << 24 >> 24) | 0) - b | 0;
 i = h;
 return e | 0;
}

function qk(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 e = a + 8 | 0;
 b = c[e >> 2] | 0;
 if (!f) {
  f = 0;
  a = b + 8 | 0;
  c[a >> 2] = f;
  a = c[e >> 2] | 0;
  a = a + 16 | 0;
  c[e >> 2] = a;
  return;
 }
 c[b >> 2] = f;
 f = 69;
 a = b + 8 | 0;
 c[a >> 2] = f;
 a = c[e >> 2] | 0;
 a = a + 16 | 0;
 c[e >> 2] = a;
 return;
}

function Kl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = e + 16 | 0;
 f = c[g >> 2] | 0;
 if (!f) if (!(Ll(e) | 0)) {
  f = c[g >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  g = c[i >> 2] | 0;
  h = g;
  if ((f - g | 0) >>> 0 < d >>> 0) {
   f = cb[c[e + 36 >> 2] & 15](e, b, d) | 0;
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
   if ((cb[c[e + 36 >> 2] & 15](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   h = c[i >> 2] | 0;
   e = f;
   g = d - f | 0;
   f = b + f | 0;
  } else {
   e = 0;
   g = d;
   f = b;
  } while (0);
  En(h | 0, f | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
  f = e + g | 0;
 } while (0);
 return f | 0;
}

function jf(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 o = e + 48 | 0;
 l = c[(c[o >> 2] | 0) + 16 >> 2] | 0;
 g = c[e + 64 >> 2] | 0;
 m = c[g + 12 >> 2] | 0;
 n = l + 4 | 0;
 h = b[n >> 1] | 0;
 p = g + 28 | 0;
 if ((h | 0) >= (c[p >> 2] | 0)) {
  q = 0;
  return q | 0;
 }
 j = g + 24 | 0;
 k = m + (f << 4) | 0;
 g = h;
 while (1) {
  h = c[j >> 2] | 0;
  i = h + (g << 4) | 0;
  if (ef(c[i >> 2] | 0, c[k >> 2] | 0) | 0) break;
  g = g + 1 | 0;
  if ((g | 0) >= (c[p >> 2] | 0)) {
   g = 0;
   q = 10;
   break;
  }
 }
 if ((q | 0) == 10) return g | 0;
 g = a[h + (g << 4) + 12 >> 0] | 0;
 do if ((d[m + (f << 4) + 12 >> 0] | 0) > (g & 255)) {
  if (!(a[l + 9 >> 0] | 0)) if ((c[p >> 2] | 0) <= (b[n >> 1] | 0)) break;
  cf(c[o >> 2] | 0, c[m + (f << 4) + 4 >> 2] | 0, g & 255);
 } while (0);
 ff(e, f, i);
 q = 1;
 return q | 0;
}

function Eg(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0.0;
 j = i;
 i = i + 16 | 0;
 g = j;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = Lc(a, g) | 0;
  if (!a) {
   if (!e) {
    k = 0.0;
    i = j;
    return +k;
   }
   c[e >> 2] = 0;
   k = 0.0;
   i = j;
   return +k;
  }
 }
 if (e | 0) c[e >> 2] = 1;
 k = +h[a >> 3];
 i = j;
 return +k;
}

function oe(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 16 | 0;
 k = o;
 j = c[e >> 2] | 0;
 if ((j | 0) < ((g | 0) / 2 | 0 | 0)) {
  n = j << 1;
  n = (n | 0) < 4 ? 4 : n;
 } else if ((j | 0) < (g | 0)) n = g; else {
  c[k >> 2] = h;
  c[k + 4 >> 2] = g;
  Fb(b, 6720, k);
 }
 if ((n + 1 | 0) >>> 0 > (4294967293 / (f >>> 0) | 0) >>> 0) Kb(b);
 l = _(j, f) | 0;
 h = _(n, f) | 0;
 k = c[b + 12 >> 2] | 0;
 f = (d | 0) != 0;
 g = k + 4 | 0;
 j = gb[c[k >> 2] & 3](c[g >> 2] | 0, d, l, h) | 0;
 if ((h | 0) != 0 & (j | 0) == 0) {
  if (!(a[k + 63 >> 0] | 0)) Ib(b, 4);
  zb(b, 1);
  j = gb[c[k >> 2] & 3](c[g >> 2] | 0, d, l, h) | 0;
  if (!j) Ib(b, 4); else m = j;
 } else m = j;
 b = k + 12 | 0;
 c[b >> 2] = (f ? 0 - l | 0 : 0) + h + (c[b >> 2] | 0);
 c[e >> 2] = n;
 i = o;
 return m | 0;
}

function sh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 1056 | 0;
 f = g + 8 | 0;
 e = g + 16 | 0;
 b = Fg(a, 1, 0) | 0;
 wd(a, 1);
 Qg(a, -1001e3, 8754);
 Qg(a, 2, b);
 if (Ed(a, -1) | 0) {
  i = g;
  return 1;
 }
 wd(a, -2);
 $g(a, e);
 Qg(a, -1001001, 8454);
 if ((Gd(a, 3) | 0) == 5) d = 1; else {
  md(a, 8874, g) | 0;
  d = 1;
 }
 while (1) {
  Bd(a, 3, d);
  if (!(Gd(a, -1) | 0)) {
   wd(a, -2);
   eh(e);
   h = dd(a, -1, 0) | 0;
   c[f >> 2] = b;
   c[f + 4 >> 2] = h;
   md(a, 8910, f) | 0;
  }
  Tf(a, b) | 0;
  Kf(a, 1, 2, 0, 0);
  if ((Gd(a, -2) | 0) == 6) break;
  if (!(Mf(a, -2) | 0)) wd(a, -3); else {
   wd(a, -2);
   dh(e);
  }
  d = d + 1 | 0;
 }
 Tf(a, b) | 0;
 Rd(a, -2);
 Kf(a, 2, 1, 0, 0);
 if (Gd(a, -1) | 0) kd(a, 2, b);
 Qg(a, 2, b);
 if (Gd(a, -1) | 0) {
  i = g;
  return 1;
 }
 jd(a, 1);
 Of(a, -1);
 kd(a, 2, b);
 i = g;
 return 1;
}

function _g(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 1056 | 0;
 j = l;
 k = l + 8 | 0;
 $g(b, k);
 if (!(a[f >> 0] | 0)) h = d; else h = ah(b, d, f, g) | 0;
 d = e;
 a : while (1) {
  switch (a[d >> 0] | 0) {
  case 0:
   {
    f = 12;
    break a;
   }
  case 59:
   {
    d = d + 1 | 0;
    continue a;
   }
  default:
   {}
  }
  g = qm(d, 59) | 0;
  if (!g) f = d + (Vl(d) | 0) | 0; else f = g;
  qd(b, d, f - d | 0) | 0;
  if (!f) {
   f = 12;
   break;
  }
  g = ah(b, dd(b, -1, 0) | 0, 8259, h) | 0;
  Qd(b, -2);
  d = wm(g, 9564) | 0;
  if (d | 0) {
   f = 11;
   break;
  }
  c[j >> 2] = g;
  pd(b, 8261, j) | 0;
  Qd(b, -2);
  dh(k);
  d = f;
 }
 if ((f | 0) == 11) {
  tm(d) | 0;
  k = g;
  i = l;
  return k | 0;
 } else if ((f | 0) == 12) {
  eh(k);
  k = 0;
  i = l;
  return k | 0;
 }
 return 0;
}

function vg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 switch (c[a + 8 >> 2] & 15 | 0) {
 case 4:
  {
   e = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
   return e | 0;
  }
 case 7:
  {
   e = c[(c[a >> 2] | 0) + 16 >> 2] | 0;
   return e | 0;
  }
 case 5:
  {
   e = Nc(c[a >> 2] | 0) | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function lh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 h = j + 24 | 0;
 g = j + 8 | 0;
 e = j;
 f = Fg(a, 1, 0) | 0;
 b = qm(f, 46) | 0;
 if (!b) {
  h = 0;
  i = j;
  return h | 0;
 }
 qd(a, f, b - f | 0) | 0;
 d = dd(a, -1, 0) | 0;
 Qg(a, -1001001, 8397);
 b = dd(a, -1, 0) | 0;
 if (!b) {
  c[e >> 2] = 8397;
  md(a, 8321, e) | 0;
 }
 b = _g(a, d, b, 14775, 8240) | 0;
 if (!b) {
  h = 1;
  i = j;
  return h | 0;
 }
 switch (kh(a, b, f) | 0) {
 case 0:
  {
   Tf(a, b) | 0;
   h = 2;
   i = j;
   return h | 0;
  }
 case 2:
  {
   c[h >> 2] = f;
   c[h + 4 >> 2] = b;
   pd(a, 8416, h) | 0;
   h = 1;
   i = j;
   return h | 0;
  }
 default:
  {
   f = dd(a, 1, 0) | 0;
   h = dd(a, -1, 0) | 0;
   c[g >> 2] = f;
   c[g + 4 >> 2] = b;
   c[g + 8 >> 2] = h;
   h = md(a, 8351, g) | 0;
   i = j;
   return h | 0;
  }
 }
 return 0;
}

function Be(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 Ce(b, e);
 if ((c[e >> 2] | 0) == 6) {
  g = e + 8 | 0;
  f = c[g >> 2] | 0;
  if ((c[e + 16 >> 2] | 0) == (c[e + 20 >> 2] | 0)) {
   b = f;
   return b | 0;
  }
  if ((f | 0) >= (d[b + 46 >> 0] | 0 | 0)) {
   Ee(b, e, f);
   b = c[g >> 2] | 0;
   return b | 0;
  }
 }
 Ce(b, e);
 if ((c[e >> 2] | 0) == 6) {
  f = c[e + 8 >> 2] | 0;
  if (!(f & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (f | 0)) {
   h = b + 48 | 0;
   a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 g = b + 48 | 0;
 f = (d[g >> 0] | 0) + 1 | 0;
 h = (c[b >> 2] | 0) + 78 | 0;
 do if (f >>> 0 > (d[h >> 0] | 0) >>> 0) if (f >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
  i = f & 255;
  a[h >> 0] = i;
  break;
 } else i = f & 255; while (0);
 a[g >> 0] = i;
 Ee(b, e, (i & 255) + -1 | 0);
 b = c[e + 8 >> 2] | 0;
 return b | 0;
}

function ml(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, i = 0.0;
 h[k >> 3] = a;
 f = c[k >> 2] | 0;
 g = c[k + 4 >> 2] | 0;
 d = Cn(f | 0, g | 0, 52) | 0;
 d = d & 2047;
 e = d + -1023 | 0;
 do if ((e | 0) > 51) {
  h[b >> 3] = a;
  if ((f | 0) == 0 & (g & 1048575 | 0) == 0 | (e | 0) != 1024) {
   c[k >> 2] = 0;
   c[k + 4 >> 2] = g & -2147483648;
   a = +h[k >> 3];
  }
 } else {
  if (d >>> 0 < 1023) {
   c[b >> 2] = 0;
   c[b + 4 >> 2] = g & -2147483648;
   break;
  }
  d = Cn(-1, 1048575, e | 0) | 0;
  e = C;
  if ((d & f | 0) == 0 & (e & g | 0) == 0) {
   h[b >> 3] = a;
   c[k >> 2] = 0;
   c[k + 4 >> 2] = g & -2147483648;
   a = +h[k >> 3];
   break;
  } else {
   f = f & ~d;
   g = g & ~e;
   c[k >> 2] = f;
   c[k + 4 >> 2] = g;
   i = +h[k >> 3];
   c[b >> 2] = f;
   c[b + 4 >> 2] = g;
   a = a - i;
   break;
  }
 } while (0);
 return +a;
}

function Pm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = i;
 i = i + 64 | 0;
 g = l + 32 | 0;
 j = l + 24 | 0;
 h = l + 8 | 0;
 b = l;
 k = l + 40 | 0;
 f = l + 48 | 0;
 c[k >> 2] = a;
 if (!a) c[k >> 2] = 17773;
 c[b >> 2] = 15068;
 c[b + 4 >> 2] = 7;
 if (!(Ma(33, b | 0) | 0)) {
  e = f + 4 | 0;
  b = k;
  d = 0;
  while (1) {
   c[h >> 2] = 0;
   c[h + 4 >> 2] = f;
   c[h + 8 >> 2] = 0;
   na(265, h | 0) | 0;
   a = c[k >> 2] | 0;
   m = c[e >> 2] ^ b ^ a;
   n = c[3800] | 0;
   c[3800] = n + 1;
   c[j >> 2] = n;
   c[j + 4 >> 2] = m;
   Fl(a, 20, 15073, j) | 0;
   c[g >> 2] = c[k >> 2];
   c[g + 4 >> 2] = 0;
   if (Ma(33, g | 0) | 0) {
    a = d;
    break;
   }
   a = d + 1 | 0;
   if ((d | 0) < 100) d = a; else break;
  }
  a = (a | 0) > 99 ? 0 : c[k >> 2] | 0;
 } else a = 0;
 i = l;
 return a | 0;
}

function im(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) j = 3; else if ((c[b + 108 >> 2] | 0) < (e | 0)) j = 3; else j = 4;
 if ((j | 0) == 3) {
  e = jm(b) | 0;
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

function lj(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 h = Vl(b) | 0;
 g = c[a + 12 >> 2] | 0;
 k = a + 4 | 0;
 d = c[k >> 2] | 0;
 j = a + 8 | 0;
 e = c[j >> 2] | 0;
 if ((d - e | 0) >>> 0 >= h >>> 0) {
  a = c[a >> 2] | 0;
  k = e;
  k = a + k | 0;
  En(k | 0, b | 0, h | 0) | 0;
  k = c[j >> 2] | 0;
  k = k + h | 0;
  c[j >> 2] = k;
  i = l;
  return;
 }
 f = d << 1;
 f = (f - e | 0) >>> 0 < h >>> 0 ? e + h | 0 : f;
 if (f >>> 0 < e >>> 0 | (f - e | 0) >>> 0 < h >>> 0) md(g, 8242, l) | 0;
 d = bh(g, f) | 0;
 En(d | 0, c[a >> 2] | 0, c[j >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Qd(g, -2);
 c[a >> 2] = d;
 c[k >> 2] = f;
 a = d;
 k = c[j >> 2] | 0;
 k = a + k | 0;
 En(k | 0, b | 0, h | 0) | 0;
 k = c[j >> 2] | 0;
 k = k + h | 0;
 c[j >> 2] = k;
 i = l;
 return;
}

function pf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 Be(b, e) | 0;
 g = e + 8 | 0;
 h = c[g >> 2] | 0;
 if ((c[e >> 2] | 0) == 6 & (h & 256 | 0) == 0) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
  k = b + 48 | 0;
  a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
 }
 k = b + 48 | 0;
 i = d[k >> 0] | 0;
 c[g >> 2] = i;
 c[e >> 2] = 6;
 e = i + 2 | 0;
 g = (c[b >> 2] | 0) + 78 | 0;
 do if (e >>> 0 > (d[g >> 0] | 0) >>> 0) if (e >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
  j = e & 255;
  a[g >> 0] = j;
  break;
 } else j = e & 255; while (0);
 a[k >> 0] = j;
 De(b, h << 23 | i << 6 | (Ie(b, f) | 0) << 14 | 12) | 0;
 if ((c[f >> 2] | 0) != 6) return;
 e = c[f + 8 >> 2] | 0;
 if (e & 256 | 0) return;
 if ((d[b + 46 >> 0] | 0 | 0) > (e | 0)) return;
 a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
 return;
}

function rb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k + 24 | 0;
 h = k + 16 | 0;
 e = k + 8 | 0;
 d = k;
 g = sb() | 0;
 if (!g) {
  b = c[b >> 2] | 0;
  a = c[749] | 0;
  if (b | 0) {
   c[d >> 2] = b;
   Im(a, 5396, d) | 0;
   um(a) | 0;
  }
  c[e >> 2] = 5401;
  Im(a, 11968, e) | 0;
  um(a) | 0;
  j = 1;
  i = k;
  return j | 0;
 }
 _f(g, 142, 0);
 Wd(g, a);
 Ik(g, b);
 e = pg(g, 2, 1, 0, 0, 0) | 0;
 d = Ed(g, -1) | 0;
 e = (e | 0) == 0;
 if (!e) {
  if ((Gd(g, -1) | 0) == 4) f = dd(g, -1, 0) | 0; else f = 0;
  b = c[356] | 0;
  a = c[749] | 0;
  if (b | 0) {
   c[h >> 2] = b;
   Im(a, 5396, h) | 0;
   um(a) | 0;
  }
  c[j >> 2] = (f | 0) == 0 ? 12154 : f;
  Im(a, 11968, j) | 0;
  um(a) | 0;
  wd(g, -2);
 }
 Pi(g);
 j = e & (d | 0) != 0 & 1 ^ 1;
 i = k;
 return j | 0;
}

function fe(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 m = n;
 if (!d) {
  a = 0;
  i = n;
  return a | 0;
 }
 h = a + 16 | 0;
 l = a + 8 | 0;
 j = a + 12 | 0;
 k = a + 4 | 0;
 e = c[a >> 2] | 0;
 while (1) {
  if (!e) {
   g = cb[c[l >> 2] & 15](c[h >> 2] | 0, c[j >> 2] | 0, m) | 0;
   e = c[m >> 2] | 0;
   if ((g | 0) == 0 | (e | 0) == 0) {
    b = 8;
    break;
   }
   c[a >> 2] = e;
   c[k >> 2] = g;
  } else g = c[k >> 2] | 0;
  f = d >>> 0 > e >>> 0 ? e : d;
  En(b | 0, g | 0, f | 0) | 0;
  e = (c[a >> 2] | 0) - f | 0;
  c[a >> 2] = e;
  c[k >> 2] = (c[k >> 2] | 0) + f;
  if ((d | 0) == (f | 0)) {
   d = 0;
   b = 8;
   break;
  } else {
   b = b + f | 0;
   d = d - f | 0;
  }
 }
 if ((b | 0) == 8) {
  i = n;
  return d | 0;
 }
 return 0;
}

function Ph(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 h = c[a + 12 >> 2] | 0;
 k = a + 4 | 0;
 e = c[k >> 2] | 0;
 j = a + 8 | 0;
 f = c[j >> 2] | 0;
 if ((e - f | 0) >>> 0 >= d >>> 0) {
  a = c[a >> 2] | 0;
  k = f;
  k = a + k | 0;
  En(k | 0, b | 0, d | 0) | 0;
  k = c[j >> 2] | 0;
  k = k + d | 0;
  c[j >> 2] = k;
  i = l;
  return;
 }
 g = e << 1;
 g = (g - f | 0) >>> 0 < d >>> 0 ? f + d | 0 : g;
 if (g >>> 0 < f >>> 0 | (g - f | 0) >>> 0 < d >>> 0) md(h, 8242, l) | 0;
 e = bh(h, g) | 0;
 En(e | 0, c[a >> 2] | 0, c[j >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Qd(h, -2);
 c[a >> 2] = e;
 c[k >> 2] = g;
 a = e;
 k = c[j >> 2] | 0;
 k = a + k | 0;
 En(k | 0, b | 0, d | 0) | 0;
 k = c[j >> 2] | 0;
 k = k + d | 0;
 c[j >> 2] = k;
 i = l;
 return;
}

function $d(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 32 | 0;
 j = h;
 ae(b, j, d, e);
 g = be(b, j, (f | 0) == 0 ? 8259 : f, g) | 0;
 if (g | 0) {
  i = h;
  return g | 0;
 }
 f = c[(c[b + 8 >> 2] | 0) + -16 >> 2] | 0;
 if ((a[f + 6 >> 0] | 0) != 1) {
  i = h;
  return g | 0;
 }
 e = Cd(c[(c[b + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 f = f + 16 | 0;
 d = c[(c[f >> 2] | 0) + 8 >> 2] | 0;
 l = e;
 k = c[l + 4 >> 2] | 0;
 j = d;
 c[j >> 2] = c[l >> 2];
 c[j + 4 >> 2] = k;
 j = e + 8 | 0;
 c[d + 8 >> 2] = c[j >> 2];
 if (!(c[j >> 2] & 64)) {
  i = h;
  return g | 0;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 3)) {
  i = h;
  return g | 0;
 }
 f = c[f >> 2] | 0;
 if (!(a[f + 5 >> 0] & 4)) {
  i = h;
  return g | 0;
 }
 Ec(b, f, e);
 i = h;
 return g | 0;
}

function Te(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 switch (c[e >> 2] | 0) {
 case 12:
  {
   b = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) | 0;
   c[b >> 2] = c[b >> 2] & -8372225 | (f << 14) + 16384 & 8372224;
   return;
  }
 case 13:
  {
   i = e + 8 | 0;
   g = c[b >> 2] | 0;
   e = c[g + 12 >> 2] | 0;
   j = e + (c[i >> 2] << 2) | 0;
   c[j >> 2] = c[j >> 2] & 8388607 | (f << 23) + 8388608;
   i = e + (c[i >> 2] << 2) | 0;
   f = b + 48 | 0;
   e = d[f >> 0] | 0;
   c[i >> 2] = e << 6 | c[i >> 2] & -16321;
   e = e + 1 | 0;
   g = g + 78 | 0;
   do if (e >>> 0 > (d[g >> 0] | 0) >>> 0) if (e >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025); else {
    h = e & 255;
    a[g >> 0] = h;
    break;
   } else h = e & 255; while (0);
   a[f >> 0] = h;
   return;
  }
 default:
  return;
 }
}

function kd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = a + 8 | 0;
 f = c[g >> 2] | 0;
 c[g >> 2] = f + 16;
 e = _c(a, e) | 0;
 c[f >> 2] = e;
 c[f + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
 e = c[g >> 2] | 0;
 zc(a, b, e + -16 | 0, e + -32 | 0);
 c[g >> 2] = (c[g >> 2] | 0) + -32;
 return;
}

function Bd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = Cd(c[b >> 2] | 0, e) | 0;
 e = a + 8 | 0;
 a = c[e >> 2] | 0;
 h = g;
 b = c[h + 4 >> 2] | 0;
 f = a;
 c[f >> 2] = c[h >> 2];
 c[f + 4 >> 2] = b;
 c[a + 8 >> 2] = c[g + 8 >> 2];
 c[e >> 2] = (c[e >> 2] | 0) + 16;
 return;
}

function nh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 112 | 0;
 d = g;
 b = g + 4 | 0;
 c = Fg(a, 1, 0) | 0;
 f = Kd(a) | 0;
 oh(a, c, 1);
 Qg(a, -1, 8814);
 h = (Gd(a, -1) | 0) == 0;
 wd(a, -2);
 if (h) {
  Of(a, -1);
  kd(a, -2, 8820);
  Tf(a, c) | 0;
  kd(a, -2, 8814);
  h = nm(c, 46) | 0;
  qd(a, c, ((h | 0) == 0 ? c : h + 1 | 0) - c | 0) | 0;
  kd(a, -2, 8823);
 }
 Of(a, -1);
 if (!(nd(a, 1, b) | 0)) e = 6; else if (!(od(a, 8832, b) | 0)) e = 6; else if (rh(a, -1) | 0) e = 6;
 if ((e | 0) == 6) md(a, 8834, d) | 0;
 Of(a, -2);
 bg(a, -2, 1) | 0;
 wd(a, -2);
 if ((f | 0) < 2) {
  i = g;
  return 1;
 } else b = 2;
 while (1) {
  if ((Gd(a, b) | 0) == 6) {
   Of(a, b);
   Of(a, -2);
   Kf(a, 1, 0, 0, 0);
  }
  if ((b | 0) == (f | 0)) break; else b = b + 1 | 0;
 }
 i = g;
 return 1;
}

function Xi(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 h = k;
 f = k + 4 | 0;
 j = Fg(a, 1, f) | 0;
 e = Vd(a, 2, 1) | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) <= -1) if (b >>> 0 < (0 - e | 0) >>> 0) e = 0; else e = e + 1 + b | 0;
 b = Vd(a, 3, e) | 0;
 g = c[f >> 2] | 0;
 if ((b | 0) <= -1) if (g >>> 0 < (0 - b | 0) >>> 0) b = 0; else b = b + 1 + g | 0;
 f = (e | 0) == 0 ? 1 : e;
 e = b >>> 0 > g >>> 0 ? g : b;
 if (e >>> 0 < f >>> 0) {
  j = 0;
  i = k;
  return j | 0;
 }
 b = e - f + 1 | 0;
 if ((e | 0) == -1) {
  j = md(a, 10224, h) | 0;
  i = k;
  return j | 0;
 }
 gg(a, b, 10224);
 if ((b | 0) <= 0) {
  j = b;
  i = k;
  return j | 0;
 }
 e = f + -1 | 0;
 f = 0;
 do {
  Wd(a, d[j + (e + f) >> 0] | 0);
  f = f + 1 | 0;
 } while ((f | 0) < (b | 0));
 i = k;
 return b | 0;
}

function Mf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  if (b >>> 0 >= (c[a + 8 >> 2] | 0) >>> 0) {
   a = 0;
   a = a & 1;
   return a | 0;
  }
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  a = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   a = 0;
   a = a & 1;
   return a | 0;
  }
  b = c[b >> 2] | 0;
  if ((a | 0) > (d[b + 6 >> 0] | 0 | 0)) {
   a = 0;
   a = a & 1;
   return a | 0;
  } else b = b + 16 + (a + -1 << 4) | 0;
 } while (0);
 if ((b | 0) == 15088) {
  a = 0;
  a = a & 1;
  return a | 0;
 }
 a = ((c[b + 8 >> 2] & 15) + -3 | 0) >>> 0 < 2;
 a = a & 1;
 return a | 0;
}

function Ff(b, f, g) {
 b = b | 0;
 f = f | 0;
 g = g | 0;
 var h = 0;
 switch (c[f >> 2] | 0) {
 case 7:
  {
   if ((c[g >> 2] | 0) == 6) {
    h = c[g + 8 >> 2] | 0;
    if (!(h & 256)) if ((d[b + 46 >> 0] | 0) <= (h | 0)) {
     h = b + 48 | 0;
     a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   Ee(b, g, c[f + 8 >> 2] | 0);
   return;
  }
 case 8:
  {
   De(b, (Be(b, g) | 0) << 6 | c[f + 8 >> 2] << 23 | 9) | 0;
   break;
  }
 case 9:
  {
   f = f + 8 | 0;
   h = (a[f + 3 >> 0] | 0) == 7 ? 10 : 8;
   De(b, (Ie(b, g) | 0) << 14 | h | d[f + 2 >> 0] << 6 | e[f >> 1] << 23) | 0;
   break;
  }
 default:
  {}
 }
 if ((c[g >> 2] | 0) != 6) return;
 h = c[g + 8 >> 2] | 0;
 if (h & 256 | 0) return;
 if ((d[b + 46 >> 0] | 0) > (h | 0)) return;
 b = b + 48 | 0;
 a[b >> 0] = (a[b >> 0] | 0) + -1 << 24 >> 24;
 return;
}

function Gl(b, d, e, f) {
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
 j = 3716;
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
  c[(_k() | 0) >> 2] = 75;
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
  g = Il(m, e, f) | 0;
  if (l) {
   e = c[h >> 2] | 0;
   a[e + (((e | 0) == (c[d >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return g | 0;
}

function Uf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 a = a + 8 | 0;
 f = vc(c[b >> 2] | 0, (c[a >> 2] | 0) + -16 | 0) | 0;
 a = c[a >> 2] | 0;
 g = f;
 b = c[g + 4 >> 2] | 0;
 e = a + -16 | 0;
 c[e >> 2] = c[g >> 2];
 c[e + 4 >> 2] = b;
 c[a + -8 >> 2] = c[f + 8 >> 2];
 return;
}

function Ub(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if ((e | 0) == (f | 0)) return;
 do {
  j = e + 16 | 0;
  g = c[j >> 2] | 0;
  l = g + (1 << (d[e + 7 >> 0] | 0) << 5) | 0;
  k = e + 28 | 0;
  if ((c[k >> 2] | 0) > 0) {
   h = e + 12 | 0;
   i = 0;
   do {
    g = c[h >> 2] | 0;
    if (Vb(b, g + (i << 4) | 0) | 0) c[g + (i << 4) + 8 >> 2] = 0;
    i = i + 1 | 0;
   } while ((i | 0) < (c[k >> 2] | 0));
   g = c[j >> 2] | 0;
  }
  if (g >>> 0 < l >>> 0) do {
   h = g + 8 | 0;
   if (c[h >> 2] | 0) if (Vb(b, g) | 0) {
    c[h >> 2] = 0;
    h = g + 24 | 0;
    if (c[h >> 2] & 64 | 0) if (a[(c[g + 16 >> 2] | 0) + 5 >> 0] & 3) c[h >> 2] = 11;
   }
   g = g + 32 | 0;
  } while (g >>> 0 < l >>> 0);
  e = c[e + 24 >> 2] | 0;
 } while ((e | 0) != (f | 0));
 return;
}

function ii(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g + 8 | 0;
 b = id(a, -1001001) | 0;
 d = hd(a, -1001002, 0) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  f = md(a, 9616, g) | 0;
  i = g;
  return f | 0;
 }
 wd(a, 1);
 if ((d | 0) >= 1) {
  e = 1;
  while (1) {
   Of(a, -1001003 - e | 0);
   if ((e | 0) == (d | 0)) break; else e = e + 1 | 0;
  }
 }
 b = ji(a, c[b >> 2] | 0, 2) | 0;
 if (Gd(a, 0 - b | 0) | 0) {
  f = b;
  i = g;
  return f | 0;
 }
 if ((b | 0) > 1) {
  c[f >> 2] = dd(a, 1 - b | 0, 0) | 0;
  f = md(a, 9677, f) | 0;
  i = g;
  return f | 0;
 }
 if (!(Ed(a, -1001003) | 0)) {
  f = 0;
  i = g;
  return f | 0;
 }
 wd(a, 0);
 Of(a, -1001001);
 e = ($h(a, 1, 9473) | 0) + 4 | 0;
 f = c[e >> 2] | 0;
 c[e >> 2] = 0;
 fb[f & 255](a) | 0;
 f = 0;
 i = g;
 return f | 0;
}

function ad(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 d = a + 12 | 0;
 f = c[d >> 2] | 0;
 e = a + 28 | 0;
 $b(a, c[e >> 2] | 0);
 bd(a);
 d = c[d >> 2] | 0;
 yb(a, c[d + 24 >> 2] | 0, c[d + 32 >> 2] << 2, 0) | 0;
 d = f + 144 | 0;
 b = f + 152 | 0;
 c[d >> 2] = yb(a, c[d >> 2] | 0, c[b >> 2] | 0, 0) | 0;
 c[b >> 2] = 0;
 b = c[e >> 2] | 0;
 if (!b) {
  e = c[f >> 2] | 0;
  f = f + 4 | 0;
  f = c[f >> 2] | 0;
  gb[e & 3](f, a, 400, 0) | 0;
  return;
 }
 c[a + 16 >> 2] = a + 72;
 g = a + 84 | 0;
 d = c[g >> 2] | 0;
 c[g >> 2] = 0;
 if (d) {
  b = d;
  do {
   g = b;
   b = c[b + 12 >> 2] | 0;
   yb(a, g, 40, 0) | 0;
  } while ((b | 0) != 0);
  b = c[e >> 2] | 0;
 }
 yb(a, b, c[a + 32 >> 2] << 4, 0) | 0;
 e = c[f >> 2] | 0;
 g = f + 4 | 0;
 g = c[g >> 2] | 0;
 gb[e & 3](g, a, 400, 0) | 0;
 return;
}

function rm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (Vl(b) | 0) | 0; else {
  if (b & 3) {
   e = d & 255;
   do {
    g = a[b >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = _(f, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009 | 0) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (!((e & -2139062144 ^ -2139062144) & e + -16843009 | 0)); while (0);
  e = d & 255;
  while (1) {
   g = a[b >> 0] | 0;
   if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return b | 0;
}

function id(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 switch (c[a + 8 >> 2] & 15 | 0) {
 case 7:
  {
   e = (c[a >> 2] | 0) + 24 | 0;
   return e | 0;
  }
 case 2:
  {
   e = c[a >> 2] | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function Of(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 a = a + 8 | 0;
 f = c[a >> 2] | 0;
 h = b;
 g = c[h + 4 >> 2] | 0;
 e = f;
 c[e >> 2] = c[h >> 2];
 c[e + 4 >> 2] = g;
 c[f + 8 >> 2] = c[b + 8 >> 2];
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return;
}

function $m(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 48 | 0;
 j = k + 24 | 0;
 g = k + 16 | 0;
 f = k;
 a : do if ((a | 0) == (b | 0)) e = Zk(-22) | 0; else {
  h = (d & 524288 | 0) != 0;
  b : do if (h) {
   c : while (1) {
    c[f >> 2] = a;
    c[f + 4 >> 2] = b;
    c[f + 8 >> 2] = d;
    e = Da(330, f | 0) | 0;
    switch (e | 0) {
    case -38:
     break b;
    case -16:
     break;
    default:
     break c;
    }
   }
   e = Zk(e) | 0;
   break a;
  } while (0);
  do {
   c[g >> 2] = a;
   c[g + 4 >> 2] = b;
   e = pa(63, g | 0) | 0;
  } while ((e | 0) == -16);
  if (h) {
   c[j >> 2] = b;
   c[j + 4 >> 2] = 2;
   c[j + 8 >> 2] = 1;
   la(221, j | 0) | 0;
  }
  e = Zk(e) | 0;
 } while (0);
 i = k;
 return e | 0;
}

function _f(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if (!d) {
  f = a + 8 | 0;
  e = c[f >> 2] | 0;
  c[e >> 2] = b;
  c[e + 8 >> 2] = 22;
  e = c[f >> 2] | 0;
  e = e + 16 | 0;
  c[f >> 2] = e;
  return;
 }
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 f = $f(a, d) | 0;
 c[f + 12 >> 2] = b;
 e = a + 8 | 0;
 a = (c[e >> 2] | 0) + (0 - d << 4) | 0;
 c[e >> 2] = a;
 b = d;
 do {
  b = b + -1 | 0;
  h = a + (b << 4) | 0;
  g = c[h + 4 >> 2] | 0;
  d = f + 16 + (b << 4) | 0;
  c[d >> 2] = c[h >> 2];
  c[d + 4 >> 2] = g;
  c[f + 16 + (b << 4) + 8 >> 2] = c[a + (b << 4) + 8 >> 2];
  a = c[e >> 2] | 0;
 } while ((b | 0) != 0);
 c[a >> 2] = f;
 c[a + 8 >> 2] = 102;
 h = e;
 g = c[h >> 2] | 0;
 g = g + 16 | 0;
 c[h >> 2] = g;
 return;
}

function Qg(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = a + 8 | 0;
 f = c[g >> 2] | 0;
 e = _c(a, e) | 0;
 c[f >> 2] = e;
 c[f + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
 e = c[g >> 2] | 0;
 c[g >> 2] = e + 16;
 uc(a, b, e, e);
 return;
}

function Oh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1072 | 0;
 j = k + 8 | 0;
 h = k;
 d = k + 24 | 0;
 g = k + 16 | 0;
 e = Fd(a, 2, 17772, g) | 0;
 Yf(a, 1, 5);
 b = Vd(a, 3, 1) | 0;
 if ((Gd(a, 4) | 0) < 1) f = Vg(a, 1) | 0; else f = Xf(a, 4) | 0;
 $g(a, d);
 if ((b | 0) < (f | 0)) do {
  Bd(a, 1, b);
  if (!(Mf(a, -1) | 0)) {
   c[h >> 2] = Hd(a, Gd(a, -1) | 0) | 0;
   c[h + 4 >> 2] = b;
   md(a, 9246, h) | 0;
  }
  dh(d);
  Ph(d, e, c[g >> 2] | 0);
  b = b + 1 | 0;
 } while ((b | 0) != (f | 0)); else if ((b | 0) != (f | 0)) {
  eh(d);
  i = k;
  return 1;
 }
 Bd(a, 1, f);
 if (!(Mf(a, -1) | 0)) {
  c[j >> 2] = Hd(a, Gd(a, -1) | 0) | 0;
  c[j + 4 >> 2] = f;
  md(a, 9246, j) | 0;
 }
 dh(d);
 eh(d);
 i = k;
 return 1;
}

function Lk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
 if ((Gd(a, 1) | 0) == 8) {
  b = 1;
  f = yh(a, 1) | 0;
 } else {
  b = 0;
  f = a;
 }
 e = b + 1 | 0;
 if ((Gd(a, e) | 0) < 1) {
  wd(a, e);
  b = 0;
  c = 0;
  d = 0;
 } else {
  c = Fg(a, b | 2, 0) | 0;
  Yf(a, e, 6);
  g = Vd(a, b + 3 | 0, 0) | 0;
  d = (qm(c, 99) | 0) != 0 & 1;
  b = (qm(c, 114) | 0) == 0;
  d = b ? d : d | 2;
  b = (qm(c, 108) | 0) == 0;
  d = b ? d : d | 4;
  b = g;
  c = 8;
  d = (g | 0) > 0 ? d | 8 : d;
 }
 if (Pg(a, -1001e3, 11434) | 0) {
  Hh(f) | 0;
  wh(f, a, 1);
  Of(a, e);
  yg(a, -3);
  Mk(f, c, d, b) | 0;
  return 0;
 }
 Tf(a, 11894) | 0;
 kd(a, -2, 11896);
 Of(a, -1);
 Bg(a, -2) | 0;
 Hh(f) | 0;
 wh(f, a, 1);
 Of(a, e);
 yg(a, -3);
 Mk(f, c, d, b) | 0;
 return 0;
}

function Ed(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) b = 15088; else {
   e = c[a >> 2] | 0;
   b = (b | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 a = c[b + 8 >> 2] | 0;
 if (!a) {
  e = 0;
  e = e & 1;
  return e | 0;
 }
 if ((a | 0) != 1) {
  e = 1;
  e = e & 1;
  return e | 0;
 }
 e = (c[b >> 2] | 0) != 0;
 e = e & 1;
 return e | 0;
}

function xk(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) == 3) {
  f = 1;
  f = f & 1;
  i = g;
  return f | 0;
 }
 f = (Lc(a, f) | 0) != 0;
 f = f & 1;
 i = g;
 return f | 0;
}

function Vc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = c[b + 12 >> 2] | 0;
 g = b + 56 | 0;
 f = c[g >> 2] | 0;
 a : do if (!f) f = g; else {
  h = g;
  while (1) {
   g = c[f + 8 >> 2] | 0;
   if (g >>> 0 < e >>> 0) {
    f = h;
    break a;
   }
   if ((g | 0) == (e | 0)) break;
   g = c[f >> 2] | 0;
   if (!g) break a; else {
    h = f;
    f = g;
   }
  }
  g = f + 5 | 0;
  h = (d[g >> 0] | 0) ^ 3;
  if (((d[i + 60 >> 0] | 0) ^ 3) & h | 0) {
   i = f;
   return i | 0;
  }
  a[g >> 0] = h;
  i = f;
  return i | 0;
 } while (0);
 b = dc(b, 10, 32, f, 0) | 0;
 c[b + 8 >> 2] = e;
 h = b + 16 | 0;
 c[h >> 2] = i + 112;
 i = i + 128 + 4 | 0;
 e = c[i >> 2] | 0;
 c[h + 4 >> 2] = e;
 c[e + 16 >> 2] = b;
 c[i >> 2] = b;
 i = b;
 return i | 0;
}

function Id(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 128 | 0;
 h = j + 16 | 0;
 f = j + 8 | 0;
 e = j;
 g = j + 28 | 0;
 if (!(nd(a, 0, g) | 0)) {
  c[e >> 2] = b;
  c[e + 4 >> 2] = d;
  h = md(a, 6139, e) | 0;
  i = j;
  return h | 0;
 }
 od(a, 9377, g) | 0;
 if (!(Wl(c[g + 8 >> 2] | 0, 6161) | 0)) {
  b = b + -1 | 0;
  if (!b) {
   c[f >> 2] = c[g + 4 >> 2];
   c[f + 4 >> 2] = d;
   h = md(a, 6168, f) | 0;
   i = j;
   return h | 0;
  } else f = b;
 } else f = b;
 e = g + 4 | 0;
 b = c[e >> 2] | 0;
 if (!b) {
  if (!(Jd(a, g) | 0)) b = 8259; else b = dd(a, -1, 0) | 0;
  c[e >> 2] = b;
 }
 c[h >> 2] = f;
 c[h + 4 >> 2] = b;
 c[h + 8 >> 2] = d;
 h = md(a, 6220, h) | 0;
 i = j;
 return h | 0;
}

function ij(a, b) {
 a = a | 0;
 b = b | 0;
 do switch (Cl(b) | 0) {
 case 97:
  {
   a = El(a) | 0;
   break;
  }
 case 99:
  {
   a = Bl(a) | 0;
   break;
  }
 case 100:
  {
   a = (a + -48 | 0) >>> 0 < 10 & 1;
   break;
  }
 case 103:
  {
   a = $l(a) | 0;
   break;
  }
 case 108:
  {
   a = _l(a) | 0;
   break;
  }
 case 112:
  {
   a = bm(a) | 0;
   break;
  }
 case 115:
  {
   a = dm(a) | 0;
   break;
  }
 case 117:
  {
   a = Dl(a) | 0;
   break;
  }
 case 119:
  {
   a = cm(a) | 0;
   break;
  }
 case 120:
  {
   a = Ul(a) | 0;
   break;
  }
 case 122:
  {
   a = (a | 0) == 0 & 1;
   break;
  }
 default:
  {
   b = (b | 0) == (a | 0) & 1;
   return b | 0;
  }
 } while (0);
 b = (_l(b) | 0) == 0;
 b = b ? (a | 0) == 0 & 1 : a;
 return b | 0;
}

function Nd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 a = Od(a, c[b >> 2] | 0, (c[f >> 2] | 0) + -16 | 0) | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = (a | 0) == 0 ? e + -16 | 0 : e + 16 | 0;
 return a | 0;
}

function wh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if ((a | 0) == (b | 0)) return;
 g = a + 8 | 0;
 a = c[g >> 2] | 0;
 f = 0 - d | 0;
 e = a + (f << 4) | 0;
 c[g >> 2] = e;
 if ((d | 0) <= 0) return;
 b = b + 8 | 0;
 h = c[b >> 2] | 0;
 c[b >> 2] = h + 16;
 j = e;
 i = c[j + 4 >> 2] | 0;
 e = h;
 c[e >> 2] = c[j >> 2];
 c[e + 4 >> 2] = i;
 c[h + 8 >> 2] = c[a + (f << 4) + 8 >> 2];
 if ((d | 0) == 1) return; else a = 1;
 do {
  i = c[g >> 2] | 0;
  j = c[b >> 2] | 0;
  c[b >> 2] = j + 16;
  e = i + (a << 4) | 0;
  f = c[e + 4 >> 2] | 0;
  h = j;
  c[h >> 2] = c[e >> 2];
  c[h + 4 >> 2] = f;
  c[j + 8 >> 2] = c[i + (a << 4) + 8 >> 2];
  a = a + 1 | 0;
 } while ((a | 0) != (d | 0));
 return;
}

function Cd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0.0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 f = k;
 e = b + -1 | 0;
 if (e >>> 0 < (c[a + 28 >> 2] | 0) >>> 0) {
  j = (c[a + 12 >> 2] | 0) + (e << 4) | 0;
  i = k;
  return j | 0;
 }
 g = +(b | 0);
 h[f >> 3] = g + 1.0;
 b = (c[f + 4 >> 2] | 0) + (c[f >> 2] | 0) | 0;
 if ((b | 0) < 0) {
  f = 0 - b | 0;
  b = (b | 0) == (f | 0) ? 0 : f;
 }
 b = (c[a + 16 >> 2] | 0) + (((b | 0) % ((1 << (d[a + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
 while (1) {
  if ((c[b + 24 >> 2] | 0) == 3) if (+h[b + 16 >> 3] == g) break;
  b = c[b + 28 >> 2] | 0;
  if (!b) {
   b = 15088;
   j = 10;
   break;
  }
 }
 if ((j | 0) == 10) {
  i = k;
  return b | 0;
 }
 j = b;
 i = k;
 return j | 0;
}

function Gd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  if (b >>> 0 >= (c[a + 8 >> 2] | 0) >>> 0) {
   a = -1;
   return a | 0;
  }
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  a = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   a = -1;
   return a | 0;
  }
  b = c[b >> 2] | 0;
  if ((a | 0) > (d[b + 6 >> 0] | 0 | 0)) {
   a = -1;
   return a | 0;
  } else b = b + 16 + (a + -1 << 4) | 0;
 } while (0);
 if ((b | 0) == 15088) {
  a = -1;
  return a | 0;
 }
 a = c[b + 8 >> 2] & 15;
 return a | 0;
}

function Mh(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l + 8 | 0;
 j = l;
 h = c[d + 16 >> 2] | 0;
 if (b[d + 36 >> 1] | 0) if ((c[(c[d + 12 >> 2] | 0) + 172 >> 2] | 0) == (d | 0)) Fb(d, 9191, k); else Fb(d, 9149, j);
 a[d + 6 >> 0] = 1;
 c[h + 20 >> 2] = (c[h >> 2] | 0) - (c[d + 28 >> 2] | 0);
 if (a[h + 18 >> 0] & 1) {
  i = l;
  return 0;
 }
 c[h + 28 >> 2] = g;
 if (!g) {
  k = d + 8 | 0;
  k = c[k >> 2] | 0;
  l = 0 - e | 0;
  l = k + (l << 4) | 0;
  l = l + -16 | 0;
  c[h >> 2] = l;
  Ib(d, 1);
 }
 c[h + 24 >> 2] = f;
 k = d + 8 | 0;
 k = c[k >> 2] | 0;
 l = 0 - e | 0;
 l = k + (l << 4) | 0;
 l = l + -16 | 0;
 c[h >> 2] = l;
 Ib(d, 1);
 return 0;
}

function Cg(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 i = c[b + 12 >> 2] | 0;
 j = e + 5 | 0;
 if ((f | 0) == 0 | (a[j >> 0] & 24) != 0) return;
 if (a[f + 6 >> 0] & 4) return;
 if (!(Sb(f, 2, c[i + 192 >> 2] | 0) | 0)) return;
 h = i + 76 | 0;
 g = c[h >> 2] | 0;
 if ((g | 0) == (e | 0)) {
  do f = Wb(b, g, 1) | 0; while ((f | 0) == (g | 0));
  c[h >> 2] = f;
 }
 f = i + 68 | 0;
 while (1) {
  g = c[f >> 2] | 0;
  if ((g | 0) == (e | 0)) break; else f = g;
 }
 c[f >> 2] = c[e >> 2];
 f = i + 72 | 0;
 c[e >> 2] = c[f >> 2];
 c[f >> 2] = e;
 f = d[j >> 0] | 0 | 16;
 a[j >> 0] = f;
 if ((d[i + 61 >> 0] | 0) < 2) f = f & 191; else f = (d[i + 60 >> 0] | 0) & 3 | f & 184;
 a[j >> 0] = f;
 return;
}

function Sl(b, d, e) {
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
   c[(_k() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function gi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 d = e + 8 | 0;
 b = e;
 if ((Gd(a, 1) | 0) == -1) Md(a);
 if (!(Gd(a, 1) | 0)) {
  Qg(a, -1001e3, 9554);
  jg(a, 1);
  if (c[($h(a, 1, 9473) | 0) + 4 >> 2] | 0) {
   d = 0;
   hi(a, d);
   i = e;
   return 1;
  }
  md(a, 9479, b) | 0;
  d = 0;
  hi(a, d);
  i = e;
  return 1;
 } else {
  b = Fg(a, 1, 0) | 0;
  g = bh(a, 8) | 0;
  f = g + 4 | 0;
  c[f >> 2] = 0;
  ei(a, 9473);
  c[g >> 2] = 0;
  c[f >> 2] = 165;
  f = wm(b, 9564) | 0;
  c[g >> 2] = f;
  if (!f) {
   g = Ol(c[(_k() | 0) >> 2] | 0) | 0;
   c[d >> 2] = b;
   c[d + 4 >> 2] = g;
   md(a, 9566, d) | 0;
  }
  jg(a, 1);
  g = 1;
  hi(a, g);
  i = e;
  return 1;
 }
 return 0;
}

function Ng(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 e = h;
 ld(a, 502.0);
 if (!(hg(a, d + 20 | 0) | 0)) {
  c[e >> 2] = 8070;
  md(a, 7715, e) | 0;
 }
 if (!(c[b >> 2] | 0)) {
  d = ~d;
  wd(a, d);
  i = h;
  return;
 }
 g = -2 - d | 0;
 f = 0 - d | 0;
 if ((d | 0) <= 0) {
  do {
   _f(a, c[b + 4 >> 2] | 0, d);
   kd(a, g, c[b >> 2] | 0);
   b = b + 8 | 0;
  } while ((c[b >> 2] | 0) != 0);
  d = ~d;
  wd(a, d);
  i = h;
  return;
 }
 do {
  e = 0;
  do {
   Of(a, f);
   e = e + 1 | 0;
  } while ((e | 0) != (d | 0));
  _f(a, c[b + 4 >> 2] | 0, d);
  kd(a, g, c[b >> 2] | 0);
  b = b + 8 | 0;
 } while ((c[b >> 2] | 0) != 0);
 d = ~d;
 wd(a, d);
 i = h;
 return;
}

function yd(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 g = b + 12 | 0;
 h = c[g >> 2] | 0;
 f = h + 62 | 0;
 if ((d[f >> 0] | 0) == (e | 0)) return;
 if ((e | 0) == 2) {
  e = h + 61 | 0;
  if (a[e >> 0] | 0) do Ob(b) | 0; while ((a[e >> 0] | 0) != 0);
  c[h + 20 >> 2] = (c[h + 12 >> 2] | 0) + (c[h + 8 >> 2] | 0);
  a[f >> 0] = 2;
  return;
 }
 a[f >> 0] = 0;
 a[h + 61 >> 0] = 2;
 c[h + 64 >> 2] = 0;
 f = h + 72 | 0;
 do e = Wb(b, f, 1) | 0; while ((e | 0) == (f | 0));
 c[h + 80 >> 2] = e;
 f = h + 68 | 0;
 do e = Wb(b, f, 1) | 0; while ((e | 0) == (f | 0));
 c[h + 76 >> 2] = e;
 e = (c[g >> 2] | 0) + 61 | 0;
 if (1 << d[e >> 0] & -29 | 0) return;
 do Ob(b) | 0; while (!(1 << d[e >> 0] & -29 | 0));
 return;
}

function wi(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 j = l + 8 | 0;
 e = Kd(a) | 0;
 if ((e | 0) == (d | 0)) {
  a = 1;
  i = l;
  return a | 0;
 }
 g = d;
 f = e - d | 0;
 d = 1;
 while (1) {
  f = f + -1 | 0;
  if ((Gd(a, g) | 0) == 3) {
   if (!d) d = 0; else {
    h[k >> 3] = +Eg(a, g, 0);
    d = (Im(b, 9776, k) | 0) > 0;
   }
   d = d & 1;
  } else {
   e = Fg(a, g, j) | 0;
   if (!d) d = 0; else {
    d = Rm(e, 1, c[j >> 2] | 0, b) | 0;
    d = (d | 0) == (c[j >> 2] | 0);
   }
   d = d & 1;
  }
  if (!f) break; else g = g + 1 | 0;
 }
 if (d | 0) {
  a = 1;
  i = l;
  return a | 0;
 }
 a = bi(a, 0, 0) | 0;
 i = l;
 return a | 0;
}

function Eb(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 h = k;
 j = a + 38 | 0;
 g = (b[j >> 1] | 0) + 1 << 16 >> 16;
 b[j >> 1] = g;
 if ((g & 65535) > 199) {
  if (g << 16 >> 16 == 200) Fb(a, 4256, h);
  if ((g & 65535) > 224) Ib(a, 6);
 }
 f = (f | 0) != 0;
 if (!f) {
  h = a + 36 | 0;
  b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
 }
 if (!(nc(a, d, e) | 0)) tc(a);
 if (f) {
  e = b[j >> 1] | 0;
  e = e + -1 << 16 >> 16;
  b[j >> 1] = e;
  i = k;
  return;
 } else {
  d = a + 36 | 0;
  e = c[d >> 2] | 0;
  b[d >> 1] = (e & 65535) + -1 << 16 >> 16;
  e = e >>> 16 & 65535;
  e = e + -1 << 16 >> 16;
  b[j >> 1] = e;
  i = k;
  return;
 }
}

function rk(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 d = g;
 if ((Gd(b, 1) | 0) == 8) f = yh(b, 1) | 0; else f = b;
 e = sk(f) | 0;
 c = tk(f) | 0;
 if ((c | 0) != 0 & (c | 0) != 8) qd(b, 11473, 13) | 0; else {
  Pg(b, -1001e3, 11434) | 0;
  Hh(f) | 0;
  wh(f, b, 1);
  Uf(b, -2);
  Qd(b, -2);
 }
 if (!(e & 1)) c = 0; else {
  a[d >> 0] = 99;
  c = 1;
 }
 if (e & 2) {
  a[d + c >> 0] = 114;
  c = c + 1 | 0;
 }
 if (!(e & 4)) {
  e = c;
  e = d + e | 0;
  a[e >> 0] = 0;
  Tf(b, d) | 0;
  f = vk(f) | 0;
  Wd(b, f);
  i = g;
  return 3;
 }
 a[d + c >> 0] = 108;
 e = c + 1 | 0;
 e = d + e | 0;
 a[e >> 0] = 0;
 Tf(b, d) | 0;
 f = vk(f) | 0;
 Wd(b, f);
 i = g;
 return 3;
}

function jj(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 f = h + 8 | 0;
 g = h;
 if ((c[a + 20 >> 2] | 0) <= (b | 0)) {
  f = c[a + 16 >> 2] | 0;
  if (!b) {
   qd(f, d, e - d | 0) | 0;
   i = h;
   return;
  } else {
   md(f, 10559, g) | 0;
   i = h;
   return;
  }
 }
 d = c[a + 24 + (b << 3) + 4 >> 2] | 0;
 if ((d | 0) == -1) {
  g = a + 16 | 0;
  md(c[g >> 2] | 0, 10581, f) | 0;
  e = c[a + 24 + (b << 3) >> 2] | 0;
  f = c[g >> 2] | 0;
 } else {
  f = c[a + 16 >> 2] | 0;
  e = c[a + 24 + (b << 3) >> 2] | 0;
  if ((d | 0) == -2) {
   Wd(f, e + 1 - (c[a + 4 >> 2] | 0) | 0);
   i = h;
   return;
  }
 }
 qd(f, e, d) | 0;
 i = h;
 return;
}

function qh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 e = c[f >> 2] | 0;
 zc(a, b, e + -32 | 0, e + -16 | 0);
 c[f >> 2] = (c[f >> 2] | 0) + -32;
 return;
}

function Qb(b) {
 b = b | 0;
 var d = 0;
 d = c[b + 252 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 256 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 260 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 264 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 268 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 272 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 276 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 280 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Pb(b, d);
 d = c[b + 284 >> 2] | 0;
 if (!d) return;
 if (!(a[d + 5 >> 0] & 3)) return;
 Pb(b, d);
 return;
}

function Sm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!(Tl(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = Km(d, b) | 0;
  bl(d);
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
  e = Km(d, b) | 0;
 } while (0);
 return e | 0;
}

function ok(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 256 | 0;
 f = h;
 e = h + 4 | 0;
 b = c[749] | 0;
 Rm(11378, 11, 1, b) | 0;
 um(b) | 0;
 d = c[720] | 0;
 if (!(ym(e, 250, d) | 0)) {
  i = h;
  return 0;
 }
 while (1) {
  if (!(Wl(e, 11390) | 0)) {
   g = 7;
   break;
  }
  if (!(dg(a, e, Vl(e) | 0, 11396, 0) | 0)) {
   if (pg(a, 0, 0, 0, 0, 0) | 0) g = 5;
  } else g = 5;
  if ((g | 0) == 5) {
   g = 0;
   c[f >> 2] = dd(a, -1, 0) | 0;
   Im(b, 11968, f) | 0;
   um(b) | 0;
  }
  wd(a, 0);
  Rm(11378, 11, 1, b) | 0;
  um(b) | 0;
  if (!(ym(e, 250, d) | 0)) {
   g = 7;
   break;
  }
 }
 if ((g | 0) == 7) {
  i = h;
  return 0;
 }
 return 0;
}

function Ld(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!c) {
  a = 0;
  return a | 0;
 }
 if ((Gd(a, -1) | 0) != 5) {
  a = 0;
  return a | 0;
 }
 Md(a);
 if (!(Nd(a, -2) | 0)) {
  a = 0;
  return a | 0;
 }
 c = c + -1 | 0;
 while (1) {
  if ((Gd(a, -2) | 0) == 4) {
   if (Pd(a, b, -1) | 0) {
    b = 7;
    break;
   }
   if (Ld(a, b, c) | 0) {
    b = 9;
    break;
   }
  }
  wd(a, -2);
  if (!(Nd(a, -2) | 0)) {
   c = 0;
   b = 11;
   break;
  }
 }
 if ((b | 0) == 7) {
  wd(a, -2);
  a = 1;
  return a | 0;
 } else if ((b | 0) == 9) {
  Qd(a, -2);
  qd(a, 14775, 1) | 0;
  Rd(a, -2);
  sd(a, 3);
  a = 1;
  return a | 0;
 } else if ((b | 0) == 11) return c | 0;
 return 0;
}

function Ud(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j + 8 | 0;
 f = j;
 if (!d) {
  d = dd(a, b, 0) | 0;
  if (!d) {
   d = Hd(a, 4) | 0;
   g = Hd(a, Gd(a, b) | 0) | 0;
   c[f >> 2] = d;
   c[f + 4 >> 2] = g;
   Id(a, b, pd(a, 6119, f) | 0) | 0;
   g = 0;
  } else g = d;
 } else g = Fd(a, b, d, 0) | 0;
 d = c[e >> 2] | 0;
 a : do if (d | 0) {
  f = d;
  d = 0;
  while (1) {
   if (!(Wl(f, g) | 0)) break;
   d = d + 1 | 0;
   f = c[e + (d << 2) >> 2] | 0;
   if (!f) break a;
  }
  i = j;
  return d | 0;
 } while (0);
 c[h >> 2] = g;
 h = Id(a, b, pd(a, 6358, h) | 0) | 0;
 i = j;
 return h | 0;
}

function yh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 72) {
  e = 0;
  return e | 0;
 }
 e = c[a >> 2] | 0;
 return e | 0;
}

function hg(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 f = h;
 c[f >> 2] = b;
 g = c[a + 16 >> 2] | 0;
 e = a + 8 | 0;
 d = c[e >> 2] | 0;
 do if (((c[a + 24 >> 2] | 0) - d >> 4 | 0) > (b | 0)) a = d; else {
  if (((d - (c[a + 28 >> 2] | 0) >> 4) + 5 | 0) > (1e6 - b | 0)) {
   g = 0;
   i = h;
   return g | 0;
  }
  if (!(Yc(a, 4, f) | 0)) {
   a = c[e >> 2] | 0;
   b = c[f >> 2] | 0;
   break;
  } else {
   g = 0;
   i = h;
   return g | 0;
  }
 } while (0);
 d = g + 4 | 0;
 b = a + (b << 4) | 0;
 if ((c[d >> 2] | 0) >>> 0 >= b >>> 0) {
  g = 1;
  i = h;
  return g | 0;
 }
 c[d >> 2] = b;
 g = 1;
 i = h;
 return g | 0;
}

function li(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 g = c[a + 12 >> 2] | 0;
 j = a + 4 | 0;
 d = c[j >> 2] | 0;
 h = a + 8 | 0;
 e = c[h >> 2] | 0;
 if ((d - e | 0) >>> 0 >= b >>> 0) {
  h = c[a >> 2] | 0;
  j = e;
  j = h + j | 0;
  i = k;
  return j | 0;
 }
 f = d << 1;
 f = (f - e | 0) >>> 0 < b >>> 0 ? e + b | 0 : f;
 if (f >>> 0 < e >>> 0 | (f - e | 0) >>> 0 < b >>> 0) md(g, 8242, k) | 0;
 d = bh(g, f) | 0;
 En(d | 0, c[a >> 2] | 0, c[h >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Qd(g, -2);
 c[a >> 2] = d;
 c[j >> 2] = f;
 a = d;
 j = c[h >> 2] | 0;
 j = a + j | 0;
 i = k;
 return j | 0;
}

function Wg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 Mc(a, c[f >> 2] | 0, b);
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 return;
}

function Xk(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 528 | 0;
 g = h;
 f = h + 8 | 0;
 e = (d | 0) != 0;
 sg(b, e ? 12247 : 12255);
 j = dd(b, -1, 0) | 0;
 d = c[778] | 0;
 Zm((j | 0) == 0 ? (e ? 12264 : 12267) : j, d) | 0;
 um(d) | 0;
 d = (ym(f, 512, c[720] | 0) | 0) == 0;
 wd(b, -2);
 if (d) {
  j = 0;
  i = h;
  return j | 0;
 }
 d = Vl(f) | 0;
 if (d | 0) {
  d = f + (d + -1) | 0;
  if ((a[d >> 0] | 0) == 10) a[d >> 0] = 0;
 }
 if (e & (a[f >> 0] | 0) == 61) {
  c[g >> 2] = f + 1;
  pd(b, 12271, g) | 0;
  j = 1;
  i = h;
  return j | 0;
 } else {
  Tf(b, f) | 0;
  j = 1;
  i = h;
  return j | 0;
 }
 return 0;
}

function Df(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = d + b | 0;
 j = i + 511 | 0;
 e = c[a + 20 >> 2] | 0;
 do if ((e | 0) > (c[a + 24 >> 2] | 0)) {
  h = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (e + -1 << 2) | 0;
  e = c[h >> 2] | 0;
  if ((e & 63 | 0) == 4) {
   g = e >>> 6 & 255;
   f = g + (e >>> 23) | 0;
   if ((g | 0) > (b | 0) | (f + 1 | 0) < (b | 0)) if ((g | 0) < (b | 0) | (g | 0) > (i | 0)) break;
   d = (g | 0) < (b | 0) ? g : b;
   c[h >> 2] = ((f | 0) < (i | 0) ? j : f) - d << 23 | d << 6 & 16320 | e & 8372287;
   return;
  }
 } while (0);
 De(a, b << 6 | (d << 23) + -8388608 | 4) | 0;
 return;
}

function nn(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) if (b >>> 0 < 1044816030) a = 1.0; else a = +il(a, 0.0); else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((ol(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +il(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 1:
   {
    a = -+hl(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 2:
   {
    a = -+il(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  default:
   {
    a = +hl(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  }
 } while (0);
 i = e;
 return +a;
}

function on(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) {
  if (b >>> 0 >= 1045430272) a = +hl(a, 0.0, 0);
 } else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((ol(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +hl(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 1:
   {
    a = +il(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 2:
   {
    a = -+hl(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  default:
   {
    a = -+il(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  }
 } while (0);
 i = e;
 return +a;
}

function rh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 e = c[a + 8 >> 2] | 0;
 return ((e | 0) == 22 | (e | 0) == 102) & 1 | 0;
}

function di(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 g = h + 8 | 0;
 f = h;
 if ((Gd(a, 1) | 0) < 1) {
  Qg(a, -1001e3, b);
  i = h;
  return;
 }
 e = dd(a, 1, 0) | 0;
 if (!e) {
  if (!(c[($h(a, 1, 9473) | 0) + 4 >> 2] | 0)) md(a, 9479, g) | 0;
  Of(a, 1);
 } else {
  j = bh(a, 8) | 0;
  g = j + 4 | 0;
  c[g >> 2] = 0;
  ei(a, 9473);
  c[j >> 2] = 0;
  c[g >> 2] = 165;
  g = wm(e, d) | 0;
  c[j >> 2] = g;
  if (!g) {
   j = Ol(c[(_k() | 0) >> 2] | 0) | 0;
   c[f >> 2] = e;
   c[f + 4 >> 2] = j;
   md(a, 9566, f) | 0;
  }
 }
 kd(a, -1001e3, b);
 Qg(a, -1001e3, b);
 i = h;
 return;
}

function bf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 i = a + 28 | 0;
 h = c[i >> 2] | 0;
 c[i >> 2] = -1;
 i = De(a, 2147450903) | 0;
 if ((h | 0) == -1) {
  a = i;
  return a | 0;
 }
 if ((i | 0) == -1) {
  a = h;
  return a | 0;
 }
 f = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 b = i;
 while (1) {
  e = f + (b << 2) | 0;
  d = c[e >> 2] | 0;
  g = (d >>> 14) + -131071 | 0;
  g = (g | 0) == -1 ? -1 : b + 1 + g | 0;
  if ((g | 0) == -1) break; else b = g;
 }
 b = h + ~b | 0;
 if ((((b | 0) > -1 ? b : 0 - b | 0) | 0) > 131071) me(c[a + 12 >> 2] | 0, 6980);
 c[e >> 2] = (b << 14) + 2147467264 | d & 16383;
 a = i;
 return a | 0;
}

function pj(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = (c[a + 8 >> 2] | 0) + -16 | 0;
 uc(a, b, f, f);
 return;
}

function Ib(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = b + 64 | 0;
 e = c[f >> 2] | 0;
 if (e | 0) {
  c[e + 160 >> 2] = d;
  xa((c[f >> 2] | 0) + 4 | 0, 1);
 }
 a[b + 6 >> 0] = d;
 g = b + 12 | 0;
 e = c[g >> 2] | 0;
 f = c[e + 172 >> 2] | 0;
 if (c[f + 64 >> 2] | 0) {
  h = c[b + 8 >> 2] | 0;
  k = f + 8 | 0;
  f = c[k >> 2] | 0;
  c[k >> 2] = f + 16;
  k = h + -16 | 0;
  j = c[k + 4 >> 2] | 0;
  i = f;
  c[i >> 2] = c[k >> 2];
  c[i + 4 >> 2] = j;
  c[f + 8 >> 2] = c[h + -8 >> 2];
  Ib(c[(c[g >> 2] | 0) + 172 >> 2] | 0, d);
 }
 e = c[e + 168 >> 2] | 0;
 if (!e) qa();
 fb[e & 255](b) | 0;
 qa();
}

function Ek(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 112 | 0;
 b = g;
 c = Xf(a, 2) | 0;
 Yf(a, 1, 6);
 Of(a, 1);
 od(a, 11773, b) | 0;
 if ((c | 0) > 0) {
  if ((c | 0) > (d[b + 32 >> 0] | 0 | 0)) f = 3;
 } else f = 3;
 if ((f | 0) == 3) Id(a, 2, 11776) | 0;
 e = Xf(a, 4) | 0;
 Yf(a, 3, 6);
 Of(a, 3);
 od(a, 11773, b) | 0;
 if ((e | 0) > 0) {
  if ((e | 0) > (d[b + 32 >> 0] | 0 | 0)) f = 6;
 } else f = 6;
 if ((f | 0) == 6) Id(a, 4, 11776) | 0;
 if (rh(a, 1) | 0) Id(a, 1, 11798) | 0;
 if (!(rh(a, 3) | 0)) {
  Fk(a, 1, c, 3, e);
  i = g;
  return 0;
 }
 Id(a, 3, 11798) | 0;
 Fk(a, 1, c, 3, e);
 i = g;
 return 0;
}

function Tg(a) {
 a = a | 0;
 Pg(a, -1001e3, 8113) | 0;
 Rg(a, 0, 1);
 _f(a, 158, 0);
 kd(a, -2, 9846);
 Bg(a, -2) | 0;
 Rg(a, 0, 3);
 Ng(a, 1712, 0);
 Rg(a, 4, 0);
 Of(a, -2);
 _f(a, 159, 1);
 hh(a, -2, 1);
 Of(a, -2);
 _f(a, 160, 1);
 hh(a, -2, 2);
 Of(a, -2);
 _f(a, 161, 1);
 hh(a, -2, 3);
 Of(a, -2);
 _f(a, 162, 1);
 hh(a, -2, 4);
 Of(a, -1);
 kd(a, -3, 8446);
 kd(a, -2, 8454);
 mh(a, 8316, 8464, 8477, 8486);
 mh(a, 8397, 8643, 8657, 8667);
 qd(a, 8736, 10) | 0;
 kd(a, -2, 8747);
 Pg(a, -1001e3, 8754) | 0;
 kd(a, -2, 8762);
 Pg(a, -1001e3, 12078) | 0;
 kd(a, -2, 8769);
 Bd(a, -1001e3, 2);
 Of(a, -2);
 Ng(a, 1744, 1);
 wd(a, -2);
 return 1;
}

function Zh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 Rg(a, 0, 11);
 Ng(a, 1888, 0);
 xi(a, 9473) | 0;
 Of(a, -1);
 kd(a, -2, 10997);
 Ng(a, 1984, 0);
 wd(a, -2);
 e = c[720] | 0;
 d = bh(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 ei(a, 9473);
 c[d >> 2] = e;
 c[b >> 2] = 164;
 Of(a, -1);
 kd(a, -1001e3, 9554);
 kd(a, -2, 9902);
 b = c[778] | 0;
 d = bh(a, 8) | 0;
 e = d + 4 | 0;
 c[e >> 2] = 0;
 ei(a, 9473);
 c[d >> 2] = b;
 c[e >> 2] = 164;
 Of(a, -1);
 kd(a, -1001e3, 9462);
 kd(a, -2, 9908);
 e = c[749] | 0;
 d = bh(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 ei(a, 9473);
 c[d >> 2] = e;
 c[b >> 2] = 164;
 kd(a, -2, 9915);
 return 1;
}

function Me(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 Ce(b, e);
 if ((c[e >> 2] | 0) == 6) {
  f = c[e + 8 >> 2] | 0;
  if (!(f & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (f | 0)) {
   h = b + 48 | 0;
   a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 g = b + 48 | 0;
 f = (d[g >> 0] | 0) + 1 | 0;
 h = (c[b >> 2] | 0) + 78 | 0;
 if (f >>> 0 <= (d[h >> 0] | 0) >>> 0) {
  h = f & 255;
  a[g >> 0] = h;
  h = h & 255;
  h = h + -1 | 0;
  Ee(b, e, h);
  return;
 }
 if (f >>> 0 > 249) me(c[b + 12 >> 2] | 0, 7025);
 f = f & 255;
 a[h >> 0] = f;
 h = f;
 a[g >> 0] = h;
 h = h & 255;
 h = h + -1 | 0;
 Ee(b, e, h);
 return;
}

function gk(a) {
 a = a | 0;
 var b = 0.0, c = 0.0, d = 0.0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = +((bn() | 0) % 2147483647 | 0 | 0) / 2147483647.0;
 switch (Kd(a) | 0) {
 case 0:
  {
   ud(a, d);
   a = 1;
   i = e;
   return a | 0;
  }
 case 1:
  {
   b = +Li(a, 1);
   if (!(b >= 1.0)) Id(a, 1, 11286) | 0;
   ud(a, +M(+(d * b)) + 1.0);
   a = 1;
   i = e;
   return a | 0;
  }
 case 2:
  {
   c = +Li(a, 1);
   b = +Li(a, 2);
   if (!(c <= b)) Id(a, 2, 11286) | 0;
   ud(a, c + +M(+(d * (b - c + 1.0))));
   a = 1;
   i = e;
   return a | 0;
  }
 default:
  {
   a = md(a, 11304, e) | 0;
   i = e;
   return a | 0;
  }
 }
 return 0;
}

function ve(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 g = c[b + 60 >> 2] | 0;
 j = g + 4 | 0;
 e = c[j >> 2] | 0;
 i = g + 8 | 0;
 h = c[i >> 2] | 0;
 if ((e + 1 | 0) >>> 0 <= h >>> 0) {
  i = e;
  h = c[g >> 2] | 0;
  d = d & 255;
  g = i + 1 | 0;
  c[j >> 2] = g;
  j = h + i | 0;
  a[j >> 0] = d;
  return;
 }
 if (h >>> 0 > 2147483645) ne(b, 6665, 0);
 f = h << 1;
 e = c[b + 52 >> 2] | 0;
 if ((f | 0) == -2) Kb(e);
 h = yb(e, c[g >> 2] | 0, h, f) | 0;
 c[g >> 2] = h;
 c[i >> 2] = f;
 i = c[j >> 2] | 0;
 d = d & 255;
 g = i + 1 | 0;
 c[j >> 2] = g;
 j = h + i | 0;
 a[j >> 0] = d;
 return;
}

function mi(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 e = Fg(b, 1, 0) | 0;
 g = Fd(b, 2, 9564, 0) | 0;
 f = bh(b, 8) | 0;
 d = f + 4 | 0;
 c[d >> 2] = 0;
 ei(b, 9473);
 c[f >> 2] = 0;
 c[d >> 2] = 165;
 d = a[g >> 0] | 0;
 if (!(d << 24 >> 24)) i = 4; else {
  h = g + 1 | 0;
  if (!(Pl(15051, d << 24 >> 24, 4) | 0)) i = 4; else {
   h = (a[h >> 0] | 0) == 43 ? g + 2 | 0 : h;
   if (a[((a[h >> 0] | 0) == 98 ? h + 1 | 0 : h) >> 0] | 0) i = 4;
  }
 }
 if ((i | 0) == 4) Id(b, 2, 9685) | 0;
 i = wm(e, g) | 0;
 c[f >> 2] = i;
 if (i | 0) {
  i = 1;
  return i | 0;
 }
 i = bi(b, 0, e) | 0;
 return i | 0;
}

function df(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 c[a + 24 >> 2] = c[a + 20 >> 2];
 d = a + 28 | 0;
 if ((b | 0) == -1) return;
 e = c[d >> 2] | 0;
 if ((e | 0) == -1) {
  c[d >> 2] = b;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  f = h + (e << 2) | 0;
  d = c[f >> 2] | 0;
  g = (d >>> 14) + -131071 | 0;
  g = (g | 0) == -1 ? -1 : e + 1 + g | 0;
  if ((g | 0) == -1) {
   g = d;
   break;
  } else e = g;
 }
 d = ~e + b | 0;
 if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) me(c[a + 12 >> 2] | 0, 6980);
 c[f >> 2] = (d << 14) + 2147467264 | g & 16383;
 return;
}

function Fb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 g = i;
 i = i + 96 | 0;
 j = g;
 h = g + 32 | 0;
 g = g + 16 | 0;
 c[g >> 2] = e;
 g = Gb(b, d, g) | 0;
 d = c[b + 16 >> 2] | 0;
 if (!(a[d + 18 >> 0] & 1)) mc(b);
 f = c[(c[c[d >> 2] >> 2] | 0) + 12 >> 2] | 0;
 e = c[f + 20 >> 2] | 0;
 if (!e) e = 0; else e = c[e + (((c[d + 28 >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 << 2) >> 2] | 0;
 d = c[f + 36 >> 2] | 0;
 if (!d) {
  a[h >> 0] = 63;
  a[h + 1 >> 0] = 0;
 } else kc(h, d + 16 | 0, 60);
 c[j >> 2] = h;
 c[j + 4 >> 2] = e;
 c[j + 8 >> 2] = g;
 lc(b, 6655, j) | 0;
 mc(b);
}

function Ql(a, b, d, e, f) {
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
  zn(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Kl(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Kl(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function ic(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = c[a + 60 >> 2] | 0;
 if ((e | 0) <= 0) {
  f = 0;
  return f | 0;
 }
 f = c[a + 24 >> 2] | 0;
 a = 0;
 while (1) {
  if ((c[f + (a * 12 | 0) + 4 >> 2] | 0) > (d | 0)) {
   a = 0;
   b = 8;
   break;
  }
  if ((c[f + (a * 12 | 0) + 8 >> 2] | 0) > (d | 0)) {
   b = b + -1 | 0;
   if (!b) {
    b = 6;
    break;
   }
  }
  a = a + 1 | 0;
  if ((a | 0) >= (e | 0)) {
   a = 0;
   b = 8;
   break;
  }
 }
 if ((b | 0) == 6) {
  f = (c[f + (a * 12 | 0) >> 2] | 0) + 16 | 0;
  return f | 0;
 } else if ((b | 0) == 8) return a | 0;
 return 0;
}

function rg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 g = j + 4 | 0;
 d = Kd(a) | 0;
 sg(a, 7823);
 a : do if ((d | 0) < 1) b = c[778] | 0; else {
  b = c[778] | 0;
  f = 1;
  while (1) {
   Of(a, -1);
   Of(a, f);
   Kf(a, 1, 1, 0, 0);
   e = dd(a, -1, g) | 0;
   if (!e) break;
   if ((f | 0) > 1) Sm(9, b) | 0;
   Rm(e, 1, c[g >> 2] | 0, b) | 0;
   wd(a, -2);
   if ((f | 0) < (d | 0)) f = f + 1 | 0; else break a;
  }
  h = md(a, 7832, h) | 0;
  i = j;
  return h | 0;
 } while (0);
 Sm(10, b) | 0;
 um(b) | 0;
 h = 0;
 i = j;
 return h | 0;
}

function yk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 c = f;
 if ((Gd(a, 1) | 0) == 8) {
  b = 1;
  e = yh(a, 1) | 0;
 } else {
  b = 0;
  e = a;
 }
 d = Xf(a, b | 2) | 0;
 b = b + 1 | 0;
 if ((Gd(a, b) | 0) == 6) {
  Of(a, b);
  Tf(a, zk(a, 0, d) | 0) | 0;
  e = 1;
  i = f;
  return e | 0;
 }
 if (!(nd(e, Xf(a, b) | 0, c) | 0)) {
  e = Id(a, b, 11706) | 0;
  i = f;
  return e | 0;
 }
 b = zk(e, c, d) | 0;
 if (!b) {
  Md(a);
  e = 1;
  i = f;
  return e | 0;
 } else {
  wh(e, a, 1);
  Tf(a, b) | 0;
  Of(a, -2);
  e = 2;
  i = f;
  return e | 0;
 }
 return 0;
}

function Km(b, e) {
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
 if (!f) if (!(Ll(b) | 0)) {
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
  if ((cb[c[b + 36 >> 2] & 15](b, j, 1) | 0) == 1) f = d[j >> 0] | 0; else f = -1;
 } while (0);
 i = l;
 return f | 0;
}

function cg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 e = g;
 b = dd(a, 1, e) | 0;
 d = Fd(a, 3, 7678, 0) | 0;
 f = (Gd(a, 4) | 0) != -1;
 if (!b) {
  b = Fd(a, 2, 7681, 0) | 0;
  Yf(a, 1, 6);
  wd(a, 5);
  b = $d(a, 7, 0, b, d) | 0;
 } else {
  h = Fd(a, 2, b, 0) | 0;
  b = dg(a, b, c[e >> 2] | 0, h, d) | 0;
 }
 if (b | 0) {
  Md(a);
  Rd(a, -2);
  h = 2;
  i = g;
  return h | 0;
 }
 if (!f) {
  h = 1;
  i = g;
  return h | 0;
 }
 Of(a, f ? 4 : 0);
 if (bg(a, -2, 1) | 0) {
  h = 1;
  i = g;
  return h | 0;
 }
 wd(a, -2);
 h = 1;
 i = g;
 return h | 0;
}

function Kn(a, b, d, e) {
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
 a = xn(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = C;
 On(a, b, xn(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, C, j) | 0;
 e = xn(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function mc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = c[a + 68 >> 2] | 0;
 if (!b) Ib(a, 2);
 b = (c[a + 28 >> 2] | 0) + b | 0;
 d = b + 8 | 0;
 if ((c[d >> 2] & 15 | 0) != 6) Ib(a, 6);
 e = a + 8 | 0;
 f = c[e >> 2] | 0;
 i = f + -16 | 0;
 g = c[i + 4 >> 2] | 0;
 h = f;
 c[h >> 2] = c[i >> 2];
 c[h + 4 >> 2] = g;
 c[f + 8 >> 2] = c[f + -8 >> 2];
 f = c[e >> 2] | 0;
 h = b;
 g = c[h + 4 >> 2] | 0;
 b = f + -16 | 0;
 c[b >> 2] = c[h >> 2];
 c[b + 4 >> 2] = g;
 c[f + -8 >> 2] = c[d >> 2];
 d = c[e >> 2] | 0;
 c[e >> 2] = d + 16;
 Eb(a, d + -16 | 0, 1, 0);
 Ib(a, 2);
}

function Oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 h = j + 16 | 0;
 g = j + 8 | 0;
 f = j;
 if ((d | 0) >= 257) {
  e = c[1292 + (d + -257 << 2) >> 2] | 0;
  if ((d | 0) >= 286) {
   d = e;
   i = j;
   return d | 0;
  }
  d = c[b + 52 >> 2] | 0;
  c[h >> 2] = e;
  d = lc(d, 6690, h) | 0;
  i = j;
  return d | 0;
 }
 e = c[b + 52 >> 2] | 0;
 if (!(a[3999 + (d + 1) >> 0] & 4)) {
  c[g >> 2] = d;
  d = lc(e, 6700, g) | 0;
  i = j;
  return d | 0;
 } else {
  c[f >> 2] = d;
  d = lc(e, 6695, f) | 0;
  i = j;
  return d | 0;
 }
 return 0;
}

function gl(a, b) {
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
 d = An(d + 1023 | 0, 0, 52) | 0;
 b = C;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function Hm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((d | 0) == 1) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) | 0;
 f = a + 20 | 0;
 e = a + 28 | 0;
 if ((c[f >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) {
  cb[c[a + 36 >> 2] & 15](a, 0, 0) | 0;
  if (!(c[f >> 2] | 0)) b = -1; else g = 5;
 } else g = 5;
 if ((g | 0) == 5) {
  c[a + 16 >> 2] = 0;
  c[e >> 2] = 0;
  c[f >> 2] = 0;
  if ((cb[c[a + 40 >> 2] & 15](a, b, d) | 0) < 0) b = -1; else {
   c[a + 8 >> 2] = 0;
   c[a + 4 >> 2] = 0;
   c[a >> 2] = c[a >> 2] & -17;
   b = 0;
  }
 }
 return b | 0;
}

function Af(a, b) {
 a = a | 0;
 b = +b;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0;
 j = i;
 i = i + 32 | 0;
 g = j;
 f = j + 8 | 0;
 h[g >> 3] = b;
 e = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
 h[f >> 3] = b;
 c[f + 8 >> 2] = 3;
 if (b != b | 0.0 != 0.0 | b == 0.0) {
  k = e + 8 | 0;
  l = c[k >> 2] | 0;
  c[k >> 2] = l + 16;
  g = Lb(e, g, 8) | 0;
  c[l >> 2] = g;
  c[l + 8 >> 2] = d[g + 4 >> 0] | 0 | 64;
  g = Ge(a, (c[k >> 2] | 0) + -16 | 0, f) | 0;
  c[k >> 2] = (c[k >> 2] | 0) + -16;
  i = j;
  return g | 0;
 } else {
  l = Ge(a, f, f) | 0;
  i = j;
  return l | 0;
 }
 return 0;
}

function Rh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 Yf(a, 1, 5);
 c = Vg(a, 1) | 0;
 b = c + 1 | 0;
 switch (Kd(a) | 0) {
 case 2:
  break;
 case 3:
  {
   d = 2;
   break;
  }
 default:
  {
   a = md(a, 9334, e) | 0;
   i = e;
   return a | 0;
  }
 }
 if ((d | 0) == 2) {
  d = Xf(a, 2) | 0;
  if ((d | 0) < 1 | (d | 0) > (b | 0)) Id(a, 2, 9311) | 0;
  if ((c | 0) < (d | 0)) b = d; else {
   do {
    c = b;
    b = b + -1 | 0;
    Bd(a, 1, b);
    hh(a, 1, c);
   } while ((b | 0) > (d | 0));
   b = d;
  }
 }
 hh(a, 1, b);
 a = 0;
 i = e;
 return a | 0;
}

function vj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 e = g;
 f = Fg(a, 1, e) | 0;
 d = Xf(a, 2) | 0;
 b = c[e >> 2] | 0;
 if ((d | 0) <= -1) if (b >>> 0 < (0 - d | 0) >>> 0) d = 0; else d = d + 1 + b | 0;
 b = Vd(a, 3, -1) | 0;
 e = c[e >> 2] | 0;
 if ((b | 0) <= -1) if (e >>> 0 < (0 - b | 0) >>> 0) b = 0; else b = b + 1 + e | 0;
 d = (d | 0) == 0 ? 1 : d;
 b = b >>> 0 > e >>> 0 ? e : b;
 if (b >>> 0 < d >>> 0) {
  qd(a, 17772, 0) | 0;
  i = g;
  return 1;
 } else {
  qd(a, f + d + -1 | 0, 1 - d + b | 0) | 0;
  i = g;
  return 1;
 }
 return 0;
}

function jh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 8 | 0;
 d = g;
 e = Fg(a, 1, 0) | 0;
 Qg(a, -1001001, 8397);
 b = dd(a, -1, 0) | 0;
 if (!b) {
  c[d >> 2] = 8397;
  md(a, 8321, d) | 0;
 }
 b = _g(a, e, b, 14775, 8240) | 0;
 if (!b) {
  f = 1;
  i = g;
  return f | 0;
 }
 if (!(kh(a, b, e) | 0)) {
  Tf(a, b) | 0;
  f = 2;
  i = g;
  return f | 0;
 } else {
  d = dd(a, 1, 0) | 0;
  e = dd(a, -1, 0) | 0;
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  c[f + 8 >> 2] = e;
  f = md(a, 8351, f) | 0;
  i = g;
  return f | 0;
 }
 return 0;
}

function ih(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 8 | 0;
 e = g;
 b = Fg(a, 1, 0) | 0;
 Qg(a, -1001001, 8316);
 d = dd(a, -1, 0) | 0;
 if (!d) {
  c[e >> 2] = 8316;
  md(a, 8321, e) | 0;
 }
 b = _g(a, b, d, 14775, 8240) | 0;
 if (!b) {
  f = 1;
  i = g;
  return f | 0;
 }
 if (!(Yd(a, b, 0) | 0)) {
  Tf(a, b) | 0;
  f = 2;
  i = g;
  return f | 0;
 } else {
  d = dd(a, 1, 0) | 0;
  e = dd(a, -1, 0) | 0;
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  c[f + 8 >> 2] = e;
  f = md(a, 8351, f) | 0;
  i = g;
  return f | 0;
 }
 return 0;
}

function yf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if ((d | 0) == -1) return;
 e = c[b >> 2] | 0;
 if ((e | 0) == -1) {
  c[b >> 2] = d;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  f = h + (e << 2) | 0;
  b = c[f >> 2] | 0;
  g = (b >>> 14) + -131071 | 0;
  g = (g | 0) == -1 ? -1 : e + 1 + g | 0;
  if ((g | 0) == -1) {
   g = b;
   break;
  } else e = g;
 }
 b = ~e + d | 0;
 if ((((b | 0) > -1 ? b : 0 - b | 0) | 0) > 131071) me(c[a + 12 >> 2] | 0, 6980);
 c[f >> 2] = g & 16383 | (b << 14) + 2147467264;
 return;
}

function Om(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do if ((b | 0) == -1) b = -1; else {
  if ((c[d + 76 >> 2] | 0) > -1) g = Tl(d) | 0; else g = 0;
  if (!(c[d + 8 >> 2] | 0)) {
   if (!(km(d) | 0)) e = 6;
  } else e = 6;
  if ((e | 0) == 6) {
   f = d + 4 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) {
    e = e + -1 | 0;
    c[f >> 2] = e;
    a[e >> 0] = b;
    c[d >> 2] = c[d >> 2] & -17;
    if (!g) break;
    bl(d);
    break;
   }
  }
  if (!g) b = -1; else {
   bl(d);
   b = -1;
  }
 } while (0);
 return b | 0;
}

function ki(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1040 | 0;
 h = k;
 $g(b, h);
 f = li(h, 1024) | 0;
 a : do if (ym(f, 1024, d) | 0) {
  j = h + 8 | 0;
  g = f;
  while (1) {
   f = Vl(g) | 0;
   if (f | 0) if ((a[g + (f + -1) >> 0] | 0) == 10) break;
   c[j >> 2] = (c[j >> 2] | 0) + f;
   g = li(h, 1024) | 0;
   if (!(ym(g, 1024, d) | 0)) break a;
  }
  c[j >> 2] = f - e + (c[j >> 2] | 0);
  eh(h);
  j = 1;
  i = k;
  return j | 0;
 } while (0);
 eh(h);
 j = (vg(b, -1) | 0) != 0 & 1;
 i = k;
 return j | 0;
}

function Th(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 d = f;
 Yf(a, 1, 5);
 c = Vd(a, 2, 1) | 0;
 if ((Gd(a, 3) | 0) < 1) e = Vg(a, 1) | 0; else e = Xf(a, 3) | 0;
 if ((e | 0) < (c | 0)) {
  e = 0;
  i = f;
  return e | 0;
 }
 g = e - c | 0;
 b = g + 1 | 0;
 if ((g | 0) >= 0) if (hg(a, b) | 0) {
  Bd(a, 1, c);
  if ((e | 0) <= (c | 0)) {
   g = b;
   i = f;
   return g | 0;
  }
  do {
   c = c + 1 | 0;
   Bd(a, 1, c);
  } while ((c | 0) != (e | 0));
  i = f;
  return b | 0;
 }
 g = md(a, 9386, d) | 0;
 i = f;
 return g | 0;
}

function Hg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 a : do if (!(Ig(a, b, 12111) | 0)) switch (Gd(a, b) | 0) {
 case 4:
 case 3:
  {
   Of(a, b);
   break a;
  }
 case 1:
  {
   e = (Ed(a, b) | 0) != 0;
   Tf(a, e ? 8026 : 8031) | 0;
   break a;
  }
 case 0:
  {
   qd(a, 8037, 3) | 0;
   break a;
  }
 default:
  {
   g = Hd(a, Gd(a, b) | 0) | 0;
   b = Kg(a, b) | 0;
   c[e >> 2] = g;
   c[e + 4 >> 2] = b;
   pd(a, 8041, e) | 0;
   break a;
  }
 } while (0);
 g = dd(a, -1, d) | 0;
 i = f;
 return g | 0;
}

function ph(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (c) Of(b, c);
 while (1) {
  c = qm(d, 46) | 0;
  if (!c) c = d + (Vl(d) | 0) | 0;
  f = c - d | 0;
  qd(b, d, f) | 0;
  Uf(b, -2);
  if (!(Gd(b, -1) | 0)) {
   wd(b, -2);
   Rg(b, 0, (a[c >> 0] | 0) == 46 ? 1 : e);
   qd(b, d, f) | 0;
   Of(b, -2);
   qh(b, -4);
  } else if ((Gd(b, -1) | 0) != 5) break;
  Qd(b, -2);
  if ((a[c >> 0] | 0) == 46) d = c + 1 | 0; else {
   d = 0;
   g = 10;
   break;
  }
 }
 if ((g | 0) == 10) return d | 0;
 wd(b, -3);
 g = d;
 return g | 0;
}

function Ih(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 112 | 0;
 b = yh(a, 1) | 0;
 if (!b) Id(a, 1, 8959) | 0;
 if ((b | 0) == (a | 0)) {
  qd(a, 9101, 7) | 0;
  i = c;
  return 1;
 }
 switch (Ah(b) | 0) {
 case 1:
  {
   qd(a, 9116, 9) | 0;
   i = c;
   return 1;
  }
 case 0:
  {
   do if ((nd(b, 0, c) | 0) > 0) qd(a, 9126, 6) | 0; else if (!(Kd(b) | 0)) {
    qd(a, 9133, 4) | 0;
    break;
   } else {
    qd(a, 9116, 9) | 0;
    break;
   } while (0);
   i = c;
   return 1;
  }
 default:
  {
   qd(a, 9133, 4) | 0;
   i = c;
   return 1;
  }
 }
 return 0;
}

function um(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[807] | 0)) b = 0; else b = um(c[807] | 0) | 0;
  Ta(15176);
  a = c[3793] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Tl(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = vm(a) | 0 | b;
   if (d | 0) bl(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Oa(15176);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = vm(a) | 0;
   break;
  }
  d = (Tl(a) | 0) == 0;
  b = vm(a) | 0;
  if (!d) bl(a);
 } while (0);
 return b | 0;
}

function ke(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0;
 a[e + 76 >> 0] = 46;
 i = e + 52 | 0;
 c[i >> 2] = b;
 c[e >> 2] = h;
 c[e + 32 >> 2] = 286;
 c[e + 56 >> 2] = f;
 c[e + 48 >> 2] = 0;
 c[e + 4 >> 2] = 1;
 c[e + 8 >> 2] = 1;
 c[e + 68 >> 2] = g;
 f = _c(b, 6575) | 0;
 c[e + 72 >> 2] = f;
 f = f + 5 | 0;
 a[f >> 0] = d[f >> 0] | 0 | 32;
 f = e + 60 | 0;
 g = c[f >> 2] | 0;
 g = yb(c[i >> 2] | 0, c[g >> 2] | 0, c[g + 8 >> 2] | 0, 32) | 0;
 f = c[f >> 2] | 0;
 c[f >> 2] = g;
 c[f + 8 >> 2] = 32;
 return;
}

function vm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = a + 20 | 0;
 g = a + 28 | 0;
 if ((c[h >> 2] | 0) >>> 0 > (c[g >> 2] | 0) >>> 0) {
  cb[c[a + 36 >> 2] & 15](a, 0, 0) | 0;
  if (!(c[h >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  e = a + 8 | 0;
  d = c[e >> 2] | 0;
  if (b >>> 0 < d >>> 0) cb[c[a + 40 >> 2] & 15](a, b - d | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  c[e >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function Wm() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 48 | 0;
 g = j + 16 | 0;
 f = j;
 d = j + 20 | 0;
 e = 0;
 while (1) {
  b = Pm(d) | 0;
  if (!b) {
   a = 0;
   break;
  }
  c[f >> 2] = b;
  c[f + 4 >> 2] = 32962;
  c[f + 8 >> 2] = 384;
  a = Zk(Va(5, f | 0) | 0) | 0;
  e = e + 1 | 0;
  if ((a | 0) > -1) {
   h = 5;
   break;
  }
  if ((e | 0) >= 100) {
   a = 0;
   break;
  }
 }
 if ((h | 0) == 5) {
  a = pm(a, 15085) | 0;
  c[g >> 2] = b;
  Ra(10, g | 0) | 0;
 }
 i = j;
 return a | 0;
}

function Jn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = xn(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return xn((On(h, g, xn(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, C, 0) | 0) ^ a | 0, C ^ b | 0, a | 0, b | 0) | 0;
}

function Fd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 g = h;
 if ((Gd(a, b) | 0) >= 1) {
  f = dd(a, b, e) | 0;
  if (f | 0) {
   g = f;
   i = h;
   return g | 0;
  }
  d = Hd(a, 4) | 0;
  e = Hd(a, Gd(a, b) | 0) | 0;
  c[g >> 2] = d;
  c[g + 4 >> 2] = e;
  Id(a, b, pd(a, 6119, g) | 0) | 0;
  g = 0;
  i = h;
  return g | 0;
 }
 if (!e) {
  g = d;
  i = h;
  return g | 0;
 }
 if (!d) f = 0; else f = Vl(d) | 0;
 c[e >> 2] = f;
 g = d;
 i = h;
 return g | 0;
}

function En(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Ea(b | 0, d | 0, e | 0) | 0;
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

function Zi(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 c[b + 12 >> 2] = a;
 f = b + 16 | 0;
 c[b >> 2] = f;
 g = b + 8 | 0;
 c[g >> 2] = 0;
 h = b + 4 | 0;
 c[h >> 2] = 1024;
 if (d >>> 0 <= 1024) {
  g = f;
  h = 0;
  h = g + h | 0;
  return h | 0;
 }
 d = d >>> 0 > 2048 ? d : 2048;
 e = bh(a, d) | 0;
 En(e | 0, c[b >> 2] | 0, c[g >> 2] | 0) | 0;
 if ((c[b >> 2] | 0) != (f | 0)) Qd(a, -2);
 c[b >> 2] = e;
 c[h >> 2] = d;
 f = e;
 h = c[g >> 2] | 0;
 h = f + h | 0;
 return h | 0;
}

function Vl(b) {
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

function nl(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Cn(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +nl(a * 18446744073709551616.0, b);
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

function kn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = hn(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(_k() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = ln(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d | 0) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = hn(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 En(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 jn(a);
 a = d;
 return a | 0;
}

function Vm(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) < 0) f = 3; else if (!(Tl(a) | 0)) f = 3; else {
  e = a + 4 | 0;
  b = c[e >> 2] | 0;
  if (b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[e >> 2] = b + 1;
   b = d[b >> 0] | 0;
  } else b = jm(a) | 0;
 }
 do if ((f | 0) == 3) {
  e = a + 4 | 0;
  b = c[e >> 2] | 0;
  if (b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[e >> 2] = b + 1;
   b = d[b >> 0] | 0;
   break;
  } else {
   b = jm(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function Nl(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Nn(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = Mn(b | 0, c | 0, 10, 0) | 0;
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

function We(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = c[a + 52 >> 2] | 0;
 f = Lb(h, b, e) | 0;
 g = h + 8 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = e + 16;
 c[e >> 2] = f;
 c[e + 8 >> 2] = d[f + 4 >> 0] | 0 | 64;
 e = te(h, c[(c[a + 48 >> 2] | 0) + 4 >> 2] | 0, (c[g >> 2] | 0) + -16 | 0) | 0;
 b = e + 8 | 0;
 if (!(c[b >> 2] | 0)) {
  c[e >> 2] = 1;
  c[b >> 2] = 1;
  if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(h);
 }
 c[g >> 2] = (c[g >> 2] | 0) + -16;
 return f | 0;
}

function Kf(a, d, e, f, g) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 i = a + 8 | 0;
 d = (c[i >> 2] | 0) + (~d << 4) | 0;
 if (!g) h = 4; else if (!(b[a + 36 >> 1] | 0)) {
  j = c[a + 16 >> 2] | 0;
  c[j + 28 >> 2] = g;
  c[j + 24 >> 2] = f;
  Eb(a, d, e, 1);
 } else h = 4;
 if ((h | 0) == 4) Eb(a, d, e, 0);
 if ((e | 0) != -1) return;
 a = (c[a + 16 >> 2] | 0) + 4 | 0;
 d = c[i >> 2] | 0;
 if ((c[a >> 2] | 0) >>> 0 >= d >>> 0) return;
 c[a >> 2] = d;
 return;
}

function Wc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 if (c[e + 32 >> 2] | 0) {
  f = c[b + 12 >> 2] | 0;
  b = e + 5 | 0;
  a[b >> 0] = (d[b >> 0] | 0) & 251;
  f = f + 88 | 0;
  c[e + 72 >> 2] = c[f >> 2];
  c[f >> 2] = e;
  return;
 }
 if (!(a[f + 5 >> 0] & 3)) return;
 g = e + 5 | 0;
 h = a[g >> 0] | 0;
 if (!(h & 4)) return;
 e = c[b + 12 >> 2] | 0;
 if ((d[e + 61 >> 0] | 0) < 2) {
  Pb(e, f);
  return;
 } else {
  a[g >> 0] = (d[e + 60 >> 0] | 0) & 3 | h & 184;
  return;
 }
}

function sl(a) {
 a = +a;
 var b = 0, d = 0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 a = +N(+a);
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 do if (b >>> 0 > 1071748074) if (b >>> 0 > 1077149696) {
  a = 1.0 - 0.0 / a;
  break;
 } else {
  a = 1.0 - 2.0 / (+tl(a * 2.0) + 2.0);
  break;
 } else {
  if (b >>> 0 > 1070618798) {
   a = +tl(a * 2.0);
   a = a / (a + 2.0);
   break;
  }
  if (b >>> 0 > 1048575) {
   a = +tl(a * -2.0);
   a = -a / (a + 2.0);
  }
 } while (0);
 return +((d | 0) < 0 ? -a : a);
}

function gn(a, b, d) {
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
 gm(h, 0);
 e = +Dm(h, d, 1);
 d = (c[f >> 2] | 0) - (c[g >> 2] | 0) + (c[h + 108 >> 2] | 0) | 0;
 if (b | 0) c[b >> 2] = d | 0 ? a + d | 0 : a;
 i = j;
 return +e;
}

function ld(a, b) {
 a = a | 0;
 b = +b;
 var c = 0.0, d = 0, e = 0, f = 0, g = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 g = j + 24 | 0;
 f = j + 8 | 0;
 e = j;
 d = wb(a) | 0;
 if ((d | 0) == (wb(0) | 0)) {
  c = +h[d >> 3];
  if (c != b) {
   h[f >> 3] = b;
   h[f + 8 >> 3] = c;
   md(a, 5969, f) | 0;
  }
 } else md(a, 5889, e) | 0;
 ud(a, -4660.0);
 if ((hd(a, -1, 0) | 0) == -4660) if ((vd(a, -1, 0) | 0) == -4660) {
  wd(a, -2);
  i = j;
  return;
 }
 md(a, 6023, g) | 0;
 wd(a, -2);
 i = j;
 return;
}

function wd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if ((b | 0) <= -1) {
  g = a + 8 | 0;
  c[g >> 2] = (c[g >> 2] | 0) + (b + 1 << 4);
  return;
 }
 d = c[c[a + 16 >> 2] >> 2] | 0;
 g = a + 8 | 0;
 e = c[g >> 2] | 0;
 f = d + 16 + (b << 4) | 0;
 if (e >>> 0 < f >>> 0) {
  a = ((d + (b << 4) + 8 + 4 + (3 - e) | 0) >>> 4) + 1 | 0;
  d = e;
  do {
   c[d + 8 >> 2] = 0;
   d = d + 16 | 0;
  } while (d >>> 0 < f >>> 0);
  c[g >> 2] = e + (a << 4);
 }
 c[g >> 2] = f;
 return;
}

function yb(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 i = c[b + 12 >> 2] | 0;
 k = (d | 0) != 0;
 h = i + 4 | 0;
 g = gb[c[i >> 2] & 3](c[h >> 2] | 0, d, e, f) | 0;
 if ((f | 0) != 0 & (g | 0) == 0) {
  if (!(a[i + 63 >> 0] | 0)) Ib(b, 4);
  zb(b, 1);
  d = gb[c[i >> 2] & 3](c[h >> 2] | 0, d, e, f) | 0;
  if (!d) Ib(b, 4); else j = d;
 } else j = g;
 b = i + 12 | 0;
 c[b >> 2] = (k ? 0 - e | 0 : 0) + f + (c[b >> 2] | 0);
 return j | 0;
}

function zh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(hg(b, c) | 0)) {
  qd(a, 8978, 28) | 0;
  b = -1;
  return b | 0;
 }
 if (!(Ah(b) | 0)) if (!(Kd(b) | 0)) {
  qd(a, 9045, 28) | 0;
  b = -1;
  return b | 0;
 }
 wh(a, b, c);
 if ((Bh(b, a, c) | 0 | 1 | 0) != 1) {
  wh(b, a, 1);
  b = -1;
  return b | 0;
 }
 c = Kd(b) | 0;
 if (!(hg(a, c + 1 | 0) | 0)) {
  wd(b, ~c);
  qd(a, 9074, 26) | 0;
  b = -1;
  return b | 0;
 } else {
  wh(b, a, c);
  b = c;
  return b | 0;
 }
 return 0;
}

function km(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) cb[c[b + 36 >> 2] & 15](b, 0, 0) | 0;
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

function wm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 16 | 0;
 e = g;
 if (!(Pl(15051, a[d >> 0] | 0, 4) | 0)) {
  c[(_k() | 0) >> 2] = 22;
  b = 0;
 } else {
  h = xm(d) | 0 | 32768;
  c[e >> 2] = b;
  c[e + 4 >> 2] = h;
  c[e + 8 >> 2] = 438;
  e = Zk(Va(5, e | 0) | 0) | 0;
  if ((e | 0) < 0) b = 0; else {
   b = pm(e, d) | 0;
   if (!b) {
    c[f >> 2] = e;
    Ua(6, f | 0) | 0;
    b = 0;
   }
  }
 }
 i = g;
 return b | 0;
}

function Pe(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 g = ((e + -1 | 0) / 50 | 0) + 1 | 0;
 e = (f | 0) == -1 ? 0 : f;
 if ((g | 0) < 512) {
  De(b, d << 6 | e << 23 | g << 14 | 36) | 0;
  d = d + 1 | 0;
  d = d & 255;
  b = b + 48 | 0;
  a[b >> 0] = d;
  return;
 }
 if ((g | 0) >= 67108864) me(c[b + 12 >> 2] | 0, 7115);
 De(b, d << 6 | e << 23 | 36) | 0;
 De(b, g << 6 | 39) | 0;
 d = d + 1 | 0;
 d = d & 255;
 b = b + 48 | 0;
 a[b >> 0] = d;
 return;
}

function dj(b) {
 b = b | 0;
 var c = 0;
 a[b >> 0] = 27;
 a[b + 1 >> 0] = 76;
 a[b + 2 >> 0] = 117;
 a[b + 3 >> 0] = 97;
 a[b + 4 >> 0] = 82;
 a[b + 5 >> 0] = 0;
 a[b + 6 >> 0] = 1;
 a[b + 7 >> 0] = 4;
 a[b + 8 >> 0] = 4;
 a[b + 9 >> 0] = 4;
 a[b + 10 >> 0] = 8;
 c = b + 12 | 0;
 a[b + 11 >> 0] = 0;
 a[c >> 0] = a[6479] | 0;
 a[c + 1 >> 0] = a[6480] | 0;
 a[c + 2 >> 0] = a[6481] | 0;
 a[c + 3 >> 0] = a[6482] | 0;
 a[c + 4 >> 0] = a[6483] | 0;
 a[c + 5 >> 0] = a[6484] | 0;
 return;
}

function Ol(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[12845 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 12933;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 12933; else {
  b = 12933;
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

function zn(b, d, e) {
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

function Bi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0.0;
 f = i;
 i = i + 16 | 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) md(a, 9479, f) | 0;
 b = c[b >> 2] | 0;
 d = Ud(a, 2, 9787, 2064) | 0;
 g = +Ci(a, 3, 0.0);
 e = ~~g;
 if (!(+(e | 0) == g)) Id(a, 3, 9799) | 0;
 if (!(Fm(b, e, c[2080 + (d << 2) >> 2] | 0) | 0)) {
  ud(a, +(Um(b) | 0));
  a = 1;
  i = f;
  return a | 0;
 } else {
  a = bi(a, 0, 0) | 0;
  i = f;
  return a | 0;
 }
 return 0;
}

function _b(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 f = b + 28 | 0;
 $b(b, c[f >> 2] | 0);
 d = c[f >> 2] | 0;
 if (!d) {
  yb(a, b, 112, 0) | 0;
  return;
 }
 c[b + 16 >> 2] = b + 72;
 g = b + 84 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = 0;
 if (e) {
  d = e;
  do {
   g = d;
   d = c[d + 12 >> 2] | 0;
   yb(b, g, 40, 0) | 0;
  } while ((d | 0) != 0);
  d = c[f >> 2] | 0;
 }
 yb(b, d, c[b + 32 >> 2] << 4, 0) | 0;
 yb(a, b, 112, 0) | 0;
 return;
}

function he(b) {
 b = b | 0;
 b = dc(b, 9, 80, 0, 0) | 0;
 c[b + 8 >> 2] = 0;
 c[b + 44 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 56 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 32 >> 2] = 0;
 c[b + 48 >> 2] = 0;
 c[b + 20 >> 2] = 0;
 c[b + 52 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[b + 40 >> 2] = 0;
 a[b + 76 >> 0] = 0;
 a[b + 77 >> 0] = 0;
 a[b + 78 >> 0] = 0;
 c[b + 24 >> 2] = 0;
 c[b + 60 >> 2] = 0;
 c[b + 64 >> 2] = 0;
 c[b + 68 >> 2] = 0;
 c[b + 36 >> 2] = 0;
 return b | 0;
}

function md(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 128 | 0;
 g = f;
 e = f + 24 | 0;
 f = f + 8 | 0;
 c[f >> 2] = d;
 if (nd(a, 1, e) | 0) {
  od(a, 5915, e) | 0;
  d = c[e + 20 >> 2] | 0;
  if ((d | 0) > 0) {
   c[g >> 2] = e + 36;
   c[g + 4 >> 2] = d;
   pd(a, 5961, g) | 0;
   rd(a, b, f) | 0;
   sd(a, 2);
   td(a) | 0;
  }
 }
 qd(a, 17772, 0) | 0;
 rd(a, b, f) | 0;
 sd(a, 2);
 td(a) | 0;
 return 0;
}

function Nk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 c = f;
 if ((Gd(a, 1) | 0) == 8) {
  d = 1;
  e = yh(a, 1) | 0;
 } else {
  d = 0;
  e = a;
 }
 b = d + 1 | 0;
 if (!(nd(e, Xf(a, b) | 0, c) | 0)) {
  e = Id(a, b, 11706) | 0;
  i = f;
  return e | 0;
 } else {
  b = d + 3 | 0;
  Qf(a, b);
  wd(a, b);
  wh(a, e, 1);
  Tf(a, Ok(e, c, Xf(a, d | 2) | 0) | 0) | 0;
  e = 1;
  i = f;
  return e | 0;
 }
 return 0;
}

function Bn(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 p = p + 1 | 0;
 c[a >> 2] = p;
 while ((f | 0) < (e | 0)) {
  if (!(c[d + (f << 3) >> 2] | 0)) {
   c[d + (f << 3) >> 2] = p;
   c[d + ((f << 3) + 4) >> 2] = b;
   c[d + ((f << 3) + 8) >> 2] = 0;
   C = e;
   return d | 0;
  }
  f = f + 1 | 0;
 }
 e = e * 2 | 0;
 d = kn(d | 0, 8 * (e + 1 | 0) | 0) | 0;
 d = Bn(a | 0, b | 0, d | 0, e | 0) | 0;
 C = e;
 return d | 0;
}

function nd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((b | 0) < 0) {
  d = 0;
  return d | 0;
 }
 e = c[a + 16 >> 2] | 0;
 f = a + 72 | 0;
 if ((b | 0) > 0 & (e | 0) != (f | 0)) while (1) {
  a = b + -1 | 0;
  e = c[e + 8 >> 2] | 0;
  if ((b | 0) > 1 & (e | 0) != (f | 0)) b = a; else break;
 } else a = b;
 if ((a | 0) != 0 | (e | 0) == (f | 0)) {
  d = 0;
  return d | 0;
 }
 c[d + 96 >> 2] = e;
 d = 1;
 return d | 0;
}

function kh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 g = h + 8 | 0;
 f = h;
 d = ah(a, d, 14775, 8403) | 0;
 e = qm(d, 45) | 0;
 if (e) {
  c[f >> 2] = qd(a, d, e - d | 0) | 0;
  d = Yg(a, b, pd(a, 8405, f) | 0) | 0;
  if ((d | 0) == 2) d = e + 1 | 0; else {
   g = d;
   i = h;
   return g | 0;
  }
 }
 c[g >> 2] = d;
 g = Yg(a, b, pd(a, 8405, g) | 0) | 0;
 i = h;
 return g | 0;
}

function tm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = (c[a >> 2] & 1 | 0) != 0;
 if (!e) {
  Ta(15176);
  d = c[a + 52 >> 2] | 0;
  b = a + 56 | 0;
  if (d | 0) c[d + 56 >> 2] = c[b >> 2];
  b = c[b >> 2] | 0;
  if (b | 0) c[b + 52 >> 2] = d;
  if ((c[3793] | 0) == (a | 0)) c[3793] = b;
  Oa(15176);
 }
 d = um(a) | 0;
 d = fb[c[a + 12 >> 2] & 255](a) | 0 | d;
 b = c[a + 92 >> 2] | 0;
 if (b | 0) jn(b);
 if (!e) jn(a);
 return d | 0;
}

function cc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = c[a + 8 >> 2] | 0;
 d = c[a + 16 >> 2] | 0;
 if (d) do {
  e = c[d + 4 >> 2] | 0;
  b = b >>> 0 < e >>> 0 ? e : b;
  d = c[d + 8 >> 2] | 0;
 } while ((d | 0) != 0);
 e = b - (c[a + 28 >> 2] | 0) | 0;
 b = e >> 4;
 b = b + 11 + ((b + 1 | 0) / 8 | 0) | 0;
 b = (b | 0) > 1e6 ? 1e6 : b;
 if ((e | 0) > 15999984) return;
 if ((b | 0) >= (c[a + 32 >> 2] | 0)) return;
 Jb(a, b);
 return;
}

function Bb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[b + 8 >> 2] & 15;
 switch (e | 0) {
 case 5:
  {
   e = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 case 7:
  {
   e = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 default:
  e = (c[a + 12 >> 2] | 0) + 252 + (e << 2) | 0;
 }
 e = c[e >> 2] | 0;
 if (!e) {
  d = 15088;
  return d | 0;
 }
 d = Cb(e, c[(c[a + 12 >> 2] | 0) + 184 + (d << 2) >> 2] | 0) | 0;
 return d | 0;
}

function $h(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = id(a, b) | 0;
 if (e | 0) if (Rf(a, b) | 0) {
  Qg(a, -1001e3, d);
  h = (Pd(a, -1, -2) | 0) == 0;
  wd(a, -3);
  if (!h) {
   h = e;
   i = g;
   return h | 0;
  }
 }
 h = Hd(a, Gd(a, b) | 0) | 0;
 c[f >> 2] = d;
 c[f + 4 >> 2] = h;
 Id(a, b, pd(a, 6119, f) | 0) | 0;
 h = 0;
 i = g;
 return h | 0;
}

function Td(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = c[1668 + ((Ud(a, 1, 6265, 1620) | 0) << 2) >> 2] | 0;
 b = xd(a, d, Vd(a, 2, 0) | 0) | 0;
 switch (d | 0) {
 case 3:
  {
   d = xd(a, 4, 0) | 0;
   ud(a, +(b | 0) + +(d | 0) * .0009765625);
   Wd(a, d);
   d = 2;
   return d | 0;
  }
 case 9:
 case 5:
  {
   jd(a, b);
   d = 1;
   return d | 0;
  }
 default:
  {
   Wd(a, b);
   d = 1;
   return d | 0;
  }
 }
 return 0;
}

function zd(a) {
 a = a | 0;
 Og(a, 6091, 145, 1);
 wd(a, -2);
 Og(a, 8105, 146, 1);
 wd(a, -2);
 Og(a, 8935, 147, 1);
 wd(a, -2);
 Og(a, 9233, 148, 1);
 wd(a, -2);
 Og(a, 9453, 149, 1);
 wd(a, -2);
 Og(a, 9922, 150, 1);
 wd(a, -2);
 Og(a, 10212, 151, 1);
 wd(a, -2);
 Og(a, 11005, 152, 1);
 wd(a, -2);
 Og(a, 11173, 153, 1);
 wd(a, -2);
 Og(a, 11372, 154, 1);
 wd(a, -2);
 Pg(a, -1001e3, 12078) | 0;
 wd(a, -2);
 return;
}

function uj(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 1056 | 0;
 g = j + 1040 | 0;
 h = j;
 f = Fg(b, 1, g) | 0;
 e = Zi(b, h, c[g >> 2] | 0) | 0;
 b = c[g >> 2] | 0;
 if (!b) {
  g = 0;
  _i(h, g);
  i = j;
  return 1;
 } else d = 0;
 do {
  a[e + d >> 0] = a[f + (b + ~d) >> 0] | 0;
  d = d + 1 | 0;
  b = c[g >> 2] | 0;
 } while (b >>> 0 > d >>> 0);
 _i(h, b);
 i = j;
 return 1;
}

function Xb(a, b) {
 a = a | 0;
 b = b | 0;
 yb(a, c[b + 12 >> 2] | 0, c[b + 48 >> 2] << 2, 0) | 0;
 yb(a, c[b + 16 >> 2] | 0, c[b + 56 >> 2] << 2, 0) | 0;
 yb(a, c[b + 8 >> 2] | 0, c[b + 44 >> 2] << 4, 0) | 0;
 yb(a, c[b + 20 >> 2] | 0, c[b + 52 >> 2] << 2, 0) | 0;
 yb(a, c[b + 24 >> 2] | 0, (c[b + 60 >> 2] | 0) * 12 | 0, 0) | 0;
 yb(a, c[b + 28 >> 2] | 0, c[b + 40 >> 2] << 3, 0) | 0;
 yb(a, b, 80, 0) | 0;
 return;
}

function Hf(a, b) {
 a = a | 0;
 b = b | 0;
 switch (c[b >> 2] | 0) {
 case 12:
  {
   c[b >> 2] = 6;
   b = b + 8 | 0;
   c[b >> 2] = (c[(c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b >> 2] << 2) >> 2] | 0) >>> 6 & 255;
   return;
  }
 case 13:
  {
   a = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b + 8 >> 2] << 2) | 0;
   c[a >> 2] = c[a >> 2] & 8388607 | 16777216;
   c[b >> 2] = 11;
   return;
  }
 default:
  return;
 }
}

function wj(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1056 | 0;
 h = k + 1040 | 0;
 j = k;
 g = Fg(b, 1, h) | 0;
 e = Zi(b, j, c[h >> 2] | 0) | 0;
 if (!(c[h >> 2] | 0)) {
  h = 0;
  _i(j, h);
  i = k;
  return 1;
 } else f = 0;
 do {
  a[e + f >> 0] = Zl(d[g + f >> 0] | 0) | 0;
  f = f + 1 | 0;
  b = c[h >> 2] | 0;
 } while (f >>> 0 < b >>> 0);
 _i(j, b);
 i = k;
 return 1;
}

function rj(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1056 | 0;
 h = k + 1040 | 0;
 j = k;
 g = Fg(b, 1, h) | 0;
 e = Zi(b, j, c[h >> 2] | 0) | 0;
 if (!(c[h >> 2] | 0)) {
  h = 0;
  _i(j, h);
  i = k;
  return 1;
 } else f = 0;
 do {
  a[e + f >> 0] = Cl(d[g + f >> 0] | 0) | 0;
  f = f + 1 | 0;
  b = c[h >> 2] | 0;
 } while (f >>> 0 < b >>> 0);
 _i(j, b);
 i = k;
 return 1;
}

function Yi(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 1040 | 0;
 c = h;
 d = Kd(b) | 0;
 e = Zi(b, c, d) | 0;
 if ((d | 0) < 1) {
  _i(c, d);
  i = h;
  return 1;
 } else g = 1;
 while (1) {
  f = Xf(b, g) | 0;
  if ((f & 255 | 0) != (f | 0)) Id(b, g, 10251) | 0;
  a[e + (g + -1) >> 0] = f;
  if ((g | 0) == (d | 0)) break; else g = g + 1 | 0;
 }
 _i(c, d);
 i = h;
 return 1;
}

function mh(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 c = La(c | 0) | 0;
 if (!c) {
  c = La(d | 0) | 0;
  if (c | 0) f = 3;
 } else f = 3;
 if ((f | 0) == 3) {
  Qg(a, -1001e3, 8624);
  f = Ed(a, -1) | 0;
  wd(a, -2);
  if (!f) {
   ah(a, ah(a, c, 8634, 8637) | 0, 8641, e) | 0;
   Qd(a, -2);
   kd(a, -2, b);
   return;
  }
 }
 Tf(a, e) | 0;
 kd(a, -2, b);
 return;
}

function nf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g;
 e = a + 48 | 0;
 d = c[e >> 2] | 0;
 of(d, b);
 pe(a);
 if ((c[a + 16 >> 2] | 0) == 288) {
  h = c[a + 24 >> 2] | 0;
  pe(a);
  a = Je(c[e >> 2] | 0, h) | 0;
  c[f + 16 >> 2] = -1;
  c[f + 20 >> 2] = -1;
  c[f >> 2] = 4;
  c[f + 8 >> 2] = a;
  mf(d, b, f);
  i = g;
  return;
 } else Ne(a, 288);
}

function Tf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 if (!b) {
  b = a + 8 | 0;
  a = c[b >> 2] | 0;
  c[a + 8 >> 2] = 0;
  c[b >> 2] = a + 16;
  b = 0;
  return b | 0;
 }
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 b = _c(a, b) | 0;
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 c[e >> 2] = b;
 c[e + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 b = b + 16 | 0;
 return b | 0;
}

function Vd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = g + 8 | 0;
 if ((Gd(a, b) | 0) < 1) {
  f = d;
  i = g;
  return f | 0;
 }
 d = hd(a, b, e) | 0;
 if (!(c[e >> 2] | 0)) {
  h = Hd(a, 3) | 0;
  e = Hd(a, Gd(a, b) | 0) | 0;
  c[f >> 2] = h;
  c[f + 4 >> 2] = e;
  Id(a, b, pd(a, 6119, f) | 0) | 0;
 }
 h = d;
 i = g;
 return h | 0;
}

function Jc(a, b, c) {
 a = a | 0;
 b = +b;
 c = +c;
 switch (a | 0) {
 case 0:
  {
   b = b + c;
   break;
  }
 case 1:
  {
   b = b - c;
   break;
  }
 case 2:
  {
   b = b * c;
   break;
  }
 case 3:
  {
   b = b / c;
   break;
  }
 case 4:
  {
   b = b - +M(+(b / c)) * c;
   break;
  }
 case 5:
  {
   b = +P(+b, +c);
   break;
  }
 case 6:
  {
   b = -b;
   break;
  }
 default:
  b = 0.0;
 }
 return +b;
}

function xl(a) {
 a = +a;
 var b = 0.0, d = 0.0, e = 0;
 h[k >> 3] = a;
 d = (c[k + 4 >> 2] | 0) < 0 ? -.5 : .5;
 b = +N(+a);
 h[k >> 3] = b;
 e = c[k + 4 >> 2] | 0;
 do if (e >>> 0 < 1082535490) {
  b = +tl(b);
  if (e >>> 0 >= 1072693248) {
   a = d * (b + b / (b + 1.0));
   break;
  }
  if (e >>> 0 >= 1045430272) a = d * (b * 2.0 - b * b / (b + 1.0));
 } else a = d * 2.0 * +ql(b); while (0);
 return +a;
}

function fm(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 a : do if (!d) b = 0; else {
  f = b;
  e = d;
  while (1) {
   d = a[f >> 0] | 0;
   b = a[c >> 0] | 0;
   if (d << 24 >> 24 != b << 24 >> 24) break;
   e = e + -1 | 0;
   if (!e) {
    b = 0;
    break a;
   } else {
    f = f + 1 | 0;
    c = c + 1 | 0;
   }
  }
  b = (d & 255) - (b & 255) | 0;
 } while (0);
 return b | 0;
}

function ac(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = e + 5 | 0;
 g = d[f >> 0] | 0;
 if (g & 7 | 0) return;
 if ((a[b + 62 >> 0] | 0) != 2) if ((d[b + 61 >> 0] | 0) >= 2) {
  a[f >> 0] = d[b + 60 >> 0] & 3 | g & 184;
  return;
 }
 a[f >> 0] = g & 187 | 4;
 f = c[e + 8 >> 2] | 0;
 if (!(c[f + 8 >> 2] & 64)) return;
 f = c[f >> 2] | 0;
 if (!(a[f + 5 >> 0] & 3)) return;
 Pb(b, f);
 return;
}

function Uh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 Yf(a, 1, 5);
 b = Vg(a, 1) | 0;
 c = Vd(a, 2, b) | 0;
 if ((c | 0) != (b | 0)) if ((c | 0) < 1 | (c | 0) > (b + 1 | 0)) Id(a, 1, 9311) | 0;
 Bd(a, 1, c);
 if ((c | 0) >= (b | 0)) {
  Md(a);
  hh(a, 1, c);
  return 1;
 }
 do {
  d = c;
  c = c + 1 | 0;
  Bd(a, 1, c);
  hh(a, 1, d);
 } while ((c | 0) != (b | 0));
 Md(a);
 hh(a, 1, b);
 return 1;
}

function ef(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = a[b + 4 >> 0] | 0;
 do if (e << 24 >> 24 == (a[d + 4 >> 0] | 0)) {
  if (e << 24 >> 24 == 4) {
   e = (b | 0) == (d | 0);
   break;
  }
  e = c[b + 12 >> 2] | 0;
  if ((b | 0) == (d | 0)) e = 1; else if ((e | 0) == (c[d + 12 >> 2] | 0)) e = (fm(b + 16 | 0, d + 16 | 0, e) | 0) == 0; else e = 0;
 } else e = 0; while (0);
 return e & 1 | 0;
}

function hl(a, b, c) {
 a = +a;
 b = +b;
 c = c | 0;
 var d = 0.0, e = 0.0, f = 0.0;
 e = a * a;
 d = e * (e * e) * (e * 1.58969099521155e-10 + -2.5050760253406863e-08) + (e * (e * 2.7557313707070068e-06 + -1.984126982985795e-04) + .00833333333332249);
 f = e * a;
 if (!c) d = f * (e * d + -.16666666666666632) + a; else d = a - (f * .16666666666666632 + (e * (b * .5 - f * d) - b));
 return +d;
}

function pn(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 do if (b >>> 0 < 1072243196) {
  if (b >>> 0 >= 1044381696) a = +yl(a, 0.0, 0);
 } else if (b >>> 0 > 2146435071) {
  a = a - a;
  break;
 } else {
  b = ol(a, d) | 0;
  a = +yl(+h[d >> 3], +h[d + 8 >> 3], b & 1);
  break;
 } while (0);
 i = e;
 return +a;
}

function Hb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = c[a + 32 >> 2] | 0;
 if ((d | 0) > 1e6) Ib(a, 6);
 b = b + 5 + ((c[a + 8 >> 2] | 0) - (c[a + 28 >> 2] | 0) >> 4) | 0;
 d = d << 1;
 d = (d | 0) > 1e6 ? 1e6 : d;
 d = (d | 0) < (b | 0) ? b : d;
 if ((d | 0) > 1e6) {
  Jb(a, 1000200);
  Fb(a, 7808, e);
 } else {
  Jb(a, d);
  i = e;
  return;
 }
}

function Ci(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = +d;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = g + 8 | 0;
 if ((Gd(a, b) | 0) < 1) {
  i = g;
  return +d;
 }
 d = +Eg(a, b, e);
 if (!(c[e >> 2] | 0)) {
  h = Hd(a, 3) | 0;
  e = Hd(a, Gd(a, b) | 0) | 0;
  c[f >> 2] = h;
  c[f + 4 >> 2] = e;
  Id(a, b, pd(a, 6119, f) | 0) | 0;
 }
 i = g;
 return +d;
}

function cf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((b | 0) == -1) return;
 e = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 d = (d << 6) + 64 & 16320;
 a = b;
 do {
  f = e + (a << 2) | 0;
  g = c[f >> 2] | 0;
  b = (g >>> 14) + -131071 | 0;
  c[f >> 2] = g & -16321 | d;
  a = (b | 0) == -1 ? -1 : a + 1 + b | 0;
 } while ((a | 0) != -1);
 return;
}

function oh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 ph(a, -1001e3, 8754, 1) | 0;
 Qg(a, -1, b);
 if ((Gd(a, -1) | 0) == 5) {
  Qd(a, -2);
  i = f;
  return;
 }
 wd(a, -2);
 Bd(a, -1001e3, 2);
 if (ph(a, 0, b, d) | 0) {
  c[e >> 2] = b;
  md(a, 8784, e) | 0;
 }
 Of(a, -1);
 kd(a, -3, b);
 Qd(a, -2);
 i = f;
 return;
}

function Jj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = zj(a, 1) | 0;
 d = zj(a, 2) | 0;
 c = Xf(a, 3) | 0;
 e = Vd(a, 4, 1) | 0;
 if ((c | 0) <= -1) Id(a, 3, 11052) | 0;
 if ((e | 0) <= 0) Id(a, 4, 11077) | 0;
 if ((e + c | 0) > 32) md(a, 11100, f) | 0;
 e = ~(-2 << e + -1);
 Aj(a, b & ~(e << c) | (d & e) << c);
 i = f;
 return 1;
}

function xm(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0;
 d = (qm(b, 43) | 0) == 0;
 c = a[b >> 0] | 0;
 d = d ? c << 24 >> 24 != 114 & 1 : 2;
 e = (qm(b, 120) | 0) == 0;
 d = e ? d : d | 128;
 b = (qm(b, 101) | 0) == 0;
 b = b ? d : d | 524288;
 b = c << 24 >> 24 == 114 ? b : b | 64;
 b = c << 24 >> 24 == 119 ? b | 512 : b;
 return (c << 24 >> 24 == 97 ? b | 1024 : b) | 0;
}

function Ll(b) {
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

function Cb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 a = (c[a + 16 >> 2] | 0) + (((1 << (d[a + 7 >> 0] | 0)) + -1 & c[b + 8 >> 2]) << 5) | 0;
 while (1) {
  if ((c[a + 24 >> 2] | 0) == 68) if ((c[a + 16 >> 2] | 0) == (b | 0)) break;
  a = c[a + 28 >> 2] | 0;
  if (!a) {
   a = 15088;
   e = 6;
   break;
  }
 }
 if ((e | 0) == 6) return a | 0;
 e = a;
 return e | 0;
}

function Pc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 8 | 0;
 e = c[1176 + ((c[b + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 b = c[1176 + ((c[d + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 if ((e | 0) == (b | 0)) {
  c[f >> 2] = e;
  Fb(a, 4889, f);
 } else {
  c[g >> 2] = e;
  c[g + 4 >> 2] = b;
  Fb(a, 4922, g);
 }
}

function bi(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = c[(_k() | 0) >> 2] | 0;
 if (b | 0) {
  jd(a, 1);
  f = 1;
  i = g;
  return f | 0;
 }
 Md(a);
 b = Ol(e) | 0;
 if (!d) Tf(a, b) | 0; else {
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  pd(a, 9541, f) | 0;
 }
 Wd(a, e);
 f = 3;
 i = g;
 return f | 0;
}

function Ag(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = i;
 i = i + 16 | 0;
 b = c;
 d = Gd(a, 2) | 0;
 Yf(a, 1, 5);
 switch (d | 0) {
 case 0:
 case 5:
  break;
 default:
  Id(a, 2, 11925) | 0;
 }
 if (!(Sf(a, 1, 7636) | 0)) {
  wd(a, 2);
  Bg(a, 1) | 0;
  d = 1;
  i = c;
  return d | 0;
 } else {
  d = md(a, 7956, b) | 0;
  i = c;
  return d | 0;
 }
 return 0;
}

function cl(a, b, d) {
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
 if ((Zk(Xa(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Mg(a) {
 a = a | 0;
 var b = 0;
 b = Kd(a) | 0;
 if ((b | 0) <= 1) Id(a, 2, 8055) | 0;
 Of(a, 1);
 Sd(a, 2, 1);
 jg(a, 2);
 b = pg(a, b + -2 | 0, -1, 1, 0, 157) | 0;
 if (!(hg(a, 1) | 0)) {
  wd(a, 0);
  jd(a, 0);
  Tf(a, 7808) | 0;
  a = 2;
  return a | 0;
 } else {
  jd(a, (b | 0) == 0 & 1);
  jg(a, 1);
  a = Kd(a) | 0;
  return a | 0;
 }
 return 0;
}

function Lc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 d = c[a + 8 >> 2] | 0;
 if ((d | 0) == 3) b = a; else if ((d & 15 | 0) == 4) {
  a = c[a >> 2] | 0;
  if (!(Ic(a + 16 | 0, c[a + 12 >> 2] | 0, e) | 0)) b = 0; else {
   h[b >> 3] = +h[e >> 3];
   c[b + 8 >> 2] = 3;
  }
 } else b = 0;
 i = f;
 return b | 0;
}

function vl(a) {
 a = +a;
 var b = 0;
 a = +N(+a);
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 do if (b >>> 0 < 1072049730) if (b >>> 0 < 1045430272) a = 1.0; else {
  a = +tl(a);
  a = a * a / ((a + 1.0) * 2.0) + 1.0;
 } else if (b >>> 0 < 1082535490) {
  a = +un(a);
  a = (a + 1.0 / a) * .5;
  break;
 } else {
  a = +ql(a);
  break;
 } while (0);
 return +a;
}

function sd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 if ((b | 0) > 1) {
  if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
  ec(a, b);
  return;
 } else {
  if (b | 0) return;
  b = a + 8 | 0;
  e = c[b >> 2] | 0;
  a = Lb(a, 17772, 0) | 0;
  c[e >> 2] = a;
  c[e + 8 >> 2] = d[a + 4 >> 0] | 0 | 64;
  c[b >> 2] = (c[b >> 2] | 0) + 16;
  return;
 }
}

function Sg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 f = Cd(c[(c[a + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 e = a + 8 | 0;
 g = c[e >> 2] | 0;
 c[e >> 2] = g + 16;
 b = _c(a, b) | 0;
 c[g >> 2] = b;
 c[g + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = c[e >> 2] | 0;
 zc(a, f, b + -16 | 0, b + -32 | 0);
 c[e >> 2] = (c[e >> 2] | 0) + -32;
 return;
}

function pe(a) {
 a = a | 0;
 var b = 0;
 c[a + 8 >> 2] = c[a + 4 >> 2];
 b = a + 32 | 0;
 if ((c[b >> 2] | 0) == 286) {
  c[a + 16 >> 2] = qe(a, a + 24 | 0) | 0;
  return;
 } else {
  a = a + 16 | 0;
  c[a >> 2] = c[b >> 2];
  c[a + 4 >> 2] = c[b + 4 >> 2];
  c[a + 8 >> 2] = c[b + 8 >> 2];
  c[a + 12 >> 2] = c[b + 12 >> 2];
  c[b >> 2] = 286;
  return;
 }
}

function ed(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0;
 j = i;
 i = i + 48 | 0;
 g = j;
 e = j + 8 | 0;
 f = b + 8 | 0;
 if ((c[f >> 2] | 0) != 3) {
  g = 0;
  i = j;
  return g | 0;
 }
 h[g >> 3] = +h[b >> 3];
 g = Lb(a, e, lm(e, 9776, g) | 0) | 0;
 c[b >> 2] = g;
 c[f >> 2] = d[g + 4 >> 0] | 0 | 64;
 g = 1;
 i = j;
 return g | 0;
}

function Wl(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24)) do {
  b = b + 1 | 0;
  c = c + 1 | 0;
  e = a[b >> 0] | 0;
  d = a[c >> 0] | 0;
 } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
 return (e & 255) - (d & 255) | 0;
}

function il(a, b) {
 a = +a;
 b = +b;
 var c = 0.0, d = 0.0, e = 0.0, f = 0.0;
 c = a * a;
 d = c * c;
 e = c * .5;
 f = 1.0 - e;
 return +(f + (1.0 - f - e + (c * (c * (c * (c * 2.480158728947673e-05 + -.001388888888887411) + .0416666666666666) + d * d * (c * (2.087572321298175e-09 - c * 1.1359647557788195e-11) + -2.7557314351390663e-07)) - a * b)));
}

function ag(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 d = Fd(a, 1, 0, 0) | 0;
 c = Fd(a, 2, 0, 0) | 0;
 b = (Gd(a, 3) | 0) != -1;
 if (Yd(a, d, c) | 0) {
  Md(a);
  Rd(a, -2);
  d = 2;
  return d | 0;
 }
 if (!b) {
  d = 1;
  return d | 0;
 }
 Of(a, b ? 3 : 0);
 if (bg(a, -2, 1) | 0) {
  d = 1;
  return d | 0;
 }
 wd(a, -2);
 d = 1;
 return d | 0;
}

function cj(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 48 | 0;
 j = g + 20 | 0;
 h = g;
 c[h >> 2] = a;
 c[h + 4 >> 2] = d;
 c[h + 8 >> 2] = e;
 c[h + 12 >> 2] = f;
 f = h + 16 | 0;
 dj(j);
 c[f >> 2] = gb[d & 3](a, j, 18, e) | 0;
 ej(b, h);
 i = g;
 return c[f >> 2] | 0;
}

function zj(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = vd(a, b, g) | 0;
 if (c[g >> 2] | 0) {
  i = f;
  return d | 0;
 }
 h = Hd(a, 3) | 0;
 g = Hd(a, Gd(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 Id(a, b, pd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function Xf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = hd(a, b, g) | 0;
 if (c[g >> 2] | 0) {
  i = f;
  return d | 0;
 }
 h = Hd(a, 3) | 0;
 g = Hd(a, Gd(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 Id(a, b, pd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function Nf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 e = f;
 d = f + 8 | 0;
 if (nd(a, b, d) | 0) {
  od(a, 5915, d) | 0;
  b = c[d + 20 >> 2] | 0;
  if ((b | 0) > 0) {
   c[e >> 2] = d + 36;
   c[e + 4 >> 2] = b;
   pd(a, 5961, e) | 0;
   i = f;
   return;
  }
 }
 qd(a, 17772, 0) | 0;
 i = f;
 return;
}

function de(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 e = cb[c[a + 8 >> 2] & 15](c[a + 16 >> 2] | 0, c[a + 12 >> 2] | 0, b) | 0;
 b = c[b >> 2] | 0;
 if ((e | 0) == 0 | (b | 0) == 0) {
  a = -1;
  i = f;
  return a | 0;
 }
 c[a >> 2] = b + -1;
 c[a + 4 >> 2] = e + 1;
 a = d[e >> 0] | 0;
 i = f;
 return a | 0;
}

function jc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = b + 8 | 0;
 e = c[f >> 2] | 0;
 if (e >>> 0 >= d >>> 0) {
  f = c[b >> 2] | 0;
  return f | 0;
 }
 d = d >>> 0 < 32 ? 32 : d;
 if ((d + 1 | 0) >>> 0 > 4294967293) Kb(a);
 a = yb(a, c[b >> 2] | 0, e, d) | 0;
 c[b >> 2] = a;
 c[f >> 2] = d;
 f = a;
 return f | 0;
}

function ue(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 c[(c[a + 60 >> 2] | 0) + 4 >> 2] = 0;
 ve(a, 92);
 a : do if ((d | 0) > 0) {
  g = 0;
  do {
   f = c[b + (g << 2) >> 2] | 0;
   if ((f | 0) == -1) break a;
   ve(a, f);
   g = g + 1 | 0;
  } while ((g | 0) < (d | 0));
 } while (0);
 ne(a, e, 289);
}

function hi(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = Kd(a) | 0;
 if ((c | 0) >= 19) Id(a, 17, 9599) | 0;
 Of(a, 1);
 Wd(a, c + -1 | 0);
 jd(a, b);
 if ((c | 0) > 1) b = 1; else {
  c = c + 2 | 0;
  _f(a, 166, c);
  return;
 }
 do {
  b = b + 1 | 0;
  Of(a, b);
 } while ((b | 0) != (c | 0));
 c = c + 2 | 0;
 _f(a, 166, c);
 return;
}

function Li(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0.0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = +Eg(a, b, g);
 if (c[g >> 2] | 0) {
  i = f;
  return +d;
 }
 h = Hd(a, 3) | 0;
 g = Hd(a, Gd(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 Id(a, b, pd(a, 6119, e) | 0) | 0;
 i = f;
 return +d;
}

function Rg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 e = Fc(a) | 0;
 f = a + 8 | 0;
 g = c[f >> 2] | 0;
 c[g >> 2] = e;
 c[g + 8 >> 2] = 69;
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 if (!((b | 0) > 0 | (d | 0) > 0)) return;
 Cc(a, e, b, d);
 return;
}

function fl(b, d, e) {
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
  if (Na(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = dl(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Fg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 d = dd(a, b, d) | 0;
 if (d | 0) {
  i = f;
  return d | 0;
 }
 h = Hd(a, 4) | 0;
 g = Hd(a, Gd(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 Id(a, b, pd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function zg(b) {
 b = b | 0;
 var c = 0, d = 0;
 c = Kd(b) | 0;
 if ((Gd(b, 1) | 0) == 4) if ((a[(dd(b, 1, 0) | 0) >> 0] | 0) == 35) {
  Wd(b, c + -1 | 0);
  d = 1;
  return d | 0;
 }
 d = Xf(b, 1) | 0;
 d = (d | 0) < 0 ? d + c | 0 : (d | 0) > (c | 0) ? c : d;
 if ((d | 0) <= 0) Id(b, 1, 7937) | 0;
 d = c - d | 0;
 return d | 0;
}

function Di(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) md(a, 9479, d) | 0;
 f = c[b >> 2] | 0;
 e = Ud(a, 2, 0, 2092) | 0;
 b = Vd(a, 3, 1024) | 0;
 b = bi(a, (Lm(f, 0, c[2108 + (e << 2) >> 2] | 0, b) | 0) == 0 & 1, 0) | 0;
 i = d;
 return b | 0;
}

function Yg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Qg(b, -1001e3, 8113);
 Qg(b, -1, c);
 c = id(b, -1) | 0;
 wd(b, -3);
 if (!c) {
  qd(b, 8158, 58) | 0;
  d = 1;
  return d | 0;
 }
 if ((a[d >> 0] | 0) == 42) {
  jd(b, 1);
  d = 0;
  return d | 0;
 } else {
  qd(b, 8158, 58) | 0;
  d = 2;
  return d | 0;
 }
 return 0;
}

function Ye(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = b + 48 | 0;
 e = (d[g >> 0] | 0) + e | 0;
 f = (c[b >> 2] | 0) + 78 | 0;
 if ((e | 0) <= (d[f >> 0] | 0 | 0)) {
  b = e & 255;
  a[g >> 0] = b;
  return;
 }
 if ((e | 0) > 249) me(c[b + 12 >> 2] | 0, 7025);
 b = e & 255;
 a[f >> 0] = b;
 a[g >> 0] = b;
 return;
}

function Gk(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 b = f;
 c = Xf(a, 2) | 0;
 Yf(a, 1, 6);
 Of(a, 1);
 od(a, 11773, b) | 0;
 if ((c | 0) > 0) {
  if ((c | 0) > (d[b + 32 >> 0] | 0 | 0)) e = 3;
 } else e = 3;
 if ((e | 0) == 3) Id(a, 2, 11776) | 0;
 Ik(a, Hk(a, 1, c) | 0);
 i = f;
 return 1;
}

function Zc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0;
 f = b + 12 | 0;
 e = 0;
 do {
  g = _c(b, c[1224 + (e << 2) >> 2] | 0) | 0;
  c[(c[f >> 2] | 0) + 184 + (e << 2) >> 2] = g;
  g = (c[(c[f >> 2] | 0) + 184 + (e << 2) >> 2] | 0) + 5 | 0;
  a[g >> 0] = d[g >> 0] | 0 | 32;
  e = e + 1 | 0;
 } while ((e | 0) != 17);
 return;
}

function Mk(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = (d | 0) == 0 | (e | 0) == 0;
 g = c[b + 16 >> 2] | 0;
 if (a[g + 18 >> 0] & 1) c[b + 20 >> 2] = c[g + 28 >> 2];
 c[b + 52 >> 2] = h ? 0 : d;
 c[b + 44 >> 2] = f;
 c[b + 48 >> 2] = f;
 a[b + 40 >> 0] = h ? 0 : e & 255;
 return 1;
}

function Gj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 b = zj(a, 1) | 0;
 c = Xf(a, 2) | 0;
 d = Vd(a, 3, 1) | 0;
 if ((c | 0) <= -1) Id(a, 2, 11052) | 0;
 if ((d | 0) <= 0) Id(a, 3, 11077) | 0;
 if ((d + c | 0) > 32) md(a, 11100, e) | 0;
 Aj(a, b >>> c & ~(-2 << d + -1));
 i = e;
 return 1;
}

function Vb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 f = c[e + 8 >> 2] | 0;
 do if (!(f & 64)) e = 0; else {
  e = c[e >> 2] | 0;
  if ((f & 15 | 0) != 4) {
   e = (d[e + 5 >> 0] | 0) & 3;
   break;
  }
  if (!e) e = 0; else if (!(a[e + 5 >> 0] & 3)) e = 0; else {
   Pb(b, e);
   e = 0;
  }
 } while (0);
 return e | 0;
}

function Nm(a) {
 a = a | 0;
 var b = 0;
 if (!(c[a >> 2] & 128)) b = 1; else b = (c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0 ? 2 : 1;
 b = cb[c[a + 40 >> 2] & 15](a, 0, b) | 0;
 if ((b | 0) >= 0) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) + (c[a + 20 >> 2] | 0) - (c[a + 28 >> 2] | 0) | 0;
 return b | 0;
}

function In(a, b) {
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

function fg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 b = i;
 i = i + 16 | 0;
 gg(a, 2, 7689);
 Of(a, 1);
 Kf(a, 0, 1, 0, 0);
 if (!(Gd(a, -1) | 0)) {
  wd(a, -2);
  c[d >> 2] = 0;
  d = 0;
  i = b;
  return d | 0;
 }
 if (!(Mf(a, -1) | 0)) md(a, 7735, b) | 0;
 jg(a, 5);
 d = dd(a, 5, d) | 0;
 i = b;
 return d | 0;
}

function _d(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 a = c[b >> 2] | 0;
 if ((a | 0) > 0) {
  c[d >> 2] = a;
  c[b >> 2] = 0;
  b = b + 8 | 0;
  return b | 0;
 }
 a = b + 4 | 0;
 if (sm(c[a >> 2] | 0) | 0) {
  b = 0;
  return b | 0;
 }
 b = b + 8 | 0;
 c[d >> 2] = Qm(b, 1, 1024, c[a >> 2] | 0) | 0;
 return b | 0;
}

function yj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = zj(a, 1) | 0;
 c = Xf(a, 2) | 0;
 if ((b | 0) < 0 & (c | 0) > -1) {
  if ((c | 0) > 31) b = -1; else b = b >>> c | ~(-1 >>> c);
  Aj(a, b);
  return 1;
 }
 if ((c | 0) > 0) b = (c | 0) > 31 ? 0 : b >>> c; else b = (c | 0) < -31 ? 0 : b << 0 - c;
 Aj(a, b);
 return 1;
}

function dc(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0;
 i = c[b + 12 >> 2] | 0;
 f = (yb(b, 0, e & 15, f) | 0) + h | 0;
 h = (g | 0) == 0 ? i + 68 | 0 : g;
 a[f + 5 >> 0] = (d[i + 60 >> 0] | 0) & 3;
 a[f + 4 >> 0] = e;
 c[f >> 2] = c[h >> 2];
 c[h >> 2] = f;
 return f | 0;
}

function Rk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 if ((Gd(a, 1) | 0) == 8) {
  c = 1;
  e = yh(a, 1) | 0;
 } else {
  c = 0;
  e = a;
 }
 b = c + 1 | 0;
 d = dd(a, b, 0) | 0;
 if (!d) if ((Gd(a, b) | 0) >= 1) {
  Of(a, b);
  return 1;
 }
 Sk(a, e, d, Vd(a, c | 2, (e | 0) == (a | 0) & 1) | 0);
 return 1;
}

function sg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = Cd(c[(c[a + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 f = a + 8 | 0;
 g = c[f >> 2] | 0;
 c[f >> 2] = g + 16;
 b = _c(a, b) | 0;
 c[g >> 2] = b;
 c[g + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = (c[f >> 2] | 0) + -16 | 0;
 uc(a, e, b, b);
 return;
}

function Ig(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 b = Jg(a, b) | 0;
 if (!(Rf(a, b) | 0)) {
  c = 0;
  return c | 0;
 }
 Tf(a, c) | 0;
 Uf(a, -2);
 if (!(Gd(a, -1) | 0)) {
  wd(a, -3);
  c = 0;
  return c | 0;
 } else {
  Qd(a, -2);
  Of(a, b);
  Kf(a, 1, 1, 0, 0);
  c = 1;
  return c | 0;
 }
 return 0;
}

function _h(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 16 | 0;
 if ((Gd(a, 1) | 0) == -1) Qg(a, -1001e3, 9462);
 if (!(c[($h(a, 1, 9473) | 0) + 4 >> 2] | 0)) md(a, 9479, b) | 0;
 e = ($h(a, 1, 9473) | 0) + 4 | 0;
 d = c[e >> 2] | 0;
 c[e >> 2] = 0;
 a = fb[d & 255](a) | 0;
 i = b;
 return a | 0;
}

function mg(a) {
 a = a | 0;
 var b = 0;
 Qf(a, 1);
 Md(a);
 Rd(a, 1);
 b = pg(a, (Kd(a) | 0) + -2 | 0, -1, 0, 0, 157) | 0;
 if (!(hg(a, 1) | 0)) {
  wd(a, 0);
  jd(a, 0);
  Tf(a, 7808) | 0;
  b = 2;
  return b | 0;
 } else {
  jd(a, (b | 0) == 0 & 1);
  jg(a, 1);
  b = Kd(a) | 0;
  return b | 0;
 }
 return 0;
}

function Yf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if ((Gd(a, b) | 0) == (d | 0)) {
  i = f;
  return;
 }
 g = Hd(a, d) | 0;
 d = Hd(a, Gd(a, b) | 0) | 0;
 c[e >> 2] = g;
 c[e + 4 >> 2] = d;
 Id(a, b, pd(a, 6119, e) | 0) | 0;
 i = f;
 return;
}

function Rm(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = _(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Tl(e) | 0) == 0;
  a = Kl(a, f, e) | 0;
  if (!g) bl(e);
 } else a = Kl(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function Hn(b) {
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

function oi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 b = i;
 i = i + 16 | 0;
 d = Fg(a, 1, 0) | 0;
 Fd(a, 2, 9564, 0) | 0;
 f = bh(a, 8) | 0;
 e = f + 4 | 0;
 c[e >> 2] = 0;
 ei(a, 9473);
 md(a, 9713, b) | 0;
 c[f >> 2] = 0;
 c[e >> 2] = 167;
 a = bi(a, 0, d) | 0;
 i = b;
 return a | 0;
}

function Ue(a) {
 a = a | 0;
 var b = 0, c = 0;
 if (a >>> 0 < 8) {
  c = a;
  return c | 0;
 }
 if (a >>> 0 > 15) {
  b = 1;
  do {
   c = a + 1 | 0;
   a = c >>> 1;
   b = b + 1 | 0;
  } while (c >>> 0 > 31);
  c = b << 3;
  b = a;
 } else {
  c = 8;
  b = a;
 }
 c = c | b + -8;
 return c | 0;
}

function gg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if (hg(a, b + 20 | 0) | 0) {
  i = f;
  return;
 }
 if (!d) {
  md(a, 7808, f + 8 | 0) | 0;
  i = f;
  return;
 } else {
  c[e >> 2] = d;
  md(a, 7715, e) | 0;
  i = f;
  return;
 }
}

function vb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var e = 0;
 c = c ^ b;
 e = (b >>> 5) + 1 | 0;
 if (e >>> 0 > b >>> 0) {
  a = c;
  return a | 0;
 }
 do {
  c = (c << 5) + (c >>> 2) + (d[a + (b + -1) >> 0] | 0) ^ c;
  b = b - e | 0;
 } while (b >>> 0 >= e >>> 0);
 return c | 0;
}

function jm(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 if (!(c[a + 8 >> 2] | 0)) if (!(km(a) | 0)) e = 3; else b = -1; else e = 3;
 if ((e | 0) == 3) if ((cb[c[a + 32 >> 2] & 15](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = f;
 return b | 0;
}

function Ym(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e + 8 | 0;
 b = e;
 c[b >> 2] = a;
 b = Zk(Ra(10, b | 0) | 0) | 0;
 if (!b) b = 0; else if ((c[(_k() | 0) >> 2] | 0) == 21) {
  c[d >> 2] = a;
  b = Zk(ra(40, d | 0) | 0) | 0;
 }
 i = e;
 return b | 0;
}

function qd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 b = Lb(a, b, e) | 0;
 e = a + 8 | 0;
 a = c[e >> 2] | 0;
 c[a >> 2] = b;
 c[a + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[e >> 2] = (c[e >> 2] | 0) + 16;
 return b + 16 | 0;
}

function ck(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0, e = 0.0;
 d = Kd(a) | 0;
 b = +Li(a, 1);
 if ((d | 0) < 2) {
  ud(a, b);
  return 1;
 } else c = 2;
 while (1) {
  e = +Li(a, c);
  b = e < b ? e : b;
  if ((c | 0) == (d | 0)) break; else c = c + 1 | 0;
 }
 ud(a, b);
 return 1;
}

function bk(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0, e = 0.0;
 d = Kd(a) | 0;
 b = +Li(a, 1);
 if ((d | 0) < 2) {
  ud(a, b);
  return 1;
 } else c = 2;
 while (1) {
  e = +Li(a, c);
  b = e > b ? e : b;
  if ((c | 0) == (d | 0)) break; else c = c + 1 | 0;
 }
 ud(a, b);
 return 1;
}

function Yb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if ((c[b + 8 >> 2] | 0) == (b + 16 | 0)) {
  yb(a, b, 32, 0) | 0;
  return;
 }
 d = b + 16 | 0;
 e = c[d + 4 >> 2] | 0;
 c[e + 16 >> 2] = c[d >> 2];
 c[(c[d >> 2] | 0) + 16 + 4 >> 2] = e;
 yb(a, b, 32, 0) | 0;
 return;
}

function xh(a) {
 a = a | 0;
 var b = 0;
 b = yh(a, 1) | 0;
 if (!b) Id(a, 1, 8959) | 0;
 b = zh(a, b, (Kd(a) | 0) + -1 | 0) | 0;
 if ((b | 0) < 0) {
  jd(a, 0);
  Rd(a, -2);
  a = 2;
  return a | 0;
 } else {
  jd(a, 1);
  Rd(a, ~b);
  a = b + 1 | 0;
  return a | 0;
 }
 return 0;
}

function ai(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Qg(a, -1001e3, 9462);
 b = id(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9466;
  md(a, 9514, d) | 0;
 }
 d = bi(a, (um(c[b >> 2] | 0) | 0) == 0 & 1, 0) | 0;
 i = e;
 return d | 0;
}

function Lm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 d = b + 75 | 0;
 a[d >> 0] = -1;
 switch (e | 0) {
 case 2:
  {
   c[b + 48 >> 2] = 0;
   break;
  }
 case 1:
  {
   a[d >> 0] = 10;
   break;
  }
 default:
  {}
 }
 c[b >> 2] = c[b >> 2] | 64;
 return 0;
}

function Gi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  qd(a, 9851, 13) | 0;
  i = e;
  return 1;
 } else {
  c[d >> 2] = c[b >> 2];
  pd(a, 9865, d) | 0;
  i = e;
  return 1;
 }
 return 0;
}

function ob(b) {
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

function gm(a, b) {
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

function uk(a, b) {
 a = a | 0;
 b = b | 0;
 Pg(a, -1001e3, 11434) | 0;
 Hh(a) | 0;
 Uf(a, -2);
 if ((Gd(a, -1) | 0) != 6) return;
 Tf(a, c[2860 + (c[b >> 2] << 2) >> 2] | 0) | 0;
 b = c[b + 20 >> 2] | 0;
 if ((b | 0) > -1) Wd(a, b); else Md(a);
 Kf(a, 2, 0, 0, 0);
 return;
}

function ui(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = id(a, b) | 0;
 if (!d) {
  b = 0;
  return b | 0;
 }
 if (!(Rf(a, b) | 0)) {
  b = 0;
  return b | 0;
 }
 Qg(a, -1001e3, c);
 b = (Pd(a, -1, -2) | 0) == 0;
 wd(a, -3);
 b = b ? 0 : d;
 return b | 0;
}

function qi(a, b) {
 a = a | 0;
 b = b | 0;
 switch (b | 0) {
 case -1:
  {
   b = c[(_k() | 0) >> 2] | 0;
   Md(a);
   Tf(a, Ol(b) | 0) | 0;
   Wd(a, b);
   return 3;
  }
 case 0:
  {
   jd(a, 1);
   break;
  }
 default:
  Md(a);
 }
 Tf(a, 10058) | 0;
 Wd(a, b);
 return 3;
}

function Xh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(Gd(a, 2) | 0)) {
  c = Yh(a, b, c, 1) | 0;
  return c | 0;
 } else {
  Of(a, 2);
  Of(a, b + -1 | 0);
  Of(a, c + -2 | 0);
  Kf(a, 2, 1, 0, 0);
  c = Ed(a, -1) | 0;
  wd(a, -2);
  return c | 0;
 }
 return 0;
}

function Bj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = Kd(a) | 0;
 if ((c | 0) < 1) {
  d = -1;
  Aj(a, d);
  return 1;
 } else {
  d = 1;
  b = -1;
 }
 while (1) {
  b = (zj(a, d) | 0) & b;
  if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
 }
 Aj(a, b);
 return 1;
}

function $i(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 1056 | 0;
 b = c + 8 | 0;
 Yf(a, 1, 6);
 wd(a, 1);
 $g(a, b);
 if (!(bj(a, 2, b) | 0)) {
  eh(b);
  b = 1;
  i = c;
  return b | 0;
 } else {
  b = md(a, 10275, c) | 0;
  i = c;
  return b | 0;
 }
 return 0;
}

function Ej(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = Kd(a) | 0;
 if ((c | 0) < 1) {
  d = 0;
  Aj(a, d);
  return 1;
 } else {
  d = 1;
  b = 0;
 }
 while (1) {
  b = (zj(a, d) | 0) ^ b;
  if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
 }
 Aj(a, b);
 return 1;
}

function ak(a) {
 a = a | 0;
 var b = 0.0, c = 0.0;
 b = +Li(a, 1);
 do if ((Gd(a, 2) | 0) < 1) b = +vn(b); else {
  c = +Li(a, 2);
  if (c == 10.0) {
   b = +ll(b);
   break;
  } else {
   b = +vn(b);
   b = b / +vn(c);
   break;
  }
 } while (0);
 ud(a, b);
 return 1;
}

function Jd(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = Kd(a) | 0;
 od(a, 8832, b) | 0;
 Bd(a, -1001e3, 2);
 b = c + 1 | 0;
 if (!(Ld(a, b, 2) | 0)) {
  wd(a, c);
  c = 0;
  return c | 0;
 } else {
  Sd(a, -1, b);
  wd(a, -3);
  c = 1;
  return c | 0;
 }
 return 0;
}

function Fj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = Kd(a) | 0;
 if ((c | 0) < 1) b = 1; else {
  d = 1;
  b = -1;
  while (1) {
   b = (zj(a, d) | 0) & b;
   if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
  }
  b = (b | 0) != 0;
 }
 jd(a, b & 1);
 return 1;
}

function Dj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = Kd(a) | 0;
 if ((c | 0) < 1) {
  d = 0;
  Aj(a, d);
  return 1;
 } else {
  d = 1;
  b = 0;
 }
 while (1) {
  b = zj(a, d) | 0 | b;
  if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
 }
 Aj(a, b);
 return 1;
}

function Sh(a) {
 a = a | 0;
 var b = 0;
 b = Kd(a) | 0;
 Rg(a, b, 1);
 Wd(a, b);
 kd(a, -2, 9377);
 if ((b | 0) <= 0) return 1;
 Of(a, 1);
 hh(a, -2, 1);
 jg(a, 1);
 if ((b | 0) <= 1) return 1;
 do {
  hh(a, 1, b);
  b = b + -1 | 0;
 } while ((b | 0) > 1);
 return 1;
}

function Bc(a) {
 a = a | 0;
 var b = 0, c = 0;
 a = a + -1 | 0;
 if (a >>> 0 > 255) {
  b = 0;
  while (1) {
   b = b + 8 | 0;
   c = a >>> 8;
   if (a >>> 0 > 65535) a = c; else {
    a = c;
    break;
   }
  }
 } else b = 0;
 return (d[4559 + a >> 0] | 0) + b | 0;
}

function bh(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 b = ch(a, b, 0) | 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = b;
 c[d + 8 >> 2] = 71;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return b + 24 | 0;
}

function Sf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(Rf(a, b) | 0)) {
  b = 0;
  return b | 0;
 }
 Tf(a, c) | 0;
 Uf(a, -2);
 if (!(Gd(a, -1) | 0)) {
  wd(a, -3);
  b = 0;
  return b | 0;
 } else {
  Qd(a, -2);
  b = 1;
  return b | 0;
 }
 return 0;
}

function vi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Qg(a, -1001e3, 9462);
 b = id(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9466;
  md(a, 9514, d) | 0;
 }
 d = wi(a, c[b >> 2] | 0, 1) | 0;
 i = e;
 return d | 0;
}

function ri(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Qg(a, -1001e3, 9554);
 b = id(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9558;
  md(a, 9514, d) | 0;
 }
 d = ji(a, c[b >> 2] | 0, 1) | 0;
 i = e;
 return d | 0;
}

function Hl(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 En(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function bn() {
 var a = 0, b = 0, d = 0;
 b = 15136;
 b = Ln(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
 b = yn(b | 0, C | 0, 1, 0) | 0;
 a = C;
 d = 15136;
 c[d >> 2] = b;
 c[d + 4 >> 2] = a;
 a = Cn(b | 0, a | 0, 33) | 0;
 return a | 0;
}

function Dd(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 if (!(Ed(a, 1) | 0)) {
  c[b >> 2] = Fd(a, 2, 6101, 0) | 0;
  b = md(a, 9677, b) | 0;
  i = d;
  return b | 0;
 } else {
  b = Kd(a) | 0;
  i = d;
  return b | 0;
 }
 return 0;
}

function si(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = bh(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 ei(a, 9473);
 c[d >> 2] = 0;
 c[b >> 2] = 165;
 b = Wm() | 0;
 c[d >> 2] = b;
 if (b | 0) {
  d = 1;
  return d | 0;
 }
 d = bi(a, 0, 0) | 0;
 return d | 0;
}

function Qh(a) {
 a = a | 0;
 var b = 0.0, c = 0.0;
 Yf(a, 1, 5);
 Md(a);
 b = 0.0;
 a : while (1) {
  do {
   if (!(Nd(a, 1) | 0)) break a;
   wd(a, -2);
  } while ((Gd(a, -1) | 0) != 3);
  c = +Eg(a, -1, 0);
  b = c > b ? c : b;
 }
 ud(a, b);
 return 1;
}

function Dn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 while ((f | 0) < (d | 0)) {
  e = c[b + (f << 3) >> 2] | 0;
  if (!e) break;
  if ((e | 0) == (a | 0)) return c[b + ((f << 3) + 4) >> 2] | 0;
  f = f + 1 | 0;
 }
 return 0;
}

function gh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 b = Fg(a, 1, 0) | 0;
 Qg(a, -1001e3, 12078);
 Qg(a, -1, b);
 if (Gd(a, -1) | 0) {
  i = e;
  return 1;
 }
 c[d >> 2] = b;
 pd(a, 8283, d) | 0;
 i = e;
 return 1;
}

function Lj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = zj(a, 1) | 0;
 c = Xf(a, 2) | 0;
 if ((c | 0) > 0) {
  c = (c | 0) > 31 ? 0 : b >>> c;
  Aj(a, c);
  return 1;
 } else {
  c = (c | 0) < -31 ? 0 : b << 0 - c;
  Aj(a, c);
  return 1;
 }
 return 0;
}

function Zg(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 d = Fg(a, 1, 0) | 0;
 c = Fg(a, 2, 0) | 0;
 b = Fd(a, 3, 14775, 0) | 0;
 if (_g(a, d, c, b, Fd(a, 4, 8240, 0) | 0) | 0) {
  d = 1;
  return d | 0;
 }
 Md(a);
 Rd(a, -2);
 d = 2;
 return d | 0;
}

function ng(a) {
 a = a | 0;
 var b = 0;
 b = og(a, 0) | 0;
 if (!(hg(a, 1) | 0)) {
  wd(a, 0);
  jd(a, 0);
  Tf(a, 7808) | 0;
  b = 2;
  return b | 0;
 } else {
  jd(a, (b | 0) == 1 & 1);
  jg(a, 1);
  b = Kd(a) | 0;
  return b | 0;
 }
 return 0;
}

function Zf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (Sf(a, 1, b) | 0) {
  Of(a, 1);
  Kf(a, 1, 3, 0, 0);
  return;
 }
 Yf(a, 1, 5);
 _f(a, d, 0);
 Of(a, 1);
 if (!c) {
  Md(a);
  return;
 } else {
  Wd(a, 0);
  return;
 }
}

function _i(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = a + 8 | 0;
 d = (c[e >> 2] | 0) + b | 0;
 c[e >> 2] = d;
 b = c[a + 12 >> 2] | 0;
 qd(b, c[a >> 2] | 0, d) | 0;
 if ((c[a >> 2] | 0) == (a + 16 | 0)) return;
 Qd(b, -2);
 return;
}

function Fi(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) return 0;
 if (!(c[b >> 2] | 0)) return 0;
 d = ($h(a, 1, 9473) | 0) + 4 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = 0;
 fb[b & 255](a) | 0;
 return 0;
}

function Bf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 b = b << 6;
 if ((c | 0) < 262144) {
  c = De(a, b | c << 14 | 1) | 0;
  return c | 0;
 } else {
  b = De(a, b | 2) | 0;
  De(a, c << 6 | 39) | 0;
  c = b;
  return c | 0;
 }
 return 0;
}

function Ec(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 b = c[b + 12 >> 2] | 0;
 if ((d[b + 61 >> 0] | 0) < 2) {
  Pb(b, f);
  return;
 } else {
  f = e + 5 | 0;
  a[f >> 0] = (d[b + 60 >> 0] | 0) & 3 | (d[f >> 0] | 0) & 184;
  return;
 }
}

function Ef(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 e = (d[b + 48 >> 0] | 0) + e | 0;
 f = (c[b >> 2] | 0) + 78 | 0;
 if ((e | 0) <= (d[f >> 0] | 0 | 0)) return;
 if ((e | 0) > 249) me(c[b + 12 >> 2] | 0, 7025);
 a[f >> 0] = e;
 return;
}

function $c(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = 0;
 do {
  f = _c(b, c[1292 + (e << 2) >> 2] | 0) | 0;
  g = f + 5 | 0;
  a[g >> 0] = d[g >> 0] | 0 | 32;
  e = e + 1 | 0;
  a[f + 6 >> 0] = e;
 } while ((e | 0) != 22);
 return;
}

function bj(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[a + 8 >> 2] | 0;
 if ((c[e + -8 >> 2] | 0) != 70) {
  b = 1;
  return b | 0;
 }
 b = cj(a, c[(c[e + -16 >> 2] | 0) + 12 >> 2] | 0, b, d, 0) | 0;
 return b | 0;
}

function Og(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 _f(a, c, 0);
 Tf(a, b) | 0;
 Kf(a, 1, 1, 0, 0);
 Pg(a, -1001e3, 8754) | 0;
 Of(a, -2);
 kd(a, -2, b);
 wd(a, -2);
 if (!d) return;
 Of(a, -1);
 Sg(a, b);
 return;
}

function Vi(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 32 | 0;
 b = c + 4 | 0;
 if (!(Pm(b) | 0)) {
  b = md(a, 10175, c) | 0;
  i = c;
  return b | 0;
 } else {
  Tf(a, b) | 0;
  b = 1;
  i = c;
  return b | 0;
 }
 return 0;
}

function bc(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = (c[a + 16 >> 2] | 0) + 12 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = 0;
 if (!b) return;
 do {
  d = b;
  b = c[b + 12 >> 2] | 0;
  yb(a, d, 40, 0) | 0;
 } while ((b | 0) != 0);
 return;
}

function Zb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[b + 16 >> 2] | 0;
 if ((e | 0) != 15104) yb(a, e, 32 << (d[b + 7 >> 0] | 0), 0) | 0;
 yb(a, c[b + 12 >> 2] | 0, c[b + 28 >> 2] << 4, 0) | 0;
 yb(a, b, 32, 0) | 0;
 return;
}

function ti(a) {
 a = a | 0;
 var b = 0;
 Qf(a, 1);
 b = ui(a, 1, 9473) | 0;
 if (!b) {
  Md(a);
  return 1;
 }
 if (!(c[b + 4 >> 2] | 0)) {
  qd(a, 9753, 11) | 0;
  return 1;
 } else {
  qd(a, 9765, 4) | 0;
  return 1;
 }
 return 0;
}

function ch(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 if (b >>> 0 > 4294967269) Kb(a); else {
  a = dc(a, 7, b + 24 | 0, 0, 0) | 0;
  c[a + 16 >> 2] = b;
  c[a + 8 >> 2] = 0;
  c[a + 12 >> 2] = d;
  return a | 0;
 }
 return 0;
}

function yc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = c[a + 12 >> 2] | 0;
 if ((a | 0) == (b | 0)) d = 1; else if ((d | 0) == (c[b + 12 >> 2] | 0)) d = (fm(a + 16 | 0, b + 16 | 0, d) | 0) == 0; else d = 0;
 return d & 1 | 0;
}

function pd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 c[e >> 2] = d;
 d = Gb(a, b, e) | 0;
 i = f;
 return d | 0;
}

function dg(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 c[h >> 2] = b;
 c[h + 4 >> 2] = d;
 d = $d(a, 8, h, e, f) | 0;
 i = g;
 return d | 0;
}

function Fc(b) {
 b = b | 0;
 b = dc(b, 5, 32, 0, 0) | 0;
 c[b + 8 >> 2] = 0;
 a[b + 6 >> 0] = -1;
 c[b + 12 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[b + 16 >> 2] = 15104;
 a[b + 7 >> 0] = 0;
 c[b + 20 >> 2] = 15104;
 return b | 0;
}

function Dh(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0;
 f = a + 8 | 0;
 c[f >> 2] = e;
 b = _c(a, b) | 0;
 c[e >> 2] = b;
 c[e + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 Ib(a, -1);
}

function kl(a, b) {
 a = +a;
 b = +b;
 var d = 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] | 0;
 b = +N(+a);
 h[k >> 3] = b;
 d = d & -2147483648 | c[k + 4 >> 2];
 c[k >> 2] = c[k >> 2];
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Pg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Qg(a, b, c);
 if ((Gd(a, -1) | 0) == 5) {
  b = 1;
  return b | 0;
 }
 wd(a, -2);
 b = Jg(a, b) | 0;
 Rg(a, 0, 0);
 Of(a, -1);
 kd(a, b, c);
 b = 0;
 return b | 0;
}

function om(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = c & 255;
 do {
  if (!d) {
   c = 0;
   break;
  }
  d = d + -1 | 0;
  c = b + d | 0;
 } while ((a[c >> 0] | 0) != e << 24 >> 24);
 return c | 0;
}

function yi(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) md(a, 9479, d) | 0;
 b = bi(a, (um(c[b >> 2] | 0) | 0) == 0 & 1, 0) | 0;
 i = d;
 return b | 0;
}

function Xg(a) {
 a = a | 0;
 var b = 0;
 b = Fg(a, 1, 0) | 0;
 b = Yg(a, b, Fg(a, 2, 0) | 0) | 0;
 if (!b) {
  b = 1;
  return b | 0;
 }
 Md(a);
 Rd(a, -2);
 Tf(a, (b | 0) == 1 ? 8217 : 8224) | 0;
 b = 3;
 return b | 0;
}

function Kh(a) {
 a = a | 0;
 var b = 0;
 b = yh(a, -1001001) | 0;
 b = zh(a, b, Kd(a) | 0) | 0;
 if ((b | 0) >= 0) return b | 0;
 if (!(Mf(a, -1) | 0)) td(a) | 0;
 Nf(a, 1);
 Rd(a, -2);
 sd(a, 2);
 td(a) | 0;
 return 0;
}

function Hh(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = a + 8 | 0;
 d = c[b >> 2] | 0;
 c[d >> 2] = a;
 c[d + 8 >> 2] = 72;
 c[b >> 2] = (c[b >> 2] | 0) + 16;
 return (c[(c[a + 12 >> 2] | 0) + 172 >> 2] | 0) == (a | 0) | 0;
}

function Ei(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) md(a, 9479, d) | 0;
 b = c[b >> 2] | 0;
 Of(a, 1);
 b = wi(a, b, 2) | 0;
 i = d;
 return b | 0;
}

function Vg(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d + 4 | 0;
 Wg(a, b);
 b = hd(a, -1, e) | 0;
 if (!(c[e >> 2] | 0)) md(a, 8120, d) | 0;
 wd(a, -2);
 i = d;
 return b | 0;
}

function Uc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = d << 2;
 b = dc(b, 6, e + 16 | 0, 0, 0) | 0;
 c[b + 12 >> 2] = 0;
 a[b + 6 >> 0] = d;
 if (!d) return b | 0;
 zn(b + 16 | 0, 0, e | 0) | 0;
 return b | 0;
}

function Ij(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = zj(a, 1) | 0;
 c = Xf(a, 2) | 0;
 if ((c | 0) < 0) if ((c | 0) < -31) b = 0; else b = b >>> (0 - c | 0); else b = (c | 0) > 31 ? 0 : b << c;
 Aj(a, b);
 return 1;
}

function Tk(a) {
 a = a | 0;
 var b = 0;
 b = dd(a, 1, 0) | 0;
 if (b | 0) {
  Sk(a, a, b, 1);
  return 1;
 }
 if ((Gd(a, 1) | 0) < 1) return 1;
 if (Ig(a, 1, 12111) | 0) return 1;
 qd(a, 12122, 18) | 0;
 return 1;
}

function mf(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 g = e + 8 | 0;
 a[g + 2 >> 0] = c[g >> 2];
 b[g >> 1] = Ie(d, f) | 0;
 a[g + 3 >> 0] = (c[e >> 2] | 0) == 8 ? 8 : 7;
 c[e >> 2] = 9;
 return;
}

function Nn(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 On(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function eg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = b + 4 | 0;
 a = c[e >> 2] | 0;
 if (!a) {
  b = 0;
  return b | 0;
 }
 c[d >> 2] = a;
 c[e >> 2] = 0;
 b = c[b >> 2] | 0;
 return b | 0;
}

function Gm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  e = (Tl(a) | 0) == 0;
  b = Hm(a, b, d) | 0;
  if (!e) bl(a);
 } else b = Hm(a, b, d) | 0;
 return b | 0;
}

function Sb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 f = Cb(b, f) | 0;
 if (c[f + 8 >> 2] | 0) {
  b = f;
  return b | 0;
 }
 b = b + 6 | 0;
 a[b >> 0] = d[b >> 0] | 0 | 1 << e;
 b = 0;
 return b | 0;
}

function Ln(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = In(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function og(b, e) {
 b = b | 0;
 e = e | 0;
 b = c[b + 16 >> 2] | 0;
 if (!(a[b + 18 >> 0] & 8)) {
  e = 0;
  return e | 0;
 }
 if (e | 0) c[e >> 2] = c[b + 24 >> 2];
 e = d[b + 37 >> 0] | 0;
 return e | 0;
}

function Dc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 b = c[b + 12 >> 2] | 0;
 f = e + 5 | 0;
 a[f >> 0] = (d[f >> 0] | 0) & 251;
 b = b + 88 | 0;
 c[e + 24 >> 2] = c[b >> 2];
 c[b >> 2] = e;
 return;
}

function Ai(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = $h(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) md(a, 9479, d) | 0;
 b = ji(a, c[b >> 2] | 0, 2) | 0;
 i = d;
 return b | 0;
}

function ge(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = c[a >> 2] | 0;
 c[d >> 2] = c[a + 12 >> 2];
 c[d + 4 >> 2] = b;
 lc(e, 6496, d) | 0;
 Ib(c[a >> 2] | 0, 3);
}

function Ni(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = Fd(a, 1, 0, 0) | 0;
 b = va(c | 0) | 0;
 if (!c) {
  jd(a, b);
  c = 1;
  return c | 0;
 } else {
  c = qi(a, b) | 0;
  return c | 0;
 }
 return 0;
}

function Nb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = (c[a + 12 >> 2] | 0) + 61 | 0;
 if (1 << (d[e >> 0] | 0) & b | 0) return;
 do Ob(a) | 0; while (!(1 << (d[e >> 0] | 0) & b | 0));
 return;
}

function zi(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 if (c[($h(a, 1, 9473) | 0) + 4 >> 2] | 0) {
  hi(a, 0);
  i = b;
  return 1;
 }
 md(a, 9479, b) | 0;
 hi(a, 0);
 i = b;
 return 1;
}

function Je(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = Ge(a, f, f) | 0;
 i = e;
 return b | 0;
}

function Gn(a, b, c) {
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

function Qk(a) {
 a = a | 0;
 var b = 0;
 Qf(a, 3);
 b = Xf(a, 2) | 0;
 Yf(a, 1, 6);
 b = bg(a, 1, b) | 0;
 if (!b) {
  b = 0;
  return b | 0;
 }
 Tf(a, b) | 0;
 Rd(a, -1);
 b = 1;
 return b | 0;
}

function xi(a, b) {
 a = a | 0;
 b = b | 0;
 Qg(a, -1001e3, b);
 if (Gd(a, -1) | 0) {
  b = 0;
  return b | 0;
 }
 wd(a, -2);
 Rg(a, 0, 0);
 Of(a, -1);
 kd(a, -1001e3, b);
 b = 1;
 return b | 0;
}

function Oi(a) {
 a = a | 0;
 var b = 0;
 if ((Gd(a, 1) | 0) == 1) b = (Ed(a, 1) | 0) == 0 & 1; else b = Vd(a, 1, 0) | 0;
 if (Ed(a, 2) | 0) Pi(a);
 if (!a) return 0; else Za(b | 0);
 return 0;
}

function Tm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Tl(a) | 0) == 0;
  c[a >> 2] = c[a >> 2] & -49;
  if (!b) bl(a);
 } else c[a >> 2] = c[a >> 2] & -49;
 return;
}

function Aj(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = (b | 0) > -1 ? +(b | 0) : +(b >>> 0);
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function Wi(a) {
 a = a | 0;
 Rg(a, 0, 14);
 Ng(a, 2268, 0);
 Rg(a, 0, 1);
 qd(a, 17772, 0) | 0;
 Of(a, -2);
 Bg(a, -2) | 0;
 wd(a, -2);
 Of(a, -2);
 kd(a, -2, 10997);
 wd(a, -2);
 return 1;
}

function Ug(a) {
 a = a | 0;
 var b = 0;
 b = Vg(a, 1) | 0;
 if ((b | 0) <= 0) return 0;
 while (1) {
  Bd(a, 1, b);
  wd(a, -2);
  if ((b | 0) > 1) b = b + -1 | 0; else break;
 }
 return 0;
}

function Fl(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Gl(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function Xd(a) {
 a = a | 0;
 var b = 0;
 b = Fd(a, 1, 0, 0) | 0;
 wd(a, 1);
 if (!(Yd(a, b, 0) | 0)) {
  Kf(a, 0, -1, 0, 155);
  return (Kd(a) | 0) + -1 | 0;
 } else td(a) | 0;
 return 0;
}

function cd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 16 | 0;
 e = b;
 d = c[749] | 0;
 c[e >> 2] = dd(a, -1, 0) | 0;
 Im(d, 5346, e) | 0;
 um(d) | 0;
 i = b;
 return 0;
}

function Xm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = a;
 c[e + 4 >> 2] = b;
 a = Zk(Qa(38, e | 0) | 0) | 0;
 i = d;
 return a | 0;
}

function zm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Tl(a) | 0) == 0;
  a = (c[a >> 2] | 0) >>> 5 & 1;
 } else a = (c[a >> 2] | 0) >>> 5 & 1;
 return a | 0;
}

function sm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Tl(a) | 0) == 0;
  a = (c[a >> 2] | 0) >>> 4 & 1;
 } else a = (c[a >> 2] | 0) >>> 4 & 1;
 return a | 0;
}

function Jg(a, b) {
 a = a | 0;
 b = b | 0;
 if ((b + 1000999 | 0) >>> 0 > 1000999) return b | 0;
 b = ((c[a + 8 >> 2] | 0) - (c[c[a + 16 >> 2] >> 2] | 0) >> 4) + b | 0;
 return b | 0;
}

function Ck(a) {
 a = a | 0;
 var b = 0;
 b = Xf(a, 2) | 0;
 Yf(a, 1, 6);
 b = Dk(a, 1, b) | 0;
 if (!b) {
  b = 0;
  return b | 0;
 }
 Tf(a, b) | 0;
 Rd(a, -2);
 b = 2;
 return b | 0;
}

function An(a, b, c) {
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

function Lf(a) {
 a = a | 0;
 var b = 0;
 b = Vd(a, 2, 1) | 0;
 wd(a, 1);
 if (!((b | 0) > 0 & (Mf(a, 1) | 0) != 0)) td(a) | 0;
 Nf(a, b);
 Of(a, 1);
 sd(a, 2);
 td(a) | 0;
 return 0;
}

function ae(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 c[b + 16 >> 2] = a;
 c[b + 8 >> 2] = d;
 c[b + 12 >> 2] = e;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 return;
}

function Cn(a, b, c) {
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

function te(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = vc(b, c) | 0;
 if ((d | 0) != 15088) {
  b = d;
  return b | 0;
 }
 b = Ac(a, b, c) | 0;
 return b | 0;
}

function eh(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 12 >> 2] | 0;
 qd(b, c[a >> 2] | 0, c[a + 8 >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) == (a + 16 | 0)) return;
 Qd(b, -2);
 return;
}

function Sc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0;
 if ((c[b + 16 >> 2] | 0) == 15104) f = 0; else f = 1 << (d[b + 7 >> 0] | 0);
 Cc(a, b, e, f);
 return;
}

function wn() {}
function xn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function jd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = (b | 0) != 0 & 1;
 c[d + 8 >> 2] = 1;
 c[a >> 2] = d + 16;
 return;
}

function lm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = mm(a, b, f) | 0;
 i = e;
 return d | 0;
}

function lc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Gb(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Im(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Il(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Ik(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = b;
 c[d + 8 >> 2] = 2;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return;
}

function Am(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Bm(a, b, f) | 0;
 i = e;
 return d | 0;
}

function oc(a) {
 a = a | 0;
 var b = 0;
 b = yb(a, 0, 0, 40) | 0;
 a = c[a + 16 >> 2] | 0;
 c[a + 12 >> 2] = b;
 c[b + 8 >> 2] = a;
 c[b + 12 >> 2] = 0;
 return b | 0;
}

function Vh(a) {
 a = a | 0;
 var b = 0;
 Yf(a, 1, 5);
 b = Vg(a, 1) | 0;
 gg(a, 40, 17772);
 if ((Gd(a, 2) | 0) >= 1) Yf(a, 2, 6);
 wd(a, 2);
 Wh(a, 1, b);
 return 0;
}

function Ne(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = c[a + 52 >> 2] | 0;
 c[d >> 2] = Oe(a, b) | 0;
 me(a, lc(e, 7103, d) | 0);
}

function Wf(a) {
 a = a | 0;
 var b = 0;
 b = Xf(a, 2) | 0;
 Yf(a, 1, 5);
 b = b + 1 | 0;
 Wd(a, b);
 Bd(a, 1, b);
 a = (Gd(a, -1) | 0) == 0;
 return (a ? 1 : 2) | 0;
}

function rc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 12 | 0;
 a = a + 8 | 0;
 c[a >> 2] = (c[d >> 2] | 0) - b + (c[a >> 2] | 0);
 c[d >> 2] = b;
 return;
}

function Wd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = +(b | 0);
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function fh(a) {
 a = a | 0;
 Yf(a, 1, 5);
 if (!(Rf(a, 1) | 0)) {
  Rg(a, 0, 1);
  Of(a, -1);
  Bg(a, 1) | 0;
 }
 Bd(a, -1001e3, 2);
 kd(a, -2, 10997);
 return 0;
}

function dk(a) {
 a = a | 0;
 var b = 0, c = 0.0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c = +ml(+Li(a, 1), d);
 ud(a, +h[d >> 3]);
 ud(a, c);
 i = b;
 return 2;
}

function Yk(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Zk(Ua(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Jk(a) {
 a = a | 0;
 if ((Gd(a, 1) | 0) == 2) Id(a, 1, 11843) | 0;
 Yf(a, 1, 7);
 if ((Gd(a, 2) | 0) >= 1) Yf(a, 2, 5);
 wd(a, 2);
 Kk(a, 1);
 return 1;
}

function Se(a, b) {
 a = a | 0;
 b = b | 0;
 if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) {
  Ce(a, b);
  return;
 } else {
  Be(a, b) | 0;
  return;
 }
}

function Kj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = 0 - (Xf(a, 2) | 0) | 0;
 c = zj(a, 1) | 0;
 b = b & 31;
 Aj(a, c >>> (32 - b | 0) | c << b);
 return 1;
}

function yn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function ud(a, b) {
 a = a | 0;
 b = +b;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = b;
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function Ti(a) {
 a = a | 0;
 var b = 0;
 b = Fd(a, 1, 0, 0) | 0;
 Tf(a, em(c[2244 + ((Ud(a, 2, 10094, 2216) | 0) << 2) >> 2] | 0, b) | 0) | 0;
 return 1;
}

function pc(b) {
 b = b | 0;
 var d = 0;
 d = c[b + 12 >> 2] | 0;
 if (!(a[d + 63 >> 0] | 0)) {
  rc(d, -1600);
  return;
 } else {
  qc(b);
  return;
 }
}

function Pk(a) {
 a = a | 0;
 switch (Gd(a, 2) | 0) {
 case 0:
 case 5:
  break;
 default:
  Id(a, 2, 11925) | 0;
 }
 wd(a, 2);
 Bg(a, 1) | 0;
 return 1;
}

function Mm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Tl(a) | 0) == 0;
  a = Nm(a) | 0;
 } else a = Nm(a) | 0;
 return a | 0;
}

function Ad(a) {
 a = a | 0;
 Bd(a, -1001e3, 2);
 Bd(a, -1001e3, 2);
 kd(a, -2, 6091);
 Ng(a, 1428, 0);
 qd(a, 8088, 7) | 0;
 kd(a, -2, 8096);
 return 1;
}

function of(a, b) {
 a = a | 0;
 b = b | 0;
 if ((c[b >> 2] | 0) == 8) if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) return;
 Be(a, b) | 0;
 return;
}

function fc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[b + 8 >> 2] | 0;
 gc(a, (e | 0) == 3 | (e & 15 | 0) == 4 ? d : b, 4360);
}

function Zj(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 ud(a, +nl(+Li(a, 1), d));
 Wd(a, c[d >> 2] | 0);
 i = b;
 return 2;
}

function nb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Mj(a) {
 a = a | 0;
 Rg(a, 0, 28);
 Ng(a, 2492, 0);
 ud(a, 3.141592653589793);
 kd(a, -2, 11364);
 ud(a, s);
 kd(a, -2, 11367);
 return 1;
}

function Kc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 d = (Lc(b, d) | 0) == 0;
 gc(a, d ? b : c, 4853);
}

function Hj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = Xf(a, 2) | 0;
 c = zj(a, 1) | 0;
 b = b & 31;
 Aj(a, c >>> (32 - b | 0) | c << b);
 return 1;
}

function tb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (!d) {
  jn(b);
  d = 0;
 } else d = kn(b, d) | 0;
 return d | 0;
}

function fd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = (c[a + 12 >> 2] | 0) + 168 | 0;
 a = c[d >> 2] | 0;
 c[d >> 2] = b;
 return a | 0;
}

function Pf(a) {
 a = a | 0;
 Qf(a, 1);
 if (!(Rf(a, 1) | 0)) {
  Md(a);
  return 1;
 } else {
  Sf(a, 1, 7636) | 0;
  return 1;
 }
 return 0;
}

function rd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) pc(a);
 return Gb(a, b, d) | 0;
}

function qj(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 Fg(a, 1, d) | 0;
 Wd(a, c[d >> 2] | 0);
 i = b;
 return 1;
}

function Tn(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return gb[a & 3](b | 0, c | 0, d | 0, e | 0) | 0;
}

function Ke(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return De(a, c << 6 | b | d << 23 | e << 14) | 0;
}

function $g(a, b) {
 a = a | 0;
 b = b | 0;
 c[b + 12 >> 2] = a;
 c[b >> 2] = b + 16;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1024;
 return;
}

function rf(a, b) {
 a = a | 0;
 b = b | 0;
 c[(c[(c[a >> 2] | 0) + 20 >> 2] | 0) + ((c[a + 20 >> 2] | 0) + -1 << 2) >> 2] = b;
 return;
}

function ql(a) {
 a = +a;
 return +(+un(a + -1416.0996898839683) * 2247116418577894884661631.0e283 * 2247116418577894884661631.0e283);
}

function kg(a) {
 a = a | 0;
 Yf(a, 1, 5);
 wd(a, 2);
 if (Nd(a, 1) | 0) {
  a = 2;
  return a | 0;
 }
 Md(a);
 a = 1;
 return a | 0;
}

function wb(a) {
 a = a | 0;
 if (!a) {
  a = 1024;
  return a | 0;
 }
 a = c[(c[a + 12 >> 2] | 0) + 176 >> 2] | 0;
 return a | 0;
}

function Vk(a, b) {
 a = a | 0;
 b = b | 0;
 b = i;
 i = i + 16 | 0;
 Mk(a, 0, 0, 0) | 0;
 md(a, 12141, b) | 0;
 i = b;
 return;
}

function qm(b, c) {
 b = b | 0;
 c = c | 0;
 b = rm(b, c) | 0;
 return ((a[b >> 0] | 0) == (c & 255) << 24 >> 24 ? b : 0) | 0;
}

function Ul(a) {
 a = a | 0;
 if ((a + -48 | 0) >>> 0 < 10) a = 1; else a = ((a | 32) + -97 | 0) >>> 0 < 6;
 return a & 1 | 0;
}

function Md(a) {
 a = a | 0;
 var b = 0;
 a = a + 8 | 0;
 b = c[a >> 2] | 0;
 c[b + 8 >> 2] = 0;
 c[a >> 2] = b + 16;
 return;
}

function pk(a) {
 a = a | 0;
 if ((Gd(a, 1) | 0) == 7) {
  qk(a, 1);
  return 1;
 } else {
  Md(a);
  return 1;
 }
 return 0;
}

function Gc(a) {
 a = a | 0;
 var b = 0;
 b = a >>> 3 & 31;
 if (!b) return a | 0;
 a = (a & 7 | 8) << b + -1;
 return a | 0;
}

function Si(a) {
 a = a | 0;
 var b = 0;
 b = Fg(a, 1, 0) | 0;
 return bi(a, (Xm(b, Fg(a, 2, 0) | 0) | 0) == 0 & 1, 0) | 0;
}

function $f(b, c) {
 b = b | 0;
 c = c | 0;
 b = dc(b, 38, (c << 4) + 16 | 0, 0, 0) | 0;
 a[b + 6 >> 0] = c;
 return b | 0;
}

function Jh(a) {
 a = a | 0;
 var b = 0;
 Yf(a, 1, 6);
 b = vh(a) | 0;
 Of(a, 1);
 wh(a, b, 1);
 _f(a, 163, 1);
 return 1;
}

function If(a) {
 a = a | 0;
 a = dc(a, 10, 32, 0, 0) | 0;
 c[a + 8 >> 2] = a + 16;
 c[a + 24 >> 2] = 0;
 return a | 0;
}

function Pn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return cb[a & 15](b | 0, c | 0, d | 0) | 0;
}

function ug(a) {
 a = a | 0;
 if ((Gd(a, 1) | 0 | 1 | 0) != 5) Id(a, 1, 7891) | 0;
 Wd(a, vg(a, 1) | 0);
 return 1;
}

function Zk(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(_k() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Ze(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return De(a, c << 6 | b | d << 14) | 0;
}

function $e(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 De(a, b << 6 | (c << 23) + 8388608 | 31) | 0;
 return;
}

function mj(a) {
 a = a | 0;
 Fg(a, 1, 0) | 0;
 Fg(a, 2, 0) | 0;
 wd(a, 2);
 Wd(a, 0);
 _f(a, 168, 3);
 return 1;
}

function we(b) {
 b = b | 0;
 return ((a[3999 + (b + 1) >> 0] & 2) == 0 ? (b | 32) + -87 | 0 : b + -48 | 0) | 0;
}

function _k() {
 var a = 0;
 if (!(c[3787] | 0)) a = 15192; else a = c[(Fn() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function Mi(a) {
 a = a | 0;
 var b = 0;
 b = ~~+Li(a, 1);
 ud(a, +ua(b | 0, ~~+Ci(a, 2, 0.0) | 0));
 return 1;
}

function Hi(a) {
 a = a | 0;
 c[($h(a, 1, 9473) | 0) + 4 >> 2] = 164;
 Md(a);
 qd(a, 9875, 26) | 0;
 return 2;
}

function dn(b, c) {
 b = b | 0;
 c = c | 0;
 b = b + (en(b, c) | 0) | 0;
 return (a[b >> 0] | 0 ? b : 0) | 0;
}

function Qf(a, b) {
 a = a | 0;
 b = b | 0;
 if ((Gd(a, b) | 0) != -1) return;
 Id(a, b, 8055) | 0;
 return;
}

function uh(a) {
 a = a | 0;
 var b = 0;
 Yf(a, 1, 6);
 b = vh(a) | 0;
 Of(a, 1);
 wh(a, b, 1);
 return 1;
}

function Ri(a) {
 a = a | 0;
 var b = 0;
 b = Fg(a, 1, 0) | 0;
 return bi(a, (Ym(b) | 0) == 0 & 1, b) | 0;
}

function Qe(a) {
 a = a | 0;
 var b = 0;
 b = qe(a, a + 40 | 0) | 0;
 c[a + 32 >> 2] = b;
 return b | 0;
}

function Mn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return On(a, b, c, d, 0) | 0;
}

function Kd(a) {
 a = a | 0;
 return (c[a + 8 >> 2] | 0) - ((c[c[a + 16 >> 2] >> 2] | 0) + 16) >> 4 | 0;
}

function fi(a) {
 a = a | 0;
 return bi(a, (tm(c[($h(a, 1, 9473) | 0) >> 2] | 0) | 0) == 0 & 1, 0) | 0;
}

function an(a) {
 a = a | 0;
 var b = 0;
 b = 15136;
 c[b >> 2] = a + -1;
 c[b + 4 >> 2] = 0;
 return;
}

function Nh(a) {
 a = a | 0;
 Rg(a, 0, 7);
 Ng(a, 1824, 0);
 Qg(a, -1, 9379);
 Sg(a, 9379);
 return 1;
}

function zf(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 20 >> 2] | 0;
 c[a + 24 >> 2] = b;
 return b | 0;
}

function sb() {
 var a = 0;
 a = ub(1, 0) | 0;
 if (!a) return a | 0;
 fd(a, 143) | 0;
 return a | 0;
}

function bm(a) {
 a = a | 0;
 if (!($l(a) | 0)) a = 0; else a = (cm(a) | 0) == 0;
 return a & 1 | 0;
}

function Rl(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = Sl(a, b, 0) | 0;
 return a | 0;
}

function ek(a) {
 a = a | 0;
 var b = 0.0;
 b = +Li(a, 1);
 ud(a, +P(+b, +(+Li(a, 2))));
 return 1;
}

function _j(a) {
 a = a | 0;
 var b = 0.0;
 b = +Li(a, 1);
 ud(a, +rl(b, Xf(a, 2) | 0));
 return 1;
}

function aj(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Ph(d, b, c);
 return 0;
}

function xg(a) {
 a = a | 0;
 Yf(a, 1, 5);
 Qf(a, 2);
 Qf(a, 3);
 wd(a, 3);
 yg(a, 1);
 return 1;
}

function qg(a, b) {
 a = a | 0;
 b = b | 0;
 Eb(a, c[b >> 2] | 0, c[b + 4 >> 2] | 0, 0);
 return;
}
function ib(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Db(a, b) {
 a = a | 0;
 b = b | 0;
 Eb(a, (c[a + 8 >> 2] | 0) + -32 | 0, 0, 0);
 return;
}

function Yj(a) {
 a = a | 0;
 var b = 0.0;
 b = +Li(a, 1);
 ud(a, +Al(b, +Li(a, 2)));
 return 1;
}

function Qj(a) {
 a = a | 0;
 var b = 0.0;
 b = +Li(a, 1);
 ud(a, +tn(b, +Li(a, 2)));
 return 1;
}

function mm(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Gl(a, 2147483647, b, c) | 0;
}

function Un(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return hb[a & 1](b | 0, c | 0) | 0;
}

function Cm(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function Zl(a) {
 a = a | 0;
 var b = 0;
 b = (_l(a) | 0) == 0;
 return (b ? a : a & 95) | 0;
}

function Cl(a) {
 a = a | 0;
 var b = 0;
 b = (Dl(a) | 0) == 0;
 return (b ? a : a | 32) | 0;
}

function Zn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(4);
 return 0;
}

function cm(a) {
 a = a | 0;
 return ((a + -48 | 0) >>> 0 < 10 | (El(a) | 0) != 0) & 1 | 0;
}

function Zm(a, b) {
 a = a | 0;
 b = b | 0;
 return (Rm(a, Vl(a) | 0, 1, b) | 0) + -1 | 0;
}

function ei(a, b) {
 a = a | 0;
 b = b | 0;
 Qg(a, -1001e3, b);
 Bg(a, -2) | 0;
 return;
}

function Uk(a) {
 a = a | 0;
 oa(a | 0, 0) | 0;
 Mk(c[3786] | 0, 9, 11, 1) | 0;
 return;
}

function Lg(a) {
 a = a | 0;
 Qf(a, 1);
 Tf(a, Hd(a, Gd(a, 1) | 0) | 0) | 0;
 return 1;
}

function Bk(a) {
 a = a | 0;
 Qf(a, 1);
 if (Rf(a, 1) | 0) return 1;
 Md(a);
 return 1;
}

function wg(a) {
 a = a | 0;
 Yf(a, 1, 5);
 Qf(a, 2);
 wd(a, 2);
 Uf(a, 1);
 return 1;
}

function tg(a) {
 a = a | 0;
 Qf(a, 1);
 Qf(a, 2);
 jd(a, Pd(a, 1, 2) | 0);
 return 1;
}

function nm(a, b) {
 a = a | 0;
 b = b | 0;
 return om(a, b, (Vl(a) | 0) + 1 | 0) | 0;
}

function dm(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Rn(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 eb[a & 15](b | 0, c | 0);
}

function Hd(a, b) {
 a = a | 0;
 b = b | 0;
 return c[1176 + (b + 1 << 2) >> 2] | 0;
}

function Fm(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Gm(a, b, c) | 0;
}

function Pi(a) {
 a = a | 0;
 ad(c[(c[a + 12 >> 2] | 0) + 172 >> 2] | 0);
 return;
}

function Kb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 Fb(a, 4273, b);
}

function fk(a) {
 a = a | 0;
 ud(a, +Li(a, 1) * .017453292519943295);
 return 1;
}

function Vj(a) {
 a = a | 0;
 ud(a, +Li(a, 1) / .017453292519943295);
 return 1;
}

function Vn(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Bl(a) {
 a = a | 0;
 return (a >>> 0 < 32 | (a | 0) == 127) & 1 | 0;
}

function _c(a, b) {
 a = a | 0;
 b = b | 0;
 return Lb(a, b, Vl(b) | 0) | 0;
}

function Qi(a) {
 a = a | 0;
 Tf(a, La(Fg(a, 1, 0) | 0) | 0) | 0;
 return 1;
}

function mb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function ig(a, b) {
 a = a | 0;
 b = b | 0;
 Hb(a, c[b >> 2] | 0);
 return;
}

function gf(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = 0;
 me(a, b);
}

function Sn(a, b) {
 a = a | 0;
 b = b | 0;
 return fb[a & 255](b | 0) | 0;
}

function me(a, b) {
 a = a | 0;
 b = b | 0;
 ne(a, b, c[a + 16 >> 2] | 0);
}

function El(a) {
 a = a | 0;
 return ((a | 32) + -97 | 0) >>> 0 < 26 | 0;
}

function pi(a) {
 a = a | 0;
 $h(a, 1, 9473) | 0;
 return qi(a, -1) | 0;
}

function el(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) bl(a);
 return;
}

function al(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) bl(a);
 return;
}

function xj(a) {
 a = a | 0;
 Rg(a, 0, 12);
 Ng(a, 2388, 0);
 return 1;
}

function nk(a) {
 a = a | 0;
 Rg(a, 0, 16);
 Ng(a, 2724, 0);
 return 1;
}

function Ii(a) {
 a = a | 0;
 Rg(a, 0, 11);
 Ng(a, 2120, 0);
 return 1;
}

function th(a) {
 a = a | 0;
 Rg(a, 0, 6);
 Ng(a, 1768, 0);
 return 1;
}

function hk(a) {
 a = a | 0;
 an(zj(a, 1) | 0);
 bn() | 0;
 return 0;
}

function fn(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+gn(a, b, 1));
}

function Ji(a) {
 a = a | 0;
 ud(a, +(Ia() | 0) / 1.0e6);
 return 1;
}

function Gg(a) {
 a = a | 0;
 Qf(a, 1);
 Hg(a, 1, 0) | 0;
 return 1;
}

function _l(a) {
 a = a | 0;
 return (a + -97 | 0) >>> 0 < 26 | 0;
}

function Dl(a) {
 a = a | 0;
 return (a + -65 | 0) >>> 0 < 26 | 0;
}

function $l(a) {
 a = a | 0;
 return (a + -33 | 0) >>> 0 < 94 | 0;
}

function kk(a) {
 a = a | 0;
 ud(a, +O(+(+Li(a, 1))));
 return 1;
}

function am(a, b) {
 a = a | 0;
 b = b | 0;
 return Wl(a, b) | 0;
}

function Xj(a) {
 a = a | 0;
 ud(a, +M(+(+Li(a, 1))));
 return 1;
}

function Sj(a) {
 a = a | 0;
 ud(a, +Z(+(+Li(a, 1))));
 return 1;
}

function Nj(a) {
 a = a | 0;
 ud(a, +N(+(+Li(a, 1))));
 return 1;
}

function Lh(a) {
 a = a | 0;
 return Mh(a, Kd(a) | 0, 0, 0) | 0;
}

function Cj(a) {
 a = a | 0;
 Aj(a, ~(zj(a, 1) | 0));
 return 1;
}

function mk(a) {
 a = a | 0;
 ud(a, +pn(+Li(a, 1)));
 return 1;
}

function lk(a) {
 a = a | 0;
 ud(a, +sl(+Li(a, 1)));
 return 1;
}

function jk(a) {
 a = a | 0;
 ud(a, +on(+Li(a, 1)));
 return 1;
}

function ik(a) {
 a = a | 0;
 ud(a, +xl(+Li(a, 1)));
 return 1;
}

function Wj(a) {
 a = a | 0;
 ud(a, +un(+Li(a, 1)));
 return 1;
}

function Uj(a) {
 a = a | 0;
 ud(a, +nn(+Li(a, 1)));
 return 1;
}

function Tj(a) {
 a = a | 0;
 ud(a, +vl(+Li(a, 1)));
 return 1;
}

function Rj(a) {
 a = a | 0;
 ud(a, +sn(+Li(a, 1)));
 return 1;
}

function Pj(a) {
 a = a | 0;
 ud(a, +rn(+Li(a, 1)));
 return 1;
}

function Oj(a) {
 a = a | 0;
 ud(a, +qn(+Li(a, 1)));
 return 1;
}

function $j(a) {
 a = a | 0;
 ud(a, +ll(+Li(a, 1)));
 return 1;
}

function wl(a, b) {
 a = +a;
 b = b | 0;
 return +(+nl(a, b));
}

function ul(a, b) {
 a = +a;
 b = b | 0;
 return +(+gl(a, b));
}

function rl(a, b) {
 a = +a;
 b = b | 0;
 return +(+gl(a, b));
}

function _n(a, b) {
 a = a | 0;
 b = b | 0;
 ca(5);
 return 0;
}

function Qn(a, b) {
 a = a | 0;
 b = b | 0;
 db[a & 3](b | 0);
}

function Vf(a) {
 a = a | 0;
 Zf(a, 7655, 1, 156);
 return 3;
}

function sk(a) {
 a = a | 0;
 return d[a + 40 >> 0] | 0 | 0;
}

function zl(a, b) {
 a = +a;
 b = +b;
 return +(+Al(a, b));
}

function ni(a) {
 a = a | 0;
 di(a, 9462, 9705);
 return 1;
}

function lg(a) {
 a = a | 0;
 Zf(a, 7794, 0, 9);
 return 3;
}

function lb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function jl(a, b) {
 a = +a;
 b = +b;
 return +(+kl(a, b));
}

function ci(a) {
 a = a | 0;
 di(a, 9554, 9564);
 return 1;
}

function Ah(a) {
 a = a | 0;
 return d[a + 6 >> 0] | 0 | 0;
}

function em(a, b) {
 a = a | 0;
 b = b | 0;
 return 14777;
}

function Jf(a) {
 a = a | 0;
 return (Kd(a) | 0) + -1 | 0;
}

function Gh(a) {
 a = a | 0;
 jd(a, Hh(a) | 0);
 return 2;
}

function vk(a) {
 a = a | 0;
 return c[a + 44 >> 2] | 0;
}

function tk(a) {
 a = a | 0;
 return c[a + 52 >> 2] | 0;
}

function Ak(a) {
 a = a | 0;
 Of(a, -1001e3);
 return 1;
}

function Xn(a, b) {
 a = a | 0;
 b = b | 0;
 ca(2);
}

function sj(a) {
 a = a | 0;
 return gj(a, 0) | 0;
}

function fj(a) {
 a = a | 0;
 return gj(a, 1) | 0;
}

function td(a) {
 a = a | 0;
 mc(a);
 return 0;
}

function Yn(a) {
 a = a | 0;
 ca(3);
 return 0;
}

function Um(a) {
 a = a | 0;
 return Mm(a) | 0;
}

function Tl(a) {
 a = a | 0;
 return 0;
}

function bl(a) {
 a = a | 0;
 return;
}

function pb(a) {
 a = a | 0;
 C = a;
}

function kb(a) {
 a = a | 0;
 i = a;
}

function Wn(a) {
 a = a | 0;
 ca(1);
}

function qb() {
 return C | 0;
}

function jb() {
 return i | 0;
}

function Xl() {
 return 3828;
}

function Fn() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var cb = [ Vn, $k, cl, dl, fl, Hl, _d, fg, eg, Vn, Vn, Vn, Vn, Vn, Vn, Vn ];
 var db = [ Wn, Uk, al, el ];
 var eb = [ Xn, xb, Db, ce, ig, qg, Ch, Eh, uk, Vk, Xn, Xn, Xn, Xn, Xn, Xn ];
 var fb = [ Yn, Dd, Td, Xd, Lf, Pf, Vf, ag, cg, kg, lg, mg, rg, tg, ug, wg, xg, zg, Ag, Dg, Gg, Lg, Mg, Xg, Zg, fh, nh, sh, uh, xh, Gh, Ih, Jh, Lh, Oh, Qh, Rh, Sh, Th, Uh, Vh, _h, ai, ci, gi, mi, ni, oi, ri, si, ti, vi, yi, zi, Ai, Bi, Di, Ei, Fi, Gi, Ji, Ki, Mi, Ni, Oi, Qi, Ri, Si, Ti, Ui, Vi, Xi, Yi, $i, fj, kj, mj, oj, qj, rj, sj, tj, uj, vj, wj, yj, Bj, Cj, Dj, Ej, Fj, Gj, Hj, Ij, Jj, Kj, Lj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, _j, $j, ak, bk, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, ok, pk, rk, wk, yk, Ak, Bk, Ck, Ek, Gk, Jk, Lk, Nk, Pk, Qk, Rk, Yk, gd, cd, Tk, Ad, Tg, th, Nh, Zh, Ii, Wi, xj, Mj, nk, Jf, Wf, ng, Ug, gh, ih, jh, lh, Kh, Hi, fi, ii, pi, nj, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn, Yn ];
 var gb = [ Zn, tb, aj, Zn ];
 var hb = [ _n, ub ];
 return {
  _testSetjmp: Dn,
  _saveSetjmp: Bn,
  _free: jn,
  _main: rb,
  _realloc: kn,
  _i64Add: yn,
  _pthread_self: Fn,
  _i64Subtract: xn,
  _memset: zn,
  _malloc: hn,
  _memcpy: En,
  _bitshift64Lshr: Cn,
  ___errno_location: _k,
  _bitshift64Shl: An,
  runPostSets: wn,
  stackAlloc: ib,
  stackSave: jb,
  stackRestore: kb,
  establishStackSpace: lb,
  setThrew: mb,
  setTempRet0: pb,
  getTempRet0: qb,
  dynCall_iiii: Pn,
  dynCall_vi: Qn,
  dynCall_vii: Rn,
  dynCall_ii: Sn,
  dynCall_iiiii: Tn,
  dynCall_iii: Un
 };
})


;