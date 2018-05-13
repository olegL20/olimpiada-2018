<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversityAdmin') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowInviteUniversityAdmin = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addUniversityAdmin") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listUniversitAdministrotors"
                              api-url="/api/admin/users"
                              :fields="fields"
                              pagination-path = ""
                              :css="css.table"
                              data-path="data.data"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                    >
                    </vuetable>
                </div>
                <div class="col-md-12 m-3">
                    <vuetable-pagination ref="pagination"
                                         :css="css.pagination"
                                         @vuetable-pagination:change-page="onChangePage"
                    >
                    </vuetable-pagination>
                </div>

            </div>
        </div>
        <modal-invite-university-admin></modal-invite-university-admin>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsMajor from '../../mixins/formFields/major';

    import MixinModals from '../../mixins/modals';
    import MixinPreload from '../../mixins/preload';

    import ModalInviteUniversityAdmin from '../../components/admin/modals/InviteUniversityAdmin.vue';

    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            FieldsMajor,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalInviteUniversityAdmin,
        },
        mounted() {
            // this.showPreloader();
        },
        methods: {
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.listUniversities.changePage(page);
            },
        },
    };
</script>
