define(["require", "exports", "custom/helpers", "custom/localization"], function (require, exports, helpers_1, localization_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseProvider = /** @class */ (function () {
        function BaseProvider() {
            this.isLoaded = false;
            this.sdkUrl = null;
            this.config = null;
            this.notification = helpers_1.getInjectorService('Notification');
            this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.regexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
        }
        /**
         *
         * @return {string|null}
         */
        BaseProvider.prototype.getEmail = function () {
            return prompt(localization_1.default.getLocPath('register.t_enter_email'));
        };
        /**
         *
         * @return {string|null}
         */
        BaseProvider.prototype.getPhone = function () {
            return prompt(localization_1.default.getLocPath('register.t_phone_enter'));
        };
        /**
         *
         * @return {any}
         */
        BaseProvider.prototype.checkUserInputs = function () {
            var email = this.getEmail();
            var phone = this.getPhone();
            var validEmail = this.validateEmail(email);
            var validPhone = this.validatePhone(phone);
            if (!validEmail)
                this.notification.error(localization_1.default.getLocPath('auth.invalid_email'));
            if (!validPhone)
                this.notification.error(localization_1.default.getLocPath('auth.invalid_phone'));
            if (validEmail && validPhone) {
                return { email: email, phone: phone };
            }
            else {
                return false;
            }
        };
        /**
         *
         * @param {string} phone
         * @return {boolean}
         */
        BaseProvider.prototype.validatePhone = function (phone) {
            return this.regexPhone.test(phone);
        };
        /**
         *
         * @param {string} email
         * @return {boolean}
         */
        BaseProvider.prototype.validateEmail = function (email) {
            return this.regexEmail.test(email);
        };
        /**
         *
         * @param {Function} fn
         */
        BaseProvider.prototype.load = function (fn) {
            var _this = this;
            if (this.isLoaded) {
                fn(this);
            }
            else {
                helpers_1.loadScript(this.sdkUrl, function () {
                    _this.init(fn);
                }, true);
            }
        };
        /**
         *
         * @param {string} message
         */
        BaseProvider.prototype.error = function (message) {
            this.notification.error(message);
        };
        /**
         *
         * @param callback
         */
        BaseProvider.prototype.auth = function (callback) {
        };
        /**
         *
         */
        BaseProvider.prototype.init = function (fn) {
        };
        return BaseProvider;
    }());
    exports.default = BaseProvider;
});
