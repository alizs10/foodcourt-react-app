import React, { useContext, useState } from 'react'
import { showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter';

import { motion, AnimatePresence } from 'framer-motion';
import FoodContext from '../../context/FoodContext';

function Food({ food }) {

  const { setFood, setFoodWindowVisibility } = useContext(FoodContext)

  const [inOrderList, setInOrderList] = useState(true);

  const handleShowFoodWindow = () => {
    setFood(food)
    setFoodWindowVisibility(true);
  }

  return (
    <div onClick={() => handleShowFoodWindow()} className={food.isAvailable ? "col-span-2 md:col-span-1 grid grid-cols-5 cursor-pointer bg-[#E6DBB3]/60 p-3 rounded-lg gap-x-2 transition-all duration-500 hover:bg-[#E6DBB3]/80" : "food-unavailable"}>
      <img className='col-span-2 rounded-lg' src={food.img} />
      <div className='col-span-3 flex flex-col gap-y-2'>
        <span className='text-lg font-bold'>{food.name}</span>
        <span className='mt-4'>محتویات: {food.ingredients}</span>
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
                  <button onClick={e => {
                    e.stopPropagation()
                    setInOrderList(true)
                  }} className='select-none px-2 ml-2 mt-5 text-[#ff9f1c] font-bold py-1 border-b-4 border-[#ff9f1c] transition-all duration-500 hover:text-[#6c757d] hover:border-[#6c757d]'>ثبت سفارش</button>
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
    </div>
  )
}

export default Food