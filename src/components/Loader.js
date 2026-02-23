// "use client"
import { motion, useReducedMotion } from "framer-motion";

export default function Loader({ loading = true }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0a0a0a_100%)]`}
    >
      {/* Inner content */}
      <div className="relative flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 font-mono text-[10px] tracking-[0.5em] text-red-600 uppercase"
        >
          Initializing System
        </motion.h2>

        <div className="relative h-[1px] w-48 overflow-hidden bg-white/5">
          {!prefersReducedMotion && loading && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2, // Slightly faster to feel high-performance
                ease: "easeInOut",
              }}
              className="absolute h-full w-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
            />
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={loading ? { opacity: [0.2, 0.6, 0.2] } : { opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-4 font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase"
        >
          K. ALIU // 2026
        </motion.p>
      </div>

      {/* Luxury corner accents - Matches the "Infrastructure" vibe */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="absolute top-12 left-12 h-6 w-6 border-t border-l border-red-600/20" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="absolute bottom-12 right-12 h-6 w-6 border-b border-r border-red-600/20" 
      />

      {/* Subtle Scanline Overlay for texture */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}