import Card1 from "@/components/ui/Card1"

function page() {
    return (
        <div className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 w-10/12 mx-auto">
                <Card1
                    date="1 day ago"
                    img="/images/posts/post-1-thumbnail.jpg"
                    title="Github Repository Initialization Script"
                    slug="github-repository-initialization-script"
                    timeToRead="8 min read"
                    user={{
                        id: "",
                        img: "/images/users/thumbnails/user1-thumbnail.jpg",
                        name: "Jane Doe"
                    }}
                />
                <Card1
                    date="1 day ago"
                    img="/images/posts/post-1-thumbnail.jpg"
                    title="Github Repository Initialization Script"
                    slug="github-repository-initialization-script"
                    timeToRead="8 min read"
                    user={{
                        id: "",
                        img: "/images/users/thumbnails/user1-thumbnail.jpg",
                        name: "Jane Doe"
                    }}
                />
                <Card1
                    date="1 day ago"
                    img="/images/posts/post-1-thumbnail.jpg"
                    title="Github Repository Initialization Script"
                    slug="github-repository-initialization-script"
                    timeToRead="8 min read"
                    user={{
                        id: "",
                        img: "/images/users/thumbnails/user1-thumbnail.jpg",
                        name: "Jane Doe"
                    }}
                />
                <Card1
                    date="1 day ago"
                    img="/images/posts/post-1-thumbnail.jpg"
                    title="Github Repository Initialization Script"
                    slug="github-repository-initialization-script"
                    timeToRead="8 min read"
                    user={{
                        id: "",
                        img: "/images/users/thumbnails/user1-thumbnail.jpg",
                        name: "Jane Doe"
                    }}
                />
            </div>
        </div>
    )
}

export default page