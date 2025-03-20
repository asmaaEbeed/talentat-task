import { publicAxios, privateAxios } from '../config/axios.config';
// Still No need for privateAxios

export const navItemsAPI = {
    // Public routes
    getAllNavItems: async () => await publicAxios.get('/nav'),

    postTrackNavItem: async (body) => await publicAxios.post('/track', body),

    postNavItem: async (body) => await publicAxios.post('/nav', body),
    
}; 