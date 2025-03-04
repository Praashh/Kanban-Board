import Attachments from "./icons/attachment"
import Heart from "./icons/heart"
import MessageIcon from "./icons/msg"

const CardInfo = () => {
  return (
    <div className="flex items-center justify-evenly gap-4">
        <div className="flex items-center">
            <span className="text-[#bfbebe] mr-1">23</span> <MessageIcon/>
        </div>
        <div className="flex items-center">
        <span className="text-[#bfbebe] mr-1">12</span> <Heart/>
        </div>
        <div className="flex items-center">
        <span className="text-[#bfbebe] mr-1">43</span> <Attachments/>
        </div>
    </div>
  )
}

export default CardInfo