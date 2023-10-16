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
        desc: "Free shipping on all orders over $99"
    },
    {
        img: "/icon__money.webp",
        title: "SECURE PAYMENT",
        desc: "Fully protected when paying online"
    }
]
const Feature = () => {
  return (
    <div className="container pt-16">
        <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4">
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
