import React from 'react'
import { Reusable_IMG_Tag } from '.'

function MableLook_Grey() {
  return (
    <section>
        <div className='container mx-auto px-4 sm:px-8 py-6'>
            <h1 className='font-semibold text-yellow-600 text-xl md:text-4xl border-b-2 border-slate-400 pb-4'>Marble Look - Grey</h1>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                <Reusable_IMG_Tag 
                grayText='Absolute Verde'
                imgSrc='/product/undefined44.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Empera Gris'
                imgSrc='/product/undefined45.png'
                imgstyle=''
                />
                
                <Reusable_IMG_Tag 
                grayText='Pulpis Natural'
                imgSrc='/product/undefined46.png'
                imgstyle=''
                />

                <Reusable_IMG_Tag 
                grayText='Luca Grey'
                imgSrc='/product/undefined47.png'
                imgstyle=''
                />
            </div>
        </div>
    </section>
  )
}

export default MableLook_Grey