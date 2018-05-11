const url = '';
// const url = 'https://itpm-194220.appspot.com';
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
        const { data } = await window.axios.get('/api/user/university');

        return data;
    },
    // async passwordEmail(params) {
    //     const { data } = await window.axios.post('/api/v1/password/email', params);
    //
    //     return data;
    // },
    // async resetPassword(params) {
    //     const { data } = await window.axios.post('/api/v1/reset/password', params);
    //
    //     return data;
    // },
};
