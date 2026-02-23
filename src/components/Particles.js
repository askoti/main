// "use client"
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function Particles({ count = 1000 }) {
  const pointsRef = useRef();
  const scroll = useScroll();
  const { viewport } = useThree();

  // Generate particle positions once
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const offset = scroll.offset;
    const time = state.clock.getElapsedTime();

    // Gentle rotation + scroll parallax
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
    pointsRef.current.position.y = offset * 3; // scroll moves particles up/down
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.3}          // slightly reduced for more subtle effect
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}