import style from '@/styles/Form.module.css'
import { useState } from 'react';
import InputField from './component/inputField';

const Input = () => {

    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

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
                onSubmit={(event) => {
                    event.preventDefault();
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