<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.menu') }}</h1>
                </div>
                <div class="col-md-12 mt-3">
                    <ul>
                        <template v-if="userRole === 'global_admin'">
                            <li>
                                <router-link :to="{ name: 'admin.university.admins' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerUniversityAdmin') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.university' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerUniversity') }}
                                </router-link>
                            </li>
                        </template>
                        <template v-if="userRole === 'uni_admin'">
                            <li>
                                <router-link :to="{ name: 'admin.faculty' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerFaculty') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.departments' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerDepartments') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.majors' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerMajors') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.coefficients' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerCoefficients') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.tests' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerTests') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.questions' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerQuestions') }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'admin.answers' }" class="link link__accent mr-3">
                                    {{ $t('translation.managerAnswers') }}
                                </router-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userMixin from '../../mixins/user';

    export default {
        mixins: [
            userMixin,
        ],
        metaInfo() {
            return {
                title: this.$t('translation.homepage'),
            };
        },
    };
</script>