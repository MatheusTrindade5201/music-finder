import style from '@/styles/Card.module.css'

interface Props {
    image: string,
    title: string,
    author: string
}

const Card = ({image, title, author} : Props) => {
    return (
        <div className={style.card}>
            <img className={style.card__image} src={image} />
            <div className={style.card__info}>
                <h2 className={style.card__title}>{title}</h2>
                <p className={style.card__author}>{author}</p>
            </div>
        </div>
    )
}

export default Card