<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowUpdateQuestion" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.updateQuestion") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="questionName">{{ $t("translation.questionName") }}</label>
                        <input type="text" class="form-control" id="questionName" aria-describedby="questionNameHelp"
                               :placeholder="$t('translation.questionNamePlaceholder')"
                               name="questionName"
                               v-validate="'required|max:255'"
                               :data-vv-as="$t('translation.questionName')"
                               v-model="questionName">
                        <small id="questionNameHelp" class="form-text text-danger" v-show="errors.has('questionName')">
                            {{ errors.first('questionName') }}
                        </small>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">{{ $t("translation.typeTest") }}</label>
                        <div class="col-sm-10">
                            <div class="form-check form-check-inline">
                                <input v-model="questionType"
                                       class="form-check-input"
                                       type="radio"
                                       name="questionType"
                                       v-validate="'required'"
                                       id="inlineRadio1"
                                       value="1">
                                <label class="form-check-label" for="inlineRadio1">{{ $t("translation.typeTestOne") }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="questionType"
                                       class="form-check-input"
                                       type="radio"
                                       name="questionType"
                                       id="inlineRadio2"
                                       v-validate="'required'"
                                       value="2">
                                <label class="form-check-label" for="inlineRadio2">{{ $t("translation.typeTestPoly") }}</label>
                            </div>
                        </div>
                        <div class="col">
                            <small id="inlineRadioOptionsHelp" class="form-text text-danger" v-show="errors.has('questionType')">
                                {{ errors.first('questionType') }}
                            </small>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">{{ $t("translation.typeFillTest") }}</label>
                        <div class="col-sm-10">
                            <div class="form-check form-check-inline">
                                <input v-model="questionTypeFill"
                                       class="form-check-input"
                                       type="radio"
                                       v-validate="'required'"
                                       name="questionTypeFill"
                                       id="inlineRadio3"
                                       value="1">
                                <label class="form-check-label" for="inlineRadio3">{{ $t("translation.typeFillAuto") }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="questionTypeFill"
                                       class="form-check-input"
                                       type="radio"
                                       v-validate="'required'"
                                       name="questionTypeFill"
                                       id="inlineRadio4"
                                       value="2">
                                <label class="form-check-label" for="inlineRadio4">{{ $t("translation.typeFillManually") }}</label>
                            </div>
                        </div>
                        <div class="col">
                            <small id="questionTypeFillHelp" class="form-text text-danger" v-show="errors.has('questionTypeFill')">
                                {{ errors.first('questionTypeFill') }}
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="questionTestId">{{ $t("translation.questions") }}</label>
                        <multiselect v-model="questionTestId"
                                     :options="tests"
                                     :searchable="true"
                                     :show-labels="false"
                                     aria-describedby="questionTestIdHelp"
                                     id="questionTestId"
                                     v-validate="'required'"
                                     data-vv-name="questionTestId"
                                     data-vv-value-path="value"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('questionTestId') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="questionTestIdHelp" class="form-text text-danger" v-show="errors.has('questionTestId')">
                            {{ errors.first('questionTestId') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="questionAllAnswers">{{ $t("translation.allAnswers") }}</label>
                        <multiselect v-model="questionAllAnswers"
                                     :options="questionAnswers"
                                     :multiple="true"
                                     :searchable="true"
                                     :show-labels="false"
                                     aria-describedby="questionAllAnswersHelp"
                                     id="questionAllAnswers"
                                     v-validate="'required'"
                                     data-vv-name="questionAllAnswers"
                                     data-vv-value-path="value"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('questionAllAnswers') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="questionAllAnswersHelp" class="form-text text-danger" v-show="errors.has('questionAllAnswers')">
                            {{ errors.first('questionAllAnswers') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="questionRightAnswers">{{ $t("translation.rightAnswers") }}</label>
                        <multiselect v-model="questionRightAnswers"
                                     :options="questionAnswers"
                                     :searchable="true"
                                     :multiple="questionType === '2'"
                                     :show-labels="false"
                                     aria-describedby="questionRightAnswersHelp"
                                     id="questionRightAnswers"
                                     v-validate="'required'"
                                     data-vv-name="questionRightAnswers"
                                     data-vv-value-path="value"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('questionRightAnswers') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="questionRightAnswersHelp" class="form-text text-danger" v-show="errors.has('questionRightAnswers')">
                            {{ errors.first('questionRightAnswers') }}
                        </small>
                    </div>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="updateQuestion">
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
                this.modalsIsShowUpdateQuestion = false;

                this.questionTestId = null;
                this.questionName = null;
                this.questionType = null;
                this.questionTypeFill = null;
                this.questionId = null;
                this.questionAnswers = null;
                this.questionAllAnswers = null;
                this.questionRightAnswers = null;
            },

            async updateQuestion() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    const right = this.questionRightAnswers && this.questionRightAnswers.length > 0
                        ? this.questionRightAnswers.map(el => el.id) : this.questionRightAnswers.id;
                    const other = this.questionAllAnswers && this.questionAllAnswers.length > 0
                        ? this.questionAllAnswers.map(el => el.id) : this.questionAllAnswers.id;

                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/updateQuestion', {
                            id: this.questionId,
                            params: {
                                test_id: this.questionTestId.id,
                                name: this.questionName,
                                type: this.questionType,
                                type_fill: this.questionTypeFill,
                                answer: {
                                    right,
                                    other,
                                },
                            },
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.updatedQuestion'),
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
