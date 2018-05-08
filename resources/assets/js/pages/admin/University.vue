<template>
    <div class="container">

    <div class="col-md-12">
        <div class="row border rounded bg-white pt-3 pb-3">
            <!--<div class="mt-3">-->
                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversity') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateUniversity = true" class="btn btn-success btn-md float-right">
                        {{ $t("translation.addUniversity") }}
                    </a>
                </div>
            <!--</div>-->
            <div class="col-md-12 mt-3">
                <vuetable ref="listUniversities"
                          api-url="https://vuetable.ratiw.net/api/users"
                          :fields="fields"
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
                <!--<vuetable ref="productCategories"-->
                          <!--api-url="/api/v1/default/list"-->
                          <!--data-path="data.product_categories"-->
                          <!--:fields="fields"-->
                          <!--pagination-path = ""-->
                          <!--:http-options="{-->
                                      <!--headers: {-->
                                          <!--Authorization: `Bearer ${userToken}`,-->
                                      <!--},-->
                                  <!--}">-->
                    <!--<template slot="value" slot-scope="props">-->
                        <!--{{ props.rowData.value !== null ? props.rowData.value : $t('translation.null') }}-->
                    <!--</template>-->
                    <!--<template slot="parent_id" slot-scope="props">-->
                        <!--{{ props.rowData.parent_id !== null ? props.rowData.parent_id : $t('translation.null') }}-->
                    <!--</template>-->

                <!--</vuetable>-->
            </div>
            <div class="col-md-12">
                <!--<button class="btn btn-success btn-md float-right">-->
                    <!--{{ $t('translation.addUniversity') }}-->
                <!--</button>-->
                <!--<a href="javascript:" @click="modalsIsShowCreateUniversity = true" class="btn btn-success btn-md float-right">-->
                    <!--{{ $t("translation.addUniversity") }}-->
                <!--</a>-->
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
                        // await this.$store.dispatch('admin/deleteProductCategory', {
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
        },
    };
</script>