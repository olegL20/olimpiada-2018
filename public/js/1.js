webpackJsonp([1],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(187)
/* template */
var __vue_template__ = __webpack_require__(188)
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
Component.options.__file = "resources/assets/js/pages/auth/ResetPassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ba91fc0", Component.options)
  } else {
    hotAPI.reload("data-v-5ba91fc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(57);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_user2.default],
    metaInfo: function metaInfo() {
        return {
            title: this.$t('translation.resetPassword')
        };
    },
    data: function data() {
        return {
            progress: false
        };
    },
    beforeDestroy: function beforeDestroy() {
        this.userPassword = null;
        this.userPasswordConfirmation = null;
    },

    methods: {
        resetPassword: function resetPassword() {
            var _this = this;

            return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var valid;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.$validator.validateAll();

                            case 2:
                                valid = _context.sent;

                                if (!valid) {
                                    _context.next = 16;
                                    break;
                                }

                                _this.progress = true;

                                _context.prev = 5;
                                _context.next = 8;
                                return _this.$store.dispatch('user/resetPassword', {
                                    email: _this.userEmail,
                                    password: _this.userPassword,
                                    password_confirmation: _this.userPasswordConfirmation,
                                    token: _this.$route.params.token
                                });

                            case 8:

                                _this.$toast.success({
                                    title: _this.$t('translation.success'),
                                    message: _this.$t('translation.passwordHasBeenChanged')
                                });

                                _this.$router.push({
                                    name: 'auth.login'
                                });
                                _context.next = 16;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](5);

                                _this.$toast.error({
                                    title: _this.$t('translation.error'),
                                    message: _this.$t('translation.tryAgain')
                                });

                                _this.progress = false;

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[5, 12]]);
            }))();
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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12 col-md-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.$t("translation.resetPassword")) +
                "\n                "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _vm.progress ? _c("div", { staticClass: "loading" }) : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.resetPassword($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(_vm.$t("translation.email")) +
                            "\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userEmail,
                            expression: "userEmail"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email|max:255",
                            expression: "'required|email|max:255'"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.errors.has("email") },
                        attrs: { id: "email", type: "email", name: "email" },
                        domProps: { value: _vm.userEmail },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.userEmail = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticClass: "invalid-feedback"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.errors.first("email")) +
                              "\n                                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "password" } }, [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(_vm.$t("translation.password")) +
                            "\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userPassword,
                            expression: "userPassword"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:6",
                            expression: "'required|min:6'"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.errors.has("password") },
                        attrs: {
                          id: "password",
                          type: "password",
                          name: "password"
                        },
                        domProps: { value: _vm.userPassword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.userPassword = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("password"),
                              expression: "errors.has('password')"
                            }
                          ],
                          staticClass: "invalid-feedback"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.errors.first("password")) +
                              "\n                                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "password-confirmation" } }, [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(_vm.$t("translation.confirmPassword")) +
                            "\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userPasswordConfirmation,
                            expression: "userPasswordConfirmation"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|confirmed:password",
                            expression: "'required|confirmed:password'"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.errors.has("passwordConfirmation")
                        },
                        attrs: {
                          id: "password-confirmation",
                          type: "password",
                          name: "passwordConfirmation"
                        },
                        domProps: { value: _vm.userPasswordConfirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.userPasswordConfirmation = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("passwordConfirmation"),
                              expression: "errors.has('passwordConfirmation')"
                            }
                          ],
                          staticClass: "invalid-feedback"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.errors.first("passwordConfirmation")) +
                              "\n                                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "login-btn btn btn-success",
                        attrs: { type: "submit", disabled: this.progress }
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.$t("translation.resetPassword")) +
                            "\n                                "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ba91fc0", module.exports)
  }
}

/***/ })

});