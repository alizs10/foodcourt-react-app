import React from 'react'

function Food({food}) {
  return (
    <div className="col-span-1 bg-[#E6DBB3] p-3 rounded-lg flex items-start gap-x-2">
        <img className='w-1/4 rounded-lg' src={food.img}/>
        <div className='flex flex-col gap-y-2'>
            <span>{food.name}</span>
            <span>محتویات: {food.ingredients.map(ingredient => (ingredient + "، "))}</span>
            <span>{food.price}</span>
        </div>
    </div>
  )
}

export default Food