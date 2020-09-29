import axios from 'axios';
import config from '../config';
import accessToken from '../util/accessToken'; 

const apiUrl = `${config.apiUrl}`;

function add(data) {
    return axios.post(`${apiUrl}/planets`, data, accessToken);
}

function update(data) {
    return axios.put(`${apiUrl}/planets/${data._id}`, data, accessToken);
}

function all(params) {
    return axios.get(`${apiUrl}/planets`, params = {
        params: params
    });
}


function findOne(id) {
    return axios.get(`${apiUrl}/planets/${id}`);
}

function del(id) {
    return axios.delete(`${apiUrl}/planets/${id}`, accessToken);
}

export {
    add,
    update,
    all,
    findOne,
    del
}