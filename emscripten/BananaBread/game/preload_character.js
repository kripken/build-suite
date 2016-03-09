
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
    var PACKAGE_NAME = 'character.data';
    var REMOTE_PACKAGE_BASE = 'character.data';
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
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'vwep', true, true);
Module['FS_createPath']('/packages/models/vwep', 'shotg', true, true);
Module['FS_createPath']('/packages/models/vwep', 'rifle', true, true);
Module['FS_createPath']('/packages/models/vwep', 'chaing', true, true);
Module['FS_createPath']('/packages/models/vwep', 'rocket', true, true);
Module['FS_createPath']('/packages/models/vwep', 'gl', true, true);
Module['FS_createPath']('/packages/models', 'snoutx10k', true, true);
Module['FS_createPath']('/packages/models/snoutx10k', 'hudguns', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'shotg', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'rifle', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'chaing', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'rocket', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'gl', true, true);
Module['FS_createPath']('/packages/models', 'hudguns', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'shotg', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'rifle', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'chaing', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'rocket', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'gl', true, true);

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
              Module['removeRunDependency']('datafile_character.data');

    };
    Module['addRunDependency']('datafile_character.data');
  
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
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 94, "filename": "/packages/models/vwep/readme.txt"}, {"audio": 0, "start": 94, "crunched": 0, "end": 95878, "filename": "/packages/models/vwep/shotg/shotgun_vwep.iqm"}, {"audio": 0, "start": 95878, "crunched": 0, "end": 96081, "filename": "/packages/models/vwep/shotg/iqm.cfg"}, {"audio": 0, "start": 96081, "crunched": 0, "end": 198161, "filename": "/packages/models/vwep/rifle/sniper_vwep.iqm"}, {"audio": 0, "start": 198161, "crunched": 0, "end": 198361, "filename": "/packages/models/vwep/rifle/iqm.cfg"}, {"audio": 0, "start": 198361, "crunched": 0, "end": 309281, "filename": "/packages/models/vwep/chaing/minigun_vwep.iqm"}, {"audio": 0, "start": 309281, "crunched": 0, "end": 309463, "filename": "/packages/models/vwep/chaing/iqm.cfg"}, {"audio": 0, "start": 309463, "crunched": 0, "end": 390351, "filename": "/packages/models/vwep/rocket/rl_vwep.iqm"}, {"audio": 0, "start": 390351, "crunched": 0, "end": 390505, "filename": "/packages/models/vwep/rocket/iqm.cfg"}, {"audio": 0, "start": 390505, "crunched": 0, "end": 390677, "filename": "/packages/models/vwep/gl/iqm.cfg"}, {"audio": 0, "start": 390677, "crunched": 0, "end": 474277, "filename": "/packages/models/vwep/gl/gl_vwep.iqm"}, {"audio": 0, "start": 474277, "crunched": 0, "end": 481033, "filename": "/packages/models/snoutx10k/jump.md5anim.iqm"}, {"audio": 0, "start": 481033, "crunched": 0, "end": 543325, "filename": "/packages/models/snoutx10k/left.md5anim.iqm"}, {"audio": 0, "start": 543325, "crunched": 0, "end": 603990, "filename": "/packages/models/snoutx10k/upper.jpg"}, {"audio": 0, "start": 603990, "crunched": 0, "end": 614958, "filename": "/packages/models/snoutx10k/chainsaw_attack.md5anim.iqm"}, {"audio": 0, "start": 614958, "crunched": 0, "end": 617987, "filename": "/packages/models/snoutx10k/anims.cfg"}, {"audio": 0, "start": 617987, "crunched": 0, "end": 624743, "filename": "/packages/models/snoutx10k/lag.md5anim.iqm"}, {"audio": 0, "start": 624743, "crunched": 0, "end": 631507, "filename": "/packages/models/snoutx10k/sniper_idle.md5anim.iqm"}, {"audio": 0, "start": 631507, "crunched": 0, "end": 654955, "filename": "/packages/models/snoutx10k/punch.md5anim.iqm"}, {"audio": 0, "start": 654955, "crunched": 0, "end": 711232, "filename": "/packages/models/snoutx10k/upper_normals.jpg"}, {"audio": 0, "start": 711232, "crunched": 0, "end": 711326, "filename": "/packages/models/snoutx10k/readme.txt"}, {"audio": 0, "start": 711326, "crunched": 0, "end": 728402, "filename": "/packages/models/snoutx10k/pain2.md5anim.iqm"}, {"audio": 0, "start": 728402, "crunched": 0, "end": 766824, "filename": "/packages/models/snoutx10k/lower_mask.jpg"}, {"audio": 0, "start": 766824, "crunched": 0, "end": 795180, "filename": "/packages/models/snoutx10k/taunt.md5anim.iqm"}, {"audio": 0, "start": 795180, "crunched": 0, "end": 801944, "filename": "/packages/models/snoutx10k/minigun_idle.md5anim.iqm"}, {"audio": 0, "start": 801944, "crunched": 0, "end": 819340, "filename": "/packages/models/snoutx10k/win.md5anim.iqm"}, {"audio": 0, "start": 819340, "crunched": 0, "end": 878044, "filename": "/packages/models/snoutx10k/backward.md5anim.iqm"}, {"audio": 0, "start": 878044, "crunched": 0, "end": 936446, "filename": "/packages/models/snoutx10k/lower.jpg"}, {"audio": 0, "start": 936446, "crunched": 0, "end": 960518, "filename": "/packages/models/snoutx10k/dying.md5anim.iqm"}, {"audio": 0, "start": 960518, "crunched": 0, "end": 971574, "filename": "/packages/models/snoutx10k/sniper_shoot.md5anim.iqm"}, {"audio": 0, "start": 971574, "crunched": 0, "end": 1010566, "filename": "/packages/models/snoutx10k/upper_mask.jpg"}, {"audio": 0, "start": 1010566, "crunched": 0, "end": 1021510, "filename": "/packages/models/snoutx10k/shotgun_shoot.md5anim.iqm"}, {"audio": 0, "start": 1021510, "crunched": 0, "end": 1025154, "filename": "/packages/models/snoutx10k/ragdoll.cfg"}, {"audio": 0, "start": 1025154, "crunched": 0, "end": 1041390, "filename": "/packages/models/snoutx10k/lose.md5anim.iqm"}, {"audio": 0, "start": 1041390, "crunched": 0, "end": 1052446, "filename": "/packages/models/snoutx10k/minigun_shoot.md5anim.iqm"}, {"audio": 0, "start": 1052446, "crunched": 0, "end": 1075094, "filename": "/packages/models/snoutx10k/dying2.md5anim.iqm"}, {"audio": 0, "start": 1075094, "crunched": 0, "end": 1085966, "filename": "/packages/models/snoutx10k/rl_shoot.md5anim.iqm"}, {"audio": 0, "start": 1085966, "crunched": 0, "end": 1159990, "filename": "/packages/models/snoutx10k/idle.md5anim.iqm"}, {"audio": 0, "start": 1159990, "crunched": 0, "end": 1228447, "filename": "/packages/models/snoutx10k/lower_normals.jpg"}, {"audio": 0, "start": 1228447, "crunched": 0, "end": 1239363, "filename": "/packages/models/snoutx10k/gl_shoot.md5anim.iqm"}, {"audio": 0, "start": 1239363, "crunched": 0, "end": 1246127, "filename": "/packages/models/snoutx10k/chainsaw_idle.md5anim.iqm"}, {"audio": 0, "start": 1246127, "crunched": 0, "end": 1306235, "filename": "/packages/models/snoutx10k/right.md5anim.iqm"}, {"audio": 0, "start": 1306235, "crunched": 0, "end": 1324151, "filename": "/packages/models/snoutx10k/pain.md5anim.iqm"}, {"audio": 0, "start": 1324151, "crunched": 0, "end": 1386443, "filename": "/packages/models/snoutx10k/forward.md5anim.iqm"}, {"audio": 0, "start": 1386443, "crunched": 0, "end": 1393207, "filename": "/packages/models/snoutx10k/shotgun_idle.md5anim.iqm"}, {"audio": 0, "start": 1393207, "crunched": 0, "end": 1393589, "filename": "/packages/models/snoutx10k/iqm.cfg"}, {"audio": 0, "start": 1393589, "crunched": 0, "end": 1400345, "filename": "/packages/models/snoutx10k/edit.md5anim.iqm"}, {"audio": 0, "start": 1400345, "crunched": 0, "end": 1411741, "filename": "/packages/models/snoutx10k/shoot.md5anim.iqm"}, {"audio": 0, "start": 1411741, "crunched": 0, "end": 1429897, "filename": "/packages/models/snoutx10k/swim.md5anim.iqm"}, {"audio": 0, "start": 1429897, "crunched": 0, "end": 1436653, "filename": "/packages/models/snoutx10k/gl_idle.md5anim.iqm"}, {"audio": 0, "start": 1436653, "crunched": 0, "end": 1663213, "filename": "/packages/models/snoutx10k/snoutx10k.iqm"}, {"audio": 0, "start": 1663213, "crunched": 0, "end": 1669969, "filename": "/packages/models/snoutx10k/dead.md5anim.iqm"}, {"audio": 0, "start": 1669969, "crunched": 0, "end": 1685165, "filename": "/packages/models/snoutx10k/sink.md5anim.iqm"}, {"audio": 0, "start": 1685165, "crunched": 0, "end": 1691921, "filename": "/packages/models/snoutx10k/rl_idle.md5anim.iqm"}, {"audio": 0, "start": 1691921, "crunched": 0, "end": 1698677, "filename": "/packages/models/snoutx10k/dead2.md5anim.iqm"}, {"audio": 0, "start": 1698677, "crunched": 0, "end": 1804474, "filename": "/packages/models/snoutx10k/hudguns/snout_hands.jpg"}, {"audio": 0, "start": 1804474, "crunched": 0, "end": 1941978, "filename": "/packages/models/snoutx10k/hudguns/snout_hands.iqm"}, {"audio": 0, "start": 1941978, "crunched": 0, "end": 1942460, "filename": "/packages/models/snoutx10k/hudguns/iqm.cfg"}, {"audio": 0, "start": 1942460, "crunched": 0, "end": 2003543, "filename": "/packages/models/snoutx10k/hudguns/snout_hands_normals.jpg"}, {"audio": 0, "start": 2003543, "crunched": 0, "end": 2023800, "filename": "/packages/models/snoutx10k/hudguns/snout_hands_mask.jpg"}, {"audio": 0, "start": 2023800, "crunched": 0, "end": 2023928, "filename": "/packages/models/snoutx10k/hudguns/shotg/iqm.cfg"}, {"audio": 0, "start": 2023928, "crunched": 0, "end": 2024056, "filename": "/packages/models/snoutx10k/hudguns/rifle/iqm.cfg"}, {"audio": 0, "start": 2024056, "crunched": 0, "end": 2024185, "filename": "/packages/models/snoutx10k/hudguns/chaing/iqm.cfg"}, {"audio": 0, "start": 2024185, "crunched": 0, "end": 2024314, "filename": "/packages/models/snoutx10k/hudguns/rocket/iqm.cfg"}, {"audio": 0, "start": 2024314, "crunched": 0, "end": 2024439, "filename": "/packages/models/snoutx10k/hudguns/gl/iqm.cfg"}, {"audio": 0, "start": 2024439, "crunched": 0, "end": 2024533, "filename": "/packages/models/hudguns/readme.txt"}, {"audio": 0, "start": 2024533, "crunched": 0, "end": 2028253, "filename": "/packages/models/hudguns/shotg/shotgun_attack.md5anim.iqm"}, {"audio": 0, "start": 2028253, "crunched": 0, "end": 2152845, "filename": "/packages/models/hudguns/shotg/shotgun.iqm"}, {"audio": 0, "start": 2152845, "crunched": 0, "end": 2184621, "filename": "/packages/models/hudguns/shotg/shotgun_mask.jpg"}, {"audio": 0, "start": 2184621, "crunched": 0, "end": 2186531, "filename": "/packages/models/hudguns/shotg/shotgun_shell_mask.jpg"}, {"audio": 0, "start": 2186531, "crunched": 0, "end": 2198007, "filename": "/packages/models/hudguns/shotg/hands_shotgun_shoot.md5anim.iqm"}, {"audio": 0, "start": 2198007, "crunched": 0, "end": 2300736, "filename": "/packages/models/hudguns/shotg/shotgun.jpg"}, {"audio": 0, "start": 2300736, "crunched": 0, "end": 2306434, "filename": "/packages/models/hudguns/shotg/shotgun_shell.jpg"}, {"audio": 0, "start": 2306434, "crunched": 0, "end": 2353537, "filename": "/packages/models/hudguns/shotg/shotgun_normals.jpg"}, {"audio": 0, "start": 2353537, "crunched": 0, "end": 2355361, "filename": "/packages/models/hudguns/shotg/shotgun_shell_normals.jpg"}, {"audio": 0, "start": 2355361, "crunched": 0, "end": 2356141, "filename": "/packages/models/hudguns/shotg/shotgun_idle.md5anim.iqm"}, {"audio": 0, "start": 2356141, "crunched": 0, "end": 2356883, "filename": "/packages/models/hudguns/shotg/iqm.cfg"}, {"audio": 0, "start": 2356883, "crunched": 0, "end": 2359951, "filename": "/packages/models/hudguns/shotg/hands_shotgun_idle.md5anim.iqm"}, {"audio": 0, "start": 2359951, "crunched": 0, "end": 2405432, "filename": "/packages/models/hudguns/rifle/sniper_normals.jpg"}, {"audio": 0, "start": 2405432, "crunched": 0, "end": 2423260, "filename": "/packages/models/hudguns/rifle/hands_rifle_shoot.md5anim.iqm"}, {"audio": 0, "start": 2423260, "crunched": 0, "end": 2612964, "filename": "/packages/models/hudguns/rifle/rifle.iqm"}, {"audio": 0, "start": 2612964, "crunched": 0, "end": 2641426, "filename": "/packages/models/hudguns/rifle/sniper_mask.jpg"}, {"audio": 0, "start": 2641426, "crunched": 0, "end": 2642570, "filename": "/packages/models/hudguns/rifle/rifle_shoot.md5anim.iqm"}, {"audio": 0, "start": 2642570, "crunched": 0, "end": 2645638, "filename": "/packages/models/hudguns/rifle/hands_rifle_idle.md5anim.iqm"}, {"audio": 0, "start": 2645638, "crunched": 0, "end": 2646234, "filename": "/packages/models/hudguns/rifle/rifle_idle.md5anim.iqm"}, {"audio": 0, "start": 2646234, "crunched": 0, "end": 2743792, "filename": "/packages/models/hudguns/rifle/sniper.jpg"}, {"audio": 0, "start": 2743792, "crunched": 0, "end": 2744387, "filename": "/packages/models/hudguns/rifle/iqm.cfg"}, {"audio": 0, "start": 2744387, "crunched": 0, "end": 2747455, "filename": "/packages/models/hudguns/chaing/hands_mg_idle.iqm"}, {"audio": 0, "start": 2747455, "crunched": 0, "end": 2783522, "filename": "/packages/models/hudguns/chaing/m134_normals.jpg"}, {"audio": 0, "start": 2783522, "crunched": 0, "end": 2931585, "filename": "/packages/models/hudguns/chaing/m134.jpg"}, {"audio": 0, "start": 2931585, "crunched": 0, "end": 2932013, "filename": "/packages/models/hudguns/chaing/chaing_idle.iqm"}, {"audio": 0, "start": 2932013, "crunched": 0, "end": 2963602, "filename": "/packages/models/hudguns/chaing/m134_mask.jpg"}, {"audio": 0, "start": 2963602, "crunched": 0, "end": 2964074, "filename": "/packages/models/hudguns/chaing/chaing_shoot.iqm"}, {"audio": 0, "start": 2964074, "crunched": 0, "end": 3054698, "filename": "/packages/models/hudguns/chaing/chaing.iqm"}, {"audio": 0, "start": 3054698, "crunched": 0, "end": 3058098, "filename": "/packages/models/hudguns/chaing/hands_mg_shoot.iqm"}, {"audio": 0, "start": 3058098, "crunched": 0, "end": 3058665, "filename": "/packages/models/hudguns/chaing/iqm.cfg"}, {"audio": 0, "start": 3058665, "crunched": 0, "end": 3101733, "filename": "/packages/models/hudguns/rocket/rl_normals.jpg"}, {"audio": 0, "start": 3101733, "crunched": 0, "end": 3127433, "filename": "/packages/models/hudguns/rocket/rl_mask.jpg"}, {"audio": 0, "start": 3127433, "crunched": 0, "end": 3130501, "filename": "/packages/models/hudguns/rocket/hands_rl_idle.md5anim.iqm"}, {"audio": 0, "start": 3130501, "crunched": 0, "end": 3131137, "filename": "/packages/models/hudguns/rocket/rl_shoot.md5anim.iqm"}, {"audio": 0, "start": 3131137, "crunched": 0, "end": 3134877, "filename": "/packages/models/hudguns/rocket/hands_rl_shoot.md5anim.iqm"}, {"audio": 0, "start": 3134877, "crunched": 0, "end": 3240191, "filename": "/packages/models/hudguns/rocket/rl.jpg"}, {"audio": 0, "start": 3240191, "crunched": 0, "end": 3346903, "filename": "/packages/models/hudguns/rocket/rl.iqm"}, {"audio": 0, "start": 3346903, "crunched": 0, "end": 3347562, "filename": "/packages/models/hudguns/rocket/iqm.cfg"}, {"audio": 0, "start": 3347562, "crunched": 0, "end": 3348070, "filename": "/packages/models/hudguns/rocket/rl_idle.md5anim.iqm"}, {"audio": 0, "start": 3348070, "crunched": 0, "end": 3412008, "filename": "/packages/models/hudguns/gl/gl.jpg"}, {"audio": 0, "start": 3412008, "crunched": 0, "end": 3416756, "filename": "/packages/models/hudguns/gl/hands_gl_shoot.md5anim.iqm"}, {"audio": 0, "start": 3416756, "crunched": 0, "end": 3419824, "filename": "/packages/models/hudguns/gl/hands_gl_idle.md5anim.iqm"}, {"audio": 0, "start": 3419824, "crunched": 0, "end": 3574696, "filename": "/packages/models/hudguns/gl/gl.iqm"}, {"audio": 0, "start": 3574696, "crunched": 0, "end": 3610399, "filename": "/packages/models/hudguns/gl/gl_normals.jpg"}, {"audio": 0, "start": 3610399, "crunched": 0, "end": 3628209, "filename": "/packages/models/hudguns/gl/gl_mask.jpg"}, {"audio": 0, "start": 3628209, "crunched": 0, "end": 3628801, "filename": "/packages/models/hudguns/gl/gl_shoot.md5anim.iqm"}, {"audio": 0, "start": 3628801, "crunched": 0, "end": 3629284, "filename": "/packages/models/hudguns/gl/iqm.cfg"}, {"audio": 0, "start": 3629284, "crunched": 0, "end": 3629792, "filename": "/packages/models/hudguns/gl/gl_idle.md5anim.iqm"}], "remote_package_size": 3629792, "package_uuid": "3a540a8e-ffce-47cb-984a-902c34a119ba"});

})();

