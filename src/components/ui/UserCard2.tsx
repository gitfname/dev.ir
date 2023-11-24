import Image from "next/image";
import { Quicksand } from "next/font/google"
const quicksandTitle = Quicksand({ subsets: ['latin'], weight: "700" })
const quicksandSubTitle = Quicksand({ subsets: ['latin'], weight: "500" })
import { Github, Twitter, Twitch, Globe, Linkedin, MessageSquare, type LucideIcon } from "lucide-react"
import { ReactNode } from "react";

const userCard2__icons: {
    github: ReactNode;
    twitter: ReactNode;
    twitch: ReactNode;
    website: ReactNode;
    likedin: ReactNode;
} = {
    github: <Github width={22} height={22} strokeWidth={1.3} />,
    twitter: <Twitter width={22} height={22} strokeWidth={1.3} />,
    twitch: <Twitch width={22} height={22} strokeWidth={1.3} />,
    website: <Globe width={22} height={22} strokeWidth={1.3} />,
    likedin: <Linkedin width={22} height={22} strokeWidth={1.3} />
}

interface SocialLinksProps {
    link: string;
    title: "github" | "twitter" | "twitch" | "website" | "likedin";
}

interface Props {
    username: string;
    bio: string;
    img: string;
    name: string;
    location: string;
    joinDate: string;
    skills: string[];
    posts: number;
    comments: number;
    followingTags: number;
    socials: Array<SocialLinksProps>;
}

function UserCard2({ comments, socials, followingTags, img, joinDate, location, name, posts, skills, username, bio }: Props) {
    return (
        <div className="p-3 pb-6 rounded-xl bg-foreground-50 flex flex-col items-center justify-center relative">
            <Image
                alt={username}
                src={img}
                width={250}
                height={250}
                className="w-40 h-40 rounded-full outline outline-4 outline-black outline-offset-8 -translate-y-1/2"
            />

            <div className="flex flex-col items-center justify-center -translate-y-10">
                <p
                    className={`${quicksandTitle.className} text-xl text-foreground`}
                >
                    {name}
                </p>

                <p
                    className={`${quicksandSubTitle.className} text-sm text-foreground-700 mt-2`}
                >
                    {bio}
                </p>

                <div className="flex items-center gap-x-3 mt-6">
                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {joinDate}
                    </p>

                    <div className="self-stretch w-px bg-foreground-200"></div>

                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {location}
                    </p>

                    <div className="self-stretch w-px bg-foreground-200"></div>

                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        <MessageSquare width={18} height={18} strokeWidth={1.3} className="inline" /> {comments}
                    </p>
                </div>

                <div className="mt-2">
                    <p
                        className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                    >
                        {skills.join(", ")}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-3 left-3 flex items-center gap-x-2.5 text-foreground-500">
                {socials.map(social => userCard2__icons.hasOwnProperty(social.title)
                    ?
                    <a key={social.title} href={social.link} target="_blank" className="hover:text-foreground-800 transition-colors">{userCard2__icons[social.title]}</a>
                    :
                    null
                )}
            </div>

            <div className="flex items-center gap-x-3 absolute bottom-3 right-3">
                <p
                    className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                >
                    follows {followingTags} tags
                </p>

                <div className="self-stretch w-px bg-foreground-200"></div>

                <p
                    className={`${quicksandSubTitle.className} text-xs text-foreground-500`}
                >
                    {posts} posts
                </p>

            </div>
        </div>
    )
}

export default UserCard2