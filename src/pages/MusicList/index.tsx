import Card from '@/components/Card';
import { MusicListContext } from '@/context/musicListContext';
import { getMusicList } from '@/service/musicList';
import style from '@/styles/MusicList.module.css'
import { useContext, useEffect, useState } from 'react'

const MusicList = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const { setList, list } = useContext(MusicListContext)

    useEffect(() => {
        getMusicList({setList, setIsLoading});
    },[])

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
                {list.map(music => <Card 
                     title={music.title}
                     key={music.key}
                     author={music.subtitle}
                     image={music.images.background}
                />               
                )}
            </div>
        </main>
    )
}

export default MusicList