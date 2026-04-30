"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DecorationSide = "center" | "right" | "panel";

interface HandWrittenTitleProps {
  title?: ReactNode;
  subtitle?: string;
  /**
   * center: demo stack · right: SVG biased beside left-aligned title · panel: SVG + title centered in cell (hero right column)
   */
  decorationSide?: DecorationSide;
  className?: string;
  titleClassName?: string;
  "aria-label"?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle,
  decorationSide = "center",
  className,
  titleClassName,
  "aria-label": ariaLabel,
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  };

  const isRight = decorationSide === "right";
  const isPanel = decorationSide === "panel";

  return (
    <div
      className={cn(
        "relative w-full",
        isRight ? "py-0" : isPanel ? "flex min-h-full flex-col py-0" : "mx-auto max-w-4xl py-24",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          isPanel && "-inset-x-[8%] -inset-y-[12%]",
          isRight &&
            "inset-y-[-18%] bottom-[-28%] left-[42%] right-[-12%] top-[-12%] sm:left-[48%] lg:left-[52%]"
        )}
        aria-hidden
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio={
            isRight ? "xMaxYMid meet" : "xMidYMid meet"
          }
          initial="hidden"
          animate="visible"
          className="h-full w-full"
        >
          <title>Hand-drawn highlight</title>
          <motion.path
            d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-foreground opacity-90"
          />
        </motion.svg>
      </div>
      <div
        className={cn(
          "relative z-10 flex flex-col",
          isRight
            ? "items-start text-left"
            : "items-center justify-center text-center",
          isPanel &&
            "min-h-0 flex-1 justify-center pt-[clamp(0.85rem,3.25vh,2.35rem)]"
        )}
      >
        <motion.h1
          aria-label={ariaLabel}
          className={cn(
            decorationSide === "center" &&
              "flex flex-wrap items-center justify-center gap-x-2 text-4xl tracking-tighter md:text-6xl",
            isRight && "block w-full min-w-0",
            isPanel &&
              "flex flex-col items-center gap-0 text-balance text-center",
            "text-foreground",
            titleClassName
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            className="mt-2 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
