import { useState } from "react";
import {
  useMotionValue,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number | null;
    name?: string;
    designation?: string;
    image: string;
    more?: string
  }[];
}) => {
  const [, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0); 
  const handleMouseMove = (event:any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-9 md:-mr-[2rem] relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            onMouseMove={handleMouseMove}

            src={item.image}
            alt={item.name}
            className={`object-cover ${!item.more ? 'group-hover:z-10' : ''} !m-0 !p-0 object-top rounded-full h-12 w-12 md:h-14 md:w-14 border-2 group-hover:scale-105  border-white  relative transition duration-500`}
          />
          <span className="absolute top-[20%] md:top-[27%] text-lg hover:z-40 left-[20%] md:left-[23%] text-white">{item.more}</span>
        </div>
      ))}
    </>
  );
};
