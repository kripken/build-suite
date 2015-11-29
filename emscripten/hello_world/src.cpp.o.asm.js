Module["asm"] =  (function(global,env,buffer) {

  'use asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;

  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var _pthread_self=env._pthread_self;
  var _sysconf=env._sysconf;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var ___setErrNo=env.___setErrNo;
  var _abort=env._abort;
  var _sbrk=env._sbrk;
  var _time=env._time;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var ___syscall140=env.___syscall140;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 do if (i1 >>> 0 < 245) {
  i14 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i1 = i14 >>> 3;
  i9 = HEAP32[302] | 0;
  i2 = i9 >>> i1;
  if (i2 & 3) {
   i2 = (i2 & 1 ^ 1) + i1 | 0;
   i3 = 1248 + (i2 << 1 << 2) | 0;
   i4 = i3 + 8 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i5 + 8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   do if ((i3 | 0) != (i7 | 0)) {
    if (i7 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
    i1 = i7 + 12 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i1 >> 2] = i3;
     HEAP32[i4 >> 2] = i7;
     break;
    } else _abort();
   } else HEAP32[302] = i9 & ~(1 << i2); while (0);
   i37 = i2 << 3;
   HEAP32[i5 + 4 >> 2] = i37 | 3;
   i37 = i5 + i37 + 4 | 0;
   HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
   i37 = i6;
   return i37 | 0;
  }
  i7 = HEAP32[304] | 0;
  if (i14 >>> 0 > i7 >>> 0) {
   if (i2) {
    i3 = 2 << i1;
    i3 = i2 << i1 & (i3 | 0 - i3);
    i3 = (i3 & 0 - i3) + -1 | 0;
    i8 = i3 >>> 12 & 16;
    i3 = i3 >>> i8;
    i5 = i3 >>> 5 & 8;
    i3 = i3 >>> i5;
    i6 = i3 >>> 2 & 4;
    i3 = i3 >>> i6;
    i4 = i3 >>> 1 & 2;
    i3 = i3 >>> i4;
    i2 = i3 >>> 1 & 1;
    i2 = (i5 | i8 | i6 | i4 | i2) + (i3 >>> i2) | 0;
    i3 = 1248 + (i2 << 1 << 2) | 0;
    i4 = i3 + 8 | 0;
    i6 = HEAP32[i4 >> 2] | 0;
    i8 = i6 + 8 | 0;
    i5 = HEAP32[i8 >> 2] | 0;
    do if ((i3 | 0) != (i5 | 0)) {
     if (i5 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
     i1 = i5 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (i6 | 0)) {
      HEAP32[i1 >> 2] = i3;
      HEAP32[i4 >> 2] = i5;
      i10 = HEAP32[304] | 0;
      break;
     } else _abort();
    } else {
     HEAP32[302] = i9 & ~(1 << i2);
     i10 = i7;
    } while (0);
    i7 = (i2 << 3) - i14 | 0;
    HEAP32[i6 + 4 >> 2] = i14 | 3;
    i4 = i6 + i14 | 0;
    HEAP32[i4 + 4 >> 2] = i7 | 1;
    HEAP32[i4 + i7 >> 2] = i7;
    if (i10) {
     i5 = HEAP32[307] | 0;
     i2 = i10 >>> 3;
     i3 = 1248 + (i2 << 1 << 2) | 0;
     i1 = HEAP32[302] | 0;
     i2 = 1 << i2;
     if (i1 & i2) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
       i11 = i1;
       i12 = i2;
      }
     } else {
      HEAP32[302] = i1 | i2;
      i11 = i3 + 8 | 0;
      i12 = i3;
     }
     HEAP32[i11 >> 2] = i5;
     HEAP32[i12 + 12 >> 2] = i5;
     HEAP32[i5 + 8 >> 2] = i12;
     HEAP32[i5 + 12 >> 2] = i3;
    }
    HEAP32[304] = i7;
    HEAP32[307] = i4;
    i37 = i8;
    return i37 | 0;
   }
   i1 = HEAP32[303] | 0;
   if (i1) {
    i3 = (i1 & 0 - i1) + -1 | 0;
    i36 = i3 >>> 12 & 16;
    i3 = i3 >>> i36;
    i35 = i3 >>> 5 & 8;
    i3 = i3 >>> i35;
    i37 = i3 >>> 2 & 4;
    i3 = i3 >>> i37;
    i2 = i3 >>> 1 & 2;
    i3 = i3 >>> i2;
    i4 = i3 >>> 1 & 1;
    i4 = HEAP32[1512 + ((i35 | i36 | i37 | i2 | i4) + (i3 >>> i4) << 2) >> 2] | 0;
    i3 = (HEAP32[i4 + 4 >> 2] & -8) - i14 | 0;
    i2 = i4;
    while (1) {
     i1 = HEAP32[i2 + 16 >> 2] | 0;
     if (!i1) {
      i1 = HEAP32[i2 + 20 >> 2] | 0;
      if (!i1) {
       i9 = i4;
       break;
      }
     }
     i2 = (HEAP32[i1 + 4 >> 2] & -8) - i14 | 0;
     i37 = i2 >>> 0 < i3 >>> 0;
     i3 = i37 ? i2 : i3;
     i2 = i1;
     i4 = i37 ? i1 : i4;
    }
    i6 = HEAP32[306] | 0;
    if (i9 >>> 0 < i6 >>> 0) _abort();
    i8 = i9 + i14 | 0;
    if (i9 >>> 0 >= i8 >>> 0) _abort();
    i7 = HEAP32[i9 + 24 >> 2] | 0;
    i4 = HEAP32[i9 + 12 >> 2] | 0;
    do if ((i4 | 0) == (i9 | 0)) {
     i2 = i9 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i9 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i13 = 0;
       break;
      }
     }
     while (1) {
      i4 = i1 + 20 | 0;
      i5 = HEAP32[i4 >> 2] | 0;
      if (i5) {
       i1 = i5;
       i2 = i4;
       continue;
      }
      i4 = i1 + 16 | 0;
      i5 = HEAP32[i4 >> 2] | 0;
      if (!i5) break; else {
       i1 = i5;
       i2 = i4;
      }
     }
     if (i2 >>> 0 < i6 >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = 0;
      i13 = i1;
      break;
     }
    } else {
     i5 = HEAP32[i9 + 8 >> 2] | 0;
     if (i5 >>> 0 < i6 >>> 0) _abort();
     i1 = i5 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) != (i9 | 0)) _abort();
     i2 = i4 + 8 | 0;
     if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
      HEAP32[i1 >> 2] = i4;
      HEAP32[i2 >> 2] = i5;
      i13 = i4;
      break;
     } else _abort();
    } while (0);
    do if (i7) {
     i1 = HEAP32[i9 + 28 >> 2] | 0;
     i2 = 1512 + (i1 << 2) | 0;
     if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i13;
      if (!i13) {
       HEAP32[303] = HEAP32[303] & ~(1 << i1);
       break;
      }
     } else {
      if (i7 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
      i1 = i7 + 16 | 0;
      if ((HEAP32[i1 >> 2] | 0) == (i9 | 0)) HEAP32[i1 >> 2] = i13; else HEAP32[i7 + 20 >> 2] = i13;
      if (!i13) break;
     }
     i2 = HEAP32[306] | 0;
     if (i13 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i13 + 24 >> 2] = i7;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i13 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i13;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1) if (i1 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
      HEAP32[i13 + 20 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i13;
      break;
     }
    } while (0);
    if (i3 >>> 0 < 16) {
     i37 = i3 + i14 | 0;
     HEAP32[i9 + 4 >> 2] = i37 | 3;
     i37 = i9 + i37 + 4 | 0;
     HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
    } else {
     HEAP32[i9 + 4 >> 2] = i14 | 3;
     HEAP32[i8 + 4 >> 2] = i3 | 1;
     HEAP32[i8 + i3 >> 2] = i3;
     i1 = HEAP32[304] | 0;
     if (i1) {
      i5 = HEAP32[307] | 0;
      i2 = i1 >>> 3;
      i4 = 1248 + (i2 << 1 << 2) | 0;
      i1 = HEAP32[302] | 0;
      i2 = 1 << i2;
      if (i1 & i2) {
       i1 = i4 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
        i15 = i1;
        i16 = i2;
       }
      } else {
       HEAP32[302] = i1 | i2;
       i15 = i4 + 8 | 0;
       i16 = i4;
      }
      HEAP32[i15 >> 2] = i5;
      HEAP32[i16 + 12 >> 2] = i5;
      HEAP32[i5 + 8 >> 2] = i16;
      HEAP32[i5 + 12 >> 2] = i4;
     }
     HEAP32[304] = i3;
     HEAP32[307] = i8;
    }
    i37 = i9 + 8 | 0;
    return i37 | 0;
   }
  }
 } else if (i1 >>> 0 <= 4294967231) {
  i1 = i1 + 11 | 0;
  i14 = i1 & -8;
  i9 = HEAP32[303] | 0;
  if (i9) {
   i3 = 0 - i14 | 0;
   i1 = i1 >>> 8;
   if (i1) if (i14 >>> 0 > 16777215) i8 = 31; else {
    i16 = (i1 + 1048320 | 0) >>> 16 & 8;
    i30 = i1 << i16;
    i15 = (i30 + 520192 | 0) >>> 16 & 4;
    i30 = i30 << i15;
    i8 = (i30 + 245760 | 0) >>> 16 & 2;
    i8 = 14 - (i15 | i16 | i8) + (i30 << i8 >>> 15) | 0;
    i8 = i14 >>> (i8 + 7 | 0) & 1 | i8 << 1;
   } else i8 = 0;
   i2 = HEAP32[1512 + (i8 << 2) >> 2] | 0;
   L123 : do if (!i2) {
    i1 = 0;
    i2 = 0;
    i30 = 86;
   } else {
    i5 = i3;
    i1 = 0;
    i6 = i14 << ((i8 | 0) == 31 ? 0 : 25 - (i8 >>> 1) | 0);
    i7 = i2;
    i2 = 0;
    while (1) {
     i4 = HEAP32[i7 + 4 >> 2] & -8;
     i3 = i4 - i14 | 0;
     if (i3 >>> 0 < i5 >>> 0) if ((i4 | 0) == (i14 | 0)) {
      i1 = i7;
      i2 = i7;
      i30 = 90;
      break L123;
     } else i2 = i7; else i3 = i5;
     i4 = HEAP32[i7 + 20 >> 2] | 0;
     i7 = HEAP32[i7 + 16 + (i6 >>> 31 << 2) >> 2] | 0;
     i1 = (i4 | 0) == 0 | (i4 | 0) == (i7 | 0) ? i1 : i4;
     i4 = (i7 | 0) == 0;
     if (i4) {
      i30 = 86;
      break;
     } else {
      i5 = i3;
      i6 = i6 << (i4 & 1 ^ 1);
     }
    }
   } while (0);
   if ((i30 | 0) == 86) {
    if ((i1 | 0) == 0 & (i2 | 0) == 0) {
     i1 = 2 << i8;
     i1 = i9 & (i1 | 0 - i1);
     if (!i1) break;
     i16 = (i1 & 0 - i1) + -1 | 0;
     i12 = i16 >>> 12 & 16;
     i16 = i16 >>> i12;
     i11 = i16 >>> 5 & 8;
     i16 = i16 >>> i11;
     i13 = i16 >>> 2 & 4;
     i16 = i16 >>> i13;
     i15 = i16 >>> 1 & 2;
     i16 = i16 >>> i15;
     i1 = i16 >>> 1 & 1;
     i1 = HEAP32[1512 + ((i11 | i12 | i13 | i15 | i1) + (i16 >>> i1) << 2) >> 2] | 0;
    }
    if (!i1) {
     i8 = i3;
     i9 = i2;
    } else i30 = 90;
   }
   if ((i30 | 0) == 90) while (1) {
    i30 = 0;
    i16 = (HEAP32[i1 + 4 >> 2] & -8) - i14 | 0;
    i4 = i16 >>> 0 < i3 >>> 0;
    i3 = i4 ? i16 : i3;
    i2 = i4 ? i1 : i2;
    i4 = HEAP32[i1 + 16 >> 2] | 0;
    if (i4) {
     i1 = i4;
     i30 = 90;
     continue;
    }
    i1 = HEAP32[i1 + 20 >> 2] | 0;
    if (!i1) {
     i8 = i3;
     i9 = i2;
     break;
    } else i30 = 90;
   }
   if ((i9 | 0) != 0 ? i8 >>> 0 < ((HEAP32[304] | 0) - i14 | 0) >>> 0 : 0) {
    i5 = HEAP32[306] | 0;
    if (i9 >>> 0 < i5 >>> 0) _abort();
    i7 = i9 + i14 | 0;
    if (i9 >>> 0 >= i7 >>> 0) _abort();
    i6 = HEAP32[i9 + 24 >> 2] | 0;
    i3 = HEAP32[i9 + 12 >> 2] | 0;
    do if ((i3 | 0) == (i9 | 0)) {
     i2 = i9 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i9 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i18 = 0;
       break;
      }
     }
     while (1) {
      i3 = i1 + 20 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (i4) {
       i1 = i4;
       i2 = i3;
       continue;
      }
      i3 = i1 + 16 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (!i4) break; else {
       i1 = i4;
       i2 = i3;
      }
     }
     if (i2 >>> 0 < i5 >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = 0;
      i18 = i1;
      break;
     }
    } else {
     i4 = HEAP32[i9 + 8 >> 2] | 0;
     if (i4 >>> 0 < i5 >>> 0) _abort();
     i1 = i4 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) != (i9 | 0)) _abort();
     i2 = i3 + 8 | 0;
     if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
      HEAP32[i1 >> 2] = i3;
      HEAP32[i2 >> 2] = i4;
      i18 = i3;
      break;
     } else _abort();
    } while (0);
    do if (i6) {
     i1 = HEAP32[i9 + 28 >> 2] | 0;
     i2 = 1512 + (i1 << 2) | 0;
     if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i18;
      if (!i18) {
       HEAP32[303] = HEAP32[303] & ~(1 << i1);
       break;
      }
     } else {
      if (i6 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
      i1 = i6 + 16 | 0;
      if ((HEAP32[i1 >> 2] | 0) == (i9 | 0)) HEAP32[i1 >> 2] = i18; else HEAP32[i6 + 20 >> 2] = i18;
      if (!i18) break;
     }
     i2 = HEAP32[306] | 0;
     if (i18 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i18 + 24 >> 2] = i6;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i18 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i18;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1) if (i1 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
      HEAP32[i18 + 20 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i18;
      break;
     }
    } while (0);
    do if (i8 >>> 0 >= 16) {
     HEAP32[i9 + 4 >> 2] = i14 | 3;
     HEAP32[i7 + 4 >> 2] = i8 | 1;
     HEAP32[i7 + i8 >> 2] = i8;
     i1 = i8 >>> 3;
     if (i8 >>> 0 < 256) {
      i3 = 1248 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[302] | 0;
      i1 = 1 << i1;
      if (i2 & i1) {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
        i20 = i1;
        i21 = i2;
       }
      } else {
       HEAP32[302] = i2 | i1;
       i20 = i3 + 8 | 0;
       i21 = i3;
      }
      HEAP32[i20 >> 2] = i7;
      HEAP32[i21 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i21;
      HEAP32[i7 + 12 >> 2] = i3;
      break;
     }
     i1 = i8 >>> 8;
     if (i1) if (i8 >>> 0 > 16777215) i3 = 31; else {
      i36 = (i1 + 1048320 | 0) >>> 16 & 8;
      i37 = i1 << i36;
      i35 = (i37 + 520192 | 0) >>> 16 & 4;
      i37 = i37 << i35;
      i3 = (i37 + 245760 | 0) >>> 16 & 2;
      i3 = 14 - (i35 | i36 | i3) + (i37 << i3 >>> 15) | 0;
      i3 = i8 >>> (i3 + 7 | 0) & 1 | i3 << 1;
     } else i3 = 0;
     i4 = 1512 + (i3 << 2) | 0;
     HEAP32[i7 + 28 >> 2] = i3;
     i1 = i7 + 16 | 0;
     HEAP32[i1 + 4 >> 2] = 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[303] | 0;
     i2 = 1 << i3;
     if (!(i1 & i2)) {
      HEAP32[303] = i1 | i2;
      HEAP32[i4 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i4;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     }
     i5 = i8 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
     i1 = HEAP32[i4 >> 2] | 0;
     while (1) {
      if ((HEAP32[i1 + 4 >> 2] & -8 | 0) == (i8 | 0)) {
       i3 = i1;
       i30 = 148;
       break;
      }
      i2 = i1 + 16 + (i5 >>> 31 << 2) | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if (!i3) {
       i30 = 145;
       break;
      } else {
       i5 = i5 << 1;
       i1 = i3;
      }
     }
     if ((i30 | 0) == 145) if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i1;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     } else if ((i30 | 0) == 148) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i37 = HEAP32[306] | 0;
      if (i2 >>> 0 >= i37 >>> 0 & i3 >>> 0 >= i37 >>> 0) {
       HEAP32[i2 + 12 >> 2] = i7;
       HEAP32[i1 >> 2] = i7;
       HEAP32[i7 + 8 >> 2] = i2;
       HEAP32[i7 + 12 >> 2] = i3;
       HEAP32[i7 + 24 >> 2] = 0;
       break;
      } else _abort();
     }
    } else {
     i37 = i8 + i14 | 0;
     HEAP32[i9 + 4 >> 2] = i37 | 3;
     i37 = i9 + i37 + 4 | 0;
     HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
    } while (0);
    i37 = i9 + 8 | 0;
    return i37 | 0;
   }
  }
 } else i14 = -1; while (0);
 i3 = HEAP32[304] | 0;
 if (i3 >>> 0 >= i14 >>> 0) {
  i1 = i3 - i14 | 0;
  i2 = HEAP32[307] | 0;
  if (i1 >>> 0 > 15) {
   i37 = i2 + i14 | 0;
   HEAP32[307] = i37;
   HEAP32[304] = i1;
   HEAP32[i37 + 4 >> 2] = i1 | 1;
   HEAP32[i37 + i1 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i14 | 3;
  } else {
   HEAP32[304] = 0;
   HEAP32[307] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i37 = i2 + i3 + 4 | 0;
   HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
  }
  i37 = i2 + 8 | 0;
  return i37 | 0;
 }
 i1 = HEAP32[305] | 0;
 if (i1 >>> 0 > i14 >>> 0) {
  i35 = i1 - i14 | 0;
  HEAP32[305] = i35;
  i37 = HEAP32[308] | 0;
  i36 = i37 + i14 | 0;
  HEAP32[308] = i36;
  HEAP32[i36 + 4 >> 2] = i35 | 1;
  HEAP32[i37 + 4 >> 2] = i14 | 3;
  i37 = i37 + 8 | 0;
  return i37 | 0;
 }
 do if (!(HEAP32[420] | 0)) {
  i1 = _sysconf(30) | 0;
  if (!(i1 + -1 & i1)) {
   HEAP32[422] = i1;
   HEAP32[421] = i1;
   HEAP32[423] = -1;
   HEAP32[424] = -1;
   HEAP32[425] = 0;
   HEAP32[413] = 0;
   HEAP32[420] = (_time(0) | 0) & -16 ^ 1431655768;
   break;
  } else _abort();
 } while (0);
 i7 = i14 + 48 | 0;
 i6 = HEAP32[422] | 0;
 i8 = i14 + 47 | 0;
 i5 = i6 + i8 | 0;
 i6 = 0 - i6 | 0;
 i9 = i5 & i6;
 if (i9 >>> 0 <= i14 >>> 0) {
  i37 = 0;
  return i37 | 0;
 }
 i1 = HEAP32[412] | 0;
 if ((i1 | 0) != 0 ? (i20 = HEAP32[410] | 0, i21 = i20 + i9 | 0, i21 >>> 0 <= i20 >>> 0 | i21 >>> 0 > i1 >>> 0) : 0) {
  i37 = 0;
  return i37 | 0;
 }
 L257 : do if (!(HEAP32[413] & 4)) {
  i1 = HEAP32[308] | 0;
  L259 : do if (i1) {
   i3 = 1656;
   while (1) {
    i2 = HEAP32[i3 >> 2] | 0;
    if (i2 >>> 0 <= i1 >>> 0 ? (i17 = i3 + 4 | 0, (i2 + (HEAP32[i17 >> 2] | 0) | 0) >>> 0 > i1 >>> 0) : 0) {
     i4 = i3;
     i3 = i17;
     break;
    }
    i3 = HEAP32[i3 + 8 >> 2] | 0;
    if (!i3) {
     i30 = 173;
     break L259;
    }
   }
   i1 = i5 - (HEAP32[305] | 0) & i6;
   if (i1 >>> 0 < 2147483647) {
    i2 = _sbrk(i1 | 0) | 0;
    if ((i2 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0)) {
     if ((i2 | 0) != (-1 | 0)) {
      i7 = i2;
      i5 = i1;
      i30 = 193;
      break L257;
     }
    } else i30 = 183;
   }
  } else i30 = 173; while (0);
  do if ((i30 | 0) == 173 ? (i19 = _sbrk(0) | 0, (i19 | 0) != (-1 | 0)) : 0) {
   i1 = i19;
   i2 = HEAP32[421] | 0;
   i3 = i2 + -1 | 0;
   if (!(i3 & i1)) i1 = i9; else i1 = i9 - i1 + (i3 + i1 & 0 - i2) | 0;
   i2 = HEAP32[410] | 0;
   i3 = i2 + i1 | 0;
   if (i1 >>> 0 > i14 >>> 0 & i1 >>> 0 < 2147483647) {
    i21 = HEAP32[412] | 0;
    if ((i21 | 0) != 0 ? i3 >>> 0 <= i2 >>> 0 | i3 >>> 0 > i21 >>> 0 : 0) break;
    i2 = _sbrk(i1 | 0) | 0;
    if ((i2 | 0) == (i19 | 0)) {
     i7 = i19;
     i5 = i1;
     i30 = 193;
     break L257;
    } else i30 = 183;
   }
  } while (0);
  L279 : do if ((i30 | 0) == 183) {
   i3 = 0 - i1 | 0;
   do if (i7 >>> 0 > i1 >>> 0 & (i1 >>> 0 < 2147483647 & (i2 | 0) != (-1 | 0)) ? (i22 = HEAP32[422] | 0, i22 = i8 - i1 + i22 & 0 - i22, i22 >>> 0 < 2147483647) : 0) if ((_sbrk(i22 | 0) | 0) == (-1 | 0)) {
    _sbrk(i3 | 0) | 0;
    break L279;
   } else {
    i1 = i22 + i1 | 0;
    break;
   } while (0);
   if ((i2 | 0) != (-1 | 0)) {
    i7 = i2;
    i5 = i1;
    i30 = 193;
    break L257;
   }
  } while (0);
  HEAP32[413] = HEAP32[413] | 4;
  i30 = 190;
 } else i30 = 190; while (0);
 if ((((i30 | 0) == 190 ? i9 >>> 0 < 2147483647 : 0) ? (i23 = _sbrk(i9 | 0) | 0, i24 = _sbrk(0) | 0, i23 >>> 0 < i24 >>> 0 & ((i23 | 0) != (-1 | 0) & (i24 | 0) != (-1 | 0))) : 0) ? (i25 = i24 - i23 | 0, i25 >>> 0 > (i14 + 40 | 0) >>> 0) : 0) {
  i7 = i23;
  i5 = i25;
  i30 = 193;
 }
 if ((i30 | 0) == 193) {
  i1 = (HEAP32[410] | 0) + i5 | 0;
  HEAP32[410] = i1;
  if (i1 >>> 0 > (HEAP32[411] | 0) >>> 0) HEAP32[411] = i1;
  i8 = HEAP32[308] | 0;
  do if (i8) {
   i4 = 1656;
   do {
    i1 = HEAP32[i4 >> 2] | 0;
    i2 = i4 + 4 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i7 | 0) == (i1 + i3 | 0)) {
     i26 = i1;
     i27 = i2;
     i28 = i3;
     i29 = i4;
     i30 = 203;
     break;
    }
    i4 = HEAP32[i4 + 8 >> 2] | 0;
   } while ((i4 | 0) != 0);
   if (((i30 | 0) == 203 ? (HEAP32[i29 + 12 >> 2] & 8 | 0) == 0 : 0) ? i8 >>> 0 < i7 >>> 0 & i8 >>> 0 >= i26 >>> 0 : 0) {
    HEAP32[i27 >> 2] = i28 + i5;
    i37 = i8 + 8 | 0;
    i37 = (i37 & 7 | 0) == 0 ? 0 : 0 - i37 & 7;
    i36 = i8 + i37 | 0;
    i37 = i5 - i37 + (HEAP32[305] | 0) | 0;
    HEAP32[308] = i36;
    HEAP32[305] = i37;
    HEAP32[i36 + 4 >> 2] = i37 | 1;
    HEAP32[i36 + i37 + 4 >> 2] = 40;
    HEAP32[309] = HEAP32[424];
    break;
   }
   i1 = HEAP32[306] | 0;
   if (i7 >>> 0 < i1 >>> 0) {
    HEAP32[306] = i7;
    i9 = i7;
   } else i9 = i1;
   i3 = i7 + i5 | 0;
   i1 = 1656;
   while (1) {
    if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) {
     i2 = i1;
     i30 = 211;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
    if (!i1) {
     i2 = 1656;
     break;
    }
   }
   if ((i30 | 0) == 211) if (!(HEAP32[i1 + 12 >> 2] & 8)) {
    HEAP32[i2 >> 2] = i7;
    i11 = i1 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i5;
    i11 = i7 + 8 | 0;
    i11 = i7 + ((i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7) | 0;
    i1 = i3 + 8 | 0;
    i1 = i3 + ((i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7) | 0;
    i10 = i11 + i14 | 0;
    i6 = i1 - i11 - i14 | 0;
    HEAP32[i11 + 4 >> 2] = i14 | 3;
    do if ((i1 | 0) != (i8 | 0)) {
     if ((i1 | 0) == (HEAP32[307] | 0)) {
      i37 = (HEAP32[304] | 0) + i6 | 0;
      HEAP32[304] = i37;
      HEAP32[307] = i10;
      HEAP32[i10 + 4 >> 2] = i37 | 1;
      HEAP32[i10 + i37 >> 2] = i37;
      break;
     }
     i2 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i2 & 3 | 0) == 1) {
      i8 = i2 & -8;
      i5 = i2 >>> 3;
      L331 : do if (i2 >>> 0 >= 256) {
       i7 = HEAP32[i1 + 24 >> 2] | 0;
       i4 = HEAP32[i1 + 12 >> 2] | 0;
       do if ((i4 | 0) == (i1 | 0)) {
        i3 = i1 + 16 | 0;
        i4 = i3 + 4 | 0;
        i2 = HEAP32[i4 >> 2] | 0;
        if (!i2) {
         i2 = HEAP32[i3 >> 2] | 0;
         if (!i2) {
          i35 = 0;
          break;
         }
        } else i3 = i4;
        while (1) {
         i4 = i2 + 20 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (i5) {
          i2 = i5;
          i3 = i4;
          continue;
         }
         i4 = i2 + 16 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (!i5) break; else {
          i2 = i5;
          i3 = i4;
         }
        }
        if (i3 >>> 0 < i9 >>> 0) _abort(); else {
         HEAP32[i3 >> 2] = 0;
         i35 = i2;
         break;
        }
       } else {
        i5 = HEAP32[i1 + 8 >> 2] | 0;
        if (i5 >>> 0 < i9 >>> 0) _abort();
        i2 = i5 + 12 | 0;
        if ((HEAP32[i2 >> 2] | 0) != (i1 | 0)) _abort();
        i3 = i4 + 8 | 0;
        if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) {
         HEAP32[i2 >> 2] = i4;
         HEAP32[i3 >> 2] = i5;
         i35 = i4;
         break;
        } else _abort();
       } while (0);
       if (!i7) break;
       i2 = HEAP32[i1 + 28 >> 2] | 0;
       i3 = 1512 + (i2 << 2) | 0;
       do if ((i1 | 0) != (HEAP32[i3 >> 2] | 0)) {
        if (i7 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
        i2 = i7 + 16 | 0;
        if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) HEAP32[i2 >> 2] = i35; else HEAP32[i7 + 20 >> 2] = i35;
        if (!i35) break L331;
       } else {
        HEAP32[i3 >> 2] = i35;
        if (i35) break;
        HEAP32[303] = HEAP32[303] & ~(1 << i2);
        break L331;
       } while (0);
       i4 = HEAP32[306] | 0;
       if (i35 >>> 0 < i4 >>> 0) _abort();
       HEAP32[i35 + 24 >> 2] = i7;
       i2 = i1 + 16 | 0;
       i3 = HEAP32[i2 >> 2] | 0;
       do if (i3) if (i3 >>> 0 < i4 >>> 0) _abort(); else {
        HEAP32[i35 + 16 >> 2] = i3;
        HEAP32[i3 + 24 >> 2] = i35;
        break;
       } while (0);
       i2 = HEAP32[i2 + 4 >> 2] | 0;
       if (!i2) break;
       if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
        HEAP32[i35 + 20 >> 2] = i2;
        HEAP32[i2 + 24 >> 2] = i35;
        break;
       }
      } else {
       i3 = HEAP32[i1 + 8 >> 2] | 0;
       i4 = HEAP32[i1 + 12 >> 2] | 0;
       i2 = 1248 + (i5 << 1 << 2) | 0;
       do if ((i3 | 0) != (i2 | 0)) {
        if (i3 >>> 0 < i9 >>> 0) _abort();
        if ((HEAP32[i3 + 12 >> 2] | 0) == (i1 | 0)) break;
        _abort();
       } while (0);
       if ((i4 | 0) == (i3 | 0)) {
        HEAP32[302] = HEAP32[302] & ~(1 << i5);
        break;
       }
       do if ((i4 | 0) == (i2 | 0)) i32 = i4 + 8 | 0; else {
        if (i4 >>> 0 < i9 >>> 0) _abort();
        i2 = i4 + 8 | 0;
        if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) {
         i32 = i2;
         break;
        }
        _abort();
       } while (0);
       HEAP32[i3 + 12 >> 2] = i4;
       HEAP32[i32 >> 2] = i3;
      } while (0);
      i1 = i1 + i8 | 0;
      i6 = i8 + i6 | 0;
     }
     i1 = i1 + 4 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
     HEAP32[i10 + 4 >> 2] = i6 | 1;
     HEAP32[i10 + i6 >> 2] = i6;
     i1 = i6 >>> 3;
     if (i6 >>> 0 < 256) {
      i3 = 1248 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[302] | 0;
      i1 = 1 << i1;
      do if (!(i2 & i1)) {
       HEAP32[302] = i2 | i1;
       i36 = i3 + 8 | 0;
       i37 = i3;
      } else {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 >= (HEAP32[306] | 0) >>> 0) {
        i36 = i1;
        i37 = i2;
        break;
       }
       _abort();
      } while (0);
      HEAP32[i36 >> 2] = i10;
      HEAP32[i37 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i37;
      HEAP32[i10 + 12 >> 2] = i3;
      break;
     }
     i1 = i6 >>> 8;
     do if (!i1) i3 = 0; else {
      if (i6 >>> 0 > 16777215) {
       i3 = 31;
       break;
      }
      i36 = (i1 + 1048320 | 0) >>> 16 & 8;
      i37 = i1 << i36;
      i35 = (i37 + 520192 | 0) >>> 16 & 4;
      i37 = i37 << i35;
      i3 = (i37 + 245760 | 0) >>> 16 & 2;
      i3 = 14 - (i35 | i36 | i3) + (i37 << i3 >>> 15) | 0;
      i3 = i6 >>> (i3 + 7 | 0) & 1 | i3 << 1;
     } while (0);
     i4 = 1512 + (i3 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i3;
     i1 = i10 + 16 | 0;
     HEAP32[i1 + 4 >> 2] = 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[303] | 0;
     i2 = 1 << i3;
     if (!(i1 & i2)) {
      HEAP32[303] = i1 | i2;
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i4;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     }
     i5 = i6 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
     i1 = HEAP32[i4 >> 2] | 0;
     while (1) {
      if ((HEAP32[i1 + 4 >> 2] & -8 | 0) == (i6 | 0)) {
       i3 = i1;
       i30 = 281;
       break;
      }
      i2 = i1 + 16 + (i5 >>> 31 << 2) | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if (!i3) {
       i30 = 278;
       break;
      } else {
       i5 = i5 << 1;
       i1 = i3;
      }
     }
     if ((i30 | 0) == 278) if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i1;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     } else if ((i30 | 0) == 281) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i37 = HEAP32[306] | 0;
      if (i2 >>> 0 >= i37 >>> 0 & i3 >>> 0 >= i37 >>> 0) {
       HEAP32[i2 + 12 >> 2] = i10;
       HEAP32[i1 >> 2] = i10;
       HEAP32[i10 + 8 >> 2] = i2;
       HEAP32[i10 + 12 >> 2] = i3;
       HEAP32[i10 + 24 >> 2] = 0;
       break;
      } else _abort();
     }
    } else {
     i37 = (HEAP32[305] | 0) + i6 | 0;
     HEAP32[305] = i37;
     HEAP32[308] = i10;
     HEAP32[i10 + 4 >> 2] = i37 | 1;
    } while (0);
    i37 = i11 + 8 | 0;
    return i37 | 0;
   } else i2 = 1656;
   while (1) {
    i1 = HEAP32[i2 >> 2] | 0;
    if (i1 >>> 0 <= i8 >>> 0 ? (i31 = i1 + (HEAP32[i2 + 4 >> 2] | 0) | 0, i31 >>> 0 > i8 >>> 0) : 0) {
     i2 = i31;
     break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   }
   i6 = i2 + -47 | 0;
   i3 = i6 + 8 | 0;
   i3 = i6 + ((i3 & 7 | 0) == 0 ? 0 : 0 - i3 & 7) | 0;
   i6 = i8 + 16 | 0;
   i3 = i3 >>> 0 < i6 >>> 0 ? i8 : i3;
   i1 = i3 + 8 | 0;
   i4 = i7 + 8 | 0;
   i4 = (i4 & 7 | 0) == 0 ? 0 : 0 - i4 & 7;
   i37 = i7 + i4 | 0;
   i4 = i5 + -40 - i4 | 0;
   HEAP32[308] = i37;
   HEAP32[305] = i4;
   HEAP32[i37 + 4 >> 2] = i4 | 1;
   HEAP32[i37 + i4 + 4 >> 2] = 40;
   HEAP32[309] = HEAP32[424];
   i4 = i3 + 4 | 0;
   HEAP32[i4 >> 2] = 27;
   HEAP32[i1 >> 2] = HEAP32[414];
   HEAP32[i1 + 4 >> 2] = HEAP32[415];
   HEAP32[i1 + 8 >> 2] = HEAP32[416];
   HEAP32[i1 + 12 >> 2] = HEAP32[417];
   HEAP32[414] = i7;
   HEAP32[415] = i5;
   HEAP32[417] = 0;
   HEAP32[416] = i1;
   i1 = i3 + 24 | 0;
   do {
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i1 + 4 | 0) >>> 0 < i2 >>> 0);
   if ((i3 | 0) != (i8 | 0)) {
    i7 = i3 - i8 | 0;
    HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -2;
    HEAP32[i8 + 4 >> 2] = i7 | 1;
    HEAP32[i3 >> 2] = i7;
    i1 = i7 >>> 3;
    if (i7 >>> 0 < 256) {
     i3 = 1248 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[302] | 0;
     i1 = 1 << i1;
     if (i2 & i1) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
       i33 = i1;
       i34 = i2;
      }
     } else {
      HEAP32[302] = i2 | i1;
      i33 = i3 + 8 | 0;
      i34 = i3;
     }
     HEAP32[i33 >> 2] = i8;
     HEAP32[i34 + 12 >> 2] = i8;
     HEAP32[i8 + 8 >> 2] = i34;
     HEAP32[i8 + 12 >> 2] = i3;
     break;
    }
    i1 = i7 >>> 8;
    if (i1) if (i7 >>> 0 > 16777215) i3 = 31; else {
     i36 = (i1 + 1048320 | 0) >>> 16 & 8;
     i37 = i1 << i36;
     i35 = (i37 + 520192 | 0) >>> 16 & 4;
     i37 = i37 << i35;
     i3 = (i37 + 245760 | 0) >>> 16 & 2;
     i3 = 14 - (i35 | i36 | i3) + (i37 << i3 >>> 15) | 0;
     i3 = i7 >>> (i3 + 7 | 0) & 1 | i3 << 1;
    } else i3 = 0;
    i5 = 1512 + (i3 << 2) | 0;
    HEAP32[i8 + 28 >> 2] = i3;
    HEAP32[i8 + 20 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = HEAP32[303] | 0;
    i2 = 1 << i3;
    if (!(i1 & i2)) {
     HEAP32[303] = i1 | i2;
     HEAP32[i5 >> 2] = i8;
     HEAP32[i8 + 24 >> 2] = i5;
     HEAP32[i8 + 12 >> 2] = i8;
     HEAP32[i8 + 8 >> 2] = i8;
     break;
    }
    i4 = i7 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
    i1 = HEAP32[i5 >> 2] | 0;
    while (1) {
     if ((HEAP32[i1 + 4 >> 2] & -8 | 0) == (i7 | 0)) {
      i3 = i1;
      i30 = 307;
      break;
     }
     i2 = i1 + 16 + (i4 >>> 31 << 2) | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if (!i3) {
      i30 = 304;
      break;
     } else {
      i4 = i4 << 1;
      i1 = i3;
     }
    }
    if ((i30 | 0) == 304) if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
     HEAP32[i2 >> 2] = i8;
     HEAP32[i8 + 24 >> 2] = i1;
     HEAP32[i8 + 12 >> 2] = i8;
     HEAP32[i8 + 8 >> 2] = i8;
     break;
    } else if ((i30 | 0) == 307) {
     i1 = i3 + 8 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     i37 = HEAP32[306] | 0;
     if (i2 >>> 0 >= i37 >>> 0 & i3 >>> 0 >= i37 >>> 0) {
      HEAP32[i2 + 12 >> 2] = i8;
      HEAP32[i1 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i2;
      HEAP32[i8 + 12 >> 2] = i3;
      HEAP32[i8 + 24 >> 2] = 0;
      break;
     } else _abort();
    }
   }
  } else {
   i37 = HEAP32[306] | 0;
   if ((i37 | 0) == 0 | i7 >>> 0 < i37 >>> 0) HEAP32[306] = i7;
   HEAP32[414] = i7;
   HEAP32[415] = i5;
   HEAP32[417] = 0;
   HEAP32[311] = HEAP32[420];
   HEAP32[310] = -1;
   i1 = 0;
   do {
    i37 = 1248 + (i1 << 1 << 2) | 0;
    HEAP32[i37 + 12 >> 2] = i37;
    HEAP32[i37 + 8 >> 2] = i37;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i37 = i7 + 8 | 0;
   i37 = (i37 & 7 | 0) == 0 ? 0 : 0 - i37 & 7;
   i36 = i7 + i37 | 0;
   i37 = i5 + -40 - i37 | 0;
   HEAP32[308] = i36;
   HEAP32[305] = i37;
   HEAP32[i36 + 4 >> 2] = i37 | 1;
   HEAP32[i36 + i37 + 4 >> 2] = 40;
   HEAP32[309] = HEAP32[424];
  } while (0);
  i1 = HEAP32[305] | 0;
  if (i1 >>> 0 > i14 >>> 0) {
   i35 = i1 - i14 | 0;
   HEAP32[305] = i35;
   i37 = HEAP32[308] | 0;
   i36 = i37 + i14 | 0;
   HEAP32[308] = i36;
   HEAP32[i36 + 4 >> 2] = i35 | 1;
   HEAP32[i37 + 4 >> 2] = i14 | 3;
   i37 = i37 + 8 | 0;
   return i37 | 0;
  }
 }
 HEAP32[(___errno_location() | 0) >> 2] = 12;
 i37 = 0;
 return i37 | 0;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i7 = HEAP32[306] | 0;
 if (i3 >>> 0 < i7 >>> 0) _abort();
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 i2 = i1 & 3;
 if ((i2 | 0) == 1) _abort();
 i4 = i1 & -8;
 i12 = i3 + i4 | 0;
 do if (!(i1 & 1)) {
  i1 = HEAP32[i3 >> 2] | 0;
  if (!i2) return;
  i10 = i3 + (0 - i1) | 0;
  i9 = i1 + i4 | 0;
  if (i10 >>> 0 < i7 >>> 0) _abort();
  if ((i10 | 0) == (HEAP32[307] | 0)) {
   i1 = i12 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i16 = i10;
    i6 = i9;
    break;
   }
   HEAP32[304] = i9;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i10 + 4 >> 2] = i9 | 1;
   HEAP32[i10 + i9 >> 2] = i9;
   return;
  }
  i4 = i1 >>> 3;
  if (i1 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i3 = HEAP32[i10 + 12 >> 2] | 0;
   i1 = 1248 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < i7 >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i10 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[302] = HEAP32[302] & ~(1 << i4);
    i16 = i10;
    i6 = i9;
    break;
   }
   if ((i3 | 0) != (i1 | 0)) {
    if (i3 >>> 0 < i7 >>> 0) _abort();
    i1 = i3 + 8 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i10 | 0)) i5 = i1; else _abort();
   } else i5 = i3 + 8 | 0;
   HEAP32[i2 + 12 >> 2] = i3;
   HEAP32[i5 >> 2] = i2;
   i16 = i10;
   i6 = i9;
   break;
  }
  i5 = HEAP32[i10 + 24 >> 2] | 0;
  i3 = HEAP32[i10 + 12 >> 2] | 0;
  do if ((i3 | 0) == (i10 | 0)) {
   i2 = i10 + 16 | 0;
   i3 = i2 + 4 | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i2 >> 2] | 0;
    if (!i1) {
     i8 = 0;
     break;
    }
   } else i2 = i3;
   while (1) {
    i3 = i1 + 20 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (i4) {
     i1 = i4;
     i2 = i3;
     continue;
    }
    i3 = i1 + 16 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) break; else {
     i1 = i4;
     i2 = i3;
    }
   }
   if (i2 >>> 0 < i7 >>> 0) _abort(); else {
    HEAP32[i2 >> 2] = 0;
    i8 = i1;
    break;
   }
  } else {
   i4 = HEAP32[i10 + 8 >> 2] | 0;
   if (i4 >>> 0 < i7 >>> 0) _abort();
   i1 = i4 + 12 | 0;
   if ((HEAP32[i1 >> 2] | 0) != (i10 | 0)) _abort();
   i2 = i3 + 8 | 0;
   if ((HEAP32[i2 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i1 >> 2] = i3;
    HEAP32[i2 >> 2] = i4;
    i8 = i3;
    break;
   } else _abort();
  } while (0);
  if (i5) {
   i1 = HEAP32[i10 + 28 >> 2] | 0;
   i2 = 1512 + (i1 << 2) | 0;
   if ((i10 | 0) == (HEAP32[i2 >> 2] | 0)) {
    HEAP32[i2 >> 2] = i8;
    if (!i8) {
     HEAP32[303] = HEAP32[303] & ~(1 << i1);
     i16 = i10;
     i6 = i9;
     break;
    }
   } else {
    if (i5 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
    i1 = i5 + 16 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i10 | 0)) HEAP32[i1 >> 2] = i8; else HEAP32[i5 + 20 >> 2] = i8;
    if (!i8) {
     i16 = i10;
     i6 = i9;
     break;
    }
   }
   i3 = HEAP32[306] | 0;
   if (i8 >>> 0 < i3 >>> 0) _abort();
   HEAP32[i8 + 24 >> 2] = i5;
   i1 = i10 + 16 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   do if (i2) if (i2 >>> 0 < i3 >>> 0) _abort(); else {
    HEAP32[i8 + 16 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i8;
    break;
   } while (0);
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   if (i1) if (i1 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
    HEAP32[i8 + 20 >> 2] = i1;
    HEAP32[i1 + 24 >> 2] = i8;
    i16 = i10;
    i6 = i9;
    break;
   } else {
    i16 = i10;
    i6 = i9;
   }
  } else {
   i16 = i10;
   i6 = i9;
  }
 } else {
  i16 = i3;
  i6 = i4;
 } while (0);
 if (i16 >>> 0 >= i12 >>> 0) _abort();
 i1 = i12 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!(i2 & 1)) _abort();
 if (!(i2 & 2)) {
  if ((i12 | 0) == (HEAP32[308] | 0)) {
   i15 = (HEAP32[305] | 0) + i6 | 0;
   HEAP32[305] = i15;
   HEAP32[308] = i16;
   HEAP32[i16 + 4 >> 2] = i15 | 1;
   if ((i16 | 0) != (HEAP32[307] | 0)) return;
   HEAP32[307] = 0;
   HEAP32[304] = 0;
   return;
  }
  if ((i12 | 0) == (HEAP32[307] | 0)) {
   i15 = (HEAP32[304] | 0) + i6 | 0;
   HEAP32[304] = i15;
   HEAP32[307] = i16;
   HEAP32[i16 + 4 >> 2] = i15 | 1;
   HEAP32[i16 + i15 >> 2] = i15;
   return;
  }
  i6 = (i2 & -8) + i6 | 0;
  i4 = i2 >>> 3;
  do if (i2 >>> 0 >= 256) {
   i5 = HEAP32[i12 + 24 >> 2] | 0;
   i1 = HEAP32[i12 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i12 | 0)) {
    i2 = i12 + 16 | 0;
    i3 = i2 + 4 | 0;
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i13 = 0;
      break;
     }
    } else i2 = i3;
    while (1) {
     i3 = i1 + 20 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (i4) {
      i1 = i4;
      i2 = i3;
      continue;
     }
     i3 = i1 + 16 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) break; else {
      i1 = i4;
      i2 = i3;
     }
    }
    if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
     HEAP32[i2 >> 2] = 0;
     i13 = i1;
     break;
    }
   } else {
    i2 = HEAP32[i12 + 8 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
    i3 = i2 + 12 | 0;
    if ((HEAP32[i3 >> 2] | 0) != (i12 | 0)) _abort();
    i4 = i1 + 8 | 0;
    if ((HEAP32[i4 >> 2] | 0) == (i12 | 0)) {
     HEAP32[i3 >> 2] = i1;
     HEAP32[i4 >> 2] = i2;
     i13 = i1;
     break;
    } else _abort();
   } while (0);
   if (i5) {
    i1 = HEAP32[i12 + 28 >> 2] | 0;
    i2 = 1512 + (i1 << 2) | 0;
    if ((i12 | 0) == (HEAP32[i2 >> 2] | 0)) {
     HEAP32[i2 >> 2] = i13;
     if (!i13) {
      HEAP32[303] = HEAP32[303] & ~(1 << i1);
      break;
     }
    } else {
     if (i5 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
     i1 = i5 + 16 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (i12 | 0)) HEAP32[i1 >> 2] = i13; else HEAP32[i5 + 20 >> 2] = i13;
     if (!i13) break;
    }
    i3 = HEAP32[306] | 0;
    if (i13 >>> 0 < i3 >>> 0) _abort();
    HEAP32[i13 + 24 >> 2] = i5;
    i1 = i12 + 16 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    do if (i2) if (i2 >>> 0 < i3 >>> 0) _abort(); else {
     HEAP32[i13 + 16 >> 2] = i2;
     HEAP32[i2 + 24 >> 2] = i13;
     break;
    } while (0);
    i1 = HEAP32[i1 + 4 >> 2] | 0;
    if (i1) if (i1 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
     HEAP32[i13 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i13;
     break;
    }
   }
  } else {
   i2 = HEAP32[i12 + 8 >> 2] | 0;
   i3 = HEAP32[i12 + 12 >> 2] | 0;
   i1 = 1248 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i12 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[302] = HEAP32[302] & ~(1 << i4);
    break;
   }
   if ((i3 | 0) != (i1 | 0)) {
    if (i3 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort();
    i1 = i3 + 8 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i12 | 0)) i11 = i1; else _abort();
   } else i11 = i3 + 8 | 0;
   HEAP32[i2 + 12 >> 2] = i3;
   HEAP32[i11 >> 2] = i2;
  } while (0);
  HEAP32[i16 + 4 >> 2] = i6 | 1;
  HEAP32[i16 + i6 >> 2] = i6;
  if ((i16 | 0) == (HEAP32[307] | 0)) {
   HEAP32[304] = i6;
   return;
  }
 } else {
  HEAP32[i1 >> 2] = i2 & -2;
  HEAP32[i16 + 4 >> 2] = i6 | 1;
  HEAP32[i16 + i6 >> 2] = i6;
 }
 i1 = i6 >>> 3;
 if (i6 >>> 0 < 256) {
  i3 = 1248 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[302] | 0;
  i1 = 1 << i1;
  if (i2 & i1) {
   i1 = i3 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
    i14 = i1;
    i15 = i2;
   }
  } else {
   HEAP32[302] = i2 | i1;
   i14 = i3 + 8 | 0;
   i15 = i3;
  }
  HEAP32[i14 >> 2] = i16;
  HEAP32[i15 + 12 >> 2] = i16;
  HEAP32[i16 + 8 >> 2] = i15;
  HEAP32[i16 + 12 >> 2] = i3;
  return;
 }
 i1 = i6 >>> 8;
 if (i1) if (i6 >>> 0 > 16777215) i3 = 31; else {
  i14 = (i1 + 1048320 | 0) >>> 16 & 8;
  i15 = i1 << i14;
  i13 = (i15 + 520192 | 0) >>> 16 & 4;
  i15 = i15 << i13;
  i3 = (i15 + 245760 | 0) >>> 16 & 2;
  i3 = 14 - (i13 | i14 | i3) + (i15 << i3 >>> 15) | 0;
  i3 = i6 >>> (i3 + 7 | 0) & 1 | i3 << 1;
 } else i3 = 0;
 i4 = 1512 + (i3 << 2) | 0;
 HEAP32[i16 + 28 >> 2] = i3;
 HEAP32[i16 + 20 >> 2] = 0;
 HEAP32[i16 + 16 >> 2] = 0;
 i1 = HEAP32[303] | 0;
 i2 = 1 << i3;
 do if (i1 & i2) {
  i5 = i6 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
  i1 = HEAP32[i4 >> 2] | 0;
  while (1) {
   if ((HEAP32[i1 + 4 >> 2] & -8 | 0) == (i6 | 0)) {
    i3 = i1;
    i4 = 130;
    break;
   }
   i2 = i1 + 16 + (i5 >>> 31 << 2) | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) {
    i4 = 127;
    break;
   } else {
    i5 = i5 << 1;
    i1 = i3;
   }
  }
  if ((i4 | 0) == 127) if (i2 >>> 0 < (HEAP32[306] | 0) >>> 0) _abort(); else {
   HEAP32[i2 >> 2] = i16;
   HEAP32[i16 + 24 >> 2] = i1;
   HEAP32[i16 + 12 >> 2] = i16;
   HEAP32[i16 + 8 >> 2] = i16;
   break;
  } else if ((i4 | 0) == 130) {
   i1 = i3 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   i15 = HEAP32[306] | 0;
   if (i2 >>> 0 >= i15 >>> 0 & i3 >>> 0 >= i15 >>> 0) {
    HEAP32[i2 + 12 >> 2] = i16;
    HEAP32[i1 >> 2] = i16;
    HEAP32[i16 + 8 >> 2] = i2;
    HEAP32[i16 + 12 >> 2] = i3;
    HEAP32[i16 + 24 >> 2] = 0;
    break;
   } else _abort();
  }
 } else {
  HEAP32[303] = i1 | i2;
  HEAP32[i4 >> 2] = i16;
  HEAP32[i16 + 24 >> 2] = i4;
  HEAP32[i16 + 12 >> 2] = i16;
  HEAP32[i16 + 8 >> 2] = i16;
 } while (0);
 i16 = (HEAP32[310] | 0) + -1 | 0;
 HEAP32[310] = i16;
 if (!i16) i1 = 1664; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[310] = -1;
 return;
}

