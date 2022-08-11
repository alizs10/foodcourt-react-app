import React, { useContext, useEffect, useId, useRef } from 'react'
import FoodContext from '../../context/FoodContext';

function FoodCategory({ category, selected, parentRef, first, last }) {

  const { setSelectedCategory, selectedCategory } = useContext(FoodContext)

  const foodCatRef = useRef(null)

  // useEffect(() => {

  //   if (selected === "true") {
  //     let position = foodCatRef.current.offsetLeft;
  //     let elementWidth = foodCatRef.current.clientWidth;
  //     let movement = position - elementWidth;
  //     foodCategoriesRef.current.style.scrollBehavior = "smooth";
  //     foodCategoriesRef.current.scrollLeft = (movement);
  //   }

  // }, [selected])


  useEffect(() => {

    if(selectedCategory == category.id)
    {

      let selectedCategoryNode = document.getElementById(`food-category-${selectedCategory}`)
      let currection = (parentRef.current.offsetWidth / 2);

      console.log(currection);
      
      parentRef.current.style.scrollBehavior = "smooth";
      parentRef.current.scrollLeft = selectedCategoryNode.offsetLeft - currection;
    }

  }, [selectedCategory])


  const handleSelectingCategory = () => {
  
    setSelectedCategory(category.id)
  
    let targetCategory = document.getElementById(`food-container-${category.id}`);

    let position = targetCategory.offsetTop;
    let currection;

    if (position > window.scrollY) {
      currection = 200;
    } else {
      currection = 300;
    }

    window.scrollTo({ top: position - currection, behavior: 'smooth' });
  }

  return (
    <div onClick={handleSelectingCategory} ref={foodCatRef} id={`food-category-${category.id}`} className={`min-w-[5rem] md:min-w-[7rem] ${first && 'mr-[40vw]'} ${last && 'ml-[40vw]'} h-24 md:h-32 flex-center flex-col gap-y-2 rounded-lg ${selected === "true" ? "bg-[#B3C581] h-28 md:h-36" : "bg-white/40 transition-all duration-500 hover:mt-2 hover:bg-white/60"} p-3 cursor-pointer`}>
      <img className='w-2/3' src={category.img} />
      <span className="text-[12px] md:text-[15px]">{category.name}</span>
    </div>
  )
}

export default FoodCategory