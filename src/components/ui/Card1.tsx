
import { Card, CardHeader, CardBody, User } from "@nextui-org/react"
import { Quicksand } from "next/font/google"
import Image from "next/image";
const quicksandTitle = Quicksand({ subsets: ["latin"], weight: "500" })
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "500" })
import { Bookmark } from "lucide-react"
import UserProfileCard1 from "./UserProfileCard1";

interface Props {
    slug: string;
    title: string;
    img: string;
    date: string;
    user: {
        id: string;
        name: string;
        img: string;
    },
    timeToRead: string;
}

function Card1({ slug, title, img, date, user, timeToRead }: Props) {
    return (
        <Card className="relative">
            <Bookmark
                width={20}
                height={20}
                strokeWidth={1.3}
                className="text-foreground absolute top-3 right-3"
            />

            <CardHeader className="flex flex-col items-start justify-start">

                <UserProfileCard1
                    descriptoin=""
                    img={user.img}
                    name={user.name}
                    username="jane-doe-smith"
                />

                <p
                    className={`${quicksandTitle.className} text-sm text-foreground line-clamp-2 mt-3.5`}
                >
                    {title}
                </p>
            </CardHeader>

            <CardBody>
                <div className="w-full aspect-square relative">
                    <Image
                        alt=""
                        src={img}
                        fill
                        className="object-center object-cover rounded-2xl"
                    />
                </div>

                <div className="flex items-center justify-between mt-3">
                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {date}
                    </p>

                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {timeToRead}
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}

export default Card1