function ___stdio_write(i14, i2, i1) {
 i14 = i14 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i11 = i15 + 16 | 0;
 i10 = i15;
 i3 = i15 + 32 | 0;
 i12 = i14 + 28 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i13 = i14 + 20 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) - i4 | 0;
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i3 + 8 >> 2] = i2;
 HEAP32[i3 + 12 >> 2] = i1;
 i8 = i14 + 60 | 0;
 i9 = i14 + 44 | 0;
 i2 = 2;
 i4 = i4 + i1 | 0;
 while (1) {
  if (!(HEAP32[290] | 0)) {
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i3;
   HEAP32[i11 + 8 >> 2] = i2;
   i6 = ___syscall_ret(___syscall146(146, i11 | 0) | 0) | 0;
  } else {
   _pthread_cleanup_push(1, i14 | 0);
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i3;
   HEAP32[i10 + 8 >> 2] = i2;
   i6 = ___syscall_ret(___syscall146(146, i10 | 0) | 0) | 0;
   _pthread_cleanup_pop(0);
  }
  if ((i4 | 0) == (i6 | 0)) {
   i4 = 6;
   break;
  }
  if ((i6 | 0) < 0) {
   i4 = 8;
   break;
  }
  i4 = i4 - i6 | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  if (i6 >>> 0 <= i5 >>> 0) if ((i2 | 0) == 2) {
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i6;
   i7 = i5;
   i2 = 2;
  } else i7 = i5; else {
   i7 = HEAP32[i9 >> 2] | 0;
   HEAP32[i12 >> 2] = i7;
   HEAP32[i13 >> 2] = i7;
   i7 = HEAP32[i3 + 12 >> 2] | 0;
   i6 = i6 - i5 | 0;
   i3 = i3 + 8 | 0;
   i2 = i2 + -1 | 0;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i6;
  HEAP32[i3 + 4 >> 2] = i7 - i6;
 }
 if ((i4 | 0) == 6) {
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i14 + 16 >> 2] = i11 + (HEAP32[i14 + 48 >> 2] | 0);
  i14 = i11;
  HEAP32[i12 >> 2] = i14;
  HEAP32[i13 >> 2] = i14;
 } else if ((i4 | 0) == 8) {
  HEAP32[i14 + 16 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 32;
  if ((i2 | 0) == 2) i1 = 0; else i1 = i1 - (HEAP32[i3 + 4 >> 2] | 0) | 0;
 }
 STACKTOP = i15;
 return i1 | 0;
}

