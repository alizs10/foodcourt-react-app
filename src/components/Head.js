import React, { useEffect, useRef, useState } from 'react'

import FoodCategories from './HeadContents/FoodCategories';
import FoodCategoriesSideButtons from './HeadContents/FoodCategoriesSideButtons';

function Head() {

    const [isScrollable, setIsScrollable] = useState(false)

    const handleScrollRight = () => {
        let childs = foodCategoriesRef.current.children.length;
        let scrollAmount = Math.round(foodCategoriesRef.current.clientWidth / childs * 3)
        let scrollPosition = foodCategoriesRef.current.scrollLeft;
        foodCategoriesRef.current.style.scrollBehavior = "smooth";
        foodCategoriesRef.current.scrollLeft = (scrollPosition + scrollAmount);
    }
    const handleScrollLeft = () => {
        let childs = foodCategoriesRef.current.children.length;
        let scrollAmount = Math.round(foodCategoriesRef.current.clientWidth / childs * 3)
        let scrollPosition = foodCategoriesRef.current.scrollLeft;
        foodCategoriesRef.current.style.scrollBehavior = "smooth";
        foodCategoriesRef.current.scrollLeft = (scrollPosition - scrollAmount);
    }

    const foodCategoriesRef = useRef(null)

    useEffect(() => {
        let hasScrollbar = foodCategoriesRef.current.scrollWidth > foodCategoriesRef.current.clientWidth;
        
        if(hasScrollbar){
            setIsScrollable(true)
        } else {

            setIsScrollable(false)
        }

    }, [])

    return (
        <div className='flex flex-col gap-4 h-72 bg-[#DDE5B6] py-4'>
            <div className='mx-auto flex items-center py-2 px-4 rounded-full bg-white gap-2 text-2xl w-fit'>
                <img className='w-12' src='./assets/pizza-logo.png' />
                <span className='text-[#90A84D] font-bold'>
                    فوت کورت
                </span>
            </div>

            <FoodCategoriesSideButtons isScrollable={isScrollable} handleScrollRight={handleScrollRight} handleScrollLeft={handleScrollLeft}>
                <FoodCategories foodCategoriesRef={foodCategoriesRef} />
            </FoodCategoriesSideButtons>
        </div>
    )
}

export default Head