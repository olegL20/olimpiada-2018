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
    async createTest(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/test`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getTest(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/test/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async updateTest(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/test/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async destroyTest(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/test/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async createQuestion(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/question`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getQuestion(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/question/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async updateQuestion(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/question/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async destroyQuestion(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/question/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async createAnswer(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/answer`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getAnswer(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/answer/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async updateAnswer(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/answer/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async destroyAnswer(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/answer/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async createCoefficient(params) {
        try {
            const { data, status } = await window.axios.post(`${url}/api/admin/subjects-coefficients`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async getCoefficient(id) {
        try {
            const { data, status } = await window.axios.get(`${url}/api/admin/subjects-coefficients/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async updateCoefficient(id, params) {
        try {
            const { data, status } = await window.axios.put(`${url}/api/admin/subjects-coefficients/${id}`, params);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
    async destroyCoefficient(id) {
        try {
            const { data, status } = await window.axios.delete(`${url}/api/admin/subjects-coefficients/${id}`);

            return { data, status };
        } catch (e) {
            return e.response;
        }
    },
};
