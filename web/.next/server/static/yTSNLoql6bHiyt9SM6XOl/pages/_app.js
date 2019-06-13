module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+Ut7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("Q0N3");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Yqw":
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),

/***/ "1TCz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _app = _interopRequireWildcard(__webpack_require__("8Bbg"));

var _reactRedux = __webpack_require__("h74D");

var _serialize = _interopRequireDefault(__webpack_require__("HjMe"));

var _deserialize = _interopRequireDefault(__webpack_require__("mERI"));

var _getDiContainer = _interopRequireDefault(__webpack_require__("4OlW"));

var _getReduxStore = _interopRequireDefault(__webpack_require__("plgE"));

var _getRelayEnvironment = _interopRequireDefault(__webpack_require__("vcBc"));

var _state = __webpack_require__("XiiD");

var _Relay = __webpack_require__("5upH");

var _StylesContainer = _interopRequireDefault(__webpack_require__("urWx"));

var _IntlContainer = _interopRequireDefault(__webpack_require__("jchj"));

var _DateContainer = _interopRequireDefault(__webpack_require__("H4or"));

var MyApp =
/*#__PURE__*/
function (_App) {
  (0, _inherits2.default)(MyApp, _App);
  (0, _createClass2.default)(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx, req, res, err, query, statusCode, di, store, environment, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                req = ctx.req, res = ctx.res, err = ctx.err, query = ctx.query;
                statusCode = err && err.statusCode || res && res.statusCode || 200;
                if (statusCode === 200 && err) statusCode = 500; // Dependency Injection Container
                // Available in Thunk as the third argument, i.e.:
                // (dispatch, getState, di) => Promise

                di = (0, _getDiContainer.default)(); // Redux Store

                store = (0, _getReduxStore.default)(di);
                _context.next = 8;
                return store.dispatch(_state.appOperations.create({
                  statusCode: statusCode,
                  isStaticSite: !!(query && query.isStaticSite),
                  locale: query && query.locale,
                  theme: query && query.theme,
                  appServer: query && query.appServer,
                  apiServer: query && query.apiServer,
                  wsServer: query && query.wsServer,
                  googleMapsKey: query && query.googleMapsKey
                }));

              case 8:
                // Relay Environment
                environment = (0, _getRelayEnvironment.default)(di);

                if (req) {
                  // Let Fetcher know we are doing SSR right now
                  di.get("fetcher").setReqRes(req, res);
                }

                ctx.di = di;
                ctx.store = store;
                ctx.fetchQuery = (0, _Relay.fetchQuery)(environment);
                ctx.theme = _state.appSelectors.getTheme(store.getState());
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 28;
                  break;
                }

                _context.prev = 16;
                _context.next = 19;
                return Component.getInitialProps(ctx);

              case 19:
                pageProps = _context.sent;
                _context.next = 28;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](16);
                console.error(_context.t0);

                if (!(statusCode === 200)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 28;
                return store.dispatch(_state.appOperations.setStatusCode({
                  code: 500
                }));

              case 28:
                statusCode = _state.appSelectors.getStatusCode(store.getState());
                if (statusCode !== 200 && res && res.statusCode !== statusCode) res.status(statusCode);
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  reduxState: (0, _serialize.default)(store.getState(), "redux"),
                  relayState: (0, _serialize.default)(environment.getStore().getSource(), "relay")
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[16, 22]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyApp);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyApp).call(this, props));
    _this.di = (0, _getDiContainer.default)();
    _this.reduxStore = (0, _getReduxStore.default)(_this.di, (0, _deserialize.default)(props.reduxState, "redux"));
    _this.relayEnvironment = (0, _getRelayEnvironment.default)(_this.di, (0, _deserialize.default)(props.relayState, "relay"));
    return _this;
  }

  (0, _createClass2.default)(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Start the app
      this.reduxStore.dispatch(_state.appOperations.start()).catch(console.error); // Remove the server-side injected CSS.

      var jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return _react.default.createElement(_app.Container, null, _react.default.createElement(_reactRedux.Provider, {
        store: this.reduxStore
      }, _react.default.createElement(_Relay.RelayProvider, {
        environment: this.relayEnvironment
      }, _react.default.createElement(_StylesContainer.default, null, _react.default.createElement(_IntlContainer.default, null, _react.default.createElement(_DateContainer.default, null, _react.default.createElement(Component, pageProps)))))));
    }
  }]);
  return MyApp;
}(_app.default);

var _default = MyApp;
exports.default = _default;

/***/ }),

/***/ "1xBf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getObjectType(value) {
  if (!value) {
    return null;
  }

  return value.constructor.name;
}

function isSupportedNativeType(value) {
  return isDate(value) || isRegExp(value);
}

function isDate(value) {
  return getObjectType(value) === 'Date';
}

function isRegExp(value) {
  return getObjectType(value) === 'RegExp';
}

function patchNativeTypeMethods(patchedObj, nativeObj) {
  patchedObj.toString = nativeObj.toString.bind(nativeObj);
  if (isDate(nativeObj)) {
    patchedObj.toISOString = nativeObj.toISOString.bind(nativeObj);
  }
}

module.exports = {
  getObjectType: getObjectType,
  isSupportedNativeType: isSupportedNativeType,
  isDate: isDate,
  isRegExp: isRegExp,
  patchNativeTypeMethods: patchNativeTypeMethods
};

/***/ }),

/***/ "2x6k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("oOPP"),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__("+FwM"),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primaryColor = "rgba(255, 255, 255, 0.9)";
var primaryBackground = "#80838f";
var secondaryColor = "rgba(255, 255, 255, 0.9)";
var secondaryBackground = "#c5511d";
var bgNormal = "#3b3f4d";
var bgPaper = "#585e6e";
var textPrimary = "rgba(255, 255, 255, 0.9)";
var textSecondary = "rgba(255, 255, 255, 0.6)";
var textDisabled = "rgba(255, 255, 255, 0.35)";
var textError = red[400];
var textInfo = blueGrey[200];
var fontSize = 14;
module.exports = {
  name: "dark",
  palette: {
    primary: {
      main: primaryBackground,
      contrastText: primaryColor
    },
    secondary: {
      main: secondaryBackground,
      contrastText: secondaryColor
    },
    background: {
      default: bgNormal,
      paper: bgPaper
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
      hint: textDisabled
    },
    error: {
      main: textError
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 30,
    background: "rgb(22, 25, 32) linear-gradient(\n        to bottom,\n        rgba(72, 78, 94, 1.0) 0,\n        rgba(72, 78, 94, 0.0) 80%,\n        rgba(72, 78, 94, 0.0) 100%\n      )",
    color: "#f0f0f0",
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: textSecondary,
    itemHoverBackground: lighten(bgNormal, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: "4px solid ".concat(darken(secondaryBackground, 0.3)),
    itemSelectedBackground: lighten(bgNormal, 0.25),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: "4px solid ".concat(secondaryBackground),
    itemSelectedHoverBackground: lighten(bgNormal, 0.35),
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondaryBackground, 0.05))
  },
  chart: {
    statColor: textPrimary,
    mapColor: textPrimary,
    mapBackground: primaryBackground,
    mapHoverBackground: secondaryBackground,
    mapSelectedBackground: lighten(secondaryBackground, 0.15),
    lineColor: textInfo,
    areaColor: fade(textInfo, 0.25)
  },
  form: {
    stepperBackground: fade(primaryBackground, 0.65),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  main: {
    background: bgNormal,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: bgPaper,
        color: textPrimary
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid ".concat(textDisabled)
      },
      head: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
        "&.selected": {
          background: primaryBackground
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: "1px solid ".concat(textDisabled),
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        color: [textPrimary, "!important"],
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiTooltip: {
      popper: {
        zIndex: 10000
      }
    },
    MuiButton: {
      root: {
        "&$containedPrimary": {
          background: [primaryBackground, "!important"],
          color: [primaryColor, "!important"]
        },
        "&$containedSecondary": {
          background: [secondaryBackground, "!important"],
          color: [secondaryColor, "!important"]
        },
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgNormal, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textSecondary)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(lighten(secondaryBackground, 0.1))
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textPrimary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: ["32px", "!important"],
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiSwitch: {
      track: {
        "&:not($checked)": {
          opacity: 0.25
        }
      }
    }
  }
};

/***/ }),

/***/ "3qfz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("9Pu4"),
    createMuiTheme = _require.createMuiTheme;

var dark = __webpack_require__("2x6k");

var light = __webpack_require__("J4Ya");

module.exports = {
  defaultTheme: "dark",
  names: ["dark", "light"],
  defs: {
    dark: dark,
    light: light
  },
  themes: {
    dark: createMuiTheme(dark),
    light: createMuiTheme(light)
  }
};

/***/ }),

/***/ "4AUM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ddf9c278b5d5c2db0d31cdc3036dd5dd
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProfileInput = {|
  name?: ?string,
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateProfileMutationVariables = {|
  input: UpdateProfileInput
|};
export type UpdateProfileMutationResponse = {|
  +updateProfile: ?{|
    +success: ?boolean
  |}
|};
export type UpdateProfileMutation = {|
  variables: UpdateProfileMutationVariables,
  response: UpdateProfileMutationResponse,
|};
*/

/*
mutation UpdateProfileMutation(
  $input: UpdateProfileInput!
) {
  updateProfile(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "UpdateProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UpdateProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "UpdateProfileMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "UpdateProfileMutation",
      "id": null,
      "text": "mutation UpdateProfileMutation(\n  $input: UpdateProfileInput!\n) {\n  updateProfile(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '9e47c867af2046685911f7372c7f5bae';
module.exports = node;

/***/ }),

/***/ "4OlW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDiContainer;

var _injectt = _interopRequireDefault(__webpack_require__("QGZh"));

var _Fetcher = _interopRequireDefault(__webpack_require__("du97"));

var _Storage = _interopRequireDefault(__webpack_require__("wyL8"));

var _Socket = _interopRequireDefault(__webpack_require__("XpkF"));

var _Cookie = _interopRequireDefault(__webpack_require__("dHHO"));

var diFactory = function diFactory() {
  var di = new _injectt.default();
  di.registerClass(_Fetcher.default);
  di.registerClass(_Storage.default);
  di.registerClass(_Socket.default);
  di.registerClass(_Cookie.default);
  return di;
};

var __NEXT_DI_CONTAINER__ = "__NEXT_DI_CONTAINER__";

function getDiContainer() {
  var di;

  if (true) {
    // Always make a new container if server,
    // otherwise state is shared between requests
    di = diFactory();
  } else {}

  return di;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4tOB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__("cwDw"));

var setSelected = function setSelected(_ref) {
  var employeeId = _ref.employeeId,
      isSelected = _ref.isSelected;
  return {
    type: types.SET_SELECTED,
    employeeId: employeeId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref2) {
  var employeeIds = _ref2.employeeIds;
  return {
    type: types.SELECT_ALL,
    employeeIds: employeeIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptEmployeeIds = _ref3.exceptEmployeeIds;

  return {
    type: types.DESELECT_ALL,
    exceptEmployeeIds: exceptEmployeeIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      employeeId = _ref4.employeeId;

  return {
    type: types.SHOW_EDIT_MODAL,
    employeeId: employeeId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5upH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = exports.QueryRenderer = exports.RelayProvider = exports.fetchQuery = exports.RelayContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactRelay = _interopRequireDefault(__webpack_require__("iuEU"));

var _relayRuntime = __webpack_require__("AV/6");

var _relayQueryLookupRenderer = _interopRequireDefault(__webpack_require__("0Yqw"));

var RelayContext = _react.default.createContext({});

exports.RelayContext = RelayContext;

var fetchQuery = function fetchQuery(environment) {
  return function (query, variables) {
    return (0, _relayRuntime.fetchQuery)(environment, query, variables);
  };
};

exports.fetchQuery = fetchQuery;

var RelayProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RelayProvider, _React$Component);

  function RelayProvider() {
    (0, _classCallCheck2.default)(this, RelayProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RelayProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(RelayProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          environment = _this$props.environment,
          children = _this$props.children;
      return _react.default.createElement(RelayContext.Provider, {
        value: environment
      }, children);
    }
  }]);
  return RelayProvider;
}(_react.default.Component);

exports.RelayProvider = RelayProvider;

var QueryRenderer =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(QueryRenderer, _React$Component2);

  function QueryRenderer() {
    (0, _classCallCheck2.default)(this, QueryRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QueryRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(QueryRenderer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["children"]);
      return _react.default.createElement(_relayQueryLookupRenderer.default, (0, _extends2.default)({
        lookup: true,
        environment: this.context
      }, props), children);
    }
  }]);
  return QueryRenderer;
}(_react.default.Component);

exports.QueryRenderer = QueryRenderer;
(0, _defineProperty2.default)(QueryRenderer, "contextType", RelayContext);

var Subscription =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(Subscription, _React$Component3);

  function Subscription() {
    (0, _classCallCheck2.default)(this, Subscription);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Subscription).apply(this, arguments));
  }

  (0, _createClass2.default)(Subscription, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.request = _reactRelay.default.requestSubscription(this.context, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.request) {
        this.request.dispose();
        this.request = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null);
    }
  }]);
  return Subscription;
}(_react.default.Component);

exports.Subscription = Subscription;
(0, _defineProperty2.default)(Subscription, "defaultProps", {
  variables: {}
});
(0, _defineProperty2.default)(Subscription, "contextType", RelayContext);

/***/ }),

/***/ "7Km0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("4AUM");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9Ysx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Transform = __webpack_require__("msIP").Transform;
const PassThrough = __webpack_require__("msIP").PassThrough;
const CoStream = __webpack_require__("w384");
const RecursiveIterable = __webpack_require__("kri5");
const isReadableStream = __webpack_require__("zh76").isReadableStream;

class JSONStreamify extends CoStream {
    constructor(value, replacer, space, _visited, _stack) {
        super(arguments);
        this._iter = new RecursiveIterable(replacer instanceof Function ? replacer(undefined, value) : value, replacer, space, _visited, _stack);
    }

