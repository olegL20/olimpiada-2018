<template>
    <div class="confirmation">
        <div class="container">
            <div class="row">
                <div v-if="status" class="alert alert-accent" role="alert">
                    <h4 class="alert-heading">{{ $t("translation.confirmationEmail") }}</h4>
                    <p>{{ $t("translation.yourEmailConfirm")}}</p>
                    <hr>
                    <p class="mb-0">
                        <button @click="modalsIsShowLogin = true" class="btn button-md button-accent">{{ $t("translation.login") }}</button>
                    </p>
                </div>
                <div v-else class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">{{ $t("translation.confirmationEmail") }}</h4>
                    <p>{{ $t("translation.yourEmailUnConfirm")}}</p>
                    <hr>
                    <p class="mb-0">
                        <router-link tag="button" :to="{ name: 'home' }" class="btn button-md button-error">
                            {{ $t("translation.goHome") }}
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <login-modal></login-modal>
        <register-modal></register-modal>
    </div>
</template>

<script>
    import * as loginModal from '../../components/modals/Login.vue';
    import * as registerModal from '../../components/modals/Register.vue';
    import userMixin from '../../mixins/user';
    import preloadMixin from '../../mixins/preload';

    export default {
        components: {
            loginModal,
            registerModal,
        },
        mixins: [
            userMixin,
            preloadMixin,
        ],
        data() {
            return {
                status: true,
            };
        },
        metaInfo() {
            return {
                title: this.$t('translation.confirmationEmail'),
            };
        },
        async mounted() {
            this.showPreloader();
            try {
                await this.$store.dispatch('user/confirmation', {
                    token: this.$route.params.id,
                });
            } catch (e) {
                this.status = false;
                this.$toast.error({
                    title: this.$t('translation.error'),
                    message: this.$t(e.data.message),
                });
            }
            this.hidePreloader();
        },
    };
</script>
