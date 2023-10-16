import React from 'react'
import Image from 'next/image';


interface propType{
    img: string;
    title: string;
    date: string
    comment: number
}
const BlogCard = ({img, title, date, comment}:propType ) => {
  return (
    <div className="space-y-4">
        <Image className='rounded-lg hover:scale-105 transition-transform' width={400} height={100} src={img} alt={title}/>
        <div className="text-accent font-medium">
            <span>{date} /</span>
            <span>{comment} Comment</span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCard
