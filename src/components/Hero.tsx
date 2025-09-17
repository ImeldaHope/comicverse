"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-display text-red-600 dark:text-red-700 max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Discover the{" "}
        <Highlight className="text-black dark:text-white">Heroes</Highlight> and{" "}
        <Highlight className="text-black dark:text-white">Stories</Highlight>{" "}
        that shaped the{" "}
        <Highlight className="text-black dark:text-white">
          Marvel Universe
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
