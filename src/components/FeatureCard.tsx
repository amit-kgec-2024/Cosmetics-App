import React from 'react'
import Image from "next/image"
interface propTypes{
    img:string;
    title:string;
    desc:string;
}
const FeatureCard = ({img, title, desc}: propTypes) => {
  return (
    <div className="flex gap-8">
        <Image className='h-[50px] w-auto' width={60} height={50} src={img} alt='Images'/>
        <div className="space-y-1">
            <h2 className='font-medium text-xl uppercase'>{title}</h2>
            <p className="text-gray-600 text-[14px]">{desc}</p>
        </div>
    </div>
  )
}

export default FeatureCard
