import type { TextStyle } from 'react-native';
import type { TYPOGRAPHY_STYLES } from './Token';
import type { VariantBreakPoints } from '../responsive/Type';


export type TypographyStyleKeys = keyof typeof TYPOGRAPHY_STYLES;

export type TypographyVariants = Record<string, TextStyle>;
export type FontWeight = TextStyle['fontWeight'];

export interface TypographyViewProps {
  screenName?: string; // Screen name
  id?: string; // Element ID
  children: string | string[]; // Text content
  variant?: string | VariantBreakPoints; // Typography style variant (default: 'display1Black')
  style?: TextStyle; // Optional custom styles
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined; // Text alignment (default: 'left')
  spacing?: number; // Line spacing (default: 0),
  extraProps?: any;
}



