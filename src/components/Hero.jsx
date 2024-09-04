import React from 'react'
import {IoBagHandleOutline} from "react-icons/io5"
export default function Hero() {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            {/* brand infos */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
              <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <h1 className='text-5xl lg:text-6xl font-averia font-bold leading-relaxed lg:leading-loose'>
                Healthy
                <br />
                fresh  
                <span className=' text-secondary' > fruits!
                </span>
                </h1>
                <p className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</p>
                <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis, dolorum minima similique iusto velit eveniet
                    assumenda, ipsam omnis rem numquam quod vel autem optio 
                    nisi nulla deserunt architecto accusantium obcaecati?
                </p>
                <div>
                  <button className='primay-btn flex items-center gap-2'>
                    <span>
                      <IoBagHandleOutline className='text-xl'/>
                    </span>
                  Order Now
                  </button>
                </div>
                </div>
              </div>
            {/* brand image */}
            <div>

            </div>
        </div>
    </section>
  )
}
