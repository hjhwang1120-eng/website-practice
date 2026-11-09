import React, { useState } from 'react';
import { researchProjects, ResearchProject } from '../data/cvData';
import { DollarSign, Layers, ArrowUpRight, CheckCircle, Clock, Sparkles, X, BookOpen } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredProjects = researchProjects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  return (
    <section id="research" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
              Sponsored Research & Grants Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Evidence-Based Interventions & Learning Technologies
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Leading and co-directing federally and institutionally funded projects exceeding $4.5 million in total support, dedicated to transforming early reading outcomes.
            </p>
          </div>

          {/* Filter Segmented Control (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Grants ({researchProjects.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filter === 'active'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Active Grants
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filter === 'completed'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl p-6 border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                    {project.acronym && (
                      <span className="font-mono text-stone-900 font-bold bg-stone-100 px-2 py-0.5 rounded text-xs">
                        {project.acronym}
                      </span>
                    )}
                    <span>{project.period}</span>
                  </div>

                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${
                    project.status === 'active' ? 'text-amber-800' : 'text-stone-500'
                  }`}>
                    {project.status === 'active' ? 'Active Grant' : 'Completed'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-2 leading-snug font-serif">
                  {project.title}
                </h3>

                {/* Role & Funder */}
                <div className="text-xs text-stone-700 mb-3 space-y-0.5">
                  <div>
                    <span className="font-semibold text-stone-900">Role:</span> {project.role}
                  </div>
                  <div className="text-stone-600 truncate">
                    <span className="font-semibold text-stone-900">Funder:</span> {project.funder}
                  </div>
                </div>

                {/* Funding Badge if present */}
                {project.amount && (
                  <div className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 mb-3">
                    <DollarSign className="w-3 h-3" />
                    <span>{project.amount}</span>
                  </div>
                )}

                {/* Synopsis */}
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-900">
                <span>View Full Details & Methods</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-stone-200 overflow-y-auto max-h-[90vh]">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
                  {selectedProject.acronym && (
                    <span className="font-mono text-stone-900 font-bold bg-stone-100 px-2 py-0.5 rounded">
                      {selectedProject.acronym}
                    </span>
                  )}
                  <span>{selectedProject.period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{selectedProject.status}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 pr-8">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 mb-6">
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">Investigator Role</span>
                  <span>{selectedProject.role}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">Funding Agency</span>
                  <span>{selectedProject.funder}</span>
                </div>
                {selectedProject.amount && (
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">Award Amount</span>
                    <span className="font-mono font-bold text-emerald-800">{selectedProject.amount}</span>
                  </div>
                )}
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">Project Status</span>
                  <span className="capitalize">{selectedProject.status}</span>
                </div>
              </div>

              <div className="space-y-5 text-sm text-stone-700">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Project Overview & Theoretical Aims
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Methodologies & Experimental Paradigms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.methodology.map((m, i) => (
                      <span key={i} className="text-xs font-medium text-stone-800 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Classroom & Scholarly Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-amber-50/70 p-3 rounded border border-amber-200/80">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-200 flex items-center justify-between">
                <a
                  href="#publications"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-900 underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Browse publications related to this project</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
