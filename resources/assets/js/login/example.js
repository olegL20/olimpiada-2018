define(["require", "exports"], function (require, exports) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    this.socialProviders = {
        'google': new GoogleProvider(),
        'facebook': new FacebookProvider(),
    };
    /**
     *
     * @param provider
     * @return {GoogleProvider|FacebookProvider}
     */
    loader(provider, string);
    {
        return this.socialProviders[provider].setConfig(exports.ConfigAuth[provider]);
    }
    socialServer(provider, string, user);
    {
        return this.$http.post(API_URL + "/social?method=" + provider, user).then(function (response) {
            return response.data.data;
        });
    }
    // provider facebook | google
    this.SocialAuthService.loader(provider).load(function (_provider) {
        _provider.auth(function (response, user) {
            user['provider'] = provider;
            _this.SocialAuthService.socialServer(provider, user).then(function (data) {
                // response on authenticate  example, token, data
            });
        });
    });
    // example configs
    exports.ConfigAuth = {
        facebook: { client_id: '1726162654141453' },
        google: { client_id: '700321256690-g72opu4c23n3nggf7ei8n0f6tmvi08se.apps.googleusercontent.com', apiKey: 'bG7xcigUK7b1eTGFwEEoOvGz' }
    };
});
