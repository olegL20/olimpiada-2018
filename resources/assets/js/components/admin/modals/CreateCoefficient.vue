<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowCreateCoefficient" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createCoefficient") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="coefficientName">{{ $t("translation.coefficientName") }}</label>
                        <input type="text" class="form-control" id="coefficientName" aria-describedby="coefficientNameHelp"
                               :placeholder="$t('translation.coefficientNamePlaceholder')"
                               name="coefficientName"
                               v-validate="'required|max:255'"
                               :data-vv-as="$t('translation.coefficientName')"
                               v-model="coefficientName">
                        <small id="coefficientNameHelp" class="form-text text-danger" v-show="errors.has('coefficientName')">
                            {{ errors.first('coefficientName') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="formControlRange">{{ $t("translation.coefficient") }}
                            <template v-if="coefficientCoefficient">
                                : ({{ coefficientCoefficient }})
                            </template>
                        </label>
                        <input v-model="coefficientCoefficient" min="0" max="1" step="0.01" type="range" class="form-control-range" id="formControlRange">
                    </div>

                    <multiselect v-model="coefficientMajorId"
                                 :options="majors"
                                 :searchable="true"
                                 :show-labels="false"
                                 label="name"
                                 track-by="id"
                                 :placeholder="$t('translation.selectFromList')">
                    </multiselect>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="createCoefficient">
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
            return {
            };
        },
        methods: {
            hide() {
                this.modalsIsShowCreateCoefficient = false;

                this.coefficientMajorId = null;
                this.coefficientName = null;
                this.coefficientCoefficient = null;
            },

            async createCoefficient() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createCoefficient', {
                            major_id: this.coefficientMajorId.id,
                            name: this.coefficientName,
                            coefficient: Number(this.coefficientCoefficient),
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createdCoefficient'),
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
    };
</script>
