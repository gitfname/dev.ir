
'use client';

import { Button } from "@nextui-org/react";
import { Menu } from "lucide-react"
import { useState } from "react"
import SidebarNavigation from "./SidebarNavigation";
import MobileSidebarNavigation from "./MobileSidebarNavigation";

function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)
    const onOpen = () => setIsOpen(true)

    return (
        <>
            <div
                onClick={onClose}
                className={`w-full h-screen z-[99] bg-black/50 fixed top-0 left-0 opacity-0 pointer-events-none
                cursor-pointer transition-opacity duration-250 delay-100
                ${isOpen ? "!pointer-events-auto !opacity-100 !delay-0" : ""}`}
            />

            <div
                className={`fixed top-0 left-0 w-64 h-screen bg-zinc-800 overflow-y-auto -translate-x-full
                transition-transform duration-250 z-[100] shadow-[10px_0_10px_rgba(0,0,0,0.25)]
                ${isOpen ? "!translate-x-0" : ""}`}
            >
                <MobileSidebarNavigation />
            </div>

            <Button size="sm" variant="bordered" onClick={onOpen}>
                <Menu width={20} height={20} strokeWidth={1.3} className="text-foreground-800" />
            </Button>
        </>
    )
}

export default MobileMenu