import Image from 'next/image'
import React from 'react'

function Certification_AboutUs() {
  return (
    <section>
        <div className='flex flex-col md:flex-row items-center mx-auto px-4 sm:px-10 py-6'>
            <div className=' basis-3/7'>
                <Image 
                src={'/aboutUs/undefined38.png'}
                width={400}
                height={100}
                alt=''
                quality={100}
                className=' object-cover w-[80%]'
                />
            </div>

            <div className='basis-4/7 max-w-2xl'>
                <p className=' text-4xl font-bold pb-4'>ISO 9001:2015</p>
                <p className='text-slate-600'>We are ISO certified and provide a wide range of services that includes quality assurance, supplier audits, product sourcing and product development. Our team is dedicated to help you get the best value for your money and ensure that you get the highest quality products.</p>
            </div>
        </div>
    </section>
  )
}

export default Certification_AboutUs