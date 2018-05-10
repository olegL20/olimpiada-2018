<template>
    <div class="container">

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
                              api-url="https://vuetable.ratiw.net/api/users"
                              :fields="fields"
                              pagination-path = ""
                              :css="css.table"
                              @vuetable:load-success="hidePreload"
                              @vuetable:pagination-data="onPaginationData"
                    >
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                                    @click="modalsIsShowEditUniversity = true"
                                    :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md" :title="$t('translation.remove')"
                                    @click="deleteProductCategory(props.rowData.id)">
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
    import MixinPreload from '../../mixins/preload';
    import ModalCreateUniversity from '../../components/admin/modals/CreateUniversity.vue';
    import ModalEditUniversity from '../../components/admin/modals/EditUniversity.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinModals,
            MixinPreload,
            MixinUniversityFields,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateUniversity,
            ModalEditUniversity,
        },
        mounted() {
            this.showPreload();
        },
        methods: {
            async deleteProductCategory() {
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
                        // await this.$store.dispatch('admin/deleteUniversity', {
                        //     data: {
                        //         product_category_id: productCategoryId,
                        //     },
                        // });
                    } catch (e) {
                        this.$toasted.show(this.$t(e.errors), {
                            theme: 'primary',
                            type: 'error',
                        });
                    }
                }
            },
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.vuetableAllFields.changePage(page);
            },
        },
    };
</script>