const url = '';
// const url = 'https://itpm-194220.appspot.com';
export default {
    async destroyUniversity(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/university/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getUniversity(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/university/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async editUniversity(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/university/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async createUniversity(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/university`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getAllUniversities() {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/university`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async sendInviteUniversityAdmin(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/send-invite`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async associate(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/associate`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async createFaculty(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/faculty`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async editFaculty(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/faculty/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getFaculty(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/faculty/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async setUniversityForFaculty(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/faculty/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async destroyFaculty(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/faculty/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
};
