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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsGroupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Word shuffle controller\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordsGroupRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"expo.inOut\"\n        });\n    }, []);\n    //Progress bar animation controll\n    gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(progressRef.current, {\n        scale: 1,\n        duration: 5,\n        ease\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: loaderRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsGroupRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roriputu/Documents/Web-Dev/nextjs/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"Zqy2jeuJhP+9I4tZ6NrLbEWN9l8=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDSDtBQUVjO0FBRTFDLE1BQU1NLFNBQVM7O0lBRWIsTUFBTUMsWUFBWUwsNkNBQU1BLENBQUM7SUFDekIsTUFBTU0sY0FBY04sNkNBQU1BLENBQUM7SUFDM0IsTUFBTU8saUJBQWlCUCw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNUSxnQkFBZ0JSLDZDQUFNQSxDQUFDO0lBRTdCLHlCQUF5QjtJQUN6QkQsZ0RBQVNBLENBQUM7UUFDUkcsc0NBQUlBLENBQUNPLEdBQUdELGNBQWNFLFNBQVM7WUFDN0JDLFVBQVUsQ0FBQztZQUNYQyxVQUFVO1lBQ1ZDLE1BQU07UUFDUjtJQUNGLEdBQUcsRUFBRTtJQUVMLGlDQUFpQztJQUNqQ1gsc0NBQUlBLENBQUNZLEtBQUtSLFlBQVlJLFNBQVM7UUFDN0JLLE9BQU87UUFDUEgsVUFBVTtRQUNWQztJQUNGO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdkLDRFQUFzQmU7UUFBRUMsS0FBS2Q7OzBCQUMzQyw4REFBQ1c7Z0JBQUlDLFdBQVdkLG9GQUE4QmlCOztrQ0FDNUMsOERBQUNKO3dCQUFJQyxXQUFXZCw2RUFBdUJrQjt3QkFBRUYsS0FBS2I7Ozs7OztrQ0FDOUMsOERBQUNnQjt3QkFBS0wsV0FBV2QsbUZBQTZCb0I7d0JBQUVKLEtBQUtaO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUV2RSw4REFBQ1M7Z0JBQUlDLFdBQVdkLG1FQUFhcUI7MEJBQzNCLDRFQUFDUjtvQkFBSUMsV0FBV2QsMEVBQW9Cc0I7O3NDQUNsQyw4REFBQ1Q7NEJBQUlDLFdBQVdkLDRFQUFzQnVCOzs7Ozs7c0NBQ3RDLDhEQUFDVjs0QkFBSUMsV0FBV2QsK0VBQXlCd0I7NEJBQUVSLEtBQUtYO3NDQUM3Q1Asd0NBQUtBLENBQUMyQixJQUFJLENBQUNDLE1BQU1DO2dDQUNoQixxQkFDRSw4REFBQ1I7b0NBQWlCTCxXQUFXZCx5RUFBbUI0Qjs4Q0FDN0NGO21DQURRQzs7Ozs7NEJBSWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0E1Q00xQjtLQUFBQTtBQThDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2FkZXIvaW5kZXguanM/MWZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzTnVtUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3b3Jkc0dyb3VwUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vV29yZCBzaHVmZmxlIGNvbnRyb2xsZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnRvKHdvcmRzR3JvdXBSZWYuY3VycmVudCwge1xuICAgICAgeVBlcmNlbnQ6IC04MCxcbiAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgfSk7XG4gIH0sIFtdKVxuXG4gIC8vUHJvZ3Jlc3MgYmFyIGFuaW1hdGlvbiBjb250cm9sbFxuICBnc2FwLmZyb20ocHJvZ3Jlc3NSZWYuY3VycmVudCwge1xuICAgIHNjYWxlOiAxLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2VcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd3JhcHBlcn0gcmVmPXtsb2FkZXJSZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc30gcmVmPXtwcm9ncmVzc1JlZn0+PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXJ9IHJlZj17cHJvZ3Jlc3NOdW1SZWZ9PjA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dvcmRzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fb3ZlcmxheX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dvcmRzR3JvdXB9IHJlZj17d29yZHNHcm91cFJlZn0+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIndvcmRzIiwiZ3NhcCIsInN0eWxlcyIsIkxvYWRlciIsImxvYWRlclJlZiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1SZWYiLCJ3b3Jkc0dyb3VwUmVmIiwidG8iLCJjdXJyZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImVhc2UiLCJmcm9tIiwic2NhbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2FkZXJfX3dyYXBwZXIiLCJyZWYiLCJsb2FkZXJfX3Byb2dyZXNzV3JhcHBlciIsImxvYWRlcl9fcHJvZ3Jlc3MiLCJzcGFuIiwibG9hZGVyX19wcm9ncmVzc051bWJlciIsImxvYWRlciIsImxvYWRlcl9fd29yZHMiLCJsb2FkZXJfX292ZXJsYXkiLCJsb2FkZXJfX3dvcmRzR3JvdXAiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJsb2FkZXJfX3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});