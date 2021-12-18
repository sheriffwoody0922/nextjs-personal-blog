// @ts-nocheck
import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import { MantineProvider, Button } from '@mantine/core';

import '../styles/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { site } from "../settings"
//import { MetaTags } from "../components/next-seo"
import { useHasMounted, useDebounce } from "../lib/hooks"
//import { CssBaseline } from '@nextui-org/react';

// export type Status = 'idle' | 'loading' | 'ready' | 'error'
// export type ScriptElt = HTMLScriptElement | null

export function reportWebVitals(metric) {
    //console.log(metric)
}


function MyApp({ Component, pageProps }: AppProps) {

    //console.log("loading scripts")
    return (
        <React.Fragment>
            <Layout>
                <Head>

                    <link
                        rel="preload"
                        href="/fonts/Satoshi-Regular.woff2"
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />


                </Head>
                <Component {...pageProps} />
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-141617385-4" />
                <Script strategy="afterInteractive"
                    id="google-analytics-cbs"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-141617385-4');
                        gtag('config', 'G-3GKQHRYFHX');
                    `,
                    }}
                />
            </Layout>

            {/* MESH GRADIENTS */}
        </React.Fragment>


    )
}
export default MyApp
