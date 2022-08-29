import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext, useEffect, useRef, useState } from 'react'
import OrderListContext from '../../context/OrderListContext'
import { isInList, showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter'

function FoodWindow({ food, toggle }) {

  const { items, handleAddToList } = useContext(OrderListContext)
  const [inOrderList, setInOrderList] = useState(false);

  const foodDetailsContainerRef = useRef(null);
  const foodImg = useRef(null);

  useEffect(() => {

    let res = isInList(food.id, food.catId, items);
    if (res) {

      setInOrderList(res)

    } else {
      setInOrderList(res)

    }

  }, [items])


  const handlePointerDown = (e) => {

    let pointerY = e.pageY;
    let elementY = foodDetailsContainerRef.current.offsetTop;
    let offset = pointerY - elementY;

    function grabbing(e) {
      handleGrabbing(e, offset)
    }

    document.body.addEventListener('pointermove', grabbing)

    document.body.addEventListener('pointerup', function remover() {

      let max = (1/3 * window.innerHeight);
      let min = 2/3 * window.innerHeight;
      let exit = 5/6 * window.innerHeight;

      // set max limit
      if (foodDetailsContainerRef.current.offsetTop < max) {
        foodDetailsContainerRef.current.style.top = `${max}px`;
      }

      //set min limit
      if (foodDetailsContainerRef.current.offsetTop > max && foodDetailsContainerRef.current.offsetTop > min && foodDetailsContainerRef.current.offsetTop < exit) {
        foodDetailsContainerRef.current.style.top = `${min}px`;
        foodImg.current.style.opacity = 1;
        foodImg.current.style.transform = "scale(1)";
      }
      document.body.removeEventListener('pointermove', grabbing)
      document.body.removeEventListener('pointerup', remover)


      if (window.innerHeight - foodDetailsContainerRef.current.offsetTop < 150) {
        toggle(false)
      }
    }

    )
  }

  const handleGrabbing = (e, offset) => {

    let positionY = e.pageY - offset;
    foodDetailsContainerRef.current.style.top = `${positionY}px`;


    if (foodDetailsContainerRef.current.clientHeight > (window.innerHeight - positionY)) {
      let disapearingAmout = ((window.innerHeight - foodDetailsContainerRef.current.offsetTop) / foodDetailsContainerRef.current.clientHeight);

      foodImg.current.style.opacity = disapearingAmout / 3;
      foodImg.current.style.transform = `scale(${3 + (1 - disapearingAmout)}) rotate(${35 + ((1 - disapearingAmout) * 4)}deg)`;
    } else {
      foodImg.current.style.opacity = 1;
      foodImg.current.style.transform = "scale(1)";
    }

  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      className="cursor-grab overflow-hidden relative h-full grid grid-rows-3 md:w-2/5 w-full bg-[#DDE5B6] shadow-md">
      <div className="row-span-2 select-none">
        <img ref={foodImg} className='w-full h-full object-cover pointer-events-none transition-all' src={food.img} />
      </div>

      <div className='row-span-1 bg-white'>
        <div ref={foodDetailsContainerRef} onPointerDown={e => {
          e.stopPropagation()
          handlePointerDown(e)
        }} className="absolute select-none touch-none flex flex-col gap-y-2 bottom-26 min-h-fit left-0 w-full rounded-t-3xl p-3 bg-white">

          <span className="w-1/5 h-1 bg-black/40 rounded-full self-center"></span>
          <span className="font-bold text-xl">{food.name}</span>
          {food.ingredients && (
          <span className="text-base">محتویات: {food.ingredients}</span>
        )}
          
          {food.isAvailable ? (

            <>
              <span>{showPersianPrice(food.price)} <span className='text-[12px] text-[#6c757d] inline-block -rotate-90'>تومان</span></span>
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
                      handleAddToList(food)
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

    </div>
  )
}

export default FoodWindow