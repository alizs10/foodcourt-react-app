import React, { useState } from 'react'
import FoodContext from '../context/FoodContext';
import BackDrop from './BackDrop';
import FoodsContainer from './BodyContents/FoodsContainer';
import FoodWindow from './BodyContents/FoodWindow';

function Body() {

  const [foodWindowVisibility, setFoodWindowVisibility] = useState(false)
  const [food, setFood] = useState({})


  const categories = [
    {
      id: "1",
      name: "پیتزا ها",
      foods: [
        {
          id: "1",
          name: "پیتزا آمریکایی",
          price: "220000",
          ingredients: "نان، پنیر پیتزا",
          img: "./assets/pizza/pizza-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "پیتزا ایتالیایی",
          price: "240000",
          ingredients: "نان، پنیر پیتزا",
          img: "./assets/pizza/pizza-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "پیتزا",
          price: "200000",
          ingredients: "نان، پنیر پیتزا",
          img: "./assets/pizza/pizza-3.jpg",
          isAvailable: true,
        },
        {
          id: "4",
          name: "پیتزا",
          price: "120000",
          ingredients: "نان، پنیر پیتزا",
          img: "./assets/pizza/pizza-4.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "2",
      name: "سوپ ها",
      foods: [
        {
          id: "1",
          name: "سوپ خامه",
          price: "48000",
          ingredients: "پیاز، آب مرغ، خامه، رب گوجه",
          img: "./assets/soup/soup-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "سوپ بروکلی",
          price: "35000",
          ingredients: "پیاز، آب مرغ، بروکلی",
          img: "./assets/soup/soup-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "سوپ پیاز",
          price: "35000",
          ingredients: "پیاز، آب مرغ",
          img: "./assets/soup/soup-3.jpg",
          isAvailable: true,
        },
        {
          id: "4",
          name: "سوپ شیر",
          price: "62000",
          ingredients: "پیاز، آب مرغ، شیر رب گوجه",
          img: "./assets/soup/soup-4.png",
          isAvailable: true,
        },
      ]
    },
    {
      id: "3",
      name: "برگر ها",
      foods: [
        {
          id: "1",
          name: "برگر",
          price: "78000",
          ingredients: "نان برگر، گوشت ۲۵۰ گرم، گوجه، پیاز",
          img: "./assets/burger/burger-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "برگر",
          price: "99000",
          ingredients: "نان برگر، گوشت ۲۵۰ گرم، گوجه، پیاز",
          img: "./assets/burger/burger-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "برگر",
          price: "110000",
          ingredients: "نان برگر، گوشت ۲۵۰ گرم، گوجه، پیاز",
          img: "./assets/burger/burger-3.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "4",
      name: "پاستا ها",
      foods: [
        {
          id: "1",
          name: "پاستا",
          price: "65000",
          ingredients: "خامه، نودل",
          img: "./assets/pasta/pasta-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "پاستا",
          price: "45000",
          ingredients: "خامه، نودل",
          img: "./assets/pasta/pasta-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "پاستا",
          price: "75000",
          ingredients: "خامه، نودل",
          img: "./assets/pasta/pasta-3.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "5",
      name: "ساندویچ ها",
      foods: [
        {
          id: "1",
          name: "ساندویچ",
          price: "120000",
          ingredients: "نان باگت، کالباس، گوجه، خیارشور",
          img: "./assets/sandwich/sandwich-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "ساندویچ",
          price: "145000",
          ingredients: "نان باگت، کالباس، گوجه، خیارشور",
          img: "./assets/sandwich/sandwich-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "ساندویچ",
          price: "132000",
          ingredients: "نان باگت، کالباس، گوجه، خیارشور",
          img: "./assets/sandwich/sandwich-3.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "6",
      name: "سالاد ها",
      foods: [
        {
          id: "1",
          name: "سالاد",
          price: "32000",
          ingredients: "کاهو، کوجه",
          img: "./assets/salad/salad-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "سالاد",
          price: "45000",
          ingredients: "کاهو، کوجه",
          img: "./assets/salad/salad-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "سالاد",
          price: "48000",
          ingredients: "کاهو، کوجه",
          img: "./assets/salad/salad-3.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "7",
      name: "نوشیدنی ها",
      foods: [
        {
          id: "1",
          name: "کوکاکولا",
          price: "22000",
          ingredients: "کوکاکولا مشکی",
          img: "./assets/drinks/drink-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "لیموناد",
          price: "32000",
          ingredients: "آب گازدار، لیمو، برگ لیمو",
          img: "./assets/drinks/drink-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "پپسی",
          price: "20000",
          ingredients: "پپسی",
          img: "./assets/drinks/drink-3.jpg",
          isAvailable: true,
        },
        {
          id: "4",
          name: "آب انار",
          price: "40000",
          ingredients: "آب، یخ، آب انار، لیموی تازه",
          img: "./assets/drinks/drink-4.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "8",
      name: "دسر ها",
      foods: [
        {
          id: "1",
          name: "کیک شکلاتی",
          price: "45000",
          ingredients: "شکلات، گردو",
          img: "./assets/dessert/dessert-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "کیک شکلاتی",
          price: "40000",
          ingredients: "شکلات، گردو",
          img: "./assets/dessert/dessert-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "کیک شکلاتی",
          price: "55000",
          ingredients: "شکلات، گردو",
          img: "./assets/dessert/dessert-3.jpg",
          isAvailable: true,
        },
      ]
    },
    {
      id: "9",
      name: "نوشیدنی گرم",
      foods: [
        {
          id: "1",
          name: "اسپرسو",
          price: "48000",
          ingredients: "قهوه، شکلات تلخ",
          img: "./assets/coffee/coffee-1.jpg",
          isAvailable: true,
        },
        {
          id: "2",
          name: "شکلات داغ",
          price: "38000",
          ingredients: "آب جوش، شکلات تلخ",
          img: "./assets/coffee/coffee-2.jpg",
          isAvailable: true,
        },
        {
          id: "3",
          name: "چای",
          price: "28000",
          ingredients: "چای معطر",
          img: "./assets/coffee/coffee-3.jpg",
          isAvailable: true,
        },
      ]
    },
    
  ]




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