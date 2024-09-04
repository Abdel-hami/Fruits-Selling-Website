import React from 'react'
import {IoBagHandleOutline} from "react-icons/io5"
import HeroPng from "../assets/fruit-plate.png"
import LeafPng from "../assets/leaf.png"
import {motion} from "framer-motion"
import { fadeLeft, fadeRight, fadeUp } from '../utilities/animation'
export default function Hero() {
  return (
    <section>
        <div className="relative container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            {/* brand infos */}
            <div className=' flex flex-col justify-center py-14 md:py-0 relative z-10'>
              <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.h1 
                variants={fadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-5xl lg:text-6xl font-averia font-bold leading-relaxed lg:leading-loose'>
                Healthy
                <br />
                fresh  
                <span className=' text-secondary' > fruits!
                </span>
                </motion.h1>
                <motion.p
                variants={fadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
                <motion.p
                variants={fadeRight(1.2)}
                initial="hidden"
                animate="visible"
                className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis, dolorum minima similique iusto velit eveniet
                    assumenda, ipsam omnis rem numquam quod vel autem optio 
                    nisi nulla deserunt architecto accusantium obcaecati?
                </motion.p>
                <motion.div 
                variants={fadeRight(1.5)}
                initial="hidden"
                animate="visible"
                className='flex justify-center md:justify-start'>
                  <button
                  
                  className='primay-btn flex items-center gap-2'>
                    <span>
                      <IoBagHandleOutline className='text-xl'/>
                    </span>
                  Order Now
                  </button>
                </motion.div>
              </div>
            </div>
            {/* brand image */}
            <div
            variants={fadeLeft(0.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center items-center'>
              <motion.img 
              variants={fadeRight(1.5)}
              initial={{opacity:0, x:200, rotate:75}}
              animate={{opacity:1, x:0, rotate:0}}
              transition={{duration:1,delay:0.2}}
                src={HeroPng}
                alt='img'
                className='w-[350px] md:w-[550px] drop-shadow'  />
            </div>
            {/* leaf img */}
            <motion.div
            variants={fadeRight(1.5)}
            initial={{opacity:0, y:-200, rotate:75}}
            animate={{opacity:1, y:0, rotate:0}}
            transition={{duration:1,delay:0.5}}
            className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
              <img 
                src={LeafPng} 
                alt='leaf img'
                className='w-full md:max-w-[300px]'/>
            </motion.div>
        </div>
    </section>
  )
}
