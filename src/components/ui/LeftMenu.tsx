import Globe from "./icons/globe"
import Hard from "./icons/hard"
import Heart from "./icons/heart"
import Pipe from "./icons/pipe"

const LeftMenu = () => {
    return (
        <div className="flex flex-col md:flex-row  gap-4 items-start md:items-center p-2">
            <div className="text-black text-2xl">
                Brackets
            </div>
            <div className="flex gap-2 items-center">
                <button><Heart /></button>
                <button><Pipe css={false} /></button>
                <div className="flex gap-2 items-center">
                    <button> <Globe /></button>
                    <p className="text-lg md:text-xl text-[#bfbebe]">Public</p>
                </div>
                <button><Pipe css={false} /></button>
                <button><Hard /></button>
            </div>
        </div>
    )
}

export default LeftMenu