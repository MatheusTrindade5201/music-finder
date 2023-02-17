import style from "@/styles/MusicDetails.module.css"

interface Props {
    link: string
}

const MusicVideo = ({link} : Props) => {

    function getId(url: string) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }

    
    return (
        <iframe className={style.musicDetails__video} src={`https://www.youtube.com/embed/${getId(link)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}

export default MusicVideo