
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
        const res = await axiosClientWithToken.put('/address',{params})
        return res.data;
    },

    updateAddress: async (params)=>{
        const res = await axiosClientWithToken.post('/address',{params})
        return res.data;
    },
}
export default apiAddress;