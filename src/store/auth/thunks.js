import { loginWithCredentials, logOutFirebase, registerWithCredentials, signWithGoogle } from "../../firebase/providers";
import { clearNotesLogOut } from "../journal";
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
export const startCreateUserWithEmailPassword = ({email, password, displayName})=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
        const {ok, uid, photoURL, errorMessage} = await registerWithCredentials({email, password, displayName});
        if (!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({uid, photoURL, displayName, email}));
        
    }
}
export const startLoginWithCredentials = ({email, password})=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
        const result = await loginWithCredentials({email, password});
        console.log(result);
        if (!result.ok) return dispatch(logout(result));
        
        dispatch(login(result));
        
    }
}
export const startlogOut = ()=>{
    return async (dispatch) =>{
        await logOutFirebase();
        dispatch(logout({errorMessage: null}));
        dispatch(clearNotesLogOut());
    }
}