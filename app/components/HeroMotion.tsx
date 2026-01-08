// app/components/HeroMotion.tsx
"use client"; // ← MUST be first line

import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-96 bg-blue-500 flex items-center justify-center text-white"
    >
      Animated Hero
    </motion.div>
  );
}
