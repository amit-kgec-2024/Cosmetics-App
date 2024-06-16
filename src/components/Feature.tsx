import React from 'react'
import FeatureCard from "@/components/FeatureCard"


const data =[
    {
        img: "/icon__cosmetics.webp",
        title: "Naturally Derived",
        desc: "Natural and organic beauty product"
    },
    {
        img: "/icon__ship.webp",
        title: "FREE SHIPPING",
        desc: "Free shipping on all orders over ₹999"
    },
    {
        img: "/icon__money.webp",
        title: "SECURE PAYMENT",
        desc: "Fully protected when paying online"
    }
]
const Feature = () => {
  return (
    <div className="container p-3">
        <div className="flex flex-row items-center justify-around">
            {data.map((el)=>(
                <FeatureCard 
                key={el.title}
                img={el.img}
                title={el.title}
                desc={el.desc}
                />
            ))}
        </div>
    </div>
  )
}

export default Feature
