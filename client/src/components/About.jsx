function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-12">

        <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
          Astronaut Profile
        </p>

        <h2 className="text-5xl font-bold">
          About Me
        </h2>

      </div>

      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">

        <p className="text-slate-300 text-lg leading-9">
          I'm <span className="text-white font-semibold">Om Jadhav</span>,
          a Full Stack Developer and MCA student based in Pune, India.

          I build production-ready web applications,
          scalable backend systems, payment integrations,
          real-time communication platforms and modern user experiences.
        </p>

        <p className="text-slate-300 text-lg leading-9 mt-6">
          My interests include System Design,
          Distributed Systems, Cloud Infrastructure,
          Artificial Intelligence and Product Engineering.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              MCA
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              DY Patil Pune
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              Full Stack
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Developer
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              Pune
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Maharashtra
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              2026
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              MCA Graduation
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;