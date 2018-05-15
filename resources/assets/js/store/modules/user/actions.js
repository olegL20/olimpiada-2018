import user from '../../../api/user';
import * as types from './mutation-types';

export const login = async ({ dispatch, commit }, payload) => {
    const json = await user.login(payload);
    if (json.status === 200) {
        commit(types.LOGIN, {
            token: json.data.data.token,
            user: json.data.data.user,
            role: json.data.data.user.role,
        });

        return json.data;
    }

    throw json;
};

export const register = async ({ dispatch, commit }, { params }) => {
    const json = await user.register(params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const registerInvite = async ({ dispatch, commit }, { id, params }) => {
    const json = await user.registerInvite(id, params);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const confirmation = async ({ dispatch, commit }, payload) => {
    const json = await user.confirmationEmail(payload);

    if (json.status === 200) {
        return json.data;
    }

    throw json;
};

export const logout = async ({ commit }) => {
    commit(types.ID, null);
    commit(types.NAME, null);
    commit(types.EMAIL, null);
    commit(types.USER, null);
    commit(types.FIRST_STAGE, null);
    commit(types.CREATED_AT, null);
    commit(types.UPDATED_AT, null);
    commit(types.LOGOUT);
};

export const checkLogged = async ({ commit }) => {
    const token = window.Cookies.get('token');
    const currentUser = window.Cookies.get('user');
    const role = window.Cookies.get('role');

    if (token !== undefined && currentUser !== undefined) {
        commit(types.LOGIN, {
            token,
            user: window.JSON.parse(currentUser),
            role,
        });
    }
};

export const getUniversities = async ({ commit }) => {
    const json = await user.getUniversities();

    if (json.status === 200) {
        commit(types.UNIVERSITIES, json.data.data);

        return json.data;
    }

    throw json;
};

export const getFaculties = async ({ commit }, payload) => {
    const json = await user.getFaculties(payload.id);

    if (json.status === 200) {
        commit(types.FACULTIES, json.data.data);

        return json.data;
    }

    throw json;
};

export const getDepartments = async ({ commit }, payload) => {
    const json = await user.getDepartments(payload.id);

    if (json.status === 200) {
        commit(types.DEPARTMENTS, json.data.data);

        return json.data;
    }

    throw json;
};

export const getMajors = async ({ commit }, payload) => {
    const json = await user.getMajors(payload.id);

    if (json.status === 200) {
        commit(types.MAJORS, json.data.data);

        return json.data;
    }

    throw json;
};

export const getTest = async ({ commit }, payload) => {
    const json = await user.getTest(payload.id);

    if (json.status === 200) {
        commit(types.TEST, json.data.data);

        return json.data;
    }

    throw json;
};

export const getTests = async ({ commit }) => {
    const json = await user.getTests();

    if (json.status === 200) {
        commit(types.TESTS, json.data.data);

        return json.data;
    }

    throw json;
};

export default {
    login,
    logout,
    register,
    registerInvite,
    checkLogged,
    confirmation,
    getUniversities,
    getFaculties,
    getDepartments,
    getMajors,
    getTests,
    getTest,
};
