import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_Beige() {
  return (
    <section>
        <div className='container mx-auto px-4 sm:px-8 py-6'>
            <h1 className='font-semibold text-yellow-600 text-4xl border-b-2 border-slate-400 pb-4'>Marble Look - Beige</h1>

            <div className=' grid grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Bottocino Ivory'
                imgSrc='/product/undefined51.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Neptune Crema'
                imgSrc='/product/undefined50.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Emperador Beige'
                imgSrc='/product/undefined49.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Venecia Beige'
                imgSrc='/product/undefined48.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_Beige