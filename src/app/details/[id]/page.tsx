import React from 'react'
import Data from "@/utils/productData"
import Link from 'next/link';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import {FaFacebookSquare, FaTwitter, FaInstagram, FaShoppingBag} from 'react-icons/fa'
import {MdCompareArrows} from 'react-icons/md'

const page = ({params}: {params: {id:string}}) => {
    const id = params.id;
    const product = Data.find((ele) => ele.id.toString() === id)
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="bg-gray-100 py-4 w-full flex flex-row items-center justify-around">
                <Link href="/" className='cursor-pointer hover:text-accent'>Home</Link>
                <p className="caoitilize">{product?.category[0]}</p>
                <p>{product?.name}</p>
        </div>
        <div className="flex flex-row-reverse justify-between items-center gap-10">
            <div className='shadow-2xl'>
                <img className="w-full h-full" src={product?.img} width={1000} height={1200} alt={product?.name}/>
            </div>
            <div className="flex flex-col p-4 justify-around items-start gap-4">
                <div className="item-center flex text-accent">
                {[1,2,3,4,5].map((exe)=>
                exe <= (product?.stars ?? 0) ? (<AiFillStar key={exe}/>) :
                (<AiOutlineStar key={exe}/>))}
                
                <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">(48 Customer review)</p>
            </div>
            <div className="space-y-6 text-[#161616]">
                <h2 className="text-3xl  font-semibold">{product?.name}</h2>
                <p className="text-xl">₹{product?.price}.00</p>
            </div>
            <p className="text-gray-500 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam quam ex iste sit, rerum vitae nemo magni modi quaerat.</p>
            <p className="text-gray-500 text-[14px]">20 in Stock</p>
            <button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black">
                <AiOutlineShoppingCart className='text-[24px]'/>Add to Cart
            </button>
            <Link className='bg-pink-600 py-4 px-8 rounded-lg text-white flex gap-3' href={(`/orderdet/${product?.id}`)}><FaShoppingBag/>Buy Now!</Link>
            <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                <div className="flex gap-1 items-center"><AiOutlineHeart/>Add To Wish List</div>
                <div className="flex gap-1 items-center"><MdCompareArrows/>Compare</div>
            </div>
            <div className="bg-gray-500 w-[30px] h-[2px]"/>
                    <div>Name: {product?.name}</div>
                    <div className="capitilize">Category: {product?.category[0]}</div>
                    <div className="flex gap-1 capitilize items-center">
                        Tags: {" "}
                        {product?.category.map((item: any) => (
                            <div key={item}>{item}</div>
                        ))}
                    </div>
                    <div className="bg-gray-400 w-[30px] h-[2px]"/>
                    <div className="flex gap-1 items-center pt-4">
                        SHARE: {" "}
                        <div className="text-[18px] flex gap-2 items-center">
                            <FaFacebookSquare/>
                            <FaTwitter/>
                            <FaInstagram/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page
