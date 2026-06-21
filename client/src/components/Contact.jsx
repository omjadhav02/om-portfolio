import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

function Contact({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">

        <p
          className="uppercase tracking-[6px] mb-4 transition-all duration-300"
          style={{
            color: "#67e8f9",
            textShadow: `
              0 0 ${energy * 20}px
              rgba(34,211,238,.8)
            `,
          }}
        >
          Mission Control
        </p>

        <h2
          className="text-5xl font-bold mb-4 transition-all duration-300"
          style={{
            textShadow: `
              0 0 ${energy * 40}px
              rgba(34,211,238,.35)
            `,
          }}
        >
          Let's Connect
        </h2>

        <p
          className="max-w-2xl mx-auto transition-all duration-300"
          style={{
            color:
              warpSpeed > 8
                ? "#cbd5e1"
                : "#94a3b8",
          }}
        >
          Whether it's a project, internship,
          collaboration, or just a conversation
          about technology and software engineering.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Communication Card */}

        <div
          className="rounded-3xl p-8 transition-all duration-500"
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
          <h3
            className="text-xl font-semibold mb-8"
            style={{
              textShadow: `
                0 0 ${energy * 20}px
                rgba(34,211,238,.5)
              `,
            }}
          >
            Communication Channel
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div
                className="p-3 rounded-xl"
                style={{
                  background: `
                    rgba(
                      34,
                      211,
                      238,
                      ${0.08 + energy * 0.2}
                    )
                  `,

                  boxShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.25)
                  `,
                }}
              >
                <IoMailOutline
                  className="text-xl"
                  style={{
                    color: "#67e8f9",
                  }}
                />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:omjadhav1053@gmail.com"
                  className="text-lg transition-all duration-300"
                  style={{
                    color:
                      warpSpeed > 7
                        ? "#e2e8f0"
                        : "#ffffff",
                  }}
                >
                  omjadhav1053@gmail.com
                </a>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div
                className="p-3 rounded-xl"
                style={{
                  background: `
                    rgba(
                      34,
                      211,
                      238,
                      ${0.08 + energy * 0.2}
                    )
                  `,

                  boxShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.25)
                  `,
                }}
              >
                <IoLocationOutline
                  className="text-xl"
                  style={{
                    color: "#67e8f9",
                  }}
                />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="text-lg">
                  Pune, Maharashtra, India
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Social Card */}

        <div
          className="rounded-3xl p-8 transition-all duration-500"
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
          <h3
            className="text-xl font-semibold mb-8"
            style={{
              textShadow: `
                0 0 ${energy * 20}px
                rgba(34,211,238,.5)
              `,
            }}
          >
            Social Orbit
          </h3>

          <div className="space-y-4">

            {[
              {
                name: "GitHub",
                icon: <IoLogoGithub className="text-xl" />,
                link: "https://github.com/omjadhav02",
              },
              {
                name: "LinkedIn",
                icon: <IoLogoLinkedin className="text-xl" />,
                link: "https://linkedin.com/in/omjadhav02",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `
                    rgba(
                      255,
                      255,
                      255,
                      ${0.03 + energy * 0.05}
                    )
                  `,

                  border: `
                    1px solid
                    rgba(
                      103,
                      232,
                      249,
                      ${0.08 + energy * 0.45}
                    )
                  `,

                  boxShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.15)
                  `,
                }}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>

                <span>→</span>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;