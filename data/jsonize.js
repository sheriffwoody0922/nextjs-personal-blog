const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getPostsMetaData() {
  const allPostsFrontMatters = []
  // Read all frontMatter data and store them
  fs.readdirSync(path.join('posts')).forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    allPostsFrontMatters.push(frontMatter)
  })
  return allPostsFrontMatters
}

function dumpPostsMetaData(data){
    fs.writeFileSync(path.join("data/posts-metadata.json"), JSON.stringify(data))
}

const allData = getPostsMetaData()
dumpPostsMetaData(allData)
