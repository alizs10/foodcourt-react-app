import React, { useState } from "react";

import Body from "./components/Body";
import Head from "./components/Head";
import OrderListContainer from "./components/OrderListContainer";
import FoodContext from "./context/FoodContext";
import OrderListContext from "./context/OrderListContext";

function App() {

  const [items, setItems] = useState([])

  const [foodWindowVisibility, setFoodWindowVisibility] = useState(false)
  const [food, setFood] = useState({})

  const [selectedCategory, setSelectedCategory] = useState("1")
  const [shouldScroll, setShouldScroll] = useState(false)
  

  return (
    <>
      <OrderListContext.Provider value={{ items, setItems }}>
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