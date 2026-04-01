"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Zap, LayoutGrid } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  MessageSquareText,
  Zap,
  LayoutGrid,
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Services() {
  return (
    <section id="diensten" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-4 block">
            Wat wij doen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Automatisering die werkt.
            <br />
            Vanaf dag een.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative rounded-2xl border p-8 md:p-10 transition-all duration-300",
                  "bg-card/60 backdrop-blur-sm border-border/50",
                  "hover:bg-bg-card-hover hover:border-brand-purple/30 hover:-translate-y-1",
                  "hover:shadow-[0_8px_30px_rgba(108,92,231,0.12)]",
                  service.featured &&
                    "border-brand-purple/30 bg-gradient-to-b from-brand-purple/[0.08] to-card/60"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-light mb-6">
                  <Icon className="size-6" />
                </div>

                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
