<template>
    <transition name="slide-fade" mode="out-in">
        <div v-show="modalsIsShowCreateMajor" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createMajor") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="majorName">{{ $t("translation.majorName") }}</label>
                        <input type="text"
                               class="form-control"
                               id="majorName"
                               v-validate="{required: true}"
                               aria-describedby="majorNameHelp"
                               :placeholder="$t('translation.majorNamePlaceholder')"
                               name="majorName"
                               :data-vv-as="$t('translation.majorName')"
                               v-model="majorName">
                        <small id="majorNameHelp" class="form-text text-danger" v-show="errors.has('majorName')">
                            {{ errors.first('majorName') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="majorDescription">{{ $t("translation.majorDescription") }}</label>
                        <textarea class="form-control resize-none h-5"
                                  id="majorDescription"
                                  aria-describedby="majorDescriptionHelp"
                                  :placeholder="$t('translation.majorDescriptionPlaceholder')"
                                  name="majorDescription"
                                  v-validate="'required|max:255'"
                                  :data-vv-as="$t('translation.majorDescription')"
                                  v-model="majorDescription">
                        </textarea>
                        <small id="majorDescriptionHelp" class="form-text text-danger" v-show="errors.has('majorDescription')">
                            {{ errors.first('majorDescription') }}
                        </small>
                    </div>

                    <template v-if="departments">
                        <multiselect v-model="majorDepartmentId"
                                     :options="departments"
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
                        @click="createMajor">
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
                this.modalsIsShowCreateMajor = false;

                this.majorDepartmentId = null;
                this.majorName = null;
                this.majorDescription = null;
            },

            async createMajor() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createMajor', {
                            department_id: this.majorDepartmentId.id,
                            name: this.majorName,
                            description: this.majorDescription,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createdMajor'),
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
            this.$store.dispatch('admin/getDepartments');
        },
    };
</script>
