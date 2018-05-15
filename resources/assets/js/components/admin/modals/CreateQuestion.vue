<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowCreateQuestion" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.createQuestion") }}
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

                    <multiselect v-model="questionTestId"
                                 :options="tests"
                                 :searchable="true"
                                 :show-labels="false"
                                 label="name"
                                 v-validate="'required'"
                                 track-by="id"
                                 data-vv-name="questionTestId"
                                 data-vv-value-path="value"
                                 :class="{ 'multiselect': true, 'is-invalid': errors.has('teamsLeader') }"
                                 :placeholder="$t('translation.selectFromList')">
                    </multiselect>
                    <div class="invalid-feedback" v-show="errors.has('questionTestId')">
                        {{ errors.first('questionTestId') }}
                    </div>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="createQuestion">
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
                this.modalsIsShowCreateQuestion = false;

                this.questionTestId = null;
                this.questionName = null;
                this.questionType = null;
                this.questionTypeFill = null;
            },

            async createQuestion() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createQuestion', {
                            test_id: this.questionTestId.id,
                            name: this.questionName,
                            type: this.questionType,
                            type_fill: this.questionTypeFill,
                        });
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createQuestion'),
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
            this.$store.dispatch('admin/getTests');
        },
    };
</script>
