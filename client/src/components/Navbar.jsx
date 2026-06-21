function Navbar({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto mt-4 px-6">

        <div
          className="rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-500"
          style={{
            backdropFilter: "blur(24px)",

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
                ${0.1 + energy * 0.6}
              )
            `,

            boxShadow: `
              0 0 ${energy * 60}px
              rgba(34,211,238,.25)
            `,
          }}
        >

          {/* Warp Energy Strip */}

          <div
            className="absolute left-0 top-0 h-full rounded-2xl pointer-events-none transition-all duration-300"
            style={{
              width: `${energy * 100}%`,
              background: `
                linear-gradient(
                  90deg,
                  rgba(34,211,238,.15),
                  rgba(168,85,247,.1),
                  transparent
                )
              `,
            }}
          />

          {/* Left Side */}

          <div className="relative z-10">

            <p
              className="text-xs tracking-[4px] uppercase transition-all duration-300"
              style={{
                color: "#67e8f9",

                textShadow: `
                  0 0 ${energy * 15}px
                  rgba(34,211,238,.8)
                `,
              }}
            >
              Mission Control
            </p>

            <h1
              className="font-bold text-xl tracking-wider transition-all duration-300"
              style={{
                textShadow: `
                  0 0 ${energy * 20}px
                  rgba(255,255,255,.2)
                `,
              }}
            >
              OM JADHAV
            </h1>

          </div>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-8 relative z-10">

            {[
              "Profile",
              "Arsenal",
              "Missions",
              "Contact",
            ].map((item, index) => (
              <a
                key={item}
                href={
                  index === 0
                    ? "#about"
                    : index === 1
                    ? "#skills"
                    : index === 2
                    ? "#projects"
                    : "#contact"
                }
                className="transition-all duration-300"
                style={{
                  color:
                    warpSpeed > 7
                      ? "#e2e8f0"
                      : "#cbd5e1",

                  textShadow:
                    warpSpeed > 8
                      ? `
                        0 0 ${energy * 15}px
                        rgba(34,211,238,.8)
                      `
                      : "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color =
                    "#67e8f9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color =
                    warpSpeed > 7
                      ? "#e2e8f0"
                      : "#cbd5e1";
                }}
              >
                {item}
              </a>
            ))}

          </div>

          {/* Warp Indicator */}

          <div
            className="hidden lg:flex items-center gap-2 text-xs relative z-10"
            style={{
              color:
                warpSpeed > 8
                  ? "#67e8f9"
                  : "#94a3b8",
            }}
          >
            <span>WARP</span>

            <div className="w-20 h-1 rounded-full bg-slate-800 overflow-hidden">

              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${energy * 100}%`,
                  background:
                    warpSpeed > 8
                      ? "linear-gradient(90deg,#22d3ee,#67e8f9,#ffffff)"
                      : "linear-gradient(90deg,#22d3ee,#67e8f9)",
                  boxShadow: `
                    0 0 ${energy * 20}px
                    rgba(34,211,238,.8)
                  `,
                }}
              />

            </div>

            <span>
              {warpSpeed.toFixed(1)}x
            </span>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;