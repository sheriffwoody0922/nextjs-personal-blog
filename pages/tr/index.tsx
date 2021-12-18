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
import { ProfilePageJsonLd } from 'next-seo'

const descriptionLong = `
Merhaba, Ben Can. Bir mühendis ve dijital ürünler geliştiren biriyim.
Bu yüzden zamanımın büyük çoğunluğu web üzerinde geçiyor. İlginç uygulamalar ve siteler biliyor, sürekli olarak da yenilerini keşfediyorum. Bunları da burada paylaşmaya çalışıyorum.
`

export default function Blog({ posts }) {
    //console.log("Blog posts: ", posts)
    const sortedPosts = posts.sort((a, b) => {
        const ad = new Date(a.frontMatter.date)
        const bd = new Date(b.frontMatter.date)
        return bd - ad
    })
    const canonical = "https://www.cbsofyalioglu.com/tr/"
    const title = "Design &amp; Development | Can Burak Sofyalıoğlu"
    const description = "Kişisel blog. Çoğunlukla web üzerine yazılar ve dijital araçlar."
    return (
        <div className="min-h-screen">
            <Head>
                <Head>
                    <title key="h-title-tag">Design &amp; Development | Can Burak Sofyalıoğlu</title>
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
            </Head>
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    {/* Text */}
                    <div className="mt-20 mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">Blog</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{descriptionLong}</p>
                    </div>

                    {/* Article */}
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                        {sortedPosts.map(post => (
                            <ListItemCard
                                title={post.frontMatter.title}
                                cover={post.frontMatter.cover}
                                keywords={post.frontMatter.keywords}
                                slug={post.frontMatter.slug}
                                topic={post.frontMatter.topic}
                                key={"tr-" + post.frontMatter.slug}
                            />


                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        if (frontMatter.language && frontMatter.language.toLowerCase() === "tr") {
            //console.log("Turkish")
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

