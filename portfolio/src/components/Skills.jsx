import SkillOrb from "./SkillOrb";

export default function Skills() {
  return (
    <section id="skills" className="py-32">

      <h2 className="text-center text-5xl font-bold mb-8">
        Tech Stack
      </h2>

      <p className="text-center text-gray-400 mb-20">
        Technologies I use to build modern applications.
      </p>

      <SkillOrb />

    </section>
  );
}