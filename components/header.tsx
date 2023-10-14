import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <section>
        <div className=' flex items-center justify-center text-slate-100 relative '>
            <Image 
            src={'/undefined4.png'}
            width={400}
            height={100}
            alt=''
            quality={100}
            className=' object-cover w-[100%]'
            />

            <div className=' absolute text-center inset-0 flex items-center justify-center bg-black/50'>
                <div className='max-w-x'>
                    <p className='md:text-[30px]'>-WELCOME TO VARMD TILES-</p> <br />
                    <p className='flex flex-col sm:pb-4 text-xl font-semibold text-yellow-600 sm:text-[30px] md:text-[50px]'>
                        <span className='sm:pb-6 md:pb-8'>SECURE YOUR TILES SUPPLIES,</span>
                        <span>WITH VARMD</span>
                    </p>
                    <div className='grid grid-cols-2 font-semibold text-xs sm:text-sm md:text-xl'>
                        <div>
                            <ul className='list-disc list-inside'>                                
                                <li className=' basis-1/2 pr-1 sm:pr-2'>Ceramic Tiles</li>
                                <li className=' basis-1/2'>Porcelian Tiles</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='list-disc list-inside'>                                
                                <li className=' basis-1/2 pr-2 sm:pr-3'>Quality Control</li>
                                <li className=' basis-1/2'>Logistic Support</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Header