function ___fwritex(i3, i4, i6) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i7 = 0;
 i1 = i6 + 16 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) if (!(___towrite(i6) | 0)) {
  i2 = HEAP32[i1 >> 2] | 0;
  i5 = 5;
 } else i1 = 0; else i5 = 5;
 L5 : do if ((i5 | 0) == 5) {
  i7 = i6 + 20 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  i5 = i1;
  if ((i2 - i1 | 0) >>> 0 < i4 >>> 0) {
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 3](i6, i3, i4) | 0;
   break;
  }
  L10 : do if ((HEAP8[i6 + 75 >> 0] | 0) > -1) {
   i1 = i4;
   while (1) {
    if (!i1) {
     i2 = i5;
     i1 = 0;
     break L10;
    }
    i2 = i1 + -1 | 0;
    if ((HEAP8[i3 + i2 >> 0] | 0) == 10) break; else i1 = i2;
   }
   if ((FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 3](i6, i3, i1) | 0) >>> 0 < i1 >>> 0) break L5;
   i4 = i4 - i1 | 0;
   i3 = i3 + i1 | 0;
   i2 = HEAP32[i7 >> 2] | 0;
  } else {
   i2 = i5;
   i1 = 0;
  } while (0);
  _memcpy(i2 | 0, i3 | 0, i4 | 0) | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i4;
  i1 = i1 + i4 | 0;
 } while (0);
 return i1 | 0;
}

