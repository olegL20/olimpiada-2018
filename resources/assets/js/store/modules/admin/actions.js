import admin from '../../../api/admin';
import * as types from '../admin/mutation-types';

export const destroyUniversity = async (context, payload) => {
    const json = await admin.destroyUniversity(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const getUniversity = async ({ context, commit }, payload) => {
    const json = await admin.getUniversity(payload);

    if (json.status === 200) {
        console.log(json.data.data);
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

export const getTest = async ({ context, commit }, payload) => {
    const json = await admin.getTest(payload);

    if (json.status === 200) {
        commit(types.TEST_ID, json.data.data.id);
        commit(types.TEST_NAME, json.data.data.name);
        commit(types.TEST_DESCRIPTION, json.data.data.description);
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

    if (json.status === 200) {
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

export const getQuestion = async ({ context, commit }, payload) => {
    const json = await admin.getQuestion(payload);

    if (json.status === 200) {
        commit(types.QUESTION_TEST_ID, json.data.data.id);
        commit(types.QUESTION_NAME, json.data.data.name);
        commit(types.QUESTION_TYPE, json.data.data.type);
        commit(types.QUESTION_TYPE_FILL, json.data.data.type_fill);
        commit(types.QUESTION_ID, json.data.data.id);
        commit(types.QUESTION_ANSWER, json.data.data.answer);
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

    if (json.status === 200) {
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

export const getAnswer = async ({ context, commit }, payload) => {
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

    if (json.status === 200) {
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

export const getCoefficient = async ({ context, commit }, payload) => {
    const json = await admin.getAnswer(payload);

    if (json.status === 200) {
        commit(types.ANSWER_QUESTION_ID, json.data.data.question_id);
        commit(types.ANSWER_NAME, json.data.data.name);
        commit(types.ANSWER_ID, json.data.data.id);
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

    if (json.status === 200) {
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

export default {
    destroyUniversity,
    getUniversity,
    editUniversity,
    createUniversity,
    getAllUniversities,
    sendInviteUniversityAdmin,
    createTest,
    getTest,
    updateTest,
    destroyTest,
    createQuestion,
    getQuestion,
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
    associate,
};
