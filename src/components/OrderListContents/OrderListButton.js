import React, { useContext } from 'react'
import OrderListContext from '../../context/OrderListContext'
import { e2pNumbers } from '../../Helper/helpers'

function OrderListButton({ setOrderListVisibility }) {

    const { items } = useContext(OrderListContext)

    return (
        <div className="relative">
            <div onClick={() => setOrderListVisibility(true)} className="fixed z-30 top-5 left-5 px-2 md:px-3 py-1 md:py-2 cursor-pointer rounded-lg bg-white text-[#5e6472] flex-center transition-all duration-500 hover:scale-110">
                <i className="fa-regular fa-clipboard-list text-base md:text-xl"></i>
            </div>
            {items.length > 0 && (

                <span className="fixed z-40 top-10 md:top-12 left-10 md:left-12 p-2 flex-center rounded-full h-4 md:h-6 w-4 md:w-6 bg-red-600 text-white text-[12px] md:text-xs">
                    {e2pNumbers(items.length.toString())}
                </span>
            )}
        </div>
    )
}

export default OrderListButton