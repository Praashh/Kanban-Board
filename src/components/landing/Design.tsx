import { useState } from "react"
import { InputCard } from "../ui/InputCard"
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import DesignColumn from "./DesignColumn"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import Menu3Dot from "../ui/Menu3Dot"

type DesignProp = {
    heading: string;
}
const Design = ({ heading }: DesignProp) => {
    const [cards, setCards] = useState([
        { id: 1, title: "Home business advertising ideas", discription: "Successful businesses know the importance of building and maintaining…", },
        { id: 2, title: "Unmatched toner cartridge quality 20 less than oem price", discription: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.", img:"https://s3-alpha-sig.figma.com/img/9c3f/b220/c71279872db430b658d12442ce8627eb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghQtZBKlffg00WtiN3PqL-2MxFQ1F3JLghh0N6J6LDKklHU2PWxluCflW1zqD53-x94S5Xb9oVY0WRyVMsXo2oZ12eKc~78W1zXC1yjKnDsJWYu1v1Guh-g4GA0BsE1VLOaX59MsYYYl6ZTb0evR7YQ7tgP~IXFlZPw6O4yrzuRxIV6jurR43oHthBRaGifd~YXu2RToFvQiHodkH39QU8ggD4lkGG8KiHeeHhQmRp~uHnTLJJQ7WBn~APDBPqEP4WV2rOsqz8kJw6eerJhAndPSlqa7PZNgLmKtnOJPwaqBoOQz8fP~-axh8dIlFuaHP6LJSZtW~kLfs~9NIAu2bQ__" },
        { id: 3, title: "How to look up", discription: "Are you considering buying a compatible inkjet cartridge for your printer?", img: 'https://s3-alpha-sig.figma.com/img/fd65/9bd7/8f490313a71e34da148bea8e49e4a006?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnCnzKypSc2D-CQ3eH9YOjDOWlVZgIRIV6oMiD~WvDiCCN95yw7-j6N~bqxVpuvEMYGMZVawCflsIjBIcCElPmGvc9CiJ1bEzEokDz7S-0joER6hc5xS2BWi2BG35EQb9UmVHeo5Kw9NUj3lDKVBmt~tMtsSnLctGOmS5RwyuFYKf5JHZPdCDKE0YO3XxwewW7JbzPiovdyPiN4ey8I3CuLM3nABWl6H0RLjjUErlNcdS~tvnP8EsXhiHcXby7fveFzOAwsoo88nur7iO7aCIlvw5QaZS25j6cB5AfTmxMaD30r3HeRUEfFo~cAA1fkbPSMwhQynxDGJ3Fx5Mw~XqQ__' },
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
        <div className="p-4 md:p-6 md:w-[7.5%] w-[2.65%] md:flex-shrink-0">
            <div className="bg-[#F4F4F4] mb-2 p-2 md:h-12 rounded-xl flex items-center justify-between">
                <h2 className="ml-3">{heading}</h2>
                <Menu3Dot />
            </div>
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <DesignColumn cards={cards} setCards={setCards} />
            </DndContext>
            <div className="cursor-pointer"><InputCard /></div>
        </div>
    )
}

export default Design