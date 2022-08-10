import React, { useContext, useEffect, useRef } from 'react'
import FoodContext from '../../context/FoodContext'
import Food from './Food'

function FoodsContainer({ title, foods, catId }) {

    const foodsContainerRef = useRef(null)

    const { selectedCategory } = useContext(FoodContext)

    useEffect(() => {

        if (catId == selectedCategory) {
            let position = foodsContainerRef.current.offsetTop;
            let currection;

            if (position > window.scrollY) {
                currection = 200;
            } else {
                currection = 300;
            }

            window.scrollTo({ top: position - currection, behavior: 'smooth' });
        }

    }, [selectedCategory])

    return (
        <div ref={foodsContainerRef} className='py-3'>
            <span className="flex items-center mx-auto w-fit gap-x-2 py-3 text-xs md:text-base text-[#5e6472]">
                <div className='flex'>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                </div>
                {title}
                <div className='flex'>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                    <i className="fa fa-star text-[8px] md:text-[10px]"></i>
                </div>
            </span>

            <div className="grid grid-cols-2 gap-2">
                {foods.map(food => (
                    <Food food={food} key={food.id} />
                ))}
            </div>

        </div>
    )
}

export default FoodsContainer