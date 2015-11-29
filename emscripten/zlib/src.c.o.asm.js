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
  var cttz_i8=env.cttz_i8|0;

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
  var invoke_vii=env.invoke_vii;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var ___lock=env.___lock;
  var __exit=env.__exit;
  var _pthread_self=env._pthread_self;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var _abort=env._abort;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var ___syscall6=env.___syscall6;
  var _sbrk=env._sbrk;
  var _time=env._time;
  var ___setErrNo=env.___setErrNo;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var ___syscall140=env.___syscall140;
  var _exit=env._exit;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _sysconf=env._sysconf;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function _inflate(i78, i75) {
 i78 = i78 | 0;
 i75 = i75 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i76 = 0, i77 = 0, i79 = 0;
 i79 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i53 = i79;
 L1 : do if (((i78 | 0) != 0 ? (i74 = HEAP32[i78 + 28 >> 2] | 0, (i74 | 0) != 0) : 0) ? (i76 = i78 + 12 | 0, i1 = HEAP32[i76 >> 2] | 0, (i1 | 0) != 0) : 0) {
  i2 = HEAP32[i78 >> 2] | 0;
  if ((i2 | 0) == 0 ? (HEAP32[i78 + 4 >> 2] | 0) != 0 : 0) {
   i1 = -2;
   break;
  }
  i3 = HEAP32[i74 >> 2] | 0;
  if ((i3 | 0) == 11) {
   HEAP32[i74 >> 2] = 12;
   i3 = 12;
  }
  i73 = i78 + 16 | 0;
  i7 = HEAP32[i73 >> 2] | 0;
  i67 = i78 + 4 | 0;
  i68 = HEAP32[i67 >> 2] | 0;
  i69 = i74 + 56 | 0;
  i77 = i74 + 60 | 0;
  i63 = i74 + 8 | 0;
  i70 = i74 + 24 | 0;
  i16 = i53 + 1 | 0;
  i66 = i74 + 16 | 0;
  i17 = i74 + 32 | 0;
  i18 = i78 + 24 | 0;
  i19 = i74 + 36 | 0;
  i20 = i74 + 20 | 0;
  i71 = i78 + 48 | 0;
  i21 = i74 + 64 | 0;
  i22 = i74 + 12 | 0;
  i23 = (i75 + -5 | 0) >>> 0 < 2;
  i72 = i74 + 4 | 0;
  i24 = i74 + 76 | 0;
  i25 = i74 + 84 | 0;
  i26 = i74 + 80 | 0;
  i27 = i74 + 88 | 0;
  i28 = (i75 | 0) == 6;
  i29 = i74 + 7108 | 0;
  i30 = i74 + 72 | 0;
  i31 = i74 + 7112 | 0;
  i32 = i74 + 68 | 0;
  i33 = i74 + 44 | 0;
  i34 = i74 + 7104 | 0;
  i35 = i74 + 48 | 0;
  i36 = i74 + 52 | 0;
  i62 = i74 + 40 | 0;
  i64 = i78 + 20 | 0;
  i65 = i74 + 28 | 0;
  i37 = i53 + 2 | 0;
  i38 = i53 + 3 | 0;
  i39 = i74 + 104 | 0;
  i40 = i74 + 96 | 0;
  i41 = i74 + 100 | 0;
  i42 = i74 + 624 | 0;
  i43 = i74 + 1328 | 0;
  i44 = i74 + 108 | 0;
  i45 = i74 + 112 | 0;
  i46 = i74 + 752 | 0;
  i47 = i74 + 92 | 0;
  i9 = i3;
  i6 = HEAP32[i77 >> 2] | 0;
  i5 = i68;
  i4 = HEAP32[i69 >> 2] | 0;
  i3 = i7;
  i8 = 0;
  L11 : while (1) {
   L13 : do switch (i9 | 0) {
   case 28:
    {
     i8 = 1;
     i15 = 295;
     break L11;
    }
   case 29:
    {
     i61 = i3;
     i60 = i6;
     i59 = i5;
     i57 = i4;
     i56 = i2;
     i58 = i7;
     i54 = i1;
     i55 = -3;
     break L11;
    }
   case 30:
    {
     i15 = 307;
     break L11;
    }
   case 0:
    {
     i9 = HEAP32[i63 >> 2] | 0;
     if (!i9) {
      HEAP32[i74 >> 2] = 12;
      i10 = i3;
      break L13;
     }
     while (1) {
      if (i6 >>> 0 >= 16) {
       i11 = i4;
       break;
      }
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     if ((i11 | 0) == 35615 & (i9 & 2 | 0) != 0) {
      HEAP32[i70 >> 2] = _crc32(0, 0, 0) | 0;
      HEAP8[i53 >> 0] = 31;
      HEAP8[i16 >> 0] = -117;
      HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i53, 2) | 0;
      HEAP32[i74 >> 2] = 1;
      i6 = 0;
      i4 = 0;
      i10 = i3;
      break L13;
     }
     HEAP32[i66 >> 2] = 0;
     i4 = HEAP32[i17 >> 2] | 0;
     if (i4) HEAP32[i4 + 48 >> 2] = -1;
     if ((i9 & 1 | 0) != 0 ? ((((i11 << 8 & 65280) + (i11 >>> 8) | 0) >>> 0) % 31 | 0 | 0) == 0 : 0) {
      if ((i11 & 15 | 0) != 8) {
       HEAP32[i18 >> 2] = 14577;
       HEAP32[i74 >> 2] = 29;
       i4 = i11;
       i10 = i3;
       break L13;
      }
      i4 = i11 >>> 4;
      i6 = i6 + -4 | 0;
      i9 = (i4 & 15) + 8 | 0;
      i10 = HEAP32[i19 >> 2] | 0;
      if (i10) {
       if (i9 >>> 0 > i10 >>> 0) {
        HEAP32[i18 >> 2] = 14604;
        HEAP32[i74 >> 2] = 29;
        i10 = i3;
        break L13;
       }
      } else HEAP32[i19 >> 2] = i9;
      HEAP32[i20 >> 2] = 1 << i9;
      i6 = _adler32(0, 0, 0) | 0;
      HEAP32[i70 >> 2] = i6;
      HEAP32[i71 >> 2] = i6;
      HEAP32[i74 >> 2] = i11 >>> 12 & 2 ^ 11;
      i6 = 0;
      i4 = 0;
      i10 = i3;
      break L13;
     }
     HEAP32[i18 >> 2] = 14554;
     HEAP32[i74 >> 2] = 29;
     i4 = i11;
     i10 = i3;
     break;
    }
   case 1:
    {
     while (1) {
      if (i6 >>> 0 >= 16) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i4 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i2 = i2 + 1 | 0;
     }
     HEAP32[i66 >> 2] = i4;
     if ((i4 & 255 | 0) != 8) {
      HEAP32[i18 >> 2] = 14577;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break L13;
     }
     if (i4 & 57344) {
      HEAP32[i18 >> 2] = 14624;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break L13;
     }
     i6 = HEAP32[i17 >> 2] | 0;
     if (i6) HEAP32[i6 >> 2] = i4 >>> 8 & 1;
     if (i4 & 512) {
      HEAP8[i53 >> 0] = i4;
      HEAP8[i16 >> 0] = i4 >>> 8;
      HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i53, 2) | 0;
     }
     HEAP32[i74 >> 2] = 2;
     i6 = 0;
     i4 = 0;
     i15 = 44;
     break;
    }
   case 2:
    {
     i15 = 44;
     break;
    }
   case 3:
    {
     i15 = 52;
     break;
    }
   case 4:
    {
     i15 = 60;
     break;
    }
   case 5:
    {
     i15 = 71;
     break;
    }
   case 6:
    {
     i15 = 81;
     break;
    }
   case 7:
    {
     i15 = 94;
     break;
    }
   case 8:
    {
     i15 = 107;
     break;
    }
   case 9:
    {
     while (1) {
      if (i6 >>> 0 >= 32) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     i6 = _llvm_bswap_i32(i4 | 0) | 0;
     HEAP32[i70 >> 2] = i6;
     HEAP32[i71 >> 2] = i6;
     HEAP32[i74 >> 2] = 10;
     i6 = 0;
     i4 = 0;
     i15 = 120;
     break;
    }
   case 10:
    {
     i15 = 120;
     break;
    }
   case 11:
    {
     i15 = 123;
     break;
    }
   case 12:
    {
     i15 = 124;
     break;
    }
   case 13:
    {
     i14 = i6 & 7;
     i6 = i6 - i14 | 0;
     i4 = i4 >>> i14;
     while (1) {
      if (i6 >>> 0 >= 32) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     i9 = i4 & 65535;
     if ((i9 | 0) == (i4 >>> 16 ^ 65535 | 0)) {
      HEAP32[i21 >> 2] = i9;
      HEAP32[i74 >> 2] = 14;
      if (i28) {
       i6 = 0;
       i4 = 0;
       i15 = 295;
       break L11;
      } else {
       i6 = 0;
       i4 = 0;
       i15 = 144;
       break L13;
      }
     } else {
      HEAP32[i18 >> 2] = 14688;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break L13;
     }
    }
   case 14:
    {
     i15 = 144;
     break;
    }
   case 15:
    {
     i15 = 145;
     break;
    }
   case 16:
    {
     while (1) {
      if (i6 >>> 0 >= 14) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     i13 = (i4 & 31) + 257 | 0;
     HEAP32[i40 >> 2] = i13;
     i14 = (i4 >>> 5 & 31) + 1 | 0;
     HEAP32[i41 >> 2] = i14;
     i9 = (i4 >>> 10 & 15) + 4 | 0;
     HEAP32[i47 >> 2] = i9;
     i4 = i4 >>> 14;
     i6 = i6 + -14 | 0;
     if (i13 >>> 0 > 286 | i14 >>> 0 > 30) {
      HEAP32[i18 >> 2] = 14717;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break L13;
     } else {
      HEAP32[i39 >> 2] = 0;
      HEAP32[i74 >> 2] = 17;
      i10 = 0;
      i15 = 155;
      break L13;
     }
    }
   case 17:
    {
     i10 = HEAP32[i39 >> 2] | 0;
     i9 = HEAP32[i47 >> 2] | 0;
     i15 = 155;
     break;
    }
   case 18:
    {
     i15 = 167;
     break;
    }
   case 19:
    {
     i15 = 209;
     break;
    }
   case 20:
    {
     i15 = 210;
     break;
    }
   case 21:
    {
     i10 = HEAP32[i30 >> 2] | 0;
     i15 = 230;
     break;
    }
   case 22:
    {
     i15 = 237;
     break;
    }
   case 23:
    {
     i9 = HEAP32[i30 >> 2] | 0;
     i15 = 251;
     break;
    }
   case 24:
    {
     i15 = 257;
     break;
    }
   case 25:
    {
     if (!i3) {
      i3 = 0;
      i15 = 295;
      break L11;
     }
     HEAP8[i1 >> 0] = HEAP32[i21 >> 2];
     HEAP32[i74 >> 2] = 20;
     i10 = i3 + -1 | 0;
     i1 = i1 + 1 | 0;
     break;
    }
   case 26:
    {
     if (HEAP32[i63 >> 2] | 0) {
      while (1) {
       if (i6 >>> 0 >= 32) break;
       if (!i5) {
        i61 = i3;
        i60 = i6;
        i59 = 0;
        i57 = i4;
        i56 = i2;
        i58 = i7;
        i54 = i1;
        i55 = i8;
        break L11;
       }
       i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
       i6 = i6 + 8 | 0;
       i5 = i5 + -1 | 0;
       i4 = i14;
       i2 = i2 + 1 | 0;
      }
      i10 = i7 - i3 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + i10;
      HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + i10;
      if ((i7 | 0) == (i3 | 0)) i7 = HEAP32[i70 >> 2] | 0; else {
       i7 = HEAP32[i70 >> 2] | 0;
       i9 = i1 + (0 - i10) | 0;
       if (!(HEAP32[i66 >> 2] | 0)) i7 = _adler32(i7, i9, i10) | 0; else i7 = _crc32(i7, i9, i10) | 0;
       HEAP32[i70 >> 2] = i7;
       HEAP32[i71 >> 2] = i7;
      }
      i13 = (HEAP32[i66 >> 2] | 0) == 0;
      i14 = _llvm_bswap_i32(i4 | 0) | 0;
      if (((i13 ? i14 : i4) | 0) == (i7 | 0)) {
       i6 = 0;
       i4 = 0;
       i7 = i3;
      } else {
       HEAP32[i18 >> 2] = 14891;
       HEAP32[i74 >> 2] = 29;
       i10 = i3;
       i7 = i3;
       break L13;
      }
     }
     HEAP32[i74 >> 2] = 27;
     i15 = 287;
     break;
    }
   case 27:
    {
     i15 = 287;
     break;
    }
   default:
    {
     i1 = -2;
     break L1;
    }
   } while (0);
   do if ((i15 | 0) == 44) {
    while (1) {
     i15 = 0;
     if (i6 >>> 0 >= 32) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i15 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i15;
     i2 = i2 + 1 | 0;
     i15 = 44;
    }
    i6 = HEAP32[i17 >> 2] | 0;
    if (i6) HEAP32[i6 + 4 >> 2] = i4;
    if (HEAP32[i66 >> 2] & 512) {
     HEAP8[i53 >> 0] = i4;
     HEAP8[i16 >> 0] = i4 >>> 8;
     HEAP8[i37 >> 0] = i4 >>> 16;
     HEAP8[i38 >> 0] = i4 >>> 24;
     HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i53, 4) | 0;
    }
    HEAP32[i74 >> 2] = 3;
    i6 = 0;
    i4 = 0;
    i15 = 52;
   } else if ((i15 | 0) == 120) {
    if (!(HEAP32[i22 >> 2] | 0)) {
     i15 = 121;
     break L11;
    }
    i15 = _adler32(0, 0, 0) | 0;
    HEAP32[i70 >> 2] = i15;
    HEAP32[i71 >> 2] = i15;
    HEAP32[i74 >> 2] = 11;
    i15 = 123;
   } else if ((i15 | 0) == 144) {
    HEAP32[i74 >> 2] = 15;
    i15 = 145;
   } else if ((i15 | 0) == 155) {
    i15 = 0;
    while (1) {
     if (i10 >>> 0 >= i9 >>> 0) {
      i8 = i10;
      break;
     }
     while (1) {
      if (i6 >>> 0 >= 3) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     i14 = i10 + 1 | 0;
     HEAP32[i39 >> 2] = i14;
     HEAP16[i74 + 112 + (HEAPU16[12396 + (i10 << 1) >> 1] << 1) >> 1] = i4 & 7;
     i10 = i14;
     i6 = i6 + -3 | 0;
     i4 = i4 >>> 3;
    }
    while (1) {
     if (i8 >>> 0 >= 19) break;
     i14 = i8 + 1 | 0;
     HEAP32[i39 >> 2] = i14;
     HEAP16[i74 + 112 + (HEAPU16[12396 + (i8 << 1) >> 1] << 1) >> 1] = 0;
     i8 = i14;
    }
    HEAP32[i44 >> 2] = i43;
    HEAP32[i24 >> 2] = i43;
    HEAP32[i25 >> 2] = 7;
    i8 = _inflate_table(0, i45, 19, i44, i25, i46) | 0;
    if (!i8) {
     HEAP32[i39 >> 2] = 0;
     HEAP32[i74 >> 2] = 18;
     i8 = 0;
     i15 = 167;
     break;
    } else {
     HEAP32[i18 >> 2] = 14753;
     HEAP32[i74 >> 2] = 29;
     i10 = i3;
     break;
    }
   } else if ((i15 | 0) == 287) {
    i15 = 0;
    if (!(HEAP32[i63 >> 2] | 0)) {
     i15 = 294;
     break L11;
    }
    if (!(HEAP32[i66 >> 2] | 0)) {
     i15 = 294;
     break L11;
    }
    while (1) {
     if (i6 >>> 0 >= 32) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i14;
     i2 = i2 + 1 | 0;
    }
    if ((i4 | 0) == (HEAP32[i65 >> 2] | 0)) {
     i6 = 0;
     i4 = 0;
     i15 = 294;
     break L11;
    }
    HEAP32[i18 >> 2] = 14912;
    HEAP32[i74 >> 2] = 29;
    i10 = i3;
   } while (0);
   do if ((i15 | 0) == 52) {
    while (1) {
     i15 = 0;
     if (i6 >>> 0 >= 16) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i15 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i15;
     i2 = i2 + 1 | 0;
     i15 = 52;
    }
    i6 = HEAP32[i17 >> 2] | 0;
    if (i6) {
     HEAP32[i6 + 8 >> 2] = i4 & 255;
     HEAP32[i6 + 12 >> 2] = i4 >>> 8;
    }
    if (HEAP32[i66 >> 2] & 512) {
     HEAP8[i53 >> 0] = i4;
     HEAP8[i16 >> 0] = i4 >>> 8;
     HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i53, 2) | 0;
    }
    HEAP32[i74 >> 2] = 4;
    i6 = 0;
    i4 = 0;
    i15 = 60;
   } else if ((i15 | 0) == 123) if (i23) {
    i15 = 295;
    break L11;
   } else i15 = 124; else if ((i15 | 0) == 145) {
    i15 = 0;
    i9 = HEAP32[i21 >> 2] | 0;
    if (!i9) {
     HEAP32[i74 >> 2] = 11;
     i10 = i3;
     break;
    }
    i9 = i9 >>> 0 > i5 >>> 0 ? i5 : i9;
    i9 = i9 >>> 0 > i3 >>> 0 ? i3 : i9;
    if (!i9) {
     i15 = 295;
     break L11;
    }
    _memcpy(i1 | 0, i2 | 0, i9 | 0) | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i9;
    i5 = i5 - i9 | 0;
    i10 = i3 - i9 | 0;
    i2 = i2 + i9 | 0;
    i1 = i1 + i9 | 0;
   } else if ((i15 | 0) == 167) {
    i15 = 0;
    L159 : while (1) {
     i14 = HEAP32[i39 >> 2] | 0;
     i9 = HEAP32[i40 >> 2] | 0;
     i13 = (HEAP32[i41 >> 2] | 0) + i9 | 0;
     if (i14 >>> 0 >= i13 >>> 0) {
      i15 = 201;
      break;
     }
     i11 = (1 << HEAP32[i25 >> 2]) + -1 | 0;
     i12 = HEAP32[i24 >> 2] | 0;
     while (1) {
      i9 = i11 & i4;
      i10 = HEAPU8[i12 + (i9 << 2) + 1 >> 0] | 0;
      if (i10 >>> 0 <= i6 >>> 0) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i10 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i10;
      i2 = i2 + 1 | 0;
     }
     i9 = HEAP16[i12 + (i9 << 2) + 2 >> 1] | 0;
     if ((i9 & 65535) < 16) {
      while (1) {
       if (i6 >>> 0 >= i10 >>> 0) break;
       if (!i5) {
        i61 = i3;
        i60 = i6;
        i59 = 0;
        i57 = i4;
        i56 = i2;
        i58 = i7;
        i54 = i1;
        i55 = i8;
        break L11;
       }
       i13 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
       i6 = i6 + 8 | 0;
       i5 = i5 + -1 | 0;
       i4 = i13;
       i2 = i2 + 1 | 0;
      }
      HEAP32[i39 >> 2] = i14 + 1;
      HEAP16[i74 + 112 + (i14 << 1) >> 1] = i9;
      i6 = i6 - i10 | 0;
      i4 = i4 >>> i10;
      continue;
     }
     switch (i9 << 16 >> 16) {
     case 16:
      {
       i9 = i10 + 2 | 0;
       while (1) {
        if (i6 >>> 0 >= i9 >>> 0) break;
        if (!i5) {
         i61 = i3;
         i60 = i6;
         i59 = 0;
         i57 = i4;
         i56 = i2;
         i58 = i7;
         i54 = i1;
         i55 = i8;
         break L11;
        }
        i12 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
        i6 = i6 + 8 | 0;
        i5 = i5 + -1 | 0;
        i4 = i12;
        i2 = i2 + 1 | 0;
       }
       i4 = i4 >>> i10;
       i6 = i6 - i10 | 0;
       if (!i14) {
        i15 = 186;
        break L159;
       }
       i6 = i6 + -2 | 0;
       i9 = (i4 & 3) + 3 | 0;
       i4 = i4 >>> 2;
       i10 = HEAPU16[i74 + 112 + (i14 + -1 << 1) >> 1] | 0;
       break;
      }
     case 17:
      {
       i9 = i10 + 3 | 0;
       while (1) {
        if (i6 >>> 0 >= i9 >>> 0) break;
        if (!i5) {
         i61 = i3;
         i60 = i6;
         i59 = 0;
         i57 = i4;
         i56 = i2;
         i58 = i7;
         i54 = i1;
         i55 = i8;
         break L11;
        }
        i12 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
        i6 = i6 + 8 | 0;
        i5 = i5 + -1 | 0;
        i4 = i12;
        i2 = i2 + 1 | 0;
       }
       i4 = i4 >>> i10;
       i6 = -3 - i10 + i6 | 0;
       i9 = (i4 & 7) + 3 | 0;
       i4 = i4 >>> 3;
       i10 = 0;
       break;
      }
     default:
      {
       i9 = i10 + 7 | 0;
       while (1) {
        if (i6 >>> 0 >= i9 >>> 0) break;
        if (!i5) {
         i61 = i3;
         i60 = i6;
         i59 = 0;
         i57 = i4;
         i56 = i2;
         i58 = i7;
         i54 = i1;
         i55 = i8;
         break L11;
        }
        i12 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
        i6 = i6 + 8 | 0;
        i5 = i5 + -1 | 0;
        i4 = i12;
        i2 = i2 + 1 | 0;
       }
       i4 = i4 >>> i10;
       i6 = -7 - i10 + i6 | 0;
       i9 = (i4 & 127) + 11 | 0;
       i4 = i4 >>> 7;
       i10 = 0;
      }
     }
     if ((i14 + i9 | 0) >>> 0 > i13 >>> 0) {
      i15 = 198;
      break;
     }
     i10 = i10 & 65535;
     while (1) {
      if (!i9) continue L159;
      i14 = HEAP32[i39 >> 2] | 0;
      HEAP32[i39 >> 2] = i14 + 1;
      HEAP16[i74 + 112 + (i14 << 1) >> 1] = i10;
      i9 = i9 + -1 | 0;
     }
    }
    if ((i15 | 0) == 186) {
     i15 = 0;
     HEAP32[i18 >> 2] = 14778;
     HEAP32[i74 >> 2] = 29;
     i10 = i3;
     break;
    } else if ((i15 | 0) == 198) {
     i15 = 0;
     HEAP32[i18 >> 2] = 14778;
     HEAP32[i74 >> 2] = 29;
     i10 = i3;
     break;
    } else if ((i15 | 0) == 201) {
     i15 = 0;
     if ((HEAP32[i74 >> 2] | 0) == 29) {
      i10 = i3;
      break;
     }
     if (!(HEAP16[i42 >> 1] | 0)) {
      HEAP32[i18 >> 2] = 14804;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break;
     }
     HEAP32[i44 >> 2] = i43;
     HEAP32[i24 >> 2] = i43;
     HEAP32[i25 >> 2] = 9;
     i8 = _inflate_table(1, i45, i9, i44, i25, i46) | 0;
     if (i8) {
      HEAP32[i18 >> 2] = 14841;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break;
     }
     HEAP32[i26 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i27 >> 2] = 6;
     i8 = _inflate_table(2, i74 + 112 + (HEAP32[i40 >> 2] << 1) | 0, HEAP32[i41 >> 2] | 0, i44, i27, i46) | 0;
     if (!i8) {
      HEAP32[i74 >> 2] = 19;
      if (i28) {
       i8 = 0;
       i15 = 295;
       break L11;
      } else {
       i8 = 0;
       i15 = 209;
       break;
      }
     } else {
      HEAP32[i18 >> 2] = 14869;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break;
     }
    }
   } while (0);
   do if ((i15 | 0) == 60) {
    i15 = 0;
    i9 = HEAP32[i66 >> 2] | 0;
    if (!(i9 & 1024)) {
     i9 = HEAP32[i17 >> 2] | 0;
     if (i9) HEAP32[i9 + 16 >> 2] = 0;
    } else {
     while (1) {
      if (i6 >>> 0 >= 16) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     HEAP32[i21 >> 2] = i4;
     i6 = HEAP32[i17 >> 2] | 0;
     if (i6) HEAP32[i6 + 20 >> 2] = i4;
     if (!(i9 & 512)) {
      i6 = 0;
      i4 = 0;
     } else {
      HEAP8[i53 >> 0] = i4;
      HEAP8[i16 >> 0] = i4 >>> 8;
      HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i53, 2) | 0;
      i6 = 0;
      i4 = 0;
     }
    }
    HEAP32[i74 >> 2] = 5;
    i15 = 71;
   } else if ((i15 | 0) == 124) {
    i15 = 0;
    if (HEAP32[i72 >> 2] | 0) {
     i10 = i6 & 7;
     HEAP32[i74 >> 2] = 26;
     i6 = i6 - i10 | 0;
     i4 = i4 >>> i10;
     i10 = i3;
     break;
    }
    while (1) {
     if (i6 >>> 0 >= 3) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i14;
     i2 = i2 + 1 | 0;
    }
    HEAP32[i72 >> 2] = i4 & 1;
    switch (i4 >>> 1 & 3 | 0) {
    case 0:
     {
      HEAP32[i74 >> 2] = 13;
      break;
     }
    case 1:
     {
      HEAP32[i24 >> 2] = 10220;
      HEAP32[i25 >> 2] = 9;
      HEAP32[i26 >> 2] = 12268;
      HEAP32[i27 >> 2] = 5;
      HEAP32[i74 >> 2] = 19;
      if (i28) {
       i15 = 132;
       break L11;
      }
      break;
     }
    case 2:
     {
      HEAP32[i74 >> 2] = 16;
      break;
     }
    case 3:
     {
      HEAP32[i18 >> 2] = 14669;
      HEAP32[i74 >> 2] = 29;
      break;
     }
    default:
     {
      i15 = 135;
      break L11;
     }
    }
    i6 = i6 + -3 | 0;
    i4 = i4 >>> 3;
    i10 = i3;
   } else if ((i15 | 0) == 209) {
    HEAP32[i74 >> 2] = 20;
    i15 = 210;
   } while (0);
   do if ((i15 | 0) == 71) {
    i9 = HEAP32[i66 >> 2] | 0;
    if (i9 & 1024) {
     i10 = HEAP32[i21 >> 2] | 0;
     i12 = i10 >>> 0 > i5 >>> 0 ? i5 : i10;
     if (i12) {
      i11 = HEAP32[i17 >> 2] | 0;
      if ((i11 | 0) != 0 ? (i48 = HEAP32[i11 + 16 >> 2] | 0, (i48 | 0) != 0) : 0) {
       i9 = (HEAP32[i11 + 20 >> 2] | 0) - i10 | 0;
       i15 = HEAP32[i11 + 24 >> 2] | 0;
       _memcpy(i48 + i9 | 0, i2 | 0, ((i9 + i12 | 0) >>> 0 > i15 >>> 0 ? i15 - i9 | 0 : i12) | 0) | 0;
       i9 = HEAP32[i66 >> 2] | 0;
      }
      if (i9 & 512) HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i2, i12) | 0;
      i10 = (HEAP32[i21 >> 2] | 0) - i12 | 0;
      HEAP32[i21 >> 2] = i10;
      i5 = i5 - i12 | 0;
      i2 = i2 + i12 | 0;
     }
     if (i10) {
      i15 = 295;
      break L11;
     }
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i74 >> 2] = 6;
    i15 = 81;
   } else if ((i15 | 0) == 210) {
    i15 = 0;
    if (i3 >>> 0 > 257 & i5 >>> 0 > 5) {
     HEAP32[i76 >> 2] = i1;
     HEAP32[i73 >> 2] = i3;
     HEAP32[i78 >> 2] = i2;
     HEAP32[i67 >> 2] = i5;
     HEAP32[i69 >> 2] = i4;
     HEAP32[i77 >> 2] = i6;
     _inflate_fast(i78, i7);
     i1 = HEAP32[i76 >> 2] | 0;
     i3 = HEAP32[i73 >> 2] | 0;
     i2 = HEAP32[i78 >> 2] | 0;
     i5 = HEAP32[i67 >> 2] | 0;
     i4 = HEAP32[i69 >> 2] | 0;
     i6 = HEAP32[i77 >> 2] | 0;
     if ((HEAP32[i74 >> 2] | 0) != 11) {
      i10 = i3;
      break;
     }
     HEAP32[i29 >> 2] = -1;
     i10 = i3;
     break;
    }
    HEAP32[i29 >> 2] = 0;
    i12 = (1 << HEAP32[i25 >> 2]) + -1 | 0;
    i14 = HEAP32[i24 >> 2] | 0;
    while (1) {
     i9 = i12 & i4;
     i10 = HEAP8[i14 + (i9 << 2) + 1 >> 0] | 0;
     i11 = i10 & 255;
     if (i11 >>> 0 <= i6 >>> 0) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i13 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i13;
     i2 = i2 + 1 | 0;
    }
    i12 = HEAP8[i14 + (i9 << 2) >> 0] | 0;
    i13 = HEAP16[i14 + (i9 << 2) + 2 >> 1] | 0;
    i9 = i12 & 255;
    if (i12 << 24 >> 24 != 0 & (i9 & 240 | 0) == 0) {
     i13 = i13 & 65535;
     i12 = (1 << i11 + i9) + -1 | 0;
     while (1) {
      i9 = ((i4 & i12) >>> i11) + i13 | 0;
      i10 = HEAP8[i14 + (i9 << 2) + 1 >> 0] | 0;
      if (((i10 & 255) + i11 | 0) >>> 0 <= i6 >>> 0) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i10 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i10;
      i2 = i2 + 1 | 0;
     }
     i13 = HEAP16[i14 + (i9 << 2) + 2 >> 1] | 0;
     i12 = HEAP8[i14 + (i9 << 2) >> 0] | 0;
     HEAP32[i29 >> 2] = i11;
     i9 = i11;
     i6 = i6 - i11 | 0;
     i4 = i4 >>> i11;
    } else i9 = 0;
    i14 = i10 & 255;
    i4 = i4 >>> i14;
    i6 = i6 - i14 | 0;
    HEAP32[i29 >> 2] = i9 + i14;
    HEAP32[i21 >> 2] = i13 & 65535;
    i9 = i12 & 255;
    if (!(i12 << 24 >> 24)) {
     HEAP32[i74 >> 2] = 25;
     i10 = i3;
     break;
    }
    if (i9 & 32) {
     HEAP32[i29 >> 2] = -1;
     HEAP32[i74 >> 2] = 11;
     i10 = i3;
     break;
    }
    if (!(i9 & 64)) {
     i10 = i9 & 15;
     HEAP32[i30 >> 2] = i10;
     HEAP32[i74 >> 2] = 21;
     i15 = 230;
     break;
    } else {
     HEAP32[i18 >> 2] = 15896;
     HEAP32[i74 >> 2] = 29;
     i10 = i3;
     break;
    }
   } while (0);
   if ((i15 | 0) == 81) {
    if (!(HEAP32[i66 >> 2] & 2048)) {
     i9 = HEAP32[i17 >> 2] | 0;
     if (i9) HEAP32[i9 + 28 >> 2] = 0;
    } else {
     if (!i5) {
      i5 = 0;
      i15 = 295;
      break;
     } else i9 = 0;
     while (1) {
      i11 = i9 + 1 | 0;
      i9 = HEAP8[i2 + i9 >> 0] | 0;
      i10 = HEAP32[i17 >> 2] | 0;
      if (((i10 | 0) != 0 ? (i49 = HEAP32[i10 + 28 >> 2] | 0, (i49 | 0) != 0) : 0) ? (i50 = HEAP32[i21 >> 2] | 0, i50 >>> 0 < (HEAP32[i10 + 32 >> 2] | 0) >>> 0) : 0) {
       HEAP32[i21 >> 2] = i50 + 1;
       HEAP8[i49 + i50 >> 0] = i9;
      }
      i9 = i9 << 24 >> 24 != 0;
      if (i9 & i5 >>> 0 > i11 >>> 0) i9 = i11; else {
       i10 = i11;
       break;
      }
     }
     if (HEAP32[i66 >> 2] & 512) HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i2, i10) | 0;
     i5 = i5 - i10 | 0;
     i2 = i2 + i10 | 0;
     if (i9) {
      i15 = 295;
      break;
     }
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i74 >> 2] = 7;
    i15 = 94;
   } else if ((i15 | 0) == 230) {
    i15 = 0;
    if (!i10) i9 = HEAP32[i21 >> 2] | 0; else {
     while (1) {
      if (i6 >>> 0 >= i10 >>> 0) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     i9 = (HEAP32[i21 >> 2] | 0) + ((1 << i10) + -1 & i4) | 0;
     HEAP32[i21 >> 2] = i9;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + i10;
     i6 = i6 - i10 | 0;
     i4 = i4 >>> i10;
    }
    HEAP32[i31 >> 2] = i9;
    HEAP32[i74 >> 2] = 22;
    i15 = 237;
   }
   do if ((i15 | 0) == 94) {
    if (!(HEAP32[i66 >> 2] & 4096)) {
     i9 = HEAP32[i17 >> 2] | 0;
     if (i9) HEAP32[i9 + 36 >> 2] = 0;
    } else {
     if (!i5) {
      i5 = 0;
      i15 = 295;
      break L11;
     } else i9 = 0;
     while (1) {
      i11 = i9 + 1 | 0;
      i9 = HEAP8[i2 + i9 >> 0] | 0;
      i10 = HEAP32[i17 >> 2] | 0;
      if (((i10 | 0) != 0 ? (i51 = HEAP32[i10 + 36 >> 2] | 0, (i51 | 0) != 0) : 0) ? (i52 = HEAP32[i21 >> 2] | 0, i52 >>> 0 < (HEAP32[i10 + 40 >> 2] | 0) >>> 0) : 0) {
       HEAP32[i21 >> 2] = i52 + 1;
       HEAP8[i51 + i52 >> 0] = i9;
      }
      i9 = i9 << 24 >> 24 != 0;
      if (i9 & i5 >>> 0 > i11 >>> 0) i9 = i11; else {
       i10 = i11;
       break;
      }
     }
     if (HEAP32[i66 >> 2] & 512) HEAP32[i70 >> 2] = _crc32(HEAP32[i70 >> 2] | 0, i2, i10) | 0;
     i5 = i5 - i10 | 0;
     i2 = i2 + i10 | 0;
     if (i9) {
      i15 = 295;
      break L11;
     }
    }
    HEAP32[i74 >> 2] = 8;
    i15 = 107;
   } else if ((i15 | 0) == 237) {
    i15 = 0;
    i12 = (1 << HEAP32[i27 >> 2]) + -1 | 0;
    i14 = HEAP32[i26 >> 2] | 0;
    while (1) {
     i9 = i12 & i4;
     i10 = HEAP8[i14 + (i9 << 2) + 1 >> 0] | 0;
     i11 = i10 & 255;
     if (i11 >>> 0 <= i6 >>> 0) break;
     if (!i5) {
      i61 = i3;
      i60 = i6;
      i59 = 0;
      i57 = i4;
      i56 = i2;
      i58 = i7;
      i54 = i1;
      i55 = i8;
      break L11;
     }
     i13 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
     i6 = i6 + 8 | 0;
     i5 = i5 + -1 | 0;
     i4 = i13;
     i2 = i2 + 1 | 0;
    }
    i12 = HEAP8[i14 + (i9 << 2) >> 0] | 0;
    i13 = HEAP16[i14 + (i9 << 2) + 2 >> 1] | 0;
    i9 = i12 & 255;
    if (!(i9 & 240)) {
     i13 = i13 & 65535;
     i12 = (1 << i11 + i9) + -1 | 0;
     while (1) {
      i9 = ((i4 & i12) >>> i11) + i13 | 0;
      i10 = HEAP8[i14 + (i9 << 2) + 1 >> 0] | 0;
      if (((i10 & 255) + i11 | 0) >>> 0 <= i6 >>> 0) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i10 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i10;
      i2 = i2 + 1 | 0;
     }
     i13 = HEAP16[i14 + (i9 << 2) + 2 >> 1] | 0;
     i12 = HEAP8[i14 + (i9 << 2) >> 0] | 0;
     i9 = (HEAP32[i29 >> 2] | 0) + i11 | 0;
     HEAP32[i29 >> 2] = i9;
     i6 = i6 - i11 | 0;
     i4 = i4 >>> i11;
    } else i9 = HEAP32[i29 >> 2] | 0;
    i14 = i10 & 255;
    i4 = i4 >>> i14;
    i6 = i6 - i14 | 0;
    HEAP32[i29 >> 2] = i9 + i14;
    i9 = i12 & 255;
    if (!(i9 & 64)) {
     HEAP32[i32 >> 2] = i13 & 65535;
     i9 = i9 & 15;
     HEAP32[i30 >> 2] = i9;
     HEAP32[i74 >> 2] = 23;
     i15 = 251;
     break;
    } else {
     HEAP32[i18 >> 2] = 15874;
     HEAP32[i74 >> 2] = 29;
     i10 = i3;
     break;
    }
   } while (0);
   do if ((i15 | 0) == 107) {
    i15 = 0;
    i10 = HEAP32[i66 >> 2] | 0;
    if (i10 & 512) {
     while (1) {
      if (i6 >>> 0 >= 16) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     if ((i4 | 0) == (HEAP32[i70 >> 2] & 65535 | 0)) {
      i6 = 0;
      i4 = 0;
     } else {
      HEAP32[i18 >> 2] = 14649;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break;
     }
    }
    i9 = HEAP32[i17 >> 2] | 0;
    if (i9) {
     HEAP32[i9 + 44 >> 2] = i10 >>> 9 & 1;
     HEAP32[i9 + 48 >> 2] = 1;
    }
    i10 = _crc32(0, 0, 0) | 0;
    HEAP32[i70 >> 2] = i10;
    HEAP32[i71 >> 2] = i10;
    HEAP32[i74 >> 2] = 11;
    i10 = i3;
   } else if ((i15 | 0) == 251) {
    i15 = 0;
    if (i9) {
     while (1) {
      if (i6 >>> 0 >= i9 >>> 0) break;
      if (!i5) {
       i61 = i3;
       i60 = i6;
       i59 = 0;
       i57 = i4;
       i56 = i2;
       i58 = i7;
       i54 = i1;
       i55 = i8;
       break L11;
      }
      i14 = (HEAPU8[i2 >> 0] << i6) + i4 | 0;
      i6 = i6 + 8 | 0;
      i5 = i5 + -1 | 0;
      i4 = i14;
      i2 = i2 + 1 | 0;
     }
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + ((1 << i9) + -1 & i4);
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + i9;
     i6 = i6 - i9 | 0;
     i4 = i4 >>> i9;
    }
    HEAP32[i74 >> 2] = 24;
    i15 = 257;
   } while (0);
   do if ((i15 | 0) == 257) {
    i15 = 0;
    if (!i3) {
     i3 = 0;
     i15 = 295;
     break L11;
    }
    i9 = i7 - i3 | 0;
    i10 = HEAP32[i32 >> 2] | 0;
    if (i10 >>> 0 > i9 >>> 0) {
     i9 = i10 - i9 | 0;
     if (i9 >>> 0 > (HEAP32[i33 >> 2] | 0) >>> 0 ? (HEAP32[i34 >> 2] | 0) != 0 : 0) {
      HEAP32[i18 >> 2] = 15844;
      HEAP32[i74 >> 2] = 29;
      i10 = i3;
      break;
     }
     i10 = HEAP32[i35 >> 2] | 0;
     if (i9 >>> 0 > i10 >>> 0) {
      i9 = i9 - i10 | 0;
      i11 = i9;
      i9 = (HEAP32[i36 >> 2] | 0) + ((HEAP32[i62 >> 2] | 0) - i9) | 0;
     } else {
      i11 = i9;
      i9 = (HEAP32[i36 >> 2] | 0) + (i10 - i9) | 0;
     }
     i14 = HEAP32[i21 >> 2] | 0;
     i12 = i14;
     i11 = i11 >>> 0 > i14 >>> 0 ? i14 : i11;
    } else {
     i11 = HEAP32[i21 >> 2] | 0;
     i12 = i11;
     i9 = i1 + (0 - i10) | 0;
    }
    i13 = i11 >>> 0 > i3 >>> 0 ? i3 : i11;
    HEAP32[i21 >> 2] = i12 - i13;
    i11 = i13;
    i10 = i1;
    while (1) {
     i1 = i10 + 1 | 0;
     HEAP8[i10 >> 0] = HEAP8[i9 >> 0] | 0;
     i11 = i11 + -1 | 0;
     if (!i11) break; else {
      i9 = i9 + 1 | 0;
      i10 = i1;
     }
    }
    i3 = i3 - i13 | 0;
    if (!(HEAP32[i21 >> 2] | 0)) {
     HEAP32[i74 >> 2] = 20;
     i10 = i3;
    } else i10 = i3;
   } while (0);
   i9 = HEAP32[i74 >> 2] | 0;
   i3 = i10;
  }
  if ((i15 | 0) == 121) {
   HEAP32[i76 >> 2] = i1;
   HEAP32[i73 >> 2] = i3;
   HEAP32[i78 >> 2] = i2;
   HEAP32[i67 >> 2] = i5;
   HEAP32[i69 >> 2] = i4;
   HEAP32[i77 >> 2] = i6;
   i1 = 2;
   break;
  } else if ((i15 | 0) == 132) {
   i61 = i3;
   i60 = i6 + -3 | 0;
   i59 = i5;
   i57 = i4 >>> 3;
   i56 = i2;
   i58 = i7;
   i54 = i1;
   i55 = i8;
  } else if ((i15 | 0) != 135) if ((i15 | 0) == 294) {
   HEAP32[i74 >> 2] = 28;
   i61 = i3;
   i60 = i6;
   i59 = i5;
   i57 = i4;
   i56 = i2;
   i58 = i7;
   i54 = i1;
   i55 = 1;
  } else if ((i15 | 0) == 295) {
   i61 = i3;
   i60 = i6;
   i59 = i5;
   i57 = i4;
   i56 = i2;
   i58 = i7;
   i54 = i1;
   i55 = i8;
  } else if ((i15 | 0) == 307) {
   i1 = -4;
   break;
  }
  HEAP32[i76 >> 2] = i54;
  HEAP32[i73 >> 2] = i61;
  HEAP32[i78 >> 2] = i56;
  HEAP32[i67 >> 2] = i59;
  HEAP32[i69 >> 2] = i57;
  HEAP32[i77 >> 2] = i60;
  if ((HEAP32[i62 >> 2] | 0) == 0 ? (HEAP32[i74 >> 2] | 0) >>> 0 > 25 | (i58 | 0) == (i61 | 0) : 0) {
   i5 = i59;
   i4 = i61;
  } else i15 = 298;
  do if ((i15 | 0) == 298) if (!(_updatewindow(i78, i58) | 0)) {
   i5 = HEAP32[i67 >> 2] | 0;
   i4 = HEAP32[i73 >> 2] | 0;
   break;
  } else {
   HEAP32[i74 >> 2] = 30;
   i1 = -4;
   break L1;
  } while (0);
  i3 = i58 - i4 | 0;
  i73 = i78 + 8 | 0;
  HEAP32[i73 >> 2] = i68 - i5 + (HEAP32[i73 >> 2] | 0);
  HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + i3;
  HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + i3;
  if ((i58 | 0) != (i4 | 0) & (HEAP32[i63 >> 2] | 0) != 0) {
   i2 = HEAP32[i70 >> 2] | 0;
   i1 = (HEAP32[i76 >> 2] | 0) + (0 - i3) | 0;
   if (!(HEAP32[i66 >> 2] | 0)) i1 = _adler32(i2, i1, i3) | 0; else i1 = _crc32(i2, i1, i3) | 0;
   HEAP32[i70 >> 2] = i1;
   HEAP32[i71 >> 2] = i1;
  }
  i1 = HEAP32[i74 >> 2] | 0;
  HEAP32[i78 + 44 >> 2] = ((HEAP32[i72 >> 2] | 0) != 0 ? 64 : 0) + (HEAP32[i77 >> 2] | 0) + ((i1 | 0) == 11 ? 128 : 0) + ((i1 | 0) == 19 | (i1 | 0) == 14 ? 256 : 0);
  i1 = (i55 | 0) == 0 & ((i75 | 0) == 4 | (i68 | 0) == (i5 | 0) & (i58 | 0) == (i4 | 0)) ? -5 : i55;
 } else i1 = -2; while (0);
 STACKTOP = i79;
 return i1 | 0;
}
function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 do if (i1 >>> 0 < 245) {
  i14 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i1 = i14 >>> 3;
  i9 = HEAP32[4601] | 0;
  i2 = i9 >>> i1;
  if (i2 & 3) {
   i2 = (i2 & 1 ^ 1) + i1 | 0;
   i3 = 18444 + (i2 << 1 << 2) | 0;
   i4 = i3 + 8 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i5 + 8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   do if ((i3 | 0) != (i7 | 0)) {
    if (i7 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
    i1 = i7 + 12 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i1 >> 2] = i3;
     HEAP32[i4 >> 2] = i7;
     break;
    } else _abort();
   } else HEAP32[4601] = i9 & ~(1 << i2); while (0);
   i37 = i2 << 3;
   HEAP32[i5 + 4 >> 2] = i37 | 3;
   i37 = i5 + i37 + 4 | 0;
   HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
   i37 = i6;
   return i37 | 0;
  }
  i7 = HEAP32[4603] | 0;
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
    i3 = 18444 + (i2 << 1 << 2) | 0;
    i4 = i3 + 8 | 0;
    i6 = HEAP32[i4 >> 2] | 0;
    i8 = i6 + 8 | 0;
    i5 = HEAP32[i8 >> 2] | 0;
    do if ((i3 | 0) != (i5 | 0)) {
     if (i5 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
     i1 = i5 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (i6 | 0)) {
      HEAP32[i1 >> 2] = i3;
      HEAP32[i4 >> 2] = i5;
      i10 = HEAP32[4603] | 0;
      break;
     } else _abort();
    } else {
     HEAP32[4601] = i9 & ~(1 << i2);
     i10 = i7;
    } while (0);
    i7 = (i2 << 3) - i14 | 0;
    HEAP32[i6 + 4 >> 2] = i14 | 3;
    i4 = i6 + i14 | 0;
    HEAP32[i4 + 4 >> 2] = i7 | 1;
    HEAP32[i4 + i7 >> 2] = i7;
    if (i10) {
     i5 = HEAP32[4606] | 0;
     i2 = i10 >>> 3;
     i3 = 18444 + (i2 << 1 << 2) | 0;
     i1 = HEAP32[4601] | 0;
     i2 = 1 << i2;
     if (i1 & i2) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
       i11 = i1;
       i12 = i2;
      }
     } else {
      HEAP32[4601] = i1 | i2;
      i11 = i3 + 8 | 0;
      i12 = i3;
     }
     HEAP32[i11 >> 2] = i5;
     HEAP32[i12 + 12 >> 2] = i5;
     HEAP32[i5 + 8 >> 2] = i12;
     HEAP32[i5 + 12 >> 2] = i3;
    }
    HEAP32[4603] = i7;
    HEAP32[4606] = i4;
    i37 = i8;
    return i37 | 0;
   }
   i1 = HEAP32[4602] | 0;
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
    i4 = HEAP32[18708 + ((i35 | i36 | i37 | i2 | i4) + (i3 >>> i4) << 2) >> 2] | 0;
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
    i6 = HEAP32[4605] | 0;
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
     i2 = 18708 + (i1 << 2) | 0;
     if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i13;
      if (!i13) {
       HEAP32[4602] = HEAP32[4602] & ~(1 << i1);
       break;
      }
     } else {
      if (i7 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
      i1 = i7 + 16 | 0;
      if ((HEAP32[i1 >> 2] | 0) == (i9 | 0)) HEAP32[i1 >> 2] = i13; else HEAP32[i7 + 20 >> 2] = i13;
      if (!i13) break;
     }
     i2 = HEAP32[4605] | 0;
     if (i13 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i13 + 24 >> 2] = i7;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i13 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i13;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1) if (i1 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
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
     i1 = HEAP32[4603] | 0;
     if (i1) {
      i5 = HEAP32[4606] | 0;
      i2 = i1 >>> 3;
      i4 = 18444 + (i2 << 1 << 2) | 0;
      i1 = HEAP32[4601] | 0;
      i2 = 1 << i2;
      if (i1 & i2) {
       i1 = i4 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
        i15 = i1;
        i16 = i2;
       }
      } else {
       HEAP32[4601] = i1 | i2;
       i15 = i4 + 8 | 0;
       i16 = i4;
      }
      HEAP32[i15 >> 2] = i5;
      HEAP32[i16 + 12 >> 2] = i5;
      HEAP32[i5 + 8 >> 2] = i16;
      HEAP32[i5 + 12 >> 2] = i4;
     }
     HEAP32[4603] = i3;
     HEAP32[4606] = i8;
    }
    i37 = i9 + 8 | 0;
    return i37 | 0;
   }
  }
 } else if (i1 >>> 0 <= 4294967231) {
  i1 = i1 + 11 | 0;
  i14 = i1 & -8;
  i9 = HEAP32[4602] | 0;
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
   i2 = HEAP32[18708 + (i8 << 2) >> 2] | 0;
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
     i1 = HEAP32[18708 + ((i11 | i12 | i13 | i15 | i1) + (i16 >>> i1) << 2) >> 2] | 0;
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
   if ((i9 | 0) != 0 ? i8 >>> 0 < ((HEAP32[4603] | 0) - i14 | 0) >>> 0 : 0) {
    i5 = HEAP32[4605] | 0;
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
     i2 = 18708 + (i1 << 2) | 0;
     if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i18;
      if (!i18) {
       HEAP32[4602] = HEAP32[4602] & ~(1 << i1);
       break;
      }
     } else {
      if (i6 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
      i1 = i6 + 16 | 0;
      if ((HEAP32[i1 >> 2] | 0) == (i9 | 0)) HEAP32[i1 >> 2] = i18; else HEAP32[i6 + 20 >> 2] = i18;
      if (!i18) break;
     }
     i2 = HEAP32[4605] | 0;
     if (i18 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i18 + 24 >> 2] = i6;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i18 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i18;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1) if (i1 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
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
      i3 = 18444 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[4601] | 0;
      i1 = 1 << i1;
      if (i2 & i1) {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
        i20 = i1;
        i21 = i2;
       }
      } else {
       HEAP32[4601] = i2 | i1;
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
     i4 = 18708 + (i3 << 2) | 0;
     HEAP32[i7 + 28 >> 2] = i3;
     i1 = i7 + 16 | 0;
     HEAP32[i1 + 4 >> 2] = 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[4602] | 0;
     i2 = 1 << i3;
     if (!(i1 & i2)) {
      HEAP32[4602] = i1 | i2;
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
     if ((i30 | 0) == 145) if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i1;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     } else if ((i30 | 0) == 148) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i37 = HEAP32[4605] | 0;
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
 i3 = HEAP32[4603] | 0;
 if (i3 >>> 0 >= i14 >>> 0) {
  i1 = i3 - i14 | 0;
  i2 = HEAP32[4606] | 0;
  if (i1 >>> 0 > 15) {
   i37 = i2 + i14 | 0;
   HEAP32[4606] = i37;
   HEAP32[4603] = i1;
   HEAP32[i37 + 4 >> 2] = i1 | 1;
   HEAP32[i37 + i1 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i14 | 3;
  } else {
   HEAP32[4603] = 0;
   HEAP32[4606] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i37 = i2 + i3 + 4 | 0;
   HEAP32[i37 >> 2] = HEAP32[i37 >> 2] | 1;
  }
  i37 = i2 + 8 | 0;
  return i37 | 0;
 }
 i1 = HEAP32[4604] | 0;
 if (i1 >>> 0 > i14 >>> 0) {
  i35 = i1 - i14 | 0;
  HEAP32[4604] = i35;
  i37 = HEAP32[4607] | 0;
  i36 = i37 + i14 | 0;
  HEAP32[4607] = i36;
  HEAP32[i36 + 4 >> 2] = i35 | 1;
  HEAP32[i37 + 4 >> 2] = i14 | 3;
  i37 = i37 + 8 | 0;
  return i37 | 0;
 }
 do if (!(HEAP32[4719] | 0)) {
  i1 = _sysconf(30) | 0;
  if (!(i1 + -1 & i1)) {
   HEAP32[4721] = i1;
   HEAP32[4720] = i1;
   HEAP32[4722] = -1;
   HEAP32[4723] = -1;
   HEAP32[4724] = 0;
   HEAP32[4712] = 0;
   HEAP32[4719] = (_time(0) | 0) & -16 ^ 1431655768;
   break;
  } else _abort();
 } while (0);
 i7 = i14 + 48 | 0;
 i6 = HEAP32[4721] | 0;
 i8 = i14 + 47 | 0;
 i5 = i6 + i8 | 0;
 i6 = 0 - i6 | 0;
 i9 = i5 & i6;
 if (i9 >>> 0 <= i14 >>> 0) {
  i37 = 0;
  return i37 | 0;
 }
 i1 = HEAP32[4711] | 0;
 if ((i1 | 0) != 0 ? (i20 = HEAP32[4709] | 0, i21 = i20 + i9 | 0, i21 >>> 0 <= i20 >>> 0 | i21 >>> 0 > i1 >>> 0) : 0) {
  i37 = 0;
  return i37 | 0;
 }
 L257 : do if (!(HEAP32[4712] & 4)) {
  i1 = HEAP32[4607] | 0;
  L259 : do if (i1) {
   i3 = 18852;
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
   i1 = i5 - (HEAP32[4604] | 0) & i6;
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
   i2 = HEAP32[4720] | 0;
   i3 = i2 + -1 | 0;
   if (!(i3 & i1)) i1 = i9; else i1 = i9 - i1 + (i3 + i1 & 0 - i2) | 0;
   i2 = HEAP32[4709] | 0;
   i3 = i2 + i1 | 0;
   if (i1 >>> 0 > i14 >>> 0 & i1 >>> 0 < 2147483647) {
    i21 = HEAP32[4711] | 0;
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
   do if (i7 >>> 0 > i1 >>> 0 & (i1 >>> 0 < 2147483647 & (i2 | 0) != (-1 | 0)) ? (i22 = HEAP32[4721] | 0, i22 = i8 - i1 + i22 & 0 - i22, i22 >>> 0 < 2147483647) : 0) if ((_sbrk(i22 | 0) | 0) == (-1 | 0)) {
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
  HEAP32[4712] = HEAP32[4712] | 4;
  i30 = 190;
 } else i30 = 190; while (0);
 if ((((i30 | 0) == 190 ? i9 >>> 0 < 2147483647 : 0) ? (i23 = _sbrk(i9 | 0) | 0, i24 = _sbrk(0) | 0, i23 >>> 0 < i24 >>> 0 & ((i23 | 0) != (-1 | 0) & (i24 | 0) != (-1 | 0))) : 0) ? (i25 = i24 - i23 | 0, i25 >>> 0 > (i14 + 40 | 0) >>> 0) : 0) {
  i7 = i23;
  i5 = i25;
  i30 = 193;
 }
 if ((i30 | 0) == 193) {
  i1 = (HEAP32[4709] | 0) + i5 | 0;
  HEAP32[4709] = i1;
  if (i1 >>> 0 > (HEAP32[4710] | 0) >>> 0) HEAP32[4710] = i1;
  i8 = HEAP32[4607] | 0;
  do if (i8) {
   i4 = 18852;
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
    i37 = i5 - i37 + (HEAP32[4604] | 0) | 0;
    HEAP32[4607] = i36;
    HEAP32[4604] = i37;
    HEAP32[i36 + 4 >> 2] = i37 | 1;
    HEAP32[i36 + i37 + 4 >> 2] = 40;
    HEAP32[4608] = HEAP32[4723];
    break;
   }
   i1 = HEAP32[4605] | 0;
   if (i7 >>> 0 < i1 >>> 0) {
    HEAP32[4605] = i7;
    i9 = i7;
   } else i9 = i1;
   i3 = i7 + i5 | 0;
   i1 = 18852;
   while (1) {
    if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) {
     i2 = i1;
     i30 = 211;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
    if (!i1) {
     i2 = 18852;
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
     if ((i1 | 0) == (HEAP32[4606] | 0)) {
      i37 = (HEAP32[4603] | 0) + i6 | 0;
      HEAP32[4603] = i37;
      HEAP32[4606] = i10;
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
       i3 = 18708 + (i2 << 2) | 0;
       do if ((i1 | 0) != (HEAP32[i3 >> 2] | 0)) {
        if (i7 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
        i2 = i7 + 16 | 0;
        if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) HEAP32[i2 >> 2] = i35; else HEAP32[i7 + 20 >> 2] = i35;
        if (!i35) break L331;
       } else {
        HEAP32[i3 >> 2] = i35;
        if (i35) break;
        HEAP32[4602] = HEAP32[4602] & ~(1 << i2);
        break L331;
       } while (0);
       i4 = HEAP32[4605] | 0;
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
       if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
        HEAP32[i35 + 20 >> 2] = i2;
        HEAP32[i2 + 24 >> 2] = i35;
        break;
       }
      } else {
       i3 = HEAP32[i1 + 8 >> 2] | 0;
       i4 = HEAP32[i1 + 12 >> 2] | 0;
       i2 = 18444 + (i5 << 1 << 2) | 0;
       do if ((i3 | 0) != (i2 | 0)) {
        if (i3 >>> 0 < i9 >>> 0) _abort();
        if ((HEAP32[i3 + 12 >> 2] | 0) == (i1 | 0)) break;
        _abort();
       } while (0);
       if ((i4 | 0) == (i3 | 0)) {
        HEAP32[4601] = HEAP32[4601] & ~(1 << i5);
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
      i3 = 18444 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[4601] | 0;
      i1 = 1 << i1;
      do if (!(i2 & i1)) {
       HEAP32[4601] = i2 | i1;
       i36 = i3 + 8 | 0;
       i37 = i3;
      } else {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 >= (HEAP32[4605] | 0) >>> 0) {
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
     i4 = 18708 + (i3 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i3;
     i1 = i10 + 16 | 0;
     HEAP32[i1 + 4 >> 2] = 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[4602] | 0;
     i2 = 1 << i3;
     if (!(i1 & i2)) {
      HEAP32[4602] = i1 | i2;
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
     if ((i30 | 0) == 278) if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i1;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     } else if ((i30 | 0) == 281) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i37 = HEAP32[4605] | 0;
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
     i37 = (HEAP32[4604] | 0) + i6 | 0;
     HEAP32[4604] = i37;
     HEAP32[4607] = i10;
     HEAP32[i10 + 4 >> 2] = i37 | 1;
    } while (0);
    i37 = i11 + 8 | 0;
    return i37 | 0;
   } else i2 = 18852;
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
   HEAP32[4607] = i37;
   HEAP32[4604] = i4;
   HEAP32[i37 + 4 >> 2] = i4 | 1;
   HEAP32[i37 + i4 + 4 >> 2] = 40;
   HEAP32[4608] = HEAP32[4723];
   i4 = i3 + 4 | 0;
   HEAP32[i4 >> 2] = 27;
   HEAP32[i1 >> 2] = HEAP32[4713];
   HEAP32[i1 + 4 >> 2] = HEAP32[4714];
   HEAP32[i1 + 8 >> 2] = HEAP32[4715];
   HEAP32[i1 + 12 >> 2] = HEAP32[4716];
   HEAP32[4713] = i7;
   HEAP32[4714] = i5;
   HEAP32[4716] = 0;
   HEAP32[4715] = i1;
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
     i3 = 18444 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[4601] | 0;
     i1 = 1 << i1;
     if (i2 & i1) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
       i33 = i1;
       i34 = i2;
      }
     } else {
      HEAP32[4601] = i2 | i1;
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
    i5 = 18708 + (i3 << 2) | 0;
    HEAP32[i8 + 28 >> 2] = i3;
    HEAP32[i8 + 20 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = HEAP32[4602] | 0;
    i2 = 1 << i3;
    if (!(i1 & i2)) {
     HEAP32[4602] = i1 | i2;
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
    if ((i30 | 0) == 304) if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
     HEAP32[i2 >> 2] = i8;
     HEAP32[i8 + 24 >> 2] = i1;
     HEAP32[i8 + 12 >> 2] = i8;
     HEAP32[i8 + 8 >> 2] = i8;
     break;
    } else if ((i30 | 0) == 307) {
     i1 = i3 + 8 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     i37 = HEAP32[4605] | 0;
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
   i37 = HEAP32[4605] | 0;
   if ((i37 | 0) == 0 | i7 >>> 0 < i37 >>> 0) HEAP32[4605] = i7;
   HEAP32[4713] = i7;
   HEAP32[4714] = i5;
   HEAP32[4716] = 0;
   HEAP32[4610] = HEAP32[4719];
   HEAP32[4609] = -1;
   i1 = 0;
   do {
    i37 = 18444 + (i1 << 1 << 2) | 0;
    HEAP32[i37 + 12 >> 2] = i37;
    HEAP32[i37 + 8 >> 2] = i37;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i37 = i7 + 8 | 0;
   i37 = (i37 & 7 | 0) == 0 ? 0 : 0 - i37 & 7;
   i36 = i7 + i37 | 0;
   i37 = i5 + -40 - i37 | 0;
   HEAP32[4607] = i36;
   HEAP32[4604] = i37;
   HEAP32[i36 + 4 >> 2] = i37 | 1;
   HEAP32[i36 + i37 + 4 >> 2] = 40;
   HEAP32[4608] = HEAP32[4723];
  } while (0);
  i1 = HEAP32[4604] | 0;
  if (i1 >>> 0 > i14 >>> 0) {
   i35 = i1 - i14 | 0;
   HEAP32[4604] = i35;
   i37 = HEAP32[4607] | 0;
   i36 = i37 + i14 | 0;
   HEAP32[4607] = i36;
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

function _printf_core(i50, i3, i51, i52, i53) {
 i50 = i50 | 0;
 i3 = i3 | 0;
 i51 = i51 | 0;
 i52 = i52 | 0;
 i53 = i53 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, d6 = 0.0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = 0.0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i54 = 0;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 624 | 0;
 i45 = i54 + 24 | 0;
 i47 = i54 + 16 | 0;
 i46 = i54 + 588 | 0;
 i42 = i54 + 576 | 0;
 i44 = i54;
 i37 = i54 + 536 | 0;
 i49 = i54 + 8 | 0;
 i48 = i54 + 528 | 0;
 i27 = (i50 | 0) != 0;
 i28 = i37 + 40 | 0;
 i36 = i28;
 i37 = i37 + 39 | 0;
 i38 = i49 + 4 | 0;
 i39 = i46;
 i40 = 0 - i39 | 0;
 i41 = i42 + 12 | 0;
 i42 = i42 + 11 | 0;
 i43 = i41;
 i29 = i43 - i39 | 0;
 i30 = -2 - i39 | 0;
 i31 = i43 + 2 | 0;
 i32 = i45 + 288 | 0;
 i33 = i46 + 9 | 0;
 i34 = i33;
 i35 = i46 + 8 | 0;
 i1 = 0;
 i4 = 0;
 i2 = 0;
 i14 = i3;
 L1 : while (1) {
  do if ((i1 | 0) > -1) if ((i4 | 0) > (2147483647 - i1 | 0)) {
   HEAP32[(___errno_location() | 0) >> 2] = 75;
   i1 = -1;
   break;
  } else {
   i1 = i4 + i1 | 0;
   break;
  } while (0);
  i3 = HEAP8[i14 >> 0] | 0;
  if (!(i3 << 24 >> 24)) {
   i26 = 244;
   break;
  } else i4 = i14;
  L9 : while (1) {
   switch (i3 << 24 >> 24) {
   case 37:
    {
     i3 = i4;
     i26 = 9;
     break L9;
    }
   case 0:
    {
     i3 = i4;
     break L9;
    }
   default:
    {}
   }
   i25 = i4 + 1 | 0;
   i3 = HEAP8[i25 >> 0] | 0;
   i4 = i25;
  }
  L12 : do if ((i26 | 0) == 9) while (1) {
   i26 = 0;
   if ((HEAP8[i3 + 1 >> 0] | 0) != 37) break L12;
   i4 = i4 + 1 | 0;
   i3 = i3 + 2 | 0;
   if ((HEAP8[i3 >> 0] | 0) == 37) i26 = 9; else break;
  } while (0);
  i12 = i4 - i14 | 0;
  if (i27 ? (HEAP32[i50 >> 2] & 32 | 0) == 0 : 0) ___fwritex(i14, i12, i50) | 0;
  if ((i4 | 0) != (i14 | 0)) {
   i4 = i12;
   i14 = i3;
   continue;
  }
  i7 = i3 + 1 | 0;
  i4 = HEAP8[i7 >> 0] | 0;
  i5 = (i4 << 24 >> 24) + -48 | 0;
  if (i5 >>> 0 < 10) {
   i25 = (HEAP8[i3 + 2 >> 0] | 0) == 36;
   i7 = i25 ? i3 + 3 | 0 : i7;
   i4 = HEAP8[i7 >> 0] | 0;
   i10 = i25 ? i5 : -1;
   i2 = i25 ? 1 : i2;
  } else i10 = -1;
  i3 = i4 << 24 >> 24;
  L25 : do if ((i3 & -32 | 0) == 32) {
   i5 = 0;
   while (1) {
    if (!(1 << i3 + -32 & 75913)) {
     i8 = i5;
     break L25;
    }
    i5 = 1 << (i4 << 24 >> 24) + -32 | i5;
    i7 = i7 + 1 | 0;
    i4 = HEAP8[i7 >> 0] | 0;
    i3 = i4 << 24 >> 24;
    if ((i3 & -32 | 0) != 32) {
     i8 = i5;
     break;
    }
   }
  } else i8 = 0; while (0);
  do if (i4 << 24 >> 24 == 42) {
   i4 = i7 + 1 | 0;
   i3 = (HEAP8[i4 >> 0] | 0) + -48 | 0;
   if (i3 >>> 0 < 10 ? (HEAP8[i7 + 2 >> 0] | 0) == 36 : 0) {
    HEAP32[i53 + (i3 << 2) >> 2] = 10;
    i2 = 1;
    i7 = i7 + 3 | 0;
    i3 = HEAP32[i52 + ((HEAP8[i4 >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else {
    if (i2) {
     i1 = -1;
     break L1;
    }
    if (!i27) {
     i11 = i8;
     i2 = 0;
     i7 = i4;
     i25 = 0;
     break;
    }
    i2 = (HEAP32[i51 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i3 = HEAP32[i2 >> 2] | 0;
    HEAP32[i51 >> 2] = i2 + 4;
    i2 = 0;
    i7 = i4;
   }
   if ((i3 | 0) < 0) {
    i11 = i8 | 8192;
    i25 = 0 - i3 | 0;
   } else {
    i11 = i8;
    i25 = i3;
   }
  } else {
   i5 = (i4 << 24 >> 24) + -48 | 0;
   if (i5 >>> 0 < 10) {
    i3 = i7;
    i4 = 0;
    do {
     i4 = (i4 * 10 | 0) + i5 | 0;
     i3 = i3 + 1 | 0;
     i5 = (HEAP8[i3 >> 0] | 0) + -48 | 0;
    } while (i5 >>> 0 < 10);
    if ((i4 | 0) < 0) {
     i1 = -1;
     break L1;
    } else {
     i11 = i8;
     i7 = i3;
     i25 = i4;
    }
   } else {
    i11 = i8;
    i25 = 0;
   }
  } while (0);
  L46 : do if ((HEAP8[i7 >> 0] | 0) == 46) {
   i3 = i7 + 1 | 0;
   i4 = HEAP8[i3 >> 0] | 0;
   if (i4 << 24 >> 24 != 42) {
    i5 = (i4 << 24 >> 24) + -48 | 0;
    if (i5 >>> 0 < 10) i4 = 0; else {
     i8 = 0;
     break;
    }
    while (1) {
     i4 = (i4 * 10 | 0) + i5 | 0;
     i3 = i3 + 1 | 0;
     i5 = (HEAP8[i3 >> 0] | 0) + -48 | 0;
     if (i5 >>> 0 >= 10) {
      i8 = i4;
      break L46;
     }
    }
   }
   i3 = i7 + 2 | 0;
   i4 = (HEAP8[i3 >> 0] | 0) + -48 | 0;
   if (i4 >>> 0 < 10 ? (HEAP8[i7 + 3 >> 0] | 0) == 36 : 0) {
    HEAP32[i53 + (i4 << 2) >> 2] = 10;
    i8 = HEAP32[i52 + ((HEAP8[i3 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i3 = i7 + 4 | 0;
    break;
   }
   if (i2) {
    i1 = -1;
    break L1;
   }
   if (i27) {
    i24 = (HEAP32[i51 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i8 = HEAP32[i24 >> 2] | 0;
    HEAP32[i51 >> 2] = i24 + 4;
   } else i8 = 0;
  } else {
   i8 = -1;
   i3 = i7;
  } while (0);
  i9 = 0;
  while (1) {
   i4 = (HEAP8[i3 >> 0] | 0) + -65 | 0;
   if (i4 >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i5 = i3 + 1 | 0;
   i4 = HEAP8[17816 + (i9 * 58 | 0) + i4 >> 0] | 0;
   i7 = i4 & 255;
   if ((i7 + -1 | 0) >>> 0 < 8) {
    i3 = i5;
    i9 = i7;
   } else {
    i24 = i5;
    break;
   }
  }
  if (!(i4 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i5 = (i10 | 0) > -1;
  do if (i4 << 24 >> 24 == 19) if (i5) {
   i1 = -1;
   break L1;
  } else i26 = 52; else {
   if (i5) {
    HEAP32[i53 + (i10 << 2) >> 2] = i7;
    i22 = i52 + (i10 << 3) | 0;
    i23 = HEAP32[i22 + 4 >> 2] | 0;
    i26 = i44;
    HEAP32[i26 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i26 + 4 >> 2] = i23;
    i26 = 52;
    break;
   }
   if (!i27) {
    i1 = 0;
    break L1;
   }
   _pop_arg_529(i44, i7, i51);
  } while (0);
  if ((i26 | 0) == 52 ? (i26 = 0, !i27) : 0) {
   i4 = i12;
   i14 = i24;
   continue;
  }
  i10 = HEAP8[i3 >> 0] | 0;
  i10 = (i9 | 0) != 0 & (i10 & 15 | 0) == 3 ? i10 & -33 : i10;
  i5 = i11 & -65537;
  i23 = (i11 & 8192 | 0) == 0 ? i11 : i5;
  L75 : do switch (i10 | 0) {
  case 110:
   switch (i9 | 0) {
   case 0:
    {
     HEAP32[HEAP32[i44 >> 2] >> 2] = i1;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i44 >> 2] >> 2] = i1;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 2:
    {
     i4 = HEAP32[i44 >> 2] | 0;
     HEAP32[i4 >> 2] = i1;
     HEAP32[i4 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i44 >> 2] >> 1] = i1;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i44 >> 2] >> 0] = i1;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i44 >> 2] >> 2] = i1;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   case 7:
    {
     i4 = HEAP32[i44 >> 2] | 0;
     HEAP32[i4 >> 2] = i1;
     HEAP32[i4 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   default:
    {
     i4 = i12;
     i14 = i24;
     continue L1;
    }
   }
  case 112:
   {
    i9 = i23 | 8;
    i8 = i8 >>> 0 > 8 ? i8 : 8;
    i10 = 120;
    i26 = 64;
    break;
   }
  case 88:
  case 120:
   {
    i9 = i23;
    i26 = 64;
    break;
   }
  case 111:
   {
    i5 = i44;
    i4 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i4 | 0) == 0 & (i5 | 0) == 0) i3 = i28; else {
     i3 = i28;
     do {
      i3 = i3 + -1 | 0;
      HEAP8[i3 >> 0] = i4 & 7 | 48;
      i4 = _bitshift64Lshr(i4 | 0, i5 | 0, 3) | 0;
      i5 = tempRet0;
     } while (!((i4 | 0) == 0 & (i5 | 0) == 0));
    }
    if (!(i23 & 8)) {
     i4 = i23;
     i9 = 0;
     i7 = 18296;
     i26 = 77;
    } else {
     i9 = i36 - i3 | 0;
     i4 = i23;
     i8 = (i8 | 0) > (i9 | 0) ? i8 : i9 + 1 | 0;
     i9 = 0;
     i7 = 18296;
     i26 = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    i4 = i44;
    i3 = HEAP32[i4 >> 2] | 0;
    i4 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i4 | 0) < 0) {
     i3 = _i64Subtract(0, 0, i3 | 0, i4 | 0) | 0;
     i4 = tempRet0;
     i5 = i44;
     HEAP32[i5 >> 2] = i3;
     HEAP32[i5 + 4 >> 2] = i4;
     i5 = 1;
     i7 = 18296;
     i26 = 76;
     break L75;
    }
    if (!(i23 & 2048)) {
     i7 = i23 & 1;
     i5 = i7;
     i7 = (i7 | 0) == 0 ? 18296 : 18298;
     i26 = 76;
    } else {
     i5 = 1;
     i7 = 18297;
     i26 = 76;
    }
    break;
   }
  case 117:
   {
    i4 = i44;
    i3 = HEAP32[i4 >> 2] | 0;
    i4 = HEAP32[i4 + 4 >> 2] | 0;
    i5 = 0;
    i7 = 18296;
    i26 = 76;
    break;
   }
  case 99:
   {
    HEAP8[i37 >> 0] = HEAP32[i44 >> 2];
    i3 = i37;
    i10 = 1;
    i12 = 0;
    i11 = 18296;
    i4 = i28;
    break;
   }
  case 109:
   {
    i4 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
    i26 = 82;
    break;
   }
  case 115:
   {
    i4 = HEAP32[i44 >> 2] | 0;
    i4 = (i4 | 0) != 0 ? i4 : 18306;
    i26 = 82;
    break;
   }
  case 67:
   {
    HEAP32[i49 >> 2] = HEAP32[i44 >> 2];
    HEAP32[i38 >> 2] = 0;
    HEAP32[i44 >> 2] = i49;
    i3 = i49;
    i8 = -1;
    i26 = 86;
    break;
   }
  case 83:
   {
    i3 = HEAP32[i44 >> 2] | 0;
    if (!i8) {
     _pad(i50, 32, i25, 0, i23);
     i3 = 0;
     i26 = 97;
    } else i26 = 86;
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
    d6 = +HEAPF64[i44 >> 3];
    HEAP32[i47 >> 2] = 0;
    HEAPF64[tempDoublePtr >> 3] = d6;
    if ((HEAP32[tempDoublePtr + 4 >> 2] | 0) >= 0) if (!(i23 & 2048)) {
     i22 = i23 & 1;
     i21 = i22;
     i22 = (i22 | 0) == 0 ? 18314 : 18319;
    } else {
     i21 = 1;
     i22 = 18316;
    } else {
     d6 = -d6;
     i21 = 1;
     i22 = 18313;
    }
    HEAPF64[tempDoublePtr >> 3] = d6;
    i20 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
    do if (i20 >>> 0 < 2146435072 | (i20 | 0) == 2146435072 & 0 < 0) {
     d13 = +_frexpl(d6, i47) * 2.0;
     i4 = d13 != 0.0;
     if (i4) HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + -1;
     i18 = i10 | 32;
     if ((i18 | 0) == 97) {
      i11 = i10 & 32;
      i14 = (i11 | 0) == 0 ? i22 : i22 + 9 | 0;
      i12 = i21 | 2;
      i3 = 12 - i8 | 0;
      do if (!(i8 >>> 0 > 11 | (i3 | 0) == 0)) {
       d6 = 8.0;
       do {
        i3 = i3 + -1 | 0;
        d6 = d6 * 16.0;
       } while ((i3 | 0) != 0);
       if ((HEAP8[i14 >> 0] | 0) == 45) {
        d6 = -(d6 + (-d13 - d6));
        break;
       } else {
        d6 = d13 + d6 - d6;
        break;
       }
      } else d6 = d13; while (0);
      i4 = HEAP32[i47 >> 2] | 0;
      i3 = (i4 | 0) < 0 ? 0 - i4 | 0 : i4;
      i3 = _fmt_u(i3, ((i3 | 0) < 0) << 31 >> 31, i41) | 0;
      if ((i3 | 0) == (i41 | 0)) {
       HEAP8[i42 >> 0] = 48;
       i3 = i42;
      }
      HEAP8[i3 + -1 >> 0] = (i4 >> 31 & 2) + 43;
      i9 = i3 + -2 | 0;
      HEAP8[i9 >> 0] = i10 + 15;
      i7 = (i8 | 0) < 1;
      i5 = (i23 & 8 | 0) == 0;
      i4 = i46;
      while (1) {
       i22 = ~~d6;
       i3 = i4 + 1 | 0;
       HEAP8[i4 >> 0] = HEAPU8[18280 + i22 >> 0] | i11;
       d6 = (d6 - +(i22 | 0)) * 16.0;
       do if ((i3 - i39 | 0) == 1) {
        if (i5 & (i7 & d6 == 0.0)) break;
        HEAP8[i3 >> 0] = 46;
        i3 = i4 + 2 | 0;
       } while (0);
       if (!(d6 != 0.0)) break; else i4 = i3;
      }
      i5 = i9;
      i8 = (i8 | 0) != 0 & (i30 + i3 | 0) < (i8 | 0) ? i31 + i8 - i5 | 0 : i29 - i5 + i3 | 0;
      i7 = i8 + i12 | 0;
      _pad(i50, 32, i25, i7, i23);
      if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i14, i12, i50) | 0;
      _pad(i50, 48, i25, i7, i23 ^ 65536);
      i4 = i3 - i39 | 0;
      if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i46, i4, i50) | 0;
      i3 = i43 - i5 | 0;
      _pad(i50, 48, i8 - (i4 + i3) | 0, 0, 0);
      if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i9, i3, i50) | 0;
      _pad(i50, 32, i25, i7, i23 ^ 8192);
      i3 = (i7 | 0) < (i25 | 0) ? i25 : i7;
      break;
     }
     i3 = (i8 | 0) < 0 ? 6 : i8;
     if (i4) {
      i4 = (HEAP32[i47 >> 2] | 0) + -28 | 0;
      HEAP32[i47 >> 2] = i4;
      d6 = d13 * 268435456.0;
     } else {
      d6 = d13;
      i4 = HEAP32[i47 >> 2] | 0;
     }
     i20 = (i4 | 0) < 0 ? i45 : i32;
     i19 = i20;
     i4 = i20;
     do {
      i17 = ~~d6 >>> 0;
      HEAP32[i4 >> 2] = i17;
      i4 = i4 + 4 | 0;
      d6 = (d6 - +(i17 >>> 0)) * 1.0e9;
     } while (d6 != 0.0);
     i5 = i4;
     i4 = HEAP32[i47 >> 2] | 0;
     if ((i4 | 0) > 0) {
      i8 = i20;
      while (1) {
       i9 = (i4 | 0) > 29 ? 29 : i4;
       i7 = i5 + -4 | 0;
       do if (i7 >>> 0 < i8 >>> 0) i7 = i8; else {
        i4 = 0;
        do {
         i17 = _bitshift64Shl(HEAP32[i7 >> 2] | 0, 0, i9 | 0) | 0;
         i17 = _i64Add(i17 | 0, tempRet0 | 0, i4 | 0, 0) | 0;
         i4 = tempRet0;
         i16 = ___uremdi3(i17 | 0, i4 | 0, 1e9, 0) | 0;
         HEAP32[i7 >> 2] = i16;
         i4 = ___udivdi3(i17 | 0, i4 | 0, 1e9, 0) | 0;
         i7 = i7 + -4 | 0;
        } while (i7 >>> 0 >= i8 >>> 0);
        if (!i4) {
         i7 = i8;
         break;
        }
        i7 = i8 + -4 | 0;
        HEAP32[i7 >> 2] = i4;
       } while (0);
       while (1) {
        if (i5 >>> 0 <= i7 >>> 0) break;
        i4 = i5 + -4 | 0;
        if (!(HEAP32[i4 >> 2] | 0)) i5 = i4; else break;
       }
       i4 = (HEAP32[i47 >> 2] | 0) - i9 | 0;
       HEAP32[i47 >> 2] = i4;
       if ((i4 | 0) > 0) i8 = i7; else break;
      }
     } else i7 = i20;
     if ((i4 | 0) < 0) {
      i14 = ((i3 + 25 | 0) / 9 | 0) + 1 | 0;
      i15 = (i18 | 0) == 102;
      i11 = i7;
      while (1) {
       i12 = 0 - i4 | 0;
       i12 = (i12 | 0) > 9 ? 9 : i12;
       do if (i11 >>> 0 < i5 >>> 0) {
        i4 = (1 << i12) + -1 | 0;
        i8 = 1e9 >>> i12;
        i7 = 0;
        i9 = i11;
        do {
         i17 = HEAP32[i9 >> 2] | 0;
         HEAP32[i9 >> 2] = (i17 >>> i12) + i7;
         i7 = Math_imul(i17 & i4, i8) | 0;
         i9 = i9 + 4 | 0;
        } while (i9 >>> 0 < i5 >>> 0);
        i4 = (HEAP32[i11 >> 2] | 0) == 0 ? i11 + 4 | 0 : i11;
        if (!i7) {
         i7 = i4;
         break;
        }
        HEAP32[i5 >> 2] = i7;
        i7 = i4;
        i5 = i5 + 4 | 0;
       } else i7 = (HEAP32[i11 >> 2] | 0) == 0 ? i11 + 4 | 0 : i11; while (0);
       i4 = i15 ? i20 : i7;
       i5 = (i5 - i4 >> 2 | 0) > (i14 | 0) ? i4 + (i14 << 2) | 0 : i5;
       i4 = (HEAP32[i47 >> 2] | 0) + i12 | 0;
       HEAP32[i47 >> 2] = i4;
       if ((i4 | 0) >= 0) {
        i15 = i7;
        break;
       } else i11 = i7;
      }
     } else i15 = i7;
     do if (i15 >>> 0 < i5 >>> 0) {
      i4 = (i19 - i15 >> 2) * 9 | 0;
      i8 = HEAP32[i15 >> 2] | 0;
      if (i8 >>> 0 < 10) break; else i7 = 10;
      do {
       i7 = i7 * 10 | 0;
       i4 = i4 + 1 | 0;
      } while (i8 >>> 0 >= i7 >>> 0);
     } else i4 = 0; while (0);
     i16 = (i18 | 0) == 103;
     i17 = (i3 | 0) != 0;
     i7 = i3 - ((i18 | 0) != 102 ? i4 : 0) + ((i17 & i16) << 31 >> 31) | 0;
     if ((i7 | 0) < (((i5 - i19 >> 2) * 9 | 0) + -9 | 0)) {
      i9 = i7 + 9216 | 0;
      i7 = i20 + 4 + (((i9 | 0) / 9 | 0) + -1024 << 2) | 0;
      i9 = ((i9 | 0) % 9 | 0) + 1 | 0;
      if ((i9 | 0) < 9) {
       i8 = 10;
       do {
        i8 = i8 * 10 | 0;
        i9 = i9 + 1 | 0;
       } while ((i9 | 0) != 9);
      } else i8 = 10;
      i12 = HEAP32[i7 >> 2] | 0;
      i14 = (i12 >>> 0) % (i8 >>> 0) | 0;
      i9 = (i7 + 4 | 0) == (i5 | 0);
      do if (i9 & (i14 | 0) == 0) i8 = i15; else {
       d13 = (((i12 >>> 0) / (i8 >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       i11 = (i8 | 0) / 2 | 0;
       if (i14 >>> 0 < i11 >>> 0) d6 = .5; else d6 = i9 & (i14 | 0) == (i11 | 0) ? 1.0 : 1.5;
       do if (i21) {
        if ((HEAP8[i22 >> 0] | 0) != 45) break;
        d13 = -d13;
        d6 = -d6;
       } while (0);
       i9 = i12 - i14 | 0;
       HEAP32[i7 >> 2] = i9;
       if (!(d13 + d6 != d13)) {
        i8 = i15;
        break;
       }
       i18 = i9 + i8 | 0;
       HEAP32[i7 >> 2] = i18;
       if (i18 >>> 0 > 999999999) {
        i4 = i15;
        while (1) {
         i8 = i7 + -4 | 0;
         HEAP32[i7 >> 2] = 0;
         if (i8 >>> 0 < i4 >>> 0) {
          i4 = i4 + -4 | 0;
          HEAP32[i4 >> 2] = 0;
         }
         i18 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
         HEAP32[i8 >> 2] = i18;
         if (i18 >>> 0 > 999999999) i7 = i8; else {
          i11 = i4;
          i7 = i8;
          break;
         }
        }
       } else i11 = i15;
       i4 = (i19 - i11 >> 2) * 9 | 0;
       i9 = HEAP32[i11 >> 2] | 0;
       if (i9 >>> 0 < 10) {
        i8 = i11;
        break;
       } else i8 = 10;
       do {
        i8 = i8 * 10 | 0;
        i4 = i4 + 1 | 0;
       } while (i9 >>> 0 >= i8 >>> 0);
       i8 = i11;
      } while (0);
      i18 = i7 + 4 | 0;
      i15 = i8;
      i5 = i5 >>> 0 > i18 >>> 0 ? i18 : i5;
     }
     i12 = 0 - i4 | 0;
     while (1) {
      if (i5 >>> 0 <= i15 >>> 0) {
       i14 = 0;
       i18 = i5;
       break;
      }
      i7 = i5 + -4 | 0;
      if (!(HEAP32[i7 >> 2] | 0)) i5 = i7; else {
       i14 = 1;
       i18 = i5;
       break;
      }
     }
     do if (i16) {
      i3 = (i17 & 1 ^ 1) + i3 | 0;
      if ((i3 | 0) > (i4 | 0) & (i4 | 0) > -5) {
       i10 = i10 + -1 | 0;
       i3 = i3 + -1 - i4 | 0;
      } else {
       i10 = i10 + -2 | 0;
       i3 = i3 + -1 | 0;
      }
      i5 = i23 & 8;
      if (i5) break;
      do if (i14) {
       i5 = HEAP32[i18 + -4 >> 2] | 0;
       if (!i5) {
        i7 = 9;
        break;
       }
       if (!((i5 >>> 0) % 10 | 0)) {
        i8 = 10;
        i7 = 0;
       } else {
        i7 = 0;
        break;
       }
       do {
        i8 = i8 * 10 | 0;
        i7 = i7 + 1 | 0;
       } while (((i5 >>> 0) % (i8 >>> 0) | 0 | 0) == 0);
      } else i7 = 9; while (0);
      i5 = ((i18 - i19 >> 2) * 9 | 0) + -9 | 0;
      if ((i10 | 32 | 0) == 102) {
       i5 = i5 - i7 | 0;
       i5 = (i5 | 0) < 0 ? 0 : i5;
       i3 = (i3 | 0) < (i5 | 0) ? i3 : i5;
       i5 = 0;
       break;
      } else {
       i5 = i5 + i4 - i7 | 0;
       i5 = (i5 | 0) < 0 ? 0 : i5;
       i3 = (i3 | 0) < (i5 | 0) ? i3 : i5;
       i5 = 0;
       break;
      }
     } else i5 = i23 & 8; while (0);
     i11 = i3 | i5;
     i8 = (i11 | 0) != 0 & 1;
     i9 = (i10 | 32 | 0) == 102;
     if (i9) {
      i4 = (i4 | 0) > 0 ? i4 : 0;
      i10 = 0;
     } else {
      i7 = (i4 | 0) < 0 ? i12 : i4;
      i7 = _fmt_u(i7, ((i7 | 0) < 0) << 31 >> 31, i41) | 0;
      if ((i43 - i7 | 0) < 2) do {
       i7 = i7 + -1 | 0;
       HEAP8[i7 >> 0] = 48;
      } while ((i43 - i7 | 0) < 2);
      HEAP8[i7 + -1 >> 0] = (i4 >> 31 & 2) + 43;
      i19 = i7 + -2 | 0;
      HEAP8[i19 >> 0] = i10;
      i4 = i43 - i19 | 0;
      i10 = i19;
     }
     i12 = i21 + 1 + i3 + i8 + i4 | 0;
     _pad(i50, 32, i25, i12, i23);
     if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i22, i21, i50) | 0;
     _pad(i50, 48, i25, i12, i23 ^ 65536);
     do if (i9) {
      i7 = i15 >>> 0 > i20 >>> 0 ? i20 : i15;
      i4 = i7;
      do {
       i5 = _fmt_u(HEAP32[i4 >> 2] | 0, 0, i33) | 0;
       do if ((i4 | 0) == (i7 | 0)) {
        if ((i5 | 0) != (i33 | 0)) break;
        HEAP8[i35 >> 0] = 48;
        i5 = i35;
       } else {
        if (i5 >>> 0 <= i46 >>> 0) break;
        _memset(i46 | 0, 48, i5 - i39 | 0) | 0;
        do i5 = i5 + -1 | 0; while (i5 >>> 0 > i46 >>> 0);
       } while (0);
       if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i5, i34 - i5 | 0, i50) | 0;
       i4 = i4 + 4 | 0;
      } while (i4 >>> 0 <= i20 >>> 0);
      do if (i11) {
       if (HEAP32[i50 >> 2] & 32) break;
       ___fwritex(18348, 1, i50) | 0;
      } while (0);
      if ((i3 | 0) > 0 & i4 >>> 0 < i18 >>> 0) {
       i5 = i4;
       while (1) {
        i4 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i33) | 0;
        if (i4 >>> 0 > i46 >>> 0) {
         _memset(i46 | 0, 48, i4 - i39 | 0) | 0;
         do i4 = i4 + -1 | 0; while (i4 >>> 0 > i46 >>> 0);
        }
        if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i4, (i3 | 0) > 9 ? 9 : i3, i50) | 0;
        i5 = i5 + 4 | 0;
        i4 = i3 + -9 | 0;
        if (!((i3 | 0) > 9 & i5 >>> 0 < i18 >>> 0)) {
         i3 = i4;
         break;
        } else i3 = i4;
       }
      }
      _pad(i50, 48, i3 + 9 | 0, 9, 0);
     } else {
      i9 = i14 ? i18 : i15 + 4 | 0;
      if ((i3 | 0) > -1) {
       i8 = (i5 | 0) == 0;
       i7 = i15;
       do {
        i4 = _fmt_u(HEAP32[i7 >> 2] | 0, 0, i33) | 0;
        if ((i4 | 0) == (i33 | 0)) {
         HEAP8[i35 >> 0] = 48;
         i4 = i35;
        }
        do if ((i7 | 0) == (i15 | 0)) {
         i5 = i4 + 1 | 0;
         if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i4, 1, i50) | 0;
         if (i8 & (i3 | 0) < 1) {
          i4 = i5;
          break;
         }
         if (HEAP32[i50 >> 2] & 32) {
          i4 = i5;
          break;
         }
         ___fwritex(18348, 1, i50) | 0;
         i4 = i5;
        } else {
         if (i4 >>> 0 <= i46 >>> 0) break;
         _memset(i46 | 0, 48, i4 + i40 | 0) | 0;
         do i4 = i4 + -1 | 0; while (i4 >>> 0 > i46 >>> 0);
        } while (0);
        i5 = i34 - i4 | 0;
        if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i4, (i3 | 0) > (i5 | 0) ? i5 : i3, i50) | 0;
        i3 = i3 - i5 | 0;
        i7 = i7 + 4 | 0;
       } while (i7 >>> 0 < i9 >>> 0 & (i3 | 0) > -1);
      }
      _pad(i50, 48, i3 + 18 | 0, 18, 0);
      if (HEAP32[i50 >> 2] & 32) break;
      ___fwritex(i10, i43 - i10 | 0, i50) | 0;
     } while (0);
     _pad(i50, 32, i25, i12, i23 ^ 8192);
     i3 = (i12 | 0) < (i25 | 0) ? i25 : i12;
    } else {
     i9 = (i10 & 32 | 0) != 0;
     i8 = d6 != d6 | 0.0 != 0.0;
     i4 = i8 ? 0 : i21;
     i7 = i4 + 3 | 0;
     _pad(i50, 32, i25, i7, i5);
     i3 = HEAP32[i50 >> 2] | 0;
     if (!(i3 & 32)) {
      ___fwritex(i22, i4, i50) | 0;
      i3 = HEAP32[i50 >> 2] | 0;
     }
     if (!(i3 & 32)) ___fwritex(i8 ? (i9 ? 18340 : 18344) : i9 ? 18332 : 18336, 3, i50) | 0;
     _pad(i50, 32, i25, i7, i23 ^ 8192);
     i3 = (i7 | 0) < (i25 | 0) ? i25 : i7;
    } while (0);
    i4 = i3;
    i14 = i24;
    continue L1;
   }
  default:
   {
    i3 = i14;
    i5 = i23;
    i10 = i8;
    i12 = 0;
    i11 = 18296;
    i4 = i28;
   }
  } while (0);
  L311 : do if ((i26 | 0) == 64) {
   i5 = i44;
   i4 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i5 + 4 >> 2] | 0;
   i7 = i10 & 32;
   if (!((i4 | 0) == 0 & (i5 | 0) == 0)) {
    i3 = i28;
    do {
     i3 = i3 + -1 | 0;
     HEAP8[i3 >> 0] = HEAPU8[18280 + (i4 & 15) >> 0] | i7;
     i4 = _bitshift64Lshr(i4 | 0, i5 | 0, 4) | 0;
     i5 = tempRet0;
    } while (!((i4 | 0) == 0 & (i5 | 0) == 0));
    i26 = i44;
    if ((i9 & 8 | 0) == 0 | (HEAP32[i26 >> 2] | 0) == 0 & (HEAP32[i26 + 4 >> 2] | 0) == 0) {
     i4 = i9;
     i9 = 0;
     i7 = 18296;
     i26 = 77;
    } else {
     i4 = i9;
     i9 = 2;
     i7 = 18296 + (i10 >> 4) | 0;
     i26 = 77;
    }
   } else {
    i3 = i28;
    i4 = i9;
    i9 = 0;
    i7 = 18296;
    i26 = 77;
   }
  } else if ((i26 | 0) == 76) {
   i3 = _fmt_u(i3, i4, i28) | 0;
   i4 = i23;
   i9 = i5;
   i26 = 77;
  } else if ((i26 | 0) == 82) {
   i26 = 0;
   i23 = _memchr(i4, 0, i8) | 0;
   i22 = (i23 | 0) == 0;
   i3 = i4;
   i10 = i22 ? i8 : i23 - i4 | 0;
   i12 = 0;
   i11 = 18296;
   i4 = i22 ? i4 + i8 | 0 : i23;
  } else if ((i26 | 0) == 86) {
   i26 = 0;
   i5 = 0;
   i4 = 0;
   i9 = i3;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    if (!i7) break;
    i4 = _wctomb(i48, i7) | 0;
    if ((i4 | 0) < 0 | i4 >>> 0 > (i8 - i5 | 0) >>> 0) break;
    i5 = i4 + i5 | 0;
    if (i8 >>> 0 > i5 >>> 0) i9 = i9 + 4 | 0; else break;
   }
   if ((i4 | 0) < 0) {
    i1 = -1;
    break L1;
   }
   _pad(i50, 32, i25, i5, i23);
   if (!i5) {
    i3 = 0;
    i26 = 97;
   } else {
    i7 = 0;
    while (1) {
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) {
      i3 = i5;
      i26 = 97;
      break L311;
     }
     i4 = _wctomb(i48, i4) | 0;
     i7 = i4 + i7 | 0;
     if ((i7 | 0) > (i5 | 0)) {
      i3 = i5;
      i26 = 97;
      break L311;
     }
     if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i48, i4, i50) | 0;
     if (i7 >>> 0 >= i5 >>> 0) {
      i3 = i5;
      i26 = 97;
      break;
     } else i3 = i3 + 4 | 0;
    }
   }
  } while (0);
  if ((i26 | 0) == 97) {
   i26 = 0;
   _pad(i50, 32, i25, i3, i23 ^ 8192);
   i4 = (i25 | 0) > (i3 | 0) ? i25 : i3;
   i14 = i24;
   continue;
  }
  if ((i26 | 0) == 77) {
   i26 = 0;
   i5 = (i8 | 0) > -1 ? i4 & -65537 : i4;
   i4 = i44;
   i4 = (HEAP32[i4 >> 2] | 0) != 0 | (HEAP32[i4 + 4 >> 2] | 0) != 0;
   if ((i8 | 0) != 0 | i4) {
    i10 = (i4 & 1 ^ 1) + (i36 - i3) | 0;
    i10 = (i8 | 0) > (i10 | 0) ? i8 : i10;
    i12 = i9;
    i11 = i7;
    i4 = i28;
   } else {
    i3 = i28;
    i10 = 0;
    i12 = i9;
    i11 = i7;
    i4 = i28;
   }
  }
  i9 = i4 - i3 | 0;
  i7 = (i10 | 0) < (i9 | 0) ? i9 : i10;
  i8 = i12 + i7 | 0;
  i4 = (i25 | 0) < (i8 | 0) ? i8 : i25;
  _pad(i50, 32, i4, i8, i5);
  if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i11, i12, i50) | 0;
  _pad(i50, 48, i4, i8, i5 ^ 65536);
  _pad(i50, 48, i7, i9, 0);
  if (!(HEAP32[i50 >> 2] & 32)) ___fwritex(i3, i9, i50) | 0;
  _pad(i50, 32, i4, i8, i5 ^ 8192);
  i14 = i24;
 }
 L345 : do if ((i26 | 0) == 244) if (!i50) if (i2) {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i53 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg_529(i52 + (i1 << 3) | 0, i2, i51);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break L345;
   }
  }
  if ((i1 | 0) < 10) while (1) {
   if (HEAP32[i53 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break L345;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break;
   }
  } else i1 = 1;
 } else i1 = 0; while (0);
 STACKTOP = i54;
 return i1 | 0;
}

function _deflate(i26, i24) {
 i26 = i26 | 0;
 i24 = i24 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i25 = 0;
 L1 : do if ((i26 | 0) != 0 ? (i25 = HEAP32[i26 + 28 >> 2] | 0, !(i24 >>> 0 > 5 | (i25 | 0) == 0)) : 0) {
  do if (HEAP32[i26 + 12 >> 2] | 0) {
   if ((HEAP32[i26 >> 2] | 0) == 0 ? (HEAP32[i26 + 4 >> 2] | 0) != 0 : 0) break;
   i20 = i25 + 4 | 0;
   i1 = HEAP32[i20 >> 2] | 0;
   i21 = (i24 | 0) != 4;
   if (!(i21 & (i1 | 0) == 666)) {
    i22 = i26 + 16 | 0;
    if (!(HEAP32[i22 >> 2] | 0)) {
     HEAP32[i26 + 24 >> 2] = HEAP32[445];
     i1 = -5;
     break L1;
    }
    HEAP32[i25 >> 2] = i26;
    i23 = i25 + 40 | 0;
    i14 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i24;
    do if ((i1 | 0) == 42) {
     if ((HEAP32[i25 + 24 >> 2] | 0) != 2) {
      i2 = (HEAP32[i25 + 48 >> 2] << 12) + -30720 | 0;
      if ((HEAP32[i25 + 136 >> 2] | 0) <= 1 ? (i3 = HEAP32[i25 + 132 >> 2] | 0, (i3 | 0) >= 2) : 0) if ((i3 | 0) < 6) i1 = 64; else i1 = (i3 | 0) == 6 ? 128 : 192; else i1 = 0;
      i1 = i1 | i2;
      i18 = i25 + 108 | 0;
      i1 = (HEAP32[i18 >> 2] | 0) == 0 ? i1 : i1 | 32;
      HEAP32[i20 >> 2] = 113;
      _putShortMSB(i25, ((i1 >>> 0) % 31 | 0 | i1) ^ 31);
      i1 = i26 + 48 | 0;
      if (HEAP32[i18 >> 2] | 0) {
       _putShortMSB(i25, (HEAP32[i1 >> 2] | 0) >>> 16);
       _putShortMSB(i25, HEAP32[i1 >> 2] & 65535);
      }
      HEAP32[i1 >> 2] = _adler32(0, 0, 0) | 0;
      i1 = HEAP32[i20 >> 2] | 0;
      i18 = 30;
      break;
     }
     i3 = i26 + 48 | 0;
     HEAP32[i3 >> 2] = _crc32(0, 0, 0) | 0;
     i5 = i25 + 20 | 0;
     i1 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i1 + 1;
     i6 = i25 + 8 | 0;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 31;
     i1 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i1 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = -117;
     i1 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i1 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 8;
     i1 = i25 + 28 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     if (!i2) {
      i1 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 0;
      i1 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 0;
      i1 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 0;
      i1 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 0;
      i1 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i1 >> 0] = 0;
      i1 = HEAP32[i25 + 132 >> 2] | 0;
      if ((i1 | 0) == 9) i1 = 2; else i1 = ((i1 | 0) < 2 ? 1 : (HEAP32[i25 + 136 >> 2] | 0) > 1) ? 4 : 0;
      i17 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i17 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i17 >> 0] = i1;
      i17 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i17 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i17 >> 0] = 3;
      HEAP32[i20 >> 2] = 113;
      break;
     }
     i18 = (((HEAP32[i2 + 44 >> 2] | 0) != 0 ? 2 : 0) | (HEAP32[i2 >> 2] | 0) != 0 | ((HEAP32[i2 + 16 >> 2] | 0) == 0 ? 0 : 4) | ((HEAP32[i2 + 28 >> 2] | 0) == 0 ? 0 : 8) | ((HEAP32[i2 + 36 >> 2] | 0) == 0 ? 0 : 16)) & 255;
     i2 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i2 >> 0] = i18;
     i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 255;
     i18 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i18 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i18 >> 0] = i2;
     i18 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) >>> 8 & 255;
     i2 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i2 >> 0] = i18;
     i2 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) >>> 16 & 255;
     i18 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i18 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i18 >> 0] = i2;
     i18 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) >>> 24 & 255;
     i2 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i2 >> 0] = i18;
     i2 = HEAP32[i25 + 132 >> 2] | 0;
     if ((i2 | 0) == 9) i2 = 2; else i2 = ((i2 | 0) < 2 ? 1 : (HEAP32[i25 + 136 >> 2] | 0) > 1) ? 4 : 0;
     i18 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i18 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i18 >> 0] = i2;
     i18 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 255;
     i2 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i6 >> 2] | 0) + i2 >> 0] = i18;
     i2 = HEAP32[i1 >> 2] | 0;
     if (HEAP32[i2 + 16 >> 2] | 0) {
      i2 = HEAP32[i2 + 20 >> 2] & 255;
      i18 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i18 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i18 >> 0] = i2;
      i18 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) >>> 8 & 255;
      i2 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i2 + 1;
      HEAP8[(HEAP32[i6 >> 2] | 0) + i2 >> 0] = i18;
      i2 = HEAP32[i1 >> 2] | 0;
     }
     if (HEAP32[i2 + 44 >> 2] | 0) HEAP32[i3 >> 2] = _crc32(HEAP32[i3 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
     HEAP32[i25 + 32 >> 2] = 0;
     HEAP32[i20 >> 2] = 69;
     i18 = 32;
    } else i18 = 30; while (0);
    if ((i18 | 0) == 30) if ((i1 | 0) == 69) {
     i1 = i25 + 28 | 0;
     i18 = 32;
    } else i18 = 49;
    do if ((i18 | 0) == 32) {
     i2 = HEAP32[i1 >> 2] | 0;
     if (!(HEAP32[i2 + 16 >> 2] | 0)) {
      HEAP32[i20 >> 2] = 73;
      i18 = 51;
      break;
     }
     i7 = i25 + 20 | 0;
     i10 = i25 + 32 | 0;
     i6 = i25 + 12 | 0;
     i8 = i26 + 48 | 0;
     i9 = i25 + 8 | 0;
     i4 = HEAP32[i10 >> 2] | 0;
     i3 = HEAP32[i7 >> 2] | 0;
     while (1) {
      if (i4 >>> 0 >= (HEAP32[i2 + 20 >> 2] & 65535) >>> 0) break;
      i5 = HEAP32[i7 >> 2] | 0;
      if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
       if (i5 >>> 0 > i3 >>> 0 & (HEAP32[i2 + 44 >> 2] | 0) != 0) HEAP32[i8 >> 2] = _crc32(HEAP32[i8 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + i3 | 0, i5 - i3 | 0) | 0;
       _flush_pending(i26);
       i3 = HEAP32[i7 >> 2] | 0;
       if ((i3 | 0) == (HEAP32[i6 >> 2] | 0)) {
        i18 = 39;
        break;
       }
       i2 = HEAP32[i1 >> 2] | 0;
       i4 = HEAP32[i10 >> 2] | 0;
       i5 = i3;
      }
      i4 = HEAP8[(HEAP32[i2 + 16 >> 2] | 0) + i4 >> 0] | 0;
      HEAP32[i7 >> 2] = i5 + 1;
      HEAP8[(HEAP32[i9 >> 2] | 0) + i5 >> 0] = i4;
      i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
      HEAP32[i10 >> 2] = i4;
      i2 = HEAP32[i1 >> 2] | 0;
     }
     if ((i18 | 0) == 39) i2 = HEAP32[i1 >> 2] | 0;
     if ((HEAP32[i2 + 44 >> 2] | 0) != 0 ? (i11 = HEAP32[i7 >> 2] | 0, i11 >>> 0 > i3 >>> 0) : 0) {
      HEAP32[i8 >> 2] = _crc32(HEAP32[i8 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + i3 | 0, i11 - i3 | 0) | 0;
      i2 = HEAP32[i1 >> 2] | 0;
     }
     if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i2 + 20 >> 2] | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i20 >> 2] = 73;
      i18 = 51;
      break;
     } else {
      i1 = HEAP32[i20 >> 2] | 0;
      i18 = 49;
      break;
     }
    } while (0);
    if ((i18 | 0) == 49) if ((i1 | 0) == 73) {
     i2 = i25 + 28 | 0;
     i1 = i2;
     i2 = HEAP32[i2 >> 2] | 0;
     i18 = 51;
    } else i18 = 66;
    do if ((i18 | 0) == 51) {
     if (!(HEAP32[i2 + 28 >> 2] | 0)) {
      HEAP32[i20 >> 2] = 91;
      i18 = 68;
      break;
     }
     i6 = i25 + 20 | 0;
     i3 = HEAP32[i6 >> 2] | 0;
     i5 = i25 + 12 | 0;
     i7 = i26 + 48 | 0;
     i8 = i25 + 8 | 0;
     i9 = i25 + 32 | 0;
     i2 = i3;
     while (1) {
      if ((i2 | 0) == (HEAP32[i5 >> 2] | 0)) {
       if (i2 >>> 0 > i3 >>> 0 ? (HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) HEAP32[i7 >> 2] = _crc32(HEAP32[i7 >> 2] | 0, (HEAP32[i8 >> 2] | 0) + i3 | 0, i2 - i3 | 0) | 0;
       _flush_pending(i26);
       i2 = HEAP32[i6 >> 2] | 0;
       if ((i2 | 0) == (HEAP32[i5 >> 2] | 0)) {
        i3 = i2;
        i2 = 1;
        break;
       } else {
        i4 = i2;
        i3 = i2;
       }
      } else i4 = i2;
      i2 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = i2 + 1;
      i2 = HEAP8[(HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] | 0) + i2 >> 0] | 0;
      HEAP32[i6 >> 2] = i4 + 1;
      HEAP8[(HEAP32[i8 >> 2] | 0) + i4 >> 0] = i2;
      if (!(i2 << 24 >> 24)) {
       i2 = i2 & 255;
       break;
      }
      i2 = HEAP32[i6 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0) != 0 ? (i12 = HEAP32[i6 >> 2] | 0, i12 >>> 0 > i3 >>> 0) : 0) HEAP32[i7 >> 2] = _crc32(HEAP32[i7 >> 2] | 0, (HEAP32[i8 >> 2] | 0) + i3 | 0, i12 - i3 | 0) | 0;
     if (!i2) {
      HEAP32[i9 >> 2] = 0;
      HEAP32[i20 >> 2] = 91;
      i18 = 68;
      break;
     } else {
      i1 = HEAP32[i20 >> 2] | 0;
      i18 = 66;
      break;
     }
    } while (0);
    if ((i18 | 0) == 66) if ((i1 | 0) == 91) {
     i1 = i25 + 28 | 0;
     i18 = 68;
    } else {
     i4 = i1;
     i18 = 83;
    }
    do if ((i18 | 0) == 68) {
     if (!(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0)) {
      HEAP32[i20 >> 2] = 103;
      i18 = 85;
      break;
     }
     i7 = i25 + 20 | 0;
     i3 = HEAP32[i7 >> 2] | 0;
     i5 = i25 + 12 | 0;
     i8 = i26 + 48 | 0;
     i9 = i25 + 8 | 0;
     i6 = i25 + 32 | 0;
     i2 = i3;
     while (1) {
      if ((i2 | 0) == (HEAP32[i5 >> 2] | 0)) {
       if (i2 >>> 0 > i3 >>> 0 ? (HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) HEAP32[i8 >> 2] = _crc32(HEAP32[i8 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + i3 | 0, i2 - i3 | 0) | 0;
       _flush_pending(i26);
       i3 = HEAP32[i7 >> 2] | 0;
       if ((i3 | 0) == (HEAP32[i5 >> 2] | 0)) {
        i2 = 1;
        break;
       } else i2 = i3;
      }
      i4 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i4 + 1;
      i4 = HEAP8[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + i4 >> 0] | 0;
      HEAP32[i7 >> 2] = i2 + 1;
      HEAP8[(HEAP32[i9 >> 2] | 0) + i2 >> 0] = i4;
      if (!(i4 << 24 >> 24)) {
       i2 = i4 & 255;
       break;
      }
      i2 = HEAP32[i7 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0) != 0 ? (i13 = HEAP32[i7 >> 2] | 0, i13 >>> 0 > i3 >>> 0) : 0) HEAP32[i8 >> 2] = _crc32(HEAP32[i8 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + i3 | 0, i13 - i3 | 0) | 0;
     if (!i2) {
      HEAP32[i20 >> 2] = 103;
      i18 = 85;
      break;
     } else {
      i4 = HEAP32[i20 >> 2] | 0;
      i18 = 83;
      break;
     }
    } while (0);
    if ((i18 | 0) == 83 ? (i4 | 0) == 103 : 0) {
     i1 = i25 + 28 | 0;
     i18 = 85;
    }
    do if ((i18 | 0) == 85) {
     if (!(HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0)) {
      HEAP32[i20 >> 2] = 113;
      break;
     }
     i4 = i25 + 20 | 0;
     i2 = HEAP32[i4 >> 2] | 0;
     i3 = i25 + 12 | 0;
     i1 = HEAP32[i3 >> 2] | 0;
     if ((i2 + 2 | 0) >>> 0 > i1 >>> 0) {
      _flush_pending(i26);
      i2 = HEAP32[i4 >> 2] | 0;
      i1 = HEAP32[i3 >> 2] | 0;
     }
     if ((i2 + 2 | 0) >>> 0 <= i1 >>> 0) {
      i18 = i26 + 48 | 0;
      i15 = HEAP32[i18 >> 2] & 255;
      HEAP32[i4 >> 2] = i2 + 1;
      i16 = i25 + 8 | 0;
      HEAP8[(HEAP32[i16 >> 2] | 0) + i2 >> 0] = i15;
      i15 = (HEAP32[i18 >> 2] | 0) >>> 8 & 255;
      i17 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = i17 + 1;
      HEAP8[(HEAP32[i16 >> 2] | 0) + i17 >> 0] = i15;
      HEAP32[i18 >> 2] = _crc32(0, 0, 0) | 0;
      HEAP32[i20 >> 2] = 113;
     }
    } while (0);
    i17 = i25 + 20 | 0;
    if (!(HEAP32[i17 >> 2] | 0)) {
     if (i21 & (i14 | 0) >= (i24 | 0) & (HEAP32[i26 + 4 >> 2] | 0) == 0) {
      HEAP32[i26 + 24 >> 2] = HEAP32[445];
      i1 = -5;
      break L1;
     }
    } else {
     _flush_pending(i26);
     if (!(HEAP32[i22 >> 2] | 0)) {
      HEAP32[i23 >> 2] = -1;
      i1 = 0;
      break L1;
     }
    }
    i2 = (HEAP32[i20 >> 2] | 0) == 666;
    i1 = (HEAP32[i26 + 4 >> 2] | 0) == 0;
    if (i2) if (i1) i18 = 100; else {
     HEAP32[i26 + 24 >> 2] = HEAP32[445];
     i1 = -5;
     break L1;
    } else if (i1) i18 = 100; else i18 = 101;
    if ((i18 | 0) == 100 ? !((HEAP32[i25 + 116 >> 2] | 0) == 0 & ((i24 | 0) == 0 | i2)) : 0) i18 = 101;
    do if ((i18 | 0) == 101) {
     L146 : do switch (HEAP32[i25 + 136 >> 2] | 0) {
     case 2:
      {
       i1 = i25 + 116 | 0;
       i2 = i25 + 96 | 0;
       i11 = i25 + 108 | 0;
       i10 = i25 + 56 | 0;
       i3 = i25 + 5792 | 0;
       i4 = i25 + 5796 | 0;
       i5 = i25 + 5784 | 0;
       i6 = i25 + 5788 | 0;
       i12 = i25 + 92 | 0;
       while (1) {
        if ((HEAP32[i1 >> 2] | 0) == 0 ? (_fill_window(i25), (HEAP32[i1 >> 2] | 0) == 0) : 0) break;
        HEAP32[i2 >> 2] = 0;
        i19 = HEAP8[(HEAP32[i10 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) >> 0] | 0;
        i7 = HEAP32[i3 >> 2] | 0;
        HEAP16[(HEAP32[i4 >> 2] | 0) + (i7 << 1) >> 1] = 0;
        HEAP32[i3 >> 2] = i7 + 1;
        HEAP8[(HEAP32[i5 >> 2] | 0) + i7 >> 0] = i19;
        i19 = i25 + 148 + ((i19 & 255) << 2) | 0;
        HEAP16[i19 >> 1] = (HEAP16[i19 >> 1] | 0) + 1 << 16 >> 16;
        i19 = (HEAP32[i3 >> 2] | 0) == ((HEAP32[i6 >> 2] | 0) + -1 | 0);
        HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + -1;
        i7 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
        HEAP32[i11 >> 2] = i7;
        if (!i19) continue;
        i8 = HEAP32[i12 >> 2] | 0;
        if ((i8 | 0) > -1) i9 = (HEAP32[i10 >> 2] | 0) + i8 | 0; else i9 = 0;
        __tr_flush_block(i25, i9, i7 - i8 | 0, 0);
        HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
        _flush_pending(HEAP32[i25 >> 2] | 0);
        if (!(HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] | 0)) break L146;
       }
       if (i24) {
        i3 = HEAP32[i12 >> 2] | 0;
        if ((i3 | 0) > -1) i2 = (HEAP32[i10 >> 2] | 0) + i3 | 0; else i2 = 0;
        i1 = (i24 | 0) == 4;
        __tr_flush_block(i25, i2, (HEAP32[i11 >> 2] | 0) - i3 | 0, i1 & 1);
        HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
        _flush_pending(HEAP32[i25 >> 2] | 0);
        if (!(HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] | 0)) {
         i1 = i1 ? 2 : 0;
         i18 = 148;
         break L146;
        } else {
         i1 = i1 ? 3 : 1;
         i18 = 148;
         break L146;
        }
       }
       break;
      }
     case 3:
      {
       i7 = i25 + 116 | 0;
       i8 = (i24 | 0) == 0;
       i9 = i25 + 96 | 0;
       i15 = i25 + 108 | 0;
       i10 = i25 + 5792 | 0;
       i11 = i25 + 5796 | 0;
       i12 = i25 + 5784 | 0;
       i13 = i25 + 5788 | 0;
       i14 = i25 + 56 | 0;
       i16 = i25 + 92 | 0;
       while (1) {
        i1 = HEAP32[i7 >> 2] | 0;
        if (i1 >>> 0 < 258) {
         _fill_window(i25);
         i1 = HEAP32[i7 >> 2] | 0;
         if (i8 & i1 >>> 0 < 258) break L146;
         if (!i1) break;
         HEAP32[i9 >> 2] = 0;
         if (i1 >>> 0 > 2) i18 = 122; else {
          i1 = HEAP32[i15 >> 2] | 0;
          i18 = 137;
         }
        } else {
         HEAP32[i9 >> 2] = 0;
         i18 = 122;
        }
        do if ((i18 | 0) == 122) {
         i18 = 0;
         i6 = HEAP32[i15 >> 2] | 0;
         if (i6) {
          i2 = (HEAP32[i14 >> 2] | 0) + i6 | 0;
          i3 = i2 + -1 | 0;
          i5 = HEAP8[i3 >> 0] | 0;
          i3 = i3 + 1 | 0;
          if ((i5 << 24 >> 24 == (HEAP8[i3 >> 0] | 0) ? (i19 = i3 + 1 | 0, i5 << 24 >> 24 == (HEAP8[i19 >> 0] | 0)) : 0) ? i5 << 24 >> 24 == (HEAP8[i19 + 1 >> 0] | 0) : 0) {
           i4 = i2 + 258 | 0;
           i3 = i19;
           do {
            i2 = i3 + 2 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3 + 3 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3 + 4 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3 + 5 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3 + 6 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3 + 7 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i2 >> 0] | 0)) break;
            i2 = i3;
            i3 = i3 + 8 | 0;
            if (i5 << 24 >> 24 != (HEAP8[i3 >> 0] | 0)) {
             i2 = i3;
             break;
            }
            i2 = i2 + 9 | 0;
           } while (i2 >>> 0 < i4 >>> 0 ? i5 << 24 >> 24 == (HEAP8[i2 >> 0] | 0) : 0);
           i5 = i2 - i4 + 258 | 0;
           i1 = i5 >>> 0 > i1 >>> 0 ? i1 : i5;
           HEAP32[i9 >> 2] = i1;
           if (i1 >>> 0 <= 2) {
            i1 = i6;
            i18 = 137;
            break;
           }
           i1 = i1 + 253 | 0;
           i3 = HEAP32[i10 >> 2] | 0;
           HEAP16[(HEAP32[i11 >> 2] | 0) + (i3 << 1) >> 1] = 1;
           HEAP32[i10 >> 2] = i3 + 1;
           HEAP8[(HEAP32[i12 >> 2] | 0) + i3 >> 0] = i1;
           i1 = i25 + 148 + ((HEAPU8[15447 + (i1 & 255) >> 0] | 256) + 1 << 2) | 0;
           HEAP16[i1 >> 1] = (HEAP16[i1 >> 1] | 0) + 1 << 16 >> 16;
           i1 = i25 + 2440 + (HEAPU8[14935] << 2) | 0;
           HEAP16[i1 >> 1] = (HEAP16[i1 >> 1] | 0) + 1 << 16 >> 16;
           i1 = (HEAP32[i10 >> 2] | 0) == ((HEAP32[i13 >> 2] | 0) + -1 | 0) & 1;
           i3 = HEAP32[i9 >> 2] | 0;
           HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i3;
           i3 = (HEAP32[i15 >> 2] | 0) + i3 | 0;
           HEAP32[i15 >> 2] = i3;
           HEAP32[i9 >> 2] = 0;
          } else {
           i1 = i6;
           i18 = 137;
          }
         } else {
          i1 = 0;
          i18 = 137;
         }
        } while (0);
        if ((i18 | 0) == 137) {
         i18 = 0;
         i1 = HEAP8[(HEAP32[i14 >> 2] | 0) + i1 >> 0] | 0;
         i3 = HEAP32[i10 >> 2] | 0;
         HEAP16[(HEAP32[i11 >> 2] | 0) + (i3 << 1) >> 1] = 0;
         HEAP32[i10 >> 2] = i3 + 1;
         HEAP8[(HEAP32[i12 >> 2] | 0) + i3 >> 0] = i1;
         i1 = i25 + 148 + ((i1 & 255) << 2) | 0;
         HEAP16[i1 >> 1] = (HEAP16[i1 >> 1] | 0) + 1 << 16 >> 16;
         i1 = (HEAP32[i10 >> 2] | 0) == ((HEAP32[i13 >> 2] | 0) + -1 | 0) & 1;
         HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + -1;
         i3 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
         HEAP32[i15 >> 2] = i3;
        }
        if (!i1) continue;
        i1 = HEAP32[i16 >> 2] | 0;
        if ((i1 | 0) > -1) i2 = (HEAP32[i14 >> 2] | 0) + i1 | 0; else i2 = 0;
        __tr_flush_block(i25, i2, i3 - i1 | 0, 0);
        HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
        _flush_pending(HEAP32[i25 >> 2] | 0);
        if (!(HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] | 0)) break L146;
       }
       i3 = HEAP32[i16 >> 2] | 0;
       if ((i3 | 0) > -1) i2 = (HEAP32[i14 >> 2] | 0) + i3 | 0; else i2 = 0;
       i1 = (i24 | 0) == 4;
       __tr_flush_block(i25, i2, (HEAP32[i15 >> 2] | 0) - i3 | 0, i1 & 1);
       HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
       _flush_pending(HEAP32[i25 >> 2] | 0);
       if (!(HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] | 0)) {
        i1 = i1 ? 2 : 0;
        i18 = 148;
        break L146;
       } else {
        i1 = i1 ? 3 : 1;
        i18 = 148;
        break L146;
       }
      }
     default:
      {
       i1 = FUNCTION_TABLE_iii[HEAP32[1024 + ((HEAP32[i25 + 132 >> 2] | 0) * 12 | 0) + 8 >> 2] & 3](i25, i24) | 0;
       i18 = 148;
      }
     } while (0);
     if ((i18 | 0) == 148) {
      if ((i1 & -2 | 0) == 2) HEAP32[i20 >> 2] = 666;
      if (i1 & -3) {
       if ((i1 | 0) != 1) break;
       switch (i24 | 0) {
       case 1:
        {
         __tr_align(i25);
         break;
        }
       case 5:
        break;
       default:
        {
         __tr_stored_block(i25, 0, 0, 0);
         if ((i24 | 0) == 3 ? (i24 = HEAP32[i25 + 76 >> 2] | 0, i20 = HEAP32[i25 + 68 >> 2] | 0, HEAP16[i20 + (i24 + -1 << 1) >> 1] = 0, _memset(i20 | 0, 0, (i24 << 1) + -2 | 0) | 0, (HEAP32[i25 + 116 >> 2] | 0) == 0) : 0) {
          HEAP32[i25 + 108 >> 2] = 0;
          HEAP32[i25 + 92 >> 2] = 0;
         }
        }
       }
       _flush_pending(i26);
       if (HEAP32[i22 >> 2] | 0) break;
       HEAP32[i23 >> 2] = -1;
       i1 = 0;
       break L1;
      }
     }
     if (HEAP32[i22 >> 2] | 0) {
      i1 = 0;
      break L1;
     }
     HEAP32[i23 >> 2] = -1;
     i1 = 0;
     break L1;
    } while (0);
    if (i21) {
     i1 = 0;
     break L1;
    }
    i4 = i25 + 24 | 0;
    i1 = HEAP32[i4 >> 2] | 0;
    if ((i1 | 0) < 1) {
     i1 = 1;
     break L1;
    }
    i2 = i26 + 48 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i1 | 0) == 2) {
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i22 + 1;
     i24 = i25 + 8 | 0;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i22 >> 0] = i3;
     i22 = (HEAP32[i2 >> 2] | 0) >>> 8 & 255;
     i23 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i23 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i23 >> 0] = i22;
     i23 = (HEAP32[i2 >> 2] | 0) >>> 16 & 255;
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i22 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i22 >> 0] = i23;
     i22 = (HEAP32[i2 >> 2] | 0) >>> 24 & 255;
     i23 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i23 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i23 >> 0] = i22;
     i23 = i26 + 8 | 0;
     i22 = HEAP32[i23 >> 2] & 255;
     i25 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i25 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i25 >> 0] = i22;
     i25 = (HEAP32[i23 >> 2] | 0) >>> 8 & 255;
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i22 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i22 >> 0] = i25;
     i22 = (HEAP32[i23 >> 2] | 0) >>> 16 & 255;
     i25 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i25 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i25 >> 0] = i22;
     i23 = (HEAP32[i23 >> 2] | 0) >>> 24 & 255;
     i25 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i25 + 1;
     HEAP8[(HEAP32[i24 >> 2] | 0) + i25 >> 0] = i23;
    } else {
     _putShortMSB(i25, i3 >>> 16);
     _putShortMSB(i25, HEAP32[i2 >> 2] & 65535);
    }
    _flush_pending(i26);
    i1 = HEAP32[i4 >> 2] | 0;
    if ((i1 | 0) > 0) HEAP32[i4 >> 2] = 0 - i1;
    i1 = (HEAP32[i17 >> 2] | 0) == 0 & 1;
    break L1;
   }
  } while (0);
  HEAP32[i26 + 24 >> 2] = HEAP32[442];
  i1 = -2;
 } else i1 = -2; while (0);
 return i1 | 0;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i7 = HEAP32[4605] | 0;
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
  if ((i10 | 0) == (HEAP32[4606] | 0)) {
   i1 = i12 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i16 = i10;
    i6 = i9;
    break;
   }
   HEAP32[4603] = i9;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i10 + 4 >> 2] = i9 | 1;
   HEAP32[i10 + i9 >> 2] = i9;
   return;
  }
  i4 = i1 >>> 3;
  if (i1 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i3 = HEAP32[i10 + 12 >> 2] | 0;
   i1 = 18444 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < i7 >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i10 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[4601] = HEAP32[4601] & ~(1 << i4);
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
   i2 = 18708 + (i1 << 2) | 0;
   if ((i10 | 0) == (HEAP32[i2 >> 2] | 0)) {
    HEAP32[i2 >> 2] = i8;
    if (!i8) {
     HEAP32[4602] = HEAP32[4602] & ~(1 << i1);
     i16 = i10;
     i6 = i9;
     break;
    }
   } else {
    if (i5 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
    i1 = i5 + 16 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i10 | 0)) HEAP32[i1 >> 2] = i8; else HEAP32[i5 + 20 >> 2] = i8;
    if (!i8) {
     i16 = i10;
     i6 = i9;
     break;
    }
   }
   i3 = HEAP32[4605] | 0;
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
   if (i1) if (i1 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
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
  if ((i12 | 0) == (HEAP32[4607] | 0)) {
   i15 = (HEAP32[4604] | 0) + i6 | 0;
   HEAP32[4604] = i15;
   HEAP32[4607] = i16;
   HEAP32[i16 + 4 >> 2] = i15 | 1;
   if ((i16 | 0) != (HEAP32[4606] | 0)) return;
   HEAP32[4606] = 0;
   HEAP32[4603] = 0;
   return;
  }
  if ((i12 | 0) == (HEAP32[4606] | 0)) {
   i15 = (HEAP32[4603] | 0) + i6 | 0;
   HEAP32[4603] = i15;
   HEAP32[4606] = i16;
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
    if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
     HEAP32[i2 >> 2] = 0;
     i13 = i1;
     break;
    }
   } else {
    i2 = HEAP32[i12 + 8 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
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
    i2 = 18708 + (i1 << 2) | 0;
    if ((i12 | 0) == (HEAP32[i2 >> 2] | 0)) {
     HEAP32[i2 >> 2] = i13;
     if (!i13) {
      HEAP32[4602] = HEAP32[4602] & ~(1 << i1);
      break;
     }
    } else {
     if (i5 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
     i1 = i5 + 16 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (i12 | 0)) HEAP32[i1 >> 2] = i13; else HEAP32[i5 + 20 >> 2] = i13;
     if (!i13) break;
    }
    i3 = HEAP32[4605] | 0;
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
    if (i1) if (i1 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
     HEAP32[i13 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i13;
     break;
    }
   }
  } else {
   i2 = HEAP32[i12 + 8 >> 2] | 0;
   i3 = HEAP32[i12 + 12 >> 2] | 0;
   i1 = 18444 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i12 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[4601] = HEAP32[4601] & ~(1 << i4);
    break;
   }
   if ((i3 | 0) != (i1 | 0)) {
    if (i3 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort();
    i1 = i3 + 8 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i12 | 0)) i11 = i1; else _abort();
   } else i11 = i3 + 8 | 0;
   HEAP32[i2 + 12 >> 2] = i3;
   HEAP32[i11 >> 2] = i2;
  } while (0);
  HEAP32[i16 + 4 >> 2] = i6 | 1;
  HEAP32[i16 + i6 >> 2] = i6;
  if ((i16 | 0) == (HEAP32[4606] | 0)) {
   HEAP32[4603] = i6;
   return;
  }
 } else {
  HEAP32[i1 >> 2] = i2 & -2;
  HEAP32[i16 + 4 >> 2] = i6 | 1;
  HEAP32[i16 + i6 >> 2] = i6;
 }
 i1 = i6 >>> 3;
 if (i6 >>> 0 < 256) {
  i3 = 18444 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[4601] | 0;
  i1 = 1 << i1;
  if (i2 & i1) {
   i1 = i3 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
    i14 = i1;
    i15 = i2;
   }
  } else {
   HEAP32[4601] = i2 | i1;
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
 i4 = 18708 + (i3 << 2) | 0;
 HEAP32[i16 + 28 >> 2] = i3;
 HEAP32[i16 + 20 >> 2] = 0;
 HEAP32[i16 + 16 >> 2] = 0;
 i1 = HEAP32[4602] | 0;
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
  if ((i4 | 0) == 127) if (i2 >>> 0 < (HEAP32[4605] | 0) >>> 0) _abort(); else {
   HEAP32[i2 >> 2] = i16;
   HEAP32[i16 + 24 >> 2] = i1;
   HEAP32[i16 + 12 >> 2] = i16;
   HEAP32[i16 + 8 >> 2] = i16;
   break;
  } else if ((i4 | 0) == 130) {
   i1 = i3 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   i15 = HEAP32[4605] | 0;
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
  HEAP32[4602] = i1 | i2;
  HEAP32[i4 >> 2] = i16;
  HEAP32[i16 + 24 >> 2] = i4;
  HEAP32[i16 + 12 >> 2] = i16;
  HEAP32[i16 + 8 >> 2] = i16;
 } while (0);
 i16 = (HEAP32[4609] | 0) + -1 | 0;
 HEAP32[4609] = i16;
 if (!i16) i1 = 18860; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[4609] = -1;
 return;
}

