import { createContext, useReducer } from "react";
import AuthReducer from './authReducer.js';


const INITIAL_STATE={
    user:localStorage.getItem("user") || null,
    isFetching:false,
    error:false    
}

export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [action, dispatch]=useReducer(AuthReducer, INITIAL_STATE);
    return(
        <AuthContext.Provider value={
            {
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch
            }
        }>
            {children}
            </AuthContext.Provider>
    )
}