function ___overflow(i8, i6) {
 i8 = i8 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i9;
 i5 = i6 & 255;
 HEAP8[i7 >> 0] = i5;
 i2 = i8 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!i3) if (!(___towrite(i8) | 0)) {
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = 4;
 } else i1 = -1; else i4 = 4;
 do if ((i4 | 0) == 4) {
  i2 = i8 + 20 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  if (i4 >>> 0 < i3 >>> 0 ? (i1 = i6 & 255, (i1 | 0) != (HEAP8[i8 + 75 >> 0] | 0)) : 0) {
   HEAP32[i2 >> 2] = i4 + 1;
   HEAP8[i4 >> 0] = i5;
   break;
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[i8 + 36 >> 2] & 3](i8, i7, 1) | 0) == 1) i1 = HEAPU8[i7 >> 0] | 0; else i1 = -1;
 } while (0);
 STACKTOP = i9;
 return i1 | 0;
}

function _fflush(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 do if (i2) {
  if ((HEAP32[i2 + 76 >> 2] | 0) <= -1) {
   i1 = ___fflush_unlocked(i2) | 0;
   break;
  }
  i3 = (___lockfile(i2) | 0) == 0;
  i1 = ___fflush_unlocked(i2) | 0;
  if (!i3) ___unlockfile(i2);
 } else {
  if (!(HEAP32[257] | 0)) i1 = 0; else i1 = _fflush(HEAP32[257] | 0) | 0;
  ___lock(1188);
  i2 = HEAP32[296] | 0;
  if (i2) do {
   if ((HEAP32[i2 + 76 >> 2] | 0) > -1) i3 = ___lockfile(i2) | 0; else i3 = 0;
   if ((HEAP32[i2 + 20 >> 2] | 0) >>> 0 > (HEAP32[i2 + 28 >> 2] | 0) >>> 0) i1 = ___fflush_unlocked(i2) | 0 | i1;
   if (i3) ___unlockfile(i2);
   i2 = HEAP32[i2 + 56 >> 2] | 0;
  } while ((i2 | 0) != 0);
  ___unlock(1188);
 } while (0);
 return i1 | 0;
}

