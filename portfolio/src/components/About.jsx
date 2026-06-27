import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          I'm Reetu, a BSc CSIT student who enjoys
          combining creativity and technology.
          My interests include Full Stack Development,
          Cybersecurity and Artificial Intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <h3 className="text-4xl font-bold text-purple-400">
              10+
            </h3>
            <p className="mt-2 text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <h3 className="text-4xl font-bold text-pink-400">
              15+
            </h3>
            <p className="mt-2 text-gray-400">
              Technologies
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <h3 className="text-4xl font-bold text-purple-400">
              3+
            </h3>
            <p className="mt-2 text-gray-400">
              Years Learning
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}