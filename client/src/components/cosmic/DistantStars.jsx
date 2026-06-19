import { useEffect, useRef } from "react";

function DistantStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];

    const STAR_COUNT = 300;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8,
        speed: Math.random() * 0.05 + 0.01,
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
        star.y += star.speed;

        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

        ctx.arc(
          star.x,
          star.y,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

export default DistantStars;