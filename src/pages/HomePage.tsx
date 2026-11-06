import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { TATTOO_STYLES, ARTISTS, REVIEWS } from '../data/studioData';
import { ImageCarousel, CarouselSlide } from '../components/ImageCarousel';

export const HomePage: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const featuredSlides: CarouselSlide[] = [
    {
      id: 'f-1',
      title: 'Apollonian Marble Study',
      subtitle: 'Classical Renaissance bust translated with five tones of greywash',
      category: 'Black & Grey Realism',
      artist: 'Mateo Cruz',
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=85',
      linkTo: '/gallery'
    },
    {
      id: 'f-2',
      title: 'Wild Botanical Flora',
      subtitle: 'Single needle precision micro-stippling along the clavicle line',
      category: 'Fine Line Botanical',
      artist: 'Elena Vance',
      imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1200&q=85',
      linkTo: '/gallery'
    },
    {
      id: 'f-3',
      title: 'Ascending Ryu Waves',
      subtitle: 'Authentic wabori dragon flow with dense ebony windbars',
      category: 'Japanese Irezumi',
      artist: 'Kenji Sato',
      imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=85',
      linkTo: '/gallery'
    },
    {
      id: 'f-4',
      title: 'The Alchemist Raven',
      subtitle: 'Warm ochre earth pigments with architectural framing',
      category: 'Neo Traditional',
      artist: 'Maya Lin',
      imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=85',
      linkTo: '/gallery'
    }
  ];

  const marqueeStyles = [
    'BLACK & GREY REALISM',
    'ARCHIVAL FINE LINE',
    'AUTHENTIC IREZUMI',
    'DARK ORNAMENTAL',
    'BESPOKE COVER-UP',
    'CLASSICAL SCULPTURE',
    'MICRO-REALISM',
    'SACRED GEOMETRY'
  ];

  return (
    <div className="w-full">
      {/* 1. Full-Screen Hero (Min height: 100svh) — Streamlined Centered / Asymmetric Layout */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden bg-[#101B2B]">
        {/* Background Atmosphere Image with High Visibility & Crisp Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85"
            alt="Sanctum Tattoo Artistry"
            className="w-full h-full object-cover object-center opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/75 via-transparent to-[#101B2B]/40" />
        </div>

        {/* Centerpiece Asymmetrical Typographic Hero */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D99A70] font-semibold">
              Bespoke Tattoo Studio
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              Permanent Art <br />
              <span className="italic font-normal text-[#D99A70]">On Human</span> Canvas.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              Where classical Renaissance draftsmanship meets modern single-needle precision. Private sessions, hospital-grade sterilization, and timeless bespoke design.
            </p>
          </div>

          {/* Right Side Clean CTA Action Block (No background card or extra text) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer text-center"
              >
                <span>Book Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#223248]/85 hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] text-sm font-semibold rounded-xl border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D99A70]/40 active:scale-95 cursor-pointer shadow-md"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Studio Introduction (Layout A — Split Editorial) */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Heading & Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              The Sanctum Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
              Tattoos should honor the body, not merely decorate it.
            </h2>
            <div className="space-y-4 text-[#AEB9C7] text-base leading-relaxed">
              <p>
                Founded in 2018 in San Francisco, Sanctum was established as an antidote to noisy, rushed street shops. We operate as an intimate studio collective where each piece is treated as a museum-grade archival work.
              </p>
              <p>
                From delicate single-needle florals that whisper against the bone to immersive Japanese wabori bodysuits that command presence, our resident artisans combine classical art school disciplines with modern dermatological care.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-white/20">|</span>
              <span className="text-xs text-[#AEB9C7] font-mono">
                Four Resident Masters · One Vision
              </span>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Composition */}
          <div className="lg:col-span-6 relative pb-6 pl-4 sm:pb-0 sm:pl-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-[#19283B] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1000&q=80"
                  alt="Artist applying custom tattoo stencil"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Offset Secondary Image (Visible on mobile and desktop) */}
              <div className="block absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-5/12 sm:w-1/2 aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden border-2 border-[#101B2B] shadow-2xl bg-[#19283B] z-10">
                <img
                  src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=600&q=80"
                  alt="Precision tattoo needlework detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Tattoo Styles — Rounded Image Cards */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Our Signature Disciplines
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Popular Tattoo Styles
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap shrink-0"
            >
              <span>View All 8 Disciplines</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TATTOO_STYLES.slice(0, 4).map((style) => (
              <div
                key={style.id}
                className="group rounded-[20px] bg-[#223248] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300  hover:border-[#D99A70]/40 shadow-lg"
              >
                <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#101B2B]">
                  <img
                    src={style.imageUrl}
                    alt={style.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223248] via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                      {style.name}
                    </h3>
                    <p className="text-xs text-[#AEB9C7] mt-2 line-clamp-3 leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#AEB9C7] font-mono">{style.avgSessions}</span>
                    <Link
                      to="/services"
                      className="text-[#D99A70] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tattoo Styles Marquee (Horizontal Scrolling Typography placed directly after Popular Tattoo Styles) */}
      <section className="py-8 bg-[#101B2B] border-y border-white/10 overflow-hidden" aria-label="Tattoo Styles Ticker">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {marqueeStyles.concat(marqueeStyles).map((style, i) => (
            <div key={i} className="flex items-center gap-12 text-[#F4F1E9] select-none">
              <span className="text-xl sm:text-2xl font-serif-display font-bold tracking-widest hover:text-[#D99A70] transition-colors cursor-default">
                {style}
              </span>
              <span className="text-[#D99A70] text-sm">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Tattoo Work — Large Image Carousel with Crossfade & 16:9 Aspect Ratio */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Recent Masterpieces
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Featured Tattoo Work
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap shrink-0"
            >
              <span>Explore Entire Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carousel */}
          <ImageCarousel slides={featuredSlides} aspectRatio="16/9" transitionMode="crossfade" />
        </div>
      </section>

      {/* 6. Meet the Artists — Image-led artist profiles */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Masters of the Needle
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Meet the Artists
              </h2>
            </div>
            <Link
              to="/artists"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer"
            >
              <span>View Full Artist Portfolios</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Artist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTISTS.map((artist) => (
              <div
                key={artist.id}
                className="group rounded-[22px] bg-[#223248] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D99A70]/40 shadow-xl"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-[#101B2B]">
                  <img
                    src={artist.avatarUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223248] via-[#223248]/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#101B2B]/80 text-[#D99A70] border border-white/10 backdrop-blur-sm">
                      {artist.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                      {artist.name}
                    </h3>
                    <p className="text-xs text-[#D99A70] font-medium mt-0.5">{artist.title}</p>
                    <p className="text-xs text-[#AEB9C7] mt-3 line-clamp-2 leading-relaxed">
                      {artist.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#AEB9C7] font-mono">{artist.status}</span>
                    <Link
                      to="/contact"
                      className="text-[#F4F1E9] hover:text-[#D99A70] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us — Simple Feature Layout */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Why Collectors Choose Sanctum
            </h2>
            <p className="text-[#AEB9C7] text-base leading-relaxed">
              We treat tattooing with the clinical hygiene of an operating theatre and the artistic reverence of a fine art studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 rounded-[20px] bg-[#19283B] border border-white/10 hover:border-[#D99A70]/50 hover:bg-[#1e2e44] hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:-translate-y-1 space-y-4 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] group-hover:scale-105 group-hover:bg-[#283b54] group-hover:text-[#E3AA83] flex items-center justify-center transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#E3AA83] transition-colors">
                Hospital-Grade Hygiene
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Class-B vacuum autoclaves, 100% disposable EO gas cartridges, and sterile surgical barriers replaced between sessions.
              </p>
            </div>

            <div className="group p-8 rounded-[20px] bg-[#19283B] border border-white/10 hover:border-[#D99A70]/50 hover:bg-[#1e2e44] hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:-translate-y-1 space-y-4 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] group-hover:scale-105 group-hover:bg-[#283b54] group-hover:text-[#E3AA83] flex items-center justify-center transition-all duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#E3AA83] transition-colors">
                Archival Inks
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                EU REACH-compliant vegan pigments formulated for true black settling without bluish or greenish color shifts over decades.
              </p>
            </div>

            <div className="group p-8 rounded-[20px] bg-[#19283B] border border-white/10 hover:border-[#D99A70]/50 hover:bg-[#1e2e44] hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:-translate-y-1 space-y-4 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] group-hover:scale-105 group-hover:bg-[#283b54] group-hover:text-[#E3AA83] flex items-center justify-center transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#E3AA83] transition-colors">
                Private Suites
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Acoustically treated private rooms designed for focus, relaxation, personal discretion, and uninterrupted artistic flow.
              </p>
            </div>

            <div className="group p-8 rounded-[20px] bg-[#19283B] border border-white/10 hover:border-[#D99A70]/50 hover:bg-[#1e2e44] hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:-translate-y-1 space-y-4 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] group-hover:scale-105 group-hover:bg-[#283b54] group-hover:text-[#E3AA83] flex items-center justify-center transition-all duration-300">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#E3AA83] transition-colors">
                Lifetime Guarantee
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Every client receives complimentary lifetime touch-ups on our custom pieces, ensuring your tattoo remains immaculate for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Tattoo Process — Four Clear Steps */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              From Thought to Ink
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              The Four-Step Tattoo Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                title: 'Private Consultation',
                desc: 'We examine your placement, discuss reference imagery, review anatomical flow, and determine timeline & budget.'
              },
              {
                num: '02',
                title: 'Bespoke Composition',
                desc: 'Your artist drafts hand-drawn stencils aligned to muscle lines, ensuring the design breathes and bends with motion.'
              },
              {
                num: '03',
                title: 'The Tattoo Session',
                desc: 'Relax in private, climate-controlled suites with curated audio and gentle rotary machines for minimal tissue stress.'
              },
              {
                num: '04',
                title: 'Clinical Aftercare',
                desc: 'Medical-grade second skin barrier application plus our botanical salve and 24/7 direct healing support.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-[22px] bg-[#223248] border border-white/10 hover:border-[#D99A70]/50 hover:bg-[#283b54] hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1.5 transition-all duration-300 space-y-6 flex flex-col justify-between cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif-display font-bold text-[#D99A70] group-hover:text-[#E3AA83] group-hover:translate-x-1 transition-all duration-300 inline-block">
                    {step.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-white/20 group-hover:text-[#D99A70] group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#F4F1E9] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#AEB9C7] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Client Reviews — Rounded Testimonial Carousel */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Collector Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Words from Our Canvas
              </h2>
            </div>

            {/* Testimonial Nav Arrows (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveReviewIndex((prev) =>
                    prev === 0 ? REVIEWS.length - 1 : prev - 1
                  )
                }
                className="w-11 h-11 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/10 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveReviewIndex((prev) =>
                    prev === REVIEWS.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-11 h-11 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/10 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="p-8 sm:p-12 rounded-[26px] bg-[#19283B] border border-white/10 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-1 text-[#D99A70]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl font-serif-display text-[#F4F1E9] leading-relaxed italic">
                "{REVIEWS[activeReviewIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-label="Google Review">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <h4 className="text-base font-semibold text-[#F4F1E9]">
                  {REVIEWS[activeReviewIndex].clientName}
                </h4>
              </div>
            </div>
          </div>

          {/* Mobile Testimonial Controls (Outside below the card) */}
          <div className="flex sm:hidden items-center justify-between pt-2">
            <span className="text-xs text-[#AEB9C7] font-mono">
              Review {activeReviewIndex + 1} of {REVIEWS.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveReviewIndex((prev) =>
                    prev === 0 ? REVIEWS.length - 1 : prev - 1
                  )
                }
                className="w-11 h-11 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveReviewIndex((prev) =>
                    prev === REVIEWS.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-11 h-11 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Booking CTA — Prominent Visual Section */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto rounded-[28px] overflow-hidden relative border border-white/15 bg-[#101B2B] p-10 lg:p-20 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1600&q=80"
              alt="Sanctum studio background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B] via-[#101B2B]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-lg md:max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              Begin Your Composition
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
              Ready to wear art that lasts forever?
            </h2>
            <p className="text-base text-[#AEB9C7] leading-relaxed">
              We welcome new projects for single-session fine line and extensive multi-session body suits. Submit your vision to schedule an in-studio consultation.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm md:text-base bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center text-sm md:text-base gap-2 bg-[#223248] hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] font-semibold px-6 py-4 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Browse Gallery</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