function _inflate_fast(i34, i1) {
 i34 = i34 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i26 = HEAP32[i34 + 28 >> 2] | 0;
 i3 = (HEAP32[i34 >> 2] | 0) + -1 | 0;
 i31 = i34 + 4 | 0;
 i32 = i3 + ((HEAP32[i31 >> 2] | 0) + -5) | 0;
 i33 = i34 + 12 | 0;
 i25 = (HEAP32[i33 >> 2] | 0) + -1 | 0;
 i27 = i34 + 16 | 0;
 i12 = HEAP32[i27 >> 2] | 0;
 i28 = i25 + (i12 + -257) | 0;
 i18 = HEAP32[i26 + 40 >> 2] | 0;
 i19 = HEAP32[i26 + 44 >> 2] | 0;
 i20 = HEAP32[i26 + 48 >> 2] | 0;
 i29 = i26 + 56 | 0;
 i30 = i26 + 60 | 0;
 i21 = HEAP32[i26 + 76 >> 2] | 0;
 i22 = HEAP32[i26 + 80 >> 2] | 0;
 i23 = (1 << HEAP32[i26 + 84 >> 2]) + -1 | 0;
 i24 = (1 << HEAP32[i26 + 88 >> 2]) + -1 | 0;
 i12 = i25 + (i12 - i1) | 0;
 i13 = i26 + 7104 | 0;
 i14 = (HEAP32[i26 + 52 >> 2] | 0) + -1 | 0;
 i15 = (i20 | 0) == 0;
 i16 = i20 + i18 | 0;
 i17 = i12 - i20 | 0;
 i2 = HEAP32[i30 >> 2] | 0;
 i4 = HEAP32[i29 >> 2] | 0;
 i1 = i25;
 L1 : do {
  if (i2 >>> 0 < 15) {
   i5 = i3 + 2 | 0;
   i6 = i2 + 16 | 0;
   i4 = ((HEAPU8[i3 + 1 >> 0] | 0) << i2) + i4 + ((HEAPU8[i5 >> 0] | 0) << i2 + 8) | 0;
  } else {
   i6 = i2;
   i5 = i3;
  }
  i3 = i4 & i23;
  i2 = i6;
  while (1) {
   i25 = HEAP8[i21 + (i3 << 2) >> 0] | 0;
   i6 = HEAP16[i21 + (i3 << 2) + 2 >> 1] | 0;
   i3 = HEAPU8[i21 + (i3 << 2) + 1 >> 0] | 0;
   i4 = i4 >>> i3;
   i2 = i2 - i3 | 0;
   i3 = i25 & 255;
   if (!(i25 << 24 >> 24)) {
    i3 = i6;
    i25 = 6;
    break;
   }
   if (i3 & 16) {
    i25 = 8;
    break;
   }
   if (i3 & 64) {
    i25 = 55;
    break L1;
   }
   i3 = (i4 & (1 << i3) + -1) + (i6 & 65535) | 0;
  }
  do if ((i25 | 0) == 6) {
   i25 = 0;
   i1 = i1 + 1 | 0;
   HEAP8[i1 >> 0] = i3;
   i3 = i5;
  } else if ((i25 | 0) == 8) {
   i25 = 0;
   i7 = i6 & 65535;
   i8 = i3 & 15;
   if (!i8) {
    i6 = i2;
    i3 = i5;
   } else {
    if (i2 >>> 0 < i8 >>> 0) {
     i3 = i5 + 1 | 0;
     i6 = i2 + 8 | 0;
     i2 = ((HEAPU8[i3 >> 0] | 0) << i2) + i4 | 0;
    } else {
     i6 = i2;
     i2 = i4;
     i3 = i5;
    }
    i6 = i6 - i8 | 0;
    i4 = i2 >>> i8;
    i7 = (i2 & (1 << i8) + -1) + i7 | 0;
   }
   if (i6 >>> 0 < 15) {
    i11 = i3 + 2 | 0;
    i2 = i6 + 16 | 0;
    i4 = ((HEAPU8[i3 + 1 >> 0] | 0) << i6) + i4 + ((HEAPU8[i11 >> 0] | 0) << i6 + 8) | 0;
    i3 = i11;
   } else i2 = i6;
   i6 = i4 & i24;
   while (1) {
    i5 = HEAP16[i22 + (i6 << 2) + 2 >> 1] | 0;
    i11 = HEAPU8[i22 + (i6 << 2) + 1 >> 0] | 0;
    i4 = i4 >>> i11;
    i2 = i2 - i11 | 0;
    i6 = HEAPU8[i22 + (i6 << 2) >> 0] | 0;
    if (i6 & 16) break;
    if (i6 & 64) {
     i25 = 52;
     break L1;
    }
    i6 = (i4 & (1 << i6) + -1) + (i5 & 65535) | 0;
   }
   i8 = i5 & 65535;
   i9 = i6 & 15;
   if (i2 >>> 0 < i9 >>> 0) {
    i6 = i3 + 1 | 0;
    i4 = ((HEAPU8[i6 >> 0] | 0) << i2) + i4 | 0;
    i5 = i2 + 8 | 0;
    if (i5 >>> 0 < i9 >>> 0) {
     i3 = i3 + 2 | 0;
     i2 = i2 + 16 | 0;
     i4 = ((HEAPU8[i3 >> 0] | 0) << i5) + i4 | 0;
    } else {
     i2 = i5;
     i3 = i6;
    }
   }
   i11 = (i4 & (1 << i9) + -1) + i8 | 0;
   i4 = i4 >>> i9;
   i2 = i2 - i9 | 0;
   i9 = i1;
   i5 = i9 - i12 | 0;
   if (i11 >>> 0 <= i5 >>> 0) {
    i8 = i1 + (0 - i11) | 0;
    i5 = i1;
    while (1) {
     HEAP8[i5 + 1 >> 0] = HEAP8[i8 + 1 >> 0] | 0;
     HEAP8[i5 + 2 >> 0] = HEAP8[i8 + 2 >> 0] | 0;
     i6 = i8 + 3 | 0;
     i1 = i5 + 3 | 0;
     HEAP8[i1 >> 0] = HEAP8[i6 >> 0] | 0;
     i7 = i7 + -3 | 0;
     if (i7 >>> 0 > 2) {
      i8 = i6;
      i5 = i1;
     } else {
      i6 = i8;
      break;
     }
    }
    if (!i7) break;
    i1 = i5 + 4 | 0;
    HEAP8[i1 >> 0] = HEAP8[i6 + 4 >> 0] | 0;
    if (i7 >>> 0 <= 1) break;
    i1 = i5 + 5 | 0;
    HEAP8[i1 >> 0] = HEAP8[i6 + 5 >> 0] | 0;
    break;
   }
   i8 = i11 - i5 | 0;
   if (i8 >>> 0 > i19 >>> 0 ? (HEAP32[i13 >> 2] | 0) != 0 : 0) {
    i25 = 22;
    break L1;
   }
   do if (i15) {
    i6 = i14 + (i18 - i8) | 0;
    if (i7 >>> 0 > i8 >>> 0) {
     i5 = i7 - i8 | 0;
     i9 = i11 - i9 | 0;
     i7 = i8;
     i8 = i1;
     do {
      i6 = i6 + 1 | 0;
      i8 = i8 + 1 | 0;
      HEAP8[i8 >> 0] = HEAP8[i6 >> 0] | 0;
      i7 = i7 + -1 | 0;
     } while ((i7 | 0) != 0);
     i1 = i1 + i12 + i9 | 0;
     i6 = i1 + (0 - i11) | 0;
    } else i5 = i7;
   } else {
    if (i20 >>> 0 >= i8 >>> 0) {
     i6 = i14 + (i20 - i8) | 0;
     if (i7 >>> 0 <= i8 >>> 0) {
      i5 = i7;
      break;
     }
     i5 = i7 - i8 | 0;
     i9 = i11 - i9 | 0;
     i7 = i8;
     i8 = i1;
     do {
      i6 = i6 + 1 | 0;
      i8 = i8 + 1 | 0;
      HEAP8[i8 >> 0] = HEAP8[i6 >> 0] | 0;
      i7 = i7 + -1 | 0;
     } while ((i7 | 0) != 0);
     i1 = i1 + i12 + i9 | 0;
     i6 = i1 + (0 - i11) | 0;
     break;
    }
    i6 = i14 + (i16 - i8) | 0;
    i8 = i8 - i20 | 0;
    if (i7 >>> 0 > i8 >>> 0) {
     i5 = i7 - i8 | 0;
     i10 = i11 - i9 | 0;
     i7 = i8;
     i8 = i1;
     do {
      i6 = i6 + 1 | 0;
      i8 = i8 + 1 | 0;
      HEAP8[i8 >> 0] = HEAP8[i6 >> 0] | 0;
      i7 = i7 + -1 | 0;
     } while ((i7 | 0) != 0);
     i9 = i1 + i17 + i10 | 0;
     if (i5 >>> 0 > i20 >>> 0) {
      i5 = i5 - i20 | 0;
      i7 = i14;
      i8 = i20;
      i6 = i9;
      do {
       i7 = i7 + 1 | 0;
       i6 = i6 + 1 | 0;
       HEAP8[i6 >> 0] = HEAP8[i7 >> 0] | 0;
       i8 = i8 + -1 | 0;
      } while ((i8 | 0) != 0);
      i1 = i1 + i12 + i10 | 0;
      i6 = i1 + (0 - i11) | 0;
     } else {
      i6 = i14;
      i1 = i9;
     }
    } else i5 = i7;
   } while (0);
   while (1) {
    if (i5 >>> 0 <= 2) break;
    HEAP8[i1 + 1 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
    HEAP8[i1 + 2 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
    i10 = i6 + 3 | 0;
    i11 = i1 + 3 | 0;
    HEAP8[i11 >> 0] = HEAP8[i10 >> 0] | 0;
    i6 = i10;
    i5 = i5 + -3 | 0;
    i1 = i11;
   }
   if (i5) {
    i7 = i1 + 1 | 0;
    HEAP8[i7 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
    if (i5 >>> 0 > 1) {
     i1 = i1 + 2 | 0;
     HEAP8[i1 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
    } else i1 = i7;
   }
  } while (0);
 } while (i1 >>> 0 < i28 >>> 0 & i3 >>> 0 < i32 >>> 0);
 do if ((i25 | 0) == 22) {
  HEAP32[i34 + 24 >> 2] = 15844;
  HEAP32[i26 >> 2] = 29;
 } else if ((i25 | 0) == 52) {
  HEAP32[i34 + 24 >> 2] = 15874;
  HEAP32[i26 >> 2] = 29;
 } else if ((i25 | 0) == 55) if (!(i3 & 32)) {
  HEAP32[i34 + 24 >> 2] = 15896;
  HEAP32[i26 >> 2] = 29;
  i3 = i5;
  break;
 } else {
  HEAP32[i26 >> 2] = 11;
  i3 = i5;
  break;
 } while (0);
 i26 = i2 >>> 3;
 i25 = i3 + (0 - i26) | 0;
 i26 = i2 - (i26 << 3) | 0;
 HEAP32[i34 >> 2] = i25 + 1;
 HEAP32[i33 >> 2] = i1 + 1;
 HEAP32[i31 >> 2] = i32 + 5 - i25;
 HEAP32[i27 >> 2] = i28 + 257 - i1;
 HEAP32[i29 >> 2] = (1 << i26) + -1 & i4;
 HEAP32[i30 >> 2] = i26;
 return;
}

function _send_tree(i25, i26, i23) {
 i25 = i25 | 0;
 i26 = i26 | 0;
 i23 = i23 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i24 = 0;
 i24 = HEAP16[i26 + 2 >> 1] | 0;
 i8 = i24 << 16 >> 16 == 0;
 i17 = i25 + 2754 | 0;
 i18 = i25 + 5820 | 0;
 i19 = i25 + 2752 | 0;
 i20 = i25 + 5816 | 0;
 i21 = i25 + 20 | 0;
 i22 = i25 + 8 | 0;
 i13 = i25 + 2758 | 0;
 i14 = i25 + 2756 | 0;
 i15 = i25 + 2750 | 0;
 i16 = i25 + 2748 | 0;
 i6 = i8 ? 138 : 7;
 i8 = i8 ? 3 : 4;
 i1 = 0;
 i24 = i24 & 65535;
 i9 = -1;
 L1 : while (1) {
  i7 = 0;
  while (1) {
   if ((i1 | 0) > (i23 | 0)) break L1;
   i1 = i1 + 1 | 0;
   i2 = HEAP16[i26 + (i1 << 2) + 2 >> 1] | 0;
   i3 = i2 & 65535;
   i4 = i7 + 1 | 0;
   i5 = (i24 | 0) == (i3 | 0);
   if ((i4 | 0) < (i6 | 0) & i5) i7 = i4; else {
    i11 = i2;
    i12 = i3;
    i10 = i5;
    break;
   }
  }
  do if ((i4 | 0) >= (i8 | 0)) {
   if (i24) {
    if ((i24 | 0) == (i9 | 0)) {
     i3 = HEAP16[i20 >> 1] | 0;
     i6 = HEAP32[i18 >> 2] | 0;
     i7 = i4;
    } else {
     i5 = HEAPU16[i25 + 2684 + (i24 << 2) + 2 >> 1] | 0;
     i6 = HEAP32[i18 >> 2] | 0;
     i2 = HEAPU16[i25 + 2684 + (i24 << 2) >> 1] | 0;
     i4 = HEAPU16[i20 >> 1] | 0 | i2 << i6;
     i3 = i4 & 65535;
     HEAP16[i20 >> 1] = i3;
     if ((i6 | 0) > (16 - i5 | 0)) {
      i3 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = i3 + 1;
      HEAP8[(HEAP32[i22 >> 2] | 0) + i3 >> 0] = i4;
      i3 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
      i9 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = i9 + 1;
      HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i3;
      i9 = HEAP32[i18 >> 2] | 0;
      i3 = i2 >>> (16 - i9 | 0) & 65535;
      HEAP16[i20 >> 1] = i3;
      i2 = i5 + -16 + i9 | 0;
     } else i2 = i6 + i5 | 0;
     HEAP32[i18 >> 2] = i2;
     i6 = i2;
    }
    i4 = HEAPU16[i15 >> 1] | 0;
    i5 = HEAPU16[i16 >> 1] | 0;
    i2 = i3 & 65535 | i5 << i6;
    HEAP16[i20 >> 1] = i2;
    if ((i6 | 0) > (16 - i4 | 0)) {
     i9 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i9 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i2;
     i2 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i9 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i9 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i2;
     i9 = HEAP32[i18 >> 2] | 0;
     i2 = i5 >>> (16 - i9 | 0);
     HEAP16[i20 >> 1] = i2;
     i4 = i4 + -16 + i9 | 0;
    } else i4 = i6 + i4 | 0;
    HEAP32[i18 >> 2] = i4;
    i3 = i7 + 65533 & 65535;
    i2 = i2 & 65535 | i3 << i4;
    HEAP16[i20 >> 1] = i2;
    if ((i4 | 0) > 14) {
     i9 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i9 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i2;
     i9 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i2 >> 0] = i9;
     i2 = HEAP32[i18 >> 2] | 0;
     HEAP16[i20 >> 1] = i3 >>> (16 - i2 | 0);
     i2 = i2 + -14 | 0;
    } else i2 = i4 + 2 | 0;
    HEAP32[i18 >> 2] = i2;
    break;
   }
   if ((i4 | 0) < 11) {
    i3 = HEAPU16[i17 >> 1] | 0;
    i4 = HEAP32[i18 >> 2] | 0;
    i5 = HEAPU16[i19 >> 1] | 0;
    i2 = HEAPU16[i20 >> 1] | 0 | i5 << i4;
    HEAP16[i20 >> 1] = i2;
    if ((i4 | 0) > (16 - i3 | 0)) {
     i4 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i4 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i4 >> 0] = i2;
     i2 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i4 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i4 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i4 >> 0] = i2;
     i4 = HEAP32[i18 >> 2] | 0;
     i2 = i5 >>> (16 - i4 | 0);
     HEAP16[i20 >> 1] = i2;
     i4 = i3 + -16 + i4 | 0;
    } else i4 = i4 + i3 | 0;
    HEAP32[i18 >> 2] = i4;
    i3 = i7 + 65534 & 65535;
    i2 = i2 & 65535 | i3 << i4;
    HEAP16[i20 >> 1] = i2;
    if ((i4 | 0) > 13) {
     i9 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i9 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i2;
     i9 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i2 >> 0] = i9;
     i2 = HEAP32[i18 >> 2] | 0;
     HEAP16[i20 >> 1] = i3 >>> (16 - i2 | 0);
     i2 = i2 + -13 | 0;
    } else i2 = i4 + 3 | 0;
    HEAP32[i18 >> 2] = i2;
    break;
   } else {
    i3 = HEAPU16[i13 >> 1] | 0;
    i4 = HEAP32[i18 >> 2] | 0;
    i5 = HEAPU16[i14 >> 1] | 0;
    i2 = HEAPU16[i20 >> 1] | 0 | i5 << i4;
    HEAP16[i20 >> 1] = i2;
    if ((i4 | 0) > (16 - i3 | 0)) {
     i4 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i4 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i4 >> 0] = i2;
     i2 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i4 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i4 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i4 >> 0] = i2;
     i4 = HEAP32[i18 >> 2] | 0;
     i2 = i5 >>> (16 - i4 | 0);
     HEAP16[i20 >> 1] = i2;
     i4 = i3 + -16 + i4 | 0;
    } else i4 = i4 + i3 | 0;
    HEAP32[i18 >> 2] = i4;
    i3 = i7 + 65526 & 65535;
    i2 = i2 & 65535 | i3 << i4;
    HEAP16[i20 >> 1] = i2;
    if ((i4 | 0) > 9) {
     i9 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i9 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i9 >> 0] = i2;
     i9 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i2 >> 0] = i9;
     i2 = HEAP32[i18 >> 2] | 0;
     HEAP16[i20 >> 1] = i3 >>> (16 - i2 | 0);
     i2 = i2 + -9 | 0;
    } else i2 = i4 + 7 | 0;
    HEAP32[i18 >> 2] = i2;
    break;
   }
  } else {
   i8 = i25 + 2684 + (i24 << 2) + 2 | 0;
   i9 = i25 + 2684 + (i24 << 2) | 0;
   i2 = HEAP32[i18 >> 2] | 0;
   i3 = HEAP16[i20 >> 1] | 0;
   do {
    i7 = HEAPU16[i8 >> 1] | 0;
    i6 = HEAPU16[i9 >> 1] | 0;
    i5 = i3 & 65535 | i6 << i2;
    i3 = i5 & 65535;
    HEAP16[i20 >> 1] = i3;
    if ((i2 | 0) > (16 - i7 | 0)) {
     i3 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i3 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i3 >> 0] = i5;
     i3 = (HEAPU16[i20 >> 1] | 0) >>> 8 & 255;
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i22 >> 2] | 0) + i2 >> 0] = i3;
     i2 = HEAP32[i18 >> 2] | 0;
     i3 = i6 >>> (16 - i2 | 0) & 65535;
     HEAP16[i20 >> 1] = i3;
     i2 = i7 + -16 + i2 | 0;
    } else i2 = i2 + i7 | 0;
    HEAP32[i18 >> 2] = i2;
    i4 = i4 + -1 | 0;
   } while ((i4 | 0) != 0);
  } while (0);
  i8 = i11 << 16 >> 16 == 0;
  i9 = i24;
  i6 = i8 ? 138 : i10 ? 6 : 7;
  i8 = i8 | i10 ? 3 : 4;
  i24 = i12;
 }
 return;
}

