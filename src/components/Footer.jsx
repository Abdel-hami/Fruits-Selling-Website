import React from 'react'
import { FaLeaf,FaFacebook,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'
import {motion} from "framer-motion"
export default function Footer() {
  return (
    <footer className='bg-primary/10 py-12 mt-10'>
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.3}}
            className='container flex items-center justify-between'>
            {/* logo section */}
            <div
                
                className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary'>Fruit </p>
                <p className='text-secondary'>Store</p>
                <FaLeaf className='text-green-500'/>
            </div>
            {/* social media icons section */}
            <div className='flex gap-4 text-3xl text-gray-700 items-center'>
                <FaInstagram/>
                <FaFacebook />
                <FaYoutube/>
                <FaTwitter/>
            </div>
        </motion.div>
    </footer>
  )
}
