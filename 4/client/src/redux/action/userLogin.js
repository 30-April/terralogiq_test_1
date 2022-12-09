import jsCookie from "js-cookie"
import auth_types from "../reducer/types/auth"
import qs from "querystring"
import { axiosInstance } from "../../axios"

export function userLogin(values, setSubmitting){
    return async function(dispatch){
        try {
            const res = await axiosInstance.post(`/users/login/${values.username}/${values.password}`)
        
            const userData = res.data.result[0]
            const token = res.data.result[1]

            console.log(userData)
            console.log(token)

            if(!userData){
                throw new Error("User not found")
            }

            jsCookie.set("auth_token", token)
            
            dispatch({
                type: auth_types.AUTH_LOGIN,
                payload: userData
            })
            

            setSubmitting(false)

        } catch (error) {
            console.log(error);
            alert('username/password/email is not found')
            setSubmitting(false);
        }
    }
}