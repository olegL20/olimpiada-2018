<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerAnswers') }}</h1>
                </div>
                <!--<div class="col-md-2 align-self-center">-->
                    <!--<a href="javascript:" @click="modalsIsShowCreateAnswer = true" class="btn btn-primary btn-md float-right">-->
                        <!--{{ $t("translation.addAnswer") }}-->
                    <!--</a>-->
                <!--</div>-->
                <div class="col-md-12 mt-3">
                    <vuetable ref="listAnswers"
                              api-url="/api/admin/answer"
                              :fields="fields"
                              pagination-path=""
                              :css="css.table"
                              data-path="data.data"
                              detail-row-component="my-detail-row"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:load-error="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editAnswer(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyAnswer(props.rowData.id)"
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

        <modal-create-answer></modal-create-answer>
        <modal-update-answer></modal-update-answer>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsAnswer from '../../../mixins/formFields/answers';

    import MixinModals from '../../../mixins/modals';
    import MixinPreloader from '../../../mixins/preload';
    import MixinAdmin from '../../../mixins/admin';
    import ModalCreateAnswer from '../../../components/admin/modals/CreateAnswer.vue';
    import ModalUpdateAnswer from '../../../components/admin/modals/UpdateAnswer.vue';

    import * as constants from '../../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinModals,
            MixinPreloader,
            FieldsAnswer,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateAnswer,
            ModalUpdateAnswer,
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listAnswers.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            async editAnswer(id) {
                try {
                    await this.$store.dispatch('admin/getAnswer', id);
                    this.modalsIsShowUpdateAnswer = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyAnswer(id) {
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
                        await this.$store.dispatch('admin/destroyAnswer', id);
                        this.$refs.listAnswers.refresh();
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
                this.$refs.listAnswers.changePage(page);
            },
        },
    };
</script>
