import React, { useEffect, useState, useMemo } from "react"
import { useCallback } from "react"
import { RingProgress, Center } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export default function ScrollTopButton() {
    const [show, setShow] = useState(false)
    const [progress, setProgress] = useState(0)

    function observer() {
        const mustShow = window.scrollY > (1.5 * window.innerHeight)
        if (mustShow && show === false) { setShow(true) }
        if (!mustShow && show === true) { setShow(false) }
        const currProgress: number = calculateScrollProgress()
        setProgress(currProgress)
        //console.log("currProgress", currProgress)
    }
    function calculateScrollProgress(): number {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        return scrolled
    }
    const clickHandler = useCallback(() => window.scrollTo(0, 0), [])



    useEffect(() => {
        window.addEventListener("scroll", observer)
        return () => window.removeEventListener("scroll", observer)
    })
    //console.log("progress", progress)
    //console.log("progress", progress)
    if (show) return (
        <div className="group rounded-full fixed right-8 bottom-8 cursor-pointer z-50" onClick={clickHandler}>
            <div className="relative w-16 h-16">


                <RingProgress
                    className="opacity-70 group-hover:opacity-40 ease-out duration-300"
                    onClick={clickHandler}
                    size={60}
                    sections={[{ value: progress, color: 'teal' }]}
                />
                <Center className="absolute right-6 top-5">
                    {progress < 96
                        ? <svg xmlns="http://www.w3.org/2000/svg" className="duration-300 ease-out h-5 w-5 text-gray-200 dark:text-gray-200 opacity-40 group-hover:opacity-100 group-hover:z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#0b9488">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    }
                </Center>
            </div>
        </div>
    )
    return (<div></div>)
}

export function ScrollTopSimpleButton() {
    const clickHandler = useCallback(() => window.scrollTo(0, 0), [])
    return (
        <div className="group rounded-full fixed right-8 bottom-8 cursor-pointer z-50 " onClick={clickHandler}>
            <div className="relative w-20 h-20 flex flex-col justify-end items-end">

                <svg xmlns="http://www.w3.org/2000/svg" className=" border border-gray-200  p-4 duration-300 ease-out h-16 w-16 rounded-full text-gray-200 dark:text-gray-200 opacity-40 group-hover:opacity-100 group-hover:z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>

            </div>
        </div>)

}