function _deflate_slow(i32, i29) {
 i32 = i32 | 0;
 i29 = i29 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i30 = 0, i31 = 0, i33 = 0;
 i7 = i32 + 116 | 0;
 i8 = (i29 | 0) == 0;
 i18 = i32 + 72 | 0;
 i22 = i32 + 88 | 0;
 i31 = i32 + 108 | 0;
 i28 = i32 + 56 | 0;
 i23 = i32 + 84 | 0;
 i24 = i32 + 68 | 0;
 i25 = i32 + 52 | 0;
 i26 = i32 + 64 | 0;
 i9 = i32 + 96 | 0;
 i10 = i32 + 120 | 0;
 i11 = i32 + 112 | 0;
 i12 = i32 + 100 | 0;
 i13 = i32 + 5792 | 0;
 i14 = i32 + 5796 | 0;
 i15 = i32 + 5784 | 0;
 i16 = i32 + 5788 | 0;
 i17 = i32 + 104 | 0;
 i30 = i32 + 92 | 0;
 i19 = i32 + 128 | 0;
 i20 = i32 + 44 | 0;
 i21 = i32 + 136 | 0;
 L1 : while (1) {
  i1 = HEAP32[i7 >> 2] | 0;
  while (1) {
   if (i1 >>> 0 < 262) {
    _fill_window(i32);
    i1 = HEAP32[i7 >> 2] | 0;
    if (i8 & i1 >>> 0 < 262) {
     i1 = 0;
     break L1;
    }
    if (!i1) {
     i27 = 33;
     break L1;
    }
    if (i1 >>> 0 <= 2) {
     HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i9 >> 2] = 2;
     i1 = 2;
     i27 = 16;
    } else i27 = 8;
   } else i27 = 8;
   do if ((i27 | 0) == 8) {
    i27 = 0;
    i5 = HEAP32[i31 >> 2] | 0;
    i2 = ((HEAPU8[(HEAP32[i28 >> 2] | 0) + (i5 + 2) >> 0] | 0) ^ HEAP32[i18 >> 2] << HEAP32[i22 >> 2]) & HEAP32[i23 >> 2];
    HEAP32[i18 >> 2] = i2;
    i2 = (HEAP32[i24 >> 2] | 0) + (i2 << 1) | 0;
    i6 = HEAP16[i2 >> 1] | 0;
    HEAP16[(HEAP32[i26 >> 2] | 0) + ((HEAP32[i25 >> 2] & i5) << 1) >> 1] = i6;
    i1 = i6 & 65535;
    HEAP16[i2 >> 1] = i5;
    i2 = HEAP32[i9 >> 2] | 0;
    HEAP32[i10 >> 2] = i2;
    HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i9 >> 2] = 2;
    if (i6 << 16 >> 16) if (i2 >>> 0 < (HEAP32[i19 >> 2] | 0) >>> 0) if (((HEAP32[i31 >> 2] | 0) - i1 | 0) >>> 0 <= ((HEAP32[i20 >> 2] | 0) + -262 | 0) >>> 0) {
     i1 = _longest_match(i32, i1) | 0;
     HEAP32[i9 >> 2] = i1;
     if (i1 >>> 0 < 6) {
      if ((HEAP32[i21 >> 2] | 0) != 1) {
       if ((i1 | 0) != 3) {
        i27 = 16;
        break;
       }
       if (((HEAP32[i31 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) | 0) >>> 0 <= 4096) {
        i1 = 3;
        i27 = 16;
        break;
       }
      }
      HEAP32[i9 >> 2] = 2;
      i1 = 2;
      i27 = 16;
     } else i27 = 16;
    } else {
     i1 = 2;
     i27 = 16;
    } else i1 = 2; else {
     i1 = 2;
     i27 = 16;
    }
   } while (0);
   if ((i27 | 0) == 16) {
    i27 = 0;
    i2 = HEAP32[i10 >> 2] | 0;
   }
   if (!(i2 >>> 0 < 3 | i1 >>> 0 > i2 >>> 0)) {
    i1 = i2;
    break;
   }
   if (!(HEAP32[i17 >> 2] | 0)) {
    HEAP32[i17 >> 2] = 1;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    i1 = (HEAP32[i7 >> 2] | 0) + -1 | 0;
    HEAP32[i7 >> 2] = i1;
    continue;
   }
   i6 = HEAP8[(HEAP32[i28 >> 2] | 0) + ((HEAP32[i31 >> 2] | 0) + -1) >> 0] | 0;
   i5 = HEAP32[i13 >> 2] | 0;
   HEAP16[(HEAP32[i14 >> 2] | 0) + (i5 << 1) >> 1] = 0;
   HEAP32[i13 >> 2] = i5 + 1;
   HEAP8[(HEAP32[i15 >> 2] | 0) + i5 >> 0] = i6;
   i6 = i32 + 148 + ((i6 & 255) << 2) | 0;
   HEAP16[i6 >> 1] = (HEAP16[i6 >> 1] | 0) + 1 << 16 >> 16;
   if ((HEAP32[i13 >> 2] | 0) == ((HEAP32[i16 >> 2] | 0) + -1 | 0)) {
    i1 = HEAP32[i30 >> 2] | 0;
    if ((i1 | 0) > -1) i2 = (HEAP32[i28 >> 2] | 0) + i1 | 0; else i2 = 0;
    __tr_flush_block(i32, i2, (HEAP32[i31 >> 2] | 0) - i1 | 0, 0);
    HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
    _flush_pending(HEAP32[i32 >> 2] | 0);
   }
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   i1 = (HEAP32[i7 >> 2] | 0) + -1 | 0;
   HEAP32[i7 >> 2] = i1;
   if (!(HEAP32[(HEAP32[i32 >> 2] | 0) + 16 >> 2] | 0)) {
    i1 = 0;
    break L1;
   }
  }
  i5 = HEAP32[i31 >> 2] | 0;
  i4 = i5 + -3 + (HEAP32[i7 >> 2] | 0) | 0;
  i6 = i1 + 253 | 0;
  i5 = i5 + 65535 - (HEAP32[i12 >> 2] | 0) | 0;
  i3 = HEAP32[i13 >> 2] | 0;
  HEAP16[(HEAP32[i14 >> 2] | 0) + (i3 << 1) >> 1] = i5;
  HEAP32[i13 >> 2] = i3 + 1;
  HEAP8[(HEAP32[i15 >> 2] | 0) + i3 >> 0] = i6;
  i6 = i32 + 148 + ((HEAPU8[15447 + (i6 & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
  HEAP16[i6 >> 1] = (HEAP16[i6 >> 1] | 0) + 1 << 16 >> 16;
  i5 = i5 + 65535 & 65535;
  i5 = i32 + 2440 + ((HEAPU8[14935 + (i5 >>> 0 < 256 ? i5 : (i5 >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
  HEAP16[i5 >> 1] = (HEAP16[i5 >> 1] | 0) + 1 << 16 >> 16;
  i5 = HEAP32[i13 >> 2] | 0;
  i6 = (HEAP32[i16 >> 2] | 0) + -1 | 0;
  i3 = HEAP32[i10 >> 2] | 0;
  HEAP32[i7 >> 2] = 1 - i3 + (HEAP32[i7 >> 2] | 0);
  i3 = i3 + -2 | 0;
  HEAP32[i10 >> 2] = i3;
  i1 = HEAP32[i31 >> 2] | 0;
  while (1) {
   i2 = i1 + 1 | 0;
   HEAP32[i31 >> 2] = i2;
   if (i2 >>> 0 <= i4 >>> 0) {
    i33 = ((HEAPU8[(HEAP32[i28 >> 2] | 0) + (i1 + 3) >> 0] | 0) ^ HEAP32[i18 >> 2] << HEAP32[i22 >> 2]) & HEAP32[i23 >> 2];
    HEAP32[i18 >> 2] = i33;
    i33 = (HEAP32[i24 >> 2] | 0) + (i33 << 1) | 0;
    HEAP16[(HEAP32[i26 >> 2] | 0) + ((HEAP32[i25 >> 2] & i2) << 1) >> 1] = HEAP16[i33 >> 1] | 0;
    HEAP16[i33 >> 1] = i2;
   }
   i3 = i3 + -1 | 0;
   HEAP32[i10 >> 2] = i3;
   if (!i3) break; else i1 = i2;
  }
  HEAP32[i17 >> 2] = 0;
  HEAP32[i9 >> 2] = 2;
  i3 = i1 + 2 | 0;
  HEAP32[i31 >> 2] = i3;
  if ((i5 | 0) != (i6 | 0)) continue;
  i1 = HEAP32[i30 >> 2] | 0;
  if ((i1 | 0) > -1) i2 = (HEAP32[i28 >> 2] | 0) + i1 | 0; else i2 = 0;
  __tr_flush_block(i32, i2, i3 - i1 | 0, 0);
  HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
  _flush_pending(HEAP32[i32 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i32 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = 0;
   break;
  }
 }
 do if ((i27 | 0) == 33) {
  if (HEAP32[i17 >> 2] | 0) {
   i33 = HEAP8[(HEAP32[i28 >> 2] | 0) + ((HEAP32[i31 >> 2] | 0) + -1) >> 0] | 0;
   i27 = HEAP32[i13 >> 2] | 0;
   HEAP16[(HEAP32[i14 >> 2] | 0) + (i27 << 1) >> 1] = 0;
   HEAP32[i13 >> 2] = i27 + 1;
   HEAP8[(HEAP32[i15 >> 2] | 0) + i27 >> 0] = i33;
   i33 = i32 + 148 + ((i33 & 255) << 2) | 0;
   HEAP16[i33 >> 1] = (HEAP16[i33 >> 1] | 0) + 1 << 16 >> 16;
   HEAP32[i17 >> 2] = 0;
  }
  i3 = HEAP32[i30 >> 2] | 0;
  if ((i3 | 0) > -1) i2 = (HEAP32[i28 >> 2] | 0) + i3 | 0; else i2 = 0;
  i1 = (i29 | 0) == 4;
  __tr_flush_block(i32, i2, (HEAP32[i31 >> 2] | 0) - i3 | 0, i1 & 1);
  HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
  _flush_pending(HEAP32[i32 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i32 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = i1 ? 2 : 0;
   break;
  } else {
   i1 = i1 ? 3 : 1;
   break;
  }
 } while (0);
 return i1 | 0;
}

function _inflate_table(i6, i23, i4, i28, i27, i24) {
 i6 = i6 | 0;
 i23 = i23 | 0;
 i4 = i4 | 0;
 i28 = i28 | 0;
 i27 = i27 | 0;
 i24 = i24 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i25 = 0, i26 = 0, i29 = 0, i30 = 0, i31 = 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i22 = i29 + 32 | 0;
 i5 = i29;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == 16) {
   i1 = 0;
   break;
  }
  HEAP16[i22 + (i1 << 1) >> 1] = 0;
  i1 = i1 + 1 | 0;
 }
 while (1) {
  if ((i1 | 0) == (i4 | 0)) break;
  i26 = i22 + (HEAPU16[i23 + (i1 << 1) >> 1] << 1) | 0;
  HEAP16[i26 >> 1] = (HEAP16[i26 >> 1] | 0) + 1 << 16 >> 16;
  i1 = i1 + 1 | 0;
 }
 i2 = HEAP32[i27 >> 2] | 0;
 i1 = 15;
 while (1) {
  if (!i1) {
   i3 = 11;
   break;
  }
  if (HEAP16[i22 + (i1 << 1) >> 1] | 0) {
   i25 = i1;
   i3 = 10;
   break;
  }
  i1 = i1 + -1 | 0;
 }
 L12 : do if ((i3 | 0) == 10) {
  i2 = i2 >>> 0 > i25 >>> 0 ? i25 : i2;
  i1 = 1;
  while (1) {
   if (i1 >>> 0 >= i25 >>> 0) {
    i7 = i1;
    break;
   }
   if (HEAP16[i22 + (i1 << 1) >> 1] | 0) {
    i7 = i1;
    break;
   }
   i1 = i1 + 1 | 0;
  }
  i26 = i2 >>> 0 < i7 >>> 0 ? i7 : i2;
  i1 = 1;
  i2 = 1;
  while (1) {
   if (i2 >>> 0 >= 16) break;
   i1 = (i1 << 1) - (HEAPU16[i22 + (i2 << 1) >> 1] | 0) | 0;
   if ((i1 | 0) < 0) {
    i1 = -1;
    break L12;
   } else i2 = i2 + 1 | 0;
  }
  if ((i1 | 0) > 0 ? (i6 | 0) == 0 | (i25 | 0) != 1 : 0) {
   i1 = -1;
   break;
  }
  HEAP16[i5 + 2 >> 1] = 0;
  i1 = 0;
  i2 = 1;
  while (1) {
   if ((i2 | 0) == 15) {
    i2 = 0;
    break;
   }
   i20 = (HEAPU16[i22 + (i2 << 1) >> 1] | 0) + (i1 & 65535) | 0;
   i21 = i2 + 1 | 0;
   HEAP16[i5 + (i21 << 1) >> 1] = i20;
   i1 = i20;
   i2 = i21;
  }
  while (1) {
   if ((i2 | 0) == (i4 | 0)) break;
   i1 = HEAP16[i23 + (i2 << 1) >> 1] | 0;
   if (i1 << 16 >> 16) {
    i20 = i5 + ((i1 & 65535) << 1) | 0;
    i21 = HEAP16[i20 >> 1] | 0;
    HEAP16[i20 >> 1] = i21 + 1 << 16 >> 16;
    HEAP16[i24 + ((i21 & 65535) << 1) >> 1] = i2;
   }
   i2 = i2 + 1 | 0;
  }
  switch (i6 | 0) {
  case 0:
   {
    i1 = 0;
    i16 = 0;
    i17 = i24;
    i18 = 19;
    i19 = i24;
    break;
   }
  case 1:
   {
    if (i26 >>> 0 > 9) {
     i1 = 1;
     break L12;
    } else {
     i1 = 0;
     i16 = 1;
     i17 = 11984;
     i18 = 256;
     i19 = 12110;
    }
    break;
   }
  default:
   {
    i1 = (i6 | 0) == 2;
    if (i1 & i26 >>> 0 > 9) {
     i1 = 1;
     break L12;
    } else {
     i16 = 0;
     i17 = 12434;
     i18 = -1;
     i19 = 12560;
    }
   }
  }
  i14 = 1 << i26;
  i20 = i14 + -1 | 0;
  i21 = i26 & 255;
  i4 = i26;
  i2 = 0;
  i3 = 0;
  i6 = i7;
  i8 = -1;
  i15 = HEAP32[i28 >> 2] | 0;
  i5 = 0;
  i7 = i14;
  L41 : while (1) {
   i14 = 1 << i4;
   i13 = i6;
   i12 = i5;
   while (1) {
    i9 = i13 - i2 | 0;
    i4 = i9 & 255;
    i5 = HEAP16[i24 + (i12 << 1) >> 1] | 0;
    i6 = i5 & 65535;
    if ((i6 | 0) >= (i18 | 0)) if ((i6 | 0) > (i18 | 0)) {
     i11 = HEAP16[i19 + (i6 << 1) >> 1] & 255;
     i5 = HEAP16[i17 + (i6 << 1) >> 1] | 0;
    } else {
     i11 = 96;
     i5 = 0;
    } else i11 = 0;
    i6 = 1 << i9;
    i9 = i3 >>> i2;
    i10 = i14;
    do {
     i30 = i10;
     i10 = i10 - i6 | 0;
     i31 = i10 + i9 | 0;
     HEAP8[i15 + (i31 << 2) >> 0] = i11;
     HEAP8[i15 + (i31 << 2) + 1 >> 0] = i4;
     HEAP16[i15 + (i31 << 2) + 2 >> 1] = i5;
    } while ((i30 | 0) != (i6 | 0));
    i5 = 1 << i13 + -1;
    while (1) if (!(i5 & i3)) break; else i5 = i5 >>> 1;
    if (!i5) i3 = 0; else i3 = (i5 + -1 & i3) + i5 | 0;
    i5 = i12 + 1 | 0;
    i30 = i22 + (i13 << 1) | 0;
    i31 = (HEAP16[i30 >> 1] | 0) + -1 << 16 >> 16;
    HEAP16[i30 >> 1] = i31;
    if (!(i31 << 16 >> 16)) {
     if ((i13 | 0) == (i25 | 0)) {
      i1 = i15;
      break L41;
     }
     i6 = HEAPU16[i23 + (HEAPU16[i24 + (i5 << 1) >> 1] << 1) >> 1] | 0;
    } else i6 = i13;
    if (i6 >>> 0 <= i26 >>> 0) {
     i13 = i6;
     i12 = i5;
     continue;
    }
    i4 = i3 & i20;
    if ((i4 | 0) == (i8 | 0)) {
     i13 = i6;
     i12 = i5;
    } else {
     i11 = i5;
     i8 = i4;
     i10 = i6;
     break;
    }
   }
   i2 = (i2 | 0) == 0 ? i26 : i2;
   i9 = i15 + (i14 << 2) | 0;
   i5 = i10 - i2 | 0;
   i6 = i5;
   i5 = 1 << i5;
   while (1) {
    i4 = i6 + i2 | 0;
    if (i4 >>> 0 >= i25 >>> 0) {
     i4 = i6;
     break;
    }
    i4 = i5 - (HEAPU16[i22 + (i4 << 1) >> 1] | 0) | 0;
    if ((i4 | 0) < 1) {
     i4 = i6;
     break;
    }
    i6 = i6 + 1 | 0;
    i5 = i4 << 1;
   }
   i7 = (1 << i4) + i7 | 0;
   if (i16 & i7 >>> 0 > 851 | i1 & i7 >>> 0 > 591) {
    i1 = 1;
    break L12;
   }
   i6 = HEAP32[i28 >> 2] | 0;
   HEAP8[i6 + (i8 << 2) >> 0] = i4;
   HEAP8[i6 + (i8 << 2) + 1 >> 0] = i21;
   HEAP16[i6 + (i8 << 2) + 2 >> 1] = (i9 - i6 | 0) >>> 2;
   i6 = i10;
   i15 = i9;
   i5 = i11;
  }
  i6 = i3;
  i3 = i25;
  while (1) {
   if (!i6) break;
   if ((i2 | 0) == 0 | (i6 & i20 | 0) == (i8 | 0)) i5 = i1; else {
    i2 = 0;
    i4 = i21;
    i3 = i26;
    i5 = HEAP32[i28 >> 2] | 0;
   }
   i1 = i6 >>> i2;
   HEAP8[i5 + (i1 << 2) >> 0] = 64;
   HEAP8[i5 + (i1 << 2) + 1 >> 0] = i4;
   HEAP16[i5 + (i1 << 2) + 2 >> 1] = 0;
   i1 = 1 << i3 + -1;
   while (1) if (!(i1 & i6)) break; else i1 = i1 >>> 1;
   if (!i1) {
    i6 = 0;
    i1 = i5;
    continue;
   }
   i6 = (i1 + -1 & i6) + i1 | 0;
   i1 = i5;
  }
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + (i7 << 2);
  HEAP32[i27 >> 2] = i26;
  i1 = 0;
 } else if ((i3 | 0) == 11) {
  i1 = HEAP32[i28 >> 2] | 0;
  HEAP32[i28 >> 2] = i1 + 4;
  HEAP8[i1 >> 0] = 64;
  HEAP8[i1 + 1 >> 0] = 1;
  HEAP16[i1 + 2 >> 1] = 0;
  i1 = HEAP32[i28 >> 2] | 0;
  HEAP32[i28 >> 2] = i1 + 4;
  HEAP8[i1 >> 0] = 64;
  HEAP8[i1 + 1 >> 0] = 1;
  HEAP16[i1 + 2 >> 1] = 0;
  HEAP32[i27 >> 2] = 1;
  i1 = 0;
 } while (0);
 STACKTOP = i29;
 return i1 | 0;
}

function _build_tree(i18, i8) {
 i18 = i18 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i19 = 0, i20 = 0, i21 = 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i20 = i21;
 i19 = HEAP32[i8 >> 2] | 0;
 i9 = i8 + 8 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i6 + 12 >> 2] | 0;
 i7 = i18 + 5200 | 0;
 HEAP32[i7 >> 2] = 0;
 i11 = i18 + 5204 | 0;
 HEAP32[i11 >> 2] = 573;
 i1 = -1;
 i2 = 0;
 while (1) {
  if ((i2 | 0) >= (i6 | 0)) break;
  if (!(HEAP16[i19 + (i2 << 2) >> 1] | 0)) HEAP16[i19 + (i2 << 2) + 2 >> 1] = 0; else {
   i1 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
   HEAP32[i7 >> 2] = i1;
   HEAP32[i18 + 2908 + (i1 << 2) >> 2] = i2;
   HEAP8[i18 + 5208 + i2 >> 0] = 0;
   i1 = i2;
  }
  i2 = i2 + 1 | 0;
 }
 i16 = i18 + 5800 | 0;
 i4 = (i5 | 0) == 0;
 i13 = i18 + 5804 | 0;
 while (1) {
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) >= 2) {
   i17 = i1;
   break;
  }
  i17 = (i1 | 0) < 2;
  i3 = i1 + 1 | 0;
  i1 = i17 ? i3 : i1;
  i3 = i17 ? i3 : 0;
  i17 = i2 + 1 | 0;
  HEAP32[i7 >> 2] = i17;
  HEAP32[i18 + 2908 + (i17 << 2) >> 2] = i3;
  HEAP16[i19 + (i3 << 2) >> 1] = 1;
  HEAP8[i18 + 5208 + i3 >> 0] = 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + -1;
  if (i4) continue;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - (HEAPU16[i5 + (i3 << 2) + 2 >> 1] | 0);
 }
 i4 = i8 + 4 | 0;
 HEAP32[i4 >> 2] = i17;
 i1 = (i2 | 0) / 2 | 0;
 while (1) {
  if ((i1 | 0) <= 0) break;
  _pqdownheap(i18, i19, i1);
  i1 = i1 + -1 | 0;
 }
 i2 = i18 + 2912 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i1 = i6;
 while (1) {
  i15 = HEAP32[i2 >> 2] | 0;
  HEAP32[i7 >> 2] = i3 + -1;
  HEAP32[i2 >> 2] = HEAP32[i18 + 2908 + (i3 << 2) >> 2];
  _pqdownheap(i18, i19, 1);
  i12 = HEAP32[i2 >> 2] | 0;
  i14 = (HEAP32[i11 >> 2] | 0) + -1 | 0;
  HEAP32[i11 >> 2] = i14;
  HEAP32[i18 + 2908 + (i14 << 2) >> 2] = i15;
  i14 = (HEAP32[i11 >> 2] | 0) + -1 | 0;
  HEAP32[i11 >> 2] = i14;
  HEAP32[i18 + 2908 + (i14 << 2) >> 2] = i12;
  HEAP16[i19 + (i1 << 2) >> 1] = (HEAPU16[i19 + (i12 << 2) >> 1] | 0) + (HEAPU16[i19 + (i15 << 2) >> 1] | 0);
  i14 = HEAP8[i18 + 5208 + i15 >> 0] | 0;
  i10 = HEAP8[i18 + 5208 + i12 >> 0] | 0;
  HEAP8[i18 + 5208 + i1 >> 0] = (((i14 & 255) < (i10 & 255) ? i10 : i14) & 255) + 1;
  i14 = i1 & 65535;
  HEAP16[i19 + (i12 << 2) + 2 >> 1] = i14;
  HEAP16[i19 + (i15 << 2) + 2 >> 1] = i14;
  HEAP32[i2 >> 2] = i1;
  _pqdownheap(i18, i19, 1);
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) <= 1) break; else i1 = i1 + 1 | 0;
 }
 i14 = HEAP32[i2 >> 2] | 0;
 i15 = (HEAP32[i11 >> 2] | 0) + -1 | 0;
 HEAP32[i11 >> 2] = i15;
 HEAP32[i18 + 2908 + (i15 << 2) >> 2] = i14;
 i15 = HEAP32[i8 >> 2] | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 i9 = HEAP32[i12 + 4 >> 2] | 0;
 i10 = HEAP32[i12 + 8 >> 2] | 0;
 i12 = HEAP32[i12 + 16 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == 16) break;
  HEAP16[i18 + 2876 + (i1 << 1) >> 1] = 0;
  i1 = i1 + 1 | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP16[i15 + (HEAP32[i18 + 2908 + (i1 << 2) >> 2] << 2) + 2 >> 1] = 0;
 i7 = (i8 | 0) == 0;
 i2 = 0;
 while (1) {
  i1 = i1 + 1 | 0;
  if ((i1 | 0) >= 573) break;
  i6 = HEAP32[i18 + 2908 + (i1 << 2) >> 2] | 0;
  i11 = i15 + (i6 << 2) + 2 | 0;
  i5 = HEAPU16[i15 + (HEAPU16[i11 >> 1] << 2) + 2 >> 1] | 0;
  i4 = (i5 | 0) < (i12 | 0);
  i5 = i4 ? i5 + 1 | 0 : i12;
  i2 = (i4 & 1 ^ 1) + i2 | 0;
  HEAP16[i11 >> 1] = i5;
  if ((i6 | 0) > (i14 | 0)) continue;
  i11 = i18 + 2876 + (i5 << 1) | 0;
  HEAP16[i11 >> 1] = (HEAP16[i11 >> 1] | 0) + 1 << 16 >> 16;
  if ((i6 | 0) < (i10 | 0)) i4 = 0; else i4 = HEAP32[i9 + (i6 - i10 << 2) >> 2] | 0;
  i3 = HEAPU16[i15 + (i6 << 2) >> 1] | 0;
  i11 = Math_imul(i3, i4 + i5 | 0) | 0;
  HEAP32[i16 >> 2] = i11 + (HEAP32[i16 >> 2] | 0);
  if (i7) continue;
  i11 = Math_imul((HEAPU16[i8 + (i6 << 2) + 2 >> 1] | 0) + i4 | 0, i3) | 0;
  HEAP32[i13 >> 2] = i11 + (HEAP32[i13 >> 2] | 0);
 }
 L34 : do if (i2) {
  i7 = i18 + 2876 + (i12 << 1) | 0;
  while (1) {
   i3 = i12;
   while (1) {
    i6 = i3 + -1 | 0;
    i5 = i18 + 2876 + (i6 << 1) | 0;
    i4 = HEAP16[i5 >> 1] | 0;
    if (!(i4 << 16 >> 16)) i3 = i6; else break;
   }
   HEAP16[i5 >> 1] = i4 + -1 << 16 >> 16;
   i13 = i18 + 2876 + (i3 << 1) | 0;
   HEAP16[i13 >> 1] = (HEAPU16[i13 >> 1] | 0) + 2;
   HEAP16[i7 >> 1] = (HEAP16[i7 >> 1] | 0) + -1 << 16 >> 16;
   if ((i2 | 0) > 2) i2 = i2 + -2 | 0; else {
    i7 = i12;
    break;
   }
  }
  while (1) {
   if (!i7) break L34;
   i6 = i7 & 65535;
   i5 = HEAPU16[i18 + 2876 + (i7 << 1) >> 1] | 0;
   L44 : while (1) {
    i3 = (i5 | 0) == 0;
    do {
     if (i3) break L44;
     i1 = i1 + -1 | 0;
     i2 = HEAP32[i18 + 2908 + (i1 << 2) >> 2] | 0;
    } while ((i2 | 0) > (i14 | 0));
    i3 = i15 + (i2 << 2) + 2 | 0;
    i4 = HEAPU16[i3 >> 1] | 0;
    if ((i7 | 0) != (i4 | 0)) {
     i13 = Math_imul(HEAPU16[i15 + (i2 << 2) >> 1] | 0, i7 - i4 | 0) | 0;
     HEAP32[i16 >> 2] = i13 + (HEAP32[i16 >> 2] | 0);
     HEAP16[i3 >> 1] = i6;
    }
    i5 = i5 + -1 | 0;
   }
   i7 = i7 + -1 | 0;
  }
 } while (0);
 i1 = 1;
 i2 = 0;
 while (1) {
  if ((i1 | 0) == 16) {
   i4 = 0;
   break;
  }
  i16 = (HEAPU16[i18 + 2876 + (i1 + -1 << 1) >> 1] | 0) + (i2 & 65534) << 1;
  HEAP16[i20 + (i1 << 1) >> 1] = i16;
  i1 = i1 + 1 | 0;
  i2 = i16;
 }
 while (1) {
  if ((i4 | 0) > (i17 | 0)) break;
  i18 = HEAP16[i19 + (i4 << 2) + 2 >> 1] | 0;
  i1 = i18 & 65535;
  if (i18 << 16 >> 16) {
   i2 = i20 + (i1 << 1) | 0;
   i3 = HEAP16[i2 >> 1] | 0;
   HEAP16[i2 >> 1] = i3 + 1 << 16 >> 16;
   i2 = i1;
   i3 = i3 & 65535;
   i1 = 0;
   while (1) {
    i1 = i1 | i3 & 1;
    if ((i2 | 0) > 1) {
     i2 = i2 + -1 | 0;
     i3 = i3 >>> 1;
     i1 = i1 << 1;
    } else break;
   }
   HEAP16[i19 + (i4 << 2) >> 1] = i1;
  }
  i4 = i4 + 1 | 0;
 }
 STACKTOP = i21;
 return;
}

function __tr_flush_block(i13, i5, i6, i12) {
 i13 = i13 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[i13 + 132 >> 2] | 0) > 0) {
  i4 = (HEAP32[i13 >> 2] | 0) + 44 | 0;
  if ((HEAP32[i4 >> 2] | 0) == 2) {
   i1 = -201342849;
   i2 = 0;
   while (1) {
    if ((i2 | 0) >= 32) {
     i3 = 7;
     break;
    }
    if ((i1 & 1 | 0) != 0 ? (HEAP16[i13 + 148 + (i2 << 2) >> 1] | 0) != 0 : 0) {
     i1 = 0;
     break;
    }
    i1 = i1 >>> 1;
    i2 = i2 + 1 | 0;
   }
   L10 : do if ((i3 | 0) == 7) if (((HEAP16[i13 + 184 >> 1] | 0) == 0 ? (HEAP16[i13 + 188 >> 1] | 0) == 0 : 0) ? (HEAP16[i13 + 200 >> 1] | 0) == 0 : 0) {
    i1 = 32;
    while (1) {
     if ((i1 | 0) >= 256) {
      i1 = 0;
      break L10;
     }
     if (!(HEAP16[i13 + 148 + (i1 << 2) >> 1] | 0)) i1 = i1 + 1 | 0; else {
      i1 = 1;
      break;
     }
    }
   } else i1 = 1; while (0);
   HEAP32[i4 >> 2] = i1;
  }
  _build_tree(i13, i13 + 2840 | 0);
  _build_tree(i13, i13 + 2852 | 0);
  _scan_tree(i13, i13 + 148 | 0, HEAP32[i13 + 2844 >> 2] | 0);
  _scan_tree(i13, i13 + 2440 | 0, HEAP32[i13 + 2856 >> 2] | 0);
  _build_tree(i13, i13 + 2864 | 0);
  i1 = 18;
  while (1) {
   if ((i1 | 0) <= 2) break;
   if (HEAP16[i13 + 2684 + (HEAPU8[15703 + i1 >> 0] << 2) + 2 >> 1] | 0) break;
   i1 = i1 + -1 | 0;
  }
  i3 = i13 + 5800 | 0;
  i2 = (i1 * 3 | 0) + 17 + (HEAP32[i3 >> 2] | 0) | 0;
  HEAP32[i3 >> 2] = i2;
  i2 = (i2 + 10 | 0) >>> 3;
  i3 = ((HEAP32[i13 + 5804 >> 2] | 0) + 10 | 0) >>> 3;
  i2 = i3 >>> 0 > i2 >>> 0 ? i2 : i3;
 } else {
  i3 = i6 + 5 | 0;
  i1 = 0;
  i2 = i3;
 }
 do if ((i5 | 0) != 0 & (i6 + 4 | 0) >>> 0 <= i2 >>> 0) __tr_stored_block(i13, i5, i6, i12); else {
  i11 = i13 + 5820 | 0;
  i5 = HEAP32[i11 >> 2] | 0;
  i4 = (i5 | 0) > 13;
  if ((i3 | 0) == (i2 | 0) ? 1 : (HEAP32[i13 + 136 >> 2] | 0) == 4) {
   i1 = i12 + 2 & 65535;
   i2 = i13 + 5816 | 0;
   i3 = HEAPU16[i2 >> 1] | i1 << i5;
   HEAP16[i2 >> 1] = i3;
   if (i4) {
    i7 = i13 + 20 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i8 + 1;
    i9 = i13 + 8 | 0;
    HEAP8[(HEAP32[i9 >> 2] | 0) + i8 >> 0] = i3;
    i8 = (HEAPU16[i2 >> 1] | 0) >>> 8 & 255;
    i10 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i10 + 1;
    HEAP8[(HEAP32[i9 >> 2] | 0) + i10 >> 0] = i8;
    i10 = HEAP32[i11 >> 2] | 0;
    HEAP16[i2 >> 1] = i1 >>> (16 - i10 | 0);
    i1 = i10 + -13 | 0;
   } else i1 = i5 + 3 | 0;
   HEAP32[i11 >> 2] = i1;
   _compress_block(i13, 12686, 13838);
   break;
  }
  i3 = i12 + 4 & 65535;
  i10 = i13 + 5816 | 0;
  i2 = HEAPU16[i10 >> 1] | i3 << i5;
  HEAP16[i10 >> 1] = i2;
  if (i4) {
   i8 = i13 + 20 | 0;
   i4 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i4 + 1;
   i9 = i13 + 8 | 0;
   HEAP8[(HEAP32[i9 >> 2] | 0) + i4 >> 0] = i2;
   i2 = (HEAPU16[i10 >> 1] | 0) >>> 8 & 255;
   i4 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i4 + 1;
   HEAP8[(HEAP32[i9 >> 2] | 0) + i4 >> 0] = i2;
   i4 = HEAP32[i11 >> 2] | 0;
   i2 = i3 >>> (16 - i4 | 0);
   HEAP16[i10 >> 1] = i2;
   i4 = i4 + -13 | 0;
  } else i4 = i5 + 3 | 0;
  HEAP32[i11 >> 2] = i4;
  i8 = HEAP32[i13 + 2844 >> 2] | 0;
  i9 = HEAP32[i13 + 2856 >> 2] | 0;
  i3 = i8 + 65280 & 65535;
  i2 = i2 & 65535 | i3 << i4;
  HEAP16[i10 >> 1] = i2;
  if ((i4 | 0) > 11) {
   i6 = i13 + 20 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i4 + 1;
   i7 = i13 + 8 | 0;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i4 >> 0] = i2;
   i2 = (HEAPU16[i10 >> 1] | 0) >>> 8 & 255;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i4 + 1;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i4 >> 0] = i2;
   i4 = HEAP32[i11 >> 2] | 0;
   i2 = i3 >>> (16 - i4 | 0);
   HEAP16[i10 >> 1] = i2;
   i4 = i4 + -11 | 0;
  } else i4 = i4 + 5 | 0;
  HEAP32[i11 >> 2] = i4;
  i3 = i9 & 65535;
  i2 = i3 << i4 | i2 & 65535;
  HEAP16[i10 >> 1] = i2;
  if ((i4 | 0) > 11) {
   i6 = i13 + 20 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i4 + 1;
   i7 = i13 + 8 | 0;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i4 >> 0] = i2;
   i2 = (HEAPU16[i10 >> 1] | 0) >>> 8 & 255;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i4 + 1;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i4 >> 0] = i2;
   i4 = HEAP32[i11 >> 2] | 0;
   i2 = i3 >>> (16 - i4 | 0);
   HEAP16[i10 >> 1] = i2;
   i4 = i4 + -11 | 0;
  } else i4 = i4 + 5 | 0;
  HEAP32[i11 >> 2] = i4;
  i3 = i1 + 65533 & 65535;
  i2 = i3 << i4 | i2 & 65535;
  HEAP16[i10 >> 1] = i2;
  if ((i4 | 0) > 12) {
   i6 = i13 + 20 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5 + 1;
   i7 = i13 + 8 | 0;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i5 >> 0] = i2;
   i5 = (HEAPU16[i10 >> 1] | 0) >>> 8 & 255;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i2 >> 0] = i5;
   i2 = HEAP32[i11 >> 2] | 0;
   i3 = i3 >>> (16 - i2 | 0);
   HEAP16[i10 >> 1] = i3;
   i2 = i2 + -12 | 0;
  } else {
   i6 = i13 + 20 | 0;
   i7 = i13 + 8 | 0;
   i3 = i2;
   i2 = i4 + 4 | 0;
  }
  HEAP32[i11 >> 2] = i2;
  i5 = 0;
  while (1) {
   if ((i5 | 0) > (i1 | 0)) break;
   i4 = HEAPU16[i13 + 2684 + (HEAPU8[15703 + i5 >> 0] << 2) + 2 >> 1] | 0;
   i3 = i4 << i2 | i3 & 65535;
   HEAP16[i10 >> 1] = i3;
   if ((i2 | 0) > 13) {
    i2 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i2 + 1;
    HEAP8[(HEAP32[i7 >> 2] | 0) + i2 >> 0] = i3;
    i3 = (HEAPU16[i10 >> 1] | 0) >>> 8 & 255;
    i2 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i2 + 1;
    HEAP8[(HEAP32[i7 >> 2] | 0) + i2 >> 0] = i3;
    i2 = HEAP32[i11 >> 2] | 0;
    i3 = i4 >>> (16 - i2 | 0);
    HEAP16[i10 >> 1] = i3;
    i2 = i2 + -13 | 0;
   } else i2 = i2 + 3 | 0;
   HEAP32[i11 >> 2] = i2;
   i5 = i5 + 1 | 0;
  }
  i10 = i13 + 148 | 0;
  _send_tree(i13, i10, i8);
  i11 = i13 + 2440 | 0;
  _send_tree(i13, i11, i9);
  _compress_block(i13, i10, i11);
 } while (0);
 _init_block(i13);
 if (i12) _bi_windup(i13);
 return;
}

