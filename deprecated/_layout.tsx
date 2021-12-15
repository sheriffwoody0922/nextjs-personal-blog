// @ts-nocheck
import * as React from "react";
import { useRef, useMemo, useState, useCallback } from "react";
import { Toggle } from "../components/toggle";
import { motion, useCycle, AnimatePresence, useTransform } from "framer-motion";
import { useViewportSize } from '@mantine/hooks';
import { useWindowSize, useOnClickOutside } from "../lib/hooks"
import { WebmeisterGradientLogo } from "../components/logo"
import { MenuIcon } from "../components/lottie";

const drawerVariants = {
    open: {
        width: 300,
        x: 0,
        transition: { ease: "easeOut", duration: 0.3 }
    },
    closed: {
        width: 0,
        x: -300,
        transition: { ease: "easeIn", duration: 0.3 }
    }
};
const leftVariants = {
    open: {
        width: 300,
        x: 0,
        transition: { ease: "easeOut", duration: 0.3 }
    },
    closed: {
        width: 0,
        x: -300,
        transition: { ease: "easeIn", duration: 0.3 }
    }
};
const rightVariants = {
    open: {
        x: 0,

        transition: { ease: "easeOut", duration: 0.3 }
    },
    closed: {
        x: 0,
        transition: { ease: "easeIn", duration: 0.3 }
    }
};


export default function Layout({ children }) {
    const drawerRef = useRef(null)
    const { width, height } = useWindowSize()
    const isMobile = useMemo(() => width < 980, [width])
    const [isVisibleInMobile, setIsVisibleInMobile] = useState(false)

    // On click outside of drawer
    const ref = useOnClickOutside(drawerRef, () => setIsVisibleInMobile(false));

    const toggleMobileDrawer = useCallback(() => setIsVisibleInMobile(() => !isVisibleInMobile), [isVisibleInMobile])

    const drawerState = (isMobile && isVisibleInMobile) ? "open" : "closed"
    const sidebarState = !isMobile ? "open" : "closed"

    console.log("isMobile", isMobile)
    console.log("isDrawerVisible", isVisibleInMobile)
    return (
        <motion.div className="!w-full flex overflow-x-hidden" id="main-layout" layout>
            <AnimatePresence>

                {/* -------MOBILE DRAWER------- */}
                <motion.section
                    layout
                    key="drawer"
                    ref={drawerRef}
                    variants={drawerVariants}
                    animate={drawerState}
                    initial={false}
                    aria-label="side-navigation"
                    className="drawer nav !absolute z-50 h-screen top-0 bottom-0 w-75 flex-col items-center border-r-2 border-gray-700 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)]"
                >

                    <Sidebar />
                </motion.section>

                <motion.section
                    key="sidebar"
                    layout
                    variants={leftVariants}
                    animate={sidebarState}
                    initial={false}
                    aria-label="side-navigation"
                    className="sidebar nav hidden md:flex h-screen top-0 bottom-0 w-80 flex-col items-center border-r-2 border-gray-700"
                >
                    <Sidebar />
                </motion.section>



                {/* -------RIGHT COLUMN------- */}
                <motion.section
                    key="content"
                    layout
                    className="layout-right relative flex flex-col justify-start w-full"
                >
                    {/* MAIN TOP BAR */}
                    <motion.section className="relative top-0 left-0 right-0 max-h-12 flex justify-between items-center rounded-xl w-full p-8 z-20">
                        <div className="flex h-12 items-center">
                            <MenuIcon
                                direction={isVisibleInMobile ? -1 : 1}
                                onClick={toggleMobileDrawer}
                                isOpen={isVisibleInMobile}
                                size={40}
                                speed={2}
                            />
                            <a href="/" className="ml-4 relative top-1">
                                <WebmeisterGradientLogo
                                    loading="lazy"
                                    className="absolute left-4 top-4 cursor-pointer z-60"

                                />
                            </a>
                        </div>
                        <Toggle />
                    </motion.section>

                    <motion.div className="layout-right-content relative z-20">
                        {children}
                    </motion.div>

                </motion.section>
            </AnimatePresence>

        </motion.div>
    )
}

function Sidebar() {
    return (
        <motion.nav className="inner-sidebar relative blurlay top-0 bottom-0 left-0 right-0 min-h-screen" >

            {/* SIDE TOP BAR */}
            <motion.section className="relative top-0 left-0 right-0 bottom-0 max-h-12 flex justify-end items-center rounded-xl w-full p-8 z-20">
            </motion.section>
                <div className="absolute top-0 bottom-0 left-0 right-0 "></div>


        </motion.nav>
    )
}
