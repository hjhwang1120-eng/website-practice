import React from 'react';
import { podcastEpisodes } from '../data/cvData';
import { Headphones, ExternalLink, Mic, Radio, Newspaper, Quote, BookOpen } from 'lucide-react';

export const MediaAndOutreach: React.FC = () => {
  const mediaArticles = [
    {
      outlet: "Forbes",
      author: "Natalie Wexler",
      title: "New Data Shows Building Knowledge Can Boost Reading Comprehension",
      date: "September 2021",
      url: "https://www.forbes.com/sites/nataliewexler/2021/09/08/new-data-shows-building-knowledge-can-boost-reading-comprehension/?sh=fc6db487dd9c",
      quote: "Synthesizing decades of literacy studies, Dr. Hwang and colleagues demonstrated that integrating content knowledge in science and social studies accelerates reading outcomes."
    },
    {
      outlet: "Education Week",
      author: "Sarah Schwartz",
      title: "Reading Comprehension Hinges on Building Knowledge: New Curricula Aim to Help",
      date: "January 2024",
      url: "https://www.edweek.org/teaching-learning/reading-comprehension-hinges-on-building-knowledge-new-curricula-aim-to-help/2024/01",
      quote: "Highlights empirical findings from Hwang, Cabell, and Joyner on how content-rich ELA programs foster transferable vocabulary and listening comprehension."
    },
    {
      outlet: "The Informed SLP",
      author: "Clinical Review Panel",
      title: "Video-Based Inferencing Instruction for Young Children With Reading Difficulties",
      date: "2024 Review",
      url: "https://www.theinformedslp.com/review/Video-based-inferencing-instruction",
      quote: "Featured Dr. Hwang's Joy Zabala Award-winning study on leveraging technology to decouple higher-order inference skills from word-decoding roadblocks."
    },
    {
      outlet: "ASCD Educational Leadership",
      author: "Editorial Feature",
      title: "Developing Knowledgeable Readers",
      date: "Literacy Focus",
      url: "https://www.ascd.org/el/articles/developing-knowledgeable-readers",
      quote: "Translating cognitive research on schema building and conceptual coherence into everyday elementary classroom routines."
    }
  ];

  const invitedKeynotes = [
    {
      event: "Cox Campus & ReadWorks Invited Panel",
      year: "October 2026",
      title: "Knowledge Building for Early Learning: Conversation with Leading Researchers",
      host: "ReadWorks / Rollins Center for Language & Literacy",
      url: "https://www.crowdcast.io/c/knowledge-building"
    },
    {
      event: "Amplify National Symposium",
      year: "September 2025",
      title: "Comprehension and Knowledge Building: A Two-Way Street",
      host: "Amplify Literacy Research Series"
    },
    {
      event: "University of Wisconsin Stevens Point Keynote",
      year: "June 2023",
      title: "Feeding Two Birds with One Hand: Integrating Literacy and Content-Area Instruction",
      host: "Annual Summer Literacy Keynote Address"
    },
    {
      event: "International Literacy Association (ILA) Intensive",
      year: "February 2024",
      title: "Supporting Inference-Making in Content-Rich Literacy Instruction",
      host: "ILA Digital Intensive Series",
      url: "https://ila.digitellinc.com/p/s/literacy-and-content-instruction-that-supports-language-development-2620"
    }
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Public Scholarship & Translation
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Podcasts, Media Coverage & Invited Keynotes
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Bridging cognitive research and public education through widely heard podcast discussions, national press commentary, and professional practitioner keynotes.
          </p>
        </div>

        {/* Featured Podcast Cards */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
            <Radio className="w-4 h-4 text-amber-800" /> Featured Podcast Episodes
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {podcastEpisodes.map((pod, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      {pod.season}
                    </span>
                    {pod.downloads && (
                      <span className="text-xs font-semibold text-emerald-800 font-mono">
                        {pod.downloads}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-stone-900 font-serif mb-1">
                    "{pod.title}"
                  </h4>
                  <div className="text-xs font-medium text-stone-600 mb-3">
                    {pod.show} · Hosted by {pod.host}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {pod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <a
                    href={pod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-2xs"
                  >
                    <Headphones className="w-3.5 h-3.5 text-amber-400" />
                    <span>Listen on Apple Podcasts</span>
                    <ExternalLink className="w-3 h-3 text-stone-400 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Press Coverage & Invited Talks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Press Coverage */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-stone-700" /> Press Coverage & Reviews
            </h3>

            <div className="space-y-4">
              {mediaArticles.map((art, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-1">
                    <span className="font-bold text-stone-900">{art.outlet}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-2 leading-snug">
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-900 hover:underline inline-flex items-center gap-1"
                    >
                      {art.title} <ExternalLink className="w-3 h-3 text-stone-400 shrink-0" />
                    </a>
                  </h4>
                  <p className="text-xs text-stone-600 italic border-l-2 border-stone-300 pl-2.5 my-1">
                    "{art.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Keynote & Invited Presentations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
              <Mic className="w-4 h-4 text-stone-700" /> Invited Keynotes & Masterclasses
            </h3>

            <div className="space-y-4">
              {invitedKeynotes.map((talk, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-1">
                    <span className="font-semibold text-stone-800">{talk.event}</span>
                    <span className="font-mono">{talk.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1 leading-snug">
                    {talk.title}
                  </h4>
                  <div className="text-xs text-stone-500">
                    Host: {talk.host}
                  </div>
                  {talk.url && (
                    <div className="mt-2">
                      <a
                        href={talk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
                      >
                        Session Archive / Registration <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
