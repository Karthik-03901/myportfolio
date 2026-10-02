import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import TechMarquee from "@/components/ui/TechMarquee";
import Navigation from "@/components/layout/Navigation";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <CommandPalette />
      <SmoothScroll>
        <Navigation />
        <main id="main-content" className="relative">
          <Hero />
          <TechMarquee />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Process />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
