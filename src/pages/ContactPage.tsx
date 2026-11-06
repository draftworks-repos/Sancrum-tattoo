import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Upload,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { STUDIO_INFO, ARTISTS, TATTOO_STYLES, FAQS } from '../data/studioData';
import { validateBookingForm, calculateTattooEstimate, BookingFormData, ValidationErrors } from '../utils/booking';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Initial state prefilled from query params if clicked from artist/gallery
  const initialArtist = searchParams.get('artist') || '';
  const initialStyle = searchParams.get('style') || '';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    tattooStyle: initialStyle || 'Black & Grey',
    preferredArtist: initialArtist || 'Any Available Master',
    approximateSize: 'medium',
    bodyPlacement: '',
    description: '',
    preferredDate: '',
    referenceImages: []
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Live estimate calculation
  const estimate = calculateTattooEstimate(formData.approximateSize, formData.tattooStyle);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Simulated image upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fakeUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        referenceImages: [...(prev.referenceImages || []), fakeUrl]
      }));
    }
  };

  const removeReferenceImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      referenceImages: prev.referenceImages?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = `SNCT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedSuccess(bookingRef);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* 1. Full-Screen Contact Hero (100svh) — Styled like Homepage Hero */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-6 sm:px-8 bg-[#101B2B] overflow-hidden">
        {/* Atmosphere background with High Visibility & Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85"
            alt="Sanctum booking consultation"
            className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/85 via-transparent to-[#101B2B]/45" />
        </div>

        {/* Hero Body Composition */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D99A70] font-semibold">
              Consultation & Direct Booking
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-bold leading-[1.05] tracking-tight text-[#F4F1E9]">
              Begin Your <br />
              <span className="italic font-normal text-[#D99A70]">Permanent</span> Commission.
            </h1>
            <p className="text-base sm:text-lg text-[#AEB9C7] max-w-xl font-light leading-relaxed">
              We review every inquiry individually. Whether you have an exact concept or an abstract narrative, we pair you with the resident master whose technique will best bring it to fruition.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#booking-form"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D99A70]/25 active:scale-95 cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Jump to Form</span>
              </a>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#223248]/85 hover:bg-white/10 text-[#F4F1E9] hover:text-[#D99A70] text-sm font-semibold rounded-xl border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D99A70]/40 active:scale-95 cursor-pointer shadow-md"
              >
                <span>Call Studio</span>
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Appointment Form & Studio Contact Info */}
      <section id="booking-form" className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Booking Reservation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F4F1E9]">
                Schedule an Appointment
              </h2>
              <p className="text-sm text-[#AEB9C7]">
                Fill out the details below. Our studio concierge will contact you to finalize appointment time and stencil drafting.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-[26px] bg-[#223248] border border-white/10 space-y-8 shadow-xl"
            >
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Julian Mercer"
                    className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] placeholder-[#AEB9C7]/40 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/10 focus:border-[#D99A70]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="julian@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] placeholder-[#AEB9C7]/40 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/10 focus:border-[#D99A70]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (415) 555-0199"
                    className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] placeholder-[#AEB9C7]/40 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/10 focus:border-[#D99A70]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Tattoo Style & Preferred Artist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Tattoo Style *
                  </label>
                  <select
                    name="tattooStyle"
                    value={formData.tattooStyle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#19283B] border border-white/10 text-sm text-[#F4F1E9] focus:outline-none focus:border-[#D99A70] cursor-pointer"
                  >
                    {TATTOO_STYLES.map((style) => (
                      <option key={style.id} value={style.name}>
                        {style.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Preferred Artist *
                  </label>
                  <select
                    name="preferredArtist"
                    value={formData.preferredArtist}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#19283B] border border-white/10 text-sm text-[#F4F1E9] focus:outline-none focus:border-[#D99A70] cursor-pointer"
                  >
                    <option value="Any Available Master">Any Available Master</option>
                    {ARTISTS.map((artist) => (
                      <option key={artist.id} value={artist.name}>
                        {artist.name} ({artist.title})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Approximate Size & Body Placement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Approximate Size *
                  </label>
                  <select
                    name="approximateSize"
                    value={formData.approximateSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#19283B] border border-white/10 text-sm text-[#F4F1E9] focus:outline-none focus:border-[#D99A70] cursor-pointer"
                  >
                    <option value="small">Small (1–3 inches, e.g. wrist/ankle)</option>
                    <option value="medium">Medium (4–6 inches, e.g. forearm/calf)</option>
                    <option value="large">Large (7–10 inches, e.g. shoulder/ribs)</option>
                    <option value="multi-session">Multi-Session (Sleeve, Backpiece, Bodysuit)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                    Body Placement *
                  </label>
                  <input
                    type="text"
                    name="bodyPlacement"
                    value={formData.bodyPlacement}
                    onChange={handleInputChange}
                    placeholder="e.g. Left inner forearm / Spine"
                    className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] placeholder-[#AEB9C7]/40 focus:outline-none transition-colors ${
                      errors.bodyPlacement
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/10 focus:border-[#D99A70]'
                    }`}
                  />
                  {errors.bodyPlacement && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.bodyPlacement}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                  Preferred Consultation / Session Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] focus:outline-none transition-colors cursor-pointer ${
                    errors.preferredDate
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/10 focus:border-[#D99A70]'
                  }`}
                />
                {errors.preferredDate && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Tattoo Description */}
              <div>
                <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                  Tattoo Concept & Description *
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your concept, symbolic meanings, elements you love or want to avoid..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#19283B] border text-sm text-[#F4F1E9] placeholder-[#AEB9C7]/40 focus:outline-none transition-colors ${
                    errors.description
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/10 focus:border-[#D99A70]'
                  }`}
                />
                {errors.description && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Reference Image Upload */}
              <div>
                <label className="block text-xs font-semibold text-[#F4F1E9] uppercase tracking-wider mb-2">
                  Reference Images (Optional)
                </label>
                <div className="border-2 border-dashed border-white/15 rounded-xl p-6 text-center hover:border-[#D99A70]/50 transition-colors bg-[#19283B]/50">
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                  >
                    <Upload className="w-6 h-6 text-[#D99A70]" />
                    <span className="text-xs font-medium text-[#F4F1E9]">
                      Click to upload photos or reference sketches
                    </span>
                    <span className="text-[11px] text-[#AEB9C7]">
                      PNG, JPG, WEBP up to 10MB
                    </span>
                  </label>
                </div>

                {formData.referenceImages && formData.referenceImages.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {formData.referenceImages.map((img, i) => (
                      <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/20">
                        <img src={img} alt="Reference preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeReferenceImage(i)}
                          className="absolute top-1 right-1 p-0.5 bg-black/80 rounded-full text-white hover:text-red-400 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Live Estimate Card */}
              <div className="p-5 rounded-xl bg-[#19283B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D99A70]">
                    Real-time Estimate
                  </span>
                  <div className="text-sm font-semibold text-[#F4F1E9] mt-0.5">
                    Est. Duration: {estimate.estimatedHours}
                  </div>
                  <div className="text-xs text-[#AEB9C7]">
                    Est. Range: {estimate.priceRange} (Deposit required: ${estimate.depositRequired})
                  </div>
                </div>

                <div className="text-xs text-[#AEB9C7]/70 italic sm:text-right">
                  Exact quote confirmed during consultation.
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#D99A70] hover:bg-[#E3AA83] disabled:opacity-50 text-[#101B2B] font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-[#D99A70]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting Proposal...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Studio Contact Information Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#F4F1E9]">
                Studio Concierge
              </h2>
            </div>

            <div className="p-8 rounded-[24px] bg-[#223248] border border-white/10 space-y-6 shadow-xl">
              <div className="space-y-4 text-xs text-[#AEB9C7]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D99A70] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F4F1E9] block text-sm font-serif-display">Address</strong>
                    <p>{STUDIO_INFO.address}</p>
                    <p>{STUDIO_INFO.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D99A70] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F4F1E9] block text-sm font-serif-display">Telephone</strong>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D99A70] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F4F1E9] block text-sm font-serif-display">Email Inquiries</strong>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#F4F1E9] transition-colors cursor-pointer">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D99A70] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Opening Hours</span>
                </span>
                <div className="space-y-2 text-xs">
                  {STUDIO_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-[#AEB9C7]">
                      <span>{h.days}</span>
                      <span className="text-[#F4F1E9] font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[22px] bg-[#19283B] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#D99A70] font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Private Consultation Space</span>
              </div>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Walk-ins are welcomed on Saturdays for merchandise and aftercare pickup, but all tattoo needlework is conducted inside private rooms by advance booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Requirement */}
      {/* Strict rule: "Include a simple, embedded Google Map inside its own section block.
          Display the actual Google Map.
          No text overlays.
          No decorative overlays.
          No floating cards on top of the map.
          No artificial map styling.
          No unnecessary controls or decorative elements added around it.
          Use a clean rounded container with a practical responsive height.
          The map itself should be clearly visible and usable." */}
      <section className="py-16 px-6 sm:px-8 bg-[#101B2B]">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[450px] sm:h-[500px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-[#19283B]">
            <iframe
              src={STUDIO_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SANCTUM Atelier Google Map Location"
              className="w-full h-full block"
            />
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Interactive Accordion) */}
      <section className="py-24 px-6 sm:px-8 bg-[#19283B]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D99A70] font-mono">
              Clarifications & Preparation
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#F4F1E9]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] bg-[#223248] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#D99A70] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[#F4F1E9]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D99A70] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#AEB9C7] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#AEB9C7] leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Success Modal */}
      {submittedSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={() => setSubmittedSuccess(null)}
          />

          <div className="relative z-10 max-w-md w-full bg-[#19283B] border border-white/15 rounded-[26px] p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D99A70]">
                Reference ID: {submittedSuccess}
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-[#F4F1E9]">
                Consultation Request Received
              </h3>
              <p className="text-xs text-[#AEB9C7] leading-relaxed">
                Thank you, <strong className="text-[#F4F1E9]">{formData.fullName}</strong>. Our concierge and resident artist have received your concept for <strong className="text-[#F4F1E9]">{formData.tattooStyle}</strong> on your {formData.bodyPlacement}. We will reach out to <strong className="text-[#F4F1E9]">{formData.email}</strong> within 24–48 hours.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmittedSuccess(null);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  tattooStyle: 'Black & Grey',
                  preferredArtist: 'Any Available Master',
                  approximateSize: 'medium',
                  bodyPlacement: '',
                  description: '',
                  preferredDate: '',
                  referenceImages: []
                });
              }}
              className="w-full py-3.5 bg-[#D99A70] hover:bg-[#E3AA83] text-[#101B2B] font-bold text-xs rounded-xl cursor-pointer transition-colors shadow-md"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}

      {/* 6. Final CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#101B2B] text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#F4F1E9]">
            Have a Specific Urgent Question?
          </h2>
          <p className="text-xs sm:text-sm text-[#AEB9C7]">
            Reach our concierge directly during open hours at <a href={`tel:${STUDIO_INFO.phone}`} className="text-[#D99A70] hover:underline cursor-pointer">{STUDIO_INFO.phone}</a> or email <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#D99A70] hover:underline cursor-pointer">{STUDIO_INFO.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
};
