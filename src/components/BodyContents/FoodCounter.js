import React, { useContext, useEffect, useState } from 'react'

import { e2pNumbers } from '../../Helper/helpers'

import { motion } from 'framer-motion';
import OrderListContext from '../../context/OrderListContext';

function FoodCounter({ toggle, inOrderList }) {

    const { items, setItems, handleIncreaseQuantity, handleDecreaseQuantity } = useContext(OrderListContext)

    const [item, setItem] = useState(inOrderList)
    const [update, setUpdate] = useState(false)


    // const handleIncreaseQuantity = () => {

    //     let id = item.id;
    //     let index = items.findIndex(item => item.id == id)
    //     let matchedItem = items[index]
    //     matchedItem.count += 1;

    //     setItem(matchedItem)
    //     setUpdate(!update)
    // }

    // const handleDecreaseQuantity = () => {

    //     let id = item.id;
    //     let index = items.findIndex(item => item.id == id)
    //     let matchedItem = items[index]

    //     if (matchedItem.count >= 2) {
    //         matchedItem.count -= 1;
    //         setItem(matchedItem)
    //         setUpdate(!update)

    //     } else {
    //         let filteredItems = items.filter(item => item.id != matchedItem.id)
    //         setItems(filteredItems)
    //         setItem({})
    //         toggle(false)
    //     }
    // }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="select-none flex justify-end md:mt-5 ml-2 gap-x-2 items-center text-[#5e6472]">
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