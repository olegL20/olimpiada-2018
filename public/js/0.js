webpackJsonp([0],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(175)
/* template */
var __vue_template__ = __webpack_require__(178)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-440dff1c", Component.options)
  } else {
    hotAPI.reload("data-v-440dff1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Login = __webpack_require__(176);

var loginModal = _interopRequireWildcard(_Login);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    components: {
        loginModal: loginModal
    },
    metaInfo: function metaInfo() {
        return {
            title: this.$t('translation.homepage')
        };
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(195)
/* template */
var __vue_template__ = __webpack_require__(177)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/modals/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4052ce12", Component.options)
  } else {
    hotAPI.reload("data-v-4052ce12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fade", mode: "out-in" } }, [
    _vm.modalsIsShowLogin
      ? _c("div", { staticClass: "modal__wrap" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: _vm.hide,
                  expression: "hide"
                }
              ],
              staticClass: "modal__content"
            },
            [
              _c("h4", { staticClass: "modal__head" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("translation.login")) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal__body" },
                [
                  _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                    _c("label", { attrs: { for: "email" } }, [
                      _vm._v(_vm._s(_vm.$t("translation.yourEmail")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "input",
                      attrs: {
                        type: "text",
                        id: "email",
                        placeholder: _vm.$t("translation.yourEmail")
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mb-4" }, [
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v(_vm._s(_vm.$t("translation.password")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "input",
                      attrs: {
                        type: "password",
                        id: "password",
                        placeholder: _vm.$t("translation.password")
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-md btn-accent btn-center mb-4",
                      attrs: { type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("translation.enter")) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "small" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("translation.enterTheSocialNetwork")) +
                        ":\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "link mr-3",
                      attrs: { to: { name: "home" } }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fa fa-google-plus-square fa-2x mr-2 fa-relative",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.$t("translation.throughGoogle")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { staticClass: "link", attrs: { to: { name: "home" } } },
                    [
                      _c("i", {
                        staticClass:
                          "fa fa-facebook-square fa-2x mr-2 fa-relative",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("translation.throughFacebook")) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4052ce12", module.exports)
  }
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "homepage" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("h1", [
              _vm._v(_vm._s(_vm.$t("translation.stride")) + " -"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "accent-color" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.$t("translation.greatFuture")) +
                    "\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "gray-color mt-4" }, [
              _vm._v(_vm._s(_vm.$t("translation.beforeEveryone")) + ":")
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list list__accent mb-5" }, [
              _c("li", [
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("translation.selectUniversity")))
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("translation.acquaintWithUniversity")))
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("span", [_vm._v(_vm._s(_vm.$t("translation.tryYourself")))])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("translation.acquaintWithStudentLife")))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-md btn-accent",
                attrs: { type: "button" }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("translation.forward")) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-none d-md-block bg-right-image" })
        ])
      ]),
      _vm._v(" "),
      _c("login-modal")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-440dff1c", module.exports)
  }
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modals = __webpack_require__(203);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_modals2.default],
    methods: {
        hide: function hide() {
            this.modalsIsShowLogin = false;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ })

});