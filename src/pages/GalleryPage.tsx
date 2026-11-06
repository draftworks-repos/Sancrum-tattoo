import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Maximize2,
  Clock,
  Sparkles
} from 'lucide-react';
import { GALLERY_ITEMS, TATTOO_STYLES } from '../data/studioData';
import { filterGalleryItems, getNextLightboxIndex, getPrevLightboxIndex, GalleryItem } from '../utils/gallery';
import { ResponsiveFilter, FilterOption } from '../components/ResponsiveFilter';
import { ImageCarousel, CarouselSlide } from '../components/ImageCarousel';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Works', count: GALLERY_ITEMS.length },
    { id: 'Realism', label: 'Realism' },
    { id: 'Fine Line', label: 'Fine Line' },
    { id: 'Blackwork', label: 'Blackwork' },
    { id: 'Neo Traditional', label: 'Neo Traditional' },
    { id: 'Japanese', label: 'Japanese' },
    { id: 'Custom', label: 'Custom' },
    { id: 'Black & Grey', label: 'Black & Grey' },
    { id: 'Cover-Up', label: 'Cover-Up' }
  ];

  const filteredItems = filterGalleryItems(GALLERY_ITEMS, selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? getNextLightboxIndex(prev, filteredItems.length) : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? getPrevLightboxIndex(prev, filteredItems.length) : null));
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const carouselSlides: CarouselSlide[] = GALLERY_ITEMS.slice(0, 4).map((item) => ({
    id: item.id,
    title: item.title,
    subtitle: item.description,
    category: item.style,
    artist: item.artist,
    imageUrl: item.imageUrl,
    linkTo: '/contact'
  }));

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full">
      {/* 1. Full-Screen Gallery Hero (100svh) — Styled like Homepage Hero */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 bg-[#101B2B] overflow-hidden">
        {/* Background Atmosphere Image with High Visibility & Crisp Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85"
            alt="Sanctum gallery background"
            className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/80 via-transparent to-[#101B2B]/45" />
        </div>

        {/* Hero Body Composition */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D99A70] font-semibold">
              Permanent Folio & Healed Archive
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              Curated Permanent <br />
              <span className="italic font-normal text-[#D99A70]">Folio & Living</span> Art.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              Every piece displayed here was custom-drafted for the human anatomy it lives upon. Photographs represent both fresh sessions and fully settled healed works.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session</span>
              </Link>
              <a
                href="#gallery-items"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#223248]/85 hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] text-sm font-semibold rounded-xl border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D99A70]/40 active:scale-95 cursor-pointer shadow-md"
              >
                <span>Browse Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Gallery Introduction & Responsive Filters */}
      <section id="gallery-items" className="py-20 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Filter by Aesthetic
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F4F1E9] mt-1">
                Explore Categories
              </h2>
            </div>
            <p className="text-xs text-[#AEB9C7] max-w-sm">
              Showing {filteredItems.length} curated masterworks in {selectedCategory === 'all' ? 'All Disciplines' : selectedCategory}.
            </p>
          </div>

          {/* Responsive Filter Control */}
          <ResponsiveFilter
            options={filterOptions}
            selectedId={selectedCategory}
            onSelect={setSelectedCategory}
            title="Filter by Tattoo Style"
          />

          {/* 4. Tattoo Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-[22px] bg-[#223248] border border-white/10 overflow-hidden shadow-xl transition-all duration-300  hover:border-[#D99A70]/50 cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-[#101B2B]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223248] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#101B2B]/80 text-[#D99A70] border border-white/10 backdrop-blur-sm">
                      {item.style}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-xl bg-[#101B2B]/80 text-[#F4F1E9] backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-serif-display font-bold text-[#F4F1E9] group-hover:text-[#D99A70] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#AEB9C7]">
                    <span>By {item.artist}</span>
                    <span className="font-mono text-[10px]">{item.placement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-lg text-[#F4F1E9] font-serif-display">No pieces found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="px-4 py-2 bg-[#D99A70] text-[#101B2B] text-xs font-semibold rounded-xl cursor-pointer"
              >
                Reset to All Works
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Featured Work Carousel */}
      <section className="py-24 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Spotlight Slideshow
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9] mt-2">
                Featured Work Carousel
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer"
            >
              <span>Consult on a Similar Concept</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ImageCarousel slides={carouselSlides} aspectRatio="16/9" transitionMode="crossfade" />
        </div>
      </section>

      {/* Full Lightbox Experience Modal */}
      {lightboxIndex !== null && activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
          />

          {/* Lightbox Content Container */}
          <div className="relative z-10 max-w-5xl w-full bg-[#19283B] border border-white/15 rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Left: Image Canvas */}
            <div className="md:w-3/5 bg-[#101B2B] relative flex items-center justify-center overflow-hidden min-h-[350px]">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(getPrevLightboxIndex(lightboxIndex, filteredItems.length));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#101B2B]/80 text-[#F4F1E9] hover:text-[#D99A70] border border-white/15 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(getNextLightboxIndex(lightboxIndex, filteredItems.length));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#101B2B]/80 text-[#F4F1E9] hover:text-[#D99A70] border border-white/15 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Details & Action */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#D99A70]">
                    {activeLightboxItem.style}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    className="p-2 rounded-xl bg-[#223248] text-[#AEB9C7] hover:text-[#F4F1E9] border border-white/10 cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-serif-display font-bold text-[#F4F1E9]">
                  {activeLightboxItem.title}
                </h3>

                <p className="text-sm text-[#AEB9C7] leading-relaxed">
                  {activeLightboxItem.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-[#AEB9C7]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#AEB9C7]/70">Resident Artist:</span>
                    <span className="text-[#F4F1E9] font-medium">{activeLightboxItem.artist}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#AEB9C7]/70">Anatomic Placement:</span>
                    <span className="text-[#F4F1E9] font-medium">{activeLightboxItem.placement}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#AEB9C7]/70">Aging & Settling:</span>
                    <span className="text-[#D99A70] font-medium">{activeLightboxItem.healingTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  to={`/contact?style=${encodeURIComponent(activeLightboxItem.style)}&artist=${encodeURIComponent(activeLightboxItem.artist)}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire for Similar Piece</span>
                </Link>
                <div className="text-center text-[10px] text-[#AEB9C7] font-mono">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Booking CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#101B2B] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
            Draft Your Unique Composition
          </h2>
          <p className="text-base text-[#AEB9C7]">
            Every tattoo begins with an idea. Share your references and placement preferences to receive an artist recommendation.
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
