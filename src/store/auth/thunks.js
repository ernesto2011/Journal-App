import { checkingCrendentials } from "./authSlice";

export const checkAuthentication = (email, password)=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
    }
}
export const startGoogleSigIn =()=>{
    return async (dispatch) =>{
        dispatch(checkingCrendentials());
    }
}