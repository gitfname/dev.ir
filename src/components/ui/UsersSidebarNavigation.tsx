
'use client';

import Link from "next/link";
import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: "400" })
import { usePathname } from "next/navigation";


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

interface Props {
    userId: string;
}

function UsersSidebarNavigation({ userId }: Props) {

    const pathname = usePathname()

    return (
        <div className="w-full h-full p-2 py-4 flex flex-col gap-y-1">
            <NavLink
                href={`/users/${userId}/posts`}
                label="Posts"
                isActive={pathname === `/users/${userId}/posts`}
            />

            <NavLink
                href={`/users/${userId}/followers`}
                label="Followers"
                isActive={pathname === `/users/${userId}/followers`}
            />

            <NavLink
                href={`/users/${userId}/followings`}
                label="Followings"
                isActive={pathname === `/users/${userId}/followings`}
            />

            <NavLink
                href={`/users/${userId}/followed-tags`}
                label="Followed Tags"
                isActive={pathname === `/users/${userId}/followed-tags`}
            />

            <NavLink
                href={`/users/${userId}/guids`}
                label="Guides"
                isActive={pathname === `/users/${userId}/guides`}
            />
        </div>
    )
}

export default UsersSidebarNavigation