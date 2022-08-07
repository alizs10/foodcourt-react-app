import React from 'react'

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

function FoodCategoriesSideButtons({ children, handleScrollLeft, handleScrollRight }) {

    return (
        <div className="flex items-center justify-evenly">
            <button className="text-3xl text-white" onClick={handleScrollRight}>
                <RightCircleOutlined />
            </button>
            {children}
            <button className="text-3xl text-white" onClick={handleScrollLeft}>
                <LeftCircleOutlined />
            </button>
        </div>
    )
}

export default FoodCategoriesSideButtons