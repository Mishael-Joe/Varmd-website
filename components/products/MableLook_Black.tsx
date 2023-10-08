import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_Black() {
  return (
    <section>
        <div className='container mx-auto px-4 sm:px-8 py-6'>
            <h1 className='font-semibold text-yellow-600 text-4xl border-b-2 border-slate-400 pb-4'>Marble Look - Black</h1>

            <div className=' grid grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Empera Black'
                imgSrc='/product/undefined56.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Nero Marquina SV'
                imgSrc='/product/undefined57.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Saint Laurent'
                imgSrc='/product/undefined59.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Poral Black'
                imgSrc='/product/undefined60.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_Black