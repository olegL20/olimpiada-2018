<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerCoefficients') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateCoefficient = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.createCoefficient") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listCoefficients"
                              api-url="/api/admin/subjects-coefficients"
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
        <modal-create-coefficient></modal-create-coefficient>
        <modal-update-coefficient></modal-update-coefficient>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsCoefficient from '../../mixins/formFields/coefficient';

    import MixinModals from '../../mixins/modals';
    import MixinPreload from '../../mixins/preload';

    import ModalCreateCoefficient from '../../components/admin/modals/CreateCoefficient.vue';
    import ModalUpdateCoefficient from '../../components/admin/modals/UpdateCoefficient.vue';

    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            FieldsCoefficient,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateCoefficient,
            ModalUpdateCoefficient,
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
