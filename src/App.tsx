import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsSection } from './components/SkillsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { MediaAndOutreach } from './components/MediaAndOutreach';
import { TeachingMentoring } from './components/TeachingMentoring';
import { ProfilesIntegration } from './components/ProfilesIntegration';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Bar */}
      <Header onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Biography & Academic Trajectory */}
        <Biography onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Projects Showcase */}
        <ProjectsShowcase />

        {/* Skills & Quantitative Methodologies */}
        <SkillsSection />

        {/* Publications & Book Chapters */}
        <PublicationsSection />

        {/* Media, Podcasts & Public Scholarship */}
        <MediaAndOutreach />

        {/* Teaching, Mentoring & Service */}
        <TeachingMentoring />

        {/* Integrated Google Scholar & ORCID Profiles */}
        <ProfilesIntegration />

        {/* Contact Form & Office Coordinates */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Interactive CV Modal (Full 16-page PDF viewer & download) */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
