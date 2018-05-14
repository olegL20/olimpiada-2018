<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerMajor') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateMajor = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addMajor") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listMajors"
                              api-url="https://itpm-194220.appspot.com/api/admin/major"
                              :fields="fields"
                              pagination-path=""
                              :css="css.table"
                              data-path="data.data"
                              detail-row-component="my-detail-row"
                              :http-options="{
                                headers: {
                                    Authorization: `Bearer ${userToken}`,
                                },
                              }"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:load-error="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                    >
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editMajor(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyMajor(props.rowData.id)"
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

        <modal-create-major></modal-create-major>
        <modal-update-major></modal-update-major>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsMajor from '../../mixins/formFields/majors';

    import MixinModals from '../../mixins/modals';
    import MixinPreloader from '../../mixins/preload';
    import MixinAdmin from '../../mixins/admin';
    import MixinUser from '../../mixins/user';
    import ModalCreateMajor from '../../components/admin/modals/CreateMajor.vue';
    import ModalUpdateMajor from '../../components/admin/modals/UpdateMajor.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinUser,
            MixinModals,
            MixinPreloader,
            FieldsMajor,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateMajor,
            ModalUpdateMajor,
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listMajors.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            async editMajor(id) {
                try {
                    await this.$store.dispatch('admin/getMajor', id);
                    this.modalsIsShowUpdateMajor = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyMajor(id) {
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
                        await this.$store.dispatch('admin/destroyMajor', id);
                        this.$refs.listMajors.refresh();
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
                this.$refs.listMajors.changePage(page);
            },
        },
    };
</script>
