import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import store from '../store';

import validationEn from '../lang/en/validator';
import validationHe from '../lang/he/validator';
import validationUa from '../lang/ua/validator';

Validator.extend('login', {
    async validate(value) {
        return {
            valid: value !== 0,
        };
    },
    getMessage: validationEn.messages.login,
});

Validator.extend('unique', {
    async validate(value) {
        return {
            valid: value !== 0,
        };
    },
    getMessage: validationEn.messages.unique,
});

Vue.use(VeeValidate, {
    fieldsBagName: 'fieldsValidation',
    locale: store.getters['user/currentLang'],
    dictionary: {
        en: validationEn,
        he: validationHe,
        ua: validationUa,
    },
});
