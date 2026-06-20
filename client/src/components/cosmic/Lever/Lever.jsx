import { useRef } from "react";

function Lever({ warpSpeed, setWarpSpeed }) {
  const trackRef = useRef(null);

  const updateSpeed = (clientY) => {
    if (!trackRef.current) return;

    const rect =
      trackRef.current.getBoundingClientRect();

    let y = clientY - rect.top;

    y = Math.max(
      0,
      Math.min(rect.height, y)
    );

    const progress =
      y / rect.height;

    setWarpSpeed(
      1 + progress * 9
    );
  };

  const startDrag = (e) => {
    e.preventDefault();

    const move = (event) =>
      updateSpeed(event.clientY);

    const stop = () => {
      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseup",
        stop
      );
    };

    window.addEventListener(
      "mousemove",
      move
    );

    window.addEventListener(
      "mouseup",
      stop
    );
  };

  const leverPosition =
    ((warpSpeed - 1) / 9) * 110;

  const glow =
    warpSpeed > 7
      ? "shadow-cyan-400/60"
      : "shadow-cyan-500/30";

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

      {/* Cockpit Module */}
      <div
        className="
          w-20
          rounded-2xl
          border
          border-slate-700/70
          bg-slate-950/80
          backdrop-blur-xl
          p-3
          shadow-2xl
        "
      >
        {/* Warp Readout */}
        <div className="mb-3 text-center">
          <div className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
            Warp
          </div>

          <div className="text-cyan-300 text-sm font-semibold">
            {warpSpeed.toFixed(1)}x
          </div>
        </div>

        {/* Throttle */}
        <div className="relative flex justify-center">

          {/* Rail */}
          <div
            ref={trackRef}
            className="
              relative
              w-2
              h-28
              rounded-full
              bg-slate-800
              border
              border-slate-700
              overflow-hidden
            "
          >
            {/* Active Energy */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                bg-gradient-to-t
                from-cyan-500
                via-cyan-400
                to-cyan-300
                transition-all
                duration-150
              "
              style={{
                height: `${
                  ((warpSpeed - 1) / 9) *
                  100
                }%`,
              }}
            />
          </div>

          {/* Lever */}
          <div
            onMouseDown={startDrag}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              cursor-grab
              active:cursor-grabbing
            "
            style={{
              top: `${leverPosition}px`,
            }}
          >
            {/* Arm */}
            <div className="w-[3px] h-6 bg-slate-300 mx-auto rounded-full" />

            {/* Handle */}
            <div
              className={`
                w-8
                h-5
                rounded-md
                border
                border-slate-300
                bg-gradient-to-b
                from-slate-100
                via-slate-300
                to-slate-500
                shadow-lg
                ${glow}
              `}
            >
              <div className="flex justify-center items-center h-full">
                <div className="w-4 h-[2px] rounded-full bg-slate-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Notches */}
        <div className="mt-3 flex flex-col gap-[2px] text-[8px] text-slate-500 text-center">
          <span>1x</span>
          <span>5x</span>
          <span>10x</span>
        </div>
      </div>
    </div>
  );
}

export default Lever;