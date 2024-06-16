import React from 'react'
import Link from "next/link"
import PaymentMode from '@/components/PaymentMode';


const page = ({params}: {params: {id: string[]}}) => {
  const [id, dropItems, totalDisPrice, discountTotal] = params.id;
  
  return (
    <main>
      {discountTotal}
       <div className='font-bold text-center text-2xl text-blue-500 border-b-2 border-dotted'><p className='py-2'>Payment Details</p></div>
      <p className='text-1xl font-bold p-3'>All Options Payment</p>
      <ul className='p-6'>
        <PaymentMode/>
      </ul>
          <div className="p-4">
            <ul className='grid md:grid-cols-1 gap-y-2'>
            <h1 className='font-bold text-gray-400 border-b border-dotted border-gray-400'>PRICE DETAILS</h1>
            <div className='grid gap-y-2'>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="grid gap-y-2">
                      <li>Price ({dropItems} item)</li>
                      <li>Discount</li>
                      <li>Delivery Charges</li>
                    </ul>
                    <ul className="grid gap-y-2">
                      <li className='r-0'>₹{totalDisPrice}</li>
                      <del className='r-0 text-green-500'>₹{discountTotal}</del>
                      <li className='r-0 text-green-600'>FREE</li>
                    </ul>
                </div>
                <ul className='py-2 grid grid-cols-2 border-t border-dotted border-t-gray-400'>
                    <li>Amount Payable</li>
                    <li>₹{totalDisPrice}</li>
                </ul>
            </div>
            </ul>
            <div className='p-2 py-8'>
                <ul className='grid md:grid-rows-2 gap-y-0 float-left'>
                    <p className='font-bold'>{totalDisPrice}</p>
                    <del className='text-xs text-gray-500'>{discountTotal}</del>
                </ul>
                <Link className='px-8 py-2 text-sm float-right rounded-md bg-amber-400' href="/commingsoon">Continue</Link>
                
            </div>
          </div>  
    </main>
  )
}

export default page
