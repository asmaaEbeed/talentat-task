import { publicAxios, privateAxios } from '../config/axios.config';
// Still No need for privateAxios

export const jobAPI = {
    getAllJobs: async () => await publicAxios.get('/jobs'),
};