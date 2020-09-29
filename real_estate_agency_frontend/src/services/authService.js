import axios from 'axios';
import config from '../config';

const apiUrl = `${config.apiUrl}/auth`;

function register(data) {
    return axios.post(`${apiUrl}/register`, data);
}

function login(data) {
    return axios.post(`${apiUrl}/login`, data);
}

export {register, login}