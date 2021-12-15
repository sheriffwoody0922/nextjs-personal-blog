// @ts-nocheck
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'

import '../styles/tailwind.css'
import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { site } from "../settings"
//import { MetaTags } from "../components/next-seo"
//import { useAdvancedScript, useDebounce } from "../lib/hooks"
//import { CssBaseline } from '@nextui-org/react';

// export type Status = 'idle' | 'loading' | 'ready' | 'error'
// export type ScriptElt = HTMLScriptElement | null

export function reportWebVitals(metric) {
    console.log(metric)
}


function MyApp({ Component, pageProps }: AppProps) {
    //console.log("AppComponent and props", Component, pageProps)

    return (
        <React.Fragment>
            <Layout>
                <Head>
                    <Script afterInteractive src="https://www.googletagmanager.com/gtag/js?id=UA-141617385-4" />
                    <Script afterInteractive  id="google-analytics"
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

                    <Script
                        afterInteractive
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9259748524746137"
                        crossOrigin="anonymous" />
                </Head>
                <Component {...pageProps} />

            </Layout>
            {/* MESH GRADIENTS */}
        </React.Fragment>


    )
}
export default MyApp