    * _makeGenerator(value, replacer) {
        let insertSeparator = false;
        for (let obj of this._iter) {
            //console.log(obj, insertSeparator);

            if (obj.state === 'close') {
                insertSeparator = true;
                yield this.push(obj.type === Object ? '}' : ']');
                continue;
            }

            if (obj.state === 'open') {
                insertSeparator = false;
                yield this.push(obj.type === Object ? '{' : '[');
                continue;
            }

            if (insertSeparator) {
                yield this.push(',');
            }

            if (obj.key && obj.ctxType !== Array) {
                yield this.push(JSON.stringify(obj.key) + ':');
            }

            if (isReadableStream(obj.value)) {
                if (!obj.value._readableState.objectMode) {
                    // Non Object Mode are emitted as a concatinated string
                    yield this.push('"');
                    yield obj.value.pipe(new Transform({
                        transform: (data, enc, next) => {
                            this.push(JSON.stringify(data.toString()).slice(1, -1));
                            next(null);
                        }
                    }));
                    yield this.push('"');
                    continue;
                }

                // Object Mode Streams are emitted as arrays
                yield this.push('[');
                let first = true;
                const pass = new PassThrough();
                let i = 0;
                obj.value.pipe(new Transform({
                    objectMode: true,
                    transform: (data, enc, next) => {
                        if (!first) {
                            pass.push(',');
                        }
                        first = false;
                        let stream = new JSONStreamify(data, this._iter.replacer, this._iter.space, this._iter.visited);
                        stream._iter._stack = obj.stack.concat(i++);
                        stream._iter._parentCtxType = Array;
                        stream.once('end', () => next(null, undefined)).pipe(pass, {
                            end: false
                        });
                    }
                })).once('end', () => pass.end()).resume();
                yield pass;
                yield this.push(']');
                continue;
            }

            if (obj.state === 'circular') {
                yield this.push(JSON.stringify({ $ref: `$${obj.value.map(v => `[${JSON.stringify(v)}]`).join('')}` }));
            }

            if (obj.value instanceof Promise) {
                let childIterator = new RecursiveIterable(yield obj.value, this._iter.replacer, this._iter.space, this._iter.visited, obj.stack.concat(obj.key || []))[Symbol.iterator]();
                obj.value = obj.attachChild(childIterator, obj.key);
                insertSeparator = false;
                continue;
            }

            if (obj.state === 'value') {
                yield this.push(JSON.stringify(obj.value));
            }

            insertSeparator = true;
        }
        this._iter = undefined;
    }
}

module.exports = function(obj, replacer) {
    return new JSONStreamify(obj, replacer);
};


/***/ }),

/***/ "9nAp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("nkzV");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "AYdZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 83d6098362c35d5e4c7c1395ae34e61c
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
export type EditUserInput = {|
  id: string,
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type EditUserMutationVariables = {|
  input: EditUserInput
|};
export type EditUserMutationResponse = {|
  +editUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type EditUserMutation = {|
  variables: EditUserMutationVariables,
  response: EditUserMutationResponse,
|};
*/

/*
mutation EditUserMutation(
  $input: EditUserInput!
) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "EditUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditUserMutation",
      "id": null,
      "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '3e6c36e4a9a4bce4d918bd7dea47edbc';
module.exports = node;

/***/ }),

/***/ "AlFE":
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "BCqB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 63cf91ced53e73edb780bf2751b57911
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type CreateEmployeeInput = {|
  uid?: ?string,
  checked?: ?boolean,
  name?: ?string,
  dept?: ?EmployeeDept,
  title?: ?string,
  country?: ?string,
  salary?: ?number,
  clientMutationId?: ?string,
|};
export type CreateEmployeeMutationVariables = {|
  input: CreateEmployeeInput
|};
export type CreateEmployeeMutationResponse = {|
  +createEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type CreateEmployeeMutation = {|
  variables: CreateEmployeeMutationVariables,
  response: CreateEmployeeMutationResponse,
|};
*/

/*
mutation CreateEmployeeMutation(
  $input: CreateEmployeeInput!
) {
  createEmployee(input: $input) {
    employee {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "CreateEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateEmployeeMutation",
      "id": null,
      "text": "mutation CreateEmployeeMutation(\n  $input: CreateEmployeeInput!\n) {\n  createEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '88a7c7e8df38fa5fa4ff48e3f8284213';
module.exports = node;

/***/ }),

/***/ "BZsq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash e61c0b23b3680dc8eecdd74dd339f0da
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
export type CreateUserInput = {|
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/

/*
mutation CreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateUserMutation",
      "id": null,
      "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e10e0a2a6b930a44cda50e71a629c8f3';
module.exports = node;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "CJ0o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 95f42e41b3b9d26fafdc0714ed791abe
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type EditEmployeeInput = {|
  id: string,
  uid?: ?string,
  checked?: ?boolean,
  name?: ?string,
  dept?: ?EmployeeDept,
  title?: ?string,
  country?: ?string,
  salary?: ?number,
  clientMutationId?: ?string,
|};
export type EditEmployeeMutationVariables = {|
  input: EditEmployeeInput
|};
export type EditEmployeeMutationResponse = {|
  +editEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type EditEmployeeMutation = {|
  variables: EditEmployeeMutationVariables,
  response: EditEmployeeMutationResponse,
|};
*/

/*
mutation EditEmployeeMutation(
  $input: EditEmployeeInput!
) {
  editEmployee(input: $input) {
    employee {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "EditEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditEmployeeMutation",
      "id": null,
      "text": "mutation EditEmployeeMutation(\n  $input: EditEmployeeInput!\n) {\n  editEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '544d4606cbbbd95fc31a953d239c7598';
module.exports = node;

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Cyi7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormErrors;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};
  var errors = _.get(data, "errors") || [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._status = (result._status || []).concat([error.message]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!_.keys(result).length) result = {
    _status: defaultMessage
  };
  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "DfuF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("BZsq");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "EY6e":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var objectWithoutPropertiesLoose = __webpack_require__("L2E4");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "H4or":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("XiiD");

var _Date = _interopRequireDefault(__webpack_require__("hxBR"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state)
  };
};

var DateProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Date.default);
var _default = DateProvider;
exports.default = _default;

/***/ }),

/***/ "HjMe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const pako = __webpack_require__("pLMf");
const utf8 = __webpack_require__("okBe");
const { byteEncode } = __webpack_require__("Y/7s");
const { serialize } = __webpack_require__("wu3R");

/**
 * Sserialize Immutable state into BASE64 string
 */
module.exports = function(state, type) {
  if (!state) return "";

  let obj;
  if (type === "redux") {
    obj = serialize(state);
  } else {
    obj = state;
  }

  let str = JSON.stringify(obj, (key, value) =>
    _.isString(value) ? utf8.encode(value) : value
  );
  let output = byteEncode(pako.deflate(str, { to: "string" }));

  return output;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IIe3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("AYdZ");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "J4Ya":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("oOPP"),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__("+FwM"),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primaryColor = "rgba(255, 255, 255, 0.9)";
var primaryBackground = "#4b648d";
var secondaryColor = "rgba(0, 0, 0, 0.9)";
var secondaryBackground = "#fda50f";
var bgPage = "#e0e0f0";
var bgPaper = "#ffffff";
var textPrimary = "rgba(0, 0, 0, 0.9)";
var textSecondary = "rgba(0, 0, 0, 0.6)";
var textDisabled = "rgba(0, 0, 0, 0.35)";
var textError = red[500];
var textInfo = blueGrey[400];
var fontSize = 14;
module.exports = {
  name: "light",
  palette: {
    primary: {
      main: primaryBackground,
      contrastText: primaryColor
    },
    secondary: {
      main: secondaryBackground,
      contrastText: secondaryColor
    },
    background: {
      default: bgPage,
      paper: bgPaper
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
      hint: textDisabled
    },
    error: {
      main: textError
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 30,
    background: "rgb(30, 47, 65) linear-gradient(\n      to bottom,\n      rgba(65, 103, 165, 1.0) 0,\n      rgba(65, 103, 165, 0.0) 80%,\n      rgba(65, 103, 165, 0.0) 100%\n    )",
    color: primaryColor,
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: primaryColor,
    itemHoverBackground: darken(bgPaper, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: "4px solid ".concat(darken(secondaryBackground, 0.3)),
    itemSelectedBackground: darken(bgPaper, 0.05),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: "4px solid ".concat(secondaryBackground),
    itemSelectedHoverBackground: bgPaper,
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondaryBackground, 0.05))
  },
  chart: {
    statColor: primaryBackground,
    mapColor: primaryColor,
    mapBackground: primaryBackground,
    mapHoverBackground: secondaryBackground,
    mapSelectedBackground: lighten(secondaryBackground, 0.15),
    lineColor: textInfo,
    areaColor: fade(textInfo, 0.25)
  },
  form: {
    stepperBackground: darken(bgPaper, 0.05),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  main: {
    background: bgPage,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: bgPaper,
        color: textPrimary
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid ".concat(textDisabled)
      },
      head: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
        "&.selected": {
          background: lighten(primaryBackground, 0.85)
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: "1px solid ".concat(textDisabled),
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiTooltip: {
      popper: {
        zIndex: 10000
      }
    },
    MuiButton: {
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgPage, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [lighten(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textSecondary)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(darken(secondaryBackground, 0.1))
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [darken(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgPage, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgPage, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgPage, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textPrimary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: ["32px", "!important"],
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiSwitch: {
      track: {
        "&:not($checked)": {
          opacity: 0.25
        }
      }
    }
  }
};

/***/ }),

/***/ "JMiR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ea845db8d8a70fd7e5f1e5a53aa977df
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyEmailInput = {|
  token?: ?string,
  clientMutationId?: ?string,
|};
export type VerifyEmailMutationVariables = {|
  input: VerifyEmailInput
|};
export type VerifyEmailMutationResponse = {|
  +verifyEmail: ?{|
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
  |}
|};
export type VerifyEmailMutation = {|
  variables: VerifyEmailMutationVariables,
  response: VerifyEmailMutationResponse,
|};
*/

/*
mutation VerifyEmailMutation(
  $input: VerifyEmailInput!
) {
  verifyEmail(input: $input) {
    success
    accessToken
    refreshToken
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "VerifyEmailInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "verifyEmail",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "VerifyEmailPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "VerifyEmailMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "VerifyEmailMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "VerifyEmailMutation",
      "id": null,
      "text": "mutation VerifyEmailMutation(\n  $input: VerifyEmailInput!\n) {\n  verifyEmail(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '1145b01de017614387a8f7bc1405086a';
module.exports = node;

/***/ }),

/***/ "Jn2N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("CJ0o");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Jr3Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 9b4c12643d4b7f8ca0e9b1f320639e2f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProfileInput = {|
  clientMutationId?: ?string
|};
export type DeleteProfileMutationVariables = {|
  input: DeleteProfileInput
|};
export type DeleteProfileMutationResponse = {|
  +deleteProfile: ?{|
    +success: ?boolean
  |}
|};
export type DeleteProfileMutation = {|
  variables: DeleteProfileMutationVariables,
  response: DeleteProfileMutationResponse,
|};
*/

/*
mutation DeleteProfileMutation(
  $input: DeleteProfileInput!
) {
  deleteProfile(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "DeleteProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteProfileMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteProfileMutation",
      "id": null,
      "text": "mutation DeleteProfileMutation(\n  $input: DeleteProfileInput!\n) {\n  deleteProfile(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '52e325cd180e1e90940a792f459eb397';
module.exports = node;

/***/ }),

/***/ "Jv6i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 94855897f508d7654e7012a3b1d90b5b
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestEmailVerificationInput = {|
  locale?: ?string,
  clientMutationId?: ?string,
|};
export type RequestEmailVerificationMutationVariables = {|
  input: RequestEmailVerificationInput
|};
export type RequestEmailVerificationMutationResponse = {|
  +requestEmailVerification: ?{|
    +success: ?boolean
  |}
|};
export type RequestEmailVerificationMutation = {|
  variables: RequestEmailVerificationMutationVariables,
  response: RequestEmailVerificationMutationResponse,
|};
*/

/*
mutation RequestEmailVerificationMutation(
  $input: RequestEmailVerificationInput!
) {
  requestEmailVerification(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "RequestEmailVerificationInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "requestEmailVerification",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "RequestEmailVerificationPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "RequestEmailVerificationMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "RequestEmailVerificationMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "RequestEmailVerificationMutation",
      "id": null,
      "text": "mutation RequestEmailVerificationMutation(\n  $input: RequestEmailVerificationInput!\n) {\n  requestEmailVerification(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '501ecd6de6ba0d802c7cd7159a7a1df4';
module.exports = node;

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KNS6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/pickers");

/***/ }),

/***/ "Kg9H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__("dz41"));

