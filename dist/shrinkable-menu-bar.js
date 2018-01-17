/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
      __webpack_require__(1);
      module.exports = __webpack_require__(3);

      /***/
    },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _hamburger = __webpack_require__(2);

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * Adds a hamburger icon and a togglable submenu when the given menu is wider
       * than the page.
       */
      var ShrinkableMenu = (function() {
        function ShrinkableMenu() {
          var _this = this;

          var args =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  selector: ".shrinkable",
                  classNamespace: "shrinkable"
                };

          _classCallCheck(this, ShrinkableMenu);

          this.onResize = this.onResize.bind(this);
          this.onHamburgerClick = this.onHamburgerClick.bind(this);

          this.shouldStart = function() {
            return _this.container && _this.list && _this.classNamespace;
          };

          this.getButtonsWidth = function() {
            return (
              (_this.hamburger ? _this.hamburger.clientWidth : 0) +
              [].concat(_toConsumableArray(_this.list.children)).reduce(function(sum, element) {
                return sum + element.clientWidth;
              }, 0)
            );
          };

          this.getListLastLink = function() {
            return []
              .concat(_toConsumableArray(_this.list.children))
              .filter(function(child) {
                return child.tagName === "LI";
              })
              .pop();
          };

          this.container = document.querySelector(args.selector);
          this.list = document.querySelector(args.selector + " > ul");
          this.windowSize = 0;
          this.classNamespace = args.classNamespace;
          this.hamburger = null;
          this.extraMenu = null;
        }

        _createClass(ShrinkableMenu, [
          {
            key: "start",
            value: function start() {
              this.onShrink();
              window.addEventListener("resize", this.onResize);
            }
          },
          {
            key: "addHamburger",
            value: function addHamburger() {
              this.hamburger = document.createElement("BUTTON");
              this.hamburger.innerHTML = _hamburger.hamburger;
              this.hamburger.classList.add(this.classNamespace + "__btn");
              this.hamburger.classList.add(this.classNamespace + "__theme");
              this.hamburger.classList.add(this.classNamespace + "__hamburger");
              this.container.appendChild(this.hamburger);
              this.hamburger.addEventListener("click", this.onHamburgerClick);
            }
          },
          {
            key: "addExtraMenu",
            value: function addExtraMenu() {
              this.extraMenu = document.createElement("UL");
              this.extraMenu.classList.add(this.classNamespace + "__submenu");
              this.container.appendChild(this.extraMenu);
            }
          },
          {
            key: "initExtraMenu",
            value: function initExtraMenu() {
              this.addHamburger();
              this.addExtraMenu();
              this.onShrink();
            }
          },
          {
            key: "killExtraMenu",
            value: function killExtraMenu() {
              this.hamburger.removeEventListener("click", this.onHamburgerClick);
              this.container.removeChild(this.hamburger);
              this.container.removeChild(this.extraMenu);
              this.hamburger = null;
              this.extraMenu = null;
            }
          },
          {
            key: "onHamburgerClick",
            value: function onHamburgerClick() {
              if (this.hamburger.classList.contains(this.classNamespace + "__active")) {
                this.hamburger.classList.remove(this.classNamespace + "__active");
                this.extraMenu.classList.remove(this.classNamespace + "__active");
              } else {
                this.hamburger.classList.add(this.classNamespace + "__active");
                this.extraMenu.classList.add(this.classNamespace + "__active");
              }
            }
          },
          {
            key: "onResize",
            value: function onResize() {
              if (window.innerWidth > this.windowSize) {
                this.onGrowth();
              } else if (window.innerWidth < this.windowSize) {
                this.onShrink();
              }
            }
          },
          {
            key: "onShrink",
            value: function onShrink() {
              this.windowSize = window.innerWidth;

              while (this.getButtonsWidth() > this.windowSize) {
                if (!this.hamburger) {
                  this.initExtraMenu();
                  return;
                }

                var lastItem = this.list.removeChild(this.getListLastLink());
                this.extraMenu.prepend(lastItem);
              }
            }
          },
          {
            key: "onGrowth",
            value: function onGrowth() {
              this.windowSize = window.innerWidth;

              while (
                this.extraMenu &&
                this.extraMenu.children.length &&
                this.getButtonsWidth() + this.extraMenu.children[0].clientWidth < this.windowSize
              ) {
                var firstItem = this.extraMenu.removeChild(this.extraMenu.children[0]);
                this.list.append(firstItem);

                if (!this.extraMenu.children.length) {
                  this.killExtraMenu();
                  return;
                }
              }
            }
          }
        ]);

        return ShrinkableMenu;
      })();

      exports.default = ShrinkableMenu;

      /***/
    },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hamburger = (exports.hamburger =
        '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 418.26 291.34" class="menu-icon-svg">\n<title>Menu</title>\n<rect fill="currentColor" width="418.26" height="26.75"/>\n<rect fill="currentColor" y="132.29" width="418.26" height="26.75"/>\n<rect fill="currentColor" y="264.59" width="418.26" height="26.75"/>\n</svg>');

      /***/
    },
    /* 3 */
    /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      /***/
    }
    /******/
  ]
);
