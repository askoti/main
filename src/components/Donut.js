// "use client";
import React, { useRef, useMemo, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

function DonutContent() {
  const meshRef = useRef();
  const scroll = useScroll();
  const { viewport } = useThree(); // Removed 'invalidate' as we'll use auto-render for smoother mouse movement

  // 1. Geometry is perfectly memoized—won't lag on re-renders
  const geometry = useMemo(() => 
    new THREE.TorusKnotGeometry(0.8, 0.1, 528, 16, 3, 14), 
  []);

  // 2. Scale Logic: Perfectly responsive
  const responsiveScale = useMemo(() => {
    const base = viewport.width / 8; 
    return Math.max(0.5, Math.min(base, 1.2)); 
  }, [viewport.width]);

  const targetRotation = useRef(new THREE.Euler());

  useFrame((state) => {
    if (!meshRef.current) return;

    const offset = scroll.offset;
    const time = state.clock.getElapsedTime();

    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;

    // 3. Smooth Rotation Logic
    targetRotation.current.x = mouseY + offset * Math.PI * 2;
    targetRotation.current.y = mouseX + offset * Math.PI * 4;
    targetRotation.current.z = time * 0.2;

    // Standard Lerp for that "heavy/expensive" physics feel
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.05);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotation.current.z, 0.05);
  });

  return (
    <mesh 
      ref={meshRef} 
      scale={responsiveScale} 
      geometry={geometry}
      frustumCulled={true}
    >
      <meshStandardMaterial
        color="#D40000"
        roughness={0.2} // Slightly smoother for better light reflections
        metalness={0.8}  // Increased for a more "industrial/premium" look
        emissive="#440000" // Brightened slightly so it glows on your black background
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Donut() {
  return (
    <Suspense fallback={null}>
      <DonutContent />
    </Suspense>
  );
}