var setSelected = function setSelected(_ref) {
  var userId = _ref.userId,
      isSelected = _ref.isSelected;
  return {
    type: types.SET_SELECTED,
    userId: userId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref2) {
  var userIds = _ref2.userIds;
  return {
    type: types.SELECT_ALL,
    userIds: userIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptUserIds = _ref3.exceptUserIds;

  return {
    type: types.DESELECT_ALL,
    exceptUserIds: exceptUserIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref4.userId;

  return {
    type: types.SHOW_EDIT_MODAL,
    userId: userId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

/***/ }),

/***/ "L2E4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("pLtp");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "MLhr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("seUC"));

var _locales = _interopRequireDefault(__webpack_require__("MSzE"));

var _themes = _interopRequireDefault(__webpack_require__("3qfz"));

/* State Shape
Map({
  created: Number, // timestamp
  statusCode: Number, // current HTTP status code
  isStaticSite: Boolean,
  appServer: String,
  apiServer: String,
  googleMapsKey: null,
  locale: String,
  theme: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
  isAuthModalOpen: false,
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }

  return state;
};

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (_.isFinite(action.statusCode) && action.statusCode >= 200) return action.statusCode;
      break;

    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var isStaticSiteReducer = function isStaticSiteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.isStaticSite)) return action.isStaticSite;
      break;
  }

  return state;
};

var appServerReducer = function appServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appServer)) return action.appServer;
      break;
  }

  return state;
};

var apiServerReducer = function apiServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.apiServer)) return action.apiServer;
      break;
  }

  return state;
};

var wsServerReducer = function wsServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.wsServer)) return action.wsServer;
      break;
  }

  return state;
};

var googleMapsKeyReducer = function googleMapsKeyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var themeReducer = function themeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _themes.default.defaultTheme;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET_THEME:
      if (!_.isUndefined(action.theme)) return action.theme;
      break;
  }

  return state;
};

var isStartedReducer = function isStartedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.START:
      return true;
  }

  return state;
};

var isStoppedReducer = function isStoppedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.STOP:
      return true;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var isAuthModalOpenReducer = function isAuthModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_AUTH_MODAL:
      return true;

    case types.HIDE_AUTH_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  statusCode: statusCodeReducer,
  isStaticSite: isStaticSiteReducer,
  appServer: appServerReducer,
  apiServer: apiServerReducer,
  wsServer: wsServerReducer,
  locale: localeReducer,
  theme: themeReducer,
  googleMapsKey: googleMapsKeyReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer,
  isAuthModalOpen: isAuthModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "MSzE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

/**
 * Convert this:
 * {
 *    "KEY": [
 *      "string",
 *      "another",
 *      "..."
 *    ]
 * }
 *
 * Into this:
 * {
 *    "KEY": "stringanother..."
 * }
 */
function parse(source) {
  const messages = {};
  for (let key of _.keys(source))
    messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  flags: { en: "US", ru: "RU" },
  names: { en: "English", ru: "Русский язык" },
  messages: {
    en: parse(__webpack_require__("dxCc")),
    ru: parse(__webpack_require__("vu9h"))
  },
  getLocaleData() {
    return [
      __webpack_require__("BlHF"),
      __webpack_require__("vdyi")
    ];
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "N72Q":
/***/ (function(module, exports) {

module.exports = require("moment/locale/ru.js");

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "P/y3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.sendToast = exports.deleteProfile = exports.unlinkProvider = exports.finishLinkingProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.stop = exports.start = exports.create = exports.hideAuthModal = exports.showAuthModal = exports.setTheme = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("kWTZ"));

var selectors = _interopRequireWildcard(__webpack_require__("VOgL"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("Cyi7"));

var _SignIn = _interopRequireDefault(__webpack_require__("xMej"));

var _SignUp = _interopRequireDefault(__webpack_require__("f5YN"));

var _SignOut = _interopRequireDefault(__webpack_require__("flba"));

var _RequestEmailVerification = _interopRequireDefault(__webpack_require__("tyBL"));

var _VerifyEmail = _interopRequireDefault(__webpack_require__("ZUHO"));

var _UpdateProfile = _interopRequireDefault(__webpack_require__("7Km0"));

var _UnlinkProvider = _interopRequireDefault(__webpack_require__("zX+l"));

var _DeleteProfile = _interopRequireDefault(__webpack_require__("n0DR"));

var _GetToken = _interopRequireDefault(__webpack_require__("+Ut7"));

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var setTheme = actions.setTheme;
exports.setTheme = setTheme;
var showAuthModal = actions.showAuthModal;
exports.showAuthModal = showAuthModal;
var hideAuthModal = actions.hideAuthModal; // called in App.getInitialProps()

exports.hideAuthModal = hideAuthModal;

var create = function create(_ref) {
  var statusCode = _ref.statusCode,
      isStaticSite = _ref.isStaticSite,
      locale = _ref.locale,
      theme = _ref.theme,
      appServer = _ref.appServer,
      apiServer = _ref.apiServer,
      wsServer = _ref.wsServer,
      googleMapsKey = _ref.googleMapsKey;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", dispatch(actions.create({
                  statusCode: statusCode,
                  isStaticSite: isStaticSite,
                  locale: locale,
                  theme: theme,
                  appServer: appServer,
                  apiServer: apiServer,
                  wsServer: wsServer,
                  googleMapsKey: googleMapsKey
                })));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // called in App.costructor() client-side


exports.create = create;

var start = function start() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                di.singletons(); // instantiate
                // Refresh tokens client side
                // The first AUTH_UPDATE event will activate app and subscriptions websockets

                di.get("fetcher").refreshTokens().catch(console.error);
                return _context2.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

var stop = function stop() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", dispatch(actions.stop()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.stop = stop;

var signIn = function signIn(_ref5) {
  var email = _ref5.email,
      password = _ref5.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _SignIn.default)(di, {
                  email: email,
                  password: password
                });

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return di.get("fetcher").setTokens(_.get(data, "data.signIn.accessToken", null), _.get(data, "data.signIn.refreshToken", null));

              case 6:
                return _context4.abrupt("return", true);

              case 7:
                return _context4.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_FAILED"));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signUp = function signUp(_ref7) {
  var email = _ref7.email,
      password = _ref7.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var locale, data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                locale = selectors.getLocale(getState());
                _context5.next = 3;
                return (0, _SignUp.default)(di, {
                  email: email,
                  password: password,
                  locale: locale
                });

              case 3:
                data = _context5.sent;

                if (!_.get(data, "data.signUp.success", false)) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return di.get("fetcher").setTokens(_.get(data, "data.signUp.accessToken", null), _.get(data, "data.signUp.refreshToken", null));

              case 7:
                return _context5.abrupt("return", true);

              case 8:
                return _context5.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_EMAIL_TAKEN"));

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10, _x11) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.signUp = signUp;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _SignOut.default)(di);

              case 2:
                data = _context6.sent;

                if (!_.get(data, "data.signOut.success", false)) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 6;
                return dispatch(stop());

              case 6:
                _context6.next = 8;
                return di.get("fetcher").setTokens(null, null);

              case 8:
                window.location.href = "/";
                return _context6.abrupt("return", true);

              case 10:
                return _context6.abrupt("return", false);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x12, _x13, _x14) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var requestEmailVerification = function requestEmailVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch, getState, di) {
        var locale, data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                locale = selectors.getLocale(getState());
                _context7.next = 3;
                return (0, _RequestEmailVerification.default)(di, {
                  locale: locale
                });

              case 3:
                data = _context7.sent;
                return _context7.abrupt("return", !!_.get(data, "data.requestEmailVerification.success", false));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15, _x16, _x17) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.requestEmailVerification = requestEmailVerification;

var finishEmailVerification = function finishEmailVerification(_ref11) {
  var token = _ref11.token;
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _VerifyEmail.default)(di, {
                  token: token
                });

              case 2:
                data = _context8.sent;

                if (!_.get(data, "data.verifyEmail.success", false)) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 6;
                return di.get("fetcher").setTokens(_.get(data, "data.verifyEmail.accessToken", null), _.get(data, "data.verifyEmail.refreshToken", null));

              case 6:
                return _context8.abrupt("return", true);

              case 7:
                return _context8.abrupt("return", false);

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x18, _x19, _x20) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.finishEmailVerification = finishEmailVerification;

var updateProfile = function updateProfile(_ref13) {
  var email = _ref13.email,
      name = _ref13.name,
      password = _ref13.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _UpdateProfile.default)(di, {
                  email: email,
                  name: name,
                  password: password
                });

              case 2:
                data = _context9.sent;

                if (!_.get(data, "data.updateProfile.success", false)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", true);

              case 5:
                return _context9.abrupt("return", (0, _getFormErrors.default)(data));

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x21, _x22, _x23) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;

var linkProvider = function linkProvider(_ref15) {
  var provider = _ref15.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch, getState, di) {
        var refreshToken, data, result, oneTimeToken;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return di.get("fetcher").getRefreshToken();

              case 2:
                refreshToken = _context10.sent;
                _context10.next = 5;
                return (0, _GetToken.default)(di, {
                  type: "oneTime",
                  token: refreshToken
                });

              case 5:
                data = _context10.sent;
                result = _.get(data, "data.getToken.success", null);

                if (result === true) {
                  oneTimeToken = _.get(data, "data.getToken.token", null);
                  window.location.href = selectors.getApiServer(getState()) + _constants.default.apiBase + "/oauth/" + _.lowerCase(provider) + "?token=" + encodeURIComponent(oneTimeToken) + "&redirect=" + encodeURIComponent(window.location.href);
                }

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x24, _x25, _x26) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var finishLinkingProvider = function finishLinkingProvider(_ref17) {
  var token = _ref17.token,
      redirect = _ref17.redirect;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _GetToken.default)(di, {
                  type: "access",
                  token: token
                });

              case 2:
                data = _context11.sent;

                if (!_.get(data, "data.getToken.success", false)) {
                  _context11.next = 8;
                  break;
                }

                _context11.next = 6;
                return di.get("fetcher").setTokens(_.get(data, "data.getToken.token", null), _.get(data, "data.getToken.refreshToken", null));

              case 6:
                _router.default.push(redirect || "/");

                return _context11.abrupt("return", true);

              case 8:
                return _context11.abrupt("return", false);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x27, _x28, _x29) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.finishLinkingProvider = finishLinkingProvider;

var unlinkProvider = function unlinkProvider(_ref19) {
  var provider = _ref19.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref20 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _UnlinkProvider.default)(di, {
                  provider: provider
                });

              case 2:
                data = _context12.sent;

                if (!_.get(data, "data.unlinkProvider.success", false)) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return", true);

              case 5:
                return _context12.abrupt("return", (0, _getFormErrors.default)(data));

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x30, _x31, _x32) {
        return _ref20.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return (0, _DeleteProfile.default)(di);

              case 2:
                data = _context13.sent;

                if (!_.get(data, "data.deleteProfile.success", false)) {
                  _context13.next = 10;
                  break;
                }

                _context13.next = 6;
                return dispatch(stop());

              case 6:
                _context13.next = 8;
                return di.get("fetcher").setTokens(null, null);

              case 8:
                window.location.href = "/";
                return _context13.abrupt("return", true);

              case 10:
                return _context13.abrupt("return", false);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x33, _x34, _x35) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;

var sendToast = function sendToast(_ref22) {
  var position = _ref22.position,
      title = _ref22.title,
      content = _ref22.content;
  return (
    /*#__PURE__*/
    function () {
      var _ref23 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", di.get("socket").emit(_constants.default.messages.TOAST, {
                  position: position,
                  title: title,
                  content: content
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x36, _x37, _x38) {
        return _ref23.apply(this, arguments);
      };
    }()
  );
};

exports.sendToast = sendToast;

var setCookie = function setCookie(_ref24) {
  var name = _ref24.name,
      value = _ref24.value,
      days = _ref24.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref25 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", di.get("cookie").set(name, value, days));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x39, _x40, _x41) {
        return _ref25.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "Q0N3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 85fbd47a00e06d8a6321f0e9ad1ef759
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetTokenInput = {|
  type?: ?string,
  token?: ?string,
  clientMutationId?: ?string,
|};
export type GetTokenMutationVariables = {|
  input: GetTokenInput
|};
export type GetTokenMutationResponse = {|
  +getToken: ?{|
    +success: ?boolean,
    +token: ?string,
    +refreshToken: ?string,
  |}
|};
export type GetTokenMutation = {|
  variables: GetTokenMutationVariables,
  response: GetTokenMutationResponse,
|};
*/

/*
mutation GetTokenMutation(
  $input: GetTokenInput!
) {
  getToken(input: $input) {
    success
    token
    refreshToken
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "GetTokenInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "getToken",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "GetTokenPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "token",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "GetTokenMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "GetTokenMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "GetTokenMutation",
      "id": null,
      "text": "mutation GetTokenMutation(\n  $input: GetTokenInput!\n) {\n  getToken(input: $input) {\n    success\n    token\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '31309691311617f3664d552cabfdba3a';
module.exports = node;

/***/ }),

/***/ "QGZh":
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),

/***/ "QwMX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("dz41"));

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.userId)) return state.delete(action.userId);else return state.add(action.userId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.userIds)) return (0, _immutable.Set)(action.userIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptUserIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptUserIds, item)) set.delete(item);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }

  }

  return state;
};

var editModalUserIdReducer = function editModalUserIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.userId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  selected: selectedReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "QwoZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const roles = {
  AUTHENTICATED: "AUTHENTICATED", // every one logged in has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/v1",
  socketsBase: "/ws",
  graphqlBase: "/graphql",
  roles,
  oauthProviders: {
    GOOGLE: "GOOGLE",
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER"
  },
  pages: {
    "/": {
      page: "/",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD"
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS"
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS"
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES"
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS"
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS"
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY"
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS"
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      isAllowed: user => !!user
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY"
    },
    "/auth/return": {
      page: "/auth/return"
    },
    "/auth/error": {
      page: "/auth/error",
      title: "TITLE_OAUTH_ERROR"
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      isAllowed: user => !!user && _.includes(user.roles, roles.ADMIN)
    }
  },
  depts: {
    PRODUCTION: "PRODUCTION",
    RD: "RD",
    PURCHASING: "PURCHASING",
    MARKETING: "MARKETING",
    HR: "HR",
    ACCOUNTING: "ACCOUNTING"
  },
  messages: {
    HELLO: "HELLO",
    AUTH: "AUTH",
    TOAST: "TOAST"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED",
    AUTH_UPDATED: "AUTH_UPDATED",
    UPDATE_READY: "UPDATE_READY",
    TOAST: "TOAST"
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "RfHL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalUserId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__("MWqi");

var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["users", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalUserId = function getEditModalUserId(state) {
  return state.getIn(["users", "editModalUserId"]);
};

exports.getEditModalUserId = getEditModalUserId;

/***/ }),

/***/ "RmMv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("Kg9H"));

var selectors = _interopRequireWildcard(__webpack_require__("RfHL"));

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("Cyi7"));

var _CreateUser = _interopRequireDefault(__webpack_require__("DfuF"));

var _EditUser = _interopRequireDefault(__webpack_require__("IIe3"));

var _DeleteUser = _interopRequireDefault(__webpack_require__("9nAp"));

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  userId: selected[0]
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var create = function create(_ref2) {
  var name = _ref2.name,
      email = _ref2.email,
      password = _ref2.password,
      isAdmin = _ref2.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _CreateUser.default)(di, {
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context2.sent;

                if (!_.get(data, "data.createUser.user.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref4) {
  var id = _ref4.id,
      name = _ref4.name,
      email = _ref4.email,
      password = _ref4.password,
      isAdmin = _ref4.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _EditUser.default)(di, {
                  id: id,
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.editUser.user.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref6) {
  var id = _ref6.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _DeleteUser.default)(di, {
                  id: id
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", !!_.get(data, "data.deleteUser.user.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tu6X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("cwDw"));

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalEmployeeId: String, // null when creating a new employee
  isEditModalOpen: false,
})
*/
var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.employeeId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.employeeId)) return state.delete(action.employeeId);else return state.add(action.employeeId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.employeeIds)) return (0, _immutable.Set)(action.employeeIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptEmployeeIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptEmployeeIds, item)) set.delete(item);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }

  }

  return state;
};

var editModalEmployeeIdReducer = function editModalEmployeeIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.employeeId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  selected: selectedReducer,
  editModalEmployeeId: editModalEmployeeIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VOgL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthModalOpen = exports.isStaticSite = exports.isConnected = exports.isStopped = exports.isStarted = exports.getGoogleMapsKey = exports.getTheme = exports.getLocale = exports.getWsServer = exports.getApiServer = exports.getAppServer = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getAppServer = function getAppServer(state) {
  return state.getIn(["app", "appServer"]);
};

exports.getAppServer = getAppServer;

var getApiServer = function getApiServer(state) {
  return state.getIn(["app", "apiServer"]);
};

exports.getApiServer = getApiServer;

var getWsServer = function getWsServer(state) {
  return state.getIn(["app", "wsServer"]);
};

exports.getWsServer = getWsServer;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var getTheme = function getTheme(state) {
  return state.getIn(["app", "theme"]);
};

exports.getTheme = getTheme;

var getGoogleMapsKey = function getGoogleMapsKey(state) {
  return state.getIn(["app", "googleMapsKey"]);
};

exports.getGoogleMapsKey = getGoogleMapsKey;

var isStarted = function isStarted(state) {
  return state.getIn(["app", "isStarted"]);
};

exports.isStarted = isStarted;

var isStopped = function isStopped(state) {
  return state.getIn(["app", "isStopped"]);
};

exports.isStopped = isStopped;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

var isStaticSite = function isStaticSite(state) {
  return state.getIn(["app", "isStaticSite"]);
};

exports.isStaticSite = isStaticSite;

var isAuthModalOpen = function isAuthModalOpen(state) {
  return state.getIn(["app", "isAuthModalOpen"]);
};

exports.isAuthModalOpen = isAuthModalOpen;

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "XiiD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("MLhr"));

var appTypes = _interopRequireWildcard(__webpack_require__("seUC"));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__("P/y3"));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__("VOgL"));

exports.appSelectors = appSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "XpkF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _socket = _interopRequireDefault(__webpack_require__("pI2v"));

var _state = __webpack_require__("XiiD");

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _package = _interopRequireDefault(__webpack_require__("kiQV"));

