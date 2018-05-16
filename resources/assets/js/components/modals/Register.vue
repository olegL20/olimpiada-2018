<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowRegister" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.register") }}
                </h4>

                <div class="modal__body">

                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="name">{{ $t("translation.name") }}</label>
                                <input v-model="userName"
                                       type="text"
                                       id="name"
                                       name="name"
                                       v-validate="'required|min:3'"
                                       :class="{ 'is-invalid input__danger': errors.has('name') }"
                                       :placeholder="$t('translation.name')"
                                       class="input">
                                <div v-show="errors.has('name')" class="invalid-feedback">
                                    {{ errors.first('name') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="surname">{{ $t("translation.surname") }}</label>
                                <input v-model="userSurname"
                                       type="text"
                                       id="surname"
                                       name="surname"
                                       v-validate="'required|min:3'"
                                       :class="{ 'is-invalid input__danger': errors.has('surname') }"
                                       :placeholder="$t('translation.surname')"
                                       class="input">
                                <div v-show="errors.has('surname')" class="invalid-feedback">
                                    {{ errors.first('surname') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="dateOfBirth">{{ $t("translation.birthday") }}</label>
                                <div :class="{ 'is-invalid__date': errors.has('dateOfBirth') }">
                                    <datepicker v-model="userDateOfBirth"
                                                :input-class="'input'"
                                                :format="'yyyy-MM-dd'"
                                                data-vv-name="dateOfBirth"
                                                data-vv-value-path="selectedDate"
                                                :initialView="'year'"
                                                v-validate="'required'"
                                                id="dateOfBirth"
                                                :placeholder="$t('translation.birthday')">
                                    </datepicker>
                                    <div v-show="errors.has('dateOfBirth')" class="invalid-feedback">
                                        {{ errors.first('dateOfBirth') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="email">{{ $t("translation.email") }}</label>
                                <input v-model="userEmail"
                                       type="text"
                                       id="email"
                                       name="email"
                                       v-validate="'required|email'"
                                       :class="{ 'is-invalid input__danger': errors.has('email') }"
                                       :placeholder="$t('translation.email')"
                                       class="input">
                                <div v-show="errors.has('email')" class="invalid-feedback">
                                    {{ errors.first('email') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="password">{{ $t("translation.password") }}</label>
                                <input v-model="userPassword"
                                       type="password"
                                       id="password"
                                       name="password"
                                       v-validate="'required|min:8'"
                                       :class="{ 'is-invalid input__danger': errors.has('password') }"
                                       :placeholder="$t('translation.password')"
                                       class="input">
                                <div v-show="errors.has('password')" class="invalid-feedback">
                                    {{ errors.first('password') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="rePassword">{{ $t("translation.confirmPassword") }}</label>
                                <input v-model="userPasswordConfirmation"
                                       type="password"
                                       id="rePassword"
                                       name="rePassword"
                                       v-validate="'required|confirmed:password'"
                                       :class="{ 'is-invalid input__danger': errors.has('rePassword') }"
                                       :placeholder="$t('translation.confirmPassword')"
                                       class="input">
                                <div v-show="errors.has('rePassword')" class="invalid-feedback">
                                    {{ errors.first('rePassword') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <div :class="{ 'is-invalid__date': errors.has('photo') }">
                                    <label for="image">{{ $t("translation.photo") }}</label>
                                    <vue-base64-file-upload
                                            class="v1"
                                            accept="image/png,image/jpeg"
                                            image-class="image-circle image-circle__45 mt-3"
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
                        </div>

                    </div>

                    <button @click="register"
                            type="button"
                            class="btn button-md button-accent button-center mb-4">
                        {{ $t("translation.register") }}
                    </button>

                    <p class="small">
                        {{ $t("translation.enterTheSocialNetwork") }}:
                    </p>

                    <router-link :to="{ name: 'home' }" class="link mr-3">
                        <i class="fa fa-google-plus-square fa-2x mr-2 fa-relative" aria-hidden="true"></i>
                        <span>{{ $t("translation.throughGoogle") }}</span>
                    </router-link>
                    <router-link :to="{ name: 'home' }" class="link">
                        <i class="fa fa-facebook-square fa-2x mr-2 fa-relative" aria-hidden="true"></i>
                        {{ $t("translation.throughFacebook") }}
                    </router-link>

                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import VueBase64FileUpload from 'vue-base64-file-upload';
    import modalsMixin from '../../mixins/modals';
    import userMixin from '../../mixins/user';
    import preloadMixin from '../../mixins/preload';

    export default {
        mixins: [
            modalsMixin,
            userMixin,
            preloadMixin,
        ],
        components: {
            Datepicker,
            VueBase64FileUpload,
        },
        data() {
            return {
                customImageMaxSize: 3,
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
            async register() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    this.showPreloader();
                    try {
                        const params = {
                            email: this.userEmail,
                            password: this.userPassword,
                            name: this.userName,
                            surname: this.userSurname,
                            password_confirmation: this.userPasswordConfirmation,
                            birthday: window.luxon.DateTime.fromJSDate(this.userDateOfBirth).toFormat('yyyy-LL-dd'),
                            image: this.photo,
                        };
                        if (this.$route.name === 'auth.invite') {
                            await this.$store.dispatch('user/registerInvite', {
                                id: this.$route.params.id,
                                params,
                            });
                            this.$router.push({
                                name: 'home',
                            });
                        } else {
                            await this.$store.dispatch('user/register', {
                                params,
                            });
                        }
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.emailSend'),
                        });
                        this.hide();
                        window.Cookies.set('first_stage', 2);
                        this.userFirstStage = 2;
                    } catch (e) {
                        if (e.status === 404 && this.$route.name === 'auth.invite') {
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
                this.hidePreloader();
            },
            hide() {
                if (this.$route.name === 'auth.invite') {
                    this.modalsIsShowRegister = false;
                    this.$router.push({
                        name: 'home',
                    });
                } else {
                    this.modalsIsShowRegister = false;
                }
                this.userName = null;
                this.userSurname = null;
                this.userDateOfBirth = null;
                this.userEmail = null;
                this.userPassword = null;
                this.userPasswordConfirmation = null;
            },
            onFile(file) {
                this.imageSubstringLength = file.type.length + 13;
            },
            onLoad(dataUri) {
                this.imageBase64 = dataUri;
            },
        },
        beforeDestroy() {
            this.userName = null;
            this.userSurname = null;
            this.userDateOfBirth = null;
            this.userEmail = null;
            this.userPassword = null;
            this.userPasswordConfirmation = null;
        },
    };
</script>
