import React, { useContext, useEffect, useState } from 'react'

import { e2pNumbers } from '../../Helper/helpers'

import { motion } from 'framer-motion';
import OrderListContext from '../../context/OrderListContext';

function FoodCounter({ toggle, inOrderList }) {


    const { items, setItems } = useContext(OrderListContext)

    const [item, setItem] = useState(inOrderList)

    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        if (item) {
            setQuantity(item.count)
        }
    }, [item])

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);

        let id = item.id;
        let index = items.findIndex(item => item.id == id)
        let matchedItem = items[index]
        matchedItem.count += 1;
    }

    const handleDecreaseQuantity = () => {

        let id = item.id;
        let index = items.findIndex(item => item.id == id)
        let matchedItem = items[index]

        if (matchedItem.count >= 2) {
            setQuantity(quantity - 1);
            matchedItem.count -= 1;

        } else {
            let filteredItems = items.filter(item => item.id != matchedItem.id)
            setItems(filteredItems)
            setQuantity(1);
            toggle(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="select-none flex justify-end md:mt-5 ml-2 gap-x-2 items-center text-[#5e6472]">
            <span onClick={() => handleIncreaseQuantity()} className="cursor-pointer fa fa-plus p-2 text-base md:text-lg"></span>
            <span className="text-sm md:text-base font-bold w-10 text-center">{e2pNumbers(quantity.toString())}</span>
            <span onClick={() => handleDecreaseQuantity()} className="cursor-pointer fa fa-trash p-2 text-base md:text-lg"></span>
        </motion.div>
    )
}

export default FoodCounter