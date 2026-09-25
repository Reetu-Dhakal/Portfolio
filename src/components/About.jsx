import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Reveal className="section-heading" amount={0.25}>
          <span className="section-kicker"> A LITTLE ABOUT ME</span>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-copy" direction="right" distance={28}>
            <p className="about-lead">
              I&apos;m Ritu, a BSc CSIT student exploring networking and
              cybersecurity through hands-on learning.
            </p>

            <p>
              I&apos;ve always been interested in understanding how things
              connect from the systems behind a website to the networks
              that keep information moving. Lately, I&apos;ve been spending
              more time learning about network security, threats, monitoring,
              and how systems can be protected.
            </p>

            <p>
              I like learning by doing, whether that means exploring a
              security tool, understanding a network, or figuring out why
              something works the way it does. I&apos;m still learning, but
              that&apos;s probably the part I enjoy most.
            </p>

            <Handwritten
              className="about-handnote"
              rotation={-2}
            >
              currently exploring the world behind the screen ↗
            </Handwritten>
          </Reveal>

          <Reveal
            className="about-collage"
            direction="left"
            distance={32}
            delay={0.1}
          >
            <img
              className="about-photo"
              src="/hero_avatar.png"
              alt="Ritu Dhakal"
              loading="lazy"
              decoding="async"
              width={896}
              height={1196}
            />

            <Arrow
              className="about-arrow"
              direction="downRight"
              rotation={-8}
              size={30}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
