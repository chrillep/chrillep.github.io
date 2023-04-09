import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Image from 'next/image'
import * as React from 'react'
import ProTip from '../components/ProTip'
import linkedInPic from '../../public/assets/images/LinkedIn_icon.svg'
import facebookPic from '../../public/assets/images/Facebook_Logo_(2019).png'
import twitterPic from '../../public/assets/images/Twitter-logo.svg'
import profileBgPic from '../../public/assets/images/profile_bg.jpeg'
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider, List, ListItem,
    ListItemAvatar, ListItemIcon,
    ListItemText, MenuItem, MenuList,
    Typography,
} from '@mui/material'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import { Items, getData, Item } from './api/me'

type MeProps = {
    items: Items
}

const CardAvatar = (props: { width: number, height: number, item: Item }) => <Avatar sx={{
    width: props.width,
    height: props.height,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
        margin: 0,
    },
}}>
    <Image
        src={props.item.image}
        title='Bild på mig'
        alt='Bild på mig'
        id='minbild'
        className='minbild img-circle'
        height={props.width}
        width={props.width}
    />
</Avatar>

const MeCardMedia = (props: { item: Item }) => <CardMedia sx={{
    position: 'relative', height: 150,
    clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
}}>
    <Image
        src={props.item.bgImage}
        fill
        sizes='100vw'
        style={{
            objectFit: 'cover',
            objectPosition: '0 -200px',
        }}
        alt='Bild på mig'
        id='minbild'
        className='minbild img-circle'
    />
</CardMedia>

const ListIcon = (icon: string) => {
    if(icon === 'ContentCut') {
        return  <ContentCut fontSize="small" />

    }
}


const Me: NextPage<MeProps> = (props) => {
    const {items} = props
    const imageSize = 56
    const imageUrl = `https://www.gravatar.com/avatar/e6b67417d9fcae199d0eece60eaea9c0?s=${imageSize}`
    return (
        <Container id="wrapper" className="container" maxWidth="sm">
            <Grid container spacing={2} sx={{ my: 4}}>
                {items.map((item) => (
                    <Grid key={item.title} xs={12}>
                        <Card sx={{ minWidth: 275 }}>
                            {item.bgImage ? <MeCardMedia item={item} /> : null}
                            {item.image ? <CardAvatar width={imageSize} height={imageSize} item={item} /> : null}
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.title}
                                </Typography>
                                {item.ingress ? <Typography variant="h5" component="div">{item.ingress}</Typography> : null}
                                {item.paragraphs ? item.paragraphs.map((paragraph) => (
                                    <Typography key={paragraph} variant="body2" color="text.secondary">
                                        {paragraph}
                                    </Typography>
                                )) : null}
                                {item.list ?
                                    <>
                                        <Typography variant="h5" component="div">
                                            {item.list.title}
                                        </Typography>
                                        <MenuList>
                                            {item.list.listItems.map((listItem) => (
                                                <MenuItem key={listItem.title}>
                                                    <ListItemIcon>
                                                        {listItem.icon ? ListIcon(listItem.icon): <WorkIcon fontSize="small" />}
                                                    </ListItemIcon>
                                                    <ListItemText>{listItem.title}</ListItemText>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {listItem.value}
                                                    </Typography>
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </>
                                    : null}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <ProTip />
            </Grid>
        </Container>
    )
}
export async function getStaticProps() {
    const items = getData()
    return {
        props: {
            items,
        },
    }
}
export default Me
