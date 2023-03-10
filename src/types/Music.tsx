export interface Music  {
    title: string,
    key: string,
    subtitle: string,
    images: {
            background: string
    },
    genres: {
        primary: string
    },
    sections: [
        {
            type: string,
            metadata: [{
                title:string,
                text: string
            }],
            youtubeurl: {
                actions: [{
                    uri: string
                }]
            }
            
        }
    ],
    hub: {
        providers:[{
            type: string
        }]
    }
    
}

export interface recomended {
    tracks: [
        
    ]
}

export interface MusicInfo {
    image: string,
    title: string,
    author: string,
    genre: string,
    albun: string | undefined,
    release: string | undefined,
    providers: [
        {
            type:string
        }
    ]
}