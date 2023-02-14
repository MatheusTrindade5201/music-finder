import style from '@/styles/Form.module.css'

interface Props {
    id: string,
    type: string,
    placeholder: string,
    value: string
    changeValue: (c:string) => void
}

const InputField = ({type, id, placeholder, value, changeValue} : Props) => {
    return (
        <div className={style.input__float}> 
                <input value={value} onChange={(event) => changeValue(event.target.value)} required id={id} className={style.input__field} type={type} />
                <label htmlFor={id} className={style.input__label}>{placeholder}</label>
        </div>
    )
}

export default InputField