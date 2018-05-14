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

export default {
    destroyUniversity,
    getUniversity,
    editUniversity,
    createUniversity,
    getAllUniversities,
    sendInviteUniversityAdmin,
    associate,
    createFaculty,
    setUniversityForFaculty,
    destroyFaculty,
};
