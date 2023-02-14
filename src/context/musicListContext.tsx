import { Music } from "@/types/Music";
import { createContext, useState } from "react";

interface ContextProps {
    list: Music[],
     setList: React.Dispatch<React.SetStateAction<Music[]>>
}

export const MusicListContext = createContext({} as ContextProps)

interface Props {
    children: React.ReactElement
}



export const MusicListProvider = ({children} : Props) => {

    const [ list, setList ] = useState<Array<Music>>([]);

    return (
        <MusicListContext.Provider value={{setList, list}}>
            {children}
        </MusicListContext.Provider>
    )
}