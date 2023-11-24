
'use client';

import Link from "next/link";
import { Poppins, Quicksand } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: "400" })
const quicksand = Quicksand({ subsets: ["latin"], weight: "700" })
import { Home, Lightbulb, Tag, HelpCircle, BookOpen, Bookmark } from "lucide-react"
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { User } from "@nextui-org/react";


const NavLinkApp = ({ href, isActive, label, icon }: { href: string; label: string; isActive: boolean; icon: ReactNode; }) => {
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

const NavLinkDashboard = ({ href, isActive, label, count }: { href: string; label: string; isActive: boolean; count: number; }) => {
    return <Link
        href={href}
        className={`text-xs text-foreground-500 font-medium ${poppins.className} hover:bg-foreground-50 rounded
        transition-colors duration-250 flex items-center justify-between gap-x-2 py-1.5 px-2 hover:text-foreground-800
        ${isActive ? "!text-foreground-800 !bg-foreground-50" : ""}`}
    >
        {label}

        <p className={`text-xs py-1 px-1.5 rounded border-2 border-foreground-200 leading-none`}>
            {count}
        </p>
    </Link>
}

const NavLink = ({ href, isActive, label }: { href: string; label: string; isActive: boolean; }) => {
    return <Link
        href={href}
        className={`text-xs text-foreground-500 font-medium ${poppins.className} hover:bg-foreground-50 rounded
        transition-colors duration-250 flex items-center gap-x-2 py-1.5 px-2 hover:text-foreground-800
        ${isActive ? "!text-foreground-800 !bg-foreground-50" : ""}`}
    >
        {label}
    </Link>
}

function MobileSidebarNavigation() {

    const pathname = usePathname()

    return (
        <div className="w-full h-full overflow-y-auto">
            <div className="h-max">

                <User
                    className={`${quicksand.className} text-foreground mb-4 bg-white/5 rounded-none py-4 w-full`}
                    name="Jane Smith"
                    avatarProps={{
                        src: "/images/users/thumbnails/user1-thumbnail.jpg"
                    }}
                />
                <div className="flex flex-col gap-y-1 px-2">

                    <NavLinkApp
                        href="/"
                        label="Home"
                        icon={<Home width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/"}
                    />

                    <NavLinkApp
                        href="/tags"
                        label="Tags"
                        icon={<Tag width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/tags"}
                    />

                    <NavLinkApp
                        href="/bookmarks"
                        label="BookMarks"
                        icon={<Bookmark width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/bookmarks"}
                    />

                    <NavLinkApp
                        href="/faq"
                        label="FAQ"
                        icon={<Lightbulb width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/faq"}
                    />

                    <NavLinkApp
                        href="/about"
                        label="About"
                        icon={<HelpCircle width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/about"}
                    />

                    <NavLinkApp
                        href="/guides"
                        label="Guides"
                        icon={<BookOpen width={18} height={18} strokeWidth={1.5} />}
                        isActive={pathname === "/guides"}
                    />

                    <div className="w-10/12 mx-auto h-px bg-foreground-200 my-2"></div>

                    <NavLinkDashboard
                        href="/dashboard"
                        label="My Posts"
                        isActive={pathname === "/dashboard"}
                        count={6}
                    />

                    <NavLinkDashboard
                        href="/dashboard/followers"
                        label="Followers"
                        isActive={pathname === "/dashboard/followers"}
                        count={8}
                    />

                    <NavLinkDashboard
                        href="/dashboard/followings"
                        label="Followings"
                        isActive={pathname === "/dashboard/followings"}
                        count={4}
                    />

                    <NavLinkDashboard
                        href="/dashboard/following-tags"
                        label="Following Tags"
                        isActive={pathname === "/dashboard/following-tags"}
                        count={3}
                    />

                    <NavLinkDashboard
                        href="/dashboard/reading-list"
                        label="Reading list"
                        isActive={pathname === "/dashboard/reading-list"}
                        count={7}
                    />

                    <NavLinkDashboard
                        href="/dashboard/archive"
                        label="Archived"
                        isActive={pathname === "/dashboard/archive"}
                        count={3}
                    />

                    <div className="w-10/12 mx-auto h-px bg-foreground-200 my-2"></div>

                    <NavLink
                        href={`/users/jane-smith/posts`}
                        label="Posts"
                        isActive={pathname === `/users/jane-smith/posts`}
                    />

                    <NavLink
                        href={`/users/jane-smith/followers`}
                        label="Followers"
                        isActive={pathname === `/users/jane-smith/followers`}
                    />

                    <NavLink
                        href={`/users/jane-smith/followings`}
                        label="Followings"
                        isActive={pathname === `/users/jane-smith/followings`}
                    />

                    <NavLink
                        href={`/users/jane-smith/followed-tags`}
                        label="Followed Tags"
                        isActive={pathname === `/users/jane-smith/followed-tags`}
                    />

                    <NavLink
                        href={`/users/jane-smith/guids`}
                        label="Guides"
                        isActive={pathname === `/users/jane-smith/guides`}
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileSidebarNavigation