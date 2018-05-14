<template>
    <div class="container-fluid">
        <div class="col-md-12 mb-5">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversityAdmin') }}</h1>
                </div>

                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowInviteUniversityAdmin = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addInvite") }}
                    </a>
                </div>
                <div class="col-md-12 mt-3">
                    <vuetable ref="listUniversityAdministrators"
                              :api-url="`https://itpm-194220.appspot.com/api/admin/users?role=${constants.UNIVERSITY_ADMIN}`"
                              :fields="fieldsListUniversityAdministrators"
                              pagination-path = "data"
                              :css="css.table"
                              data-path="data.data"
                              :http-options="{
                                headers: {
                                    Authorization: `Bearer ${userToken}`,
                                },
                              }"
                              @vuetable:load-success="hidePreloader"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                    >
                        <template slot="university" slot-scope="props">
                            <select  name="university_id" class="select-style"
                                     @change="setUniversityId"
                                     :value="props.rowData.university_id"
                                     :data-id="props.rowData.id"
                                     v-if="universities">
                                <option value="">{{ $t('translation.noData') }}</option>
                                <option v-for="item in universities"
                                        :value="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </template>
                    </vuetable>
                </div>
                <div class="col-md-12 m-3">
                    <vuetable-pagination ref="paginationListUniversityAdministrators"
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
    import MixinUser from '../../mixins/user';

    import ModalInviteUniversityAdmin from '../../components/admin/modals/InviteUniversityAdmin.vue';
    import ModalsAssociateUniversityAdmin from '../../components/admin/modals/AssociateUniversityAdmin.vue';

    import * as constants from '../../utils/constants';


    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            MixinAdmin,
            MixinUser,
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
                this.$refs.paginationListUniversityAdministrators.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.listUniversityAdministrators.changePage(page);
            },
            async setUniversityId(el) {
                try {
                    await this.$store.dispatch('admin/associate', {
                        user_id: el.target.dataset.id,
                        university_id: el.target.value,
                    });
                    this.$refs.listUniversityAdministrators.refresh();
                    this.$toast.success({
                        title: this.$t('translation.success'),
                        message: this.$t('translation.universityChanged'),
                    });
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
        },
    };
</script>
