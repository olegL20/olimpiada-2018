<template>
    <div id="app" ref="app" :class="userBackground">
        <user-header v-if="false"></user-header>
        <admin-header v-else ></admin-header>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import * as userHeader from '../components/Header.vue';
    import * as adminHeader from '../components/admin/Header.vue';
    import userMixin from '../mixins/user';

    export default {
        mixins: [
            userMixin,
        ],
        components: {
            userHeader,
            adminHeader,
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
