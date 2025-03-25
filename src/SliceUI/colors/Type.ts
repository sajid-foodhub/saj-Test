import type { Theme } from '@react-navigation/native';

export interface ColorTokens {
  colorAccentPrimary: string;
  colorActionSuccess: string;
  colorActionNegative: string;
  colorBackgroundPrimary: string;
  colorBackgroundSecondary: string;
  colorBackgroundTertiary: string;
  colorBackgroundLight: string;
  colorBackgroundElevated: string;
  colorBackgroundModal: string;
  colorBorderStrong: string;
  colorBorderMedium: string;
  colorBorderSubtle: string;
  colorBorderLight: string;
  colorBorderLighter: string;
  colorBorderAlpha: string;

  colorContrastWhite: string;
  colorContrastBlack: string;

  colorForegroundPrimary: string;
  colorForegroundSecondary: string;
  colorForegroundTertiary: string;
  colorForegroundLight: string;
  colorForegroundLink: string;
  colorStatePrimaryDisabled: string;
  colorStatePrimaryHover: string;
  colorStatePrimaryPressed: string;
  colorStateAccentCODisabled: string;
  colorStateAccentCOHover1: string;
  colorStateAccentCOHover2: string;
  colorStateAccentCOPressed1: string;
  colorStateAccentCOPressed2: string;
}

export interface ThemeColorTokens {
  light: ColorTokens;
  dark: ColorTokens;
}

export type ExtendedTheme = Theme & {
  colors: Theme['colors'] & ColorTokens;
};
