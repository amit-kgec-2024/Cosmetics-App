import React from 'react'
import Data from "@/utils/productData"
import DetailsSec, { Iproduct } from './child/DetailsSec';


const DetailPage = ({params}: {params: {id:string}}) => {


    const id = params.id;
    const product = Data.find((ele: Iproduct) => ele.id.toString() === id)
    
  return (
    <main>
        {product && (
        <DetailsSec
        id={product.id}
        key={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        offer={product.offer}
        stars={product.stars}
        category={product.category}
        />)}
    </main>
  )
}

export default DetailPage
