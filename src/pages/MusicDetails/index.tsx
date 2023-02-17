import style from "@/styles/MusicDetails.module.css"

import recomendations from "@/recomendation.json"
import Card from "@/components/Card"
import { useEffect } from "react"
import MusicVideo from "./Video/Video"

const MusicDetailPage = () => {
    
    return (
        <>
        <main className={style.musicDetails__page}>
            <div className={style.musicDetails__content}>
                <MusicVideo link={"https://youtu.be/1V_xRb0x9aw?autoplay=1"} />
                <div className={style.musicDetails__recomendation_container}>
                    <h3 className={style.recomendation__title}>Recomensações:</h3>
                    <div className={style.musicDetails__recomendation}>
                        {recomendations[0].tracks.map(track => 
                            <Card
                            key={track.key}
                            author={track.subtitle}
                            id={track.key}
                            image={track.images.background}
                            title={track.title}
                            smallCard={true}
                            />
                        )}
                    </div>
                </div> 
            </div>
        </main>
        </>
    )
}

export default MusicDetailPage