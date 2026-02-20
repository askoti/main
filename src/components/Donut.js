"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function Donut() {
  const meshRef = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    const offset = scroll.offset;
    const time = state.clock.elapsedTime;
    
    // Smooth mouse tilt
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;

    // Heavy, luxury rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, 
      mouseY + (offset * Math.PI * 2), 
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y, 
      mouseX + (offset * Math.PI * 4), 
      0.05
    );

    // Constant slow drift
    meshRef.current.rotation.z += delta * 0.2;
  });

const scale = typeof window !== "undefined" && window.innerWidth < 768 ? 0.5 : 0.7;


  return (
    <mesh ref={meshRef} scale={scale}>
      {/* args explanation:
          [radius, tubeRadius, tubularSegments, radialSegments, p, q]
          p: 3 and q: 4 creates the chunky interwoven look instead of a line.
      */}
      <torusKnotGeometry args={[0.8, 0.1, 856, 72, 3, 14]} />
      
      <meshStandardMaterial 
        color="#D40000"       // Ferrari Rosso Corsa
        roughness={0.3}      // Super glossy
        metalness={0.55}       // High metallic shine
        emissive="#110000"
        emissiveIntensity={1}
      />
    </mesh>
  );
}