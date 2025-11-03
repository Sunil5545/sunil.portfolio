import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, Code, Database, TestTube, CheckCircle2, ArrowRight, Menu, X } from "lucide-react";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sunil Chaudhari
            </h2>
            <div className="hidden md:flex gap-6">
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#skills" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Projects</a>
              <a href="#services" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Services</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services & Pricing Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Sunil Chaudhari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
