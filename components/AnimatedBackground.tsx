"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="blob blob--a"
        style={{ width: 360, height: 360, left: "-6%", top: "-8%" }}
        animate={{ y: [0, -20, 10, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="blob blob--b"
        style={{ width: 420, height: 420, right: "-8%", top: "-10%" }}
        animate={{ y: [0, 14, -8, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="blob blob--c"
        style={{ width: 380, height: 380, left: "10%", bottom: "-12%" }}
        animate={{ y: [0, -10, 16, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
