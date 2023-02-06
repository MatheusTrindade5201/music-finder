import style from '@/styles/Form.module.css'

const Input = () => {
    return (
        <form className={style.input__container}>
            <div className={style.input__float}> 
                <input id='email' className={style.input__field} type="text" />
                <label htmlFor='email' className={style.input__label}>Escreva seu email</label>
            </div>
            <div className={style.input__float}>
                <input id='password' className={style.input__field} type="text" />
                <label htmlFor='password' className={style.input__label}>Escreva sua senha</label>
            </div>
            <button 
                onClick={(event) => {
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