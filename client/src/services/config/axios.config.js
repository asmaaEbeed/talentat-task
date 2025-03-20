import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

// Public instance - no token required
export const publicAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Private instance - requires token
export const privateAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for private routes
privateAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for private routes
privateAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await publicAxios.post('/auth/refresh-token', {
                    refreshToken,
                });

                const { token } = response.data;
                localStorage.setItem('token', token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return privateAxios(originalRequest);
            } catch (error) {
                // If refresh token fails, redirect to login
                localStorage.clear();
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
); 