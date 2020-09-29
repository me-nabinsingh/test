import axios from 'axios';
import config from '../config';
import accessToken from '../util/accessToken'; 

const apiUrl = `${config.apiUrl}`;

function addBanner(data) {
    return axios.post(`${apiUrl}/banners`, data, accessToken);
}

function all(params) {
    return axios.get(`${apiUrl}/banners`, {
        params: params
    });
}

function findOne(id) {
    return axios.get(`${apiUrl}/banners/${id}`);
}

function del(id) {
    return axios.delete(`${apiUrl}/banners/${id}`, accessToken);
}

function update(data) {
    return axios.put(`${apiUrl}/banners/${data._id}`, data, accessToken);
}

export {
    addBanner,
    all,
    findOne,
    del,
    update
}