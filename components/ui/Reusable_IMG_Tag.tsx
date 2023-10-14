import { ImageProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function Reusable_IMG_Tag({ grayText, imgSrc, imgstyle}: ImageProps ) {
  return (
    <div className='py-8 flex flex-col items-center'>
      <div className='hex-container'>
        <Image 
        src={imgSrc}
        width={300}
        height={200}
        alt=''
        className={`${imgstyle} border-black`}
        />
      </div>

        <div className=' text-center pt-4'>
            <p className=' font-semibold text-[26px]'>polished & Matt</p>
            <p className=' text-gray-500 text-xl'>{grayText}</p>
        </div>
    </div>
  )
}

export default Reusable_IMG_Tag