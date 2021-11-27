// @ts-nocheck
import { useState, useEffect, useLayoutEffect } from 'react'
import { motion, whileHover, useMotionValue, onHoverStart, onHoverEnd } from 'framer-motion'

export function ToggleMotion() {
    const localTheme =
        typeof window === 'object' && (localStorage.getItem('theme') || document.documentElement.getAttribute('class') === "dark")
            ? true
            : typeof window === 'object' && document.documentElement.classList.value === 'dark'
                ? true
                : false

    const [isOn, setIsOn] = useState(false)

    const inactivecolor = "rgba(240,240,240,1)"
    const activecolor = "rgba(253,64,96,1)"
    const color = useMotionValue(inactivecolor)

    const toggleSwitch = () => setIsOn(!isOn)
    useEffect(() => {
        if (isOn) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            if (document.documentElement.getAttribute("class") === "null") {
                localStorage.theme = 'dark'
                document.documentElement.classList.remove('null')
                document.documentElement.classList.add('dark')
            }
            else {

                localStorage.removeItem('theme')
                document.documentElement.classList.remove('dark')
            }
        }
    }, [isOn])

    useEffect(() => {
        if (document.documentElement.getAttribute('class') === "dark") {
            setIsOn(true)
        }
    }, [])
    return (
        <motion.div
            style={{
                border: "2px solid rgba(0,0,0,1)"
            }}
            whileHover={{ borderColor: activecolor }}
            transition={spring}
            className="switch relative overflow-hidden w-16 h-7 flex justify-start items-center !rounded-full cursor-pointer dark:bg-indigo-800 bg-gray-900 box-content"
            data-ison={isOn}
            onClick={toggleSwitch}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 moon-icon absolute top-0 left-1 text-xl pl-1 text-yellow-300 "
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 fill-current text-yellow-300 sun-icon absolute top-0 right-1 text-xl pr-1 filter drop-shadow-lg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                />
            </svg>

            <motion.div
                className="w-6 h-6 rounded-full dark:bg-gray-50 bg-white z-10 shadow-xl"
                layout
                transition={spring}
                style={{ background: color }}
            />
        </motion.div>
    )
}

const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 50,
}