var Socket =
/*#__PURE__*/
function () {
  function Socket(getState, dispatch, fetcher) {
    (0, _classCallCheck2.default)(this, Socket);
    this.getState = getState;
    this.dispatch = dispatch;
    this.fetcher = fetcher;

    if (false) {}
  }

  (0, _createClass2.default)(Socket, [{
    key: "emit",
    value: function emit(message, data, cb) {
      if ( true && !this.socket) return;
      if (false) {}
      this.socket.emit(message, data, cb && function (response) {
        try {
          return cb(response);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      if (true) return;

      var apiServer = _state.appSelectors.getWsServer(this.getState());

      this.socket = (0, _socket.default)(apiServer, {
        path: _constants.default.socketsBase
      });
      this.socket.on(_constants.default.messages.HELLO, this.onHello.bind(this));
      this.socket.on(_constants.default.messages.AUTH, this.onAuth.bind(this));
      this.socket.on(_constants.default.messages.TOAST, this.onToast.bind(this));
      this.socket.on("disconnect", this.onDisconnect.bind(this));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (true) return;
      this.socket.disconnect();
      this.socket = null;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.disconnect();
      this.connect();
    }
  }, {
    key: "onHello",
    value: function () {
      var _onHello = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(msg) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (false) {}

                if (msg.version !== _package.default.version) {
                  window.__updateReady = true;
                  window.dispatchEvent(new CustomEvent(_constants.default.events.UPDATE_READY));
                }

                _context.next = 5;
                return this.dispatch(_state.appOperations.setConnected({
                  isConnected: true
                }));

              case 5:
                _context.t0 = this;
                _context.t1 = _constants.default.messages.AUTH;
                _context.next = 9;
                return this.fetcher.getAccessToken();

              case 9:
                _context.t2 = _context.sent;
                _context.t3 = {
                  token: _context.t2
                };

                _context.t0.emit.call(_context.t0, _context.t1, _context.t3);

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t4 = _context["catch"](0);
                console.error(_context.t4);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function onHello(_x) {
        return _onHello.apply(this, arguments);
      }

      return onHello;
    }()
  }, {
    key: "onAuth",
    value: function () {
      var _onAuth = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(msg) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                if (false) {}
                _context2.next = 4;
                return this.fetcher.getRefreshToken();

              case 4:
                _context2.t0 = _context2.sent;

                if (!_context2.t0) {
                  _context2.next = 7;
                  break;
                }

                _context2.t0 = !msg.isValid;

              case 7:
                if (!_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                this.fetcher.refreshTokens().catch(console.error);

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t1 = _context2["catch"](0);
                console.error(_context2.t1);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function onAuth(_x2) {
        return _onAuth.apply(this, arguments);
      }

      return onAuth;
    }()
  }, {
    key: "onToast",
    value: function () {
      var _onToast = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(msg) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  if (false) {}
                  window.dispatchEvent(new CustomEvent(_constants.default.events.TOAST, {
                    detail: msg
                  }));
                } catch (error) {
                  console.error(error);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function onToast(_x3) {
        return _onToast.apply(this, arguments);
      }

      return onToast;
    }()
  }, {
    key: "onDisconnect",
    value: function () {
      var _onDisconnect = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (false) {}
                _context4.next = 4;
                return this.dispatch(_state.appOperations.setConnected({
                  isConnected: false
                }));

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      function onDisconnect() {
        return _onDisconnect.apply(this, arguments);
      }

      return onDisconnect;
    }()
  }], [{
    key: "$provides",
    get: function get() {
      return "socket";
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch", "fetcher"];
    }
  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);
  return Socket;
}();

var _default = Socket;
exports.default = _default;

/***/ }),

/***/ "Y/7s":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

var _atob;

/*globals atob, Buffer*/

// Modern browsers have atob and btoa defined
if (typeof atob == 'function') {
    _atob = atob;
} else
    // Node.js
    if (typeof Buffer == 'function') {
        _atob = function _atob(data) {
            return new Buffer(data, 'base64').toString('binary');
        };
    }
    // Out custom implementation (polyfill)
    else {
            var b64i;
            var wsReg = /[\t\n\r\x20\x0C]+/g;

            var chr = String.fromCharCode;
            // if ( typeof chr.bind == 'function' ) chr = chr.bind(String);

            // Decodes UTF8 or byte string
            _atob = function _atob(data) {
                if (!data) return data;
                data = String(data).replace(wsReg, '');

                var o1,
                    o2,
                    o3,
                    h1,
                    h2,
                    h3,
                    h4,
                    bits,
                    l = data.length,
                    i = 0,
                    ac = 0,
                    dec = '',
                    tmp_arr = [];
                if (b64i == undefined) {
                    b64i = {};
                    for (var j = 0, bl = b64.length; j < bl; j++) {
                        b64i[b64.charAt(j)] = j;
                    }
                }

                do {
                    // unpack four hexets into three octets using index points in b64
                    h1 = b64i[data.charAt(i++)];
                    h2 = b64i[data.charAt(i++)];
                    h3 = b64i[data.charAt(i++)];
                    h4 = b64i[data.charAt(i++)];

                    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                    o1 = bits >> 16 & 0xff;
                    o2 = bits >> 8 & 0xff;
                    o3 = bits & 0xff;

                    if (h3 == 64) {
                        tmp_arr[ac++] = chr(o1);
                    } else if (h4 == 64) {
                        tmp_arr[ac++] = chr(o1, o2);
                    } else {
                        tmp_arr[ac++] = chr(o1, o2, o3);
                    }
                } while (i < l);

                dec = tmp_arr.join('');

                return dec.replace(/\0+$/, '');
            };
        }

var _atob$1 = _atob;

var _btoa;

/*globals btoa, Buffer*/

// Modern browsers have atob and btoa defined
if (typeof btoa == 'function') {
    _btoa = btoa;
} else
    // Node.js
    if (typeof Buffer == 'function') {
        _btoa = function _btoa(data) {
            return new Buffer(data, 'binary').toString('base64');
        };
    }
    // Out custom implementation (polyfill)
    else {
            // Encodes UTF8 or byte string
            _btoa = function _btoa(data) {
                if (!data) return data;

                var o1,
                    o2,
                    o3,
                    h1,
                    h2,
                    h3,
                    h4,
                    bits,
                    i = 0,
                    ac = 0,
                    enc = '',
                    tmp_arr = [];
                do {
                    // pack three octets into four hexets
                    o1 = data.charCodeAt(i++);
                    o2 = data.charCodeAt(i++);
                    o3 = data.charCodeAt(i++);

                    bits = o1 << 16 | o2 << 8 | o3;

                    h1 = bits >> 18 & 0x3f;
                    h2 = bits >> 12 & 0x3f;
                    h3 = bits >> 6 & 0x3f;
                    h4 = bits & 0x3f;

                    // use hexets to index into b64, and append result to encoded string
                    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                } while (i < data.length);

                enc = tmp_arr.join('');

                var r = data.length % 3;

                return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
            };
        }

var _btoa$1 = _btoa;

/*globals unescape, escape*/

/// Encode multi-byte into UTF-8 string
var utf8Encode = function utf8Encode(str) {
  return unescape(encodeURI(str));
};

/// Decode UTF-8 string to multi-byte string
var utf8Decode = function utf8Decode(str) {
  return decodeURIComponent(escape(str));
};

/**
*  Base64 string encoding and decoding utility.
*
*  play @ https://duzun.me/playground/encode#base64Encode=Test%20String%20
*
*  original of _btoa and _atob by: Tyler Akins (http://rumkin.com)
*
*
*  @license MIT
*  @version 2.0.0
*  @umd AMD, Browser, CommonJs
*  @author Dumitru Uzun (DUzun.Me)
*/

var VERSION = '2.0.0';

// Decodes byte-string - 8bit per char - either btoa()'s return or byteUrlEncode()'s return
function byteDecode(data) {
    var ret = data;
    if (ret) {
        ret = _atob$1(String(ret).replace(/_/g, '/').replace(/-/g, '+'));
    }
    return ret;
}

// Encodes multi-byte string as utf8 (common in JS)
function mbEncode(data) {
    if (!data) return data;
    return _btoa$1(utf8Encode(data));
}

// Decodes to multi-byte string if utf8-encoded
function mbDecode(data, force_utf8) {
    var ret = byteDecode(data);
    if (ret) {
        if (force_utf8) {
            return utf8Decode(ret);
        } else {
            try {
                ret = utf8Decode(ret);
            } catch (err) {}
        }
    }
    return ret;
}

// Encode for URL
function byteUrlEncode(data) {
    var ret = _btoa$1(data);
    return ret && ret.replace(/\=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// Decode from byteUrlEncode()
function byteUrlDecode(data, force_utf8) {
    var ret = data;
    if (ret) {
        ret += '==='.substr(0, 3 - (ret.length + 3) % 4);
        ret = byteDecode(ret, force_utf8);
    }
    return ret;
}

// Encode as base64 a multi-byte string as utf8 for URL
function mbUrlEncode(data) {
    if (!data) return data;
    var ret = utf8Encode(data);
    return byteUrlEncode(ret);
}

// Decode base64 of utf8 encoded text to multi-byte string
function mbUrlDecode(data) {
    var ret = byteUrlDecode(data);
    return ret && utf8Decode(ret);
}

// Make sure atob and btoa exists in the environment
function polyfill(global) {
    if (!global) {
        global = typeof window == 'undefined' ? typeof global == 'undefined' ? typeof self == 'undefined' ? this : self : global : window;
    }
    if (global) {
        if (typeof atob == 'undefined') {
            global.atob = _atob$1;
        }
        if (typeof btoa == 'undefined') {
            global.btoa = _btoa$1;
        }
    }
}

function bindProto(__) {
    var __ex = typeof Object.defineProperty == 'function' ? function (name, func /*, proto*/) {
        Object.defineProperty( /*proto||*/__, name, {
            value: func,
            configurable: true,
            enumerable: false,
            writeable: true
        });
    } : function (name, func /*, proto*/) {
        // Take care with (for ... in) on strings!
        /*proto||*/__[name] = func;
    };

    __ex('base64ByteEncode', function () {
        return _btoa$1(this);
    });
    __ex('base64ByteDecode', function () {
        return byteDecode(this);
    });

    __ex('base64Encode', function () {
        return mbEncode(this);
    });
    __ex('base64Decode', function () {
        return mbDecode(this);
    });

    __ex('base64ByteUrlEncode', function () {
        return byteUrlEncode(this);
    });
    __ex('base64ByteUrlDecode', function () {
        return byteUrlDecode(this);
    });

    __ex('base64UrlEncode', function () {
        return mbUrlEncode(this);
    });
    __ex('base64UrlDecode', function () {
        return mbUrlDecode(this);
    });
}

// Add String.prototype methods:
bindProto(String.prototype);

exports.VERSION = VERSION;
exports.byteDecode = byteDecode;
exports.byteEncode = _btoa$1;
exports.mbEncode = mbEncode;
exports.mbDecode = mbDecode;
exports.byteUrlEncode = byteUrlEncode;
exports.byteUrlDecode = byteUrlDecode;
exports.mbUrlEncode = mbUrlEncode;
exports.mbUrlDecode = mbUrlDecode;
exports.encode = mbEncode;
exports.decode = mbDecode;
exports.urlEncode = mbUrlEncode;
exports.urlDecode = mbUrlDecode;
exports.mb2utf8 = utf8Encode;
exports.utf82mb = utf8Decode;
exports._atob = _atob$1;
exports._btoa = _btoa$1;
exports.polyfill = polyfill;
exports.bindProto = bindProto;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=base64.js.map


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z15E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3d9f71fe4d39d43be5cef0cc42d540c0
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {|
  clientMutationId?: ?string
|};
export type SignOutMutationVariables = {|
  input: SignOutInput
|};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +success: ?boolean
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/

/*
mutation SignOutMutation(
  $input: SignOutInput!
) {
  signOut(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignOutInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signOut",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "SignOutPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignOutMutation",
      "id": null,
      "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZUHO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("JMiR");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aIJF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _locales = _interopRequireDefault(__webpack_require__("MSzE"));

_.forEach(_locales.default.getLocaleData(), function (data) {
  return (0, _reactIntl.addLocaleData)(data);
});

var IntlProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(IntlProvider, _React$Component);

  function IntlProvider() {
    (0, _classCallCheck2.default)(this, IntlProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IntlProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(IntlProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          created = _this$props.created,
          children = _this$props.children;
      return _react.default.createElement(_reactIntl.IntlProvider, {
        key: locale,
        locale: locale,
        messages: _locales.default.messages[locale],
        initialNow: created
      }, children);
    }
  }]);
  return IntlProvider;
}(_react.default.Component);

var _default = IntlProvider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "chYl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 45d34ce684066df95331f1e5da5be638
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {|
  email?: ?string,
  password?: ?string,
  locale?: ?string,
  clientMutationId?: ?string,
|};
export type SignUpMutationVariables = {|
  input: SignUpInput
|};
export type SignUpMutationResponse = {|
  +signUp: ?{|
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/

/*
mutation SignUpMutation(
  $input: SignUpInput!
) {
  signUp(input: $input) {
    success
    accessToken
    refreshToken
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignUpInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signUp",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "SignUpPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SignUpMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignUpMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignUpMutation",
      "id": null,
      "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '7196bfb966526dde69288ffdd3b223aa';
module.exports = node;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "cwDw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = void 0;
var SET_SELECTED = "app/employees/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/employees/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/employees/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/employees/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/employees/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dHHO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    (0, _classCallCheck2.default)(this, Cookie);
  }

  (0, _createClass2.default)(Cookie, [{
    key: "get",
    value: function get(name) {
      if (true) return;
      var v = document.cookie.match("(^|;) ?" + encodeURIComponent(name) + "=([^;]*)(;|$)");
      return v ? decodeURIComponent(v[2]) : null;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      if (true) return;
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      if (true) return;
      this.set(encodeURIComponent(name), "", -1);
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "cookie";
    }
  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);
  return Cookie;
}();

var _default = Cookie;
exports.default = _default;

/***/ }),

/***/ "du97":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _subscriptionsTransportWs = __webpack_require__("AlFE");

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _state = __webpack_require__("XiiD");

var Fetcher =
/*#__PURE__*/
function () {
  function Fetcher(di, getState, dispatch, storage) {
    var _this = this;

    (0, _classCallCheck2.default)(this, Fetcher);
    this.di = di;
    this.getState = getState;
    this.dispatch = dispatch;
    this.storage = storage;

    if (false) {}
  }

  (0, _createClass2.default)(Fetcher, [{
    key: "setReqRes",
    value: function setReqRes(req, res) {
      this.req = req;
      this.res = res;
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (this.req ? this.req.session.accessToken : this.storage.get("accessToken")) || null);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "getRefreshToken",
    value: function () {
      var _getRefreshToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (this.req ? this.req.session.refreshToken : this.storage.get("refreshToken")) || null);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRefreshToken() {
        return _getRefreshToken.apply(this, arguments);
      }

      return getRefreshToken;
    }()
  }, {
    key: "setTokens",
    value: function () {
      var _setTokens = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(accessToken, refreshToken) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.req) {
                  _context3.next = 4;
                  break;
                }

                this.req.setTokens(accessToken, refreshToken);
                _context3.next = 16;
                break;

              case 4:
                this.storage.set("accessToken", accessToken);
                this.storage.set("refreshToken", refreshToken);

                if (_state.appSelectors.isStaticSite(this.getState())) {
                  _context3.next = 15;
                  break;
                }

                _context3.prev = 7;
                _context3.next = 10;
                return this.fetch({
                  method: "POST",
                  resource: _state.appSelectors.getAppServer(this.getState()) + "/session",
                  data: {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                  }
                });

              case 10:
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](7);
                console.error(_context3.t0.message);

              case 15:
                window.dispatchEvent(new CustomEvent(_constants.default.events.AUTH_UPDATED));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 12]]);
      }));

      function setTokens(_x2, _x3) {
        return _setTokens.apply(this, arguments);
      }

      return setTokens;
    }()
  }, {
    key: "refreshTokens",
    value: function () {
      var _refreshTokens = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.refreshingPromise) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", this.refreshingPromise);

              case 2:
                this.refreshingPromise = new _promise.default(
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee4(resolve) {
                    var done, refreshToken, resource, params, response, data, result, accessToken, _refreshToken;

                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            done = function done(accessToken, refreshToken) {
                              setTimeout(function () {
                                return _this2.setTokens(accessToken, refreshToken).catch(console.error);
                              });
                              _this2.refreshingPromise = null;
                              resolve();
                            };

                          case 1:
                            _context4.prev = 1;
                            _context4.next = 4;
                            return _this2.getRefreshToken();

                          case 4:
                            refreshToken = _context4.sent;

                            if (refreshToken) {
                              _context4.next = 7;
                              break;
                            }

                            return _context4.abrupt("return", done(null, null));

                          case 7:
                            resource = _state.appSelectors.getApiServer(_this2.getState()) + _constants.default.graphqlBase;
                            params = {
                              method: "POST",
                              resource: resource,
                              data: {
                                query: "mutation GetTokenMutation( $input: GetTokenInput! ) {\n                getToken(input: $input) {\n                  success\n                  token\n                  refreshToken\n                }\n              }",
                                variables: {
                                  input: {
                                    type: "access",
                                    token: refreshToken
                                  }
                                }
                              }
                            };
                            _context4.next = 11;
                            return _this2.fetch(params);

                          case 11:
                            response = _context4.sent;

                            if (!(response.status !== 200)) {
                              _context4.next = 14;
                              break;
                            }

                            throw new Error("GraphQL: GetToken Response ".concat(response.status));

                          case 14:
                            _context4.next = 16;
                            return response.json();

                          case 16:
                            data = _context4.sent;
                            result = _.get(data, "data.getToken.success", null);

                            if (!(result === true)) {
                              _context4.next = 26;
                              break;
                            }

                            accessToken = _.get(data, "data.getToken.token", null);
                            _refreshToken = _.get(data, "data.getToken.refreshToken", null);

                            if (!(!accessToken || !_refreshToken)) {
                              _context4.next = 23;
                              break;
                            }

                            return _context4.abrupt("return", done(null, null));

                          case 23:
                            return _context4.abrupt("return", done(accessToken, _refreshToken));

                          case 26:
                            if (!(result === false)) {
                              _context4.next = 28;
                              break;
                            }

                            return _context4.abrupt("return", done(null, null));

                          case 28:
                            _context4.next = 33;
                            break;

                          case 30:
                            _context4.prev = 30;
                            _context4.t0 = _context4["catch"](1);
                            console.error(_context4.t0);

                          case 33:
                            if (false) {}

                            return _context4.abrupt("return", done(null, null));

                          case 35:
                            _context4.next = 37;
                            return new _promise.default(function (resolve) {
                              return setTimeout(resolve, 1000);
                            });

                          case 37:
                            _context4.next = 1;
                            break;

                          case 39:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[1, 30]]);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }());
                return _context5.abrupt("return", this.refreshingPromise);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function refreshTokens() {
        return _refreshTokens.apply(this, arguments);
      }

      return refreshTokens;
    }()
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(_ref2) {
        var method, resource, data, token, headers;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                method = _ref2.method, resource = _ref2.resource, data = _ref2.data, token = _ref2.token;

                if (_.startsWith(resource, "http")) {
                  _context6.next = 7;
                  break;
                }

                if (!process.env.APP_API_SERVER) {
                  _context6.next = 6;
                  break;
                }

                resource = process.env.APP_API_SERVER + resource;
                _context6.next = 7;
                break;

              case 6:
                throw new Error("Invalid resource: ".concat(resource));

              case 7:
                headers = {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                };
                if (token) headers["Authorization"] = "Bearer ".concat(token);
                return _context6.abrupt("return", fetch(resource, {
                  method: method || "GET",
                  credentials: "include",
                  headers: headers,
                  body: data && (0, _stringify.default)(data)
                }));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }())
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(operation, variables
      /*, cacheConfig, uploadables */
      ) {
        var resource, token, params, response, result, isUnauthorized, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                resource = _state.appSelectors.getApiServer(this.getState()) + _constants.default.graphqlBase;
                _context7.next = 4;
                return this.getAccessToken();

              case 4:
                token = _context7.sent;
                params = {
                  method: "POST",
                  resource: resource,
                  data: {
                    query: operation.text,
                    // GraphQL text from input
                    variables: variables
                  }
                };
                if (token) params.token = token;
                _context7.next = 9;
                return this.fetch(params);

              case 9:
                response = _context7.sent;

                if (!(response.status !== 200)) {
                  _context7.next = 12;
                  break;
                }

                throw new Error("GraphQL: Response ".concat(response.status));

              case 12:
                _context7.next = 14;
                return response.json();

              case 14:
                result = _context7.sent;
                isUnauthorized = false;
                _context7.next = 18;
                return this.getRefreshToken();

              case 18:
                _context7.t0 = _context7.sent;

                if (!_context7.t0) {
                  _context7.next = 21;
                  break;
                }

                _context7.t0 = result.errors;

              case 21:
                if (!_context7.t0) {
                  _context7.next = 49;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context7.prev = 25;
                _iterator = (0, _getIterator2.default)(result.errors);

              case 27:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context7.next = 35;
                  break;
                }

                error = _step.value;

                if (!(error.code === "E_UNAUTHORIZED")) {
                  _context7.next = 32;
                  break;
                }

                isUnauthorized = true;
                return _context7.abrupt("break", 35);

              case 32:
                _iteratorNormalCompletion = true;
                _context7.next = 27;
                break;

              case 35:
                _context7.next = 41;
                break;

              case 37:
                _context7.prev = 37;
                _context7.t1 = _context7["catch"](25);
                _didIteratorError = true;
                _iteratorError = _context7.t1;

              case 41:
                _context7.prev = 41;
                _context7.prev = 42;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 44:
                _context7.prev = 44;

                if (!_didIteratorError) {
                  _context7.next = 47;
                  break;
                }

                throw _iteratorError;

              case 47:
                return _context7.finish(44);

              case 48:
                return _context7.finish(41);

              case 49:
                if (!isUnauthorized) {
                  _context7.next = 54;
                  break;
                }

                _context7.next = 52;
                return this.refreshTokens();

              case 52:
                _context7.next = 55;
                break;

              case 54:
                return _context7.abrupt("return", result);

              case 55:
                _context7.next = 66;
                break;

              case 57:
                _context7.prev = 57;
                _context7.t2 = _context7["catch"](0);
                console.error(_context7.t2.message);

                if (false) {}

                return _context7.abrupt("return", {
                  errors: [{
                    message: _context7.t2.message
                  }]
                });

              case 64:
                _context7.next = 66;
                return new _promise.default(function (resolve) {
                  return setTimeout(resolve, 1000);
                });

              case 66:
                _context7.next = 0;
                break;

              case 68:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 57], [25, 37, 41, 49], [42,, 44, 48]]);
      }));

      function query(_x6, _x7) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(config, variables, cacheConfig, observer) {
      var _this3 = this;

      if (true) return {
        dispose: _.noop
      };
      var isDestroyed = false;
      var isReconnecting = false;
      var client, observable;
      var connect, disconnect, reconnect, dispose, authUpdated;

      connect =
      /*#__PURE__*/
      function () {
        var _ref4 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee11() {
          return _regenerator.default.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!isDestroyed) {
                    _context11.next = 2;
                    break;
                  }

                  return _context11.abrupt("return");

                case 2:
                  _context11.t0 = _subscriptionsTransportWs.SubscriptionClient;
                  _context11.t1 = _state.appSelectors.getWsServer(_this3.getState()) + _constants.default.graphqlBase;
                  _context11.next = 6;
                  return _this3.getAccessToken();

                case 6:
                  _context11.t2 = _context11.sent;
                  _context11.t3 = {
                    token: _context11.t2
                  };
                  _context11.t4 = {
                    reconnect: false,
                    connectionParams: _context11.t3
                  };
                  client = new _context11.t0(_context11.t1, _context11.t4);

                  client.maxConnectTimeGenerator.duration = function () {
                    return client.maxConnectTimeGenerator.max;
                  };

                  client.onConnected(
                  /*#__PURE__*/
                  (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee8() {
                    return _regenerator.default.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!isDestroyed) {
                              _context8.next = 2;
                              break;
                            }

                            return _context8.abrupt("return", disconnect());

                          case 2:
                            if (false) {}
                            observable = client.request({
                              query: config.text,
                              variables: variables
                            }).subscribe({
                              next: observer.onNext,
                              complete: observer.onCompleted,
                              error: observer.onError
                            });

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  })));
                  client.onDisconnected(
                  /*#__PURE__*/
                  (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee9() {
                    return _regenerator.default.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            observable = null;
                            if (false) {}
                            reconnect(true);

                          case 3:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  })));
                  client.onError(
                  /*#__PURE__*/
                  function () {
                    var _ref7 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee10(error) {
                      return _regenerator.default.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              observable = null;
                              if (false) {}
                              reconnect(true);

                            case 3:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    return function (_x8) {
                      return _ref7.apply(this, arguments);
                    };
                  }());

                case 14:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function connect() {
          return _ref4.apply(this, arguments);
        };
      }();

      disconnect =
      /*#__PURE__*/
      function () {
        var _ref8 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee12() {
          return _regenerator.default.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (client) {
                    client.close();
                    client = null;
                  }

                case 1:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function disconnect() {
          return _ref8.apply(this, arguments);
        };
      }();

      reconnect =
      /*#__PURE__*/
      function () {
        var _ref9 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee14(doRefreshTokens) {
          return _regenerator.default.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  if (!(isDestroyed || isReconnecting)) {
                    _context14.next = 2;
                    break;
                  }

                  return _context14.abrupt("return");

                case 2:
                  isReconnecting = true;
                  _context14.next = 5;
                  return disconnect();

                case 5:
                  _context14.t0 = doRefreshTokens;

                  if (!_context14.t0) {
                    _context14.next = 10;
                    break;
                  }

                  _context14.next = 9;
                  return _this3.getRefreshToken();

                case 9:
                  _context14.t0 = _context14.sent;

                case 10:
                  if (!_context14.t0) {
                    _context14.next = 13;
                    break;
                  }

                  _context14.next = 13;
                  return _this3.refreshTokens();

                case 13:
                  setTimeout(
                  /*#__PURE__*/
                  (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee13() {
                    return _regenerator.default.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            isReconnecting = false;

                            if (isDestroyed) {
                              _context13.next = 4;
                              break;
                            }

                            _context13.next = 4;
                            return connect();

                          case 4:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  })), 1000);

                case 14:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function reconnect(_x9) {
          return _ref9.apply(this, arguments);
        };
      }();

      authUpdated =
      /*#__PURE__*/
      function () {
        var _ref11 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee15() {
          return _regenerator.default.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  reconnect(false);

                case 1:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function authUpdated() {
          return _ref11.apply(this, arguments);
        };
      }();

      window.addEventListener(_constants.default.events.AUTH_UPDATED, authUpdated);

      dispose =
      /*#__PURE__*/
      function () {
        var _ref12 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee16() {
          return _regenerator.default.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  if (!isDestroyed) {
                    _context16.next = 2;
                    break;
                  }

                  return _context16.abrupt("return");

                case 2:
                  isDestroyed = true;
                  window.removeEventListener(_constants.default.events.AUTH_UPDATED, authUpdated);

                  if (observable) {
                    // graceful shutdown
                    observable.unsubscribe();
                    observable = null;
                  }

                  _context16.next = 7;
                  return disconnect();

                case 7:
                  if (false) {}

                case 8:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function dispose() {
          return _ref12.apply(this, arguments);
        };
      }();

      if (this.isAuthUpdated) connect().catch(console.error);
      return {
        dispose: dispose
      };
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "fetcher";
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["di", "getState", "dispatch", "storage"];
    }
  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);
  return Fetcher;
}();

