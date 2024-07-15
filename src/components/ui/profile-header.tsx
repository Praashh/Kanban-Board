import AlertCircle from "./alert-circle"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Notification from "./notification"
import Plus from "./plus"
import img from "@/assets/profile.png"
import InputDialog from "./input-dialog"

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