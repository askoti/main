"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import Donut from "./Donut";
import Particles from "./Particles";
import Overlay from "./Overlay";
import Loader from "./Loader";

function SceneReady({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pages = useMemo(() => {
    if (typeof window === "undefined") return 7;
    return window.innerWidth < 768 ? 9.5 : 7;
  }, []);
    
  // If not mounted, show absolute black to prevent the white browser flash
  if (!mounted) return <div className="h-screen w-screen bg-black" />;

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">
      
      {/* 1. Loader stays active until the first 3D frame is drawn */}
      {!sceneReady && <Loader />}

      <div className={`h-full w-full transition-opacity duration-1000 ${sceneReady ? "opacity-100" : "opacity-0"}`}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ 
            antialias: true, 
            alpha: true, 
            powerPreference: "high-performance",
          }}
          // Force Three.js to clear to black immediately on creation
          onCreated={({ gl }) => {
            gl.setClearColor("#000000");
          }}
          dpr={[1, 1.5]}
          style={{ background: "#000000" }} 
        >
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.15} eps={0.0001}>
              <Donut />
              <Particles count={typeof window !== "undefined" && window.innerWidth < 768 ? 1000 : 2000} />

              <Scroll html className="pointer-events-none">
                <div className="w-screen">
                  <Overlay />
                </div>
              </Scroll>
              
              {/* SceneReady triggers ONLY after all assets in Suspense are loaded */}
              <SceneReady onReady={() => setSceneReady(true)} />
            </ScrollControls>

            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}