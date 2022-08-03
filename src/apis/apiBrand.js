import { axiosClientWithToken } from "./axiosClient";

const apiBrand = {
    getAllBrand : async (params) =>{
        const res = await axiosClientWithToken.get('/brand/all') 
        return res.data;
    },
    getBrandByID : async (params) =>{
        const res = await axiosClientWithToken.get(`/brand/${params.id}`)
        return res.data;
    },
    deleteBrandById : async (params) =>{
        const res = await axiosClientWithToken.delete(`/brand/delete/${params.id}`)
        return res.data;
    },
    insertBrand : async (params) =>{
        const res = await axiosClientWithToken.post('/brand/insert', params) 
        return res.data;
    },
    updateBrand : async (params) =>{
        const res = await axiosClientWithToken.put(`/brand/update/${params.id}`)
        return res.data;
    },
    uploadLogo : async (params) =>{
        const res = await axiosClientWithToken.post(`/brand/uploadLogo/${params.id}`) 
        return res.data;
    },
}
export default apiBrand; 