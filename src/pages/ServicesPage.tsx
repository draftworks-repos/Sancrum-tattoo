import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Sparkles, Layers, Clock, ShieldAlert, Check } from 'lucide-react';
import { TATTOO_STYLES } from '../data/studioData';
import { ResponsiveFilter, FilterOption } from '../components/ResponsiveFilter';

export const ServicesPage: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('all');

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Disciplines', count: TATTOO_STYLES.length },
    ...TATTOO_STYLES.map((s) => ({ id: s.id, label: s.name })),
  ];

  const displayedStyles =
    selectedStyleId === 'all'
      ? TATTOO_STYLES
      : TATTOO_STYLES.filter((s) => s.id === selectedStyleId);

  return (
    <div className="w-full">
      {/* 1. Full-Screen Services Hero (100svh) — Clean Centered / Asymmetric Layout */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 bg-[#101B2B] overflow-hidden">
        {/* Background Texture Overlay with High Visibility */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=2000&q=85"
            alt="Services background"
            className="w-full h-full object-cover opacity-65 object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/80 via-transparent to-[#101B2B]/45" />
        </div>

        {/* Split Editorial Hero Body */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              The Architecture of Pigment
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              Where Ink <br />
              <span className="italic font-normal text-[#D99A70]">Meets</span> Identity.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              We specialize across eight core disciplines—ranging from hyper-detailed black & grey realism and single-needle botanicals to extensive Japanese wabori and complex cover-up reworks.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/20 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              <a
                href="#styles-section"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#19283B] hover:bg-[#223248] text-[#F4F1E9] text-xs font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
              >
                <span>View All Styles</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden border border-white/15 bg-[#19283B] shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=80"
                alt="Tattoo artistry process"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to Tattoo Styles & Responsive Filters */}
      <section id="styles-section" className="py-20 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              Styles Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Eight Master Disciplines
            </h2>
            <p className="text-base text-[#AEB9C7] leading-relaxed">
              Explore our technical specialties. Each style is led by dedicated resident artists with specialized machines, needles, and ink dilutions.
            </p>
          </div>

          {/* Responsive Filter: Tabs on desktop, bottom sheet drawer on tablet/mobile */}
          <ResponsiveFilter
            options={filterOptions}
            selectedId={selectedStyleId}
            onSelect={setSelectedStyleId}
            title="Filter Tattoo Disciplines"
          />

          {/* Tattoo Styles Cards Grid */}
          {/* Tattoo Styles Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedStyles.map((style) => (
              <div
                key={style.id}
                className="group rounded-[22px] bg-[#223248] border border-white/10 overflow-hidden shadow-xl transition-all duration-300 hover:border-[#D99A70]/40 hover:-translate-y-1 grid grid-cols-1 sm:grid-cols-12"
              >
                {/* Left Image: Covers 100% top-to-bottom on sm+ and 16:9 on mobile */}
                <div className="sm:col-span-5 relative aspect-[16/9] sm:aspect-auto min-h-[220px] sm:min-h-full overflow-hidden bg-[#101B2B]">
                  <img
                    src={style.imageUrl}
                    alt={style.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B]/60 via-transparent to-transparent sm:hidden" />
                </div>

                {/* Right Content Column: Compact, cohesive spacing without awkward gaps */}
                <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#F4F1E9]">
                      {style.name}
                    </h3>
                    <p className="text-xs text-[#AEB9C7] leading-relaxed line-clamp-3">
                      {style.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-[#AEB9C7]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D99A70] shrink-0" />
                      <span>Sessions: {style.avgSessions} · Heals in {style.healingTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#D99A70] shrink-0" />
                      <span className="line-clamp-1">Artists: {style.featuredArtists.join(', ')}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#AEB9C7] text-[11px] truncate max-w-[150px] sm:max-w-[170px]" title={style.needleTechnique}>
                      {style.needleTechnique}
                    </span>
                    <Link
                      to="/contact"
                      className="text-[#D99A70] hover:text-[#E3AA83] font-semibold flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Request Piece</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Service Images — Alternating Image-Led Compositions (Layout E) */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Pair 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 bg-[#19283B] shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1100&q=80"
                  alt="Fine line botanical work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Anatomical Alignment
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
                Crafted to breathe with your musculoskeletal frame.
              </h2>
              <p className="text-base text-[#AEB9C7] leading-relaxed">
                A flat stencil placed onto a three-dimensional curved body will distort if not tailored to muscle groups. Our artists perform standing and dynamic motion fittings before a single needle drops into pigment.
              </p>
              <div className="pt-2 flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-[#F4F1E9]">
                  <Check className="w-4 h-4 text-[#D99A70]" />
                  <span>Dynamic Stencil Mapping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#F4F1E9]">
                  <Check className="w-4 h-4 text-[#D99A70]" />
                  <span>Custom Color Washes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pair 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Preservation & Aging
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
                Designed to look stunning on day one, and day ten thousand.
              </h2>
              <p className="text-base text-[#AEB9C7] leading-relaxed">
                Many modern tattoos blur together within five years due to overcrowded needle tracks. We calculate negative skin space with mathematical intent, allowing natural healing expansion without loss of resolution.
              </p>
              <div className="pt-2">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer"
                >
                  <span>Inspect Healed Work In Gallery</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 bg-[#19283B] shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1100&q=80"
                  alt="Healed blackwork tattoo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Custom Tattoo Design Process */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              The Bespoke Residency
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Custom Tattoo Design Process
            </h2>
            <p className="text-base text-[#AEB9C7] leading-relaxed">
              We do not produce flash off the wall. Every custom piece undergoes an iterative design lifecycle between you and your artist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[22px] bg-[#223248] border border-white/10 space-y-4">
              <span className="text-sm font-mono text-[#D99A70] uppercase">Stage 01</span>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Narrative & Moodboard
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                You share references, stories, cultural symbols, and placement photography. We isolate compositional hierarchy and lighting sources.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-[#223248] border border-white/10 space-y-4">
              <span className="text-sm font-mono text-[#D99A70] uppercase">Stage 02</span>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Direct Anatomic Draft
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Your artist paints or sketches the layout directly on your skin during consultation, verifying contour balance and flex dynamics.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-[#223248] border border-white/10 space-y-4">
              <span className="text-sm font-mono text-[#D99A70] uppercase">Stage 03</span>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Final Pigment Execution
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Executed in quiet, private suites with tailored rotary machines and clinical aftercare sealing immediately following session completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cover-Up and Rework Section */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto rounded-[28px] bg-[#19283B] border border-white/10 p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D99A70]">
                <ShieldAlert className="w-4 h-4" />
                <span>Specialized Reconstruction</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
                Cover-Ups, Scar Camouflage & Re-Works
              </h2>
              <p className="text-base text-[#AEB9C7] leading-relaxed">
                A bad tattoo does not need to be a life sentence. Rather than blasting ink into a dark black blob, our specialists utilize optical redirection—drawing the viewer's eye to high-contrast focal points while weaving older pigments into natural shadows.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#AEB9C7]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A70]" />
                  <span>Surgical & trauma scar camouflage with organic floral or biomechanical textures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A70]" />
                  <span>Optical layering without necessitating prior painful laser sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A70]" />
                  <span>Comprehensive evaluation by resident cover-up specialist Maya Lin</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-[22px] overflow-hidden border border-white/10 bg-[#101B2B] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                  alt="Cover-up tattoo transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Consultation CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
            Direct Studio Inquiry
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
            Begin with a One-on-One Consultation
          </h2>
          <p className="text-base text-[#AEB9C7] max-w-xl mx-auto leading-relaxed">
            Discuss your concept, examine healed examples, and receive an exact price quote and session timeline.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold px-8 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#D99A70]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
