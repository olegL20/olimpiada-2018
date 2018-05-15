<template>
    <nav class="navbar navbar__custom">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="mb-3">
                <img src="/images/logo.png" alt="BigFut">
            </router-link>

            <div class="pull-right">
                <template v-if="userLogged">

                    <span v-if="userFirstStage > 3" class="d-inline-block mb-3 mr-4 notification__parent">

                        <strong>{{ $t("translation.vnz") }}:</strong>

                        <span v-show="isShowUniversityDetails" class="notification__child">
                            <span class="row">

                                <span class="col-4">
                                    <img v-if="userSelectedUniversity && userSelectedUniversity.image" :src="userSelectedUniversity.image.source" class="image-circle image-circle__60 mt-3">
                                </span>

                                <span class="col">
                                    <span class="mb-0">{{ $t("translation.faculty") }}:</span>
                                    <strong>
                                        <span class="dark-color lh-text mb-0">
                                            {{ userSelectedFaculty ? userSelectedFaculty.name : $t("translation.notSelected") }}
                                        </span>
                                    </strong>
                                    <span class="mt-2 mb-0">{{ $t("translation.speciality") }}:</span>
                                    <strong>
                                        <span class="dark-color lh-text mb-0">
                                            {{ userSelectedMajor ? userSelectedMajor.name : $t("translation.notSelected") }}
                                        </span>
                                    </strong>
                                </span>

                            </span>
                        </span>

                        <a href="javascript:"
                           @mouseover="isShowUniversityDetails = true"
                           @mouseleave="isShowUniversityDetails = false"
                           class="link link__accent-dark">
                            Сумський державний університет
                        </a>

                    </span>

                    <span class="d-inline-block">
                        <strong>{{ $t("translation.welcome") }}:</strong>
                        <a href="javascript:" class="link link__accent mr-3">
                            {{ userUser.name }}
                            <span @click="logout" class="ml-2">{{ $t("translation.exit") }}</span>
                            <template v-if="userUser.image">
                                <img :src="userUser.image.source" class="image-circle image-circle__45 ml-2 mb-3">
                            </template>
                            <template v-else>
                                <img src="/images/no-photo.png" class="image-circle image-circle__45 ml-2 mb-3">
                            </template>
                        </a>
                    </span>

                </template>

                <template v-else-if="$route.name === 'user.room'">
                    <span class="d-inline-block">
                        <strong>
                            {{ $t("translation.welcome") }}:
                            {{ $t("translation.entrant") }}!
                        </strong>
                    </span>
                </template>

                <template v-else>
                    <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__accent mr-3">
                        {{ $t("translation.register") }}
                    </a>
                    <a href="javascript:" @click="modalsIsShowLogin = true" class="link link__accent">
                        {{ $t("translation.login") }}
                    </a>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    import userMixin from '../mixins/user';
    import modalsMixin from '../mixins/modals';

    export default {
        mixins: [
            modalsMixin,
            userMixin,
        ],
        data() {
            return {
                isShowUniversityDetails: false,
            };
        },
        methods: {
            async logout() {
                await this.$store.dispatch('user/logout');

                this.$router.push({
                    name: 'home',
                });
            },
        },
    };
</script>
