"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1_aI3lfKzS9TFy5yLaSXvmQd5gvwfbJQ-/view?usp=sharing', '_blank');
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Image Background with Wavy Mask */}
      <div className="absolute inset-0 z-0 h-[120vh]">
        <Image
          src="/images/bg/bg-1.jpg"
          alt="Hero background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
          priority
        />

        {/* Optional: Add a subtle overlay to improve text readability */}
        <div
          className="absolute inset-0 bg-black/20"
          style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Glass Polymorphic Effect */}
      <div className="flex items-center justify-center relative z-10 px-4 lg:px-0">
        <div
          className="w-full border border-light-border px-6 py-8 lg:px-28 lg:py-12 backdrop-blur-md text-light-text"
          style={{
            background:
              "linear-gradient(135deg, rgba(127, 153, 154, 0.55) 0%, rgba(127, 153, 154, 0.2) 100%)",
          }}
        >
          {/* Portfolio Text */}
          <h1 className="font-display text-6xl lg:text-[12rem] tracking-wider text-center mb-4 lg:-mb-5">
            PORTFOLIO
          </h1>

          {/* Invisible spacer - desktop only */}
          <div className="hidden lg:block lg:h-14"></div>

          {/* Added tagline text */}
          <p className="text-base lg:text-2xl max-w-full lg:max-w-[60%] mb-6 lg:-mb-16 text-center lg:text-left">
            I build media that ✻ moves and ✦ matters
            <br /> — story-first, screen-smart, platform-ready.
            {/* Bridging ✦ brands and audiences ✢ with bold storytelling and
            impactful ✪ media strategy */}
          </p>

          {/* Name and Title Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-4">
            {/* Name section - comes first on mobile */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="font-display text-3xl lg:text-5xl">
                <span className="inline-block mx-2 lg:hidden">✢</span>
                ASHMIKA
                <span className="inline-block mx-2">✢</span>
              </h2>
              <h2 className="font-display text-3xl lg:text-5xl">RAJENDRAN</h2>
              <p className="mt-2 text-lg lg:text-xl">
                PR & Social Media
                <br /> Strategist
              </p>
            </div>

            {/* Buttons - come second on mobile */}
            <div className="flex gap-4 text-sm order-2 lg:order-1">
              <a 
                href="https://www.linkedin.com/in/ashmika-r"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-1 rounded-full border-2 border-light-border hover:bg-light-text/10 transition"
              >
                LinkedIn
              </a>
              <button 
                className="px-6 py-1 rounded-full border-2 border-light-border hover:bg-light-text/10 transition"
                onClick={handleResumeClick}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