function _compress_block(i19, i18, i16) {
 i19 = i19 | 0;
 i18 = i18 | 0;
 i16 = i16 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i17 = 0;
 i11 = i19 + 5792 | 0;
 if (!(HEAP32[i11 >> 2] | 0)) {
  i5 = i19 + 5820 | 0;
  i1 = i19 + 5816 | 0;
  i6 = i1;
  i7 = i5;
  i5 = HEAP32[i5 >> 2] | 0;
  i1 = HEAP16[i1 >> 1] | 0;
 } else {
  i12 = i19 + 5796 | 0;
  i13 = i19 + 5784 | 0;
  i7 = i19 + 5820 | 0;
  i6 = i19 + 5816 | 0;
  i14 = i19 + 20 | 0;
  i15 = i19 + 8 | 0;
  i17 = 0;
  do {
   i8 = HEAP16[(HEAP32[i12 >> 2] | 0) + (i17 << 1) >> 1] | 0;
   i10 = i8 & 65535;
   i9 = HEAPU8[(HEAP32[i13 >> 2] | 0) + i17 >> 0] | 0;
   i17 = i17 + 1 | 0;
   if (i8 << 16 >> 16) {
    i8 = HEAPU8[15447 + i9 >> 0] | 0;
    i1 = (i8 | 256) + 1 | 0;
    i4 = HEAPU16[i18 + (i1 << 2) + 2 >> 1] | 0;
    i5 = HEAP32[i7 >> 2] | 0;
    i1 = HEAPU16[i18 + (i1 << 2) >> 1] | 0;
    i3 = HEAPU16[i6 >> 1] | 0 | i1 << i5;
    i2 = i3 & 65535;
    HEAP16[i6 >> 1] = i2;
    if ((i5 | 0) > (16 - i4 | 0)) {
     i2 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i2 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i2 >> 0] = i3;
     i2 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
     i5 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i5 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i5 >> 0] = i2;
     i5 = HEAP32[i7 >> 2] | 0;
     i2 = i1 >>> (16 - i5 | 0) & 65535;
     HEAP16[i6 >> 1] = i2;
     i4 = i4 + -16 + i5 | 0;
    } else i4 = i5 + i4 | 0;
    HEAP32[i7 >> 2] = i4;
    i5 = HEAP32[1164 + (i8 << 2) >> 2] | 0;
    if ((i8 + -8 | 0) >>> 0 < 20) {
     i3 = i9 - (HEAP32[1516 + (i8 << 2) >> 2] | 0) & 65535;
     i1 = i3 << i4 | i2 & 65535;
     i2 = i1 & 65535;
     HEAP16[i6 >> 1] = i2;
     if ((i4 | 0) > (16 - i5 | 0)) {
      i2 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i2 + 1;
      HEAP8[(HEAP32[i15 >> 2] | 0) + i2 >> 0] = i1;
      i2 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
      i1 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i15 >> 2] | 0) + i1 >> 0] = i2;
      i1 = HEAP32[i7 >> 2] | 0;
      i2 = i3 >>> (16 - i1 | 0) & 65535;
      HEAP16[i6 >> 1] = i2;
      i1 = i5 + -16 + i1 | 0;
     } else i1 = i4 + i5 | 0;
     HEAP32[i7 >> 2] = i1;
     i5 = i1;
    } else i5 = i4;
    i8 = i10 + -1 | 0;
    i9 = HEAPU8[14935 + (i8 >>> 0 < 256 ? i8 : (i8 >>> 7) + 256 | 0) >> 0] | 0;
    i3 = HEAPU16[i16 + (i9 << 2) + 2 >> 1] | 0;
    i4 = HEAPU16[i16 + (i9 << 2) >> 1] | 0;
    i2 = i2 & 65535 | i4 << i5;
    i1 = i2 & 65535;
    HEAP16[i6 >> 1] = i1;
    if ((i5 | 0) > (16 - i3 | 0)) {
     i1 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i1 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i1 >> 0] = i2;
     i1 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
     i5 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i5 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i5 >> 0] = i1;
     i5 = HEAP32[i7 >> 2] | 0;
     i1 = i4 >>> (16 - i5 | 0) & 65535;
     HEAP16[i6 >> 1] = i1;
     i5 = i3 + -16 + i5 | 0;
    } else i5 = i5 + i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i4 = HEAP32[1300 + (i9 << 2) >> 2] | 0;
    if ((i9 + -4 | 0) >>> 0 < 26) {
     i3 = i8 - (HEAP32[1632 + (i9 << 2) >> 2] | 0) & 65535;
     i2 = i3 << i5 | i1 & 65535;
     i1 = i2 & 65535;
     HEAP16[i6 >> 1] = i1;
     if ((i5 | 0) > (16 - i4 | 0)) {
      i1 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i15 >> 2] | 0) + i1 >> 0] = i2;
      i1 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
      i5 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i5 + 1;
      HEAP8[(HEAP32[i15 >> 2] | 0) + i5 >> 0] = i1;
      i5 = HEAP32[i7 >> 2] | 0;
      i1 = i3 >>> (16 - i5 | 0) & 65535;
      HEAP16[i6 >> 1] = i1;
      i5 = i4 + -16 + i5 | 0;
     } else i5 = i5 + i4 | 0;
     HEAP32[i7 >> 2] = i5;
    }
   } else {
    i4 = HEAPU16[i18 + (i9 << 2) + 2 >> 1] | 0;
    i5 = HEAP32[i7 >> 2] | 0;
    i2 = HEAPU16[i18 + (i9 << 2) >> 1] | 0;
    i3 = HEAPU16[i6 >> 1] | 0 | i2 << i5;
    i1 = i3 & 65535;
    HEAP16[i6 >> 1] = i1;
    if ((i5 | 0) > (16 - i4 | 0)) {
     i1 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i1 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i1 >> 0] = i3;
     i1 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
     i5 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i5 + 1;
     HEAP8[(HEAP32[i15 >> 2] | 0) + i5 >> 0] = i1;
     i5 = HEAP32[i7 >> 2] | 0;
     i1 = i2 >>> (16 - i5 | 0) & 65535;
     HEAP16[i6 >> 1] = i1;
     i5 = i4 + -16 + i5 | 0;
    } else i5 = i5 + i4 | 0;
    HEAP32[i7 >> 2] = i5;
   }
  } while (i17 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0);
 }
 i4 = i18 + 1026 | 0;
 i3 = HEAPU16[i4 >> 1] | 0;
 i2 = HEAPU16[i18 + 1024 >> 1] | 0;
 i1 = i1 & 65535 | i2 << i5;
 HEAP16[i6 >> 1] = i1;
 if ((i5 | 0) > (16 - i3 | 0)) {
  i16 = i19 + 20 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i17 + 1;
  i18 = i19 + 8 | 0;
  HEAP8[(HEAP32[i18 >> 2] | 0) + i17 >> 0] = i1;
  i17 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
  i1 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i1 + 1;
  HEAP8[(HEAP32[i18 >> 2] | 0) + i1 >> 0] = i17;
  i1 = HEAP32[i7 >> 2] | 0;
  HEAP16[i6 >> 1] = i2 >>> (16 - i1 | 0);
  i1 = i3 + -16 + i1 | 0;
 } else i1 = i5 + i3 | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i19 + 5812 >> 2] = HEAPU16[i4 >> 1];
 return;
}

