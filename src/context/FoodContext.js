import React from 'react';

const FoodContext = React.createContext({
    foodWindowVisibility: false,    
    setFoodWindowVisibility: () => {},
    food: {},
    setFood: () => {},
    selectedCategory: "",
    setSelectedCategory: () => {},
    shouldScroll: false,
    setShouldScroll: () => {}
})


export default FoodContext;