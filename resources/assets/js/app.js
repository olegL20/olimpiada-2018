/**
 * Will initialize the application.
 */

import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import Multiselect from 'vue-multiselect';

/**
 * Import and bootstrap the plugins.
 */

import './bootstrap';
import router from './router';
import store from './store';
import i18n from './plugins/lang';
import './plugins/toastr';
import './plugins/validator';
import './plugins/meta';

/**
 * Main App.
 *
 * Last but not least, we import the main application.
 */

import App from './pages/App.vue';

store.dispatch('user/checkLogged');

Vue.config.productionTip = false;
Vue.use(vClickOutside);
Vue.component('multiselect', Multiselect);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    el: '#app',
    template: '<App/>',
    components: { App },
});
