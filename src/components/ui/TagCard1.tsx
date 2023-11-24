
import { Button, Chip } from "@nextui-org/react";
import { Quicksand } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
const quicksandTitle = Quicksand({ subsets: ["latin"], weight: "700" })
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "500" })

interface Props {
    slug: string;
    title: string;
    description: string;
    posts: number;
    icon: string;
    isFollowing?: boolean;
    showFollowUnfollowBtn?: boolean;
}

function TagCard1({ description, icon, isFollowing, posts, title, slug, showFollowUnfollowBtn = true }: Props) {
    return (
        <div className="rounded-lg p-3 bg-foreground-100">
            <div className="flex items-center justify-between">

                <Link href={"/t/" + slug}>
                    <Chip size="sm" variant="bordered" className={`shadow-md shadow-foreground-50 ${quicksandTitle.className}`}>
                        {title}
                    </Chip>
                </Link>

                <p
                    className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                >
                    {posts} posts
                </p>
            </div>

            <div className="w-full h-20 mt-3">
                <p
                    className={`${quicksandSubTitle.className} text-sm text-foreground-600 line-clamp-3`}
                >
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between">

                {
                    showFollowUnfollowBtn
                        ?
                        <Button size="sm" variant="bordered">
                            {
                                isFollowing
                                    ?
                                    "Unfollow"
                                    :
                                    "Follow"
                            }
                        </Button>
                        :
                        null
                }

                <Image
                    alt=""
                    src={icon}
                    width={180}
                    height={180}
                    className="w-12 h-auto"
                />
            </div>
        </div>
    )
}

export default TagCard1