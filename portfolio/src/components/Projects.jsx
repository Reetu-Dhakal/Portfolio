import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Complaint Management System",
    tech: "PHP • MySQL",
  },
  {
    title: "Student Management System",
    tech: "Java • MySQL",
  },
  {
    title: "Developer Portfolio",
    tech: "React • Three.js",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <h2 className="text-center text-5xl font-bold">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {projects.map((project) => (
          <Tilt
            key={project.title}
            glareEnable
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-purple-400 transition">

              <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 mb-6" />

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.tech}
              </p>

            </div>
          </Tilt>
        ))}

      </div>

    </section>
  );
}