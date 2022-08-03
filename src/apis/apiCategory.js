import { axiosClient, axiosClientWithToken } from "./axiosClient";

const apiCategory = {
    showAllCategory: async (params) => {
        const res = await axiosClientWithToken.get('/category/all')
        return res.data;
    },
    deleteCategory: async (params) => {
        const res = await axiosClientWithToken.delete(`/category/${params.id}`)
        return res.data;
    },
    findCategoryById: async (params) => {
        const res = await axiosClientWithToken.get(`/category/${params.id}`)
        return res.data;
    },
    insertCategory: async (params) => {
        const res = await axiosClientWithToken.post(`/category/insert`,params)
        return res.data;
    },
    updateCategory: async (params) => {
        const res = await axiosClientWithToken.put(`/category/update/${params.id}`)
        return res.data;
    }
}
export default apiCategory;