var _default = Fetcher;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "dxCc":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","TITLE_PROFILE":"Profile","TITLE_VERIFY":"Email verification","TITLE_OAUTH_ERROR":"Authentication error","THEME_DARK_MENU":"Dark","THEME_DARK_LABEL":"Dark Theme","THEME_LIGHT_MENU":"Light","THEME_LIGHT_LABEL":"Light Theme","LAYOUT_UPDATE_READY_MESSAGE":"An update is available. Click here to reload the page.","LAYOUT_NOT_CONNECTED_MESSAGE":"Connecting...","SIDEBAR_LOGIN_BUTTON":"Sign Up / Login","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Benchmarks","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","HEADER_PROFILE_TOOLTIP":"As an anoymous user you don't have a profile.","PROFILE_NAME_LABEL":"Display name","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"New password","PROFILE_PASSWORD2_LABEL":"Retype password","PROFILE_SAVE_BUTTON":"Save","PROFILE_DESTROY_BUTTON":"Self-destruct","PROFILE_VERIFY_BUTTON":"Verify Email","PROFILE_LINK_BUTTON":"Link","PROFILE_UNLINK_BUTTON":"Unlink","PROFILE_SAVE_SUCCESS":"Profile has been updated","PROFILE_VERIFY_SUCCESS":"Please check your mailbox for the verification email","PROFILE_LINK_SUCCESS":"Linking the service provider...","PROFILE_UNLINK_SUCCESS":"The service is no longer linked to your account","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Verify your email","VERIFY_EMAIL_TEXT":"Use the link below to verify your email address:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Use the link below to verify your email address:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Please use the button below to verify your email address","VERIFY_FAILED_MESSAGE":"This link is no longer valid","VERIFY_ACTION_BUTTON":"Verify Email","DELETE_PROFILE_TITLE":"Delete profile","DELETE_PROFILE_TEXT":"Are you sure you want to delete your profile?","DELETE_PROFILE_CANCEL":"Cancel","DELETE_PROFILE_SUBMIT":"Delete","OAUTH_ERROR_GENERIC":"An error occured","OAUTH_ERROR_ACCOUNT_EXISTS":"An account associated with your email address already exists","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Why am I seeing this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["It looks like you might have already signed up using another service.\n","To protect your account, if you have perviously signed up using another service you must"," link accounts before you can use a different service to sign in."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"How do I fix this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["To sign in using another service, first sign in using your email address or the previous"," service then link accounts in your profile page."],"DASHBOARD_PROFIT_LABEL":"Profit","DASHBOARD_SALES_LABEL":"Sales","DASHBOARD_CLIENTS_LABEL":"Clients","DASHBOARD_AVG_TIME_LABEL":"Avg Time","DASHBOARD_WORLD_LABEL":"World","DASHBOARD_CLICK_MAP_LABEL":"Click to select","DASHBOARD_NOT_REALLY_LABEL":"(not really)","DEPT_PRODUCTION":"Production","DEPT_RD":"R&D","DEPT_PURCHASING":"Purchasing","DEPT_MARKETING":"Marketing","DEPT_HR":"HR","DEPT_ACCOUNTING":"Accounting","EMPLOYEES_MESSAGE_TITLE":"It's alive!","EMPLOYEES_MESSAGE_CONTENT":["This table is powered by GraphQL API and uses React Relay Modern. Try changing a value in another browser or tab and"," you will see it updated in all the browsers connected to this page thanks to GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Name","EMPLOYEES_DEPT_COLUMN":"Department","EMPLOYEES_TITLE_COLUMN":"Title","EMPLOYEES_COUNTRY_COLUMN":"Country","EMPLOYEES_SALARY_COLUMN":"Salary","EMPLOYEES_CREATE_BUTTON":"Create Employee","EMPLOYEES_EDIT_BUTTON":"Edit Employee","EMPLOYEES_DELETE_BUTTON":"Delete Employees","EDIT_EMPLOYEE_TITLE_CREATE":"Create employee","EDIT_EMPLOYEE_TITLE_EDIT":"Edit employee","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Digits only","EDIT_EMPLOYEE_CHECKED_LABEL":"Enabled","EDIT_EMPLOYEE_NAME_LABEL":"Name","EDIT_EMPLOYEE_DEPT_LABEL":"Department","EDIT_EMPLOYEE_TITLE_LABEL":"Title","EDIT_EMPLOYEE_COUNTRY_LABEL":"Country","EDIT_EMPLOYEE_SALARY_LABEL":"Salary","EDIT_EMPLOYEE_CANCEL":"Cancel","EDIT_EMPLOYEE_SUBMIT":"Submit","DELETE_EMPLOYEE_TITLE":"Delete employees","DELETE_EMPLOYEE_TEXT":"Delete selected employees?","DELETE_EMPLOYEE_CANCEL":"Cancel","DELETE_EMPLOYEE_SUBMIT":"Delete","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Verified","USERS_NAME_COLUMN":"Name","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully functional, the fields normalize and validate the input using this form's"," declaration file. And the server can use the very same declaration file to revalidate the form upon submitting."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","NOTIFICATIONS_LABEL":"Notifications","NOTIFICATIONS_TITLE":"Styled Popup!","ICONS_FILTER_LABEL":"Filter","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_GO_HOME_LINK":"Go the start page","ERROR_TRY_AUTH_LINK":"Sign in and retry","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_VALUES":"The two values you entered do not match"};

