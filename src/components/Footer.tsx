import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1623] border-t border-white/10 pt-20 pb-12 text-[#AEB9C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="text-3xl font-serif-display font-bold tracking-widest text-[#F4F1E9] hover:text-[#D99A70] transition-colors inline-block cursor-pointer select-none"
              aria-label="SANCTUM Atelier Home"
            >
              SANCTUM
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[#AEB9C7]">
              An art-directed tattoo atelier in the heart of San Francisco. Dedicated to permanent skin craftsmanship, archival fine line, anatomical wabori, and dark realism.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#19283B] border border-white/10 flex items-center justify-center text-[#F4F1E9] hover:text-[#D99A70] hover:border-[#D99A70]/40 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:concierge@sanctum-atelier.art"
                className="w-10 h-10 rounded-xl bg-[#19283B] border border-white/10 flex items-center justify-center text-[#F4F1E9] hover:text-[#D99A70] hover:border-[#D99A70]/40 transition-colors cursor-pointer"
                aria-label="Email studio"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#19283B] border border-white/10 text-xs text-[#F4F1E9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D99A70]" />
                <span>Licensed California Facility</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-[#F4F1E9] uppercase font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Home Atelier
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Styles & Services
                </Link>
              </li>
              <li>
                <Link to="/artists" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Resident Artists
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Curated Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                  Consultation & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-[#F4F1E9] uppercase font-mono flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D99A70]" />
              <span>Studio Hours</span>
            </h4>
            <div className="space-y-3 text-sm">
              {STUDIO_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#F4F1E9] font-medium">{h.days}</span>
                  <span className="text-xs text-[#AEB9C7]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Concierge */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-[#F4F1E9] uppercase font-mono flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D99A70]" />
              <span>Atelier Location</span>
            </h4>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p className="text-[#F4F1E9]">{STUDIO_INFO.address}</p>
              <p>{STUDIO_INFO.city}</p>
              <div className="pt-2 flex flex-col gap-1 text-xs">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="hover:text-[#F4F1E9] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D99A70]" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="hover:text-[#F4F1E9] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D99A70]" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>
            </address>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D99A70] hover:text-[#E3AA83] transition-colors cursor-pointer mt-2"
            >
              <span>Get Directions & Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} SANCTUM. All rights reserved. Handcrafted tattoo art.</p>
          <p className="text-xs text-[#AEB9C7]">
            Design and Developed by{' '}
            <a
              href="https://draftworks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D99A70] hover:text-[#E3AA83] font-semibold transition-colors cursor-pointer underline underline-offset-2 decoration-[#D99A70]/40 hover:decoration-[#D99A70]"
            >
              draftworks.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
