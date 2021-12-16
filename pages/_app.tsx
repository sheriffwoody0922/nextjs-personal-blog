// @ts-nocheck
import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'

import '../styles/tailwind.css'
import '../styles/globals.css'
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
                    {/*
                    <title key="h-title-tag">{site.title}</title>
                    <meta name="title" content={site.title} key="h-title" />
                    <meta name="description" content={site.description} key="h-description" />
                    <link rel="canonical" href={site.website} key="h-canonical" />
                    <MetaTags
                        type="website"
                        title={site.title}
                        description={site.description}
                        canonical={site.website}
                        cover={site.cover}
                />
                */}
                    <link
                        rel="preload"
                        href="/fonts/Satoshi-Regular.woff2"
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />



                </Head>
                <Component {...pageProps} />

            </Layout>
            <Script beforeInteractive src="https://www.googletagmanager.com/gtag/js?id=UA-141617385-4" />
            <Script beforeInteractive
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

            <Script
                beforeInteractive
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9259748524746137"
                crossOrigin="anonymous" />
            {/* MESH GRADIENTS */}
        </React.Fragment>


    )
}
export default MyApp
