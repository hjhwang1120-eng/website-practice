import React, { useState, useMemo } from 'react';
import { publications, Publication } from '../data/cvData';
import { Search, ExternalLink, Copy, Check, BookOpen, Award, Newspaper, FileCode2, ChevronDown, ChevronUp, Share2 } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyCitation = (pub: Publication) => {
    const citation = `${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.journal}${pub.volume ? `, ${pub.volume}` : ''}${pub.pages ? `, ${pub.pages}` : ''}.${pub.doi ? ` https://doi.org/${pub.doi}` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyBibtex = (pub: Publication) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibId(pub.id);
    setTimeout(() => setCopiedBibId(null), 2000);
  };

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      // Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'journal' && pub.type !== 'journal') return false;
        if (selectedType === 'chapter' && pub.type !== 'book_chapter') return false;
        if (selectedType === 'in_press' && pub.type !== 'in_press' && pub.type !== 'under_review') return false;
      }

      // Topic filter
      if (selectedTopic !== 'all' && pub.topic !== selectedTopic) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(query);
        const matchesAuthor = pub.authors.some(a => a.toLowerCase().includes(query));
        const matchesJournal = pub.journal.toLowerCase().includes(query);
        const matchesAbstract = pub.abstract ? pub.abstract.toLowerCase().includes(query) : false;
        const matchesYear = pub.year.toString().toLowerCase().includes(query);
        return matchesTitle || matchesAuthor || matchesJournal || matchesAbstract || matchesYear;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedTopic]);

  return (
    <section id="publications" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
              Scholarly Output & Peer-Reviewed Research
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Selected Publications & Book Chapters
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Peer-reviewed articles in developmental and educational psychology journals, cited by national policy frameworks and covered by international education media.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono self-start md:self-end shrink-0">
            Showing <strong className="text-stone-900 font-bold">{filteredPublications.length}</strong> of {publications.length} works
          </div>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 mb-8 space-y-4 shadow-2xs">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, title, co-author (e.g. Cabell, Kendeou, McMaster, Duke), or journal..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900 placeholder:text-stone-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Row: Type and Topic */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
            
            {/* Type buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-stone-700 mr-1 hidden sm:inline">Type:</span>
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedType === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setSelectedType('journal')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedType === 'journal'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                Journal Articles
              </button>
              <button
                onClick={() => setSelectedType('chapter')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedType === 'chapter'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                Book Chapters
              </button>
              <button
                onClick={() => setSelectedType('in_press')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedType === 'in_press'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                }`}
              >
                In Press / Recent
              </button>
            </div>

            {/* Topic Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-700 hidden sm:inline">Topic:</span>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="text-xs bg-stone-100 border border-stone-200 text-stone-800 rounded-md px-2.5 py-1 focus:outline-hidden focus:ring-1 focus:ring-stone-400 cursor-pointer"
              >
                <option value="all">All Research Themes</option>
                <option value="knowledge_comprehension">Knowledge & Reading Comprehension</option>
                <option value="edtech_inferencing">Educational Tech & Inferencing</option>
                <option value="multilingual_ell">Multilingual & English Learners</option>
                <option value="cognition_methods">Cognitive Models & Methodologies</option>
              </select>
            </div>

          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
              <BookOpen className="w-8 h-8 text-stone-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-stone-700">No publications matched your filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedTopic('all');
                }}
                className="mt-3 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="p-5 sm:p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 transition-colors shadow-2xs"
              >
                {/* Top Metadata Line (Unboxed text with middots) */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-stone-800">{pub.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{pub.type.replace('_', ' ')}</span>
                    {pub.featured && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-800 font-semibold">Featured Work</span>
                      </>
                    )}
                  </div>

                  {pub.doi && (
                    <a
                      href={pub.doiUrl || `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-stone-500 hover:text-stone-900 hover:underline inline-flex items-center gap-1"
                    >
                      doi:{pub.doi} <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif mb-2 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-stone-700 mb-2 leading-normal">
                  {pub.authors.map((author, idx) => {
                    const isHwang = author.includes('Hwang');
                    return (
                      <React.Fragment key={idx}>
                        <span className={isHwang ? 'font-bold text-stone-950 underline decoration-amber-600 decoration-1 underline-offset-2' : ''}>
                          {author}
                        </span>
                        {idx < pub.authors.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    );
                  })}
                </p>

                {/* Journal & Citation Details */}
                <p className="text-xs font-medium text-stone-600 mb-3 italic">
                  {pub.journal}
                  {pub.volume && `, ${pub.volume}`}
                  {pub.pages && `, ${pub.pages}`}
                </p>

                {/* Honors / Awards Callout if any */}
                {pub.awards && pub.awards.length > 0 && (
                  <div className="mb-3 space-y-1">
                    {pub.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50/80 p-2 rounded border border-amber-200/70">
                        <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Media Coverage / Press Spotlights */}
                {pub.mediaCoverage && pub.mediaCoverage.length > 0 && (
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-stone-700 inline-flex items-center gap-1">
                      <Newspaper className="w-3 h-3 text-stone-400" /> Media:
                    </span>
                    {pub.mediaCoverage.map((media, i) => (
                      <a
                        key={i}
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-700 hover:text-amber-900 hover:underline font-medium inline-flex items-center gap-0.5 bg-stone-100 px-2 py-0.5 rounded text-[11px]"
                      >
                        {media.outlet} <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Policy Citations if any */}
                {pub.policyCitations && pub.policyCitations.length > 0 && (
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-stone-600">
                    <span className="font-semibold text-stone-700">Policy Citation:</span>
                    {pub.policyCitations.map((pol, i) => (
                      <a
                        key={i}
                        href={pol.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-700 hover:text-stone-900 hover:underline text-[11px] bg-stone-100 px-2 py-0.5 rounded"
                      >
                        {pol.organization} &rarr;
                      </a>
                    ))}
                  </div>
                )}

                {/* Collapsible Abstract */}
                {pub.abstract && (
                  <div className="mb-3">
                    {expandedAbstracts[pub.id] ? (
                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed mb-2">
                        <strong className="text-stone-800 font-semibold block mb-1">Abstract:</strong>
                        {pub.abstract}
                      </div>
                    ) : null}
                  </div>
                )}

                {/* Action Buttons Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 text-xs">
                  <div className="flex items-center gap-2">
                    {pub.abstract && (
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
                      >
                        {expandedAbstracts[pub.id] ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" /> Hide Abstract
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" /> Read Abstract
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyCitation(pub)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded font-medium transition-colors cursor-pointer"
                      title="Copy APA formatted citation"
                    >
                      {copiedId === pub.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-stone-400" />}
                      <span>{copiedId === pub.id ? 'Copied APA' : 'Cite (APA)'}</span>
                    </button>

                    <button
                      onClick={() => copyBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded font-medium transition-colors cursor-pointer"
                      title="Copy BibTeX code"
                    >
                      {copiedBibId === pub.id ? <Check className="w-3 h-3 text-emerald-600" /> : <FileCode2 className="w-3 h-3 text-stone-400" />}
                      <span>{copiedBibId === pub.id ? 'Copied BibTeX' : 'BibTeX'}</span>
                    </button>

                    {pub.doi && (
                      <a
                        href={pub.doiUrl || `https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-stone-900 font-semibold hover:text-amber-900 hover:underline"
                      >
                        <span>Publisher Link</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* View all in Scholar Banner */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-stone-600 text-center sm:text-left">
            Looking for conference proceedings, invited symposia, or working manuscripts?
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#profiles"
              className="text-stone-900 font-bold hover:underline"
            >
              See Google Scholar & ORCID &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
