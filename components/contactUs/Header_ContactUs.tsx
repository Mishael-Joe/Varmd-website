import Image from 'next/image'
import React from 'react'

function Header_ContactUs() {
  return (
    <section className=''>
      <div className=' flex items-center justify-center text-slate-100 relative '>
          <Image 
          src={'/services/undefined31.png'}
          width={400}
          height={100}
          alt=''
          quality={100}
          className=' object-cover w-[100%]'
          />

          <div className=' absolute text-center inset-0 flex items-center justify-center bg-black/5'>
            <div className='max-w-xl'>
              <p className=' text-4xl text-black font-bold'>Contact Us</p>
            </div>
          </div>
      </div>
        
    </section>
  )
}

export default Header_ContactUs