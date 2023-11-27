"use client"
import React from 'react'
import data from '@/utils/productData';
import PaymentSec, { Iproduct } from './child/PaymentSec';


const page = ({params}: {params: {id: string[]}}) => {
  const [id] = params.id;

  const product = data.find((ele: Iproduct) => ele.id.toString() === id)
  
  return (
    <main>
      {product && (
        <PaymentSec
        id={product.id}
        key={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        offer={product.offer}
        stars={product.stars}
        category={product.category}
        />
      )}
    </main>
  )
}

export default page
