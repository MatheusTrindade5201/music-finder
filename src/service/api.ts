import axios from "axios"
import songData from "@/mock/clinteastwood_portion_mono.json"
import { NavigateFunction } from "react-router-dom"

export const detect = axios.create({
    baseURL: 'https://shazam.p.rapidapi.com/songs/v2/detect'
})

export const header = {
    headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '1ac846feb8msh2070e4e61a15b93p101491jsnbc75b565a6db',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
}

const data = songData[0].songTxt

interface searchProps {
    navigate: NavigateFunction,
}

export const discoverMusic = ({navigate} : searchProps) => {
    detect.post('',data, header)
    .then(response => navigate(`/app/${response.data.matches[0].id}`))
}