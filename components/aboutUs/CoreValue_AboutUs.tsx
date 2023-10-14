import React from 'react'

function CoreValue_AboutUs() {
  return (
    <section>
      <div className='mx-auto px-4 sm:px-10 py-4'>
        <h3 className=' text-yellow-600 flex items-center gap-x-2 font-semibold'><span className="inline-block w-12 h-1 bg-yellow-600 rounded-full"></span> Core Value</h3>
        <h1 className='font-semibold text-lg md:text-4xl border-b-2 border-slate-400 pb-4'>Empowering Growth with Trust and Teamwork</h1>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto px-4 sm:px-8 py-6'>

          <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-4'>
            <p className='text-yellow-600 text-xl pb-4 font-semibold'>Uncomplicated & Transparent</p>

            <p>Our approach is uncomplicated and Transparent, allowing our team to get the job done quickly and efficiently.</p>

            <p>Our sourcing services range from finding the best suppliers to your needs, to providing a range of other services.</p>

            <p>We are committed to helping you get the best of your business.</p>
          </div>

          <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-4'>
            <p className='text-yellow-600 text-xl pb-4 font-semibold'>Evaluate the process & get thing done!</p>

            <p>We work on the ground level to ensure a supplier is providding the best quality product.</p>

            <p>We take the guesswork out of sourcing and production, by working closely with the manufactuers to ensure that all products meet the highest standards.</p>

            <p>We provide a comprehensive service that goes beyond just sourcing, as we also work on the production line to make sure that everything is working smoothly.</p>
          </div>

          <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-4'>
            <p className='text-yellow-600 text-xl pb-4 font-semibold'>Independent Scrutinizing & Decision making</p>

            <p>We are proud of our Independent approach at factories & our independent scrutiny and decision making.</p>

            <p>Our experienced Sourcing & QC team are dedicated to making sure our clients get the highest quality products at resonable prices.</p>

            <p>Inspections are conducted benchmaking international quality standards such as ISO, TISI, ANSI, EN, ASTM.</p>
          </div>

          <div className=' border-gray-400 border rounded-md p-4 bg-slate-200 flex flex-col gap-y-4'>
            <p className='text-yellow-600 text-xl pb-4 font-semibold'>Human-centered Business</p>

            <p>a Human-centered Business allows us to place people at the centre of our business model.</p>

            <p>Humanizing our business has allowed us to create a deeper, more meaningful connection with our clients, our team and the community we are part of.</p>

            <div>
              <p className='pb-2'>Doing business with humanity in mind includes:</p>
              <ul className=' list-disc list-inside flex flex-col gap-y-2'>
                <li>Meeting the needs of our team, while working towards a vison or purpose they also feel apart of.</li>

                <li>Making decisions consider 'the bigger picture' and how the consequnces of these decisions will affect clients, suppliers, employees and the commity in general.</li>

                <li>Speaking to the hearts and minds of people through our products, services, actions and business values.</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default CoreValue_AboutUs