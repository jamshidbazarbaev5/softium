import axios from 'axios';

export type Language = 'en' | 'ru';

const createApi = (language: Language) => {
  const api = axios.create({
    baseURL: `https://softium.uz/${language}/main_page/api/v1`,
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

  return api;
};

export default createApi;  