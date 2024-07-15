import { Link } from "react-router-dom"
import TrelloLogo from "../ui/trello"
import Pipe from "../ui/pipe"
import TrelloMarkBlue from "../ui/trello-mark-blue"
import BoardText from "../ui/board-text"
import { SearchIcon } from "lucide-react"
import SearchInput from "../ui/search-bar"
import ProfileHeader from "../ui/profile-header"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"

const Navbar = () => {
    return (
        <nav className="p-2 inset-x-0 sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90 border border-solid border-gray-200">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <div className="flex items-center gap-5">
                        <Link to={"/"}><TrelloLogo /></Link>
                        <Pipe css />
                        <Link to={"/"}><TrelloMarkBlue /></Link>
                        <BoardText />
                        <Pipe css />
                        <div className="block md:hidden">
                        <Dialog>
                            <DialogTrigger asChild>
                                <div ><SearchIcon /></div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
                                <div className="grid gap-4 py-4">
                                    <div className="text-center">Search</div>
                                    <div className="grid grid-cols-4 items-center justify-center gap-4">
                                        <Input
                                            required
                                            id="search"
                                            type="text"
                                            className="col-span-4 ml-2 rounded-full"
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                        </div>
                    </div>
                    <SearchInput />
                    <div className="flex gap-3 items-center">
                        <ProfileHeader />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
