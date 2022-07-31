
import { axiosClient, axiosInstance } from "./axiosClient";

const apiMain = {

    ///authentication
    getProducts: async (params) => {
        const res = await axiosClient.get('/products', {params})
        return res.data;
    },

    getNotification: async (params) => {
        const res = await axiosClient.get('/notifications', {params})
        return res.data;
    },

    getOrders: async (params) => {
        const res = await axiosClient.get('/myorder', {params})
        return res.data;
    },
    
    getMyReviews: async (params) => {
        const myReview = await axiosClient.get('/myreview', {params})
        return myReview.data;
    },

    getMyFavorites: async (params) => {
        const myFavorite = await axiosClient.get('', {params})
        return myFavorite.data;
    },

    getMyRevPurchaseds: async (params) =>{
        const myRevPurchaseds = await axiosClient.get('', {params})
        return myRevPurchaseds.data;
    },


    getCoupons: async (params) => {
        const res = await axiosClient.get('/coupons', {params})
        return res.data;
    },

    verifyToken: async (user, dispatch, stateSuccess) => {
        const url = `/auth/verifytoken`
        let axi = axiosInstance(user, dispatch, stateSuccess)
        return (await axi.get(url, { headers: { Authorization: `Bearer ${user.accessToken}` } })).data;
    },
    
    postLogin: async (params) => {
        const myLogin = await axiosClient.post('/auth/login', params)
        return myLogin.data;
    },
    
    search: async (params) => {
        const mySearch = await axiosClient.post('', params)
        return mySearch.data;
    },
}
    
export default apiMain;