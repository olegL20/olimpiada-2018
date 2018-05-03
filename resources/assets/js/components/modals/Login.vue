<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowLogin" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content">

                <h4 class="modal__head">
                    {{ $t("translation.login") }}
                </h4>

                <div class="modal__body">

                    <div class="form-group mt-4 mb-4">
                        <label for="email">{{ $t("translation.yourEmail") }}</label>
                        <input type="text"
                               id="email"
                               :placeholder="$t('translation.yourEmail')"
                               class="input">
                    </div>

                    <div class="form-group mb-4">
                        <label for="password">{{ $t("translation.password") }}</label>
                        <input type="password"
                               id="password"
                               :placeholder="$t('translation.password')"
                               class="input">
                    </div>

                    <button type="button" class="btn btn-md btn-accent btn-center mb-4">
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

    export default {
        mixins: [
            modalsMixin,
        ],
        methods: {
            hide() {
                this.modalsIsShowLogin = false;
            },
        },
    };
</script>
