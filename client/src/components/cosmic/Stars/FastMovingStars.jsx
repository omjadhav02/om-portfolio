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

    const STAR_COUNT = 20;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x:
          Math.random() * width -
          width / 2,
        y:
          Math.random() * height -
          height / 2,
        z:
          Math.random() * width,
      });
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener(
      "resize",
      resize
    );

    let animationFrame;

    function animate() {
      ctx.fillStyle = "#020617";
      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      for (const star of stars) {
        const speed = 2 + Math.pow(speedRef.current, 3) * 0.6;
        star.z -= speed;

        if (star.z <= 1) {
          star.z = width;

          star.x = Math.random() * width - width / 2;

          star.y = Math.random() * height - height / 2;

        }

        const k = 500 / star.z;

        const x = star.x * k + width / 2;

        const y = star.y * k + height / 2;

        const size = Math.max(0.5,(1 - star.z / width) * 2);

        if (
          x < -200 ||
          x > width + 200 ||
          y < -200 ||
          y > height + 200
        ) {
          continue;
        }

        if (
          speedRef.current > 5
        ) {
          const streak =
            Math.pow(
              speedRef.current,
              2.5
            );

          const dx =
            x - width / 2;

          const dy =
            y - height / 2;

          const alpha =
            Math.min(
              1,
              speedRef.current /
                6
            );

          ctx.beginPath();

          if (
            speedRef.current > 9
          ) {
            ctx.shadowBlur = 20;
            ctx.shadowColor =
              "#67e8f9";
          }

          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;

          ctx.lineWidth =
            Math.min(
              4,
              speedRef.current /
                3
            );

          ctx.moveTo(x, y);

          ctx.lineTo(
            x -
              dx *
                0.01 *
                streak,
            y -
              dy *
                0.01 *
                streak
          );

          ctx.stroke();

          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();

          ctx.fillStyle =
            "white";

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

      animationFrame =
        requestAnimationFrame(
          animate
        );
    }

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <>
      {/* Deep Space Background */}
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