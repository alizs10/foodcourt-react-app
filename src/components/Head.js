import React, { useEffect, useRef, useState } from 'react'

import FoodCategories from './HeadContents/FoodCategories';
import FoodCategoriesSideButtons from './HeadContents/FoodCategoriesSideButtons';

import { motion } from "framer-motion"

function Head() {

    let oldScrollY = 0;
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [isScrollable, setIsScrollable] = useState(false)


    const logoRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const handleResize = () => {

            if (foodCategoriesRef.current.scrollWidth > (4 / 5 * window.innerWidth)) {
                setIsScrollable(true)
            } else {
                setIsScrollable(false)
            }

            console.log(foodCategoriesRef.current.scrollWidth > (4 / 5 * window.innerWidth));
        }
        window.addEventListener('resize', handleResize)

        return () => {

            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }


    }, []);

    const handleScroll = () => {

        if (window.scrollY - oldScrollY > 50) {
            setIsScrollingDown(true);
        }

        if ((oldScrollY - window.scrollY > 50)) {
            setIsScrollingDown(false);
        }

        if (Math.abs(window.scrollY - oldScrollY) > 50) {
            oldScrollY = window.scrollY;
        }
    }


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



    return (
        <motion.div
            animate={isScrollingDown ? { top: `-${logoRef.current.clientHeight}px` } : { top: "0" }}
            transition={{bounce: "none"}}
            className="fixed top-0 left-0 right-0 z-10 shadow-lg bg-[#DDE5B6]">
            <div ref={logoRef} className='flex flex-col gap-4 bg-[#DDE5B6] py-2'>
                <div
                    className="mt-2 mx-auto flex items-center py-2 px-4 rounded-full bg-white gap-2 text-2xl w-fit">
                    <img className='w-5 md:w-8' src='./assets/limon-logo.png' />
                    <span
                        className='text-[#90A84D] font-bold text-sm md:text-xl'>
                        فود کورت لیمو
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