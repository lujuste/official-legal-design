"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/ViewContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/ViewContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewportProvider\": function() { return /* binding */ ViewportProvider; },\n/* harmony export */   \"useViewportContext\": function() { return /* binding */ useViewportContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/lucasjuste/Desktop/APP_Bits_Legal_Design/src/contexts/ViewContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar ViewportContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nfunction ViewportProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useInView = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)(),\n      ref = _useInView.ref,\n      inView = _useInView.inView;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log('use effect hook, inview =', inView);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ViewportContext.Provider, {\n    value: (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)(),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ViewportProvider, \"mqvR0qrDYf3bVMNhtED3a/gVtTk=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView, react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView];\n});\n\n_c = ViewportProvider;\nvar useViewportContext = function useViewportContext() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportContext);\n};\n\n_s2(useViewportContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewportProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVmlld0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7O0FBTUEsSUFBTUksZUFBZSxnQkFBR0osb0RBQWEsQ0FBQyxFQUFELENBQXJDO0FBRU8sU0FBU0ssZ0JBQVQsT0FBNkQ7QUFBQTs7QUFBQSxNQUFqQ0MsUUFBaUMsUUFBakNBLFFBQWlDOztBQUNsRSxtQkFBd0JILHNFQUFTLEVBQWpDO0FBQUEsTUFBUUksR0FBUixjQUFRQSxHQUFSO0FBQUEsTUFBYUMsTUFBYixjQUFhQSxNQUFiOztBQUVBTixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZE8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLE1BQXpDO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLGVBQUQsQ0FBaUIsUUFBakI7QUFBMEIsU0FBSyxFQUFFTCxzRUFBUyxFQUExQztBQUFBLGNBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBWmVEO1VBQ1VGLG9FQU9XQTs7O0tBUnJCRTtBQWNULElBQU1NLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQTs7QUFBQSxTQUFNVixpREFBVSxDQUFDRyxlQUFELENBQWhCO0FBQUEsQ0FBM0I7O0lBQU1PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9WaWV3Q29udGV4dC50c3g/M2E0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VEaXNjbG9zdXJlUmV0dXJuLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuXG5pbnRlcmZhY2UgVmlld3BvcnRDb250ZXh0RGF0YSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuY29uc3QgVmlld3BvcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdwb3J0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBWaWV3cG9ydENvbnRleHREYXRhKSB7XG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygndXNlIGVmZmVjdCBob29rLCBpbnZpZXcgPScsIGluVmlldylcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Vmlld3BvcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VJblZpZXcoKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9WaWV3cG9ydENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVZpZXdwb3J0Q29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoVmlld3BvcnRDb250ZXh0KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlSW5WaWV3IiwiVmlld3BvcnRDb250ZXh0IiwiVmlld3BvcnRQcm92aWRlciIsImNoaWxkcmVuIiwicmVmIiwiaW5WaWV3IiwiY29uc29sZSIsImxvZyIsInVzZVZpZXdwb3J0Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ViewContext.tsx\n");

/***/ })

});