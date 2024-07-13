import AlertCircle from "./alert-circle"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Notification from "./notification"
import Plus from "./plus"
import img from "@/assets/profile.png"

const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-4">
        <button><Plus/></button>
        <p><AlertCircle/></p>
        <p><Notification/></p>
        <Avatar>
      <AvatarImage src={img}alt="@img-profile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
  )
}

export default ProfileHeader