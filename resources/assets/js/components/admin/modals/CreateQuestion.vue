<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowCreateTest" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createTest") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="testName">{{ $t("translation.testName") }}</label>
                        <input type="text" class="form-control" id="testName" aria-describedby="testName"
                               :placeholder="$t('translation.testNamePlaceholder')"
                               name="testName"
                               v-validate="'required|max:255'"
                               :data-vv-as="$t('translation.testName')"
                               v-model="testName">
                        <small id="testNameHelp" class="form-text text-danger" v-show="errors.has('testName')">
                            {{ errors.first('testName') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="testDescription">{{ $t("translation.testDescription") }}</label>
                        <textarea type="text" class="form-control resize-none h-5" id="testDescription" aria-describedby="testDescriptionHelp"
                                  :placeholder="$t('translation.testDescriptionPlaceholder')"
                                  name="testDescription"
                                  v-validate="'required|max:255'"
                                  :data-vv-as="$t('translation.testDescription')"
                                  v-model="testDescription">
                        </textarea>
                        <small id="testDescriptionHelp" class="form-text text-danger" v-show="errors.has('testDescription')">
                            {{ errors.first('testDescription') }}
                        </small>
                    </div>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="createTest">
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
                this.modalsIsShowCreateTest = false;

                this.testName = null;
                this.testDescription = null;
            },

            async createTest() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createTest', {
                            name: this.testName,
                            description: this.testDescription,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createTest'),
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
