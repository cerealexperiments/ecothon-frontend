import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";
import CustomizeNow from "@/components/CustomizeNow"
export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingProducts/>
      <CustomizeNow/>
    </main>
  );
}