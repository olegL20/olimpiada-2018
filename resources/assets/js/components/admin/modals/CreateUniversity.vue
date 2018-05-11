<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowCreateUniversity" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.infoAboutUniversity") }}
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
                        <label for="universityPhone">{{ $t("translation.universityPhone") }}</label>
                        <input type="text" class="form-control" id="universityPhone" aria-describedby="universityPhoneHelp"
                               :placeholder="$t('translation.universityPhonePlaceholder')"
                               name="universityPhone"
                               v-validate="'required|max:255'"
                               v-model="universityPhone">
                        <small id="universityPhoneHelp" class="form-text text-danger" v-show="errors.has('universityPhone')">
                            {{ errors.first('universityPhone') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universitySite">{{ $t("translation.universitySite") }}</label>
                        <input type="text" class="form-control" id="universitySite" aria-describedby="universitySiteHelp"
                               :placeholder="$t('translation.universitySitePlaceholder')"
                               name="universitySite"
                               v-validate="'required|url|max:255'"
                               v-model="universitySite">
                        <small id="universitySiteHelp" class="form-text text-danger" v-show="errors.has('universitySite')">
                            {{ errors.first('universitySite') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityZipCode">{{ $t("translation.universityZipCode") }}</label>
                        <input type="text" class="form-control" id="universityZipCode" aria-describedby="universityZipCodeHelp"
                               :placeholder="$t('translation.universityZipCodePlaceholder')"
                               name="universityZipCode"
                               v-validate="'required|max:255'"
                               v-model="universityZipCode">
                        <small id="universityZipCodeHelp" class="form-text text-danger" v-show="errors.has('universityZipCode')">
                            {{ errors.first('universityZipCode') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universityDescription">{{ $t("translation.universityDescription") }}</label>
                        <textarea type="text" class="form-control resize-none h-10" id="universityDescription" aria-describedby="universityDescriptionHelp"
                                  :placeholder="$t('translation.universityDescriptionPlaceholder')"
                                  name="universityDescription"
                                  v-validate="'required|max:255'"
                                  v-model="universityDescription">
                        </textarea>
                        <small id="universityDescriptionHelp" class="form-text text-danger" v-show="errors.has('universityDescription')">
                            {{ errors.first('universityDescription') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <div :class="{ 'is-invalid__date': errors.has('photo') }">
                            <label for="image">{{ $t("translation.photo") }}</label>
                            <vue-base64-file-upload
                                    class="v1"
                                    accept="image/png,image/jpeg"
                                    image-class="img-fluid mt-3 max-w-20"
                                    input-class="input"
                                    :max-size="customImageMaxSize"
                                    @file="onFile"
                                    @load="onLoad"
                                    id="image"
                                    data-vv-name="photo"
                                    data-vv-value-path="file"
                                    v-validate="'required'"
                                    :placeholder="$t('translation.photo')"/>
                            <div v-show="errors.has('photo')" class="invalid-feedback">
                                {{ errors.first('photo') }}
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-md btn-success float-right mt-4"
                        @click="createUniversity">
                        {{ $t("translation.save") }}
                    </button>

                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import VueBase64FileUpload from 'vue-base64-file-upload';

    import MixinModals from '../../../mixins/modals';
    import MixinAdmin from '../../../mixins/admin';
    import MixinPreload from '../../../mixins/preload';

    import { IMAGE_MAX_SIZE } from '../../../utils/constants';

    export default {
        mixins: [
            MixinModals,
            MixinAdmin,
            MixinPreload,
        ],
        components: {
            VueBase64FileUpload,
        },
        data() {
            return {
                customImageMaxSize: IMAGE_MAX_SIZE,
                imageSubstringLength: null,
                imageBase64: null,
            };
        },
        computed: {
            photo() {
                if (this.imageBase64) {
                    return this.imageBase64.substr(this.imageSubstringLength);
                }
                return '';
            },
        },
        methods: {
            onFile(file) {
                this.imageSubstringLength = file.type.length + 13;
            },
            onLoad(dataUri) {
                this.imageBase64 = dataUri;
            },
            hide() {
                this.modalsIsShowCreateUniversity = false;

                this.universityName = null;
                this.universityDescription = null;
                this.universityAddress = null;
                this.universityEmail = null;
                this.universityPhone = null;
                this.universitySite = null;
                this.universityZipCode = null;
            },

            async createUniversity() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/createUniversity', {
                            name: this.universityName,
                            description: this.universityDescription,
                            address: this.universityAddress,
                            email: this.universityEmail,
                            phone: this.universityPhone,
                            site: this.universitySite,
                            zip_code: this.universityZipCode,
                            // parent_id: this.universityParentId,
                            image: this.photo,
                            position: '2',
                        });
                        this.switchRefreshTable(true);
                        this.hide();
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.createUniversity'),
                        });
                    } catch (e) {
                        if (e.status === 404) {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t('translation.inviteNotFound'),
                            });
                        } else {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t(e.message),
                            });
                        }
                        this.hide();
                    }
                }
            },
        },
    };
</script>
