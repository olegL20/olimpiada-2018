<template>
    <div class="container mt-5">

        <div class="row">
            <div class="col-md-12">
                <h1>{{ $t('translation.listUniversity') }}</h1>
            </div>
        </div>
        <div class="row border rounded bg-white pt-3 pb-3">
            <div class="col-md-12">
                <vuetable ref="vuetable"
                          api-url="https://vuetable.ratiw.net/api/users"
                          :fields="['name', 'email', 'birthdate']"
                ></vuetable>
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
                    <!--<template slot="actions" slot-scope="props">-->
                        <!--<b-button size="sm" variant="outline-secondary" @click="showModalPutProductCategory(props.rowData)">-->
                            <!--<i class="fa fa-pencil" aria-hidden="true"></i>-->
                        <!--</b-button>-->
                        <!--<button type="button" class="btn btn-outline-danger btn-sm"-->
                                <!--@click="deleteProductCategory(props.rowData.id)">-->
                            <!--{{ $t('translation.remove') }}-->
                        <!--</button>-->
                    <!--</template>-->
                <!--</vuetable>-->
            </div>
            <div class="col-md-12">
                <button class="btn btn-success btn-md float-right">
                    {{ $t('translation.addUniversity') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';

    export default {
        components: {
            Vuetable,
            VuetablePagination,
        },
    };
</script>