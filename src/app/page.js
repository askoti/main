"use client";
import Loader from '@/components/Loader';
import dynamic from 'next/dynamic';

// This forces the 3D scene to only load on the client side
const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
  loading: () => <Loader />
});

export default function Home() {
  return (
    <main>
      <Scene />
    </main>
  );
}