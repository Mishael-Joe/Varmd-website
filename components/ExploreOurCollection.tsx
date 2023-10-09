import React from 'react'
import Image from 'next/image'

function ExploreOurCollection() {
  return (
    <section>
        <div className=' container mx-auto px-4 sm:px-8 py-4'>

            <h5 className=' text-yellow-500'>- Choose Your Tiles</h5>
            <h1 className='font-semibold text-2xl sm:text-4xl border-b-2 border-slate-400 pb-4 '>Explore Our Collection</h1>

            <div className=' grid md:grid-cols-2 lg:grid-cols-3 pt-8 p-4 gap-x-4 gap-y-8'>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12 relative'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined16.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>
                    <div className='p-4 inset-0 bg-black/50 absolute text-slate-200 flex flex-col justify-between'>
                        <div>
                            <h1 className='font-semibold text-xl lg:text-2xl text-slate-50'>INDOOR - PORCELAIN TILES</h1>
                            <p className=' text-sm sm:py-2'>Porcelain Tiles suitable for indoor wall & floor with</p>
                            <p className='lg:text-lg text-yellow-500'>Water absorption &lt; 0.5% </p>

                            <p className='pt-1.5 sm:pt-2 text-sm lg:text-base'>In various sizes (cm)</p>
                            <p className='text-sm lg:text-base'>30 x 60, 60 x 60, 60 x 120</p>
                            <p className='text-sm lg:text-base'>80 x 80, 80 x 160, 120 x 120</p>

                            <p className='pt-1.5 sm:pt-2 text-sm lg:text-base'>Surface options</p>
                            <p className='text-sm lg:text-base'>Polished, Matt, High Gloss, Anti-skid, Carving & Sugar.</p>
                        </div>
                        

                        <p className='text-2xl font-semibold text-slate-50'>browse collection &gt;</p>
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
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12 relative'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined17.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    <div className='flex flex-col text-slate-200 justify-between inset-0 bg-black/50 absolute p-4'>
                        <div>
                            <h1 className='font-semibold text-xl md:text-2xl text-slate-50'>SUBWAY / METROTILES</h1>
                            <p className=' text-sm sm:py-2'>Subway or Metro tiles, with</p>
                            <p className='md:text-lg text-yellow-500'>Water absorption &lt; 15% </p>

                            <p className='pt-1.5 sm:pt-4 text-sm md:text-base'>In various sizes (cm)</p>
                            <p>10 x 20, 10 x 30, 10 x 40</p>
                            <p>7.5 x 30, 20 x 20</p>

                            <p className='pt-1.5 sm:pt-4 text-sm md:text-base'>Various colors and shapes.</p>
                        </div>

                        <p className='text-2xl font-semibold text-slate-50'>browse collection &gt;</p>
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
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12 relative'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/Explore/undefined18.png'}
                        width={350}
                        height={50}
                        alt=''
                        quality={100}
                        />
                    </div>

                    
                    <div className='flex flex-col text-slate-200 justify-between inset-0 bg-black/50 absolute p-4'>
                        <div>
                            <h1 className='font-semibold text-xl md:text-2xl text-slate-50'>WOOD FINISHTILES</h1>
                            <p className='sm:text-base py-2 md:pt-4'>Wood effect (<span className=' text-yellow-500'>pressed</span>)</p>
                            <p className='text-sm sm:text-base'>porcelain tiles suitable for</p>
                            <p className='text-sm sm:text-base'>indoor walls & floors, with</p>
                            <p className='sm:text-lg text-yellow-500'>Water absorption &lt; 0.5% </p>

                            <p className='pt-1.5 sm:pt-4'>In 2 sizes (cm)</p>
                            <p>20 x 120, 30 x 120</p>

                            <p className='sm:pt-2 text-sm lg:text-base'>Surface options</p>
                            <p className='text-sm lg:text-base'>Matt, Textured.</p>
                        </div>

                        <p className='text-2xl font-semibold text-slate-50'>browse collection &gt;</p>
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