// @ts-nocheck
import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MdxProvider from "../../components/mdx-provider"
import {
    PurpleBlob,
    BluePurpleBlob,
    TealBlob,
    RedBlob,
    ThreeColorsBlob,
    TealPinkBlob,
    HeroPattern,
} from '../../components/Svg'
import { useScript } from "../../lib/hooks"
import { ArticleSeo, ScrollTopButton, MetaTags, RichData } from "../../components"
import { site } from "../../settings"




const PostPage = ({ slug, topic, frontMatter, mdxSource }) => {
    const router = useRouter()
    const canonical = frontMatter.canonical || site.website + router.asPath

    const colors = ["bg-yellow-100 text-yellow-800", " bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800"]

    const categories = [...new Set([topic, ...frontMatter.categories])]
    const categoriesWoutPost = categories.filter(cat => cat !== "post")
    const tags = frontMatter.tags
    const keywords = frontMatter.keywords
    //const keywords = frontMatter.keywords
    //console.log("categories", frontMatter)
    return (
        <>
            <Head>
                <title key="h-title-tag">{frontMatter.title}</title>
                <meta name="title" content={frontMatter.title} key="h-title" />
                <meta name="description" content={frontMatter.description} key="h-description" />
                <link rel="canonical" href={frontMatter.canonical} key="h-canonical" />
                <RichData
                    type="article"
                    articleType={frontMatter.articleType}
                    title={frontMatter.title}
                    canonical={canonical}
                    description={frontMatter.description}
                    date={frontMatter.date}
                    modified={frontMatter.modified}
                    cover={frontMatter.cover}
                    frontMatter={frontMatter}
                />
                <MetaTags
                    type="article"
                    title={frontMatter.title}
                    descriptiopn={frontMatter.description}
                    canonical={canonical}
                    topic={frontMatter.topic}
                    tags={frontMatter.tags}
                    date={frontMatter.date}
                    modified={frontMatter.modified}
                    cover={frontMatter.cover}

                />
            </Head>

            <article className="relative pt-8 pb-60 flex flex-col items-center px-4">
                <header className="w-full max-w-[700px] h-auto pt-20 ml-auto mr-auto relative flex flex-col items-center">
                    <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-2">{frontMatter.title}</h1>
                    <span className="mb-2 text-xs">UPDATED: <time dateTime={frontMatter.modified}>{frontMatter.modified}</time></span>
                    <div className="flex w-full justify-center mt-4">
                        {categoriesWoutPost?.map((cat, index) =>
                            <a href={`/${cat}`}
                                title={`See ${cat} posts`}
                                key={cat}
                                className={`inline-flex mx-2 items-center px-3 py-0.5 rounded-full text-sm font-medium ${colors[index]}`}
                            >
                                {cat}
                            </a>
                        )}
                    </div>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto mt-4">{frontMatter.description}</p>


                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg mt-12 mb-4 flex flex-col justify-end">

                        <Image
                            id="primary-image"
                            layout="fill"
                            sizes="50vw"
                            priority
                            placeholder="blur"
                            blurDataURL="/img/placeholder.webp"
                            src={frontMatter.thumbnail || frontMatter.cover || "/img/placeholder.webp"}
                            alt={(frontMatter.keywords && frontMatter.keywords[0]) || frontMatter.name}
                            className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 z-0"
                        />
                    </div>
                    <div className="flex flex-wrap justify-start !max-w-6xl  mb-4 relative z-10">
                        {tags?.map((tag) =>
                            <strong

                                key={tag}
                                className="inline-flex mx-2 mt-2 justify-center items-center  rounded-md border-gray-50 border px-2 py-1 text-xs font-medium dark:text-gray-300 text-gray-800"
                            >
                                #{tag}
                            </strong>
                        )}
                    </div>
                </header>
                <main className="markdown-content z-10 post-page min-h-screen w-full max-w-[700px] h-auto pt-4 ml-auto mr-auto relative flex flex-col">

                    <MdxProvider source={mdxSource} />
                </main>
                <div className="fixed top-40 w-full h-auto hidden">

                    <svg
                        width="1775"
                        height="844"
                        viewBox="0 0 1775 844"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="blur-blob absolute bottom-4 left-0 right-0 w-full"
                    >
                        <g clipPath="url(#clip0_15:2)">
                            <g filter="url(#filter0_f_15:2)">
                                <path
                                    d="M1577.29 448.171C1547.54 498.49 1394.27 531.977 1234.95 522.967C1075.63 513.956 970.598 465.86 1000.35 415.541C1030.1 365.222 1151.47 406.178 1310.79 415.188C1470.11 424.198 1607.04 397.851 1577.29 448.171Z"
                                    fill="#EB0078"
                                />
                                <ellipse
                                    rx="331.517"
                                    ry="73.5057"
                                    transform="matrix(0.993596 0.112989 -0.568853 0.822439 694.831 443.011)"
                                    fill="#32A9FF"
                                />
                                <ellipse
                                    rx="331.517"
                                    ry="73.5057"
                                    transform="matrix(0.993596 0.112989 -0.568853 0.822439 865.164 448.191)"
                                    fill="#5B08D5"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_15:2"
                                x="12.7568"
                                y="21.8836"
                                width="1918.62"
                                height="852.548"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_15:2" />
                            </filter>
                            <clipPath id="clip0_15:2">
                                <rect width="1775" height="844" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <hr className="border-gray-100" />

                <div className="flex flex-wrap justify-center !max-w-6xl  mt-4 pt-8">
                    {keywords?.map((tag) =>
                        <strong

                            key={tag}
                            className="inline-flex mx-2 mt-2 justify-center items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 !text-gray-800"
                        >
                            {tag}
                        </strong>
                    )}
                </div>
            </article>
            <ScrollTopButton />
        </>
    )
}

