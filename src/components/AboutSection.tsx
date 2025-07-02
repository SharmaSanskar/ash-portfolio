"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NestedScrollAnimation from "./NestedScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutMarquee from "./AboutMarquee";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    "Design",
    "Marketing",
    "Canva",
    "Yapping",
    "Crying",
    "Being cute",
  ];

  const handleAnimationComplete = () => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom", // when top of about section hits bottom of viewport
      onEnter: () => setShowContent(true),
      once: true,
    });
  };

  useEffect(() => {
    if (!showContent || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set initial states for content
      gsap.set(contentRef.current?.children || [], {
        opacity: 0,
        x: 100,
      });

      // Create timeline for content reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          // end: "top 30%",
          // scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Animate content with stagger for seamless fade-in
      tl.to(contentRef.current?.children || [], {
        opacity: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.4,
        ease: "power2.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [showContent]);

  return (
    <div className="relative">
      {/* NestedScrollAnimation Layer */}
      <div className="relative">
        <NestedScrollAnimation
          images={[
            { src: "/images/about-1.jpg", alt: "Image 1" },
            { src: "/images/about-2.jpg", alt: "Image 1" },
            { src: "/images/about-3.jpg", alt: "Image 1" },
            { src: "/images/about-4.jpg", alt: "Image 1" },
            { src: "/images/about-5.jpg", alt: "Image 1" },
            { src: "/images/about-6.jpg", alt: "Image 1" },
            { src: "/images/about-7.jpg", alt: "Image 1" },
          ]}
          revealText="This is me"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* About Content Layer */}
      <div
        ref={containerRef}
        className="relative"
        style={{ marginTop: "-100vh" }}
      >
        <div className="min-h-screen py-20 mx-auto max-w-6xl px-8">
          {/* Main content grid - no header since animated text serves as title */}
          <div ref={contentRef} className="pt-20">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* First paragraph - larger, spans left side */}
              <div className="col-span-7">
                <p className="text-dark-text text-4xl/tight font-medium">
                  I collaborate with businesses of all sizes worldwide, using
                  the latest technologies. My designs have also earned multiple
                  awards.
                </p>
              </div>

              {/* Empty space for layout */}
              <div className="col-span-5"></div>

              {/* Image - positioned slightly left of center */}
              <div className="col-span-6 col-start-2">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/images/ashmika-photo.jpg"
                    alt="ashmika"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Second paragraph - smaller text, to the right of image */}
              <div className="col-span-5 col-start-8 flex items-center justify-center">
                <div>
                  <p className="text-xl/tight font-normal">
                    I&apos;m dedicated to crafting beautiful and highly
                    functional designs that seamlessly align with my
                    clients&apos; unique needs and long-term goals.
                  </p>

                  {/* Skills section - below second paragraph */}
                  <div className="col-span-5 col-start-8 mt-8">
                    <h3 className="text-dark-text text-sm font-bold mb-4 tracking-wider uppercase">
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-dark-text text-sm px-2 py-1 border border-dashed border-dark-text"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education section - below skills */}
                  <div className="col-span-5 col-start-8 mt-8 z-50">
                    <h3 className="text-dark-text text-sm font-bold mb-4 tracking-wider uppercase">
                      EDUCATION
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="ms-degree"
                        className="border-b border-light-border"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-3">
                          <div className="flex justify-between items-start w-full">
                            <div className="flex-1">
                              <div className="font-semibold text-base/tight">
                                MS Corporate and Organizational Communication
                              </div>
                              <div className="text-sm opacity-80 font-medium">
                                Concentration: Public and Media Relations
                              </div>
                              <div className="text-sm opacity-60 italic">
                                Northeastern University, Boston
                              </div>
                            </div>
                            <div className="text-xs opacity-60 font-medium">
                              2024-2026
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm pb-4">
                          This graduate program focuses on strategic
                          communication within corporate and organizational
                          settings, with specialized training in public
                          relations and media management. The curriculum covers
                          crisis communication, brand management, digital
                          marketing strategies, and stakeholder engagement,
                          preparing students for leadership roles in corporate
                          communications.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="bachelors-degree"
                        className="border-b border-gray-200"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-3">
                          <div className="flex justify-between items-start w-full">
                            <div className="flex-1">
                              <div className="font-semibold text-dark-text text-base">
                                Bachelor of Arts in English and History
                              </div>
                              <div className="text-sm opacity-60 italic">
                                Sophia College, Mumbai, India
                              </div>
                            </div>
                            <div className="text-xs opacity-60 font-medium">
                              2021-2024
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm pb-4">
                          A comprehensive undergraduate program combining
                          literary studies and historical analysis. This
                          interdisciplinary degree provided strong foundations
                          in critical thinking, research methodology, and
                          written communication. Coursework included modern
                          literature, historical research methods, cultural
                          studies, and comparative analysis of social movements.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutMarquee />
    </div>
  );
}
