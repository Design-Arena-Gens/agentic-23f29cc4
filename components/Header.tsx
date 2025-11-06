"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-[--ring]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="font-semibold tracking-tight text-[--foreground]">
            <span className="relative">
              MM Digital Garage
              <span className="absolute left-0 -bottom-1 h-[6px] w-full rounded-full" style={{ background: "var(--accent-2)" }} />
            </span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6 text-[--muted]">
          <a href="#services" className="hover:text-[--foreground] transition-colors">Services</a>
          <a href="#process" className="hover:text-[--foreground] transition-colors">Process</a>
          <a href="#testimonials" className="hover:text-[--foreground] transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-[--foreground] transition-colors">Contact</a>
        </nav>
        <motion.a
          href="#contact"
          className="btn btn-primary"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project
        </motion.a>
      </div>
    </header>
  );
}
