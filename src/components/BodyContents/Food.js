import React, { useContext, useEffect, useState } from 'react'
import { generateId, isInList, showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter';

import { motion, AnimatePresence } from 'framer-motion';
import FoodContext from '../../context/FoodContext';
import OrderListContext from '../../context/OrderListContext';
import { useInView } from 'react-intersection-observer';
import ImagePlaceholder from './ImagePlaceholder';

function Food({ food, catId }) {

  const { setFood, setFoodWindowVisibility } = useContext(FoodContext)
  const { items, handleAddToList } = useContext(OrderListContext)

  const [inOrderList, setInOrderList] = useState(false);
  const [isImgLoaded, setIsImageLoaded] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: "100px",
    triggerOnce: true,
  });

  useEffect(() => {

    let res = isInList(food.id, catId, items);
    if (res) {

      setInOrderList(res)

    } else {
      setInOrderList(res)

    }

  }, [items])

  const handleShowFoodWindow = () => {
    setFood(food)
    setFoodWindowVisibility(true);
  }


  return (
    <div onClick={() => handleShowFoodWindow()} className={food.isAvailable ? "col-span-2 min-h-min md:h-48 md:col-span-1 flex flex-nowrap cursor-pointer bg-[#E6DBB3]/60 p-1 md:p-3 rounded-lg gap-x-2 transition-all duration-500 hover:bg-[#E6DBB3]/80" : "food-unavailable"}>
      <div ref={ref} className="w-[29vw] h-full md:w-[16vw] text-center">
        {inView && (
          <>
            <img className={`${!isImgLoaded && 'hidden'} w-full h-full object-cover rounded-lg`} src={food.img} onLoad={() => setIsImageLoaded(true)} />
            {!isImgLoaded && (
              <ImagePlaceholder classes="w-full h-full" />
            )}
          </>
        )}

      </div>
      <div className='w-[calc(100%_-_29vw)] md:w-[calc(100%_-_16vw)] flex flex-col gap-y-2'>
        <span className='text-xs md:text-sm lg:text-lg font-bold'>{food.name}</span>
        {food.ingredients && (
          <span className='text-[14px] md:text-xs lg:text-sm'>محتویات: {food.ingredients}</span>
        )}
        {food.isAvailable ? (

          <>
            <span className="text-[14px] md:text-sm lg:text-base">{showPersianPrice(food.price)} <span className='text-[8px] pl-1 md:text-[12px] text-[#6c757d] inline-block -rotate-90'>تومان</span></span>
            <AnimatePresence>
              {inOrderList ? (
                <FoodCounter inOrderList={inOrderList} toggle={setInOrderList} />
              ) : (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='flex justify-end mt-auto'>
                  <button onClick={e => {
                    e.stopPropagation()
                    handleAddToList(food)
                  }} className='select-none text-xs md:text-sm px-2 ml-2 text-[#ff9f1c] font-bold py-1 border-b-2 md:border-b-4 border-[#ff9f1c] transition-all duration-500 hover:text-[#6c757d] hover:border-[#6c757d]'>ثبت سفارش</button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (

          <div className='flex-center my-auto'>
            <div className='px-3 md:px-6 -rotate-12 text-xs md:text-base font-bold py-1 border-2 md:border-4 border-black'>تمام شد</div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Food