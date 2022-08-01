
import { axiosClient, axiosClientWithToken } from "./axiosClient";

const apiAuth = {
    postLogin: async (params) => {
        const myLogin = await axiosClient.post('/auth/login', params)
        return myLogin.data;
    },

    search: async (params) => {
        const mySearch = await axiosClient.post('', params)
        return mySearch.data;
    },

    postCheckPhone: async (params) => {
        const checkPhone = await axiosClient.post('/auth/verification', params)
        return checkPhone.data
    },

    postRegister: async (params) => {
        const register = await axiosClient.post('/user/register', params)
        return register.data
    }
}

export default apiAuth;