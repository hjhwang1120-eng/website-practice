import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { ExternalLink, Copy, Check, BookOpen, Share2, ShieldCheck, Sparkles, Building2, UserCheck } from 'lucide-react';

export const ProfilesIntegration: React.FC = () => {
  const [copiedOrcid, setCopiedOrcid] = useState(false);
  const [copiedScholarLink, setCopiedScholarLink] = useState(false);

  const handleCopyOrcid = () => {
    navigator.clipboard.writeText(personalInfo.orcidId);
    setCopiedOrcid(true);
    setTimeout(() => setCopiedOrcid(false), 2000);
  };

  const handleCopyScholar = () => {
    navigator.clipboard.writeText(personalInfo.googleScholarUrl);
    setCopiedScholarLink(true);
    setTimeout(() => setCopiedScholarLink(false), 2000);
  };

  const coAuthors = [
    { name: "Dr. Panayiota Kendeou", role: "University of Minnesota" },
    { name: "Dr. Kristen L. McMaster", role: "University of Minnesota" },
    { name: "Dr. Sonia Q. Cabell", role: "Florida State University / FCRR" },
    { name: "Dr. Nell K. Duke", role: "University of Michigan / Stand for Children" },
    { name: "Dr. Gina N. Cervetti", role: "University of Michigan" },
    { name: "Dr. Young-Suk Kim", role: "University of California, Irvine" }
  ];

  return (
    <section id="profiles" className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Academic Identifier & Citation Hub
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Integrated Google Scholar & ORCID Profiles
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Directly connect with Dr. Hwang's persistent scholarly records, verified bibliometric databases, and global research identity.
          </p>
        </div>

        {/* 2-Column Main Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Google Scholar Card */}
          <div className="bg-stone-50 rounded-2xl p-7 sm:p-8 border border-stone-200 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                    G
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-serif">
                      Google Scholar Profile
                    </h3>
                    <p className="text-xs text-stone-500">
                      Verified email at <span className="font-mono text-stone-700">umn.edu</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">Verified Author</span>
                </div>
              </div>

              {/* Research Subject Tags */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-stone-700 mb-2">
                  Indexed Subject Areas:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Reading Comprehension", "Early Literacy", "Content-Area Knowledge", "Inference Making", "Educational Technology", "Multilingual Learners"].map((tag, i) => (
                    <span key={i} className="bg-white border border-stone-200 px-2.5 py-1 rounded text-stone-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frequent Collaborators on Scholar */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-stone-700 mb-2">
                  Frequent Co-Authors & Lab Networks:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                  {coAuthors.map((ca, i) => (
                    <div key={i} className="p-2 bg-white rounded border border-stone-200/80">
                      <span className="font-medium text-stone-900 block">{ca.name}</span>
                      <span className="text-[11px] text-stone-400">{ca.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scholar Actions */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopyScholar}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              >
                {copiedScholarLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
                <span>{copiedScholarLink ? 'Copied Link' : 'Copy Scholar URL'}</span>
              </button>

              <a
                href={personalInfo.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-2xs"
              >
                <span>View Google Scholar Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: ORCID Profile Card */}
          <div className="bg-stone-50 rounded-2xl p-7 sm:p-8 border border-stone-200 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#A6CE39] text-white flex items-center justify-center font-bold text-xl shadow-xs">
                    iD
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-serif">
                      ORCID Digital Identifier
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">
                      {personalInfo.orcidId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#5f7918] bg-[#f4fae3] px-2.5 py-1 rounded-md border border-[#cde489]">
                  <UserCheck className="w-3.5 h-3.5 text-[#7ea31e]" />
                  <span className="font-semibold">Authenticated Record</span>
                </div>
              </div>

              {/* Verified Registry Details */}
              <div className="space-y-4 mb-6 text-xs text-stone-700">
                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">Primary Employment Affiliation:</span>
                  <span className="text-stone-700">University of Minnesota Twin Cities</span>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Department of Educational Psychology (Minneapolis, Minnesota, US)
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">Persistent URI:</span>
                  <a
                    href={personalInfo.orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-stone-800 hover:text-amber-900 hover:underline"
                  >
                    https://orcid.org/{personalInfo.orcidId}
                  </a>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-bold text-stone-900 block mb-0.5">Crossref & Publisher Automated Sync:</span>
                  <p className="text-stone-600 leading-relaxed text-[11px]">
                    All peer-reviewed articles, books, and book chapters automatically synchronized with DOI metadata across APA, Springer, Taylor & Francis, and Wiley.
                  </p>
                </div>
              </div>
            </div>

            {/* ORCID Actions */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopyOrcid}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              >
                {copiedOrcid ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
                <span>{copiedOrcid ? 'Copied iD' : 'Copy ORCID iD'}</span>
              </button>

              <a
                href={personalInfo.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-[#A6CE39] hover:bg-[#97bd30] rounded-lg transition-colors shadow-2xs"
              >
                <span>View Full Record on ORCID.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Academic Profile Sync Utility Bar */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
            <span>
              Also listed in: <strong>University of Minnesota CEHD Faculty Directory</strong> & <strong>Florida Center for Reading Research Alumni</strong>
            </span>
          </div>

          <a
            href={personalInfo.umnProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            UMN Faculty Profile <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