function ___fflush_unlocked(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = i7 + 20 | 0;
 i5 = i7 + 28 | 0;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i5 >> 2] | 0) >>> 0 ? (FUNCTION_TABLE_iiii[HEAP32[i7 + 36 >> 2] & 3](i7, 0, 0) | 0, (HEAP32[i1 >> 2] | 0) == 0) : 0) i1 = -1; else {
  i6 = i7 + 4 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i3 = i7 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < i4 >>> 0) FUNCTION_TABLE_iiii[HEAP32[i7 + 40 >> 2] & 3](i7, i2 - i4 | 0, 1) | 0;
  HEAP32[i7 + 16 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i1 = 0;
 }
 return i1 | 0;
}

function _memcpy(i1, i4, i2) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) >= 4096) return _emscripten_memcpy_big(i1 | 0, i4 | 0, i2 | 0) | 0;
 i3 = i1 | 0;
 if ((i1 & 3) == (i4 & 3)) {
  while (i1 & 3) {
   if (!i2) return i3 | 0;
   HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
   i1 = i1 + 1 | 0;
   i4 = i4 + 1 | 0;
   i2 = i2 - 1 | 0;
  }
  while ((i2 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   i1 = i1 + 4 | 0;
   i4 = i4 + 4 | 0;
   i2 = i2 - 4 | 0;
  }
 }
 while ((i2 | 0) > 0) {
  HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
  i1 = i1 + 1 | 0;
  i4 = i4 + 1 | 0;
  i2 = i2 - 1 | 0;
 }
 return i3 | 0;
}

