import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { RxCross1 } from 'react-icons/rx'
import CartProduct from './CartProduct'

const Cart = ({setShowCart}: any) => {

    const products = useAppSelector((state) => state.cartReducer)

    const getTotal = () =>{
        let total = 0;
        products.forEach((item) => (total = total + item.price * item.quantity))
        return total;
    }
  return (
    <div className="w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll bg-[#0000007d]">
        <div className="w-full max-w-[400px] min-h-full bg-white absolute right-0 top-0 p-6">
            <RxCross1 className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer" onClick={() => setShowCart(false)}/>
            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
            <div className="mt-6 space-y-2">
                {products?.map((item: any) =>(
                    <CartProduct
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}
                    />
                ))}
            </div>
            <div className="flex justify-between items-center font-medium text-xl py-4">
                <p>Total:</p>
                <p>${getTotal()}.00</p>
            </div>
            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent md-4 mt-4">View Cart</button>
            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent">Check Out</button>
        </div>
    </div>
  )
}

export default Cart
