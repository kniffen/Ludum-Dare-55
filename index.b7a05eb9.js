// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dZI1r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
var _graphics = require("./graphics");
var _player = require("./player");
var _controls = require("./controls");
var _map = require("./map");
var _updateTiles = require("./tiles/updateTiles");
var _candles = require("./candles");
var _demon = require("./demon/demon");
const { ctx } = (0, _graphics.getGraphics)();
const update = (dt)=>{
    (0, _updateTiles.updateTiles)();
    (0, _player.player).update(dt);
    (0, _demon.demon).update(dt);
    (0, _candles.candles).forEach((candle)=>candle.update());
    spawnDemon();
};
const render = (dt)=>{
    (0, _graphics.clearCanvas)();
    (0, _map.room).current.draw();
    (0, _player.player).draw(dt);
    (0, _candles.candles).forEach((candle)=>(0, _map.room).current.id === candle.room && candle.draw());
    (0, _demon.demon).draw();
// Debug altar bounds
// ctx.beginPath();
// ctx.rect(altarCoords.x, altarCoords.y, 8*3,8*3)
// ctx.stroke()
};
let lastTimestamp = performance.now();
const gameloop = ()=>{
    const timestamp = performance.now();
    const dt = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    update(dt);
    render(dt);
    window.requestAnimationFrame(gameloop);
};
window.requestAnimationFrame(gameloop);
const altarCoords = {
    x: 48,
    y: 32
};
const spawnSoundURL = new URL(require("d2e5e39aad244323"));
const spawnSound = new Audio(spawnSoundURL.toString());
spawnSound.load();
const spawnDemon = ()=>{
    if ((0, _demon.demon).isActive) return;
    if ((0, _player.player).candle) return;
    if ((0, _candles.candles).some((candle)=>candle.room !== "room-3-3")) return;
    // Quick and dirty solution so check if all candles are incide the altar
    // TODO: Improve by getting altar coords from room data
    for (const candle of (0, _candles.candles)){
        if (candle.x < altarCoords.x) return;
        if (candle.x > altarCoords.x + 24) return;
        if (candle.y < altarCoords.y) return;
        if (candle.y > altarCoords.y + 24) return;
    }
    (0, _demon.demon).isActive = true;
    spawnSound.play();
};

},{"./graphics":"4smRs","./player":"7P3Ry","./controls":"jBMlp","./map":"ibpiC","./tiles/updateTiles":"9Jswh","./candles":"jyCin","./demon/demon":"4R3jp","d2e5e39aad244323":"2mn1L"}],"4smRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCALE", ()=>SCALE);
parcelHelpers.export(exports, "COLUMNS", ()=>COLUMNS);
parcelHelpers.export(exports, "ROWS", ()=>ROWS);
parcelHelpers.export(exports, "getGraphics", ()=>getGraphics);
parcelHelpers.export(exports, "clearCanvas", ()=>clearCanvas);
var _tileset = require("../tiles/tileset");
const canvas = document.getElementById("canvas");
if (!canvas || !(canvas instanceof HTMLCanvasElement)) throw new Error("Missing canvas");
const SCALE = 8;
const COLUMNS = 15;
const ROWS = 11;
canvas.width = (0, _tileset.tileSize) * COLUMNS * SCALE;
canvas.height = (0, _tileset.tileSize) * ROWS * SCALE;
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Missing context");
// @ts-ignore
ctx.webkitImageSmoothingEnabled = false;
// @ts-ignore
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
ctx.scale(SCALE, SCALE);
const getGraphics = ()=>({
        canvas,
        ctx
    });
const clearCanvas = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(0, 0);
    ctx.fillStyle = "#191B1A";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../tiles/tileset":"l1Ydc"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l1Ydc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image", ()=>image);
