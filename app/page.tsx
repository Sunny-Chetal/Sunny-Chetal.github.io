import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Coursework from "@/components/Coursework";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Coursework />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
