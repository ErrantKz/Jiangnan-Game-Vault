// src/api/axios.js
import axios from 'axios';

const REACT_DEV_BASEURL='http://localhost:8080/api';
const REACT_PRO_BASEURL='http://47.109.144.182:8080/api';

console.log(REACT_DEV_BASEURL);

const instance = axios.create({
  headers:{
    'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  baseURL: REACT_PRO_BASEURL,
  timeout: 250000
});

instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default instance;