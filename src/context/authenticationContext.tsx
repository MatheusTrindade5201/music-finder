import { createContext, useState } from "react";

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