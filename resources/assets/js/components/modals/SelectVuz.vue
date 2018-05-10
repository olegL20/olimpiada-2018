<template>
    <transition name="slide-fade" mode="out-in">
        <!--<div v-if="true" class="modal__wrap">-->
        <div v-if="modalsIsShowSelectVuz" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content">

                <h4 class="modal__head">
                    {{ $t("translation.selectVuz") }}
                </h4>

                <div class="modal__body">

                    <div class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.vnz") }}</label>
                        <multiselect v-model="userSelectedUniversity"
                                     :options="userUniversities"
                                     :searchable="true"
                                     :show-labels="false"
                                     label="name"
                                     track-by="name"
                                     class="input"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <div v-show="errors.has('email')" class="invalid-feedback">
                            {{ errors.first('email') }}
                        </div>
                    </div>

                    <div class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.faculty") }}</label>
                        <multiselect v-model="userSelectedUniversity"
                                     :options="userUniversities"
                                     :searchable="true"
                                     :show-labels="false"
                                     label="name"
                                     track-by="name"
                                     class="input"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <div v-show="errors.has('email')" class="invalid-feedback">
                            {{ errors.first('email') }}
                        </div>
                    </div>

                    <div class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.speciality") }}</label>
                        <multiselect v-model="userSelectedUniversity"
                                     :options="userUniversities"
                                     :searchable="true"
                                     :show-labels="false"
                                     label="name"
                                     track-by="name"
                                     class="input"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <div v-show="errors.has('email')" class="invalid-feedback">
                            {{ errors.first('email') }}
                        </div>
                    </div>

                    <button @click="select" type="button" class="btn button-md button-accent button-center mb-4">
                        {{ $t("translation.accept") }}
                    </button>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import modalsMixin from '../../mixins/modals';
    import userMixin from '../../mixins/user';

    export default {
        mixins: [
            modalsMixin,
            userMixin,
        ],
        data() {
            return {
            };
        },
        methods: {
            hide() {
                this.modalsIsShowSelectVuz = false;
                this.userEmail = null;
                this.userPassword = null;
            },
            select() {
                console.log('s');
            },
        },
    };
</script>
