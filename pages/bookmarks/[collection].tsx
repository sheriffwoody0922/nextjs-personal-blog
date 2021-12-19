// @ts-nocheck
import fs from "fs"
import path from "path"
import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useScript } from "../../lib/hooks"
import { bookmarkCollections, site } from "../../settings"
import { CardEnlarge, CardCover } from "../../components"
import { MetaTags } from "../../components"
import { TealBlob } from "../../components/Svg"

export default function BookmarkCollectionPage({ collection, bookmarks }) {
    const title = `${site.name} | Bookmarks: ${collection.name}`
    const description = collection.description + " The list of digital tools that is curated by me."
    const canonical = `${site.website}/bookmarks/${collection.title}/`

    return (
        <>
            <Head>
                <title key="h-title-tag">{title}</title>
                <meta name="title" content={title} key="h-title" />
                <meta name="description" content={description} key="h-description" />
                <link rel="canonical" href={canonical} key="h-canonical" />
                <MetaTags
                    type="website"
                    title={title}
                    description={description}
                    canonical={canonical}
                    cover={site.cover}
                />
            </Head>
            <section className="relative pt-20 pb-60 flex flex-col items-center px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <hr/>
                <ul className="grid sm:grid-cols-2 mt-20 lg:grid-cols-2 xl:grid-cols-3  gap-4 md:gap-6 xl:gap-8 !z-10 relative">
                    {bookmarks.map(bkm => (

                        <CardCover
                            key={bkm.link}
                            nofollow={true}
                            title={bkm.title}
                            cover={bkm.cover || "/cbsofyalioglu-homepage.webp"}
                            excerpt={bkm.excerpt}
                            link={bkm.link}
                            tags={bkm.tags}
                        />
                    ))}
                    <TealBlob />
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
