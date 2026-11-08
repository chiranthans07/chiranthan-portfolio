import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { GeometricBackground } from "@/components/GeometricBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
      {/* Interactive 3D Perspective Canvas in background */}
      <GeometricBackground />

      {/* Main Flow of Editorial Sections */}
      <div className="relative z-10">
        {/* Section 01: Hero / Landing */}
        <Hero />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Technical Expertise */}
        <Expertise />

        {/* Section 04: Selected Projects & Case Studies */}
        <Projects />

        {/* Section 05: Certifications & Industry Simulations */}
        <Certifications />

        {/* Section 07: Honors, Leadership & Achievements */}
        <Achievements />

        {/* Section 08: Academic Foundation & Education */}
        <Education />

        {/* Section 09: Verified Resume & Document Viewer */}
        <Resume />

        {/* Section 10: Contact, Direct Channels & Footer */}
        <Contact />
      </div>
    </div>
  );
}
