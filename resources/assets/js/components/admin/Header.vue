<template>
    <nav class="navbar">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="mb-3">
                <img src="/images/logo.png" alt="BigFut">
            </router-link>

            <div class="pull-right">
                <template>
                    <template v-if="userRole === 'global_admin'">
                        <router-link :to="{ name: 'admin.university' }" class="link link__accent mr-3">
                            {{ $t('translation.managerUniversity') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.university.admins' }" class="link link__accent mr-3">
                            {{ $t('translation.managerUniversityAdmin') }}
                        </router-link>
                    </template>
                    <template v-if="userRole === 'uni_admin'">
                        <router-link :to="{ name: 'admin.faculty' }" class="link link__accent mr-3">
                            {{ $t('translation.managerFaculty') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.departments' }" class="link link__accent mr-3">
                            {{ $t('translation.managerDepartments') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.majors' }" class="link link__accent mr-3">
                            {{ $t('translation.managerMajors') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.coefficients' }" class="link link__accent mr-3">
                            {{ $t('translation.managerCoefficients') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.tests' }" class="link link__accent mr-3">
                            {{ $t('translation.managerTests') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.questions' }" class="link link__accent mr-3">
                            {{ $t('translation.managerQuestions') }}
                        </router-link>
                        <router-link :to="{ name: 'admin.answers' }" class="link link__accent mr-3">
                            {{ $t('translation.managerAnswers') }}
                        </router-link>
                    </template>
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
