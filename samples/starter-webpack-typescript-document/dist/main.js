/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_0__ = ((function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var LayDesc;\n    (function (LayDesc) {\n        LayDesc.DEBUG = false;\n        const _DEBUG = true;\n        class Document {\n            constructor(documentSettings = Document.defaultSettings) {\n                this.guides = Document.defaultSettings.guides;\n                this.pageTemplates = {};\n                this.guides = documentSettings.guides ? documentSettings.guides : this.guides;\n                if (documentSettings.pageTemplates) {\n                    for (let iterator in documentSettings.pageTemplates) {\n                        this.addPageTemplate(documentSettings.pageTemplates[iterator]);\n                    }\n                }\n                helloMessage();\n            }\n            static get defaultSettings() {\n                return this._defaultSettings;\n            }\n            addPageTemplate(pageTemplate) {\n                if (LayDesc.DEBUG) {\n                    if (pageTemplate.name in this.pageTemplates)\n                        console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);\n                }\n                if (pageTemplate instanceof PageTemplate) {\n                    this.pageTemplates[pageTemplate.name] = pageTemplate;\n                }\n                else {\n                    this.pageTemplates[pageTemplate.name] = new PageTemplate(pageTemplate.name, pageTemplate);\n                }\n            }\n        }\n        Document._defaultSettings = {\n            guides: {\n                show: true,\n                horizontal: [],\n                vertical: [],\n            },\n        };\n        LayDesc.Document = Document;\n        //GUIDES\n        let Guides;\n        (function (Guides) {\n            class Horizontal {\n                constructor(y = 10) {\n                    this.y = y;\n                }\n            }\n            Guides.Horizontal = Horizontal;\n            class Vertical {\n                constructor(x = 10) {\n                    this.x = x;\n                }\n            }\n            Guides.Vertical = Vertical;\n        })(Guides = LayDesc.Guides || (LayDesc.Guides = {}));\n        class Margin {\n            constructor(settings = Margin.defaultSettings) {\n                this.top = Margin.defaultSettings.top;\n                this.right = Margin.defaultSettings.right;\n                this.bottom = Margin.defaultSettings.bottom;\n                this.left = Margin.defaultSettings.left;\n                this.top = settings.top ? settings.top : this.top;\n                this.right = settings.right ? settings.right : this.right;\n                this.bottom = settings.bottom ? settings.bottom : this.bottom;\n                this.left = settings.left ? settings.left : this.left;\n            }\n            static get defaultSettings() {\n                return this._defaultSettings;\n            }\n        }\n        Margin._defaultSettings = {\n            top: 10,\n            right: 10,\n            bottom: 10,\n            left: 10,\n        };\n        LayDesc.Margin = Margin;\n        class PageTemplate {\n            constructor(name, settings = PageTemplate.defaultSettings) {\n                this.name = name;\n                this.margin = new Margin(settings.marginSettings);\n            }\n            static get defaultSettings() {\n                return this._defaultSettings;\n            }\n        }\n        PageTemplate._defaultSettings = {\n            marginSettings: Margin.defaultSettings,\n        };\n        LayDesc.PageTemplate = PageTemplate;\n        function helloMessage() {\n            const styles = [\n                'color: blue',\n            ].join(';');\n            console.log(`%c*****************\n     LayDesc\n*****************`, styles);\n        }\n    })(LayDesc = exports.LayDesc || (exports.LayDesc = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, main_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    main_1.LayDesc.DEBUG = true;\n    console.log(main_1.LayDesc);\n    const doc = new main_1.LayDesc.Document({\n        guides: {\n            show: true,\n            horizontal: [\n                new main_1.LayDesc.Guides.Horizontal(10),\n            ]\n        },\n        pageTemplates: [\n            {\n                name: \"left\",\n            },\n            new main_1.LayDesc.PageTemplate(\"hello\"),\n        ]\n    });\n    console.log(doc);\n    const template = new main_1.LayDesc.PageTemplate(\"hello\");\n    console.log(template);\n    const template2 = new main_1.LayDesc.PageTemplate(\"hello\", {\n        marginSettings: {\n            bottom: 100,\n        }\n    });\n    console.log(template2);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/main.ts ./src/index.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/azertypow/Documents/appDev/_LayDesc/LayDesc-api/samples/starter-webpack-typescript-document/src/main.ts */\"./src/main.ts\");\nmodule.exports = __webpack_require__(/*! /Users/azertypow/Documents/appDev/_LayDesc/LayDesc-api/samples/starter-webpack-typescript-document/src/index.html */\"./src/index.html\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts_./src/index.html?");

/***/ })

/******/ });