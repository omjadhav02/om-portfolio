function Galaxies() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

      <div
        className="
        absolute
        top-[15%]
        right-[10%]
        w-[350px]
        h-[350px]
        rounded-full
        bg-purple-500/10
        blur-[100px]
        animate-spin
      "
        style={{
          animationDuration: "180s",
        }}
      />

    </div>
  );
}

export default Galaxies;