import React, { useState } from 'react'
import FoodContext from '../context/FoodContext';
import { data } from '../store/AppData';
import BackDrop from './BackDrop';
import FoodsContainer from './BodyContents/FoodsContainer';
import FoodWindow from './BodyContents/FoodWindow';

function Body() {

  const [foodWindowVisibility, setFoodWindowVisibility] = useState(false)
  const [food, setFood] = useState({})


  const categories = data;

  return (
    <FoodContext.Provider value={{
      foodWindowVisibility,
      setFoodWindowVisibility,
      food,
      setFood
    }}>
      <div className='mt-44 md:mt-64 mx-auto w-4/5 flex flex-col gap-y-2 md:gap-y-3'>

        {categories.map((category) => (
          <FoodsContainer key={category.id} title={category.name} foods={category.foods} />
        ))}


        <BackDrop toggler={foodWindowVisibility} handleClick={() => setFoodWindowVisibility(false)}>
          <FoodWindow food={food} toggle={setFoodWindowVisibility} />
        </BackDrop>
      </div>
    </FoodContext.Provider>
  )
}

export default Body