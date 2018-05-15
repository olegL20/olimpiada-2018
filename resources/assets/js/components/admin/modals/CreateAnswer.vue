<template>
    <transition name="slide-fade" mode="out-in">
        <div v-show="modalsIsShowCreateAnswer" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createAnswer") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="answerName">{{ $t("translation.answerName") }}</label>
                        <input type="text"
                               class="form-control"
                               id="answerName"
                               v-validate="{required: true}"
                               aria-describedby="answerNameHelp"
                               :placeholder="$t('translation.answerNamePlaceholder')"
                               name="answerName"
                               :data-vv-as="$t('translation.answerName')"
                               v-model="answerName">
                        <small id="answerNameHelp" class="form-text text-danger" v-show="errors.has('answerName')">
                            {{ errors.first('answerName') }}
                        </small>
                    </div>

                    <template v-if="questions">
                        <div class="form-group">
                            <label for="answerQuestionId">{{ $t("translation.questions") }}</label>
                            <multiselect v-model="answerQuestionId"
                                         :options="questions"
                                         :searchable="true"
                                         :show-labels="false"
                                         aria-describedby="answerQuestionIdHelp"
                                         id="answerQuestionId"
                                         v-validate="'required'"
                                         data-vv-name="answerQuestionId"
                                         data-vv-value-path="value"
                                         :class="{ 'multiselect': true, 'is-invalid': errors.has('answerQuestionId') }"
                                         label="name"
                                         track-by="id"
                                         :placeholder="$t('translation.selectFromList')">
                            </multiselect>
                            <small id="answerQuestionIdHelp" class="form-text text-danger" v-show="errors.has('answerQuestionId')">
                                {{ errors.first('answerQuestionId') }}
                            </small>
                        </div>
                    </template>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button v-if="questions" type="button" class="btn btn-md btn-success mt-4"
                        @click="createAnswer">
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
                this.modalsIsShowCreateAnswer = false;

                this.answerQuestionId = null;
                this.answerName = null;
            },

            async createAnswer() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createAnswer', {
                            question_id: this.answerQuestionId.id,
                            name: this.answerName,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createdAnswer'),
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
            this.$store.dispatch('admin/getQuestions');
        },
    };
</script>
