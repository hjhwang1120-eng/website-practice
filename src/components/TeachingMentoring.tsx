import React from 'react';
import { teachingCourses, advisingAndMentoring, editorialAndService } from '../data/cvData';
import { GraduationCap, Users, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const TeachingMentoring: React.FC = () => {
  return (
    <section id="teaching" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Pedagogy, Advising & Scholarly Service
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Teaching & Mentoring Future Educational Scientists
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Cultivating rigorous empirical habits of mind through graduate seminars, preservice teacher preparation, and active lab mentorship.
          </p>
        </div>

        {/* Courses Taught Grid */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-stone-700" /> University of Minnesota Courses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachingCourses.map((course, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-stone-200 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                      {course.code}
                    </span>
                    <span className="font-mono text-[11px] text-stone-500">
                      {course.schedule}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 font-serif mb-1 leading-snug">
                    {course.title}
                  </h4>
                  <div className="text-xs font-semibold text-amber-800 mb-3">
                    {course.level}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="text-[11px] text-stone-500 pt-3 border-t border-stone-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-400" />
                  <span>{course.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Advising & Editorial Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Advising Directory */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-xl border border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-5 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-800" /> Lab Advisees & Postdoctoral Fellows
            </h3>

            <div className="space-y-6 text-xs text-stone-700">
              
              {/* Postdocs */}
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-2.5 pb-1 border-b border-stone-100">
                  Postdoctoral Scholars
                </h4>
                <div className="space-y-2">
                  {advisingAndMentoring.postdocs.map((postdoc, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-2 rounded bg-stone-50">
                      <span className="font-semibold text-stone-900">{postdoc.name}</span>
                      <span className="text-stone-500 text-[11px]">{postdoc.focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graduate Advisees */}
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-2.5 pb-1 border-b border-stone-100">
                  Graduate Advisees (Doctoral & Master's)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {advisingAndMentoring.doctoralAdvisees.map((adv, i) => (
                    <div key={i} className="p-2 rounded bg-stone-50">
                      <span className="font-semibold text-stone-900 block">{adv.name}</span>
                      <span className="text-stone-500 text-[11px]">{adv.focus} (Ph.D.)</span>
                    </div>
                  ))}
                  {advisingAndMentoring.mastersAdvisees.map((adv, i) => (
                    <div key={i} className="p-2 rounded bg-stone-50">
                      <span className="font-semibold text-stone-900 block">{adv.name}</span>
                      <span className="text-stone-500 text-[11px]">{adv.focus} (M.A.)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Alumni Placements */}
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-2.5 pb-1 border-b border-stone-100">
                  Mentee & Alumni Placements
                </h4>
                <div className="space-y-1.5">
                  {advisingAndMentoring.alumniAndMentees.map((alum, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[11px]">
                      <span className="font-medium text-stone-900">{alum.name}</span>
                      <span className="text-stone-500">{alum.placement}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Boards & Professional Service */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-stone-700" /> Editorial Boards & Professional Service
            </h3>

            <div className="space-y-5 text-xs text-stone-700">
              {editorialAndService.map((service, idx) => (
                <div key={idx} className="pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">
                    {service.role}
                  </h4>
                  <ul className="space-y-1 text-stone-600">
                    {(service.journals || service.organizations || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-stone-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
