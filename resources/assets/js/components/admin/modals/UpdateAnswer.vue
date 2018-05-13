<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowCreateAnswer" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createAnswer") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="answerName">{{ $t("translation.answerName") }}</label>
                        <input type="text" class="form-control" id="answerName" aria-describedby="answerNameHelp"
                               :placeholder="$t('translation.answerNamePlaceholder')"
                               name="answerName"
                               v-validate="'required|max:255'"
                               :data-vv-as="$t('translation.answerName')"
                               v-model="answerName">
                        <small id="answerNameHelp" class="form-text text-danger" v-show="errors.has('answerName')">
                            {{ errors.first('answerName') }}
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
                this.modalsIsShowCreateAnswer = false;

                this.answerQuestionId = null;
                this.answerName = null;
            },

            async createTest() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createAnswer', {
                            question_id: this.answerQuestionId,
                            name: this.answerName,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createAnswer'),
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