function runPostSets() {}
function _memset(i2, i6, i1) {
 i2 = i2 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i3 = i2 + i1 | 0;
 if ((i1 | 0) >= 20) {
  i6 = i6 & 255;
  i5 = i2 & 3;
  i7 = i6 | i6 << 8 | i6 << 16 | i6 << 24;
  i4 = i3 & ~3;
  if (i5) {
   i5 = i2 + 4 - i5 | 0;
   while ((i2 | 0) < (i5 | 0)) {
    HEAP8[i2 >> 0] = i6;
    i2 = i2 + 1 | 0;
   }
  }
  while ((i2 | 0) < (i4 | 0)) {
   HEAP32[i2 >> 2] = i7;
   i2 = i2 + 4 | 0;
  }
 }
 while ((i2 | 0) < (i3 | 0)) {
  HEAP8[i2 >> 0] = i6;
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}

function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = i1;
 L1 : do if (!(i4 & 3)) i3 = 4; else {
  i2 = i1;
  i1 = i4;
  while (1) {
   if (!(HEAP8[i2 >> 0] | 0)) break L1;
   i2 = i2 + 1 | 0;
   i1 = i2;
   if (!(i1 & 3)) {
    i1 = i2;
    i3 = 4;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 4) {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) i1 = i1 + 4 | 0; else break;
  }
  if ((i2 & 255) << 24 >> 24) do i1 = i1 + 1 | 0; while ((HEAP8[i1 >> 0] | 0) != 0);
 }
 return i1 - i4 | 0;
}

