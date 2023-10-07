import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <section className=''>
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
                <div className='max-w-xl'>
                    <p className=' text-xl'>-WELCOME TO VARMD TILES-</p> <br />
                    <p className='flex flex-col gap-y-2 text-4xl font-semibold text-yellow-600'>
                        <span>SECURE YOUR TILES SUPPLIES,</span>
                        <span>WITH VARMD</span>
                    </p>
                    <div className=' max-w-lg font-semibold text-xl'>
                        <div>
                            <ul className=' max-w-lg flex list-disc list-inside'>                                
                                <li className=' basis-1/2'>Ceramic Tiles</li>
                                <li className=' basis-1/2'>Porcelian Tiles</li>
                            </ul>
                        </div>

                        <div>
                            <ul className=' max-w-lg flex list-disc list-inside'>                                
                                <li className=' basis-1/2'>Quality Control</li>
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