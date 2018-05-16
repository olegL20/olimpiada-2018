import * as constants from '../utils/constants';

const url = constants.URL;

export default {
    async login(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/auth/signin`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async register(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/auth/signup`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async registerInvite(id, params) {
        try {
            console.log(id);
            const { data, status } = await window.axios.post(`${url}/api/auth/register-by-invite/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async confirmationEmail(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/auth/confirmation`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getUniversities() {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/university`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getFaculties(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/faculty/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getDepartments(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/department/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getMajors(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/majors/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getTest(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/test/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getTests() {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/test`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getTestResults() {
        try {
            const { data, status } = await window.axios.get(`${url}/api/user/test`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async testAnswer(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/user/test/answer`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
};
