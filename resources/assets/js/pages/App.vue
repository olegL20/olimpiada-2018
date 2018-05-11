<template>
    <div id="app" ref="app" :class="userBackground">
        <admin-header v-if="isAdmin"></admin-header>
        <user-header v-else></user-header>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <admin-footer v-if="isAdmin"></admin-footer>
        <preload v-if="showPreload"></preload>
    </div>
</template>

<script>
    import * as userHeader from '../components/Header.vue';
    import * as adminHeader from '../components/admin/Header.vue';
    import * as adminFooter from '../components/admin/Footer.vue';

    import userMixin from '../mixins/user';
    import preloadMixin from '../mixins/preload';

    export default {
        data() {
            return {
                isAdmin: true,
            };
        },
        mixins: [
            userMixin,
            preloadMixin,
        ],
        components: {
            userHeader,
            adminHeader,
            adminFooter,
        },
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
        },
        created() {
            this.userBackground = 'background__white';
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
