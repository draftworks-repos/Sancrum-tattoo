import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Eye, Sparkles, Calendar, Award } from 'lucide-react';
import { ImageCarousel, CarouselSlide } from '../components/ImageCarousel';
import { ARTISTS } from '../data/studioData';

export const AboutPage: React.FC = () => {
  const studioSlides: CarouselSlide[] = [
    {
      id: 'studio-1',
      title: 'Private Resident Suites',
      subtitle: 'Acoustically isolated private consultation and needlework rooms',
      category: 'Atelier Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'studio-2',
      title: 'Clinical Sterilization Suite',
      subtitle: 'Hospital-grade Class B vacuum autoclave and ultrasonic wash station',
      category: 'Medical Hygiene',
      imageUrl: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'studio-3',
      title: 'Drafting & Anatomic Fitting Room',
      subtitle: 'Full-length mirror stations with directional daylight balance',
      category: 'Design Space',
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Full-Screen About Hero (100svh) — Styled like Homepage Hero */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 bg-[#101B2B] overflow-hidden">
        {/* Background Visual with High Visibility & Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=2000&q=85"
            alt="Sanctum studio interior"
            className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/85 via-transparent to-[#101B2B]/45" />
        </div>

        {/* Hero Body Composition */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D99A70] font-semibold">
              Studio Origins & Philosophy
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              An Intimate Refuge <br />
              <span className="italic font-normal text-[#D99A70]">For Intentional</span> Skin Art.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              We rejected the factory mentality of high-turnover street tattoo shops to build a sanctuary where art, human dignity, and clinical excellence coalesce.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              <Link
                to="/artists"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#223248]/85 hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] text-sm font-semibold rounded-xl border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D99A70]/40 active:scale-95 cursor-pointer shadow-md"
              >
                <span>View Artists</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story (Layout E — Editorial Split) */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              Chapter One
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
              From Classical Canvas to Living Skin.
            </h2>
            <div className="space-y-4 text-[#AEB9C7] text-base leading-relaxed">
              <p>
                Sanctum was born out of frustration with how modern tattooing had separated from fine art traditions. Founder Mateo Cruz spent years in Florence studying Italian classical marble sculptures, fascinated by how shadow creates the illusion of organic depth.
              </p>
              <p>
                Upon returning to California, he partnered with master fine-line draftsman Elena Vance and traditional Japanese horimono artist Kenji Sato to establish a studio that operates more like an artistic guild than a retail business.
              </p>
              <p>
                Today, our studio on Howard Street welcomes collectors from across the globe who appreciate the contemplative atmosphere, deep respect for skin integrity, and uncompromising dedication to permanence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 bg-[#101B2B] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1100&q=80"
                alt="Artists collaborating on custom piece"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Philosophy */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              The Three Pillars
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Studio Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[24px] bg-[#19283B] border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Sacred Bodily Respect
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Your skin is your lifelong vessel. We approach every inch with gentleness, constant check-ins on pain thresholds, and zero judgment for your narrative.
              </p>
            </div>

            <div className="p-8 rounded-[24px] bg-[#19283B] border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Patient Geometry
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                We never rush needlework to fit another walk-in into the schedule. Sessions are scheduled with generous buffers so the artisan works in total calm.
              </p>
            </div>

            <div className="p-8 rounded-[24px] bg-[#19283B] border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#223248] text-[#D99A70] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-[#F4F1E9]">
                Artistic Autonomy
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Each resident artist is encouraged to decline projects that do not match their aesthetic mastery, ensuring only passionate work is tattooed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inside the Studio — Image Carousel */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                The Environment
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Inside the Studio
              </h2>
            </div>
            <p className="text-xs text-[#AEB9C7] max-w-sm">
              Designed with bespoke lighting, acoustic baffles, and private client lounges for an elevated tattoo experience.
            </p>
          </div>

          <ImageCarousel slides={studioSlides} aspectRatio="16/9" transitionMode="crossfade" />
        </div>
      </section>

      {/* 5. Hygiene & Safety */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto rounded-[28px] bg-[#19283B] border border-white/10 p-8 sm:p-14 lg:p-16 space-y-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D99A70]">
              <ShieldCheck className="w-4 h-4" />
              <span>Medical-Grade Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Hygiene & Safety Standards
            </h2>
            <p className="text-base text-[#AEB9C7] leading-relaxed">
              We exceed all OSHA, California Health Department, and international sterilization guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#AEB9C7]">
            <div className="p-6 rounded-[20px] bg-[#223248] border border-white/10 space-y-2">
              <span className="text-sm font-semibold text-[#F4F1E9] block">Class-B Vacuum Autoclaves</span>
              <p>Hospital-level pressure cycles verified weekly via independent spore testing labs.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-[#223248] border border-white/10 space-y-2">
              <span className="text-sm font-semibold text-[#F4F1E9] block">100% Single-Use Cartridges</span>
              <p>Needles are opened from sterile blister packs directly in your view and discarded in biohazard receptacles.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-[#223248] border border-white/10 space-y-2">
              <span className="text-sm font-semibold text-[#F4F1E9] block">Air Filtration & UV Air Purifiers</span>
              <p>Continuous HEPA H14 air exchange scrubbers cycling the private suite air every 12 minutes.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-[#223248] border border-white/10 space-y-2">
              <span className="text-sm font-semibold text-[#F4F1E9] block">Vegan & Heavy Metal-Free</span>
              <p>Formulated without animal glycerin, bone black, or dangerous nickel impurities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet the Artists Preview */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[26px] bg-[#223248] border border-white/10">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              The Guild
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#F4F1E9]">
              Meet Our Resident Artists
            </h3>
            <p className="text-xs text-[#AEB9C7] max-w-lg leading-relaxed">
              Explore the individual portfolios and backgrounds of Mateo Cruz, Elena Vance, Kenji Sato, and Maya Lin.
            </p>
          </div>
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-xs font-bold px-6 py-3.5 rounded-xl transition-colors cursor-pointer shadow-md shrink-0"
          >
            <span>Explore Artist Profiles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#101B2B] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
            Step into the Atelier
          </h2>
          <p className="text-base text-[#AEB9C7]">
            Consultations are confidential, unhurried, and dedicated entirely to your aesthetic journey.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold px-8 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#D99A70]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Studio Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
