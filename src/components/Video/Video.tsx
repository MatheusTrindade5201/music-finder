import style from "@/styles/MusicDetails.module.css"

interface Props {
    id: string | null
}

const MusicVideo = ({id} : Props) => {

    
    return (
        <div className={style.musicDetails__video_container}>
            <h2>Clipe da música: </h2>
            <iframe className={style.musicDetails__video} src={id !== null ? `https://www.youtube.com/embed/${id}` : ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default MusicVideo