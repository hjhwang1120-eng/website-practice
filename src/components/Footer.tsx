import React from 'react';
import { personalInfo } from '../data/cvData';
import { ArrowUp, FileText, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-stone-800 text-xs">
          
          {/* Col 1: Identity & Affiliation */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">
              Dr. HyeJin Hwang, Ph.D.
            </h3>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Assistant Professor of Educational Psychology at the University of Minnesota. Advancing the science of reading comprehension, domain knowledge, and instructional technologies.
            </p>
            <p className="text-stone-500 font-mono text-[11px]">
              56 East River Rd, 164 Education Sciences Building · Minneapolis, MN 55455
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-stone-400">
              <a href="#about" className="hover:text-white transition-colors">About & Bio</a>
              <a href="#research" className="hover:text-white transition-colors">Research Grants</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills & Methods</a>
              <a href="#publications" className="hover:text-white transition-colors">Publications</a>
              <a href="#teaching" className="hover:text-white transition-colors">Teaching & Mentoring</a>
              <a href="#profiles" className="hover:text-white transition-colors">Scholar & ORCID</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact Form</a>
              <button
                onClick={onOpenCvModal}
                className="text-left text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                Curriculum Vitae
              </button>
            </div>
          </div>

          {/* Col 3: Academic Repositories */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Persistent Records
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a
                  href={personalInfo.googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Google Scholar Profile <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  ORCID: {personalInfo.orcidId} <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.umnProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  UMN CEHD Faculty Directory <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Dr. HyeJin Hwang. Department of Educational Psychology, University of Minnesota.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
