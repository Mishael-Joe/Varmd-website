import Image from 'next/image'
import React from 'react'

function Header_Explore() {
    return (
        <section>
            <div className='flex flex-col gap-y-16 mx-auto px-4 sm:px-10 py-6 pb-8'>
                <div className=' text-center'>
                    <h1 className='pb-4 text-xl sm:text-4xl lg:text-6xl'>Explore a wide range of Quality Assured products</h1>
    
                    <h4 className='text-sm sm:text-3xl'>Hand-picked collections of indoor & outdoor tiles, carefully sourced from <br /> high-tech manufactures.</h4>
                </div>
    
                <div className='flex justify-evenly gap-x-4 text-lg md:text-4xl'>
                    <p className='text-[#E6AF5D] border-b-2 pb-2 border-slate-400'>Marble Look</p>
                    <p className='border-b-2 pb-2 border-slate-400'>Stone Look</p>
                    <p className='border-b-2 pb-2 border-slate-400'>Cement Look</p>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
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
                            <p className='pb-4 text-4xl sm:text-6xl text-[#E6AF5D] font-semibold'>Marble look Tiles</p>
                            <p className=' text-[#616161] text-[20px]'>Exclusive collection of Mable look tiles in various color and surface options.</p>
                        </div>

                        <div>
                            <p className='pb-2 text-[30px] font-semibold'>Available formats (cm) -</p>
                                
                            <ul className=' list-disc list-inside flex flex-col items-start container max-w-[12rem] mx-auto font-extrabold text-2xl'>
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