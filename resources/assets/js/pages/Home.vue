<template>
    <div class="homepage">
        <div class="container">
            <div class="row">
                <div class="col-md-6">

                    <h1>{{ $t("translation.stride") }} -<br>
                        <span class="accent-color">
                            {{ $t("translation.greatFuture") }}
                        </span>
                    </h1>

                    <p class="gray-color mt-4 mb-1">{{ $t("translation.beforeEveryone") }}:</p>

                    <ul class="list list__accent mb-5">
                        <li>
                            <span>{{ $t("translation.selectUniversity") }}</span>
                        </li>
                        <li>
                            <span>{{ $t("translation.acquaintWithUniversity") }}</span>
                        </li>
                        <li>
                            <span>{{ $t("translation.tryYourself") }}</span>
                        </li>
                        <li>
                            <span>{{ $t("translation.acquaintWithStudentLife") }}</span>
                        </li>
                    </ul>

                    <button type="button" class="btn btn-md btn-accent">
                        {{ $t("translation.forward") }}
                    </button>

                </div>
                <div class="d-none d-md-block bg-right-image"></div>
            </div>
        </div>
        <login-modal></login-modal>
        <register-modal></register-modal>
    </div>
</template>

<script>
    import * as loginModal from '../components/modals/Login.vue';
    import * as registerModal from '../components/modals/Register.vue';

    export default {
        components: {
            loginModal,
            registerModal,
        },
        metaInfo() {
            return {
                title: this.$t('translation.homepage'),
            };
        },
    };
</script>
