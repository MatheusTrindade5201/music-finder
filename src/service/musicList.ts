import { Music } from "@/types/Music";
import axios from "axios";
import { SetStateAction } from "react";

export const musicList = axios.create({
    baseURL: "http://localhost:3000/musicas"
})


interface Props {
    setMusicList: React.Dispatch<React.SetStateAction<Music[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const getMusicList = async ({setMusicList, setIsLoading} : Props) => {
    musicList.get('/')
    .then(response => setMusicList(response.data))
    .then(() => setIsLoading(false))
}