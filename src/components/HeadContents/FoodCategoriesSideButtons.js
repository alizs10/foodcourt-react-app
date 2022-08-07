import React from 'react'

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

function FoodCategoriesSideButtons({ children, isScrollable, handleScrollLeft, handleScrollRight }) {

    return (
        <div className="flex items-center justify-evenly">
            {isScrollable ? (
                <button className="text-3xl text-white" onClick={handleScrollRight}>
                    <RightCircleOutlined />
                </button>
            ) : null}
            {children}

            {isScrollable ? (
                <button className="text-3xl text-white" onClick={handleScrollLeft}>
                    <LeftCircleOutlined />
                </button>
            ) : null}
        </div>
    )
}

export default FoodCategoriesSideButtons