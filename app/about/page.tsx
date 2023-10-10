import { Certification_AboutUs, CoreValue_AboutUs, Header_AboutUs, IntroVideo_AboutUs } from "@/components/aboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header_AboutUs />
      <IntroVideo_AboutUs />
      <Certification_AboutUs />
      <CoreValue_AboutUs />
    </main>
  )
}