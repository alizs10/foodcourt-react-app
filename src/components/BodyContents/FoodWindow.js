import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { showPersianPrice } from '../../Helper/helpers'
import FoodCounter from './FoodCounter'

function FoodWindow({ food, toggle }) {

  const [inOrderList, setInOrderList] = useState(true);

  const foodDetailsContainerRef = useRef(null);
  const foodImg = useRef(null);

  const handlePointerDown = (e) => {

    let pointerY = e.pageY;
    let elementY = foodDetailsContainerRef.current.offsetTop;
    let offset = pointerY - elementY;

    function grabbing(e) {
      handleGrabbing(e, offset)
    }

    document.body.addEventListener('pointermove', grabbing)

    document.body.addEventListener('pointerup', function remover() {

      if (foodDetailsContainerRef.current.offsetTop < foodDetailsContainerRef.current.clientHeight) {
        foodDetailsContainerRef.current.style.top = `${foodDetailsContainerRef.current.clientHeight}px`;
      }
      document.body.removeEventListener('pointermove', grabbing)
      document.body.removeEventListener('pointerup', remover)


      if (foodDetailsContainerRef.current.clientHeight > (window.innerHeight - foodDetailsContainerRef.current.offsetTop)) {
        toggle(false)
      }
    }

    )
  }

  const handleGrabbing = (e, offset) => {

    let positionY = e.pageY - offset;
    foodDetailsContainerRef.current.style.top = `${positionY}px`;


    if (foodDetailsContainerRef.current.clientHeight > (window.innerHeight - positionY)) {
      let disapearingAmout = ((window.innerHeight - foodDetailsContainerRef.current.offsetTop)/foodDetailsContainerRef.current.clientHeight);
      
      foodImg.current.style.opacity = disapearingAmout/3;
      // foodImg.current.style.transform = `rotate(${3 + (1 - disapearingAmout)}deg) scale(${3 + (1 - disapearingAmout)})`;
      foodImg.current.style.transform = `scale(${3 + (1 - disapearingAmout)}) rotate(${35 + ((1 - disapearingAmout) * 4)}deg)`;
    } else {
      foodImg.current.style.opacity = 1;
      foodImg.current.style.transform = "scale(1)";
    }

  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      className="cursor-grab overflow-hidden absolute z-50 grid grid-rows-3 top-0 bottom-0 left-0 md:left-1/3 w-full md:w-1/3 bg-[#DDE5B6] shadow-md">
      <div className="row-span-2 select-none">
        <img ref={foodImg} className='w-full pointer-events-none transition-all' src={food.img} />
      </div>

      <div className='row-span-1 bg-white'>
        <div ref={foodDetailsContainerRef} onPointerDown={e => handlePointerDown(e)} className="absolute select-none flex flex-col gap-y-2 bottom-0 h-fit left-0 w-full rounded-t-3xl p-3 bg-white">

          <span className="w-1/5 h-1 bg-black/40 rounded-full self-center"></span>
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
      </div>

    </div>
  )
}

export default FoodWindow