<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowEditFaculty" class="modal__wrap">
            <div class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.editFaculty") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="facultyName">{{ $t("translation.facultyName") }}</label>
                        <input type="text" class="form-control" id="facultyName" aria-describedby="facultyNameHelp"
                               :placeholder="$t('translation.facultyNamePlaceholder')"
                               name="facultyName"
                               v-validate="'required|max:255'"
                               :data-vv-as="$t('translation.facultyName')"
                               v-model="facultyName">
                        <small id="facultyNameHelp" class="form-text text-danger" v-show="errors.has('facultyName')">
                            {{ errors.first('facultyName') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="facultyName">{{ $t("translation.university") }}</label>
                        <select name="university_id" class="select-style" v-if="universities" v-model="facultyUniversityId">
                            <option value="0">{{ $t('translation.noData') }}</option>
                            <option v-for="item in universities"
                                    :value="item.id"
                            >
                                {{ item.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="facultyDescription">{{ $t("translation.facultyDescription") }}</label>
                        <textarea type="text" class="form-control resize-none h-5" id="facultyDescription" aria-describedby="facultyDescriptionHelp"
                                  :placeholder="$t('translation.facultyDescriptionPlaceholder')"
                                  name="universityDescription"
                                  v-validate="'required|max:255'"
                                  :data-vv-as="$t('translation.facultyDescription')"
                                  v-model="facultyDescription">
                        </textarea>
                        <small id="facultyDescriptionHelp" class="form-text text-danger" v-show="errors.has('facultyDescription')">
                            {{ errors.first('facultyDescription') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <div :class="{ 'is-invalid__date': errors.has('photo') }">
                            <label for="image">{{ $t("translation.photo") }}</label>
                            <div v-if="facultyImage">
                                <img :src="facultyImage.source" v-if="isShowOldImage" class="img-fluid mt-3 max-w-20">
                            </div>
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
                                    :data-vv-as="$t('translation.photo')"
                                    :placeholder="$t('translation.photo')"/>
                            <div v-show="errors.has('photo')" class="invalid-feedback">
                                {{ errors.first('photo') }}
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.cancel") }}
                    </button>

                    <button type="button" class="btn btn-md btn-success mt-4"
                        @click="saveEditFaculty">
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
                latLng: {},
                isShowOldImage: true,
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
        watch: {
            universities() {
                this.facultyUniversityId = this.universities[0].id;
            },
        },
        methods: {
            setPlace(universityAddress) {
                this.latLng = {
                    lat: universityAddress.geometry.location.lat(),
                    lng: universityAddress.geometry.location.lng(),
                };
                this.universityAddress = universityAddress.formatted_address;
            },
            onFile(file) {
                this.imageSubstringLength = file.type.length + 13;
            },
            onLoad(dataUri) {
                this.imageBase64 = dataUri;
                this.isShowOldImage = false;
            },
            hide() {
                this.modalsIsShowEditFaculty = false;

                this.facultyId = null;
                this.facultyUniversityId = this.universities[0].id;
                this.facultyName = null;
                this.facultyDescription = null;
                this.facultyImage = null;

                this.isShowOldImage = true;
            },
            async saveEditFaculty() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        const params = {
                            university_id: this.facultyUniversityId,
                            name: this.facultyName,
                            description: this.facultyDescription,
                            image: this.photo,
                        };
                        await this.$store.dispatch('admin/editFaculty', {
                            id: this.facultyId,
                            params,
                        });
                        this.switchRefreshTable(true);
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
                    }
                    this.hidePreloader();
                    this.hide();
                }
            },
        },
    };
</script>
