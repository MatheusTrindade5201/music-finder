import style from "@/styles/DiscoverMusic.module.css"
import { useState } from "react"

export const DicoverMusicPage = () => {

    const [ active, setActive ] = useState<boolean>()

    return (
        <main className={style.discoverMusic__page}>
            <button onClick={() => setActive(!active)} className={style.discoverMusic__button}>
                <span className={`${style.red__button} ${active ? style.active : ''}`}></span>
            </button>
        </main>
    )
}