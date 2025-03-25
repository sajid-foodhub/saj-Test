import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { type SliceTheme } from '../theme/theme';

// Define the type for the theme (Replace `any` with the actual theme type)
interface ThemeContextType {
  theme: SliceTheme; // Change 'any' to the actual theme object type
}

// Create a context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface SliceThemeProviderProps {
  children: ReactNode;
  theme: SliceTheme; // Change 'any' to the actual theme type
}

// Theme Provider Component
export const SliceThemeProvider: React.FC<SliceThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to access the theme
export const useSliceTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSliceTheme must be used within a SliceThemeProvider');
  }
  return context;
};
