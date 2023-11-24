
import dynamic from "next/dynamic"
import { Suspense } from "react"
const MarkDownEditor = dynamic(() => import("@/components/ui/MarkDownEditor"), { ssr: false })

function page() {
    return (
        <div className="p-2">
            <Suspense fallback={<div className="w-full aspect-square rounded-xl bg-foreground-300 animate-pulse"></div>}>
                <MarkDownEditor />
            </Suspense>
        </div>
    )
}

export default page