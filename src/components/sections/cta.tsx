"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/20 blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1140px] px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-5">
          Klaar om te automatiseren?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
          Plan een vrijblijvend gesprek en ontdek wat AI en automatisering voor
          uw bedrijf kunnen betekenen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6">
          <LinkButton
            variant="gradient"
            size="lg"
            className="px-8 py-6 text-base"
            href={`mailto:${CONTACT.email}`}
          >
            Stuur ons een mail
          </LinkButton>
          <span className="text-text-dim text-sm">of</span>
          {CONTACT.phones.map((phone) => (
            <LinkButton
              key={phone.name}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base"
              href={`tel:${phone.number}`}
            >
              {phone.display}
            </LinkButton>
          ))}
        </div>

        <p className="text-text-dim text-sm">
          Geen verplichtingen. Eerste gesprek altijd gratis.
        </p>
      </motion.div>
    </section>
  );
}
