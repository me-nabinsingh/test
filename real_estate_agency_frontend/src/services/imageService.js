import axios from 'axios';
import config from '../config';
import accessToken from '../util/accessToken'; 

const apiUrl = `${config.apiUrl}`;

function all(params) {
    return axios.get(`${apiUrl}/images`, params);
}

function del(id) {
    return axios.delete(`${apiUrl}/images/${id}`, accessToken);
}

export {
    all,
    del
}