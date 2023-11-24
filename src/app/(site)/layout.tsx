import SidebarNavigation from "@/components/ui/SidebarNavigation";
import TopNavigation from "@/components/ui/TopNavigation";
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="w-full h-full overflow-hidden">
            <main
                className="overflow-hidden
                w-full h-full grid grid-cols-1 lg:grid-cols-[15rem_1fr]"
            >
                <aside className="overflow-y-auto border-r border-r-foreground-100 max-lg:hidden">
                    <SidebarNavigation />
                </aside>

                <div className="overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout