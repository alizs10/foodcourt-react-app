import React, { useState } from "react";

import Body from "./components/Body";
import Head from "./components/Head";
import OrderListContainer from "./components/OrderListContainer";
import FoodContext from "./context/FoodContext";
import OrderListContext from "./context/OrderListContext";
import { generateId } from "./Helper/helpers";

function App() {

  const [items, setItems] = useState([])

  const [foodWindowVisibility, setFoodWindowVisibility] = useState(false)
  const [food, setFood] = useState({})

  const [selectedCategory, setSelectedCategory] = useState("1")
  const [shouldScroll, setShouldScroll] = useState(false)

  const [update, setUpdate] = useState(false)

  const handleIncreaseQuantity = (item) => {

    let id = item.id;
    let index = items.findIndex(item => item.id == id)
    let matchedItem = items[index]
    matchedItem.count += 1;

    setUpdate(!update)
  }

  const handleDecreaseQuantity = (item) => {

    let id = item.id;
    let index = items.findIndex(item => item.id == id)
    let matchedItem = items[index]

    if (matchedItem.count >= 2) {
      matchedItem.count -= 1;
      setUpdate(!update)

    } else {
      let filteredItems = items.filter(item => item.id != matchedItem.id)
      setItems(filteredItems)
    }
  }



  const handleAddToList = (food) => {


    const newItem = {
      id: generateId(),
      food,
      catId: food.catId,
      count: 1
    }

    setItems([...items, newItem])
  }

  return (
    <>
      <OrderListContext.Provider value={{
        items, setItems, handleAddToList,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        update
      }}>
        <FoodContext.Provider value={{
          foodWindowVisibility,
          setFoodWindowVisibility,
          food,
          setFood,
          selectedCategory,
          setSelectedCategory,
          shouldScroll,
          setShouldScroll
        }}>
          <OrderListContainer />
          <Head />
          <Body />
        </FoodContext.Provider>
      </OrderListContext.Provider>
    </>
  );
}

export default App;