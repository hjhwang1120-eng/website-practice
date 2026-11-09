import React, { useState } from 'react';
import { Award, GraduationCap, Briefcase, Calendar, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, academicPositions, educationHistory, honorsAndAwards } from '../data/cvData';

interface BiographyProps {
  onOpenCvModal: () => void;
}

export const Biography: React.FC<BiographyProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'appointments' | 'education' | 'awards'>('narrative');

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Academic Background & Biography
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Advancing the Science of Reading Through Cognitive & Disciplinary Inquiry
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            From cognitive architecture to classroom curricula: examining how knowledge, language, and digital technologies unlock reading comprehension for every child.
          </p>
        </div>

        {/* Tab Controls (Functional buttons with active states) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveTab('narrative')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'narrative'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Biography & Research Program
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Academic Appointments
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'education'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Education & Training
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Honors & Fellowships ({honorsAndAwards.length})
          </button>
        </div>

        {/* Tab 1: Narrative & Research Program */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>
                Dr. HyeJin Hwang is an Assistant Professor in the Department of Educational Psychology at the University of Minnesota. Prior to joining the faculty, she was awarded the competitive <em>President's Postdoctoral Fellowship</em> at the University of Minnesota and completed postdoctoral training at the <em>Florida Center for Reading Research</em> (FSU). She earned her Ph.D. in Educational Studies with a concentration in Literacy, Language, and Culture from the University of Michigan, Ann Arbor, working under the mentorship of Nell K. Duke, Gina N. Cervetti, Kai S. Cortina, and Nick Ellis.
              </p>
              <p>
                Her research is situated at the nexus of cognitive psychology, educational linguistics, and instructional design. A central thrust of Dr. Hwang's scholarship is investigating the <strong>"two-way street"</strong> between domain knowledge and reading comprehension: demonstrating how background knowledge in science and social studies is not merely an incidental byproduct of reading, but a foundational cognitive engine that drives comprehension growth from kindergarten through elementary school.
              </p>
              <p>
                As Co-Principal Investigator on a $3.8M grant from the U.S. Department of Education's Institute of Education Sciences (IES) and Co-Investigator on a $700K grant from the Office of Special Education Programs (OSEP), Dr. Hwang actively designs, evaluates, and scales digital learning technologies. These interventions—most prominently <em>Inference Galaxy</em> and <em>ELCII</em>—leverage animated video narratives to scaffold higher-order inferential thinking in children experiencing early reading difficulties, effectively bypassing decoding hurdles to nurture deep cognitive processing.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Read Detailed CV (16 pages)</span>
                </button>
              </div>
            </div>

            {/* Research Pillars Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-200">
                <h3 className="text-base font-semibold text-stone-900 mb-4 font-serif">
                  Core Theoretical Pillars
                </h3>

                <div className="space-y-4 text-xs text-stone-600">
                  <div className="border-b border-stone-200/70 pb-3">
                    <span className="font-semibold text-stone-900 block text-sm mb-1">
                      1. The Bidirectional Knowledge Hypothesis
                    </span>
                    <p className="leading-relaxed">
                      Rigorous longitudinal and meta-analytic evidence proving that content-area instruction (science & social studies) accelerates reading ability, which simultaneously expands capacity for acquiring conceptual knowledge.
                    </p>
                  </div>

                  <div className="border-b border-stone-200/70 pb-3">
                    <span className="font-semibold text-stone-900 block text-sm mb-1">
                      2. Technology-Scaffolded Inferencing
                    </span>
                    <p className="leading-relaxed">
                      Deploying video-based computerized platforms (Inference Galaxy) to decouple inference-making from early decoding hurdles, empowering struggling readers and multilingual learners to generate causal and predictive inferences.
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block text-sm mb-1">
                      3. Standards of Coherence & Knowledge Revision
                    </span>
                    <p className="leading-relaxed">
                      Developing novel psychometric instruments (ROSCO) and studying refutational text structures to understand how young minds monitor text coherence and actively overwrite naive scientific misconceptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Academic Appointments */}
        {activeTab === 'appointments' && (
          <div className="max-w-4xl space-y-6">
            {academicPositions.map((pos, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-stone-900 font-serif">
                    {pos.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    {pos.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-stone-800 mb-1">
                  {pos.institution}
                </div>
                <div className="text-xs text-stone-500 mb-3">
                  {pos.department} · {pos.location}
                </div>
                {pos.highlight && (
                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                    {pos.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-50 rounded-xl border border-stone-200"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-stone-900 font-serif">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-stone-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                    {edu.year}
                  </span>
                </div>
                <div className="text-sm font-medium text-stone-800 mb-1">
                  {edu.institution}
                </div>
                <div className="text-xs text-stone-500 mb-3">
                  {edu.school} · Concentration: {edu.concentration}
                </div>
                {edu.committee && (
                  <div className="text-xs text-stone-600 mt-2 bg-white p-3 rounded border border-stone-200/80">
                    <span className="font-semibold text-stone-800">Dissertation Committee:</span> {edu.committee}
                    {edu.dissertation && (
                      <div className="mt-1">
                        <span className="font-semibold text-stone-800">Title:</span> "{edu.dissertation}"
                      </div>
                    )}
                  </div>
                )}
                {edu.honors && (
                  <div className="text-xs text-amber-800 mt-2 font-medium">
                    {edu.honors}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Honors & Awards */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {honorsAndAwards.map((award, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-stone-500 tabular-nums">
                      {award.year}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800">
                      {award.category.replace('_', ' ')}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 mb-1 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-stone-600 mb-2 font-medium">
                    {award.organization}
                  </p>
                </div>
                {award.description && (
                  <p className="text-xs text-stone-500 leading-relaxed border-t border-stone-200/60 pt-2.5 mt-2">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
