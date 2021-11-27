import * as React from "react";
import { useRef, useMemo } from "react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
    open: {
        width: "100%",
        height: "100%",
        right: 0,
        top: 0,
        transition: {delay: 0.5}
    },
    closed: {
        width: 150,
        height: 150,
        transition: {delay: 0.5}
    }
};
const togglevariants = {
    open: {
        left: 0,
        bottom: 0,
        transition: {ease: [0.17, 0.67, 0.83, 0.67], type: "tween"}

    },
    closed: {
        left: 0,
        bottom: 0,
        transition:{ ease: [0.17, 0.67, 0.83, 0.67], type: "tween" }

    }
}

const modalvariants = {
    open: {
        //left:0,right:0, top:0, bottom:0,
        width: "100%", height: "100vh",
        transition: { when: "afterChildren", }

    },
    closed: {
        //left: 0, right: 0, top: 0, bottom: 0,
        width: 0, height: 0,
        transition: { when: "afterChildren", }


    }
}
const sidebarNavVariants = {
    open: {
        display: "block",
        flexDirection: "column",
        transition: { staggerChildren: 0.07, delayChildren: 0.1, delay:0.05}
        //transition: { staggerChildren: 0.07, delayChildren: 0.2 }

    },
    closed: {
        display: "none",
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
        //transition:{ ease: [0.17, 0.67, 0.83, 0.67], type: "tween" }

    }
};
function Sidebar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const variantState = useMemo(() => isOpen ? "open": "closed",[isOpen])
    return (
        <motion.nav
            className="sidebar"
            //initial={false}
            animate={variantState}
            variants={sidebar}
            initial="closed"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                left: 0,
                bottom: 0
            }}
        >

            <motion.div className="sidebar-modal" variants={modalvariants} initial="closed"
                animate={variantState}
            >
                <SideNavigation variants={modalvariants} initial="closed" animate={variantState} />
            </motion.div>

            <MenuToggle toggle={() => toggleOpen()} variants={togglevariants} />
        </motion.nav>
    );
}

const MenuToggle = ({ toggle, variants }) => {
    const Path = props => (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            {...props}
        />
    );

    return (
        <motion.button
            onClick={toggle}
            className="sidebar-toggle"
            variants={variants}
        >
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </motion.button>
    )
};

export const SideNavigation = (props) => {

    const itemIds = [0, 1, 2, 3, 4];
    return (
        <motion.ul
            variants={sidebarNavVariants}
            className="sidebar-items"
            {...props}
        >
            {itemIds.map(i => (
                <MenuItem i={i} key={i} />
            ))}
        </motion.ul>
    )
};






export const MenuItem = ({ i }) => {
    const sidebarNavItemsVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }

        }
    };

    const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={sidebarNavItemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="closed"

        >
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} />
        </motion.li>
    );
};

export default Sidebar
