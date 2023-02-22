import axios, { AxiosRequestConfig } from "axios";
import { Music, recomended } from "@/types/Music";
import { Params } from "react-router-dom";


export const songInfos = axios.create({
    baseURL: 'https://shazam.p.rapidapi.com/songs',
})

interface DetailsProps {
    id: string | undefined,
    setCurrentMusic: React.Dispatch<React.SetStateAction<Music | undefined>>,
    setRecomendedList: React.Dispatch<React.SetStateAction<recomended | undefined>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const apiKey = import.meta.env.VITE_API_KEY


export const getAllDetails = ({id, setCurrentMusic, setRecomendedList, setIsLoading} : DetailsProps) => {
    Promise.all([
        songInfos.get('/get-details', {
            params: {key: id},
            headers: {
                'X-RapidAPI-Key': apiKey
            }
        }),
        songInfos.get('/list-recommendations', {
            params: {key: id},
            headers: {
                'X-RapidAPI-Key': apiKey
            }
        })
    ]).then(responses => {
        setCurrentMusic(responses[0].data);
        setRecomendedList(responses[1].data)
    }).then(() => setIsLoading(false))
}