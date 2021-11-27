// @ts-nocheck
import React from 'react'
import { useState, useEffect, useRef, useMemo, forwardRef } from 'react'
import { useViewportScroll, motion, useMotionValue, useVelocity, useSpring, useTransform} from 'framer-motion'
import { usePointerTracker, useDebounce } from "../lib/hooks"





export const MouseTrackBox = forwardRef(({ children }, ref) => {

    // This is observing if pointer is hovering
    const [isHovering, setIsHovering] = useState(false)
    const activateHovering = () => setIsHovering(true)
    const deactivateHovering = () => setIsHovering(false)

    // Pointer Box
    const displacementSpring = { stiffness: 50, damping: 10 }
    const x = useSpring(10, displacementSpring)
    const y = useSpring(10, displacementSpring)
    const xVelocity = useVelocity(x)
    const xAcceleration = useVelocity(xVelocity)
    const constantsize = 40
    const sizes = useSpring(constantsize, displacementSpring)




    //const height = useTransform(rawheight, val => scaler(val))
    const opacity = useMemo(() => isHovering ? 1 : 0.4, [isHovering])


    const style = {
        opacity,
        left: x, top: y,
        height: sizes,
        width: sizes,
        border: "2px solid rgba(255,255,255,0.3)",
        borderRadius: "50%",
    }

    //console.log("status: ", isHovering)

    function pointerBoxUpdater(event) {
        //console.log(xVelocity.get())
        //const halfscreen = Math.floor(document.width / 2)
        //const abs = Math.abs(event.pageX - halfscreen)
        if (isHovering) {
            x.set(event.pageX - constantsize*0.5 )
            y.set(event.pageY - constantsize*0.5 )

            //sizes.set(scaleFactor)
        }


    }
    return (
        <motion.div
            className="relative top-0 right-0 bottom-0 left-0 w-full h-auto z-10"
            id="mouse-track-box"
            //whileHover={pointerBoxUpdater}
            onPointerEnter={activateHovering}
            onPointerLeave={deactivateHovering}
            onPointerMove={pointerBoxUpdater}
            transition={displacementSpring}
        >
            {children}
            <motion.div layout="position"
                ref={ref}
                //transition={{ type: "spring", stiffness: 10, bounce: 0.25 }}
                //transition={{ ease: [0.17, 0.67, 0.83, 0.67]  }}
                style={style}
                id="pointerbox"
                className="absolute opacity-30 z-0 flex flex-col justify-center items-center overflow-hidden rounded-full border-2 border-purple-500 border-solid"
            >

            </motion.div>


        </motion.div>

    )
})

const myspring = {
    type: 'spring',
    stiffness: 500,
    damping: 50,
}


