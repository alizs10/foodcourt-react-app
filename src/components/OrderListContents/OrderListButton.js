import React from 'react'

function OrderListButton({setOrderListVisibility}) {
    return (
        <div className="relative">
            <div onClick={() => setOrderListVisibility(true)} className="fixed z-10 top-5 left-5 px-2 md:px-3 py-1 md:py-2 cursor-pointer rounded-lg bg-white text-[#5e6472] flex-center transition-all duration-500 hover:scale-110">
                <i className="fa-regular fa-clipboard-list text-base md:text-xl"></i>
            </div>
            <span className="fixed z-20 top-10 md:top-12 left-10 md:left-12 p-2 flex-center rounded-full h-4 md:h-6 w-4 md:w-6 bg-red-600 text-white text-[12px] md:text-xs">۲</span>
        </div>
    )
}

export default OrderListButton