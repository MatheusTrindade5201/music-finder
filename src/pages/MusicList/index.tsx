import Footer from '@/components/Footer';
import Header from '@/components/Header';
import style from '@/styles/MusicList.module.css'
import { useState } from 'react'

const MusicList = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ list, setList ] = useState<Array<object>>([]);

    if(isLoading){
        return (
            <main className={style.musicList__page}>
                <span className={style.loading} />
            </main>
        )
    }


    return (
        <main className={style.musicList__page}>
            <div className={style.musicList__container}>
            </div>
        </main>
    )
}

export default MusicList