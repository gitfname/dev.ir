
import TagCard1 from "@/components/ui/TagCard1"
import { Quicksand } from "next/font/google"
const quicksand = Quicksand({ subsets: ["latin"], weight: "700" })

function page() {
    return (
        <div className="p-4">
            <h2
                className={`${quicksand.className} text-xl text-foreground`}
            >
                Tags
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    isFollowing={false}
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
                    isFollowing={false}
                    posts={879}
                    title="Php"
                    slug="php"
                />

                <TagCard1
                    icon="/images/badges/nodejs.webp"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                    isFollowing={true}
                    posts={870}
                    title="NodeJs"
                    slug="nodejs"
                />

                <TagCard1
                    icon="/images/badges/css.webp"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                    isFollowing={false}
                    posts={569}
                    title="Css"
                    slug="css"
                />

                <TagCard1
                    icon="/images/badges/discuss.webp"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur"
                    isFollowing={false}
                    posts={490}
                    title="Discussions"
                    slug="discussions"
                />

            </div>
        </div>
    )
}

export default page