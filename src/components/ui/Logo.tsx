
import { Quicksand } from "next/font/google"
import Link from "next/link"

const quicksand = Quicksand({ subsets: ["latin"], weight: "700" })

function Logo() {
    return (
        <Link href="/" className={`${quicksand.className} block text-lg border-2 border-foreground-700 rounded
        text-foreground-800 w-max px-1.5 py-0.5 bg-black`}>
            DEV.IR
        </Link>
    )
}

export default Logo