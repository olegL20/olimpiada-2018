var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./base", "custom/localization"], function (require, exports, base_1, localization_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FacebookProvider = /** @class */ (function (_super) {
        __extends(FacebookProvider, _super);
        function FacebookProvider() {
            var _this = _super.call(this) || this;
            _this.sdkUrl = 'https://connect.facebook.net/en_US/sdk.js';
            return _this;
        }
        /**
         *
         * @param {object} config
         * @return {FacebookProvider}
         */
        FacebookProvider.prototype.setConfig = function (config) {
            this.config = config;
            return this;
        };
        /**
         *
         * @param {Function} callback
         */
        FacebookProvider.prototype.init = function (callback) {
            FB.init({
                appId: this.config.client_id,
                cookie: true,
                xfbml: true,
                version: 'v2.8' // use graph api version 2.8
            });
            this.isLoaded = true;
            callback(this);
        };
        /**
         *
         * @param {Function} callback
         */
        FacebookProvider.prototype.auth = function (callback) {
            var _this = this;
            FB.login(function (response) {
                if (response.authResponse) {
                    FB.api('/me', { fields: 'id,name,email,first_name,last_name' }, function (me) {
                        var user = me;
                        //let data = this.checkUserInputs();
                        //if (data) {
                        // user = angular.extend(user, data);
                        callback(response, _this.formatUser(user));
                        // }
                    });
                }
                else {
                    _this.error(localization_1.default.getLocPath('auth.cancel_social_auth'));
                }
            }, { scope: 'email' });
        };
        /**
         *
         * @param profile
         * @return {{id, fullname, name: *, lastname: *, email: (*|null|manageEmailShare|Document.regUser.email|Document.regRest.email|Document.reg.email), image: string}}
         */
        FacebookProvider.prototype.formatUser = function (profile) {
            return {
                //phone: profile.phone,
                id: profile.id,
                fullname: profile.name,
                name: profile.first_name,
                lastname: profile.last_name,
                email: profile.email,
                image: "http://graph.facebook.com/" + profile.id + "/picture?type=normal"
            };
        };
        return FacebookProvider;
    }(base_1.default));
    exports.default = FacebookProvider;
});
