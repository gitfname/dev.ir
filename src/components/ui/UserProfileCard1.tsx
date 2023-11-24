
'use client';

import { User } from "@nextui-org/react";
import { Quicksand } from "next/font/google"
import { useRouter } from "next/navigation";
const quicksandSubTitle = Quicksand({ subsets: ["latin"], weight: "500" })

interface Props {
    username: string;
    name: string;
    descriptoin: string;
    img: string;
}

function UserProfileCard1({ img, descriptoin, name, username }: Props) {

    const router = useRouter()

    const handleUserClick = () => username.trim() !== "" && router.push("/users/" + username)

    return (
        <User
            onClick={handleUserClick}
            name={name}
            description={descriptoin}
            avatarProps={{
                src: img
            }}
            className={`${quicksandSubTitle.className} ${username ? "cursor-pointer" : ""}`}
        />
    )
}

export default UserProfileCard1