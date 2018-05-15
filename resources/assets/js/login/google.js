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
    var GoogleProvider = /** @class */ (function (_super) {
        __extends(GoogleProvider, _super);
        function GoogleProvider() {
            var _this = _super.call(this) || this;
            _this.sdkUrl = 'https://apis.google.com/js/platform.js';
            return _this;
        }
        /**
         *
         * @param {object} config
         * @return {GoogleProvider}
         */
        GoogleProvider.prototype.setConfig = function (config) {
            this.config = config;
            return this;
        };
        /**
         *
         * @param {Function} callback
         */
        GoogleProvider.prototype.init = function (callback) {
            var _this = this;
            gapi.load('client:auth2', function () {
                gapi.client.init({
                    apiKey: _this.config.apiKey,
                    clientId: _this.config.client_id,
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
                    fetch_basic_profile: true
                }).then(function () {
                    _this.isLoaded = true;
                    callback(_this);
                });
            });
        };
        /**
         *
         * @param {Function} callback
         */
        GoogleProvider.prototype.auth = function (callback) {
            var _this = this;
            var instance = gapi.auth2.getAuthInstance();
            instance.signIn().then(function () {
                callback(instance, _this.formatUser(instance.currentUser.get().getBasicProfile()));
            }, function () {
                _this.error(localization_1.default.getLocPath('auth.cancel_social_auth'));
            });
            /*let user = instance.currentUser.get().getBasicProfile();

             const phone = this.getPhone();

             const validationPhone = this.validatePhone(phone);

             if (!validationPhone)
             this.notification.error(Loc.getLocPath('auth.invalid_phone'));
             else {
             user.phone = phone;
             }

             callback(instance, this.formatUser(user));*/
        };
        /**
         *
         * @param profile
         * @return {{id: *, fullname: string, name: *, lastname: *, email: *, image: *}}
         */
        GoogleProvider.prototype.formatUser = function (profile) {
            return {
                //phone: profile.phone,
                id: profile.getId(),
                fullname: profile.getName(),
                name: profile.getGivenName(),
                lastname: profile.getFamilyName(),
                email: profile.getEmail(),
                image: profile.getImageUrl()
            };
        };
        return GoogleProvider;
    }(base_1.default));
    exports.default = GoogleProvider;
});
