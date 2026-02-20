"use client";

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import Donut from "./Donut";
import Particles from "./Particles";
import Overlay from "./Overlay";
import Loader from "./Loader"; // <-- your luxury loader

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true); // track loader

  useEffect(() => {
    setMounted(true);

    // Simulate minimal loading time (or tie this to your 3D assets if needed)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const pages = typeof window !== "undefined" && window.innerWidth < 768 ? 9.5 : 7;

  return (
    <div className="h-screen w-screen bg-[#111111] overflow-hidden relative">
      
      {/* Loader Overlay */}
      {loading && <Loader />}

      {/* 3D Canvas */}
      {mounted && !loading && (
        <Canvas 
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }} 
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.15} eps={0.0001}>
              
              {/* 3D Elements */}
              <Donut />
              <Particles count={2000} />
              
              {/* HTML Overlay */}
              <Scroll html className="pointer-events-none">
                <div className="w-screen">
                  <Overlay />
                </div>
              </Scroll>
              
            </ScrollControls>
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}