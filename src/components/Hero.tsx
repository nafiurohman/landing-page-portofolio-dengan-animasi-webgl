import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ShaderPlane from './ShaderPlane';
import AnimatedLineText from './AnimatedLineText';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = documentHeight > 0 ? Math.min(scrollY / documentHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* WebGL Canvas Background */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: true, alpha: false }}
        >
          <ShaderPlane scrollProgress={scrollProgress} />
        </Canvas>
      </div>

      {/* Animated Line Text Overlay */}
      <AnimatedLineText />

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-8">
          {/* Spacer for the animated text */}
          <div className="h-32" />

          {/* Subtitle */}
          <div className="mt-6 sm:mt-8 animate-fade-up-delay">
            <p className="hero-subtitle text-xs sm:text-sm tracking-[0.3em] text-foreground/60">
              Creative Developer & Designer
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-2">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                Scroll
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Secondary Section - Appears on Scroll */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 bg-background/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 leading-relaxed tracking-wide">
              Crafting digital experiences at the intersection of
              <span className="text-foreground font-medium"> design</span>,
              <span className="text-foreground font-medium"> technology</span>, and
              <span className="text-foreground font-medium"> art</span>.
            </p>
            
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <button 
                onClick={() => scrollToSection('work')}
                className="group relative px-8 py-4 text-xs tracking-[0.2em] uppercase text-foreground border border-foreground/20 hover:border-foreground/60 transition-colors duration-500"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-foreground/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="group px-8 py-4 text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
              >
                About Me
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300 cursor-pointer"
        >
          NAFIUROHMAN
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <span 
            onClick={() => scrollToSection('work')}
            className="text-xs tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            Work
          </span>
          <span 
            onClick={() => scrollToSection('about')}
            className="text-xs tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            About
          </span>
          <span 
            onClick={() => scrollToSection('skills')}
            className="text-xs tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            Skills
          </span>
          <span 
            onClick={() => scrollToSection('contact')}
            className="text-xs tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            Contact
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Hero;