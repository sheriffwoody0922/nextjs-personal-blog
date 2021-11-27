import { WebmeisterGradientLogo } from "../components/logo"
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react'
import Footer from "./footer"
import {
    TealBlob,
    BluePurpleBlob,
    ThreeColorsBlob,
    TealPinkBlob,
    PurplePinkBlob,
} from '../components/Svg'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { Toggle } from "../components/toggle";
import { useRouter } from 'next/router'
import { navlinks, footerLinks, socialMediaLinks, footerCredits } from "../site.config"

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
    const router = useRouter()

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const navigation = navlinks.map(navlink => navlink.href === router.asPath ? { ...navlink, current: true } : navlink)
    return (
        <div className="h-auto min-h-screen flex overflow-hidden relative z-10 !bg-transparent">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
                <div id="main-layout" ></div>
                <PurplePinkBlob />
                <ThreeColorsBlob />
                <TealBlob />
                <TealPinkBlob />

            </div>
            {/* SIDEBAR MOBILE */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 flex z-40 md:hidden mobilay"
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-90" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-transparent">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-3 right-0 -mr-12 pt-2">
                                    <button
                                        className="ml-1 mr-4 flex items-center justify-center h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <WebmeisterGradientLogo className="" />
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto ">
                                <nav className="px-2 space-y-1">
                                    {navigation.map((item) => !item.children ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                    'mr-4 flex-shrink-0 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ) :
                                        (
                                            <Disclosure as="div" key={item.name} className="space-y-1">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button
                                                            className={classNames(
                                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full'
                                                            )}
                                                        >
                                                            <svg
                                                                className={classNames(
                                                                    open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                                                    'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                                                )}
                                                                viewBox="0 0 20 20"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                            </svg>
                                                            {item.name}
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="space-y-1">
                                                            {item.children.map((subItem) => (
                                                                <a
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-600"
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            ))}
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )

                                    )}
                                </nav>
                            </div>
                            <div className="ml-4 mb-4">
                                <Toggle />
                            </div>
                        </div>

                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* SIDEBAR DESKTOP */}
            <div className="hidden relative md:flex md:flex-shrink-0 dark:bg-[rgba(0,0,0,0.6)] bg-[rgba(255,255,255,0.1)]  z-10 border-r-2 border-solid border-gray-900">
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col h-0 flex-1 fixed top-0 left-0 w-64 bottom-0">

                        {/* SIDEBAR TOP BANNER*/}
                        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-transparent justify-between">
                            <a href="/" className="ml-4 relative top-1" title="homepage"><WebmeisterGradientLogo className="" /></a>
                           {/* <Toggle /> */}
                        </div>

                        {/* SIDEBAR MAIN */}
                        <div className="flex-1 fixed top-16 flex flex-col overflow-y-auto w-60">
                            <nav className="flex-1 px-2 py-4 bg-transparent space-y-1">
                                {navigation.map((item) => !item.children ? (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 group-hover:text-gray-300',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ) : (
                                    <Disclosure as="div" key={item.name} className="space-y-1">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button
                                                    className={classNames(
                                                        item.current ? 'bg-gray-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white',
                                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full'
                                                    )}
                                                >

                                                    {/*<item.icon
                                                        className={classNames(
                                                            item.current ? 'text-gray-500 dark:text-gray-200' : 'text-gray-400 dark:text-gray-300 group-hover:text-gray-300',
                                                            'mr-3 flex-shrink-0 h-6 w-6'
                                                        )}
                                                        aria-hidden="true"
                                                        />*/}
                                                        <svg
                                                            className={classNames(
                                                                open ? 'text-gray-700 dark:text-gray-300 rotate-90' : 'text-gray-700 dark:text-gray-300',
                                                                'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                                            )}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                        </svg>
                                                    {item.name}

                                                </Disclosure.Button>
                                                <Disclosure.Panel className="space-y-1">
                                                    {item.children.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-white hover:bg-gray-900"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                )

                                )}
                            </nav>

                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col w-0 flex-1 overflow-hidden relative !z-10 shadow-xl">

                {/* HEADER */}
                <div className="relative flex-shrink-0 flex h-16  shadow z-50">
                    <button
                        className="px-4 border-r border-gray-200 text-gray-500 bg-gray-800 relative z-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="flex-1 px-4 flex justify-between relative md:blurlay z-50 bg-gray-900 md:hidden">
                        <div className="flex-1 flex">
                            {/*<form className="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                        name="search"
                                    />
                                </div>
                                            </form>*/}
                        </div>
                        <div className="ml-4 items-center md:ml-6 hidden">
                            <Toggle />

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <Menu.Button className="max-w-xs bg-transparent flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            >
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>

                {/* MAIN */}
                <main className="flex-1 relative overflow-y-auto focus:outline-none mt-4 sm:-mt-16 z-10">
                    <div className="py-0 z-50">
                        {children}
                    </div>
                </main>

                {/* FOOTER */}
                <div className="block md:hidden">

                    <Footer
                        title="cbsofyalioglu"
                        credits={footerCredits}
                        links={footerLinks}
                        social={socialMediaLinks}
                    />
                </div>
            </div>
        </div>
    )
}

