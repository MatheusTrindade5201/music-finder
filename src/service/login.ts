import axios, { AxiosResponse } from "axios";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";

export const users = axios.create({
    baseURL: "http://localhost:3000/usuarios"
})

interface searchProps {
    email: string,
    password: string,
    navigate: NavigateFunction
}

export const  searchEmail = async ({password, email, navigate} : searchProps) => {
    try {
        
        const data = await users.get(`?password=${password}&email=${email}`)
        const dataEmail:string = await data.data[0].email
        const dataPassword: string = await data.data[0].password
        if(dataEmail === email && dataPassword === password){
           navigate('/app')
        }

    } catch (error) {
        console.log(error);
        alert('Email ou senha invalidos')      
    }
}

interface validateProps {
    email: string,
    password: string,
    dataEmails: string,
    dataPassword: string
}

/* const validateLogin = ({dataEmails, dataPassword, email, password }: validateProps) => {
    if(dataEmails === email && dataPassword === password){
        usenavigate("/app")
    }
    else{
        alert("Error")
    }
}

 */

/* view-source:http://localhost:3000/usuarios?password=teste123&email=teste@hotmail.com */
