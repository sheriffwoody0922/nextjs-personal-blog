import { useState } from 'react';
import '../styles/tailwind.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '../layout/layout'

import {
    TealBlob,
    BluePurpleBlob,
    ThreeColorsBlob,
    TealPinkBlob,
    PurplePinkBlob,
} from '../components/Svg'
//import { CssBaseline } from '@nextui-org/react';


export function reportWebVitals(metric) {
    //console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />

            </Layout>
            {/* MESH GRADIENTS */}
        </>


    )
}
export default MyApp
