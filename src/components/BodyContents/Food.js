import React from 'react'
import { showPersianPrice } from '../../Helper/helpers'

function Food({ food }) {
  return (
    <div className={food.isAvailable ? "col-span-1 grid grid-cols-5 cursor-pointer bg-[#E6DBB3]/60 p-3 rounded-lg gap-x-2 transition-all duration-500 hover:bg-[#E6DBB3]/80" : "food-unavailable"}>
      <img className='col-span-2 rounded-lg' src={food.img} />
      <div className='col-span-3 flex flex-col gap-y-2'>
        <span className='text-lg font-bold'>{food.name}</span>
        <span className='mt-4'>محتویات: {food.ingredients}</span>
        {food.isAvailable && (
          <>
            <span>{showPersianPrice(food.price)} <span className='text-[12px] text-[#6c757d] inline-block -rotate-90'>تومان</span></span>

            <div className='flex justify-end'>
              <button className='px-2 mt-5 text-[#ff9f1c] font-bold py-1 border-b-4 border-[#ff9f1c] transition-all duration-500 hover:text-[#6c757d] hover:border-[#6c757d]'>ثبت سفارش</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Food