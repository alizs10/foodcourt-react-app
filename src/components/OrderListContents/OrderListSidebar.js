import React, { useContext, useEffect, useState } from 'react'

import { motion } from "framer-motion"
import OrderListContext from '../../context/OrderListContext'
import { calculateOrderList, e2pNumbers, showPersianPrice } from '../../Helper/helpers'

function OrderListSidebar() {

    const { items, setItems } = useContext(OrderListContext)

    const [payPrice, setPayPrice] = useState(0);

    useEffect(() => {

        setPayPrice(calculateOrderList(items))

    }, [items])

    const handleRemoveAllItems = () => {
        setItems([])
    }


    return (
        <motion.div onClick={e => e.stopPropagation()}
            initial={{ left: "-30%" }}
            animate={{ left: 0 }}
            exit={{ left: "-30%" }}
            className={`fixed z-50 flex flex-col gap-y-4 shadow-md top-0 bottom-0 bg-white text-[#5e6472] w-3/4 md:w-1/2 lg:w-1/3`}>

            <span className={`mt-8 mx-8 flex ${items.length > 0 ? 'justify-between' : 'justify-center'} items-center`}>
                <span className='text-center font-bold text-sm md:text-base'>لیست سفارش شما ({`${e2pNumbers(items.length.toString())}`})</span>
                {items.length > 0 && (
                    <span onClick={handleRemoveAllItems} className='fa fa-trash-list text-lg p-2 cursor-pointer'></span>
                )}
            </span>

            <div className='mt-6 flex flex-col gap-y-4'>
                {items.length > 0 && (

                    items.map((item, index) => (
                        <span key={item.id} className='flex justify-between border-b text-xs ms:text-sm'>
                            <span className='mr-4 md:mr-8'>{`${e2pNumbers((index + 1).toString())}- ${item.food.name} (${e2pNumbers(item.count.toString())})`}</span>
                            <span className='ml-4 md:ml-8'>{`${showPersianPrice(item.food.price)}`} <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                        </span>
                    ))
                )}
            </div>

            <div className='absolute bottom-8 left-0 right-0'>
                <span className='flex justify-between font-bold text-sm md:text-base'>
                    <span className='mr-4 md:mr-8'>جمع سفارش شما:</span>
                    <span className='ml-4 md:ml-8'>{showPersianPrice(payPrice)} <span className="inline-block pl-1 text-[10px] -rotate-90">تومان</span></span>
                </span>
                <span className="text-[14px] text-center block mt-4">
                    لطفا لیست سفارش خود را به رستوران اعلام کنید
                </span>
            </div>

        </motion.div>
    )
}

export default OrderListSidebar