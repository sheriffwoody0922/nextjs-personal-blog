// @ts-nocheck
import Image from 'next/image'
import Head from 'next/head'

import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPosts } from '../../components/blog-posts'
import { WebmeisterLogo } from '../../components/Svg'
import { MetaTags, ListItemCard } from '../../components'
import { site } from '../../settings'

export default function Blog({ posts }) {
    //console.log("Blog posts: ", posts)
    const sortedPosts = posts.sort((a, b) => {
        const ad = new Date(a.frontMatter.date)
        const bd = new Date(b.frontMatter.date)
        return bd - ad
    })
    const canonical = "https://www.cbsofyalioglu.com/en/"
    const title = "Design &amp; Development | Articles mostly about web development"
    const description = "Articles mostly about web development. Django, AdonisJS, ReactJS, SolidJS ..."
    return (
        <>
            <Head>
                <title key="h-title-tag">{site.title}</title>
                <meta name="title" content={title} key="h-title" />
                <meta name="description" content={description} key="h-description" />
                <link rel="canonical" href={canonical} key="h-canonical" />
                <MetaTags
                    type="website"
                    title={title}
                    description={description}
                    canonical={canonical}
                    cover={site.cover}
                />
            </Head>
            <div className="min-h-screen">

                <div className=" py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        {/* Text */}
                        <div className="mt-20 mb-10 md:mb-16">
                            <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">Blog</h2>

                            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Welcome to my blog. I'm planning to publish my articles and notes mostly about the web.</p>
                        </div>

                        {/* Article */}
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                            {sortedPosts.map((post, i) => (
                                <ListItemCard
                                    title={post.frontMatter.title}
                                    cover={post.frontMatter.cover}
                                    keywords={post.frontMatter.keywords}
                                    slug={post.frontMatter.slug}
                                    topic={post.frontMatter.topic}
                                    key={"eng-" + post.frontMatter.slug}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        if (frontMatter.language &&
            (frontMatter.language.toLowerCase() === "en" || frontMatter.language.toLowerCase() === "eng")
        ) {
            return {
                frontMatter,
                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],

                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic || "post"
            }
        }
    }).filter(Boolean)
    return {
        props: {
            posts
        }
    }
}

