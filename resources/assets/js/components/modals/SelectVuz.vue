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
                                     aria-describedby="userSelectedUniversityHelp"
                                     id="userSelectedUniversityId"
                                     v-validate="'required'"
                                     data-vv-name="userSelectedUniversity"
                                     data-vv-value-path="value"
                                     @input="selectFaculty"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('userSelectedUniversity') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="userSelectedUniversityHelp" class="form-text text-danger" v-show="errors.has('userSelectedUniversity')">
                            {{ errors.first('userSelectedUniversity') }}
                        </small>
                    </div>

                    <div v-if="userFaculties && userFaculties.length > 0" class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.faculty") }}</label>
                        <multiselect v-model="userSelectedFaculty"
                                     :options="userFaculties"
                                     :searchable="true"
                                     :show-labels="false"
                                     aria-describedby="userSelectedFacultyHelp"
                                     id="userSelectedFacultyId"
                                     v-validate="'required'"
                                     data-vv-name="userSelectedFaculty"
                                     data-vv-value-path="value"
                                     @input="selectDepartment"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('userSelectedFaculty') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="userSelectedFacultyHelp" class="form-text text-danger" v-show="errors.has('userSelectedFaculty')">
                            {{ errors.first('userSelectedFaculty') }}
                        </small>
                    </div>

                    <div v-if="userDepartments && userDepartments.length > 0" class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.department") }}</label>
                        <multiselect v-model="userSelectedDepartment"
                                     :options="userDepartments"
                                     :searchable="true"
                                     :show-labels="false"
                                     aria-describedby="userSelectedDepartmentHelp"
                                     id="userSelectedDepartmentId"
                                     v-validate="'required'"
                                     data-vv-name="userSelectedDepartment"
                                     data-vv-value-path="value"
                                     @input="selectMajor"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('userSelectedDepartment') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="userSelectedDepartmentHelp" class="form-text text-danger" v-show="errors.has('userSelectedDepartment')">
                            {{ errors.first('userSelectedDepartment') }}
                        </small>
                    </div>

                    <div v-if="userMajors && userMajors.length > 0" class="form-group mt-4 mb-4">
                        <label>{{ $t("translation.major") }}</label>
                        <multiselect v-model="userSelectedMajor"
                                     :options="userMajors"
                                     :searchable="true"
                                     :show-labels="false"
                                     aria-describedby="userSelectedMajorHelp"
                                     id="userSelectedMajorId"
                                     v-validate="'required'"
                                     data-vv-name="userSelectedMajor"
                                     data-vv-value-path="value"
                                     :class="{ 'multiselect': true, 'is-invalid': errors.has('userSelectedMajor') }"
                                     label="name"
                                     track-by="id"
                                     :placeholder="$t('translation.selectFromList')">
                        </multiselect>
                        <small id="userSelectedMajorHelp" class="form-text text-danger" v-show="errors.has('userSelectedMajor')">
                            {{ errors.first('userSelectedMajor') }}
                        </small>
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
            selectFaculty() {
                if (this.userSelectedUniversity) {
                    this.$store.dispatch('user/getFaculties', {
                        id: this.userSelectedUniversity.id,
                    });
                }
            },
            selectDepartment() {
                if (this.userSelectedFaculty) {
                    this.$store.dispatch('user/getDepartments', {
                        id: this.userSelectedFaculty.id,
                    });
                }
            },
            selectMajor() {
                if (this.userSelectedDepartment) {
                    this.$store.dispatch('user/getMajors', {
                        id: this.userSelectedDepartment.id,
                    });
                }
            },
            hide() {
                this.modalsIsShowSelectVuz = false;
            },
            async select() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    this.hide();
                    window.Cookies.set('first_stage', 4);
                    this.userFirstStage = 4;
                    window.Cookies.set('university', JSON.stringify(this.userSelectedUniversity));
                    window.Cookies.set('faculty', JSON.stringify(this.userSelectedFaculty));
                    window.Cookies.set('major', JSON.stringify(this.userSelectedMajor));
                }
            },
        },
    };
</script>
