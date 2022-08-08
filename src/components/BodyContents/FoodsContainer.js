import React from 'react'
import Food from './Food'

function FoodsContainer({ title, foods }) {
    return (
        <div className='py-3'>
            <span className="py-3 block text-center text-base">{title}</span>

            <div className="grid grid-cols-2 gap-2">
                {foods.map(food => (
                    <Food food={food} />
                ))}
            </div>

        </div>
    )
}

export default FoodsContainer