import { ExploreOurCollection, Header, OurServicesCard, WhyVarmd } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header />
      <OurServicesCard />
      <ExploreOurCollection />
      <WhyVarmd />
    </main>
  )
}
