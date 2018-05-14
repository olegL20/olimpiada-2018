<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerQuestions') }}</h1>
                </div>
                <!--<div class="col-md-2 align-self-center">-->
                    <!--<a href="javascript:" @click="modalsIsShowCreateQuestion = true" class="btn btn-primary btn-md float-right">-->
                        <!--{{ $t("translation.addQuestion") }}-->
                    <!--</a>-->
                <!--</div>-->
                <div class="col-md-12 mt-3">
                    <vuetable ref="listQuestions"
                              api-url="https://itpm-194220.appspot.com/api/admin/questions"
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
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="answers" slot-scope="props">
                            <router-link></router-link>
                        </template>
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editQuestion(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyQuestion(props.rowData.id)"
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

        <modal-create-question></modal-create-question>
        <modal-update-question></modal-update-question>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsQuestion from '../../../mixins/formFields/questions';

    import MixinModals from '../../../mixins/modals';
    import MixinPreloader from '../../../mixins/preload';
    import MixinAdmin from '../../../mixins/admin';
    import MixinUser from '../../../mixins/user';
    import ModalCreateQuestion from '../../../components/admin/modals/CreateQuestion.vue';
    import ModalUpdateQuestion from '../../../components/admin/modals/UpdateQuestion.vue';

    import * as constants from '../../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinUser,
            MixinModals,
            MixinPreloader,
            FieldsQuestion,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateQuestion,
            ModalUpdateQuestion,
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listQuestions.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            async editQuestion(id) {
                try {
                    await this.$store.dispatch('admin/getQuestion', id);
                    this.modalsIsShowUpdateQuestion = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyQuestion(id) {
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
                        await this.$store.dispatch('admin/destroyQuestion', id);
                        this.$refs.listQuestions.refresh();
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
                this.$refs.listQuestions.changePage(page);
            },
        },
    };
</script>
