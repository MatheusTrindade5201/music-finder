import style from '@/styles/Card.module.css'
import { Link } from 'react-router-dom'

interface Props {
    image: string,
    title: string,
    author: string,
    id: string
}

const Card = ({image, title, author, id} : Props) => {
    return (
        <Link className={style.card} to={`/app/${id}`}>
                <img className={style.card__image} src={image} />
                <div className={style.card__info}>
                    <h2 className={style.card__title}>{title}</h2>
                    <p className={style.card__author}>{author}</p>
                </div>
        </Link>
    )
}

export default Card