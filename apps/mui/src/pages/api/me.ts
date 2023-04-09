// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import profileBgPic from '../../../public/assets/images/profile_bg.jpeg'
import WorkIcon from '@mui/icons-material/Work';

export type ListItem =  {
    title: string
    link?: string
    value?: string
    icon?: string
}

export type List = {
    title: string
    listItems: ListItem[]
}

export type Item = {
    type: string
    title?: string
    description: string
    ingress?: string
    paragraphs?: string[]
    bgImage?: string|any
    image: string
    list?: List
}
export type Items = Item[]

const body = <Items>[
    {
        type: 'header',
        title: 'Curriculum Vitae - Christian Widlund',
        description: 'description',
        bgImage: profileBgPic,
        image: 'https://www.gravatar.com/avatar/e6b67417d9fcae199d0eece60eaea9c0?s=56',
        list: {
            title: 'index',
            listItems: [
                { title: 'Personuppgifter', link: '#personuppgifter', icon: 'ContentCut' },
                { title: 'Presentation', link: '#presentation' },
                { title: 'Utbildningar', link: '#utbildningar' },
                { title: 'Anställningar', link: '#anställningar' },
                { title: 'Övriga meriter', link: '#övriga-meriter' },
            ],
        }
    },
    {
        type: 'subHeader',
        title: 'Personuppgifter',
        description: 'description',
        list: {
            title: 'Personuppgifter',
            listItems: [
                {title: 'Förnamn', value: 'Christian'},
                {title: 'Efternamn', value: 'Widlund'},
                {title: 'Telefon', value: '0702478607'},
                {title: 'Utdelningsadress', value: 'Kristallvägen 174'},
                {title: 'Postnummer', value: '126 79'},
                {title: 'Postort', value: 'HÄGERTSTEN'},
                {title: 'Land', value: 'Sverige'},
                {title: 'E-post adress', value: 'christian.widlund@gmail.com'},
                {title: 'Hemsida', value: 'http://hptftw.ath.cx/cv'},
                {title: 'LinkedIn', value: 'Visa Christian Widlunds profil', link: 'https://www.linkedin.com/in/christian-widlund-0b0b3a1b/'},
                {title: 'Facebook', value: 'Visa Christian Widlunds profil', link: 'https://www.facebook.com/christian.widlund'},
                {title: 'Twitter', value: 'Följ @Chrillep', link: 'https://twitter.com/Chrillep'},
                {title: 'GitHub', value: 'Visa Chrillep på GitHubVisa Chrillep', link: 'https://github.com/chrillep'},
            ],
        }
    },{
        type: 'subHeader',
        title: 'Presentation',
        description: 'description',
        ingress: '',
        paragraphs: [
            'Jag heter <span className="namn"> christian widlund</span> och bor sedan 7 år i Stockholm. Har precis avslutat min studier inom<a href="https://jenseneducation.se/JENSEN-yrkeshogskola/Utbildningar/Webbapplikationsutvecklare/">Webbapplikationsutveckling</a> på <a href="https://jenseneducation.se/">JENSEN education.</a> Har sedan en tidig ålder haft ett gediget intresse för teknik och datorer. Jag studerade därmed media med rörlig bild och ljud som fokus. På fritiden tog jag isär och plockade ihop datorer. Lärde mig snabbt att hantera mjuk samt hårdvara. Flyttade senare ner till Stockholm för att skaffa mig ett jobb.inte så snart så fick jag ett jobb hos ett rekryteringsföretag och genom det jobb på <abbr title="Stort dataföretag">DELL</abbr>.',
            ''],
    }
]

export function getData() {
    return <Items>body
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Items>
) {

    res.status(200).json(getData())
}