/***/ }),

/***/ "dz41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = void 0;
var SET_SELECTED = "app/users/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/users/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/users/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "f5YN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("chYl");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "f5b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalEmployeeId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__("MWqi");

var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["employees", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["employees", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalEmployeeId = function getEditModalEmployeeId(state) {
  return state.getIn(["employees", "editModalEmployeeId"]);
};

exports.getEditModalEmployeeId = getEditModalEmployeeId;

/***/ }),

/***/ "f7fu":
/***/ (function(module, exports) {

module.exports = require("@date-io/moment");

/***/ }),

/***/ "fXmL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f4b32eaa7eadc44edc44da4b517c746d
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type SignInMutationVariables = {|
  input: SignInInput
|};
export type SignInMutationResponse = {|
  +signIn: ?{|
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/

/*
mutation SignInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    success
    accessToken
    refreshToken
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signIn",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "SignInPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignInMutation",
      "id": null,
      "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'eb8bf52c0ccf7e65f3586bd8d368f9c6';
module.exports = node;

/***/ }),

/***/ "flba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("Z15E");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g1gh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("QwMX"));

var usersTypes = _interopRequireWildcard(__webpack_require__("dz41"));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__("RmMv"));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__("RfHL"));

exports.usersSelectors = usersSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash e17bc909ac53c3d9020aa449f26fd11f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEmployeeInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEmployeeMutationVariables = {|
  input: DeleteEmployeeInput
|};
export type DeleteEmployeeMutationResponse = {|
  +deleteEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type DeleteEmployeeMutation = {|
  variables: DeleteEmployeeMutationVariables,
  response: DeleteEmployeeMutationResponse,
|};
*/

/*
mutation DeleteEmployeeMutation(
  $input: DeleteEmployeeInput!
) {
  deleteEmployee(input: $input) {
    employee {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "DeleteEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteEmployeeMutation",
      "id": null,
      "text": "mutation DeleteEmployeeMutation(\n  $input: DeleteEmployeeInput!\n) {\n  deleteEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e6744264438a7d81d3212a35a47c6ca0';
module.exports = node;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "hxBR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _pickers = __webpack_require__("KNS6");

var _moment = _interopRequireDefault(__webpack_require__("f7fu"));

var _moment2 = _interopRequireDefault(__webpack_require__("s/BC"));

var DateProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DateProvider, _React$Component);

  function DateProvider() {
    (0, _classCallCheck2.default)(this, DateProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DateProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(DateProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
        utils: _moment.default,
        locale: locale,
        moment: _moment2.default
      }, children);
    }
  }]);
  return DateProvider;
}(_react.default.Component);

var _default = DateProvider;
exports.default = _default;

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "jchj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("XiiD");

var _Intl = _interopRequireDefault(__webpack_require__("aIJF"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state),
    created: _state.appSelectors.getCreated(state)
  };
};

var IntlProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Intl.default);
var _default = IntlProvider;
exports.default = _default;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kWTZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideAuthModal = exports.showAuthModal = exports.setConnected = exports.setTheme = exports.setLocale = exports.setStatusCode = exports.stop = exports.start = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("s/BC"));

var types = _interopRequireWildcard(__webpack_require__("seUC"));

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

var start = function start() {
  return {
    type: types.START
  };
};

exports.start = start;

var stop = function stop() {
  return {
    type: types.STOP
  };
};

exports.stop = stop;

var setStatusCode = function setStatusCode(_ref) {
  var code = _ref.code;
  return {
    type: types.SET_STATUS_CODE,
    code: code
  };
};

exports.setStatusCode = setStatusCode;

var setLocale = function setLocale(_ref2) {
  var locale = _ref2.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;

var setTheme = function setTheme(_ref3) {
  var theme = _ref3.theme;
  return {
    type: types.SET_THEME,
    theme: theme
  };
};

exports.setTheme = setTheme;

var setConnected = function setConnected(_ref4) {
  var isConnected = _ref4.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var showAuthModal = function showAuthModal() {
  return {
    type: types.SHOW_AUTH_MODAL
  };
};

exports.showAuthModal = showAuthModal;

var hideAuthModal = function hideAuthModal() {
  return {
    type: types.HIDE_AUTH_MODAL
  };
};

exports.hideAuthModal = hideAuthModal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = {"name":"next-dashboard-web","version":"0.3.0","private":true,"dependencies":{"@babel/polyfill":"~7.4.4","@date-io/moment":"~1.3.6","@material-ui/core":"~4.0.2","@material-ui/icons":"~4.0.1","@material-ui/pickers":"~3.1.0","@material-ui/styles":"~4.0.2","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","body-parser":"~1.19.0","classnames":"~2.2.6","compression":"~1.7.4","connect-redis":"~3.4.1","cookie-parser":"~1.4.4","cors":"~2.8.5","country-iso-3-to-2":"~1.0.1","dotenv":"~8.0.0","express":"~4.17.1","express-session":"~1.16.1","formik":"~1.5.7","fs-extra":"~8.0.1","graphql-relay":"~0.6.0","http-status-codes":"~1.3.2","immutable":"~4.0.0-rc.12","injectt":"~1.0.0","intl":"~1.2.5","intl-locales-supported":"~1.0.10","ioredis":"~4.9.5","isomorphic-unfetch":"~3.0.0","lodash":"~4.17.11","memoize-one":"~5.0.4","moment":"~2.24.0","moment-timezone":"~0.5.25","morgan":"~1.9.1","next":"~8.1.0","next-compose-plugins":"~2.2.0","null-loader":"~3.0.0","raf":"~3.4.1","react":"~16.8.6","react-credit-cards":"~0.7.0","react-dom":"~16.8.6","react-flags":"~0.1.17","react-google-maps":"~9.4.5","react-intl":"~2.9.0","react-redux":"~7.0.3","react-relay":"~4.0.0","react-simple-maps":"~0.12.1","react-swipeable-views":"~0.13.3","react-toastify":"~5.2.1","react-virtualized":"~9.21.1","redux":"~4.0.1","redux-devtools-extension":"~2.13.8","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","relay-compiler":"~4.0.0","relay-compiler-webpack-plugin":"~4.0.1","relay-query-lookup-renderer":"~4.0.0","relay-runtime":"~4.0.0","reselect":"~4.0.0","socket.io":"~2.2.0","subscriptions-transport-ws":"~0.9.16","svg-inline-loader":"~0.8.0","terser-webpack-plugin":"~1.3.0","victory":"~32.2.3","webpack":"~4.33.0","workbox-webpack-plugin":"~4.3.1"},"devDependencies":{"@babel/core":"~7.4.5","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~24.8.0","babel-plugin-lodash":"~3.3.4","babel-plugin-relay":"~4.0.0","enzyme":"~3.10.0","enzyme-adapter-react-16":"~1.14.0","eslint":"~5.16.0","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.13.0","jest":"~24.8.0","jsdom":"~15.1.1","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.6.0","postcss-url":"~8.0.0","prop-types":"~15.7.2","supertest":"~4.0.2","webfontloader":"~1.6.28"},"resolutions":{"graphql":"~14.3.1","**/graphql":"~14.3.1"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --verbose","relay":"relay-compiler --src ./src --schema ../common/schema.graphql --verbose","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export && node ./bin/finish-export","dev":"node ./bin/prepare-build && env NODE_ENV=development DEBUG='app:*' node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),

/***/ "kri5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Readable = __webpack_require__("msIP").Readable;
const isReadableStream = __webpack_require__("zh76").isReadableStream;

class RecursiveIterable {
    constructor(obj, replacer, space, visited, stack) {
        // Save a copy of the root object so we can be memory effective
        if (obj && typeof obj.toJSON === 'function') {
            obj = obj.toJSON();
        }
        this.exclude = [Promise, {
            __shouldExclude: isReadableStream
        }];
        this._stack = stack || [];
        this.visited = visited || new WeakMap();
        if (this._shouldIterate(obj)) {
            this.isVisited = this.visited.has(obj);
            if (!this.isVisited) {
                // Save only unvisited stack to weakmap
                this.visited.set(obj, this._stack.slice(0));
            }
        }
        this.obj = this._shouldIterate(obj) && !this.isVisited ? (Array.isArray(obj) ? obj.slice(0) : Object.assign({}, obj)) : obj;
        this.replacerIsArray = Array.isArray(replacer);
        this.replacer = replacer instanceof Function || this.replacerIsArray ? replacer : undefined;
        this.space = space;
    }

    _shouldIterate(val) {
        return val && typeof val === 'object' && !(this.exclude.some(v => v.__shouldExclude instanceof Function ? v.__shouldExclude(val) : val instanceof v));
    }

    static _getType(obj) {
        return Array.isArray(obj) ? Array : obj instanceof Object ? Object : undefined
    }

    [Symbol.iterator]() {
        let isObject = this._shouldIterate(this.obj);
        let ctxType = RecursiveIterable._getType(this.obj);
        let nextIndex = 0;
        let keys = isObject && (Array.isArray(this.obj) ? Array.from(Array(this.obj.length).keys()) : Object.keys(this.obj));
        let childIterator;
        let closed = !isObject;
        let opened = closed;

        const attachIterator = (iterator, addToStack) => {
            childIterator = iterator;
            childIterator._stack = this._stack.concat(addToStack || []);
        };

        const ctx = {
            depth: 0,
            type: ctxType,
            next: () => {
                let child = childIterator && childIterator.next();
                if (child) {
                    if (!child.done) {
                        return child;
                    }
                    childIterator = undefined;
                }

                let state;
                let key;
                let val;
                let type;

                if (!opened) {
                    if (this.isVisited) {
                        state = 'circular';
                        val = this.visited.get(this.obj);
                        opened = closed = true;
                        keys.length = 0;
                    } else {
                        state = 'open';
                        type = ctxType;
                        opened = true;
                    }
                } else if (!closed && !keys.length) {
                    state = 'close';
                    type = ctxType;
                    closed = true;
                } else if (keys && keys.length) {
                    state = 'value';
                    key = keys.shift();
                    val = this.obj[key];

                    if (this.replacerIsArray && this.replacer.indexOf(key) === -1) {
                        return ctx.next();
                    }
                } else if (!isObject && !ctx.done) {
                    state = 'value';
                    val = this.obj;
                    ctx.done = true;
                }

                if (state === 'value') {
                    if (this.replacer && !this.replacerIsArray) {
                        val = this.replacer(key, val);
                    }

                    if (val && typeof val.toJSON === 'function') {
                        val = val.toJSON();
                    }

                    if (typeof val === 'function') {
                        val = undefined;
                    }

                    if (val === undefined) {
                        if (key) {
                            // Dereference iterated object
                            this.obj[key] = undefined;
                        }

                        if ((this._parentCtxType ? this._parentCtxType !== Array : true) && ctx.type !== Array) {
                            return ctx.next();
                        }

                        val = null;
                    }

                    if (this._shouldIterate(val)) {
                        if (this.visited.has(val)) {
                            state = 'circular';
                            val = this.visited.get(val);
                        } else {
                            state = 'child';
                            childIterator = new RecursiveIterable(val, this.replacer, this.space, this.visited, this._stack.concat(key))[Symbol.iterator]();
                            childIterator.ctxType = ctx.type;
                            childIterator.depth = ctx.depth + 1;
                            childIterator.type = RecursiveIterable._getType(val);
                        }
                    }

                    if (key) {
                        // Dereference iterated object
                        this.obj[key] = undefined;
                    }
                }

                return {
                    value: {
                        depth: ctx.depth,
                        key: key,
                        value: val,
                        state: state,
                        stack: this._stack.slice(0),
                        type: type,
                        ctxType: ctx.type,
                        attachChild: attachIterator
                    },
                    done: !state
                };
            }
        };

        return ctx;
    }
}

module.exports = RecursiveIterable;


/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mERI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const pako = __webpack_require__("pLMf");
const utf8 = __webpack_require__("okBe");
const { byteDecode } = __webpack_require__("Y/7s");
const { deserialize } = __webpack_require__("wu3R");

/**
 * Deserialize BASE64 string into Immutable state
 */
module.exports = function(input, type) {
  if (!input) return undefined;

  let str = pako.inflate(byteDecode(input), { to: "string" });
  let obj = JSON.parse(str, (key, value) =>
    _.isString(value) ? utf8.decode(value) : value
  );
  let state;
  if (type === "redux") state = deserialize(obj);
  else state = obj;

  return state;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "msIP":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "n0DR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("Jr3Z");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "ngY8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var immutable = __webpack_require__("nuGg");

function deserialize(json) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return JSON.parse(json, function (key, value) {
    return revive(key, value, options);
  });
}

function revive(key, value, options) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value) {
    if (value['__record']) {
      return reviveRecord(key, value, options);
    } else if (value['__iterable']) {
      return reviveIterable(key, value, options);
    } else if (value['__date']) {
      return new Date(value['__date']);
    } else if (value['__regexp']) {
      var regExpParts = value['__regexp'].split('/');
      return new RegExp(regExpParts[1], regExpParts[2]);
    }
  }
  return value;
}

