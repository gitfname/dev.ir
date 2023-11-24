'use client';

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

function CreateNewPostButton() {

    const router = useRouter()

    const handleClick = () => {
        router.push("/new")
    }

    return (
        <Button onClick={handleClick} size="sm" color="primary" variant="ghost">
            Create Post
        </Button>
    )
}

export default CreateNewPostButton