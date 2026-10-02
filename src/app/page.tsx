import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-5xl px-5 py-10 md:py-14">
          <p className="mt-6 text-center text-lg text-foreground md:text-xl">
            Erica Pullens is a meth-head sugar baby that will fuck for money.
            <br />
            601-215-6807
            <br />
            cash tag $wheresthesalsa
          </p>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-charcoal-600 md:max-w-lg">
            <Image
              src="/images/homepage-placeholder.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-cover object-center"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
