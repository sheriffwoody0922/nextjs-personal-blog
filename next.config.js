/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [
  //{
  //  key: 'X-DNS-Prefetch-Control',
  //  value: 'on',
  //},
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  }
  //{
  //  key: 'X-Content-Type-Options',
  //  value: 'nosniff',
  //},
]

const config = {
  //poweredByHeader: false,
  experimental: { esmExternals: true },
  //reactStrictMode: true,
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['fra1.digitaloceanspaces.com', "www.cbsofyalioglu.com"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    minimumCacheTTL: 86400,
  },
  env: {
    DOMAIN:
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://webmeister.org',
  },
  // Prefer loading of ES Modules over CommonJS
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */

            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/productivity/obsidian-app/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/content-creation-tools/',
        destination: '/productivity/content-creation-tools/',
        permanent: true,
      },
      {
        source: '/en/content-creation-tools/',
        destination: '/productivity/content-creation-tools/',
        permanent: true,
      },
      //{
      //    source: "/blog-acmak/notion-ile-ucretsiz-web-sayfasi-olusturmak/",
      //    destination: "/blog-acmak/notion-sablonlari-ve-ucretsiz-site-olusturmak/",
      //    permanent:true
      //}
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
module.exports = withMDX(config)
