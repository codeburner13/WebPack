/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/getDateDiff.js":
/*!***************************!*\
  !*** ./js/getDateDiff.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_cdn_jsdelivr_net_npm_luxon_2_4_0_build_es6_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/npm/luxon@2.4.0/build/es6/luxon.js */ \"https://cdn.jsdelivr.net/npm/luxon@2.4.0/build/es6/luxon.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_npm_luxon_2_4_0_build_es6_luxon_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_cdn_jsdelivr_net_npm_luxon_2_4_0_build_es6_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\nfunction getDateDiff(dateFrom, dateTo) {\r\n\r\n    const dateFromObj = https_cdn_jsdelivr_net_npm_luxon_2_4_0_build_es6_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateFrom)\r\n    const dateToObj = https_cdn_jsdelivr_net_npm_luxon_2_4_0_build_es6_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateTo)\r\n\r\n    return dateFromObj.diff(dateToObj, ['years', 'months', 'days']).toObject()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDateDiff);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-example/./js/getDateDiff.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../styles/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main_js__WEBPACK_IMPORTED_MODULE_0__]);\n_main_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-example/./js/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _printResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printResult.js */ \"./js/printResult.js\");\n/* harmony import */ var _getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDateDiff.js */ \"./js/getDateDiff.js\");\n/* harmony import */ var _switchClick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchClick.js */ \"./js/switchClick.js\");\n/* harmony import */ var _switchClick_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_switchClick_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _timerNew_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timerNew.js */ \"./js/timerNew.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__]);\n_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('datecalc');\r\n\r\n\r\nform.onsubmit = (event) => {\r\n    event.preventDefault();\r\n \r\n    const formData = new FormData(event.target);\r\n\r\n    const firstDate = formData.get('firstDate');\r\n    const secondDate = formData.get('secondDate');\r\n\r\n    console.log(firstDate, secondDate);\r\n\r\n    if (!firstDate || !secondDate) {\r\n        (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printError)('Oh, stop it you!')\r\n    }else{\r\n        const dateDiff = (0,_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstDate, secondDate);\r\n        (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(dateDiff)\r\n    }\r\n};\r\n\r\nconst timerInput = document.getElementById(\"minute\");\r\nconst startBtn = document.getElementById(\"startBtn\");\r\nconst stopBtn = document.getElementById(\"stopBtn\");\r\n\r\nstartBtn.addEventListener('click', function(event) {\r\n    event.preventDefault(); \r\n    const timerMinute = parseInt(timerInput.value) * 60\r\n    ;(0,_timerNew_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timerMinute);\r\n});\r\n\r\nstopBtn.addEventListener('click', function(event) {\r\n    event.preventDefault();\r\n    clearInterval(_timerNew_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n});\r\n\r\nclearTimeout(t);\r\nclearInterval(interval);\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-example/./js/main.js?");

/***/ }),

/***/ "./js/printResult.js":
/*!***************************!*\
  !*** ./js/printResult.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printError\": () => (/* binding */ printError),\n/* harmony export */   \"printResult\": () => (/* binding */ printResult)\n/* harmony export */ });\nconst result = document.getElementById('datecalc__result');\r\n\r\nconst printError = (errorText) => {\r\n    result.innerText = errorText;\r\n}\r\n\r\nconst printResult = (date) => {\r\n    result.innerText = date\r\n}\n\n//# sourceURL=webpack://webpack-example/./js/printResult.js?");

/***/ }),

/***/ "./js/switchClick.js":
/*!***************************!*\
  !*** ./js/switchClick.js ***!
  \***************************/
/***/ (() => {

eval("const dateCalApplicationBtn = document.querySelector('.dateCalApplication');\r\nconst timerApplication = document.querySelector('.timerApplication');\r\nconst dateCalc = document.getElementById('datecalc');\r\nconst switchTimer = document.getElementById('timerForm');\r\n\r\ndateCalApplicationBtn.addEventListener('click', () => {\r\n    dateCalc.classList.toggle('hidden');\r\n});\r\n\r\ntimerApplication.addEventListener('click', () => {\r\n    switchTimer.classList.toggle('hidden');\r\n});\n\n//# sourceURL=webpack://webpack-example/./js/switchClick.js?");

/***/ }),

/***/ "./js/timerNew.js":
/*!************************!*\
  !*** ./js/timerNew.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timer)\n/* harmony export */ });\nfunction timer(timerMinute) {\r\n    setInterval(function () {\r\n    let seconds = timerMinute%60\r\n    let minutes = timerMinute/60%60\r\n    let hour = timerMinute/60/60%60\r\n    if (timerMinute <= 0) {\r\n        clearInterval(timer);\r\n        \r\n        let sound = new Howl({\r\n            src: ['sound.mp3']\r\n          });\r\n        sound.play();\r\n        alert(\"Время закончилось\");\r\n        return timerMinute = undefined;\r\n    } else {\r\n        const timerShow = document.getElementById(\"timer\");\r\n\r\n        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;\r\n        timerShow.innerHTML = strTimer;\r\n    }\r\n    --timerMinute;\r\n    }, 1000)\r\n}\r\n    \n\n//# sourceURL=webpack://webpack-example/./js/timerNew.js?");

/***/ }),

/***/ "https://cdn.jsdelivr.net/npm/luxon@2.4.0/build/es6/luxon.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;