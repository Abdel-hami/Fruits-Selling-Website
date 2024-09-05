import React from 'react'
import Fruit1 from "../assets/fruits/apple.png"
import Fruit2 from "../assets/fruits/avocado.png"
import Fruit3 from "../assets/fruits/cherry.png"
import Fruit4 from "../assets/fruits/orange.png"
import {motion} from "framer-motion"
import { fadeLeft} from '../utilities/animation'
export default function Menu() {
    const boxs = [
        {
            id:1,
            title:"fresh red apple",
            link:`${Fruit1}`,
            price:"$2.00",
            delay:0.3,
        },
        {
            id:2,
            title:"fresh orange",
            link:`${Fruit2}`,
            price:"$3.00",
            delay:0.6,
        },
        {
            id:3,
            title:"fresh avocado",
            link:`${Fruit3}`,
            price:"$1.99",
            delay:0.9,
        },
        {
            id:4,
            title:"fresh cherries",
            link:`${Fruit4}`,
            price:"$5.00",
            delay:1.2,
        },
    ]
  return (
     <div className='container pt-12 pb-20'>
        <motion.h1
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1,delay:0.3}}
        className='text-2xl font-bold text-left pb-10'>Our menu</motion.h1>
        <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {boxs.map((box)=>(
                <motion.div
                variants={fadeLeft(box.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{scale:1.1}}
                className='bg-white rounded-3xl px-4 p-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-around gap-3'>
                    <img
                    className='w-[60px] mb-4 scale-110 transform -translate-y-6'
                    src={box.link}
                    alt='fruit'/>
                    <div>
                        <h1 className='text-lg font-semibold'>{box.title}</h1>
                        <p className='text-lg font-semi-bold text-secondary'>{box.price}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}
