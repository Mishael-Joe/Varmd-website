import React from 'react'
import Image from 'next/image'


function OurServicesCard() {
  return (
    <section>

        <div className='mx-auto px-4 sm:px-8 pt-8 py-4'>

            <h1 className='font-semibold text-3xl sm:text-[45px] border-b-2 border-slate-400 pb-4'>Our Services</h1>

            <div className=' grid md:grid-cols-2 lg:grid-cols-4 pt-8 p-4 gap-4'>
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between'>
                            <Image 
                            src={'/our-services/undefined9.png'}
                            width={77}
                            height={50}
                            alt=''
                            />

                            <Image 
                            src={'/our-services/undefined10.png'}
                            width={77}
                            height={50}
                            alt=''
                            />
                        </div>

                        <h2 className=' font-semibold text-xl sm:text-[26px] pt-8 py-4'>Product Sourcing</h2>
                        
                        <p className=' text-base'>Find trustworthy manufacturers to purchase your desired products ranges from, at a reasonable cost.</p>
                    </div>

                    <div>
                        <p className=' font-semibold pt-8 py-1 flex items-baseline gap-x-2'>
                            Read More 
                            
                                <Image 
                                src={'/our-services/undefined11.png'}
                                width={15}
                                height={20}
                                alt=''
                                />
                        
                        </p>
                    </div>
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col justify-between'>
                    <div>
                        <div>
                            <Image 
                            src={'/our-services/undefined12.png'}
                            width={250}
                            height={50}
                            alt=''
                            />
                        </div>

                        <h2 className=' font-semibold text-xl sm:text-[26px] pt-8 py-4'>OEM Operation</h2>
                        
                        <p className=' text-base'>VSource helps you to collaborate with the right manufacturer(s) who could match your OEM demands & parameters in terms of production capacity, capability, quality, & pricing.</p>
                    </div>

                    <div>
                        <p className=' font-semibold pt-8 py-1 flex items-baseline gap-x-2'>
                            Read More 
                            
                                <Image 
                                src={'/our-services/undefined11.png'}
                                width={15}
                                height={20}
                                alt=''
                                />
                        
                        </p>
                    </div>
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col justify-between'>
                    <div>
                        <div>
                            <Image 
                            src={'/our-services/undefined13.png'}
                            width={250}
                            height={50}
                            alt=''
                            />
                        </div>

                        <h2 className=' font-semibold text-xl sm:text-[26px] pt-8 py-4'>Quantity Assurance</h2>
                        
                        <p className=' text-base'>Stressed over the quantity of your tiles while purchasing? Don\'t worry, our quantity control administrations are here to help you in keeping up with the quantity of your brand by really taking a look at your items in the plant as per the acknowledgement quantity breaking point (AQL) and giving you a nitty gritty report on regardless of wether this item is produced by your necessity or not.</p>
                    </div>

                    <div>
                        <p className=' font-semibold pt-8 py-1 flex items-baseline gap-x-2'>
                            Read More 
                            
                                <Image 
                                src={'/our-services/undefined11.png'}
                                width={15}
                                height={20}
                                alt=''
                                />
                        
                        </p>
                    </div>
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col justify-between'>
                    <div>
                        <div>
                            <Image 
                            src={'/our-services/undefined14.png'}
                            width={250}
                            height={50}
                            alt=''
                            />
                        </div>

                        <h2 className=' font-semibold text-xl sm:text-[26px] pt-8 py-4'>Freight Forwarding</h2>
                        
                        <p className=' text-base'>Our experienced team with extremely proficient forwarding services can diminish your supply chain issues & deliver your cargo to all leadind ports accross the globe in a protected and momentary manner.</p>
                    </div>

                    <div>
                        <p className=' font-semibold pt-8 py-1 flex items-baseline gap-x-2'>
                            Read More 
                            
                                <Image 
                                src={'/our-services/undefined11.png'}
                                width={15}
                                height={20}
                                alt=''
                                />
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default OurServicesCard