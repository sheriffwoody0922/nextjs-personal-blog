export * from "./white-list-domains"
export * from "./navigation"
export * from "./raindrop"

export const site = {
    name: "Design & Development", // Open graph
    title: "Design 🌓 Development | Can Burak Sofyalıoğlu",
    description: "An engineer interested in web stuff; backend, frontend, search, automation, no-code, etc.",
    locale: 'en-US',
    type: "website",
    website: 'https://www.cbsofyalioglu.com', // Don't put backslash at the end
    logo: "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/webmeister/webmeister-gradient-logo.webp",
    cover: "https://www.cbsofyalioglu.com/cbsofyalioglu-homepage.webp",
    creator: "Can Burak Sofyalıoğlu", // will be used in twitter metada and richdata
    // Anchor tags will know that any link to those pages are internal links
    domains: ['www.cbsofyalioglu.com', 'cbsofyalioglu.com'],
    author:{
        name: "Can Burak Sofyalıoğlu",
        id: "https://www.cbsofyalioglu.com/me",  //id and page should be same
        page: "https://www.cbsofyalioglu.com/me", //id and page should be same
        url: ["https://webmeister.org", "https://www.cbsofyalioglu.com/"],
        jobTitle: "Expert Web Developer",
        alumniOf: {
            "@type": "CollegeOrUniversity",
            "name": "Boğaziçi University",
            "sameAs": "https://en.wikipedia.org/wiki/Bo%C4%9Fazi%C3%A7i_University"
        },
        logo: {
            "@id": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/webmeister/webmeister-gradient-logo.webp"
        },
        image: {
            "@type": "ImageObject",
            "@id": "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/cbsofyalioglu-black.png",
            "inLanguage": "tr",
            "url": "https://cdn.statically.io/img/www.cbsofyalioglu.com/f=auto%2Cq=75/wp-content/uploads/2021/03/T5BKxHAu-cbsofyalioglu-black.png",
            "contentUrl": "https://cdn.statically.io/img/www.cbsofyalioglu.com/f=auto%2Cq=75/wp-content/uploads/2021/03/T5BKxHAu-cbsofyalioglu-black.png",
            "width": 203,
            "height": 43,
            "caption": "Can Burak Sofyalıoğlu"
        },
        sameAs: [
            "https://www.cbsofyalioglu.com",
            "https://webmeister.org",
            "https://www.facebook.com/john.baudrillard",
            "https://www.linkedin.com/in/cbsofyalioglu/",
            "https://www.pinterest.com/cbsofyalioglu/",
            "https://twitter.com/@webmeisterorg",
            "https://www.youtube.com/channel/UCww7ea5HVpGOBhm5x-ZvkLQ"
        ]
    },
    socialMediaLinks: {
        facebook: 'https://www.facebook.com/john.baudrillard/',
        twitter: 'https://twitter.com/webmeisterorg',
        github: 'https://github.com/canburaks/',
        linkedin: 'https://www.linkedin.com/in/cbsofyalioglu/', // will be used in opengraph->article author
        dribble: 'https://dribbble.com/canburaks',
        figma: 'https://www.figma.com/@webmeister',
    },
    credits: 'Crafted by Can Burak Sofyalıoğlu with ❤️ '
}
