
import { Button } from "@nextui-org/react";
import { Josefin_Sans, Quicksand } from "next/font/google"
import Image from "next/image";
const josefinsansTitle = Josefin_Sans({ subsets: ["latin"], weight: "700" })
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "500" })


interface Props {
    title: string;
    subTitle: string;
    img: string;
    isFollowing: boolean;
}

function Card2({ img, subTitle, isFollowing, title }: Props) {
    return (
        <div className="flex max-sm:flex-col gap-y-5 items-start gap-x-4 bg-zinc-900 p-4 rounded-lg">
            <Image
                alt=""
                src={img}
                width={180}
                height={180}
                className="w-14 h-auto rotate-12"
            />

            <div>
                <p
                    className={`${josefinsansTitle.className} text-foreground text-2xl capitalize`}
                >
                    {title}
                </p>

                <p
                    className={`${quicksandSubTitle.className} text-foreground-600 text-sm mt-3`}
                >
                    {subTitle}
                </p>
            </div>

            <div className="max-sm:ml-0 ml-6">
                <Button size="sm">
                    {
                        isFollowing
                            ?
                            "Unfollow"
                            :
                            "Follow"
                    }
                </Button>
            </div>
        </div>
    )
}

export default Card2