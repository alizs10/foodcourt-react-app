import React, { useEffect, useRef, useState } from 'react'

import FoodCategories from './HeadContents/FoodCategories';
import FoodCategoriesSideButtons from './HeadContents/FoodCategoriesSideButtons';

import { motion, AnimatePresence } from "framer-motion"

function Head() {

    let oldScrollY = 0;
    const [isScrollingDown, setIsScrollingDown] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {

        if (window.scrollY > oldScrollY) {
            setIsScrollingDown(true);
        } else {
            setIsScrollingDown(false);
        }

        oldScrollY = window.scrollY;
    }


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

        if (hasScrollbar) {
            setIsScrollable(true)
        } else {

            setIsScrollable(false)
        }

    }, [])

    return (
        <motion.div
            animate={isScrollingDown ? { top: "-100px" } : { top: "0" }}
            className="fixed top-0 left-0 right-0 shadow-lg bg-[#DDE5B6]">
            <div className='flex flex-col gap-4 bg-[#DDE5B6] py-2'>
                <div
                    className="mt-2 mx-auto flex items-center py-2 px-4 rounded-full bg-white gap-2 text-2xl w-fit">
                    <img className='w-12' src='./assets/pizza-logo.png' />
                    <span
                        className='text-[#90A84D] font-bold'>
                        فود کورت
                    </span>
                </div>
            </div>


            <FoodCategoriesSideButtons isScrollable={isScrollable} handleScrollRight={handleScrollRight} handleScrollLeft={handleScrollLeft}>
                <FoodCategories foodCategoriesRef={foodCategoriesRef} />
            </FoodCategoriesSideButtons>

        </motion.div>


    )
}

export default Head