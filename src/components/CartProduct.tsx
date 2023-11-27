import { removeFromCart } from '@/redux/feature/cardSlice'
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import React from 'react'
import { RxCross1 } from 'react-icons/rx'

interface propsType {
    id: number;
    img: string;
    name: string;
    price: string;
    quantity: number;
}
const CartProduct: React.FC<propsType> = ({
    id,
    img,
    name,
    price,
    quantity
}) => {
    const dispatch = useAppDispatch()
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Image width={100} height={50} src={img} alt={name} />
            <div className="space-y-2">
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-600 text-[14px]">{quantity} x ₹{price}.00</p>
            </div>
            <div>
                <RxCross1 className="cursor-pointer" onClick={() => dispatch(removeFromCart(id))}/>
            </div>
        </div>
    </div>
  )
}

export default CartProduct;
