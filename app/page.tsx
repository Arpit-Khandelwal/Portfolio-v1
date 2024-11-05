import Image from "next/image";
import Appbar from "./components/Appbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home()
{
  return (
    <>
      <Appbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}
