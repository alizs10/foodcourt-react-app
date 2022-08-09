import React from 'react'

import { motion } from "framer-motion"

function OrderListSidebar({ toggler }) {

    const style = { backgroundImage: "url(./assets/order-list-bg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" };

    console.log(toggler);

    return (
        <motion.div onClick={e => e.stopPropagation()}
            initial={{ left: "-30%" }}
            animate={{ left: 0 }}
            exit={{ left: "-30%" }}
            className={`fixed z-50 flex flex-col gap-y-4 shadow-md top-0 bottom-0 bg-white text-[#5e6472] w-1/3`}>

            <span className='mt-8 text-center font-bold text-base'>لیست سفارش شما (۲)</span>

            <div className='mt-6 flex flex-col gap-y-4'>

                <span className='flex justify-between border-b'>
                    <span className='mr-8'>۱− سوپ جو</span>
                    <span className='ml-8'>۵۶,۰۰۰ تومان</span>
                </span>
                <span className='flex justify-between border-b'>
                    <span className='mr-8'>۱− سوپ جو</span>
                    <span className='ml-8'>۵۶,۰۰۰ تومان</span>
                </span>
                <span className='flex justify-between border-b'>
                    <span className='mr-8'>۱− سوپ جو</span>
                    <span className='ml-8'>۵۶,۰۰۰ تومان</span>
                </span>
                <span className='flex justify-between border-b'>
                    <span className='mr-8'>۱− سوپ جو</span>
                    <span className='ml-8'>۵۶,۰۰۰ تومان</span>
                </span>
                <span className='flex justify-between border-b'>
                    <span className='mr-8'>۱− سوپ جو</span>
                    <span className='ml-8'>۵۶,۰۰۰ تومان</span>
                </span>

            </div>

            <div className='absolute bottom-8 left-0 right-0'>
                <span className='flex justify-between font-bold text-base'>
                    <span className='mr-8'>جمع سفارش شما:</span>
                    <span className='ml-8'>۵۵۶,۰۰۰ تومان</span>
                </span>
            </div>

        </motion.div>
    )
}

export default OrderListSidebar