"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { PortfolioHeroContent } from "@/types/portfolio";

const HERO_IMAGE = "/images/beyza-hero.jpeg" as const;

interface HeroProps {
  content: PortfolioHeroContent;
}

function HeroPortraitFrame({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square w-72 max-w-full shrink-0 sm:w-80 lg:w-96 min-[1280px]:w-[28rem] 2xl:w-[32rem]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/45 via-accent/5 to-transparent opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-2 rounded-2xl bg-accent/20 blur-2xl"
        aria-hidden
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/50 bg-card/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_64px_rgba(0,0,0,0.35)] ring-2 ring-white/[0.07]">
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/25 via-transparent to-background/5"
          aria-hidden
        />
        <Image
          src={HERO_IMAGE}
          alt={siteConfig.fullName}
          width={760}
          height={760}
          priority={priority}
          unoptimized
          sizes="(max-width: 1023px) 90vw, (max-width: 1535px) 28rem, 32rem"
          className="h-full w-full object-cover object-[center_20%]"
        />
      </div>
    </div>
  );
}

export function Hero({ content }: HeroProps) {
  const nameParts = siteConfig.fullName.trim().split(/\s+/);
  const lastName = nameParts.pop() ?? siteConfig.fullName;
  const firstNames = nameParts.join(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8"
    >
      <div className="absolute inset-0 shell-grid opacity-50" aria-hidden />

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:right-8 lg:flex lg:flex-col lg:items-center lg:gap-4 xl:right-10">
        <div className="h-20 w-px bg-border" />
        <span className="mono-label writing-vertical rotate-180 text-muted-foreground">
          {content.availability}
        </span>
        <div className="h-20 w-px bg-border" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-6 xl:gap-8">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="mono-label text-accent">{content.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              aria-label={siteConfig.fullName}
              className="max-w-5xl text-[clamp(3.75rem,9.5vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.06em] text-foreground"
            >
              {firstNames ? (
                <>
                  {firstNames}
                  <br />
                </>
              ) : null}
              <span>{lastName}</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 lg:hidden"
            >
              <HeroPortraitFrame className="mx-auto" priority />
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

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-lg:hidden flex min-w-0 items-center justify-start self-center lg:col-start-2"
          >
            <HeroPortraitFrame priority />
          </motion.div>
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
