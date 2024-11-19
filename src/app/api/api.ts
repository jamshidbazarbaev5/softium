import axios from 'axios';

const api = axios.create({
    baseURL: 'https://softium.uz/en/main_page/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(config => {
    if (config.url && !config.url.endsWith('/')) {
        config.url += '/';
    }
    return config;
});

export default api;  