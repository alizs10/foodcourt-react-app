import React from 'react'
import FoodsContainer from './BodyContents/FoodsContainer';

function Body() {

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
    <div className='mt-64 mx-auto w-4/5 flex flex-col gap-y-3'>

      <FoodsContainer title="فست فود ها" foods={foods} />
      <FoodsContainer title="فست فود ها" foods={foods} />
      <FoodsContainer title="فست فود ها" foods={foods} />

    </div>
  )
}

export default Body