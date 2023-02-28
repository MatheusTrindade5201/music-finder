import { createContext, ReactElement, useContext, useState } from "react";
import uuid from "react-uuid";

interface ContextProps {
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
}

export const AuthenticationContext = createContext({} as ContextProps)

interface Props {
    children: JSX.Element
}

export const AuthenticationProvider = ({children}  : Props) => {

    const [ token, setToken ] = useState<string>('')

    return (
        <AuthenticationContext.Provider value={{token, setToken}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => {
    const { token, setToken } = useContext(AuthenticationContext)

    const generateToken = () => {
        const newToken = uuid()
        setToken(newToken)
        sessionStorage.setItem('AuthToken', newToken)
    }

    const deleteToken = () => {
        setToken('');
        sessionStorage.removeItem('AuthToken')
    }

    const getCurrentToken = () => {
        const currentToken = sessionStorage.getItem('AuthToken')
        return currentToken
    }

    return{
        token,
        setToken,
        generateToken,
        deleteToken,
        getCurrentToken
    }
}