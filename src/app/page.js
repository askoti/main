"use client";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => <div className="h-screen w-screen bg-[#0f0f0f]" />
});

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] h-screen w-screen overflow-hidden relative">
      
      {/* Expanded hidden content — Google indexes this, humans don't see it */}
      <section className="sr-only" aria-label="Portfolio Overview">
        <h1>Kastriot Aliu — Full-Stack Next.js Developer, Prishtina</h1>
        <p>
          Based in Prishtina, Kosovo. I build <strong>high-performance web applications</strong> for 
          businesses across Europe and globally. Specializing in <strong>Next.js 15</strong>, 
          <strong>React Native</strong>, and <strong>Three.js WebGL experiences</strong>.
        </p>

        <h2>Next.js Development Services</h2>
        <p>
          Migrating from WordPress or Wix to a <strong>custom Next.js architecture</strong> that 
          loads faster, ranks higher, and converts better. Every project is engineered for 
          Core Web Vitals scores of 90+.
        </p>

        <h2>Featured Projects</h2>
        <ul>
          <li><a href="https://olympbpo.com">Olymp BPO — Corporate Digital Presence with A+ SEO Audit</a></li>
          <li><a href="https://askestate.netlify.app">Premium Real Estate Portal — Next.js 14, Glassmorphism UI</a></li>
          <li><a href="https://askdentist.netlify.app">Smile Studio Dental — Medical UI with Booking Flows</a></li>
          <li><a href="https://askporsche.netlify.app">Porsche 3D Showcase — Three.js, React Three Fiber</a></li>
          <li><a href="https://askstore.vercel.app">Full-Stack E-Commerce — PostgreSQL, Admin Dashboard</a></li>
        </ul>

        <h2>Technical Skills</h2>
        <ul>
          <li>Next.js 15 App Router, React, TypeScript</li>
          <li>React Native & Expo — iOS and Android</li>
          <li>Three.js, React Three Fiber, WebGL, Blender</li>
          <li>PostgreSQL, MongoDB, Django, Python</li>
          <li>N8N Automation, AI Workflows, API Integration</li>
          <li>Core Web Vitals, Technical SEO, Structured Data</li>
        </ul>

        <h2>Contact</h2>
        <address>
          <p>Location: Prishtina, Kosovo</p>
          <a href="mailto:kastriootaliiu@gmail.com">kastriootaliiu@gmail.com</a>
          <a href="https://github.com/askoti">GitHub: askoti</a>
          <a href="https://linkedin.com/in/kastriootaliiu">LinkedIn: kastriootaliiu</a>
        </address>
      </section>

      <Scene />
    </main>
  );
}