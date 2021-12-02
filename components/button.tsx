import React, { useEffect, useState } from "react"
import { useCallback } from "react"

export function ScrollTopButton() {
    const [show, setShow] = useState(false)

    function observer() {
        const mustShow = window.scrollY > (1.5 * window.innerHeight)
        if (mustShow && show === false) { setShow(true) }
        if (!mustShow && show === true) { setShow(false) }
    }
    const clickHandler = useCallback(() => window.scrollTo(0, 0), [])

    useEffect(() => {
        window.addEventListener("scroll", observer)
        return () => window.removeEventListener("scroll", observer)
    })
    if (show) return (
        <div className="border-2 rounded-full fixed right-8 bottom-8 p-2 cursor-pointer" onClick={clickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 dark:text-gray-200 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
        </div>
    )
    return (<div></div>)
}
