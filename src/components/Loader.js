"use client";
import { useEffect, useState } from "react";

export default function Loader({ loading = true }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Wait for fade-out to complete before unmounting
      const t = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(t);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#0a0a0a_100%)]"
      style={{
        opacity: loading ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      {/* Progress bar */}
      <div className="relative h-px w-48 overflow-hidden bg-white/5">
        <div className="loader-bar absolute h-full w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 h-6 w-6 border-t border-l border-red-600/20 loader-corner" />
      <div className="absolute bottom-12 right-12 h-6 w-6 border-b border-r border-red-600/20 loader-corner" />

      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.1) 50%), linear-gradient(90deg, rgba(255,0,0,0.02), rgba(0,255,0,0), rgba(0,0,255,0.02))`,
          backgroundSize: "100% 2px, 3px 100%",
        }}
      />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .loader-bar {
            animation: scan 1.2s ease-in-out infinite;
          }
          .loader-corner {
            animation: fadeCorner 0.8s ease-out 0.1s both;
          }
        }

        @keyframes scan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }

        @keyframes fadeCorner {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}