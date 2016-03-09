
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'low.data';
    var REMOTE_PACKAGE_BASE = 'low.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'base', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'ffflag', true, true);
Module['FS_createPath']('/packages/models', 'ffpit', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasyJPG', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_plaster_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_planks_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_intersection_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v03', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_plates_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_roof_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v02', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_low.data');

    };
    Module['addRunDependency']('datafile_low.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 554042, "filename": "/packages/base/colos.ogz"}, {"audio": 0, "start": 554042, "crunched": 0, "end": 555197, "filename": "/packages/base/colos.cfg"}, {"audio": 0, "start": 555197, "crunched": 0, "end": 566661, "filename": "/packages/base/colos.wpt"}, {"audio": 0, "start": 566661, "crunched": 0, "end": 566913, "filename": "/packages/models/ffflag/md5.cfg"}, {"audio": 0, "start": 566913, "crunched": 0, "end": 733365, "filename": "/packages/models/ffflag/ffflag_cc.jpg"}, {"audio": 0, "start": 733365, "crunched": 0, "end": 860604, "filename": "/packages/models/ffflag/ffflag_nm.jpg"}, {"audio": 0, "start": 860604, "crunched": 0, "end": 986045, "filename": "/packages/models/ffflag/ffflag_sc.jpg"}, {"audio": 0, "start": 986045, "crunched": 0, "end": 1009466, "filename": "/packages/models/ffflag/ffflag.md5mesh"}, {"audio": 0, "start": 1009466, "crunched": 0, "end": 1101221, "filename": "/packages/models/ffflag/ffflag.md5anim"}, {"audio": 0, "start": 1101221, "crunched": 0, "end": 1101501, "filename": "/packages/models/ffpit/md5.cfg"}, {"audio": 0, "start": 1101501, "crunched": 0, "end": 1200484, "filename": "/packages/models/ffpit/ffpit_01_gk_cc.jpg"}, {"audio": 0, "start": 1200484, "crunched": 0, "end": 1266293, "filename": "/packages/models/ffpit/ffpit_01_gk_sc.jpg"}, {"audio": 0, "start": 1266293, "crunched": 0, "end": 1379660, "filename": "/packages/models/ffpit/ffpit_01_gk_nm.jpg"}, {"audio": 0, "start": 1379660, "crunched": 0, "end": 1424857, "filename": "/packages/models/ffpit/ffpit.md5mesh"}, {"audio": 0, "start": 1424857, "crunched": 0, "end": 1610308, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg"}, {"audio": 0, "start": 1610308, "crunched": 0, "end": 1764143, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg"}, {"audio": 0, "start": 1764143, "crunched": 0, "end": 1913205, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg"}, {"audio": 0, "start": 1913205, "crunched": 0, "end": 2062644, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg"}, {"audio": 0, "start": 2062644, "crunched": 0, "end": 2219090, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg"}, {"audio": 0, "start": 2219090, "crunched": 0, "end": 2301931, "filename": "/packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg"}, {"audio": 0, "start": 2301931, "crunched": 0, "end": 2302378, "filename": "/packages/gk/fantasy/castell_plaster_gk_v01/package.cfg"}, {"audio": 0, "start": 2302378, "crunched": 0, "end": 2303112, "filename": "/packages/gk/fantasy/wooden_planks_gk_v01/package.cfg"}, {"audio": 0, "start": 2303112, "crunched": 0, "end": 2303536, "filename": "/packages/gk/fantasy/package.cfg"}, {"audio": 0, "start": 2303536, "crunched": 0, "end": 2304335, "filename": "/packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg"}, {"audio": 0, "start": 2304335, "crunched": 0, "end": 2304774, "filename": "/packages/gk/fantasy/rock_formation_gk_v01/package.cfg"}, {"audio": 0, "start": 2304774, "crunched": 0, "end": 2305493, "filename": "/packages/gk/fantasy/castell_wall_gk_v02/package.cfg"}, {"audio": 0, "start": 2305493, "crunched": 0, "end": 2305952, "filename": "/packages/gk/fantasy/iron_intersection_gk_v01/package.cfg"}, {"audio": 0, "start": 2305952, "crunched": 0, "end": 2306671, "filename": "/packages/gk/fantasy/castell_wall_gk_v01/package.cfg"}, {"audio": 0, "start": 2306671, "crunched": 0, "end": 2307390, "filename": "/packages/gk/fantasy/castell_wall_gk_v03/package.cfg"}, {"audio": 0, "start": 2307390, "crunched": 0, "end": 2308062, "filename": "/packages/gk/fantasy/iron_trim_gk_v01/package.cfg"}, {"audio": 0, "start": 2308062, "crunched": 0, "end": 2308533, "filename": "/packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg"}, {"audio": 0, "start": 2308533, "crunched": 0, "end": 2308956, "filename": "/packages/gk/fantasy/stone_ground_gk_v01/package.cfg"}, {"audio": 0, "start": 2308956, "crunched": 0, "end": 2309658, "filename": "/packages/gk/fantasy/iron_plates_gk_v01/package.cfg"}, {"audio": 0, "start": 2309658, "crunched": 0, "end": 2310456, "filename": "/packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg"}, {"audio": 0, "start": 2310456, "crunched": 0, "end": 2310895, "filename": "/packages/gk/fantasy/rock_formation_gk_v02/package.cfg"}, {"audio": 0, "start": 2310895, "crunched": 0, "end": 2657702, "filename": "/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg"}, {"audio": 0, "start": 2657702, "crunched": 0, "end": 2817635, "filename": "/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.jpg"}, {"audio": 0, "start": 2817635, "crunched": 0, "end": 2860826, "filename": "/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.jpg"}, {"audio": 0, "start": 2860826, "crunched": 0, "end": 2876314, "filename": "/packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.jpg"}, {"audio": 0, "start": 2876314, "crunched": 0, "end": 3008646, "filename": "/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg"}, {"audio": 0, "start": 3008646, "crunched": 0, "end": 3157424, "filename": "/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg"}, {"audio": 0, "start": 3157424, "crunched": 0, "end": 3318328, "filename": "/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg"}, {"audio": 0, "start": 3318328, "crunched": 0, "end": 3348571, "filename": "/packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg"}, {"audio": 0, "start": 3348571, "crunched": 0, "end": 3562291, "filename": "/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg"}, {"audio": 0, "start": 3562291, "crunched": 0, "end": 3723977, "filename": "/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.jpg"}, {"audio": 0, "start": 3723977, "crunched": 0, "end": 3743736, "filename": "/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.jpg"}, {"audio": 0, "start": 3743736, "crunched": 0, "end": 3769733, "filename": "/packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg"}, {"audio": 0, "start": 3769733, "crunched": 0, "end": 3807693, "filename": "/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg"}, {"audio": 0, "start": 3807693, "crunched": 0, "end": 3861382, "filename": "/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg"}, {"audio": 0, "start": 3861382, "crunched": 0, "end": 3880300, "filename": "/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg"}, {"audio": 0, "start": 3880300, "crunched": 0, "end": 3887713, "filename": "/packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg"}, {"audio": 0, "start": 3887713, "crunched": 0, "end": 4167689, "filename": "/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg"}, {"audio": 0, "start": 4167689, "crunched": 0, "end": 4395740, "filename": "/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg"}, {"audio": 0, "start": 4395740, "crunched": 0, "end": 4542385, "filename": "/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg"}, {"audio": 0, "start": 4542385, "crunched": 0, "end": 4575880, "filename": "/packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg"}, {"audio": 0, "start": 4575880, "crunched": 0, "end": 4638804, "filename": "/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.jpg"}, {"audio": 0, "start": 4638804, "crunched": 0, "end": 4771885, "filename": "/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.jpg"}, {"audio": 0, "start": 4771885, "crunched": 0, "end": 4866383, "filename": "/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.jpg"}, {"audio": 0, "start": 4866383, "crunched": 0, "end": 4912357, "filename": "/packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.jpg"}, {"audio": 0, "start": 4912357, "crunched": 0, "end": 5252525, "filename": "/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg"}, {"audio": 0, "start": 5252525, "crunched": 0, "end": 5360595, "filename": "/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg"}, {"audio": 0, "start": 5360595, "crunched": 0, "end": 5426497, "filename": "/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg"}, {"audio": 0, "start": 5426497, "crunched": 0, "end": 5446825, "filename": "/packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg"}, {"audio": 0, "start": 5446825, "crunched": 0, "end": 5526337, "filename": "/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg"}, {"audio": 0, "start": 5526337, "crunched": 0, "end": 5643403, "filename": "/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg"}, {"audio": 0, "start": 5643403, "crunched": 0, "end": 5697322, "filename": "/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg"}, {"audio": 0, "start": 5697322, "crunched": 0, "end": 5731434, "filename": "/packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg"}, {"audio": 0, "start": 5731434, "crunched": 0, "end": 5753147, "filename": "/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg"}, {"audio": 0, "start": 5753147, "crunched": 0, "end": 5783825, "filename": "/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg"}, {"audio": 0, "start": 5783825, "crunched": 0, "end": 5830372, "filename": "/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg"}, {"audio": 0, "start": 5830372, "crunched": 0, "end": 5839971, "filename": "/packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg"}, {"audio": 0, "start": 5839971, "crunched": 0, "end": 5870674, "filename": "/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg"}, {"audio": 0, "start": 5870674, "crunched": 0, "end": 5964606, "filename": "/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg"}, {"audio": 0, "start": 5964606, "crunched": 0, "end": 6015350, "filename": "/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg"}, {"audio": 0, "start": 6015350, "crunched": 0, "end": 6035910, "filename": "/packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg"}], "remote_package_size": 6035910, "package_uuid": "57f64927-f016-4eb0-9f30-619de0f906d5"});

})();

