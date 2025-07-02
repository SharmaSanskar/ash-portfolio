"use client";

import React from "react";
import { FaMicrosoft, FaGoogle, FaFigma } from "react-icons/fa6";
import { SiHootsuite, SiCanva } from "react-icons/si";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperienceSection = () => {
  const experiences = [
    {
      id: "01",
      period: "Feb 2025 – May 2025",
      title: "Media Relations Volunteer (Project)",
      company: "Stockhands Horses for Healing",
      description:
        "Think: nonprofit meets press hustle. I built a custom list of 20+ niche journalists and crafted pitches that actually got read. My press kits? Emotion-led, design-first, and donor-ready. I also cleaned up past comms with a tone audit and left them with templates + takeaways to keep the momentum going.",
    },
    {
      id: "02",
      period: "May 2023 – Apr 2024",
      title: "Head of Public Relations",
      company: "Sophia College, Mumbai",
      description:
        "I led a full-blown PR refresh for the entire college—rewriting how we spoke to students, faculty, and alumni. I managed a 15+ person media team and turned chaotic channels into a cohesive brand system. Press placements jumped by 30%, and we finally stopped that endless WhatsApp rumor cycle with cleaner, segmented comms.",
    },
    {
      id: "03",
      period: "Oct 2021 – Mar 2023",
      title: "Head of Events Team",
      company: "Kaleidoscope Fest, Sophia College",
      description:
        "This was the big one: 20,000 attendees, 30+ crew, 12+ new events launched yearly. I ran all logistics—from backstage flow to vendor ops—while helping rebrand the fest with a more Gen Z vibe. My sponsorship decks landed 20+ barter deals, and digital reach? Up by 25% that year.",
    },
    {
      id: "04",
      period: "Jan 2023 – Feb 2023",
      title: "Event Logistics & Marketing Volunteer",
      company: "The Lil Flea Festival",
      description:
        "Supported the on-ground team during vendor setup and layout optimization, helping reduce prep time and smooth out traffic flow. I also teamed up with the content crew to align real-time booth stories with audience spikes—leading to a 30% jump in engagement across social.",
    },
  ];

  const volunteerExperiences = [
    {
      id: "05",
      period: "Dec 2023 – May 2024",
      title: "Volunteer",
      company: "Welfare of Stray Dogs (Mumbai, India)",
      description:
        "Helped manage rescues, coordinate adoption events, and support awareness drives—six months of fur, fieldwork, and figuring out how to communicate with both people and puppies.",
    },
    {
      id: "06",
      period: "2021 – 2023",
      title: "NSS Volunteer",
      company: "National Service Scheme (NSS), Sophia College",
      description:
        "Served consistently for two years on community outreach and social justice projects, including organizing blood donation camps, conducting street plays, and running education drives in underserved areas.",
    },
    {
      id: "07",
      period: "Jan 2025 – Present",
      title: "Tutor",
      company: "826 Boston",
      description:
        "Currently working with elementary to middle school students to craft creative stories and essays through after-school programs—watching young writers find their voice is the best part of my week. I also assist them with their day-to-day homework/assignments.",
    },
  ];

  const skills = [
    { name: "HubSpot", icon: SiHootsuite, color: "text-[#FF5C35]" },
    { name: "MuckRack", icon: MdOutlineRemoveRedEye, color: "text-[#0095A9]" },
    { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
    { name: "Meltwater", icon: MdOutlineRemoveRedEye, color: "text-[#0095A9]" },
    { name: "InShot", icon: FaFigma, color: "text-[#A259FF]" },
    { name: "Slack", icon: SiHootsuite, color: "text-[#4A154B]" },
    { name: "CapCut", icon: FaFigma, color: "text-[#A259FF]" },
    { name: "Google Suite", icon: FaGoogle, color: "text-[#4285F4]" },
    { name: "Microsoft Office", icon: FaMicrosoft, color: "text-[#F25022]" },
    { name: "OpusClip", icon: FaFigma, color: "text-[#A259FF]" },
    { name: "Editorial Calendars", icon: SiHootsuite, color: "text-[#F68B1F]" },
    { name: "Media Monitoring", icon: MdOutlineRemoveRedEye, color: "text-[#0095A9]" },
    { name: "Wix", icon: FaFigma, color: "text-[#A259FF]" },
  ];

  // Custom AccordionTrigger with bigger arrows
  const CustomAccordionTrigger = ({ children, ...props }: React.ComponentProps<typeof AccordionTrigger>) => (
    <AccordionTrigger 
      {...props}
      className="text-left hover:no-underline [&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-2 [&>svg]:opacity-90 hover:[&>svg]:opacity-100 hover:[&>svg]:scale-110 [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:translate-y-4"
    >
      {children}
    </AccordionTrigger>
  );

  return (
    <section className="py-20 mx-auto max-w-6xl px-6">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 sm:mb-12 text-dark-accent tracking-wider uppercase">
        Experience
      </h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Section - Experience (75%) */}
        <div className="flex-[3] text-dark-accent">
          <Accordion type="single" collapsible className="space-y-6 lg:space-y-8">
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="border-b border-light-border pb-4 lg:pb-6"
              >
                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 opacity-60 hover:opacity-100 transition-all">
                  {/* Large Number */}
                  <div className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none mt-2 lg:mt-4 flex-shrink-0">
                    {exp.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <CustomAccordionTrigger>
                      <div className="flex flex-col items-start gap-1 sm:gap-2 w-full">
                        <span className="text-xs sm:text-sm font-medium tracking-wider opacity-60">
                          {exp.period}
                        </span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{exp.title}</h3>
                        <p className="font-medium text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </CustomAccordionTrigger>

                    <AccordionContent className="pt-3 lg:pt-4">
                      <p className="leading-tight text-sm sm:text-base lg:text-lg">{exp.description}</p>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Volunteer Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-8 sm:mb-12 text-dark-accent tracking-wider uppercase">
              Volunteer / Non-Profit Work
            </h3>
            <Accordion type="single" collapsible className="space-y-6 lg:space-y-8">
              {volunteerExperiences.map((exp) => (
                <AccordionItem
                  key={exp.id}
                  value={exp.id}
                  className="border-b border-light-border pb-4 lg:pb-6"
                >
                  <div className="flex items-start gap-4 sm:gap-6 lg:gap-8 opacity-60 hover:opacity-100 transition-all">
                    {/* Large Number */}
                    <div className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none mt-2 lg:mt-4 flex-shrink-0">
                      {exp.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <CustomAccordionTrigger>
                        <div className="flex flex-col items-start gap-1 sm:gap-2 w-full">
                          <span className="text-xs sm:text-sm font-medium tracking-wider opacity-60">
                            {exp.period}
                          </span>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{exp.title}</h3>
                          <p className="font-medium text-sm sm:text-base">{exp.company}</p>
                        </div>
                      </CustomAccordionTrigger>

                      <AccordionContent className="pt-3 lg:pt-4">
                        <p className="leading-tight text-sm sm:text-base lg:text-lg">{exp.description}</p>
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Right Section - Skills (25%) */}
        <div className="flex-1 mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-3">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="border border-dashed border-dark-text px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-secondary-bg transition-colors group"
                >
                  <IconComponent
                    className={`text-xl ${skill.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
