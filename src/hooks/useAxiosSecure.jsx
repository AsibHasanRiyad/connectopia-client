import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5001/'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped.......interceptor is working', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    // intercept 401 and 403 request 
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async (error) =>{
        const status = error.response.status;
        console.log('error on the interceptor', status);
        if (status === 401 || status === 403) {
            await logOut()
            return navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;