import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
type CardContentProps = {
    id: number
    title: string;
    description: string;
}
const CardContent = ({ id, title, description }: CardContentProps) => {
    const { listeners, transform, transition, attributes, setNodeRef } = useSortable({ id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="bg-slate-400 mb-5">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default CardContent