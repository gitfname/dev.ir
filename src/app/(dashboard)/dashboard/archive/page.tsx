import Card3 from "@/components/ui/Card3"

function page() {
    return (
        <div className="space-y-2">
            <Card3
                img="/images/users/thumbnails/user11-thumbnail.jpg"
                title="🤓 The Top 10 JavaScript Tricks for Cleaner Code"
                date="2023/07/11"
                timeToRead="11 min"
                slug="Reacts-giving-11-react-components-for-aspiring-pros"
                tags={["hello", "world", "and", "all", "guys"]}
                username="Jane Smith"
                isArchived={true}
            />

            <Card3
                img="/images/users/thumbnails/user9-thumbnail.jpg"
                title="The secret sauce: How WebCrumbs makes React dev a cakewalk
                "
                date="2023/07/11"
                timeToRead="11 min"
                slug="Reacts-giving-11-react-components-for-aspiring-pros"
                tags={["hello", "world", "and", "all", "guys"]}
                username="Jane Smith"
                isArchived={true}
            />

            <Card3
                img="/images/users/thumbnails/user10-thumbnail.jpg"
                title="✨ 8 components to become a React master 🧙‍♂️ 🪄"
                date="2023/07/11"
                timeToRead="11 min"
                slug="Reacts-giving-11-react-components-for-aspiring-pros"
                tags={["hello", "world", "and", "all", "guys"]}
                username="Jane Smith"
                isArchived={true}
            />
        </div>
    )
}

export default page