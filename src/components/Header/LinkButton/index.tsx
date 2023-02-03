import style from '@/styles/LinkButton.module.css'

import { Link } from "react-router-dom"

interface Props {
    path: string,
    imagePath: string,
    buttonText: string
}

const LinkButton = ({path, imagePath, buttonText} : Props) => {
    return (
        <Link className={style.button} to={path}>
            <img className={style.button__icon} src={imagePath} />
            <p className={style.button__text} >{buttonText}</p>
        </Link>
    )
}

export default LinkButton