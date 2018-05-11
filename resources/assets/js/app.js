/**
 * Will initialize the application.
 */

import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import Multiselect from 'vue-multiselect';
import * as VueGoogleMaps from 'vue2-google-maps';
import preload from './components/Preloader.vue';

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
import './plugins/swal';

/**
 * Main App.
 *
 * Last but not least, we import the main application.
 */

import App from './pages/App.vue';

store.dispatch('user/checkLogged');

Vue.config.productionTip = false;
Vue.use(vClickOutside);
Vue.component('preload', preload);
Vue.component('multiselect', Multiselect);

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBa9fM_dmZpxHs9T-tMSixREt92Mt4gNL8',
        libraries: 'places',
    },
    installComponents: true,
});

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    el: '#app',
    template: '<App/>',
    components: { App },
});
