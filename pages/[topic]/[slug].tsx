// @ts-nocheck
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect } from 'react'
import Script from 'next/script'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MdxProvider from "../../components/mdx-provider"
import rehypeHighlight from 'rehype-highlight'
import hljs from 'highlight.js';

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

const PostPage = ({ slug, category, frontMatter, mdxSource }) => {
    //const status = useScript(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js`)
    //console.log("Post page: ", slug, category)
    //useEffect(() => {
//
    //    if (typeof hljs !== 'undefined') {
    //        console.log("hljs", hljs)
    //        hljs.highlightAll();
    //    }
    //}, [status])
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <article className="relative pt-24 pb-60 flex flex-col items-center">
                <header className="w-full max-w-[700px] h-auto pt-20 ml-auto mr-auto relative flex flex-col items-center">
                    <span className="mb-2 text-sm">{frontMatter.date}</span>
                    <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">{frontMatter.title}</h1>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{frontMatter.description}</p>

                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg  my-12">


                        <Image
                            layout="fill"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/img/placeholder.webp"
                            sizes="100vw"
                            src={frontMatter.thumbnail || frontMatter.cover || "/img/placeholder.webp"}
                            alt={frontMatter.keywords[0] || frontMatter.title}
                            className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 z-0"
                        />
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
                        className="blur-blob"
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

            </article>


        </>
    )
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

        // Category and slug of the iterated post
        const postTopic = frontMatter.topic || "post"
        const postSlug = frontMatter.slug || filename.replace('.mdx', '')  // Default slug

        if (postTopic === topic && postSlug === slug) {
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
            mdxSource
        }
    }
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    //console.log("[topic]/[slug].tsx - filenames: ", files)
    const paths = files.map(filename => {
        // The location of the .mdx file
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        // frontmatter data
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("[slug] data", frontMatter)
        // The slug will be user defined in the frontmatter
        // Otherwise use default slug obtained from filename
        const slug = frontMatter.slug || filename.replace('.mdx', '')  // Default slug

        const topic = frontMatter.topic || "post"
        //console.log("slug static paths: ", slug, topic)
        return {
            params: {
                slug,
                topic
            }
        }
    })
    //console.info("[topic]/[slug].tsx", paths)

    return {
        paths,
        fallback: false
    }
}

export default PostPage
