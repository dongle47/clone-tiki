import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
const baseURL = 'https://playerhostedapitest.herokuapp.com/api/'
// const baseURL='https://nhom3-tiki.herokuapp.com/api'
export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params)
});
const apiNotify = {

    postNotify: async (params) => {
        const res = await axiosClient.post("/notifications",params)
        return res.data
    },
}
export default apiNotify;