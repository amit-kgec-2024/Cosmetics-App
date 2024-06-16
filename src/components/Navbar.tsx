import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const tapdata = ['All', 'Casual', 'Formal', 'Jeans', 'Tshart'];

interface Product {
  id: number;
  name: string;
  category: string[];
  price: number;
  img: string;
  offer: number;
  stars: number;
  sale: boolean;
}

interface NavbarProps {
  onTabChange: (products: Product[]) => void;
  productData: Product[];
}

const Navbar: React.FC<NavbarProps> = ({ onTabChange, productData }) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTab = (index: number) => {
    const category = tapdata[index].toLowerCase();
    setSelectedTab(index);
    if (category === 'all') {
      onTabChange(productData.slice(0, 28));
      return;
    }
    const filterData = productData.filter((item) =>
      item.category.includes(category),
    );
    onTabChange(filterData);
  };

  return (
    <div className="bg-white py-4 p-16 sticky top-0 z-10 shadow-lg">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className="sm:hidden text-[26px]" />
        <Link
          href="/"
          className="text-4xl font-semibold text-transponent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500"
        >
          IndMart
        </Link>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tapdata.map((text, index) => (
            <li
              key={text}
              className={`${
                selectedTab === index && 'text-accent'
              } cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 text-[26px]">
          <button className="relative cursor-pointer">
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] w-[25px] h-[25px] rounded-full bg-red-600 text-[14px] text-white grid place-items-center">
              {cartCount}
            </div>
          </button>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
