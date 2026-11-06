import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Calendar, Compass, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close drawer and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Artists', path: '/artists' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101B2B]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 flex items-center justify-between">
          {/* Logo - studio name only, strictly single wordmark */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-serif-display font-bold tracking-widest text-[#F4F1E9] hover:text-[#D99A70] transition-colors cursor-pointer select-none"
            aria-label="SANCTUM Atelier Home"
          >
            SANCTUM
          </Link>

          {/* Desktop Nav - Above 1024px */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 cursor-pointer ${
                    active ? 'text-[#F4F1E9]' : 'text-[#AEB9C7] hover:text-[#F4F1E9]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D99A70] rounded-full animate-in fade-in duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Container */}
          <div className="flex items-center gap-4">
            {/* Desktop & Tablet Booking CTA (hidden below 768px) */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#D99A70]/20 active:scale-95 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Menu Toggle Drawer Button - Visible on Tablet and Mobile (below 1024px) */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-[#19283B] border border-white/10 text-[#F4F1E9] hover:text-[#D99A70] hover:border-[#D99A70]/40 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              aria-label="Open Navigation Menu"
              aria-expanded={isDrawerOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer"
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close Drawer Overlay"
        />

        {/* Drawer Content */}
        <aside
          className={`absolute top-0 right-0 w-full sm:w-[420px] h-full bg-[#101B2B] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out overflow-y-auto ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Drawer"
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-xl font-serif-display font-bold tracking-widest text-[#F4F1E9]">
                SANCTUM
              </span>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-xl bg-[#19283B] border border-white/10 text-[#AEB9C7] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-medium transition-all cursor-pointer ${
                      active
                        ? 'bg-[#19283B] text-[#D99A70] font-semibold border-l-4 border-[#D99A70]'
                        : 'text-[#AEB9C7] hover:text-[#F4F1E9] hover:bg-[#19283B]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#AEB9C7]/50 font-mono">0{idx + 1}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer & Primary Mobile Booking CTA */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
            <Link
              to="/contact"
              onClick={() => setIsDrawerOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-[#D99A70]/15 cursor-pointer text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>

            <div className="space-y-2 text-xs text-[#AEB9C7]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D99A70] shrink-0" />
                <span>{STUDIO_INFO.phone}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
