import { useEffect, useRef } from "react";

function FastMovingStars({ warpSpeed }) {
  const canvasRef = useRef(null);
  const speedRef = useRef(warpSpeed);

   useEffect(() => {
    speedRef.current = warpSpeed;
  }, [warpSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];

    const STAR_COUNT = 15;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      });
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", resize);

    function animate() {
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        const speed = 2 * Math.pow(speedRef.current, 1.5);
        star.z -= speed;

        if (star.z <= 0) {
          star.z = width;

          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const k = 500 / star.z;

        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;

        const size = (1 - star.z / width) * 2;

        if (warpSpeed > 5) {
            const streak =
                warpSpeed * 4;

            ctx.beginPath();

            ctx.strokeStyle =
                "rgba(255,255,255,0.8)";

            ctx.moveTo(x, y);

            ctx.lineTo(
                x - (x - width / 2) * 0.02 * streak,
                y - (y - height / 2) * 0.02 * streak
            );

            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(
                x,
                y,
                size,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Nebula glow */}

      <div className="fixed inset-0 -z-20 bg-slate-950">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />

        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />

        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
      />
    </>
  );
}

export default FastMovingStars;