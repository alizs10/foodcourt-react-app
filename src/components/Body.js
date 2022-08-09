import React, { useState } from 'react'
import FoodContext from '../context/FoodContext';
import BackDrop from './BackDrop';
import FoodsContainer from './BodyContents/FoodsContainer';
import FoodWindow from './BodyContents/FoodWindow';

function Body() {

  const [foodWindowVisibility, setFoodWindowVisibility] = useState(false)
  const [food, setFood] = useState({})

  const foods = [
    {
      name: "پیتزا پپرونی",
      price: "120000",
      ingredients: "گوجه، پنیر پیترا، نان",
      img: "./assets/pizza-logo.png",
      isAvailable: true
    },
    {
      name: "پیتزا خوب",
      price: "220000",
      ingredients: "گوجه، پنیر پیترا، نان",
      img: "./assets/pizza-logo.png",
      isAvailable: false
    },
    {
      name: "پیتزا بد",
      price: "80000",
      ingredients: "گوجه، پنیر پیترا، نان",
      img: "./assets/pizza-logo.png",
      isAvailable: true
    },
  ];


  return (
    <FoodContext.Provider value={{
      foodWindowVisibility,
      setFoodWindowVisibility,
      food,
      setFood
    }}>
      <div className='mt-64 mx-auto w-4/5 flex flex-col gap-y-3'>

        <FoodsContainer title="فست فود ها" foods={foods} />
        <FoodsContainer title="فست فود ها" foods={foods} />
        <FoodsContainer title="فست فود ها" foods={foods} />

        <BackDrop toggler={foodWindowVisibility} handleClick={() => setFoodWindowVisibility(false)}>
          <FoodWindow food={food} />
        </BackDrop>
      </div>
    </FoodContext.Provider>
  )
}

export default Body