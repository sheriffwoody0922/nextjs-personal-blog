// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'


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

                    {/*
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                                {
                                "@context": "https://schema.org/",
                                "@type": "Person",
                                "name": "Can Burak Sofyalıoğlu",
                                "jobTitle": "Software Engineer",
                                "logo": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/webmeister/webmeister-digital-logo-siyah.png",
                                "@id": "https://www.cbsofyalioglu.com/#/schema/person/46718b7c6c1047fc8bffca1e5404806e",
                                "url": ["https://webmeister.org", "https://www.cbsofyalioglu.com/"],
                                "alumniOf": {
                                    "@type": "CollegeOrUniversity",
                                    "name": "Boğaziçi University",
                                    "sameAs": "https://en.wikipedia.org/wiki/Bo%C4%9Fazi%C3%A7i_University"
                                },
                                "image": {
                                    "@type": "ImageObject",
                                    "@id": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/cbsofyalioglu-pp.jpg",
                                    "inLanguage": "tr",
                                    "url": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/cbsofyalioglu-pp.jpg",
                                    "contentUrl": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/cbsofyalioglu-pp.jpg",
                                    "width": 1011,
                                    "height": 927,
                                    "caption": "Can Burak Sofyalıoğlu"
                                },
                                "sameAs": [
                                    "https://www.cbsofyalioglu.com",
                                    "https://webmeister.org",
                                    "https://www.facebook.com/john.baudrillard",
                                    "https://www.linkedin.com/in/cbsofyalioglu/",
                                    "https://www.pinterest.com/cbsofyalioglu/",
                                    "https://stackoverflow.com/story/webmeister",
                                    "https://www.figma.com/@webmeister",
                                    "https://github.com/canburaks/",
                                    "https://twitter.com/@webmeisterorg",
                                    "https://open.spotify.com/user/canburaks",
                                    "https://www.youtube.com/channel/UCww7ea5HVpGOBhm5x-ZvkLQ"
                                ]
                            }`,
                        }}
                    ></script>
                    */}

                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3GKQHRYFHX" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-3GKQHRYFHX');
                            `,
                        }}
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
