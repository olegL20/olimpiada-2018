<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowLogin" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content">

                <h4 class="modal__head">
                    {{ $t("translation.login") }}
                </h4>

                <div class="modal__body">

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

                    <button @click="login" type="button" class="btn-style btn-style-md btn-style-accent btn-style-center mb-4">
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
    import modalsMixin from '../../mixins/modals';
    import userMixin from '../../mixins/user';

    export default {
        mixins: [
            modalsMixin,
            userMixin,
        ],
        methods: {
            hide() {
                this.modalsIsShowLogin = false;
                this.userEmail = null;
                this.userPassword = null;
            },
            async login() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        await this.$store.dispatch('user/login', {
                            email: this.userEmail,
                            password: this.userPassword,
                        });
                        window.Cookies.set('first_stage', 3);
                        this.userFirstStage = 3;
                        this.hide();
                    } catch (e) {
                        this.hide();
                        this.$toast.error({
                            title: this.$t('translation.error'),
                            message: this.$t(e.data.message),
                        });
                    }
                }
            },
        },
    };
</script>
