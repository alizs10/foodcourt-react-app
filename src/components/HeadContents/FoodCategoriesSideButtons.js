import React from 'react'

function FoodCategoriesSideButtons({ children, isScrollable, handleScrollLeft, handleScrollRight }) {

    return (
        <div className="flex items-center justify-evenly">
            {isScrollable ? (
                <button className="text-lg md:text-3xl text-white" onClick={handleScrollRight}>
                    <i className="fa-regular fa-circle-right"></i>
                </button>
            ) : null}
            
            {children}

            {isScrollable ? (
                <button className="text-lg md:text-3xl text-white" onClick={handleScrollLeft}>
                    <i className="fa fa-circle-left"></i>
                </button>
            ) : null}
        </div>
    )
}

export default FoodCategoriesSideButtons