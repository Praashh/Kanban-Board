import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import MemberList from "./MemberAdd";
import CardInfo from "./CardInfoRight";
type CardContentProps = {
    id: number;
    img?:string;
    title: string;
    description: string;
}
const CardContent = ({ img, id, title, description }: CardContentProps) => {
    const { listeners, transform, transition, attributes, setNodeRef } = useSortable({ id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        fontFamily:"Poppins, sans-serif"
    }
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="select-none bg-[#F4F4F4]  rounded-lg p-7 flex flex-col items-start justify-center gap-5 mb-5">
            {img && <img src={img} alt="@img" className="rounded-xl md:h-72 w-full"/>}
            <div>
            <p className="text-2xl mt-3">{title}</p>
            <p className="text-xl text-[#8e8e8e] mt-3">{description}</p>
            </div>
            <div className="flex justify-between items-center w-full">
                <MemberList/>
                <CardInfo/>
            </div>
        </div>
    )
}

export default CardContent