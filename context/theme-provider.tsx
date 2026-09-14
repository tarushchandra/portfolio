'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'tarush-theme';

interface ThemeContextValue {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Actual value is decided client-side (see the blocking script in layout.tsx,
  // which sets the `dark` class before paint so there's no flash). This state
  // just needs to be readable/settable by React afterward.
  const [dark, setDarkState] = useState(false);

  useEffect(() => {
    setDarkState(document.documentElement.classList.contains('dark'));
  }, []);

  const setDark = (value: boolean) => {
    setDarkState(value);
    document.documentElement.classList.toggle('dark', value);
    window.localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ dark, setDark }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

/** Inline script string, run before hydration in <head> to prevent a light/dark flash. */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var dark = stored === 'dark';
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;
