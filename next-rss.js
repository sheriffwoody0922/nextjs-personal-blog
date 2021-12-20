const site = require('./settings/site.js');

module.exports = {
  siteTitle: site.title,
  siteDescription: site.description,
  siteLanguage: 'en',
  siteCopyright: `©${site.author.name}`,
  siteUrl: site.website,
  outDir: 'public',
  postsDir: '/posts',
}
