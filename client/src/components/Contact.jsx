import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">

        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
          Mission Control
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Let's Connect
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Whether it's a project, internship,
          collaboration, or just a conversation
          about technology and software engineering.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Communication Card */}

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-xl font-semibold mb-8">
            Communication Channel
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div className="p-3 rounded-xl bg-cyan-500/10">
                <IoMailOutline className="text-xl text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:omjadhav1053@gmail.com"
                  className="text-lg hover:text-cyan-400 transition"
                >
                  omjadhav1053@gmail.com
                </a>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="p-3 rounded-xl bg-cyan-500/10">
                <IoLocationOutline className="text-xl text-cyan-400" />
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

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-xl font-semibold mb-8">
            Social Orbit
          </h3>

          <div className="space-y-4">

            <a
              href="https://github.com/omjadhav02"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition"
            >
              <div className="flex items-center gap-3">
                <IoLogoGithub className="text-xl" />
                <span>GitHub</span>
              </div>

              <span>→</span>
            </a>

            <a
              href="https://linkedin.com/in/omjadhav02"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition"
            >
              <div className="flex items-center gap-3">
                <IoLogoLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </div>

              <span>→</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;