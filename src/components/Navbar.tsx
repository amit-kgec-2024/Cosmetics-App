import Link from "next/link"
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { useAppSelector } from "@/redux/hooks"

const Navbar = ({setShowCart}: any) => {

const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="bg-white py-4 p-16 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className='sm:hidden text-[26px]'/>
        <Link href="/" className="text-4xl font-semibold hover:text-accent">IndMart</Link>
        <ul className="gap-6 hidden sm:flex">
          <Link href="" className="NavLink">Home</Link>
          <li className="NavLink">Shop</li>
          <li className="NavLink">Blog</li>
          <li className="NavLink">Pages</li>
          <li className="NavLink">Contact</li>
        </ul>
        <div className="flex gap-6 text-[26px]">
          <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart/>
            <div className="absolute top-[-15px] right-[-10px] w-[25px] h-[25px] rounded-full bg-red-600 text-[14px] text-white grid place-items-center">{cartCount}</div>
          </div>
          <AiOutlineSearch/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
