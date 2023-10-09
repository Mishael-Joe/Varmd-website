import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_White() {
  return (
    <section>
        <div className='container mx-auto px-4 sm:px-8 py-6'>
            <h1 className='font-semibold text-yellow-600 text-4xl border-b-2 border-slate-400 pb-4'>Marble Look - White</h1>

            <div className=' grid grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Tanzania White'
                imgSrc='/product/undefined52.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Smoky Bianco'
                imgSrc='/product/undefined53.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Jaguar White'
                imgSrc='/product/undefined54.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Platinum Statuary'
                imgSrc='/product/undefined55.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_White