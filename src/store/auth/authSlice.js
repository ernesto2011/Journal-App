import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no-authenticated',
        uuid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, actions) => {

        },
        logout:(state, payload) =>{

        },
        checkingCrendentials:(state)=>{
            state.status= 'checking';
        }
    }
});
export const { login, logout, checkingCrendentials } = authSlice.actions;