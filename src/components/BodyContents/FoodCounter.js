import React, { useState } from 'react'

import { e2pNumbers } from '../../Helper/helpers'

import { motion} from 'framer-motion';
 
function FoodCounter({ toggle }) {

    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
            toggle(false)
        }
    }

    return (
        <motion.div        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="select-none flex justify-end mt-5 ml-2 gap-x-2 items-center text-[#5e6472]">
            <span onClick={() => handleIncreaseQuantity()} className="fa fa-plus p-2"></span>
            <span className="font-bold w-10 text-center">{e2pNumbers(quantity.toString())}</span>
            <span onClick={() => handleDecreaseQuantity()} className="fa fa-trash p-2"></span>
        </motion.div>
    )
}

export default FoodCounter