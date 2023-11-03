import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
   
   return axiosSecure;
};

export default useAxiosSecure;