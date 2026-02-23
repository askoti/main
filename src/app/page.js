// app/page.js
"use client";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
  // Optional: Add a simple black div as a loading placeholder for Next.js
  loading: () => <div className="h-screen w-screen bg-[#0f0f0f]" />
});

export default function Home() {
  return (
    /* Matching the 'to' color of your radial gradient (#0f0f0f) 
       ensures the edges of the screen are perfect from the first millisecond.
    */
    <main className="bg-[#0f0f0f] h-screen w-screen overflow-hidden">
      <Scene />
    </main>
  );
}