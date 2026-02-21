"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import Donut from "./Donut";
import Particles from "./Particles";
import Loader from "./Loader";

// Reusable Section wrapper
const Section = ({ children, className = "" }) => (
  <section className={`min-h-screen w-screen flex flex-col justify-center px-6 md:px-20 py-20 ${className}`}>
    {children}
  </section>
);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Minimal loader, remove artificial 2s delay
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Precompute scroll pages
  const pages = useMemo(() => (typeof window !== "undefined" && window.innerWidth < 768 ? 9.5 : 7), []);

  // Contact form state
  const [formData, setFormData] = useState({ identity: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ identity: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#111111] overflow-hidden relative">

      {/* Loader */}
      {loading && <Loader />}

      {/* 3D Canvas */}
      {mounted && !loading && (
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.15} eps={0.0001}>
              {/* 3D Objects */}
              <Donut />
              <Particles count={typeof window !== "undefined" && window.innerWidth < 768 ? 1000 : 2000} />

              {/* HTML Overlay */}
              <Scroll html className="pointer-events-none">
                <div className="w-screen">

                  {/* 1. INTRODUCTION */}
                  <Section>
                    <div className="border-l-4 border-red-600 pl-6 md:pl-10">
                      <p className="text-red-600 font-mono tracking-[0.4em] uppercase mb-3 text-xs md:text-sm animate-pulse">
                        Prishtina // Europe // Global Deployment
                      </p>
                      <h1 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.85]">
                        KASTRIOT<br /><span className="text-red-600 text-[0.8em]">ALIU</span>
                      </h1>
                      <p className="text-gray-500 font-mono tracking-widest uppercase mt-6 text-[10px] md:text-lg border-t border-white/10 pt-4 inline-block">
                        Full-Stack Engineer Performance & Conversion Specialist
                      </p>
                    </div>
                  </Section>

                  {/* 2. ABOUT */}
                  <Section className="items-end text-right">
                    <h2 className="text-red-600 text-sm font-mono uppercase tracking-widest mb-4">— The Competitive Edge</h2>
                    <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight max-w-4xl">
                      Elite Performance <br />
                      <span className="text-gray-500 text-3xl md:text-5xl">For Visionaries Who Demand Excellence.</span>
                    </h1>
                    <div className="max-w-2xl mt-8 space-y-6 text-gray-400 font-light text-base md:text-xl leading-relaxed">
                      <p>
                        Since 2019, I have specialized in transforming template-based websites into 
                        <span className="text-white font-medium"> high-performance digital infrastructure.</span> 
                      </p>
                      <p>
                        While most businesses rely on bloated page builders, I engineer custom <span className="text-white font-medium">Next.js ecosystems</span>. Built for speed, scalability, and long-term growth.
                        <br />My work focuses on three pillars: Performance. Visibility. Control.
                        <br />You’re not just hiring a developer. You’re investing in a scalable digital asset.
                      </p>
                    </div>
                  </Section>

                  {/* 3. PROJECTS */}
                  <Section>
                    <h2 className="text-red-600 text-sm font-mono uppercase tracking-widest mb-12">— Strategic Deployments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                      {[
                        { name: "Olymp BPO", tech: "SEO A+ Audit // High-End 3D Visuals", desc: "A corporate-grade digital presence engineered for authority, trust, and search visibility.", link: "https://olympbpo.com" },
                        { name: "ASKSTORE", tech: "Full-Stack // PostgreSQL // Drag-Drop UI", desc: "A high-speed e-commerce system with a fully controlled administrative dashboard built for operational efficiency.", link: "https://askstore.vercel.app" },
                        { name: "ASKOIN", tech: "Real-Time API // Financial Data Viz", desc: "Real-time financial data visualization platform powered by external APIs and optimized client-side rendering.", link: "https://askoin.vercel.app" },
                        { name: "Showroom", tech: "Three.js // GLSL Shaders", desc: "An immersive 3D environment demonstrating advanced spatial UI and interactive web architecture.", link: "https://askoti.vercel.app" }
                      ].map((item, i) => (
                        <a 
                          key={i} 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group border-b border-white/10 pb-8 hover:border-red-600 transition-colors duration-500 pointer-events-auto cursor-pointer block"
                        >
                          <h3 className="text-3xl md:text-5xl font-black uppercase group-hover:text-red-600 transition-colors italic">{item.name}</h3>
                          <p className="text-[10px] text-red-600 font-mono mt-2 tracking-widest uppercase">{item.tech}</p>
                          <p className="text-gray-500 text-sm mt-4 max-w-md font-light leading-relaxed">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </Section>

                  {/* 4. SERVICES */}
                  <Section className="items-center">
                    <div className="w-full max-w-7xl px-6">
                      <div className="flex flex-col mb-20">
                        <h2 className="text-red-600 text-sm font-mono uppercase tracking-[0.3em] mb-4">— Exclusive Solutions</h2>
                        <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Engineered for 2026 // Performance First</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        {[
                          { num: "01", title: "Digital Translation", body: "Migration of legacy WordPress or Wix systems into modern, performance-first architectures. Reduced load times, improved security, and long-term scalability.", accent: "Architecture" },
                          { num: "02", title: "Logic & Automation", body: "Custom automation systems using APIs, N8N, and AI workflows. From lead capture to CRM synchronization, I eliminate manual bottlenecks.", accent: "Intelligence" },
                          { num: "03", title: "SEO Sovereignty", body: "Technical SEO optimization focused on Core Web Vitals, accessibility, and structured data. Built to improve rankings and maximize organic reach.", accent: "Dominance" }
                        ].map((service, i) => (
                          <div key={i} className="group relative bg-[#0a0a0a] p-12 border border-white/5 hover:border-red-600/40 transition-all duration-700 pointer-events-auto cursor-default overflow-hidden">
                            <div className="absolute -inset-px bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="text-red-600/20 font-mono text-6xl font-black absolute -right-2 -top-2 group-hover:text-red-600/40 transition-colors">{service.num}</span>
                            <div className="relative z-10">
                              <p className="text-[10px] text-red-600 font-mono mb-4 tracking-widest uppercase">// {service.accent}</p>
                              <h4 className="text-2xl font-black uppercase text-white mb-6 group-hover:text-red-600 transition-colors italic tracking-tighter">{service.title}</h4>
                              <div className="w-12 h-[1px] bg-white/20 mb-8 group-hover:w-24 group-hover:bg-red-600 transition-all duration-500" />
                              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">{service.body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Section>

                  {/* 5. TECH STACK */}
                  <Section className="text-center">
                    <h2 className="text-red-600 text-sm font-mono uppercase tracking-widest mb-12">— The Tech Stack</h2>
                    <div className="mb-16 flex flex-col items-center">
                      <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-red-600 mb-4">// Architecture Philosophy</p>
                      <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight text-white text-center leading-tight">Precision-Selected Technologies.</h3>
                      <div className="w-16 h-[1px] bg-red-600 my-6"></div>
                      <p className="text-gray-500 font-mono uppercase tracking-[0.3em] text-[10px] md:text-xs text-center">No Bloat. No Shortcuts.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 opacity-40 font-black text-xl md:text-3xl italic">
                      <span>NEXT.JS 15</span> <span>TYPESCRIPT</span> <span>PYTHON</span> 
                      <span>DJANGO</span> <span>POSTGRESQL</span> <span>THREE.JS</span>
                      <span>BLENDER</span> <span>N8N AI</span> <span>TAILWIND</span>
                      <span>REACT NATIVE</span> <span>MONGODB</span> <span>GIT/GITHUB</span>
                    </div>
                  </Section>

                  {/* 6. PHILOSOPHY */}
                  <Section className="items-center text-center">
                    <div className="max-w-4xl">
                      <p className="text-red-600 text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] mb-12">— Operational Philosophy</p>
                      <div className="space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-6xl font-black uppercase italic leading-tight tracking-tight">Speed is leverage.</h2>
                        <h2 className="text-3xl md:text-6xl font-black uppercase italic leading-tight tracking-tight text-white/80">Clarity is authority.</h2>
                        <h2 className="text-3xl md:text-6xl font-black uppercase italic leading-tight tracking-tight text-red-600">Execution is everything.</h2>
                      </div>
                      <div className="w-24 h-[1px] bg-white/20 mx-auto my-16"></div>
                      <p className="text-gray-500 font-mono uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">Strategic Positioning</p>
                      <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tight leading-tight">
                        I don’t build websites.<br />
                        <span className="text-red-600">I build digital infrastructure.</span>
                      </h3>
                    </div>
                  </Section>

                  {/* 7. CONTACT */}
                  <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-20">
                      <div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">INITIATE<br /><span className="text-red-600">STRATEGY</span></h1>
                        <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed">
                          Based in Prishtina. Deploying worldwide. Currently accepting selective freelance projects and long-term technical partnerships.
                        </p>
                        <div className="space-y-4 font-mono text-sm uppercase">
                          <a href="mailto:kastriootaliiu@gmail.com" className="block text-red-600 hover:text-white transition-colors border-b border-red-600/20 pb-2 w-fit italic">kastriootaliiu@gmail.com</a>
                          <div className="flex gap-8 items-center pointer-events-auto">
                            <a href="https://github.com/askoti" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white cursor-pointer transition-colors font-mono text-xs uppercase tracking-widest">GitHub</a>
                            <a href="https://linkedin.com/in/kastriootaliiu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white cursor-pointer transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-black/40 p-10 backdrop-blur-xl border border-white/10 relative overflow-hidden pointer-events-auto">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                        <div className="space-y-6">
                          <input required type="text" placeholder="NAME / COMPANY" value={formData.identity} onChange={e => setFormData(f => ({ ...f, identity: e.target.value }))} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-600 transition-colors text-[12px] tracking-widest uppercase font-mono" />
                          <input required type="email" placeholder="EMAIL" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-600 transition-colors text-[12px] tracking-widest uppercase font-mono" />
                          <textarea required placeholder="YOUR PROJECT" value={formData.message} onChange={e => setFormData(f => ({ ...f, message: e.target.value }))} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-600 transition-colors h-32 text-[12px] tracking-widest uppercase font-mono resize-none" />
                        </div>
                        <button disabled={status === "SENDING"} className="bg-red-600 text-white font-black py-5 uppercase tracking-[0.3em] hover:bg-white hover:text-red-600 transition-all text-xs shadow-lg shadow-red-600/20 disabled:bg-gray-800 disabled:text-gray-500">
                          {status === "IDLE" && "SEND"}
                          {status === "SENDING" && "SENDING..."}
                          {status === "SUCCESS" && "SENT"}
                          {status === "ERROR" && "TRY AGAIN"}
                        </button>
                      </form>
                    </div>
                  </Section>

                </div>
              </Scroll>
            </ScrollControls>

            <Environment preset="night" background={false} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}