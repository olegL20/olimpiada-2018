import { mapTwoWayState } from 'schepotin-vuex-helpers';

export default {
    ...mapTwoWayState({
        namespace: 'preload',
        prefix: true,
    }, [
        'showPreload',
    ]),
    methods: {
        showPreload() {
            this.showPreload = true;
        },
        hidePreload() {
            this.showPreload = false;
        },
    },
};
