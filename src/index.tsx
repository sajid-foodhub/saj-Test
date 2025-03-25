export function multiply(a: number, b: number): number {
  return a * b;
}

export { default as Typography } from './SliceUI/typography/Typography';

export { default as Icon } from './SliceUI/icon/Icon';

export { default as Button } from './SliceUI/button/Button';

export {
  SliceThemeProvider,
  useSliceTheme,
} from './SliceUI/contextProvider/context';

export {
  useDeviceBreakpoint,
  withDeviceBreakpoint,
} from './SliceUI/responsive/useDeviceBreakPoint';

export { colors } from './SliceUI/colors/Pallete';

export { DarkColorTokens, LightColorTokens } from './SliceUI/colors/Token';

export { theme } from './SliceUI/theme/theme';
