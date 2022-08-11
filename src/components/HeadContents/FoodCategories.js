import React, { useContext, useEffect } from 'react'
import FoodContext from '../../context/FoodContext';
import { data } from '../../store/AppData'
import FoodCategory from './FoodCategory'

function FoodCategories({ foodCategoriesRef }) {

  const categories = data;

  const { selectedCategory } = useContext(FoodContext)

  return (

    <div ref={foodCategoriesRef} className="w-4/5 flex flex-nowrap gap-x-4 md:gap-x-8 overflow-x-scroll py-2 noscrollbar">

      {categories.map((cat, index) => {
        let first = index == 0 ? true : false;
        let last = index == categories.length - 1 ? true : false;
        return <FoodCategory key={cat.id} parentRef={foodCategoriesRef} first={first} last={last} category={cat} selected={selectedCategory == cat.id ? "true" : "false"} />
      })}

    </div>
  )
}

export default FoodCategories