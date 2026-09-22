import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type PastelPalette = 'blush-pink' | 'bubblegum-pink' | 'coral-pink' | 'magenta-pink';

export interface PaletteInfo {
  id: PastelPalette;
  name: string;
  tagline: string;
  previewColor: string;
  accentHex: string;
  description: string;
}

export const PALETTES: Record<PastelPalette, PaletteInfo> = {
  'blush-pink': {
    id: 'blush-pink',
    name: 'Blush & Petal Pink',
    tagline: 'Soft, Elegant & Clean',
    previewColor: '#f472b6',
    accentHex: '#ec4899',
    description: 'Delicate pastel blush and rose petals—soft, warm, sophisticated, and effortless.',
  },
  'bubblegum-pink': {
    id: 'bubblegum-pink',
    name: 'Bubblegum Pastel',
    tagline: 'Chic, Vibrant & Playful',
    previewColor: '#f43f5e',
    accentHex: '#f43f5e',
    description: 'A vibrant, modern bubblegum pink with sweet pastel radiance and energetic presence.',
  },
  'coral-pink': {
    id: 'coral-pink',
    name: 'Peach & Coral Rose',
    tagline: 'Warm, Luminous & Friendly',
    previewColor: '#fb7185',
    accentHex: '#fb7185',
    description: 'Sun-kissed peach-pink and soft coral blush for a warm, welcoming, modern portfolio.',
  },
  'magenta-pink': {
    id: 'magenta-pink',
    name: 'Berry & Orchid Pink',
    tagline: 'Deep, Editorial & Distinctive',
    previewColor: '#e879f9',
    accentHex: '#d946ef',
    description: 'A richer orchid-berry pink with modern violet undertones for executive polish.',
  },
};

interface ThemeContextType {
  mode: ThemeMode;
  palette: PastelPalette;
  setMode: (mode: ThemeMode) => void;
  setPalette: (palette: PastelPalette) => void;
  toggleMode: () => void;
  currentPaletteInfo: PaletteInfo;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('hg_theme_mode');
    return (saved === 'light' || saved === 'dark') ? saved : 'light';
  });

  const [palette, setPalette] = useState<PastelPalette>(() => {
    const saved = localStorage.getItem('hg_theme_palette');
    if (saved && saved in PALETTES) {
      return saved as PastelPalette;
    }
    return 'blush-pink';
  });

  useEffect(() => {
    localStorage.setItem('hg_theme_mode', mode);
    localStorage.setItem('hg_theme_palette', palette);

    const root = document.documentElement;
    root.setAttribute('data-theme-mode', mode);
    root.setAttribute('data-theme-palette', palette);

    if (mode === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [mode, palette]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        palette,
        setMode,
        setPalette,
        toggleMode,
        currentPaletteInfo: PALETTES[palette] || PALETTES['blush-pink'],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
