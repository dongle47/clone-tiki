import axios from 'axios';
import queryString from 'query-string';
const baseURL='https://nhom3-tiki.herokuapp.com/api'
const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params)
});
const apiAuth = {

    
    postLogin: async (params) => {
        const myLogin = await axiosClient.post('/auth/login', params)
        return myLogin.data;
    },
    
    search: async (params) => {
        const mySearch = await axiosClient.post('', params)
        return mySearch.data;
    },
}
    
export default apiAuth;