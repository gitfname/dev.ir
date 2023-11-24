
import DashboardSidebarNavigation from "@/components/ui/DashboardSidebarNavigation";
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="w-full h-full overflow-hidden grid grid-cols-1 lg:grid-cols-[13rem_1fr]">

            <div className="overflow-y-auto border-r border-r-foreground-50 max-lg:hidden">
                <DashboardSidebarNavigation />
            </div>

            <div className="p-4 overflow-y-auto">
                {children}
            </div>

        </div>
    )
}

export default layout