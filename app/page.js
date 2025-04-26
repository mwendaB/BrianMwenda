import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MainHero from "@/components/container/MainHero/MainHero"
import About from "@/components/container/About/About";
import Skills from "@/components/container/Skills/Skills";
import Portfolio from "@/components/container/Portfolio/Portfolio";
import Contact from "@/components/container/Contact/Contact";
import Footer from "@/components/container/Footer/Footer";

export default function Home() {
  return (
<>
<Navbar />
      <MainHero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
</>
  );
}
