export const links: Links = {
    home: '/',
    bots: {
        mov: '/bot/mov/{botID}',
        pet: '/bot/pet/{botID}',
        inf: '/bot/inf/{botID}',
        par: '/bot/par/{botID}',
        enc: '/bot/enc/{botID}'
    },
    settings: '/settings',
    logout: '/logout'
}

interface Links {
    home: string,
    bots: {
        mov: string,
        pet: string,
        inf: string,
        par: string,
        enc: string
    },
    settings: string,
    logout: string
}