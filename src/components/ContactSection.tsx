"use client";

import { Mail, Linkedin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 mx-auto max-w-6xl px-6 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 sm:gap-10 lg:gap-14">
        {/* Left side - Heading */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1] -mb-1 lg:-mb-2 text-accent-2">
            DON&apos;T
            <br />
            BE SHY
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-[1] text-accent-1">
            SAY HI!
          </h2>

          <Separator className="my-6 lg:my-8" />

          {/* Contact options */}
          <div className="text-accent-2">
            <p className="text-sm sm:text-base mb-4">Reach out to me on:</p>

            <div className="space-y-3 text-sm sm:text-base">
              {/* Email */}
              <a
                href="mailto:ashmikar.2210@gmail.com"
                className="flex items-center gap-3 hover:text-dark-hariyali transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                <span className="break-all sm:break-normal">ashmikar.2210@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ashmika-r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-dark-hariyali transition-colors duration-200 group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                <span className="break-all sm:break-normal">www.linkedin.com/in/ashmika-r</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+18574218393"
                className="flex items-center gap-3 hover:text-dark-hariyali transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                <span>(857) 421-8393</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="flex-1 w-full lg:w-auto">
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base resize-y"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-1 text-light-text py-2 sm:py-3 px-4 sm:px-6 font-medium hover:bg-accent-2 transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
