import React from 'react'

function OrderListButton() {
    return (
        <div className="relative">
            <div className="fixed z-10 top-5 left-5 px-3 py-2 cursor-pointer rounded-lg bg-white text-[#5e6472] flex-center transition-all duration-500 hover:scale-110">
                <i class="fa-regular fa-clipboard-list text-xl"></i>
            </div>
            <span className="fixed z-20 top-12 left-12 p-2 flex-center rounded-full h-6 w-6 bg-red-600 text-white text-xs">۲</span>
        </div>
    )
}

export default OrderListButton