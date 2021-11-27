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
import { whitelist, domains } from '../site.config'

const ResponsiveImage = props => (
    <Image alt={props.alt} layout="responsive" {...props} />
)

function Anchor(props){
  const followablesites = [
    ...whitelist,
  ]
  let attr = {}
  // Check if it is an internal link
  let sameDomain;

  try {
    const urlObject = new URL(props.href)
    if (domains.includes(urlObject.host)){
      sameDomain = true
    }
    else if (!props.href.startsWith("http")){
      sameDomain = true
    }
  } catch (e){
    console.log("Error when creating a URL object: ", props.href, e.message)
  }

  // Internal Links
  if (sameDomain){
      attr.className = "internal"
  }

  // External Links
  if (!sameDomain){
    // Open in new tab
    attr.target = "_blank"
    attr.className = "external"
    // check if the website is whitelisted
    const doFollow = followablesites.includes((new URL(props.href)).host)
    if (doFollow){
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
        code: props => {
            //console.log("code props", props)
            return <Prism colorScheme="dark" language={props.className?.split("-")[1] || ""}>{props.children}</Prism>
        },
        pre: (props) => {

            //console.log("peops", props)
            return <pre className="mdx-pre">{props.children}</pre>
        },
      a: (props) =>  <Anchor {...props} />,

      CardEnlarge: props => <CardEnlarge {...props} />

    }

    return (
        <MDXRemote {...source} components={comp} />
    )
}
