import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


// BLOG PROPS
export function getStaticBlogPostsProps() {
    const files = fs.readdirSync(path.join('posts'))
    console.log("files: ", files)
    return files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        console.log("blog markdown data: ", frontMatter)
        return {
            frontMatter: JSON.stringify(frontMatter),
            slug: filename.split('.')[0]
        }
    })
}

// PATHS ([slug].js)
export function getStaticBlogPostsPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))
    console.info("paths", paths)
    return paths
}

// POST PROPS
export const getStaticPostProps = async (slug) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
        slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    console.log("\nSingular post props: ", slug, frontMatter, mdxSource)
    return {
        frontMatter,
        slug,
        mdxSource
    }

}
