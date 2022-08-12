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
      <OrderListContext.Provider value={{ items, setItems, handleAddToList }}>
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