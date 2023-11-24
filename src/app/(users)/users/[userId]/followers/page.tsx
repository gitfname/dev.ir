import UserCard1 from "@/components/ui/UserCard1"


function page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <UserCard1
                img="/images/users/thumbnails/user1-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user2-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user3-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user4-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user5-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user6-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user7-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />

            <UserCard1
                img="/images/users/thumbnails/user8-thumbnail.jpg"
                name="Nicolas B."
                username="brdnicolas"
            />
        </div>
    )
}

export default page