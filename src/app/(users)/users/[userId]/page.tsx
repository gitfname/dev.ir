import UserCard2 from "@/components/ui/UserCard2"

function page() {
    return (
        <div className="p-4 pt-20">
            <UserCard2
                name="Thomas King"
                img="/images/posts/post-1-thumbnail.jpg"
                comments={102}
                followingTags={4}
                joinDate="2023/01/03"
                location="Germany"
                posts={7}
                skills={["ReactJs", "Angular", "HTML", "CSS", "Typescript", "Linting", "Prettier"]}
                username="kinginit"
                bio="Front-end enthusiast with a ♥ for Angular!"
                socials={[
                    { title: "github", link: "https://gothub.io/kinkinit.coming" },
                    { title: "twitter", link: "https://this.is.twitter.com/intial-king" },
                ]}
            />
        </div>
    )
}

export default page