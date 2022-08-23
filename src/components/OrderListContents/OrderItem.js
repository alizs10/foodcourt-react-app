import React, { useContext } from 'react'
import OrderListContext from '../../context/OrderListContext'
import { e2pNumbers, showPersianPrice } from '../../Helper/helpers'

function OrderItem({ item, index }) {

    const { handleIncreaseQuantity, handleDecreaseQuantity } = useContext(OrderListContext)
    return (
        <div className="flex gap-x-1 items-center border-b mx-4 md:mx-8">
            <div className="flex flex-col gap-y-1 w-[10%] pb-1">
                <span onClick={() => handleIncreaseQuantity(item)} className="w-4 h-4 rounded-full bg-gray-100 flex-center cursor-pointer text-[#90A84D]">
                    <i className="fa-regular fa-plus text-[12px] m-0"></i>
                </span>
        
                {item.count == 1 ? (
                    <span onClick={() => handleDecreaseQuantity(item)} className="w-4 h-4 rounded-full bg-gray-100 flex-center cursor-pointer text-[#90A84D]">
                        <i className="fa-regular fa-trash text-[12px] m-0"></i>
                    </span>
                ) : (
                    <span onClick={() => handleDecreaseQuantity(item)} className="w-4 h-4 rounded-full bg-gray-100 flex-center cursor-pointer text-[#90A84D]">
                        <i className="fa-regular fa-minus text-[12px] m-0"></i>
                    </span>
                )}
            </div>
            <span key={item.id} className='w-[90%] flex justify-between text-xs ms:text-sm'>
                <span>{`${e2pNumbers((index + 1).toString())}- ${item.food.name} (${e2pNumbers(item.count.toString())})`}</span>
                <span>{`${showPersianPrice(item.food.price)}`} <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
            </span>
        </div>
    )
}

export default OrderItem