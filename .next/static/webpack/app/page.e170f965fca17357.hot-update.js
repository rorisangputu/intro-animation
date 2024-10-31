"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Loader/index.js":
/*!****************************************!*\
  !*** ./app/components/Loader/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsGroupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordsGroupRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"expo.inOut\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: loaderRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsGroupRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"Zqy2jeuJhP+9I4tZ6NrLbEWN9l8=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDSDtBQUVjO0FBRTFDLE1BQU1NLFNBQVM7O0lBRWIsTUFBTUMsWUFBWUwsNkNBQU1BLENBQUM7SUFDekIsTUFBTU0sY0FBY04sNkNBQU1BLENBQUM7SUFDM0IsTUFBTU8saUJBQWlCUCw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNUSxnQkFBZ0JSLDZDQUFNQSxDQUFDO0lBRTdCRCxnREFBU0EsQ0FBQztRQUNSRyxzQ0FBSUEsQ0FBQ08sR0FBR0QsY0FBY0UsU0FBUztZQUM3QkMsVUFBVSxDQUFDO1lBQ1hDLFVBQVU7WUFDVkMsTUFBTTtRQUNSO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdaLDRFQUFzQmE7UUFBRUMsS0FBS1o7OzBCQUMzQyw4REFBQ1M7Z0JBQUlDLFdBQVdaLG9GQUE4QmU7O2tDQUM1Qyw4REFBQ0o7d0JBQUlDLFdBQVdaLDZFQUF1QmdCO3dCQUFFRixLQUFLWDs7Ozs7O2tDQUM5Qyw4REFBQ2M7d0JBQUtMLFdBQVdaLG1GQUE2QmtCO3dCQUFFSixLQUFLVjtrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFFdkUsOERBQUNPO2dCQUFJQyxXQUFXWixtRUFBYW1COzBCQUMzQiw0RUFBQ1I7b0JBQUlDLFdBQVdaLDBFQUFvQm9COztzQ0FDbEMsOERBQUNUOzRCQUFJQyxXQUFXWiw0RUFBc0JxQjs7Ozs7O3NDQUN0Qyw4REFBQ1Y7NEJBQUlDLFdBQVdaLCtFQUF5QnNCOzRCQUFFUixLQUFLVDtzQ0FDN0NQLHdDQUFLQSxDQUFDeUIsSUFBSSxDQUFDQyxNQUFNQztnQ0FDaEIscUJBQ0UsOERBQUNSO29DQUFpQkwsV0FBV1oseUVBQW1CMEI7OENBQzdDRjttQ0FEUUM7Ozs7OzRCQUlmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBckNNeEI7S0FBQUE7QUF1Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzPzFmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBsb2FkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwcm9ncmVzc051bVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgd29yZHNHcm91cFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAudG8od29yZHNHcm91cFJlZi5jdXJyZW50LCB7XG4gICAgICB5UGVyY2VudDogLTgwLFxuICAgICAgZHVyYXRpb246IDUsXG4gICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIlxuICAgIH0pO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193cmFwcGVyfSByZWY9e2xvYWRlclJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzfSByZWY9e3Byb2dyZXNzUmVmfT48L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc051bWJlcn0gcmVmPXtwcm9ncmVzc051bVJlZn0+MDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0gcmVmPXt3b3Jkc0dyb3VwUmVmfT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3JkfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwid29yZHMiLCJnc2FwIiwic3R5bGVzIiwiTG9hZGVyIiwibG9hZGVyUmVmIiwicHJvZ3Jlc3NSZWYiLCJwcm9ncmVzc051bVJlZiIsIndvcmRzR3JvdXBSZWYiLCJ0byIsImN1cnJlbnQiLCJ5UGVyY2VudCIsImR1cmF0aW9uIiwiZWFzZSIsImRpdiIsImNsYXNzTmFtZSIsImxvYWRlcl9fd3JhcHBlciIsInJlZiIsImxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyIiwibG9hZGVyX19wcm9ncmVzcyIsInNwYW4iLCJsb2FkZXJfX3Byb2dyZXNzTnVtYmVyIiwibG9hZGVyIiwibG9hZGVyX193b3JkcyIsImxvYWRlcl9fb3ZlcmxheSIsImxvYWRlcl9fd29yZHNHcm91cCIsIm1hcCIsIndvcmQiLCJpbmRleCIsImxvYWRlcl9fd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});