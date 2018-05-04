import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';

import en from '../lang/en/en';
import he from '../lang/he/he';
import ua from '../lang/ua/ua';

Vue.use(VueI18n);

export default new VueI18n({
    locale: store.getters['user/currentLang'],
    messages: {
        en,
        he,
        ua,
    },
});
