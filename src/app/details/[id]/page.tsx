"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Data from "@/utils/productData"
import Link from 'next/link'
import Image from 'next/image'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import {MdCompareArrows} from 'react-icons/md'
import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'

export interface Iproduct{
    id: number;
    img: string;
    name: string;
    price: number;
    category: string[];
    sale: boolean | undefined;
}

const DetailPage = () => {

    const params = useParams()

    const [productData, setProductData] = useState<Iproduct>({
        id: 0,
        img: "",
        name: "",
        price: 0,
        category: [],
        sale: true,
    })


    useEffect(() => {
        const id = params.id;
        const getProductData = Data.filter((item) => item.id.toString()===id)[0]
        setProductData(getProductData)
    })
  return (
    <div className="pt-8">
        <div className="bg-gray-100 py-4">
            <div className="container flex gap-4 items-center text-gray-500">
                <Link href="/" className='cursor-pointer hover:text-accent'>Home</Link>
                <div className="br-gray-400 w-[30px] h-[2px]"/>
                <p className="caoitilize">{productData?.category[0]}</p>
                <div className="bg-gray-400 w-[30px] h-[2px]"/>
                <p>{productData?.name}</p>
            </div>
        </div>
        <div className="container pt-8">
            <div className="gird md:grid-cols-2 flex gap-16">
                <div>
                    <Image className="w-full h-full" src={productData?.img} width={1000} height={1200} alt={productData?.name}/>
                </div>
                <div className="space-y-4">
                    <div className="item-center flex text-accent">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                        <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">(8 Customer review)</p>
                    </div>
                    <div className="space-y-6 text-[#161616]">
                        <h2 className="text-3xl  font-semibold">{productData?.name}</h2>
                        <p className="text-xl">${productData?.price}.00</p>
                    </div>
                    <p className="text-gray-500 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam quam ex iste sit, rerum vitae nemo magni modi quaerat.</p>
                    <p className="text-gray-500 text-[14px]">20 in Stock</p>
                    <button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black">
                        <AiOutlineShoppingCart className='text-[24px]'/>
                        Add to Cart
                    </button>
                    <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                        <div className="flex gap-1 items-center"><AiOutlineHeart/>Add To Wish List</div>
                        <div className="flex gap-1 items-center"><MdCompareArrows/>Compare</div>
                    </div>
                    <div className="bg-gray-500 w-[30px] h-[2px]"/>
                    <div>Name: {productData?.name}</div>
                    <div className="capitilize">Category: {productData?.category[0]}</div>
                    <div className="flex gap-1 capitilize items-center">
                        Tags: {" "}
                        {productData?.category.map((item: any) => (
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

export default DetailPage
