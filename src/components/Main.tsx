"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from './ProductCard';
import productData from '@/utils/productData';
import { IProduct } from '@/components/ProductCard'
import Hero from './Hero';
import Category from './Category';
import Feature from './Feature';

const Main = () => {
    const [products, setProducts] = useState([]);

  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  useEffect(() => {
    setProducts(shuffleArray(productData).slice(0, 16));
  }, []);

  const handleTabChange = (filteredProducts: any) => {
    setProducts(shuffleArray(filteredProducts));
  };
  return (
    <div className='flex flex-col'>
      <Navbar onTabChange={handleTabChange} productData={productData} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 ">
                {products.map((item: IProduct) => <ProductCard
                key={item.id}
                id={item.id} 
                img={item.img} 
                name={item.name} 
                price={item.price} 
                sale={item.sale}
                stars={item.stars}
                />)}
            </div>
      <Hero/>
      <Category/>
      <Feature/>
    </div>
  )
}

export default Main
