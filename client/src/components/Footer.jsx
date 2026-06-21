import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";

function Footer({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Reactor Glow */}

      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(
                34,
                211,
                238,
                ${0.03 + energy * 0.15}
              ),
              transparent
            )
          `,
        }}
      />

      {warpSpeed > 8 && (
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-full blur-[140px] pointer-events-none"
          style={{
            width: `${500 + energy * 300}px`,
            height: `${250 + energy * 150}px`,
            background: `
              rgba(
                34,
                211,
                238,
                ${energy * 0.12}
              )
            `,
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="rounded-3xl p-10 text-center transition-all duration-500"
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

            backdropFilter: "blur(24px)",

            boxShadow: `
              0 0 ${energy * 90}px
              rgba(34,211,238,.18)
            `,
          }}
        >

          <div className="mb-6">

            <p
              className="uppercase tracking-[6px] text-sm mb-3 transition-all duration-300"
              style={{
                color: "#67e8f9",

                textShadow: `
                  0 0 ${energy * 20}px
                  rgba(34,211,238,.8)
                `,
              }}
            >
              End Of Transmission
            </p>

            <h3
              className="text-3xl font-bold transition-all duration-300"
              style={{
                textShadow: `
                  0 0 ${energy * 35}px
                  rgba(34,211,238,.35)
                `,
              }}
            >
              Om Jadhav
            </h3>

          </div>

          <p
            className="max-w-xl mx-auto leading-8 mb-8 transition-all duration-300"
            style={{
              color:
                warpSpeed > 8
                  ? "#cbd5e1"
                  : "#94a3b8",
            }}
          >
            Full Stack Developer passionate about building
            scalable systems, modern web applications and
            meaningful digital experiences.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">

            {[
              {
                name: "GitHub",
                icon: <IoLogoGithub className="text-lg" />,
                href: "https://github.com/omjadhav02",
              },
              {
                name: "LinkedIn",
                icon: <IoLogoLinkedin className="text-lg" />,
                href: "https://linkedin.com/in/omjadhav02",
              },
              {
                name: "Email",
                icon: <IoMailOutline className="text-lg" />,
                href: "mailto:omjadhav1053@gmail.com",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
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
                      ${0.08 + energy * 0.4}
                    )
                  `,

                  boxShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.12)
                  `,
                }}
              >
                {item.icon}
                {item.name}
              </a>
            ))}

          </div>

          <div
            className="mx-auto mb-6 transition-all duration-300"
            style={{
              width: `${96 + energy * 30}px`,
              height: "1px",

              background: `
                linear-gradient(
                  to right,
                  transparent,
                  rgba(
                    103,
                    232,
                    249,
                    ${0.5 + energy * 0.5}
                  ),
                  transparent
                )
              `,

              boxShadow: `
                0 0 ${energy * 20}px
                rgba(34,211,238,.5)
              `,
            }}
          />

          <p
            className="text-sm transition-all duration-300"
            style={{
              color:
                warpSpeed > 8
                  ? "#94a3b8"
                  : "#64748b",
            }}
          >
            © {new Date().getFullYear()} Om Jadhav · Exploring the universe one commit at a time.
          </p>

          {warpSpeed > 9 && (
            <p
              className="mt-4 text-xs uppercase tracking-[4px]"
              style={{
                color: "#67e8f9",
                textShadow:
                  "0 0 15px rgba(34,211,238,.8)",
              }}
            >
              Warp Core Stable
            </p>
          )}

        </div>

      </div>

    </footer>
  );
}

export default Footer;