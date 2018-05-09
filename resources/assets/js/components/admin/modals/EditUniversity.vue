<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowEditUniversity" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.editUniversity") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="universityName">{{ $t("translation.universityName") }}</label>
                        <input type="text" class="form-control" id="universityName" aria-describedby="universityNameHelp"
                               :placeholder="$t('translation.universityNamePlaceholder')"
                               name="universityName"
                               v-validate="'required|max:255'"
                               v-model="universityName">
                        <small id="universityNameHelp" class="form-text text-danger" v-show="errors.has('universityName')">
                            {{ errors.first('universityName') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityDescription">{{ $t("translation.universityDescription") }}</label>
                        <textarea type="text" class="form-control resize-none" id="universityDescription" aria-describedby="universityDescriptionHelp"
                                  :placeholder="$t('translation.universityDescriptionPlaceholder')"
                                  name="universityDescription"
                                  v-validate="'required'"
                                  v-model="universityDescription">
                        </textarea>
                        <small id="universityDescriptionHelp" class="form-text text-danger" v-show="errors.has('universityDescription')">
                            {{ errors.first('universityDescription') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityAddress">{{ $t("translation.universityAddress") }}</label>
                        <input type="text" class="form-control" id="universityAddress" aria-describedby="universityAddress"
                               :placeholder="$t('translation.universityAddressPlaceholder')"
                               name="universityAddress"
                               v-validate="'required|max:255'"
                               v-model="universityAddress">
                        <small id="universityAddressHelp" class="form-text text-danger" v-show="errors.has('universityAddress')">
                            {{ errors.first('universityAddress') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityEmail">{{ $t("translation.universityEmail") }}</label>
                        <input type="email" class="form-control" id="universityEmail" aria-describedby="universityEmailHelp"
                               :placeholder="$t('translation.universityEmailPlaceholder')"
                               name="universityEmail"
                               v-validate="'required|email|max:255'"
                               v-model="universityEmail">
                        <small id="universityEmailHelp" class="form-text text-danger" v-show="errors.has('universityEmail')">
                            {{ errors.first('universityEmail') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityPhone">{{ $t("translation.universityPhone") }}</label>
                        <input type="email" class="form-control" id="universityPhone" aria-describedby="universityPhoneHelp"
                               :placeholder="$t('translation.universityPhonePlaceholder')"
                               name="universityPhone"
                               v-validate="'required'"
                               v-model="universityPhone">
                        <small id="universityPhoneHelp" class="form-text text-danger" v-show="errors.has('universityPhone')">
                            {{ errors.first('universityPhone') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universitySite">{{ $t("translation.universitySite") }}</label>
                        <input type="email" class="form-control" id="universitySite" aria-describedby="universitySiteHelp"
                               :placeholder="$t('translation.universitySitePlaceholder')"
                               name="universitySite"
                               v-validate="'url|max:255'"
                               v-model="universitySite">
                        <small id="universitySiteHelp" class="form-text text-danger" v-show="errors.has('universitySite')">
                            {{ errors.first('universitySite') }}
                        </small>
                    </div>

                    <button type="button" class="btn btn-md btn-success float-right mt-4">
                        {{ $t("translation.save") }}
                    </button>

                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import modalsMixin from '../../../mixins/modals';

    export default {
        mixins: [
            modalsMixin,
        ],
        data() {
            return {
                universityName: null,
                universityDescription: null,
                universityAddress: null,
                universityEmail: null,
                universityPhone: null,
                universitySite: null,
            };
        },
        methods: {
            hide() {
                this.modalsIsShowEditUniversity = false;
                this.universityName = null;
                this.universityDescription = null;
                this.universityAddress = null;
                this.universityEmail = null;
                this.universityPhone = null;
                this.universitySite = null;
            },
        },
    };
</script>
