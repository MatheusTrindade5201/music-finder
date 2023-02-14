import { Music } from "@/types/Music";
import { createContext, useState } from "react";

interface ContextProps {
    musicList: Music[],
    setMusicList: React.Dispatch<React.SetStateAction<Music[]>>
}

export const MusicListContext = createContext({} as ContextProps)

interface Props {
    children: React.ReactElement
}



export const MusicListProvider = ({children} : Props) => {

    const [ musicList, setMusicList ] = useState<Array<Music>>([]);

    return (
        <MusicListContext.Provider value={{musicList, setMusicList}}>
            {children}
        </MusicListContext.Provider>
    )
}