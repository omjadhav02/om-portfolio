import { useEffect, useState } from "react";

function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      const newStar = {
        id,
        top: Math.random() * 50,
        left: Math.random() * 80,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) =>
          prev.filter((star) => star.id !== id)
        );
      }, 1500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}

    </div>
  );
}

export default ShootingStars;