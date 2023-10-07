import React from 'react'
import Image from 'next/image'

function WhyVarmd() {
  return (
    <section>
        <div className=' container mx-auto px-4 sm:px-8 py-4'>

            <h1 className='font-semibold text-4xl border-b-2 border-slate-400 pb-4 '>Why Varmd?</h1>

            <div className=' grid grid-cols-3 pt-8 p-4 gap-x-4'>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined23.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div>
                        <p>
                            Go-to company offering a wide range of Quality Assured products.
                        </p>

                        <p>
                            Choose from a wide range of ceramic & porcelain tiles at Varmd & worry about nothing else!
                        </p>

                        <p>
                            Tiles are sourece for the best factories & additionally, Varmd's QC team works indepentdently at the factories ensuring end to end compliance
                        </p>

                        <p>
                            Every production is closely followed & each shipment is thoroughly inspected.
                        </p>
                    </div>
                </div>

                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined24.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div>
                        <p>
                            7+ years of professional services, fostered by 3 decades of experience in the Indian Tile industry.
                        </p>

                        <p>
                            Established in 2016, Varmd has sourced, inspected & exported over
                        </p>

                        <p>
                            2+ million sq meters for distributors and big-box retailers in the UK, Spain, Belgium, New Zealand, Australia, South Africa, and UAE.
                        </p>
                    </div>
                </div>
                
                <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-12'>
                    <div className=' flex justify-center'>
                        <Image 
                        src={'/varmd/undefined25.png'}
                        width={100}
                        height={50}
                        alt=''
                        />
                    </div>

                    <div>
                        <p>
                            Holding your hands throughout the process
                        </p>

                        <p>
                            Varmd is well equipped with dedicated team for Quality control, Logistics, Designing & AfterSales support.
                        </p>

                        <p>
                            Our executives are actively involed on the ground adhering strict policies & ensuring total outbound compliance while our Logistic experts provide hassle free documentation and forwarding support for each shipment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyVarmd