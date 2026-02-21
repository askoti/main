"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import Donut from "./Donut";
import Particles from "./Particles";
import Loader from "./Loader";
import Overlay from "./Overlay"; // Your portfolio content

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

  const pages = useMemo(() => (typeof window !== "undefined" && window.innerWidth < 768 ? 9.5 : 7), []);

  if (!mounted) return <div className="h-screen w-screen bg-black" />;

  return (
    <div className="h-screen w-screen bg-[#111111] overflow-hidden relative">
  {!sceneReady && <Loader />}
  
  <div className={`h-full w-full transition-opacity duration-1000 ${sceneReady ? "opacity-100" : "opacity-0"}`}>
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 30 }}
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance" 
      }}
      onCreated={({ gl }) => {
        // This is crucial: Three.js must clear the frame to your specific gray
        gl.setClearColor("#111111"); 
      }}
      dpr={[1, 1.5]}
      style={{ background: "#111111" }}
    >
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ScrollControls pages={pages} damping={0.15}>
          <Donut />
          <Particles count={2000} />
          <Scroll html className="pointer-events-none">
            <Overlay />
          </Scroll>
          <SceneReady onReady={() => setSceneReady(true)} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  </div>
</div>
  );
}