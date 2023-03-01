import style from "@/styles/MusicDetails.module.css"
import { Music, recomended } from "@/types/Music";
import Card from "@/components/Card"
import MusicVideo from "@/components/Video/Video"
import Infos from "@/components/MusicInfo"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllDetails } from "@/service/musicDetails"
import Loading from "@/components/Loading"
import { useHandleData } from "@/hooks/handleData";

const MusicDetailPage = () => {

    const id = useParams().id

    const [ currentMusic, setCurrentMusic ] = useState<Music>()
    const [ recomendedList, setRecomendedList ] = useState<recomended>()
    const [isLoading, setIsLoading ] = useState<boolean>(true)
    const { handleMusicInfo } = useHandleData()
    
    useEffect(() => {
        setIsLoading(true)
        getAllDetails({id, setCurrentMusic, setRecomendedList, setIsLoading})
    },[id] )


    if(isLoading){
        return(
            <Loading />
        )
    }
    if(currentMusic !== undefined && recomendedList !== undefined && !isLoading){

        const musicInfos = handleMusicInfo(currentMusic)
        console.log(musicInfos);
        
       
        return (
            <>
            <main className={style.musicDetails__page}>
                <div className={style.musicDetails__content}>
                    <Infos 
                        itens={musicInfos}
                    />
                    <MusicVideo link={currentMusic.sections.find((item: { type: string }) => item.type === 'VIDEO')?.youtubeurl.actions[0].uri} />
                    <div className={style.musicDetails__recomendation_container}>
                        <h3 className={style.recomendation__title}>Recomensações:</h3>
                        <div className={style.musicDetails__recomendation}>
                            {recomendedList.tracks !== undefined ? 
                            recomendedList.tracks.map((track: { key: string; subtitle: string; images: { background: string; }; title: string; }) => 
                            <Card
                            key={track.key}
                            author={track.subtitle}
                            id={track.key}
                            image={track.images?.background}
                            title={track.title}
                            smallCard={true}
                            />
                        ) : <p>Nenhuma recomendação encontrada</p>
                            }
                        </div>
                    </div> 
                </div>
            </main>
            </>
        )
    }
    return <p>Erro</p>
}

export default MusicDetailPage