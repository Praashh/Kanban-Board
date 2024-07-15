import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CardContent from '../ui/CardContent';

type DesignColumnPropsData = {
    id: number;
    img?:string;
    title: string;
    discription: string;
}
type DesignColumnProps = {
    cards: DesignColumnPropsData[];
    setCards: React.Dispatch<React.SetStateAction<DesignColumnPropsData[]>>;
}

const DesignColumn = ({ cards }: DesignColumnProps) => {
    return (
        <div>
            {
                cards.map((item) => {
                    return <div className='' key={item.id}>
                        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
                            <CardContent id={item.id} title={item.title} description={item.discription} key={item.id} img={item?.img} />
                        </SortableContext>
                    </div>
                })
            }
        </div>
    )
}

export default DesignColumn