"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n// import dotenv from \"dotenv\";\n// dotenv.config();\nfunction Home({ DATA  }) {\n    console.log(DATA);\n    return \"ok\";\n};\nasync function getStaticProps() {\n    const API = process.env.API;\n    const DATA = await fetch(API).then((response)=>{\n        return response.json();\n    });\n    return {\n        props: {\n            DATA\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUJBQW1CO0FBRUosU0FBU0EsSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRSxFQUFFO0lBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFFbEIsT0FBTyxJQUFJLENBQUM7Q0FDZDtBQUVNLGVBQWVHLGNBQWMsR0FBRztJQUNwQyxNQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO0lBRTNCLE1BQU1KLElBQUksR0FBRyxNQUFNTyxLQUFLLENBQUNILEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1FBQzlDLE9BQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7S0FDekIsQ0FBQztJQUVGLE9BQU87UUFDSkMsS0FBSyxFQUFFO1lBQ0pYLElBQUk7U0FDTjtLQUNILENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1jYXRhbG9ndWUtdGhlb25lLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG4vLyBkb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBEQVRBIH0pIHtcbiAgIGNvbnNvbGUubG9nKERBVEEpO1xuXG4gICByZXR1cm4gXCJva1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICBjb25zdCBBUEkgPSBwcm9jZXNzLmVudi5BUEk7XG5cbiAgIGNvbnN0IERBVEEgPSBhd2FpdCBmZXRjaChBUEkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgfSk7XG5cbiAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgREFUQSxcbiAgICAgIH0sXG4gICB9O1xufVxuIl0sIm5hbWVzIjpbIkhvbWUiLCJEQVRBIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwiQVBJIiwicHJvY2VzcyIsImVudiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();