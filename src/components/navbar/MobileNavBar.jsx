import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNavBar({open}) {
  return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div 
                initial={{ opacity: 0,y:-100 }}
                animate={{ opacity: 1,y:0 }}
                exit={{ opacity: 0, y:-100 }}
                transition={{duration:0.3}}
                className='md:hidden absolute top-16 left-0 w-full h-screen z-20'>
                    <div className='bg-primary text-xl uppercase text-white m-6 py-10 rounded-xl font-semibold'>
                        <ul className='flex items-center flex-col gap-4'>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