function _puts(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i4 = HEAP32[256] | 0;
 if ((HEAP32[i4 + 76 >> 2] | 0) > -1) i5 = ___lockfile(i4) | 0; else i5 = 0;
 do if ((_fputs(i3, i4) | 0) < 0) i1 = 1; else {
  if ((HEAP8[i4 + 75 >> 0] | 0) != 10 ? (i1 = i4 + 20 | 0, i2 = HEAP32[i1 >> 2] | 0, i2 >>> 0 < (HEAP32[i4 + 16 >> 2] | 0) >>> 0) : 0) {
   HEAP32[i1 >> 2] = i2 + 1;
   HEAP8[i2 >> 0] = 10;
   i1 = 0;
   break;
  }
  i1 = (___overflow(i4, 10) | 0) < 0;
 } while (0);
 if (i5) ___unlockfile(i4);
 return i1 << 31 >> 31 | 0;
}

function ___stdio_seek(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5;
 i3 = i5 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 + 60 >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i2;
 HEAP32[i6 + 12 >> 2] = i3;
 HEAP32[i6 + 16 >> 2] = i4;
 if ((___syscall_ret(___syscall140(140, i6 | 0) | 0) | 0) < 0) {
  HEAP32[i3 >> 2] = -1;
  i1 = -1;
 } else i1 = HEAP32[i3 >> 2] | 0;
 STACKTOP = i5;
 return i1 | 0;
}

