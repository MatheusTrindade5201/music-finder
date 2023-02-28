import style from "@/styles/MusicDetails.module.css"

interface Props {
    image: string,
    title: string,
    author: string,
    genre: string,
    albun: string | undefined,
    release: string | undefined,
    providers: [
        {
            type:string
        }
    ]
}

const Infos = ({image, title, author, genre, albun, release, providers} : Props) => {
    return (
        <div className={style.musicDetails__infos_container}>
            <img className={style.infos__image} src={image} />
            <div className={style.infos__details_container}>
                <h1 className={style.infos__title}>{title}</h1>
                <p className={style.info__text}>{author}</p>
                <p className={style.info__text}><span className={style.text__bold}>Gênero: </span>{genre}</p>
                <p className={style.info__text}><span className={style.text__bold}>Album: </span>{albun}</p>
                <p className={style.info__text}><span className={style.text__bold}>Lançamento: </span>{release}</p>
                <p className={style.info__text}><span className={style.text__bold}>Disponível em: </span> </p>
                <ul>
                    {providers.map(provider => 
                        <li>{`${provider.type[0]}${provider.type.slice(1).toLocaleLowerCase()}`}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Infos