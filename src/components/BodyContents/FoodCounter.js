import React, { useContext, useEffect, useState } from 'react'

import { e2pNumbers } from '../../Helper/helpers'

import { motion } from 'framer-motion';
import OrderListContext from '../../context/OrderListContext';

function FoodCounter({ inOrderList }) {

    const { handleIncreaseQuantity, handleDecreaseQuantity } = useContext(OrderListContext)

    const [item, setItem] = useState(inOrderList)
    

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="mt-auto select-none flex justify-end ml-2 gap-x-2 items-center text-[#5e6472]">
            <span onClick={e => {
                e.stopPropagation();
                handleIncreaseQuantity(item)
            }} className="cursor-pointer fa fa-plus p-2 text-xs md:text-lg"></span>
            <span className="text-sm md:text-base font-bold w-10 text-center">{e2pNumbers(item.count.toString())}</span>

            {item.count == 1 ?
                (
                    <span onClick={e => {
                        e.stopPropagation()
                        handleDecreaseQuantity(item)
                    }} className="cursor-pointer fa fa-trash p-2 text-xs md:text-lg"></span>

                ) : (

                    <span onClick={e => {
                        e.stopPropagation()
                        handleDecreaseQuantity(item )
                    }} className="cursor-pointer fa fa-minus p-2 text-xs md:text-lg"></span>
                )}

        </motion.div>
    )
}

export default FoodCounter