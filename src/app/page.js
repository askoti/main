// app/page.js
"use client";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black h-screen">
      <Scene />
    </main>
  );
}