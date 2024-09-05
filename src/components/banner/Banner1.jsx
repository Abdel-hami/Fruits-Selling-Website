import React from 'react'
import BannerJpg from "../../assets/fruit-plate2.png"
import { fadeUp } from '../../utilities/animation'
import {motion} from "framer-motion"
export default function Banner() {
  return (
    <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>
                    <div className='flex flex-col justify-center '>
                        <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                            <motion.h1 
                                variants={fadeUp(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:true}}
                                className='text-3xl lg:text-6xl font-bold uppercase'>brand info</motion.h1>
                            <motion.p 
                                variants={fadeUp(0.7)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam eos animi fuga, atque rerum quaerat hic suscipit voluptatibus sed blanditiis nisi eveniet quas ullam in laboriosam ipsa magnam veniam.</motion.p>
                            <motion.p 
                                variants={fadeUp(0.9)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:true}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, suscipit fugiat iste ratione vitae voluptatibu</motion.p>
                            <motion.div 
                                variants={fadeUp(1.1)}
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
                    <div className='flex items-center justify-center'>
                        <motion.img
                            variants={fadeUp(0.5)}
                            initial={{opacity:0,x:200,rotate:75}}
                            whileInView={{opacity:1,x:0,rotate:0}}
                            transition={{duration:1,delay:0.2}}
                            viewport={{once:true}}
                            src={BannerJpg} 
                            alt="" 
                            className='drop-shadow w-[300px] md:w-[400px] h-full object-cover'/>
                    </div>     
            </div>
    </section>
)
}
