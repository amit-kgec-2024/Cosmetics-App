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
    <div className="bg-[url(/mainimg2.jpg)] bg-no-repeat py-16 mt-32">
        <div className="container text-center text-white">
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
