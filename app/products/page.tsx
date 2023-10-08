import { Header_Explore, Header_product, MableLook_Beige, MableLook_Black, MableLook_Green, MableLook_Grey, MableLook_White } from '@/components/products'
import React from 'react'

function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header_product />
      <Header_Explore />
      <MableLook_White />
      <MableLook_Beige />
      <MableLook_Grey />
      <MableLook_Black />
      <MableLook_Green />
    </main>
  )
}

export default Home