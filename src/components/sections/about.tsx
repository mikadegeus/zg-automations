"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";

export function About() {
  return (
    <section id="over-ons" className="py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-4 block">
            Over ons
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            De mensen achter ZG.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              className="group bg-card border border-border rounded-2xl p-10 text-center transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(108,92,231,0.12)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Avatar with gradient ring */}
              <div className="w-[126px] h-[126px] rounded-full gradient-border p-[3px] mx-auto mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>

              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-brand-light text-sm font-medium mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
