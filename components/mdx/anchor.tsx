// @ts-nocheck
import { whitelist, site } from '../../settings'

export function Anchor(props) {
    const followablesites = [
        ...whitelist,
    ]
    let attr = {}
    // Check if it is an internal link
    let sameDomain, doFollow, urlObject;

    // Internal Links
    if (props.href.startsWith("#") || props.href.startsWith("/") || props.href.startsWith(site.website)) {
        attr.className = "internal"
        sameDomain = true
    }

    // External Links
    else {
        // Open in new tab
        attr.target = "_blank"
        attr.className = "external"
        attr.rel = "noopener"
        try {
            urlObject = new URL(props.href)
        } catch (e) {
            console.warn("Error when creating a URL object: ", props.href, e.message)
        }
        if (urlObject) {
            doFollow = followablesites.includes(urlObject.host)
            if (!doFollow) {
                attr.rel += " noopener"
            }

        }
    }

    try {
    } catch (e) {
        console.warn("Error when creating a URL object for checkink followable sites: ", props.href, e.message)
    }

    // External Links
    if (!sameDomain) {
        // Open in new tab
        attr.target = "_blank"
        attr.className = "external"
        // check if the website is whitelisted
        //const websiteHref = (props.href.split(".html")[0]).split("#")[0]
        const doFollow = followablesites.includes((new URL(props.href)).host)
        if (doFollow) {
            attr.rel = "noopener"
        }
        else {
            attr.rel = "noopener nofollow"
        }
    }

    return <a {...attr} {...props} />
}
