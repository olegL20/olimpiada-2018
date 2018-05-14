<template>
    <transition name="slide-fade" mode="out-in">
        <div v-show="modalsIsShowCreateDepartment" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createDepartment") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="departmentName">{{ $t("translation.departmentName") }}</label>
                        <input type="text"
                               class="form-control"
                               id="departmentName"
                               v-validate="{required: true}"
                               aria-describedby="departmentNameHelp"
                               :placeholder="$t('translation.departmentNamePlaceholder')"
                               name="departmentName"
                               :data-vv-as="$t('translation.departmentName')"
                               v-model="departmentName">
                        <small id="departmentNameHelp" class="form-text text-danger" v-show="errors.has('departmentName')">
                            {{ errors.first('departmentName') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="departmentDescription">{{ $t("translation.majorDescription") }}</label>
                        <textarea class="form-control resize-none h-5"
                                  id="departmentDescription"
                                  aria-describedby="departmentDescriptionHelp"
                                  :placeholder="$t('translation.departmentDescriptionPlaceholder')"
                                  name="departmentDescription"
                                  v-validate="'required|max:255'"
                                  :data-vv-as="$t('translation.departmentDescription')"
                                  v-model="departmentDescription">
                        </textarea>
                        <small id="departmentDescriptionHelp" class="form-text text-danger" v-show="errors.has('departmentDescription')">
                            {{ errors.first('departmentDescription') }}
                        </small>
                    </div>

                    <template v-if="faculties">
                        <multiselect v-model="departmentFacultyId"
                                     :options="faculties"
                                     :searchable="true"
                                     :show-labels="false"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                    </template>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="createDepartment">
                        {{ $t("translation.save") }}
                    </button>

                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import MixinModals from '../../../mixins/modals';
    import MixinAdmin from '../../../mixins/admin';
    import MixinPreload from '../../../mixins/preload';

    export default {
        mixins: [
            MixinModals,
            MixinAdmin,
            MixinPreload,
        ],
        data() {
            return {};
        },
        methods: {
            hide() {
                this.modalsIsShowCreateDepartment = false;

                this.departmentFacultyId = null;
                this.departmentName = null;
                this.departmentDescription = null;
            },

            async createDepartment() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createDepartment', {
                            faculty_id: this.departmentFacultyId.id,
                            name: this.departmentName,
                            description: this.departmentDescription,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createdDepartment'),
                        });
                    } catch (e) {
                        if (e.status === 404) {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t('translation.error'),
                            });
                        } else {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t(e.message),
                            });
                        }
                    }
                    this.hide();
                }
            },
        },
        mounted() {
            this.$store.dispatch('admin/getFaculties');
        },
    };
</script>