function _deflate_fast(i33, i30) {
 i33 = i33 | 0;
 i30 = i30 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i31 = 0, i32 = 0, i34 = 0;
 i12 = i33 + 116 | 0;
 i13 = (i30 | 0) == 0;
 i22 = i33 + 72 | 0;
 i23 = i33 + 88 | 0;
 i32 = i33 + 108 | 0;
 i28 = i33 + 56 | 0;
 i24 = i33 + 84 | 0;
 i25 = i33 + 68 | 0;
 i26 = i33 + 52 | 0;
 i27 = i33 + 64 | 0;
 i14 = i33 + 44 | 0;
 i15 = i33 + 96 | 0;
 i16 = i33 + 112 | 0;
 i17 = i33 + 5792 | 0;
 i18 = i33 + 5796 | 0;
 i19 = i33 + 5784 | 0;
 i20 = i33 + 5788 | 0;
 i21 = i33 + 128 | 0;
 i31 = i33 + 92 | 0;
 while (1) {
  if ((HEAP32[i12 >> 2] | 0) >>> 0 < 262) {
   _fill_window(i33);
   i1 = HEAP32[i12 >> 2] | 0;
   if (i13 & i1 >>> 0 < 262) {
    i1 = 0;
    break;
   }
   if (!i1) {
    i29 = 21;
    break;
   }
   if (i1 >>> 0 <= 2) i29 = 9; else i29 = 6;
  } else i29 = 6;
  if ((i29 | 0) == 6) {
   i29 = 0;
   i11 = HEAP32[i32 >> 2] | 0;
   i9 = ((HEAPU8[(HEAP32[i28 >> 2] | 0) + (i11 + 2) >> 0] | 0) ^ HEAP32[i22 >> 2] << HEAP32[i23 >> 2]) & HEAP32[i24 >> 2];
   HEAP32[i22 >> 2] = i9;
   i9 = (HEAP32[i25 >> 2] | 0) + (i9 << 1) | 0;
   i10 = HEAP16[i9 >> 1] | 0;
   HEAP16[(HEAP32[i27 >> 2] | 0) + ((HEAP32[i26 >> 2] & i11) << 1) >> 1] = i10;
   i1 = i10 & 65535;
   HEAP16[i9 >> 1] = i11;
   if (i10 << 16 >> 16 != 0 ? (i11 - i1 | 0) >>> 0 <= ((HEAP32[i14 >> 2] | 0) + -262 | 0) >>> 0 : 0) {
    i1 = _longest_match(i33, i1) | 0;
    HEAP32[i15 >> 2] = i1;
   } else i29 = 9;
  }
  if ((i29 | 0) == 9) {
   i29 = 0;
   i1 = HEAP32[i15 >> 2] | 0;
  }
  do if (i1 >>> 0 > 2) {
   i1 = i1 + 253 | 0;
   i11 = (HEAP32[i32 >> 2] | 0) - (HEAP32[i16 >> 2] | 0) | 0;
   i10 = HEAP32[i17 >> 2] | 0;
   HEAP16[(HEAP32[i18 >> 2] | 0) + (i10 << 1) >> 1] = i11;
   HEAP32[i17 >> 2] = i10 + 1;
   HEAP8[(HEAP32[i19 >> 2] | 0) + i10 >> 0] = i1;
   i1 = i33 + 148 + ((HEAPU8[15447 + (i1 & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
   HEAP16[i1 >> 1] = (HEAP16[i1 >> 1] | 0) + 1 << 16 >> 16;
   i11 = i11 + 65535 & 65535;
   i11 = i33 + 2440 + ((HEAPU8[14935 + (i11 >>> 0 < 256 ? i11 : (i11 >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
   HEAP16[i11 >> 1] = (HEAP16[i11 >> 1] | 0) + 1 << 16 >> 16;
   i11 = (HEAP32[i17 >> 2] | 0) == ((HEAP32[i20 >> 2] | 0) + -1 | 0) & 1;
   i1 = HEAP32[i15 >> 2] | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - i1 | 0;
   HEAP32[i12 >> 2] = i10;
   if (!(i10 >>> 0 > 2 ? i1 >>> 0 <= (HEAP32[i21 >> 2] | 0) >>> 0 : 0)) {
    i3 = (HEAP32[i32 >> 2] | 0) + i1 | 0;
    HEAP32[i32 >> 2] = i3;
    HEAP32[i15 >> 2] = 0;
    i10 = HEAP32[i28 >> 2] | 0;
    i1 = HEAPU8[i10 + i3 >> 0] | 0;
    HEAP32[i22 >> 2] = i1;
    HEAP32[i22 >> 2] = ((HEAPU8[i10 + (i3 + 1) >> 0] | 0) ^ i1 << HEAP32[i23 >> 2]) & HEAP32[i24 >> 2];
    i1 = i11;
    break;
   }
   i8 = i1 + -1 | 0;
   HEAP32[i15 >> 2] = i8;
   i3 = HEAP32[i23 >> 2] | 0;
   i4 = HEAP32[i28 >> 2] | 0;
   i5 = HEAP32[i24 >> 2] | 0;
   i6 = HEAP32[i25 >> 2] | 0;
   i7 = HEAP32[i26 >> 2] | 0;
   i2 = HEAP32[i27 >> 2] | 0;
   i1 = HEAP32[i32 >> 2] | 0;
   i10 = HEAP32[i22 >> 2] | 0;
   while (1) {
    i9 = i1 + 1 | 0;
    HEAP32[i32 >> 2] = i9;
    i10 = ((HEAPU8[i4 + (i1 + 3) >> 0] | 0) ^ i10 << i3) & i5;
    HEAP32[i22 >> 2] = i10;
    i34 = i6 + (i10 << 1) | 0;
    HEAP16[i2 + ((i7 & i9) << 1) >> 1] = HEAP16[i34 >> 1] | 0;
    HEAP16[i34 >> 1] = i9;
    i8 = i8 + -1 | 0;
    HEAP32[i15 >> 2] = i8;
    if (!i8) break; else i1 = i9;
   }
   i3 = i1 + 2 | 0;
   HEAP32[i32 >> 2] = i3;
   i1 = i11;
  } else {
   i1 = HEAP8[(HEAP32[i28 >> 2] | 0) + (HEAP32[i32 >> 2] | 0) >> 0] | 0;
   i3 = HEAP32[i17 >> 2] | 0;
   HEAP16[(HEAP32[i18 >> 2] | 0) + (i3 << 1) >> 1] = 0;
   HEAP32[i17 >> 2] = i3 + 1;
   HEAP8[(HEAP32[i19 >> 2] | 0) + i3 >> 0] = i1;
   i1 = i33 + 148 + ((i1 & 255) << 2) | 0;
   HEAP16[i1 >> 1] = (HEAP16[i1 >> 1] | 0) + 1 << 16 >> 16;
   i1 = (HEAP32[i17 >> 2] | 0) == ((HEAP32[i20 >> 2] | 0) + -1 | 0) & 1;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
   i3 = (HEAP32[i32 >> 2] | 0) + 1 | 0;
   HEAP32[i32 >> 2] = i3;
  } while (0);
  if (!i1) continue;
  i1 = HEAP32[i31 >> 2] | 0;
  if ((i1 | 0) > -1) i2 = (HEAP32[i28 >> 2] | 0) + i1 | 0; else i2 = 0;
  __tr_flush_block(i33, i2, i3 - i1 | 0, 0);
  HEAP32[i31 >> 2] = HEAP32[i32 >> 2];
  _flush_pending(HEAP32[i33 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = 0;
   break;
  }
 }
 do if ((i29 | 0) == 21) {
  i3 = HEAP32[i31 >> 2] | 0;
  if ((i3 | 0) > -1) i2 = (HEAP32[i28 >> 2] | 0) + i3 | 0; else i2 = 0;
  i1 = (i30 | 0) == 4;
  __tr_flush_block(i33, i2, (HEAP32[i32 >> 2] | 0) - i3 | 0, i1 & 1);
  HEAP32[i31 >> 2] = HEAP32[i32 >> 2];
  _flush_pending(HEAP32[i33 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = i1 ? 2 : 0;
   break;
  } else {
   i1 = i1 ? 3 : 1;
   break;
  }
 } while (0);
 return i1 | 0;
}

function ___udivmoddi4(i5, i6, i8, i11, i13) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i8 = i8 | 0;
 i11 = i11 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i9 = 0, i10 = 0, i12 = 0, i14 = 0, i15 = 0;
 i9 = i5;
 i4 = i6;
 i7 = i4;
 i2 = i8;
 i12 = i11;
 i3 = i12;
 if (!i7) {
  i1 = (i13 | 0) != 0;
  if (!i3) {
   if (i1) {
    HEAP32[i13 >> 2] = (i9 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i12 = 0;
   i13 = (i9 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  } else {
   if (!i1) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
 }
 i1 = (i3 | 0) == 0;
 do if (i2) {
  if (!i1) {
   i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
   if (i1 >>> 0 <= 31) {
    i10 = i1 + 1 | 0;
    i3 = 31 - i1 | 0;
    i6 = i1 - 31 >> 31;
    i2 = i10;
    i5 = i9 >>> (i10 >>> 0) & i6 | i7 << i3;
    i6 = i7 >>> (i10 >>> 0) & i6;
    i1 = 0;
    i3 = i9 << i3;
    break;
   }
   if (!i13) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  i1 = i2 - 1 | 0;
  if (i1 & i2) {
   i3 = (Math_clz32(i2 | 0) | 0) + 33 - (Math_clz32(i7 | 0) | 0) | 0;
   i15 = 64 - i3 | 0;
   i10 = 32 - i3 | 0;
   i4 = i10 >> 31;
   i14 = i3 - 32 | 0;
   i6 = i14 >> 31;
   i2 = i3;
   i5 = i10 - 1 >> 31 & i7 >>> (i14 >>> 0) | (i7 << i10 | i9 >>> (i3 >>> 0)) & i6;
   i6 = i6 & i7 >>> (i3 >>> 0);
   i1 = i9 << i15 & i4;
   i3 = (i7 << i15 | i9 >>> (i14 >>> 0)) & i4 | i9 << i10 & i3 - 33 >> 31;
   break;
  }
  if (i13) {
   HEAP32[i13 >> 2] = i1 & i9;
   HEAP32[i13 + 4 >> 2] = 0;
  }
  if ((i2 | 0) == 1) {
   i14 = i4 | i6 & 0;
   i15 = i5 | 0 | 0;
   return (tempRet0 = i14, i15) | 0;
  } else {
   i15 = _llvm_cttz_i32(i2 | 0) | 0;
   i14 = i7 >>> (i15 >>> 0) | 0;
   i15 = i7 << 32 - i15 | i9 >>> (i15 >>> 0) | 0;
   return (tempRet0 = i14, i15) | 0;
  }
 } else {
  if (i1) {
   if (i13) {
    HEAP32[i13 >> 2] = (i7 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i14 = 0;
   i15 = (i7 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i14, i15) | 0;
  }
  if (!i9) {
   if (i13) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = (i7 >>> 0) % (i3 >>> 0);
   }
   i14 = 0;
   i15 = (i7 >>> 0) / (i3 >>> 0) >>> 0;
   return (tempRet0 = i14, i15) | 0;
  }
  i1 = i3 - 1 | 0;
  if (!(i1 & i3)) {
   if (i13) {
    HEAP32[i13 >> 2] = i5 | 0;
    HEAP32[i13 + 4 >> 2] = i1 & i7 | i6 & 0;
   }
   i14 = 0;
   i15 = i7 >>> ((_llvm_cttz_i32(i3 | 0) | 0) >>> 0);
   return (tempRet0 = i14, i15) | 0;
  }
  i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
  if (i1 >>> 0 <= 30) {
   i6 = i1 + 1 | 0;
   i3 = 31 - i1 | 0;
   i2 = i6;
   i5 = i7 << i3 | i9 >>> (i6 >>> 0);
   i6 = i7 >>> (i6 >>> 0);
   i1 = 0;
   i3 = i9 << i3;
   break;
  }
  if (!i13) {
   i14 = 0;
   i15 = 0;
   return (tempRet0 = i14, i15) | 0;
  }
  HEAP32[i13 >> 2] = i5 | 0;
  HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
  i14 = 0;
  i15 = 0;
  return (tempRet0 = i14, i15) | 0;
 } while (0);
 if (!i2) {
  i7 = i3;
  i4 = 0;
  i3 = 0;
 } else {
  i10 = i8 | 0 | 0;
  i9 = i12 | i11 & 0;
  i7 = _i64Add(i10 | 0, i9 | 0, -1, -1) | 0;
  i8 = tempRet0;
  i4 = i3;
  i3 = 0;
  do {
   i11 = i4;
   i4 = i1 >>> 31 | i4 << 1;
   i1 = i3 | i1 << 1;
   i11 = i5 << 1 | i11 >>> 31 | 0;
   i12 = i5 >>> 31 | i6 << 1 | 0;
   _i64Subtract(i7, i8, i11, i12) | 0;
   i15 = tempRet0;
   i14 = i15 >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1;
   i3 = i14 & 1;
   i5 = _i64Subtract(i11, i12, i14 & i10, (((i15 | 0) < 0 ? -1 : 0) >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1) & i9) | 0;
   i6 = tempRet0;
   i2 = i2 - 1 | 0;
  } while ((i2 | 0) != 0);
  i7 = i4;
  i4 = 0;
 }
 i2 = 0;
 if (i13) {
  HEAP32[i13 >> 2] = i5;
  HEAP32[i13 + 4 >> 2] = i6;
 }
 i14 = (i1 | 0) >>> 31 | (i7 | i2) << 1 | (i2 << 1 | i1 >>> 31) & 0 | i4;
 i15 = (i1 << 1 | 0 >>> 31) & -2 | i3;
 return (tempRet0 = i14, i15) | 0;
}

function _fill_window(i23) {
 i23 = i23 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i9 = i23 + 44 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i16 = i23 + 60 | 0;
 i17 = i23 + 116 | 0;
 i18 = i23 + 108 | 0;
 i19 = i10 + -262 | 0;
 i28 = i23 + 56 | 0;
 i20 = i23 + 72 | 0;
 i21 = i23 + 88 | 0;
 i22 = i23 + 84 | 0;
 i11 = i23 + 112 | 0;
 i12 = i23 + 92 | 0;
 i13 = i23 + 76 | 0;
 i14 = i23 + 68 | 0;
 i15 = i23 + 64 | 0;
 i1 = HEAP32[i17 >> 2] | 0;
 i3 = i10;
 while (1) {
  i2 = HEAP32[i18 >> 2] | 0;
  i4 = (HEAP32[i16 >> 2] | 0) - i1 - i2 | 0;
  if (i2 >>> 0 < (i19 + i3 | 0) >>> 0) i3 = i4; else {
   i2 = HEAP32[i28 >> 2] | 0;
   _memcpy(i2 | 0, i2 + i10 | 0, i10 | 0) | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - i10;
   i2 = (HEAP32[i18 >> 2] | 0) - i10 | 0;
   HEAP32[i18 >> 2] = i2;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i10;
   i3 = HEAP32[i13 >> 2] | 0;
   i1 = i3;
   i3 = (HEAP32[i14 >> 2] | 0) + (i3 << 1) | 0;
   do {
    i3 = i3 + -2 | 0;
    i7 = HEAPU16[i3 >> 1] | 0;
    HEAP16[i3 >> 1] = i7 >>> 0 < i10 >>> 0 ? 0 : i7 - i10 & 65535;
    i1 = i1 + -1 | 0;
   } while ((i1 | 0) != 0);
   i1 = i10;
   i3 = (HEAP32[i15 >> 2] | 0) + (i10 << 1) | 0;
   do {
    i3 = i3 + -2 | 0;
    i7 = HEAPU16[i3 >> 1] | 0;
    HEAP16[i3 >> 1] = i7 >>> 0 < i10 >>> 0 ? 0 : i7 - i10 & 65535;
    i1 = i1 + -1 | 0;
   } while ((i1 | 0) != 0);
   i3 = i4 + i10 | 0;
  }
  i7 = HEAP32[i23 >> 2] | 0;
  i4 = i7 + 4 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  if (!i5) break;
  i1 = HEAP32[i17 >> 2] | 0;
  i6 = (HEAP32[i28 >> 2] | 0) + i2 + i1 | 0;
  i2 = i5 >>> 0 > i3 >>> 0 ? i3 : i5;
  if (!i2) i2 = 0; else {
   HEAP32[i4 >> 2] = i5 - i2;
   switch (HEAP32[(HEAP32[i7 + 28 >> 2] | 0) + 24 >> 2] | 0) {
   case 1:
    {
     i1 = i7 + 48 | 0;
     HEAP32[i1 >> 2] = _adler32(HEAP32[i1 >> 2] | 0, HEAP32[i7 >> 2] | 0, i2) | 0;
     i1 = i7;
     break;
    }
   case 2:
    {
     i1 = i7 + 48 | 0;
     HEAP32[i1 >> 2] = _crc32(HEAP32[i1 >> 2] | 0, HEAP32[i7 >> 2] | 0, i2) | 0;
     i1 = i7;
     break;
    }
   default:
    i1 = i7;
   }
   _memcpy(i6 | 0, HEAP32[i1 >> 2] | 0, i2 | 0) | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i2;
   i1 = i7 + 8 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i2;
   i1 = HEAP32[i17 >> 2] | 0;
  }
  i1 = i1 + i2 | 0;
  HEAP32[i17 >> 2] = i1;
  if (i1 >>> 0 > 2 ? (i6 = HEAP32[i18 >> 2] | 0, i5 = HEAP32[i28 >> 2] | 0, i7 = HEAPU8[i5 + i6 >> 0] | 0, HEAP32[i20 >> 2] = i7, HEAP32[i20 >> 2] = ((HEAPU8[i5 + (i6 + 1) >> 0] | 0) ^ i7 << HEAP32[i21 >> 2]) & HEAP32[i22 >> 2], i1 >>> 0 >= 262) : 0) {
   i8 = i1;
   i24 = 19;
   break;
  }
  if (!(HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] | 0)) {
   i8 = i1;
   i24 = 19;
   break;
  }
  i3 = HEAP32[i9 >> 2] | 0;
 }
 do if ((i24 | 0) == 19 ? (i25 = i23 + 5824 | 0, i26 = HEAP32[i25 >> 2] | 0, i27 = HEAP32[i16 >> 2] | 0, i27 >>> 0 > i26 >>> 0) : 0) {
  i1 = i8 + (HEAP32[i18 >> 2] | 0) | 0;
  if (i26 >>> 0 < i1 >>> 0) {
   i27 = i27 - i1 | 0;
   i27 = i27 >>> 0 > 258 ? 258 : i27;
   _memset((HEAP32[i28 >> 2] | 0) + i1 | 0, 0, i27 | 0) | 0;
   HEAP32[i25 >> 2] = i27 + i1;
   break;
  }
  i1 = i1 + 258 | 0;
  if (i1 >>> 0 > i26 >>> 0) {
   i24 = i1 - i26 | 0;
   i27 = i27 - i26 | 0;
   i27 = i24 >>> 0 > i27 >>> 0 ? i27 : i24;
   _memset((HEAP32[i28 >> 2] | 0) + i26 | 0, 0, i27 | 0) | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + i27;
  }
 } while (0);
 return;
}

function _adler32(i2, i4, i3) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = i2 >>> 16;
 i2 = i2 & 65535;
 do if ((i3 | 0) != 1) if (!i4) i1 = 1; else {
  if (i3 >>> 0 < 16) {
   while (1) {
    if (!i3) break;
    i7 = (HEAPU8[i4 >> 0] | 0) + i2 | 0;
    i3 = i3 + -1 | 0;
    i4 = i4 + 1 | 0;
    i2 = i7;
    i1 = i7 + i1 | 0;
   }
   i1 = ((i1 >>> 0) % 65521 | 0) << 16 | (i2 >>> 0 > 65520 ? i2 + -65521 | 0 : i2);
   break;
  }
  while (1) {
   if (i3 >>> 0 <= 5551) break;
   i3 = i3 + -5552 | 0;
   i6 = i4;
   i5 = 347;
   while (1) {
    i21 = (HEAPU8[i6 >> 0] | 0) + i2 | 0;
    i20 = i21 + (HEAPU8[i6 + 1 >> 0] | 0) | 0;
    i19 = i20 + (HEAPU8[i6 + 2 >> 0] | 0) | 0;
    i18 = i19 + (HEAPU8[i6 + 3 >> 0] | 0) | 0;
    i17 = i18 + (HEAPU8[i6 + 4 >> 0] | 0) | 0;
    i16 = i17 + (HEAPU8[i6 + 5 >> 0] | 0) | 0;
    i15 = i16 + (HEAPU8[i6 + 6 >> 0] | 0) | 0;
    i14 = i15 + (HEAPU8[i6 + 7 >> 0] | 0) | 0;
    i13 = i14 + (HEAPU8[i6 + 8 >> 0] | 0) | 0;
    i12 = i13 + (HEAPU8[i6 + 9 >> 0] | 0) | 0;
    i11 = i12 + (HEAPU8[i6 + 10 >> 0] | 0) | 0;
    i10 = i11 + (HEAPU8[i6 + 11 >> 0] | 0) | 0;
    i9 = i10 + (HEAPU8[i6 + 12 >> 0] | 0) | 0;
    i8 = i9 + (HEAPU8[i6 + 13 >> 0] | 0) | 0;
    i7 = i8 + (HEAPU8[i6 + 14 >> 0] | 0) | 0;
    i2 = i7 + (HEAPU8[i6 + 15 >> 0] | 0) | 0;
    i1 = i21 + i1 + i20 + i19 + i18 + i17 + i16 + i15 + i14 + i13 + i12 + i11 + i10 + i9 + i8 + i7 + i2 | 0;
    i5 = i5 + -1 | 0;
    if (!i5) break; else i6 = i6 + 16 | 0;
   }
   i4 = i4 + 5552 | 0;
   i2 = (i2 >>> 0) % 65521 | 0;
   i1 = (i1 >>> 0) % 65521 | 0;
  }
  if (i3) {
   i7 = i3 + ~(i3 >>> 0 < 15 ? i3 : 15) + 16 & -16;
   i5 = i3 - i7 | 0;
   i6 = i4;
   while (1) {
    if (i3 >>> 0 <= 15) break;
    i23 = (HEAPU8[i6 >> 0] | 0) + i2 | 0;
    i22 = i23 + (HEAPU8[i6 + 1 >> 0] | 0) | 0;
    i8 = i22 + (HEAPU8[i6 + 2 >> 0] | 0) | 0;
    i9 = i8 + (HEAPU8[i6 + 3 >> 0] | 0) | 0;
    i10 = i9 + (HEAPU8[i6 + 4 >> 0] | 0) | 0;
    i11 = i10 + (HEAPU8[i6 + 5 >> 0] | 0) | 0;
    i12 = i11 + (HEAPU8[i6 + 6 >> 0] | 0) | 0;
    i13 = i12 + (HEAPU8[i6 + 7 >> 0] | 0) | 0;
    i14 = i13 + (HEAPU8[i6 + 8 >> 0] | 0) | 0;
    i15 = i14 + (HEAPU8[i6 + 9 >> 0] | 0) | 0;
    i16 = i15 + (HEAPU8[i6 + 10 >> 0] | 0) | 0;
    i17 = i16 + (HEAPU8[i6 + 11 >> 0] | 0) | 0;
    i18 = i17 + (HEAPU8[i6 + 12 >> 0] | 0) | 0;
    i19 = i18 + (HEAPU8[i6 + 13 >> 0] | 0) | 0;
    i20 = i19 + (HEAPU8[i6 + 14 >> 0] | 0) | 0;
    i21 = i20 + (HEAPU8[i6 + 15 >> 0] | 0) | 0;
    i3 = i3 + -16 | 0;
    i6 = i6 + 16 | 0;
    i2 = i21;
    i1 = i23 + i1 + i22 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 | 0;
   }
   i3 = i4 + i7 | 0;
   while (1) {
    if (!i5) break;
    i23 = (HEAPU8[i3 >> 0] | 0) + i2 | 0;
    i5 = i5 + -1 | 0;
    i3 = i3 + 1 | 0;
    i2 = i23;
    i1 = i23 + i1 | 0;
   }
   i2 = (i2 >>> 0) % 65521 | 0;
   i1 = (i1 >>> 0) % 65521 | 0;
  }
  i1 = i1 << 16 | i2;
 } else {
  i23 = (HEAPU8[i4 >> 0] | 0) + i2 | 0;
  i23 = i23 >>> 0 > 65520 ? i23 + -65521 | 0 : i23;
  i1 = i23 + i1 | 0;
  i1 = (i1 >>> 0 > 65520 ? i1 + 15 | 0 : i1) << 16 | i23;
 } while (0);
 return i1 | 0;
}

function _crc32(i4, i2, i1) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (!i2) i1 = 0; else {
  i3 = i1;
  i1 = ~i4;
  while (1) {
   if (!i3) {
    i3 = 0;
    break;
   }
   if (!(i2 & 3)) break;
   i6 = HEAP32[1792 + (((HEAPU8[i2 >> 0] | 0) ^ i1 & 255) << 2) >> 2] ^ i1 >>> 8;
   i3 = i3 + -1 | 0;
   i2 = i2 + 1 | 0;
   i1 = i6;
  }
  i5 = i3 + 32 + ~(i3 >>> 0 < 31 ? i3 : 31) & -32;
  i6 = i2 + i5 | 0;
  i4 = i3;
  while (1) {
   if (i4 >>> 0 <= 31) break;
   i7 = HEAP32[i2 >> 2] ^ i1;
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 4 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 8 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 12 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 16 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 20 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 24 >> 2];
   i7 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2] ^ HEAP32[i2 + 28 >> 2];
   i4 = i4 + -32 | 0;
   i2 = i2 + 32 | 0;
   i1 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2];
  }
  i5 = i3 - i5 | 0;
  i4 = (i5 + 4 + ~(i5 >>> 0 < 3 ? i5 : 3) | 0) >>> 2;
  i2 = i5;
  i3 = i6;
  while (1) {
   if (i2 >>> 0 <= 3) break;
   i7 = HEAP32[i3 >> 2] ^ i1;
   i2 = i2 + -4 | 0;
   i3 = i3 + 4 | 0;
   i1 = HEAP32[3840 + ((i7 >>> 8 & 255) << 2) >> 2] ^ HEAP32[4864 + ((i7 & 255) << 2) >> 2] ^ HEAP32[2816 + ((i7 >>> 16 & 255) << 2) >> 2] ^ HEAP32[1792 + (i7 >>> 24 << 2) >> 2];
  }
  i2 = i4 << 2;
  if ((i5 | 0) != (i2 | 0)) {
   i3 = i6 + (i4 << 2) | 0;
   i2 = i5 - i2 | 0;
   while (1) {
    i1 = HEAP32[1792 + (((HEAPU8[i3 >> 0] | 0) ^ i1 & 255) << 2) >> 2] ^ i1 >>> 8;
    i2 = i2 + -1 | 0;
    if (!i2) break; else i3 = i3 + 1 | 0;
   }
  }
  i1 = ~i1;
 }
 return i1 | 0;
}

function _deflateInit2_(i12, i3, i7, i4, i10, i11, i2, i1) {
 i12 = i12 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 i4 = i4 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i5 = 0, i6 = 0, i8 = 0, i9 = 0, i13 = 0;
 do if ((i2 | 0) != 0 ? !((i1 | 0) != 56 | (HEAP8[i2 >> 0] | 0) != 49) : 0) if (i12) {
  i9 = i12 + 24 | 0;
  HEAP32[i9 >> 2] = 0;
  i8 = i12 + 32 | 0;
  i1 = HEAP32[i8 >> 2] | 0;
  if (!i1) {
   HEAP32[i8 >> 2] = 4;
   HEAP32[i12 + 40 >> 2] = 0;
   i1 = 4;
  }
  i2 = i12 + 36 | 0;
  if (!(HEAP32[i2 >> 2] | 0)) HEAP32[i2 >> 2] = 1;
  i6 = (i3 | 0) == -1 ? 6 : i3;
  if ((i4 | 0) < 0) {
   i2 = 0 - i4 | 0;
   i5 = 0;
  } else {
   i5 = (i4 | 0) > 15;
   i2 = i5 ? i4 + -16 | 0 : i4;
   i5 = i5 ? 2 : 1;
  }
  if (!(i11 >>> 0 > 4 | (i6 >>> 0 > 9 | ((i7 | 0) != 8 | (i10 + -1 | 0) >>> 0 > 8 | (i2 & -8 | 0) != 8)))) {
   i2 = (i2 | 0) == 8 ? 9 : i2;
   i3 = i12 + 40 | 0;
   i4 = FUNCTION_TABLE_iiii[i1 & 7](HEAP32[i3 >> 2] | 0, 1, 5828) | 0;
   if (!i4) i1 = -4; else {
    HEAP32[i12 + 28 >> 2] = i4;
    HEAP32[i4 >> 2] = i12;
    HEAP32[i4 + 24 >> 2] = i5;
    HEAP32[i4 + 28 >> 2] = 0;
    HEAP32[i4 + 48 >> 2] = i2;
    i2 = 1 << i2;
    i7 = i4 + 44 | 0;
    HEAP32[i7 >> 2] = i2;
    HEAP32[i4 + 52 >> 2] = i2 + -1;
    i13 = i10 + 7 | 0;
    HEAP32[i4 + 80 >> 2] = i13;
    i13 = 1 << i13;
    i1 = i4 + 76 | 0;
    HEAP32[i1 >> 2] = i13;
    HEAP32[i4 + 84 >> 2] = i13 + -1;
    HEAP32[i4 + 88 >> 2] = ((i10 + 9 | 0) >>> 0) / 3 | 0;
    i13 = i4 + 56 | 0;
    HEAP32[i13 >> 2] = FUNCTION_TABLE_iiii[HEAP32[i8 >> 2] & 7](HEAP32[i3 >> 2] | 0, i2, 2) | 0;
    i2 = FUNCTION_TABLE_iiii[HEAP32[i8 >> 2] & 7](HEAP32[i3 >> 2] | 0, HEAP32[i7 >> 2] | 0, 2) | 0;
    i5 = i4 + 64 | 0;
    HEAP32[i5 >> 2] = i2;
    _memset(i2 | 0, 0, HEAP32[i7 >> 2] << 1 | 0) | 0;
    i7 = i4 + 68 | 0;
    HEAP32[i7 >> 2] = FUNCTION_TABLE_iiii[HEAP32[i8 >> 2] & 7](HEAP32[i3 >> 2] | 0, HEAP32[i1 >> 2] | 0, 2) | 0;
    HEAP32[i4 + 5824 >> 2] = 0;
    i1 = 1 << i10 + 6;
    i2 = i4 + 5788 | 0;
    HEAP32[i2 >> 2] = i1;
    i1 = FUNCTION_TABLE_iiii[HEAP32[i8 >> 2] & 7](HEAP32[i3 >> 2] | 0, i1, 4) | 0;
    HEAP32[i4 + 8 >> 2] = i1;
    i2 = HEAP32[i2 >> 2] | 0;
    HEAP32[i4 + 12 >> 2] = i2 << 2;
    if (((HEAP32[i13 >> 2] | 0) != 0 ? (HEAP32[i5 >> 2] | 0) != 0 : 0) ? !((HEAP32[i7 >> 2] | 0) == 0 | (i1 | 0) == 0) : 0) {
     HEAP32[i4 + 5796 >> 2] = i1 + (i2 >>> 1 << 1);
     HEAP32[i4 + 5784 >> 2] = i1 + (i2 * 3 | 0);
     HEAP32[i4 + 132 >> 2] = i6;
     HEAP32[i4 + 136 >> 2] = i11;
     HEAP8[i4 + 36 >> 0] = 8;
     i1 = _deflateReset(i12) | 0;
     break;
    }
    HEAP32[i4 + 4 >> 2] = 666;
    HEAP32[i9 >> 2] = HEAP32[444];
    _deflateEnd(i12) | 0;
    i1 = -4;
   }
  } else i1 = -2;
 } else i1 = -2; else i1 = -6; while (0);
 return i1 | 0;
}

function _longest_match(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i8 = HEAP32[i2 + 124 >> 2] | 0;
 i15 = HEAP32[i2 + 56 >> 2] | 0;
 i12 = HEAP32[i2 + 108 >> 2] | 0;
 i6 = i15 + i12 | 0;
 i7 = HEAP32[i2 + 120 >> 2] | 0;
 i11 = HEAP32[i2 + 144 >> 2] | 0;
 i10 = (HEAP32[i2 + 44 >> 2] | 0) + -262 | 0;
 i10 = i12 >>> 0 > i10 >>> 0 ? i12 - i10 | 0 : 0;
 i12 = HEAP32[i2 + 64 >> 2] | 0;
 i13 = HEAP32[i2 + 52 >> 2] | 0;
 i14 = i6 + 258 | 0;
 i20 = HEAP32[i2 + 116 >> 2] | 0;
 i11 = i11 >>> 0 > i20 >>> 0 ? i20 : i11;
 i16 = i2 + 112 | 0;
 i17 = i14;
 i18 = i14 + -258 | 0;
 i9 = i1;
 i4 = i7;
 i8 = i7 >>> 0 < (HEAP32[i2 + 140 >> 2] | 0) >>> 0 ? i8 : i8 >>> 2;
 i2 = i6;
 i3 = HEAP8[i6 + i7 >> 0] | 0;
 i7 = HEAP8[i6 + (i7 + -1) >> 0] | 0;
 while (1) {
  i1 = i15 + i9 | 0;
  if ((((HEAP8[i1 + i4 >> 0] | 0) == i3 << 24 >> 24 ? (HEAP8[i1 + (i4 + -1) >> 0] | 0) == i7 << 24 >> 24 : 0) ? (HEAP8[i1 >> 0] | 0) == (HEAP8[i2 >> 0] | 0) : 0) ? (i19 = i1 + 1 | 0, (HEAP8[i19 >> 0] | 0) == (HEAP8[i2 + 1 >> 0] | 0)) : 0) {
   i6 = i19;
   i5 = i2 + 2 | 0;
   while (1) {
    i1 = i5 + 1 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 2 >> 0] | 0)) break;
    i1 = i5 + 2 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 3 >> 0] | 0)) break;
    i1 = i5 + 3 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 4 >> 0] | 0)) break;
    i1 = i5 + 4 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 5 >> 0] | 0)) break;
    i1 = i5 + 5 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 6 >> 0] | 0)) break;
    i1 = i5 + 6 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 + 7 >> 0] | 0)) break;
    i1 = i5 + 7 | 0;
    i2 = i6;
    i6 = i6 + 8 | 0;
    if ((HEAP8[i1 >> 0] | 0) != (HEAP8[i6 >> 0] | 0)) break;
    i1 = i5 + 8 | 0;
    if (!(i1 >>> 0 < i14 >>> 0 ? (HEAP8[i1 >> 0] | 0) == (HEAP8[i2 + 9 >> 0] | 0) : 0)) break; else i5 = i1;
   }
   i2 = i1 - i17 | 0;
   i1 = i2 + 258 | 0;
   if ((i1 | 0) > (i4 | 0)) {
    HEAP32[i16 >> 2] = i9;
    if ((i1 | 0) >= (i11 | 0)) break;
    i4 = i1;
    i5 = i18;
    i3 = HEAP8[i18 + i1 >> 0] | 0;
    i1 = HEAP8[i18 + (i2 + 257) >> 0] | 0;
   } else {
    i5 = i18;
    i1 = i7;
   }
  } else {
   i5 = i2;
   i1 = i7;
  }
  i9 = HEAPU16[i12 + ((i9 & i13) << 1) >> 1] | 0;
  if (i9 >>> 0 <= i10 >>> 0) {
   i1 = i4;
   break;
  }
  i8 = i8 + -1 | 0;
  if (!i8) {
   i1 = i4;
   break;
  } else {
   i2 = i5;
   i7 = i1;
  }
 }
 return (i1 >>> 0 > i20 >>> 0 ? i20 : i1) | 0;
}

