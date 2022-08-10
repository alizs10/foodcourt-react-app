import React, { useContext, useEffect, useRef } from 'react'
import FoodContext from '../../context/FoodContext';

function FoodCategory({ category, selected, foodCategoriesRef }) {

  const {setSelectedCategory} = useContext(FoodContext)

  const foodCatRef = useRef(null)

  useEffect(() => {

    if (selected === "true") {
      let position = foodCatRef.current.offsetLeft;
      let elementWidth = foodCatRef.current.clientWidth;
      let movement = position - elementWidth;
      foodCategoriesRef.current.style.scrollBehavior = "smooth";
      foodCategoriesRef.current.scrollLeft = (movement);
    }

  }, [selected])

  return (
    <div onClick={() => setSelectedCategory(category.id)} ref={foodCatRef} className={`min-w-[5rem] md:min-w-[7rem] h-24 md:h-32 flex-center flex-col gap-y-2 rounded-lg ${selected === "true" ? "bg-[#B3C581] h-28 md:h-36" : "bg-white/40 transition-all duration-500 hover:mt-2 hover:bg-white/60"} p-3 cursor-pointer`}>
      <img className='w-2/3' src={category.img} />
      <span className="text-[12px] md:text-[15px]">{category.name}</span>
    </div>
  )
}

export default FoodCategory