export function HeroSvg() {
    const { scrollYProgress } = useViewportScroll()

    const x = useMotionValue(0)
    const xVelocity = useVelocity(x)
    const xAcceleration = useVelocity(xVelocity)

    useEffect(() => {
        console.log("scrollYProgress: ", scrollYProgress)
    }, [scrollYProgress])
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1000"
                height="500"
                fill="none"
                viewBox="0 0 1000 500"
            >
                <g clipPath="url(#clip0_29:221)">
                    <motion.path
                        style={{ scaleX: scrollYProgress }}
                        stroke="#6506F9"
                        strokeWidth="4"
                        d="M610 161a91 91 0 10181.999.002A91 91 0 00610 161v0z"
                    ></motion.path>
                    <path
                        fill="#0DBBBD"
                        d="M766 275.5a35.497 35.497 0 0035.5 35.5 35.497 35.497 0 0035.5-35.5 35.499 35.499 0 00-68.298-13.585A35.499 35.499 0 00766 275.5z"
                    ></path>
                    <path
                        fill="#FE4060"
                        d="M524 289.79a49.793 49.793 0 0030.736 46 49.793 49.793 0 0065.054-26.946 49.793 49.793 0 00-26.946-65.054 49.793 49.793 0 00-65.054 26.946A49.793 49.793 0 00524 289.79z"
                    ></path>
                    <path
                        stroke="url(#paint0_linear_29:221)"
                        strokeWidth="2"
                        d="M-85.336 383.114c95.996-52.6 287.996-260.4 480-263 191.996-2.6 287.996 235.6 480 250 191.996 14.4 287.996-166.4 479.996-178 192-11.6 458.34 107.8 480 120 21.67 12.2-297.34-47.2-371.67-59"
                    ></path>
                    <path
                        stroke="url(#paint1_linear_29:221)"
                        strokeWidth="2"
                        d="M-622 265.114c95.999 12 287.999 89.4 480 60 192-29.4 287.999-205 480-207 191.999-2 287.999 197.2 480 197 192-.2 351-203.6 480-198 129 5.6 131.99 180.8 164.99 226"
                    ></path>
                    <path
                        stroke="#EB0078"
                        strokeWidth="4"
                        d="M674.832 357.36c38.69-31.072 95.311-25.647 127.362 12.554 32.05 38.201 27.554 94.904-9.767 127.606L674.832 357.36z"
                    ></path>
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_29:221"
                        x1="634.5"
                        x2="-306.5"
                        y1="305"
                        y2="326.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0064B4"></stop>
                        <stop offset="0.729" stopColor="#0064B4" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_29:221"
                        x1="324.5"
                        x2="-263"
                        y1="68"
                        y2="261.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0064B4"></stop>
                        <stop offset="0.479" stopColor="#0064B4" stopOpacity="0"></stop>
                    </linearGradient>
                    <clipPath id="clip0_29:221">
                        <path fill="#fff" d="M0 0H1000V500H0z"></path>
                    </clipPath>
                </defs>
            </svg>
        </div>

    )
}
/*

export function MouseTrackBox({ x, y, isActive, children }) {

    const pointerBoxRef = useRef(null)
    //console.log("x,y,active: ", x, y, isActive)
    const mx = useMotionValue(x)
    const my = useMotionValue(y)
    const xVelocity = useVelocity(mx)
    const xAcceleration = useVelocity(xVelocity)

    const style = useMemo(() => ({
        left: mx, top: my,
        height: 24, width: 24,
        opacity: isActive ? 1 : 0,
        border: "2px solid rgba(255,255,255,1)"
    }), [x,y,isActive])

    console.log("status: ", isActive)

    useEffect(() => {

        console.log(mx, xVelocity, xAcceleration)
    }, [x, xVelocity, xAcceleration])
    return (
        <motion.div
            ref={pointerBoxRef}
            initial={{ x: 0, y: 0, height: 24, width: 24}}
            animate={{ x: x, y: y, height: 24, width: 24}}
            style={style}
            transition={spring}
            id="pointerbox"
            className="absolute   rounded-full border-2 border-purple-500 border-solid"
        />

    )
}
export function MouseTrackBox({ children }) {
    const boxRef = useRef(null)
    const pointerBoxRef = useRef(null)

    const [pointerCoordinates, setPointerCoordinates] = useState({ x: 0, y: 0 })
    const pointerBoxStyle = useMemo(() => ({left:pointerCoordinates.x, top:pointerCoordinates.y}), [pointerCoordinates.x, pointerCoordinates.y])

    console.log("pointerCoordinates: ", pointerCoordinates)

    function updater(event) {
        setPointerCoordinates(() => ({ x: event.pageX, y: event.pageY }))
    }
    const attachPointerTracker = () => {
        pointerBoxRef.current.style.visibility = "visible"
        boxRef.current.addEventListener("mousemove", updater);
    }
    const removePointerTracker = () => {
        pointerBoxRef.current.style.visibility = "hidden"
        boxRef.current.removeEventListener("mousemove", updater);
    }
    // Mouse Track Listeners
    useEffect(() => {
        attachPointerTracker()
        return () =>  removePointerTracker()

    })
    function setPointerBoxCoordinates() {
        if (pointerBoxRef.current) {
            pointerBoxRef.current.style.left = pointerCoordinates.x
            pointerBoxRef.current.style.top = pointerCoordinates.y
        }
    }
    // Set Coordinates of Pointer Box
    useEffect(() => {
        setPointerBoxCoordinates()
    }, [pointerCoordinates.x, pointerCoordinates.y])

    return (
        <div id="mousetrackbox" className="absolute top-0 right-0 w-full py-12 opacity-100 flex justify-end"
            ref={boxRef}
            onMouseMove={updater}
            //onMouseEnter={attachPointerTracker}
            //onMouseLeave={removePointerTracker}
        >
                <div
                    id="pointerbox"
                    className="absolute w-6 h-6 rounded-full border-2 border-purple-500 border-solid invisible"
                    ref={pointerBoxRef}
                    style={pointerBoxStyle}
                />
            <div className="relative top-0 left-0 right-0 bottom-0 z-0"
                onMouseMove={updater}
            >

                {children}
            </div>
        </div>
    )
}
*/
