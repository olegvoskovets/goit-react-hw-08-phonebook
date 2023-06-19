import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set(token) {
    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    Api.defaults.headers.common.Authorization = '';
  },
};
