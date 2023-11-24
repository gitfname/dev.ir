
'use client';

import Link from "next/link";
import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: "400" })
import { usePathname } from "next/navigation";
import { Chip } from "@nextui-org/react";


const NavLink = ({ href, isActive, label, count }: { href: string; label: string; isActive: boolean; count: number; }) => {
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

function DashboardSidebarNavigation() {

    const pathname = usePathname()

    return (
        <div className="w-full h-full p-2 py-4 flex flex-col gap-y-1">
            <NavLink
                href="/dashboard"
                label="My Posts"
                isActive={pathname === "/dashboard"}
                count={6}
            />

            <NavLink
                href="/dashboard/followers"
                label="Followers"
                isActive={pathname === "/dashboard/followers"}
                count={8}
            />

            <NavLink
                href="/dashboard/followings"
                label="Followings"
                isActive={pathname === "/dashboard/followings"}
                count={4}
            />

            <NavLink
                href="/dashboard/following-tags"
                label="Following Tags"
                isActive={pathname === "/dashboard/following-tags"}
                count={3}
            />

            <NavLink
                href="/dashboard/reading-list"
                label="Reading list"
                isActive={pathname === "/dashboard/reading-list"}
                count={7}
            />

            <NavLink
                href="/dashboard/archive"
                label="Archived"
                isActive={pathname === "/dashboard/archive"}
                count={3}
            />
        </div>
    )
}

export default DashboardSidebarNavigation