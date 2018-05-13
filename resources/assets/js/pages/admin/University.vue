<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversity') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateUniversity = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addUniversity") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listUniversities"
                              api-url="/api/admin/university"
                              :fields="fields"
                              pagination-path = "data"
                              :css="css.table"
                              data-path="data.data"
                              detail-row-component="my-detail-row"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="description" slot-scope="props">
                            <div class="cursor-pointer text-blue-hover" @click="showDescription(props.rowData.description)">
                                {{ props.rowData.description === null ? $t('translation.noData') : props.rowData.description}}
                            </div>
                        </template>
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                                    @click="editUniversity(props.rowData.id)"
                                    :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyUniversity(props.rowData.id)"
                                    :title="$t('translation.remove')">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </template>
                    </vuetable>

                    <vuetable-pagination ref="pagination"
                                         :css="css.pagination"
                                         @vuetable-pagination:change-page="onChangePage"
                    >
                    </vuetable-pagination>
                </div>

            </div>
        </div>

        <modal-create-university></modal-create-university>
        <modal-edit-university></modal-edit-university>
        <modal-show-description></modal-show-description>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsUniversity from '../../mixins/formFields/university';

    import MixinModals from '../../mixins/modals';
    import MixinPreloader from '../../mixins/preload';
    import MixinAdmin from '../../mixins/admin';
    import ModalCreateUniversity from '../../components/admin/modals/CreateUniversity.vue';
    import ModalEditUniversity from '../../components/admin/modals/EditUniversity.vue';
    import ModalShowDescription from '../../components/admin/modals/ShowDescription.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinAdmin,
            MixinModals,
            MixinPreloader,
            FieldsUniversity,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateUniversity,
            ModalEditUniversity,
            ModalShowDescription,
        },
        mounted() {
            this.showPreloader();
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listUniversities.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        methods: {
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.showPreloader();
                this.$refs.listUniversities.changePage(page);
            },
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
            async editUniversity(universityId) {
                try {
                    await this.$store.dispatch('admin/getUniversity', universityId);
                    this.modalsIsShowEditUniversity = true;
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyUniversity(universityId) {
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
                        await this.$store.dispatch('admin/destroyUniversity', universityId);
                        this.$refs.listUniversities.refresh();
                        this.showPreloader();
                    } catch (e) {
                        this.$toast.error({
                            title: this.$t('translation.error'),
                            message: this.$t(e.statusText),
                        });
                    }
                }
            },
        },
    };
</script>
