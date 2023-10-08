import Image from 'next/image'
import React from 'react'

function IntroVideo_AboutUs() {
  return (
    <section>
        <div className='flex items-center container mx-auto px-4 sm:px-8 py-6'>
            <div className=' basis-1/2'>
                <Image 
                src={'/aboutUs/undefined33.png'}
                width={400}
                height={100}
                alt=''
                quality={100}
                className=' object-cover w-[90%]'
                />
            </div>

            <div className='basis-1/2 flex flex-col gap-y-6'>
                <div>
                    <p className='pb-4 text-xl font-semibold'>Founded in 2017, varmd is a family owned small-medium enterprise devoted solely to the Indian Tiles industries</p>
                    <p className=' text-slate-500'>we are dedicated to sourcing a verity of ceramic & porcelain tiles & provide Quality Service to off shore clients from India.</p>
                </div>

                <div className='clear-both'>
                    <Image 
                    src={'/services/undefined34.png'}
                    width={250}
                    height={50}
                    alt=''
                    className='object-cover float-right'
                    />

                    <p className='pb-2 text-xl font-semibold'>2+ Million+ sq meters Sourced, Inspected & Shipped.</p>
                        
                    <p className=' text-slate-500'>Established in the year of 2016 Varmd has exported more than a million square meters in a tenure of 7 years for distributors and big-box retailers in the UK, EU, New Zealand, Australia, South Africa & UAE.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IntroVideo_AboutUs