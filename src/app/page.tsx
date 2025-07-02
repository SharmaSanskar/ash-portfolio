import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
