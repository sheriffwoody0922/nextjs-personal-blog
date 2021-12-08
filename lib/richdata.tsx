// @ts-nocheck
export function getPersonType(){
    return {
        "@type": "Person",
        "@id": site.author.id,
        "name": site.author.name,
        "url": site.author.url,
        "jobTitle": site.author.jobTitle,
        "email": site.author.email,
        "sameAs": site.author.sameAs,
        "birthDate": site.author.birthDate,
        "address": site.author.address,
        "alumniOf": site.author.alumniOf,
        "image": site.author.image,
        "logo": site.author.logo,
    }
}

export function getBlogPostingType(props){
    const personType = getPersonType(props.site)
    return {
        "@type": "BlogPosting",
        "headline": props.title,
        "datePublished": props.date,
        "dateModified": props.modified,
        "author": personType,
        "publisher": {
            "@id": props.site.website
        },
        "description": props.description,
        "name": props.title,
        "@id": props.canonical + "#richSnippet",
        "isPartOf": {
            "@id": props.canonical + "#webpage"
        },
        "image": {
            "@id": props.cover
        },
        "inLanguage": props.site.locale,
        "mainEntityOfPage": {
            "@id": props.canonical + "#main-entity"
        }
    }
}
export function getTechArticleType(props) {
    const blogPosting = getBlogPostingType(props)
    blogPosting["@type"] = "TechArticle"
    if (props.proficiencyLevel){
        // expected 'Beginner' or 'Expert'
        blogPosting["proficiencyLevel"] = props.proficiencyLevel
    } else {
        console.error("TechArticle type expects proficiency level of either Beginner or Expert")
    }

    if (props.dependencies){
        blogPosting["dependencies"] = props.dependencies
    }

    return
}
