"use client";

import { motion } from "framer-motion";

interface AboutMarqueeProps {
  skills: string[];
  direction?: "left" | "right";
  duration?: number;
}

export default function AboutMarquee({ 
  skills, 
  direction = "left", 
  duration = 25 
}: AboutMarqueeProps) {
  const separator = "\u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0"; // non-breaking spaces for consistent spacing
  const skillString = skills.join(separator);
  const fullContent = `${skillString}${separator}`;
  
  // Create enough repetitions to ensure seamless infinite scroll
  // Repeat the content 8 times to ensure there's always content visible
  const repeatedContent = Array(8).fill(fullContent).join("");

  const animationProps = direction === "left" 
    ? { 
        x: ["0%", "-50%"],  // Move exactly half the distance since content is duplicated
      }
    : { 
        x: ["-50%", "0%"], // Move exactly half the distance since content is duplicated
      };

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap text-accent-2 opacity-80"
        animate={animationProps}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        style={{ 
          width: "fit-content",
          minWidth: "200vw" // Ensure container is wide enough
        }}
      >
        {/* Single span with all content - duplicated for seamless loop */}
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-medium">
          {repeatedContent}
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-medium">
          {repeatedContent}
        </span>
      </motion.div>
    </div>
  );
}
