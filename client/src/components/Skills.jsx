function Skills({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

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

        <p
          className="uppercase tracking-[6px] mb-3 transition-all duration-300"
          style={{
            color: "#67e8f9",
            textShadow: `
              0 0 ${energy * 20}px
              rgba(34,211,238,.8)
            `,
          }}
        >
          Tech Arsenal
        </p>

        <h2
          className="text-5xl font-bold transition-all duration-300"
          style={{
            textShadow: `
              0 0 ${energy * 35}px
              rgba(34,211,238,.35)
            `,
          }}
        >
          Technologies I Work With
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {Object.entries(skillGroups).map(
          ([category, skills]) => (
            <div
              key={category}
              className="rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: `
                  rgba(
                    255,
                    255,
                    255,
                    ${0.04 + energy * 0.08}
                  )
                `,

                border: `
                  1px solid
                  rgba(
                    103,
                    232,
                    249,
                    ${0.1 + energy * 0.55}
                  )
                `,

                backdropFilter: "blur(20px)",

                boxShadow: `
                  0 0 ${energy * 70}px
                  rgba(34,211,238,.15)
                `,
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 transition-all duration-300"
                style={{
                  color:
                    warpSpeed > 7
                      ? "#67e8f9"
                      : "#22d3ee",

                  textShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.8)
                  `,
                }}
              >
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full transition-all duration-300"
                    style={{
                      color:
                        warpSpeed > 7
                          ? "#cffafe"
                          : "#cbd5e1",

                      background: `
                        rgba(
                          34,
                          211,
                          238,
                          ${0.05 + energy * 0.18}
                        )
                      `,

                      border: `
                        1px solid
                        rgba(
                          34,
                          211,
                          238,
                          ${0.12 + energy * 0.5}
                        )
                      `,

                      boxShadow: `
                        0 0 ${energy * 18}px
                        rgba(34,211,238,.2)
                      `,
                    }}
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {warpSpeed > 8 && (
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(
                        135deg,
                        rgba(34,211,238,.03),
                        transparent 35%,
                        rgba(103,232,249,.03)
                      )
                    `,
                  }}
                />
              )}

            </div>
          )
        )}

      </div>
    </section>
  );
}

export default Skills;