webpackJsonp([3],{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(327)
/* template */
var __vue_template__ = __webpack_require__(361)
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
Component.options.__file = "resources/assets/js/pages/Room.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56b42d18", Component.options)
  } else {
    hotAPI.reload("data-v-56b42d18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
if (!window.FileReader) {
  console.error('Your browser does not support FileReader API!');
}

exports.default = {
  name: 'vue-base64-file-upload',

  props: {
    imageClass: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: 'image/png,image/gif,image/jpeg'
    },
    maxSize: {
      type: Number,
      default: 10 // megabytes
    },
    disablePreview: {
      type: Boolean,
      default: false
    },
    fileName: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Click here to upload image'
    },
    defaultPreview: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      file: null,
      preview: null,
      visiblePreview: false
    };
  },


  computed: {
    wrapperStyles: function wrapperStyles() {
      return {
        'position': 'relative',
        'width': '100%'
      };
    },
    fileInputStyles: function fileInputStyles() {
      return {
        'width': '100%',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'opacity': 0,
        'overflow': 'hidden',
        'outline': 'none',
        'cursor': 'pointer'
      };
    },
    textInputStyles: function textInputStyles() {
      return {
        'width': '100%',
        'cursor': 'pointer'
      };
    },
    previewImage: function previewImage() {
      return this.preview || this.defaultPreview;
    }
  },

  methods: {
    onChange: function onChange(e) {
      var _this = this;

      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      }

      var file = files[0];
      var size = file.size && file.size / Math.pow(1000, 2);

      // check file max size
      if (size > this.maxSize) {
        this.$emit('size-exceeded', size);
        return;
      }

      // update file
      this.file = file;
      this.$emit('file', file);

      var reader = new FileReader();

      reader.onload = function (e) {
        var dataURI = e.target.result;

        if (dataURI) {
          _this.$emit('load', dataURI);

          _this.preview = dataURI;
        }
      };

      // read blob url from file data
      reader.readAsDataURL(file);
    }
  },

  template: '\n    <div class="vue-base64-file-upload">\n      <img\n        v-show="previewImage && !disablePreview"\n        :src="previewImage"\n        :class="imageClass" />\n      <div class="vue-base64-file-upload-wrapper" :style="wrapperStyles">\n        <input\n          type="file"\n          @change="onChange"\n          :style="fileInputStyles"\n          :accept=accept />\n        <input\n          type="text"\n          :class="inputClass"\n          :style="textInputStyles"\n          :value="fileName || file && file.name"\n          :placeholder="placeholder"\n          disabled />\n      </div>\n    </div>\n  '
};


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, URL, webkitURL, FileReader */

;(function ($) {
  'use strict'

  // Loads an image for a given File object.
  // Invokes the callback with an img or optional canvas
  // element (if supported by the browser) as parameter:
  function loadImage (file, callback, options) {
    var img = document.createElement('img')
    var url
    img.onerror = function (event) {
      return loadImage.onerror(img, event, file, callback, options)
    }
    img.onload = function (event) {
      return loadImage.onload(img, event, file, callback, options)
    }
    if (typeof file === 'string') {
      loadImage.fetchBlob(
        file,
        function (blob) {
          if (blob) {
            file = blob
            url = loadImage.createObjectURL(file)
          } else {
            url = file
            if (options && options.crossOrigin) {
              img.crossOrigin = options.crossOrigin
            }
          }
          img.src = url
        },
        options
      )
      return img
    } else if (
      loadImage.isInstanceOf('Blob', file) ||
      // Files are also Blob instances, but some browsers
      // (Firefox 3.6) support the File API but not Blobs:
      loadImage.isInstanceOf('File', file)
    ) {
      url = img._objectURL = loadImage.createObjectURL(file)
      if (url) {
        img.src = url
        return img
      }
      return loadImage.readFile(file, function (e) {
        var target = e.target
        if (target && target.result) {
          img.src = target.result
        } else if (callback) {
          callback(e)
        }
      })
    }
  }
  // The check for URL.revokeObjectURL fixes an issue with Opera 12,
  // which provides URL.createObjectURL but doesn't properly implement it:
  var urlAPI =
    ($.createObjectURL && $) ||
    ($.URL && URL.revokeObjectURL && URL) ||
    ($.webkitURL && webkitURL)

  function revokeHelper (img, options) {
    if (img._objectURL && !(options && options.noRevoke)) {
      loadImage.revokeObjectURL(img._objectURL)
      delete img._objectURL
    }
  }

  // If the callback given to this function returns a blob, it is used as image
  // source instead of the original url and overrides the file argument used in
  // the onload and onerror event callbacks:
  loadImage.fetchBlob = function (url, callback, options) {
    callback()
  }

  loadImage.isInstanceOf = function (type, obj) {
    // Cross-frame instanceof check
    return Object.prototype.toString.call(obj) === '[object ' + type + ']'
  }

  loadImage.transform = function (img, options, callback, file, data) {
    callback(img, data)
  }

  loadImage.onerror = function (img, event, file, callback, options) {
    revokeHelper(img, options)
    if (callback) {
      callback.call(img, event)
    }
  }

  loadImage.onload = function (img, event, file, callback, options) {
    revokeHelper(img, options)
    if (callback) {
      loadImage.transform(img, options, callback, file, {})
    }
  }

  loadImage.createObjectURL = function (file) {
    return urlAPI ? urlAPI.createObjectURL(file) : false
  }

  loadImage.revokeObjectURL = function (url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false
  }

  // Loads a given File object via FileReader interface,
  // invokes the callback with the event object (load or error).
  // The result can be read via event.target.result:
  loadImage.readFile = function (file, callback, method) {
    if ($.FileReader) {
      var fileReader = new FileReader()
      fileReader.onload = fileReader.onerror = callback
      method = method || 'readAsDataURL'
      if (fileReader[method]) {
        fileReader[method](file)
        return fileReader
      }
    }
    return false
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return loadImage
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = loadImage
  } else {
    $.loadImage = loadImage
  }
})((typeof window !== 'undefined' && window) || this)


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(267)
/* template */
var __vue_template__ = __webpack_require__(269)
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
Component.options.__file = "resources/assets/js/components/modals/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c43c885", Component.options)
  } else {
    hotAPI.reload("data-v-0c43c885", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(10);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vuejsDatepicker = __webpack_require__(268);

var _vuejsDatepicker2 = _interopRequireDefault(_vuejsDatepicker);

var _vueBase64FileUpload = __webpack_require__(257);

var _vueBase64FileUpload2 = _interopRequireDefault(_vueBase64FileUpload);

var _modals = __webpack_require__(44);

var _modals2 = _interopRequireDefault(_modals);

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

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

exports.default = {
    mixins: [_modals2.default, _user2.default],
    components: {
        Datepicker: _vuejsDatepicker2.default,
        VueBase64FileUpload: _vueBase64FileUpload2.default
    },
    data: function data() {
        return {
            customImageMaxSize: 3,
            imageSubstringLength: null,
            imageBase64: null
        };
    },

    computed: {
        photo: function photo() {
            if (this.imageBase64) {
                return this.imageBase64.substr(this.imageSubstringLength);
            }
            return '';
        }
    },
    methods: {
        register: function register() {
            var _this = this;

            return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var valid, params;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.$validator.validateAll();

                            case 2:
                                valid = _context.sent;

                                if (!valid) {
                                    _context.next = 23;
                                    break;
                                }

                                _context.prev = 4;
                                params = {
                                    email: _this.userEmail,
                                    password: _this.userPassword,
                                    name: _this.userName,
                                    surname: _this.userSurname,
                                    password_confirmation: _this.userPasswordConfirmation,
                                    birthday: window.luxon.DateTime.fromJSDate(_this.userDateOfBirth).toFormat('yyyy-LL-dd'),
                                    image: _this.photo
                                };

                                if (!(_this.$route.name === 'auth.invite')) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 9;
                                return _this.$store.dispatch('user/registerInvite', {
                                    id: _this.$route.params.id,
                                    params: params
                                });

                            case 9:
                                _this.$router.push({
                                    name: 'home'
                                });
                                _context.next = 14;
                                break;

                            case 12:
                                _context.next = 14;
                                return _this.$store.dispatch('user/register', {
                                    params: params
                                });

                            case 14:
                                _this.hide();
                                window.Cookies.set('first_stage', 2);
                                _this.userFirstStage = 2;
                                _context.next = 23;
                                break;

                            case 19:
                                _context.prev = 19;
                                _context.t0 = _context['catch'](4);

                                if (_context.t0.status === 404 && _this.$route.name === 'auth.invite') {
                                    _this.$toast.error({
                                        title: _this.$t('translation.error'),
                                        message: _this.$t('translation.inviteNotFound')
                                    });
                                } else {
                                    _this.$toast.error({
                                        title: _this.$t('translation.error'),
                                        message: _this.$t(_context.t0.message)
                                    });
                                }
                                _this.hide();

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[4, 19]]);
            }))();
        },
        hide: function hide() {
            if (this.$route.name === 'auth.invite') {
                this.modalsIsShowRegister = false;
                this.$router.push({
                    name: 'home'
                });
            } else {
                this.modalsIsShowRegister = false;
            }
            this.userName = null;
            this.userSurname = null;
            this.userDateOfBirth = null;
            this.userEmail = null;
            this.userPassword = null;
            this.userPasswordConfirmation = null;
        },
        onFile: function onFile(file) {
            this.imageSubstringLength = file.type.length + 13;
        },
        onLoad: function onLoad(dataUri) {
            this.imageBase64 = dataUri;
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.userName = null;
        this.userSurname = null;
        this.userDateOfBirth = null;
        this.userEmail = null;
        this.userPassword = null;
        this.userPasswordConfirmation = null;
    }
};

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * vuejs-datepicker v1.1.5
 * (c) 2016-2018 Charlie Kassel
 * Released under the MIT License.
 */
var Language = function Language (language, months, monthsAbbr, days) {
  this.language = language;
  this.months = months;
  this.monthsAbbr = monthsAbbr;
  this.days = days;
  this.rtl = false;
  this.ymd = false;
  this.yearSuffix = '';
};

var prototypeAccessors = { language: { configurable: true },months: { configurable: true },monthsAbbr: { configurable: true },days: { configurable: true } };

prototypeAccessors.language.get = function () {
  return this._language
};

prototypeAccessors.language.set = function (language) {
  if (typeof language !== 'string') {
    throw new TypeError('Language must be a string')
  }
  this._language = language;
};

prototypeAccessors.months.get = function () {
  return this._months
};

prototypeAccessors.months.set = function (months) {
  if (months.length !== 12) {
    throw new RangeError(("There must be 12 months for " + (this.language) + " language"))
  }
  this._months = months;
};

prototypeAccessors.monthsAbbr.get = function () {
  return this._monthsAbbr
};

prototypeAccessors.monthsAbbr.set = function (monthsAbbr) {
  if (monthsAbbr.length !== 12) {
    throw new RangeError(("There must be 12 abbreviated months for " + (this.language) + " language"))
  }
  this._monthsAbbr = monthsAbbr;
};

prototypeAccessors.days.get = function () {
  return this._days
};

prototypeAccessors.days.set = function (days) {
  if (days.length !== 7) {
    throw new RangeError(("There must be 7 days for " + (this.language) + " language"))
  }
  this._days = days;
};

Object.defineProperties( Language.prototype, prototypeAccessors );

var en = new Language(
  'English',
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
)
// eslint-disable-next-line
;

