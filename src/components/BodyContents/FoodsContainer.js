import React, { useContext, useEffect, useRef, useState } from 'react'
import FoodContext from '../../context/FoodContext'
import Food from './Food'

function FoodsContainer({ title, foods, catId }) {

    const foodsContainerRef = useRef(null)

    const { selectedCategory, setSelectedCategory, shouldScroll, setShouldScroll } = useContext(FoodContext)


    const [pageY, setPageY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll)

        return () => window.removeEventListener('scroll', handleWindowScroll)
    }, [])

    const handleWindowScroll = () => {
        setPageY(window.scrollY)
    }

    useEffect(() => {

        let currection;
        if (pageY > window.scrollY) {
            currection = 200;
        } else {
            currection = 300;
        }


        if (pageY - currection == foodsContainerRef.current.offsetTop) {
            setSelectedCategory(catId)
        }

    }, [pageY])


    return (
        <div ref={foodsContainerRef} id={`food-container-${catId}`} className='py-3'>
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
                    <Food food={food} catId={catId} key={food.id} />
                ))}
            </div>

        </div>
    )
}

export default FoodsContainer