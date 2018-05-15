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
                              :api-url="`${constants.URL}/api/tutor-admin/subjects-coefficients`"
                              :fields="fields"
                              pagination-path = ""
                              :css="css.table"
                              data-path="data.data"
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
                               @click="editCoefficient(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyCoefficient(props.rowData.id)"
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
        <modal-create-coefficient></modal-create-coefficient>
        <modal-update-coefficient></modal-update-coefficient>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsCoefficient from '../../mixins/formFields/coefficient';

    import MixinModals from '../../mixins/modals';
    import MixinUser from '../../mixins/user';
    import MixinPreload from '../../mixins/preload';

    import ModalCreateCoefficient from '../../components/admin/modals/CreateCoefficient.vue';
    import ModalUpdateCoefficient from '../../components/admin/modals/UpdateCoefficient.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            MixinUser,
            FieldsCoefficient,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateCoefficient,
            ModalUpdateCoefficient,
        },
        data() {
            return {
                constants,
            };
        },
        mounted() {
            this.showPreloader();
            this.$store.dispatch('admin/getMajors');
        },
        methods: {
            async editCoefficient(id) {
                try {
                    await this.$store.dispatch('admin/getCoefficient', id);
                    this.modalsIsShowUpdateCoefficient = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyCoefficient(id) {
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
                        await this.$store.dispatch('admin/destroyCoefficient', id);
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
                this.$refs.listUniversities.changePage(page);
            },
        },
    };
</script>
