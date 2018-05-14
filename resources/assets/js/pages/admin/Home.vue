<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row border rounded bg-white pt-3 pb-3">

                <div class="col-md-10">
                    <h1>{{ $t('translation.managerUniversityAdmin') }}</h1>
                </div>
                <div class="col-md-12 mt-3">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'admin.university' }" class="link link__accent mr-3">
                                {{ $t('translation.managerUniversity') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'admin.university.admins' }" class="link link__accent mr-3">
                                {{ $t('translation.managerUniversityAdmin') }}
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
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$t('translation.homepage'),
            };
        },
    };
</script>