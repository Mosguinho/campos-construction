import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  ClipboardCheck,
  Award,
  Users,
  ShieldCheck,
  Hammer,
  PaintBucket,
  DoorOpen,
  Layers,
  HardHat,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import type { BlogPost, ProjectItem, ServiceItem } from './data/siteData';
import {
  BLOG_POSTS,
  COMPANY_INFO,
  PROJECTS,
  SERVICES,
} from './data/siteData';
import {
  BlueprintAccent,
  BotanicalAccent,
  BrandLogo,
  CraneWireframe,
  WaveDivider,
} from './components/Decorations';
import { BlogModal, EstimateModal, ProjectModal } from './components/Modals';

const ServiceIcon: React.FC<{ name: ServiceItem['iconName'] }> = ({ name }) => {
  const cls = 'h-7 w-7 text-[#4B5563] group-hover:text-[#C81E2B] transition-colors stroke-[1.4]';
  switch (name) {
    case 'deck':
      return <Hammer className={cls} />;
    case 'finish':
      return <PaintBucket className={cls} />;
    case 'door':
      return <DoorOpen className={cls} />;
    case 'flooring':
      return <Layers className={cls} />;
    case 'demolition':
      return <HardHat className={cls} />;
    case 'remodel':
      return <Wrench className={cls} />;
  }
};

