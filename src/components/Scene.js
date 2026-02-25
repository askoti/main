"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import Donut from "./Donut";
import Particles from "./Particles";
import Loader from "./Loader";
import Overlay from "./Overlay";

function SceneReady({ onReady }) {
  useEffect(() => {
    const timeout = setTimeout(onReady, 100);
    return () => clearTimeout(timeout);
  }, [onReady]);
  return null;
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-screen bg-[#0a0a0a]" />;

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#0a0a0a]">
      
      {/* 1. THE STUDIO GRADIENT (Placed behind the Canvas) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#050505_100%)]" />
      
      {/* 2. THE FILM GRAIN (Texture from your Ferrari reference) */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {!sceneReady && <Loader />}
      
      <div 
        className={`relative z-[2] h-full w-full transition-opacity duration-1000 ease-in-out ${
          sceneReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <Canvas
          shadows={false}
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ 
            antialias: true, 
            alpha: true, // MUST be true for the gradient to show
            powerPreference: "high-performance",
            stencil: false,
            depth: true 
          }}
          onCreated={({ gl }) => {
            // This is the magic line that fixes the flat black background
            gl.setClearAlpha(0); 
          }}
          dpr={[1, 2]} 
        >
          <Suspense fallback={null}>
            {/* High-End Environment for Metallic Shine */}
            <Environment preset="city" intensity={0.8} />
            <ambientLight intensity={0.3} /> 
            
            {/* Aggressive Red Lighting */}
            <pointLight position={[10, 10, 10]} intensity={4} color="#D40000" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
            
            {/* RectAreaLight for the 'Studio Softbox' look */}
            <rectAreaLight
                width={15}
                height={15}
                intensity={6}
                color="#D40000"
                position={[5, 0, 5]}
                onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
            
            {/* ONLY ONE Donut inside ScrollControls */}
            <ScrollControls pages={7} damping={0.15} distance={1}>
              <Donut />
              <Particles count={typeof window !== "undefined" && window.innerWidth < 768 ? 800 : 2000} />
              
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