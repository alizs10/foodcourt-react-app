import React from 'react'
import FoodsContainer from './BodyContents/FoodsContainer';

function Body() {

  const foods = [
    {
      name: "پیتزا پپرونی",
      price: "120,000T",
      ingredients: ["نان", "پنیر پیزا", "گوجه"],
      img: "./assets/pizza-logo.png"
    },
    {
      name: "پیتزا خوب",
      price: "220,000T",
      ingredients: ["نان", "پنیر پیزا", "گوجه"],
      img: "./assets/pizza-logo.png"
    },
    {
      name: "پیتزا بد",
      price: "80,000T",
      ingredients: ["نان", "پنیر پیزا", "گوجه"],
      img: "./assets/pizza-logo.png"
    },
  ];


  return (
    <div className='mx-auto w-4/5 flex flex-col gap-y-3'>

      <FoodsContainer title="فست فود ها" foods={foods} />
      <FoodsContainer title="فست فود ها" foods={foods} />
      <FoodsContainer title="فست فود ها" foods={foods} />

    </div>
  )
}

export default Body