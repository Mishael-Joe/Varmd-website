import React from 'react'
import Image from 'next/image'

function ExploreOurCollection() {
  return (
    <section>
        <div className=' container mx-auto px-4 sm:px-8 py-4'>

            <h5 className=' text-yellow-500'>- Choose Your Tiles</h5>
            <h1 className='font-semibold text-4xl border-b-2 border-slate-400 pb-4 '>Explore Our Collection</h1>

            <div className=' grid grid-cols-3 pt-8 p-4 gap-x-4 gap-y-8'>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center inset-0 bg-black/50'>
                        <Image 
                        src={'/Explore/undefined16.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined19.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined17.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined20.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined18.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined21.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExploreOurCollection