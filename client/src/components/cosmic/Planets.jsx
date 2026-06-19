function Planets() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">

      {/* Main Planet */}

      <div
        className="
          absolute
          top-[20%]
          left-[8%]
          w-32
          h-32
          rounded-full
          bg-gradient-to-br
          from-purple-300
          via-purple-600
          to-slate-950
          shadow-[0_0_100px_rgba(168,85,247,0.5)]
          float-planet
      "
      />

      {/* Ring */}

      <div
        className="
          absolute
          top-[24.5%]
          left-[4.5%]
          w-48
          h-10
          border
          border-cyan-300/30
          rounded-full
          rotate-[-20deg]
        "
      />

      {/* Outer Ring */}

      <div
        className="
          absolute
          top-[24.5%]
          left-[4%]
          w-52
          h-12
          border
          border-white/10
          rounded-full
          rotate-[-20deg]
        "
      />

    </div>
  );
}

export default Planets;