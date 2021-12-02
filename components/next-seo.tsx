
// @ts-nocheck
import React from "react"
import Script from 'next/script'

import { NextSeo } from "next-seo"
import { site } from "../settings"

export function ArticleSeo(props) {
    return (
        <>
            <SocialMetaHead {...props} />
            <RichData />
        </>
    )
}

export function SocialMetaHead(props) {
    const currentDate = new Date()
    const data = {
        title: props.title || site.title,
        description: props.description || site.description,
        canonical: props.canonical || site.website,
    }
    const ogdata = {
        type: "article",
        locale: site.locale,
        title: data.title,
        description: data.description,
        url: data.canonical,
        site_name: site.name,
        images: [{
            url: props.cover?.startsWith("https") ? props.cover : site.website + props.cover,
            width: 2200,
            height: 1400,
            alt: data.title
        }]
    }

    const articledata = {
        author: site.socialMediaLinks.linkedin,
        section: props.topic,
        tags: props.tags
    }
    if (props.modified) {
        const date_published = new Date(props.date)
        //const current_date = new Date()
        const modification_date = new Date(props.modified)
        ogdata.updated_time = modification_date
        articledata.published_time = date_published
        articledata.modified_time = modification_date
        articledata.updated_time = modification_date
    }
    const twitterdata = {
        title: data.title,
        description: data.description,
        url: data.canonical,
        cardType: 'summary_large_image',
        creator: "@" + site.socialMediaLinks?.twitter.split("/")[site.socialMediaLinks?.twitter.split("/") - 1]
    }
    const opengraph = (type, content) => (<meta property={`og:${type}`} content={`${content}`} key={type} />)
    const twitter = (type, content) => (<meta name={`twitter:${type}`} content={`${content}`} key={type} />)
    const meta = (name, content) => (<meta name={name} content={content} key={name} />)
    const article = (type, content) => (<meta property={`article:${type}`} content={`${content}`} key={type} />)

    return (
        <>
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            {Object.keys(ogdata).map(og => opengraph(og, ogdata[og]))}
            {Object.keys(twitterdata).map(tw => opengraph(tw, twitterdata[tw]))}

            {props.type === "article" && Object.keys(articledata).map(a => article(a, articledata[a]))}

            {/*Object.keys(data).filter(d => d !== "title").map(d => meta(d, data[d])) */}
            <link rel="canonical" href={data.canonical} />
        </>
    )
}



export function RichData(props) {
    const jsonld = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": site.website + "#website",
                "url": site.website,
                "name": site.name,
                "description": site.description,
                "inLanguage": "en-US"
            },
            {
                "@type": "WebPage",
                "@id": props.canonical,
                "url": props.canonical,
                "name": props.title,
                "isPartOf": {
                    "@id": site.website + "#website"
                },
                "primaryImageOfPage": {
                    "@id": props.canonical + "#primary-image"
                },
                "datePublished": props.date,
                "dateModified": props.modified,
                "author": {
                    "@id": site.author.page
                },
                "description": props.description,
                "breadcrumb": {
                    "@id": props.canonical + "#breadcrumb"
                },
                "inLanguage": site.locale,
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            props.canonical
                        ]
                    }
                ]
            },
            {
                "@type": "Person",
                "@id": site.author.id,
                "name": site.author.name,
                "url": site.author.url,
                "sameAs": site.author.sameAs
            }
        ]
    }
    const articlegraph = {
        "@type": "Article",
        "headline": props.title,
        "datePublished": props.date,
        "dateModified": props.modified,
        "author": {
            "@id": site.author.id,
            "logo": site.author.logo,
            "name": site.author.name,
            "jobTitle": site.author.jobTitle,
            "url": site.author.url,
            "alumniOf": site.author.alumniOf,
            "image": site.author.image,
            "sameAs": site.author.sameAs
        },
        "publisher": {
            "@id": site.website
        },
        "description": props.description,
        "name": props.title,
        "@id": props.canonical + "#richSnippet",
        "isPartOf": {
            "@id": props.canonical + "#webpage"
        },
        "image": {
            "@id": props.cover
        },
        "inLanguage": site.locale,
        "mainEntityOfPage": {
            "@id": props.canonical + "#main-entity"
        }
    }
    if (props.type === "article") {
        jsonld["graph"].push(articlegraph)
    }
    return <Script type="application/ld+json">{jsonld}</Script>
}


/*
<NextSeo
                    defaultTitle={frontMatter.title}
                    title={frontMatter.title}
                    openGraph={{
                        type: "article",
                        locale: site.locale,
                        url: canonical,
                        site_name: site.name,
                        title: frontMatter.title,
                        description: frontMatter.description,
                        article: {
                            publishedTime: new Date(frontMatter.date),
                            modifiedTime: new Date(),
                            authors: [site.socialMediaLinks.linkedin],
                            section: frontMatter.topic,
                            tags: frontMatter.tags
                        },
                        images: [
                            {
                                url: site.website + frontMatter.cover,
                                width: 2200,
                                height: 1400,
                                alt: frontMatter.title
                            }
                        ]
                    }}
                    twitter={{
                        handle: site.socialMediaLinks.twitter.split("/")[site.socialMediaLinks.twitter.split("/") - 1],
                        site: site.socialMediaLinks.twitter.split("/")[site.socialMediaLinks.twitter.split("/") - 1],
                        cardType: 'summary_large_image'
                    }}
                    canonical={canonical}

                />
*/
