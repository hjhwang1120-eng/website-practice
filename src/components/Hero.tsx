import React from 'react';
import { ArrowUpRight, FileText, Mail, GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/cvData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Typographic & Conceptual Presence */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-stone-600 mb-4">
              <span>Department of Educational Psychology</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-amber-800">University of Minnesota</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Minneapolis, MN</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Investigating the Cognitive Architecture of Reading Comprehension, Content-Area Literacy & EdTech.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-8 max-w-2xl">
              I am an Assistant Professor at the University of Minnesota. My research investigates how domain-specific background knowledge, vocabulary depth, and cognitive executive functions dynamically interact to foster reading comprehension in young children, multilingual students, and emerging readers at risk for learning difficulties.
            </p>

            {/* CTAs & Immediate Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#research"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Explore Research & Grants</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>View Full CV (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Scholar Identity Quick Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-stone-200/80 text-xs text-stone-600">
              <span className="font-semibold text-stone-800">Direct Profiles:</span>
              <a
                href={personalInfo.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-stone-700 hover:text-stone-950 hover:underline"
              >
                Google Scholar <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <a
                href={personalInfo.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-stone-700 hover:text-stone-950 hover:underline"
              >
                ORCID: {personalInfo.orcidId} <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1 font-medium text-stone-700 hover:text-stone-950 hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>

          </div>

          {/* Right Column: Scholar Identity Card & Institutional Affiliation */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              
              {/* Subtle Academic Insignia Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-amber-900/10 border border-amber-900/20 text-amber-900 flex items-center justify-center font-serif text-2xl font-bold mb-3">
                    HH
                  </div>
                  <h2 className="text-xl font-serif font-bold text-stone-900">
                    {personalInfo.preferredName}
                  </h2>
                  <p className="text-sm font-medium text-stone-600">
                    {personalInfo.title}
                  </p>
                </div>
                
                {/* UMN Crest representation */}
                <div className="text-right">
                  <div className="inline-block px-2.5 py-1 text-[11px] font-semibold text-amber-900 bg-amber-50 rounded border border-amber-200">
                    Univ. of Minnesota
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">Twin Cities</p>
                </div>
              </div>

              {/* Research Scope Points */}
              <div className="space-y-3.5 mb-7 text-xs text-stone-600 border-y border-stone-100 py-5">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 font-medium">Core Research:</strong> The bidirectional relationship between content knowledge and literacy in K-5 elementary education.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 font-medium">EdTech Innovations:</strong> Co-developer of <em className="not-italic font-semibold text-stone-900">Inference Galaxy</em> and <em className="not-italic font-semibold text-stone-900">ELCII</em> (IES & OSEP funded).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 font-medium">Training:</strong> Ph.D. University of Michigan (Literacy, Language, & Culture) · Postdoc at FCRR & UMN.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 font-medium">2025 Honors:</strong> Joy Zabala Memorial Technology in Action Award · APA Editor's Choice.
                  </div>
                </div>
              </div>

              {/* Interactive CV Access Strip */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/90 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-stone-900 truncate">
                    Curriculum Vitae (October 2026)
                  </div>
                  <div className="text-[11px] text-stone-500 truncate">
                    16 Pages · PDF Document · Complete Record
                  </div>
                </div>
                <button
                  onClick={onOpenCvModal}
                  className="px-3 py-1.5 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 hover:border-stone-400 transition-colors shadow-2xs whitespace-nowrap cursor-pointer shrink-0"
                >
                  View PDF
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Metric Strip (Full-width row placed cleanly below the split) */}
        <div className="mt-14 pt-10 border-t border-stone-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-stone-800 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-stone-500 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
