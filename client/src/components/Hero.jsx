function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative pt-24">

      {/* Hero Glow */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px]" />

      <div className="max-w-4xl text-center relative z-10">

        <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
          Welcome To
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-4">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
            OM-NIVERSE
          </span>
        </h1>

        <p className="uppercase tracking-[4px] text-slate-400 mb-8">
          Om Jadhav
        </p>

        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Full Stack Developer exploring the intersection
          of scalable systems, real-time applications,
          and modern digital experiences.
        </p>

        <p className="mt-6 text-cyan-400 text-sm tracking-[3px] uppercase">
          MCA '26 • Pune, India • Full Stack Developer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-medium hover:scale-105 transition"
          >
            Explore Missions 🚀
          </a>

          <a
            href="#contact"
            className="px-7 py-4 rounded-xl border border-white/20 backdrop-blur-md bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition"
          >
            Contact Mission Control
          </a>

        </div>

        <div className="mt-16 animate-bounce">

          <a
            href="#about"
            className="text-slate-500 hover:text-cyan-400 transition"
          >
            ↓ Begin Journey
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;