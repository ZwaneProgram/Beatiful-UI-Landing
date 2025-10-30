import { HeroSection } from "../components/Herosection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer"


export const Home = () => {
    return (
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}

      {/* Background Effects */}

      {/* Navbar */}

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
    );
}