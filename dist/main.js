"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkelvin_portfolio"] = self["webpackChunkkelvin_portfolio"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(127, 246, 255);\\r\\n}\\r\\n\\r\\n#display-Movies {\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  grid-template: 20%*10 /100%;\\r\\n  grid-gap: 4rem;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.movie-div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 0.6rem;\\r\\n}\\r\\n\\r\\n#menu {\\r\\n  margin: 3rem 20rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#footer-text {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  border: solid black 0.3rem;\\r\\n  border-radius: 50%;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.menu-link:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  border-top: solid black 0.25rem;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  margin-bottom: 0.5rem;\\r\\n  width: fit-content;\\r\\n}\\r\\n\\r\\n#popup-overlay {\\r\\n  position: fixed;\\r\\n  display: none;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: #c1c7d0;\\r\\n  z-index: 2;\\r\\n  mix-blend-mode: multiply;\\r\\n  backdrop-filter: blur(7px);\\r\\n}\\r\\n\\r\\n#details-popup {\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  height: max-content;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  padding: 16px 16px;\\r\\n  z-index: 3;\\r\\n  background-color: white;\\r\\n  margin: 16px;\\r\\n  box-sizing: content-box;\\r\\n}\\r\\n\\r\\n#popup-close-button {\\r\\n  box-sizing: content-box;\\r\\n  width: fit-content;\\r\\n  height: 14px;\\r\\n  padding: 13px; \\r\\n  justify-self: flex-start;\\r\\n  color: red;\\r\\n  background-color: aqua;\\r\\n  font-size: 1rem;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#popup-close-button:hover {\\r\\n  color: black;\\r\\n  background-color: red;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kelvin-portfolio/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kelvin-portfolio/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kelvin-portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"renderMovieDetail\": () => (/* binding */ renderMovieDetail),\n/* harmony export */   \"renderMovies\": () => (/* binding */ renderMovies)\n/* harmony export */ });\nconst movie = 'comedy';\nconst appId = 'IWf3COm5aU7E5iifRsF3';\nconst url = `https://api.tvmaze.com/search/shows?q=${movie}`;\nconst displayMovies = document.getElementById('display-Movies');\nconst commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;\nconst secondUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n\nconst commentForm = document.createElement('form');\ncommentForm.classList.add('comment-form');\nconst commentTitle = document.createElement('h2');\ncommentTitle.classList.add('comment-item');\ncommentTitle.innerHTML = 'Add a comment';\nconst addNameInput = document.createElement('input');\naddNameInput.classList.add('comment-item');\naddNameInput.placeholder = 'Your name';\nconst addCommentInput = document.createElement('textarea');\naddCommentInput.classList.add('comment-item');\naddCommentInput.placeholder = 'Your insights';\nconst addCommentButton = document.createElement('button');\naddCommentButton.classList.add('comment-item');\naddCommentButton.innerHTML = 'Comment';\n\nasync function getMovies() {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (error) {\n    return [];\n  }\n}\n\nconst getLikes = async () => {\n  try {\n    const res = await fetch(secondUrl);\n    const likes = await res.json();\n    return likes;\n  } catch (error) {\n    return [];\n  }\n};\n\nasync function addLike(id) {\n  try {\n    const res = await fetch(secondUrl, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    return res.json();\n  } catch (error) {\n    return [];\n  }\n}\n\nconst getComments = async (id) => {\n  try {\n    const res = await fetch(`${commentUrl}?item_id=${id}`);\n    const comments = await res.json();\n    return comments;\n  } catch (error) {\n    return [];\n  }\n};\n\nasync function addComment(id) {\n  try {\n    const res = await fetch(commentUrl, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: addNameInput.value,\n        comment: addCommentInput.value,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    return res.json();\n  } catch (error) {\n    return [];\n  }\n}\n\nconst renderMovieDetail = async (id) => {\n  const movies = await getMovies();\n  const comments = await getComments(id);\n\n  const projectDetailsPopupContainer = document.createElement('div');\n  projectDetailsPopupContainer.id = 'popup-container';\n\n  const projectDetailsPopupOverlay = document.createElement('div');\n  projectDetailsPopupOverlay.id = 'popup-overlay';\n  projectDetailsPopupOverlay.style.display = 'block';\n  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);\n\n  const moviePopup = document.createElement('div');\n  moviePopup.id = 'details-popup';\n  moviePopup.style.display = 'flex';\n  if (window.screen.width >= 768) {\n    moviePopup.style.top = `${window.pageYOffset + 77}px`;\n  } else {\n    moviePopup.style.top = `${window.pageYOffset + 16}px`;\n  }\n\n  // const popupHeaderCloseButton = document.createElement('img');\n  // popupHeaderCloseButton.id = 'popup-close-button';\n  // popupHeaderCloseButton.src = './close-popup.svg';\n  // popupHeaderCloseButton.alt = 'close popup window';\n  // moviePopup.appendChild(popupHeaderCloseButton);\n\n  const popupHeaderCloseButton = document.createElement('button');\n  popupHeaderCloseButton.id = 'popup-close-button';\n  popupHeaderCloseButton.innerHTML = 'Close';\n  moviePopup.appendChild(popupHeaderCloseButton);\n  // const popupHeaderCloseButton = document.createElement('i');\n  // popupHeaderCloseButton.id = 'popup-close-button';\n  // popupHeaderCloseButton.classList.add('fal');\n  // popupHeaderCloseButton.classList.add('fa-solid');\n  // popupHeaderCloseButton.classList.add('fa-xmark');\n  // moviePopup.appendChild(popupHeaderCloseButton);\n\n  // moviePopup.innerHTML = '';\n  movies.forEach((movie) => {\n    if (id === movie.show.id) {\n      const comedyMovie = document.createElement('div');\n      comedyMovie.classList.add('movie-div');\n      const comedyImage = document.createElement('img');\n      comedyImage.src = movie.show.image.medium;\n      const movieTitle = document.createElement('label');\n      movieTitle.innerHTML = `${movie.show.name}`;\n      const movieStatus = document.createElement('label');\n      movieStatus.innerHTML = `${movie.show.status}`;\n      const moviePremiered = document.createElement('label');\n      moviePremiered.innerHTML = `${movie.show.premiered}`;\n\n      const commentDisplay = document.createElement('h2');\n      commentDisplay.innerHTML = 'Comments';\n      const commentList = document.createElement('ul');\n      commentList.id = `${movie.show.id}`;\n      let commentCounter = 0;\n      const commnetNumber = document.createElement('span');\n\n      if (comments.length > 0) {\n        comments.forEach((comment) => {\n          commentCounter += 1;\n          commnetNumber.innerHTML = `(${commentCounter})`;\n          commentDisplay.append(commnetNumber);\n\n          const singleComment = document.createElement('li');\n          const commentUser = `${comment.username}`;\n          const commentContent = `${comment.comment}`;\n          const commentDate = `${comment.creation_date}`;\n          singleComment.innerHTML = `${commentDate} ${commentUser} : ${commentContent}`;\n          commentList.append(singleComment);\n        });\n      }\n\n      comedyMovie.append(comedyImage);\n      comedyMovie.append(movieTitle);\n      comedyMovie.append(movieStatus);\n      comedyMovie.append(moviePremiered);\n\n      comedyMovie.append(commentDisplay);\n      comedyMovie.append(commentList);\n\n      commentForm.append(commentTitle);\n      commentForm.append(addNameInput);\n      commentForm.append(addCommentInput);\n      commentForm.append(addCommentButton);\n      comedyMovie.append(commentForm);\n\n      moviePopup.append(comedyMovie);\n      projectDetailsPopupContainer.appendChild(moviePopup);\n\n      document.body.append(projectDetailsPopupContainer);\n      popupHeaderCloseButton.onclick = (e) => {\n        console.log('call');\n        e.preventDefault();\n        projectDetailsPopupContainer.remove();\n      };\n    }\n\n    addCommentButton.onclick = (e) => {\n      e.preventDefault();\n      addComment(movie.show.id);\n      commentForm.reset();\n    };\n  });\n};\n\nconst renderMovies = async () => {\n  const movies = await getMovies();\n  const likes = await getLikes();\n  displayMovies.innerHTML = '';\n  let counter = 0;\n  const moviesSpan = document.getElementById('movies');\n  movies.forEach((movie) => {\n    counter += 1;\n    moviesSpan.innerHTML = `(${counter})`;\n\n    let numLikes = '';\n    likes.forEach((like) => {\n      if (movie.show.id === like.item_id) {\n        numLikes = `${like.likes}`;\n      }\n    });\n    const comedyMovie = document.createElement('div');\n    comedyMovie.classList.add('movie-div');\n    const movieTitle = document.createElement('label');\n    comedyMovie.classList.add('movie-title');\n    movieTitle.innerHTML = `${movie.show.name}`;\n    const likeIcon = document.createElement('i');\n    likeIcon.id = movie.show.id;\n    likeIcon.classList.add('fas');\n    likeIcon.classList.add('fa-solid');\n    likeIcon.classList.add('fa-heart');\n    const likeLabel = document.createElement('label');\n    likeLabel.classList.add('like-label');\n    likeLabel.innerHTML = `${numLikes} likes`;\n    const comedyImage = document.createElement('img');\n    comedyImage.src = movie.show.image.medium;\n    const commentButton = document.createElement('button');\n    commentButton.classList.add('comment-button');\n    commentButton.innerHTML = 'Comments';\n    commentButton.id = movie.show.id;\n    comedyMovie.append(movieTitle);\n    comedyMovie.append(comedyImage);\n    comedyMovie.append(likeIcon);\n    comedyMovie.append(likeLabel);\n    comedyMovie.append(commentButton);\n    displayMovies.append(comedyMovie);\n    likeIcon.onclick = (e) => {\n      e.preventDefault();\n      addLike(movie.show.id);\n      const newLikes = likes;\n      let newNumLikes = '';\n      newLikes.forEach((newLike) => {\n        if (movie.show.id === newLike.item_id) {\n          newNumLikes = `${newLike.likes}`;\n        }\n      });\n      likeLabel.innerHTML = `${newNumLikes}likes`;\n      window.location.reload();\n    };\n    commentButton.onclick = (e) => {\n      e.preventDefault();\n      renderMovieDetail(movie.show.id);\n    };\n  });\n};\n\n\n//# sourceURL=webpack://kelvin-portfolio/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\n\n// Add the image to our existing div.\n\n(0,_api_js__WEBPACK_IMPORTED_MODULE_1__.renderMovies)();\n\n\n//# sourceURL=webpack://kelvin-portfolio/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);