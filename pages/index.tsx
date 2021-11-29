// @ts-nocheck
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../layout/footer'
import { ArticleSeo } from "../components/next-seo"
import { site } from "../settings"
import HomepageProjects from '../components/HomepageProjects'

import decorativePatterns from '../public/img/decorative/background-patterns.png'

function Home() {
    return (
        <>
            <Head>
                <ArticleSeo
                    type="website"
                    title={site.title}
                    description={site.description}
                    canonical={site.website}
                    cover={site.cover}
                />
            </Head>
            <main className="content-section main z-20 px-4 sm:pt-40">
                <HeroDark />
                <Features />
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

                        <div className="flex flex-col items-start justify-center w-full pt-10 pb-10 -mt-10 md:pb-24 md:pr-16 z-20">
                            <h1 className="animate-text-xs text-5xl md:text-6xl lg:text-7xl xl:text-7xl max-w-8xl xl:leading-tight dark:text-gray-50 bg-clip-text z-10 ">
                                Hi, I'm Can. 👋 <br />I build digital products.
                            </h1>
                            <p className="animate-text-lg text-xl opacity-80 my-10 ">
                                I'm an engineer focusing on web development and e-commerce.
                                <br className="hidden text-xl xl:block" />
                                I'm providing <strong>freelance web development</strong> solutions as a <strong>Wix expert</strong> and <strong>Shopify expert</strong>.
                            </p>

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

export default Home
