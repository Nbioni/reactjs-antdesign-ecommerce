import { createContext, useReducer } from "react";

export const LoginInitialState = {
    name: "",
    email: "", 
    password: ""
};

export const LoginContext = createContext({
    state: LoginInitialState,
});

export const LoginReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "FETCH_LOGIN":
            const newState = {
                ...state,
                login: payload
            };
            return newState;
        case "REFETCH_LOGIN":
            const loginState = {
                ...state,
                login: payload
            };
            return loginState;
        default:
            return state;
    };
};

export const LoginContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LoginReducer, LoginInitialState);
    return (
        <LoginContext.Provider value={{ state, dispatch }}>
            { children }
        </LoginContext.Provider>
    );
};
