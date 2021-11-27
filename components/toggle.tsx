// @ts-nocheck
import { useHasMounted } from '../lib/hooks'
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

//export interface ToggleDarkModeProps {}
export const Toggle = () => {
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
