import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
import { axiosClientWithToken } from "./axiosClient";

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
export const axiosProducts = axios.create({
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

    getNotification: async (params) => {
        const res = await axiosProducts.get('/notifications', {params})
        return res.data
    },
    changeSeenProp: async (params) => {
        const res = await axiosClient.patch(`/notifications`,params)
        return res.data;
    },
    deleteNotifyById: async (params) => {
        const res = await axiosClientWithToken.delete(`/notifications/${params.id}`)
        return res.data;
    },
}
export default apiNotify;