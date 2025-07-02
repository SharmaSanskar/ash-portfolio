export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background with Wavy Mask */}
      <div className="absolute inset-0 z-0 h-[120vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,92 Q200,98 400,94 T800,94 Q1000,98 1200,92 L1200,0 Z' fill='white'/%3E%3C/svg%3E")`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <source src="/videos/waves-2.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

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
      <div className="flex items-center justify-center relative z-10">
        <div
          className="w-full border border-light-border px-28 py-12 backdrop-blur-md text-light-text"
          style={{
            background:
              "linear-gradient(135deg, rgba(127, 153, 154, 0.55) 0%, rgba(127, 153, 154, 0.2) 100%)",
          }}
        >
          {/* Portfolio Text */}
          <h1 className="font-display text-[12rem] tracking-wider text-center -mb-5">
            PORTFOLIO
          </h1>

          {/* Added tagline text */}
          <p className="text-2xl max-w-[60%] -mb-16 ">
            I build media that ✻ moves and ✦ matters
            <br /> — story-first, screen-smart, platform-ready.
            {/* Bridging ✦ brands and audiences ✢ with bold storytelling and
            impactful ✪ media strategy */}
          </p>

          {/* Name and Title Section */}
          <div className="flex justify-between items-end">
            <div className="flex gap-4 text-sm">
              <button className="px-6 py-1 rounded-full border-2 border-light-border hover:bg-light-text/10 transition">
                LinkedIn
              </button>
              <button className="px-6 py-1 rounded-full border-2 border-light-border hover:bg-light-text/10 transition">
                Resume
              </button>
            </div>

            <div className="text-left">
              <h2 className="font-display text-5xl">
                ASHMIKA
                <span className="inline-block mx-2">✢</span>
              </h2>
              <h2 className="font-display text-5xl">RAJENDRAN</h2>
              <p className="mt-2 text-xl">
                PR & Social Media
                <br /> Strategist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
