webpackJsonp([13],{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(371)
/* template */
var __vue_template__ = __webpack_require__(372)
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
Component.options.__file = "resources/assets/js/pages/admin/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-088c8e1c", Component.options)
  } else {
    hotAPI.reload("data-v-088c8e1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    metaInfo: function metaInfo() {
        return {
            title: this.$t('translation.homepage')
        };
    }
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "row border rounded bg-white pt-3 pb-3" }, [
        _c("div", { staticClass: "col-md-10" }, [
          _c("h1", [_vm._v(_vm._s(_vm.$t("translation.menu")))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 mt-3" }, [
          _c("ul", [
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.university.admins" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerUniversityAdmin")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.university" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerUniversity")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.faculty" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerFaculty")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.departments" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerDepartments")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.majors" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerMajors")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.coefficients" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerCoefficients")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.tests" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerTests")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.questions" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerQuestions")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "link link__accent mr-3",
                    attrs: { to: { name: "admin.answers" } }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("translation.managerAnswers")) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-088c8e1c", module.exports)
  }
}

/***/ })

});