"use client";
import dynamic from 'next/dynamic';

// This forces the 3D scene to only load on the client side
const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
  loading: () => <div className="h-screen w-screen bg-black" /> 
});

export default function Home() {
  return (
    <main>
      <Scene />
    </main>
  );
}