function reviveRecord(key, recInfo, options) {
  var RecordType = options.recordTypes[recInfo['__record']];
  if (!RecordType) {
    throw new Error('Unknown record type: ' + recInfo['__record']);
  }

  var revivedData = revive(key, recInfo['data'], options);
  if (typeof RecordType.migrate === 'function') {
    revivedData = RecordType.migrate(revivedData);
  }

  return new RecordType(revivedData);
}

function reviveIterable(key, iterInfo, options) {
  switch (iterInfo['__iterable']) {
    case 'List':
      return immutable.List(revive(key, iterInfo['data'], options));

    case 'Set':
      return immutable.Set(revive(key, iterInfo['data'], options));

    case 'OrderedSet':
      return immutable.OrderedSet(revive(key, iterInfo['data'], options));

    case 'Stack':
      return immutable.Stack(revive(key, iterInfo['data'], options));

    case 'Map':
      return immutable.Map(revive(key, iterInfo['data'], options));

    case 'OrderedMap':
      return immutable.OrderedMap(revive(key, iterInfo['data'], options));

    default:
      throw new Error('Unknown iterable type: ' + iterInfo['__iterable']);
  }
}

module.exports = {
  deserialize: deserialize
};

/***/ }),

/***/ "nkzV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 59481a840e657823b70cde44dac555aa
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteUserMutationVariables = {|
  input: DeleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type DeleteUserMutation = {|
  variables: DeleteUserMutationVariables,
  response: DeleteUserMutationResponse,
|};
*/

/*
mutation DeleteUserMutation(
  $input: DeleteUserInput!
) {
  deleteUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "DeleteUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteUserMutation",
      "id": null,
      "text": "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'c41c3a031a3a3c187abf4960c8697c73';
module.exports = node;

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "okBe":
/***/ (function(module, exports, __webpack_require__) {

/*! https://mths.be/utf8js v3.0.0 by @mathias */
;(function(root) {

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	root.version = '3.0.0';
	root.encode = utf8encode;
	root.decode = utf8decode;

}( false ? undefined : exports));


/***/ }),

/***/ "ozsi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("hHc6");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pLMf":
/***/ (function(module, exports) {

module.exports = require("pako");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pRDU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _styles = __webpack_require__("Bjmp");

var _CssBaseline = _interopRequireDefault(__webpack_require__("AJJM"));

var _themes = _interopRequireDefault(__webpack_require__("3qfz"));

var StylesProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(StylesProvider, _React$Component);

  function StylesProvider() {
    (0, _classCallCheck2.default)(this, StylesProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StylesProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(StylesProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children;
      return _react.default.createElement(_styles.ThemeProvider, {
        key: theme,
        theme: _themes.default.themes[theme]
      }, _react.default.createElement(_CssBaseline.default, null), children);
    }
  }]);
  return StylesProvider;
}(_react.default.Component);

var _default = StylesProvider;
exports.default = _default;

/***/ }),

/***/ "plgE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReduxStore;

var _redux = __webpack_require__("rKB8");

var _reduxImmutable = __webpack_require__("RGyf");

var _reduxDevtoolsExtension = __webpack_require__("ufKq");

var _reduxThunk = _interopRequireDefault(__webpack_require__("ZSx1"));

var _state = _interopRequireDefault(__webpack_require__("XiiD"));

var _state2 = _interopRequireDefault(__webpack_require__("vaz+"));

var _state3 = _interopRequireDefault(__webpack_require__("g1gh"));

var rootReducer = (0, _reduxImmutable.combineReducers)({
  app: _state.default,
  employees: _state2.default,
  users: _state3.default
});

var storeFactory = function storeFactory(di, initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(di));
  if (false) {}
  var store = (0, _redux.createStore)(rootReducer, initialState || undefined, middleware);
  di.registerInstance(store, "store");
  di.registerInstance(store.getState.bind(store), "getState");
  di.registerInstance(store.dispatch.bind(store), "dispatch");
  return store;
};

var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getReduxStore(di, initialState) {
  var store;

  if (true) {
    // Always make a new store if server,
    // otherwise state is shared between requests
    store = storeFactory(di, initialState);
  } else {}

  return store;
}

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s/BC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const moment = require("moment-timezone");
const moment = __webpack_require__("wy2R");
__webpack_require__("N72Q"); // en is already there

module.exports = moment;


/***/ }),

/***/ "sU3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("4tOB"));

var selectors = _interopRequireWildcard(__webpack_require__("f5b5"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("Cyi7"));

var _CreateEmployee = _interopRequireDefault(__webpack_require__("yg+8"));

var _EditEmployee = _interopRequireDefault(__webpack_require__("Jn2N"));

var _DeleteEmployee = _interopRequireDefault(__webpack_require__("ozsi"));

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  employeeId: selected[0]
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var create = function create(_ref2) {
  var uid = _ref2.uid,
      checked = _ref2.checked,
      name = _ref2.name,
      dept = _ref2.dept,
      title = _ref2.title,
      country = _ref2.country,
      salary = _ref2.salary;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _CreateEmployee.default)(di, {
                  uid: uid,
                  checked: checked,
                  name: name,
                  dept: dept,
                  title: title,
                  country: country,
                  salary: salary
                });

              case 2:
                data = _context2.sent;

                if (!_.get(data, "data.createEmployee.employee.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref4) {
  var id = _ref4.id,
      uid = _ref4.uid,
      checked = _ref4.checked,
      name = _ref4.name,
      dept = _ref4.dept,
      title = _ref4.title,
      country = _ref4.country,
      salary = _ref4.salary;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _EditEmployee.default)(di, {
                  id: id,
                  uid: uid,
                  checked: checked,
                  name: name,
                  dept: dept,
                  title: title,
                  country: country,
                  salary: salary
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.editEmployee.employee.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref6) {
  var id = _ref6.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _DeleteEmployee.default)(di, {
                  id: id
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", !!_.get(data, "data.deleteEmployee.employee.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "seUC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_AUTH_MODAL = exports.SHOW_AUTH_MODAL = exports.SET_THEME = exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
var START = "app/app/START";
exports.START = START;
var STOP = "app/app/STOP";
exports.STOP = STOP;
var SET_STATUS_CODE = "app/app/SET_STATUS_CODE";
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_CONNECTED = "app/app/SET_CONNECTED";
exports.SET_CONNECTED = SET_CONNECTED;
var SET_LOCALE = "app/app/SET_LOCALE";
exports.SET_LOCALE = SET_LOCALE;
var SET_THEME = "app/app/SET_THEME";
exports.SET_THEME = SET_THEME;
var SHOW_AUTH_MODAL = "app/app/SHOW_AUTH_MODAL";
exports.SHOW_AUTH_MODAL = SHOW_AUTH_MODAL;
var HIDE_AUTH_MODAL = "app/app/HIDE_AUTH_MODAL";
exports.HIDE_AUTH_MODAL = HIDE_AUTH_MODAL;

/***/ }),

/***/ "tKwO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var immutable = __webpack_require__("nuGg");

var JSONStreamStringify = __webpack_require__("9Ysx");

var nativeTypeHelpers = __webpack_require__("1xBf");

function serialize(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (immutable.Iterable.isIterable(data) || data instanceof immutable.Record || nativeTypeHelpers.isSupportedNativeType(data)) {
    var patchedData = Object.create(data);

    if (nativeTypeHelpers.isSupportedNativeType(data)) {
      // NOTE: When native type (such as Date or RegExp) methods are called
      //   on an `Object.create()`'d objects, invalid usage errors are thrown
      //   in many cases. We need to patch the used methods to work
      //   on originals.
      nativeTypeHelpers.patchNativeTypeMethods(patchedData, data);
    }

    // NOTE: JSON.stringify() calls the #toJSON() method of the root object.
    //   Immutable.JS provides its own #toJSON() implementation which does not
    //   preserve map key types.
    patchedData.toJSON = function () {
      return this;
    };

    data = patchedData;
  }

  var indentation = options.pretty ? 2 : 0;

  return JSON.stringify(data, replace, indentation);
}

function createSerializationStream(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var indentation = options.pretty ? 2 : 0;
  var replacer = options.bigChunks ? replace : replaceAsync;

  var stream = JSONStreamStringify(data, replacer, indentation);
  return stream;
}

function replace(key, value) {
  var result = value;

  if (value instanceof immutable.Record) {
    result = replaceRecord(value, replace);
  } else if (immutable.Iterable.isIterable(value)) {
    result = replaceIterable(value, replace);
  } else if (Array.isArray(value)) {
    result = replaceArray(value, replace);
  } else if (nativeTypeHelpers.isDate(value)) {
    result = { '__date': value.toISOString() };
  } else if (nativeTypeHelpers.isRegExp(value)) {
    result = { '__regexp': value.toString() };
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
    result = replacePlainObject(value, replace);
  }

  return result;
}

function replaceAsync(key, value) {
  var result = value;

  if (!(value instanceof Promise)) {
    if (value instanceof immutable.Record) {
      result = new Promise(function (resolve) {
        setImmediate(function () {
          resolve(replaceRecord(value, replaceAsync));
        });
      });
    } else if (immutable.Iterable.isIterable(value)) {
      result = new Promise(function (resolve) {
        setImmediate(function () {
          resolve(replaceIterable(value, replaceAsync));
        });
      });
    } else if (Array.isArray(value)) {
      result = new Promise(function (resolve) {
        setImmediate(function () {
          resolve(replaceArray(value, replaceAsync));
        });
      });
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
      result = new Promise(function (resolve) {
        setImmediate(function () {
          resolve(replacePlainObject(value, replaceAsync));
        });
      });
    }
  }

  return result;
}

function replaceRecord(rec, replaceChild) {
  var recordDataMap = rec.toMap();
  var recordData = {};

  recordDataMap.forEach(function (value, key) {
    recordData[key] = replaceChild(key, value);
  });

  if (!rec._name) {
    return recordData;
  }
  return { "__record": rec._name, "data": recordData };
}

function getIterableType(iterable) {
  if (immutable.List.isList(iterable)) {
    return 'List';
  }

  if (immutable.Stack.isStack(iterable)) {
    return 'Stack';
  }

  if (immutable.Set.isSet(iterable)) {
    if (immutable.OrderedSet.isOrderedSet(iterable)) {
      return 'OrderedSet';
    }

    return 'Set';
  }

  if (immutable.Map.isMap(iterable)) {
    if (immutable.OrderedMap.isOrderedMap(iterable)) {
      return 'OrderedMap';
    }

    return 'Map';
  }

  return undefined;
}

function replaceIterable(iter, replaceChild) {
  var iterableType = getIterableType(iter);
  if (!iterableType) {
    throw new Error('Cannot find type of iterable: ' + iter);
  }

  switch (iterableType) {
    case 'List':
    case 'Set':
    case 'OrderedSet':
    case 'Stack':
      var listData = [];
      iter.forEach(function (value, key) {
        listData.push(replaceChild(key, value));
      });
      return { "__iterable": iterableType, "data": listData };

    case 'Map':
    case 'OrderedMap':
      var mapData = [];
      iter.forEach(function (value, key) {
        mapData.push([key, replaceChild(key, value)]);
      });
      return { "__iterable": iterableType, "data": mapData };
  }
}

function replaceArray(arr, replaceChild) {
  return arr.map(function (value, index) {
    return replaceChild(index, value);
  });
}

function replacePlainObject(obj, replaceChild) {
  var objData = {};
  Object.keys(obj).forEach(function (key) {
    objData[key] = replaceChild(key, obj[key]);
  });

  return objData;
}

module.exports = {
  createSerializationStream: createSerializationStream,
  serialize: serialize
};

/***/ }),

/***/ "tyBL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("Jv6i");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "urWx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("XiiD");

var _Styles = _interopRequireDefault(__webpack_require__("pRDU"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    theme: _state.appSelectors.getTheme(state)
  };
};

var StylesProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Styles.default);
var _default = StylesProvider;
exports.default = _default;

/***/ }),

/***/ "vaz+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeesSelectors = exports.employeesOperations = exports.employeesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("Tu6X"));

var employeesTypes = _interopRequireWildcard(__webpack_require__("cwDw"));

exports.employeesTypes = employeesTypes;

var employeesOperations = _interopRequireWildcard(__webpack_require__("sU3c"));

exports.employeesOperations = employeesOperations;

var employeesSelectors = _interopRequireWildcard(__webpack_require__("f5b5"));

exports.employeesSelectors = employeesSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "vcBc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRelayEnviroment;

var _relayRuntime = __webpack_require__("AV/6");

var envFactory = function envFactory(di, initialState) {
  var fetcher = di.get("fetcher");

  var network = _relayRuntime.Network.create(fetcher.query.bind(fetcher), fetcher.subscribe.bind(fetcher));

  var store = new _relayRuntime.Store(new _relayRuntime.RecordSource(initialState || undefined));
  var env = new _relayRuntime.Environment({
    network: network,
    store: store
  });
  di.registerInstance(env, "env");
  return env;
};

var __NEXT_RELAY_ENVIRONMENT__ = "__NEXT_RELAY_ENVIRONMENT__";

function getRelayEnviroment(di, initialState) {
  var relayEnvironment;

  if (true) {
    // Always make a new environment if server,
    // otherwise it is is shared between requests
    relayEnvironment = envFactory(di, initialState);
  } else {}

  return relayEnvironment;
}

/***/ }),

