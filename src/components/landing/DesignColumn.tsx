import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CardContent from '../ui/card-content';

type DesignColumnPropsData = {
    id: number;
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
                    return <div className='bg-gray-300' key={item.id}>
                        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
                            <CardContent id={item.id} title={item.title} description={item.discription} key={item.id} />
                        </SortableContext>
                    </div>
                })
            }
        </div>
    )
}

export default DesignColumn