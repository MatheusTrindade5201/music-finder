import style from "@/styles/MusicDetails.module.css"

const Infos = () => {
    return (
        <div className={style.musicDetails__infos_container}>
            <img className={style.infos__image} src="/src/assets/images/image 4 (1).png" />
            <div className={style.infos__details_container}>
                <h1 className={style.infos__title}>Creepin'</h1>
                <p className={style.info__text}>Metro Boomin, The weeknd & 21 Savage</p>
                <p className={style.info__text}><span className={style.text__bold}>Gênero: </span>Trap music</p>
                <p className={style.info__text}><span className={style.text__bold}>Album: </span>Heroes & Villains</p>
                <p className={style.info__text}><span className={style.text__bold}>Lançamento: </span>Lançamento:   2022</p>
                <p className={style.info__text}><span className={style.text__bold}>Disponível em: </span></p>
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default Infos