parcelHelpers.export(exports, "tileSize", ()=>tileSize);
parcelHelpers.export(exports, "columns", ()=>columns);
parcelHelpers.export(exports, "rows", ()=>rows);
const image = new Image();
const tileSize = 8;
const columns = 128 / tileSize;
const rows = 128 / tileSize;
const imageUrl = new URL(require("4d82990875c2b593"));
image.src = imageUrl.toString();

},{"4d82990875c2b593":"3ntF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ntF8":[function(require,module,exports) {
module.exports = require("f8309270546de667").getBundleURL("aNMIV") + "tileset.d88896e7.png" + "?" + Date.now();

},{"f8309270546de667":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7P3Ry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PLAYER_MAX_VEL", ()=>PLAYER_MAX_VEL);
parcelHelpers.export(exports, "player", ()=>player);
parcelHelpers.export(exports, "projectile", ()=>projectile);
parcelHelpers.export(exports, "PROJECTILE_SPEED", ()=>PROJECTILE_SPEED);
var _demon = require("../demon/demon");
var _draw = require("./draw");
var _updatePlayer = require("./updatePlayer");
const PLAYER_MAX_VEL = 50;
const player = {
    x: 20,
    y: 30,
    w: 8,
    h: 8,
    vel: {
        x: 0,
        y: 0
    },
    tile: {
        x: 0,
        y: 0
    },
    debug: false,
    update: (dt)=>{
        (0, _updatePlayer.updatePlayer)(player, dt);
        (0, _updatePlayer.updateProjectile)(projectile, dt);
    },
    draw: (dt)=>{
        (0, _draw.drawPlayer)(player, dt);
        (0, _draw.drawProjectile)(projectile, dt);
    },
    fire: ()=>fireProjectile()
};
const projectile = {
    r: 1,
    x: player.x,
    y: player.y,
    vel: {
        x: 0,
        y: 0
    },
    isActive: false
};
const mp3URL = new URL(require("30f1fda9b7f6d6cf"));
const bling = new Audio(mp3URL.toString());
bling.load();
const PROJECTILE_SPEED = 100;
const fireProjectile = ()=>{
    if (projectile.isActive || !(0, _demon.demon).isActive) return;
    bling.pause();
    bling.load();
    bling.play();
    projectile.x = player.x;
    projectile.y = player.y;
    // Directional vector
    const dvx = (0, _demon.demon).x - player.x;
    const dvy = (0, _demon.demon).y - player.y;
    const magnitude = Math.sqrt(dvx * dvx + dvy * dvy);
    // unit vector
    const uvx = dvx / magnitude;
    const uvy = dvy / magnitude;
    projectile.vel.x = uvx * PROJECTILE_SPEED;
    projectile.vel.y = uvy * PROJECTILE_SPEED;
    projectile.isActive = true;
};

},{"./draw":"fVjU7","./updatePlayer":"3WPpE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../demon/demon":"4R3jp","30f1fda9b7f6d6cf":"evEEC"}],"fVjU7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image", ()=>image);
parcelHelpers.export(exports, "tileSize", ()=>tileSize);
parcelHelpers.export(exports, "drawPlayer", ()=>drawPlayer);
parcelHelpers.export(exports, "drawProjectile", ()=>drawProjectile);
var _graphics = require("../graphics");
const { ctx } = (0, _graphics.getGraphics)();
const image = new Image();
const tileSize = 8;
const columns = 64 / tileSize;
const imageUrl = new URL(require("4173d07576b5c1f7"));
image.src = imageUrl.toString();
const frameLength = 30;
let acc = 0;
let frameIndex = 0;
const drawPlayer = (player, dt)=>{
    acc++;
    if (acc >= frameLength) {
        frameIndex++;
        acc = 0;
    }
    if (frameIndex > 2) frameIndex = 0;
    const column = Math.floor(frameIndex % columns);
    const row = Math.floor(frameIndex / columns);
    const xOffset = Math.floor(column * tileSize);
    const yOffset = Math.round(row * tileSize);
    const x = player.x - player.w * 0.5;
    const y = player.y - player.h * 0.5;
    ctx.drawImage(image, xOffset, yOffset, tileSize, tileSize, x, y, tileSize, tileSize);
    if (player.debug) {
        ctx.strokeStyle = "#E00000";
        ctx.lineWidth = 0.25;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(x, y, player.w, player.h);
        ctx.stroke();
    }
};
const drawProjectile = (projectile, dt)=>{
    if (!projectile.isActive) return;
    ctx.fillStyle = "#99c9b3";
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectile.r, 0, 2 * Math.PI);
    ctx.fill();
};

},{"../graphics":"4smRs","4173d07576b5c1f7":"5GMx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GMx0":[function(require,module,exports) {
module.exports = require("254c35b6041f352").getBundleURL("aNMIV") + "player.3b024644.png" + "?" + Date.now();

},{"254c35b6041f352":"lgJ39"}],"3WPpE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updatePlayer", ()=>updatePlayer);
parcelHelpers.export(exports, "updateProjectile", ()=>updateProjectile);
var _demon = require("../demon/demon");
var _map = require("../map");
var _draw = require("./draw");
const updatePlayer = (player, dt)=>{
    const doorTile = (0, _map.room).current.tiles.find((tile)=>!!tile.gateway && tile.x === player.tile.x && tile.y === player.tile.y);
    if (doorTile?.gateway) {
        (0, _map.room).current = (0, _map.map).get(doorTile.gateway)?.room;
        player.x = (doorTile.target?.x || 0) * (0, _draw.tileSize);
        player.y = (doorTile.target?.y || 0) * (0, _draw.tileSize);
    }
    let nx = player.x + player.vel.x * dt;
    let ny = player.y + player.vel.y * dt;
    const solidTiles = (0, _map.room).current.tiles.filter((tile)=>tile.type.isSolid) || [];
    for (const tile of solidTiles){
        const x = tile.x * (0, _draw.tileSize);
        const y = tile.y * (0, _draw.tileSize);
        if (nx > x && nx < x + (0, _draw.tileSize) && ny > y && ny < y + (0, _draw.tileSize)) {
            nx = player.x;
            ny = player.y;
        }
    }
    player.x = nx;
    player.y = ny;
    // Get player tile
    player.tile.x = Math.floor(player.x / (0, _draw.tileSize));
    player.tile.y = Math.floor(player.y / (0, _draw.tileSize));
    if (player.candle) {
        player.candle.x = player.x;
        player.candle.y = player.y;
        player.candle.room = (0, _map.room).current.id;
    }
};
const updateProjectile = (projectile, dt)=>{
    projectile.x += projectile.vel.x * dt;
    projectile.y += projectile.vel.y * dt;
    const dvx = (0, _demon.demon).x - projectile.x;
    const dvy = (0, _demon.demon).y - projectile.y;
    const magnitude = Math.sqrt(dvx * dvx + dvy * dvy);
    if (projectile.isActive && magnitude < (0, _demon.demon).w / 2) {
        (0, _demon.demon).hit();
        projectile.isActive = false;
    }
};

},{"../map":"ibpiC","./draw":"fVjU7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../demon/demon":"4R3jp"}],"ibpiC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "layout", ()=>layout);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "room", ()=>room);
var _graphics = require("../graphics");
var _rooms = require("../rooms");
var _layouts = require("../rooms/layouts");
var _drawRoom = require("../rooms/utils/drawRoom");
var _parseRoomLayout = require("../rooms/utils/parseRoomLayout");
// TODO: randomly generate map layout at some point...
// # = Empty room (with horrors you can't imagine... maybe)
// A = Altar
// 1 = Candle 1
// 2 = Candle 2
// 3 = Candle 3
// 4 = Candle 4
// 5 = Candle 5
const roomTypeMap = new Map([
    [
        "#",
        (0, _rooms.ROOM_TYPE).EMPTY
    ],
    [
        "A",
        (0, _rooms.ROOM_TYPE).MAIN
    ],
    [
        "1",
        (0, _rooms.ROOM_TYPE).EMPTY
    ],
    [
        "2",
        (0, _rooms.ROOM_TYPE).EMPTY
    ],
    [
        "3",
        (0, _rooms.ROOM_TYPE).EMPTY
    ],
    [
        "4",
        (0, _rooms.ROOM_TYPE).EMPTY
    ],
    [
        "5",
        (0, _rooms.ROOM_TYPE).EMPTY
    ]
]);
const layout = [
    [
        "1",
        " ",
        " ",
        " ",
        " ",
        " ",
        "4",
        " "
    ],
    [
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#"
    ],
    [
        " ",
        "#",
        " ",
        "#",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        "#",
        "#",
        "A",
        "#",
        "#",
        "#",
        " "
    ],
    [
        " ",
        "#",
        " ",
        "#",
        " ",
        " ",
        "#",
        "3"
    ],
    [
        " ",
        "#",
        "#",
        "#",
        " ",
        "#",
        "#",
        " "
    ],
    [
        "2",
        "#",
        " ",
        "#",
        "5",
        " ",
        " ",
        " "
    ]
];
const rows = layout.length;
const columns = layout[0].length;
const mapItems = new Map();
for(let y = 0; y < layout.length; y++){
    const row = layout[y];
    for(let x = 0; x < row.length; x++){
        const char = row[x];
        if (!char || char === " ") continue;
        const id = `room-${x}-${y}`;
        const type = roomTypeMap.get(char) || (0, _rooms.ROOM_TYPE).EMPTY;
        mapItems.set(id, {
            x,
            y,
            id,
            type
        });
    }
}
const map = new Map();
mapItems.forEach((item)=>{
    const adjacentRooms = [
        {
            x: item.x,
            y: item.y - 1,
            dir: (0, _parseRoomLayout.GATEWAY_DIRECTION).NORTH
        },
        {
            x: item.x + 1,
            y: item.y,
            dir: (0, _parseRoomLayout.GATEWAY_DIRECTION).EAST
        },
        {
            x: item.x,
            y: item.y + 1,
            dir: (0, _parseRoomLayout.GATEWAY_DIRECTION).SOUTH
        },
        {
            x: item.x - 1,
            y: item.y,
            dir: (0, _parseRoomLayout.GATEWAY_DIRECTION).WEST
        }
    ];
    const gateways = adjacentRooms.reduce((gateways, roomCoords)=>{
        const id = mapItems.get(`room-${roomCoords.x}-${roomCoords.y}`)?.id;
        let x = 0;
        let y = 0;
        switch(roomCoords.dir){
            case (0, _parseRoomLayout.GATEWAY_DIRECTION).NORTH:
                x = Math.floor((0, _graphics.COLUMNS) / 2);
                break;
            case (0, _parseRoomLayout.GATEWAY_DIRECTION).EAST:
                x = (0, _graphics.COLUMNS) - 1;
                y = Math.floor((0, _graphics.ROWS) / 2);
                break;
            case (0, _parseRoomLayout.GATEWAY_DIRECTION).SOUTH:
                x = Math.floor((0, _graphics.COLUMNS) / 2);
                y = (0, _graphics.ROWS) - 1;
                break;
            case (0, _parseRoomLayout.GATEWAY_DIRECTION).WEST:
                y = Math.floor((0, _graphics.ROWS) / 2);
                break;
        }
        return id ? [
            ...gateways,
            {
                x,
                y,
                id,
                dir: roomCoords.dir
            }
        ] : gateways;
    }, []);
    const layout = (0, _layouts.layouts).get(item.type);
    if (!layout) return;
    const room = {
        id: item.id,
        tiles: (0, _parseRoomLayout.parseRoomLayout)(layout, gateways),
        draw: ()=>(0, _drawRoom.drawRoom)(room.tiles)
    };
    map.set(item.id, {
        ...item,
        room
    });
});
const initialRoom = map.get("room-3-3")?.room;
const room = {
    current: initialRoom
};

},{"../rooms":"dAB8r","../rooms/layouts":"6TPcl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../rooms/utils/drawRoom":"5rmtE","../rooms/utils/parseRoomLayout":"dHsR6","../graphics":"4smRs"}],"dAB8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROOM_TYPE", ()=>ROOM_TYPE);
var ROOM_TYPE;
(function(ROOM_TYPE) {
    ROOM_TYPE[ROOM_TYPE["EMPTY"] = 0] = "EMPTY";
    ROOM_TYPE[ROOM_TYPE["MAIN"] = 1] = "MAIN";
    ROOM_TYPE[ROOM_TYPE["CANDLE_ROOM_1"] = 2] = "CANDLE_ROOM_1";
    ROOM_TYPE[ROOM_TYPE["CANDLE_ROOM_2"] = 3] = "CANDLE_ROOM_2";
    ROOM_TYPE[ROOM_TYPE["CANDLE_ROOM_3"] = 4] = "CANDLE_ROOM_3";
    ROOM_TYPE[ROOM_TYPE["CANDLE_ROOM_4"] = 5] = "CANDLE_ROOM_4";
    ROOM_TYPE[ROOM_TYPE["CANDLE_ROOM_5"] = 6] = "CANDLE_ROOM_5";
})(ROOM_TYPE || (ROOM_TYPE = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TPcl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "layouts", ()=>layouts);
var _ = require("..");
var _main = require("./main");
var _empty = require("./empty");
const layouts = new Map([
    [
        (0, _.ROOM_TYPE).MAIN,
        (0, _main.main)
    ],
    [
        (0, _.ROOM_TYPE).EMPTY,
        (0, _empty.empty)
    ]
]);

},{"..":"dAB8r","./main":"fT3hy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./empty":"9Z8Zr"}],"fT3hy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main);
const layout = [
    "Q#############E",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000012300000R",
    "L0000045600000R",
    "L0000078900000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "TBBBBBBBBBBBBBY"
];
const main = layout.join("\n");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Z8Zr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>empty);
const layout = [
    "Q#############E",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "L0000000000000R",
    "TBBBBBBBBBBBBBY"
];
const empty = layout.join("\n");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rmtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawRoom", ()=>drawRoom);
var _drawTile = require("../../tiles/drawTile");
const drawRoom = (tiles)=>{
    tiles.forEach((0, _drawTile.drawTile));
};

},{"../../tiles/drawTile":"2jJ7Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jJ7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawTile", ()=>drawTile);
var _graphics = require("../graphics");
var _tileset = require("./tileset");
const { ctx } = (0, _graphics.getGraphics)();
const drawTile = (tile)=>{
    const index = tile.type.graphicIndexes[tile.type.currentFrame];
    const column = Math.floor(index % (0, _tileset.columns));
    const row = Math.floor(index / (0, _tileset.columns));
    const xOffset = column * (0, _tileset.tileSize);
    const yOffset = row * (0, _tileset.tileSize);
    const x = tile.x * (0, _tileset.tileSize);
    const y = tile.y * (0, _tileset.tileSize);
    ctx.drawImage((0, _tileset.image), xOffset, yOffset, (0, _tileset.tileSize), (0, _tileset.tileSize), x, y, (0, _tileset.tileSize), (0, _tileset.tileSize));
    if (tile.debug) {
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1 / 8;
        ctx.beginPath();
        ctx.rect(x, y, (0, _tileset.tileSize), (0, _tileset.tileSize));
        ctx.stroke();
    }
};

},{"../graphics":"4smRs","./tileset":"l1Ydc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHsR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GATEWAY_DIRECTION", ()=>GATEWAY_DIRECTION);
parcelHelpers.export(exports, "parseRoomLayout", ()=>parseRoomLayout);
var _graphics = require("../../graphics");
var _types = require("../../tiles/types");
var GATEWAY_DIRECTION;
(function(GATEWAY_DIRECTION) {
    GATEWAY_DIRECTION[GATEWAY_DIRECTION["NORTH"] = 0] = "NORTH";
    GATEWAY_DIRECTION[GATEWAY_DIRECTION["EAST"] = 1] = "EAST";
    GATEWAY_DIRECTION[GATEWAY_DIRECTION["SOUTH"] = 2] = "SOUTH";
    GATEWAY_DIRECTION[GATEWAY_DIRECTION["WEST"] = 3] = "WEST";
})(GATEWAY_DIRECTION || (GATEWAY_DIRECTION = {}));
const parseRoomLayout = (input, gateways)=>{
    const arr = input.split("\n").map((line)=>line.split(""));
    const tiles = [];
    for(let y = 0; y < arr.length; y++){
        const row = arr[y];
        for(let x = 0; x < row.length; x++){
            const char = row[x];
            const tile = {
                x,
                y,
                debug: false,
                type: (0, _types.tileMap).get(char) || (0, _types.tileTypes).air
            };
            tiles.push(tile);
        }
    }
    gateways.forEach((gateway)=>{
        const tile = tiles.find((tile)=>tile.x === gateway.x && tile.y === gateway.y);
        if (!tile) return;
        tile.debug = true;
        tile.gateway = gateway.id;
        switch(gateway.dir){
            case 0:
                tile.target = {
                    x: tile.x,
                    y: (0, _graphics.ROWS) - 2
                };
                tile.type = (0, _types.tileTypes).gateway.north;
                break;
            case 1:
                tile.target = {
                    x: 1,
                    y: tile.y
                };
                tile.type = (0, _types.tileTypes).gateway.east;
                break;
            case 2:
                tile.target = {
                    x: tile.x,
                    y: 1
                };
                tile.type = (0, _types.tileTypes).gateway.south;
                break;
            case 3:
                tile.target = {
                    x: (0, _graphics.COLUMNS) - 2,
                    y: tile.y
                };
                tile.type = (0, _types.tileTypes).gateway.west;
                break;
        }
    });
    return tiles;
};

},{"../../tiles/types":"ef9J5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../graphics":"4smRs"}],"ef9J5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tileMap", ()=>tileMap);
parcelHelpers.export(exports, "tileTypes", ()=>tileTypes);
var _tileset = require("./tileset");
const baseTile = {
    isSolid: false,
    isAnimated: false,
    isInteractive: false,
    acc: 0,
    currentFrame: 0,
    frameDuration: 0,
    graphicIndexes: [
        0
    ]
};
const tileMap = new Map();
const tileTypes = {
    air: {
        ...baseTile
    },
    ground: {
        ...baseTile,
        graphicIndexes: [
            (0, _tileset.columns) * 2 + 2
        ]
    },
    wall: {
        topLeft: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                1
            ]
        },
        top: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                2
            ]
        },
        topRight: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                5
            ]
        },
        left: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                (0, _tileset.columns) * 1 + 1
            ]
        },
        right: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                (0, _tileset.columns) * 1 + 5
            ]
        },
        bottomLeft: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                (0, _tileset.columns) * 4 + 1
            ]
        },
        bottom: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                (0, _tileset.columns) * 4 + 2
            ]
        },
        bottomRight: {
            ...baseTile,
            isSolid: true,
            graphicIndexes: [
                (0, _tileset.columns) * 4 + 5
            ]
        }
    },
    gateway: {
        north: {
            ...baseTile,
            isInteractive: true,
            graphicIndexes: [
                3
            ]
        },
        east: {
            ...baseTile,
            isInteractive: true,
            graphicIndexes: [
                (0, _tileset.columns) * 2 + 5
            ]
        },
        south: {
            ...baseTile,
            isInteractive: true,
            graphicIndexes: [
                (0, _tileset.columns) * 4 + 3
            ]
        },
        west: {
            ...baseTile,
            isInteractive: true,
            graphicIndexes: [
                (0, _tileset.columns) * 2 + 1
            ]
        }
    },
    candle: {
        ...baseTile,
        isAnimated: true,
        isInteractive: true,
        acc: 0,
        currentFrame: 0,
        frameDuration: 30,
        graphicIndexes: [
            9,
            10,
            11,
            12
        ]
    }
};
// General
tileMap.set(" ", tileTypes.air);
tileMap.set("0", tileTypes.ground);
// Walls
tileMap.set("Q", tileTypes.wall.topLeft);
tileMap.set("#", tileTypes.wall.top);
tileMap.set("E", tileTypes.wall.topRight);
tileMap.set("R", tileTypes.wall.right);
tileMap.set("L", tileTypes.wall.left);
tileMap.set("T", tileTypes.wall.bottomLeft);
tileMap.set("B", tileTypes.wall.bottom);
tileMap.set("Y", tileTypes.wall.bottomRight);
// Gateways
tileMap.set("H", tileTypes.gateway.north);
tileMap.set("J", tileTypes.gateway.east);
tileMap.set("N", tileTypes.gateway.south);
tileMap.set("M", tileTypes.gateway.west);
// Candle
tileMap.set("C", tileTypes.candle);
// Alter tiles
tileMap.set("1", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 5
    ]
});
tileMap.set("2", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 5 + 1
    ]
});
tileMap.set("3", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 5 + 2
    ]
});
tileMap.set("4", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 6
    ]
});
tileMap.set("5", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 6 + 1
    ]
});
tileMap.set("6", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 6 + 2
    ]
});
tileMap.set("7", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 7
    ]
});
tileMap.set("8", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 7 + 1
    ]
});
tileMap.set("9", {
    ...baseTile,
    graphicIndexes: [
        (0, _tileset.columns) * 7 + 2
    ]
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./tileset":"l1Ydc"}],"4R3jp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "demon", ()=>demon);
var _drawDemon = require("./drawDemon");
var _updateDemon = require("./updateDemon");
const hitURL = new URL(require("ddb0abf66532e6b5"));
const hit = new Audio(hitURL.toString());
hit.load();
const demon = {
    x: 70,
    y: 40,
    vel: {
        x: 0,
        y: 0
    },
    w: 24,
    h: 24,
    health: 1,
    debug: false,
    isActive: false,
    update: (dt)=>(0, _updateDemon.updateDemon)(demon, dt),
    draw: ()=>(0, _drawDemon.drawDemon)(demon),
    hit: ()=>{
        demon.health -= 0.01;
        hit.play();
        if (demon.health <= 0) {
            alert("Game over!");
            demon.health = 1;
            demon.isActive = false;
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./drawDemon":"5ljNQ","./updateDemon":"baN1A","ddb0abf66532e6b5":"2mn1L"}],"5ljNQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image", ()=>image);
parcelHelpers.export(exports, "tileSize", ()=>tileSize);
parcelHelpers.export(exports, "drawDemon", ()=>drawDemon);
var _graphics = require("../graphics");
const { ctx } = (0, _graphics.getGraphics)();
const image = new Image();
const tileSize = 24;
const frames = 5;
const imageUrl = new URL(require("f548d3ca4a371da0"));
image.src = imageUrl.toString();
const frameLength = 20;
let acc = 0;
let frame = 0;
const drawDemon = (demon)=>{
    if (!demon.isActive) return;
    acc++;
    if (acc >= frameLength) {
        frame++;
        acc = 0;
    }
    if (frame >= frames) frame = 0;
    const column = Math.floor(frame % frames);
    const row = Math.floor(frame / frames);
    const xOffset = Math.floor(column * tileSize);
    const yOffset = Math.round(row * tileSize);
    const x = demon.x - demon.w * 0.5;
    const y = demon.y - demon.h * 0.5;
    ctx.drawImage(image, xOffset, yOffset, tileSize, tileSize, x, y, demon.w, demon.h);
    drawHealthBar(demon);
    if (demon.debug) {
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1 / 8;
        ctx.beginPath();
        ctx.rect(x, y, demon.w, demon.h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + demon.w, y + demon.h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + demon.w, y);
        ctx.lineTo(x, y + demon.h);
        ctx.stroke();
    }
};
const drawHealthBar = (demon)=>{
    const x = 1;
    const y = 1;
    const w = 50;
    const h = 5;
    const margin = 0.5;
    // Health bar
    ctx.beginPath();
    ctx.fillStyle = "#191b1a";
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#294257";
    ctx.rect(x + margin, y + margin, w - margin * 2, h - margin * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#99c9b3";
    ctx.rect(x + margin, y + margin, (w - margin * 2) * demon.health, h - margin * 2);
    ctx.fill();
};

},{"../graphics":"4smRs","f548d3ca4a371da0":"d38j5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d38j5":[function(require,module,exports) {
module.exports = require("86b4546858135016").getBundleURL("aNMIV") + "demon.00ecca59.png" + "?" + Date.now();

},{"86b4546858135016":"lgJ39"}],"baN1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateDemon", ()=>updateDemon);
var _player = require("../player");
const DEMON_MAX_VEL = 15;
const updateDemon = (demon, dt)=>{
    if (!demon.isActive) return;
    demon.vel.x = demon.x < (0, _player.player).x ? DEMON_MAX_VEL : -DEMON_MAX_VEL;
    demon.vel.y = demon.y < (0, _player.player).y ? DEMON_MAX_VEL : -DEMON_MAX_VEL;
    demon.x += demon.vel.x * dt;
    demon.y += demon.vel.y * dt;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../player":"7P3Ry"}],"2mn1L":[function(require,module,exports) {
module.exports = require("1c39fbdfa6fdb436").getBundleURL("aNMIV") + "hit.9357292b.mp3" + "?" + Date.now();

},{"1c39fbdfa6fdb436":"lgJ39"}],"evEEC":[function(require,module,exports) {
module.exports = require("f0d9c0dbd49f397c").getBundleURL("aNMIV") + "bling.4503d323.mp3" + "?" + Date.now();

},{"f0d9c0dbd49f397c":"lgJ39"}],"jBMlp":[function(require,module,exports) {
var _player = require("../player");
var _map = require("../map");
var _candles = require("../candles");
var _tileset = require("../tiles/tileset");
window.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "w":
            (0, _player.player).vel.y = -(0, _player.PLAYER_MAX_VEL);
            break;
        case "a":
            (0, _player.player).vel.x = -(0, _player.PLAYER_MAX_VEL);
            break;
        case "s":
            (0, _player.player).vel.y = (0, _player.PLAYER_MAX_VEL);
            break;
        case "d":
            (0, _player.player).vel.x = (0, _player.PLAYER_MAX_VEL);
            break;
    }
});
window.addEventListener("keyup", (e)=>{
    switch(e.key){
        case "w":
            (0, _player.player).vel.y = 0;
            break;
        case "a":
            (0, _player.player).vel.x = 0;
            break;
        case "s":
            (0, _player.player).vel.y = 0;
            break;
        case "d":
            (0, _player.player).vel.x = 0;
            break;
        case "e":
            pickUpItem();
            break;
    }
});
window.addEventListener("mousedown", (e)=>{
    (0, _player.player).fire();
});
const pickupURL = new URL(require("61e8a335dedcdad6"));
const pickup = new Audio(pickupURL.toString());
pickup.load();
const pickUpItem = ()=>{
    if ((0, _player.player).candle) {
        delete (0, _player.player).candle;
        pickup.play();
        return;
    }
    const roomCandles = (0, _candles.candles).filter((candle)=>candle.room === (0, _map.room).current.id);
    if (roomCandles.length < 1) return;
    for (const candle of roomCandles)if (Math.abs((0, _player.player).x - candle.x) <= (0, _tileset.tileSize) && Math.abs((0, _player.player).y - candle.y) <= (0, _tileset.tileSize)) {
        (0, _player.player).candle = candle;
        pickup.play();
        break;
    }
};

},{"../player":"7P3Ry","../map":"ibpiC","../candles":"jyCin","../tiles/tileset":"l1Ydc","61e8a335dedcdad6":"gZIRi"}],"jyCin":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "candles", ()=>candles);
var _tileset = require("../tiles/tileset");
var _drawCandle = require("./drawCandle");
var _updateCandle = require("./updateCandle");
const candle1 = {
    x: 2 * (0, _tileset.tileSize),
    y: 1 * (0, _tileset.tileSize),
    debug: false,
    // room: 'room-0-0',
    room: "room-3-3",
    update: ()=>(0, _updateCandle.updateCandle)(candle1),
    draw: ()=>(0, _drawCandle.drawCandle)(candle1)
};
const candle2 = {
    x: 8 * (0, _tileset.tileSize),
    y: 8 * (0, _tileset.tileSize),
    debug: false,
    // room: 'room-0-6',
    room: "room-3-3",
    update: ()=>(0, _updateCandle.updateCandle)(candle2),
    draw: ()=>(0, _drawCandle.drawCandle)(candle2)
};
const candle3 = {
    x: 12 * (0, _tileset.tileSize),
    y: 8 * (0, _tileset.tileSize),
    debug: false,
    // room: 'room-7-4',
    room: "room-3-3",
    update: ()=>(0, _updateCandle.updateCandle)(candle3),
    draw: ()=>(0, _drawCandle.drawCandle)(candle3)
};
const candle4 = {
    x: 10 * (0, _tileset.tileSize),
    y: 2 * (0, _tileset.tileSize),
    debug: false,
    // room: 'room-6-0',
    room: "room-3-3",
    update: ()=>(0, _updateCandle.updateCandle)(candle4),
    draw: ()=>(0, _drawCandle.drawCandle)(candle4)
};
const candle5 = {
    x: 8 * (0, _tileset.tileSize),
    y: 4 * (0, _tileset.tileSize),
    debug: false,
    // room: 'room-4-6',
    room: "room-3-3",
    update: ()=>(0, _updateCandle.updateCandle)(candle5),
    draw: ()=>(0, _drawCandle.drawCandle)(candle5)
};
const candles = [
    candle1,
    candle2,
    candle3,
    candle4,
    candle5
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../tiles/tileset":"l1Ydc","./drawCandle":"9k0mU","./updateCandle":"evRc7"}],"9k0mU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawCandle", ()=>drawCandle);
var _graphics = require("../graphics");
var _tileset = require("../tiles/tileset");
var _types = require("../tiles/types");
const { ctx } = (0, _graphics.getGraphics)();
const tileType = (0, _types.tileTypes).candle;
const drawCandle = (candle)=>{
    const index = tileType.graphicIndexes[tileType.currentFrame];
    const column = Math.floor(index % (0, _tileset.columns));
    const row = Math.floor(index / (0, _tileset.columns));
    const xOffset = column * (0, _tileset.tileSize);
    const yOffset = row * (0, _tileset.tileSize);
    const x = candle.x - (0, _tileset.tileSize) * 0.5;
    const y = candle.y - (0, _tileset.tileSize) * 0.5;
    ctx.drawImage((0, _tileset.image), xOffset, yOffset, (0, _tileset.tileSize), (0, _tileset.tileSize), x, y, (0, _tileset.tileSize), (0, _tileset.tileSize));
    if (candle.debug) {
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1 / 8;
        ctx.beginPath();
        ctx.rect(x, y, (0, _tileset.tileSize), (0, _tileset.tileSize));
        ctx.stroke();
    }
};

},{"../graphics":"4smRs","../tiles/tileset":"l1Ydc","../tiles/types":"ef9J5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evRc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateCandle", ()=>updateCandle);
const updateCandle = (candle)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZIRi":[function(require,module,exports) {
module.exports = require("565dca422045f602").getBundleURL("aNMIV") + "pickup.ca1cd095.mp3" + "?" + Date.now();

},{"565dca422045f602":"lgJ39"}],"9Jswh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateTiles", ()=>updateTiles);
var _map = require("../map");
var _player = require("../player");
var _types = require("./types");
const updateTiles = ()=>{
    (0, _map.room).current.tiles.forEach((tile)=>{
        const isPlayerTile = tile.x === (0, _player.player).tile.x && tile.y === (0, _player.player).tile.y;
        tile.debug = isPlayerTile && (0, _player.player).debug;
    });
    (0, _types.tileMap).forEach((tile)=>{
        if (!tile.isAnimated) return;
        tile.acc++;
        if (tile.acc >= tile.frameDuration) {
            tile.acc = 0;
            tile.currentFrame++;
        }
        if (tile.currentFrame >= tile.graphicIndexes.length) tile.currentFrame = 0;
    });
};

},{"./types":"ef9J5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../map":"ibpiC","../player":"7P3Ry"}]},["dZI1r","jeorp"], "jeorp", "parcelRequireaca8")

//# sourceMappingURL=index.b7a05eb9.js.map
