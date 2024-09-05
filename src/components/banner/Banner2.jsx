import React from 'react'
import BannerJpg from "../../assets/banner-bg.jpg"
import { fadeLeft, fadeUp } from '../../utilities/animation'
import {motion} from "framer-motion"
const bgStyle = {
    backgroundImage:`url(${BannerJpg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundrepeat:"no-repeat",
}
export default function Banner() {
  return (
    <section >
            {/* brand info */}
            <div style={bgStyle} className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
                <div className='flex items-center justify-center'>
                <div></div>     
                </div>
                <div className='flex flex-col justify-center '>
                    <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                        <motion.h1 
                            variants={fadeLeft(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true}}
                            className='text-3xl lg:text-6xl font-bold uppercase'>brand info</motion.h1>
                        <motion.p 
                            variants={fadeLeft(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam eos animi fuga, atque rerum quaerat hic suscipit voluptatibus sed blanditiis nisi eveniet quas ullam in laboriosam ipsa magnam veniam.</motion.p>
                        <motion.div 
                            variants={fadeLeft(1.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true}}
                            className='flex justify-center md:justify-start'>
                            <button
                                className='primay-btn flex items-center gap-2'>
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
    </section>
)
}
