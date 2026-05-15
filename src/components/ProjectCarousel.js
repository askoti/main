// components/ProjectCarousel.jsx
"use client";
import { useState, useRef, useCallback } from "react";

const PROJECTS = [
  {
    name: "SMILE STUDIO",
    tech: "Next.js // Framer Motion // Medical UI",
    desc: "A clean, high-performance dental clinic platform designed for patient trust.",
    link: "https://askdentist.netlify.app/",
    image: "/projects/smile-studio.jpg",
  },
  {
    name: "GYM",
    tech: "Next.js // Tailwind CSS // Performance UI",
    desc: "A high-energy gym template built for conversion with bold athletic identity.",
    link: "https://askgym.netlify.app",
    image: "/projects/gym.jpg",
  },
  {
    name: "RESTAURANT",
    tech: "Next.js // Framer Motion // Editorial Design",
    desc: "A premium restaurant experience with immersive menu presentation.",
    link: "https://askresto.netlify.app",
    image: "/projects/restaurant.jpg",
  },
  {
    name: "ROOFING",
    tech: "Full-Stack // Lead Gen // PostgreSQL",
    desc: "An industrial site engineered for conversion with estimation tools.",
    link: "https://askroof.netlify.app/",
    image: "/projects/roofing.jpg",
  },
  {
    name: "STORE",
    tech: "Full-Stack // PostgreSQL // Drag-Drop UI",
    desc: "A high-speed e-commerce system with full admin dashboard.",
    link: "https://askstore.vercel.app",
    image: "/projects/store.jpg",
  },
  {
    name: "PORSCHE",
    tech: "Three.js // R3F // 3D Car Experience",
    desc: "A cinematic 3D Porsche 911 showcase with real-time lighting.",
    link: "https://askporsche.netlify.app",
    image: "/projects/porsche.jpg",
  },
  {
    name: "ASKCAR",
    tech: "React Native // Expo Go // JSON Layer",
    desc: "A premium car marketplace mobile app with live search.",
    link: "https://askca.netlify.app",
    image: "/projects/askcar.jpg",
  },
  {
    name: "OLYMP BPO",
    tech: "SEO A+ Audit // High-End 3D Visuals",
    desc: "A corporate-grade digital presence engineered for authority.",
    link: "https://olympbpo.com",
    image: "/projects/olymp-bpo.jpg",
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [didDrag, setDidDrag] = useState(false);
  const containerRef = useRef(null);
  const total = PROJECTS.length;

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, [total]);

  const handleStart = (clientX) => {
    setDragging(true);
    setStartX(clientX);
    setDragDelta(0);
    setDidDrag(false);
  };

  const handleMove = (clientX) => {
    if (!dragging) return;
    const delta = clientX - startX;
    setDragDelta(delta);
    if (Math.abs(delta) > 10) setDidDrag(true);
  };

  const handleEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dragDelta) > 50) {
      if (dragDelta < 0) goTo(active + 1);
      else goTo(active - 1);
    }
    setDragDelta(0);
  };

  const handleCardClick = (index, link) => {
    if (didDrag) return;
    if (index === active) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      goTo(index);
    }
  };

  const getCardStyle = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    const isActive = diff === 0;

    const rotateY = diff * 32 + (dragging ? dragDelta * -0.04 : 0);
    const translateX = diff * 280 + (dragging ? dragDelta * 0.3 : 0);
    const translateZ = isActive ? 100 : -(absDiff * 140);
    const scale = isActive ? 1 : Math.max(0.6, 1 - absDiff * 0.2);
    const opacity = absDiff > 3 ? 0 : isActive ? 1 : Math.max(0.25, 1 - absDiff * 0.35);

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 100 - absDiff,
      transition: dragging ? "none" : "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    };
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] md:h-[480px] cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {PROJECTS.map((project, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                className="absolute"
                style={getCardStyle(i)}
                onClick={() => handleCardClick(i, project.link)}
              >
                <div
                  className={`relative bg-[#0a0a0a] border overflow-hidden
                    w-[280px] h-[260px]
                    md:w-[520px] md:h-[400px]
                    ${isActive ? "border-red-600/30 cursor-pointer" : "border-white/10 cursor-pointer"}`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 80px rgba(212, 0, 0, 0.12), 0 25px 80px rgba(0,0,0,0.8)"
                      : "0 10px 40px rgba(0,0,0,0.6)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 z-20" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 z-20" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 z-20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 z-20" />

                  {/* Image */}
                  <div className="relative w-full h-[55%] md:h-[62%] overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                      loading={i <= 2 ? "eager" : "lazy"}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-red-600/5 z-10" />
                    <div
                      className="absolute inset-0 z-10 pointer-events-none opacity-15"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
                      }}
                    />
                    {/* Visit hint on active */}
                    {isActive && (
                      <div className="absolute top-3 right-3 z-20 bg-black/70 border border-red-600/30 px-2.5 py-1">
                        <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-red-600">
                          Tap to visit ↗
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="relative z-10 px-4 pt-3 pb-3 md:px-6 md:pt-4 md:pb-5 flex flex-col justify-between h-[45%] md:h-[38%]">
                    <div>
                      <p className="text-red-600 font-mono text-[8px] md:text-[10px] uppercase tracking-widest mb-1">
                        {String(i + 1).padStart(2, "0")} // {project.tech.split("//")[0].trim()}
                      </p>
                      <h3 className="text-base md:text-2xl font-black uppercase italic text-white tracking-tight leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-gray-500 text-[10px] md:text-sm mt-1 md:mt-2 font-light leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                      <p className="text-[7px] md:text-[10px] font-mono uppercase tracking-widest text-white/20 line-clamp-1">
                        {project.tech.split("//").slice(1).join("//").trim()}
                      </p>
                      <span className="text-[9px] md:text-xs font-mono text-red-600">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center gap-3 mt-4 md:mt-6">
        <button
          onClick={() => goTo(active - 1)}
          className="w-8 h-8 border border-white/10 text-white/30 hover:text-red-600 hover:border-red-600/40 transition-all font-mono text-xs flex items-center justify-center"
        >
          ←
        </button>

        <div className="flex gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-1.5 transition-all duration-500"
              style={{
                width: i === active ? "32px" : "8px",
                backgroundColor: i === active ? "#D40000" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(active + 1)}
          className="w-8 h-8 border border-white/10 text-white/30 hover:text-red-600 hover:border-red-600/40 transition-all font-mono text-xs flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}