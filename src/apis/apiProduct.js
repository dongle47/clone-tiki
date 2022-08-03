
//import { axiosClient, axiosInstance } from "./axiosClient";
import axios from 'axios';
import queryString from 'query-string';
const baseURL='https://playerhostedapitest.herokuapp.com/api/'
export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params)
});

const apiProduct = {

    getProductsById: async (id) => {
        const res = await axiosClient.get('/products', {params:{id}})
        return res.data;
    },
    getProducts: async (params) => {
        const res = await axiosClient.get('/products', {params})
        return res.data;
    },
    
    
}
export default apiProduct;