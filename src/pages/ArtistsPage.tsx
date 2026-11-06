import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Calendar, CheckCircle2, Sparkles, X } from 'lucide-react';
import { ARTISTS, Artist } from '../data/studioData';
import { ImageCarousel, CarouselSlide } from '../components/ImageCarousel';

export const ArtistsPage: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const artistSlides: CarouselSlide[] = [
    {
      id: 'art-cruz',
      title: 'Sculptural Marble Study',
      subtitle: 'By Mateo Cruz — Five graduated charcoal greywashes',
      category: 'Master Realism',
      artist: 'Mateo Cruz',
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'art-vance',
      title: 'Botanical Clavicle Specimen',
      subtitle: 'By Elena Vance — Single-needle 1RL micro-stippling',
      category: 'Archival Fine Line',
      artist: 'Elena Vance',
      imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'art-sato',
      title: 'Traditional Ryu Bodysuit',
      subtitle: 'By Kenji Sato — Custom wabori windbars and wave balance',
      category: 'Horimono / Irezumi',
      artist: 'Kenji Sato',
      imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'art-lin',
      title: 'The Solstice Hawk',
      subtitle: 'By Maya Lin — Heavy line weight & warm ochre contrast',
      category: 'Neo Traditional',
      artist: 'Maya Lin',
      imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Full-Screen Artists Hero (100svh) — Styled like Homepage Hero */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 bg-[#101B2B] overflow-hidden">
        {/* Large photograph with High Visibility & Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=85"
            alt="Artist working in studio"
            className="w-full h-full object-cover object-top opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/85 via-transparent to-[#101B2B]/45" />
        </div>

        {/* Hero Body Composition */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D99A70] font-semibold">
              Master Guild & Resident Artists
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              Masters of the Needle <br />
              <span className="italic font-normal text-[#D99A70]">& Living</span> Canvas.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              Four distinct artistic legacies united under one studio roof. Each artist brings an authentic fine art discipline to custom, permanent skin commissions.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Artist</span>
              </Link>
              <a
                href="#artist-roster"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#223248]/85 hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] text-sm font-semibold rounded-xl border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D99A70]/40 active:scale-95 cursor-pointer shadow-md"
              >
                <span>View Roster</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Artist Introduction */}
      <section className="py-20 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
            Uncompromising Mastery
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
            Four Dedicated Residencies
          </h2>
          <p className="text-base text-[#AEB9C7] leading-relaxed">
            We do not employ apprentices to fill chairs. Every artist at Sanctum has at least 8 to 14 years of professional practice, international guest spots, and formal fine-arts training.
          </p>
        </div>
      </section>

      {/* 3. Artist Profiles — Rounded Portrait Cards */}
      <section id="artist-roster" className="py-20 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTISTS.map((artist) => (
              <div
                key={artist.id}
                className="rounded-[24px] bg-[#19283B] border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#D99A70]/40"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                  <div className="sm:col-span-5 aspect-[4/5] sm:aspect-[4/5] h-full overflow-hidden relative bg-[#101B2B]">
                    <img
                      src={artist.avatarUrl}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[10px] uppercase font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                          artist.status === 'Accepting Bookings'
                            ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                            : 'bg-amber-950/70 text-amber-300 border-amber-500/30'
                        }`}
                      >
                        {artist.status}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#D99A70]">
                          {artist.experience} Craft
                        </span>
                        <a
                          href={`https://instagram.com`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#AEB9C7] hover:text-[#D99A70] text-xs flex items-center gap-1 transition-colors cursor-pointer"
                          aria-label={`${artist.name} Instagram`}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>{artist.instagram}</span>
                        </a>
                      </div>

                      <h3 className="text-2xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-[#D99A70] font-medium">{artist.title}</p>
                      <p className="text-xs text-[#AEB9C7] mt-3 leading-relaxed">
                        {artist.bio}
                      </p>

                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedArtist(artist)}
                          className="px-3.5 py-2 rounded-xl bg-[#223248] hover:bg-white/10 text-[#F4F1E9] text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                        >
                          View Profile
                        </button>
                        <Link
                          to={`/contact?artist=${encodeURIComponent(artist.name)}`}
                          className="px-3.5 py-2 rounded-xl bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
                        >
                          <span>Book</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Preview Row */}
                <div className="p-4 bg-[#101B2B]/70 border-t border-white/10 grid grid-cols-3 gap-3">
                  {artist.portfolio.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedArtist(artist)}
                    >
                      <img
                        src={img}
                        alt={`${artist.name} portfolio specimen ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Artist Work — Image Carousel */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Artisan Showcases
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Featured Resident Work
              </h2>
            </div>
            <p className="text-xs text-[#AEB9C7] max-w-sm">
              From classical Renaissance statues to deep wabori bodysuits, explore signature pieces etched by our resident masters.
            </p>
          </div>

          <ImageCarousel slides={artistSlides} aspectRatio="16/9" transitionMode="crossfade" />
        </div>
      </section>

      {/* 5. Individual Artist Details Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedArtist(null)}
          />

          <div className="relative z-10 max-w-3xl w-full bg-[#19283B] border border-white/15 rounded-[28px] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={selectedArtist.avatarUrl}
                  alt={selectedArtist.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-[#D99A70]"
                />
                <div>
                  <h3 className="text-2xl font-serif-display font-bold text-[#F4F1E9]">
                    {selectedArtist.name}
                  </h3>
                  <p className="text-xs text-[#D99A70]">{selectedArtist.title}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArtist(null)}
                className="p-2.5 rounded-xl bg-[#223248] text-[#AEB9C7] hover:text-[#F4F1E9] cursor-pointer"
                aria-label="Close Artist Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-[#AEB9C7] leading-relaxed">
                {selectedArtist.bio}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#AEB9C7]">
                Selected Portfolio Works
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedArtist.portfolio.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/5] rounded-[18px] overflow-hidden border border-white/10 bg-[#101B2B]"
                  >
                    <img
                      src={img}
                      alt={`${selectedArtist.name} work ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#AEB9C7] font-mono">
                Booking: {selectedArtist.status} ({selectedArtist.nextAvailable})
              </span>
              <Link
                to={`/contact?artist=${encodeURIComponent(selectedArtist.name)}`}
                className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                <span>Request {selectedArtist.name.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 6. Booking CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#101B2B] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
            Reserve Your Resident Artist
          </h2>
          <p className="text-base text-[#AEB9C7]">
            Resident schedules fill quickly. Submit your concept and preferred placement to secure an in-person or virtual consultation.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold px-8 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#D99A70]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Artist Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
