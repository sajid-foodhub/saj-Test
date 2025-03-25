import { colors as pallete } from './Pallete';
import type { ColorTokens } from './Type';

export const LightColorTokens = (
  colors: typeof pallete,
  accentColor: string
): ColorTokens => {
  return {
    colorAccentPrimary: accentColor,
    colorActionSuccess: colors.green[500],
    colorActionNegative: colors.red[500],
    colorBackgroundPrimary: colors.white[1000],
    colorBackgroundSecondary: colors.slate[300],
    colorBackgroundTertiary: colors.slate[200],
    colorBackgroundLight: colors.slate[100],
    colorBackgroundElevated: colors.white[1000],
    colorBackgroundModal: colors.white[1000],
    colorBorderStrong: colors.slate[1000],
    colorBorderMedium: colors.slate[400],
    colorBorderSubtle: colors.slate[300],
    colorBorderLight: colors.slate[200],
    colorBorderLighter: colors.slate[100],
    colorBorderAlpha: colors.neutral.a50,
    colorContrastWhite: colors.white[1000],
    colorContrastBlack: colors.neutral[1000],
    colorForegroundPrimary: colors.neutral[1000],
    colorForegroundSecondary: colors.neutral[600],
    colorForegroundTertiary: colors.neutral[500],
    colorForegroundLight: colors.neutral[400],
    colorForegroundLink: colors.neutral[500],
    colorStatePrimaryDisabled: colors.neutral.a100,
    colorStatePrimaryHover: colors.neutral.a50,
    colorStatePrimaryPressed: colors.neutral.a150,
    colorStateAccentCODisabled: colors.Primary.a150,
    colorStateAccentCOHover1: colors.Primary[400],
    colorStateAccentCOHover2: colors.Primary.a50,
    colorStateAccentCOPressed1: colors.Primary[600],
    colorStateAccentCOPressed2: colors.Primary.a100,
  };
};

export const DarkColorTokens = (
  colors: typeof pallete,
  accentColor: string
): ColorTokens => {
  return {
    colorAccentPrimary: accentColor,
    colorActionSuccess: colors.green[500],
    colorActionNegative: colors.red[500],
    colorBackgroundPrimary: colors.white[1000],
    colorBackgroundSecondary: colors.slate[300],
    colorBackgroundTertiary: colors.slate[200],
    colorBackgroundLight: colors.slate[100],
    colorBackgroundElevated: colors.white[1000],
    colorBackgroundModal: colors.white[1000],
    colorBorderStrong: colors.slate[1000],
    colorBorderMedium: colors.slate[400],
    colorBorderSubtle: colors.slate[300],
    colorBorderLight: colors.slate[200],
    colorBorderLighter: colors.slate[100],
    colorBorderAlpha: colors.neutral.a50,
    colorContrastWhite: colors.white[1000],
    colorContrastBlack: colors.neutral[1000],
    colorForegroundPrimary: colors.neutral[1000],
    colorForegroundSecondary: colors.neutral[600],
    colorForegroundTertiary: colors.neutral[500],
    colorForegroundLight: colors.neutral[400],
    colorForegroundLink: colors.neutral[500],
    colorStatePrimaryDisabled: colors.neutral.a100,
    colorStatePrimaryHover: colors.neutral.a50,
    colorStatePrimaryPressed: colors.neutral.a150,
    colorStateAccentCODisabled: colors.Primary.a150,
    colorStateAccentCOHover1: colors.Primary[400],
    colorStateAccentCOHover2: colors.Primary.a50,
    colorStateAccentCOPressed1: colors.Primary[600],
    colorStateAccentCOPressed2: colors.Primary.a100,
  };
};
