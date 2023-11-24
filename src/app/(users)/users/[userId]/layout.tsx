import UsersSidebarNavigation from "@/components/ui/UsersSidebarNavigation";
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    params: {
        userId: string;
    }
}

function layout({ children, params }: Props) {

    return (
        <div className="w-full h-full overflow-hidden grid grid-cols-1 lg:grid-cols-[13rem_1fr]">

            <div className="border-r border-foreground-50 overflow-y-auto max-lg:hidden">
                <UsersSidebarNavigation userId={params.userId} />
            </div>

            <div className="overflow-y-auto p-2 sm:p-4">
                {children}
            </div>

        </div>
    )
}

export default layout