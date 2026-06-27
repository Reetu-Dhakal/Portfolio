import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import Laptop from "../three/Laptop";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
            BSc CSIT Student
          </span>

          <h1 className="text-6xl md:text-7xl font-bold mt-6 leading-tight">
            Building
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Secure &
            </span>
            <br />
            Beautiful Digital Experiences
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Full Stack Developer passionate about
            Web Development, Cybersecurity and AI.
            I enjoy building elegant interfaces with
            modern technologies.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border border-purple-500"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <div className="h-[500px]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={2} />

            <Float speed={2}>
              <Laptop />
            </Float>
          </Canvas>
        </div>

      </div>
    </section>
  );
}