function ___towrite(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i1 = i2 + 74 | 0;
 i3 = HEAP8[i1 >> 0] | 0;
 HEAP8[i1 >> 0] = i3 + 255 | i3;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!(i1 & 8)) {
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  i1 = HEAP32[i2 + 44 >> 2] | 0;
  HEAP32[i2 + 28 >> 2] = i1;
  HEAP32[i2 + 20 >> 2] = i1;
  HEAP32[i2 + 16 >> 2] = i1 + (HEAP32[i2 + 48 >> 2] | 0);
  i1 = 0;
 } else {
  HEAP32[i2 >> 2] = i1 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function ___stdout_write(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i5;
 HEAP32[i2 + 36 >> 2] = 3;
 if ((HEAP32[i2 >> 2] & 64 | 0) == 0 ? (HEAP32[i4 >> 2] = HEAP32[i2 + 60 >> 2], HEAP32[i4 + 4 >> 2] = 21505, HEAP32[i4 + 8 >> 2] = i5 + 12, (___syscall54(54, i4 | 0) | 0) != 0) : 0) HEAP8[i2 + 75 >> 0] = -1;
 i4 = ___stdio_write(i2, i1, i3) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr >> 0] = HEAP8[i1 >> 0];
 HEAP8[tempDoublePtr + 1 >> 0] = HEAP8[i1 + 1 >> 0];
 HEAP8[tempDoublePtr + 2 >> 0] = HEAP8[i1 + 2 >> 0];
 HEAP8[tempDoublePtr + 3 >> 0] = HEAP8[i1 + 3 >> 0];
 HEAP8[tempDoublePtr + 4 >> 0] = HEAP8[i1 + 4 >> 0];
 HEAP8[tempDoublePtr + 5 >> 0] = HEAP8[i1 + 5 >> 0];
 HEAP8[tempDoublePtr + 6 >> 0] = HEAP8[i1 + 6 >> 0];
 HEAP8[tempDoublePtr + 7 >> 0] = HEAP8[i1 + 7 >> 0];
}

function _fwrite(i2, i5, i1, i3) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i6 = 0;
 i4 = Math_imul(i1, i5) | 0;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) {
  i6 = (___lockfile(i3) | 0) == 0;
  i2 = ___fwritex(i2, i4, i3) | 0;
  if (!i6) ___unlockfile(i3);
 } else i2 = ___fwritex(i2, i4, i3) | 0;
 if ((i2 | 0) != (i4 | 0)) i1 = (i2 >>> 0) / (i5 >>> 0) | 0;
 return i1 | 0;
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 + 60 >> 2];
 i1 = ___syscall_ret(___syscall6(6, i3 | 0) | 0) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr >> 0] = HEAP8[i1 >> 0];
 HEAP8[tempDoublePtr + 1 >> 0] = HEAP8[i1 + 1 >> 0];
 HEAP8[tempDoublePtr + 2 >> 0] = HEAP8[i1 + 2 >> 0];
 HEAP8[tempDoublePtr + 3 >> 0] = HEAP8[i1 + 3 >> 0];
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 3](i1 | 0, i2 | 0, i3 | 0) | 0;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[(___errno_location() | 0) >> 2] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function ___errno_location() {
 var i1 = 0;
 if (!(HEAP32[290] | 0)) i1 = 1204; else i1 = HEAP32[(_pthread_self() | 0) + 60 >> 2] | 0;
 return i1 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 return i2 | 0;
}

function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!__THREW__) {
  __THREW__ = i1;
  threwValue = i2;
 }
}

function _fputs(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return (_fwrite(i2, _strlen(i2) | 0, 1, i1) | 0) + -1 | 0;
}

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 1](i1 | 0) | 0;
}

function _cleanup_418(i1) {
 i1 = i1 | 0;
 if (!(HEAP32[i1 + 68 >> 2] | 0)) ___unlockfile(i1);
 return;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function dynCall_vi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[i2 & 1](i1 | 0);
}

function b1(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(1);
 return 0;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}

function ___unlockfile(i1) {
 i1 = i1 | 0;
 return;
}

function ___lockfile(i1) {
 i1 = i1 | 0;
 return 0;
}

function _main() {
 _puts(1144) | 0;
 return 0;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,___stdout_write,___stdio_seek,___stdio_write];
var FUNCTION_TABLE_vi = [b2,_cleanup_418];

  return { _free: _free, _main: _main, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, _fflush: _fflush, ___errno_location: ___errno_location, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi };
})
;