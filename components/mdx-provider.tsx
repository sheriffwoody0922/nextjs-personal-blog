// @ts-nocheck
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Code } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { CardEnlarge } from './card'
import { whitelist, site } from '../settings'

const ResponsiveImage = props => (
    <Image alt={props.alt} layout="responsive" {...props} />
)

function Anchor(props) {
    const followablesites = [
        ...whitelist,
    ]
    let attr = {}
    // Check if it is an internal link
    let sameDomain, doFollow, urlObject;

    // Internal Links
    if (props.href.startsWith("#") || props.href.startsWith("/")) {
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

export default function MdxProvider({ source, components, className, ...props }) {
    const comp = {
        h1: props => <span className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">{props.children}</span>,
        code: props => {
            //console.log("code props", props)
            return <Prism colorScheme="dark" language={props.className?.split("-")[1] || ""}>{props.children}</Prism>
        },
        pre: (props) => {

            //console.log("peops", props)
            return <pre className="mdx-pre">{props.children}</pre>
        },
        a: (props) => <Anchor {...props} />,

        CardEnlarge: props => <CardEnlarge {...props} />

    }

    return (
        <MDXRemote {...source} components={comp} />
    )
}
