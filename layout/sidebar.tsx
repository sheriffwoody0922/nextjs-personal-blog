// @ts-nocheck
import * as React from "react";
import { useRef, useMemo, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useViewportSize } from '@mantine/hooks';
import { Toggle } from "../components/toggle";
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

export default function Sidebar({ isOpen }) {
  const { height, width } = useViewportSize()
  const [isVisibleInMobile, setIsVisibleInMobile] = useState(isOpen)
  const isVisible = useMemo(() => (height < 753) ? false : isVisibleInMobile, [height, isVisibleInMobile])

  return (
    <motion.section
      ariaLabel="side-navigation"
      className="sidebar fixed h-screen top-0 left-0 bottom-0 w-80 p-4 flex-col items-center border-r-2 border-gray-700"
    >
      {/* INNER SIDEBAR */}
      <motion.nav className="inner-sidebar relative">
        {/* SIDE TOP BAR */}
        <motion.section className="relative top-0 left-0 right-0 max-h-12 flex justify-end items-center rounded-xl w-full p-8 z-20">
          <Toggle />
        </motion.section>


      </motion.nav>
    </motion.section>
  )
}
