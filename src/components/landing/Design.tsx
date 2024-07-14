import { useState } from "react"
import { InputCard } from "../ui/input-card"
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import DesignColumn from "./DesignColumn"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"

type DesignProp = {
    heading: string;
}
const Design = ({ heading }: DesignProp) => {
    const [cards, setCards] = useState([
        { id: 1, title: "first card", discription: "this is desc for first card" },
        { id: 2, title: "second card", discription: "this is desc for second card" },
        { id: 3, title: "third card", discription: "this is desc for third card" },
    ]);
    const getCardsPosition = (id: number) => {
        return cards.findIndex(card => card.id === id);
    }
    const handleDragEnd = (e: { active: any; over: any }) => {
        const { active, over } = e;

        if (active.id === over.id) { return; }

        setCards(cards => {
            const originalPos = getCardsPosition(active.id);
            const newPos = getCardsPosition(over.id);

            return arrayMove(cards, originalPos, newPos);
        })
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )
    return (
        <div className="p-4 md:p-6 md:w-1/3">
            <h1 className="text-center font-semibold">{heading}</h1>
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <DesignColumn cards={cards} setCards={setCards} />
            </DndContext>
            <div className="cursor-pointer"><InputCard /></div>
        </div>
    )
}

export default Design