function Decor() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="481"
            height="511"
            fill="none"
            viewBox="0 0 481 511"
            className="post-decor"
        >
            <path
                stroke="url(#paint0_linear_164_4)"
                strokeWidth="10"
                d="M258.585 510.792V402.113c0-20.007 16.219-36.226 36.226-36.226h39.849c20.008 0 36.227-16.219 36.227-36.227 0-20.007-16.219-36.226-36.227-36.226H149.906c-20.008 0-36.227-16.219-36.227-36.226 0-20.008 16.219-36.227 36.227-36.227h289.811c20.007 0 36.226-16.219 36.226-36.226 0-20.008-16.219-36.227-36.226-36.227H41.227C21.218 148.528 5 132.309 5 112.302c0-20.007 16.22-36.227 36.226-36.227h217.359c20.007 0 36.226-16.219 36.226-36.226V0"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_164_4"
                    x1="120.575"
                    x2="422.075"
                    y1="-38.575"
                    y2="599.925"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0046"></stop>
                    <stop offset="1" stopColor="#BD00FF"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}
export const getStaticProps = async ({ params: { slug, topic } }) => {
    //console.log("cat & slug: ", topic, slug)
    // This will be a correct filename rather than user-defined slug
    let currentPostSlug;

    // Iterate over all files to find corresponding post
    for (const filename of fs.readdirSync(path.join('posts'))) {
        // The location of the .mdx file
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        // frontmatter data
        const { data: frontMatter } = matter(markdownWithMeta)

        // topic of the iterated post
        const postTopic = frontMatter.topic

        // All possible topics including the categories
        const categories = frontMatter.categories || []
        const postTopics = [frontMatter.topic ?? "post", ...categories].filter(Boolean)
        const postSlug = frontMatter.slug || filename.replace('.mdx', '')  // Default slug

        if (postTopics.includes(topic) && postSlug === slug) {
            //console.info("Corresponding post found: ", filename)
            currentPostSlug = filename
            break;
        }
    }
    if (!currentPostSlug) {
        throw new Error(`The post with a given slug couldn't be found!: (slug: ${slug}, topic${topic})`,)
    }

    const markdownWithMeta = fs.readFileSync(path.join('posts', currentPostSlug), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    //console.info("The post data: ", frontMatter)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontMatter,
            slug,
            topic,
            mdxSource
        }
    }
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    //console.log("[topic]/[slug].tsx - filenames: ", files)
    const paths = []
    files.forEach(filename => {
        // The location of the .mdx file
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        // frontmatter data
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("[slug] data", frontMatter)
        // The slug will be user defined in the frontmatter
        // Otherwise use default slug obtained from filename
        const slug = frontMatter.slug || filename.replace('.mdx', '')  // Default slug

        const categories = frontMatter.categories || []
        const possibleTopics = [frontMatter.topic ?? "post", ...categories].filter(Boolean)

        // Both topic and categories are selected
        const topics = [...new Set(possibleTopics)]
        //console.log("possibleTopics (unique): ", topics)
        topics.forEach(t => paths.push({ params: { slug, topic: t } }))

    })
    //console.info("[topic]/[slug].tsx", paths)

    return {
        paths,
        fallback: false
    }
}

export default PostPage
