import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import createEmotionCache from '../helpers/createEmotionCache'
import Layout from '../components/Layout'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <CssVarsProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CssVarsProvider>
        </CacheProvider>
    );
}