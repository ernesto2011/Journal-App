import { signWithGoogle } from "../../firebase/providers";
import { checkingCrendentials, login, logout } from "./authSlice";

export const checkAuthentication = (email, password)=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
    }
}
export const startGoogleSigIn =()=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
        const result = await signWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage))
        
        dispatch(login(result))
    }
}