
import { axiosClient, axiosInstance } from "./axiosClient";

const apiProduct = {

    getProductsById: async (id) => {
        const res = await axiosClient.get('/products', {params:{id}})
        return res.data;
    },
    verifyToken: async (user, dispatch, stateSuccess) => {
        const url = `/auth/verifytoken`
        let axi = axiosInstance(user, dispatch, stateSuccess)
        return (await axi.get(url, { headers: { Authorization: `Bearer ${user.accessToken}` } })).data;
    },
    
    
}
export default apiProduct;