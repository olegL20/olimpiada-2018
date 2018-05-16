import admin from '../../../api/admin';
import * as types from '../admin/mutation-types';

export const destroyUniversity = async (context, payload) => {
    const json = await admin.destroyUniversity(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const getUniversity = async ({ commit }, payload) => {
    const json = await admin.getUniversity(payload);

    if (json.status === 200) {
        commit(types.UNIVERSITY_ID, json.data.data.id);
        commit(types.UNIVERSITY_NAME, json.data.data.name);
        commit(types.UNIVERSITY_ADDRESS, json.data.data.address);
        commit(types.UNIVERSITY_DESCRIPTION, json.data.data.description);
        commit(types.UNIVERSITY_EMAIL, json.data.data.email);
        commit(types.UNIVERSITY_PHONE, json.data.data.phone);
        commit(types.UNIVERSITY_ZIP_CODE, json.data.data.zip_code);
        commit(types.UNIVERSITY_SITE, json.data.data.site);
        commit(types.UNIVERSITY_PARENT_ID, json.data.data.parent_id);
        commit(types.UNIVERSITY_IMAGE, json.data.data.image);
        commit(types.UNIVERSITY_POSITION, json.data.data.position);
        return json.data;
    }

    throw json;
};

export const editUniversity = async (context, { id, params }) => {
    const json = await admin.editUniversity(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const createUniversity = async (context, payload) => {
    const json = await admin.createUniversity(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getAllUniversities = async ({ commit }) => {
    const json = await admin.getAllUniversities();

    if (json.status === 200) {
        commit(types.UNIVERSITIES, json.data.data.data);
        return json.data;
    }

    throw json;
};

export const getAllUniversitiesForUniAdmin = async ({ commit }) => {
    const json = await admin.getAllUniversitiesForUniAdmin();

    if (json.status === 200) {
        commit(types.UNIVERSITIES, json.data.data.data);
        return json.data;
    }

    throw json;
};

export const sendInviteUniversityAdmin = async (context, payload) => {
    const json = await admin.sendInviteUniversityAdmin(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const createTest = async (context, payload) => {
    const json = await admin.createTest(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getTest = async ({ commit }, payload) => {
    const json = await admin.getTest(payload);

    if (json.status === 200) {
        commit(types.TEST_ID, json.data.data.id);
        commit(types.TEST_NAME, json.data.data.name);
        return json.data;
    }

    throw json;
};

export const getTests = async ({ commit }) => {
    const json = await admin.getTests();

    if (json.status === 200) {
        commit(types.TESTS, json.data.data.data);
        return json.data;
    }

    throw json;
};


export const updateTest = async (context, { id, params }) => {
    const json = await admin.updateTest(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyTest = async (context, payload) => {
    const json = await admin.destroyTest(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const createQuestion = async (context, payload) => {
    const json = await admin.createQuestion(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getQuestion = async ({ commit }, payload) => {
    const json = await admin.getQuestion(payload);

    if (json.status === 200) {
        commit(types.QUESTION_TEST_ID, json.data.data.test);
        commit(types.QUESTION_NAME, json.data.data.name);
        commit(types.QUESTION_TYPE, json.data.data.type);
        commit(types.QUESTION_TYPE_FILL, json.data.data.type_fill);
        commit(types.QUESTION_ID, json.data.data.id);
        commit(types.QUESTION_ANSWER, json.data.data.answer);
        commit(types.QUESTION_ANSWERS, json.data.data.answers);

        if (json.data.data.answer.right) {
            if (json.data.data.type === 1) {
                commit(types.QUESTION_RIGHT_ANSWERS, json.data.data.answer.right[0]);
            } else {
                commit(types.QUESTION_RIGHT_ANSWERS, json.data.data.answer.right);
            }
        }

        if (json.data.data.answer.other) {
            commit(types.QUESTION_ALL_ANSWERS, json.data.data.answer.other);
        } else {
            commit(types.QUESTION_ALL_ANSWERS, json.data.data.answers);
        }
        return json.data;
    }

    throw json;
};

export const getQuestions = async ({ commit }) => {
    const json = await admin.getQuestions();

    if (json.status === 200) {
        commit(types.QUESTIONS, json.data.data.data);
        return json.data;
    }

    throw json;
};


export const updateQuestion = async (context, { id, params }) => {
    const json = await admin.updateQuestion(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyQuestion = async (context, payload) => {
    const json = await admin.destroyQuestion(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const createAnswer = async (context, payload) => {
    const json = await admin.createAnswer(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getAnswer = async ({ commit }, payload) => {
    const json = await admin.getAnswer(payload);

    if (json.status === 200) {
        commit(types.ANSWER_QUESTION_ID, json.data.data.question_id);
        commit(types.ANSWER_NAME, json.data.data.name);
        commit(types.ANSWER_ID, json.data.data.id);
        return json.data;
    }

    throw json;
};


export const updateAnswer = async (context, { id, params }) => {
    const json = await admin.updateAnswer(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyAnswer = async (context, payload) => {
    const json = await admin.destroyAnswer(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const createCoefficient = async (context, payload) => {
    const json = await admin.createCoefficient(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getCoefficient = async ({ commit }, payload) => {
    const json = await admin.getCoefficient(payload);

    if (json.status === 200) {
        commit(types.COEFFICIENT_ID, json.data.data.id);
        commit(types.COEFFICIENT_NAME, json.data.data.name);
        commit(types.COEFFICIENT_MAJOR_ID, json.data.data.major_id);
        commit(types.COEFFICIENT_COEFFICIENT, json.data.data.coefficient);
        return json.data;
    }

    throw json;
};

export const updateCoefficient = async (context, { id, params }) => {
    const json = await admin.updateCoefficient(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyCoefficient = async (context, payload) => {
    const json = await admin.destroyCoefficient(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const associate = async (context, payload) => {
    const json = await admin.associate(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const createFaculty = async (context, payload) => {
    const json = await admin.createFaculty(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};


export const editFaculty = async (context, { id, params }) => {
    const json = await admin.editFaculty(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getFaculty = async ({ context, commit }, payload) => {
    const json = await admin.getFaculty(payload);

    if (json.status === 200) {
        console.log(json.data.data);
        commit(types.FACULTY_ID, json.data.data.id);
        commit(types.FACULTY_UNIVERSITY_ID, json.data.data.university_id);
        commit(types.FACULTY_NAME, json.data.data.name);
        commit(types.FACULTY_DESCRIPTION, json.data.data.description);
        commit(types.FACULTY_IMAGE, json.data.data.image);
        return json.data;
    }

    throw json;
};

export const setUniversityForFaculty = async (context, payload) => {
    const json = await admin.setUniversityForFaculty(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyFaculty = async (context, payload) => {
    const json = await admin.destroyFaculty(payload);

    if (json.status === 204) {
        return json.data;
    }

    throw json;
};

export const getMajors = async ({ commit }, payload) => {
    const json = await admin.getMajors(payload);

    if (json.status === 200) {
        commit(types.MAJORS, json.data.data.data);

        return json.data;
    }

    throw json;
};

export const createMajor = async (context, payload) => {
    const json = await admin.createMajor(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getMajor = async ({ commit }, payload) => {
    const json = await admin.getMajor(payload);

    if (json.status === 200) {
        commit(types.MAJOR_ID, json.data.data.id);
        commit(types.MAJOR_DEPARTMENT_ID, json.data.data.department);
        commit(types.MAJOR_NAME, json.data.data.name);
        commit(types.MAJOR_DESCRIPTION, json.data.data.description);
        commit(types.MAJOR_COEFFICIENT, json.data.data.koef);
        return json.data;
    }

    throw json;
};

export const updateMajor = async (context, { id, params }) => {
    const json = await admin.updateMajor(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyMajor = async (context, payload) => {
    const json = await admin.destroyMajor(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const createDepartment = async (context, payload) => {
    const json = await admin.createDeparment(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getDepartment = async ({ commit }, payload) => {
    const json = await admin.getDepartment(payload);

    if (json.status === 200) {
        commit(types.DEPARTMENT_ID, json.data.data.id);
        commit(types.DEPARTMENT_FACULTY_ID, json.data.data.faculty);
        commit(types.DEPARTMENT_NAME, json.data.data.name);
        commit(types.DEPARTMENT_DESCRIPTION, json.data.data.description);
        return json.data;
    }

    throw json;
};

export const updateDepartment = async (context, { id, params }) => {
    const json = await admin.updateDepartment(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const destroyDepartment = async (context, payload) => {
    const json = await admin.destroyDepartment(payload);

    if (json.status === 200 || json.status === 204) {
        return json.data;
    }

    throw json;
};

export const getDepartments = async ({ commit }, payload) => {
    const json = await admin.getDepartments(payload);

    if (json.status === 200) {
        commit(types.DEPARTMENTS, json.data.data.data);

        return json.data;
    }

    throw json;
};

export const getFaculties = async ({ commit }, payload) => {
    const json = await admin.getFaculties(payload);

    if (json.status === 200) {
        commit(types.FACULTIES, json.data.data.data);

        return json.data;
    }

    throw json;
};

export default {
    destroyUniversity,
    getUniversity,
    editUniversity,
    createUniversity,
    getAllUniversities,
    getAllUniversitiesForUniAdmin,
    sendInviteUniversityAdmin,
    createTest,
    getTest,
    getTests,
    updateTest,
    destroyTest,
    createQuestion,
    getQuestion,
    getQuestions,
    updateQuestion,
    destroyQuestion,
    createAnswer,
    getAnswer,
    updateAnswer,
    destroyAnswer,
    createCoefficient,
    getCoefficient,
    updateCoefficient,
    destroyCoefficient,
    createMajor,
    getMajor,
    updateMajor,
    destroyMajor,
    createDepartment,
    getDepartment,
    updateDepartment,
    destroyDepartment,
    associate,
    createFaculty,
    editFaculty,
    getFaculty,
    setUniversityForFaculty,
    destroyFaculty,
    getMajors,
    getDepartments,
    getFaculties,
};
