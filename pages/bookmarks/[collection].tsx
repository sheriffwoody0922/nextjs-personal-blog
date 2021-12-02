// @ts-nocheck
import fs from "fs"
import path from "path"
import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useScript } from "../../lib/hooks"
import { bookmarkCollections } from "../../settings"
import { Tooltip } from '@mantine/core';
import { CardEnlarge, CardCover } from "../../components"

export default function BookmarkCollectionPage({ collection, bookmarks }) {
    //console.log("page collection: ", collection, bookmarks)

    return (
        <>
            <section className="relative pt-12 pb-60 flex flex-col items-center px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-base font-bold text-indigo-600 tracking-wide uppercase">BOOKMARKS</p>
                        <h1 className="mt-1 text-4xl font-semibod text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            {collection.name}
                        </h1>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            {collection.description}
                        </p>
                    </div>
                </div>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {bookmarks.map(bkm => (

                        <CardCover
                            key={bkm.link}
                            nofollow={true}
                            title={bkm.title}
                            cover={bkm.cover}
                            excerpt={bkm.excerpt}
                            link={bkm.link}
                            tags={bkm.tags}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}


export const getStaticProps = async ({ params: { collection } }) => {
    //console.log("current page: ", collection)
    // Initial Fetch
    let allCollections, bookmarks;


    // Bookmarks data exists
    const currentCollection = bookmarkCollections.filter(
        coll => {
            return (coll.title === collection)
        }
    )[0]
    //console.log("current collection: ", currentCollection)

    if (currentCollection && currentCollection._id) {
        let { data, error } = await fetchCollectionBookmarks(currentCollection._id)
        //console.log("raindrops: ", data)
        bookmarks = data
    }

    // Fetch items

    //console.log("bookmarks", bookmarks)
    return {
        props: {
            collection: currentCollection,
            bookmarks
        }
    }
}
export const getStaticPaths = async () => {
    return {
        paths: bookmarkCollections.map(
            bookmark => ({ params: { collection: bookmark.title } }))
        ,
        fallback: false
    }
}




function _CardEnlarge(bkm: object) {
    return <li key={bkm.link} className="glass-card flex flex-col md:flex-row items-stretch border rounded-lg overflow-hidden !min-h-[220px]">
        <a
            rel="nofollow noopener"
            target="_blank"
            href={bkm.link}
            title={bkm.title}
            className="group  w-full md:w-48 xl:w-40 sm:h-48 !min-h-52 md:h-full block self-start flex-shrink-0 bg-gray-100 overflow-hidden relative"
        >
            <img
                src={bkm.cover}
                data-tip={bkm.excerpt}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 ease-out transition duration-500" />

        </a>



        <div className="flex flex-col px-4 pt-4 pb-2 xl:pt-4 xl:pb-2 xl:px-4 justify-between relative !h-full" data-tip={bkm.excerpt}>
            <div className="flex flex-col p-0 m-0">

                <h2 className="text-gray-800 text-3xl font-bold">
                    <a target="_blank"
                        href={bkm.link}
                        rel="nofollow noopener"
                        className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    >
                        {bkm.title}
                    </a>
                </h2>
                <Tooltip

                    label={bkm.excerpt}
                    color="violet"
                    wrapLines
                    width={240}
                    withArrow
                >
                    <p className="text-gray-500 text-md mt-2 mb-2 leading-6 overflow-ellipsis overflow-hidden">{bkm.excerpt}</p>
                </Tooltip>
            </div>

            <div className="flex ">
                {bkm.tags.map(tag => (
                    <span key={tag} className="text-indigo-500 font-semibold text-sm mr-1 border-2 border-gray-200 rounded-md px-2">
                        {tag}
                    </span>
                ))}
            </div>

        </div>

    </li>
}

async function fetchRaindropCollections() {
    let allCollections, fetchError
    try {

        const myInit = {
            method: 'GET',
            headers: {
                'Accept': 'text/json',
                'Authorization': `Bearer ${process.env.RAINDROP_CLIENT_SECRET}`
            },
            mode: 'cors',
            cache: 'default'
        }
        const res = await fetch('https://api.raindrop.io/rest/v1/collections', myInit)
        const data = await res.json()
        if (data && data.result) {
            allCollections = data.items
        }
    } catch (e) {
        fetchError = e.message
        throw new Error(`Initial fetch is failed. Check your Raindrop Token or your connection\n${e.message}`)
    }
    finally { return { data: allCollections, error: fetchError } }
}

async function fetchCollectionBookmarks(collectionId: number) {
    let allBookmarks, fetchError
    try {
        const myInit = {
            method: 'GET',
            headers: {
                'Accept': 'text/json',
                'Authorization': `Bearer ${process.env.RAINDROP_CLIENT_SECRET}`
            },
            mode: 'cors',
            cache: 'default'
        }
        const res = await fetch(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}`, myInit)
        //console.log("res", res)
        const data = await res.json()
        if (data && data.result) {
            //console.log("data", data.result)
            allBookmarks = data.items
        }
    } catch (e) {
        fetchError = e.message
        throw new Error(`Initial fetch is failed. Check your Raindrop Token or your connection\n${e.message}`)
    }
    finally { return { data: allBookmarks, error: fetchError } }
}
