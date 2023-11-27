import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import {FaFacebookSquare, FaTwitter, FaInstagram, FaShoppingBag} from 'react-icons/fa'
import {MdCompareArrows} from 'react-icons/md'



const DetailsSec = ({id, name, img, stars, price, offer, category}: Iproduct) => {
  return (
    <div className="pt-8">
        <div className="bg-gray-100 py-4">
            <div className="container flex gap-4 items-center text-gray-500">
                <Link href="/" className='cursor-pointer hover:text-accent'>Home</Link>
                <div className="br-gray-400 w-[30px] h-[2px]"/>
                <p className="caoitilize">{category[0]}</p>
                <div className="bg-gray-400 w-[30px] h-[2px]"/>
                <p>{name}</p>
            </div>
        </div>
        <div className="container pt-8">
            <div className="gird md:grid-cols-2 flex gap-16">
                <div>
                    <Image className="w-full h-full" src={img} width={1000} height={1200} alt={name}/>
                </div>
                <div className="space-y-4">
                    <div className="item-center flex text-accent">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                        <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">(48 Customer review)</p>
                    </div>
                    <div className="space-y-6 text-[#161616]">
                        <h2 className="text-3xl  font-semibold">{name}</h2>
                        <p className="text-xl">₹{price}.00</p>
                    </div>
                    <p className="text-gray-500 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam quam ex iste sit, rerum vitae nemo magni modi quaerat.</p>
                    <p className="text-gray-500 text-[14px]">20 in Stock</p>
                    <button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black">
                        <AiOutlineShoppingCart className='text-[24px]'/>
                        Add to Cart
                    </button>
                    <link className='bg-pink-600 py-4 px-8 rounded-lg text-white flex gap-3' href={(`/orderdet/${id}`)}><FaShoppingBag/>Buy Now!</link>
                    <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                        <div className="flex gap-1 items-center"><AiOutlineHeart/>Add To Wish List</div>
                        <div className="flex gap-1 items-center"><MdCompareArrows/>Compare</div>
                    </div>
                    <div className="bg-gray-500 w-[30px] h-[2px]"/>
                    <div>Name: {name}</div>
                    <div className="capitilize">Category: {category[0]}</div>
                    <div className="flex gap-1 capitilize items-center">
                        Tags: {" "}
                        {category.map((item: any) => (
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
    </div>
  )
}

export default DetailsSec

export interface Iproduct{
    id: number;
    img: string;
    name: string;
    price: number;
    offer: number;
    stars: number;
    category: string[];
}