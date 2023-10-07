import React from 'react'
import { ourServices } from '@/config/constant'
import Image from 'next/image'


function OurServicesCard() {
  return (
    <section>

        <div className=' container mx-auto px-4 sm:px-8 py-4'>

            <h1 className='font-semibold text-4xl border-b-2 border-slate-400 pb-4 '>Our Services</h1>

            <div className=' grid grid-cols-4 pt-8 p-4 gap-x-4'>

                {ourServices.map((item) => (
                    <div key={item.heading} className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col justify-between'>
                        <div>
                            <div>
                                <Image 
                                src={item.img}
                                width={50}
                                height={50}
                                alt=''
                                />
                            </div>

                            <h2 className=' font-semibold text-xl py-4'>{item.heading}</h2>
                            
                            <div>{item.description}</div>
                        </div>

                        <div>
                            <p className=' font-semibold pt-8 py-1 flex items-baseline gap-x-2'>
                                Read More 
                                
                                    <Image 
                                    src={'/our-services/undefined11.png'}
                                    width={15}
                                    height={20}
                                    alt=''
                                    />
                            
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </section>
  )
}

export default OurServicesCard