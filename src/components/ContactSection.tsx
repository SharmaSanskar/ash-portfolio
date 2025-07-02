import { Mail, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 mx-auto max-w-6xl">
      <div className="flex items-center justify-between w-full gap-14">
        {/* Left side - Heading */}
        <div className="flex-1">
          <h2 className="text-8xl font-light leading-[1] -mb-2 text-accent-2">
            DON&apos;T
            <br />
            BE SHY
          </h2>
          <h2 className="text-9xl font-bold leading-[1] text-accent-1">
            SAY HI!
          </h2>

          <Separator className="my-8" />

          {/* Contact options */}
          <div className="text-accent-2">
            <p className="text-base mb-4">Reach out to me on:</p>

            <div className="space-y-3 text-base">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 hover:text-dark-hariyali transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>your.email@example.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-dark-hariyali transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>linkedin.com/in/yourprofile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="flex-1">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200"
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
                className="w-full px-4 py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200"
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
                rows={5}
                className="w-full px-4 py-3 border border-accent-2 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-1 text-light-text py-3 px-6 font-medium hover:bg-accent-2 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
