import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import Tape from "./scrapbook/Tape";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Reetu-Dhakal", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ritu-d-563669300/", icon: FaLinkedin },
  { name: "Email", href: "mailto:dhakalreetu05@gmail.com", icon: null },
];

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-paper-lines" aria-hidden="true" />
      <div className="container hero-shell">
        <motion.div
          className="hero-copy"
          style={{ y: reduceMotion ? 0 : titleY }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span className="hero-hello" variants={fadeUp}>Hello, I&apos;m</motion.span>
          <motion.h1 className="hero-title" variants={fadeUp}>
            <span>Ritu</span>
            <span>Dhakal</span>
          </motion.h1>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button-primary" href="#projects">
              Explore my work
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              About me <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait-column"
          style={{
            y: reduceMotion ? 0 : portraitY,
            rotate: reduceMotion ? 0 : portraitRotate,
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <CursorPortrait />
          <Handwritten className="hero-portrait-note" rotation={-3} size="1.4rem"></Handwritten>
          <Arrow className="hero-portrait-arrow" direction="downLeft" rotation={-7} size={32} />
        </motion.div>
        <nav className="hero-socials" aria-label="Social links">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a href={href} aria-label={name} key={name}>
              {Icon ? <Icon size={15} aria-hidden="true" /> : <span aria-hidden="true">@</span>}
              {name}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i><span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i>
          <span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i><span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i>
          <span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i><span>learn</span><i>✦</i><span>build</span><i>✦</i><span>connect</span><i>✦</i><span>repeat</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

function CursorPortrait() {
  const frameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canTrack =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canTrack || !frameRef.current || !imageRef.current) {
      return undefined;
    }

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frameId = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      imageRef.current.style.transform = `perspective(1100px) rotateX(${current.y * -3}deg) rotateY(${current.x * 4}deg) translate3d(${current.x * 6}px, ${current.y * 4}px, 0) scale(1.02)`;
      frameRef.current.style.setProperty("--pointer-x", `${50 + current.x * 34}%`);
      frameRef.current.style.setProperty("--pointer-y", `${50 + current.y * 34}%`);
      const moving = Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001;
      frameId = moving ? requestAnimationFrame(render) : 0;
    };

    const requestRender = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event) => {
      const bounds = frameRef.current.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)));
      target.y = Math.max(-1, Math.min(1, (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)));
      requestRender();
    };

    const reset = () => {
      target.x = 0;
      target.y = 0;
      requestRender();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", reset);
    window.addEventListener("blur", reset);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", reset);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <div className="portrait-stage">
      <Tape className="portrait-tape portrait-tape-top" rotation={-5} width="6.5rem" height="1.45rem" />
      <div className="portrait-frame" ref={frameRef}>
        <img
          ref={imageRef}
          src="/hero_avatar.png"
          alt="Portrait of Ritu Dhakal"
          width="896"
          height="1196"
          fetchPriority="high"
        />
      </div>
      <Tape className="portrait-tape portrait-tape-bottom" rotation={4} width="5.5rem" height="1.3rem" />
      <Handwritten className="portrait-caption" rotation={2} size="1.05rem"></Handwritten>
    </div>
  );
}
