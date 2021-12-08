
// @ts-nocheck
import React from "react"
import Script from 'next/script'

import { NextSeo } from "next-seo"
import { site } from "../settings"
import { Fragment } from "react"

const defaultImage = {
    url: site.cover,
    width: 1366,
    height: 826,
    alt: site.title
}

export function MetaTags(props) {
    const currentDate = new Date()
    const isArticle = props.type === "article"
    const haveTags = props.tags && props.tags.length > 0
    const twitterHandle = site.socialMediaLinks?.twitter.split("/")[site.socialMediaLinks?.twitter.split("/").length - 1]
    const coverUrl = props.cover?.startsWith("https") ? props.cover : site.website + props.cover
    //console.log("twitter", twitterHandle)
    const ogdata = {
        type: props.type,
        locale: site.locale,
        title: props.title,
        description: props.description,
        url: props.canonical,
        site_name: site.name,
    }
    const ogimages = [{
        url: coverUrl,
        width: 2200,
        height: 1400,
        alt: props.title
    },
        defaultImage
    ]

    const articledata = {
        author: site.socialMediaLinks.linkedin,
        publisher: site.website,
        section: props.topic,
        tag: props.topic
    }

    if (props.modified) {
        const date_published = new Date(props.date)
        const modification_date = new Date(props.modified)
        ogdata.updated_time = modification_date
        articledata.published_time = date_published
        articledata.modified_time = modification_date
        articledata.updated_time = modification_date
    }
    const twitterdata = {
        title: props.title,
        description: props.description,
        url: props.canonical,
        cardType: 'summary_large_image',
        creator: "@" + twitterHandle
    }
    const opengraph = (type, content) => (<meta property={`og:${type}`} content={`${content}`} key={"og-" + type} />)
    const twitter = (type, content) => (<meta name={`twitter:${type}`} content={`${content}`} key={"tw-" + type} />)
    const article = (type, content) => (<meta property={`article:${type}`} content={`${content}`} key={"article-" + type} />)

    return (
        <Fragment>


            {/* OPEN GRAPH BASIC */}
            {Object.keys(ogdata).map(og => opengraph(og, ogdata[og]))}

            {/* OG ARTICLE BASIC */}
            {isArticle && Object.keys(articledata).map(a => article(a, articledata[a]))}

            {/* OG ARTICLE TAGS  */}
            {haveTags && props.tags.map(articletag => <meta property="article:tag" content={articletag} key={"articletag-" + articletag} />)}

            {/* OG IMAGES  */}
            {ogimages.map(ogimg => (<Fragment key={ogimg.url}>
                <meta property="og:image" content={ogimg.url} />
                <meta property="og:image:secure_url" content={ogimg.url} />
                <meta property="og:image:width" content={ogimg.width} />
                <meta property="og:image:height" content={ogimg.height} />
                <meta property="og:image:alt" content={ogimg.alt} />
            </Fragment>))
            }


            {Object.keys(twitterdata).map(tw => opengraph(tw, twitterdata[tw]))}
        </Fragment>
    )
}



export function RichData(props) {
    const isArticle = props.type === "article"
    const isTechArticle = props.articleType === "TechArticle"
    const articleType = isTechArticle ? "TechArticle" : "BlogPosting"

    const personRichData = {
        "@type": "Person",
        "@id": site.author.id,
        "name": site.author.name,
        "url": site.author.url,
        "jobTitle": site.author.jobTitle,
        "email": site.author.email,
        "sameAs": site.author.sameAs,
        "birthDate": site.author.birthDate,
        "address": site.author.address,
        "alumniOf": site.author.alumniOf,
        "image": site.author.image,
        "logo": site.author.logo,
    }
    const mainRichData = {
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
            personRichData
        ]
    }
    const articlegraph = {
        "@type": articleType,
        "headline": props.title,
        "datePublished": props.date,
        "dateModified": props.modified,
        "author": personRichData,
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
    // ARTICLE SPECIFIC
    // expects [{ type: "Thing", name: "Canva", sameAs: "https://www.wikidata.org/wiki/Q35997" }]
    const mentions = props.mentions || props.frontMatter.mentions
    if (mentions) {
        articlegraph["mentions"] = mentions.map(
            m => ({ "@type": m.type, "name": m.name, "sameAs": m.sameAs })
        )
    }

    // TECH ARTICLE SPECIFIC
    // expects 'Beginner' or 'Expert'
    const proficiencyLevel: ("Beginner" | "Expert") = props.proficiencyLevel || props.frontMatter.proficiencyLevel
    if (proficiencyLevel) {
        articlegraph["proficiencyLevel"] = proficiencyLevel
    }
    // TECH ARTICLE SPECIFIC
    // Prerequisites needed to fulfill steps in article.
    const dependencies: string[] = props.dependencies || props.frontMatter.dependencies
    if (dependencies) {
        articlegraph["dependencies"] = dependencies
    }
    if (props.type === "article") {
        mainRichData["@graph"].push(articlegraph)
    }
    return (
        <script type="application/ld+json" key="h-rich"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(mainRichData)
            }}
        />
    )
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
