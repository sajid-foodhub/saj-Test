import { PixelRatio } from 'react-native';

import { Dimensions } from 'react-native';
import type { VariantBreakPoints } from './Type';

export const Breakpoints = {
  xs: 0, // Extra small
  sm: 576, // Small
  md: 768, // Medium
  lg: 992, // Large
  xl: 1200, // Extra large
  xxl: 1400, // Extra extra large
};

export const getDeviceBreakpoint = (): keyof typeof Breakpoints => {
  const { width } = Dimensions.get('window');

  if (width >= Breakpoints.xxl) return 'xxl';
  if (width >= Breakpoints.xl) return 'xl';
  if (width >= Breakpoints.lg) return 'lg';
  if (width >= Breakpoints.md) return 'md';
  if (width >= Breakpoints.sm) return 'sm';
  return 'xs';
};

// Helper function to scale font based on system settings
export const scaleFont = (size: string | number | undefined) => {
  if (typeof size === 'number') {
    return size * PixelRatio.getFontScale();
  }
  return size; // Return string or undefined as is
};

export const getDeviceVariantByBreakPoint = (
  variantBreakPoints: VariantBreakPoints | string
) => {
  if (typeof variantBreakPoints === 'string') {
    return variantBreakPoints;
  }
  const deviceSize = getDeviceBreakpoint();
  return variantBreakPoints[deviceSize];
};

export const resolveVariant = (
  variant: string | VariantBreakPoints,
  breakpoint: keyof VariantBreakPoints
): string => {
  return typeof variant === 'string'
    ? variant
    : variant[breakpoint] || variant.default;
};
