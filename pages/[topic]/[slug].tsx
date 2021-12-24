// @ts-nocheck
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
    PurpleBlob,
    BluePurpleBlob,
    TealBlob,
    RedBlob,
    ThreeColorsBlob,
    TealPinkBlob,
    HeroPattern,
    VerticleBlob
} from '../../components/Svg'
import { useScript } from "../../lib/hooks"
import { ArticleSeo, MetaTags, RichData, ListItemCard, ScrollTopSimpleButton } from "../../components"
import { site } from "../../settings"

const MdxProvider = dynamic(() => import('../../components/mdx/mdx-provider'))
const ScrollTopButton = dynamic(() => import("../../components/button"))

const PostPage = ({ slug, topic, frontMatter, mdxSource, relatedPosts }) => {
    const router = useRouter()
    const canonical = frontMatter.canonical || site.website + router.asPath

    const colors = ["bg-yellow-900 text-yellow-500", " bg-green-900 text-green-500", "bg-indigo-900 text-indigo-500", "bg-indigo-900 text-indigo-500", "bg-purple-900 text-purple-500"]

    const categories = [...new Set([topic, ...frontMatter.categories])]
    const categoriesWoutPost = categories.filter(cat => (cat !== "post") && (cat !== "featured"))
    const tags = frontMatter.tags
    const keywords = frontMatter.keywords
    //const keywords = frontMatter.keywords
    //console.log("categories", "rendered")
    const ArticleHead = React.memo(() => (
        <header className="w-full max-w-[760px] h-auto pt-20 ml-auto mr-auto relative flex flex-col items-center">
            <h1 className="text-gray-800 animate-text-md text-5xl lg:text-7xl  text-center mb-4 md:mb-2 mt-8 sm:mt-0">{frontMatter.title}</h1>
            <span className="my-2 text-xs  animate-text-lg !dark:text-gray-200 !text-gray-500">UPDATED: <time dateTime={frontMatter.modified}>{frontMatter.modified}</time></span>
            <div className="flex w-full justify-center mt-2 sm:mt-4">
                {categoriesWoutPost?.map((cat, index) =>
                    <a href={`/${cat}`}
                        title={`See ${cat} posts`}
                        key={"article-header-category-" + cat}
                        className={`animate-text-lg inline-flex mx-2 items-center px-3 py-0.5 rounded-full text-sm font-bold ${colors[index]} `}
                    >
                        <em>{cat}</em>
                    </a>
                )}
            </div>
            <p className="animate-text-xl max-w-screen-md text-gray-500 md:text-lg text-center mx-auto mt-20 sm:mt-8 mb-40 sm:mb-4">{frontMatter.description}</p>
            <div className="relative h-auto min-h-[250px] sm:min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-lg mt-12 mb-4 flex flex-col justify-end">

                <Image
                    id="primary-image"
                    layout="intrinsic"
                    width={2200}
                    height={1400}
                    priority
                    //loading="lazy"
                    placeholder="blur"
                    blurDataURL="/img/placeholder.webp"
                    src={frontMatter.thumbnail || frontMatter.cover || "/img/placeholder.webp"}
                    alt={(frontMatter.keywords && frontMatter.keywords[0]) || frontMatter.name}
                    className="animate-text-2xl w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 z-0"
                />
            </div>
            <div className="flex flex-wrap justify-center !max-w-6xl  mb-4 relative z-10">
                {tags?.map((tag) =>
                    <span

                        key={"article-header-tag-" + tag}
                        className="animate-text-4xl inline-flex mx-1 mt-2 justify-center items-center  rounded-md border-gray-50 border px-2 py-1 text-xs font-medium dark:text-gray-300 text-gray-800"
                    >
                        #{tag}
                    </span>
                )}
            </div>
        </header>
    ))
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
                    canonical={frontMatter.canonical}
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
                    canonical={frontMatter.canonical}
                    topic={frontMatter.topic}
                    tags={frontMatter.tags}
                    keywords={frontMatter.keywords}
                    date={frontMatter.date}
                    modified={frontMatter.modified}
                    cover={frontMatter.cover}
                    monetize={frontMatter.monetize}
                    frontMatter={frontMatter}
                />
            </Head>
            <ArticleHead />
            <article className="relative pt-8 pb-32 flex flex-col items-center px-4">

                <main className="markdown-content relative z-10 post-page min-h-screen w-full max-w-[700px] h-auto pt-4 ml-auto mr-auto relative flex flex-col !z-10">
                    <hr />
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



                <div className="flex flex-wrap justify-center !max-w-6xl  mt-4 pt-8">
                    {keywords?.map((tag) =>
                        <strong

                            key={"article-footer-keywords-" + tag}
                            className="inline-flex mx-2 mt-2 justify-center items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 !text-gray-800"
                        >
                            {tag}
                        </strong>
                    )}
                </div>
            </article>
            <hr className="border-gray-100" />

            {/* RELATED POSTS */}
            <aside className="relative pt-20 pb-60 flex flex-col items-center px-12">
                <h2 className="w-full max-w-[760px] mb-6 !text-left">{frontMatter.language === "tr" ? "İlginizi çekebilir" : "Other posts you may be interested"}</h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-2  gap-4 md:gap-6 xl:gap-8 w-full max-w-[760px]">
                    {relatedPosts.map((rp) => <ListItemCard
                        key={"article-featured-post-" + rp.slug}
                        title={rp.title}
                        topic={rp.topic}
                        slug={rp.slug}
                        cover={rp.cover}
                    />
                    )}
                </ul>

            </aside>

            <ScrollTopSimpleButton />
        </>
    )
}

export const getStaticProps = async ({ params: { slug, topic } }) => {
    //console.log("cat & slug: ", topic, slug)
    // This will be a correct filename rather than user-defined slug
    let allPostsFrontMatters = []
    let relatedPosts = []
    let currentPostSlug;
    let currentPost;


    // Read all frontMatter data and store them
    fs.readdirSync(path.join("posts")).forEach(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        allPostsFrontMatters.push(frontMatter)
    })

    // Iterate over all files to find corresponding post
    for (const frontMatter of allPostsFrontMatters) {
        // The location of the .mdx file
        //const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        // frontmatter data
        //const { data: frontMatter } = matter(markdownWithMeta)

        // slug of the iterated post
        const postSlug = frontMatter.slug || filename.replace('.mdx', '')  // Default slug

        // topic of the iterated post
        const postTopic = frontMatter.topic

        // All possible topics including the categories
        const categories = frontMatter.categories || []
        const postTopics = [frontMatter.topic ?? "post", ...categories].filter(Boolean)

        // if the topic prefix and slug are matches then terminate iteration
        if (postTopics.includes(topic) && postSlug === slug) {
            //console.info("Corresponding post found: ", filename)
            currentPostSlug = frontMatter.slug
            break
        }
    }
    if (!currentPostSlug) {
        throw new Error(`The post with a given slug couldn't be found!: (slug: ${slug}, topic${topic})`,)
    }
    //console.log("current", currentPostSlug)
    const markdownWithMeta = fs.readFileSync(path.join('posts', currentPostSlug + ".mdx"), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)

    // Find related posts
    if (frontMatter.related && frontMatter.related.length > 0) {
        const relatedSlugs = frontMatter.related
        relatedPosts = allPostsFrontMatters.filter(postFrontMatter => {
            if (relatedSlugs.includes(postFrontMatter.slug)) {
                return postFrontMatter
            }
        })
    }
    //console.log("relatedPosts", relatedPosts)
    //console.info("The post data: ", frontMatter)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontMatter,
            slug,
            topic,
            mdxSource,
            relatedPosts
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