export function App() {
  const [projectPage, setProjectPage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [estimateService, setEstimateService] = useState('Custom Decks');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogOffset, setBlogOffset] = useState(0);

  const totalProjectPages = Math.ceil(PROJECTS.length / 3);
  const visibleProjects = PROJECTS.slice(projectPage * 3, projectPage * 3 + 3);

  const openEstimateWithService = (serviceName = 'Custom Decks') => {
    setEstimateService(serviceName);
    setEstimateOpen(true);
  };

  const handleNextProjects = () => {
    setProjectPage((prev) => (prev + 1) % totalProjectPages);
  };

  const handlePrevProjects = () => {
    setProjectPage((prev) => (prev - 1 + totalProjectPages) % totalProjectPages);
  };

  const orderedPosts = [
    ...BLOG_POSTS.slice(blogOffset),
    ...BLOG_POSTS.slice(0, blogOffset),
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#14171C]">
      {/* ================= HERO & NAVIGATION ================= */}
      <header id="home" className="relative bg-[#111317] text-white overflow-hidden">
        {/* Background architectural image + obsidian gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-deck.jpg"
            alt="W Campos Construction custom multi-level deck at twilight"
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111317] via-[#111317]/88 to-[#111317]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-[#111317]/80" />
        </div>

        {/* Top Navbar */}
        <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 pt-6 pb-4">
          <a href="#home" aria-label="W Campos Construction Home">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#D1D5DB]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C81E2B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openEstimateWithService('Custom Decks')}
              className="rounded-full bg-[#C81E2B] px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-[#C81E2B]/25 ring-1 ring-white/15 hover:bg-[#DF2938] transition cursor-pointer"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-white/85 hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 lg:hidden border-t border-white/10 bg-[#111317]/95 backdrop-blur-md px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-medium text-white/85 hover:text-[#E0313F]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEstimateWithService('Custom Decks');
              }}
              className="mt-2 w-full rounded-full bg-[#C81E2B] py-2.5 text-sm font-semibold text-white"
            >
              Get a Free Estimate
            </button>
          </div>
        )}

        {/* Hero Main Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-8 pb-16 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C0C7D1]/30 bg-[#111317]/70 px-3.5 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-[#E2E8F0] backdrop-blur-sm">
              <MapPin className="h-3 w-3 text-[#E0313F]" />
              {COMPANY_INFO.serviceArea}
            </div>

            <h1 className="font-serif text-[44px] sm:text-6xl md:text-[68px] font-medium leading-[1.03] tracking-tight text-white">
              We Build
              <br />
              Spaces <span className="text-metallic-silver font-semibold">That Last</span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-[#CBD5E1]">
              Custom decks, interior &amp; exterior finishing, doors, windows, flooring, and
              demolition — crafted with precision across Massachusetts, New Hampshire, and Rhode
              Island.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-start rounded-full bg-[#C81E2B] text-white text-sm font-semibold shadow-xl shadow-black/40 ring-1 ring-white/15 hover:bg-[#DF2938] transition"
              >
                <span className="pl-6 pr-4 py-3.5 sm:py-3">View Our Projects</span>
                <span className="flex items-center justify-center border-l border-white/20 px-4 py-3.5 sm:py-3">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#C0C7D1]/30 bg-white/5 px-5 py-3.5 sm:py-3 text-sm font-medium text-[#E2E8F0] hover:border-[#C81E2B] hover:text-white transition backdrop-blur-sm"
              >
                <Phone className="h-3.5 w-3.5 text-[#E0313F]" />
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Organic Wave into Silver Mist */}
        <div className="relative z-10 -mb-px">
          <WaveDivider fill="#F3F4F6" />
        </div>
      </header>

      {/* ================= FEATURED PROJECTS ================= */}
      <section id="projects" className="relative bg-[#F3F4F6] blueprint-bg py-14 sm:py-20 overflow-hidden">
        <BlueprintAccent className="pointer-events-none absolute -left-8 top-6 w-64 opacity-70 hidden md:block" />
        <BlueprintAccent className="pointer-events-none absolute right-0 top-12 w-56 opacity-60 hidden lg:block" />
        <BotanicalAccent className="pointer-events-none absolute -right-2 bottom-4 w-24 sm:w-28" flip />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C81E2B]">
              Our Work
            </span>
            <h2 className="mt-1.5 font-serif text-4xl sm:text-5xl font-medium text-[#111317]">
              Featured Projects
            </h2>
          </div>

          {/* Mobile Horizontal Snap Carousel (all 6 projects) */}
          <div className="mt-8 md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 no-scrollbar pb-2 -mx-5 px-5">
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-[82vw] max-w-[330px] shrink-0 snap-center cursor-pointer overflow-hidden rounded-xl bg-white border border-[#D5DAE2] shadow-sm active:scale-[0.98] transition-transform"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#1A1D23]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6] border border-[#D5DAE2] text-[#C81E2B]">
                      <Building2 className="h-4 w-4 stroke-[1.5]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-base font-semibold text-[#111317]">
                        {project.title}
                      </h3>
                      <p className="truncate text-xs text-[#6B7280]">
                        {project.category} · {project.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-2 text-center text-[11px] font-medium text-[#6B7280]">
              Swipe to explore all {PROJECTS.length} projects →
            </p>
          </div>

          {/* Desktop 3-Card Carousel */}
          <div className="relative mt-10 sm:mt-12 hidden md:flex items-center">
            <button
              onClick={handlePrevProjects}
              aria-label="Previous projects"
              className="flex -ml-4 lg:-ml-12 mr-3 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C81E2B] text-white shadow-md hover:bg-[#DF2938] transition cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid w-full grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-[#D5DAE2] shadow-sm hover:shadow-xl hover:border-[#94A3B8] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#1A1D23]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3.5 px-5 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6] border border-[#D5DAE2] text-[#C81E2B]">
                      <Building2 className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-lg font-semibold text-[#111317] group-hover:text-[#C81E2B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="truncate text-xs text-[#6B7280]">
                        {project.category} · {project.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              onClick={handleNextProjects}
              aria-label="Next projects"
              className="flex -mr-4 lg:-mr-12 ml-3 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C81E2B] text-white shadow-md hover:bg-[#DF2938] transition cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Pagination Dots */}
          <div className="mt-7 hidden md:flex items-center justify-center gap-2">
            {Array.from({ length: totalProjectPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProjectPage(idx)}
                aria-label={`Project page ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  projectPage === idx ? 'w-6 bg-[#C81E2B]' : 'w-2 bg-[#CBD5E1]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST & EXPERIENCE BAND ================= */}
      <section id="about" className="relative bg-[#111317] text-white overflow-hidden">
        {/* Top Wave from Silver Mist to Obsidian */}
        <div className="-mt-px">
          <WaveDivider fill="#F3F4F6" flip />
        </div>

        {/* Subtle Architectural Crane & Blueprint Lines in Silver */}
        <CraneWireframe className="pointer-events-none absolute -left-8 bottom-0 w-72 sm:w-80 opacity-85 hidden md:block" />
        <BlueprintAccent className="pointer-events-none absolute -right-10 top-12 w-72 opacity-20 hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Big Stat in Metallic Silver */}
            <div className="lg:col-span-4 text-center lg:text-left lg:pl-10">
              <div className="inline-block">
                <div className="font-serif text-7xl sm:text-8xl font-semibold leading-none text-metallic-silver">
                  15<span className="text-5xl sm:text-6xl align-top text-[#E0313F]">+</span>
                </div>
                <div className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-white/95">
                  Years
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
                  New England Craftsmanship
                </div>
              </div>
            </div>

            {/* Right Narrative + 4 Pillars */}
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E0313F]">
                Built on Trust
              </span>
              <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl md:text-[42px] font-medium text-white leading-tight">
                Experience That Builds Confidence
              </h2>
              <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-[#CBD5E1]">
                At W Campos Construction, every deck, door, window, and interior finish is built as
                if it were our own home. From clean selective demolition to structural framing and
                final trim, we deliver dependable timelines and lasting quality across MA, NH, and
                RI.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 border-t border-white/10 pt-7">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-7 w-7 shrink-0 text-[#E0313F] stroke-[1.4]" />
                  <div>
                    <div className="font-serif text-xl font-semibold text-metallic-silver">200+</div>
                    <div className="text-[11px] text-[#94A3B8]">Projects Completed</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-7 w-7 shrink-0 text-[#E0313F] stroke-[1.4]" />
                  <div>
                    <div className="font-serif text-xl font-semibold text-metallic-silver">98%</div>
                    <div className="text-[11px] text-[#94A3B8]">Client Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-7 w-7 shrink-0 text-[#E0313F] stroke-[1.4]" />
                  <div>
                    <div className="font-serif text-xl font-semibold text-metallic-silver">Skilled</div>
                    <div className="text-[11px] text-[#94A3B8]">Dedicated Crew</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-7 w-7 shrink-0 text-[#E0313F] stroke-[1.4]" />
                  <div>
                    <div className="font-serif text-xl font-semibold text-metallic-silver">Free</div>
                    <div className="text-[11px] text-[#94A3B8]">On-Site Estimates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave back into Silver Mist */}
        <div className="-mb-px">
          <WaveDivider fill="#F3F4F6" />
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section id="services" className="relative bg-[#F3F4F6] blueprint-bg py-14 sm:py-20 overflow-hidden">
        <BotanicalAccent className="pointer-events-none absolute -left-3 top-6 w-24 sm:w-28" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C81E2B]">
              What We Do
            </span>
            <h2 className="mt-1.5 font-serif text-4xl sm:text-5xl font-medium text-[#111317]">
              Our Services
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => openEstimateWithService(service.title)}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-full border border-[#D5DAE2] bg-gradient-to-b from-white to-[#E8ECF2] shadow-sm group-hover:border-[#C81E2B] group-hover:shadow-md transition-all duration-300">
                  <ServiceIcon name={service.iconName} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-[#111317] group-hover:text-[#C81E2B] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4B5563]">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FROM OUR BLOG / INSIGHTS ================= */}
      <section id="insights" className="relative bg-[#F3F4F6] pb-16 sm:pb-24 pt-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C81E2B]">
              Insights &amp; Ideas
            </span>
            <h2 className="mt-1.5 font-serif text-4xl sm:text-5xl font-medium text-[#111317]">
              From Our Blog
            </h2>
          </div>

          <div className="relative mt-10 sm:mt-12 flex items-center">
            <button
              onClick={() =>
                setBlogOffset((prev) => (prev - 1 + BLOG_POSTS.length) % BLOG_POSTS.length)
              }
              aria-label="Previous articles"
              className="hidden lg:flex -ml-12 mr-3 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C81E2B] text-white shadow-md hover:bg-[#DF2938] transition cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 no-scrollbar pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:w-full sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible">
              {orderedPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="w-[78vw] max-w-[300px] shrink-0 snap-center sm:w-auto sm:max-w-none group cursor-pointer overflow-hidden rounded-xl bg-white border border-[#D5DAE2] shadow-sm hover:shadow-lg hover:border-[#94A3B8] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1A1D23]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-center shadow-sm backdrop-blur-sm border border-[#E5E7EB]">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-[#C81E2B]">
                        {post.month}
                      </div>
                      <div className="font-serif text-lg font-bold leading-none text-[#111317]">
                        {post.day}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <h3 className="font-serif text-[17px] font-semibold leading-snug text-[#111317] group-hover:text-[#C81E2B] transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] group-hover:text-[#C81E2B]">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              onClick={() => setBlogOffset((prev) => (prev + 1) % BLOG_POSTS.length)}
              aria-label="Next articles"
              className="hidden lg:flex -mr-12 ml-3 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C81E2B] text-white shadow-md hover:bg-[#DF2938] transition cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER & CONTACT CTA ================= */}
      <footer id="contact" className="relative bg-[#111317] text-white overflow-hidden mt-auto">
        <div className="-mt-px">
          <WaveDivider fill="#F3F4F6" flip />
        </div>

        <BlueprintAccent className="pointer-events-none absolute right-0 bottom-6 w-64 opacity-20 hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-10 pb-24 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Left CTA */}
            <div className="md:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-tight text-white">
                Let&apos;s Build
                <br />
                <span className="text-metallic-silver font-semibold">Something Great Together</span>
              </h2>
              <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
                Have a custom deck, window, door, or remodeling project in mind? Schedule your free
                estimate today.
              </p>
              <button
                onClick={() => openEstimateWithService('Custom Decks')}
                className="group mt-6 inline-flex items-center rounded-full bg-[#C81E2B] text-white text-xs sm:text-sm font-semibold shadow-lg ring-1 ring-white/15 hover:bg-[#DF2938] transition cursor-pointer"
              >
                <span className="pl-6 pr-4 py-2.5">Get in Touch</span>
                <span className="flex items-center justify-center border-l border-white/20 px-3.5 py-2.5">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>

            {/* Center Contact Details */}
            <div className="md:col-span-4 space-y-4 text-sm text-[#E2E8F0]">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3.5 hover:text-[#E0313F] transition"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#E0313F]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3.5 hover:text-[#E0313F] transition"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#E0313F]" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#E0313F] mt-0.5" />
                <span>
                  {COMPANY_INFO.serviceAreaFull}
                  <span className="block text-xs text-[#94A3B8] mt-0.5">
                    Free On-Site Estimates · MA · NH · RI
                  </span>
                </span>
              </div>
            </div>

            {/* Right Brand & Social */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
              <BrandLogo />
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="W Campos Construction Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C0C7D1]/25 bg-white/5 text-[#E2E8F0] hover:border-[#C81E2B] hover:bg-[#C81E2B] hover:text-white transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  aria-label="Call W Campos Construction"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C0C7D1]/25 bg-white/5 text-[#E2E8F0] hover:border-[#C81E2B] hover:bg-[#C81E2B] hover:text-white transition"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  aria-label="Email W Campos Construction"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C0C7D1]/25 bg-white/5 text-[#E2E8F0] hover:border-[#C81E2B] hover:bg-[#C81E2B] hover:text-white transition"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-[#94A3B8]">
            <div>© 2026 W Campos Construction. All rights reserved.</div>
            <div className="flex items-center gap-5">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E0313F] transition"
              >
                {COMPANY_INFO.instagramHandle}
              </a>
              <span>·</span>
              <span>MA · NH · RI</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= STICKY MOBILE ACTION BAR ================= */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden border-t border-white/10 bg-[#111317]/95 backdrop-blur-md px-4 py-2.5 shadow-2xl">
        <div className="flex items-center gap-2.5">
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#C0C7D1]/30 bg-white/5 py-2.5 text-xs font-semibold text-white active:scale-[0.98] transition"
          >
            <Phone className="h-3.5 w-3.5 text-[#E0313F]" />
            Call Now
          </a>
          <button
            onClick={() => openEstimateWithService('Custom Decks')}
            className="flex-[1.35] inline-flex items-center justify-center gap-1.5 rounded-full bg-[#C81E2B] py-2.5 text-xs font-semibold text-white shadow-md shadow-[#C81E2B]/30 active:scale-[0.98] transition"
          >
            Free Estimate
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ================= INTERACTIVE MODALS ================= */}
      <EstimateModal
        isOpen={estimateOpen}
        onClose={() => setEstimateOpen(false)}
        defaultService={estimateService}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestEstimate={(cat) => openEstimateWithService(cat)}
      />
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onRequestEstimate={() => openEstimateWithService('Custom Decks')}
      />
    </div>
  );
}

export default App;
