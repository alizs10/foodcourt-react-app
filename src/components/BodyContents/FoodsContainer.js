import React from 'react'
import Food from './Food'

function FoodsContainer({ title, foods }) {
    return (
        <div className='py-3'>
            <span className="flex items-center mx-auto w-fit gap-x-2 py-3 text-base text-[#5e6472]">
                <div className='flex'>
                    <i className="fa fa-star text-[10px]"></i>
                    <i className="fa fa-star text-[10px]"></i>
                    <i className="fa fa-star text-[10px]"></i>
                </div>
                {title}
                <div className='flex'>
                    <i className="fa fa-star text-[10px]"></i>
                    <i className="fa fa-star text-[10px]"></i>
                    <i className="fa fa-star text-[10px]"></i>
                </div>
            </span>

            <div className="grid grid-cols-2 gap-2">
                {foods.map(food => (
                    <Food food={food} />
                ))}
            </div>

        </div>
    )
}

export default FoodsContainer