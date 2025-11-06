"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Discover", desc: "We align on goals, customers, and constraints." },
  { title: "Design", desc: "We sketch narratives and interactions that feel natural." },
  { title: "Build", desc: "We implement campaigns and experiences with care." },
  { title: "Learn", desc: "We measure, iterate, and scale what works." },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How we work</h2>
          <p className="mt-3 text-[--muted] max-w-prose">Simple, collaborative, and transparent. Designed to move fast without breaking trust.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, var(--accent-1), var(--accent-2))" }} />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <div className="flex items-start gap-4 md:justify-end">
                  <div className="mt-1 h-8 w-8 rounded-full" style={{ background: "conic-gradient(from 180deg, var(--accent-1), var(--accent-2), var(--accent-3))" }} />
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-[--muted] mt-1">{s.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
