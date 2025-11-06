"use client";

import { motion } from "framer-motion";

const quotes = [
  { author: "SaaS Founder", text: "Their launch strategy 3??d trials in 60 days." },
  { author: "Ecom Director", text: "Finally a partner that designs for humans, not templates." },
  { author: "Head of Growth", text: "Beautiful craft. Even better numbers." },
  { author: "CMO", text: "A calm, expert team that just gets it done." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Kind words</h2>
          <p className="mt-3 text-[--muted] max-w-prose">A few notes from teams we?ve supported.</p>
        </div>
        <motion.div className="marquee soft-card p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="marquee__track min-w-[200%]">
            {[...quotes, ...quotes].map((q, i) => (
              <blockquote key={i} className="px-4 py-3 rounded-lg border border-[--ring] bg-white/70">
                <p className="text-sm">?{q.text}?</p>
                <footer className="mt-2 text-xs text-[--muted]">? {q.author}</footer>
              </blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