function _pop_arg_529(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 L1 : do if (i3 >>> 0 <= 20) do switch (i3 | 0) {
 case 9:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = i3;
   break L1;
  }
 case 10:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   i4 = i2;
   HEAP32[i4 >> 2] = i3;
   HEAP32[i4 + 4 >> 2] = ((i3 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 11:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   i4 = i2;
   HEAP32[i4 >> 2] = i3;
   HEAP32[i4 + 4 >> 2] = 0;
   break L1;
  }
 case 12:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   i3 = i4;
   i5 = HEAP32[i3 >> 2] | 0;
   i3 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 8;
   i4 = i2;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i4 + 4 >> 2] = i3;
   break L1;
  }
 case 13:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 4;
   i4 = (i4 & 65535) << 16 >> 16;
   i5 = i2;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 14:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 4;
   i5 = i2;
   HEAP32[i5 >> 2] = i4 & 65535;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 15:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 4;
   i4 = (i4 & 255) << 24 >> 24;
   i5 = i2;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 16:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 4;
   i5 = i2;
   HEAP32[i5 >> 2] = i4 & 255;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 17:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i1 >> 2] = i5 + 8;
   HEAPF64[i2 >> 3] = d6;
   break L1;
  }
 case 18:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i1 >> 2] = i5 + 8;
   HEAPF64[i2 >> 3] = d6;
   break L1;
  }
 default:
  break L1;
 } while (0); while (0);
 return;
}

