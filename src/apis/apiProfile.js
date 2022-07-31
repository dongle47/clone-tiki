import { axiosClient, axiosClientWithToken} from "./axiosClient";

const apiProfile = {

    ///authentication
    putChangeEmail: async (params) => {
        const res = await axiosClientWithToken.put('/user/profile/changeEmail', params)
        return res.data;
    },
    putChangePassword: async (params) => {
        const res = await axiosClientWithToken.put('/user/profile/changePassword', params)
        return res.data;
    },
}
    
export default apiProfile;