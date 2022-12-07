import { typography } from './typography';

const spacing = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  44: 44,
  48: 48,
  56: 56,
  60: 60,
  72: 72,
  120: 120,
} as const;

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  darkGreen: '#207474',
  appleGreen: '#B3CC20',
  beige: '#F4F6E6',
  lightGrey: '#C0C0C0',
  grey: '#888888',
  darkGrey: '#333333',
  red: '#DC045B',
  warning: '#DF7B11',
} as const;

export const theme = {
  spacing,
  palette,
  typography,
};
