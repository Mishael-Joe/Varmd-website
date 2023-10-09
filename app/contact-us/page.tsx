import { ContactUs_Form, Header_ContactUs, OurContact } from '@/components/contactUs'
import React from 'react'

function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header_ContactUs />
      <OurContact />
      <ContactUs_Form />
    </main>
  )
}

export default Home