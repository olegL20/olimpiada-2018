<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="true" class="modal__wrap">
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
                                       :placeholder="$t('translation.name')"
                                       class="input">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="surname">{{ $t("translation.surname") }}</label>
                                <input v-model="userSurname"
                                       type="text"
                                       id="surname"
                                       :placeholder="$t('translation.surname')"
                                       class="input">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="email">{{ $t("translation.email") }}</label>
                                <input v-model="userEmail"
                                       type="text"
                                       id="email"
                                       :placeholder="$t('translation.email')"
                                       class="input">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="dateOfBirth">{{ $t("translation.birthday") }}</label>
                                <datepicker v-model="userDateOfBirth"
                                            :input-class="'input'"
                                            :format="'dd-MM-yyyy'"
                                            id="dateOfBirth"
                                            :placeholder="$t('translation.birthday')">
                                </datepicker>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="password">{{ $t("translation.password") }}</label>
                                <input v-model="userPassword"
                                       type="password"
                                       id="password"
                                       :placeholder="$t('translation.password')"
                                       class="input">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="rePassword">{{ $t("translation.confirmPassword") }}</label>
                                <input v-model="userPasswordConfirmation"
                                       type="password"
                                       id="rePassword"
                                       :placeholder="$t('translation.confirmPassword')"
                                       class="input">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group mt-4 mb-4">
                                <label for="image">{{ $t("translation.photo") }}</label>
                                <vue-base64-file-upload
                                        class="v1"
                                        accept="image/png,image/jpeg"
                                        image-class="image-circle image-circle__50 mt-3"
                                        input-class="input"
                                        :max-size="customImageMaxSize"
                                        @size-exceeded="onSizeExceeded"
                                        @file="onFile"
                                        @load="onLoad"
                                        id="image"
                                        :placeholder="$t('translation.photo')"/>
                            </div>
                        </div>

                    </div>

                    <button @click="register"
                            type="button"
                            class="btn btn-md btn-accent btn-center mb-4">
                        {{ $t("translation.enter") }}
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

    export default {
        mixins: [
            modalsMixin,
            userMixin,
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
                return this.imageBase64.substr(this.imageSubstringLength);
            },
        },
        methods: {
            async register() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        await this.$store.dispatch('user/register', {
                            email: this.userEmail,
                            password: this.userPassword,
                            name: this.userName,
                            surname: this.userSurname,
                            password_confirmation: this.userPasswordConfirmation,
                            birthday: this.userDateOfBirth,
                            image: this.photo,
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            },
            hide() {
                this.modalsIsShowRegister = false;
            },
            onFile(file) {
                this.imageSubstringLength = file.type.length + 13;
            },
            onLoad(dataUri) {
                this.imageBase64 = dataUri;
                console.log(dataUri); // data-uri string
            },
            onSizeExceeded(size) {
                console.log(`Max size ${size}`);
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
