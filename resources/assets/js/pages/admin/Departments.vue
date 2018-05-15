<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerDepartments') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateDepartment = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addDepartment") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listDepartments"
                              :api-url="`${constants.URL}/api/tutor-admin/department`"
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
                               @click="editDepartment(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyDepartment(props.rowData.id)"
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

        <modal-create-department></modal-create-department>
        <modal-update-department></modal-update-department>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsDepartment from '../../mixins/formFields/departments';

    import MixinModals from '../../mixins/modals';
    import MixinPreloader from '../../mixins/preload';
    import MixinAdmin from '../../mixins/admin';
    import MixinUser from '../../mixins/user';
    import ModalCreateDepartment from '../../components/admin/modals/CreateDepartment.vue';
    import ModalUpdateDepartment from '../../components/admin/modals/UpdateDepartment.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinUser,
            MixinModals,
            MixinPreloader,
            FieldsDepartment,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateDepartment,
            ModalUpdateDepartment,
        },
        data() {
            return {
                constants,
            };
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listDepartments.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            async editDepartment(id) {
                try {
                    await this.$store.dispatch('admin/getDepartment', id);
                    this.modalsIsShowUpdateDepartment = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyDepartment(id) {
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
                        await this.$store.dispatch('admin/destroyDepartment', id);
                        this.$refs.listDepartments.refresh();
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
                this.$refs.listDepartments.changePage(page);
            },
        },
    };
</script>
