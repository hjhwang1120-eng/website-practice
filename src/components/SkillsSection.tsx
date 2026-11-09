import React, { useState } from 'react';
import { skillsAndMethods } from '../data/cvData';
import { Brain, Cpu, BarChart3, BookOpenCheck, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-5 h-5 text-amber-800" />;
      case 1:
        return <BarChart3 className="w-5 h-5 text-stone-800" />;
      case 2:
        return <Cpu className="w-5 h-5 text-amber-900" />;
      default:
        return <BookOpenCheck className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Methodological & Conceptual Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Scientific Methodologies & Research Competencies
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Integrating advanced quantitative modeling, experimental psycholinguistics, and educational software engineering to dissect and enhance cognitive reading processes.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {skillsAndMethods.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3.5 ${
                activeCategory === idx
                  ? 'bg-stone-50 border-stone-400 shadow-xs ring-1 ring-stone-400'
                  : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="p-2 rounded-lg bg-stone-100 shrink-0">
                {getCategoryIcon(idx)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-stone-500">
                  {cat.items.length} Core Competencies
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Competencies Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsAndMethods[activeCategory].items.map((skill, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-stone-400 tabular-nums">
                    0{i + 1}.
                  </span>
                  <h4 className="text-sm font-bold text-stone-900">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {skill.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-medium text-stone-500">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Demonstrated in peer-reviewed scholarship</span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodological Context Callout */}
        <div className="mt-10 p-6 bg-stone-100/70 rounded-xl border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-stone-900 block sm:inline mr-2">
              Statistical Software & Psychometric Tooling:
            </span>
            R (lavaan, metafor, lme4), Mplus (SEM, LPA, Latent Growth Modeling), Python (Drift-Diffusion Modeling), SPSS, E-Prime & Eye-Tracking Paradigms.
          </div>
          <a
            href="#publications"
            className="text-stone-900 font-semibold hover:underline shrink-0"
          >
            See empirical applications &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
