"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageObject {
  src: string;
  alt?: string;
}

interface AnimationOptions {
  scrub?: number | boolean;
  start?: string;
  end?: string;
  pinSpacing?: boolean;
  textRevealOffset?: number;
  imageShrinkBase?: number;
  staggerDelay?: number;
}

interface NestedScrollAnimationProps {
  images?: ImageObject[];
  revealText?: string;
  options?: AnimationOptions;
  onAnimationComplete?: () => void;
}

const NestedScrollAnimation: React.FC<NestedScrollAnimationProps> = ({
  images = [],
  revealText = "This is me",
  options = {},
  onAnimationComplete,
}) => {
  const defaultOptions = {
    scrub: true,
    start: "top top",
    end: "+=300%", // Extended for transition
    pinSpacing: true,
    textRevealOffset: -0.05,
    imageShrinkBase: 0.4,
    staggerDelay: 0.08,
  };

  const config = { ...defaultOptions, ...options };

  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const animationInitialized = useRef(false);

  const words = [...revealText.split(" "), ":))"];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (animationInitialized.current) return;
    animationInitialized.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: config.start,
          end: config.end,
          scrub: config.scrub,
          pin: true,
          pinSpacing: config.pinSpacing,
          onUpdate: (self) => {
            // Trigger callback when animation is near completion
            if (self.progress > 0.85 && onAnimationComplete) {
              onAnimationComplete();
            }
          },
        },
      });

      // Initial image setup
      imagesRef.current.forEach((img) => {
        gsap.set(img, {
          scale: 1,
          transformOrigin: "center center",
        });
      });

      // Shrink all images together at different rates
      imagesRef.current.forEach((img, i) => {
        const duration = 0.8 + i * 0.3;
        tl.to(
          img,
          {
            scale: 0,
            ease: "power3.in",
            duration: duration,
          },
          0
        );
      });

      // Text initial state
      gsap.set(wordRefs.current, { opacity: 0, y: 20 });
      gsap.set(textRef.current, {
        fontSize: "clamp(2rem, 8vw, 8rem)",
        x: "0%",
        y: "0%",
      });

      // Reveal text
      const textStart =
        1.5 + (images.length - 1) * 0.2 + config.textRevealOffset;

      wordRefs.current.forEach((word, index) => {
        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 0.3,
          },
          textStart + index * config.staggerDelay
        );
      });

      // Transition text to top-left position
      const transitionStart =
        textStart + words.length * config.staggerDelay + 0.5;

      tl.to(
        textRef.current,
        {
          fontSize: "clamp(2rem, 7vw, 7rem)",
          x: "-25%",
          y: "-40%",
          color: "#3f4238",
          ease: "power2.inOut",
          duration: 1,
        },
        transitionStart
      );

      // Fade out only the black background, keep text visible
      tl.to(
        containerRef.current,
        {
          backgroundColor: "transparent",
          ease: "power2.inOut",
          duration: 0.8,
        },
        transitionStart + 0.3
      );
    });

    return () => {
      ctx.revert();
      animationInitialized.current = false;
    };
  }, [
    images,
    revealText,
    onAnimationComplete,
    config.start,
    config.end,
    config.scrub,
    config.pinSpacing,
    config.textRevealOffset,
    config.staggerDelay,
    words.length,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-dark-bg pointer-events-none"
    >
      {/* Images Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            ref={(el) => {
              if (el) imagesRef.current[index] = el;
            }}
            className="absolute w-full h-full flex items-center justify-center"
            style={{ zIndex: images.length - index }}
          >
            <div className="relative w-[90vw] md:w-[75vw] aspect-video shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 80vw, 60vw"
                className="object-cover rounded"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text Reveal */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-light-text"
      >
        <h2 className="font-bold text-center px-4 whitespace-nowrap">
          {words.map((word, index) => (
            <span
              key={`word-${index}`}
              ref={(el) => {
                if (el) wordRefs.current[index] = el;
              }}
              className="inline-block mx-2"
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default NestedScrollAnimation;