function __tr_align(i6) {
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i5 = i6 + 5820 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i4 = i6 + 5816 | 0;
 i1 = HEAPU16[i4 >> 1] | 0 | 2 << i2;
 HEAP16[i4 >> 1] = i1;
 if ((i2 | 0) > 13) {
  i7 = i6 + 20 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 1;
  i3 = i6 + 8 | 0;
  HEAP8[(HEAP32[i3 >> 2] | 0) + i2 >> 0] = i1;
  i1 = (HEAPU16[i4 >> 1] | 0) >>> 8 & 255;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 1;
  HEAP8[(HEAP32[i3 >> 2] | 0) + i2 >> 0] = i1;
  i2 = HEAP32[i5 >> 2] | 0;
  i1 = 2 >>> (16 - i2 | 0);
  HEAP16[i4 >> 1] = i1;
  i2 = i2 + -13 | 0;
 } else i2 = i2 + 3 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) > 9) {
  i2 = i6 + 20 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i3 + 1;
  i7 = i6 + 8 | 0;
  HEAP8[(HEAP32[i7 >> 2] | 0) + i3 >> 0] = i1;
  i3 = (HEAPU16[i4 >> 1] | 0) >>> 8 & 255;
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i1 + 1;
  HEAP8[(HEAP32[i7 >> 2] | 0) + i1 >> 0] = i3;
  HEAP16[i4 >> 1] = 0;
  i1 = (HEAP32[i5 >> 2] | 0) + -9 | 0;
 } else i1 = i2 + 7 | 0;
 HEAP32[i5 >> 2] = i1;
 _bi_flush(i6);
 i3 = i6 + 5812 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if (((HEAP32[i3 >> 2] | 0) + 11 - i2 | 0) < 9) {
  i1 = HEAPU16[i4 >> 1] | 0 | 2 << i2;
  HEAP16[i4 >> 1] = i1;
  if ((i2 | 0) > 13) {
   i8 = i6 + 20 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i2 + 1;
   i7 = i6 + 8 | 0;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i2 >> 0] = i1;
   i1 = (HEAPU16[i4 >> 1] | 0) >>> 8 & 255;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i7 >> 2] | 0) + i2 >> 0] = i1;
   i2 = HEAP32[i5 >> 2] | 0;
   i1 = 2 >>> (16 - i2 | 0);
   HEAP16[i4 >> 1] = i1;
   i2 = i2 + -13 | 0;
  } else i2 = i2 + 3 | 0;
  HEAP32[i5 >> 2] = i2;
  if ((i2 | 0) > 9) {
   i2 = i6 + 20 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7 + 1;
   i8 = i6 + 8 | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + i7 >> 0] = i1;
   i7 = (HEAPU16[i4 >> 1] | 0) >>> 8 & 255;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i1 + 1;
   HEAP8[(HEAP32[i8 >> 2] | 0) + i1 >> 0] = i7;
   HEAP16[i4 >> 1] = 0;
   i1 = (HEAP32[i5 >> 2] | 0) + -9 | 0;
  } else i1 = i2 + 7 | 0;
  HEAP32[i5 >> 2] = i1;
  _bi_flush(i6);
 }
 HEAP32[i3 >> 2] = 7;
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
  if (!(HEAP32[4589] | 0)) {
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

function _deflate_stored(i12, i9) {
 i12 = i12 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0;
 i4 = (HEAP32[i12 + 12 >> 2] | 0) + -5 | 0;
 i4 = i4 >>> 0 < 65535 ? i4 : 65535;
 i5 = i12 + 116 | 0;
 i10 = i12 + 108 | 0;
 i11 = i12 + 92 | 0;
 i6 = i12 + 44 | 0;
 i7 = i12 + 56 | 0;
 while (1) {
  i1 = HEAP32[i5 >> 2] | 0;
  if (i1 >>> 0 < 2) {
   _fill_window(i12);
   i1 = HEAP32[i5 >> 2] | 0;
   if (!(i1 | i9)) {
    i1 = 0;
    break;
   }
   if (!i1) {
    i8 = 14;
    break;
   }
  }
  i1 = (HEAP32[i10 >> 2] | 0) + i1 | 0;
  HEAP32[i10 >> 2] = i1;
  HEAP32[i5 >> 2] = 0;
  i2 = HEAP32[i11 >> 2] | 0;
  i3 = i2 + i4 | 0;
  if (!((i1 | 0) != 0 & i1 >>> 0 < i3 >>> 0)) {
   HEAP32[i5 >> 2] = i1 - i3;
   HEAP32[i10 >> 2] = i3;
   if ((i2 | 0) > -1) i1 = (HEAP32[i7 >> 2] | 0) + i2 | 0; else i1 = 0;
   __tr_flush_block(i12, i1, i4, 0);
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   _flush_pending(HEAP32[i12 >> 2] | 0);
   if (!(HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0)) {
    i1 = 0;
    break;
   }
   i2 = HEAP32[i11 >> 2] | 0;
   i1 = HEAP32[i10 >> 2] | 0;
  }
  i3 = i1 - i2 | 0;
  if (i3 >>> 0 < ((HEAP32[i6 >> 2] | 0) + -262 | 0) >>> 0) continue;
  if ((i2 | 0) > -1) i1 = (HEAP32[i7 >> 2] | 0) + i2 | 0; else i1 = 0;
  __tr_flush_block(i12, i1, i3, 0);
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  _flush_pending(HEAP32[i12 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = 0;
   break;
  }
 }
 do if ((i8 | 0) == 14) {
  i3 = HEAP32[i11 >> 2] | 0;
  if ((i3 | 0) > -1) i2 = (HEAP32[i7 >> 2] | 0) + i3 | 0; else i2 = 0;
  i1 = (i9 | 0) == 4;
  __tr_flush_block(i12, i2, (HEAP32[i10 >> 2] | 0) - i3 | 0, i1 & 1);
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  _flush_pending(HEAP32[i12 >> 2] | 0);
  if (!(HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0)) {
   i1 = i1 ? 2 : 0;
   break;
  } else {
   i1 = i1 ? 3 : 1;
   break;
  }
 } while (0);
 return i1 | 0;
}

function _test_dict_inflate(i1, i2, i6, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i10 + 24 | 0;
 i9 = i10 + 16 | 0;
 i8 = i10 + 8 | 0;
 i4 = i10;
 i5 = i10 + 32 | 0;
 i11 = i6;
 i12 = i11;
 HEAP8[i12 >> 0] = 103;
 HEAP8[i12 + 1 >> 0] = 97;
 HEAP8[i12 + 2 >> 0] = 114;
 HEAP8[i12 + 3 >> 0] = 98;
 i11 = i11 + 4 | 0;
 HEAP8[i11 >> 0] = 97;
 HEAP8[i11 + 1 >> 0] = 103;
 HEAP8[i11 + 2 >> 0] = 101;
 HEAP8[i11 + 3 >> 0] = 0;
 HEAP32[i5 + 32 >> 2] = 0;
 HEAP32[i5 + 36 >> 2] = 0;
 HEAP32[i5 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i5 + 4 >> 2] = i2;
 i1 = _inflateInit_(i5, 15722, 56) | 0;
 if (i1) {
  i12 = HEAP32[2496] | 0;
  HEAP32[i4 >> 2] = 14077;
  HEAP32[i4 + 4 >> 2] = i1;
  _fprintf(i12, 13978, i4) | 0;
  _exit(1);
 }
 HEAP32[i5 + 12 >> 2] = i6;
 HEAP32[i5 + 16 >> 2] = i3;
 i2 = i5 + 48 | 0;
 L4 : while (1) {
  i1 = _inflate(i5, 0) | 0;
  switch (i1 | 0) {
  case 1:
   {
    i2 = 10;
    break L4;
   }
  case 2:
   {
    if ((HEAP32[i2 >> 2] | 0) != (HEAP32[4588] | 0)) {
     i2 = 6;
     break L4;
    }
    i1 = _inflateSetDictionary(i5, 13972, 6) | 0;
    break;
   }
  default:
   {}
  }
  if (i1) {
   i2 = 9;
   break;
  }
 }
 if ((i2 | 0) == 6) {
  _fwrite(14325, 21, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 } else if ((i2 | 0) == 9) {
  i12 = HEAP32[2496] | 0;
  HEAP32[i8 >> 2] = 14347;
  HEAP32[i8 + 4 >> 2] = i1;
  _fprintf(i12, 13978, i8) | 0;
  _exit(1);
 } else if ((i2 | 0) == 10) {
  i1 = _inflateEnd(i5) | 0;
  if (i1) {
   i12 = HEAP32[2496] | 0;
   HEAP32[i9 >> 2] = 14097;
   HEAP32[i9 + 4 >> 2] = i1;
   _fprintf(i12, 13978, i9) | 0;
   _exit(1);
  }
  if (!(_strcmp(i6, 13958) | 0)) {
   HEAP32[i7 >> 2] = i6;
   _printf(14388, i7) | 0;
   STACKTOP = i10;
   return;
  } else {
   _fwrite(14365, 22, 1, HEAP32[2496] | 0) | 0;
   _exit(1);
  }
 }
}

function _test_inflate(i1, i6, i11, i7) {
 i1 = i1 | 0;
 i6 = i6 | 0;
 i11 = i11 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i12 = i14 + 24 | 0;
 i13 = i14 + 16 | 0;
 i9 = i14 + 8 | 0;
 i2 = i14;
 i8 = i14 + 32 | 0;
 i5 = i11;
 i4 = i5;
 HEAP8[i4 >> 0] = 103;
 HEAP8[i4 + 1 >> 0] = 97;
 HEAP8[i4 + 2 >> 0] = 114;
 HEAP8[i4 + 3 >> 0] = 98;
 i5 = i5 + 4 | 0;
 HEAP8[i5 >> 0] = 97;
 HEAP8[i5 + 1 >> 0] = 103;
 HEAP8[i5 + 2 >> 0] = 101;
 HEAP8[i5 + 3 >> 0] = 0;
 HEAP32[i8 + 32 >> 2] = 0;
 HEAP32[i8 + 36 >> 2] = 0;
 HEAP32[i8 + 40 >> 2] = 0;
 HEAP32[i8 >> 2] = i1;
 i5 = i8 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i11;
 i1 = _inflateInit_(i8, 15722, 56) | 0;
 if (i1) {
  i4 = HEAP32[2496] | 0;
  HEAP32[i2 >> 2] = 14077;
  HEAP32[i2 + 4 >> 2] = i1;
  _fprintf(i4, 13978, i2) | 0;
  _exit(1);
 }
 i2 = i8 + 20 | 0;
 i3 = i8 + 8 | 0;
 i4 = i8 + 16 | 0;
 L4 : while (1) {
  if (!((HEAP32[i2 >> 2] | 0) >>> 0 < i7 >>> 0 ? (HEAP32[i3 >> 2] | 0) >>> 0 < i6 >>> 0 : 0)) break;
  HEAP32[i4 >> 2] = 1;
  HEAP32[i5 >> 2] = 1;
  i1 = _inflate(i8, 0) | 0;
  switch (i1 | 0) {
  case 0:
   break;
  case 1:
   break L4;
  default:
   {
    i10 = 6;
    break L4;
   }
  }
 }
 if ((i10 | 0) == 6) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i9 >> 2] = 14089;
  HEAP32[i9 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i9) | 0;
  _exit(1);
 }
 i1 = _inflateEnd(i8) | 0;
 if (i1) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i13 >> 2] = 14097;
  HEAP32[i13 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i13) | 0;
  _exit(1);
 }
 if (!(_strcmp(i11, 13958) | 0)) {
  HEAP32[i12 >> 2] = i11;
  _printf(14121, i12) | 0;
  STACKTOP = i14;
  return;
 } else {
  _fwrite(14108, 12, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
}

function _test_large_deflate(i3, i4, i6, i7) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i11 = i12 + 32 | 0;
 i10 = i12 + 24 | 0;
 i8 = i12 + 16 | 0;
 i5 = i12 + 8 | 0;
 i2 = i12;
 i9 = i12 + 40 | 0;
 HEAP32[i9 + 32 >> 2] = 0;
 HEAP32[i9 + 36 >> 2] = 0;
 HEAP32[i9 + 40 >> 2] = 0;
 i1 = _deflateInit_(i9, 1, 15722, 56) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i2 >> 2] = 14046;
  HEAP32[i2 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i2) | 0;
  _exit(1);
 }
 HEAP32[i9 + 12 >> 2] = i3;
 HEAP32[i9 + 16 >> 2] = i4;
 HEAP32[i9 >> 2] = i6;
 i2 = i9 + 4 | 0;
 HEAP32[i2 >> 2] = i7;
 i1 = _deflate(i9, 0) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i5 >> 2] = 14058;
  HEAP32[i5 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i5) | 0;
  _exit(1);
 }
 if (HEAP32[i2 >> 2] | 0) {
  _fwrite(14136, 19, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
 _deflateParams(i9, 0, 0) | 0;
 HEAP32[i9 >> 2] = i3;
 HEAP32[i2 >> 2] = i4 >>> 1;
 i1 = _deflate(i9, 0) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i8 >> 2] = 14058;
  HEAP32[i8 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i8) | 0;
  _exit(1);
 }
 _deflateParams(i9, 9, 1) | 0;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i2 >> 2] = i7;
 i1 = _deflate(i9, 0) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i10 >> 2] = 14058;
  HEAP32[i10 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i10) | 0;
  _exit(1);
 }
 if ((_deflate(i9, 4) | 0) != 1) {
  _fwrite(14156, 35, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
 i1 = _deflateEnd(i9) | 0;
 if (!i1) {
  STACKTOP = i12;
  return;
 } else {
  i13 = HEAP32[2496] | 0;
  HEAP32[i11 >> 2] = 14066;
  HEAP32[i11 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i11) | 0;
  _exit(1);
 }
}

function _deflateSetDictionary(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 L1 : do if ((i3 | 0) != 0 ? (i11 = HEAP32[i3 + 28 >> 2] | 0, !((i2 | 0) == 0 | (i11 | 0) == 0)) : 0) {
  switch (HEAP32[i11 + 24 >> 2] | 0) {
  case 2:
   {
    i1 = -2;
    break L1;
   }
  case 1:
   {
    if ((HEAP32[i11 + 4 >> 2] | 0) == 42) i4 = 5; else {
     i1 = -2;
     break L1;
    }
    break;
   }
  case 0:
   break;
  default:
   i4 = 5;
  }
  if ((i4 | 0) == 5) {
   i10 = i3 + 48 | 0;
   HEAP32[i10 >> 2] = _adler32(HEAP32[i10 >> 2] | 0, i2, i1) | 0;
  }
  if (i1 >>> 0 < 3) i1 = 0; else {
   i5 = HEAP32[i11 + 44 >> 2] | 0;
   i6 = i5 >>> 0 < i1 >>> 0;
   i8 = i6 ? i5 : i1;
   i4 = i11 + 56 | 0;
   _memcpy(HEAP32[i4 >> 2] | 0, (i6 ? i2 + (i1 - i5) | 0 : i2) | 0, i8 | 0) | 0;
   HEAP32[i11 + 108 >> 2] = i8;
   HEAP32[i11 + 92 >> 2] = i8;
   i4 = HEAP32[i4 >> 2] | 0;
   i2 = HEAPU8[i4 >> 0] | 0;
   i5 = i11 + 72 | 0;
   HEAP32[i5 >> 2] = i2;
   i6 = HEAP32[i11 + 88 >> 2] | 0;
   i7 = HEAP32[i11 + 84 >> 2] | 0;
   i2 = ((HEAPU8[i4 + 1 >> 0] | 0) ^ i2 << i6) & i7;
   HEAP32[i5 >> 2] = i2;
   i8 = i8 + -3 | 0;
   i9 = i11 + 68 | 0;
   i10 = i11 + 52 | 0;
   i1 = i11 + 64 | 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 > i8 >>> 0) {
     i1 = 0;
     break L1;
    }
    i11 = ((HEAPU8[i4 + (i3 + 2) >> 0] | 0) ^ i2 << i6) & i7;
    HEAP32[i5 >> 2] = i11;
    i12 = (HEAP32[i9 >> 2] | 0) + (i11 << 1) | 0;
    HEAP16[(HEAP32[i1 >> 2] | 0) + ((HEAP32[i10 >> 2] & i3) << 1) >> 1] = HEAP16[i12 >> 1] | 0;
    HEAP16[i12 >> 1] = i3;
    i2 = i11;
    i3 = i3 + 1 | 0;
   }
  }
 } else i1 = -2; while (0);
 return i1 | 0;
}

function _test_large_inflate(i1, i9, i4, i10) {
 i1 = i1 | 0;
 i9 = i9 | 0;
 i4 = i4 | 0;
 i10 = i10 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i11 = 0, i12 = 0, i13 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i11 = i12 + 24 | 0;
 i8 = i12 + 16 | 0;
 i5 = i12 + 8 | 0;
 i2 = i12;
 i7 = i12 + 32 | 0;
 i3 = i4;
 i13 = i3;
 HEAP8[i13 >> 0] = 103;
 HEAP8[i13 + 1 >> 0] = 97;
 HEAP8[i13 + 2 >> 0] = 114;
 HEAP8[i13 + 3 >> 0] = 98;
 i3 = i3 + 4 | 0;
 HEAP8[i3 >> 0] = 97;
 HEAP8[i3 + 1 >> 0] = 103;
 HEAP8[i3 + 2 >> 0] = 101;
 HEAP8[i3 + 3 >> 0] = 0;
 HEAP32[i7 + 32 >> 2] = 0;
 HEAP32[i7 + 36 >> 2] = 0;
 HEAP32[i7 + 40 >> 2] = 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i9;
 i1 = _inflateInit_(i7, 15722, 56) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i2 >> 2] = 14077;
  HEAP32[i2 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i2) | 0;
  _exit(1);
 }
 i2 = i7 + 12 | 0;
 i3 = i7 + 16 | 0;
 L4 : while (1) {
  HEAP32[i2 >> 2] = i4;
  HEAP32[i3 >> 2] = i10;
  i1 = _inflate(i7, 0) | 0;
  switch (i1 | 0) {
  case 0:
   break;
  case 1:
   break L4;
  default:
   {
    i6 = 5;
    break L4;
   }
  }
 }
 if ((i6 | 0) == 5) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i5 >> 2] = 14192;
  HEAP32[i5 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i5) | 0;
  _exit(1);
 }
 i1 = _inflateEnd(i7) | 0;
 if (i1) {
  i13 = HEAP32[2496] | 0;
  HEAP32[i8 >> 2] = 14097;
  HEAP32[i8 + 4 >> 2] = i1;
  _fprintf(i13, 13978, i8) | 0;
  _exit(1);
 }
 i1 = HEAP32[i7 + 20 >> 2] | 0;
 if ((i1 | 0) == ((i10 << 1) + (i9 >>> 1) | 0)) {
  _puts(14520) | 0;
  STACKTOP = i12;
  return;
 } else {
  i13 = HEAP32[2496] | 0;
  HEAP32[i11 >> 2] = i1;
  _fprintf(i13, 14206, i11) | 0;
  _exit(1);
 }
}

function _inflateSync(i11) {
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i12;
 do if ((i11 | 0) != 0 ? (i10 = HEAP32[i11 + 28 >> 2] | 0, (i10 | 0) != 0) : 0) {
  i9 = i11 + 4 | 0;
  i1 = HEAP32[i9 >> 2] | 0;
  if ((i1 | 0) == 0 ? (HEAP32[i10 + 60 >> 2] | 0) >>> 0 < 8 : 0) {
   i1 = -5;
   break;
  }
  if ((HEAP32[i10 >> 2] | 0) == 31) i3 = i10 + 104 | 0; else {
   HEAP32[i10 >> 2] = 31;
   i1 = i10 + 60 | 0;
   i4 = HEAP32[i1 >> 2] | 0;
   i2 = i10 + 56 | 0;
   i6 = HEAP32[i2 >> 2] << (i4 & 7);
   HEAP32[i2 >> 2] = i6;
   i3 = i4 & -8;
   i4 = (i4 | 7) ^ -8;
   i4 = ((i4 >>> 0 > 4294967288 ? i4 : -8) + i3 + 8 | 0) >>> 3;
   i5 = i4 << 3;
   i7 = 0;
   while (1) {
    if ((i7 | 0) == (i4 | 0)) break;
    HEAP8[i8 + i7 >> 0] = i6;
    i13 = i6 >>> 8;
    HEAP32[i2 >> 2] = i13;
    i6 = i13;
    i7 = i7 + 1 | 0;
   }
   HEAP32[i1 >> 2] = i3 - i5;
   i3 = i10 + 104 | 0;
   HEAP32[i3 >> 2] = 0;
   _syncsearch(i3, i8, i4) | 0;
   i1 = HEAP32[i9 >> 2] | 0;
  }
  i2 = _syncsearch(i3, HEAP32[i11 >> 2] | 0, i1) | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i2;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i2;
  i1 = i11 + 8 | 0;
  i2 = (HEAP32[i1 >> 2] | 0) + i2 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((HEAP32[i3 >> 2] | 0) == 4) {
   i13 = i11 + 20 | 0;
   i9 = HEAP32[i13 >> 2] | 0;
   _inflateReset(i11) | 0;
   HEAP32[i1 >> 2] = i2;
   HEAP32[i13 >> 2] = i9;
   HEAP32[i10 >> 2] = 11;
   i1 = 0;
  } else i1 = -3;
 } else i1 = -2; while (0);
 STACKTOP = i12;
 return i1 | 0;
}

function _test_deflate(i2, i6) {
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i11 = i12 + 24 | 0;
 i9 = i12 + 16 | 0;
 i7 = i12 + 8 | 0;
 i3 = i12;
 i8 = i12 + 32 | 0;
 HEAP32[i8 + 32 >> 2] = 0;
 HEAP32[i8 + 36 >> 2] = 0;
 HEAP32[i8 + 40 >> 2] = 0;
 i1 = _deflateInit_(i8, -1, 15722, 56) | 0;
 if (i1) {
  i5 = HEAP32[2496] | 0;
  HEAP32[i3 >> 2] = 14046;
  HEAP32[i3 + 4 >> 2] = i1;
  _fprintf(i5, 13978, i3) | 0;
  _exit(1);
 }
 HEAP32[i8 >> 2] = 13958;
 HEAP32[i8 + 12 >> 2] = i2;
 i3 = i8 + 8 | 0;
 i4 = i8 + 20 | 0;
 i5 = i8 + 16 | 0;
 i2 = i8 + 4 | 0;
 while (1) {
  if (!((HEAP32[i3 >> 2] | 0) != 14 ? (HEAP32[i4 >> 2] | 0) >>> 0 < i6 >>> 0 : 0)) break;
  HEAP32[i5 >> 2] = 1;
  HEAP32[i2 >> 2] = 1;
  i1 = _deflate(i8, 0) | 0;
  if (i1) {
   i10 = 6;
   break;
  }
 }
 if ((i10 | 0) == 6) {
  i6 = HEAP32[2496] | 0;
  HEAP32[i7 >> 2] = 14058;
  HEAP32[i7 + 4 >> 2] = i1;
  _fprintf(i6, 13978, i7) | 0;
  _exit(1);
 }
 L9 : while (1) {
  HEAP32[i5 >> 2] = 1;
  i1 = _deflate(i8, 4) | 0;
  switch (i1 | 0) {
  case 0:
   break;
  case 1:
   break L9;
  default:
   {
    i10 = 8;
    break L9;
   }
  }
 }
 if ((i10 | 0) == 8) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i9 >> 2] = 14058;
  HEAP32[i9 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i9) | 0;
  _exit(1);
 }
 i1 = _deflateEnd(i8) | 0;
 if (!i1) {
  STACKTOP = i12;
  return;
 } else {
  i12 = HEAP32[2496] | 0;
  HEAP32[i11 >> 2] = 14066;
  HEAP32[i11 + 4 >> 2] = i1;
  _fprintf(i12, 13978, i11) | 0;
  _exit(1);
 }
}

function _updatewindow(i6, i3) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = HEAP32[i6 + 28 >> 2] | 0;
 i8 = i7 + 52 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if (!i1) {
  i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 32 >> 2] & 7](HEAP32[i6 + 40 >> 2] | 0, 1 << HEAP32[i7 + 36 >> 2], 1) | 0;
  HEAP32[i8 >> 2] = i1;
  if (!i1) i1 = 1; else i2 = 3;
 } else i2 = 3;
 do if ((i2 | 0) == 3) {
  i4 = i7 + 40 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if (!i2) {
   i2 = 1 << HEAP32[i7 + 36 >> 2];
   HEAP32[i4 >> 2] = i2;
   HEAP32[i7 + 48 >> 2] = 0;
   HEAP32[i7 + 44 >> 2] = 0;
  }
  i5 = i3 - (HEAP32[i6 + 16 >> 2] | 0) | 0;
  if (i5 >>> 0 >= i2 >>> 0) {
   _memcpy(i1 | 0, (HEAP32[i6 + 12 >> 2] | 0) + (0 - i2) | 0, i2 | 0) | 0;
   HEAP32[i7 + 48 >> 2] = 0;
   HEAP32[i7 + 44 >> 2] = HEAP32[i4 >> 2];
   i1 = 0;
   break;
  }
  i3 = i7 + 48 | 0;
  i10 = HEAP32[i3 >> 2] | 0;
  i9 = i2 - i10 | 0;
  i9 = i9 >>> 0 > i5 >>> 0 ? i5 : i9;
  i2 = i6 + 12 | 0;
  _memcpy(i1 + i10 | 0, (HEAP32[i2 >> 2] | 0) + (0 - i5) | 0, i9 | 0) | 0;
  i1 = i5 - i9 | 0;
  if ((i5 | 0) != (i9 | 0)) {
   _memcpy(HEAP32[i8 >> 2] | 0, (HEAP32[i2 >> 2] | 0) + (0 - i1) | 0, i1 | 0) | 0;
   HEAP32[i3 >> 2] = i1;
   HEAP32[i7 + 44 >> 2] = HEAP32[i4 >> 2];
   i1 = 0;
   break;
  }
  i1 = (HEAP32[i3 >> 2] | 0) + i5 | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  HEAP32[i3 >> 2] = (i1 | 0) == (i10 | 0) ? 0 : i1;
  i1 = i7 + 44 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if (i2 >>> 0 < i10 >>> 0) {
   HEAP32[i1 >> 2] = i2 + i5;
   i1 = 0;
  } else i1 = 0;
 } while (0);
 return i1 | 0;
}

function _vfprintf(i15, i11, i1) {
 i15 = i15 | 0;
 i11 = i11 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i10 = i16 + 120 | 0;
 i14 = i16 + 80 | 0;
 i13 = i16;
 i12 = i16 + 136 | 0;
 i2 = i14;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
 if ((_printf_core(0, i11, i10, i13, i14) | 0) < 0) i1 = -1; else {
  if ((HEAP32[i15 + 76 >> 2] | 0) > -1) i8 = ___lockfile(i15) | 0; else i8 = 0;
  i1 = HEAP32[i15 >> 2] | 0;
  i9 = i1 & 32;
  if ((HEAP8[i15 + 74 >> 0] | 0) < 1) HEAP32[i15 >> 2] = i1 & -33;
  i1 = i15 + 48 | 0;
  if (!(HEAP32[i1 >> 2] | 0)) {
   i3 = i15 + 44 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i12;
   i5 = i15 + 28 | 0;
   HEAP32[i5 >> 2] = i12;
   i6 = i15 + 20 | 0;
   HEAP32[i6 >> 2] = i12;
   HEAP32[i1 >> 2] = 80;
   i7 = i15 + 16 | 0;
   HEAP32[i7 >> 2] = i12 + 80;
   i2 = _printf_core(i15, i11, i10, i13, i14) | 0;
   if (i4) {
    FUNCTION_TABLE_iiii[HEAP32[i15 + 36 >> 2] & 7](i15, 0, 0) | 0;
    i2 = (HEAP32[i6 >> 2] | 0) == 0 ? -1 : i2;
    HEAP32[i3 >> 2] = i4;
    HEAP32[i1 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
  } else i2 = _printf_core(i15, i11, i10, i13, i14) | 0;
  i1 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i1 | i9;
  if (i8) ___unlockfile(i15);
  i1 = (i1 & 32 | 0) == 0 ? i2 : -1;
 }
 STACKTOP = i16;
 return i1 | 0;
}

function __tr_stored_block(i8, i2, i1, i3) {
 i8 = i8 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0;
 i7 = i8 + 5820 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i3 = i3 & 65535;
 i4 = i8 + 5816 | 0;
 i5 = HEAPU16[i4 >> 1] | 0 | i3 << i6;
 HEAP16[i4 >> 1] = i5;
 if ((i6 | 0) > 13) {
  i9 = i8 + 20 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i6 + 1;
  i10 = i8 + 8 | 0;
  HEAP8[(HEAP32[i10 >> 2] | 0) + i6 >> 0] = i5;
  i5 = (HEAPU16[i4 >> 1] | 0) >>> 8 & 255;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i6 + 1;
  HEAP8[(HEAP32[i10 >> 2] | 0) + i6 >> 0] = i5;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP16[i4 >> 1] = i3 >>> (16 - i6 | 0);
  i4 = i10;
  i5 = i9;
  i3 = i6 + -13 | 0;
 } else {
  i4 = i8 + 8 | 0;
  i5 = i8 + 20 | 0;
  i3 = i6 + 3 | 0;
 }
 HEAP32[i7 >> 2] = i3;
 _bi_windup(i8);
 HEAP32[i8 + 5812 >> 2] = 8;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i9 + 1;
 HEAP8[(HEAP32[i4 >> 2] | 0) + i9 >> 0] = i1;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i9 + 1;
 HEAP8[(HEAP32[i4 >> 2] | 0) + i9 >> 0] = i1 >>> 8;
 i9 = i1 & 65535 ^ 65535;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i10 + 1;
 HEAP8[(HEAP32[i4 >> 2] | 0) + i10 >> 0] = i9;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i10 + 1;
 HEAP8[(HEAP32[i4 >> 2] | 0) + i10 >> 0] = i9 >>> 8;
 while (1) {
  if (!i1) break;
  i9 = HEAP8[i2 >> 0] | 0;
  i10 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i10 + 1;
  HEAP8[(HEAP32[i4 >> 2] | 0) + i10 >> 0] = i9;
  i2 = i2 + 1 | 0;
  i1 = i1 + -1 | 0;
 }
 return;
}

function _deflateReset(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 if ((((i4 | 0) != 0 ? (i3 = HEAP32[i4 + 28 >> 2] | 0, (i3 | 0) != 0) : 0) ? (HEAP32[i4 + 32 >> 2] | 0) != 0 : 0) ? (HEAP32[i4 + 36 >> 2] | 0) != 0 : 0) {
  HEAP32[i4 + 20 >> 2] = 0;
  HEAP32[i4 + 8 >> 2] = 0;
  HEAP32[i4 + 24 >> 2] = 0;
  HEAP32[i4 + 44 >> 2] = 2;
  HEAP32[i3 + 20 >> 2] = 0;
  HEAP32[i3 + 16 >> 2] = HEAP32[i3 + 8 >> 2];
  i2 = i3 + 24 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) < 0) {
   i1 = 0 - i1 | 0;
   HEAP32[i2 >> 2] = i1;
  }
  HEAP32[i3 + 4 >> 2] = (i1 | 0) != 0 ? 42 : 113;
  if ((i1 | 0) == 2) i1 = _crc32(0, 0, 0) | 0; else i1 = _adler32(0, 0, 0) | 0;
  HEAP32[i4 + 48 >> 2] = i1;
  HEAP32[i3 + 40 >> 2] = 0;
  __tr_init(i3);
  HEAP32[i3 + 60 >> 2] = HEAP32[i3 + 44 >> 2] << 1;
  i1 = HEAP32[i3 + 76 >> 2] | 0;
  i4 = HEAP32[i3 + 68 >> 2] | 0;
  HEAP16[i4 + (i1 + -1 << 1) >> 1] = 0;
  _memset(i4 | 0, 0, (i1 << 1) + -2 | 0) | 0;
  i1 = HEAP32[i3 + 132 >> 2] | 0;
  HEAP32[i3 + 128 >> 2] = HEAPU16[1024 + (i1 * 12 | 0) + 2 >> 1];
  HEAP32[i3 + 140 >> 2] = HEAPU16[1024 + (i1 * 12 | 0) >> 1];
  HEAP32[i3 + 144 >> 2] = HEAPU16[1024 + (i1 * 12 | 0) + 4 >> 1];
  HEAP32[i3 + 124 >> 2] = HEAPU16[1024 + (i1 * 12 | 0) + 6 >> 1];
  HEAP32[i3 + 108 >> 2] = 0;
  HEAP32[i3 + 92 >> 2] = 0;
  HEAP32[i3 + 116 >> 2] = 0;
  HEAP32[i3 + 120 >> 2] = 2;
  HEAP32[i3 + 96 >> 2] = 2;
  HEAP32[i3 + 112 >> 2] = 0;
  HEAP32[i3 + 104 >> 2] = 0;
  HEAP32[i3 + 72 >> 2] = 0;
  i1 = 0;
 } else i1 = -2;
 return i1 | 0;
}

function _test_sync(i1, i3, i8, i4) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i8 = i8 | 0;
 i4 = i4 | 0;
 var i2 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i9 = i11 + 24 | 0;
 i10 = i11 + 16 | 0;
 i7 = i11 + 8 | 0;
 i5 = i11;
 i6 = i11 + 32 | 0;
 i2 = i8;
 i12 = i2;
 HEAP8[i12 >> 0] = 103;
 HEAP8[i12 + 1 >> 0] = 97;
 HEAP8[i12 + 2 >> 0] = 114;
 HEAP8[i12 + 3 >> 0] = 98;
 i2 = i2 + 4 | 0;
 HEAP8[i2 >> 0] = 97;
 HEAP8[i2 + 1 >> 0] = 103;
 HEAP8[i2 + 2 >> 0] = 101;
 HEAP8[i2 + 3 >> 0] = 0;
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = 0;
 HEAP32[i6 >> 2] = i1;
 i1 = i6 + 4 | 0;
 HEAP32[i1 >> 2] = 2;
 i2 = _inflateInit_(i6, 15722, 56) | 0;
 if (i2) {
  i12 = HEAP32[2496] | 0;
  HEAP32[i5 >> 2] = 14077;
  HEAP32[i5 + 4 >> 2] = i2;
  _fprintf(i12, 13978, i5) | 0;
  _exit(1);
 }
 HEAP32[i6 + 12 >> 2] = i8;
 HEAP32[i6 + 16 >> 2] = i4;
 _inflate(i6, 0) | 0;
 HEAP32[i1 >> 2] = i3 + -2;
 i1 = _inflateSync(i6) | 0;
 if (i1) {
  i12 = HEAP32[2496] | 0;
  HEAP32[i7 >> 2] = 14230;
  HEAP32[i7 + 4 >> 2] = i1;
  _fprintf(i12, 13978, i7) | 0;
  _exit(1);
 }
 if ((_inflate(i6, 4) | 0) != -3) {
  _fwrite(14242, 33, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
 i1 = _inflateEnd(i6) | 0;
 if (!i1) {
  HEAP32[i9 >> 2] = i8;
  _printf(14276, i9) | 0;
  STACKTOP = i11;
  return;
 } else {
  i12 = HEAP32[2496] | 0;
  HEAP32[i10 >> 2] = 14097;
  HEAP32[i10 + 4 >> 2] = i1;
  _fprintf(i12, 13978, i10) | 0;
  _exit(1);
 }
}

function _scan_tree(i14, i15, i10) {
 i14 = i14 | 0;
 i15 = i15 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0, i13 = 0;
 i12 = HEAP16[i15 + 2 >> 1] | 0;
 i11 = i12 << 16 >> 16 == 0;
 HEAP16[i15 + (i10 + 1 << 2) + 2 >> 1] = -1;
 i7 = i14 + 2752 | 0;
 i8 = i14 + 2756 | 0;
 i9 = i14 + 2748 | 0;
 i6 = i11 ? 138 : 7;
 i11 = i11 ? 3 : 4;
 i1 = 0;
 i12 = i12 & 65535;
 i13 = -1;
 L1 : while (1) {
  i2 = 0;
  do {
   if ((i1 | 0) > (i10 | 0)) break L1;
   i1 = i1 + 1 | 0;
   i4 = HEAP16[i15 + (i1 << 2) + 2 >> 1] | 0;
   i5 = i4 & 65535;
   i2 = i2 + 1 | 0;
   i3 = (i12 | 0) == (i5 | 0);
  } while ((i2 | 0) < (i6 | 0) & i3);
  do if ((i2 | 0) >= (i11 | 0)) if (!i12) if ((i2 | 0) < 11) {
   HEAP16[i7 >> 1] = (HEAP16[i7 >> 1] | 0) + 1 << 16 >> 16;
   break;
  } else {
   HEAP16[i8 >> 1] = (HEAP16[i8 >> 1] | 0) + 1 << 16 >> 16;
   break;
  } else {
   if ((i12 | 0) != (i13 | 0)) {
    i13 = i14 + 2684 + (i12 << 2) | 0;
    HEAP16[i13 >> 1] = (HEAP16[i13 >> 1] | 0) + 1 << 16 >> 16;
   }
   HEAP16[i9 >> 1] = (HEAP16[i9 >> 1] | 0) + 1 << 16 >> 16;
   break;
  } else {
   i13 = i14 + 2684 + (i12 << 2) | 0;
   HEAP16[i13 >> 1] = (HEAPU16[i13 >> 1] | 0) + i2;
  } while (0);
  i11 = i4 << 16 >> 16 == 0;
  i13 = i12;
  i6 = i11 ? 138 : i3 ? 6 : 7;
  i11 = i11 | i3 ? 3 : 4;
  i12 = i5;
 }
 return;
}

function _test_flush(i3, i7) {
 i3 = i3 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i8 = i9 + 24 | 0;
 i5 = i9 + 16 | 0;
 i4 = i9 + 8 | 0;
 i2 = i9;
 i6 = i9 + 32 | 0;
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = 0;
 i1 = _deflateInit_(i6, -1, 15722, 56) | 0;
 if (i1) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i2 >> 2] = 14046;
  HEAP32[i2 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i2) | 0;
  _exit(1);
 }
 HEAP32[i6 >> 2] = 13958;
 HEAP32[i6 + 12 >> 2] = i3;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = 3;
 HEAP32[i6 + 16 >> 2] = HEAP32[i7 >> 2];
 i1 = _deflate(i6, 3) | 0;
 if (i1) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i4 >> 2] = 14058;
  HEAP32[i4 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i4) | 0;
  _exit(1);
 }
 i1 = i3 + 3 | 0;
 HEAP8[i1 >> 0] = (HEAP8[i1 >> 0] | 0) + 1 << 24 >> 24;
 HEAP32[i2 >> 2] = 11;
 i1 = _deflate(i6, 4) | 0;
 if (i1 >>> 0 > 1) {
  i10 = HEAP32[2496] | 0;
  HEAP32[i5 >> 2] = 14058;
  HEAP32[i5 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i5) | 0;
  _exit(1);
 }
 i1 = _deflateEnd(i6) | 0;
 if (!i1) {
  HEAP32[i7 >> 2] = HEAP32[i6 + 20 >> 2];
  STACKTOP = i9;
  return;
 } else {
  i10 = HEAP32[2496] | 0;
  HEAP32[i8 >> 2] = 14066;
  HEAP32[i8 + 4 >> 2] = i1;
  _fprintf(i10, 13978, i8) | 0;
  _exit(1);
 }
}

