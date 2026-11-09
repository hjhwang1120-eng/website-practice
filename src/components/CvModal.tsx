import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, Check, Award, BookOpen, GraduationCap, Building2 } from 'lucide-react';
import { personalInfo } from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + personalInfo.cvPath;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-stone-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 id="cv-modal-title" className="text-base font-semibold text-stone-900 truncate">
                Curriculum Vitae — Dr. HyeJin Hwang, Ph.D.
              </h2>
              <p className="text-xs text-stone-500 truncate">
                Updated October 2026 · 16 Pages · University of Minnesota
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              title="Copy link to PDF"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5 text-stone-500" />}
              {copiedLink ? 'Link Copied' : 'Copy PDF Link'}
            </button>

            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Open in New Tab</span>
              <span className="sm:hidden">Open</span>
            </a>

            <a
              href={personalInfo.cvPath}
              download="Hwang_HyeJin_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-6 py-2.5 bg-stone-100/70 border-b border-stone-200 text-xs text-stone-600">
          <div className="flex items-center gap-2 truncate">
            <Building2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">Assistant Professor, UMN (2023-)</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <GraduationCap className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">Ph.D. Univ of Michigan (2018)</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">Joy Zabala & APA Editor's Choice 2025</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <BookOpen className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">$4.5M+ Federal Grant Portfolio</span>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-stone-200/60 relative overflow-hidden">
          <iframe
            src={`${personalInfo.cvPath}#toolbar=1&view=FitH`}
            title="Dr. HyeJin Hwang Curriculum Vitae"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-white flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            Official CV for academic inquiries, promotion reviews, and committee evaluations.
          </p>
          <div className="flex items-center gap-4">
            <span>Direct Email: <a href={`mailto:${personalInfo.email}`} className="text-stone-900 font-medium hover:underline">{personalInfo.email}</a></span>
            <button
              onClick={onClose}
              className="text-stone-700 hover:text-stone-900 font-medium"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
