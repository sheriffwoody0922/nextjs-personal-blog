// Note: importing from "@theme/Footer" would fail due to the file importing itself
import React from 'react'
import { WebmeisterGradientLogo } from "../components/logo"

type LinkType = {
    href: string;
    label: string;
    rel?: string;
    title?: string;
    ariaLabel?: string;
}
type SocialType = {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
    dribble: string;
    figma: string;
}
export interface FooterProps {
    title?: string;
    credits?: string;
    links?: LinkType[];
    social?: SocialType;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer(props: FooterProps) {
    return (
        <footer className="relative py-10  !z-20 px-6 bg-black" >
            <div className="mx-auto max-w-7xl "></div>
            <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">


                    <nav
                        className="flex flex-row justify-center mb-4 -ml-4 -mr-4 relative !z-40"
                        aria-label="social navigation"
                    >
                        <a
                            href={props.social?.facebook}
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my facebook page."
                            title="Facebook"
                        >
                            <svg
                                className="fill-current"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"></path>
                            </svg>
                        </a>
                        <a
                            href={props.social?.twitter}
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my twitter page."
                            title="Twitter"
                        >
                            <svg
                                className="fill-current"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cbsofyalioglu/"
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my linkedin page."
                            title="Linkedin"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/canburaks/"
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my github page."
                            title="GitHub"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0538 13.5181 14.0331 14.4958 12.6716C15.4734 11.31 15.9995 9.67619 16 8C16 3.58 12.42 0 8 0Z"
                                    className="fill-current"
                                />
                            </svg>
                        </a>
                        <a
                            href={props.social?.dribble}
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my dribble page."
                            title="Dribbble"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M23.76 9.58A11.99 11.99 0 0 0 0 12a12.08 12.08 0 0 0 3.51 8.49 12.12 12.12 0 0 0 6.07 3.27A11.99 11.99 0 0 0 24 12a12 12 0 0 0-.24-2.42zm-1.51 2.32c-.15-.03-3.62-.78-7.14-.34a38.64 38.64 0 0 0-.9-2.01c4.04-1.66 5.69-4.03 5.7-4.06a10.2 10.2 0 0 1 2.34 6.4zm-3.48-7.6c-.03.05-1.49 2.27-5.35 3.72a52.06 52.06 0 0 0-3.83-5.98 10.23 10.23 0 0 1 9.18 2.27zM7.63 2.74a61.6 61.6 0 0 1 3.8 5.9A37.91 37.91 0 0 1 1.97 9.9c.67-3.18 2.8-5.8 5.66-7.16zM1.75 12l.01-.32c.18 0 5.25.11 10.52-1.46.3.57.58 1.15.83 1.74l-.4.12c-5.53 1.79-8.34 6.76-8.34 6.76A10.21 10.21 0 0 1 1.76 12zM12 22.25a10.2 10.2 0 0 1-6.53-2.35l.23.18s1.97-4.29 8.04-6.4l.07-.02a42.64 42.64 0 0 1 2.2 7.78 10.2 10.2 0 0 1-4.01.8zm5.73-1.75c-.1-.62-.65-3.63-2-7.32 3.31-.53 6.18.38 6.39.45a10.26 10.26 0 0 1-4.4 6.87z" />
                            </svg>
                        </a>
                        <a
                            href={props.social?.figma}
                            className="p-4 text-gray-600 hover:text-gray-400 transition-all ease-out duration-300"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit my figma page."
                            title="Figma"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.60939 0C3.97806 0 2.66606 1.36867 2.66606 3.04533C2.66606 4.06467 3.15139 4.97 3.89739 5.52267C3.51291 5.81072 3.20126 6.18485 2.98743 6.61506C2.7736 7.04527 2.66354 7.51959 2.66606 8C2.66606 9.02 3.15139 9.92467 3.89739 10.4773C3.51291 10.7654 3.20126 11.1395 2.98743 11.5697C2.7736 11.9999 2.66354 12.4743 2.66606 12.9547C2.66606 14.6313 3.97806 16 5.60939 16C7.24006 16 8.55273 14.6313 8.55273 12.9547V10.38C9.06828 10.8099 9.71814 11.0455 10.3894 11.046C12.0207 11.0453 13.3327 9.67667 13.3327 8C13.3327 6.98 12.8481 6.07533 12.1014 5.52267C12.4859 5.23461 12.7975 4.86048 13.0113 4.43027C13.2252 4.00007 13.3352 3.52575 13.3327 3.04533C13.3327 1.36867 12.0207 0 10.3894 0H5.60939V0ZM3.77206 3.04533C3.77206 1.98467 4.60006 1.13533 5.60939 1.13533H7.44606V4.95533H5.60939C4.60006 4.95533 3.77206 4.10533 3.77206 3.04533V3.04533ZM10.3894 4.95467H8.55273V1.13467H10.3894C11.3994 1.13467 12.2267 1.98467 12.2267 3.04533C12.2267 4.10533 11.3994 4.95467 10.3894 4.95467ZM3.77272 8C3.77272 6.94 4.60072 6.09 5.61006 6.09H7.44672V9.91H5.60939C4.59939 9.91 3.77206 9.06 3.77206 8H3.77272ZM8.55273 8C8.55273 6.94 9.38073 6.09 10.3901 6.09C11.4001 6.09 12.2274 6.93933 12.2274 8C12.2274 9.06 11.4001 9.91 10.3901 9.91C9.38073 9.91 8.55339 9.06067 8.55339 8H8.55273ZM3.77272 12.9547C3.77272 11.8947 4.60072 11.0453 5.61006 11.0453H7.44672V12.9547C7.44672 14.0153 6.62006 14.8647 5.61006 14.8647C4.60072 14.8647 3.77272 14.0153 3.77272 12.9547Z"
                                    className="fill-current"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
                <div className="flex-col justify-between text-center md:flex-row flex">

                    {/* CREDITS */}
                    <div
                        className="order-last  leading-tight !text-gray-500 md:order-first font-thin border-t-2 border-gray-700 border-solid mt-8 pt-4"
                        dangerouslySetInnerHTML={{__html:props.credits || ""}}
                    />

                    {/* LINKS */}
                    <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm z-50">
                        {props.links?.map((link) => (


                        <li key={link.label}>
                            {' '}
                            <a
                                href={link.href}
                                aria-label={link.ariaLabel}
                                title={link.title}
                                className="px-4 text-gray-500 hover:text-white transition-all ease-out duration-300"
                            >
                                {link.label}
                            </a>{' '}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
