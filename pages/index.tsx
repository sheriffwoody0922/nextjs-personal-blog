// @ts-nocheck
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../layout/footer'
import { RichData, MetaTags } from "../components/next-seo"
import { site } from "../settings"
import HomepageProjects from '../components/HomepageProjects'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import decorativePatterns from '../public/img/decorative/background-patterns.png'
import { WebmeisterGradientLogo } from "../components/logo"
import { LinkIcon } from "../components"

function Home({ featuredPosts, turkishPosts, englishPosts }) {
    const sortedFeaturedPosts = featuredPosts.sort((a, b) => {
        const ad = new Date(a.frontMatter.date)
        const bd = new Date(b.frontMatter.date)
        return bd - ad
    })
    const sortedEnglishPosts = englishPosts.sort((a,b) => {
        const ad = new Date(a.frontMatter.date)
        const bd = new Date(b.frontMatter.date)
        return bd - ad
    }).slice(0,6)
    const sortedTurkishPosts = turkishPosts.sort((a, b) => {
        const ad = new Date(a.frontMatter.date)
        const bd = new Date(b.frontMatter.date)
        return bd - ad
    }).slice(0,6)
    return (
        <>
            <Head>
                <MetaTags
                    type="website"
                    title={site.title}
                    description={site.description}
                    canonical={site.website}
                    cover={site.cover}
                />
            </Head>
            <main className="content-section main z-20 px-4 pt-16 sm:pt-16">
                <div className="">
                    <div className="max-w-screen-2xl px-4 md:px-8">
                        <HeroDark />

                        {/* FEATURED */}
                        <div className="mb-8">
                            <h2 className="text-gray-800 text-4xl lg:text-5xl text-left mb-4 md:mb-6">
                                Featured posts
                            </h2>

                            <p className="max-w-screen-md text-gray-500 md:text-lg text-left">Some of the blog posts that are written in Turkish and English.</p>
                        </div>


                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                            {sortedFeaturedPosts.map(post => (
                                <li
                                    key={"featured-" + post.slug}
                                    title={post.frontMatter.title}
                                    href={`/${post.topic}/${post.slug}`}
                                    className="group h-48 md:h-64 xl:h-64 flex flex-col  rounded-lg shadow-lg overflow-hidden relative"
                                >
                                    <Image
                                        layout="fill"
                                        sizes="30vw"
                                        priority
                                        src={post.frontMatter.thumbnail || post.frontMatter.cover || "/img/placeholder.webp"}
                                        alt={(post.frontMatter.keywords && post.frontMatter.keywords[0]) || post.frontMatter.title}
                                        className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-500 z-0"
                                    />

                                    <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                                    <div className="relative p-4 mt-auto">
                                        <span className="block !text-gray-200 text-sm">{post.frontMatter.date}</span>
                                        <h2 className="!text-white text-xl font-semibold transition duration-100 mb-2 relative">
                                            <a
                                                title={post.frontMatter.title}
                                                href={`/${post.topic}/${post.slug}`}
                                                className="group"
                                            >
                                                {post.frontMatter.title}
                                            </a>
                                        </h2>
                                        <p>{post.frontMatter.e}</p>
                                        <a className="!text-indigo-300 " href={`/${post.topic}`} title={`See ${post.topic} articles`}>{post.category}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>


                        {/* ENGLISH */}
                        <div className="mt-16 md:mt-20 mb-8">
                            <h2 className="text-gray-800 text-4xl lg:text-5xl text-left mb-4 md:mb-6">
                                <a href="/en/">Articles in English <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline-block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg></a>
                            </h2>

                            <p className="max-w-screen-md text-gray-500 md:text-lg text-left"></p>
                        </div>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                            {sortedEnglishPosts.map(post => (
                                <li
                                    key={"english-" + post.slug}
                                    title={post.frontMatter.title}
                                    href={`/${post.topic}/${post.slug}`}
                                    className="group h-48 md:h-64 xl:h-64 flex flex-col  rounded-lg shadow-lg overflow-hidden relative"
                                >
                                    <Image
                                        layout="fill"
                                        sizes="30vw"
                                        src={post.frontMatter.thumbnail || post.frontMatter.cover || "/img/placeholder.webp"}
                                        alt={(post.frontMatter.keywords && post.frontMatter.keywords[0]) || post.frontMatter.title}
                                        className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-500 z-0"
                                    />

                                    <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                                    <div className="relative p-4 mt-auto">
                                        <span className="block !text-gray-200 text-sm">{post.frontMatter.date}</span>
                                        <h2 className="!text-white text-xl font-semibold transition duration-100 mb-2 relative">
                                            <a
                                                title={post.frontMatter.title}
                                                href={`/${post.topic}/${post.slug}`}
                                                className="group"
                                            >
                                                {post.frontMatter.title}
                                            </a>
                                        </h2>
                                        <p>{post.frontMatter.e}</p>
                                        <a className="!text-indigo-300 " href={`/${post.topic}`} title={`See ${post.topic} articles`}>{post.category}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* TURKISH */}
                        <div className="mt-16 md:mt-20 mb-8">
                            <h2 className="text-gray-800 text-4xl lg:text-5xl text-left mb-4 md:mb-6">
                                <a href="/tr/">Articles in Turkish <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline-block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg></a>
                            </h2>

                            <p className="max-w-screen-md text-gray-500 md:text-lg text-left"></p>
                        </div>


                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                            {sortedTurkishPosts.map(post => (
                                <li
                                    key={"turkish-" + post.slug}
                                    title={post.frontMatter.title}
                                    href={`/${post.topic}/${post.slug}`}
                                    className="group h-48 md:h-64 xl:h-64 flex flex-col  rounded-lg shadow-lg overflow-hidden relative"
                                >
                                    <Image
                                        layout="fill"
                                        sizes="30vw"
                                        src={post.frontMatter.thumbnail || post.frontMatter.cover || "/img/placeholder.webp"}
                                        alt={(post.frontMatter.keywords && post.frontMatter.keywords[0]) || post.frontMatter.title}
                                        className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-500 z-0"
                                    />

                                    <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                                    <div className="relative p-4 mt-auto">
                                        <span className="block !text-gray-200 text-sm">{post.frontMatter.date}</span>
                                        <h2 className="!text-white text-xl font-semibold transition duration-100 mb-2 relative">
                                            <a
                                                title={post.frontMatter.title}
                                                href={`/${post.topic}/${post.slug}`}
                                                className="group"
                                            >
                                                {post.frontMatter.title}
                                            </a>
                                        </h2>
                                        <p>{post.frontMatter.e}</p>
                                        <a className="!text-indigo-300 " href={`/${post.topic}`} title={`See ${post.topic} articles`}>{post.category}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </main>
        </>
    )
}

export function HeroDark() {
    return (
        <header className="relative w-full overflow-hidden z-20 hero">
            <div className="relative top-0 right-0 bottom-0 left-0 w-full h-auto">
                <div className="relative  mx-auto max-w-7xl z-10" >
                    <div className="absolute top-0 right-0 hidden w-full h-full -ml-32 transform scale-100 translate-x-1/2 translate-y-20  md:block -rotate-12 opacity-90" />
                    <div className="flex flex-col items-center justify-between w-full  relative z-10">

                        <div className="flex flex-col items-start justify-center w-full pt-0 pb-10 md:pr-16 z-20">
                            <h1 className="animate-text-xs text-5xl md:text-6xl lg:text-7xl xl:text-7xl max-w-8xl xl:leading-tight dark:text-gray-50 bg-clip-text z-10 ">
                                <span>Design</span> & <span>Development</span>
                            </h1>
                            <p className="animate-text-lg text-xl opacity-80  uppercase mt-4">by Can Burak Sofyalıoğlu</p>
                            {/*<p className="animate-text-lg text-xl opacity-80 my-10 ">
                                Hi, I'm Can. I'm an engineer and focusing on web development and e-commerce.
                                <br />
                                This is my personal blog mostly about development and design.
                            </p> */}
                        <hr />
                        </div>

                        <div className="absolute z-0 md:relative md:z-10 flex items-center justify-center w-full md:pt-0 mt-32 mb-16 md:mt-1 opacity-75 md:opacity-100"></div>
                    </div>
                </div>
                <div id="hero-pattern-box" className="absolute top-0 right-0 w-full py-12 opacity-100 flex justify-end z-0 h-64">
                </div>
            </div>
        </header>
    )
}

function Features() {
    return (
        <section className="z-20 relative" aria-label="Job">
            <div className="relative pb-32 mx-auto max-w-7xl">
                <div className="relative z-20">
                    <h2 className="animate-text-xl text-5xl md:text-6xl lg:text-7xl xl:text-7xl max-w-8xl xl:leading-tight">
                        I build websites, ecommerce stores, and web apps.
                    </h2>
                    <div className="flex flex-col mt-14 sm:flex-row sm:items-center">
                        <p className="text-xl font-normal text-left animate-text-xl">
                            I'm providing full-featured web services including web design,
                            development and search engine optimization.
                        </p>
                        <div className="flex mt-5 space-x-1 sm:mt-1 sm:ml-3">
                            <div className="w-10 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-100" />
                            <div className="w-8 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-75" />
                            <div className="w-4 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-50" />
                            <div className="w-3 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-25" />
                            <div className="w-2 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-10" />
                            <div className="w-2 h-2 bg-green-500 dark:bg-green-300 rounded-full opacity-5" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-24 gap-14 lg:grid-cols-3">
                    <div className="flex text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-12 h-12 mr-8 stroke-current text-green-500"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                            <path d="M13 13l9 3l-4 2l-2 4l-3 -9" />
                            <line x1="3" y1="3" x2="3" y2="3.01" />
                            <line x1="7" y1="3" x2="7" y2="3.01" />
                            <line x1="11" y1="3" x2="11" y2="3.01" />
                            <line x1="15" y1="3" x2="15" y2="3.01" />
                            <line x1="3" y1="7" x2="3" y2="7.01" />
                            <line x1="3" y1="11" x2="3" y2="11.01" />
                            <line x1="3" y1="15" x2="3" y2="15.01" />
                        </svg>
                        <div className="relative space-y-2">
                            <h4 className="text-xl font-bold">Web apps</h4>
                            <p className="text-lg ">
                                I develop web applications in Python and JavaScript programming
                                languages.
                            </p>
                        </div>
                    </div>

                    <div className="flex text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-12 h-12 mr-8 stroke-current text-green-500"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 13.5v-7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6m-8 -10h16m-10 -6v11.5m-8 3.5h7m-3 -3l3 3l-3 3" />
                        </svg>
                        <div className="relative space-y-2">
                            <h4 className="text-xl font-bold">E-Commerce</h4>
                            <p className="text-lg ">
                                I build e-commerce sites and provide technical solutions on Shopify
                                and Wix as a platform partner.
                            </p>
                        </div>
                    </div>

                    <div className="flex text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-12 h-12 mr-8 stroke-current text-green-500"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                            <line x1="17" y1="17" x2="17" y2="17.01" />
                        </svg>
                        <div className="relative space-y-2">
                            <h4 className="text-xl font-bold">No-code</h4>
                            <p className="text-lg">
                                I provide technical solutions on no-code platforms like WebFlow,
                                Wix, Squarespace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const featuredPosts = []
    const turkishPosts = []
    const englishPosts = []
    files.forEach(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        if (frontMatter.categories && frontMatter.categories.includes("featured")) {
            featuredPosts.push({
                frontMatter,
                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],

                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic || "featured"
            })
        }
        if (frontMatter.language === "eng" || frontMatter.language === "en"){
            englishPosts.push({
                frontMatter,
                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],

                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic
            })
        }
        if (frontMatter.language === "tr") {
            turkishPosts.push({
                frontMatter,
                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],

                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic
            })
        }
    })
    ///console.log("posts: ", featuredPosts, turkishPosts, englishPosts)
    return {
        props: {
            featuredPosts,
            turkishPosts,
            englishPosts
        }
    }
}

export default Home
