import { getId } from "@/helpers/getId";
import { Music, MusicInfo } from "@/types/Music"

export const useHandleData = () => {

    const handleMusicInfo = (currentMusic: Music) => {
        let infos: MusicInfo = {image: '', title: '', author: '', genre: '', albun: '', release: '', providers: [{type: ''}]}
        infos.image = currentMusic.images.background;
        infos.title = currentMusic.title;
        infos.author = currentMusic.subtitle;
        infos.genre = currentMusic.genres.primary;
        infos.albun = currentMusic.sections.find((item: { type: string }) => item.type === 'SONG')?.metadata.find((item: { title: string }) => item.title === 'Album')?.text;
        infos.release = currentMusic.sections.find((item: { type: string }) => item.type === 'SONG')?.metadata.find((item: { title: string }) => item.title === 'Released')?.text;
        infos.providers = currentMusic.hub.providers
        return infos
    }

    const handleVideoLink = (currentMusic: Music) => {
        const link = currentMusic.sections.find((item: { type: string }) => item.type === 'VIDEO')?.youtubeurl.actions[0].uri;
        const id = getId(link)
        return id
    }

    return{
        handleMusicInfo,
        handleVideoLink
    }
}