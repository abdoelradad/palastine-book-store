import Articles from "@/app/_components/Articles";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Best from "@/app/_components/Best";
import Books from "@/app/_components/Books";

export default function Home() {
  return (
    <main className=" bg-gradient-to-b  from-white via-[#e3ffee] to-white">
      <Header />

      <Hero />
      <Articles />
      <Best />
      <Books />

      <Footer />
    </main>
  );
}
