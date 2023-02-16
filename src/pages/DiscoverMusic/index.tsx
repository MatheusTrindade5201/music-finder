import { discoverMusic } from "@/service/api"
import style from "@/styles/DiscoverMusic.module.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const DicoverMusicPage = () => {

    const navigate = useNavigate()

    const [ recording, setRecording ] = useState<boolean>(false)
    let isRecording = recording
    const search = () => {
        setRecording(!recording)
        isRecording = !isRecording
        if(isRecording){
            discoverMusic({navigate})
        }
    }

    return (
        <main className={style.discoverMusic__page}>
            <button onClick={search} className={style.discoverMusic__button}>
                <span className={`${style.red__button} ${recording ? style.active : ''}`}></span>
            </button>
        </main>
    )
}