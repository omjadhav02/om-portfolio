function Skills() {
  const skillGroups = {
    Frontend: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],

    Backend: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
    ],

    Database: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],

    DevOps: [
      "Docker",
      "Git",
      "GitHub",
      "Render",
      "Vercel",
    ],
  };

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">

        <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
          Tech Arsenal
        </p>

        <h2 className="text-5xl font-bold">
          Technologies I Work With
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {Object.entries(skillGroups).map(
          ([category, skills]) => (
            <div
              key={category}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/50 transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          )
        )}

      </div>
    </section>
  );
}

export default Skills;