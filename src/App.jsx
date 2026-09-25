import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Currently from "./components/Currently";
import Notes from "./components/Notes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div aria-hidden="true" className="scroll-progress" style={reduceMotion ? { scaleX: 0 } : { scaleX }} />;
}

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let frameId;
    const handleMenuState = (event) => {
      if (event.detail?.open) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    window.addEventListener("portfolio:menu", handleMenuState);
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("portfolio:menu", handleMenuState);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Currently />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
