import admin from '../../../api/admin';
// import user from "../../../api/user";
// import * as types from "../admin/mutation-types";

export const destroyUniversity = async ({ dispatch, commit }, payload) => {
    const json = await admin.destroyUniversity(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};
export const getUniversity = async ({ dispatch, commit }, payload) => {
    const json = await admin.getUniversity(payload);
    console.log(json);
    if (json.status === 200) {
        // commit(types.UNIVERSITY_NAME, json.);
        // commit(types.UNIVERSITY_ADDRESS, json.);
        // commit(types.UNIVERSITY_DESCRIPTION, json.);
        // commit(types.UNIVERSITY_EMAIL, json.);
        // commit(types.UNIVERSITY_PHONE, json.);
        // commit(types.UNIVERSITY_SITE, json.);
        return json.data;
    }

    throw json;
};

export default {
    destroyUniversity,
    getUniversity,
};
