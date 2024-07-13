import { Link } from "react-router-dom"
import TrelloLogo from "../ui/trello"
import Pipe from "../ui/pipe"
import TrelloMarkBlue from "../ui/trello-mark-blue"
import BoardText from "../ui/board-text"
import { SearchIcon } from "lucide-react"
import SearchInput from "../ui/search-bar"
import ProfileHeader from "../ui/profile-header"

const Navbar = () => {
    return (
        <nav className="inset-x-0 fixed top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <div className="flex items-center gap-5">
                        <Link to = {"/"}><TrelloLogo /></Link>
                        <Pipe />
                        <Link to = {"/"}><TrelloMarkBlue /></Link>
                        <BoardText />
                        <Pipe />
                        <div className="block md:hidden"><SearchIcon/></div>
                    </div>
                    {/* SearchBar */}
                    <SearchInput/>
                    <div className="flex gap-3 items-center">
                        <ProfileHeader/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
