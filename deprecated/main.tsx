import * as React from "react";
import { useRef, useMemo } from "react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
    open: {
        width: "100%",
        height: "100%",
        right: 0,
        top: 0,
        transition: { delay: 0.5 }
    },
    closed: {
        width: 150,
        height: 150,
        transition: { delay: 0.5 }
    }
};


export default function MainLayout({ children }) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const variantState = useMemo(() => isOpen ? "open" : "closed", [isOpen])
    return (
        <motion.div className="w-screen grid grid-cols-12 relative gap-0" id="main-layout">

            <motion.div className="sidebar col-start-0 col-end-0 md:col-start-1 md:col-end-4 p-4 flex flex-col items-center border-r-2 border-gray-700 relative">
                <motion.div className="sidebar-inner  rounded-xl  min-h-screen w-full sticky">

                </motion.div>

            </motion.div>

            <motion.main className="content col-start-1 col-end-7 md:col-start-4 md:col-end-13">
                {children}

            </motion.main>
        </motion.div>
    );
}
