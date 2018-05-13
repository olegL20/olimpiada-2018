import { mapTwoWayState } from 'schepotin-vuex-helpers';

export default {
    computed: {
        /**
         * Generates two way {@link https://vuejs.org/v2/guide/computed.html#Computed-Setter | computed properties}
         *
         * Documentation {@link https://www.npmjs.com/package/schepotin-vuex-helpers#maptwowaystate | mapTwoWayState}
         */
        ...mapTwoWayState({
            namespace: 'user',
            prefix: false,
        }, [
            'showPreload',
            'refreshTable',
        ]),
    },
    methods: {
        showPreloader() {
            this.showPreload = true;
        },
        hidePreloader() {
            this.showPreload = false;
        },
        switchRefreshTable(value) {
            this.refreshTable = value;
        },
    },
};
