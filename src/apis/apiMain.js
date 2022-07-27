
import { axiosClient, axiosInstance } from "./axiosClient";
const apiMain = {

    ///authentication
    getProducts: async (params) => {
        const res = await axiosClient.get('/products', {params})
        return res.data;
    },
    
    verifyToken: async (user, dispatch, stateSuccess) => {
        const url = `/auth/verifytoken`
        let axi = axiosInstance(user, dispatch, stateSuccess)
        return (await axi.get(url, { headers: { Authorization: `Bearer ${user.accessToken}` } })).data;
    },
    
}
export default apiMain;