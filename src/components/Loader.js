"use client"
import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      {/* Central Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center"
      >
        <h2 className="mb-2 font-mono text-[10px] tracking-[0.5em] text-red-600 uppercase">
          Initializing System
        </h2>
        
        {/* The Main Progress Bar (Luxurious Thin Line) */}
        <div className="relative h-[1px] w-48 overflow-hidden bg-white/10">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </div>

        {/* Floating Percentage (Optional aesthetic) */}
        <motion.p 
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-4 font-mono text-[8px] tracking-[0.3em] text-white/40 uppercase"
        >
          K. ALIU // 2026
        </motion.p>
      </motion.div>

      {/* Luxury Corner Accents */}
      <div className="absolute top-10 left-10 h-4 w-4 border-t border-l border-red-600/30" />
      <div className="absolute bottom-10 right-10 h-4 w-4 border-b border-r border-red-600/30" />
    </div>
  )
}