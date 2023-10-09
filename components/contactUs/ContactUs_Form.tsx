"use client"

import Image from 'next/image'
import React, { useState } from 'react'

function ContactUs_Form() {
  const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Number: '',
      Address: '',
      Message: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  function handleChange(event: any) {
    const {name, value} = event.target

    setFormData(prev => {
      return {
          ...prev,
          [name] : value
      }
    })

    console.log(formData)
}
    
  return (
    <section>
      <div className='container mx-auto px-4 sm:px-8 py-6 flex items-center gap-x-16'>
        <div className=' basis-1/2'>
          <Image  
          src={`/contact/undefined64.png`}
          width={400}
          height={200}
          alt=''
          className=' w-[100vw]'
          />
        </div>

        <div className=' basis-1/2'>
        <h1 className=' text-xl font-semibold pb-4'>For Any Inquiries, Qyestions Or Commendations.</h1>
        <h1 className=' text-lg font-semibold pb-4'>Please Fill The Form:</h1>
        <p className=' text-gray-500 text-sm'>Please fill free to get in touch using the fprm below. We'd love to hear from you.</p>

        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <input 
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              className=" h-12 w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input 
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className=" h-12 w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input 
              type="text"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
              placeholder="Number"
              className=" h-12 w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input 
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Address"
              className=" h-12 w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <input 
              type="textarea"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Message"
              className="h-20  te w-full px-3 py-1 mt-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
        </form>
        </div>

      </div>
    </section>
  )
}

export default ContactUs_Form