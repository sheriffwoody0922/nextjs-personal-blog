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
            {posts.map((post, index) => (
                <div key={index}>
                    <div className="card mb-3 " style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link href={`/blog/${post.topic}/${encodeURIComponent(post.slug)}`}>
                                            <a title={post.frontMatter.title}>
                                                {post.frontMatter.title}
                                            </a>
                                        </Link>

                                    </h5>
                                    <p className="card-text">{post.frontMatter.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{post.frontMatter.date}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 m-auto">
                                {post.frontMatter.thumbnailUrl &&
                                    <Link href={`/blog/${post.topic}/${encodeURIComponent(post.slug)}`}>
                                        <a>
                                            <Image
                                                src={post.frontMatter.thumbnailUrl}
                                                className="img-fluid mt-1 rounded-start"
                                                alt="thumbnail"
                                                width={500}
                                                height={400}
                                                objectFit="cover"
                                            />
                                        </a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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
