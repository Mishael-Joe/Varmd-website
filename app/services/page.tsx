import { Header_Services, ProductSourcing, QualityTiles } from "@/components/services";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header_Services />
      <QualityTiles />
      <ProductSourcing />
    </main>
  )
}