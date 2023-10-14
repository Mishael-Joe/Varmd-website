import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_White() {
  return (
    <section>
        <div className='mx-auto px-4 sm:px-10 py-6'>
            <h1 className='font-semibold text-yellow-600 text-xl sm:text-4xl lg:text-6xl border-b-2 border-slate-400 pb-4'>Marble Look - White</h1>

            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Tanzania White'
                imgSrc='/images/image-1.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Smoky Bianco'
                imgSrc='/images/image-2.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Jaguar White'
                imgSrc='/images/image-3.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Platinum Statuary'
                imgSrc='/images/image-4.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_White