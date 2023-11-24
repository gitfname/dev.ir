
import Image from "next/image";
import { Quicksand } from "next/font/google"
import Link from "next/link";
const quicksandTitle = Quicksand({ subsets: ["latin"], weight: "700" })
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "300" })

interface Props {
    img: string;
    name: string;
    username: string;
}

function UserCard1({ img, name, username }: Props) {
    return (
        <div className="flex flex-col items-center justify-center py-6 p-3 bg-foreground-50 rounded-xl">
            <Image
                alt=""
                src={img}
                width={180}
                height={180}
                className="w-16 h-auto rounded-full"
            />

            <p
                className={`${quicksandTitle.className} text-lg text-primary mt-3`}
            >
                {name}
            </p>

            <Link
                href={`/users/${username}`}
                className={`${quicksandSubTitle.className} text-sm text-foreground-500 mt-1 hover:text-foreground-700 transition-colors`}
            >
                {username}
            </Link>
        </div>
    )
}

export default UserCard1