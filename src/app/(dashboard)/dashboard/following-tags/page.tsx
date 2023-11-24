import TagCard1 from "@/components/ui/TagCard1"

function page() {
    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <TagCard1
                icon="/images/badges/javascript.png"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                isFollowing={true}
                posts={1090}
                title="JavaScript"
                slug="javascript"
            />

            <TagCard1
                icon="/images/badges/python.webp"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                isFollowing={true}
                posts={1002}
                title="Python"
                slug="python"
            />

            <TagCard1
                icon="/images/badges/reactjs.webp"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                isFollowing={true}
                posts={903}
                title="ReactJs"
                slug="reactjs"
            />

            <TagCard1
                icon="/images/badges/php.webp"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                isFollowing={true}
                posts={879}
                title="Php"
                slug="php"
            />
        </div>
    )
}

export default page