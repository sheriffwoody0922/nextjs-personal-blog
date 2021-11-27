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

const ResponsiveImage = props => (
    <Image alt={props.alt} layout="responsive" {...props} />
)

export default function MdxProvider({ source, components, className, ...props }) {
    const comp = {
        code: props => {
            //console.log("code props", props)
            return <Prism colorScheme="dark" language={props.className.split("-")[1]}>{props.children}</Prism>
        },
        pre: (props) => {

            //console.log("peops", props)
            return <pre className="mdx-pre">{props.children}</pre>
        },
        image: props => console.log("\n\nprops", prop)

    }

    return (
        <MDXRemote {...source} components={comp} />
    )
}
