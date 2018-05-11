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
                              pagination-path = ""
                              :css="css.table"
                              data-path="data.data"
                              @vuetable:load-success="showPreload = false"
                              @vuetable:pagination-data="onPaginationData"
                    >
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                                    @click="editUniversity(props.rowData.id)"
                                    :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md" :title="$t('translation.remove')"
                                    @click="destroyUniversity(props.rowData.id)">
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

            <modal-create-university></modal-create-university>
            <modal-edit-university></modal-edit-university>

        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';

    import MixinUniversityFields from '../../mixins/formFields/university';
    import MixinModals from '../../mixins/modals';
    import MixinPreloader from '../../mixins/preload';
    import ModalCreateUniversity from '../../components/admin/modals/CreateUniversity.vue';
    import ModalEditUniversity from '../../components/admin/modals/EditUniversity.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinModals,
            MixinPreloader,
            MixinUniversityFields,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateUniversity,
            ModalEditUniversity,
        },
        mounted() {
            this.showPreload = true;
        },
        methods: {
            async editUniversity(universityId) {
                try {
                    await this.$store.dispatch('admin/getUniversity', universityId);

                    this.modalsIsShowEditUniversity = true;

                    this.universityAddress = null;
                    this.universityDescription = null;
                    this.universityEmail = null;
                    this.universityName = null;
                    this.universityPhone = null;
                    this.universitySite = null;
                } catch (e) {
                    console.log(e);
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
                        this.showPreload = true;
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