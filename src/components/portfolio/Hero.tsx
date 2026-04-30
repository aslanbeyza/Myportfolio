"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { siteConfig } from "@/lib/site";
import type { PortfolioHeroContent } from "@/types/portfolio";

interface HeroProps {
  content: PortfolioHeroContent;
}

export function Hero({ content }: HeroProps) {
  const nameParts = siteConfig.fullName.trim().split(/\s+/);
  const lastName = nameParts.pop() ?? siteConfig.fullName;
  const firstNames = nameParts.join(" ");

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8"
    >
      {/* Tüm dekoratif arka plan bu kutu içinde; flex akışına karışmaz */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 shell-grid opacity-[0.34]" />
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:right-8 lg:flex lg:flex-col lg:items-center lg:gap-4 xl:right-10">
        <div className="h-20 w-px bg-border" />
        <span className="mono-label writing-vertical rotate-180 text-muted-foreground">
          {content.availability}
        </span>
        <div className="h-20 w-px bg-border" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-14">
          <div className="order-2 min-w-0 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="mono-label text-accent">{content.eyebrow}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="mt-6 max-w-lg text-balance text-[clamp(1.1rem,1.9vw,1.3rem)] leading-8 text-muted-foreground lg:mt-8"
            >
              {content.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-4 max-w-xl text-balance text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {content.supportingText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="#projects" className="primary-button">
                {content.primaryCta}
              </a>
              <a href="#contact" className="secondary-button">
                {content.secondaryCta}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-14 flex flex-wrap gap-2"
            >
              {content.techTags.map((tag) => (
                <span key={tag} className="accent-chip">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="order-1 flex min-h-[280px] items-center justify-center sm:min-h-[340px] lg:order-2 lg:h-full lg:min-h-[min(72vh,620px)]">
            <HandWrittenTitle
              decorationSide="panel"
              className="mx-auto aspect-5/4 w-full max-w-[min(100%,420px)] sm:max-w-[min(100%,480px)] lg:aspect-auto lg:h-full lg:max-h-none lg:min-h-0 lg:w-full lg:max-w-none"
              titleClassName="text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.06em] uppercase lg:text-[clamp(3rem,5.5vw,5.5rem)]"
              title={
                <>
                  {firstNames ? (
                    <>
                      {firstNames}
                      <br />
                    </>
                  ) : null}
                  {lastName}
                </>
              }
              aria-label={siteConfig.fullName}
            />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="mono-label">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
