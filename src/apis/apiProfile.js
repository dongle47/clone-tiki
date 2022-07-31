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
    putUploadAvatar: async (params) => {
        const res = await axiosClientWithToken.post('/user/profile/uploadAvatar', params)
        return res.data;
    },
    putChangeInfo: async (params) => {
        const res = await axiosClientWithToken.put('/user/profile/changeInfo', params)
        return res.data;
    },
    getUserbyID: async (params) => {
        const res = await axiosClientWithToken.get(`/user/${params.id}`)
        return res.data;
    },

}
    
export default apiProfile;