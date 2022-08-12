import React, { useContext, useState } from 'react'
import FoodContext from '../context/FoodContext';
import { data } from '../store/AppData';
import BackDrop from './BackDrop';
import FoodsContainer from './BodyContents/FoodsContainer';
import FoodWindow from './BodyContents/FoodWindow';

function Body() {


  const { foodWindowVisibility,
    setFoodWindowVisibility,
    food } = useContext(FoodContext)

  const categories = data;

  return (

    <div className='mt-44 pb-20 md:mt-64 mx-2 md:mx-auto md:w-4/5 flex flex-col gap-y-2 md:gap-y-3'>

      {categories.map((category) => (
        <FoodsContainer key={category.id} catId={category.id} title={category.name} foods={category.foods} />
      ))}


      <BackDrop toggler={foodWindowVisibility} handleClick={() => setFoodWindowVisibility(false)}>
        <FoodWindow food={food} toggle={setFoodWindowVisibility} />
      </BackDrop>
    </div>

  )
}

export default Body