//@ts-no-check
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

/* eslint-disable-next-line */
export interface SimpleNavbarProps {
    logo?: string;
    title?: string;
    links?: SimpleLinkType[]
}
export type SimpleLinkType = {
    href: string;
    label: string;
};
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Toggle = () => {
    const localTheme =
        typeof window === "object" && localStorage.getItem("theme")
            ? true
            : typeof window === "object" &&
                document.documentElement.classList.value === "dark"
                ? true
                : false;

    const [enabled, setEnabled] = useState(localTheme);

    function setThemeModeToHtml(mode) {
        if (mode === "dark") {
            localStorage.theme = "dark";
            document.documentElement.setAttribute("class", "dark");
        } else if (mode === "light") {
            localStorage.theme = "light";
            document.documentElement.setAttribute("class", "light");
        } else if (!mode) {
            localStorage.removeItem("theme");
            document.documentElement.setAttribute("class", "");
        }
    }
    const toggle = useCallback(() => setEnabled(() => !enabled), [enabled]);

    useEffect(() => {
        if (enabled) {
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
    }, [enabled])

    useEffect(() => {
        if (document.documentElement.getAttribute('class') === "dark") {
            setEnabled(true)
        }
    }, [])
    const bc = useMemo(() => enabled ? "bg-indigo-700" : "bg-gray-700", [enabled]) + " relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-300 ease-out"
    const sc = useMemo(() => enabled ? "translate-x-6" : "translate-x-1", [enabled]) + " w-4 h-4 transform bg-white rounded-full transition-all duration-300 ease-out"

    return (
        <button
            type="button"
            className="dark:bg-indigo-700 bg-gray-700 relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-300 ease-out"
            //className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            role="switch"
            onClick={toggle}
            aria-checked="false"
        >
            <span className="sr-only">Use setting</span>
            <span
                className="dark:translate-x-6 translate-x-1 w-4 h-4 transform bg-white rounded-full transition-all duration-300 ease-out"
                aria-hidden="true"
            //className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            />
        </button>
    );
};

export default function SimpleNavbar({ logo, title, ...props }) {
    return (
        <nav className="relative w-full overflow-hidden z-20 bg-white dark:bg-transparent h-22 border-b-2 border-solid border-gray-1200">
            <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
                <a
                    aria-label="Go to homepage"
                    href="/"
                    className="relative z-10 flex items-center w-auto text-xl font-light leading-none dark:text-white select-none"
                >
                    {/*<img
                        src="/logo/webmeister-digital-logo-beyaz.png"
                        className="w-12 h-auto mr-4"
                        alt="Webmeister logo"
                        loading="lazy"
                    />*/}
                    <img
                        className="w-8 h-8"
                        alt="logo"
                        src={
                            logo ||
                            "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/logos/gradient-logo.webp"
                        }
                    />{" "}
                </a>

                <div className="items-center justify-center hidden space-x-8 font-light dark:text-gray-200 md:flex">

                    {(props.links).map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative inline-block text-base  transition-all ease-out duration-300 opacity-80 hover:opacity-100 text-gray-800 dark:text-gray-200 z-50"
                        >
                            <span className="block text-gray-800 dark:text-gray-200 ">{link.label}</span>
                        </a>
                    ))}
                    {/*
                    <a
                        href="/blog"
                        className="relative inline-block text-base dark:text-gray-400 hover:text-gray-200 transition-all ease-out duration-300"
                    >
                        <span className="block">Blog</span>
                    </a>
                    */}
                    {/*<ToggleDarkMode />*/}
                    <Toggle />
                    <a
                        href="#_"
                        className="hidden items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-gray-700 border border-gray-700 rounded-md shadow-sm hover:bg-gray-600"
                    >
                        {" "}
                        Signup{" "}
                    </a>
                </div>

                <div className="flex items-center justify-center h-full text-gray-200 md:hidden">
                    <Toggle />
                </div>
            </div>
        </nav>
    );
}
