// @ts-nocheck
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    LibraryIcon,
    BookmarkIcon,
    ClipboardListIcon,
} from '@heroicons/react/outline'

export const navLinks = [
    { name: 'Home', href: '/', current: false },
    { name: 'Blog', href: '/en/', current: false },
    { name: 'Blog (Turkish)', href: '/tr/', current: false },
    //{ name: 'Projects', href: '#', icon: FolderIcon, current: false },

    {
        name: 'Bookmarks',
        icon: BookmarkIcon,
        current: false,
        children: [
            { name: 'Dev Tools', href: '/bookmarks/dev-tools' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },
]

export const footerLinks = [
    { label: 'Home', href: 'https://www.cbsofyalioglu.com' },
    { label: 'Portfolio', href: 'https://webmeister.org' },
    { label: 'Contact', href: 'mailto:canburak@msn.com', ariaLabel: 'Send email' },
]
