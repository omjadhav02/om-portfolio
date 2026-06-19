function Nebulae() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">

      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />

      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />

    </div>
  );
}

export default Nebulae;