"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function Donut() {
  const meshRef = useRef();
  const scroll = useScroll();

  // UseMemo to create geometry once instead of every render
  const geometry = useMemo(() => {
    return new THREE.TorusKnotGeometry(
      0.8,       // radius
      0.1,       // tube radius
      256, 
      28,        // radial segments — reduced from 72
      3,         // p
      14         // q
    );
  }, []);

  // Precompute scale (only once per client render)
  const scale = typeof window !== "undefined" && window.innerWidth < 768 ? 0.5 : 0.7;

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const offset = scroll.offset;
    const time = state.clock.elapsedTime;

    // Smooth mouse tilt
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;

    // Heavy rotation, but smoother with fewer computations
    meshRef.current.rotation.x += (mouseY + offset * Math.PI * 2 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (mouseX + offset * Math.PI * 4 - meshRef.current.rotation.y) * 0.05;

    // Constant slow drift
    meshRef.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={scale} geometry={geometry}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <meshStandardMaterial 
        color="#D40000"       
        roughness={0.3}      
        metalness={0.55}     
        emissive="#110000"
        emissiveIntensity={1}
      />
    </mesh>
  );
}