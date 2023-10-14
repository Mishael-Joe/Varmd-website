import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_Beige() {
  return (
    <section>
        <div className='mx-auto px-4 sm:px-10 py-6'>
            <h1 className='font-semibold text-yellow-600 text-xl md:text-4xl lg:text-6xl border-b-2 border-slate-400 pb-4'>Marble Look - Beige</h1>

            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Bottocino Ivory'
                imgSrc='/images/image-5.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Neptune Crema'
                imgSrc='/images/image-6.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Emperador Beige'
                imgSrc='/images/image-7.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Venecia Beige'
                imgSrc='/images/image-8.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_Beige