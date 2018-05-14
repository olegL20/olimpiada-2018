<template>
    <div class="container-fluid">
        <div class="col-md-12 mb-5">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerFaculty') }}</h1>
                </div>

                <div class="col-md-2 align-self-center">
                    <a href="javascript:" @click="modalsIsShowCreateFaculty = true" class="btn btn-primary btn-md float-right">
                        {{ $t("translation.addFaculty") }}
                    </a>
                </div>

                <div class="col-md-12 mt-3">
                    <vuetable ref="listFaculties"
                              :api-url="`https://itpm-194220.appspot.com/api/admin/faculty`"
                              :fields="fieldsListFaculties"
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
                            {{ props.rowData.university ? props.rowData.university.name : $t('translation.noData') }}
                        </template>
                        <template slot="actions" slot-scope="props">
                            <a href="javascript:" class="btn btn-outline-secondary btn-md"
                               @click="editFaculty(props.rowData.id)"
                               :title="$t('translation.edit')">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger btn-md"
                                    @click="destroyFaculty(props.rowData.id)"
                                    :title="$t('translation.remove')">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </template>
                    </vuetable>
                </div>
                <div class="col-md-12 m-3">
                    <vuetable-pagination ref="paginationFaculties"
                                         :css="css.pagination"
                                         @vuetable-pagination:change-page="onChangePage"
                    >
                    </vuetable-pagination>
                </div>

            </div>
        </div>

        <modal-create-faculty></modal-create-faculty>
        <modal-edit-faculty></modal-edit-faculty>

    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FieldsListFaculties from '../../mixins/formFields/faculty';

    import MixinModals from '../../mixins/modals';
    import MixinPreload from '../../mixins/preload';
    import MixinAdmin from '../../mixins/admin';
    import MixinUser from '../../mixins/user';

    import ModalInviteUniversityAdmin from '../../components/admin/modals/InviteUniversityAdmin.vue';
    import ModalCreateFaculty from '../../components/admin/modals/CreateFaculty.vue';
    import ModalEditFaculty from '../../components/admin/modals/EditFaculty.vue';

    import * as constants from '../../utils/constants';


    export default {
        mixins: [
            MixinPreload,
            MixinModals,
            MixinAdmin,
            MixinUser,
            FieldsListFaculties,
        ],
        components: {
            Vuetable,
            VuetablePagination,
            ModalInviteUniversityAdmin,
            ModalCreateFaculty,
            ModalEditFaculty,
        },
        data() {
            return {
                constants,
            };
        },
        watch: {
            refreshTable() {
                if (this.refreshTable) {
                    this.$refs.listFaculties.refresh();
                    this.switchRefreshTable(false);
                }
            },
        },
        mounted() {
            this.showPreloader();
            this.$store.dispatch('admin/getAllUniversities');
        },
        methods: {
            onCellClicked(data) {
                this.universityUserId = data.id;
                this.isShowAssociateUniversityAdmin = true;
            },
            onPaginationData(paginationData) {
                this.$refs.paginationFaculties.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.showPreloader();
                this.$refs.listFaculties.changePage(page);
            },
            async setUniversityForFaculty(el) {
                try {
                    await this.$store.dispatch('admin/setUniversityForFaculty', {
                        id: el.target.dataset.id,
                        params: {
                            name: el.target.dataset.id,
                            university_id: el.target.value,
                        },
                    });
                    this.$refs.listFaculties.refresh();
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
            async editFaculty(id) {
                try {
                    this.showPreloader();
                    await this.$store.dispatch('admin/getFaculty', id);
                    this.modalsIsShowEditFaculty = true;
                    this.hidePreloader();
                } catch (e) {
                    this.$toast.error({
                        title: this.$t('translation.error'),
                        message: this.$t(e.message),
                    });
                }
            },
            async destroyFaculty(id) {
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
                        this.showPreloader();
                        await this.$store.dispatch('admin/destroyFaculty', id);
                        this.$refs.listFaculties.refresh();
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
