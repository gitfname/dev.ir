
'use client';

import Link from "next/link";
import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: "400" })
import { Home, Lightbulb, Tag, HelpCircle, BookOpen,Bookmark } from "lucide-react"
import { ReactNode } from "react";
import { usePathname } from "next/navigation";


const NavLink = ({ href, isActive, label, icon }: { href: string; label: string; isActive: boolean; icon: ReactNode; }) => {
    return <Link
        href={href}
        className={`text-xs text-foreground-500 font-medium ${poppins.className} hover:bg-foreground-50 rounded
        transition-colors duration-250 flex items-center gap-x-2 py-1.5 px-2 hover:text-foreground-800
        ${isActive ? "!text-foreground-800 !bg-foreground-50" : ""}`}
    >
        {icon}
        {label}
    </Link>
}

function SidebarNavigation() {

    const pathname = usePathname()

    return (
        <div className="w-full h-full p-2 py-4 flex flex-col gap-y-1">
            <NavLink
                href="/"
                label="Home"
                icon={<Home width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/"}
            />

            <NavLink
                href="/tags"
                label="Tags"
                icon={<Tag width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/tags"}
            />

            <NavLink
                href="/bookmarks"
                label="BookMarks"
                icon={<Bookmark width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/bookmarks"}
            />

            <NavLink
                href="/faq"
                label="FAQ"
                icon={<Lightbulb width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/faq"}
            />

            <NavLink
                href="/about"
                label="About"
                icon={<HelpCircle width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/about"}
            />

            <NavLink
                href="/guides"
                label="Guides"
                icon={<BookOpen width={18} height={18} strokeWidth={1.5} />}
                isActive={pathname === "/guides"}
            />
        </div>
    )
}

export default SidebarNavigation