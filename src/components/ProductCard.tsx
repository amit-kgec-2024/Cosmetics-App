import React from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  stars: number;
  sale: boolean | undefined;
}

const ProductCard: React.FC<IProduct> = ({ id, img, name, price, sale, stars }) => {

  return (
    <Link href={`/details/${id}`} passHref>
      <div className="group cursor-pointer shadow-lg p-2 flex flex-col justify-between">
        <div className="relative">
          <div className="w-full h-[20rem]" style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>
          {sale && (
            <div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4">
              SALE!
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
            <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
              <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                <AiOutlineHeart />
              </div>
              <button
                className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
              >
                <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 text-xl p-2 text-green-700">
            {[1, 2, 3, 4, 5].map((ele) =>
              ele <= stars ? (
                <AiFillStar key={ele} />
              ) : (
                <AiOutlineStar key={ele} />
              )
            )}
          </div>
          <h2 className="font-medium hover:text-accent pb-3">{name}</h2>
          <p className="text-gray-600 font-light">₹{price}.00</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
