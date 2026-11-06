import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  artist?: string;
  imageUrl: string;
  linkTo?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  aspectRatio?: 'landscape' | 'portrait' | 'square' | '16/9';
  showDetails?: boolean;
  transitionMode?: 'crossfade' | 'slide';
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  aspectRatio = '16/9',
  showDetails = true,
  transitionMode = 'crossfade',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  // Keyboard arrow navigation when container is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === containerRef.current) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === 'landscape'
      ? 'aspect-[16/10]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[4/5]';

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`relative group focus:outline-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Image Carousel"
    >
      {/* Carousel Frame */}
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#19283B] relative">
        {transitionMode === 'crossfade' ? (
          /* Crossfade Animation Layering */
          <div className={`w-full ${aspectClass} relative overflow-hidden bg-[#101B2B]`}>
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 z-10 pointer-events-auto'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/45 to-transparent" />

                  {showDetails && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 flex flex-col justify-end">
                      {slide.category && (
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D99A70] font-mono mb-1.5 sm:mb-2">
                          {slide.category}
                        </span>
                      )}
                      <div className="flex items-end justify-between gap-3 sm:gap-4">
                        <div>
                          <h3 className="text-sm sm:text-2xl md:text-3xl font-serif-display font-bold text-[#F4F1E9] leading-tight">
                            {slide.title}
                          </h3>
                          {slide.subtitle && (
                            <p className="text-xs sm:text-sm text-[#AEB9C7] mt-1 line-clamp-2 max-w-lg hidden sm:block">
                              {slide.subtitle}
                            </p>
                          )}
                        </div>

                        {slide.linkTo && (
                          <Link
                            to={slide.linkTo}
                            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#223248]/90 hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] text-xs font-semibold border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer shadow-sm active:scale-95"
                          >
                            <span>Explore</span>
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Slide Track */
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={slide.id} className="min-w-full relative shrink-0">
                <div className={`w-full ${aspectClass} relative overflow-hidden bg-[#101B2B]`}>
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/45 to-transparent" />

                  {showDetails && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 flex flex-col justify-end">
                      {slide.category && (
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D99A70] font-mono mb-1.5 sm:mb-2">
                          {slide.category} {slide.artist ? `· By ${slide.artist}` : ''}
                        </span>
                      )}
                      <div className="flex items-end justify-between gap-3 sm:gap-4">
                        <div>
                          <h3 className="text-lg sm:text-2xl md:text-3xl font-serif-display font-bold text-[#F4F1E9]">
                            {slide.title}
                          </h3>
                          {slide.subtitle && (
                            <p className="text-xs sm:text-sm text-[#AEB9C7] mt-1 line-clamp-2 max-w-lg hidden sm:block">
                              {slide.subtitle}
                            </p>
                          )}
                        </div>

                        {slide.linkTo && (
                          <Link
                            to={slide.linkTo}
                            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#223248]/90 hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] text-xs font-semibold border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer shadow-sm active:scale-95"
                          >
                            <span>Explore</span>
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop Side Navigation Arrows (Hidden on Mobile) */}
        <button
          type="button"
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-[#101B2B]/85 hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/15 backdrop-blur-md items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-[#101B2B]/85 hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/15 backdrop-blur-md items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* External Controls on Mobile: Navigation Arrows placed outside below the image container, plus pagination dots */}
      <div className="flex sm:hidden items-center justify-between mt-4 px-1">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === currentIndex
                  ? 'w-6 h-2 bg-[#D99A70]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 rounded-xl bg-[#19283B] hover:bg-[#D99A70] text-[#F4F1E9] hover:text-[#101B2B] border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Pagination Indicators */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentIndex
                ? 'w-8 h-2 bg-[#D99A70]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
