import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_Black() {
  return (
    <section>
        <div className='mx-auto px-4 sm:px-10 py-6'>
            <h1 className='font-semibold text-yellow-600 text-xl md:text-4xl lg:text-6xl border-b-2 border-slate-400 pb-4'>Marble Look - Black</h1>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Empera Black'
                imgSrc='/images/image-13.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Nero Marquina SV'
                imgSrc='/images/image-14.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Saint Laurent'
                imgSrc='/images/image-15.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Poral Black'
                imgSrc='/images/image-16.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_Black