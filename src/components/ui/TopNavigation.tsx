
import Logo from "./Logo"
import SearchInput from "./SearchInput"
import CreateNewPostButton from "./CreateNewPostButton"
import { Quicksand } from "next/font/google"
import AccountDropDown from "./AccountDropDown"
import { User } from "@nextui-org/react"
import MobileMenu from "./MobileMenu"

const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })


function TopNavigation() {
    return (
        <nav className="bg-gray-200 dark:bg-zinc-900 border-b border-b-foreground-200 p-2 px-4 flex items-center justify-between">
            <div className="flex items-center gap-x-6 flex-1">
                <Logo />
                <div className="self-stretch max-sm:hidden flex w-full max-w-xs">
                    <SearchInput />
                </div>
            </div>

            <div className="flex items-center gap-x-6">
                <div className="flex items-center max-md:hidden">
                    <CreateNewPostButton />

                    <AccountDropDown>
                        <User
                            className={`${quicksand.className} text-foreground ml-10`}
                            name="Jane Smith"
                            avatarProps={{
                                src: "/images/users/thumbnails/user1-thumbnail.jpg"
                            }}
                        />
                    </AccountDropDown>

                </div>

                <div className="lg:h-unit-sm">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}

export default TopNavigation