"use client";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
  loading: () => <div className="h-screen w-screen bg-[#0f0f0f]" />
});

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] h-screen w-screen overflow-hidden relative">
      <section className="sr-only">
          <h2>Next.js Development Services</h2>
          <p>
            I help businesses build <strong>fast, SEO-optimized web applications</strong> using the 
            latest <strong>Next.js 15 App Router</strong> features. Whether it's migrating from 
            WordPress to a headless architecture or building a complex <strong>React Native mobile app</strong>, 
            I focus on 100/100 Core Web Vitals.
          </p>
          
          <h3>Specialized in:</h3>
          <ul>
            <li>Custom SaaS Dashboard Development</li>
            <li>High-Conversion Landing Pages for Real Estate & Medical</li>
            <li>3D Interactive Web Experiences (Three.js/WebGL)</li>
            <li>Automated Multi-language Localisation (i18n)</li>
          </ul>
      </section>
      {/* Your 3D Experience */}
      <Scene />
    </main>
  );
}