
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Button } from "@nextui-org/react";
const quicksandTitle = Quicksand({ subsets: ["latin"], weight: "700" })
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "500" })

interface Props {
    slug: string;
    img: string;
    title: string;
    username: string;
    date: string;
    timeToRead: string;
    tags: string[];
    isArchived?: boolean;
}

function Card3({ date, img, slug, tags, timeToRead, title, username, isArchived }: Props) {
    return (
        <div className="flex items-center justify-between gap-x-3 p-3 px-4 rounded-lg bg-foreground-50">
            <div className="flex items-center gap-x-3">
                <Image
                    alt=""
                    src={img}
                    width={150}
                    height={150}
                    className="w-11 h-11 object-center object-coverr flex-shrink-0 rounded-full outline outline-2 outline-foreground-200 outline-offset-1"
                />

                <div>
                    <p
                        className={`${quicksandTitle.className} text-base text-foreground line-clamp-1 mb-1`}
                    >
                        {title}
                    </p>

                    <span
                        className={`${quicksandSubTitle.className} text-sm text-foreground-700`}
                    >
                        {username}
                    </span>
                    &nbsp;
                    <span className="text-foreground-400">•</span>
                    &nbsp;
                    <span
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {date}
                    </span>
                    &nbsp;
                    <span className="text-foreground-400">•</span>
                    &nbsp;
                    <span
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {timeToRead}
                    </span>
                </div>

            </div>

            <Button size="sm" variant="bordered">
                {
                    isArchived
                        ?
                        "Unarchive"
                        :
                        "Archive"
                }
            </Button>
        </div>
    )
}

export default Card3