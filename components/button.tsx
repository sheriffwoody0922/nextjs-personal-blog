import React, { useEffect, useState, useMemo } from "react"
import { useCallback } from "react"
import { RingProgress, Center } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export function ScrollTopButton() {
    const [show, setShow] = useState(false)
    const [progress, setProgress] = useState(0)

    function observer() {
        const mustShow = window.scrollY > (1.5 * window.innerHeight)
        if (mustShow && show === false) { setShow(true) }
        if (!mustShow && show === true) { setShow(false) }
        const currProgress:number = calculateScrollProgress()
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
        <div className="rounded-full fixed right-8 bottom-8 cursor-pointer z-50" onClick={clickHandler}>
            <RingProgress
                onClick={clickHandler}
                size={60}
                sections={[{ value: progress, color: 'teal' }]}
                label={
                    <Center>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 dark:text-gray-200 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                    </Center>
                }
            />

        </div>
    )
    return (<div></div>)
}

