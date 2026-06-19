function Projects() {
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

        <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
          Mission Archive
        </p>

        <h2 className="text-5xl font-bold">
          Featured Projects
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-5">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <span className="text-cyan-400">
                🚀
              </span>

            </div>

            <p className="text-slate-300 leading-7 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;