var DateUtils = {

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate (date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false
    }
    return !isNaN(date.getTime())
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr (date, days) {
    if (typeof date !== 'object') {
      throw TypeError('Invalid Type')
    }
    return days[date.getDay()]
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName (month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array')
    }
    if (typeof month === 'object') {
      return months[month.getMonth()]
    }
    if (typeof month === 'number') {
      return months[month]
    }
    throw TypeError('Invalid type')
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr (month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array')
    }
    if (typeof month === 'object') {
      return monthsAbbr[month.getMonth()]
    }
    if (typeof month === 'number') {
      return monthsAbbr[month]
    }
    throw TypeError('Invalid type')
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth (year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix (day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st'
      case 2:
      case 22:
        return 'nd'
      case 3:
      case 23:
        return 'rd'
      default:
        return 'th'
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate (date, format, translation) {
    translation = (!translation) ? en : translation;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var str = format
      .replace(/dd/, ('0' + day).slice(-2))
      .replace(/d/, day)
      .replace(/yyyy/, year)
      .replace(/yy/, String(year).slice(2))
      .replace(/MMMM/, this.getMonthName(date.getMonth(), translation.months))
      .replace(/MMM/, this.getMonthNameAbbr(date.getMonth(), translation.monthsAbbr))
      .replace(/MM/, ('0' + month).slice(-2))
      .replace(/M(?!a|ä|e)/, month)
      .replace(/su/, this.getNthSuffix(date.getDate()))
      .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray (start, end) {
    var dates = [];
    while (start <= end) {
      dates.push(new Date(start));
      start = new Date(start).setDate(new Date(start).getDate() + 1);
    }
    return dates
  }

}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

var DateInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'input-group' : _vm.bootstrapStyling}},[(_vm.calendarButton)?_c('span',{staticClass:"vdp-datepicker__calendar-button",class:{'input-group-addon' : _vm.bootstrapStyling},style:({'cursor:not-allowed;' : _vm.disabled}),on:{"click":_vm.showCalendar}},[_c('i',{class:_vm.calendarButtonIcon},[_vm._v(" "+_vm._s(_vm.calendarButtonIconContent)+" "),(!_vm.calendarButtonIcon)?_c('span',[_vm._v("…")]):_vm._e()])]):_vm._e(),_vm._v(" "),_c('input',{ref:_vm.refName,class:_vm.computedInputClass,attrs:{"type":_vm.inline ? 'hidden' : 'text',"name":_vm.name,"id":_vm.id,"open-date":_vm.openDate,"placeholder":_vm.placeholder,"clear-button":_vm.clearButton,"disabled":_vm.disabled,"required":_vm.required},domProps:{"value":_vm.formattedValue},on:{"click":_vm.showCalendar,"keypress":_vm.allowTyping,"keyup":_vm.parseTypedDate,"blur":_vm.inputBlurred}}),_vm._v(" "),(_vm.clearButton && _vm.selectedDate)?_c('span',{staticClass:"vdp-datepicker__clear-button",class:{'input-group-addon' : _vm.bootstrapStyling},on:{"click":function($event){_vm.clearDate();}}},[_c('i',{class:_vm.clearButtonIcon},[(!_vm.clearButtonIcon)?_c('span',[_vm._v("×")]):_vm._e()])]):_vm._e()])},staticRenderFns: [],
  props: {
    selectedDate: Date,
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean
  },
  data: function data () {
    return {
      input: null,
      typedDate: false
    }
  },
  computed: {
    formattedValue: function formattedValue () {
      if (!this.selectedDate) {
        return null
      }
      if (this.typedDate) {
        return this.typedDate
      }
      return typeof this.format === 'function'
        ? this.format(this.selectedDate)
        : DateUtils.formatDate(new Date(this.selectedDate), this.format, this.translation)
    },

    computedInputClass: function computedInputClass () {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ')
        }
        return Object.assign({}, {'form-control': true}, this.inputClass)
      }
      return this.inputClass
    }
  },
  methods: {
    showCalendar: function showCalendar () {
      this.$emit('showCalendar');
    },
    /**
     * Prevent typing if not typeable
     * @param {Event} event
     */
    allowTyping: function allowTyping (event) {
      if (!this.typeable) {
        event.preventDefault();
        return false
      }
      return true
    },
    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate (event) {
      // close calendar if escape or enter are pressed
      if ([
        27, // escape
        13  // enter
      ].includes(event.keyCode)) {
        this.input.blur();
        this.inputBlurred();
        this.$emit('closeCalendar');
        return false
      }

      var typedDate = Date.parse(this.input.value);
      if (!isNaN(typedDate)) {
        this.typedDate = this.input.value;
        this.$emit('typedDate', new Date(this.typedDate));
      }
    },
    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred () {
      if (!this.typedDate) {
        return
      }
      if (isNaN(Date.parse(this.input.value))) {
        this.clearDate();
      }
      this.input.value = null;
      this.typedDate = null;
    },
    /**
     * emit a clearDate event
     */
    clearDate: function clearDate () {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted () {
    this.input = this.$el.querySelector('input');
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var PickerDay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDayView),expression:"showDayView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle)},[_c('header',[_c('span',{staticClass:"prev",class:{ 'disabled' : _vm.isRtl ? _vm.isNextMonthDisabled(_vm.pageTimestamp) : _vm.isPreviousMonthDisabled(_vm.pageTimestamp) },on:{"click":function($event){_vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();}}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"day__month_btn",class:_vm.allowedToShowView('month') ? 'up' : '',on:{"click":_vm.showMonthCalendar}},[_vm._v(_vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName)+" "+_vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{ 'disabled' : _vm.isRtl ? _vm.isPreviousMonthDisabled(_vm.pageTimestamp) : _vm.isNextMonthDisabled(_vm.pageTimestamp) },on:{"click":function($event){_vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();}}},[_vm._v(">")])]),_vm._v(" "),_c('div',{class:_vm.isRtl ? 'flex-rtl' : ''},[_vm._l((_vm.daysOfWeek),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day-header"},[_vm._v(_vm._s(d))])}),_vm._v(" "),(_vm.blankDays > 0)?_vm._l((_vm.blankDays),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day blank"})}):_vm._e(),_vm._l((_vm.days),function(day){return _c('span',{key:day.timestamp,staticClass:"cell day",class:_vm.dayClasses(day),on:{"click":function($event){_vm.selectDate(day);}}},[_vm._v(_vm._s(day.date))])})],2)])},staticRenderFns: [],
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: String,
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek () {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays
      }
      return this.translation.days
    },
    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays () {
      var d = this.pageDate;
      var dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      if (this.mondayFirst) {
        return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6
      }
      return dObj.getDay()
    },
    /**
     * @return {Object[]}
     */
    days: function days () {
      var this$1 = this;

      var d = this.pageDate;
      var days = [];
      // set up a new date object to the beginning of the current 'page'
      var dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = DateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth());
      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: dObj.getDate(),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedDate(dObj),
          isDisabled: this$1.isDisabledDate(dObj),
          isHighlighted: this$1.isHighlightedDate(dObj),
          isHighlightStart: this$1.isHighlightStart(dObj),
          isHighlightEnd: this$1.isHighlightEnd(dObj),
          isToday: dObj.toDateString() === (new Date()).toDateString(),
          isWeekend: dObj.getDay() === 0 || dObj.getDay() === 6,
          isSaturday: dObj.getDay() === 6,
          isSunday: dObj.getDay() === 0
        });
        dObj.setDate(dObj.getDate() + 1);
      }
      return days
    },
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName () {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return DateUtils.getMonthNameAbbr(this.pageDate.getMonth(), monthName)
    },
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName () {
      var yearSuffix = this.translation.yearSuffix;
      return ("" + (this.pageDate.getFullYear()) + yearSuffix)
    },
    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd () {
      return this.translation.ymd && this.translation.ymd === true
    }
  },
  methods: {
    selectDate: function selectDate (date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false
      }
      this.$emit('selectDate', date);
    },
    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth () {
      return this.pageDate.getMonth()
    },
    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar () {
      this.$emit('showMonthCalendar');
    },
    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth (incrementBy) {
      var date = this.pageDate;
      date.setMonth(date.getMonth() + incrementBy);
      this.$emit('changedMonth', date);
    },
    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth () {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },
    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      var d = this.pageDate;
      return this.disabledDates.to.getMonth() >= d.getMonth() &&
        this.disabledDates.to.getFullYear() >= d.getFullYear()
    },
    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth () {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },
    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      var d = this.pageDate;
      return this.disabledDates.from.getMonth() <= d.getMonth() &&
        this.disabledDates.from.getFullYear() <= d.getFullYear()
    },
    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate (dObj) {
      return this.selectedDate && this.selectedDate.toDateString() === dObj.toDateString()
    },
    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate (date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (date.toDateString() === d.toDateString()) {
            disabledDates = true;
            return true
          }
        });
      }
      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true
            }
          }
        });
      }
      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(date.getDay()) !== -1) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(date.getDate()) !== -1) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }
      return disabledDates
    },
    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate (date) {
      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (date.toDateString() === d.toDateString()) {
            highlighted = true;
            return true
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(date.getDay()) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(date.getDate()) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted
    },
    dayClasses: function dayClasses (day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      }
    },
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart (date) {
      return this.isHighlightedDate(date) &&
        (this.highlighted.from instanceof Date) &&
        (this.highlighted.from.getFullYear() === date.getFullYear()) &&
        (this.highlighted.from.getMonth() === date.getMonth()) &&
        (this.highlighted.from.getDate() === date.getDate())
    },
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd (date) {
      return this.isHighlightedDate(date) &&
        (this.highlighted.to instanceof Date) &&
        (this.highlighted.to.getFullYear() === date.getFullYear()) &&
        (this.highlighted.to.getMonth() === date.getMonth()) &&
        (this.highlighted.to.getDate() === date.getDate())
    },
    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined (prop) {
      return typeof prop !== 'undefined' && prop
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var PickerMonth = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMonthView),expression:"showMonthView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle)},[_c('header',[_c('span',{staticClass:"prev",class:{ 'disabled' : _vm.isPreviousYearDisabled(_vm.pageTimestamp) },on:{"click":_vm.previousYear}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"month__year_btn",class:_vm.allowedToShowView('year') ? 'up' : '',on:{"click":_vm.showYearCalendar}},[_vm._v(_vm._s(_vm.pageYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{ 'disabled' : _vm.isNextYearDisabled(_vm.pageTimestamp) },on:{"click":_vm.nextYear}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.months),function(month){return _c('span',{key:month.timestamp,staticClass:"cell month",class:{'selected': month.isSelected, 'disabled': month.isDisabled},on:{"click":function($event){$event.stopPropagation();_vm.selectMonth(month);}}},[_vm._v(_vm._s(month.month))])})],2)},staticRenderFns: [],
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: String,
    calendarStyle: Object,
    translation: Object,
    allowedToShowView: Function
  },
  computed: {
    months: function months () {
      var this$1 = this;

      var d = this.pageDate;
      var months = [];
      // set up a new date object to the beginning of the current 'page'
      var dObj = new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
      for (var i = 0; i < 12; i++) {
        months.push({
          month: DateUtils.getMonthName(i, this$1.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedMonth(dObj),
          isDisabled: this$1.isDisabledMonth(dObj)
        });
        dObj.setMonth(dObj.getMonth() + 1);
      }
      return months
    },
    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName () {
      var yearSuffix = this.translation.yearSuffix;
      return ("" + (this.pageDate.getFullYear()) + yearSuffix)
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth (month) {
      if (month.isDisabled) {
        return false
      }
      this.$emit('selectMonth', month);
    },
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear (incrementBy) {
      var date = this.pageDate;
      date.setYear(date.getFullYear() + incrementBy);
      this.$emit('changedYear', date);
    },
    /**
     * Decrements the year
     */
    previousYear: function previousYear () {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },
    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      return this.disabledDates.to.getFullYear() >= this.pageDate.getFullYear()
    },
    /**
     * Increments the year
     */
    nextYear: function nextYear () {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },
    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      return this.disabledDates.from.getFullYear() <= this.pageDate.getFullYear()
    },
    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar () {
      this.$emit('showYearCalendar');
    },
    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth (date) {
      return (this.selectedDate &&
        this.selectedDate.getFullYear() === date.getFullYear() &&
        this.selectedDate.getMonth() === date.getMonth())
    },
    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth (date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (
          (date.getMonth() < this.disabledDates.to.getMonth() && date.getFullYear() <= this.disabledDates.to.getFullYear()) ||
          date.getFullYear() < this.disabledDates.to.getFullYear()
        ) {
          disabledDates = true;
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (
          this.disabledDates.from &&
          (date.getMonth() > this.disabledDates.from.getMonth() && date.getFullYear() >= this.disabledDates.from.getFullYear()) ||
          date.getFullYear() > this.disabledDates.from.getFullYear()
        ) {
          disabledDates = true;
        }
      }
      return disabledDates
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

















var PickerYear = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showYearView),expression:"showYearView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle)},[_c('header',[_c('span',{staticClass:"prev",class:{ 'disabled' : _vm.isPreviousDecadeDisabled(_vm.pageTimestamp) },on:{"click":_vm.previousDecade}},[_vm._v("<")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getPageDecade))]),_vm._v(" "),_c('span',{staticClass:"next",class:{ 'disabled' : _vm.isNextDecadeDisabled(_vm.pageTimestamp) },on:{"click":_vm.nextDecade}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.years),function(year){return _c('span',{key:year.timestamp,staticClass:"cell year",class:{ 'selected': year.isSelected, 'disabled': year.isDisabled },on:{"click":function($event){$event.stopPropagation();_vm.selectYear(year);}}},[_vm._v(_vm._s(year.year))])})],2)},staticRenderFns: [],
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: String,
    calendarStyle: Object,
    translation: Object,
    allowedToShowView: Function
  },
  computed: {
    years: function years () {
      var this$1 = this;

      var d = this.pageDate;
      var years = [];
      // set up a new date object to the beginning of the current 'page'
      var dObj = new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      for (var i = 0; i < 10; i++) {
        years.push({
          year: dObj.getFullYear(),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedYear(dObj),
          isDisabled: this$1.isDisabledYear(dObj)
        });
        dObj.setFullYear(dObj.getFullYear() + 1);
      }
      return years
    },
    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade () {
      var decadeStart = Math.floor(this.pageDate.getFullYear() / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return (decadeStart + " - " + decadeEnd + yearSuffix)
    }
  },
  methods: {
    selectYear: function selectYear (year) {
      if (year.isDisabled) {
        return false
      }
      this.$emit('selectYear', year);
    },
    changeYear: function changeYear (incrementBy) {
      var date = this.pageDate;
      date.setYear(date.getFullYear() + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade () {
      if (this.isPreviousDecadeDisabled()) {
        return false
      }
      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      return Math.floor(this.disabledDates.to.getFullYear() / 10) * 10 >= Math.floor(this.pageDate.getFullYear() / 10) * 10
    },
    nextDecade: function nextDecade () {
      if (this.isNextDecadeDisabled()) {
        return false
      }
      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      return Math.ceil(this.disabledDates.from.getFullYear() / 10) * 10 <= Math.ceil(this.pageDate.getFullYear() / 10) * 10
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear (date) {
      return this.selectedDate && this.selectedDate.getFullYear() === date.getFullYear()
    },
    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear (date) {
      var disabledDates = false;
      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (date.getFullYear() < this.disabledDates.to.getFullYear()) {
          disabledDates = true;
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (date.getFullYear() > this.disabledDates.from.getFullYear()) {
          disabledDates = true;
        }
      }

      return disabledDates
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".rtl { direction: rtl; } .vdp-datepicker { position: relative; text-align: left; } .vdp-datepicker * { box-sizing: border-box; } .vdp-datepicker__calendar { position: absolute; z-index: 100; background: #fff; width: 300px; border: 1px solid #ccc; } .vdp-datepicker__calendar header { display: block; line-height: 40px; } .vdp-datepicker__calendar header span { display: inline-block; text-align: center; width: 71.42857142857143%; float: left; } .vdp-datepicker__calendar header .prev, .vdp-datepicker__calendar header .next { width: 14.285714285714286%; float: left; text-indent: -10000px; position: relative; } .vdp-datepicker__calendar header .prev:after, .vdp-datepicker__calendar header .next:after { content: ''; position: absolute; left: 50%; top: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); border: 6px solid transparent; } .vdp-datepicker__calendar header .prev:after { border-right: 10px solid #000; margin-left: -5px; } .vdp-datepicker__calendar header .prev.disabled:after { border-right: 10px solid #ddd; } .vdp-datepicker__calendar header .next:after { border-left: 10px solid #000; margin-left: 5px; } .vdp-datepicker__calendar header .next.disabled:after { border-left: 10px solid #ddd; } .vdp-datepicker__calendar header .prev:not(.disabled), .vdp-datepicker__calendar header .next:not(.disabled), .vdp-datepicker__calendar header .up:not(.disabled) { cursor: pointer; } .vdp-datepicker__calendar header .prev:not(.disabled):hover, .vdp-datepicker__calendar header .next:not(.disabled):hover, .vdp-datepicker__calendar header .up:not(.disabled):hover { background: #eee; } .vdp-datepicker__calendar .disabled { color: #ddd; cursor: default; } .vdp-datepicker__calendar .flex-rtl { display: flex; width: inherit; flex-wrap: wrap; } .vdp-datepicker__calendar .cell { display: inline-block; padding: 0 5px; width: 14.285714285714286%; height: 40px; line-height: 40px; text-align: center; vertical-align: middle; border: 1px solid transparent; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year { cursor: pointer; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover { border: 1px solid #4bd; } .vdp-datepicker__calendar .cell.selected { background: #4bd; } .vdp-datepicker__calendar .cell.selected:hover { background: #4bd; } .vdp-datepicker__calendar .cell.selected.highlighted { background: #4bd; } .vdp-datepicker__calendar .cell.highlighted { background: #cae5ed; } .vdp-datepicker__calendar .cell.highlighted.disabled { color: #a3a3a3; } .vdp-datepicker__calendar .cell.grey { color: #888; } .vdp-datepicker__calendar .cell.grey:hover { background: inherit; } .vdp-datepicker__calendar .cell.day-header { font-size: 75%; white-space: no-wrap; cursor: inherit; } .vdp-datepicker__calendar .cell.day-header:hover { background: inherit; } .vdp-datepicker__calendar .month, .vdp-datepicker__calendar .year { width: 33.333%; } .vdp-datepicker__clear-button, .vdp-datepicker__calendar-button { cursor: pointer; font-style: normal; } .vdp-datepicker__clear-button.disabled, .vdp-datepicker__calendar-button.disabled { color: #999; cursor: default; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var Datepicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdp-datepicker",class:[_vm.wrapperClass, _vm.isRtl ? 'rtl' : '']},[_c('date-input',{attrs:{"selectedDate":_vm.selectedDate,"format":_vm.format,"translation":_vm.translation,"inline":_vm.inline,"id":_vm.id,"name":_vm.name,"refName":_vm.refName,"openDate":_vm.openDate,"placeholder":_vm.placeholder,"inputClass":_vm.inputClass,"typeable":_vm.typeable,"clearButton":_vm.clearButton,"clearButtonIcon":_vm.clearButtonIcon,"calendarButton":_vm.calendarButton,"calendarButtonIcon":_vm.calendarButtonIcon,"calendarButtonIconContent":_vm.calendarButtonIconContent,"disabled":_vm.disabled,"required":_vm.required,"bootstrapStyling":_vm.bootstrapStyling},on:{"showCalendar":_vm.showCalendar,"closeCalendar":_vm.close,"typedDate":_vm.setTypedDate,"clearDate":_vm.clearDate}}),_vm._v(" "),(_vm.allowedToShowView('day'))?_c('picker-day',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showDayView":_vm.showDayView,"fullMonthName":_vm.fullMonthName,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"highlighted":_vm.highlighted,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"pageTimestamp":_vm.pageTimestamp,"isRtl":_vm.isRtl,"mondayFirst":_vm.mondayFirst},on:{"changedMonth":_vm.setPageDate,"selectDate":_vm.selectDate,"showMonthCalendar":_vm.showMonthCalendar,"selectedDisabled":function($event){_vm.$emit('selectedDisabled');}}}):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('month'))?_c('picker-month',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showMonthView":_vm.showMonthView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation},on:{"selectMonth":_vm.selectMonth,"showYearCalendar":_vm.showYearCalendar,"changedYear":_vm.setPageDate}}):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('year'))?_c('picker-year',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showYearView":_vm.showYearView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation},on:{"selectYear":_vm.selectYear,"changedDecade":_vm.setPageDate}}):_vm._e()],1)},staticRenderFns: [],
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function (val) {
        return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy'
    },
    language: {
      type: Object,
      default: function () { return en; }
    },
    openDate: {
      validator: function (val) {
        return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
      }
    },
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object],
    inputClass: [String, Object],
    wrapperClass: [String, Object],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    }
  },
  data: function data () {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: startDate.setDate(1),
      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,
      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,
      /*
       * Positioning
       */
      calendarHeight: 0
    }
  },
  watch: {
    value: function value (value$1) {
      this.setValue(value$1);
    },
    openDate: function openDate () {
      this.setPageDate();
    },
    initialView: function initialView () {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView () {
      if (!this.initialView) {
        return this.minimumView
      }

      return this.initialView
    },
    pageDate: function pageDate () {
      return new Date(this.pageTimestamp)
    },

    translation: function translation () {
      return this.language
    },

    calendarStyle: function calendarStyle () {
      return {
        position: this.isInline ? 'static' : undefined
      }
    },
    isOpen: function isOpen () {
      return this.showDayView || this.showMonthView || this.showYearView
    },
    isInline: function isInline () {
      return !!this.inline
    },
    isRtl: function isRtl () {
      return this.translation.rtl === true
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate () {
      if (this.selectedDate === null) {
        this.setPageDate();
        return
      }
      this.setPageDate(this.selectedDate);
    },
    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar () {
      if (this.disabled || this.isInline) {
        return false
      }
      if (this.isOpen) {
        return this.close(true)
      }
      this.setInitialView();
      if (!this.isInline) {
        this.$emit('opened');
      }
    },
    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView () {
      var initialView = this.computedInitialView;
      if (!this.allowedToShowView(initialView)) {
        throw new Error(("initialView '" + (this.initialView) + "' cannot be rendered based on minimum '" + (this.minimumView) + "' and maximum '" + (this.maximumView) + "'"))
      }
      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break
        case 'month':
          this.showMonthCalendar();
          break
        default:
          this.showDayCalendar();
          break
      }
    },
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView (view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);

      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex
    },
    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar () {
      if (!this.allowedToShowView('day')) {
        return false
      }
      this.close();
      this.showDayView = true;
      this.addOutsideClickListener();
      return true
    },
    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar () {
      if (!this.allowedToShowView('month')) {
        return false
      }
      this.close();
      this.showMonthView = true;
      this.addOutsideClickListener();
      return true
    },
    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar () {
      if (!this.allowedToShowView('year')) {
        return false
      }
      this.close();
      this.showYearView = true;
      this.addOutsideClickListener();
      return true
    },
    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate (timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = new Date(date);
      this.setPageDate(date);
      this.$emit('selected', new Date(date));
      this.$emit('input', new Date(date));
    },
    /**
     * Clear the selected date
     */
    clearDate: function clearDate () {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },
    /**
     * @param {Object} day
     */
    selectDate: function selectDate (day) {
      this.setDate(day.timestamp);
      if (!this.isInline) {
        this.close(true);
      }
    },
    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth (month) {
      var date = new Date(month.timestamp);
      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.setDate(date);
        if (!this.isInline) {
          this.close(true);
        }
      }
    },
    /**
     * @param {Object} year
     */
    selectYear: function selectYear (year) {
      var date = new Date(year.timestamp);
      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.setDate(date);
        if (!this.isInline) {
          this.close(true);
        }
      }
    },
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue (date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }
      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return
      }
      this.selectedDate = date;
      this.setPageDate(date);
    },
    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate (date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }
      this.pageTimestamp = (new Date(date)).setDate(1);
    },
    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate (date) {
      this.setDate(date.getTime());
    },
    /**
     * Set up an event listener for clicks outside the picker
     */
    addOutsideClickListener: function addOutsideClickListener () {
      var this$1 = this;

      if (!this.isInline) {
        setTimeout(function () {
          document.addEventListener('click', this$1.clickOutside, false);
        }, 100);
      }
    },
    /**
     * Close the calendar if clicked outside the datepicker
     * @param  {Event} event
     */
    clickOutside: function clickOutside (event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.resetDefaultPageDate();
        this.close(true);
      }
    },
    /**
     * Close all calendar layers
     * @param {Boolean} full - emit close event
     */
    close: function close (full) {
      this.showDayView = this.showMonthView = this.showYearView = false;
      if (!this.isInline) {
        if (full) {
          this.$emit('closed');
        }
        document.removeEventListener('click', this.clickOutside, false);
      }
    },
    /**
     * Initiate the component
     */
    init: function init () {
      if (this.value) {
        this.setValue(this.value);
      }
      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted () {
    this.init();
  }
}
// eslint-disable-next-line
;

