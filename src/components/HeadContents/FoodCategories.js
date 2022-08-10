import React from 'react'
import { data } from '../../store/AppData'
import FoodCategory from './FoodCategory'

function FoodCategories({foodCategoriesRef}) {

  const categories = data;


  return (
    <div ref={foodCategoriesRef} className="w-4/5 flex flex-nowrap gap-x-4 md:gap-x-8 overflow-x-scroll p-2 noscrollbar">
       
       {categories.map(cat => (
         <FoodCategory name={cat.name} img={cat.img} foodCategoriesRef={foodCategoriesRef} selected="false"/>
       ))}
       
    </div>
  )
}

export default FoodCategories