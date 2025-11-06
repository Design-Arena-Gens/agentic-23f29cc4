"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Search & Content",
    desc: "Technical SEO, content strategy, and on-site experience that compound growth.",
    icon: "??",
  },
  {
    title: "Paid Media",
    desc: "Full-funnel campaigns across Google & socials with creative iteration.",
    icon: "??",
  },
  {
    title: "Brand & UX",
    desc: "Human-first design systems and landing experiences that convert.",
    icon: "?",
  },
  {
    title: "Analytics",
    desc: "Attribution, dashboards, and experimentation to de-risk decisions.",
    icon: "??",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-[--muted] max-w-prose">End-to-end digital marketing rooted in craft. Every detail is considered.</p>
        </div>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              className="soft-card p-5"
            >
              <div className="text-2xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-2 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-[--muted]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