function _deflateEnd(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 L1 : do if ((i4 | 0) != 0 ? (i5 = i4 + 28 | 0, i1 = HEAP32[i5 >> 2] | 0, (i1 | 0) != 0) : 0) {
  i6 = HEAP32[i1 + 4 >> 2] | 0;
  switch (i6 | 0) {
  case 42:
  case 69:
  case 73:
  case 91:
  case 103:
  case 113:
  case 666:
   break;
  default:
   {
    i1 = -2;
    break L1;
   }
  }
  i2 = HEAP32[i1 + 8 >> 2] | 0;
  if (i2) {
   FUNCTION_TABLE_vii[HEAP32[i4 + 36 >> 2] & 1](HEAP32[i4 + 40 >> 2] | 0, i2);
   i1 = HEAP32[i5 >> 2] | 0;
  }
  i2 = HEAP32[i1 + 68 >> 2] | 0;
  if (i2) {
   FUNCTION_TABLE_vii[HEAP32[i4 + 36 >> 2] & 1](HEAP32[i4 + 40 >> 2] | 0, i2);
   i1 = HEAP32[i5 >> 2] | 0;
  }
  i2 = HEAP32[i1 + 64 >> 2] | 0;
  if (i2) {
   FUNCTION_TABLE_vii[HEAP32[i4 + 36 >> 2] & 1](HEAP32[i4 + 40 >> 2] | 0, i2);
   i1 = HEAP32[i5 >> 2] | 0;
  }
  i2 = HEAP32[i1 + 56 >> 2] | 0;
  if (!i2) {
   i3 = i4 + 40 | 0;
   i2 = i4 + 36 | 0;
  } else {
   i1 = i4 + 36 | 0;
   i3 = i4 + 40 | 0;
   FUNCTION_TABLE_vii[HEAP32[i1 >> 2] & 1](HEAP32[i3 >> 2] | 0, i2);
   i2 = i1;
   i1 = HEAP32[i5 >> 2] | 0;
  }
  FUNCTION_TABLE_vii[HEAP32[i2 >> 2] & 1](HEAP32[i3 >> 2] | 0, i1);
  HEAP32[i5 >> 2] = 0;
  i1 = (i6 | 0) == 113 ? -3 : 0;
 } else i1 = -2; while (0);
 return i1 | 0;
}

function _pqdownheap(i13, i11, i1) {
 i13 = i13 | 0;
 i11 = i11 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0;
 i12 = HEAP32[i13 + 2908 + (i1 << 2) >> 2] | 0;
 i8 = i13 + 5208 + i12 | 0;
 i9 = i13 + 5200 | 0;
 i10 = i11 + (i12 << 2) | 0;
 while (1) {
  i7 = i1 << 1;
  i2 = HEAP32[i9 >> 2] | 0;
  if ((i7 | 0) > (i2 | 0)) break;
  do if ((i7 | 0) < (i2 | 0)) {
   i5 = i7 | 1;
   i2 = HEAP32[i13 + 2908 + (i5 << 2) >> 2] | 0;
   i3 = HEAP16[i11 + (i2 << 2) >> 1] | 0;
   i4 = HEAP32[i13 + 2908 + (i7 << 2) >> 2] | 0;
   i6 = HEAP16[i11 + (i4 << 2) >> 1] | 0;
   if ((i3 & 65535) >= (i6 & 65535)) {
    if (i3 << 16 >> 16 != i6 << 16 >> 16) {
     i5 = i7;
     break;
    }
    if ((HEAPU8[i13 + 5208 + i2 >> 0] | 0) > (HEAPU8[i13 + 5208 + i4 >> 0] | 0)) {
     i5 = i7;
     break;
    }
   }
  } else i5 = i7; while (0);
  i2 = HEAP16[i10 >> 1] | 0;
  i3 = HEAP32[i13 + 2908 + (i5 << 2) >> 2] | 0;
  i4 = HEAP16[i11 + (i3 << 2) >> 1] | 0;
  if ((i2 & 65535) < (i4 & 65535)) break;
  if (i2 << 16 >> 16 == i4 << 16 >> 16 ? (HEAPU8[i8 >> 0] | 0) <= (HEAPU8[i13 + 5208 + i3 >> 0] | 0) : 0) break;
  HEAP32[i13 + 2908 + (i1 << 2) >> 2] = i3;
  i1 = i5;
 }
 HEAP32[i13 + 2908 + (i1 << 2) >> 2] = i12;
 return;
}

function _memchr(i1, i5, i2) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i6 = i5 & 255;
 i3 = (i2 | 0) != 0;
 L1 : do if (i3 & (i1 & 3 | 0) != 0) {
  i4 = i5 & 255;
  while (1) {
   if ((HEAP8[i1 >> 0] | 0) == i4 << 24 >> 24) {
    i7 = 6;
    break L1;
   }
   i1 = i1 + 1 | 0;
   i2 = i2 + -1 | 0;
   i3 = (i2 | 0) != 0;
   if (!(i3 & (i1 & 3 | 0) != 0)) {
    i7 = 5;
    break;
   }
  }
 } else i7 = 5; while (0);
 if ((i7 | 0) == 5) if (i3) i7 = 6; else i2 = 0;
 L8 : do if ((i7 | 0) == 6) {
  i4 = i5 & 255;
  if ((HEAP8[i1 >> 0] | 0) != i4 << 24 >> 24) {
   i3 = Math_imul(i6, 16843009) | 0;
   L11 : do if (i2 >>> 0 > 3) while (1) {
    i6 = HEAP32[i1 >> 2] ^ i3;
    if ((i6 & -2139062144 ^ -2139062144) & i6 + -16843009) break;
    i1 = i1 + 4 | 0;
    i2 = i2 + -4 | 0;
    if (i2 >>> 0 <= 3) {
     i7 = 11;
     break L11;
    }
   } else i7 = 11; while (0);
   if ((i7 | 0) == 11) if (!i2) {
    i2 = 0;
    break;
   }
   while (1) {
    if ((HEAP8[i1 >> 0] | 0) == i4 << 24 >> 24) break L8;
    i1 = i1 + 1 | 0;
    i2 = i2 + -1 | 0;
    if (!i2) {
     i2 = 0;
     break;
    }
   }
  }
 } while (0);
 return ((i2 | 0) != 0 ? i1 : 0) | 0;
}

function _test_dict_deflate(i4, i5) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i8 + 16 | 0;
 i6 = i8 + 8 | 0;
 i2 = i8;
 i3 = i8 + 24 | 0;
 HEAP32[i3 + 32 >> 2] = 0;
 HEAP32[i3 + 36 >> 2] = 0;
 HEAP32[i3 + 40 >> 2] = 0;
 i1 = _deflateInit_(i3, 9, 15722, 56) | 0;
 if (i1) {
  i9 = HEAP32[2496] | 0;
  HEAP32[i2 >> 2] = 14046;
  HEAP32[i2 + 4 >> 2] = i1;
  _fprintf(i9, 13978, i2) | 0;
  _exit(1);
 }
 i1 = _deflateSetDictionary(i3, 13972, 6) | 0;
 if (i1) {
  i9 = HEAP32[2496] | 0;
  HEAP32[i6 >> 2] = 14304;
  HEAP32[i6 + 4 >> 2] = i1;
  _fprintf(i9, 13978, i6) | 0;
  _exit(1);
 }
 HEAP32[4588] = HEAP32[i3 + 48 >> 2];
 HEAP32[i3 + 12 >> 2] = i4;
 HEAP32[i3 + 16 >> 2] = i5;
 HEAP32[i3 >> 2] = 13958;
 HEAP32[i3 + 4 >> 2] = 14;
 if ((_deflate(i3, 4) | 0) != 1) {
  _fwrite(14156, 35, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
 i1 = _deflateEnd(i3) | 0;
 if (!i1) {
  STACKTOP = i8;
  return;
 } else {
  i9 = HEAP32[2496] | 0;
  HEAP32[i7 >> 2] = 14066;
  HEAP32[i7 + 4 >> 2] = i1;
  _fprintf(i9, 13978, i7) | 0;
  _exit(1);
 }
}

function _test_compress(i5, i1, i7, i2) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i10 + 16 | 0;
 i8 = i10 + 8 | 0;
 i6 = i10;
 i3 = i10 + 24 | 0;
 i4 = i10 + 20 | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i4 >> 2] = i2;
 i1 = _compress(i5, i3, 13958, 14) | 0;
 if (i1) {
  i2 = HEAP32[2496] | 0;
  HEAP32[i6 >> 2] = 13992;
  HEAP32[i6 + 4 >> 2] = i1;
  _fprintf(i2, 13978, i6) | 0;
  _exit(1);
 }
 i1 = i7;
 i6 = i1;
 HEAP8[i6 >> 0] = 103;
 HEAP8[i6 + 1 >> 0] = 97;
 HEAP8[i6 + 2 >> 0] = 114;
 HEAP8[i6 + 3 >> 0] = 98;
 i1 = i1 + 4 | 0;
 HEAP8[i1 >> 0] = 97;
 HEAP8[i1 + 1 >> 0] = 103;
 HEAP8[i1 + 2 >> 0] = 101;
 HEAP8[i1 + 3 >> 0] = 0;
 i1 = _uncompress(i7, i4, i5, HEAP32[i3 >> 2] | 0) | 0;
 if (i1) {
  i6 = HEAP32[2496] | 0;
  HEAP32[i8 >> 2] = 14001;
  HEAP32[i8 + 4 >> 2] = i1;
  _fprintf(i6, 13978, i8) | 0;
  _exit(1);
 }
 if (!(_strcmp(i7, 13958) | 0)) {
  HEAP32[i9 >> 2] = i7;
  _printf(14028, i9) | 0;
  STACKTOP = i10;
  return;
 } else {
  _fwrite(14012, 15, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
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
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i3, i4) | 0;
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
   if ((FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i3, i1) | 0) >>> 0 < i1 >>> 0) break L5;
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

function _main(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = i4;
 i3 = i4 + 12 | 0;
 HEAP32[i3 >> 2] = 4e4;
 if ((HEAP8[(_zlibVersion() | 0) >> 0] | 0) != 49) {
  _fwrite(14417, 26, 1, HEAP32[2496] | 0) | 0;
  _exit(1);
 }
 if (_strcmp(_zlibVersion() | 0, 15722) | 0) _fwrite(14444, 32, 1, HEAP32[2496] | 0) | 0;
 i2 = _zlibCompileFlags() | 0;
 HEAP32[i1 >> 2] = 15722;
 HEAP32[i1 + 4 >> 2] = 4688;
 HEAP32[i1 + 8 >> 2] = i2;
 _printf(14477, i1) | 0;
 i2 = _calloc(4e4, 1) | 0;
 i1 = _calloc(4e4, 1) | 0;
 if ((i2 | 0) == 0 | (i1 | 0) == 0) {
  _puts(14540) | 0;
  _exit(1);
 } else {
  _test_compress(i2, 4e4, i1, 4e4);
  _test_deflate(i2, 4e4);
  _test_inflate(i2, 4e4, i1, 4e4);
  _test_large_deflate(i2, 4e4, i1, 4e4);
  _test_large_inflate(i2, 4e4, i1, 4e4);
  _test_flush(i2, i3);
  _test_sync(i2, HEAP32[i3 >> 2] | 0, i1, 4e4);
  _test_dict_deflate(i2, 4e4);
  _test_dict_inflate(i2, 4e4, i1, 4e4);
  _free(i2);
  _free(i1);
  STACKTOP = i4;
  return 0;
 }
 return 0;
}

function _inflateSetDictionary(i3, i5, i1) {
 i3 = i3 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i6 = 0;
 do if ((i3 | 0) != 0 ? (i6 = HEAP32[i3 + 28 >> 2] | 0, (i6 | 0) != 0) : 0) {
  i2 = (HEAP32[i6 >> 2] | 0) == 10;
  if (!(HEAP32[i6 + 8 >> 2] | 0)) {
   if (i2) i4 = 6;
  } else if (i2) i4 = 6; else {
   i1 = -2;
   break;
  }
  if ((i4 | 0) == 6 ? (i4 = _adler32(_adler32(0, 0, 0) | 0, i5, i1) | 0, (i4 | 0) != (HEAP32[i6 + 24 >> 2] | 0)) : 0) {
   i1 = -3;
   break;
  }
  if (_updatewindow(i3, HEAP32[i3 + 16 >> 2] | 0) | 0) {
   HEAP32[i6 >> 2] = 30;
   i1 = -4;
   break;
  }
  i2 = i6 + 40 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = HEAP32[i6 + 52 >> 2] | 0;
  if (i3 >>> 0 < i1 >>> 0) {
   _memcpy(i4 | 0, i5 + i1 + (0 - i3) | 0, i3 | 0) | 0;
   i1 = HEAP32[i2 >> 2] | 0;
  } else _memcpy(i4 + i3 + (0 - i1) | 0, i5 | 0, i1 | 0) | 0;
  HEAP32[i6 + 44 >> 2] = i1;
  HEAP32[i6 + 12 >> 2] = 1;
  i1 = 0;
 } else i1 = -2; while (0);
 return i1 | 0;
}

function _deflateParams(i4, i1, i7) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 if (((i4 | 0) != 0 ? (i6 = HEAP32[i4 + 28 >> 2] | 0, (i6 | 0) != 0) : 0) ? (i5 = (i1 | 0) == -1 ? 6 : i1, !(i7 >>> 0 > 4 | i5 >>> 0 > 9)) : 0) {
  i2 = i6 + 132 | 0;
  i3 = i6 + 136 | 0;
  if ((HEAP32[i3 >> 2] | 0) == (i7 | 0) ? (HEAP32[1024 + ((HEAP32[i2 >> 2] | 0) * 12 | 0) + 8 >> 2] | 0) == (HEAP32[1024 + (i5 * 12 | 0) + 8 >> 2] | 0) : 0) i1 = 0; else if (!(HEAP32[i4 + 8 >> 2] | 0)) i1 = 0; else i1 = _deflate(i4, 5) | 0;
  if ((HEAP32[i2 >> 2] | 0) != (i5 | 0)) {
   HEAP32[i2 >> 2] = i5;
   HEAP32[i6 + 128 >> 2] = HEAPU16[1024 + (i5 * 12 | 0) + 2 >> 1];
   HEAP32[i6 + 140 >> 2] = HEAPU16[1024 + (i5 * 12 | 0) >> 1];
   HEAP32[i6 + 144 >> 2] = HEAPU16[1024 + (i5 * 12 | 0) + 4 >> 1];
   HEAP32[i6 + 124 >> 2] = HEAPU16[1024 + (i5 * 12 | 0) + 6 >> 1];
  }
  HEAP32[i3 >> 2] = i7;
 } else i1 = -2;
 return i1 | 0;
}

function _bi_flush(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = i3 + 5820 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 16) {
  if ((i2 | 0) > 7) {
   i2 = i3 + 5816 | 0;
   i5 = HEAP16[i2 >> 1] & 255;
   i6 = i3 + 20 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i4 + 1;
   HEAP8[(HEAP32[i3 + 8 >> 2] | 0) + i4 >> 0] = i5;
   HEAP16[i2 >> 1] = (HEAPU16[i2 >> 1] | 0) >>> 8;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + -8;
  }
 } else {
  i6 = i3 + 5816 | 0;
  i7 = HEAP16[i6 >> 1] & 255;
  i2 = i3 + 20 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i5 + 1;
  i4 = i3 + 8 | 0;
  HEAP8[(HEAP32[i4 >> 2] | 0) + i5 >> 0] = i7;
  i3 = (HEAPU16[i6 >> 1] | 0) >>> 8 & 255;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i5 + 1;
  HEAP8[(HEAP32[i4 >> 2] | 0) + i5 >> 0] = i3;
  HEAP16[i6 >> 1] = 0;
  HEAP32[i1 >> 2] = 0;
 }
 return;
}

function _wcrtomb(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 do if (i1) {
  if (i3 >>> 0 < 128) {
   HEAP8[i1 >> 0] = i3;
   i1 = 1;
   break;
  }
  if (i3 >>> 0 < 2048) {
   HEAP8[i1 >> 0] = i3 >>> 6 | 192;
   HEAP8[i1 + 1 >> 0] = i3 & 63 | 128;
   i1 = 2;
   break;
  }
  if (i3 >>> 0 < 55296 | (i3 & -8192 | 0) == 57344) {
   HEAP8[i1 >> 0] = i3 >>> 12 | 224;
   HEAP8[i1 + 1 >> 0] = i3 >>> 6 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i3 & 63 | 128;
   i1 = 3;
   break;
  }
  if ((i3 + -65536 | 0) >>> 0 < 1048576) {
   HEAP8[i1 >> 0] = i3 >>> 18 | 240;
   HEAP8[i1 + 1 >> 0] = i3 >>> 12 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i3 >>> 6 & 63 | 128;
   HEAP8[i1 + 3 >> 0] = i3 & 63 | 128;
   i1 = 4;
   break;
  } else {
   HEAP32[(___errno_location() | 0) >> 2] = 84;
   i1 = -1;
   break;
  }
 } else i1 = 1; while (0);
 return i1 | 0;
}

function _inflateInit2_(i6, i7, i2, i1) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) != 0 ? !((i1 | 0) != 56 | (HEAP8[i2 >> 0] | 0) != 49) : 0) if (i6) {
  HEAP32[i6 + 24 >> 2] = 0;
  i1 = i6 + 32 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) {
   HEAP32[i1 >> 2] = 4;
   HEAP32[i6 + 40 >> 2] = 0;
   i2 = 4;
  }
  i4 = i6 + 36 | 0;
  if (!(HEAP32[i4 >> 2] | 0)) HEAP32[i4 >> 2] = 1;
  i5 = i6 + 40 | 0;
  i2 = FUNCTION_TABLE_iiii[i2 & 7](HEAP32[i5 >> 2] | 0, 1, 7116) | 0;
  if (i2) {
   i3 = i6 + 28 | 0;
   HEAP32[i3 >> 2] = i2;
   HEAP32[i2 + 52 >> 2] = 0;
   i1 = _inflateReset2(i6, i7) | 0;
   if (!i1) i1 = 0; else {
    FUNCTION_TABLE_vii[HEAP32[i4 >> 2] & 1](HEAP32[i5 >> 2] | 0, i2);
    HEAP32[i3 >> 2] = 0;
   }
  } else i1 = -4;
 } else i1 = -2; else i1 = -6;
 return i1 | 0;
}

function _uncompress(i2, i5, i1, i3) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i7;
 HEAP32[i6 >> 2] = i1;
 i4 = i6 + 4 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i6 + 12 >> 2] = i2;
 HEAP32[i6 + 16 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 i1 = _inflateInit_(i6, 15722, 56) | 0;
 L1 : do if (!i1) {
  i1 = _inflate(i6, 4) | 0;
  if ((i1 | 0) == 1) {
   HEAP32[i5 >> 2] = HEAP32[i6 + 20 >> 2];
   i1 = _inflateEnd(i6) | 0;
   break;
  }
  _inflateEnd(i6) | 0;
  switch (i1 | 0) {
  case 2:
   {
    i1 = -3;
    break L1;
   }
  case -5:
   {
    if (!(HEAP32[i4 >> 2] | 0)) {
     i1 = -3;
     break L1;
    }
    break;
   }
  default:
   {}
  }
 } while (0);
 STACKTOP = i7;
 return i1 | 0;
}

function _bi_windup(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i3 + 5820 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) <= 8) {
  i1 = i3 + 5816 | 0;
  if ((i2 | 0) > 0) {
   i5 = HEAP16[i1 >> 1] & 255;
   i6 = i3 + 20 | 0;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i3 + 8 >> 2] | 0) + i2 >> 0] = i5;
  }
 } else {
  i1 = i3 + 5816 | 0;
  i7 = HEAP16[i1 >> 1] & 255;
  i2 = i3 + 20 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6 + 1;
  i5 = i3 + 8 | 0;
  HEAP8[(HEAP32[i5 >> 2] | 0) + i6 >> 0] = i7;
  i3 = (HEAPU16[i1 >> 1] | 0) >>> 8 & 255;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6 + 1;
  HEAP8[(HEAP32[i5 >> 2] | 0) + i6 >> 0] = i3;
 }
 HEAP16[i1 >> 1] = 0;
 HEAP32[i4 >> 2] = 0;
 return;
}

function _flush_pending(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i2 = i7 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 i6 = i7 + 16 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i1 = i1 >>> 0 > i8 >>> 0 ? i8 : i1;
 if ((i1 | 0) != 0 ? (i4 = i7 + 12 | 0, _memcpy(HEAP32[i4 >> 2] | 0, HEAP32[i3 + 16 >> 2] | 0, i1 | 0) | 0, HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i1, i4 = HEAP32[i2 >> 2] | 0, i5 = i4 + 16 | 0, HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i1, i7 = i7 + 20 | 0, HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i1, HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - i1, i7 = i4 + 20 | 0, i8 = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = i8 - i1, (i8 | 0) == (i1 | 0)) : 0) HEAP32[i5 >> 2] = HEAP32[i4 + 8 >> 2];
 return;
}

function _inflateReset(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if ((i2 | 0) != 0 ? (i1 = HEAP32[i2 + 28 >> 2] | 0, (i1 | 0) != 0) : 0) {
  HEAP32[i1 + 28 >> 2] = 0;
  HEAP32[i2 + 20 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 24 >> 2] = 0;
  HEAP32[i2 + 48 >> 2] = 1;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 32768;
  HEAP32[i1 + 32 >> 2] = 0;
  HEAP32[i1 + 40 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  HEAP32[i1 + 56 >> 2] = 0;
  HEAP32[i1 + 60 >> 2] = 0;
  i2 = i1 + 1328 | 0;
  HEAP32[i1 + 108 >> 2] = i2;
  HEAP32[i1 + 80 >> 2] = i2;
  HEAP32[i1 + 76 >> 2] = i2;
  HEAP32[i1 + 7104 >> 2] = 1;
  HEAP32[i1 + 7108 >> 2] = -1;
  i1 = 0;
 } else i1 = -2;
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
  if ((FUNCTION_TABLE_iiii[HEAP32[i8 + 36 >> 2] & 7](i8, i7, 1) | 0) == 1) i1 = HEAPU8[i7 >> 0] | 0; else i1 = -1;
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
  if (!(HEAP32[2498] | 0)) i1 = 0; else i1 = _fflush(HEAP32[2498] | 0) | 0;
  ___lock(18384);
  i2 = HEAP32[4595] | 0;
  if (i2) do {
   if ((HEAP32[i2 + 76 >> 2] | 0) > -1) i3 = ___lockfile(i2) | 0; else i3 = 0;
   if ((HEAP32[i2 + 20 >> 2] | 0) >>> 0 > (HEAP32[i2 + 28 >> 2] | 0) >>> 0) i1 = ___fflush_unlocked(i2) | 0 | i1;
   if (i3) ___unlockfile(i2);
   i2 = HEAP32[i2 + 56 >> 2] | 0;
  } while ((i2 | 0) != 0);
  ___unlock(18384);
 } while (0);
 return i1 | 0;
}

function _inflateReset2(i7, i1) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i7 | 0) != 0 ? (i6 = HEAP32[i7 + 28 >> 2] | 0, (i6 | 0) != 0) : 0) {
  if ((i1 | 0) < 0) {
   i5 = 0 - i1 | 0;
   i4 = 0;
  } else {
   i5 = (i1 | 0) < 48 ? i1 & 15 : i1;
   i4 = (i1 >> 4) + 1 | 0;
  }
  if ((i5 | 0) == 0 | (i5 & -8 | 0) == 8) {
   i2 = i6 + 52 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   i1 = i6 + 36 | 0;
   if ((i3 | 0) != 0 ? (HEAP32[i1 >> 2] | 0) != (i5 | 0) : 0) {
    FUNCTION_TABLE_vii[HEAP32[i7 + 36 >> 2] & 1](HEAP32[i7 + 40 >> 2] | 0, i3);
    HEAP32[i2 >> 2] = 0;
   }
   HEAP32[i6 + 8 >> 2] = i4;
   HEAP32[i1 >> 2] = i5;
   i1 = _inflateReset(i7) | 0;
  } else i1 = -2;
 } else i1 = -2;
 return i1 | 0;
}

function _pad(i6, i2, i5, i4, i1) {
 i6 = i6 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i3 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i7 = i8;
 do if ((i5 | 0) > (i4 | 0) & (i1 & 73728 | 0) == 0) {
  i1 = i5 - i4 | 0;
  _memset(i7 | 0, i2 | 0, (i1 >>> 0 > 256 ? 256 : i1) | 0) | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i3 = (i2 & 32 | 0) == 0;
  if (i1 >>> 0 > 255) {
   i4 = i5 - i4 | 0;
   do {
    if (i3) {
     ___fwritex(i7, 256, i6) | 0;
     i2 = HEAP32[i6 >> 2] | 0;
    }
    i1 = i1 + -256 | 0;
    i3 = (i2 & 32 | 0) == 0;
   } while (i1 >>> 0 > 255);
   if (i3) i1 = i4 & 255; else break;
  } else if (!i3) break;
  ___fwritex(i7, i1, i6) | 0;
 } while (0);
 STACKTOP = i8;
 return;
}

function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i10 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i1 = _i64Subtract(i7 ^ i1, i6 ^ i2, i7, i6) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i1, i2, _i64Subtract(i10 ^ i3, i9 ^ i4, i10, i9) | 0, tempRet0, i8) | 0;
 i4 = _i64Subtract(HEAP32[i8 >> 2] ^ i7, HEAP32[i8 + 4 >> 2] ^ i6, i7, i6) | 0;
 i3 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i3, i4) | 0;
}

function _compress2(i1, i5, i3, i4, i2) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i7;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 HEAP32[i6 + 12 >> 2] = i1;
 HEAP32[i6 + 16 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = 0;
 i1 = _deflateInit_(i6, i2, 15722, 56) | 0;
 do if (!i1) {
  i1 = _deflate(i6, 4) | 0;
  if ((i1 | 0) == 1) {
   HEAP32[i5 >> 2] = HEAP32[i6 + 20 >> 2];
   i1 = _deflateEnd(i6) | 0;
   break;
  } else {
   _deflateEnd(i6) | 0;
   i1 = (i1 | 0) == 0 ? -5 : i1;
   break;
  }
 } while (0);
 STACKTOP = i7;
 return i1 | 0;
}

function _frexp(d1, i5) {
 d1 = +d1;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i4 = _bitshift64Lshr(i2 | 0, i3 | 0, 52) | 0;
 i4 = i4 & 2047;
 switch (i4 | 0) {
 case 0:
  {
   if (d1 != 0.0) {
    d1 = +_frexp(d1 * 18446744073709551616.0, i5);
    i2 = (HEAP32[i5 >> 2] | 0) + -64 | 0;
   } else i2 = 0;
   HEAP32[i5 >> 2] = i2;
   break;
  }
 case 2047:
  break;
 default:
  {
   HEAP32[i5 >> 2] = i4 + -1022;
   HEAP32[tempDoublePtr >> 2] = i2;
   HEAP32[tempDoublePtr + 4 >> 2] = i3 & -2146435073 | 1071644672;
   d1 = +HEAPF64[tempDoublePtr >> 3];
  }
 }
 return +d1;
}

function ___fflush_unlocked(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = i7 + 20 | 0;
 i5 = i7 + 28 | 0;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i5 >> 2] | 0) >>> 0 ? (FUNCTION_TABLE_iiii[HEAP32[i7 + 36 >> 2] & 7](i7, 0, 0) | 0, (HEAP32[i1 >> 2] | 0) == 0) : 0) i1 = -1; else {
  i6 = i7 + 4 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i3 = i7 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < i4 >>> 0) FUNCTION_TABLE_iiii[HEAP32[i7 + 40 >> 2] & 7](i7, i2 - i4 | 0, 1) | 0;
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

function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i5 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = _i64Subtract(i10 ^ i1, i9 ^ i2, i10, i9) | 0;
 i7 = tempRet0;
 i1 = i6 ^ i10;
 i2 = i5 ^ i9;
 return _i64Subtract((___udivmoddi4(i8, i7, _i64Subtract(i6 ^ i3, i5 ^ i4, i6, i5) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i2, i1, i2) | 0;
}

function _fmt_u(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 if (i3 >>> 0 > 0 | (i3 | 0) == 0 & i2 >>> 0 > 4294967295) while (1) {
  i4 = ___uremdi3(i2 | 0, i3 | 0, 10, 0) | 0;
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = i4 | 48;
  i4 = ___udivdi3(i2 | 0, i3 | 0, 10, 0) | 0;
  if (i3 >>> 0 > 9 | (i3 | 0) == 9 & i2 >>> 0 > 4294967295) {
   i2 = i4;
   i3 = tempRet0;
  } else {
   i2 = i4;
   break;
  }
 }
 if (i2) while (1) {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = (i2 >>> 0) % 10 | 0 | 48;
  if (i2 >>> 0 < 10) break; else i2 = (i2 >>> 0) / 10 | 0;
 }
 return i1 | 0;
}

function _init_block(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == 286) {
   i1 = 0;
   break;
  }
  HEAP16[i2 + 148 + (i1 << 2) >> 1] = 0;
  i1 = i1 + 1 | 0;
 }
 while (1) {
  if ((i1 | 0) == 30) {
   i1 = 0;
   break;
  }
  HEAP16[i2 + 2440 + (i1 << 2) >> 1] = 0;
  i1 = i1 + 1 | 0;
 }
 while (1) {
  if ((i1 | 0) == 19) break;
  HEAP16[i2 + 2684 + (i1 << 2) >> 1] = 0;
  i1 = i1 + 1 | 0;
 }
 HEAP16[i2 + 1172 >> 1] = 1;
 HEAP32[i2 + 5804 >> 2] = 0;
 HEAP32[i2 + 5800 >> 2] = 0;
 HEAP32[i2 + 5808 >> 2] = 0;
 HEAP32[i2 + 5792 >> 2] = 0;
 return;
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

function _inflateEnd(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 if (((i3 | 0) != 0 ? (i6 = i3 + 28 | 0, i1 = HEAP32[i6 >> 2] | 0, (i1 | 0) != 0) : 0) ? (i4 = i3 + 36 | 0, i2 = HEAP32[i4 >> 2] | 0, (i2 | 0) != 0) : 0) {
  i5 = HEAP32[i1 + 52 >> 2] | 0;
  i3 = i3 + 40 | 0;
  if (i5) {
   FUNCTION_TABLE_vii[i2 & 1](HEAP32[i3 >> 2] | 0, i5);
   i2 = HEAP32[i4 >> 2] | 0;
   i1 = HEAP32[i6 >> 2] | 0;
  }
  FUNCTION_TABLE_vii[i2 & 1](HEAP32[i3 >> 2] | 0, i1);
  HEAP32[i6 >> 2] = 0;
  i1 = 0;
 } else i1 = -2;
 return i1 | 0;
}

function _puts(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i4 = HEAP32[2497] | 0;
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

function _strerror(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = 0;
 while (1) {
  if ((HEAPU8[15924 + i2 >> 0] | 0) == (i1 | 0)) {
   i3 = 2;
   break;
  }
  i2 = i2 + 1 | 0;
  if ((i2 | 0) == 87) {
   i2 = 87;
   i1 = 16012;
   i3 = 5;
   break;
  }
 }
 if ((i3 | 0) == 2) if (!i2) i1 = 16012; else {
  i1 = 16012;
  i3 = 5;
 }
 if ((i3 | 0) == 5) while (1) {
  i3 = i1;
  while (1) {
   i1 = i3 + 1 | 0;
   if (!(HEAP8[i3 >> 0] | 0)) break; else i3 = i1;
  }
  i2 = i2 + -1 | 0;
  if (!i2) break; else i3 = 5;
 }
 return i1 | 0;
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
 HEAP32[i2 + 36 >> 2] = 1;
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

function _strcmp(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i3 = HEAP8[i4 >> 0] | 0;
 i1 = HEAP8[i2 >> 0] | 0;
 if (i3 << 24 >> 24 == 0 ? 1 : i3 << 24 >> 24 != i1 << 24 >> 24) i2 = i3; else {
  do {
   i4 = i4 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = HEAP8[i4 >> 0] | 0;
   i1 = HEAP8[i2 >> 0] | 0;
  } while (!(i3 << 24 >> 24 == 0 ? 1 : i3 << 24 >> 24 != i1 << 24 >> 24));
  i2 = i3;
 }
 return (i2 & 255) - (i1 & 255) | 0;
}

function _syncsearch(i6, i4, i5) {
 i6 = i6 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (!(i2 >>> 0 < 4 & i1 >>> 0 < i5 >>> 0)) break;
  i3 = HEAP8[i4 + i1 >> 0] | 0;
  if ((i3 & 255 | 0) == ((i2 >>> 0 < 2 ? 0 : 255) | 0)) i2 = i2 + 1 | 0; else i2 = i3 << 24 >> 24 == 0 ? 4 - i2 | 0 : 0;
  i1 = i1 + 1 | 0;
 }
 HEAP32[i6 >> 2] = i2;
 return i1 | 0;
}

function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = i1 & 65535;
 i5 = i2 & 65535;
 i3 = Math_imul(i5, i6) | 0;
 i4 = i1 >>> 16;
 i1 = (i3 >>> 16) + (Math_imul(i5, i4) | 0) | 0;
 i5 = i2 >>> 16;
 i2 = Math_imul(i5, i6) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i5, i4) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i3 & 65535 | 0) | 0;
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

function _llvm_cttz_i32(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP8[cttz_i8 + (i2 & 255) >> 0] | 0;
 if ((i1 | 0) < 8) return i1 | 0;
 i1 = HEAP8[cttz_i8 + (i2 >> 8 & 255) >> 0] | 0;
 if ((i1 | 0) < 8) return i1 + 8 | 0;
 i1 = HEAP8[cttz_i8 + (i2 >> 16 & 255) >> 0] | 0;
 if ((i1 | 0) < 8) return i1 + 16 | 0;
 return (HEAP8[cttz_i8 + (i2 >>> 24) >> 0] | 0) + 24 | 0;
}

function _calloc(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0;
 if (i3) {
  i2 = Math_imul(i1, i3) | 0;
  if ((i1 | i3) >>> 0 > 65535) i2 = ((i2 >>> 0) / (i3 >>> 0) | 0 | 0) == (i1 | 0) ? i2 : -1;
 } else i2 = 0;
 i1 = _malloc(i2) | 0;
 if (!i1) return i1 | 0;
 if (!(HEAP32[i1 + -4 >> 2] & 3)) return i1 | 0;
 _memset(i1 | 0, 0, i2 | 0) | 0;
 return i1 | 0;
}

function __tr_init(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 2840 >> 2] = i1 + 148;
 HEAP32[i1 + 2848 >> 2] = 1144;
 HEAP32[i1 + 2852 >> 2] = i1 + 2440;
 HEAP32[i1 + 2860 >> 2] = 1280;
 HEAP32[i1 + 2864 >> 2] = i1 + 2684;
 HEAP32[i1 + 2872 >> 2] = 1420;
 HEAP16[i1 + 5816 >> 1] = 0;
 HEAP32[i1 + 5820 >> 2] = 0;
 HEAP32[i1 + 5812 >> 2] = 8;
 _init_block(i1);
 return;
}

function _putShortMSB(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i4 = i2 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5 + 1;
 i3 = i2 + 8 | 0;
 HEAP8[(HEAP32[i3 >> 2] | 0) + i5 >> 0] = i1 >>> 8;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2 + 1;
 HEAP8[(HEAP32[i3 >> 2] | 0) + i2 >> 0] = i1;
 return;
}

function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i6 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i5) | 0;
 STACKTOP = i6;
 return (tempRet0 = HEAP32[i5 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
}

function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i6 = i3;
 i3 = ___muldsi3(i5, i6) | 0;
 i1 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i6) | 0) + (Math_imul(i4, i5) | 0) + i1 | i1 & 0, i3 | 0 | 0) | 0;
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

function _bitshift64Ashr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i1 - 32 | 0;
}

function _fprintf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4;
 HEAP32[i5 >> 2] = i3;
 i3 = _vfprintf(i1, i2, i5) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _printf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3;
 HEAP32[i4 >> 2] = i2;
 i2 = _vfprintf(HEAP32[2497] | 0, i1, i4) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function _bitshift64Shl(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 << i1 | (i3 & (1 << i1) - 1 << 32 - i1) >>> 32 - i1;
  return i3 << i1;
 }
 tempRet0 = i3 << i1 - 32;
 return 0;
}

function _bitshift64Lshr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >>> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = 0;
 return i2 >>> i1 - 32 | 0;
}

function runPostSets() {}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i4, i1 - i3 >>> 0 | 0) | 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i3 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i3 >>> 0 < i1 >>> 0 | 0) >>> 0, i3 | 0) | 0;
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 7](i1 | 0, i2 | 0, i3 | 0) | 0;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[(___errno_location() | 0) >> 2] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function _deflateInit_(i3, i1, i4, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 return _deflateInit2_(i3, i1, 8, 15, 8, 0, i4, i2) | 0;
}

function ___errno_location() {
 var i1 = 0;
 if (!(HEAP32[4589] | 0)) i1 = 18400; else i1 = HEAP32[(_pthread_self() | 0) + 60 >> 2] | 0;
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

function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
}

function _compress(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return _compress2(i1, i2, i3, i4, -1) | 0;
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 3](i1 | 0, i2 | 0) | 0;
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2, 0) | 0;
 return i1 | 0;
}

function _inflateInit_(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 return _inflateInit2_(i2, 15, i3, i1) | 0;
}

function dynCall_vii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[i3 & 1](i1 | 0, i2 | 0);
}

function _zcalloc(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 return _malloc(Math_imul(i3, i1) | 0) | 0;
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

function _frexpl(d2, i1) {
 d2 = +d2;
 i1 = i1 | 0;
 return +(+_frexp(d2, i1));
}

function _zcfree(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _free(i2);
 return;
}

function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
 return 0;
}

function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}

function _zlibCompileFlags() {
 return 85;
}

function _zlibVersion() {
 return 15722;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,___stdio_write,___stdio_seek,___stdout_write,_zcalloc,b1,b1,b1];
var FUNCTION_TABLE_vii = [b2,_zcfree];
var FUNCTION_TABLE_iii = [b3,_deflate_stored,_deflate_fast,_deflate_slow];
var FUNCTION_TABLE_vi = [b4,_cleanup_418];

  return { _i64Subtract: _i64Subtract, _free: _free, _main: _main, _i64Add: _i64Add, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, _llvm_bswap_i32: _llvm_bswap_i32, _bitshift64Lshr: _bitshift64Lshr, _fflush: _fflush, ___errno_location: ___errno_location, _bitshift64Shl: _bitshift64Shl, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_vii: dynCall_vii, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
;