import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative mt-24">

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

          <div className="mb-6">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-3">
              End Of Transmission
            </p>

            <h3 className="text-3xl font-bold">
              Om Jadhav
            </h3>

          </div>

          <p className="text-slate-400 max-w-xl mx-auto leading-8 mb-8">
            Full Stack Developer passionate about building
            scalable systems, modern web applications and
            meaningful digital experiences.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">

            <a
              href="https://github.com/omjadhav02"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition flex items-center gap-2"
            >
              <IoLogoGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/omjadhav02"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition flex items-center gap-2"
            >
              <IoLogoLinkedin className="text-lg" />
              LinkedIn
            </a>

            <a
              href="mailto:omjadhav1053@gmail.com"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition flex items-center gap-2"
            >
              <IoMailOutline className="text-lg" />
              Email
            </a>

          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Om Jadhav · Exploring the universe one commit at a time.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;