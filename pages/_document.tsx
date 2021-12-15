// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="dark">
                <Head>
                    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/logo/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/logo/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/logo/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/logo/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/logo/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/logo/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/logo/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/logo/apple-touch-icon-152x152.png" />
                    <link rel="icon" type="image/png" href="/logo/favicon-196x196.png" sizes="196x196" />
                    <link rel="icon" type="image/png" href="/logo/favicon-96x96.png" sizes="96x96" />
                    <link rel="icon" type="image/png" href="/logo/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="/logo/favicon-16x16.png" sizes="16x16" />
                    <link rel="icon" type="image/png" href="/logo/favicon-128.png" sizes="128x128" />
                    <link rel="icon" href="/logo/favicon.ico" />
                    <link
                        rel="preload"
                        href="/fonts/Satoshi-Regular.woff2"
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                </Head>
                <body className="bg-gray-50 dark:bg-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
