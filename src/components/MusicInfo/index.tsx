import style from "@/styles/MusicDetails.module.css"
import { MusicInfo } from "@/types/Music"

const Infos: React.FC<{itens: MusicInfo}> = (info) => {
    return (
        <div className={style.musicDetails__infos_container}>
            <img className={style.infos__image} src={info.itens.image} />
            <div className={style.infos__details_container}>
                <h1 className={style.infos__title}>{info.itens.title}</h1>
                <p className={style.info__text}>{info.itens.author}</p>
                <p className={style.info__text}><span className={style.text__bold}>Gênero: </span>{info.itens.genre}</p>
                <p className={style.info__text}><span className={style.text__bold}>Album: </span>{info.itens.albun}</p>
                <p className={style.info__text}><span className={style.text__bold}>Lançamento: </span>{info.itens.release}</p>
                <p className={style.info__text}><span className={style.text__bold}>Disponível em: </span> </p>
                <ul>
                    {info.itens.providers.map(provider => 
                        <li key={provider.type}>{`${provider.type[0]}${provider.type.slice(1).toLocaleLowerCase()}`}</li>
                    )}  
                </ul>
            </div>
        </div>
    )
}

export default Infos