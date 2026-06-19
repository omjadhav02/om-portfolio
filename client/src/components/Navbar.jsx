function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto mt-4 px-6">

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg">

          <div>

            <p className="text-xs tracking-[4px] text-cyan-400 uppercase">
              Mission Control
            </p>

            <h1 className="font-bold text-xl tracking-wider">
              OM JADHAV
            </h1>

          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-300">

            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              Profile
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Arsenal
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Missions
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;