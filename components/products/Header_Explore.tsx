import Image from 'next/image'
import React from 'react'

function Header_Explore() {
    return (
        <section>
            <div className='flex flex-col gap-y-16 container mx-auto px-4 sm:px-8 py-6 pb-8'>
                <div className=' text-center'>
                    <h1 className='pb-4 text-4xl'>Explore a wide range of Quality Assured products</h1>
    
                    <h4 className=''>Hand-picked collections of indoor & outdoor tiles, carefully sourced from <br /> high-tech manufactures.</h4>
                </div>
    
                <div className='flex justify-evenly gap-x-4 text-2xl'>
                    <p className='text-yellow-500 border-b-2 pb-2 border-slate-400'>Marble Look</p>
                    <p className='border-b-2 pb-2 border-slate-400'>Stone Look</p>
                    <p className='border-b-2 pb-2 border-slate-400'>Cement Look</p>
                </div>

                <div className='flex gap-x-4'>
                    <div className=' basis-1/2'>
                        <Image
                        src={'/product/undefined41.png'}
                        width={400}
                        height={100}
                        alt=''
                        quality={100}
                        className=' object-cover w-[100%]'
                        />
                    </div>

                    <div className='basis-1/2 flex flex-col gap-y-6 text-center'>
                        <div>
                            <p className='pb-4 text-4xl text-yellow-500 font-semibold'>Marble look Tiles</p>
                            <p className=' text-slate-500'>Exclusive collection of Mable look tiles in various color and surface options.</p>
                        </div>

                        <div>
                            <p className='pb-2 text-2xl font-semibold'>Available formats (cm) -</p>
                                
                            <ul className=' list-disc list-inside flex flex-col items-start container max-w-[7rem] mx-auto'>
                                <li>30 x 60</li>
                                <li>60 x 60</li>
                                <li>60 x 120</li>
                                <li>80 x 80</li>
                                <li>120 x 120</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header_Explore