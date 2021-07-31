import React, { createContext, useContext, useReducer } from 'react'
import { reducer, initialState } from './reducer';
const AuthStateContext = createContext();
const AuthDispatcherContext = createContext();

export function useAuthState() {
    
    const context = useContext(AuthStateContext);
    if (!context) {
        throw Error ('Error in AuthStateContext')
    }
    return context
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatcherContext);
    if (!context) {
        throw Error ('Error in AuthDispatcherContext')
    }
    return context
}


export default function AuthContext({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthStateContext.Provider value={state} >
            <AuthDispatcherContext.Provider value={dispatch} >
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider>
    )
}
