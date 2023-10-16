import React from 'react'
import CategoryCard from "./CategoryCard"

import { Whisper } from 'next/font/google'
const whisper = Whisper({subsets:["latin"], weight: ["400"]})


const data = [
    {
        img:"/category__1.webp",
        type:"Makeup",
        quantity:"(4 Itmes)"
    },
    {
        img:"/category__2.webp",
        type:"Nail & Wax",
        quantity:"(8 Itmes)"
    },
    {
        img:"/category__3.webp",
        type:"Skincare",
        quantity:"(6 Itmes)"
    },
]
    
const Category = () => {
  return (
    <div className="bg-[url(/cats__bg.avif)] bg-no-repeat py-16 mt-32">
        <div className="container text-center text-white">
            <h3 className={`${whisper.className} text-[40px]`}>Favorite Category</h3>
            <h2 className="text-[40px] font-medium">Top Category</h2>
            <div className="flex justify-center gap-4 md:gap-16 pt-8">
                {data.map((el)=>(
                <CategoryCard 
                key={el.type}
                img={el.img}
                type={el.type}
                quantity={el.quantity}
                />))}
            </div>
        </div>
    </div>
  )
}

export default Category
