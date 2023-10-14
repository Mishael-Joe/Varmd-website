import React from 'react'
import Image from 'next/image'

function WhyVarmd() {
  return (
    <section>
        <div className='mx-auto px-4 sm:px-8 py-4'>

            <h1 className='font-semibold text-3xl sm:text-[45px] border-b-2 border-slate-400 pb-4 '>Why Varmd?</h1>

            <div className='for-grid pt-10'>

                <div className='card-item__1 border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined23.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                           <span className=' text-[#E6AF5D]'>Go-to</span> company offering a wide range of <span className=' text-[#E6AF5D]'>Quality Assured products.</span>
                        </p>

                        <p>
                            Choose from a wide range of <span className=' text-[#E6AF5D]'>ceramic & porcelain tiles</span> at Varmd & worry about nothing else!
                        </p>

                        <p>
                            Tiles are sourece from the <span className=' text-[#E6AF5D]'>best factories & additionally,</span> <span className=' text-[#E6AF5D]'>Varmd's QC team works indepentdently at the factory</span> ensuring end to end compliance
                        </p>

                        <p>
                            Every production is closely followed & <span className=' text-[#E6AF5D]'>each shipment is thoroughly inspected.</span>
                        </p>
                    </div>
                </div>

                <div className='card-item__2 border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined24.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                            <span className=' text-[#E6AF5D]'>7+</span> years of professional services, <span className=' text-[#E6AF5D]'>fostered by 3 decades of</span> experience in the <span className=' text-[#E6AF5D]'>Indian Tile industry.</span>
                        </p>

                        <p>
                            Established in 2016, Varmd has <span className=' text-[#E6AF5D]'>sourced, inspected & exported</span> over
                        </p>

                        <p>
                        <span className=' text-[#E6AF5D]'>2+ million sq meters</span> for distributors and big-box retailers in the UK, Spain, Belgium, New Zealand, Australia, South Africa, and UAE.
                        </p>
                    </div>
                </div>
                
                <div className='card-item__3 border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined25.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                        <span className=' text-[#E6AF5D]'>Holding your hands </span>throughout <span className=' text-[#E6AF5D]'>the process</span>
                        </p>

                        <p>
                            Varmd is well equipped with dedicated team for <span className=' text-[#E6AF5D]'>Quality control, Logistics, Designing & AfterSales support.</span>
                        </p>

                        <p>
                            Our executives are <span className=' text-[#E6AF5D]'>actively involed on the ground adhering strict policies`</span> & ensuring total outbound compliance while our Logistic experts provide <span className=' text-[#E6AF5D]'>hassle free documentation</span> and forwarding support for each shipment.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className=' grid md:grid-cols-3 pt-8 p-4 gap-4'>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined23.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                           <span className=' text-[#E6AF5D]'>Go-to</span> company offering a wide range of <span className=' text-[#E6AF5D]'>Quality Assured products.</span>
                        </p>

                        <p>
                            Choose from a wide range of <span className=' text-[#E6AF5D]'>ceramic & porcelain tiles</span> at Varmd & worry about nothing else!
                        </p>

                        <p>
                            Tiles are sourece from the <span className=' text-[#E6AF5D]'>best factories & additionally,</span> <span className=' text-[#E6AF5D]'>Varmd's QC team works indepentdently at the factory</span> ensuring end to end compliance
                        </p>

                        <p>
                            Every production is closely followed & <span className=' text-[#E6AF5D]'>each shipment is thoroughly inspected.</span>
                        </p>
                    </div>
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined24.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                            <span className=' text-[#E6AF5D]'>7+</span> years of professional services, <span className=' text-[#E6AF5D]'>fostered by 3 decades of</span> experience in the <span className=' text-[#E6AF5D]'>Indian Tile industry.</span>
                        </p>

                        <p>
                            Established in 2016, Varmd has <span className=' text-[#E6AF5D]'>sourced, inspected & exported</span> over
                        </p>

                        <p>
                        <span className=' text-[#E6AF5D]'>2+ million sq meters</span> for distributors and big-box retailers in the UK, Spain, Belgium, New Zealand, Australia, South Africa, and UAE.
                        </p>
                    </div>
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-8 pb-8'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined25.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 text-center font-semibold'>
                        <p>
                        <span className=' text-[#E6AF5D]'>Holding your hands </span>throughout <span className=' text-[#E6AF5D]'>the process</span>
                        </p>

                        <p>
                            Varmd is well equipped with dedicated team for <span className=' text-[#E6AF5D]'>Quality control, Logistics, Designing & AfterSales support.</span>
                        </p>

                        <p>
                            Our executives are <span className=' text-[#E6AF5D]'>actively involed on the ground adhering strict policies`</span> & ensuring total outbound compliance while our Logistic experts provide <span className=' text-[#E6AF5D]'>hassle free documentation</span> and forwarding support for each shipment.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default WhyVarmd