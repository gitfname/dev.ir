
import { Input } from "@nextui-org/react"
import { Search } from "lucide-react"

function SearchInput() {
    return (
        <Input
            size="sm"
            classNames={{
                inputWrapper: "h-full"
            }}
            className="text-foreground"
            placeholder="Search..."
            startContent={
                <Search width={18} height={18} strokeWidth={1.3} className="text-foreground" />
            }
            variant="bordered"
        />
    )
}

export default SearchInput