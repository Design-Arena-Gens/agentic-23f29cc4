"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative section">
      <AnimatedBackground />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Crafting human-first digital marketing
              <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--accent-2), var(--accent-1))" }}>
                for brands that join our garage
              </span>
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-[--muted] max-w-prose"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              We blend strategy, storytelling, and tasteful motion to grow attention into trust. Every interaction is crafted?never generic.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">Get a Free Audit</a>
              <a href="#services" className="btn btn-ghost w-full sm:w-auto">Explore Services</a>
            </motion.div>
            <motion.div
              className="mt-10 grid grid-cols-3 gap-6 text-center text-sm text-[--muted]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {["SEO", "Paid Media", "Content"].map((label, idx) => (
                <motion.div key={label} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="soft-card py-4">
                  <span className="text-[--foreground] font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="soft-card p-6 md:p-8 relative"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="aspect-[4/3] w-full rounded-[var(--radius-lg)] bg-[--accent-1] relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "radial-gradient(1200px 400px at -10% 0%, var(--accent-2), transparent), radial-gradient(900px 600px at 110% 100%, var(--accent-3), transparent)" }} />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPositionX: ["0%", "100%"], backgroundPositionY: ["0%", "100%"] }}
                transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
                style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,.35) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.25) 0, transparent 35%)" }}
              />
            </div>
            <p className="mt-4 text-sm text-[--muted]">Subtle, responsive motion that guides?not distracts.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
