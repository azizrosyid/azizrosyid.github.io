/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// install a JSONP callback for chunk loading
/** *** */ 	function webpackJsonpCallback(data) {
    /** *** */ 		const chunkIds = data[0];
    /** *** */ 		const moreModules = data[1];
    /** *** */ 		const executeModules = data[2];
    /** *** */
    /** *** */ 		// add "moreModules" to the modules object,
    /** *** */ 		// then flag all "chunkIds" as loaded and fire callback
    /** *** */ 		let moduleId; let chunkId; let i = 0; const
      resolves = [];
    /** *** */ 		for (;i < chunkIds.length; i++) {
      /** *** */ 			chunkId = chunkIds[i];
      /** *** */ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /** *** */ 				resolves.push(installedChunks[chunkId][0]);
        /** *** */ 			}
      /** *** */ 			installedChunks[chunkId] = 0;
      /** *** */ 		}
    /** *** */ 		for (moduleId in moreModules) {
      /** *** */ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /** *** */ 				modules[moduleId] = moreModules[moduleId];
        /** *** */ 			}
      /** *** */ 		}
    /** *** */ 		if (parentJsonpFunction) parentJsonpFunction(data);
    /** *** */
    /** *** */ 		while (resolves.length) {
      /** *** */ 			resolves.shift()();
      /** *** */ 		}
    /** *** */
    /** *** */ 		// add entry modules from loaded chunk to deferred list
    /** *** */ 		deferredModules.push.apply(deferredModules, executeModules || []);
    /** *** */
    /** *** */ 		// run deferred modules when all chunks ready
    /** *** */ 		return checkDeferredModules();
    /** *** */ 	}
  /** *** */ 	function checkDeferredModules() {
    /** *** */ 		let result;
    /** *** */ 		for (let i = 0; i < deferredModules.length; i++) {
      /** *** */ 			const deferredModule = deferredModules[i];
      /** *** */ 			let fulfilled = true;
      /** *** */ 			for (let j = 1; j < deferredModule.length; j++) {
        /** *** */ 				const depId = deferredModule[j];
        /** *** */ 				if (installedChunks[depId] !== 0) fulfilled = false;
        /** *** */ 			}
      /** *** */ 			if (fulfilled) {
        /** *** */ 				deferredModules.splice(i--, 1);
        /** *** */ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /** *** */ 			}
      /** *** */ 		}
    /** *** */
    /** *** */ 		return result;
    /** *** */ 	}
  /** *** */
  /** *** */ 	// The module cache
  /** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// object to store loaded and loading chunks
  /** *** */ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
  /** *** */ 	// Promise = chunk loading, 0 = chunk loaded
  /** *** */ 	var installedChunks = {
    /** *** */ 		2: 0,
    /** *** */ 	};
  /** *** */
  /** *** */ 	var deferredModules = [];
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */ 	let jsonpArray = window.webpackJsonp = window.webpackJsonp || [];
  /** *** */ 	const oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /** *** */ 	jsonpArray.push = webpackJsonpCallback;
  /** *** */ 	jsonpArray = jsonpArray.slice();
  /** *** */ 	for (let i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  /** *** */ 	var parentJsonpFunction = oldJsonpFunction;
  /** *** */
  /** *** */
  /** *** */ 	// add entry module to deferred list
  /** *** */ 	deferredModules.push([11, 1, 0]);
  /** *** */ 	// run deferred modules when ready
  /** *** */ 	return checkDeferredModules();
/** *** */ }([
/* 0 */,
  /* 1 */,
  /* 2 */,
  /* 3 */,
  /* 4 */,
  /* 5 */,
  /* 6 */
  /***/ (function (module, exports, __webpack_require__) {
    const api = __webpack_require__(3);
    let content = __webpack_require__(7);

    content = content.__esModule ? content.default : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    const options = {};

    options.insert = 'head';
    options.singleton = false;

    const update = api(content, options);

    module.exports = content.locals || {};
    /***/ }),
  /* 7 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
    // Imports

    const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((i) => i[1]);
    ___CSS_LOADER_EXPORT___.push([module.i, '@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);']);
    // Module
    ___CSS_LOADER_EXPORT___.push([module.i, 'html {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Roboto", sans-serif;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #d11d27;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\nnav {\n  position: absolute;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  z-index: 10;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n\n.brand {\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n}\n\n.brand__icon {\n  height: 100%;\n}\n\n.brand__title {\n  width: 150px;\n  font-size: 20px;\n  font-weight: 700;\n  text-shadow: 2px 2px 15px rgba(0, 0, 0, 1);\n  color: #ffffff;\n  user-select: none;\n}\n\n.nav-links {\n  position: absolute;\n  width: 100%;\n  left: -1024px;\n  transition: transform 0.25s ease;\n  z-index: -10;\n}\n\n.nav-links.open {\n  transform: translate(1024px, 0);\n}\n\n.nav-links ul {\n  padding: 0;\n  margin: 0;\n  background-color: #f4f4f2;\n  padding-top: 64px;\n}\n\n.nav-links ul li {\n  list-style-type: none;\n}\n\n.nav-links__item {\n  display: block;\n  text-align: center;\n  height: 55px;\n  line-height: 55px;\n  text-decoration: none;\n  color: #495464;\n  font-size: 20px;\n}\n\n.nav-links__item:hover {\n  color: white;\n  background-color: #bbbfca;\n}\n\n.btn-navbar {\n  width: 64px;\n  height: 100%;\n  margin-left: auto;\n  margin-right: 20px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 40px;\n  text-shadow: 2px 2px 15px rgb(255, 255, 255);\n}\n\n.jumbotron {\n  height: 500px;\n  position: relative;\n  filter: grayscale(40%);\n}\n\n.jumbotron__image {\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n}\n\n.jumbotron__text {\n  margin: 0;\n  color: #e8e8e8;\n  position: absolute;\n  top: 40%;\n  text-align: center;\n  width: 100%;\n  text-shadow: 0px 0px 20px #000000;\n}\n\n.jumbotron__title {\n  font-size: 40px;\n  font-weight: 700;\n  margin: 0;\n}\n\n.jumbotron__desc {\n  margin: 0;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.restaurant-list__title {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 700;\n  color: #d11d27;\n}\n\n.restaurant-list__message {\n  text-align: center;\n  height: 500px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.restaurant-list__message__404 {\n  font-size: 15vw;\n  margin: 0;\n  font-weight: 600;\n}\n\n.restaurant-list__container-cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.restaurant-list__card-item {\n  width: 80%;\n  border: 2px solid #495464;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);\n  margin-bottom: 20px;\n}\n\n.restaurant-list__card-item>*:not(.card-item__image) {\n  margin: 0 10px;\n}\n\n.restaurant-list__detail {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.restaurant-list__detail__like {\n  width: 60px;\n  height: 60px;\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  border-radius: 50%;\n  background-color: #d11d27;\n  cursor: pointer;\n  border: none;\n}\n\n.restaurant-list__detail__wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin: 0 auto;\n}\n\n.restaurant-list__detail__name {\n  font-size: 25px;\n  font-weight: 600;\n  margin: 0;\n  margin-bottom: 15px;\n}\n\n.restaurant-list__detail__image {\n  width: 60%;\n  padding-right: 40px;\n}\n\n.restaurant-list__detail__information {\n  width: 40%;\n}\n\n.restaurant-list__detail__table {\n  display: flex;\n  flex-direction: column;\n}\n\n.restaurant-list__detail__table__item {\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.restaurant-list__detail__table__item label {\n  width: 30%;\n  word-wrap: break-word;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.restaurant-list__detail__table__item span {\n  width: 70%;\n  word-wrap: break-word;\n}\n\n.restaurant-list__detail__menu {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.restaurant-list__detail__menu__item {\n  width: 50%;\n}\n\n.restaurant-list__detail__menu__item h4 {\n  margin: 0;\n}\n\n.restaurant-list__detail__menu__item ul {\n  padding: 0;\n}\n\n.restaurant-list__detail__menu__item li {\n  word-wrap: break-word;\n}\n\n.restaurant-list__detail__rating_overall {\n  font-size: 18px;\n  font-weight: 500;\n\n}\n\n.restaurant-list__detail__rating_overall p {\n  margin: 5px 0;\n}\n\n.restaurant-list__detail__rating__container {\n  margin: 10px 0;\n}\n\n.restaurant-list__detail__rating__card {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n  padding: 10px 0;\n}\n\n.restaurant-list__detail__rating__card:first-child {\n  border-top: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.restaurant-list__detail__rating__card__wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.restaurant-list__detail__rating__card__avatar {\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.restaurant-list__detail__rating__card__name {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.restaurant-list__detail__rating__card__review {\n  margin: 5px 0;\n  font-size: 17px;\n}\n\n.restaurant-list__detail__rating__card__date {\n  font-size: 13px;\n}\n\n.card-item__image {\n  width: 100%;\n  height: 250px;\n  background-color: rgb(211, 211, 211);\n  object-fit: cover;\n}\n\n.card-item__rating {\n  margin: 5px 0;\n}\n\n.card-item__rating span {\n  font-size: 15px;\n  padding: 2.5px 5px;\n  border-radius: 5px;\n}\n\n.card-item__heading {\n  margin: 10px 0;\n  font-size: 25px;\n}\n\n.card-item__heading a {\n  color: #000000;\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n}\n\n.card-item__heading a:hover {\n  text-decoration: underline;\n}\n\n.card-item__description {\n  margin: 0;\n}\n\n.card-item__location {\n  display: flex;\n  align-items: center;\n  margin-top: 10px !important;\n  margin-bottom: 20px !important;\n}\n\n.card-item__location img {\n  width: 20px;\n  margin-right: 5px;\n}\n\n.bg-green {\n  color: white;\n  background-color: rgb(129, 201, 13);\n}\n\n.bg-yellow {\n  color: white;\n  background-color: rgb(255, 184, 0);\n}\n\nfooter {\n  width: 100%;\n  margin: 0;\n  overflow: hidden;\n  text-align: center;\n  background-color: #d11d27;\n  font-weight: 500;\n  font-size: 20px;\n  color: white;\n}', '']);
    // Exports
    /* harmony default export */ __webpack_exports__.default = (___CSS_LOADER_EXPORT___);
    /***/ }),
  /* 8 */
  /***/ (function (module, exports, __webpack_require__) {
    const api = __webpack_require__(3);
    let content = __webpack_require__(9);

    content = content.__esModule ? content.default : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    const options = {};

    options.insert = 'head';
    options.singleton = false;

    const update = api(content, options);

    module.exports = content.locals || {};
    /***/ }),
  /* 9 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
    // Imports

    const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((i) => i[1]);
    // Module
    ___CSS_LOADER_EXPORT___.push([module.i, '@media only screen and (min-width: 900px) {\r\n  nav {\r\n    width: 90%;\r\n  }\r\n\r\n  .btn-navbar {\r\n    display: none;\r\n  }\r\n\r\n  .nav-links {\r\n    position: static;\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .nav-links ul {\r\n    padding: 0;\r\n    background-color: transparent;\r\n  }\r\n\r\n  .nav-links ul li {\r\n    display: inline-block;\r\n    margin: 10px 10px;\r\n  }\r\n\r\n  .nav-links__item {\r\n    display: inline;\r\n    color: white;\r\n    text-shadow: 2px 2px 15px rgba(0, 0, 0, 1);\r\n    padding: 15px 10px;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .nav-links__item:hover {\r\n    background-color: #d11d27;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 800px) {\r\n  .restaurant-list__container-cards {\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n\r\n  .restaurant-list__card-item {\r\n    width: 45%;\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .restaurant-list__container-cards {\r\n    max-width: 1300px;\r\n  }\r\n\r\n  .restaurant-list__card-item {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n  .restaurant-list__detail__wrapper {\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .restaurant-list__detail__image {\r\n    width: 100%;\r\n    padding: 0;\r\n  }\r\n\r\n  .restaurant-list__detail__information {\r\n    width: 100%;\r\n  }\r\n}', '']);
    // Exports
    /* harmony default export */ __webpack_exports__.default = (___CSS_LOADER_EXPORT___);
    /***/ }),
  /* 10 */,
  /* 11 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
    const runtime = __webpack_require__(5);

    // EXTERNAL MODULE: ./src/styles/main.css
    const main = __webpack_require__(6);

    // EXTERNAL MODULE: ./src/styles/responsive.css
    const responsive = __webpack_require__(8);

    // CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function _asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const swRegister = /* #__PURE__ */(function () {
      const _ref = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap((_context) => {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/service-worker.js').then((registration) => registration).catch((registrationError) => registrationError);
                  });
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function swRegister() {
        return _ref.apply(this, arguments);
      };
    }());

    /* harmony default export */ const sw_register = (swRegister);
    // CONCATENATED MODULE: ./src/scripts/globals/config.js
    const CONFIG = {
      API_KEY: '12345',
      BASE_URL: 'https://restaurant-api.dicoding.dev/',
      BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
      DATABASE_NAME: 'favorite-restaurants-store',
      DATABASE_VERSION: 1,
      OBJECT_STORE_NAME: 'favorite-restaurants',
    };
    /* harmony default export */ const config = (CONFIG);
    // CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

    const API_ENDPOINT = {
      LIST_RESTAURANT: ''.concat(config.BASE_URL, 'list'),
      REVIEW: ''.concat(config.BASE_URL, 'review'),
      DETAIL: function DETAIL(id) {
        return ''.concat(config.BASE_URL, 'detail/').concat(id);
      },
      SEARCH: function SEARCH(query) {
        return ''.concat(config.BASE_URL, 'search?q=').concat(query);
      },
    };
    /* harmony default export */ const api_endpoint = (API_ENDPOINT);
    // CONCATENATED MODULE: ./src/scripts/data/restaurants-source.js
    function restaurants_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function restaurants_source_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { restaurants_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { restaurants_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    const restaurants_source_RestaurantsSource = /* #__PURE__ */(function () {
      function RestaurantsSource() {
        _classCallCheck(this, RestaurantsSource);
      }

      _createClass(RestaurantsSource, null, [{
        key: 'getAllRestaurants',
        value: (function () {
          const _getAllRestaurants = restaurants_source_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
            let response; let
              responseJson;
            return regeneratorRuntime.wrap((_context) => {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(api_endpoint.LIST_RESTAURANT);

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();

                  case 5:
                    responseJson = _context.sent;
                    return _context.abrupt('return', responseJson.restaurants);

                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getAllRestaurants() {
            return _getAllRestaurants.apply(this, arguments);
          }

          return getAllRestaurants;
        }()),
      }, {
        key: 'searchRestaurants',
        value: (function () {
          const _searchRestaurants = restaurants_source_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2(query) {
            let response; let
              responseJson;
            return regeneratorRuntime.wrap((_context2) => {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch(api_endpoint.SEARCH(query));

                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.json();

                  case 5:
                    responseJson = _context2.sent;
                    return _context2.abrupt('return', responseJson.restaurants);

                  case 7:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function searchRestaurants(_x) {
            return _searchRestaurants.apply(this, arguments);
          }

          return searchRestaurants;
        }()),
      }, {
        key: 'getDetailRestaurant',
        value: (function () {
          const _getDetailRestaurant = restaurants_source_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3(id) {
            let response; let
              responseJson;
            return regeneratorRuntime.wrap((_context3) => {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return fetch(api_endpoint.DETAIL(id));

                  case 2:
                    response = _context3.sent;
                    _context3.next = 5;
                    return response.json();

                  case 5:
                    responseJson = _context3.sent;
                    return _context3.abrupt('return', responseJson.restaurant);

                  case 7:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function getDetailRestaurant(_x2) {
            return _getDetailRestaurant.apply(this, arguments);
          }

          return getDetailRestaurant;
        }()),
      }]);

      return RestaurantsSource;
    }());

    /* harmony default export */ const restaurants_source = (restaurants_source_RestaurantsSource);
    // CONCATENATED MODULE: ./src/scripts/routes/url-parser.js
    const UrlParser = {
      parseActiveUrl: function parseActiveUrl() {
        const hash = window.location.hash.slice(2); // check for search url

        if (hash.slice(0, 7) === '?search') {
          return '/?search';
        }

        const splittedHash = this._splitter(hash);

        return this._combiner(splittedHash);
      },
      getIdFromUrl: function getIdFromUrl() {
        const hash = window.location.hash.slice(2);
        return this._splitter(hash).id;
      },
      _splitter: function _splitter(hash) {
        const splittedHash = hash.split('/');
        return {
          resource: splittedHash[0] || null,
          id: splittedHash[1] || null,
        };
      },
      _combiner: function _combiner(splittedHash) {
        return (splittedHash.resource ? '/'.concat(splittedHash.resource) : '/') + (splittedHash.id ? '/:id' : '');
      },
    };
    /* harmony default export */ const url_parser = (UrlParser);
    // EXTERNAL MODULE: ./node_modules/idb/build/esm/index.js + 1 modules
    const esm = __webpack_require__(4);

    // CONCATENATED MODULE: ./src/scripts/data/favoriterestaurants-idb.js
    function favoriterestaurants_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function favoriterestaurants_idb_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { favoriterestaurants_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { favoriterestaurants_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const { DATABASE_NAME } = config;
    const { DATABASE_VERSION } = config;
    const { OBJECT_STORE_NAME } = config;
    const dbPromise = Object(esm['a' /* openDB */])(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: function upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {
          keyPath: 'id',
        });
      },
    });
    const FavoriteRestaurantsIdb = {
      getRestaurant: function getRestaurant(id) {
        return favoriterestaurants_idb_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (id) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return', null);

                case 2:
                  _context.next = 4;
                  return dbPromise;

                case 4:
                  return _context.abrupt('return', _context.sent.get(OBJECT_STORE_NAME, id));

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      getAllRestaurants: function getAllRestaurants() {
        return favoriterestaurants_idb_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return dbPromise;

                case 2:
                  return _context2.abrupt('return', _context2.sent.getAll(OBJECT_STORE_NAME));

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      putRestaurant: function putRestaurant(restaurant) {
        return favoriterestaurants_idb_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap((_context3) => {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (restaurant.id) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt('return', null);

                case 2:
                  _context3.next = 4;
                  return dbPromise;

                case 4:
                  return _context3.abrupt('return', _context3.sent.put(OBJECT_STORE_NAME, restaurant));

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      deleteRestaurant: function deleteRestaurant(id) {
        return favoriterestaurants_idb_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap((_context4) => {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return dbPromise;

                case 2:
                  return _context4.abrupt('return', _context4.sent.delete(OBJECT_STORE_NAME, id));

                case 3:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))();
      },
    };
    /* harmony default export */ const favoriterestaurants_idb = (FavoriteRestaurantsIdb);
    // CONCATENATED MODULE: ./src/scripts/globals/image-endpoint.js

    const IMAGE_ENDPOINT = {
      SMALL: ''.concat(config.BASE_IMAGE_URL, 'small/'),
      MEDIUM: ''.concat(config.BASE_IMAGE_URL, 'medium/'),
      LARGE: ''.concat(config.BASE_IMAGE_URL, 'large/'),
      AVATAR: function AVATAR(name) {
        return 'https://ui-avatars.com/api/?name='.concat(name);
      },
    };
    /* harmony default export */ const image_endpoint = (IMAGE_ENDPOINT);
    // CONCATENATED MODULE: ./src/scripts/views/templates/template-creator.js

    const createAddFavoriteButtonTemplate = function createAddFavoriteButtonTemplate() {
      return '\n  <button id="favoriteButton" class="restaurant-list__detail__like" aria-label="favorite this restaurant"">\n    <img src="./images/icons/white-heart-outline.svg" width=100% />\n  </button>\n';
    };

    const createRemoveFavoritedButtonTemplate = function createRemoveFavoritedButtonTemplate() {
      return '\n  <button id="favoriteButton" class="restaurant-list__detail__like" aria-label="remove favorite this restaurant">\n    <img src="./images/icons/white-heart-vector.svg" width=100% />\n  </button>\n';
    };

    const template_creator_createCardRestaurant = function createCardRestaurant(_ref) {
      const { id } = _ref;
      const { name } = _ref;
      const { pictureId } = _ref;
      const { city } = _ref;
      const { description } = _ref;
      const { rating } = _ref;
      let displayRating = rating.toString();
      displayRating += Number.isInteger(rating) ? '.0' : '';
      const classNameRating = rating >= 4 ? 'bg-green' : 'bg-yellow';
      return '\n<div class="restaurant-list__card-item">\n  <img\n    class="card-item__image lazyload"\n    data-src="'.concat(image_endpoint.SMALL + pictureId, '"\n    alt=""\n  />\n  <p class="card-item__rating">\n    Rating : <span class="').concat(classNameRating, '">').concat(displayRating, '</span>\n  </p>\n  <h3 class="card-item__heading"><a href="#/detail/').concat(id, '">')
        .concat(name, '</a></h3>\n  <p class="card-item__description">')
        .concat(description, '</p>\n  <p class="card-item__location">\n    <img src="./images/icons/pin-21504.png" alt="" />')
        .concat(city, '\n  </p>\n</div>');
    };

    const template_creator_createInformationRestaurant = function createInformationRestaurant(_ref2) {
      const { name } = _ref2;
      const { description } = _ref2;
      const { city } = _ref2;
      const { address } = _ref2;
      const { pictureId } = _ref2;
      const { categories } = _ref2;
      const { menus } = _ref2;
      const { foods } = menus;
      const { drinks } = menus;
      return '\n\n  <div class="restaurant-list__detail__wrapper">\n    <div class="restaurant-list__detail__image">\n      <img\n        class="lazyload"\n        data-src="'.concat(image_endpoint.LARGE + pictureId, '"\n        width="100%"\n      />\n    </div>\n    <div class="restaurant-list__detail__information">\n      <h3 class="restaurant-list__detail__name">').concat(name, '</h3>\n      <div class="restaurant-list__detail__table">\n        <div class="restaurant-list__detail__table__item">\n          <label>Kategori</label>\n          <span>').concat(categories.map((category) => category.name).join(', '), '</span>\n        </div>\n        <div class="restaurant-list__detail__table__item">\n          <label>Alamat</label>\n          <span>').concat(address, '</span>\n        </div>\n        <div class="restaurant-list__detail__table__item">\n          <label>Kota</label>\n          <span>')
        .concat(city, '</span>\n        </div>\n      </div>\n      <h3 class="restaurant-list__detail__name">Menu</h3>\n      <div class="restaurant-list__detail__menu">\n        <div class="restaurant-list__detail__menu__item">\n          <h4>Foods</h4>\n          <ol>\n            ')
        .concat(foods.map((food) => '<li>'.concat(food.name, '</li>')).join(''), '\n          </ol>\n        </div>\n        <div class="restaurant-list__detail__menu__item">\n          <h4>Drinks</h4>\n          <ol>\n            ')
        .concat(drinks.map((drink) => '<li>'.concat(drink.name, '</li>')).join(''), '\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="restaurant-list__detail__description">\n    <h3>Description Restaurant</h3>\n    <p>')
        .concat(description, '</p>\n  </div>\n');
    };

    const template_creator_createRatingCard = function createRatingCard(_ref3) {
      const { name } = _ref3;
      const { review } = _ref3;
      const { date } = _ref3;
      return '      \n  <div class="restaurant-list__detail__rating__card">\n    <div class="restaurant-list__detail__rating__card__wrapper">\n      <img\n        class="restaurant-list__detail__rating__card__avatar lazyload"\n        data-src="'.concat(image_endpoint.AVATAR(name), '"\n        width="40"\n        height="40"\n      />\n      <span class="restaurant-list__detail__rating__card__name">').concat(name, '</span>\n    </div>\n    <p class="restaurant-list__detail__rating__card__review">').concat(review, '</p>\n    <span class="restaurant-list__detail__rating__card__date">').concat(date, '</span>\n  </div>\n  ');
    };

    const createReviewSection = function createReviewSection(_ref4) {
      const { rating } = _ref4;
      const { customerReviews } = _ref4;
      let displayRating = rating.toString();
      displayRating += Number.isInteger(rating) ? '.0' : '';
      return '\n  <div class="restaurant-list__detail__rating">\n    <h3>Rating Restaurant</h3>\n    <div class="restaurant-list__detail__rating_overall">\n      <p>Average Customer Review :</p>\n      <span>'.concat(displayRating, ' / 5.0</span>\n    </div>\n    <div class="restaurant-list__detail__rating__container">').concat(customerReviews.map((custReview) => template_creator_createRatingCard(custReview)).join(''), '</div>\n  </div>\n  ');
    };

    // CONCATENATED MODULE: ./src/scripts/utils/favorite-button-initiator.js
    function favorite_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function favorite_button_initiator_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { favorite_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { favorite_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const FavoriteButtonInitiator = {
      init: function init(_ref) {
        const _this = this;

        return favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          let favoriteButtonContainer; let
            restaurant;
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  favoriteButtonContainer = _ref.favoriteButtonContainer, restaurant = _ref.restaurant;
                  _this._favoriteButtonContainer = favoriteButtonContainer;
                  _this._restaurant = restaurant;
                  _context.next = 5;
                  return _this._renderButton();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      _renderButton: function _renderButton() {
        const _this2 = this;

        return favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          let id;
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = _this2._restaurant.id;
                  _context2.next = 3;
                  return _this2._isRestaurantExist(id);

                case 3:
                  if (!_context2.sent) {
                    _context2.next = 8;
                    break;
                  }

                  _context2.next = 6;
                  return _this2._renderRemoveFavoriteButton();

                case 6:
                  _context2.next = 10;
                  break;

                case 8:
                  _context2.next = 10;
                  return _this2._renderAddFavoriteButton();

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      _isRestaurantExist: function _isRestaurantExist(id) {
        return favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3() {
          let restaurant;
          return regeneratorRuntime.wrap((_context3) => {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return favoriterestaurants_idb.getRestaurant(id);

                case 2:
                  restaurant = _context3.sent;
                  return _context3.abrupt('return', !!restaurant);

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      _renderAddFavoriteButton: function _renderAddFavoriteButton() {
        const _this3 = this;

        return favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee5() {
          let favoriteButton;
          return regeneratorRuntime.wrap((_context5) => {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _this3._favoriteButtonContainer.innerHTML = createAddFavoriteButtonTemplate();
                  favoriteButton = document.querySelector('#favoriteButton');
                  favoriteButton.addEventListener('click', /* #__PURE__ */favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap((_context4) => {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return favoriterestaurants_idb.putRestaurant(_this3._restaurant);

                          case 2:
                            _this3._renderButton();

                          case 3:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  })));

                case 3:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))();
      },
      _renderRemoveFavoriteButton: function _renderRemoveFavoriteButton() {
        const _this4 = this;

        return favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee7() {
          let favoriteButton;
          return regeneratorRuntime.wrap((_context7) => {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _this4._favoriteButtonContainer.innerHTML = createRemoveFavoritedButtonTemplate();
                  favoriteButton = document.querySelector('#favoriteButton');
                  favoriteButton.addEventListener('click', /* #__PURE__ */favorite_button_initiator_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee6() {
                    let id;
                    return regeneratorRuntime.wrap((_context6) => {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            id = _this4._restaurant.id;
                            _context6.next = 3;
                            return favoriterestaurants_idb.deleteRestaurant(id);

                          case 3:
                            _this4._renderButton();

                          case 4:
                          case 'end':
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  })));

                case 3:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7);
        }))();
      },
    };
    /* harmony default export */ const favorite_button_initiator = (FavoriteButtonInitiator);
    // CONCATENATED MODULE: ./src/scripts/views/pages/detail.js
    function detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function detail_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const Detail = {
      render: function render() {
        return detail_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', '\n    <h2 class="restaurant-list__title">Detail Restaurant</h2>\n    <div id="detailRestaurant" class="restaurant-list__detail"></div>\n    <div class="restaurant-list__like_container"></div>\n    ');

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      afterRender: function afterRender() {
        return detail_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          let id; let detailRestaurant; let
            containerDetailRestaurant;
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = url_parser.getIdFromUrl();
                  _context2.next = 3;
                  return restaurants_source.getDetailRestaurant(id);

                case 3:
                  detailRestaurant = _context2.sent;
                  containerDetailRestaurant = document.querySelector('#detailRestaurant');
                  containerDetailRestaurant.innerHTML += template_creator_createInformationRestaurant(detailRestaurant);
                  containerDetailRestaurant.innerHTML += createReviewSection(detailRestaurant);
                  favorite_button_initiator.init({
                    favoriteButtonContainer: document.querySelector('.restaurant-list__like_container'),
                    restaurant: {
                      id: detailRestaurant.id,
                      name: detailRestaurant.name,
                      rating: detailRestaurant.rating,
                      pictureId: detailRestaurant.pictureId,
                      description: detailRestaurant.description,
                      city: detailRestaurant.city,
                    },
                  });

                case 8:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
    };
    /* harmony default export */ const detail = (Detail);
    // CONCATENATED MODULE: ./src/scripts/views/pages/favorite.js
    function favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function favorite_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const Favorite = {
      render: function render() {
        return favorite_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', '\n        <h2 class="restaurant-list__title">Favorite Restaurants</h2>\n        <div id="containerCards" class="restaurant-list__container-cards"></div>\n    ');

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      afterRender: function afterRender() {
        return favorite_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          let restaurants; let
            containerCards;
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return favoriterestaurants_idb.getAllRestaurants();

                case 2:
                  restaurants = _context2.sent;
                  containerCards = document.querySelector('#containerCards');
                  restaurants.forEach((itemRestaurant) => {
                    containerCards.innerHTML += template_creator_createCardRestaurant(itemRestaurant);
                  });

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
    };
    /* harmony default export */ const favorite = (Favorite);
    // CONCATENATED MODULE: ./src/scripts/views/pages/home.js
    function home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function home_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    const Home = {
      render: function render() {
        return home_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', '\n        <h2 class="restaurant-list__title">Explore Restaurant</h2>\n        <div id="containerCards" class="restaurant-list__container-cards"></div>\n    ');

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      afterRender: function afterRender() {
        return home_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          let restaurants; let
            containerCards;
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return restaurants_source.getAllRestaurants();

                case 2:
                  restaurants = _context2.sent;
                  containerCards = document.querySelector('#containerCards');
                  restaurants.forEach((itemRestaurant) => {
                    containerCards.innerHTML += template_creator_createCardRestaurant(itemRestaurant);
                  });

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
    };
    /* harmony default export */ const home = (Home);
    // CONCATENATED MODULE: ./src/scripts/routes/routes.js

    const routes = {
      '/': home,
      '/home': home,
      '/detail/:id': detail,
      '/favorite': favorite,
    };
    /* harmony default export */ const routes_routes = (routes);
    // CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
    const DrawerInitiator = {
      init: function init(_ref) {
        const _this = this;

        const { button } = _ref;
        const { drawer } = _ref;
        const { jumbotron } = _ref;
        const { catalog } = _ref;
        button.addEventListener('click', (event) => {
          _this._toggleDrawer(event, drawer);

          _this._changeStateButton(drawer, button);
        });
        [jumbotron, catalog].forEach((element) => {
          element.addEventListener('click', (event) => {
            _this._closeDrawer(event, drawer);

            _this._changeStateButton(drawer, button);
          });
        });
      },
      _toggleDrawer: function _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
      },
      _changeIcon: function _changeIcon(drawerIsOpen, button) {
        button.textContent = drawerIsOpen ? '✖' : '☰';
      },
      _changeAriaLabel: function _changeAriaLabel(drawerIsOpen, button) {
        const ariaText = drawerIsOpen ? 'Close' : 'Open';
        button.setAttribute('aria-label', ''.concat(ariaText, ' Navigation bar'));
      },
      _closeDrawer: function _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
      },
      _changeStateButton: function _changeStateButton(drawer, button) {
        const drawerIsOpen = drawer.classList.contains('open');

        this._changeIcon(drawerIsOpen, button);

        this._changeAriaLabel(drawerIsOpen, button);
      },
    };
    /* harmony default export */ const drawer_initiator = (DrawerInitiator);
    // CONCATENATED MODULE: ./src/scripts/views/app.js
    function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function app_asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function app_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

    const app_App = /* #__PURE__ */(function () {
      function App(_ref) {
        const { button } = _ref;
        const { drawer } = _ref;
        const { jumbotron } = _ref;
        const { catalog } = _ref;

        app_classCallCheck(this, App);

        this._button = button;
        this._drawer = drawer;
        this._jumbotron = jumbotron;
        this._catalog = catalog;

        this._initAppShell();
      }

      app_createClass(App, [{
        key: '_initAppShell',
        value: function _initAppShell() {
          drawer_initiator.init({
            button: this._button,
            drawer: this._drawer,
            jumbotron: this._jumbotron,
            catalog: this._catalog,
          });
        },
      }, {
        key: 'renderPage',
        value: (function () {
          const _renderPage = app_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
            let url; let
              page;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = url_parser.parseActiveUrl();
                    page = routes_routes[url];
                    _context.next = 4;
                    return page.render();

                  case 4:
                    this._catalog.innerHTML = _context.sent;
                    _context.next = 7;
                    return page.afterRender();

                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function renderPage() {
            return _renderPage.apply(this, arguments);
          }

          return renderPage;
        }()),
      }]);

      return App;
    }());

    /* harmony default export */ const app = (app_App);
    // EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
    const lazysizes = __webpack_require__(2);

    // EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
    const ls_parent_fit = __webpack_require__(10);

    // CONCATENATED MODULE: ./src/scripts/index.js

    /* for async await transpile */

    // import a plugin

    const scripts_app = new app({
      button: document.querySelector('#hamburgerButton'),
      drawer: document.querySelector('#navigationDrawer'),
      jumbotron: document.querySelector('#jumbotron'),
      catalog: document.querySelector('#catalogRestaurants'),
    });
    sw_register();
    window.addEventListener('hashchange', () => {
      scripts_app.renderPage();
    });
    window.addEventListener('load', () => {
      scripts_app.renderPage();
    });
    /***/ }),
/** *** */ ]));
