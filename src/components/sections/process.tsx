"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="werkwijze" className="py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-4 block">
            Hoe wij werken
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Van idee naar resultaat
            <br />
            in drie stappen.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <motion.div
            className="hidden md:block absolute top-[28px] left-[calc(16.67%-14px)] right-[calc(16.67%-14px)] h-px"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          >
            <div className="w-full h-full gradient-brand opacity-40" />
          </motion.div>

          {/* Vertical connecting line (mobile) */}
          <motion.div
            className="md:hidden absolute top-[28px] bottom-[28px] left-[28px] w-px"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          >
            <div className="w-full h-full gradient-brand opacity-40" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex md:flex-col items-start gap-6 md:items-center md:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.2,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Circle node */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-full border-2 border-brand-purple/40 bg-background flex items-center justify-center shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <span className="font-mono font-bold text-brand-light text-sm">
                    {step.num}
                  </span>
                </motion.div>

                <div>
                  <h3 className="font-bold text-lg mb-3 md:mt-6">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
