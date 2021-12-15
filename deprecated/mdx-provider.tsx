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
import { CardEnlarge } from '../components/card'
import { whitelist, site } from '../settings'
import {Video} from "../components/video"
import { Sandpacker } from '../components/mdx/sandpack'

const ResponsiveImage = props => (
    <Image alt={props.alt} layout="responsive" {...props} />
)
function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
function Anchor(props) {
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
function Hr() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="299"
            fill="none"
            viewBox="0 0 650 299"
        >
            <path
                stroke="url(#paint0_linear_487_362)"
                strokeWidth="4"
                d="M245.262 298.275c0-27.419 22.227-49.646 49.646-49.646h302.837c27.418 0 49.645-22.227 49.645-49.645 0-27.418-22.227-49.645-49.645-49.645h-546.1C24.227 149.339 2 127.112 2 99.693c0-27.418 22.227-49.645 49.645-49.645h297.873c27.418 0 49.645-22.227 49.645-49.646"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_487_362"
                    x1="160.387"
                    x2="573.568"
                    y1="-107.072"
                    y2="767.941"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0046"></stop>
                    <stop offset="1" stopColor="#BD00FF"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}

export function MdxProvider({ source, components, className, ...props }) {
    const comp = {
        h1: props => <span className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">{props.children}</span>,
        //h2: props => <h2 id={string_to_slug(props.children)}>{props.children}</h2>,
        code: props => {
            //console.log("code props", props)
            return <Prism colorScheme="dark" language={props.className?.split("-")[1] || ""}>{props.children}</Prism>
        },
        pre: (props) => {

            //console.log("peops", props)
            return <pre className="mdx-pre">{props.children}</pre>
        },
        Video: (props) => <Video {...props} />,
        Sandpack: props => <Sandpacker />,
        a: (props) => <Anchor {...props} />,
        img: (props) => <img {...props} loading="lazy" />,
        Hr: () => <Hr/>,

        CardEnlarge: props => <CardEnlarge {...props} />

    }

    return (
        <MDXRemote {...source} components={comp} />
    )
}
