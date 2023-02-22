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
    ]
}

export interface recomended {
    tracks: [
        
    ]
}