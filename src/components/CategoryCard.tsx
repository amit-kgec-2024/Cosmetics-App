import React from 'react'
import Image from 'next/image';
interface propType{
    img: string;
    type: string;
    quantity: string;
}
const CategoryCard = ({img, type, quantity}: propType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="rounded-full w-[15rem] h-[15rem] border-4 md:border-8 border-white" 
      style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}></div>
        <div>
            <h2 className="text-[14px] md:text-xl font-medium">{type}</h2>
            <p className="text-gray-400 text-[12px] md:text-[14px]">{quantity}</p>
        </div>
    </div>
  )
}

export default CategoryCard
