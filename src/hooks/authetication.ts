import { AuthenticationContext } from "@/context/authenticationContext"
import { useContext } from "react"
import uuid from "react-uuid"

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