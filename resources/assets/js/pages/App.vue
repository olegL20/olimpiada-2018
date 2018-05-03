<template>
    <div id="app">
        <nav class="navbar">
            <div class="container">
                <router-link :to="{ name: 'home' }">
                    <img src="/images/logo.png" alt="BigFut">
                </router-link>

                <div class="pull-right">
                    <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__accent mr-3">
                        {{ $t("translation.register") }}
                    </a>
                    <a href="javascript:" @click="modalsIsShowLogin = true" class="link link__accent">
                        {{ $t("translation.login") }}
                    </a>
                </div>
            </div>
        </nav>

        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import userMixin from '../mixins/user';
    import modalsMixin from '../mixins/modals';

    export default {
        mixins: [
            userMixin,
            modalsMixin,
        ],
        computed: {
            languages() {
                return Object.keys(this.$i18n.messages);
            },
        },
        methods: {
            lang(data) {
                this.$i18n.locale = data;
                this.userCurrentLang = data;
                this.$validator.locale = data;
            },
            // async logout() {
            //     await this.$store.dispatch('user/logout');
            //
            //     this.$router.push({
            //         name: 'auth.login',
            //     });
            // },
        },
    };
</script>

<style lang="scss">
    .slide-fade-enter-active {
        transition: all .2s ease;
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
