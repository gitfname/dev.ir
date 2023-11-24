import UserCard1 from "@/components/ui/UserCard1"

function page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <UserCard1
                img="/images/users/thumbnails/user8-thumbnail.jpg"
                name="Nicolas B."
                username="@brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user13-thumbnail.jpg"
                name="Nicolas B."
                username="@brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user12-thumbnail.jpg"
                name="Nicolas B."
                username="@brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user11-thumbnail.jpg"
                name="Nicolas B."
                username="@brdnicolas"
            />
        </div>
    )
}

export default page