import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette, Check, Sparkles, Heart } from 'lucide-react';
import { useTheme, PALETTES, PastelPalette } from '../context/ThemeContext.tsx';

export default function ThemePalettePicker() {
  const { mode, palette, setMode, setPalette, toggleMode, currentPaletteInfo } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/70 dark:bg-black/40 border border-pink-300/40 dark:border-pink-500/20 shadow-xs backdrop-blur-md">
        {/* Quick Mode Toggle (Light / Dark) */}
        <button
          id="theme-mode-toggle-btn"
          onClick={toggleMode}
          aria-label={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Pastel mode`}
          title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Pastel mode`}
          className="p-1.5 rounded-lg text-pink-600 dark:text-pink-300 hover:text-pink-900 dark:hover:text-white hover:bg-pink-100 dark:hover:bg-pink-950/40 transition-colors cursor-pointer"
        >
          {mode === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-300" />
          ) : (
            <Moon className="w-4 h-4 text-pink-500" />
          )}
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-pink-200 dark:bg-pink-900/60" />

        {/* Color Palette Menu Button */}
        <button
          id="theme-palette-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium text-pink-900 dark:text-pink-100 hover:bg-pink-100 dark:hover:bg-pink-950/40 transition-all cursor-pointer"
        >
          <span
            className="w-3.5 h-3.5 rounded-full border border-pink-400 shadow-xs inline-block"
            style={{ backgroundColor: currentPaletteInfo.previewColor }}
          />
          <span className="hidden sm:inline font-semibold">{currentPaletteInfo.name}</span>
          <Palette className="w-3.5 h-3.5 text-pink-400" />
        </button>
      </div>

      {/* Palette Dropdown Popover */}
      {isOpen && (
        <div
          id="theme-palette-dropdown"
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white dark:bg-[#1a0c16] border border-pink-200 dark:border-pink-900/60 p-4 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-3 border-b border-pink-100 dark:border-pink-950 mb-3">
            <div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-950 dark:text-pink-100">
                  Pink Moods
                </span>
              </div>
              <span className="text-[11px] text-pink-700/70 dark:text-pink-300/70">
                Choose your favorite pink aesthetic
              </span>
            </div>
            <button
              onClick={toggleMode}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900/60 transition-colors cursor-pointer"
            >
              {mode === 'dark' ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-pink-500" />}
              {mode === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          <div className="space-y-2">
            {(Object.keys(PALETTES) as PastelPalette[]).map((key) => {
              const pal = PALETTES[key];
              const isSelected = palette === key;
              return (
                <button
                  key={key}
                  id={`palette-option-${key}`}
                  onClick={() => {
                    setPalette(key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-pink-50 dark:bg-pink-950/50 ring-1 ring-pink-400/60'
                      : 'hover:bg-pink-50/50 dark:hover:bg-pink-950/20'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full mt-0.5 border border-pink-400 shrink-0 shadow-xs"
                    style={{ backgroundColor: pal.previewColor }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-pink-950 dark:text-pink-100">
                        {pal.name}
                      </span>
                      {key === 'blush-pink' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-pink-500/15 text-pink-600 dark:text-pink-300 border border-pink-500/25">
                          Signature
                        </span>
                      )}
                      {isSelected && key !== 'blush-pink' && (
                        <Check className="w-3.5 h-3.5 text-pink-600 dark:text-pink-300" />
                      )}
                    </div>
                    <span className="block text-[11px] font-medium text-pink-800/80 dark:text-pink-300/80 mt-0.5">
                      {pal.tagline}
                    </span>
                    <span className="block text-[10px] text-pink-600/70 dark:text-pink-400/60 mt-1 leading-snug">
                      {pal.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-pink-100 dark:border-pink-950 flex items-center gap-1.5 text-[11px] text-pink-600 dark:text-pink-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Select any pink shade to switch instantly</span>
          </div>
        </div>
      )}
    </div>
  );
}
