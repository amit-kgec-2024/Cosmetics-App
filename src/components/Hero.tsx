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
    <div className="flex items-center justify-center w-full">
        <div className="shadow-2xl bg-white w-[30%] flex flex-col items-center justify-center p-4 gap-5 md:gap-10">
            <h2 className="text-lg md:text-3xl font-bold leading-tight text-indigo-500 "><span>{text}</span><span><Cursor cursorStyle="|"/></span></h2>
            <p className='text-gray-600 text-sm md:text-xl'>Check your best products & Order Now!</p>
            <button className='bg-[#333] uppercase text-white text-sm md:text-xl py-2 p-4 md:px-8 rounded-md hover:bg-accent cursor-pointer'>Start Selling!</button>
        </div>
    </div>
  )
}

export default Hero
