import React from 'react'
import CategoryCard from "./CategoryCard"

const data = [
    {
        img:"/top1.webp",
        type:"Causal",
        quantity:"(43 Itmes)"
    },
    {
        img:"/top2.webp",
        type:"Formal",
        quantity:"(87 Itmes)"
    },
    {
        img:"/top3.webp",
        type:"Jeans",
        quantity:"(61 Itmes)"
    },
]
    
const Category = () => {
  return (
    <div className="bg-[url(/mainimg2.jpg)] bg-no-repeat flex flex-col justify-center items-center gap-4 text-slate-300 my-3 p-4 md:p-8">
            <h2 className="text-lg md:text-3xl font-medium text-white py-3">Top Category</h2>
            <div className="flex justify-around items-center w-full">
                {data.map((el)=>(
                <CategoryCard 
                key={el.type}
                img={el.img}
                type={el.type}
                quantity={el.quantity}
                />))}
            </div>
    </div>
  )
}

export default Category
