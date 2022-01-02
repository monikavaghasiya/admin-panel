import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://local.artista/api'
});

axiosInstance.defaults.headers.get['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Accept'] = 'application/json';
// instance.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.interceptors.request.use(request => {
    // console.log('====',request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
});

export default axiosInstance;