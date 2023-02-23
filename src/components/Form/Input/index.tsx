import { useAuthentication } from '@/context/authenticationContext';
import { searchEmail } from '@/service/login';
import style from '@/styles/Form.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './component/inputField';

const Input = () => {

    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { generateToken } = useAuthentication()

    const navigate = useNavigate()

    return (
        <form className={style.input__container}>
            <InputField 
                type={'text'}
                id={'email'}
                placeholder={'Escreva seu email'}
                value={email}
                changeValue={value => setEmail(value)}
            />
            <InputField 
                type={'password'}
                id={'password'}
                placeholder={'Escreva sua senha'}
                value={password}
                changeValue={value => setPassword(value)}
            />
            
            <button 
                onClick={(event) => {
                    event.preventDefault();
                    searchEmail({password, email, navigate, generateToken})
                }} 
                type='submit'
                className={style.form__button}
                >
                Entrar
            </button>
        </form>
    )
}

export default Input