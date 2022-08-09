import { motion,AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter'

function FoodWindow({ food }) {

  const [inOrderList, setInOrderList] = useState(true);
  

  return (
    <div
    onClick={e => e.stopPropagation()}
    className="absolute z-50 flex flex-col gap-y-4 top-0 bottom-0 left-1/3 p-3 w-1/3 bg-[#DDE5B6] shadow-md">
      <img className='w-5/6 self-center' src={food.img} />

      <span className="font-bold text-xl">{food.name}</span>
      <span className="text-base">محتویات: {food.ingredients}</span>
      {food.isAvailable ? (

        <>
          <span>{showPersianPrice(food.price)} <span className='text-[12px] text-[#6c757d] inline-block -rotate-90'>تومان</span></span>
          <AnimatePresence>
            {inOrderList ? (
              <FoodCounter toggle={setInOrderList} />
            ) : (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex justify-end'>
                <button onClick={() => setInOrderList(true)} className='select-none px-2 ml-2 mt-5 text-[#ff9f1c] font-bold py-1 border-b-4 border-[#ff9f1c] transition-all duration-500 hover:text-[#6c757d] hover:border-[#6c757d]'>ثبت سفارش</button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (

        <div className='flex justify-end'>
          <button className='px-6 ml-5 -rotate-12 mt-10 font-bold py-1 border-4 border-black'>تمام شد</button>
        </div>

      )}

    </div>
  )
}

export default FoodWindow