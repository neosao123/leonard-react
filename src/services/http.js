import axios from "axios";
import { getToken } from "./getToken";


const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000
});

http.interceptors.request.use((config) => {
    const token = getToken()
    config.headers = token ? {
        ...config.headers,
        Authorization: `Bearer ${token}`
    } : {
        ...config.headers
    };
},
    (error) => {
        return Promise.resolve(error)
    });

export default http;