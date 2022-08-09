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
            className={`fixed z-50 flex flex-col gap-y-4 shadow-md top-0 bottom-0 bg-white text-[#5e6472] w-3/4 md:w-1/2 lg:w-1/3`}>

            <span className='mt-8 text-center font-bold text-sm md:text-base'>لیست سفارش شما (۲)</span>

            <div className='mt-6 flex flex-col gap-y-4'>

                <span className='flex justify-between border-b text-xs ms:text-sm'>
                    <span className='mr-4 md:mr-8'>۱− سوپ جو</span>
                    <span className='ml-4 md:ml-8'>۵۶,۰۰۰ <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                </span>
                <span className='flex justify-between border-b text-xs ms:text-sm'>
                    <span className='mr-4 md:mr-8'>۱− سوپ جو</span>
                    <span className='ml-4 md:ml-8'>۵۶,۰۰۰ <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                </span>
                <span className='flex justify-between border-b text-xs ms:text-sm'>
                    <span className='mr-4 md:mr-8'>۱− سوپ جو</span>
                    <span className='ml-4 md:ml-8'>۵۶,۰۰۰ <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                </span>
                <span className='flex justify-between border-b text-xs ms:text-sm'>
                    <span className='mr-4 md:mr-8'>۱− سوپ جو</span>
                    <span className='ml-4 md:ml-8'>۵۶,۰۰۰ <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                </span>

            </div>

            <div className='absolute bottom-8 left-0 right-0'>
                <span className='flex justify-between font-bold text-sm md:text-base'>
                    <span className='mr-4 md:mr-8'>جمع سفارش شما:</span>
                    <span className='ml-4 md:ml-8'>۵۵۶,۰۰۰ <span className="inline-block mb-1 text-[10px] -rotate-90">تومان</span></span>
                </span>
            </div>

        </motion.div>
    )
}

export default OrderListSidebar