"use client";

import { motion } from "framer-motion";

const skills = [
  "Social Media Strategy",
  "Public Relations",
  "Digital Content Creation",
  "Brand Storytelling",
  "Crisis Communication",
  "Event Planning & Sponsorships",
  "Campaign Development",
  "Stakeholder Engagement",
  "Digital Marketing",
];

export default function AboutMarquee() {
  const separator = "\u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0"; // non-breaking spaces for consistent spacing
  const skillString = skills.join(separator);
  const fullText = `${skillString}${separator}`;

  return (
    <div className="relative overflow-hidden py-4S">
      <motion.div
        className="flex whitespace-nowrap text-accent-2 opacity-80"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {/* Repeat same content twice for seamless loop */}
        <span className="text-6xl uppercase font-medium mr-8">{fullText}</span>
        <span className="text-6xl uppercase font-medium mr-8">{fullText}</span>
      </motion.div>
    </div>
  );
}
