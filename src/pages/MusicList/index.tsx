import Footer from '@/components/Footer';
import Header from '@/components/Header';
import style from '@/styles/MusicList.module.css'
import { useState } from 'react'

const MusicList = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ list, setList ] = useState<Array<object>>([]);

    if(isLoading){
        return (
            <main className={style.musicList__page}>
                <span className={style.loading} />
            </main>
        )
    }

    if(!isLoading && list.length===0) {
        return (
            <main className={style.musicList__page}>
                <h3 className={style.musicList__noMusic}>Nenhuma música salva.</h3>
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