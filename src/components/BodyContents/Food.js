import React, { useContext, useEffect, useState } from 'react'
import { generateId, isInList, showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter';

import { motion, AnimatePresence } from 'framer-motion';
import FoodContext from '../../context/FoodContext';
import OrderListContext from '../../context/OrderListContext';

function Food({ food, catId }) {

  const { setFood, setFoodWindowVisibility } = useContext(FoodContext)
  const { items, setItems } = useContext(OrderListContext)

  const [inOrderList, setInOrderList] = useState(false);
  const [count, setCount] = useState("1");

  useEffect(() => {

    let res = isInList(food.id, catId, items);
    if (res) {
      console.log(res);
      setInOrderList(res)
      setCount(res.count.toString())
    } else {
      setInOrderList(res)
      setCount(1)
    }

  }, [items])

  const handleShowFoodWindow = () => {
    setFood(food)
    setFoodWindowVisibility(true);
  }

  const handleAddToList = () => {

    
    const newItem = {
      id: generateId(),
      food,
      catId,
      count: 1
    }

    setItems([...items, newItem])
    setInOrderList(newItem)
  }

  return (
    <div onClick={() => handleShowFoodWindow()} className={food.isAvailable ? "col-span-2 md:col-span-1 grid grid-cols-5 cursor-pointer bg-[#E6DBB3]/60 p-1 md:p-3 rounded-lg gap-x-2 transition-all duration-500 hover:bg-[#E6DBB3]/80" : "food-unavailable"}>
      <div className="col-span-2 text-center">
        <img className='w-full h-36 md:h-44 object-cover rounded-lg' src={food.img} />

      </div>
      <div className='col-span-3 flex flex-col gap-y-2'>
        <span className='text-sm md:text-lg font-bold'>{food.name}</span>
        <span className='mt-4 text-xs md:text-sm'>محتویات: {food.ingredients}</span>
        {food.isAvailable ? (

          <>
            <span className="text-sm md:text-base">{showPersianPrice(food.price)} <span className='text-[10px] pl-1 md:text-[12px] text-[#6c757d] inline-block -rotate-90'>تومان</span></span>
            <AnimatePresence>
              {inOrderList ? (
                <FoodCounter inOrderList={inOrderList} toggle={setInOrderList} />
              ) : (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='flex justify-end'>
                  <button onClick={e => {
                    e.stopPropagation()
                    handleAddToList()
                  }} className='select-none px-2 ml-2 md:mt-5 text-[#ff9f1c] font-bold py-1 border-b-4 border-[#ff9f1c] transition-all duration-500 hover:text-[#6c757d] hover:border-[#6c757d]'>ثبت سفارش</button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (

          <div className='flex justify-end mb-4'>
            <div className='px-3 md:px-6 ml-2 md:ml-5 -rotate-12 mt-5 md:mt-10 text-xs md:text-base font-bold py-1 border-2 md:border-4 border-black'>تمام شد</div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Food