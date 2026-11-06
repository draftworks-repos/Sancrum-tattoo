export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  tattooStyle: string;
  preferredArtist: string;
  approximateSize: string;
  bodyPlacement: string;
  description: string;
  preferredDate: string;
  referenceImages?: string[];
}

export interface ValidationErrors {
  [key: string]: string;
}

export function validateBookingForm(data: Partial<BookingFormData>): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.phone || data.phone.replace(/[^0-9]/g, '').length < 8) {
    errors.phone = 'Please provide a valid phone number with at least 8 digits';
  }

  if (!data.tattooStyle || data.tattooStyle.trim() === '') {
    errors.tattooStyle = 'Please select a tattoo style';
  }

  if (!data.approximateSize || data.approximateSize.trim() === '') {
    errors.approximateSize = 'Please select an approximate size';
  }

  if (!data.bodyPlacement || data.bodyPlacement.trim().length < 2) {
    errors.bodyPlacement = 'Please describe where on your body you want the piece';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please describe your tattoo concept in at least 10 characters';
  }

  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date for your consultation or session';
  } else {
    const selected = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selected.getTime()) || selected < today) {
      errors.preferredDate = 'Preferred date must be today or in the future';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export interface EstimateResult {
  estimatedSessions: number;
  estimatedHours: string;
  priceRange: string;
  depositRequired: number;
}

export function calculateTattooEstimate(size: string, style: string): EstimateResult {
  let baseHours = 2;
  let sessions = 1;
  let deposit = 100;
  let hourlyRate = 180;

  if (style.toLowerCase().includes('realism') || style.toLowerCase().includes('japanese')) {
    hourlyRate = 220;
  } else if (style.toLowerCase().includes('cover-up')) {
    hourlyRate = 200;
  }

  switch (size.toLowerCase()) {
    case 'small': // 1-3 inches
      baseHours = 1.5;
      sessions = 1;
      deposit = 100;
      break;
    case 'medium': // 4-6 inches
      baseHours = 3.5;
      sessions = 1;
      deposit = 150;
      break;
    case 'large': // 7-10 inches
      baseHours = 6;
      sessions = 1;
      deposit = 200;
      break;
    case 'extra-large':
    case 'multi-session': // Full sleeve, backpiece, chest
      baseHours = 18;
      sessions = 3;
      deposit = 350;
      break;
    default:
      baseHours = 3;
      sessions = 1;
      deposit = 120;
  }

  const minPrice = Math.round(baseHours * hourlyRate * 0.9);
  const maxPrice = Math.round(baseHours * hourlyRate * 1.25);

  return {
    estimatedSessions: sessions,
    estimatedHours: sessions > 1 ? `${baseHours} hrs total (${sessions} sessions)` : `${baseHours} hrs`,
    priceRange: `$${minPrice} - $${maxPrice}`,
    depositRequired: deposit
  };
}
