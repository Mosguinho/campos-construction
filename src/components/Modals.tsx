import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost, ProjectItem } from '../data/siteData';
import { COMPANY_INFO } from '../data/siteData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Custom Decks',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [stateCode, setStateCode] = useState('MA');
  const [service, setService] = useState(defaultService);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#111317] border-t sm:border border-[#C0C7D1]/25 p-5 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C81E2B]/20 text-[#E0313F] ring-1 ring-[#C81E2B]/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-white">
              Estimate Request Received
            </h3>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              Thank you, <span className="text-[#E2E8F0] font-semibold">{name || 'neighbor'}</span>!
              Our team will reach out shortly to schedule your free on-site estimate in{' '}
              <span className="font-semibold text-white">{stateCode}</span>.
            </p>
            <div className="mt-6 rounded-xl bg-white/5 border border-[#C0C7D1]/15 p-4 text-sm text-white/80">
              Need an immediate answer? Call us directly at{' '}
              <a
                href={COMPANY_INFO.phoneHref}
                className="font-semibold text-[#E0313F] hover:underline"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
            <button
              onClick={resetAndClose}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C81E2B] px-7 py-2.5 text-sm font-semibold text-white hover:bg-[#DF2938] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E0313F]">
              Free On-Site Consultation
            </div>
            <h3 className="mt-1 font-serif text-3xl font-semibold text-white">
              Schedule a <span className="text-metallic-silver">Free Estimate</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-white/70">
              Serving homeowners across Massachusetts, New Hampshire &amp; Rhode Island.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Miller"
                    className="w-full rounded-lg bg-[#1B1E24] border border-[#C0C7D1]/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#C81E2B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(857) 555-0192"
                    className="w-full rounded-lg bg-[#1B1E24] border border-[#C0C7D1]/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#C81E2B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg bg-[#1B1E24] border border-[#C0C7D1]/20 px-3.5 py-2.5 text-sm text-white focus:border-[#C81E2B] focus:outline-none"
                  >
                    <option value="Custom Decks">Custom Decks</option>
                    <option value="Interior & Exterior Finish">Interior &amp; Exterior Finish</option>
                    <option value="Doors & Windows">Doors &amp; Windows</option>
                    <option value="Flooring Installation">Flooring Installation</option>
                    <option value="Selective Demolition">Selective Demolition</option>
                    <option value="General Remodeling">General Remodeling</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1">
                    State (Service Area)
                  </label>
                  <select
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value)}
                    className="w-full rounded-lg bg-[#1B1E24] border border-[#C0C7D1]/20 px-3.5 py-2.5 text-sm text-white focus:border-[#C81E2B] focus:outline-none"
                  >
                    <option value="MA">Massachusetts (MA)</option>
                    <option value="NH">New Hampshire (NH)</option>
                    <option value="RI">Rhode Island (RI)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/75 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your deck dimensions, window count, or remodeling timeline..."
                  className="w-full rounded-lg bg-[#1B1E24] border border-[#C0C7D1]/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#C81E2B] focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-xs text-white/75 hover:text-[#E0313F] transition"
                >
                  <Phone className="h-3.5 w-3.5 text-[#E0313F]" />
                  Or call {COMPANY_INFO.phoneDisplay}
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C81E2B] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#DF2938] transition cursor-pointer"
                >
                  Request Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestEstimate: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestEstimate,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#F3F4F6] text-[#14171C] shadow-2xl border-t sm:border border-[#D5DAE2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/85 transition"
          aria-label="Close project preview"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C81E2B]">
            <span>{project.category}</span>
            <span className="text-black/25">•</span>
            <span className="inline-flex items-center gap-1 text-[#4B5563]">
              <MapPin className="h-3.5 w-3.5 text-[#C81E2B]" />
              {project.location}
            </span>
          </div>

          <h3 className="mt-2 font-serif text-3xl font-semibold text-[#111317]">
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm text-[#4B5563] leading-relaxed">
            {project.description}
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-[#1F2937]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C81E2B] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#D5DAE2] pt-5">
            <span className="text-xs font-medium text-[#6B7280]">{project.specs}</span>
            <button
              onClick={() => {
                onClose();
                onRequestEstimate(project.category);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#111317] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#1F242D] transition cursor-pointer"
            >
              Get a Similar Estimate
              <ArrowRight className="h-3.5 w-3.5 text-[#E0313F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onRequestEstimate: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onRequestEstimate,
}) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#F3F4F6] text-[#14171C] shadow-2xl border-t sm:border border-[#D5DAE2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/85 transition"
          aria-label="Close article"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-56 sm:h-68 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#C81E2B]">
            <span>{post.category}</span>
            <span className="text-black/25">•</span>
            <span className="inline-flex items-center gap-1 text-[#6B7280]">
              <Calendar className="h-3.5 w-3.5 text-[#C81E2B]" />
              {post.month} {post.day} · {post.readTime}
            </span>
          </div>

          <h3 className="mt-2 font-serif text-3xl font-semibold text-[#111317] leading-tight">
            {post.title}
          </h3>

          <div className="mt-4 space-y-3 text-sm text-[#374151] leading-relaxed">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#D5DAE2] pt-5">
            <span className="text-xs text-[#6B7280]">W Campos Construction · MA · NH · RI</span>
            <button
              onClick={() => {
                onClose();
                onRequestEstimate();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#C81E2B] px-5 py-2 text-xs font-semibold text-white hover:bg-[#DF2938] transition cursor-pointer"
            >
              Schedule Free Estimate
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
