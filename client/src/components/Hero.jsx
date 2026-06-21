function Hero({ warpSpeed }) {
  const energy = (warpSpeed - 1) / 9;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative pt-24 overflow-hidden">

      {/* Dynamic Hero Glow */}
      <div
        className="absolute rounded-full blur-[180px] transition-all duration-500"
        style={{
          width: `${700 + energy * 500}px`,
          height: `${700 + energy * 500}px`,
          background: `
            radial-gradient(
              circle,
              rgba(34,211,238,${0.08 + energy * 0.35}) 0%,
              rgba(168,85,247,${0.05 + energy * 0.25}) 45%,
              transparent 75%
            )
          `,
          transform: `scale(${1 + energy * 0.3})`,
        }}
      />

      {/* Warp Ring */}
      {warpSpeed > 7 && (
        <div
          className="absolute rounded-full border animate-pulse"
          style={{
            width: `${800 + energy * 400}px`,
            height: `${800 + energy * 400}px`,
            borderColor: `rgba(103,232,249,${
              energy * 0.4
            })`,
            boxShadow: `
              0 0 ${energy * 120}px
              rgba(34,211,238,.5)
            `,
          }}
        />
      )}

      <div className="max-w-4xl text-center relative z-10">

        <p
          className="uppercase tracking-[8px] mb-4 transition-all duration-300"
          style={{
            color: `rgba(
              103,
              232,
              249,
              ${0.8 + energy * 0.2}
            )`,
            textShadow: `
              0 0 ${energy * 20}px
              rgba(34,211,238,.9)
            `,
          }}
        >
          Welcome To
        </p>

        <h1
          className="text-6xl md:text-8xl font-black mb-4 transition-all duration-300"
          style={{
            transform: `scale(${1 + energy * 0.04})`,
            textShadow: `
              0 0 ${energy * 60}px
              rgba(34,211,238,.6)
            `,
          }}
        >
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                warpSpeed < 4
                  ? "linear-gradient(90deg,#c084fc,#22d3ee,#3b82f6)"
                  : warpSpeed < 8
                  ? "linear-gradient(90deg,#a855f7,#22d3ee,#06b6d4,#3b82f6)"
                  : "linear-gradient(90deg,#ffffff,#67e8f9,#22d3ee,#818cf8,#c084fc)",
            }}
          >
            OM-NIVERSE
          </span>
        </h1>

        <p
          className="uppercase tracking-[4px] mb-8 transition-all duration-300"
          style={{
            color:
              warpSpeed > 7
                ? "#cbd5e1"
                : "#94a3b8",
          }}
        >
          Om Jadhav
        </p>

        <p
          className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto transition-all duration-300"
          style={{
            textShadow:
              warpSpeed > 8
                ? "0 0 20px rgba(255,255,255,.15)"
                : "none",
          }}
        >
          Full Stack Developer exploring the intersection
          of scalable systems, real-time applications,
          and modern digital experiences.
        </p>

        <p
          className="mt-6 text-sm tracking-[3px] uppercase transition-all duration-300"
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
          MCA '26 • Pune, India • Full Stack Developer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="px-7 py-4 rounded-xl font-medium transition-all duration-300"
            style={{
              background:
                warpSpeed < 7
                  ? "linear-gradient(90deg,#9333ea,#06b6d4)"
                  : "linear-gradient(90deg,#06b6d4,#67e8f9,#ffffff)",

              boxShadow: `
                0 0 ${energy * 40}px
                rgba(34,211,238,.8)
              `,

              transform: `scale(${1 + energy * 0.05})`,
            }}
          >
            Explore Missions 🚀
          </a>

          <a
            href="#contact"
            className="px-7 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
            style={{
              background: `
                rgba(
                  255,
                  255,
                  255,
                  ${0.05 + energy * 0.08}
                )
              `,

              border: `
                1px solid
                rgba(
                  103,
                  232,
                  249,
                  ${0.15 + energy * 0.6}
                )
              `,

              boxShadow: `
                0 0 ${energy * 25}px
                rgba(34,211,238,.4)
              `,
            }}
          >
            Contact Mission Control
          </a>

        </div>

        <div className="mt-16 animate-bounce">

          <a
            href="#about"
            className="transition-all duration-300"
            style={{
              color:
                warpSpeed > 7
                  ? "#67e8f9"
                  : "#64748b",
            }}
          >
            ↓ Begin Journey
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;