/* harmony default export */ __webpack_exports__["default"] = (Datepicker);


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fade", mode: "out-in" } }, [
    _vm.modalsIsShowRegister
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
              staticClass: "modal__content modal__md"
            },
            [
              _c("h4", { staticClass: "modal__head" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("translation.register")) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal__body" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.name")))
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userName,
                              expression: "userName"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min:3",
                              expression: "'required|min:3'"
                            }
                          ],
                          staticClass: "input",
                          class: {
                            "is-invalid input__danger": _vm.errors.has("name")
                          },
                          attrs: {
                            type: "text",
                            id: "name",
                            name: "name",
                            placeholder: _vm.$t("translation.name")
                          },
                          domProps: { value: _vm.userName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.userName = $event.target.value
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
                                value: _vm.errors.has("name"),
                                expression: "errors.has('name')"
                              }
                            ],
                            staticClass: "invalid-feedback"
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("name")) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                        _c("label", { attrs: { for: "surname" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.surname")))
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userSurname,
                              expression: "userSurname"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min:3",
                              expression: "'required|min:3'"
                            }
                          ],
                          staticClass: "input",
                          class: {
                            "is-invalid input__danger": _vm.errors.has(
                              "surname"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "surname",
                            name: "surname",
                            placeholder: _vm.$t("translation.surname")
                          },
                          domProps: { value: _vm.userSurname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.userSurname = $event.target.value
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
                                value: _vm.errors.has("surname"),
                                expression: "errors.has('surname')"
                              }
                            ],
                            staticClass: "invalid-feedback"
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("surname")) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                        _c("label", { attrs: { for: "dateOfBirth" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.birthday")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: {
                              "is-invalid__date": _vm.errors.has("dateOfBirth")
                            }
                          },
                          [
                            _c("datepicker", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                "input-class": "input",
                                format: "yyyy-MM-dd",
                                "data-vv-name": "dateOfBirth",
                                "data-vv-value-path": "selectedDate",
                                initialView: "year",
                                id: "dateOfBirth",
                                placeholder: _vm.$t("translation.birthday")
                              },
                              model: {
                                value: _vm.userDateOfBirth,
                                callback: function($$v) {
                                  _vm.userDateOfBirth = $$v
                                },
                                expression: "userDateOfBirth"
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
                                    value: _vm.errors.has("dateOfBirth"),
                                    expression: "errors.has('dateOfBirth')"
                                  }
                                ],
                                staticClass: "invalid-feedback"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.errors.first("dateOfBirth")) +
                                    "\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.email")))
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
                              value: "required|email",
                              expression: "'required|email'"
                            }
                          ],
                          staticClass: "input",
                          class: {
                            "is-invalid input__danger": _vm.errors.has("email")
                          },
                          attrs: {
                            type: "text",
                            id: "email",
                            name: "email",
                            placeholder: _vm.$t("translation.email")
                          },
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
                              "\n                                " +
                                _vm._s(_vm.errors.first("email")) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mb-4" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.password")))
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
                              value: "required|min:8",
                              expression: "'required|min:8'"
                            }
                          ],
                          staticClass: "input",
                          class: {
                            "is-invalid input__danger": _vm.errors.has(
                              "password"
                            )
                          },
                          attrs: {
                            type: "password",
                            id: "password",
                            name: "password",
                            placeholder: _vm.$t("translation.password")
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
                              "\n                                " +
                                _vm._s(_vm.errors.first("password")) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mb-4" }, [
                        _c("label", { attrs: { for: "rePassword" } }, [
                          _vm._v(_vm._s(_vm.$t("translation.confirmPassword")))
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
                          staticClass: "input",
                          class: {
                            "is-invalid input__danger": _vm.errors.has(
                              "rePassword"
                            )
                          },
                          attrs: {
                            type: "password",
                            id: "rePassword",
                            name: "rePassword",
                            placeholder: _vm.$t("translation.confirmPassword")
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
                                value: _vm.errors.has("rePassword"),
                                expression: "errors.has('rePassword')"
                              }
                            ],
                            staticClass: "invalid-feedback"
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("rePassword")) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group mt-4 mb-4" }, [
                        _c(
                          "div",
                          {
                            class: {
                              "is-invalid__date": _vm.errors.has("photo")
                            }
                          },
                          [
                            _c("label", { attrs: { for: "image" } }, [
                              _vm._v(_vm._s(_vm.$t("translation.photo")))
                            ]),
                            _vm._v(" "),
                            _c("vue-base64-file-upload", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "v1",
                              attrs: {
                                accept: "image/png,image/jpeg",
                                "image-class":
                                  "image-circle image-circle__45 mt-3",
                                "input-class": "input",
                                "max-size": _vm.customImageMaxSize,
                                id: "image",
                                "data-vv-name": "photo",
                                "data-vv-value-path": "file",
                                placeholder: _vm.$t("translation.photo")
                              },
                              on: { file: _vm.onFile, load: _vm.onLoad }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("photo"),
                                    expression: "errors.has('photo')"
                                  }
                                ],
                                staticClass: "invalid-feedback"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.errors.first("photo")) +
                                    "\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn button-md button-accent button-center mb-4",
                      attrs: { type: "button" },
                      on: { click: _vm.register }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("translation.register")) +
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
    require("vue-hot-reload-api")      .rerender("data-v-0c43c885", module.exports)
  }
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Meta
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image meta data handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, Blob */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var hasblobSlice =
    typeof Blob !== 'undefined' &&
    (Blob.prototype.slice ||
      Blob.prototype.webkitSlice ||
      Blob.prototype.mozSlice)

  loadImage.blobSlice =
    hasblobSlice &&
    function () {
      var slice = this.slice || this.webkitSlice || this.mozSlice
      return slice.apply(this, arguments)
    }

  loadImage.metaDataParsers = {
    jpeg: {
      0xffe1: [] // APP1 marker
    }
  }

  // Parses image meta data and calls the callback with an object argument
  // with the following properties:
  // * imageHead: The complete image head as ArrayBuffer (Uint8Array for IE10)
  // The options arguments accepts an object and supports the following properties:
  // * maxMetaDataSize: Defines the maximum number of bytes to parse.
  // * disableImageHead: Disables creating the imageHead property.
  loadImage.parseMetaData = function (file, callback, options, data) {
    options = options || {}
    data = data || {}
    var that = this
    // 256 KiB should contain all EXIF/ICC/IPTC segments:
    var maxMetaDataSize = options.maxMetaDataSize || 262144
    var noMetaData = !(
      typeof DataView !== 'undefined' &&
      file &&
      file.size >= 12 &&
      file.type === 'image/jpeg' &&
      loadImage.blobSlice
    )
    if (
      noMetaData ||
      !loadImage.readFile(
        loadImage.blobSlice.call(file, 0, maxMetaDataSize),
        function (e) {
          if (e.target.error) {
            // FileReader error
            console.log(e.target.error)
            callback(data)
            return
          }
          // Note on endianness:
          // Since the marker and length bytes in JPEG files are always
          // stored in big endian order, we can leave the endian parameter
          // of the DataView methods undefined, defaulting to big endian.
          var buffer = e.target.result
          var dataView = new DataView(buffer)
          var offset = 2
          var maxOffset = dataView.byteLength - 4
          var headLength = offset
          var markerBytes
          var markerLength
          var parsers
          var i
          // Check for the JPEG marker (0xffd8):
          if (dataView.getUint16(0) === 0xffd8) {
            while (offset < maxOffset) {
              markerBytes = dataView.getUint16(offset)
              // Search for APPn (0xffeN) and COM (0xfffe) markers,
              // which contain application-specific meta-data like
              // Exif, ICC and IPTC data and text comments:
              if (
                (markerBytes >= 0xffe0 && markerBytes <= 0xffef) ||
                markerBytes === 0xfffe
              ) {
                // The marker bytes (2) are always followed by
                // the length bytes (2), indicating the length of the
                // marker segment, which includes the length bytes,
                // but not the marker bytes, so we add 2:
                markerLength = dataView.getUint16(offset + 2) + 2
                if (offset + markerLength > dataView.byteLength) {
                  console.log('Invalid meta data: Invalid segment size.')
                  break
                }
                parsers = loadImage.metaDataParsers.jpeg[markerBytes]
                if (parsers) {
                  for (i = 0; i < parsers.length; i += 1) {
                    parsers[i].call(
                      that,
                      dataView,
                      offset,
                      markerLength,
                      data,
                      options
                    )
                  }
                }
                offset += markerLength
                headLength = offset
              } else {
                // Not an APPn or COM marker, probably safe to
                // assume that this is the end of the meta data
                break
              }
            }
            // Meta length must be longer than JPEG marker (2)
            // plus APPn marker (2), followed by length bytes (2):
            if (!options.disableImageHead && headLength > 6) {
              if (buffer.slice) {
                data.imageHead = buffer.slice(0, headLength)
              } else {
                // Workaround for IE10, which does not yet
                // support ArrayBuffer.slice:
                data.imageHead = new Uint8Array(buffer).subarray(0, headLength)
              }
            }
          } else {
            console.log('Invalid JPEG file: Missing JPEG marker.')
          }
          callback(data)
        },
        'readAsArrayBuffer'
      )
    ) {
      callback(data)
    }
  }

  // Determines if meta data should be loaded automatically:
  loadImage.hasMetaOption = function (options) {
    return options && options.meta
  }

  var originalTransform = loadImage.transform
  loadImage.transform = function (img, options, callback, file, data) {
    if (loadImage.hasMetaOption(options)) {
      loadImage.parseMetaData(
        file,
        function (data) {
          originalTransform.call(loadImage, img, options, callback, file, data)
        },
        options,
        data
      )
    } else {
      originalTransform.apply(loadImage, arguments)
    }
  }
})


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(313)
/* template */
var __vue_template__ = __webpack_require__(314)
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(10);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _modals = __webpack_require__(44);

