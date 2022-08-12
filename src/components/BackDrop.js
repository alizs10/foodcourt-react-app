import React, { useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

function BackDrop({ handleClick, toggler, children }) {

    useEffect(() => {

        if(toggler)
        {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => document.body.classList.remove('overflow-hidden')
    }, [toggler])

    return (
        <AnimatePresence>
            {toggler && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-black/60 fixed flex-center z-40 top-0 right-0 bottom-0 left-0" onClick={handleClick}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BackDrop