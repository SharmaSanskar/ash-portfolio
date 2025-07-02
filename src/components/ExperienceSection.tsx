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
      period: "2023-2024",
      title: "Head of Public Relations",
      company: "Sophia College, Mumbai, India",
      description:
        "Led the college's PR and digital presence, managing social media strategy, brand messaging, and stakeholder communication. Developed crisis communication plans, executed event coverage, and drove engagement through compelling multimedia content.",
    },
    {
      id: "02",
      period: "2021-2023",
      title: "Head of Events Team",
      company: "Sophia College, Mumbai, India",
      description:
        "Planned and executed large-scale events, securing sponsorships and coordinating logistics to enhance attendee experience. Managed teams and leveraged brand partnerships to elevate the festival's visibility and impact.",
    },
    {
      id: "03",
      period: "2023-2024",
      title: "Social Media & Content Volunteer",
      company: "Welfare of Stray Dogs (WSD), Mumbai, India",
      description:
        "Curated digital content and managed social media initiatives to boost awareness and community engagement for animal welfare. Developed campaigns to highlight adoption efforts and connect with broader audiences.",
    },
  ];

  const skills = [
    { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" }, // Canva teal
    { name: "Hootsuite", icon: SiHootsuite, color: "text-[#F68B1F]" }, // Hootsuite orange
    { name: "Meltwater", icon: MdOutlineRemoveRedEye, color: "text-[#0095A9]" }, // Meltwater blue
    { name: "Figma", icon: FaFigma, color: "text-[#A259FF]" }, // Figma purple
    { name: "Google Suite", icon: FaGoogle, color: "text-[#4285F4]" }, // Google blue
    { name: "Microsoft Office", icon: FaMicrosoft, color: "text-[#F25022]" }, // Microsoft orange
  ];

  return (
    <div className="min-h-screen mx-auto max-w-6xl py-12">
      {/* Header */}
      <h2 className="text-7xl font-bold font-display mb-8 text-dark-accent tracking-wider uppercase">
        Experience
      </h2>

      {/* Main Content */}
      <div className="flex gap-12">
        {/* Left Section - Experience (75%) */}
        <div className="flex-[3] text-dark-accent">
          <Accordion type="single" collapsible className="space-y-8">
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="border-b border-light-border pb-6"
              >
                <div className="flex items-start gap-8 opacity-60 hover:opacity-100 transition-all">
                  {/* Large Number */}
                  <div className="text-8xl font-bold leading-none mt-4">
                    {exp.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <span className="text-sm font-medium tracking-wider opacity-60">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="font-medium">{exp.company}</p>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pt-4">
                      <p className="leading-tight text-lg">{exp.description}</p>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Section - Skills (25%) */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="border border-dashed border-dark-text px-4 py-3 flex items-center gap-3 hover:bg-secondary-bg transition-colors group"
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
    </div>
  );
};

export default ExperienceSection;
