import { mapTwoWayState } from 'schepotin-vuex-helpers';

export default {
    computed: {
        /**
         * Generates two way {@link https://vuejs.org/v2/guide/computed.html#Computed-Setter | computed properties}
         *
         * Documentation {@link https://www.npmjs.com/package/schepotin-vuex-helpers#maptwowaystate | mapTwoWayState}
         */
        ...mapTwoWayState({
            namespace: 'user',
            prefix: true,
        }, [
            'user',
            'logged',
            'name',
            'surname',
            'email',
            'password',
            'passwordConfirmation',
            'currentLang',
            'dateOfBirth',
            'background',
            'firstStage',
            'universities',
            'selectedUniversity',
            'showPreload',
            'role',
            'token',
            'departments',
            'faculties',
            'majors',
            'selectedDepartment',
            'selectedFaculty',
            'selectedMajor',
            'tests',
            'test',
            'selectedTest',
            'questions',
            'averageScoreSchool',
            'additionalCourses',
            'subjectsScore',
            'scores',
        ]),
    },
};
