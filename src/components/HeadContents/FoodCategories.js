import React, { useContext, useEffect } from 'react'
import FoodContext from '../../context/FoodContext';
import { data } from '../../store/AppData'
import FoodCategory from './FoodCategory'

function FoodCategories({ foodCategoriesRef }) {

  const categories = data;

  const { selectedCategory } = useContext(FoodContext)

  return (

    <div ref={foodCategoriesRef} className="w-4/5 px-[28rem] flex flex-nowrap gap-x-4 md:gap-x-8 overflow-x-scroll p-2 noscrollbar">

      {categories.map(cat => (
        <FoodCategory key={cat.id} parentRef={foodCategoriesRef} category={cat} selected={selectedCategory == cat.id ? "true" : "false"} />
      ))}

    </div>
  )
}

export default FoodCategories