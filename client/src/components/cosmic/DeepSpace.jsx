import { useEffect, useRef } from "react";

function DeepSpace() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];

    const STAR_COUNT = 350;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,

        // MUCH farther away
        z: Math.random() * 12000 + 3000,
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
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        // CONTROL SPEED HERE
        star.z -= 0.5;

        if (star.z <= 1000) {
          star.z = 15000;

          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }

        const progress =
          (15000 - star.z) / 14000;

        const size =
          Math.max(
            0.2,
            progress * 2
          );

        const opacity =
          Math.min(
            0.7,
            progress
          );

        ctx.beginPath();

        ctx.fillStyle = `rgba(
          255,
          255,
          255,
          ${opacity}
        )`;

        ctx.arc(
          star.x,
          star.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

export default DeepSpace;