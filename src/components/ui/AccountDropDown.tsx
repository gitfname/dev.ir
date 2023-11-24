
'use client';

import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, DropdownSection } from "@nextui-org/react"
import { ReactNode } from "react";
import { Quicksand } from "next/font/google"
import { useRouter } from "next/navigation";
const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })


interface Props {
    children: ReactNode;
}

function AccountDropDown({ children }: Props) {

    const router = useRouter()

    const handleDashboardClick = () => router.push("/dashboard")
    const handleCreatePostClick = () => router.push("/new")
    const handleReadingListClick = () => router.push("/dashboard/reading-list")
    const handleArchiveClick = () => router.push("/dashboard/archive")

    return (
        <Dropdown radius="sm">

            <DropdownTrigger>
                {children}
            </DropdownTrigger>

            <DropdownMenu color="primary" variant="faded" className="text-foreground">
                <DropdownSection title="" showDivider>
                    <DropdownItem key="dashboard" onClick={handleDashboardClick} className={`${quicksand.className}`}>Dashboard</DropdownItem>
                    <DropdownItem key="create-post" className={`${quicksand.className}`} onClick={handleCreatePostClick}>Create Post</DropdownItem>
                    <DropdownItem key="reading-list" onClick={handleReadingListClick} className={`${quicksand.className}`}>Reading list</DropdownItem>
                    <DropdownItem key="archive" onClick={handleArchiveClick} className={`${quicksand.className}`}>Archive</DropdownItem>
                    <DropdownItem key="settings" className={`${quicksand.className}`}>Settings</DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="signout" color="danger" className={`${quicksand.className}`}>Sign Out</DropdownItem>
                </DropdownSection>
            </DropdownMenu>

        </Dropdown >
    )
}

export default AccountDropDown