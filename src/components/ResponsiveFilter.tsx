import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Check, X } from 'lucide-react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface ResponsiveFilterProps {
  options: FilterOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  title?: string;
  className?: string;
}

export const ResponsiveFilter: React.FC<ResponsiveFilterProps> = ({
  options,
  selectedId,
  onSelect,
  title = 'Categories',
  className = '',
}) => {
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  // Close bottom sheet / drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFilterSheetOpen) {
        setIsFilterSheetOpen(false);
      }
    };
    if (isFilterSheetOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFilterSheetOpen]);

  const activeOption = options.find((opt) => opt.id === selectedId) || options[0];

  const handleMobileSelect = (id: string) => {
    onSelect(id);
    setIsFilterSheetOpen(false);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Horizontal Segmented Control (hidden below 1024px) */}
      <div className="hidden  items-center gap-2 p-1.5 bg-[#19283B] border border-white/10 rounded-2xl overflow-x-auto no-scrollbar">
        {options.map((option) => {
          const isActive = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#D99A70] text-[#101B2B] shadow-sm'
                  : 'text-[#AEB9C7] hover:text-[#F4F1E9] hover:bg-white/5'
              }`}
            >
              <span>{option.label}</span>
              {typeof option.count === 'number' && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#101B2B]/20 text-[#101B2B]' : 'bg-white/10 text-[#AEB9C7]'
                  }`}
                >
                  {option.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tablet & Mobile Compact Filter Button (visible below 1024px) */}
      <div className=" flex items-center justify-between gap-3">
        <div className="text-xs text-[#AEB9C7] font-mono uppercase tracking-wider">
          Filter: <span className="text-[#F4F1E9] font-semibold">{activeOption.label}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsFilterSheetOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#19283B] hover:bg-[#223248] border border-white/10 text-[#F4F1E9] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          aria-label={`Open filter sheet. Currently filtered by ${activeOption.label}`}
        >
          <SlidersHorizontal className="w-4 h-4 text-[#D99A70]" />
          <span>Filters ({options.length})</span>
        </button>
      </div>

      {/* Mobile & Tablet Bottom Sheet / Drawer Modal */}
      <div
        className={` fixed inset-0 z-50 transition-opacity duration-300  ${
          isFilterSheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isFilterSheetOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsFilterSheetOpen(false)}
          aria-label="Close Filter Sheet Overlay"
        />

        {/* Bottom Sheet Drawer */}
        <div
          className={`w-[50%] mx-auto absolute bottom-0 left-0 right-0 max-h-[85vh] bg-[#19283B] border-t border-white/15 rounded-t-[28px] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isFilterSheetOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D99A70] font-mono">
                Select Option
              </span>
              <h3 className="text-lg font-serif-display font-bold text-[#F4F1E9]">{title}</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsFilterSheetOpen(false)}
              className="p-2 rounded-xl bg-[#223248] text-[#AEB9C7] hover:text-[#F4F1E9] border border-white/10 cursor-pointer"
              aria-label="Close Filter Sheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Options List */}
          <div className="py-4 space-y-2 overflow-y-auto max-h-[50vh]">
            {options.map((option) => {
              const isSelected = option.id === selectedId;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleMobileSelect(option.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#223248] text-[#D99A70] border border-[#D99A70]/40 font-semibold'
                      : 'text-[#AEB9C7] hover:text-[#F4F1E9] hover:bg-[#223248]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span>{option.label}</span>
                    {typeof option.count === 'number' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-[#AEB9C7]">
                        {option.count}
                      </span>
                    )}
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#D99A70]" />}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsFilterSheetOpen(false)}
              className="w-full py-3 bg-[#D99A70] text-[#101B2B] font-semibold text-sm rounded-xl cursor-pointer hover:bg-[#E3AA83] transition-colors"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
