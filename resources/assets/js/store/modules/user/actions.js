import user from '../../../api/user';
import * as types from './mutation-types';

export const login = async ({ dispatch, commit }, payload) => {
    const json = await user.login(payload);
    if (json.status === 200) {
        commit(types.LOGIN, {
            token: json.data.data.token,
            user: json.data.data.user,
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
    commit(types.CREATED_AT, null);
    commit(types.UPDATED_AT, null);
    commit(types.LOGOUT);
};

export const passwordEmail = async (context, payload) => {
    const json = await user.passwordEmail(payload);

    if (json.status !== 1) {
        throw json;
    }
};

export const resetPassword = async (context, payload) => {
    const json = await user.resetPassword(payload);

    if (json.status !== 1) {
        throw json;
    }
};

// export const getUserCurrent = async ({ commit }) => {
//     const json = await user.getUserCurrent();
//
//     if (json.status === 1) {
//         commit(types.ID, json.data.id);
//         commit(types.NAME, json.data.name);
//         commit(types.EMAIL, json.data.email);
//         commit(types.CREATED_AT, json.data.created_at);
//         commit(types.UPDATED_AT, json.data.updated_at);
//     } else {
//         throw json;
//     }
// };

export const checkLogged = async ({ commit }) => {
    const token = window.Cookies.get('token');
    const currentUser = window.Cookies.get('user');

    if (token !== undefined && currentUser !== undefined) {
        commit(types.LOGIN, {
            token,
            user: window.JSON.parse(currentUser),
        });
    }
};

export default {
    login,
    logout,
    register,
    registerInvite,
    passwordEmail,
    resetPassword,
    checkLogged,
    confirmation,
};
