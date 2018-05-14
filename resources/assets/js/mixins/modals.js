import { mapTwoWayState } from 'schepotin-vuex-helpers';

export default {
    computed: {
        /**
         * Generates two way {@link https://vuejs.org/v2/guide/computed.html#Computed-Setter | computed properties}
         *
         * Documentation {@link https://www.npmjs.com/package/schepotin-vuex-helpers#maptwowaystate | mapTwoWayState}
         */
        ...mapTwoWayState({
            namespace: 'modals',
            prefix: true,
        }, [
            'isShowLogin',
            'isShowRegister',
            'isShowAdvice',
            'isShowSelectVuz',
            'isShowCreateUniversity',
            'isShowCreateTest',
            'isShowUpdateTest',
            'isShowEditUniversity',
            'isShowDescription',
            'isShowInviteUniversityAdmin',
            'isShowCreateQuestion',
            'isShowUpdateQuestion',
            'isShowCreateAnswer',
            'isShowUpdateAnswer',
            'isShowCreateCoefficient',
            'isShowUpdateCoefficient',
            'isShowCreateMajor',
            'isShowUpdateMajor',
            'isShowCreateDepartment',
            'isShowUpdateDepartment',
        ]),
    },
};
