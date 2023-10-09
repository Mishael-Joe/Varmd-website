import Image from 'next/image'
import React from 'react'

function OurContact() {
  return (
    <section>
      <div className='container mx-auto px-4 sm:px-8 py-6 flex items-center gap-x-8'>
        <div className=' basis-1/2'>
          <h3 className=' text-yellow-600 flex items-center gap-x-2 font-semibold'><span className="inline-block w-12 h-1 bg-yellow-600 rounded-full"></span> OUR CONTACT</h3>
          <h1 className='font-semibold text-4xl p-4'>Get In Touch With Us</h1>
          <p className=' pb-4'>We are dedicated to sourcing a variety of ceramic & porcelain tiles & provide <br /> Quality Control services off the shore clients from India.</p>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center border-gray-400  border-b-2 pb-4'>
              <div className=' basis-1/6 flex justify-center'>
                <Image 
                src={`/contact/undefined68.png`}
                width={30}
                height={50}
                alt=''
                />
              </div>

              <div className=' basis-5/6'>
                <h3 className=' text-lg font-semibold'>Head Office</h3>
                <p className=' text-gray-500 text-sm'>Times Square 2, Sindhubhavan</p>
                <p className=' text-gray-500 text-sm'>Ahmedabad Gujarat, India.</p>
              </div>
            </div>

            <div className='flex items-center border-gray-400  border-b-2 pb-4'>
              <div className=' basis-1/6 flex justify-center'>
                <Image 
                src={`/contact/undefined69.png`}
                width={30}
                height={50}
                alt=''
                />
              </div>

              <div className=' basis-5/6'>
                <h3 className=' text-lg font-semibold'>Head Office</h3>
                <p className=' text-gray-500 text-sm'>T: +919106 223226</p>
                <p className=' text-gray-500 text-sm'>F: +919664 617220</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className=' basis-1/6 flex justify-center'>
                <Image 
                src={`/contact/undefined70.png`}
                width={30}
                height={50}
                alt=''
                />
              </div>

              <div className=' basis-5/6'>
                <h3 className=' text-lg font-semibold'>Email-Us</h3>
                <p className=' text-gray-500 text-sm'>Info@Varmd.Com</p>
              </div>
            </div>

          </div>
        </div>

        <div className=' basis-1/2'>
          <Image 
          src={`/contact/undefined66.png`}
          width={400}
          height={200}
          alt=''
          className=' w-[100vw]'
          />
        </div>
      </div>
    </section>
  )
}

export default OurContact