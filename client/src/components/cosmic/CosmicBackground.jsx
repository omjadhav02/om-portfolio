import Starfield from "./Starfield";
import DeepSpace from "./DeepSpace";
import ShootingStars from "./ShootingStars";
import FastMovingStars from "./Stars/FastMovingStars";
import MidMovingStars from "./Stars/MidMovingStars";
import SlowMovingStars from "./Stars/SlowMovingStars";
import { useState } from "react";
import Lever from "./Lever/Lever";

function CosmicBackground() {
  const [warpSpeed, setWarpSpeed] = useState(1);
  return (
    <>
      <FastMovingStars warpSpeed={warpSpeed}/>
      <MidMovingStars warpSpeed={warpSpeed}/>
      <SlowMovingStars warpSpeed={warpSpeed}/>
      <ShootingStars/>
      <Lever warpSpeed={warpSpeed}
        setWarpSpeed={setWarpSpeed}/>
      
    </>
  );
}

export default CosmicBackground;