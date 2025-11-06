"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <div className="soft-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(800px 300px at 0% 0%, var(--accent-1), transparent), radial-gradient(800px 300px at 100% 100%, var(--accent-2), transparent)" }} />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Let?s build your growth engine</h3>
            <p className="mt-2 text-[--muted] max-w-prose">Tell us about your goals. We?ll send a free audit and plan.</p>
            <motion.a href="mailto:hello@mmdigitalgarage.com" className="btn btn-primary mt-6 inline-flex" whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              hello@mmdigitalgarage.com
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
