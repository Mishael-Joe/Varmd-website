import { services } from '@/config/constant'
import Image from 'next/image'
import React from 'react'

function ProductSourcing() {
  return (
    <section>
        {services.map((service) => (
        <div className=' container mx-auto px-4 sm:px-8 py-6'>
            <div >
                <Image 
                src={'/services/undefined34.jpg'}
                width={400}
                height={50}
                quality={100}
                alt=''
                className='object-cover rounded-lg container mx-auto pb-8 w-[60%] h-[30%]'
                />
            </div>

            <div>
                <div key={service.key} className=' text-slate-700'>

                    <h1 className='font-semibold text-xl md:text-4xl text-slate-900 pb-6 '>Product Sourcing</h1>

                    <p className='pb-4'>{service.p1}</p>

                    <p className='pb-4'>{service.p2}</p>

                    <p className='pb-4'>{service.p3}</p>

                    <p className=''>{service.p4}</p>

                </div>
            </div>
        </div>
      ))}
    </section>
  )
}

export default ProductSourcing