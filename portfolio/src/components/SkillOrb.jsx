const skills = [
  "React",
  "Node",
  "MongoDB",
  "Python",
  "Java",
  "PHP",
  "Cybersecurity",
  "Three.js"
];

export default function SkillOrb() {
  return (
    <div className="relative w-100 h-100 mx-auto">

      {skills.map((skill,index)=>{

        const angle =
          (index/skills.length)*360;

        return(
          <div
            key={skill}
            className="absolute bg-purple-500 px-4 py-2 rounded-full"
            style={{
              left:`${200+150*Math.cos(angle*Math.PI/180)}px`,
              top:`${200+150*Math.sin(angle*Math.PI/180)}px`
            }}
          >
            {skill}
          </div>
        )
      })}

    </div>
  );
}