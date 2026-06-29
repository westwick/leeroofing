import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promise from "@/components/Promise";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Promise />
        <Reviews />
        <Locations />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
