<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversity') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateTest = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addTest") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listTests"
                              api-url="/api/admin/test"
                              :fields="fields"
                              pagination-path = ""
                              :css="css.table"
                              data-path="data.data"
                              detail-row-component="my-detail-row"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:load-error="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="questions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editTest(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <router-link></router-link>
                        </template>
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editTest(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyTest(props.rowData.id)"
                                    :title="$t('translation.remove')">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </template>
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

        <modal-create-test></modal-create-test>
        <modal-update-test></modal-update-test>
        <modal-show-description></modal-show-description>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsTest from '../../../mixins/formFields/tests';

    import MixinModals from '../../../mixins/modals';
    import MixinPreloader from '../../../mixins/preload';
    import MixinAdmin from '../../../mixins/admin';
    import ModalCreateTest from '../../../components/admin/modals/CreateTest.vue';
    import ModalUpdateTest from '../../../components/admin/modals/UpdateTest.vue';
    import ModalShowDescription from '../../../components/admin/modals/ShowDescription.vue';

    import * as constants from '../../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinModals,
            MixinPreloader,
            FieldsTest,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateTest,
            ModalUpdateTest,
            ModalShowDescription,
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listTests.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            onCellClicked(data) {
                this.universityAddress = data.address;
                this.universityZipCode = data.zip_code;
                this.universityDescription = data.description;
                this.modalsIsShowDescription = true;
            },
            // getUniversitiesId(payload) {
            //     this.hidePreloader();
            //     const universitiesId = payload.data.data.data.map(el => ({
            //         ...el,
            //         id: el.id,
            //         name: el.name,
            //     }));
            //     this.universityParentsId = universitiesId;
            // },
            async editTest(id) {
                try {
                    await this.$store.dispatch('admin/getTest', id);
                    this.modalsIsShowUpdateTest = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyTest(id) {
                const result = await this.$swal({
                    title: this.$t('translation.areYouSure'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: constants.BUTTON_COLOR_CONFIRM,
                    confirmButtonText: this.$t('translation.yes'),
                    cancelButtonColor: constants.BUTTON_COLOR_CANCEL,
                    cancelButtonText: this.$t('translation.cancel'),
                });
                if (result.value) {
                    try {
                        await this.$store.dispatch('admin/destroyTest', id);
                        this.$refs.listTests.refresh();
                        this.showPreloader();
                    } catch (e) {
                        this.$toast.error({
                            title: this.$t('translation.error'),
                            message: this.$t(e.statusText),
                        });
                    }
                }
            },
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.listTests.changePage(page);
            },
        },
    };
</script>
