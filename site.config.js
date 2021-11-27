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

// For internal links
export const domains = [
  "cbsofyalioglu.com",
  "www.cbsofyalioglu.com"
]

// For dofollow links
// Don't use the protocol (http or https)
export const whitelist = [
  "www.filizguvenlik.com.tr",
  "livicomturkiye.com",
  "livicom.net",
  "alarmsistemleri.org",
  "istanbulcruisetransfer.com",
  "privatetransfer.istanbul",
  "istanbultransferexpert.com",
  "webmeister.org",
  "www.cbsofyalioglu.com",
  "www.opendigitalgallery.com"
]

export const navlinks = [
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
    { name: 'Blog', href: '/en/', icon: LibraryIcon, current: false },
    { name: 'Blog (Turkish)', href: '/tr/', icon: ClipboardListIcon, current: false },
    //{ name: 'Projects', href: '#', icon: FolderIcon, current: false },

    {
        name: 'Bookmarks', icon: BookmarkIcon, current: false,
        children: [
            { name: 'Dev Tools', href: '/bookmarks/dev-tools' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ]
    },
]
export const footerLinks = [
    { label: "Home", href: "https://www.cbsofyalioglu.com" },
    { label: "Portfolio", href: "https://webmeister.org" },
    { label: "Contact", href: "mailto:canburak@msn.com", ariaLabel: "Send email" },
]
export const footerCredits = "Crafted by Can Burak Sofyalıoğlu with ❤️ "

export const socialMediaLinks = {
    facebook: "https://www.facebook.com/john.baudrillard/",
    twitter: "https://twitter.com/webmeisterorg",
    github: "https://github.com/canburaks/",
    linkedin: "https://www.linkedin.com/in/cbsofyalioglu/",
    dribble: "https://dribbble.com/canburaks",
    figma: "https://www.figma.com/@webmeister"

}
export const bookmarkCollections = [
    {
        _id: 21583993,
        title: "design-tools",
        name: "Design Tools",
        description: "Useful design tools for creators."
    },
    {
        _id: 21583998,
        title: "dev-tools",
        name: "Developer Tools",
        description: "Useful developer tools for creators."
    }
]