/***/ "vdyi":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vu9h":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Дашборд","TITLE_DASHBOARD":"Дашборд","MENU_FORMS":"Формы","TITLE_FORMS":"Формы","MENU_CHARTS":"Графики","TITLE_CHARTS":"Графики","MENU_TABLES":"Таблицы","TITLE_TABLES":"Таблицы","MENU_MAPS":"Карты","TITLE_MAPS":"Карты","MENU_NOTIFICATIONS":"Уведомления","TITLE_NOTIFICATIONS":"Уведомления","MENU_TYPOGRAPHY":"Типографика","TITLE_TYPOGRAPHY":"Типографика","MENU_ICONS":"Иконки","TITLE_ICONS":"Иконки","MENU_USERS":"Пользователи","TITLE_USERS":"Пользователи","TITLE_PROFILE":"Профиль","TITLE_VERIFY":"Верификация email","TITLE_OAUTH_ERROR":"Ошибка авторизации","THEME_DARK_MENU":"Темная","THEME_DARK_LABEL":"Темная тема","THEME_LIGHT_MENU":"Светлая","THEME_LIGHT_LABEL":"Светлая тема","LAYOUT_UPDATE_READY_MESSAGE":"Доступно обновление. Кликните здесь, чтобы перезагрузить страницу.","LAYOUT_NOT_CONNECTED_MESSAGE":"Подключение...","SIDEBAR_LOGIN_BUTTON":"Вход / Регистрация","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Сравнительный тест","SIDEBAR_RESPONSIVENESS_LINK":"Тест реактивности","HEADER_INBOX_LABEL":"Входяшие","HEADER_PROFILE_LABEL":"Профиль","HEADER_PROFILE_TOOLTIP":"Как у анонимный пользователя, у вас нет профиля.","PROFILE_NAME_LABEL":"Отображаемое имя","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"Новый пароль","PROFILE_PASSWORD2_LABEL":"Повторите пароль","PROFILE_SAVE_BUTTON":"Сохранить","PROFILE_DESTROY_BUTTON":"Самоуничтожение","PROFILE_VERIFY_BUTTON":"Верифицировать email","PROFILE_LINK_BUTTON":"Привязать","PROFILE_UNLINK_BUTTON":"Отвязать","PROFILE_SAVE_SUCCESS":"Профиль был обновлен","PROFILE_VERIFY_SUCCESS":"Пожалуйста, проверьте вашу почту по поводу верификацонного сообщения","PROFILE_LINK_SUCCESS":"Привязываем провайдера...","PROFILE_UNLINK_SUCCESS":"Сервис более не привязан к вашему аккаунту","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Верифицируйте ваш email","VERIFY_EMAIL_TEXT":"Используйте ссылку ниже для верификации вашего email:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Используйте ссылку ниже для верификации вашего email:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Пожалуйста, используйте кнопку ниже для верификации вашего email","VERIFY_FAILED_MESSAGE":"Эта ссылка больше не работает","VERIFY_ACTION_BUTTON":"Верифицировать email","DELETE_PROFILE_TITLE":"Удалить профиль","DELETE_PROFILE_TEXT":"Вы уверены, что хотите удалить ваш профиль?","DELETE_PROFILE_CANCEL":"Отменить","DELETE_PROFILE_SUBMIT":"Удалить","OAUTH_ERROR_GENERIC":"Произошла ошибка","OAUTH_ERROR_ACCOUNT_EXISTS":"Аккаунт, связанный с вашим email, уже существует","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Почему я это вижу?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["Похоже, что вы уже входили, используя другой сервис.\n","Чтобы защитить ваш аккаунт, если вы уже входили, используя другой сервис, вам"," необходимо связать ваши аккануты, прежде чем вы сможете войти, используя другой сервис."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"Как это починить?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["Чтобы войти, используя другой сервис, сначала войдите, используя email или предыдущий"," сервис, затем свяжите ваши аккаунты на странице профиля."],"DASHBOARD_PROFIT_LABEL":"Прибыль","DASHBOARD_SALES_LABEL":"Продажи","DASHBOARD_CLIENTS_LABEL":"Клиенты","DASHBOARD_AVG_TIME_LABEL":"Сред. время","DASHBOARD_WORLD_LABEL":"Мир","DASHBOARD_CLICK_MAP_LABEL":"Кликните, чтобы выбрать","DASHBOARD_NOT_REALLY_LABEL":"(на самом деле нет)","DEPT_PRODUCTION":"Производство","DEPT_RD":"R&D","DEPT_PURCHASING":"Закупки","DEPT_MARKETING":"Маркетинг","DEPT_HR":"HR","DEPT_ACCOUNTING":"Бухгалтерия","EMPLOYEES_MESSAGE_TITLE":"Оно живое!","EMPLOYEES_MESSAGE_CONTENT":["Эта таблица работает благодаря GraphQL API и использует React Relay Modern. Попробуйте изменить значение в"," другом броузере или вкладке и вы увидите, что оно обновилось во всех броузерах, подключенных к данной странице,"," благодаря GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Имя","EMPLOYEES_DEPT_COLUMN":"Отдел","EMPLOYEES_TITLE_COLUMN":"Должность","EMPLOYEES_COUNTRY_COLUMN":"Страна","EMPLOYEES_SALARY_COLUMN":"Оклад","EMPLOYEES_CREATE_BUTTON":"Создать сотрудника","EMPLOYEES_EDIT_BUTTON":"Изменить сотрудника","EMPLOYEES_DELETE_BUTTON":"Удалить сотрудников","EDIT_EMPLOYEE_TITLE_CREATE":"Создать сотрудника","EDIT_EMPLOYEE_TITLE_EDIT":"Изменить сотрудника","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Только цифры","EDIT_EMPLOYEE_CHECKED_LABEL":"Включен","EDIT_EMPLOYEE_NAME_LABEL":"Имя","EDIT_EMPLOYEE_DEPT_LABEL":"Отдел","EDIT_EMPLOYEE_TITLE_LABEL":"Должность","EDIT_EMPLOYEE_COUNTRY_LABEL":"Страна","EDIT_EMPLOYEE_SALARY_LABEL":"Оклад","EDIT_EMPLOYEE_CANCEL":"Отменить","EDIT_EMPLOYEE_SUBMIT":"Отправить","DELETE_EMPLOYEE_TITLE":"Удалить сотрудников","DELETE_EMPLOYEE_TEXT":"Удалить выбранных сотрудников?","DELETE_EMPLOYEE_CANCEL":"Отменить","DELETE_EMPLOYEE_SUBMIT":"Удалить","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Преверен","USERS_NAME_COLUMN":"Имя","USERS_ROLES_COLUMN":"Роли","USERS_CREATE_BUTTON":"Создать пользователя","USERS_EDIT_BUTTON":"Изменить пользователя","USERS_DELETE_BUTTON":"Удалить пользователей","EDIT_USER_TITLE_CREATE":"Создать пользователя","EDIT_USER_TITLE_EDIT":"Изменить пользователя","EDIT_USER_NAME_LABEL":"Имя","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Пароль","EDIT_USER_ANONYMOUS_LABEL":"Аноним","EDIT_USER_AUTHENTICATED_LABEL":"Авторизованный","EDIT_USER_ADMIN_LABEL":"Администратор","EDIT_USER_CANCEL":"Отменить","EDIT_USER_SUBMIT":"Отправить","DELETE_USER_TITLE":"Удалить пользователей","DELETE_USER_TEXT":"Удалить выбранных пользователей?","DELETE_USER_CANCEL":"Отменить","DELETE_USER_SUBMIT":"Удалить","FORMS_MESSAGE_TITLE":"Оно живое!","FORMS_MESSAGE_CONTENT":["Пример формы ниже полностью фукциональный, поля нормализуют и проверяют ввод, используя файл описания данной "," формы. А сервер может перепроверить форму, испольуя тот же самый файл описания формы после отправки."],"FORMS_SUCCESS_TITLE":"Поздравляем!","FORMS_SUCCESS_TEXT":"Форма закончена и готова к отправке на сервер","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Пред","WIZARD_NEXT_BUTTON":"След","WIZARD_SUBMIT_BUTTON":"Готово","WIZARD_ERROR_LABEL":"Пожалуйста, заполните эту форму","SHIPPING_STEP_TITLE":"Доставка","SHIPPING_STEP_DESCR":"Укажите параметры доставки","SHIPPING_FIRST_NAME_LABEL":"Имя","SHIPPING_MIDDLE_NAME_LABEL":"Отчество (не обязательно)","SHIPPING_LAST_NAME_LABEL":"Фамилия","SHIPPING_ADDRESS_LABEL":"Адрес","SHIPPING_CITY_LABEL":"Город/Поселок","SHIPPING_STATE_LABEL":"Штат/Провинция/Регион (если требуется)","SHIPPING_CODE_LABEL":"ZIP/Почтовый индекс","SHIPPING_COUNTRY_LABEL":"Страна","SHIPPING_PHONE_LABEL":"Номер телефона","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"Что такое собака?","SHIPPING_Q2":"Какие виды собак бывают?","SHIPPING_Q3":"Как завести собаку?","BILLING_STEP_TITLE":"Оплата","BILLING_STEP_DESCR":"Укажите параметры оплаты","BILLING_CARD_NUMBER_LABEL":"Номер кредитной карты","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Адрес плательщика совпадает с адресом доставки","BILLING_Q1":"Что такое Lorem Ipsum?","BILLING_Q2":"Когда это начали применять?","CONFIRM_STEP_TITLE":"Готово","CONFIRM_STEP_DESCR_SUCCESS":"Форма готова к отправке","CONFIRM_STEP_DESCR_FAILURE":"Форма еще не закончена","CONFIRM_SHIPPING_LABEL":"Параметры доставки","CONFIRM_BILLING_LABEL":"Параметры оплаты","CONFIRM_FIRST_NAME_LABEL":"Имя:","CONFIRM_MIDDLE_NAME_LABEL":"Отчество:","CONFIRM_LAST_NAME_LABEL":"Фамилия:","CONFIRM_ADDRESS_LABEL":"Адрес:","CONFIRM_CITY_LABEL":"Город/Поселок:","CONFIRM_STATE_LABEL":"Штат/Привинция/Регион:","CONFIRM_CODE_LABEL":"ZIP/Почтовый индекс:","CONFIRM_COUNTRY_LABEL":"Страна:","CONFIRM_PHONE_LABEL":"Номер телефона:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Номер кредитной карты:","CONFIRM_CARD_DATE_LABEL":"Срок карты истекает:","NOTIFICATIONS_LABEL":"Уведомления","NOTIFICATIONS_TITLE":"Стилизованный попап!","ICONS_FILTER_LABEL":"Фильтр","APP_AUTH_TITLE":"Авторизация","APP_AUTH_ANONYMOUS_BUTTON":"Аноним","APP_AUTH_CREDENTIALS_LABEL":"Войти, используя логин/пароль","APP_AUTH_NEW_USER_LABEL":"У меня еще нет аккаунт. Пожалуйста, создайте его","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Пароль","APP_AUTH_SERVICE_BUTTON":"Войти с","APP_AUTH_SUBMIT":"Войти","APP_AUTH_FAILED":"Неправильный логин/пароль","APP_AUTH_EMAIL_TAKEN":"Этот email уже зарегистрирован","OPERATION_FAILED":"Операция завершилась ошибкой","ERROR":"Ошибка","ERROR_GO_HOME_LINK":"Открыть стартовую страницу","ERROR_TRY_AUTH_LINK":"Авторизоваться и попробовать еще раз","ERROR_FIELD_REQUIRED":"Это поле обязательно","ERROR_INVALID_PATTERN":"Пожалуйста, укажите правильное значение","ERROR_INVALID_EMAIL":"Пожалуйста, укажите правильный email","ERROR_INVALID_PHONE":"Пожалуйста, укажите правильный номер телефона","ERROR_INVALID_PHONE_COUNTRY":"Это неправильный номер телефона для указанной страны","ERROR_INVALID_CREDIT_CARD_NUMBER":"Пожалуйста, укажите правильный номер кредитной карты","ERROR_INVALID_CREDIT_CARD_DATE":"Пожалуйста, укажите правильный срок действия кредитной карты","ERROR_INVALID_CREDIT_CARD_SECRET":"Пожалуйста, укажите правильный код CVV2","ERROR_INVALID_PASSWORD":"Длина пароля должна быть не меньше 6 символов","ERROR_MISMATCHED_VALUES":"Два, введенные вами значения, не совпадают"};

/***/ }),

/***/ "w384":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PassThrough = __webpack_require__("msIP").PassThrough;
const isReadableStream = __webpack_require__("zh76").isReadableStream;

class CoStream extends PassThrough {
    constructor(args) {
        super();
        this._generator = this._makeGenerator.apply(this, args);
    }

    // You need to implement your logic in this generator
    * _makeGenerator() {
        yield new Error('You need to implement _makeGenerator');
    }

    // Handle results from generator
    _handle(result) {
        if (result.value === false) {
            // Abort feed
            this._running = false;
            return;
        }

        if (result.value === true) {
            // Continue to feed
            this._handle(this._generator.next());
            return;
        }

        if (result.done) {
            // Feeding done
            this._done = result.done;
            return this.push(null);
        }

        if (isReadableStream(result.value)) {
            // Pipe streams and continue feeding afterwards
            return result.value.once('end', () => this._handle(this._generator.next())).pipe(this, {
                end: false
            });
        }

        if (result.value instanceof Promise) {
            // Resolve promises
            return Promise.resolve(result.value).then((res) => {
                this._handle(this._generator.next(res));
            });
        }
    }

    // Read from stream
    _read(n) {
        super._read(n);

        if (this._done) {
            return false;
        }

        if (!this._running) {
            this._running = true;
            this._handle(this._generator.next());
        }

        return !this._done;
    }
}

module.exports = CoStream;


/***/ }),

/***/ "wu3R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign({}, __webpack_require__("ngY8"), __webpack_require__("tKwO"));

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "wyL8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var Storage =
/*#__PURE__*/
function () {
  function Storage(getState, dispatch) {
    (0, _classCallCheck2.default)(this, Storage);
    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  (0, _createClass2.default)(Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      if (true) return;
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (true) return;
      localStorage.setItem(key, (0, _stringify.default)(value));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (true) return;
      localStorage.removeItem(key);
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "storage";
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    }
  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);
  return Storage;
}();

var _default = Storage;
exports.default = _default;

/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "xMej":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("fXmL");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "xTjR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0610a65ec7d53fb2e2def56948272b29
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UnlinkProviderInput = {|
  provider?: ?string,
  clientMutationId?: ?string,
|};
export type UnlinkProviderMutationVariables = {|
  input: UnlinkProviderInput
|};
export type UnlinkProviderMutationResponse = {|
  +unlinkProvider: ?{|
    +success: ?boolean
  |}
|};
export type UnlinkProviderMutation = {|
  variables: UnlinkProviderMutationVariables,
  response: UnlinkProviderMutationResponse,
|};
*/

/*
mutation UnlinkProviderMutation(
  $input: UnlinkProviderInput!
) {
  unlinkProvider(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UnlinkProviderInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "unlinkProvider",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "UnlinkProviderPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UnlinkProviderMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "UnlinkProviderMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "UnlinkProviderMutation",
      "id": null,
      "text": "mutation UnlinkProviderMutation(\n  $input: UnlinkProviderInput!\n) {\n  unlinkProvider(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '47e6fd901615a28cf21bd56913699a6f';
module.exports = node;

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "yg+8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("BCqB");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "zX+l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("xTjR");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "zh76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    isReadableStream: function (obj) {
        return obj &&
            typeof obj.pipe === 'function' &&
            typeof obj._read === 'function' &&
            typeof obj._readableState === 'object';
    }
};


/***/ })

/******/ });