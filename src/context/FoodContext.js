import React from 'react';

const FoodContext = React.createContext({
    foodWindowVisibility: false,    
    setFoodWindowVisibility: () => {},
    food: {},
    setFood: () => {},
    selectedCategory: "",
    setSelectedCategory: () => {},
})


export default FoodContext;