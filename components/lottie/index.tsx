//@ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from 'react';
import lottie from "lottie-web"

import menuicon from "../../public/lottie/menuV2.json"

function Lottie({ data, name, speed = 3, isOpen = false, onClick, className, options }) {
    const [animation, setAnimation] = useState(null)
    const myref = useRef(null)




    console.log("animation", animation)

    // Load animation
    useEffect(() => {
        if (myref && myref.current) {
            if (animation === null) {
                const anim = lottie.loadAnimation({
                    container: myref.current, // the dom element that will contain the animation
                    renderer: 'svg',
                    name: name,
                    loop: false,
                    autoplay: false,
                    animationData: data, // the path to the animation json
                    ...options
                })
                anim.setSpeed(speed)
                setAnimation(anim)
            }
        }
    }, [myref])

    useEffect(() => {
        if (animation) {
            const segment = isOpen ? [0, data.op] : [data.op, 0]
            animation.playSegments(segment, true)
            console.log("played")
        }
    }, [isOpen])


    return (
        <div
            onClick={onClick}
            id="lottie-icon"
            className={`lottie-icon md:hidden z-50 relative ${className}`}
            ref={myref}
        />
    )
}

export const MenuIcon = (props) => {

    return (
        <Lottie data={menuicon} {...props} name="menu" />

    )
}

