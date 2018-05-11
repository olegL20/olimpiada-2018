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
};
