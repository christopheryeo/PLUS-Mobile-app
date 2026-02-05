export const colors = {
  primary: '#008a45',
  primaryDark: '#006633',
  primaryLight: '#00a854',
  
  backgroundLight: '#f5f8f7',
  backgroundDark: '#0f2319',
  
  white: '#ffffff',
  black: '#000000',
  
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  
  red: '#ef4444',
  yellow: '#fbbf24',
  green: '#10b981',
  
  transparent: 'transparent',
};

export const darkColors = {
  ...colors,
  background: colors.backgroundDark,
  surface: '#1a2e24',
  text: colors.white,
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  border: 'rgba(255, 255, 255, 0.1)',
};

export const lightColors = {
  ...colors,
  background: colors.backgroundLight,
  surface: colors.white,
  text: colors.backgroundDark,
  textSecondary: colors.gray500,
  border: colors.gray200,
};
