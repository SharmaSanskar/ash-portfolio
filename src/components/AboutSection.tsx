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
    "Curious",
    "Empathetic",
    "Organized",
    "Collaborative",
    "Observant",
    "Adaptable",
    "Creative",
  ];

  const marqueeSkills = [
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
            { src: "/images/about/about-1.jpg", alt: "Image 1" },
            { src: "/images/about/about-2.jpg", alt: "Image 1" },
            { src: "/images/about/about-3.jpg", alt: "Image 1" },
            { src: "/images/about/about-4.jpg", alt: "Image 1" },
            { src: "/images/about/about-5.jpg", alt: "Image 1" },
            { src: "/images/about/about-6.jpg", alt: "Image 1" },
            { src: "/images/about/about-7.jpg", alt: "Image 1" },
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
        <div className="min-h-screen py-20 mx-auto max-w-6xl px-6">
          {/* Main content grid - no header since animated text serves as title */}
          <div ref={contentRef} className="pt-12 md:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* First paragraph - larger, spans left side */}
              <div className="lg:col-span-7 order-1">
                <p className="text-dark-text text-xl sm:text-2xl md:text-3xl lg:text-4xl/tight font-medium">
                I&apos;m a communicator at heart and a visual thinker by instinct. Whether it&apos;s a press pitch, a social post, or a festival rollout, I mix clarity with creativity to spark real connection.
                </p>
              </div>

              {/* Empty space for layout - only on desktop */}
              <div className="lg:col-span-5 hidden lg:block"></div>

              {/* Image Grid - mobile: full width, desktop: partial width */}
              <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-3">
                <div className="grid grid-cols-4 sm:grid-cols-6 grid-rows-2 sm:grid-rows-3 gap-2 sm:gap-3 h-[400px] sm:h-[500px] lg:h-[700px]">
                  {/* Tall main image on the left */}
                  <div className="col-span-2 sm:col-span-3 row-span-2 relative">
                    <Image
                      src="/images/me/me-1.jpg"
                      alt="ashmika main"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Top right image */}
                  <div className="col-span-2 sm:col-span-3 row-span-1 relative">
                    <Image
                      src="/images/me/me-4.jpg"
                      alt="ashmika secondary"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Fourth photo - bottom left (only visible on sm+ screens) */}
                  <div className="hidden sm:block col-span-2 row-span-1 relative">
                    <Image
                      src="/images/me/me-3.jpg"
                      alt="ashmika fourth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Bottom right image */}
                  <div className="col-span-2 sm:col-span-4 row-span-1 relative">
                    <Image
                      src="/images/me/me-2.jpg"
                      alt="ashmika tertiary"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Gap column - only on desktop */}
              <div className="lg:col-span-1 hidden lg:block"></div>

              {/* Second paragraph and content - mobile: full width, desktop: right side */}
              <div className="lg:col-span-5 lg:col-start-8 flex items-start justify-center order-3 lg:order-4">
                <div className="w-full">
                  <p className="text-base sm:text-lg leading-relaxed tracking-wide font-normal">
                  With roots in history and a master&apos;s in corporate comms underway, I work where strategy meets storytelling. I&apos;ve led PR campaigns, managed events, built media kits, and written copy that carries emotional weight. I love moodboards and spreadsheets equally, and nothing satisfies me more than a ticked-off to-do list.
                  <br /><br />
                  Off the clock, I&apos;m reading, doomscrolling, trend chasing (currently scouting the best matcha spots in town), and hunting down the best bites in Boston. Mike&apos;s Pastry is hands down my favorite. I can also talk endlessly about F1, not just the racing, but the branding, fan culture, and marketing that powers it.
                  </p>

                  {/* Skills section - below second paragraph */}
                  <div className="mt-6 sm:mt-8">
                    <h3 className="text-dark-text text-xs sm:text-sm font-bold mb-3 sm:mb-4 tracking-wider uppercase">
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-dark-text text-xs sm:text-sm px-2 py-1 border border-dashed border-dark-text"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education section - below skills */}
                  <div className="mt-6 sm:mt-8 z-50">
                    <h3 className="text-dark-text text-xs sm:text-sm font-bold mb-3 sm:mb-4 tracking-wider uppercase">
                      EDUCATION
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="ms-degree"
                        className="border-b border-light-border"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1 sm:gap-0">
                            <div className="flex-1">
                              <div className="font-semibold text-sm sm:text-base/tight">
                                MS Corporate and Organizational Communication
                              </div>
                              <div className="text-xs sm:text-sm opacity-80 font-medium">
                                Concentration: Public and Media Relations
                              </div>
                              <div className="text-xs sm:text-sm opacity-60 italic">
                                Northeastern University, Boston
                              </div>
                            </div>
                            <div className="text-xs opacity-60 font-medium self-start sm:self-auto">
                              2024-2026
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm pb-4">
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
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1 sm:gap-0">
                            <div className="flex-1">
                              <div className="font-semibold text-dark-text text-sm sm:text-base">
                                Bachelor of Arts in English and History
                              </div>
                              <div className="text-xs sm:text-sm opacity-60 italic">
                                Sophia College, Mumbai, India
                              </div>
                            </div>
                            <div className="text-xs opacity-60 font-medium self-start sm:self-auto">
                              2021-2024
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm pb-4">
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

      {/* Marquee sections */}
      <AboutMarquee skills={marqueeSkills} direction="left" duration={420} />
      <AboutMarquee skills={marqueeSkills} direction="right" duration={420} />
    </div>
  );
}
