import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/auth";
import { useSelector } from "react-redux";

export const useCheckAuth = () => {
    const {status} =useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
      onAuthStateChanged(FirebaseAuth, async(user)=>{
        if(!user) return dispatch(logout());
        const {uid, email, displayName, photoURL}= user;
        dispatch(login({uid, email, displayName, photoURL}));
        
      })
      
    },[]);
    return status;
}
