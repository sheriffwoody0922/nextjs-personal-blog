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
import { CardEnlarge, Video } from '../index'
import { Hr, Anchor, string_to_slug } from "./index"

const CodeHighlighter = dynamic(() => import("./code"))
const ImageZoom = dynamic(() => import("./image"))

export default function MdxProvider({ source, components, className, ...props }) {
    const comp = {
        h1: props => <span className="dark:text-gray-300 text-gray-800 text-4xl lg:text-5xl font-bold text-center mt-20 mb-4 md:mb-6">{props.children}</span>,
        h2: props => <h2 id={string_to_slug(props.children)}>{props.children}</h2>,
        h3: props => <h3 id={string_to_slug(props.children)}>{props.children}</h3>,
        h4: props => <h4 id={string_to_slug(props.children)}>{props.children}</h4>,

        code: (props) => <CodeHighlighter {...props} />,
        pre: (props) => {

            //console.log("peops", props)
            return <pre className="mdx-pre">{props.children}</pre>
        },
        Video: (props) => <Video {...props} />,
        //Sandpack: props => <Sandpacker {...props} />,
        //LiveProvider: props => <LiveProvide {...props} />,

        a: (props) => <Anchor {...props} />,
        table: (props) => <div className="table-wrapper"><table className="fl-table" {...props} /></div>,
        img: (props) => <Image {...props} loading="lazy" layout="responsive" width="1400" height="700" />,
        ImageZoom: (props) => <ImageZoom {...props} />,

        Hr: () => <Hr />,

        CardEnlarge: props => <CardEnlarge {...props} />

    }

    return (
        <MDXRemote {...source} components={comp} />
    )
}
