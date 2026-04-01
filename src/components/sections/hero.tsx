"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { STATS, CONTACT } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix = "%",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-44 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,92,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/25 blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-brand-blue/15 blur-[100px]"
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50px] left-[-50px] w-[350px] h-[350px] rounded-full bg-brand-light/20 blur-[100px]"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <FadeUp delay={0}>
          <Badge
            variant="outline"
            className="bg-brand-purple/10 border-brand-purple/20 text-brand-light mb-7 text-sm px-4 py-1.5"
          >
            AI-gedreven automatisering
          </Badge>
        </FadeUp>

        <FadeUp delay={0.12}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            Uw bedrijfsprocessen,
            <br />
            <span className="gradient-text">slim geautomatiseerd.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.24}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            ZG Automations helpt bedrijven met praktische AI-oplossingen en
            digitalisering. Geen complexe trajecten, direct resultaat.
          </p>
        </FadeUp>

        <FadeUp delay={0.36}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <LinkButton
              variant="gradient"
              size="lg"
              className="px-8 py-6 text-base"
              href={`mailto:${CONTACT.email}`}
            >
              Stuur ons een mail
            </LinkButton>
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
        </FadeUp>

        <FadeUp delay={0.48}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-8 sm:gap-0"
              >
                {i > 0 && (
                  <Separator
                    orientation="vertical"
                    className="hidden sm:block h-10 mx-10 bg-border"
                  />
                )}
                {i > 0 && <Separator className="sm:hidden w-10 bg-border" />}
                <div className="flex flex-col items-center">
                  <span className="gradient-text font-extrabold text-3xl font-mono">
                    {stat.countTo && stat.suffix ? (
                      <AnimatedCounter
                        value={stat.countTo}
                        suffix={stat.suffix}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="text-text-dim text-xs mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
