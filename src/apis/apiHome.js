
import { axiosClient, axiosInstance } from "./axiosClient";

const apiHome = {

    getSlideKhuyenMai: async (params) => {
        const res = await axiosClient.get('/sliderkhuyenmai', {params})
        return res.data;
    },

    getSlideThuongHieu: async (params) => {
        const res = await axiosClient.get('/sliderthuonghieu', {params})
        return res.data;
    },

    getQuickLink: async (params) => {
        const res = await axiosClient.get('/quicklink', {params})
        return res.data;
    },

    getCategorySpecify: async (params) => {
        const res = await axiosClient.get('/categoryspecify', {params})
        return res.data;
    },

    getSuggestions: async (params) => {
        const res = await axiosClient.get('/suggestions', {params})
        return res.data;
    },


   

    
    
}
export default apiHome;