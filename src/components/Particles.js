"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function Particles({ count = 2000 }) {
  const meshRef = useRef();
  const scroll = useScroll();

  // Precompute particle positions once
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  // Animate rotation + scroll parallax
  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.05;
    mesh.rotation.x += delta * 0.02;
    mesh.position.y = scroll.offset * 3;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}               // slightly bigger for visibility
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}    // perspective scaling
      />
    </points>
  );
}