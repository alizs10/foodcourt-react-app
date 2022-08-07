import React from 'react'
import FoodCategory from './FoodCategory'

function FoodCategories({foodCategoriesRef}) {
  return (
    <div ref={foodCategoriesRef} className="w-4/5 mt-4 flex flex-nowrap gap-x-8 overflow-x-scroll p-2 noscrollbar">
        <FoodCategory name="فست فود" img="./assets/pizza-logo.png" selected="false"/>
        <FoodCategory name="فست فود" img="./assets/pizza-logo.png" selected="false"/>
        <FoodCategory name="فست فود" img="./assets/pizza-logo.png" selected="true"/>
        <FoodCategory name="فست فود" img="./assets/pizza-logo.png" selected="false"/>
        <FoodCategory name="فست فود" img="./assets/pizza-logo.png" selected="false"/>
       
    </div>
  )
}

export default FoodCategories