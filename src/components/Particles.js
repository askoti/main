"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber"; // <--- NEED THIS
import { useScroll } from "@react-three/drei"; // <--- NEED THIS
import * as THREE from "three";

export default function Particles({ count = 2000 }) {
  const [mounted, setMounted] = useState(false);
  const meshRef = useRef();
  const scroll = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  // THIS IS THE PART THAT WAS MISSING:
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Constant slow rotation
    meshRef.current.rotation.y += delta * 0.05;
    meshRef.current.rotation.x += delta * 0.02;

    // 2. Move up/down based on scroll (Parallax effect)
    // scroll.offset is 0 at the top and 1 at the bottom
    meshRef.current.position.y = scroll.offset * 3;
  });

  if (!mounted) return null;

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}