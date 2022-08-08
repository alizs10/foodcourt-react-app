import React from 'react'

function FoodCategory({name, img, selected}) {
  return (
    <div className={`min-w-[7rem] h-32 flex-center flex-col gap-y-2 rounded-lg ${selected === "true" ? "bg-[#B3C581] h-36" : "bg-white/40 transition-all duration-500 hover:mt-2 hover:bg-white/60"} p-3 cursor-pointer`}>
        <img className='w-16' src={img} />
        <span className="text-xxl">{name}</span>
    </div>
  )
}

export default FoodCategory