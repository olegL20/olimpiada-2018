<template>
    <div class="homepage">
        <div class="container">

            <div v-if="emailConfirmSuccess" class="alert alert-accent" role="alert">
                <h4 class="alert-heading">{{ $t("translation.registrationConfirm") }}</h4>
                <p>{{ $t("translation.yourEmailConfirm") }}</p>
                <hr>
                <router-link :to="{ name: 'home' }" tag="button" type="button" class="btn btn-md btn-accent">
                    {{ $t("translation.goHome") }}
                </router-link>
            </div>

            <div v-else-if="emailConfirmError" class="alert alert-danger" role="alert">
                <h4 class="alert-heading">{{ $t(emailConfirmError) }}</h4>
                <hr>
                <router-link :to="{ name: 'home' }" tag="button" type="button" class="btn btn-md btn-error">
                    {{ $t("translation.goHome") }}
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                emailConfirmSuccess: false,
                emailConfirmError: '',
            };
        },
        metaInfo() {
            return {
                title: this.$t('translation.confirmationEmail'),
            };
        },
        async mounted() {
            try {
                await this.$store.dispatch('user/confirmation', {
                    token: this.$route.params.id,
                });
                this.emailConfirmSuccess = true;
            } catch (e) {
                console.log();
                this.emailConfirmError = e.data.message;
            }
        },
        beforeDestroy() {
            this.emailConfirmError = '';
        },
    };
</script>