var _modals2 = _interopRequireDefault(_modals);

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

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
    mixins: [_modals2.default, _user2.default],
    methods: {
        hide: function hide() {
            this.modalsIsShowLogin = false;
            this.userEmail = null;
            this.userPassword = null;
        },
        login: function login() {
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

                                _context.prev = 4;
                                _context.next = 7;
                                return _this.$store.dispatch('user/login', {
                                    email: _this.userEmail,
                                    password: _this.userPassword
                                });

                            case 7:
                                window.Cookies.set('first_stage', 3);
                                _this.userFirstStage = 3;
                                _this.hide();
                                _context.next = 16;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](4);

                                _this.hide();
                                _this.$toast.error({
                                    title: _this.$t('translation.error'),
                                    message: _this.$t(_context.t0.data.message)
                                });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[4, 12]]);
            }))();
        },
        authenticate: function authenticate(provider) {
            this.$auth.authenticate(provider).then(function () {
                // Execute application logic after successful social authentication
            });
        }
    }
};

/***/ }),

/***/ 314:
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
                      _vm._v(_vm._s(_vm.$t("translation.email")))
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
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      staticClass: "input",
                      class: {
                        "is-invalid input__danger": _vm.errors.has("email")
                      },
                      attrs: {
                        type: "text",
                        id: "email",
                        name: "email",
                        placeholder: _vm.$t("translation.email")
                      },
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
                          "\n                        " +
                            _vm._s(_vm.errors.first("email")) +
                            "\n                    "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mb-4" }, [
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v(_vm._s(_vm.$t("translation.password")))
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
                          value: "required|min:8",
                          expression: "'required|min:8'"
                        }
                      ],
                      staticClass: "input",
                      class: {
                        "is-invalid input__danger": _vm.errors.has("password")
                      },
                      attrs: {
                        type: "password",
                        id: "password",
                        name: "password",
                        placeholder: _vm.$t("translation.password")
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
                          "\n                        " +
                            _vm._s(_vm.errors.first("password")) +
                            "\n                    "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn button-md button-accent button-center mb-4",
                      attrs: { type: "button" },
                      on: { click: _vm.login }
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
                    "a",
                    {
                      staticClass: "link",
                      attrs: { href: "javascript:" },
                      on: {
                        click: function($event) {
                          _vm.authenticate("facebook")
                        }
                      }
                    },
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(333), __esModule: true };

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Scaling
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var originalTransform = loadImage.transform

  loadImage.transform = function (img, options, callback, file, data) {
    originalTransform.call(
      loadImage,
      loadImage.scale(img, options, data),
      options,
      callback,
      file,
      data
    )
  }

  // Transform image coordinates, allows to override e.g.
  // the canvas orientation based on the orientation option,
  // gets canvas, options passed as arguments:
  loadImage.transformCoordinates = function () {}

  // Returns transformed options, allows to override e.g.
  // maxWidth, maxHeight and crop options based on the aspectRatio.
  // gets img, options passed as arguments:
  loadImage.getTransformedOptions = function (img, options) {
    var aspectRatio = options.aspectRatio
    var newOptions
    var i
    var width
    var height
    if (!aspectRatio) {
      return options
    }
    newOptions = {}
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        newOptions[i] = options[i]
      }
    }
    newOptions.crop = true
    width = img.naturalWidth || img.width
    height = img.naturalHeight || img.height
    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio
      newOptions.maxHeight = height
    } else {
      newOptions.maxWidth = width
      newOptions.maxHeight = width / aspectRatio
    }
    return newOptions
  }

  // Canvas render method, allows to implement a different rendering algorithm:
  loadImage.renderImageToCanvas = function (
    canvas,
    img,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    destX,
    destY,
    destWidth,
    destHeight
  ) {
    canvas
      .getContext('2d')
      .drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
      )
    return canvas
  }

  // Determines if the target image should be a canvas element:
  loadImage.hasCanvasOption = function (options) {
    return options.canvas || options.crop || !!options.aspectRatio
  }

  // Scales and/or crops the given image (img or canvas HTML element)
  // using the given options.
  // Returns a canvas object if the browser supports canvas
  // and the hasCanvasOption method returns true or a canvas
  // object is passed as image, else the scaled image:
  loadImage.scale = function (img, options, data) {
    options = options || {}
    var canvas = document.createElement('canvas')
    var useCanvas =
      img.getContext ||
      (loadImage.hasCanvasOption(options) && canvas.getContext)
    var width = img.naturalWidth || img.width
    var height = img.naturalHeight || img.height
    var destWidth = width
    var destHeight = height
    var maxWidth
    var maxHeight
    var minWidth
    var minHeight
    var sourceWidth
    var sourceHeight
    var sourceX
    var sourceY
    var pixelRatio
    var downsamplingRatio
    var tmp
    function scaleUp () {
      var scale = Math.max(
        (minWidth || destWidth) / destWidth,
        (minHeight || destHeight) / destHeight
      )
      if (scale > 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    function scaleDown () {
      var scale = Math.min(
        (maxWidth || destWidth) / destWidth,
        (maxHeight || destHeight) / destHeight
      )
      if (scale < 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    if (useCanvas) {
      options = loadImage.getTransformedOptions(img, options, data)
      sourceX = options.left || 0
      sourceY = options.top || 0
      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth
        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0)
      }
      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight
        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0)
      }
      destWidth = sourceWidth
      destHeight = sourceHeight
    }
    maxWidth = options.maxWidth
    maxHeight = options.maxHeight
    minWidth = options.minWidth
    minHeight = options.minHeight
    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth
      destHeight = maxHeight
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight
      if (tmp < 0) {
        sourceHeight = maxHeight * sourceWidth / maxWidth
        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2
        }
      } else if (tmp > 0) {
        sourceWidth = maxWidth * sourceHeight / maxHeight
        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth
        minHeight = maxHeight = maxHeight || minHeight
      }
      if (options.cover) {
        scaleDown()
        scaleUp()
      } else {
        scaleUp()
        scaleDown()
      }
    }
    if (useCanvas) {
      pixelRatio = options.pixelRatio
      if (pixelRatio > 1) {
        canvas.style.width = destWidth + 'px'
        canvas.style.height = destHeight + 'px'
        destWidth *= pixelRatio
        destHeight *= pixelRatio
        canvas.getContext('2d').scale(pixelRatio, pixelRatio)
      }
      downsamplingRatio = options.downsamplingRatio
      if (
        downsamplingRatio > 0 &&
        downsamplingRatio < 1 &&
        destWidth < sourceWidth &&
        destHeight < sourceHeight
      ) {
        while (sourceWidth * downsamplingRatio > destWidth) {
          canvas.width = sourceWidth * downsamplingRatio
          canvas.height = sourceHeight * downsamplingRatio
          loadImage.renderImageToCanvas(
            canvas,
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            0,
            0,
            canvas.width,
            canvas.height
          )
          sourceX = 0
          sourceY = 0
          sourceWidth = canvas.width
          sourceHeight = canvas.height
          img = document.createElement('canvas')
          img.width = sourceWidth
          img.height = sourceHeight
          loadImage.renderImageToCanvas(
            img,
            canvas,
            0,
            0,
            sourceWidth,
            sourceHeight,
            0,
            0,
            sourceWidth,
            sourceHeight
          )
        }
      }
      canvas.width = destWidth
      canvas.height = destHeight
      loadImage.transformCoordinates(canvas, options)
      return loadImage.renderImageToCanvas(
        canvas,
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        destWidth,
        destHeight
      )
    }
    img.width = destWidth
    img.height = destHeight
    return img
  }
})


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, Blob */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264), __webpack_require__(311)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-meta'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  loadImage.ExifMap = function () {
    return this
  }

  loadImage.ExifMap.prototype.map = {
    Orientation: 0x0112
  }

  loadImage.ExifMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]]
  }

  loadImage.getExifThumbnail = function (dataView, offset, length) {
    if (!length || offset + length > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid thumbnail data.')
      return
    }
    return loadImage.createObjectURL(
      new Blob([dataView.buffer.slice(offset, offset + length)])
    )
  }

  loadImage.exifTagTypes = {
    // byte, 8-bit unsigned int:
    1: {
      getValue: function (dataView, dataOffset) {
        return dataView.getUint8(dataOffset)
      },
      size: 1
    },
    // ascii, 8-bit byte:
    2: {
      getValue: function (dataView, dataOffset) {
        return String.fromCharCode(dataView.getUint8(dataOffset))
      },
      size: 1,
      ascii: true
    },
    // short, 16 bit int:
    3: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint16(dataOffset, littleEndian)
      },
      size: 2
    },
    // long, 32 bit int:
    4: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian)
      },
      size: 4
    },
    // rational = two long values, first is numerator, second is denominator:
    5: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return (
          dataView.getUint32(dataOffset, littleEndian) /
          dataView.getUint32(dataOffset + 4, littleEndian)
        )
      },
      size: 8
    },
    // slong, 32 bit signed int:
    9: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian)
      },
      size: 4
    },
    // srational, two slongs, first is numerator, second is denominator:
    10: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return (
          dataView.getInt32(dataOffset, littleEndian) /
          dataView.getInt32(dataOffset + 4, littleEndian)
        )
      },
      size: 8
    }
  }
  // undefined, 8-bit byte, value depending on field:
  loadImage.exifTagTypes[7] = loadImage.exifTagTypes[1]

  loadImage.getExifValue = function (
    dataView,
    tiffOffset,
    offset,
    type,
    length,
    littleEndian
  ) {
    var tagType = loadImage.exifTagTypes[type]
    var tagSize
    var dataOffset
    var values
    var i
    var str
    var c
    if (!tagType) {
      console.log('Invalid Exif data: Invalid tag type.')
      return
    }
    tagSize = tagType.size * length
    // Determine if the value is contained in the dataOffset bytes,
    // or if the value at the dataOffset is a pointer to the actual data:
    dataOffset =
      tagSize > 4
        ? tiffOffset + dataView.getUint32(offset + 8, littleEndian)
        : offset + 8
    if (dataOffset + tagSize > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid data offset.')
      return
    }
    if (length === 1) {
      return tagType.getValue(dataView, dataOffset, littleEndian)
    }
    values = []
    for (i = 0; i < length; i += 1) {
      values[i] = tagType.getValue(
        dataView,
        dataOffset + i * tagType.size,
        littleEndian
      )
    }
    if (tagType.ascii) {
      str = ''
      // Concatenate the chars:
      for (i = 0; i < values.length; i += 1) {
        c = values[i]
        // Ignore the terminating NULL byte(s):
        if (c === '\u0000') {
          break
        }
        str += c
      }
      return str
    }
    return values
  }

  loadImage.parseExifTag = function (
    dataView,
    tiffOffset,
    offset,
    littleEndian,
    data
  ) {
    var tag = dataView.getUint16(offset, littleEndian)
    data.exif[tag] = loadImage.getExifValue(
      dataView,
      tiffOffset,
      offset,
      dataView.getUint16(offset + 2, littleEndian), // tag type
      dataView.getUint32(offset + 4, littleEndian), // tag length
      littleEndian
    )
  }

  loadImage.parseExifTags = function (
    dataView,
    tiffOffset,
    dirOffset,
    littleEndian,
    data
  ) {
    var tagsNumber, dirEndOffset, i
    if (dirOffset + 6 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory offset.')
      return
    }
    tagsNumber = dataView.getUint16(dirOffset, littleEndian)
    dirEndOffset = dirOffset + 2 + 12 * tagsNumber
    if (dirEndOffset + 4 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory size.')
      return
    }
    for (i = 0; i < tagsNumber; i += 1) {
      this.parseExifTag(
        dataView,
        tiffOffset,
        dirOffset + 2 + 12 * i, // tag offset
        littleEndian,
        data
      )
    }
    // Return the offset to the next directory:
    return dataView.getUint32(dirEndOffset, littleEndian)
  }

  loadImage.parseExifData = function (dataView, offset, length, data, options) {
    if (options.disableExif) {
      return
    }
    var tiffOffset = offset + 10
    var littleEndian
    var dirOffset
    var thumbnailData
    // Check for the ASCII code for "Exif" (0x45786966):
    if (dataView.getUint32(offset + 4) !== 0x45786966) {
      // No Exif data, might be XMP data instead
      return
    }
    if (tiffOffset + 8 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid segment size.')
      return
    }
    // Check for the two null bytes:
    if (dataView.getUint16(offset + 8) !== 0x0000) {
      console.log('Invalid Exif data: Missing byte alignment offset.')
      return
    }
    // Check the byte alignment:
    switch (dataView.getUint16(tiffOffset)) {
      case 0x4949:
        littleEndian = true
        break
      case 0x4d4d:
        littleEndian = false
        break
      default:
        console.log('Invalid Exif data: Invalid byte alignment marker.')
        return
    }
    // Check for the TIFF tag marker (0x002A):
    if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002a) {
      console.log('Invalid Exif data: Missing TIFF marker.')
      return
    }
    // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
    dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian)
    // Create the exif object to store the tags:
    data.exif = new loadImage.ExifMap()
    // Parse the tags of the main image directory and retrieve the
    // offset to the next directory, usually the thumbnail directory:
    dirOffset = loadImage.parseExifTags(
      dataView,
      tiffOffset,
      tiffOffset + dirOffset,
      littleEndian,
      data
    )
    if (dirOffset && !options.disableExifThumbnail) {
      thumbnailData = { exif: {} }
      dirOffset = loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + dirOffset,
        littleEndian,
        thumbnailData
      )
      // Check for JPEG Thumbnail offset:
      if (thumbnailData.exif[0x0201]) {
        data.exif.Thumbnail = loadImage.getExifThumbnail(
          dataView,
          tiffOffset + thumbnailData.exif[0x0201],
          thumbnailData.exif[0x0202] // Thumbnail data length
        )
      }
    }
    // Check for Exif Sub IFD Pointer:
    if (data.exif[0x8769] && !options.disableExifSub) {
      loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + data.exif[0x8769], // directory offset
        littleEndian,
        data
      )
    }
    // Check for GPS Info IFD Pointer:
    if (data.exif[0x8825] && !options.disableExifGps) {
      loadImage.parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + data.exif[0x8825], // directory offset
        littleEndian,
        data
      )
    }
  }

  // Registers the Exif parser for the APP1 JPEG meta data segment:
  loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData)

  // Adds the following properties to the parseMetaData callback data:
  // * exif: The exif tags, parsed by the parseExifData method

  // Adds the following options to the parseMetaData method:
  // * disableExif: Disables Exif parsing.
  // * disableExifThumbnail: Disables parsing of the Exif Thumbnail.
  // * disableExifSub: Disables parsing of the Exif Sub IFD.
  // * disableExifGps: Disables parsing of the Exif GPS Info IFD.
})


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

