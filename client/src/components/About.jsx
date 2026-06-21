function About({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-12">

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
          Astronaut Profile
        </p>

        <h2
          className="text-5xl font-bold transition-all duration-300"
          style={{
            textShadow: `
              0 0 ${energy * 35}px
              rgba(34,211,238,.4)
            `,
          }}
        >
          About Me
        </h2>

      </div>

      <div
        className="rounded-3xl p-8 md:p-10 transition-all duration-500"
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
              ${0.1 + energy * 0.5}
            )
          `,

          backdropFilter: "blur(20px)",

          boxShadow: `
            0 0 ${energy * 80}px
            rgba(34,211,238,.25)
          `,
        }}
      >

        <p
          className="text-lg leading-9 transition-all duration-300"
          style={{
            color:
              warpSpeed > 8
                ? "#e2e8f0"
                : "#cbd5e1",
          }}
        >
          I'm{" "}
          <span
            className="font-semibold"
            style={{
              color:
                warpSpeed > 7
                  ? "#67e8f9"
                  : "#ffffff",

              textShadow: `
                0 0 ${energy * 20}px
                rgba(34,211,238,.7)
              `,
            }}
          >
            Om Jadhav
          </span>
          , a Full Stack Developer and MCA student based in Pune, India.

          I build production-ready web applications,
          scalable backend systems, payment integrations,
          real-time communication platforms and modern user experiences.
        </p>

        <p
          className="text-lg leading-9 mt-6 transition-all duration-300"
          style={{
            color:
              warpSpeed > 8
                ? "#e2e8f0"
                : "#cbd5e1",
          }}
        >
          My interests include System Design,
          Distributed Systems, Cloud Infrastructure,
          Artificial Intelligence and Product Engineering.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-10">

          {[
            {
              title: "MCA",
              subtitle: "DY Patil Pune",
            },
            {
              title: "Full Stack",
              subtitle: "Developer",
            },
            {
              title: "Pune",
              subtitle: "Maharashtra",
            },
            {
              title: "2026",
              subtitle: "MCA Graduation",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
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
                    ${0.1 + energy * 0.5}
                  )
                `,

                boxShadow: `
                  0 0 ${energy * 40}px
                  rgba(34,211,238,.15)
                `,
              }}
            >
              <h3
                className="text-2xl font-bold transition-all duration-300"
                style={{
                  color:
                    warpSpeed > 7
                      ? "#67e8f9"
                      : "#22d3ee",

                  textShadow: `
                    0 0 ${energy * 15}px
                    rgba(34,211,238,.8)
                  `,
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm mt-2"
                style={{
                  color:
                    warpSpeed > 8
                      ? "#cbd5e1"
                      : "#94a3b8",
                }}
              >
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;