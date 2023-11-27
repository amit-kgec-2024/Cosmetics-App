"use client"
import Image from 'next/image'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

   const [text] = useTypewriter({
    words: ["Start Selling Online Today"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div className="container relative pt-16">
        <Image className='w-[100%] h-auto' src="/mainimg.jpg" width={1500} height={900} alt='Hero Images'/>
        <div className="hidden rounded-md sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[250px] h-[250px] space-y-3 lg:w-[300] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8">
            <h2 className="text-[22px] sm:text-[30px] xl:text-[30px] font-bold leading-tight text-indigo-500 "><span>{text}</span><span><Cursor cursorStyle="|"/></span></h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px]'>Check your best products & Order Now!</p>
            <button className='bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-accent cursor-pointer'>Start Selling!</button>
        </div>
    </div>
  )
}

export default Hero
