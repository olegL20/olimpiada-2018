import { mapTwoWayState } from 'schepotin-vuex-helpers';

export default {
    computed: {
        /**
         * Generates two way {@link https://vuejs.org/v2/guide/computed.html#Computed-Setter | computed properties}
         *
         * Documentation {@link https://www.npmjs.com/package/schepotin-vuex-helpers#maptwowaystate | mapTwoWayState}
         */
        ...mapTwoWayState({
            namespace: 'admin',
            prefix: false,
        }, [
            'universityId',
            'universityAddress',
            'universityDescription',
            'universityEmail',
            'universityName',
            'universityPhone',
            'universitySite',
            'universityZipCode',
            'universityParentId',
            'universityParentsId',
            'universities',
            'universityImage',
            'universityPosition',
            'facultyId',
            'facultyUniversityId',
            'facultyName',
            'facultyDescription',
            'facultyImage',
            'tests',
            'testId',
            'testName',
            'testDescription',
            'questionTestId',
            'questionName',
            'questionType',
            'questionTypeFill',
            'questionAnswer',
            'questionAnswers',
            'questionAllAnswers',
            'questionRightAnswers',
            'questionId',
            'answerId',
            'answerQuestionId',
            'answerName',
            'coefficientId',
            'coefficientName',
            'coefficientMajorId',
            'coefficientCoefficient',
            'majors',
            'tests',
            'questions',
            'majorDescription',
            'majorId',
            'majorDepartmentId',
            'majorName',
            'majorCoefficient',
            'departments',
            'departmentId',
            'departmentFacultyId',
            'departmentName',
            'departmentDescription',
            'faculties',
            'facultyId',
            'facultyUniversityId',
            'facultyName',
            'facultyDescription',
            'facultyImage',
        ]),
    },
};
