// @ts-nocheck
import Image from 'next/image'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function CategoryPage({ posts, topic, slug }) {
    //console.log("Category posts: ", posts)
    return (
        <div className="min-h-screen">
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            {/* Text */}
            <div className="mt-20 mb-10 md:mb-16">
                <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">{topic.toUpperCase()}</h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Those are {topic} related blog posts.</p>
            </div>
            {/* Article */}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                {posts.map(post => (
                    <li
                        key={post.slug}
                        title={post.frontMatter.title}
                        href={`/${post.topic}/${post.slug}`}
                        className="group h-48 md:h-64 xl:h-64 flex flex-col  rounded-lg shadow-lg overflow-hidden relative"
                    >
                        <Image
                            layout="fill"
                            loading="lazy"
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

        </div>
    )
}

export const getStaticProps = async ({ params: { topic } }) => {
    //console.log("[topic]/[slug] getStaticProps :", topic)
    const files = fs.readdirSync(path.join('posts'))
    const posts = []
    files.forEach(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("ffrontmatter of getstaticprops", frontMatter)
        if (frontMatter.topic === topic || frontMatter.categories?.includes(topic)) {
            posts.push({
                frontMatter,

                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],
                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic,
            })
        }
    })
    return {
        props: {
            topic: encodeURI(topic.toLowerCase().replace(" ", "-")),
            posts
        }
    }
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    //console.log("files: ", files)
    //console.log("[topic]/[slug].tsx - filenames: ", files)

    const allpaths = files.map(filename => {
        // frontmatter data
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("categories frontmatters: ", filename, frontMatter)
        return {
            params: {
                topic: frontMatter.topic || "post",
            }
        }
    })
    const distinctTopics = [...new Set(allpaths.map(p => p.params.topic))]
    const paths = distinctTopics.map(topic => {
        const currentCategoryPosts = allpaths.filter(path => path.params.topic === topic)
        return {
            params: {
                topic,
            }
        }
    })
    //console.info("Distinct Topics:", distinctTopics)
    //console.log("Current Categories: ", paths)
    return {
        paths,
        fallback: false
    }
}
export default CategoryPage
