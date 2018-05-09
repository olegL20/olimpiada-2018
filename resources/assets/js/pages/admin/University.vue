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
                              @vuetable:pagination-data="onPaginationData"
                    >
                        <template slot="actions" slot-scope="props">
                            <button class="btn btn-outline-secondary btn-md" :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </button>
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

        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';

    import MixinUniversityFields from '../../mixins/formFields/university';
    import MixinModals from '../../mixins/modals';
    import ModalCreateUniversity from '../../components/admin/modals/CreateUniversity.vue';

    import * as constants from '../../utils/constants';

    export default {
        mixins: [
            MixinModals,
            MixinUniversityFields,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalCreateUniversity,
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