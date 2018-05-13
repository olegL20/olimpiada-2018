<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversityAdmin') }}</h1>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowInviteUniversityAdmin = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addUniversityAdmin") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listUniversitAdministrotors"
                              :api-url="`/api/admin/users?role=${constants.UNIVERSITY_ADMIN}`"
                              :fields="fields"
                              pagination-path = "data"
                              :css="css.table"
                              data-path="data.data"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="university" slot-scope="props">
                            <select @change="setUniversityId" :value="props.rowData.university_id" :data-id="props.rowData.university_id" name="university_id" class="select-style" v-if="universities">
                                <option value="">{{ $t('translation.noData') }}</option>
                                <option v-for="item in universities"
                                        :value="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                            <!--{{ props.rowData.university_id ? props.rowData.university.name : $t('translation.noData') }}-->
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
        <modal-invite-university-admin></modal-invite-university-admin>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsUniversityAdmin from '../../mixins/formFields/universityAdmin';

    import MixinModals from '../../mixins/modals';
    import MixinPreload from '../../mixins/preload';
    import MixinAdmin from '../../mixins/admin';

    import ModalInviteUniversityAdmin from '../../components/admin/modals/InviteUniversityAdmin.vue';
    import ModalsAssociateUniversityAdmin from '../../components/admin/modals/AssociateUniversityAdmin.vue';

    import * as constants from '../../utils/constants';


    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            MixinAdmin,
            FieldsUniversityAdmin,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalInviteUniversityAdmin,
            ModalsAssociateUniversityAdmin,
        },
        data() {
            return {
                constants,
            };
        },
        mounted() {
            this.showPreloader();
            this.$store.dispatch('admin/getAllUniversities');
        },
        methods: {
            onCellClicked(data) {
                console.log(data);
                this.universityUserId = data.id;
                this.modalsIsShowAssociateUniversityAdmin = true;
            },
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.listUniversities.changePage(page);
            },
            async setUniversityId(e) {
                console.log(e.target.dataset, e.target.value, e);
                // try {
                    // await this.$store.dispatch('admin/associate', {
                    //     data: {
                    //         user_id: e.target.dataset.id,
                    //         university_id: e.target.value,
                    //     },
                    // });
                //     this.$toasted.show(this.$t('translation.languageChanged'), {
                //         theme: 'primary',
                //         type: 'success',
                //         duration: 1000,
                //     });
                // } catch (el) {
                //     Object.values(el.errors).forEach((item) => {
                //         this.$toasted.show(item[0], {
                //             theme: 'primary',
                //             type: 'error',
                //         });
                //     });
                // }
            },
        },
    };
</script>
