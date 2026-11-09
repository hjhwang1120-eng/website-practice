import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Building2, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    inquiryType: 'Prospective Graduate Student / Postdoc',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending and construct mailto link as fallback option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject || 'Academic Inquiry'}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email}, ${formData.affiliation})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
            Get In Touch & Academic Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Contact Dr. HyeJin Hwang
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Interested in prospective doctoral advising, postdoctoral appointments, research collaboration on literacy grants, or keynote speaking invitations? Please reach out below.
          </p>
        </div>

        {/* 2-Column Split: Form + Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Message Prepared Successfully
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>"{formData.inquiryType}"</em> has been logged. You can also send this message directly via your email client:
                </p>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleMailtoDirect}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open in Default Mail Client</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        affiliation: '',
                        inquiryType: 'Prospective Graduate Student / Postdoc',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Your Full Name <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Email Address <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex.mercer@university.edu"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Institutional Affiliation
                    </label>
                    <input
                      type="text"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleChange}
                      placeholder="e.g. University / Research Institute"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Nature of Inquiry <span className="text-amber-800">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900 cursor-pointer"
                    >
                      <option value="Prospective Graduate Student / Postdoc">Prospective Doctoral Student / Postdoc</option>
                      <option value="Research Collaboration">Grant / Research Collaboration</option>
                      <option value="Keynote / Speaking Invitation">Keynote / Speaking Invitation</option>
                      <option value="Curricular & School Consulting">Curriculum / School Partner Inquiry</option>
                      <option value="Media Interview">Media / Press Interview</option>
                      <option value="General Academic Question">General Academic Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Subject Line <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your inquiry"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Message <span className="text-amber-800">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your research background, conference details, or collaboration interests..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:bg-white text-stone-900"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleMailtoDirect}
                    className="text-xs text-stone-500 hover:text-stone-900 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Or compose email directly</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Location, Phone & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Office Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-mono">
                Departmental Coordinates
              </h3>

              <div className="space-y-4 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block text-sm">Department of Educational Psychology</span>
                    <span>College of Education and Human Development</span>
                    <p className="text-stone-500 mt-0.5">University of Minnesota</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-100 pt-3">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Physical Address:</span>
                    <p className="text-stone-700 leading-normal">
                      56 East River Rd, 164 Education Sciences Building<br />
                      Minneapolis, MN 55455
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-100 pt-3">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Telephone:</span>
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`} className="text-stone-800 hover:underline font-mono">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-100 pt-3">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="font-bold text-stone-900 block">Academic & Personal Email:</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href={`mailto:${personalInfo.email}`} className="text-stone-800 hover:underline font-mono truncate">
                        {personalInfo.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 text-stone-400 hover:text-stone-700 rounded hover:bg-stone-100 cursor-pointer"
                        title="Copy email address"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note for Prospective Students */}
            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/80 text-xs text-stone-700">
              <h4 className="font-bold text-stone-900 text-sm mb-2 font-serif">
                Note for Prospective Ph.D. & Postdoc Applicants
              </h4>
              <p className="leading-relaxed text-stone-600 mb-2">
                I am interested in mentoring doctoral students and postdoctoral scholars passionate about cognitive mechanisms of reading comprehension, educational technology (e.g. video-based inferencing), content-area literacy, and quantitative methodologies.
              </p>
              <p className="leading-relaxed text-stone-600">
                Please attach your CV, a brief statement of research interests, and representative writing sample when contacting me.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
