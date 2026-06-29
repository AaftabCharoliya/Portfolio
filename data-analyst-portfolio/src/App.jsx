import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {

  useEffect(() => {

  AOS.init({
    duration:1000
  });

}, []);


  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
import About from "./components/About";
import Contact from "./components/Contact";