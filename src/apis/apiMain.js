
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
    
    verifyToken: async (user, dispatch, stateSuccess) => {
        const url = `/auth/verifytoken`
        let axi = axiosInstance(user, dispatch, stateSuccess)
        return (await axi.get(url, { headers: { Authorization: `Bearer ${user.accessToken}` } })).data;
    },
    
    getMyReviews: async (params) => {
        const myReview = await axiosClient.get('/myreview', {params})
        return myReview.data;
    }
    
}
export default apiMain;