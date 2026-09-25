import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import PaperNote from "./scrapbook/PaperNote";
import Polaroid from "./scrapbook/Polaroid";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Reveal className="section-heading" amount={0.25}>
          <span className="section-kicker">01 <i>—</i> A LITTLE ABOUT ME</span>

          <h2>
            I&apos;m a CSIT student becoming more curious about what happens
            behind the screen.
          </h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-copy" direction="right" distance={28}>
            <p className="about-lead">
              I&apos;m Ritu, a BSc CSIT student exploring networking and
              cybersecurity through hands-on learning.
            </p>

            <p>
              I&apos;ve always been interested in understanding how things
              connect — from the systems behind a website to the networks
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
            <Polaroid
              className="about-polaroid"
              imageSrc="/hero_avatar.png"
              imageAlt="Ritu Dhakal"
              label="the person behind the tabs"
              rotation={2}
              imageProps={{
                width: 896,
                height: 1196,
                loading: "lazy",
              }}
            />

            <PaperNote
              className="about-note"
              label="A few coordinates"
              rotation={-3}
            >
              Networking, cybersecurity, systems, and learning how
              everything connects.
            </PaperNote>

            <Arrow
              className="about-arrow"
              direction="downRight"
              rotation={-8}
              size={30}
            />

            <Handwritten
              className="about-side-note"
              rotation={3}
              size="1.15rem"
            >
              still figuring it out :)
            </Handwritten>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
