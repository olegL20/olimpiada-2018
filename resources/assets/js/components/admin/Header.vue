<template>
    <nav class="navbar">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="mb-3">
                <img src="/images/logo.png" alt="BigFut">
            </router-link>

            <div class="pull-right">
                <template v-if="userLogged">

                    <span class="d-inline-block mb-3 mr-4 notification__parent">

                        <strong>{{ $t("translation.vnz") }}:</strong>

                        <span v-show="isShowUniversityDetails" class="notification__child">
                            <span class="row">

                                <span class="col-4">
                                    <img :src="userUser.image.source" class="image-circle image-circle__60 mt-3">
                                </span>

                                <span class="col">
                                    <p class="mb-0">{{ $t("translation.faculty") }}:</p>
                                    <strong><p class="dark-color lh-text mb-0">ЕЛіТ</p></strong>
                                    <p class="mt-2 mb-0">{{ $t("translation.speciality") }}:</p>
                                    <strong><p class="dark-color lh-text mb-0">Прикладна математика</p></strong>
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
                            <template v-if="userUser.image.source">
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
                    <router-link :to="{ name: 'admin.university' }" class="link link__accent mr-3">
                        {{ $t('translation.managerUniversity') }}
                    </router-link>
                    <router-link :to="{ name: 'admin.university.administrators' }" class="link link__accent mr-3">
                        {{ $t('translation.managerUniversityAdmin') }}
                    </router-link>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    import userMixin from '../../mixins/user';
    import modalsMixin from '../../mixins/modals';

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
                    name: 'auth.login',
                });
            },
        },
    };
</script>
