import React from 'react'

function QualityTiles() {
  return (
    <section>
        <div className='flex flex-col gap-y-16 container mx-auto px-4 sm:px-8 py-6'>
            <div className=' text-center'>
                <h1 className='pb-4 text-4xl'>Quality Tiles, Exceptional Service</h1>

                <h4 className='text-sm'>Hand-picked collections of indoor & outdoor tiles, carefully sourced from <br /> high-tech manufactures.</h4>
            </div>

            <div className='flex justify-evenly gap-x-4 text-2xl'>
                <p className='text-yellow-500 border-b-2 pb-2 border-slate-400'>Product Sourcing</p>
                <p className='border-b-2 pb-2 border-slate-400'>OEM Operation</p>
                <p className='border-b-2 pb-2 border-slate-400'>Quality Assurance</p>
                <p className='border-b-2 pb-2 border-slate-400'>Freight Forwarding</p>
            </div>
        </div>
    </section>
  )
}

export default QualityTiles