
import { axiosClient, axiosClientWithToken } from "./axiosClient";

const apiAddress = {

    deleteAddressById: async (params) => {
        const res = await axiosClientWithToken.delete('/address', {data: params})
        return res.data;
    },

    getAddresses: async ()=>{
        const res = await axiosClientWithToken.get('/address')
        return res.data;
    },

    saveAddress: async (params)=>{
        const res = await axiosClientWithToken.put('/address',params)
        return res.data;
    },

    updateAddress: async (params)=>{
        const res = await axiosClientWithToken.post('/address',params)
        return res.data;
    },
    getAddressById: async (params)=>{
        const res = await axiosClientWithToken.get('/address', {params})
        return res.data;
    },
    getprovinceEntities: async (params)=>{
        const res = await axiosClientWithToken.get('/provinceEntities', {params})
        return res.data;
    },
    getDistrict: async (params)=>{
        const res = await axiosClientWithToken.get('/district', {params})
        return res.data;
    },
    getCommune: async (params)=>{
        const res = await axiosClientWithToken.get('/commune', {params})
        return res.data;
    },
}
export default apiAddress;