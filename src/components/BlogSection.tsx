import React from 'react'
import BlogCard from "./BlogCard"

const data =[
    {
        img:"/post__1.jpg",
        title:"Lorem ipsum dolor sit amet",
        date: "Sep 27, 20023",
        comment: 8,
    },
    {
        img:"/post__2.jpg",
        title:"Lorem ipsum dolor sit amet",
        date: "Sep 27, 20023",
        comment: 4,
    },
    {
        img:"/post__3.jpg",
        title:"Lorem ipsum dolor sit amet",
        date: "Sep 27, 20023",
        comment: 3,
    },
]

const BlogSection = () => {
  return (
    <div className="container pt-32">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
            Present posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) =>(
                <BlogCard
                key={el.title}
                img={el.img}
                title={el.title}
                date={el.date}
                comment={el.comment}
                />
            ))}
        </div>
    </div>
  )
}

export default BlogSection