var _modals = __webpack_require__(44);

var _modals2 = _interopRequireDefault(_modals);

var _Login = __webpack_require__(312);

var loginModal = _interopRequireWildcard(_Login);

var _Register = __webpack_require__(266);

var registerModal = _interopRequireWildcard(_Register);

var _Advice = __webpack_require__(328);

var adviceModal = _interopRequireWildcard(_Advice);

var _SelectVuz = __webpack_require__(331);

var SelectVuzModal = _interopRequireWildcard(_SelectVuz);

var _Puzzle = __webpack_require__(335);

var puzzle = _interopRequireWildcard(_Puzzle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        SelectVuzModal: SelectVuzModal,
        loginModal: loginModal,
        registerModal: registerModal,
        adviceModal: adviceModal,
        puzzle: puzzle
    },
    mixins: [_modals2.default, _user2.default],
    data: function data() {
        return {
            isShowMessage: false,
            isShowPhone: false
        };
    },
    metaInfo: function metaInfo() {
        return {
            title: this.$t('translation.room')
        };
    },
    beforeDestroy: function beforeDestroy() {
        this.userBackground = 'background-white';
    },
    mounted: function mounted() {
        this.userFirstStage = Number(window.Cookies.get('first_stage')) ? Number(window.Cookies.get('first_stage')) : 1;
        if (this.userFirstStage === 4) {
            this.userBackground = 'background-green';
            this.userSelectedUniversity = JSON.parse(window.Cookies.get('university'));
        } else {
            this.userBackground = 'background-blue';
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

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(329)
/* template */
var __vue_template__ = __webpack_require__(330)
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
Component.options.__file = "resources/assets/js/components/modals/Advice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43368eda", Component.options)
  } else {
    hotAPI.reload("data-v-43368eda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(10);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _modals = __webpack_require__(44);

var _modals2 = _interopRequireDefault(_modals);

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

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
//
//
//
//
//

exports.default = {
    mixins: [_modals2.default, _user2.default],
    methods: {
        hide: function hide() {
            this.modalsIsShowAdvice = false;
        },
        myChoice: function myChoice() {
            this.hide();
            this.modalsIsShowSelectVuz = true;
        }
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
                            return _this.$store.dispatch('user/getUniversities');

                        case 3:
                            _context.next = 8;
                            break;

                        case 5:
                            _context.prev = 5;
                            _context.t0 = _context['catch'](0);

                            _this.$toast.error({
                                title: _this.$t('translation.error'),
                                message: _this.$t(_context.t0.message)
                            });

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 5]]);
        }))();
    }
};

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fade", mode: "out-in" } }, [
    _vm.modalsIsShowAdvice
      ? _c("div", { staticClass: "modal__wrap modal__white" }, [
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
              staticClass: "modal__content modal__full-width"
            },
            [
              _c("div", { staticClass: "modal__body" }, [
                _c("div", { staticClass: "advice" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "d-table" }, [
                        _c("div", { staticClass: "media mx-auto" }, [
                          _c("img", { attrs: { src: "/images/advice1.png" } }),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body ml-3" }, [
                            _c("p", { staticClass: "accent-color mb-0" }, [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(_vm.$t("translation.galinaIvanovna"))
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                _vm._s(_vm.$t("translation.homeAdventures"))
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__angle mt-3" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__info" }, [
                          _c("p", { staticClass: "advice__text" }, [
                            _vm._v(_vm._s(_vm.$t("translation.galinaText")))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "advice__links" }, [
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.agree")) +
                                    " 10б\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.no")) +
                                    " 10б\n                                        "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "d-table mx-auto" }, [
                        _c("div", { staticClass: "media" }, [
                          _c("img", { attrs: { src: "/images/advice2.png" } }),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body ml-3" }, [
                            _c("p", { staticClass: "accent-color mb-0" }, [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.$t("translation.auntValya")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.$t("translation.relatives")))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__angle mt-3" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__info" }, [
                          _c("p", { staticClass: "advice__text" }, [
                            _vm._v(_vm._s(_vm.$t("translation.valyaText")))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "advice__links" }, [
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.agree")) +
                                    " 10б\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.no")) +
                                    " 10б\n                                        "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "d-table mx-auto" }, [
                        _c("div", { staticClass: "media" }, [
                          _c("img", { attrs: { src: "/images/advice3.png" } }),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body ml-3" }, [
                            _c("p", { staticClass: "accent-color mb-0" }, [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.$t("translation.oleg")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.$t("translation.classmate")))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__angle mt-3" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "advice__info" }, [
                          _c("p", { staticClass: "advice__text" }, [
                            _vm._v(_vm._s(_vm.$t("translation.olegText")))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "advice__links" }, [
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.agree")) +
                                    " 10б\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "link link__white advice__link",
                                attrs: { href: "javascript:" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("translation.no")) +
                                    " 10б\n                                        "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn button-md button-error mt-5 mx-auto",
                        attrs: { type: "button" },
                        on: { click: _vm.myChoice }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("translation.myLifeMyRules")) +
                            " (0б)\n                        "
                        )
                      ]
                    )
                  ])
                ])
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-43368eda", module.exports)
  }
}

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(332)
/* template */
var __vue_template__ = __webpack_require__(334)
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
Component.options.__file = "resources/assets/js/components/modals/SelectVuz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d726e8d", Component.options)
  } else {
    hotAPI.reload("data-v-2d726e8d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(322);

var _stringify2 = _interopRequireDefault(_stringify);

var _modals = __webpack_require__(44);

var _modals2 = _interopRequireDefault(_modals);

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

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
    mixins: [_modals2.default, _user2.default],
    data: function data() {
        return {};
    },

    methods: {
        hide: function hide() {
            this.modalsIsShowSelectVuz = false;
        },
        select: function select() {
            this.hide();
            window.Cookies.set('first_stage', 4);
            window.Cookies.set('university', (0, _stringify2.default)(this.userSelectedUniversity));
        }
    }
};

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fade", mode: "out-in" } }, [
    _vm.modalsIsShowSelectVuz
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
                    _vm._s(_vm.$t("translation.selectVuz")) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal__body" }, [
                _c(
                  "div",
                  { staticClass: "form-group mt-4 mb-4" },
                  [
                    _c("label", [_vm._v(_vm._s(_vm.$t("translation.vnz")))]),
                    _vm._v(" "),
                    _c("multiselect", {
                      staticClass: "input",
                      attrs: {
                        options: _vm.userUniversities,
                        searchable: true,
                        "show-labels": false,
                        label: "name",
                        "track-by": "name",
                        placeholder: _vm.$t("translation.selectFromList")
                      },
                      model: {
                        value: _vm.userSelectedUniversity,
                        callback: function($$v) {
                          _vm.userSelectedUniversity = $$v
                        },
                        expression: "userSelectedUniversity"
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
                          "\n                        " +
                            _vm._s(_vm.errors.first("email")) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group mt-4 mb-4" },
                  [
                    _c("label", [
                      _vm._v(_vm._s(_vm.$t("translation.faculty")))
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      staticClass: "input",
                      attrs: {
                        options: _vm.userUniversities,
                        searchable: true,
                        "show-labels": false,
                        label: "name",
                        "track-by": "name",
                        placeholder: _vm.$t("translation.selectFromList")
                      },
                      model: {
                        value: _vm.userSelectedUniversity,
                        callback: function($$v) {
                          _vm.userSelectedUniversity = $$v
                        },
                        expression: "userSelectedUniversity"
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
                          "\n                        " +
                            _vm._s(_vm.errors.first("email")) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group mt-4 mb-4" },
                  [
                    _c("label", [
                      _vm._v(_vm._s(_vm.$t("translation.speciality")))
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      staticClass: "input",
                      attrs: {
                        options: _vm.userUniversities,
                        searchable: true,
                        "show-labels": false,
                        label: "name",
                        "track-by": "name",
                        placeholder: _vm.$t("translation.selectFromList")
                      },
                      model: {
                        value: _vm.userSelectedUniversity,
                        callback: function($$v) {
                          _vm.userSelectedUniversity = $$v
                        },
                        expression: "userSelectedUniversity"
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
                          "\n                        " +
                            _vm._s(_vm.errors.first("email")) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn button-md button-accent button-center mb-4",
                    attrs: { type: "button" },
                    on: { click: _vm.select }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("translation.accept")) +
                        "\n                "
                    )
                  ]
                )
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-2d726e8d", module.exports)
  }
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(338)
/* template */
var __vue_template__ = __webpack_require__(360)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/plugins/puzzle/Puzzle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0918905e", Component.options)
  } else {
    hotAPI.reload("data-v-0918905e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("169f72ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0918905e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Puzzle.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0918905e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Puzzle.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  color: #368ba0;\n}\n#app {\n  font: 14px/20px sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n}\n#app header h1 {\n    font-weight: 100;\n    height: 80px;\n    line-height: 80px;\n    font-size: 38px;\n}\n#app footer {\n    color: #555;\n    margin-top: 60px;\n}\n", ""]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Board = __webpack_require__(339);

var _Board2 = _interopRequireDefault(_Board);

var _OptionsPane = __webpack_require__(350);

var _OptionsPane2 = _interopRequireDefault(_OptionsPane);

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

exports.default = {
    components: {
        Board: _Board2.default,
        OptionsPane: _OptionsPane2.default
    },

    data: function data() {
        return {
            playing: false
        };
    },


    methods: {
        start: function start() {
            var _$refs$board;

            this.playing = true;
            (_$refs$board = this.$refs.board).start.apply(_$refs$board, arguments);
        },
        restart: function restart() {
            this.playing = false;
            this.$refs.optionsPane.reset();
        }
    }
};

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(340)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(342)
/* template */
var __vue_template__ = __webpack_require__(349)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/plugins/puzzle/components/Board.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0681e10d", Component.options)
  } else {
    hotAPI.reload("data-v-0681e10d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(341);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("6e4f8ffe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0681e10d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Board.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0681e10d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Board.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n.frame-wrapper {\n  margin: 0 auto;\n  position: relative;\n  -webkit-box-shadow: 0 0 0px 10px;\n          box-shadow: 0 0 0px 10px;\n}\n.frame-wrapper .original {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n.frame-wrapper p.win {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-size: 40px;\n    margin: 0 0;\n    background: rgba(43, 181, 82, 0.7);\n    text-transform: uppercase;\n}\n.frame {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background: #b0d9f0;\n  background-size: cover;\n}\n.controls {\n  margin-top: 30px;\n}\n.controls a {\n    display: inline-block;\n    text-decoration: none;\n    padding: 6px 12px;\n    background: #f78403;\n    color: #fff;\n    border-radius: 3px;\n}\n.controls a.toggle-original {\n      background: #d05b88;\n}\n.controls a.restart {\n      background: #368ba0;\n}\n.controls a.shuffle {\n      background: #3ebb5c;\n}\n", ""]);

// exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(322);

var _stringify2 = _interopRequireDefault(_stringify);

var _lodash = __webpack_require__(343);

var _lodash2 = _interopRequireDefault(_lodash);

var _Tile = __webpack_require__(344);

var _Tile2 = _interopRequireDefault(_Tile);

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
//
//
//
//
//

/* eslint-disable */
var backupTiles = null;

exports.default = {
    components: { Tile: _Tile2.default },

    data: function data() {
        return {
            image: null,
            showingOriginal: false,
            size: {
                horizontal: 0,
                vertical: 0
            },
            tiles: [],
            tileSize: {
                width: 0,
                height: 0
            }
        };
    },


    computed: {
        frameSize: function frameSize() {
            return {
                width: this.tileSize.width * this.size.horizontal + 'px',
                height: this.tileSize.height * this.size.vertical + 'px'
            };
        },


        /**
         * The total number of tiles in the current board.
         * @return {Number}
         */
        totalTiles: function totalTiles() {
            return this.size.horizontal * this.size.vertical;
        },


        /**
         * Determine if the current board is valid (solved).
         * @return {boolean}
         */
        valid: function valid() {
            if (!this.tiles.length) {
                return false;
            }

            for (var i = 0; i < this.totalTiles; ++i) {
                if (this.tiles[i].styles.order !== this.tiles[i].position) {
                    return false;
                }
            }

            return true;
        }
    },

    methods: {
        start: function start(_ref) {
            var _this = this;

            var image = _ref.image,
                size = _ref.size;

            this.size = size;
            this.image = image;
            // detect the width and height of the frame
            var img = new Image();
            img.onload = function () {
                _this.tileSize.width = Math.floor(img.width / size.horizontal);
                _this.tileSize.height = Math.floor(img.height / size.vertical);
                _this.generateTiles();
                _this.shuffleTiles();
            };
            img.src = image;
        },


        /**
         * Generate the tiles for the current game.
         */
        generateTiles: function generateTiles() {
            this.tiles = [];
            for (var i = 0; i < this.totalTiles; ++i) {
                this.tiles.push({
                    styles: {
                        background: i === 0 ? 'transparent' : 'url(' + this.image + ')',
                        backgroundPositionX: '-' + i % this.size.horizontal * this.tileSize.width + 'px',
                        backgroundPositionY: '-' + Math.floor(i / this.size.horizontal) * this.tileSize.height + 'px',
                        width: this.tileSize.width + 'px',
                        height: this.tileSize.height + 'px',
                        order: i
                    },
                    position: i,
                    isEmpty: i === 0
                });
            }
        },


        /**
         * Shuffle the generated tiles.
         */
        shuffleTiles: function shuffleTiles() {
            var _this2 = this;

            var _loop = function _loop(i, j) {
                var emptyTile = _this2.tiles.find(function (t) {
                    return t.isEmpty;
                });
                var movableTiles = _this2.tiles.filter(function (t) {
                    return _this2.getAdjacentOrders(emptyTile).indexOf(t.styles.order) > -1;
                });
                _this2.switchTiles(emptyTile, (0, _lodash2.default)(movableTiles));
            };

            // To make sure the puzzle is solvable, we execute a series of random moves
            for (var i = 0, j = this.totalTiles * 5; i < j; ++i) {
                _loop(i, j);
            }

            // Make a backup for later reset
            backupTiles = (0, _stringify2.default)(this.tiles);
        },


        /**
         * Move a (movable) tile
         * @param  {Object} tile
         */
        moveTile: function moveTile(tile) {
            var _this3 = this;

            if (tile.isEmpty) {
                return;
            }

            // Find the 4 direct (non-diagonal) adjacent tiles and see if any of them is the empty tile
            var target = this.tiles.find(function (t) {
                return t.isEmpty && _this3.getAdjacentOrders(tile).indexOf(t.styles.order) > -1;
            });

            // If found the empty tile, just switch the flex order and we're good.
            target && this.switchTiles(target, tile);
        },


        /**
         * Switch two tiles.
         * @param  {Object} a First tile
         * @param  {Object} b Second tile
         */
        switchTiles: function switchTiles(a, b) {
            var _ref2 = [b.styles.order, a.styles.order];
            a.styles.order = _ref2[0];
            b.styles.order = _ref2[1];
        },


        /**
         * Get the four direct (non-diagonal) adjacent tiles' orders of a tile.
         * @param  {Object} tile
         * @return {Array.<Number>}
         */
        getAdjacentOrders: function getAdjacentOrders(tile) {
            var pos = tile.styles.order;
            return [pos % this.size.horizontal ? pos - 1 : null, (pos + 1) % this.size.horizontal ? pos + 1 : null, pos - this.size.horizontal, pos + this.size.horizontal];
        },


        /**
         * Reset the board.
         */
        reset: function reset() {
            this.tiles = JSON.parse(backupTiles);
        },


        /**
         * Restart the game.
         */
        restart: function restart() {
            this.$emit('restart');
        }
    }
    /* eslint-enable */

};

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeKeys = overArg(Object.keys, Object),
    nativeRandom = Math.random;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  var array = isArrayLike(collection) ? collection : values(collection),
      length = array.length;

  return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = sample;


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(345)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(347)
/* template */
var __vue_template__ = __webpack_require__(348)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/plugins/puzzle/components/Tile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d5c6452", Component.options)
  } else {
    hotAPI.reload("data-v-0d5c6452", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("481e941d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d5c6452\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tile.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d5c6452\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n.tile {\n  border: 1px solid #111;\n}\n.tile.empty {\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 10px inset;\n            box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 10px inset;\n}\n.tile.empty:hover {\n      border-color: #111;\n      cursor: default;\n}\n.tile:hover {\n    border-color: #f00;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    props: ['tile'],

    methods: {
        move: function move() {
            this.$emit('moving', this.tile);
        }
    }
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "tile",
    class: { empty: _vm.tile.isEmpty },
    style: _vm.tile.styles,
    on: { click: _vm.move }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d5c6452", module.exports)
  }
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "board" }, [
    _c("div", { staticClass: "frame-wrapper", style: _vm.frameSize }, [
      _vm.valid
        ? _c("p", { staticClass: "win" }, [_vm._v("You Win!")])
        : _vm._e(),
      _vm._v(" "),
      _vm.showingOriginal && _vm.image
        ? _c("div", {
            staticClass: "original",
            style: { background: "url(" + _vm.image + ")" },
            on: {
              click: function($event) {
                _vm.showingOriginal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "frame", style: _vm.frameSize },
        _vm._l(_vm.tiles, function(tile) {
          return _c("Tile", {
            key: tile.position,
            ref: "tiles",
            refInFor: true,
            attrs: { tile: tile },
            on: { moving: _vm.moveTile }
          })
        })
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "controls" }, [
      _c(
        "a",
        {
          staticClass: "toggle-original",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.showingOriginal = !_vm.showingOriginal
            }
          }
        },
        [_vm._v("\n            Toggle Original Image\n        ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "shuffle",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.shuffleTiles($event)
            }
          }
        },
        [_vm._v("Reshuffle")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "reset",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.reset($event)
            }
          }
        },
        [_vm._v("Reset")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "restart",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.restart($event)
            }
          }
        },
        [_vm._v("New Game")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0681e10d", module.exports)
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(351)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(353)
/* template */
var __vue_template__ = __webpack_require__(359)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cc76be6"
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
Component.options.__file = "resources/assets/js/plugins/puzzle/components/OptionsPane.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cc76be6", Component.options)
  } else {
    hotAPI.reload("data-v-1cc76be6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("b4d8f2c4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cc76be6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OptionsPane.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cc76be6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OptionsPane.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-1cc76be6] {\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\nlabel[for=file][data-v-1cc76be6] {\n  color: #368ba0;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 12px;\n}\ninput[type=number][data-v-1cc76be6] {\n  height: 24px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n}\ninput[type=file][data-v-1cc76be6] {\n  display: none;\n}\nbutton[data-v-1cc76be6] {\n  -webkit-appearance: none;\n  padding: 6px 12px;\n  background: #1ca76a;\n  color: #fff;\n  border-radius: 3px;\n  border: 0;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blueimpLoadImage = __webpack_require__(354);

var _blueimpLoadImage2 = _interopRequireDefault(_blueimpLoadImage);

var _image = __webpack_require__(358);

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

exports.default = {
    data: function data() {
        return {
            size: {
                horizontal: 3,
                vertical: 3
            }
        };
    },


    computed: {
        image: function image() {
            return _image.imageBase64;
        }
    },

    methods: {
        fileChanged: function fileChanged(e) {
            var _this = this;

            if (!e.target.files.length) {
                this.image = null;
                return;
            }

            (0, _blueimpLoadImage2.default)(e.target.files[0], function (canvas) {
                _this.image = canvas.toDataURL();
            }, {
                maxWidth: 600,
                maxHeight: 600,
                minWidth: 200,
                minHeight: 200,
                canvas: true
            });
        },


        /**
         * Start the game by emitting the event.
         */
        start: function start() {
            this.$emit('gameStart', {
                image: this.image,
                size: this.size
            });
        },


        /**
         * Reset the options.
         */
        reset: function reset() {
            this.image = null;
            document.querySelector('#optionsForm').reset();
        }
    }
};

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264)

__webpack_require__(323)
__webpack_require__(311)
__webpack_require__(355)
__webpack_require__(324)
__webpack_require__(356)
__webpack_require__(357)


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Fetch
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2017, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, fetch, Request */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264), __webpack_require__(311)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-meta'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  if (typeof fetch !== 'undefined' && typeof Request !== 'undefined') {
    loadImage.fetchBlob = function (url, callback, options) {
      if (loadImage.hasMetaOption(options)) {
        return fetch(new Request(url, options))
          .then(function (response) {
            return response.blob()
          })
          .then(callback)
          .catch(function (err) {
            console.log(err)
            callback()
          })
      } else {
        callback()
      }
    }
  }
})


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Exif tags mapping based on
 * https://github.com/jseidelin/exif-js
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264), __webpack_require__(324)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-exif'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  loadImage.ExifMap.prototype.tags = {
    // =================
    // TIFF tags (IFD0):
    // =================
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0xa005: 'InteroperabilityIFDPointer',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011c: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011a: 'XResolution',
    0x011b: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012d: 'TransferFunction',
    0x013e: 'WhitePoint',
    0x013f: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013b: 'Artist',
    0x8298: 'Copyright',
    // ==================
    // Exif Sub IFD tags:
    // ==================
    0x9000: 'ExifVersion', // EXIF version
    0xa000: 'FlashpixVersion', // Flashpix format version
    0xa001: 'ColorSpace', // Color space information tag
    0xa002: 'PixelXDimension', // Valid width of meaningful image
    0xa003: 'PixelYDimension', // Valid height of meaningful image
    0xa500: 'Gamma',
    0x9101: 'ComponentsConfiguration', // Information about channels
    0x9102: 'CompressedBitsPerPixel', // Compressed bits per pixel
    0x927c: 'MakerNote', // Any desired information written by the manufacturer
    0x9286: 'UserComment', // Comments by user
    0xa004: 'RelatedSoundFile', // Name of related sound file
    0x9003: 'DateTimeOriginal', // Date and time when the original image was generated
    0x9004: 'DateTimeDigitized', // Date and time when the image was stored digitally
    0x9290: 'SubSecTime', // Fractions of seconds for DateTime
    0x9291: 'SubSecTimeOriginal', // Fractions of seconds for DateTimeOriginal
    0x9292: 'SubSecTimeDigitized', // Fractions of seconds for DateTimeDigitized
    0x829a: 'ExposureTime', // Exposure time (in seconds)
    0x829d: 'FNumber',
    0x8822: 'ExposureProgram', // Exposure program
    0x8824: 'SpectralSensitivity', // Spectral sensitivity
    0x8827: 'PhotographicSensitivity', // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
    0x8828: 'OECF', // Optoelectric conversion factor
    0x8830: 'SensitivityType',
    0x8831: 'StandardOutputSensitivity',
    0x8832: 'RecommendedExposureIndex',
    0x8833: 'ISOSpeed',
    0x8834: 'ISOSpeedLatitudeyyy',
    0x8835: 'ISOSpeedLatitudezzz',
    0x9201: 'ShutterSpeedValue', // Shutter speed
    0x9202: 'ApertureValue', // Lens aperture
    0x9203: 'BrightnessValue', // Value of brightness
    0x9204: 'ExposureBias', // Exposure bias
    0x9205: 'MaxApertureValue', // Smallest F number of lens
    0x9206: 'SubjectDistance', // Distance to subject in meters
    0x9207: 'MeteringMode', // Metering mode
    0x9208: 'LightSource', // Kind of light source
    0x9209: 'Flash', // Flash status
    0x9214: 'SubjectArea', // Location and area of main subject
    0x920a: 'FocalLength', // Focal length of the lens in mm
    0xa20b: 'FlashEnergy', // Strobe energy in BCPS
    0xa20c: 'SpatialFrequencyResponse',
    0xa20e: 'FocalPlaneXResolution', // Number of pixels in width direction per FPRUnit
    0xa20f: 'FocalPlaneYResolution', // Number of pixels in height direction per FPRUnit
    0xa210: 'FocalPlaneResolutionUnit', // Unit for measuring the focal plane resolution
    0xa214: 'SubjectLocation', // Location of subject in image
    0xa215: 'ExposureIndex', // Exposure index selected on camera
    0xa217: 'SensingMethod', // Image sensor type
    0xa300: 'FileSource', // Image source (3 == DSC)
    0xa301: 'SceneType', // Scene type (1 == directly photographed)
    0xa302: 'CFAPattern', // Color filter array geometric pattern
    0xa401: 'CustomRendered', // Special processing
    0xa402: 'ExposureMode', // Exposure mode
    0xa403: 'WhiteBalance', // 1 = auto white balance, 2 = manual
    0xa404: 'DigitalZoomRatio', // Digital zoom ratio
    0xa405: 'FocalLengthIn35mmFilm',
    0xa406: 'SceneCaptureType', // Type of scene
    0xa407: 'GainControl', // Degree of overall image gain adjustment
    0xa408: 'Contrast', // Direction of contrast processing applied by camera
    0xa409: 'Saturation', // Direction of saturation processing applied by camera
    0xa40a: 'Sharpness', // Direction of sharpness processing applied by camera
    0xa40b: 'DeviceSettingDescription',
    0xa40c: 'SubjectDistanceRange', // Distance to subject
    0xa420: 'ImageUniqueID', // Identifier assigned uniquely to each image
    0xa430: 'CameraOwnerName',
    0xa431: 'BodySerialNumber',
    0xa432: 'LensSpecification',
    0xa433: 'LensMake',
    0xa434: 'LensModel',
    0xa435: 'LensSerialNumber',
    // ==============
    // GPS Info tags:
    // ==============
    0x0000: 'GPSVersionID',
    0x0001: 'GPSLatitudeRef',
    0x0002: 'GPSLatitude',
    0x0003: 'GPSLongitudeRef',
    0x0004: 'GPSLongitude',
    0x0005: 'GPSAltitudeRef',
    0x0006: 'GPSAltitude',
    0x0007: 'GPSTimeStamp',
    0x0008: 'GPSSatellites',
    0x0009: 'GPSStatus',
    0x000a: 'GPSMeasureMode',
    0x000b: 'GPSDOP',
    0x000c: 'GPSSpeedRef',
    0x000d: 'GPSSpeed',
    0x000e: 'GPSTrackRef',
    0x000f: 'GPSTrack',
    0x0010: 'GPSImgDirectionRef',
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: 'GPSDestLatitudeRef',
    0x0014: 'GPSDestLatitude',
    0x0015: 'GPSDestLongitudeRef',
    0x0016: 'GPSDestLongitude',
    0x0017: 'GPSDestBearingRef',
    0x0018: 'GPSDestBearing',
    0x0019: 'GPSDestDistanceRef',
    0x001a: 'GPSDestDistance',
    0x001b: 'GPSProcessingMethod',
    0x001c: 'GPSAreaInformation',
    0x001d: 'GPSDateStamp',
    0x001e: 'GPSDifferential',
    0x001f: 'GPSHPositioningError'
  }

  loadImage.ExifMap.prototype.stringValues = {
    ExposureProgram: {
      0: 'Undefined',
      1: 'Manual',
      2: 'Normal program',
      3: 'Aperture priority',
      4: 'Shutter priority',
      5: 'Creative program',
      6: 'Action program',
      7: 'Portrait mode',
      8: 'Landscape mode'
    },
    MeteringMode: {
      0: 'Unknown',
      1: 'Average',
      2: 'CenterWeightedAverage',
      3: 'Spot',
      4: 'MultiSpot',
      5: 'Pattern',
      6: 'Partial',
      255: 'Other'
    },
    LightSource: {
      0: 'Unknown',
      1: 'Daylight',
      2: 'Fluorescent',
      3: 'Tungsten (incandescent light)',
      4: 'Flash',
      9: 'Fine weather',
      10: 'Cloudy weather',
      11: 'Shade',
      12: 'Daylight fluorescent (D 5700 - 7100K)',
      13: 'Day white fluorescent (N 4600 - 5400K)',
      14: 'Cool white fluorescent (W 3900 - 4500K)',
      15: 'White fluorescent (WW 3200 - 3700K)',
      17: 'Standard light A',
      18: 'Standard light B',
      19: 'Standard light C',
      20: 'D55',
      21: 'D65',
      22: 'D75',
      23: 'D50',
      24: 'ISO studio tungsten',
      255: 'Other'
    },
    Flash: {
      0x0000: 'Flash did not fire',
      0x0001: 'Flash fired',
      0x0005: 'Strobe return light not detected',
      0x0007: 'Strobe return light detected',
      0x0009: 'Flash fired, compulsory flash mode',
      0x000d: 'Flash fired, compulsory flash mode, return light not detected',
      0x000f: 'Flash fired, compulsory flash mode, return light detected',
      0x0010: 'Flash did not fire, compulsory flash mode',
      0x0018: 'Flash did not fire, auto mode',
      0x0019: 'Flash fired, auto mode',
      0x001d: 'Flash fired, auto mode, return light not detected',
      0x001f: 'Flash fired, auto mode, return light detected',
      0x0020: 'No flash function',
      0x0041: 'Flash fired, red-eye reduction mode',
      0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
      0x0047: 'Flash fired, red-eye reduction mode, return light detected',
      0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
      0x004d: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
      0x004f: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
      0x0059: 'Flash fired, auto mode, red-eye reduction mode',
      0x005d: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
      0x005f: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    },
    SensingMethod: {
      1: 'Undefined',
      2: 'One-chip color area sensor',
      3: 'Two-chip color area sensor',
      4: 'Three-chip color area sensor',
      5: 'Color sequential area sensor',
      7: 'Trilinear sensor',
      8: 'Color sequential linear sensor'
    },
    SceneCaptureType: {
      0: 'Standard',
      1: 'Landscape',
      2: 'Portrait',
      3: 'Night scene'
    },
    SceneType: {
      1: 'Directly photographed'
    },
    CustomRendered: {
      0: 'Normal process',
      1: 'Custom process'
    },
    WhiteBalance: {
      0: 'Auto white balance',
      1: 'Manual white balance'
    },
    GainControl: {
      0: 'None',
      1: 'Low gain up',
      2: 'High gain up',
      3: 'Low gain down',
      4: 'High gain down'
    },
    Contrast: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    Saturation: {
      0: 'Normal',
      1: 'Low saturation',
      2: 'High saturation'
    },
    Sharpness: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    SubjectDistanceRange: {
      0: 'Unknown',
      1: 'Macro',
      2: 'Close view',
      3: 'Distant view'
    },
    FileSource: {
      3: 'DSC'
    },
    ComponentsConfiguration: {
      0: '',
      1: 'Y',
      2: 'Cb',
      3: 'Cr',
      4: 'R',
      5: 'G',
      6: 'B'
    },
    Orientation: {
      1: 'top-left',
      2: 'top-right',
      3: 'bottom-right',
      4: 'bottom-left',
      5: 'left-top',
      6: 'right-top',
      7: 'right-bottom',
      8: 'left-bottom'
    }
  }

  loadImage.ExifMap.prototype.getText = function (id) {
    var value = this.get(id)
    switch (id) {
      case 'LightSource':
      case 'Flash':
      case 'MeteringMode':
      case 'ExposureProgram':
      case 'SensingMethod':
      case 'SceneCaptureType':
      case 'SceneType':
      case 'CustomRendered':
      case 'WhiteBalance':
      case 'GainControl':
      case 'Contrast':
      case 'Saturation':
      case 'Sharpness':
      case 'SubjectDistanceRange':
      case 'FileSource':
      case 'Orientation':
        return this.stringValues[id][value]
      case 'ExifVersion':
      case 'FlashpixVersion':
        if (!value) return
        return String.fromCharCode(value[0], value[1], value[2], value[3])
      case 'ComponentsConfiguration':
        if (!value) return
        return (
          this.stringValues[id][value[0]] +
          this.stringValues[id][value[1]] +
          this.stringValues[id][value[2]] +
          this.stringValues[id][value[3]]
        )
      case 'GPSVersionID':
        if (!value) return
        return value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3]
    }
    return String(value)
  }
  ;(function (exifMapPrototype) {
    var tags = exifMapPrototype.tags
    var map = exifMapPrototype.map
    var prop
    // Map the tag names to tags:
    for (prop in tags) {
      if (tags.hasOwnProperty(prop)) {
        map[tags[prop]] = prop
      }
    }
  })(loadImage.ExifMap.prototype)

  loadImage.ExifMap.prototype.getAll = function () {
    var map = {}
    var prop
    var id
    for (prop in this) {
      if (this.hasOwnProperty(prop)) {
        id = this.tags[prop]
        if (id) {
          map[id] = this.getText(id)
        }
      }
    }
    return map
  }
})


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Orientation
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(264), __webpack_require__(323), __webpack_require__(311)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(
      require('./load-image'),
      require('./load-image-scale'),
      require('./load-image-meta')
    )
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var originalHasCanvasOption = loadImage.hasCanvasOption
  var originalHasMetaOption = loadImage.hasMetaOption
  var originalTransformCoordinates = loadImage.transformCoordinates
  var originalGetTransformedOptions = loadImage.getTransformedOptions

  // Determines if the target image should be a canvas element:
  loadImage.hasCanvasOption = function (options) {
    return (
      !!options.orientation || originalHasCanvasOption.call(loadImage, options)
    )
  }

  // Determines if meta data should be loaded automatically:
  loadImage.hasMetaOption = function (options) {
    return (
      (options && options.orientation === true) ||
      originalHasMetaOption.call(loadImage, options)
    )
  }

  // Transform image orientation based on
  // the given EXIF orientation option:
  loadImage.transformCoordinates = function (canvas, options) {
    originalTransformCoordinates.call(loadImage, canvas, options)
    var ctx = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height
    var styleWidth = canvas.style.width
    var styleHeight = canvas.style.height
    var orientation = options.orientation
    if (!orientation || orientation > 8) {
      return
    }
    if (orientation > 4) {
      canvas.width = height
      canvas.height = width
      canvas.style.width = styleHeight
      canvas.style.height = styleWidth
    }
    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        break
      case 3:
        // 180° rotate left
        ctx.translate(width, height)
        ctx.rotate(Math.PI)
        break
      case 4:
        // vertical flip
        ctx.translate(0, height)
        ctx.scale(1, -1)
        break
      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.scale(1, -1)
        break
      case 6:
        // 90° rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(0, -height)
        break
      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(width, -height)
        ctx.scale(-1, 1)
        break
      case 8:
        // 90° rotate left
        ctx.rotate(-0.5 * Math.PI)
        ctx.translate(-width, 0)
        break
    }
  }

  // Transforms coordinate and dimension options
  // based on the given orientation option:
  loadImage.getTransformedOptions = function (img, opts, data) {
    var options = originalGetTransformedOptions.call(loadImage, img, opts)
    var orientation = options.orientation
    var newOptions
    var i
    if (orientation === true && data && data.exif) {
      orientation = data.exif.get('Orientation')
    }
    if (!orientation || orientation > 8 || orientation === 1) {
      return options
    }
    newOptions = {}
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        newOptions[i] = options[i]
      }
    }
    newOptions.orientation = orientation
    switch (orientation) {
      case 2:
        // horizontal flip
        newOptions.left = options.right
        newOptions.right = options.left
        break
      case 3:
        // 180° rotate left
        newOptions.left = options.right
        newOptions.top = options.bottom
        newOptions.right = options.left
        newOptions.bottom = options.top
        break
      case 4:
        // vertical flip
        newOptions.top = options.bottom
        newOptions.bottom = options.top
        break
      case 5:
        // vertical flip + 90 rotate right
        newOptions.left = options.top
        newOptions.top = options.left
        newOptions.right = options.bottom
        newOptions.bottom = options.right
        break
      case 6:
        // 90° rotate right
        newOptions.left = options.top
        newOptions.top = options.right
        newOptions.right = options.bottom
        newOptions.bottom = options.left
        break
      case 7:
        // horizontal flip + 90 rotate right
        newOptions.left = options.bottom
        newOptions.top = options.right
        newOptions.right = options.top
        newOptions.bottom = options.left
        break
      case 8:
        // 90° rotate left
        newOptions.left = options.bottom
        newOptions.top = options.left
        newOptions.right = options.top
        newOptions.bottom = options.right
        break
    }
    if (newOptions.orientation > 4) {
      newOptions.maxWidth = options.maxHeight
      newOptions.maxHeight = options.maxWidth
      newOptions.minWidth = options.minHeight
      newOptions.minHeight = options.minWidth
      newOptions.sourceWidth = options.sourceHeight
      newOptions.sourceHeight = options.sourceWidth
    }
    return newOptions
  }
})


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var imageBase64 = exports.imageBase64 = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxOTEwNUIxNEEwQjExRTg5MEMyRDM3NUJDNDk3OENFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxOTEwNUIyNEEwQjExRTg5MEMyRDM3NUJDNDk3OENFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjE5MTA1QUY0QTBCMTFFODkwQzJEMzc1QkM0OTc4Q0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjE5MTA1QjA0QTBCMTFFODkwQzJEMzc1QkM0OTc4Q0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRy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';

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "optionsForm" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.start($event)
        }
      }
    },
    [
      _vm.image ? _c("img", { attrs: { src: _vm.image } }) : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _c("div", [
          _vm._v("\n            Board size:\n            "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.size.horizontal,
                expression: "size.horizontal",
                modifiers: { number: true }
              }
            ],
            attrs: { type: "number", name: "width", min: "2", max: "10" },
            domProps: { value: _vm.size.horizontal },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.size, "horizontal", _vm._n($event.target.value))
              },
              blur: function($event) {
                _vm.$forceUpdate()
              }
            }
          }),
          _vm._v("\n            ×\n            "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.size.vertical,
                expression: "size.vertical",
                modifiers: { number: true }
              }
            ],
            attrs: { type: "number", name: "height", min: "2", max: "10" },
            domProps: { value: _vm.size.vertical },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.size, "vertical", _vm._n($event.target.value))
              },
              blur: function($event) {
                _vm.$forceUpdate()
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.image ? _c("button", [_vm._v("Start")]) : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cc76be6", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("Board", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.playing,
            expression: "playing"
          }
        ],
        ref: "board",
        on: { restart: _vm.restart }
      }),
      _vm._v(" "),
      _c("OptionsPane", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.playing,
            expression: "!playing"
          }
        ],
        ref: "optionsPane",
        on: { gameStart: _vm.start }
      }),
      _vm._v(" "),
      _vm._m(1)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [_c("h1", [_vm._v("Slider Puzzle")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _vm._v("\n        Built with "),
      _c("a", { attrs: { href: "https://vuejs.org" } }, [_vm._v("Vue")]),
      _vm._v(" •\n        "),
      _c("a", { attrs: { href: "https://github.com/phanan/slider-puzzle" } }, [
        _vm._v("GitHub")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0918905e", module.exports)
  }
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "room" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-9 col-sm-8" }, [
            _vm.userFirstStage !== 4 && _vm.userFirstStage !== 5
              ? _c("div", { staticClass: "things" })
              : _vm._e(),
            _vm._v(" "),
            _vm.userFirstStage === 4
              ? _c("div", { staticClass: "room__content" }, [
                  _c("div", { staticClass: "university__wrapper" }, [
                    _c(
                      "div",
                      {
                        staticClass: "university__header",
                        style: {
                          background: _vm.userUser.image
                            ? "url(" + _vm.userUser.image.source + ")"
                            : "white"
                        }
                      },
                      [
                        _c("div", { staticClass: "university__short-info" }, [
                          _c("div", { staticClass: "media" }, [
                            _vm.userUser.image
                              ? _c("img", {
                                  staticClass:
                                    "image-circle image-circle__60 mr-4",
                                  attrs: { src: _vm.userUser.image.source }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "media-body dark-color mt-1" },
                              [
                                _c("strong", [
                                  _c("h4", [
                                    _vm._v(
                                      _vm._s(_vm.userSelectedUniversity.name)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass: "fa fa-map-marker",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.userSelectedUniversity.address)
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "link link__accent-dark",
                                    attrs: { href: "#map" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("translation.watchMap")) +
                                        "\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn button-md button-transparent d-block mt-4",
                                    attrs: { type: "button" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("translation.goToSite")) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "university__info" }, [
                      _c("div", { staticClass: "col" }, [
                        _vm.userSelectedUniversity.description
                          ? _c("p", [
                              _vm._v(
                                _vm._s(_vm.userSelectedUniversity.description)
                              )
                            ])
                          : _c("p", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "translation.emptyUniversityDescription"
                                  )
                                )
                              )
                            ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "university__map",
                        attrs: { name: "map" }
                      },
                      [
                        _c(
                          "GmapMap",
                          {
                            staticStyle: { width: "100%", height: "100%" },
                            attrs: {
                              center: _vm.userSelectedUniversity.position,
                              zoom: 17
                            }
                          },
                          [
                            _c("GmapMarker", {
                              attrs: {
                                position: _vm.userSelectedUniversity.position,
                                clickable: true,
                                draggable: true
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.userFirstStage === 5
              ? _c("div", { staticClass: "room__content" }, [
                  _c(
                    "div",
                    { staticClass: "puzzle__wrapper" },
                    [_c("puzzle")],
                    1
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 col-sm-4" }, [
            _c("p", { staticClass: "pull-right" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("translation.stage")) +
                  ":\n                    "
              ),
              _c("span", { staticClass: "accent-color" }, [
                _c("strong", [
                  _vm._v(_vm._s(_vm.$t("translation.homeAdventures")))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("img", {
              staticClass: "w-100 clearfix mb-3",
              attrs: { src: "/images/calendar1.png" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "pull-right mb-1" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("translation.scores")) +
                  ":\n                    "
              ),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "pull-right" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("translation.passingTime")) +
                  ":\n                    "
              ),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "phone clearfix",
                class: { phone__show: _vm.isShowPhone },
                on: {
                  click: function($event) {
                    _vm.isShowPhone = true
                  }
                }
              },
              [
                !_vm.isShowMessage
                  ? _c("div", {
                      staticClass: "message__new-message",
                      attrs: { disabled: !_vm.isShowPhone },
                      on: {
                        click: function($event) {
                          _vm.isShowMessage = true
                        }
                      }
                    })
                  : _vm.isShowMessage
                    ? [
                        _c("p", { staticClass: "message__name" }, [
                          _vm._v(_vm._s(_vm.$t("translation.ann")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "message__ann" },
                          [
                            _vm.userFirstStage === 1
                              ? [
                                  _c("div", { staticClass: "message__angle" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "message__quote" }, [
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("translation.annHello"))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "link link__white pull-right mr-4",
                                        attrs: { href: "javascript:" },
                                        on: {
                                          click: function($event) {
                                            _vm.modalsIsShowRegister = true
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("translation.next")) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.userFirstStage === 2
                              ? [
                                  _c("div", { staticClass: "message__angle" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "message__quote" }, [
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("translation.annRegister")
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "link link__white pull-right mr-4",
                                        attrs: { href: "javascript:" },
                                        on: {
                                          click: function($event) {
                                            _vm.modalsIsShowLogin = true
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$t("translation.login")
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "link link__white pull-right mr-4",
                                        attrs: { href: "javascript:" },
                                        on: {
                                          click: function($event) {
                                            _vm.modalsIsShowRegister = true
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$t("translation.register")
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.userFirstStage === 3
                              ? [
                                  _c("div", { staticClass: "message__angle" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "message__quote" }, [
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("translation.annAdvice"))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "link link__white pull-right mr-4",
                                        attrs: { href: "javascript:" },
                                        on: {
                                          click: function($event) {
                                            _vm.modalsIsShowAdvice = true
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("translation.next")) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.userFirstStage === 4
                              ? [
                                  _c("div", { staticClass: "message__angle" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "message__quote" }, [
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("translation.annAdvice"))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "link link__white pull-right mr-4",
                                        attrs: { href: "javascript:" },
                                        on: {
                                          click: function($event) {
                                            _vm.modalsIsShowAdvice = true
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("translation.next")) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    : _vm._e()
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("login-modal"),
      _vm._v(" "),
      _c("register-modal"),
      _vm._v(" "),
      _c("advice-modal"),
      _vm._v(" "),
      _c("select-vuz-modal")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "accent-color" }, [
      _c("strong", [_vm._v("0 б")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "accent-color" }, [
      _c("strong", [_vm._v("00:32")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56b42d18", module.exports)
  }
}

/***/ })

});