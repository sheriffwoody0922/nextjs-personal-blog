import { useState } from 'react';
import Head from 'next/head'

import '../styles/tailwind.css'
import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { site } from "../settings"
import { ArticleSeo } from "../components/next-seo"
//import { CssBaseline } from '@nextui-org/react';


export function reportWebVitals(metric) {
    //console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Layout>
                <Head>

                    <ArticleSeo
                        type="website"
                        title={site.title}
                        description={site.description}
                        canonical={site.website}
                        cover={site.cover}
                    />
                </Head>
                <Component {...pageProps} />

            </Layout>
            {/* MESH GRADIENTS */}
        </React.Fragment>


    )
}
export default MyApp
