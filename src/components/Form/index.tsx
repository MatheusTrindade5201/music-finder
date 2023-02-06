import style from '@/styles/Form.module.css'
import Input from './Input'

const Form = () => {
    return (
        <div className={style.form__container}>
                <div className={style.form__left}>
                    <img className={style.form__image} src='src/assets/images/login_cover.svg'/>
                </div>
                <div className={style.form__right}>
                    <img src='src/assets/images/Logo_Desktop.png' />
                    <Input />
                </div>
        </div>
    )
}

export default Form