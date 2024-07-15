import AlertCircle from "./icons/alert-circle"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import Notification from "./icons/notification"
import Plus from "./icons/plus"
import img from "@/assets/profile.png"
import InputDialog from "./InputDialog"

const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <InputDialog inputDialog={<button><Plus/></button>}/>
      <button><AlertCircle /></button>
      <button><Notification /></button>
      <Avatar>
        <AvatarImage src={img} alt="@img-profile" />
        <AvatarFallback>PV</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default ProfileHeader