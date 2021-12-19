const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getPostsMetaData() {
  let allPostsFrontMatters = []
  // Read all frontMatter data and store them
  fs.readdirSync(path.join('posts')).forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    allPostsFrontMatters.push(frontMatter)
  })
  let dataKeys = ["title", "slug", "topic", "categories", "tags"]
  allPostsFrontMatters = allPostsFrontMatters.map(post => {
      let postNewFronMatter = {}
      dataKeys.forEach(k => postNewFronMatter[k] = post[k])
      return postNewFronMatter
  })
  return allPostsFrontMatters
}

function dumpPostsMetaData(data){
    fs.writeFileSync(path.join("data/posts-metadata.json"), JSON.stringify(data))
}

const allData = getPostsMetaData()
dumpPostsMetaData(allData)
