import { ImageProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function Reusable_IMG_Tag({ grayText, imgSrc, imgstyle}: ImageProps ) {
  return (
    <div className='py-8'>
        <Image 
        src={imgSrc}
        width={300}
        height={200}
        alt=''
        className={`${imgstyle}`}
        />

        <div className=' text-center pt-4'>
            <p className=' font-semibold text-lg'>polished & Matt</p>
            <p className=' text-gray-500'>{grayText}</p>
        </div>
    </div>
  )
}

export default Reusable_IMG_Tag