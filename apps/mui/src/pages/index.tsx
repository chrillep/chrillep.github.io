import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import * as React from 'react'
import Link from '../components/Link'
import ProTip from '../components/ProTip'

const Home: NextPage = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    MUI v5 + Next.js with TypeScript example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <Link href="/me" color="secondary">
                    Go to the me page
                </Link>
                <Link href="/me2" color="secondary">
                    Go to the me page WIP
                </Link>
                <ProTip />
            </Box>
        </Container>
    )
}

export default Home
