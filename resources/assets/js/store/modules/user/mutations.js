import { mapMutationsFromTypes } from 'schepotin-vuex-helpers';
import * as types from './mutation-types';

export default {
    /**
     * Generates {@link https://vuex.vuejs.org/en/mutations.html | mutations} from
     * {@link https://vuex.vuejs.org/en/mutations.html#using-constants-for-mutation-types | mutation types}
     *
     * Documentation
     * {@link https://www.npmjs.com/package/schepotin-vuex-helpers#mapmutationsfromtypes | mapMutationsFromTypes}
     */
    ...mapMutationsFromTypes({
        types,
        excludes: [
            types.LOGIN,
            types.LOGOUT,
            types.CURRENT_LANG,
        ],
    }),
    [types.LOGIN](state, payload) {
        window.Cookies.set('token', payload.token);
        window.Cookies.set('user', window.JSON.stringify(payload.user));
        window.Cookies.set('role', payload.role);

        window.axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;

        state.token = payload.token;
        state.logged = true;
        state.user = payload.user;
        state.role = payload.role;
    },
    [types.LOGOUT](state) {
        window.Cookies.remove('token');
        window.axios.defaults.headers.common.Authorization = '';

        state.token = null;
        state.logged = false;
    },
    [types.CURRENT_LANG](state, payload) {
        window.Cookies.set('locale', payload);

        state.currentLang = payload;
    },
};
