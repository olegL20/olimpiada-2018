webpackJsonp([9],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(212)
/* template */
var __vue_template__ = __webpack_require__(213)
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
Component.options.__file = "resources/assets/js/pages/auth/EmailConfirmation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f8dda87", Component.options)
  } else {
    hotAPI.reload("data-v-0f8dda87", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    data: function data() {
        return {
            emailConfirmSuccess: false,
            emailConfirmError: ''
        };
    },
    metaInfo: function metaInfo() {
        return {
            title: this.$t('translation.confirmationEmail')
        };
    },
    mounted: function mounted() {
        var _this = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _this.$store.dispatch('user/confirmation', {
                                token: _this.$route.params.id
                            });

                        case 3:
                            _this.emailConfirmSuccess = true;
                            _context.next = 10;
                            break;

                        case 6:
                            _context.prev = 6;
                            _context.t0 = _context['catch'](0);

                            console.log();
                            _this.emailConfirmError = _context.t0.data.message;

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 6]]);
        }))();
    },
    beforeDestroy: function beforeDestroy() {
        this.emailConfirmError = '';
    }
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "homepage" }, [
    _c("div", { staticClass: "container" }, [
      _vm.emailConfirmSuccess
        ? _c(
            "div",
            { staticClass: "alert alert-accent", attrs: { role: "alert" } },
            [
              _c("h4", { staticClass: "alert-heading" }, [
                _vm._v(_vm._s(_vm.$t("translation.registrationConfirm")))
              ]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.$t("translation.yourEmailConfirm")))]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-md btn-accent",
                  attrs: { to: { name: "home" }, tag: "button", type: "button" }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("translation.goHome")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        : _vm.emailConfirmError
          ? _c(
              "div",
              { staticClass: "alert alert-danger", attrs: { role: "alert" } },
              [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v(_vm._s(_vm.$t(_vm.emailConfirmError)))
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-md btn-error",
                    attrs: {
                      to: { name: "home" },
                      tag: "button",
                      type: "button"
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("translation.goHome")) +
                        "\n            "
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f8dda87", module.exports)
  }
}

/***/ })

});