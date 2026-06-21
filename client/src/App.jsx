import { useState } from "react";

import CosmicBackground from "./components/cosmic/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [warpSpeed, setWarpSpeed] = useState(1);

  const energy = (warpSpeed - 1) / 9;

  return (
    <div
      className="min-h-screen text-white"
      style={{
        "--energy": energy,
      }}
    >
      <CosmicBackground
        warpSpeed={warpSpeed}
        setWarpSpeed={setWarpSpeed}
      />

      <Navbar warpSpeed={warpSpeed} />

      <main className="relative z-10">
        <Hero warpSpeed={warpSpeed} />
        <About warpSpeed={warpSpeed} />
        <Skills warpSpeed={warpSpeed} />
        <Projects warpSpeed={warpSpeed} />
        <Contact warpSpeed={warpSpeed} />
      </main>

      <Footer warpSpeed={warpSpeed} />
    </div>
  );
}

export default App;