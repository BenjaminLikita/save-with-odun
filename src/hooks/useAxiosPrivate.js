import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";

export const useAxiosPrivate = () => {
    
    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers["Authorization"]){
                    config["Authorization"]
                }
            }
        )
        const responseInterceptor = axiosPrivate.interceptors.response.use()
        
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor)
            axiosPrivate.interceptors.response.eject(responseInterceptor)
        }
    })
}