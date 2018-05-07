<template>
    <div class="room">
        <div class="container">
            <div class="row">

                <div class="col-md-9 col-sm-8">
                    <div class="things"></div>
                </div>

                <div class="col-md-3 col-sm-4">

                    <p class="pull-right">
                        {{ $t("translation.stage") }}:
                        <span class="accent-color">
                            <strong>{{ $t("translation.homeAdventures") }}</strong>
                        </span>
                    </p>

                    <img src="/images/calendar1.png" class="w-100 clearfix mb-3">

                    <p class="pull-right mb-1">
                        {{ $t("translation.scores") }}:
                        <span class="accent-color">
                            <strong>0 б</strong>
                        </span>
                    </p>

                    <p class="pull-right">
                        {{ $t("translation.passingTime") }}:
                        <span class="accent-color">
                            <strong>00:32</strong>
                        </span>
                    </p>

                    <div @click="isShowPhone = true"
                         class="phone clearfix"
                         :class="{ 'phone__show': isShowPhone }">

                        <div v-if="!isShowMessage" @click="isShowMessage = true" :disabled="!isShowPhone" class="message__new-message"></div>

                        <template v-else-if="isShowMessage">

                            <p class="message__name">{{ $t("translation.ann") }}</p>

                            <div class="message__ann">

                                <template v-if="userFirstStage === 1">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annHello") }}</p>

                                        <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.next") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 2">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annRegister") }}</p>

                                        <a href="javascript:" @click="modalsIsShowLogin = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.login") }}
                                        </a>
                                        <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.register") }}
                                        </a>
                                    </div>
                                </template>

                                <div v-if="userFirstStage === 3" class="message__quote">
                                    <p class="mb-0">{{ $t("translation.annAdvice") }}</p>

                                    <a href="javascript:" @click="modalsIsShowAdvice = true" class="link link__white pull-right mr-4">
                                        {{ $t("translation.next") }}
                                    </a>
                                </div>

                            </div>

                        </template>

                    </div>

                </div>

            </div>
        </div>

        <login-modal></login-modal>
        <register-modal></register-modal>
        <advice-modal></advice-modal>
        <select-vuz-modal></select-vuz-modal>
    </div>
</template>

<script>
    import userMixin from '../mixins/user';
    import modalsMixin from '../mixins/modals';
    import * as loginModal from '../components/modals/Login.vue';
    import * as registerModal from '../components/modals/Register.vue';
    import * as adviceModal from '../components/modals/Advice.vue';
    import * as SelectVuzModal from '../components/modals/SelectVuz.vue';

    export default {
        components: {
            SelectVuzModal,
            loginModal,
            registerModal,
            adviceModal,
        },
        mixins: [
            modalsMixin,
            userMixin,
        ],
        data() {
            return {
                isShowMessage: false,
                isShowPhone: false,
            };
        },
        metaInfo() {
            return {
                title: this.$t('translation.room'),
            };
        },
        created() {
            this.userBackground = 'background__blue';
        },
        beforeDestroy() {
            this.userBackground = 'background__white';
        },
        mounted() {
            this.userFirstStage = Number(window.Cookies.get('first_stage'));
        },
    };
</script>
