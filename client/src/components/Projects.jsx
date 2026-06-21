function Projects({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  const projects = [
    {
      title: "Renton",
      description:
        "Real-time rental marketplace featuring live communication, location-based discovery, payment workflows and scalable background processing.",
      tech: ["React", "Socket.io", "Redis", "BullMQ", "Docker"],
    },
    {
      title: "Ek Paul Foundation",
      description:
        "Production-ready donation platform with Razorpay integration, Firebase authentication and admin content management.",
      tech: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    },
    {
      title: "DineDesk Lite",
      description:
        "Restaurant management application built for offline-first operations using React Native and SQLite.",
      tech: ["React Native", "Expo", "SQLite", "TypeScript"],
    },
    {
      title: "PlotConnect",
      description:
        "Real estate platform for builders and customers with image management and project discovery.",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    },
  ];

  return (
    <section
      id="projects"
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
          Mission Archive
        </p>

        <h2
          className="text-5xl font-bold transition-all duration-300"
          style={{
            textShadow: `
              0 0 ${energy * 40}px
              rgba(34,211,238,.35)
            `,
          }}
        >
          Featured Projects
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
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
                rgba(34,211,238,.18)
              `,
            }}
          >
            <div className="flex justify-between items-start mb-5">

              <h3
                className="text-2xl font-bold transition-all duration-300"
                style={{
                  textShadow: `
                    0 0 ${energy * 25}px
                    rgba(34,211,238,.45)
                  `,
                }}
              >
                {project.title}
              </h3>

              <span
                className="text-2xl transition-all duration-300"
                style={{
                  filter: `
                    drop-shadow(
                      0 0 ${energy * 12}px
                      rgba(34,211,238,.8)
                    )
                  `,
                  transform: `
                    scale(${1 + energy * 0.15})
                  `,
                }}
              >
                🚀
              </span>

            </div>

            <p
              className="leading-7 mb-6 transition-all duration-300"
              style={{
                color:
                  warpSpeed > 8
                    ? "#e2e8f0"
                    : "#cbd5e1",
              }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm transition-all duration-300"
                  style={{
                    color:
                      warpSpeed > 7
                        ? "#cffafe"
                        : "#67e8f9",

                    background: `
                      rgba(
                        34,
                        211,
                        238,
                        ${0.08 + energy * 0.18}
                      )
                    `,

                    border: `
                      1px solid
                      rgba(
                        34,
                        211,
                        238,
                        ${0.15 + energy * 0.45}
                      )
                    `,

                    boxShadow: `
                      0 0 ${energy * 20}px
                      rgba(34,211,238,.25)
                    `,
                  }}
                >
                  {tech}
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
                      transparent 40%,
                      rgba(103,232,249,.04)
                    )
                  `,
                }}
              />
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;