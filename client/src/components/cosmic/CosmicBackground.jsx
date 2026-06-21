import ShootingStars from "./ShootingStars";
import FastMovingStars from "./Stars/FastMovingStars";
import MidMovingStars from "./Stars/MidMovingStars";
import SlowMovingStars from "./Stars/SlowMovingStars";
import Lever from "./Lever/Lever";

function CosmicBackground({
  warpSpeed,
  setWarpSpeed,
}) {
  return (
    <>
      <FastMovingStars warpSpeed={warpSpeed} />
      <MidMovingStars warpSpeed={warpSpeed} />
      <SlowMovingStars warpSpeed={warpSpeed} />

      <ShootingStars />

      <Lever
        warpSpeed={warpSpeed}
        setWarpSpeed={setWarpSpeed}
      />
    </>
  );
}

export default CosmicBackground;